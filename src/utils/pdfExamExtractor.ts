import * as pdfjsLib from 'pdfjs-dist';
import { normalizeMathExpressionsToLatex } from './docxMathExtractor';

// Cấu hình worker cho pdfjs-dist trong Vite
try {
  pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url
  ).toString();
} catch {
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;
}

/**
 * Chuyển ArrayBuffer sang chuỗi Base64
 */
function arrayBufferToBase64(buffer: ArrayBuffer): string {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    const chunk = bytes.subarray(i, i + chunkSize);
    binary += String.fromCharCode.apply(null, Array.from(chunk));
  }
  return btoa(binary);
}

interface PositionedItem {
  str: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

interface PdfLineBand {
  y: number;
  minX: number;
  maxX: number;
  height: number;
  text: string;
  items: PositionedItem[];
}

/**
 * Ghép các phần tử text trên cùng 1 dòng có xét chỉ số trên (superscript x^2, x^3, ^\circ) và chỉ số dưới (subscript x_1)
 */
function buildLineTextWithMathSubSup(lineItems: PositionedItem[], baseLineY: number, baseHeight: number): string {
  lineItems.sort((a, b) => a.x - b.x);
  let out = '';
  let prevEndX = -Infinity;

  for (let i = 0; i < lineItems.length; i++) {
    const it = lineItems[i];
    const raw = it.str;
    if (!raw) continue;

    const dy = it.y - baseLineY;
    const gapX = prevEndX === -Infinity ? 0 : it.x - prevEndX;
    const isSmallerFont = it.height > 0 && baseHeight > 0 && it.height < baseHeight * 0.86;
    const cleanToken = raw.trim();

    // Nhận diện số mũ (superscript): lệch lên trên từ 2.0pt đến 7.5pt và đứng sát ký tự cơ số trước đó
    if (
      i > 0 &&
      dy >= 2.0 &&
      dy <= 7.5 &&
      gapX <= 6 &&
      cleanToken.length <= 6 &&
      (isSmallerFont || /^[0-9+\-nxyk'′°o()]+$/i.test(cleanToken)) &&
      /[a-zA-Z0-9\)\]]$/.test(out.trimEnd())
    ) {
      out = out.trimEnd();
      if (cleanToken === 'o' || cleanToken === '0' || cleanToken === '°') {
        out += '$^\\circ$';
      } else if (cleanToken === "'" || cleanToken === '′') {
        out += "'";
      } else {
        out += `$^{${cleanToken}}$`;
      }
      prevEndX = it.x + (it.width || cleanToken.length * 4);
      continue;
    }

    // Nhận diện chỉ số dưới (subscript): lệch xuống dưới từ -6.5pt đến -1.8pt
    if (
      i > 0 &&
      dy <= -1.8 &&
      dy >= -6.5 &&
      gapX <= 6 &&
      cleanToken.length <= 6 &&
      (isSmallerFont || /^[0-9+\-nxykijABCD]+$/i.test(cleanToken)) &&
      /[a-zA-Z0-9\)]$/.test(out.trimEnd())
    ) {
      out = out.trimEnd();
      out += `$_{${cleanToken}}$`;
      prevEndX = it.x + (it.width || cleanToken.length * 4);
      continue;
    }

    if (prevEndX !== -Infinity) {
      if (gapX > 14) {
        out += '    ';
      } else if (gapX > 1.8 && !out.endsWith(' ') && !raw.startsWith(' ')) {
        out += ' ';
      }
    }

    out += raw;
    prevEndX = it.x + (it.width || raw.length * 4.5);
  }

  // Hợp nhất cơ số liền trước $...$ (ví dụ: x$^{3}$ -> $x^{3}$)
  return out
    .replace(/([a-zA-Z0-9\)\}])\$\^\{([^}]+)\}\$/g, '$$$1^{$2}$$')
    .replace(/([a-zA-Z0-9\)\}])\$_\{([^}]+)\}\$/g, '$$$1_{$2}$$')
    .replace(/(\d+)\$\^\\circ\$/g, '$$$1^\\circ$$')
    .trim();
}

/**
 * Cắt vùng hình vẽ / đồ thị / bảng biến thiên trên trang PDF bằng Offscreen Canvas
 * Trả về chuỗi data:image/png;base64,... nếu vùng đó thực sự có nét vẽ đồ họa
 */
function cropFigureRegionFromCanvas(
  pageCanvas: HTMLCanvasElement,
  scale: number,
  pageHeightPt: number,
  pageWidthPt: number,
  topPdfY: number,
  bottomPdfY: number,
  minPdfX: number = 20,
  maxPdfX: number = pageWidthPt - 20
): string | null {
  const ctx = pageCanvas.getContext('2d');
  if (!ctx) return null;

  // Chuyển từ hệ tọa độ PDF (gốc dưới-trái, Y hướng lên) sang hệ tọa độ Canvas (gốc trên-trái, Y hướng xuống)
  const rawY1 = Math.floor((pageHeightPt - topPdfY) * scale);
  const rawY2 = Math.ceil((pageHeightPt - bottomPdfY) * scale);
  const rawX1 = Math.floor(minPdfX * scale);
  const rawX2 = Math.ceil(maxPdfX * scale);

  const x1 = Math.max(0, Math.min(pageCanvas.width - 1, rawX1));
  const x2 = Math.max(x1 + 1, Math.min(pageCanvas.width, rawX2));
  const y1 = Math.max(0, Math.min(pageCanvas.height - 1, rawY1));
  const y2 = Math.max(y1 + 1, Math.min(pageCanvas.height, rawY2));

  const w = x2 - x1;
  const h = y2 - y1;
  if (w < 45 || h < 35) return null;

  const imgData = ctx.getImageData(x1, y1, w, h);
  const data = imgData.data;

  let minDarkX = w;
  let maxDarkX = 0;
  let minDarkY = h;
  let maxDarkY = 0;
  let darkPixelCount = 0;

  for (let py = 0; py < h; py++) {
    for (let px = 0; px < w; px++) {
      const idx = (py * w + px) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const a = data[idx + 3];
      // Điểm ảnh không phải nền trắng
      if (a > 30 && (r < 238 || g < 238 || b < 238)) {
        darkPixelCount++;
        if (px < minDarkX) minDarkX = px;
        if (px > maxDarkX) maxDarkX = px;
        if (py < minDarkY) minDarkY = py;
        if (py > maxDarkY) maxDarkY = py;
      }
    }
  }

  // Cần có mật độ nét vẽ tối thiểu (tránh cắt nhầm vùng giấy trắng hoặc dấu chấm rác)
  const boxW = maxDarkX - minDarkX;
  const boxH = maxDarkY - minDarkY;
  if (darkPixelCount < 140 || boxW < 40 || boxH < 28) {
    return null;
  }

  const pad = Math.round(8 * scale);
  const cropX = Math.max(0, x1 + minDarkX - pad);
  const cropY = Math.max(0, y1 + minDarkY - pad);
  const cropW = Math.min(pageCanvas.width - cropX, boxW + pad * 2);
  const cropH = Math.min(pageCanvas.height - cropY, boxH + pad * 2);

  const outCanvas = document.createElement('canvas');
  outCanvas.width = cropW;
  outCanvas.height = cropH;
  const outCtx = outCanvas.getContext('2d');
  if (!outCtx) return null;

  outCtx.fillStyle = '#ffffff';
  outCtx.fillRect(0, 0, cropW, cropH);
  outCtx.drawImage(pageCanvas, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);

  return outCanvas.toDataURL('image/png');
}

/**
 * Trích xuất văn bản và tự động cắt hình vẽ / đồ thị / bảng biến thiên trực tiếp từ file PDF trên trình duyệt
 */
export async function extractTextAndFiguresFromPdfLocal(
  arrayBuffer: ArrayBuffer
): Promise<{ text: string; figuresBySectionQuestion: Map<string, string> }> {
  const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
  const pdf = await loadingTask.promise;
  const pageTexts: string[] = [];
  const figuresBySectionQuestion = new Map<string, string>();

  let currentSection = 'part1';

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const viewport = page.getViewport({ scale: 1.0 });
    const pageWidthPt = viewport.width;
    const pageHeightPt = viewport.height;

    const textContent = await page.getTextContent();
    const items: PositionedItem[] = [];

    for (const item of textContent.items as any[]) {
      if (typeof item.str === 'string' && item.str.trim().length > 0 && Array.isArray(item.transform)) {
        const fontH = Math.hypot(item.transform[2] || 0, item.transform[3] || 10);
        items.push({
          str: item.str,
          x: item.transform[4] || 0,
          y: item.transform[5] || 0,
          width: item.width || item.str.length * (fontH * 0.5),
          height: item.height || fontH || 11,
        });
      }
    }

    // Gom các item có cùng độ cao Y (sai số <= 4.2pt cho cùng dòng cơ sở, hoặc <= 6.5pt nếu là chỉ số trên/dưới ngắn)
    const lineGroups: { y: number; baseHeight: number; items: PositionedItem[] }[] = [];
    const sortedByY = [...items].sort((a, b) => b.y - a.y);

    for (const it of sortedByY) {
      const existing = lineGroups.find((l) => {
        const dy = Math.abs(l.y - it.y);
        if (dy <= 3.8) return true;
        if (dy <= 6.5 && it.str.trim().length <= 5 && it.height < l.baseHeight * 0.88) return true;
        return false;
      });

      if (existing) {
        existing.items.push(it);
      } else {
        lineGroups.push({
          y: it.y,
          baseHeight: it.height || 11,
          items: [it],
        });
      }
    }

    lineGroups.sort((a, b) => b.y - a.y);

    const bands: PdfLineBand[] = lineGroups.map((lg) => {
      const text = buildLineTextWithMathSubSup(lg.items, lg.y, lg.baseHeight);
      const minX = Math.min(...lg.items.map((i) => i.x));
      const maxX = Math.max(...lg.items.map((i) => i.x + i.width));
      return {
        y: lg.y,
        minX,
        maxX,
        height: lg.baseHeight,
        text,
        items: lg.items,
      };
    });

    // Kiểm tra xem trang này có khả năng chứa hình vẽ / đồ thị / bảng biến thiên không
    let pageCanvas: HTMLCanvasElement | null = null;
    const renderScale = 1.65;
    const ensurePageCanvas = async (): Promise<HTMLCanvasElement | null> => {
      if (pageCanvas) return pageCanvas;
      if (typeof document === 'undefined') return null;
      try {
        const vp = page.getViewport({ scale: renderScale });
        const canvas = document.createElement('canvas');
        canvas.width = Math.ceil(vp.width);
        canvas.height = Math.ceil(vp.height);
        const ctx = canvas.getContext('2d');
        if (!ctx) return null;
        await page.render({ canvasContext: ctx, viewport: vp, canvas } as any).promise;
        pageCanvas = canvas;
        return canvas;
      } catch {
        return null;
      }
    };

    const outputLines: string[] = [];
    let activeQuestionKey: string | null = null;
    let activeQuestionPromptMentionsFigure = false;
    let activeQuestionCapturedFigure = false;
    let questionStartBandIdx = -1;

    const flushSideFigureForQuestion = async (endBandIdx: number) => {
      if (
        !activeQuestionKey ||
        activeQuestionCapturedFigure ||
        !activeQuestionPromptMentionsFigure ||
        questionStartBandIdx < 0
      ) {
        return;
      }
      // Kiểm tra nếu hình vẽ nằm ở cột bên phải của câu hỏi (text chỉ chiếm nửa bên trái < 62% chiều rộng trang)
      const qBands = bands.slice(questionStartBandIdx, endBandIdx + 1);
      if (qBands.length === 0) return;
      const maxTextX = Math.max(...qBands.map((b) => b.maxX));
      if (maxTextX < pageWidthPt * 0.66) {
        const topY = qBands[0].y + qBands[0].height + 6;
        const botY = qBands[qBands.length - 1].y - 10;
        if (topY - botY >= 38) {
          const canvas = await ensurePageCanvas();
          if (canvas) {
            const cropped = cropFigureRegionFromCanvas(
              canvas,
              renderScale,
              pageHeightPt,
              pageWidthPt,
              topY,
              botY,
              maxTextX + 8,
              pageWidthPt - 15
            );
            if (cropped) {
              outputLines.push(`[HÌNH_VẼ:${cropped}]`);
              figuresBySectionQuestion.set(activeQuestionKey, cropped);
              activeQuestionCapturedFigure = true;
            }
          }
        }
      }
    };

    for (let bIdx = 0; bIdx < bands.length; bIdx++) {
      const band = bands[bIdx];
      const lineText = band.text;

      // Cập nhật Phần hiện tại nếu gặp tiêu đề Phần I, II, III, IV
      const secMatch = lineText.match(/^(?:[I1234V]+[\.\:\)]\s*)?(?:PHẦN|Phần|PHAN|Phan)\s*(I{1,3}|IV|1|2|3|4)\b/i);
      if (secMatch) {
        await flushSideFigureForQuestion(bIdx - 1);
        const token = secMatch[1].toUpperCase();
        if (token === 'I' || token === '1') currentSection = 'part1';
        else if (token === 'II' || token === '2') currentSection = 'part2';
        else if (token === 'III' || token === '3') currentSection = 'part3';
        else if (token === 'IV' || token === '4') currentSection = 'part4';
        activeQuestionKey = null;
      }

      // Kiểm tra bắt đầu câu hỏi mới "Câu X."
      const qMatch = lineText.match(/^(?:Câu|Cau|Bài|Bai|Question)\s*(\d+)\s*(?:[\.\:\;\)\-\/]|$|\s+)/i);
      if (qMatch) {
        await flushSideFigureForQuestion(bIdx - 1);
        const qNum = parseInt(qMatch[1], 10);
        activeQuestionKey = `${currentSection}:${qNum}`;
        activeQuestionPromptMentionsFigure = false;
        activeQuestionCapturedFigure = false;
        questionStartBandIdx = bIdx;
      }

      if (
        activeQuestionKey &&
        /(?:hình\s*vẽ|hình\s*bên|bảng\s*biến\s*thiên|bảng\s*xét\s*dấu|đồ\s*thị|như\s*hình|cho\s*bảng)/i.test(
          lineText
        )
      ) {
        activeQuestionPromptMentionsFigure = true;
      }

      outputLines.push(lineText);

      // Kiểm tra khoảng trống dọc giữa dòng hiện tại và dòng kế tiếp trong cùng câu hỏi
      if (activeQuestionKey && !activeQuestionCapturedFigure && bIdx + 1 < bands.length) {
        const nextBand = bands[bIdx + 1];
        const verticalGap = band.y - nextBand.y;
        const minGapThreshold = activeQuestionPromptMentionsFigure ? 34 : 52;

        if (verticalGap >= minGapThreshold) {
          const topCropY = band.y - 4;
          const bottomCropY = nextBand.y + nextBand.height + 2;
          if (topCropY - bottomCropY >= 30) {
            const canvas = await ensurePageCanvas();
            if (canvas) {
              const cropped = cropFigureRegionFromCanvas(
                canvas,
                renderScale,
                pageHeightPt,
                pageWidthPt,
                topCropY,
                bottomCropY
              );
              if (cropped) {
                outputLines.push(`[HÌNH_VẼ:${cropped}]`);
                figuresBySectionQuestion.set(activeQuestionKey, cropped);
                activeQuestionCapturedFigure = true;
              }
            }
          }
        }
      }
    }

    await flushSideFigureForQuestion(bands.length - 1);
    pageTexts.push(outputLines.join('\n'));
  }

  const rawJoined = pageTexts.join('\n\n').trim();
  return {
    text: normalizeMathExpressionsToLatex(rawJoined),
    figuresBySectionQuestion,
  };
}

/**
 * Trích xuất văn bản trực tiếp từ file PDF ngay trên trình duyệt bằng pdfjs-dist
 */
export async function extractTextFromPdfLocal(arrayBuffer: ArrayBuffer): Promise<string> {
  const { text } = await extractTextAndFiguresFromPdfLocal(arrayBuffer);
  return text;
}

/**
 * Ghép các hình vẽ cắt được từ trang PDF vào văn bản đề thi do AI trích xuất (nếu câu đó chưa có ảnh chụp)
 */
function mergeExtractedFiguresIntoExamText(
  examText: string,
  figuresBySectionQuestion: Map<string, string>
): string {
  if (figuresBySectionQuestion.size === 0) return examText;

  const lines = examText.split(/\r?\n/);
  const result: string[] = [];
  let currentSection = 'part1';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.replace(/<\/?u>/gi, '').trim();

    const secMatch = trimmed.match(/^(?:[I1234V]+[\.\:\)]\s*)?(?:PHẦN|Phần|PHAN|Phan)\s*(I{1,3}|IV|1|2|3|4)\b/i);
    if (secMatch) {
      const token = secMatch[1].toUpperCase();
      if (token === 'I' || token === '1') currentSection = 'part1';
      else if (token === 'II' || token === '2') currentSection = 'part2';
      else if (token === 'III' || token === '3') currentSection = 'part3';
      else if (token === 'IV' || token === '4') currentSection = 'part4';
    }

    result.push(line);

    const qMatch = trimmed.match(/^(?:Câu|Cau|Bài|Bai|Question)\s*(\d+)\s*(?:[\.\:\;\)\-\/]|$|\s+)/i);
    if (qMatch) {
      const qNum = parseInt(qMatch[1], 10);
      const key = `${currentSection}:${qNum}`;
      const figDataUrl = figuresBySectionQuestion.get(key);
      if (figDataUrl) {
        // Kiểm tra vài dòng tiếp theo xem đã có [HÌNH_VẼ:...] chưa
        const nextSlice = lines.slice(i + 1, i + 6).join('\n');
        if (!nextSlice.includes('[HÌNH_VẼ:')) {
          result.push(`[HÌNH_VẼ:${figDataUrl}]`);
        }
      }
    }
  }

  return result.join('\n');
}

/**
 * Nhận diện đề Toán từ file PDF:
 * - Chạy song song bộ trích xuất hình vẽ/văn bản cục bộ và API nhận diện thông minh (/api/parse-pdf)
 *   để vừa đạt tốc độ tối đa, vừa giữ nguyên công thức Toán LaTeX $...$, hình vẽ/đồ thị cắt từ PDF và đáp án đúng.
 */
export async function extractMathExamFromPdf(
  file: File,
  mode: 'smart' | 'fast' = 'smart'
): Promise<{ text: string; usedSmartMode: boolean }> {
  const arrayBuffer = await file.arrayBuffer();

  if (mode === 'fast') {
    const { text } = await extractTextAndFiguresFromPdfLocal(arrayBuffer.slice(0));
    return { text, usedSmartMode: false };
  }

  // Chạy song song trích xuất hình vẽ trên trình duyệt và nhận diện công thức từ server
  const localPromise = extractTextAndFiguresFromPdfLocal(arrayBuffer.slice(0)).catch(() => ({
    text: '',
    figuresBySectionQuestion: new Map<string, string>(),
  }));

  try {
    const base64Pdf = arrayBufferToBase64(arrayBuffer.slice(0));
    const response = await fetch('/api/parse-pdf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ base64Pdf }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data && typeof data.text === 'string' && data.text.trim().length > 0) {
        const localData = await localPromise;
        const mergedText = mergeExtractedFiguresIntoExamText(
          data.text.trim(),
          localData.figuresBySectionQuestion
        );
        return { text: mergedText, usedSmartMode: true };
      }
    }
  } catch (err) {
    console.warn('Chuyển sang trích xuất PDF cục bộ do lỗi kết nối API:', err);
  }

  const fallbackData = await localPromise;
  if (fallbackData.text) {
    return { text: fallbackData.text, usedSmartMode: false };
  }

  const fallbackText = await extractTextFromPdfLocal(arrayBuffer.slice(0));
  return { text: fallbackText, usedSmartMode: false };
}
