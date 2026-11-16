import {
  ExamSet,
  MultipleChoiceQuestion,
  TrueFalseQuestion,
  ShortAnswerQuestion,
  StepOrderingQuestion,
  TrueFalseStatement,
  SolutionStep,
} from '../types/exam';

export interface UnrecognizedQuestionItem {
  part: 'part1' | 'part2' | 'part3' | 'part4';
  partLabel: string;
  questionNumber: number;
  questionLabel: string;
  status: 'missing' | 'incomplete_structure' | 'missing_answer';
  reason: string;
}

export interface ParseResult {
  exam: ExamSet;
  warnings: string[];
  unrecognizedQuestions: UnrecognizedQuestionItem[];
  unrecognizedByPart: {
    part1: UnrecognizedQuestionItem[];
    part2: UnrecognizedQuestionItem[];
    part3: UnrecognizedQuestionItem[];
    part4: UnrecognizedQuestionItem[];
  };
  recognizedByPart: {
    part1: string[];
    part2: string[];
    part3: string[];
    part4: string[];
  };
  counts: {
    part1: number;
    part2: number;
    part3: number;
    part4: number;
    total: number;
  };
  stats: {
    mathFormulaCount: number;
    figureCount: number;
    tableCount: number;
    verifiedAnswerCount: number;
  };
}

type SectionHint = 'part1' | 'part2' | 'part3' | 'part4' | null;

const PART_LABELS: Record<'part1' | 'part2' | 'part3' | 'part4', string> = {
  part1: 'Phần I',
  part2: 'Phần II',
  part3: 'Phần III',
  part4: 'Phần IV',
};

/**
 * Tách các phương án A. B. C. D., mệnh đề a) b) c) d), hoặc tiêu đề Câu 1. Câu 2.
 * bị viết chung trên cùng 1 dòng (rất phổ biến trong đề Word dùng phím Tab hoặc PDF gộp dòng).
 * Không tách nếu dấu đó nằm bên trong cặp dấu $...$ của công thức LaTeX hoặc trong [HÌNH_VẼ:...].
 */
function splitInlineMarkersOutsideMath(line: string): string[] {
  const trimmed = line.trim();
  if (
    !trimmed ||
    trimmed.startsWith('[HÌNH_VẼ:') ||
    trimmed.startsWith('[BẢNG_TOÁN]') ||
    trimmed.startsWith('[/BẢNG_TOÁN]')
  ) {
    return [line];
  }

  const segments: string[] = [];
  let inMath = false;
  let lastSplitIndex = 0;

  for (let i = 0; i < line.length; i++) {
    if (line[i] === '$' && (i === 0 || line[i - 1] !== '\\')) {
      inMath = !inMath;
      continue;
    }
    if (inMath) continue;

    const prevChar = i > 0 ? line[i - 1] : '';
    const prevSlice = i >= 4 ? line.slice(i - 4, i).toUpperCase() : '';
    if (i > 0 && (/[\s\t]/.test(prevChar) || prevSlice === '[/U]')) {
      const rest = line.slice(i);
      const mcMatch = rest.match(
        /^(?:(?:\[U\])?\s*\*?\s*(?:\[U\])?[A-D](?:\[\/U\])?\s*[\.\:\)](?:\[\/U\])?(?:\s+|(?=\[U\]|\$)))/
      );
      const tfMatch = rest.match(
        /^(?:(?:\[U\])?\s*\*?\s*(?:\[U\])?[a-d](?:\[\/U\])?\s*\)(?:\[\/U\])?(?:\s+|(?=\[U\]|\$)))/i
      );
      const qHeaderMatch = rest.match(
        /^(?:(?:\[\/?U\])*\s*\*?\s*(?:\[\/?U\])*(?:Câu|CÂU|Bài|BÀI)\s*(?:\[\/?U\])*\s*\d+\s*(?:\[\/?U\])*\s*[\.\:\)]\s+)/
      );

      if (mcMatch || tfMatch || qHeaderMatch) {
        const prevPart = line.slice(lastSplitIndex, i).trim();
        if (prevPart.length > 0) {
          segments.push(prevPart);
          lastSplitIndex = i;
        }
      }
    }
  }

  const finalPart = line.slice(lastSplitIndex).trim();
  if (finalPart.length > 0) {
    segments.push(finalPart);
  }

  return segments.length > 0 ? segments : [line];
}

/**
 * Chuẩn hóa HTML từ Mammoth (.docx) hoặc từ Clipboard Word sang dạng văn bản có đánh dấu [U]...[/U] và [HÌNH_VẼ:...]
 */
export function normalizeWordHtmlToText(rawHtmlOrText: string): string {
  let text = (rawHtmlOrText || '').normalize('NFC');

  // 0. Bảo toàn thẻ <img src="..."> thành [HÌNH_VẼ:...]
  text = text.replace(/<img\b[^>]*src=["']([^"']+)["'][^>]*\/?>/gi, '\n[HÌNH_VẼ:$1]\n');

  // 1. Bảo toàn gạch chân hoặc màu chữ nổi bật từ inline style của Word/HTML
  text = text.replace(
    /<span\b[^>]*style=["'][^"']*(?:text-decoration\s*:\s*underline|color\s*:\s*(?:red|#ff0000|#c00000|#e00000|rgb\(\s*255\s*,\s*0\s*,\s*0\s*\)))[^"']*["'][^>]*>([\s\S]*?)<\/span>/gi,
    '[U]$1[/U]'
  );

  // 2. Đánh dấu các phần tử gạch chân <u>...</u> hoặc <ins>...</ins> bằng [U]...[/U]
  text = text.replace(/<u\b[^>]*>([\s\S]*?)<\/u>/gi, '[U]$1[/U]');
  text = text.replace(/<ins\b[^>]*>([\s\S]*?)<\/ins>/gi, '[U]$1[/U]');

  // 2b. Chuyển đổi chỉ số trên <sup> và chỉ số dưới <sub> từ Word sang chuẩn LaTeX
  text = text
    .replace(/<sup\b[^>]*>\s*(?:o|0|°)\s*<\/sup>/gi, '$^\\circ$')
    .replace(/<sup\b[^>]*>([\s\S]*?)<\/sup>/gi, (_, inner) => {
      const cleanInner = inner.replace(/<[^>]+>/g, '').trim();
      return cleanInner ? `$^{${cleanInner}}$` : '';
    })
    .replace(/<sub\b[^>]*>([\s\S]*?)<\/sub>/gi, (_, inner) => {
      const cleanInner = inner.replace(/<[^>]+>/g, '').trim();
      return cleanInner ? `$_{${cleanInner}}$` : '';
    });

  // 3. Thay thế các thẻ mở/đóng khối, bảng, danh sách thành xuống dòng để không bị dính chữ
  text = text
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/?(?:p|div|tr|li|ul|ol|h[1-6])\b[^>]*>/gi, '\n')
    .replace(/<\/?(?:td|th)\b[^>]*>/gi, '\n');

  // 4. Loại bỏ các thẻ HTML còn lại
  text = text.replace(/<[^>]+>/g, '');

  // 5. Giải mã các ký tự HTML phổ biến
  text = text
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&ndash;/gi, '-')
    .replace(/&mdash;/gi, '-');

  // 5b. Gộp cơ số với số mũ / chỉ số dưới vừa chuyển từ <sup>, <sub>
  text = text
    .replace(/([a-zA-Z0-9\)\}])\$\^\{([^}]+)\}\$/g, '$$$1^{$2}$$')
    .replace(/([a-zA-Z0-9\)\}])\$_\{([^}]+)\}\$/g, '$$$1_{$2}$$')
    .replace(/(\d+)\$\^\\circ\$/g, '$$$1^\\circ$$');

  // 6. Gộp các cặp [/U][U] liền kề và đẩy khoảng trắng thừa ra ngoài thẻ [U]...[/U]
  text = text
    .replace(/\[\/U\](\s*)\[U\]/gi, '$1')
    .replace(/\[U\]([ \t]+)/gi, '$1[U]')
    .replace(/([ \t]+)\[\/U\]/gi, '[/U]$1');

  return text;
}

/**
 * Tự động chuẩn hóa văn bản đề thi thô (bọc $...$ cho công thức rời rạc, chuẩn hóa tiêu đề Câu/Phần)
 */
export function autoFormatAndFixMathContent(rawContent: string): string {
  if (!rawContent) return '';
  let s = rawContent.normalize('NFC');

  // Bảo vệ các vùng đã nằm trong $...$, $$...$$, [HÌNH_VẼ:...], [BẢNG_TOÁN], \begin{tikzpicture}
  const saved: string[] = [];
  s = s.replace(
    /\[HÌNH_VẼ:[^\]]+\]|\[BẢNG_TOÁN\][\s\S]*?\[\/BẢNG_TOÁN\]|\\begin\{tikzpicture\}[\s\S]*?\\end\{tikzpicture\}|\$\$[\s\S]*?\$\$|\$[^\$]+?\$/g,
    (m) => {
      const idx = saved.length;
      saved.push(m);
      return `__HOLD_AUTO_${idx}__`;
    }
  );

  // Tự động bọc $...$ cho các biểu thức hàm số / phương trình phổ biến bị thiếu $
  s = s
    .replace(/\b(y\s*=\s*f\(x\)\s*=\s*[0-9a-zA-Z\+\-\*\/\^\(\)\s]+)(?=[\.\,\;\:\n]|$)/g, '$$$1$$')
    .replace(/\b(f'\(x\)\s*=\s*0)\b/g, '$$$1$$')
    .replace(/\b(y'\s*=\s*0)\b/g, '$$$1$$')
    .replace(/(\d+)\s*°/g, '$$$1^\\circ$$')
    .replace(/([a-zA-Z0-9\)\}])\s*²/g, '$$$1^2$$')
    .replace(/([a-zA-Z0-9\)\}])\s*³/g, '$$$1^3$$')
    .replace(/([a-zA-Z0-9\)\}])\s*⁴/g, '$$$1^4$$')
    .replace(/∀/g, '$$\\forall$$')
    .replace(/∃/g, '$$\\exists$$')
    .replace(/∉/g, '$$\\notin$$')
    .replace(/∈/g, '$$\\in$$')
    .replace(/≤|⩽/g, '$$\\le$$')
    .replace(/≥|⩾/g, '$$\\ge$$')
    .replace(/≠/g, '$$\\neq$$')
    .replace(/≈/g, '$$\\approx$$')
    .replace(/±/g, '$$\\pm$$')
    .replace(/∞/g, '$$\\infty$$')
    .replace(/⇔|⟺/g, '$$\\Leftrightarrow$$')
    .replace(/⇒|⟹/g, '$$\\Rightarrow$$')
    .replace(/ℝ/g, '$$\\mathbb{R}$$')
    .replace(/ℤ/g, '$$\\mathbb{Z}$$')
    .replace(/ℕ/g, '$$\\mathbb{N}$$')
    .replace(/ℚ/g, '$$\\mathbb{Q}$$');

  s = s.replace(/__HOLD_AUTO_(\d+)__/g, (_, idxStr) => {
    return saved[parseInt(idxStr, 10)] || '';
  });

  s = s.replace(/\$\s*\$/g, ' ');
  return s;
}

/**
 * Tự động nhận diện loại hình vẽ TikZ minh họa phù hợp cho câu hỏi Toán (cả Toán 12 & Toán THPT)
 * khi câu hỏi mô tả đồ thị / hình không gian nhưng chưa đính kèm ảnh bitmap
 */
function detectAutoTikzType(prompt: string): string | undefined {
  const p = prompt.toLowerCase();
  const mentionsVisual =
    /(?:hình\s*vẽ|hình\s*bên|đồ\s*thị|bảng\s*biến\s*thiên|bảng\s*xét\s*dấu|như\s*hình|minh\s*họa)/i.test(p);

  // Toán 12 - Khảo sát hàm số, tích phân, Oxyz, hình không gian
  if (p.includes('x^3 - 3x^2 + 2') && mentionsVisual) {
    return 'cubic_graph_d1';
  }
  if (p.includes('-x^3 + 3x + 1') && mentionsVisual) {
    return 'd8_p2_q2_graph';
  }
  if ((p.includes('2x - 1') || p.includes('2x-1')) && (p.includes('x - 1') || p.includes('x-1')) && mentionsVisual) {
    return 'rational_asymptotes_d1';
  }
  if ((p.includes('4 - x^2') || p.includes('4-x^2')) && p.includes('diện tích')) {
    return 'integral_area_parabola';
  }
  if (
    (p.includes("abcd.a'b'c'd'") || p.includes('hình hộp') || p.includes('hình lập phương')) &&
    (mentionsVisual || p.includes('overrightarrow') || p.includes('vectơ'))
  ) {
    return 'space_box_vectors';
  }
  if (p.includes('mặt phẳng') && p.includes('cắt ba trục tọa độ') && mentionsVisual) {
    return 'oxyz_plane_normal';
  }

  // Các mẫu hình học & đại số khác
  if (p.includes('a = 7') && p.includes('b = 8') && p.includes('c = 5')) {
    return 'triangle_heron';
  }
  if (p.includes('-x^2 + 4x - 3') || (p.includes('parabol') && p.includes('4x - 3'))) {
    return 'parabola_vertex_2_1';
  }
  if (p.includes('b = 5') && p.includes('c = 8') && p.includes('60')) {
    return 'triangle_60deg';
  }
  if (p.includes('a = 6') && p.includes('30^\\circ') && p.includes('ngoại tiếp')) {
    return 'triangle_sin_circumcircle';
  }
  if (p.includes('b = 3') && p.includes('c = 5') && p.includes('15')) {
    return 'triangle_obtuse_cos';
  }
  if (p.includes('[-2; 3]') && p.includes('(1;')) {
    return 'number_line_intersection';
  }
  if (p.includes('40 học sinh') && p.includes('bóng đá')) {
    return 'venn_diagram_40';
  }
  if (p.includes('100 học sinh') && p.includes('65')) {
    return 'venn_diagram_100';
  }
  if (p.includes('bờ sông') && p.includes('60')) {
    return 'river_triangulation';
  }
  return undefined;
}

/**
 * Kiểm tra xem dòng có phải là tiêu đề Phần (Phần I, Phần II, Phần III, Phần IV) không.
 */
function detectSectionHeader(
  line: string,
  currentSection: SectionHint,
  hasQuestionsInCurrentSection: boolean
): SectionHint {
  const clean = line
    .replace(/\[\/?U\]/gi, '')
    .replace(/[\u200B-\u200D\uFEFF]/g, '')
    .replace(/^[\s\*\#\-–—]+/, '')
    .trim();

  const match = clean.match(/^(?:[I1234V]+[\.\:\)]\s*)?(?:PHẦN|Phần|PHAN|Phan)\s*(I{1,3}|IV|1|2|3|4)\b/i);
  if (match) {
    const token = match[1].toUpperCase();
    if (token === 'I' || token === '1') return 'part1';
    if (token === 'II' || token === '2') {
      if (currentSection === 'part2' && hasQuestionsInCurrentSection) {
        return 'part3';
      }
      return 'part2';
    }
    if (token === 'III' || token === '3') return 'part3';
    if (token === 'IV' || token === '4') return 'part4';
  }

  // Hỗ trợ tiêu đề dạng "I. TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN", "II. TRẮC NGHIỆM ĐÚNG SAI", "III. TRẢ LỜI NGẮN", "IV. TỰ LUẬN"
  if (/^I[\.\:\)]\s*TRẮC\s*NGHIỆM\s*NHIỀU/i.test(clean)) return 'part1';
  if (/^II[\.\:\)]\s*(?:TRẮC\s*NGHIỆM\s*)?ĐÚNG\s*[\/\-]?\s*SAI/i.test(clean)) return 'part2';
  if (/^III[\.\:\)]\s*(?:TRẮC\s*NGHIỆM\s*)?TRẢ\s*LỜI\s*NGẮN/i.test(clean)) return 'part3';
  if (/^IV[\.\:\)]\s*TỰ\s*LUẬN/i.test(clean)) return 'part4';

  return null;
}

/**
 * Kiểm tra dòng có phải là tiêu đề kết thúc đề ("--- HẾT ---", "BẢNG ĐÁP ÁN") không
 */
function isEndOrAnswerTableHeader(line: string): boolean {
  const clean = line
    .replace(/\[\/?U\]/gi, '')
    .replace(/^[\s\*\#\-–—]+|[\s\*\#\-–—]+$/g, '')
    .trim();
  return /^(?:HẾT|BẢNG ĐÁP ÁN|ĐÁP ÁN(?: THAM KHẢO| CHI TIẾT)?)$/i.test(clean);
}

/**
 * Tạo danh sách đáp án chấp nhận được cho câu trả lời ngắn (hỗ trợ cả dấu phẩy và dấu chấm thập phân)
 */
function buildAcceptableShortAnswers(rawAns: string): string[] {
  const cleaned = rawAns
    .replace(/\[\/?U\]/gi, '')
    .replace(/^\$|\$$/g, '')
    .replace(/[\.\;]$/, '')
    .trim();
  if (!cleaned) return ['0'];

  const parts = cleaned
    .split(/\s*[;|]\s*/)
    .map((p) => p.trim())
    .filter(Boolean);

  const set = new Set<string>();
  for (const p of parts) {
    set.add(p);
    if (p.includes(',')) {
      set.add(p.replace(/,/g, '.'));
    }
    if (p.includes('.')) {
      set.add(p.replace(/\./g, ','));
    }
  }
  return Array.from(set);
}

/**
 * Làm sạch dòng tiêu đề "Câu 1." để lấy nội dung đề bài trên cùng dòng (nếu có)
 */
function stripQuestionPrefix(line: string): string {
  return line
    .replace(/[\u200B-\u200D\uFEFF]/g, '')
    .replace(
      /^(?:(?:\[\/?U\])|\s|\*|\#|•|\-)*?(?:Câu|Cau|Bài|Bai|Question)(?:(?:\[\/?U\])|\s)*?\d+(?:(?:\[\/?U\])|\s)*?(?:[\.\:\;\)\-\/](?:(?:\[\/?U\])|\s)*)?/i,
      ''
    )
    .trim();
}

/**
 * Xử lý chuỗi HTML hoặc Text từ file Word (.docx), PDF (.pdf) hoặc clipboard
 */
export function parseWordExamContent(rawHtmlOrText: string, examTitle: string = 'Đề tự luyện'): ParseResult {
  const warnings: string[] = [];
  const unrecognizedQuestions: UnrecognizedQuestionItem[] = [];
  const unrecognizedByPart: ParseResult['unrecognizedByPart'] = {
    part1: [],
    part2: [],
    part3: [],
    part4: [],
  };
  const recognizedByPart: ParseResult['recognizedByPart'] = {
    part1: [],
    part2: [],
    part3: [],
    part4: [],
  };

  let verifiedAnswerCount = 0;

  const addUnrecognized = (item: UnrecognizedQuestionItem) => {
    const exists = unrecognizedQuestions.some(
      (u) => u.part === item.part && u.questionNumber === item.questionNumber
    );
    if (!exists) {
      unrecognizedQuestions.push(item);
      unrecognizedByPart[item.part].push(item);
    }
  };

  const text = normalizeWordHtmlToText(rawHtmlOrText);

  interface RawQuestionBlock {
    sectionHint: SectionHint;
    explicitQuestionNum: number | null;
    lines: string[];
  }

  const questionBlocks: RawQuestionBlock[] = [];
  const initialLines = text.split(/\r?\n/);

  // Bảo vệ khối [BẢNG_TOÁN]...[/BẢNG_TOÁN] không bị tách dòng lẻ
  const rawLines: string[] = [];
  let insideMathTable = false;
  let mathTableBuffer: string[] = [];

  for (const initLine of initialLines) {
    const trimmedInit = initLine.trim();
    if (!trimmedInit) continue;

    if (trimmedInit.startsWith('[BẢNG_TOÁN]')) {
      insideMathTable = true;
      mathTableBuffer = [trimmedInit];
      if (trimmedInit.endsWith('[/BẢNG_TOÁN]')) {
        rawLines.push(mathTableBuffer.join('\n'));
        insideMathTable = false;
        mathTableBuffer = [];
      }
      continue;
    }

    if (insideMathTable) {
      mathTableBuffer.push(trimmedInit);
      if (trimmedInit.endsWith('[/BẢNG_TOÁN]')) {
        rawLines.push(mathTableBuffer.join('\n'));
        insideMathTable = false;
        mathTableBuffer = [];
      }
      continue;
    }

    const splitSegments = splitInlineMarkersOutsideMath(trimmedInit);
    for (const seg of splitSegments) {
      if (seg.trim()) rawLines.push(seg.trim());
    }
  }

  if (insideMathTable && mathTableBuffer.length > 0) {
    rawLines.push(mathTableBuffer.join('\n') + '\n[/BẢNG_TOÁN]');
  }

  let currentBlock: RawQuestionBlock | null = null;
  let currentSectionHint: SectionHint = null;
  let hasQuestionsInCurrentSection = false;
  let isInsideEndTable = false;

  const fallbackAnswerKeyMap: Record<number, 'A' | 'B' | 'C' | 'D'> = {};
  const fallbackPart2KeyMap: Record<number, Record<'a' | 'b' | 'c' | 'd', boolean>> = {};
  const fallbackPart3KeyMap: Record<number, string> = {};

  const mentionedNumbersByPart: Record<'part1' | 'part2' | 'part3' | 'part4', Set<number>> = {
    part1: new Set(),
    part2: new Set(),
    part3: new Set(),
    part4: new Set(),
  };
  const parsedNumbersByPart: Record<'part1' | 'part2' | 'part3' | 'part4', Set<number>> = {
    part1: new Set(),
    part2: new Set(),
    part3: new Set(),
    part4: new Set(),
  };

  const matchQuestionHeader = (line: string): number | null => {
    if (line.startsWith('[HÌNH_VẼ:') || line.startsWith('[BẢNG_TOÁN]')) return null;
    const cleanHeader = line
      .replace(/\[\/?U\]/gi, '')
      .replace(/[\u200B-\u200D\uFEFF]/g, '')
      .replace(/^[\s\*\#•\-–—]+/, '')
      .trim();
    const m = cleanHeader.match(/^(?:Câu|Cau|Bài|Bai|Question)\s*(\d+)\s*(?:[\.\:\;\)\-\/]|$|\s+)/i);
    if (!m) return null;
    return parseInt(m[1], 10);
  };

  for (const rawLine of rawLines) {
    const trimmed = rawLine.trim();
    if (!trimmed) continue;

    // 1. Kiểm tra tiêu đề Phần I, Phần II, Phần III, Phần IV
    const detectedSection = detectSectionHeader(
      trimmed,
      currentSectionHint,
      hasQuestionsInCurrentSection
    );
    if (detectedSection && !isInsideEndTable) {
      if (currentBlock && currentBlock.lines.length > 0) {
        questionBlocks.push(currentBlock);
        currentBlock = null;
      }
      currentSectionHint = detectedSection;
      hasQuestionsInCurrentSection = false;
      continue;
    }

    // 2. Kiểm tra dòng "--- HẾT ---" hoặc "BẢNG ĐÁP ÁN"
    if (isEndOrAnswerTableHeader(trimmed)) {
      if (currentBlock && currentBlock.lines.length > 0) {
        questionBlocks.push(currentBlock);
        currentBlock = null;
      }
      isInsideEndTable = true;
      continue;
    }

    if (isInsideEndTable) {
      const cleanTableLine = trimmed.replace(/\[\/?U\]/gi, '');
      // Đáp án Phần II dạng: Câu 1: Đ-S-Đ-S hoặc 1: ĐSĐS
      const tfMatches = cleanTableLine.matchAll(
        /(?:Câu\s*)?(\d+)\s*[\.\:\-]?\s*([ĐDSTF])\s*[\-\,\s]?\s*([ĐDSTF])\s*[\-\,\s]?\s*([ĐDSTF])\s*[\-\,\s]?\s*([ĐDSTF])\b/gi
      );
      for (const tm of tfMatches) {
        const qNum = parseInt(tm[1], 10);
        const isTrueChar = (c: string) => /^(?:Đ|D|T)$/i.test(c);
        fallbackPart2KeyMap[qNum] = {
          a: isTrueChar(tm[2]),
          b: isTrueChar(tm[3]),
          c: isTrueChar(tm[4]),
          d: isTrueChar(tm[5]),
        };
      }

      // Đáp án Phần I dạng: 1.A 2.B 3.C 4.D
      const mcMatches = cleanTableLine.matchAll(/(?:Câu\s*)?(\d+)\s*[\.\:\-]?\s*([A-D])\b/gi);
      for (const m of mcMatches) {
        const qNum = parseInt(m[1], 10);
        const ans = m[2].toUpperCase() as 'A' | 'B' | 'C' | 'D';
        if (!fallbackAnswerKeyMap[qNum]) {
          fallbackAnswerKeyMap[qNum] = ans;
        }
      }
      continue;
    }

    // Quét mọi đề cập "Câu <N>" trong dòng để đối chiếu câu bị sót
    if (!trimmed.startsWith('[HÌNH_VẼ:') && !trimmed.startsWith('[BẢNG_TOÁN]')) {
      const cleanScan = trimmed.replace(/\[\/?U\]/gi, '');
      const inlineMentions = cleanScan.matchAll(
        /(?:^|\s)(?:Câu|Cau|Bài|Bai|Question)\s*(\d+)\s*(?:[\.\:\;\)\-\/]|$)/gi
      );
      for (const im of inlineMentions) {
        const num = parseInt(im[1], 10);
        if (num > 0 && num <= 200) {
          const bucket = currentSectionHint || 'part1';
          mentionedNumbersByPart[bucket].add(num);
        }
      }
    }

    // 3. Kiểm tra dòng bắt đầu "Câu 1.", "Câu 2.", ...
    const qHeaderNum = matchQuestionHeader(trimmed);
    if (qHeaderNum !== null) {
      if (currentBlock && currentBlock.lines.length > 0) {
        questionBlocks.push(currentBlock);
      }
      hasQuestionsInCurrentSection = true;
      currentBlock = {
        sectionHint: currentSectionHint,
        explicitQuestionNum: qHeaderNum,
        lines: [trimmed],
      };
    } else if (currentBlock) {
      currentBlock.lines.push(trimmed);
    }
  }

  if (currentBlock && currentBlock.lines.length > 0) {
    questionBlocks.push(currentBlock);
  }

  const part1: MultipleChoiceQuestion[] = [];
  const part2: TrueFalseQuestion[] = [];
  const part3: ShortAnswerQuestion[] = [];
  const part4: StepOrderingQuestion[] = [];

  let qGlobalIndex = 1;

  for (let bIndex = 0; bIndex < questionBlocks.length; bIndex++) {
    const { sectionHint, explicitQuestionNum, lines: rawBlockLines } = questionBlocks[bIndex];
    if (!rawBlockLines || rawBlockLines.length === 0) continue;

    // 1. Tách khối hình vẽ \begin{tikzpicture} ... \end{tikzpicture} nếu có trong câu hỏi
    let extractedTikzCode: string | undefined;
    let extractedImageUrl: string | undefined;

    const joinedBlock = rawBlockLines.join('\n');
    const tikzMatch = joinedBlock.match(/\\begin\{tikzpicture\}[\s\S]*?\\end\{tikzpicture\}/);
    const blockWithoutTikz = tikzMatch
      ? joinedBlock.replace(/\\begin\{tikzpicture\}[\s\S]*?\\end\{tikzpicture\}/g, '')
      : joinedBlock;

    if (tikzMatch) {
      extractedTikzCode = tikzMatch[0].replace(/\[\/?U\]/gi, '').trim();
    }

    // 2. Tách hình ảnh trích xuất từ Word/PDF [HÌNH_VẼ:...] đầu tiên làm hình minh họa chính của câu hỏi
    const imgMatches = [...blockWithoutTikz.matchAll(/\[HÌNH_VẼ:([^\]]+)\]/g)];
    let blockCleanedImages = blockWithoutTikz;
    if (imgMatches.length > 0) {
      extractedImageUrl = imgMatches[0][1].trim();
      blockCleanedImages = blockWithoutTikz.replace(imgMatches[0][0], '');
    }

    // 3. Tách dòng nhưng bảo toàn khối [BẢNG_TOÁN]...[/BẢNG_TOÁN]
    const expandedLines: string[] = [];
    const rawSplitLines = blockCleanedImages.split(/\r?\n/);
    let inTable = false;
    let tableLines: string[] = [];

    for (const l of rawSplitLines) {
      const t = l.trim();
      if (!t) continue;
      if (t.startsWith('[BẢNG_TOÁN]')) {
        inTable = true;
        tableLines = [t];
        if (t.endsWith('[/BẢNG_TOÁN]')) {
          expandedLines.push(tableLines.join('\n'));
          inTable = false;
          tableLines = [];
        }
        continue;
      }
      if (inTable) {
        tableLines.push(t);
        if (t.endsWith('[/BẢNG_TOÁN]')) {
          expandedLines.push(tableLines.join('\n'));
          inTable = false;
          tableLines = [];
        }
        continue;
      }

      const splitParts = splitInlineMarkersOutsideMath(t);
      for (const sp of splitParts) {
        if (sp.trim()) expandedLines.push(sp.trim());
      }
    }

    if (expandedLines.length === 0) continue;

    const firstLine = expandedLines[0];
    const questionNumber = explicitQuestionNum ?? matchQuestionHeader(firstLine) ?? qGlobalIndex++;

    // Tách phần lời giải nếu có ("Lời giải:", "HD:", "Hướng dẫn giải:")
    let explanation = '';
    const filteredLines: string[] = [];
    let isReadingExp = false;

    for (const l of expandedLines) {
      const cleanForExpCheck = l.replace(/\[\/?U\]/gi, '').trim();
      if (/^(?:Lời giải|Hướng dẫn giải|HDG|HD|Hướng dẫn|Giải)[\:\.]/i.test(cleanForExpCheck)) {
        isReadingExp = true;
        const firstExpLine = cleanForExpCheck
          .replace(/^(?:Lời giải|Hướng dẫn giải|HDG|HD|Hướng dẫn|Giải)[\:\.]/i, '')
          .trim();
        if (firstExpLine) {
          explanation = firstExpLine;
        }
      } else if (isReadingExp) {
        explanation += (explanation ? '\n' : '') + l.replace(/\[\/?U\]/gi, '').trim();
      } else {
        filteredLines.push(l);
      }
    }

    // Các mẫu nhận diện dòng
    const optRegex =
      /^(?:\[U\])?\s*(\*)?\s*(?:\[U\])?([A-D])(?:\[\/U\])?\s*(\*)?\s*[\.\:\)](?:\[\/U\])?\s*(.*)$/i;
    const optStrictUpperRegex =
      /^(?:\[U\])?\s*(\*)?\s*(?:\[U\])?([A-D])(?:\[\/U\])?\s*(\*)?\s*[\.\:\)](?:\[\/U\])?\s*(.*)$/;
    const stRegex =
      /^(?:\[U\])?\s*(\*)?\s*(?:\[U\])?([a-d])(?:\[\/U\])?\s*(\*)?\s*[\.\)\:](?:\[\/U\])?\s*(.*)$/i;
    const shortAnsRegex =
      /^(?:\[\/?U\])*\s*(?:Đáp số|Đáp án|KQ|Kết quả|ĐS|Trả lời)\s*[\:\.\=]\s*(.*)$/i;
    const stepRegex =
      /^(?:\[\/?U\])*\s*(?:[\-\+•]\s*)?(?:Bước|Dòng|Ý)\s*(\d+)\s*[\:\.\-]\s*(.*)$/i;

    let targetPart: 'part1' | 'part2' | 'part3' | 'part4';

    const matchedPart2Count = filteredLines.slice(1).filter((l) => {
      if (/^(?:\[U\])?\s*\*?\s*(?:\[U\])?[a-d](?:\[\/U\])?\s*\*?\s*\)/i.test(l)) return true;
      if (sectionHint === 'part2' && stRegex.test(l)) return true;
      return false;
    }).length;

    const matchedPart1Count = filteredLines
      .slice(1)
      .filter((l) => (sectionHint === 'part1' ? optRegex.test(l) : optStrictUpperRegex.test(l))).length;

    const hasStepLines = filteredLines.slice(1).some((l) => stepRegex.test(l));
    const hasShortAnsLines = filteredLines.slice(1).some((l) => shortAnsRegex.test(l));

    if (sectionHint === 'part1') {
      targetPart = 'part1';
    } else if (sectionHint === 'part2') {
      targetPart = 'part2';
    } else if (sectionHint === 'part3') {
      targetPart = 'part3';
    } else if (sectionHint === 'part4') {
      targetPart = 'part4';
    } else if (matchedPart2Count >= 2) {
      targetPart = 'part2';
    } else if (matchedPart1Count >= 2) {
      targetPart = 'part1';
    } else if (hasStepLines) {
      targetPart = 'part4';
    } else if (hasShortAnsLines) {
      targetPart = 'part3';
    } else {
      targetPart = 'part3';
    }

    parsedNumbersByPart[targetPart].add(questionNumber);
    mentionedNumbersByPart[targetPart].add(questionNumber);

    // --- XỬ LÝ TỪNG PHẦN ---
    if (targetPart === 'part1') {
      const promptLines: string[] = [];
      const options: { key: 'A' | 'B' | 'C' | 'D'; content: string; isCorrect: boolean }[] = [];
      let explicitAnswer: 'A' | 'B' | 'C' | 'D' | null = null;

      const cleanFirst = stripQuestionPrefix(firstLine);
      if (cleanFirst) promptLines.push(cleanFirst);

      for (let i = 1; i < filteredLines.length; i++) {
        const line = filteredLines[i];
        const cleanLineNoU = line.replace(/\[\/?U\]/gi, '').trim();
        const ansLineMatch = cleanLineNoU.match(
          /^(?:Đáp án(?:\s*đúng)?|Chọn)\s*[\:\.\-]?\s*([A-D])\b/i
        );
        if (ansLineMatch) {
          explicitAnswer = ansLineMatch[1].toUpperCase() as 'A' | 'B' | 'C' | 'D';
          continue;
        }

        const match = line.match(optRegex);
        if (match && !line.startsWith('[BẢNG_TOÁN]')) {
          const starBefore = Boolean(match[1]);
          const key = match[2].toUpperCase() as 'A' | 'B' | 'C' | 'D';
          const starAfter = Boolean(match[3]);
          let content = match[4].trim();

          const isUnderlined =
            line.includes('[U]') ||
            line.includes('[/U]') ||
            line.includes('<u>') ||
            starBefore ||
            starAfter ||
            content.startsWith('*');

          content = content
            .replace(/^\*\s*/, '')
            .replace(/\[\/?U\]/gi, '')
            .replace(/<\/?u>/gi, '')
            .trim();

          options.push({ key, content, isCorrect: isUnderlined });
        } else if (options.length === 0) {
          promptLines.push(line);
        } else {
          options[options.length - 1].content += ' ' + line.replace(/\[\/?U\]/gi, '').trim();
        }
      }

      if (options.length === 0 && promptLines.length >= 5) {
        const optLines = promptLines.splice(promptLines.length - 4, 4);
        const keys: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];
        optLines.forEach((ol, idx) => {
          const isUnderlined = ol.includes('[U]') || ol.includes('[/U]') || ol.startsWith('*');
          options.push({
            key: keys[idx],
            content: ol.replace(/^\*\s*/, '').replace(/\[\/?U\]/gi, '').trim(),
            isCorrect: isUnderlined,
          });
        });
      }

      let correctAnswer: 'A' | 'B' | 'C' | 'D' = 'A';
      let hasRecognizedAnswer = false;
      const underlinedOpt = options.find((o) => o.isCorrect);
      if (underlinedOpt) {
        correctAnswer = underlinedOpt.key;
        hasRecognizedAnswer = true;
      } else if (explicitAnswer) {
        correctAnswer = explicitAnswer;
        hasRecognizedAnswer = true;
      } else if (explanation) {
        const expAnsMatch = explanation.match(
          /(?:Chọn(?:\s*đáp\s*án)?|Đáp\s*án(?:\s*đúng)?(?:\s*là)?|Vậy\s*chọn)\s*[\:\.]?\s*([A-D])\b/i
        );
        if (expAnsMatch) {
          correctAnswer = expAnsMatch[1].toUpperCase() as 'A' | 'B' | 'C' | 'D';
          hasRecognizedAnswer = true;
        }
      } else if (fallbackAnswerKeyMap[questionNumber]) {
        correctAnswer = fallbackAnswerKeyMap[questionNumber];
        hasRecognizedAnswer = true;
      }

      if (hasRecognizedAnswer) verifiedAnswerCount++;

      const cleanPrompt = promptLines.join('\n').replace(/\[\/?U\]/gi, '').trim();
      const foundOptionKeys = new Set(options.filter((o) => o.content.trim().length > 0).map((o) => o.key));
      const missingOptionKeys = (['A', 'B', 'C', 'D'] as const).filter((k) => !foundOptionKeys.has(k));

      if (!cleanPrompt) {
        addUnrecognized({
          part: 'part1',
          partLabel: PART_LABELS.part1,
          questionNumber,
          questionLabel: `Câu ${questionNumber}`,
          status: 'incomplete_structure',
          reason: 'Chưa nhận dạng được nội dung đề bài',
        });
        warnings.push(`Phần I - Câu ${questionNumber}: Chưa nhận dạng được nội dung đề bài.`);
      } else if (missingOptionKeys.length === 4) {
        addUnrecognized({
          part: 'part1',
          partLabel: PART_LABELS.part1,
          questionNumber,
          questionLabel: `Câu ${questionNumber}`,
          status: 'incomplete_structure',
          reason: 'Chưa nhận dạng được các phương án A, B, C, D',
        });
        warnings.push(`Phần I - Câu ${questionNumber}: Chưa nhận dạng được các phương án A, B, C, D.`);
      } else if (missingOptionKeys.length > 0) {
        addUnrecognized({
          part: 'part1',
          partLabel: PART_LABELS.part1,
          questionNumber,
          questionLabel: `Câu ${questionNumber}`,
          status: 'incomplete_structure',
          reason: `Thiếu phương án ${missingOptionKeys.join(', ')}`,
        });
        warnings.push(`Phần I - Câu ${questionNumber}: Thiếu phương án ${missingOptionKeys.join(', ')}.`);
      } else if (!hasRecognizedAnswer) {
        addUnrecognized({
          part: 'part1',
          partLabel: PART_LABELS.part1,
          questionNumber,
          questionLabel: `Câu ${questionNumber}`,
          status: 'missing_answer',
          reason: 'Chưa gạch chân đáp án đúng (tạm mặc định A)',
        });
        warnings.push(
          `Phần I - Câu ${questionNumber}: Chưa gạch chân đáp án đúng (tạm mặc định chọn A).`
        );
      } else {
        recognizedByPart.part1.push(`Câu ${questionNumber}`);
      }

      const formattedOptions = (['A', 'B', 'C', 'D'] as const).map((k) => {
        const found = options.find((o) => o.key === k);
        return {
          key: k,
          content: found && found.content ? found.content : `Phương án ${k}`,
        };
      });

      part1.push({
        id: `custom_p1_q${part1.length + 1}`,
        part: 'part1',
        number: part1.length + 1,
        topic: 'Trắc nghiệm nhiều lựa chọn',
        prompt: cleanPrompt || `Câu ${questionNumber}`,
        options: formattedOptions,
        correctAnswer,
        explanation: explanation || 'Xem lại kiến thức và công thức liên quan.',
        pedagogicalTip: 'Phân tích kỹ giả thiết và kiểm tra cẩn thận các phương án trước khi chọn.',
        points: 0.25,
        tikzType: extractedTikzCode
          ? 'custom'
          : extractedImageUrl
          ? undefined
          : detectAutoTikzType(cleanPrompt),
        tikzCode: extractedTikzCode,
        imageUrl: extractedImageUrl,
      });
    } else if (targetPart === 'part2') {
      // --- Xử lý Phần II: Trắc nghiệm Đúng / Sai ---
      const promptLines: string[] = [];
      const statements: TrueFalseStatement[] = [];

      const cleanFirst = stripQuestionPrefix(firstLine);
      if (cleanFirst) promptLines.push(cleanFirst);

      for (let i = 1; i < filteredLines.length; i++) {
        const line = filteredLines[i];
        const match = line.match(stRegex);
        if (match && !line.startsWith('[BẢNG_TOÁN]')) {
          const starBefore = Boolean(match[1]);
          const label = match[2].toLowerCase() as 'a' | 'b' | 'c' | 'd';
          const starAfter = Boolean(match[3]);
          let content = match[4].trim();

          const explicitTrue =
            /(?:[\[\(]\s*(?:Đúng|Đ|True)\s*[\]\)]|\-\>\s*Đúng|\:\s*Đúng)\s*$/i.test(content);
          const explicitFalse =
            /(?:[\[\(]\s*(?:Sai|S|False)\s*[\]\)]|\-\>\s*Sai|\:\s*Sai)\s*$/i.test(content);

          const hasUnderlineOrStar =
            line.includes('[U]') ||
            line.includes('[/U]') ||
            line.includes('<u>') ||
            starBefore ||
            starAfter ||
            content.startsWith('*');

          const isCorrect = explicitFalse ? false : explicitTrue ? true : hasUnderlineOrStar;

          content = content
            .replace(/^\*\s*/, '')
            .replace(/\[\/?U\]/gi, '')
            .replace(/<\/?u>/gi, '')
            .replace(
              /(?:[\[\(]\s*(?:Đúng|Sai|Đ|S|True|False)\s*[\]\)]|\-\>\s*(?:Đúng|Sai))\s*$/gi,
              ''
            )
            .trim();

          statements.push({
            id: label,
            label,
            statement: content,
            isCorrect,
            explanation: `Mệnh đề ${label}) là ${isCorrect ? 'Đúng' : 'Sai'}.`,
          });
        } else if (statements.length === 0) {
          promptLines.push(line);
        } else {
          if (line.includes('[U]') || line.includes('[/U]')) {
            statements[statements.length - 1].isCorrect = true;
            statements[statements.length - 1].explanation = `Mệnh đề ${
              statements[statements.length - 1].label
            }) là Đúng.`;
          }
          statements[statements.length - 1].statement +=
            ' ' + line.replace(/\[\/?U\]/gi, '').trim();
        }
      }

      if (statements.length === 0 && promptLines.length >= 5) {
        const stLines = promptLines.splice(promptLines.length - 4, 4);
        const labels: ('a' | 'b' | 'c' | 'd')[] = ['a', 'b', 'c', 'd'];
        stLines.forEach((sl, idx) => {
          const isCorrect = sl.includes('[U]') || sl.includes('[/U]') || sl.startsWith('*');
          const lbl = labels[idx];
          statements.push({
            id: lbl,
            label: lbl,
            statement: sl.replace(/^\*\s*/, '').replace(/\[\/?U\]/gi, '').trim(),
            isCorrect,
            explanation: `Mệnh đề ${lbl}) là ${isCorrect ? 'Đúng' : 'Sai'}.`,
          });
        });
      }

      // Kiểm tra trong BẢNG ĐÁP ÁN hoặc phần Lời giải nếu các ý chưa có gạch chân
      const hasAnyUnderlined = statements.some((s) => s.isCorrect);
      if (!hasAnyUnderlined) {
        if (fallbackPart2KeyMap[questionNumber]) {
          const keyMap = fallbackPart2KeyMap[questionNumber];
          statements.forEach((st) => {
            if (keyMap[st.label] !== undefined) {
              st.isCorrect = keyMap[st.label];
              st.explanation = `Mệnh đề ${st.label}) là ${st.isCorrect ? 'Đúng' : 'Sai'}.`;
            }
          });
        } else if (explanation) {
          statements.forEach((st) => {
            const lblRegex = new RegExp(
              `(?:^|\\n|\\s)${st.label}[\\)\\.]\\s*(?:Chọn\\s*)?(Đúng|Sai|Đ|S)\\b`,
              'i'
            );
            const m = explanation.match(lblRegex);
            if (m) {
              st.isCorrect = /^(?:Đúng|Đ)$/i.test(m[1]);
              st.explanation = `Mệnh đề ${st.label}) là ${st.isCorrect ? 'Đúng' : 'Sai'}.`;
            }
          });
        }
      }

      const cleanPrompt = promptLines.join('\n').replace(/\[\/?U\]/gi, '').trim();
      const foundLabels = new Set(
        statements.filter((s) => s.statement.trim().length > 0).map((s) => s.label)
      );
      const missingLabels = (['a', 'b', 'c', 'd'] as const).filter((l) => !foundLabels.has(l));

      if (!cleanPrompt) {
        addUnrecognized({
          part: 'part2',
          partLabel: PART_LABELS.part2,
          questionNumber,
          questionLabel: `Câu ${questionNumber}`,
          status: 'incomplete_structure',
          reason: 'Chưa nhận dạng được nội dung đề bài',
        });
        warnings.push(`Phần II - Câu ${questionNumber}: Chưa nhận dạng được nội dung đề bài.`);
      } else if (missingLabels.length === 4) {
        addUnrecognized({
          part: 'part2',
          partLabel: PART_LABELS.part2,
          questionNumber,
          questionLabel: `Câu ${questionNumber}`,
          status: 'incomplete_structure',
          reason: 'Chưa nhận dạng được các mệnh đề a), b), c), d)',
        });
        warnings.push(`Phần II - Câu ${questionNumber}: Chưa nhận dạng được các mệnh đề a), b), c), d).`);
      } else if (missingLabels.length > 0) {
        addUnrecognized({
          part: 'part2',
          partLabel: PART_LABELS.part2,
          questionNumber,
          questionLabel: `Câu ${questionNumber}`,
          status: 'incomplete_structure',
          reason: `Thiếu mệnh đề ${missingLabels.map((l) => `${l})`).join(', ')}`,
        });
        warnings.push(
          `Phần II - Câu ${questionNumber}: Thiếu mệnh đề ${missingLabels.map((l) => `${l})`).join(', ')}.`
        );
      } else {
        recognizedByPart.part2.push(`Câu ${questionNumber}`);
        verifiedAnswerCount++;
      }

      const fullStatements = (['a', 'b', 'c', 'd'] as const).map((l) => {
        const found = statements.find((s) => s.label === l);
        return (
          found || {
            id: l,
            label: l,
            statement: `Mệnh đề ${l}`,
            isCorrect: false,
            explanation: '',
          }
        );
      });

      part2.push({
        id: `custom_p2_q${part2.length + 1}`,
        part: 'part2',
        number: part2.length + 1,
        topic: 'Trắc nghiệm Đúng / Sai',
        prompt: cleanPrompt || `Câu ${questionNumber}`,
        statements: fullStatements,
        pedagogicalTip: 'Đọc kỹ từng ý mệnh đề độc lập để xác định tính đúng sai.',
        tikzType: extractedTikzCode
          ? 'custom'
          : extractedImageUrl
          ? undefined
          : detectAutoTikzType(cleanPrompt),
        tikzCode: extractedTikzCode,
        imageUrl: extractedImageUrl,
      });
    } else if (targetPart === 'part4') {
      // --- Xử lý Phần IV: Tự luận ghép bước giải ---
      const allLines: string[] = [];
      const cleanFirst = stripQuestionPrefix(firstLine);
      if (cleanFirst) allLines.push(cleanFirst);
      for (let i = 1; i < filteredLines.length; i++) {
        allLines.push(filteredLines[i]);
      }

      const promptLines: string[] = [];
      const steps: SolutionStep[] = [];
      let stepCounter = 1;

      const hasExplicitStepPrefix = allLines.some((l) => stepRegex.test(l));

      if (hasExplicitStepPrefix) {
        for (const line of allLines) {
          const match = line.match(stepRegex);
          if (match) {
            const originalIdx = parseInt(match[1], 10) || stepCounter++;
            const content = match[2].replace(/\[\/?U\]/gi, '').trim();
            if (content) {
              steps.push({
                id: `custom_p4_q${part4.length + 1}_s${steps.length + 1}`,
                originalIndex: originalIdx,
                content,
                roleDescription: '',
              });
            }
          } else if (steps.length === 0) {
            promptLines.push(line);
          } else {
            steps[steps.length - 1].content += ' ' + line.replace(/\[\/?U\]/gi, '').trim();
          }
        }
      } else {
        if (allLines.length > 0) {
          promptLines.push(allLines[0]);
        }
        const rawStepLines = allLines.slice(1);
        rawStepLines.forEach((line) => {
          if (line.startsWith('[BẢNG_TOÁN]')) {
            promptLines.push(line);
            return;
          }
          const cleanStep = line
            .replace(/\[\/?U\]/gi, '')
            .replace(/^[\-\+•]\s*/, '')
            .trim();
          if (cleanStep) {
            steps.push({
              id: `custom_p4_q${part4.length + 1}_s${steps.length + 1}`,
              originalIndex: steps.length + 1,
              content: cleanStep,
              roleDescription: '',
            });
          }
        });
      }

      if (steps.length === 0 && explanation) {
        const expLines = explanation
          .split('\n')
          .map((l) =>
            l
              .replace(/^[\-\+•]\s*/, '')
              .replace(/^(?:Bước|Dòng|Ý)\s*\d+\s*[\:\.\-]\s*/i, '')
              .trim()
          )
          .filter(Boolean);
        expLines.forEach((stepText, idx) => {
          steps.push({
            id: `custom_p4_q${part4.length + 1}_s${idx + 1}`,
            originalIndex: idx + 1,
            content: stepText,
            roleDescription: '',
          });
        });
      }

      const cleanPrompt = promptLines.join('\n').replace(/\[\/?U\]/gi, '').trim();
      if (!cleanPrompt) {
        addUnrecognized({
          part: 'part4',
          partLabel: PART_LABELS.part4,
          questionNumber,
          questionLabel: `Câu ${questionNumber}`,
          status: 'incomplete_structure',
          reason: 'Chưa nhận dạng được đề bài tự luận',
        });
        warnings.push(`Phần IV - Câu ${questionNumber}: Chưa nhận dạng được đề bài tự luận.`);
      } else if (steps.length === 0) {
        addUnrecognized({
          part: 'part4',
          partLabel: PART_LABELS.part4,
          questionNumber,
          questionLabel: `Câu ${questionNumber}`,
          status: 'incomplete_structure',
          reason: 'Chưa nhận dạng được các dòng bước lời giải',
        });
        warnings.push(`Phần IV - Câu ${questionNumber}: Chưa nhận dạng được các bước lời giải.`);
      } else {
        recognizedByPart.part4.push(`Câu ${questionNumber}`);
        verifiedAnswerCount++;
      }

      part4.push({
        id: `custom_p4_q${part4.length + 1}`,
        part: 'part4',
        number: part4.length + 1,
        topic: 'Tự luận ghép thứ tự lời giải',
        problemStatement: cleanPrompt || `Câu ${questionNumber}`,
        conclusionTarget: 'Sắp xếp các bước suy luận theo thứ tự logic đúng.',
        steps:
          steps.length > 0
            ? steps
            : [
                {
                  id: `custom_p4_q${part4.length + 1}_s1`,
                  originalIndex: 1,
                  content: 'Đặt điều kiện và phân tích giả thiết bài toán',
                  roleDescription: '',
                },
                {
                  id: `custom_p4_q${part4.length + 1}_s2`,
                  originalIndex: 2,
                  content: 'Biến đổi phương trình / hệ thức tương đương',
                  roleDescription: '',
                },
                {
                  id: `custom_p4_q${part4.length + 1}_s3`,
                  originalIndex: 3,
                  content: 'Đối chiếu điều kiện và kết luận',
                  roleDescription: '',
                },
              ],
        pedagogicalTip: 'Đọc kỹ toàn bộ các bước và tìm mối liên hệ nhân quả logic.',
        teacherAnalysis: explanation || 'Phân tích mạch tư duy từ giả thiết đến kết luận.',
        points: 0.5,
        tikzType: extractedTikzCode
          ? 'custom'
          : extractedImageUrl
          ? undefined
          : detectAutoTikzType(cleanPrompt),
        tikzCode: extractedTikzCode,
        imageUrl: extractedImageUrl,
      });
    } else {
      // --- Xử lý Phần III: Trả lời ngắn ---
      const promptLines: string[] = [];
      let acceptableAnswers: string[] = ['0'];
      let foundShortAns = false;

      const cleanFirst = stripQuestionPrefix(firstLine);
      if (cleanFirst) promptLines.push(cleanFirst);

      for (let i = 1; i < filteredLines.length; i++) {
        const line = filteredLines[i];
        const match = line.match(shortAnsRegex);
        if (match) {
          const rawAns = match[1].trim();
          if (rawAns) {
            acceptableAnswers = buildAcceptableShortAnswers(rawAns);
            foundShortAns = true;
          }
        } else {
          promptLines.push(line);
        }
      }

      if (!foundShortAns) {
        const fullBlockText = promptLines.join('\n');
        const underlineMatches = [...fullBlockText.matchAll(/\[U\]([\s\S]*?)\[\/U\]/gi)];
        if (underlineMatches.length > 0) {
          const lastUnderlined = underlineMatches[underlineMatches.length - 1][1].trim();
          if (lastUnderlined && lastUnderlined.length <= 25) {
            acceptableAnswers = buildAcceptableShortAnswers(lastUnderlined);
            foundShortAns = true;
            const lastPromptLine = promptLines[promptLines.length - 1]
              ?.replace(/\[\/?U\]/gi, '')
              .trim();
            if (promptLines.length > 1 && lastPromptLine === lastUnderlined) {
              promptLines.pop();
            }
          }
        }
      }

      if (!foundShortAns && promptLines.length >= 2) {
        const lastLineClean = promptLines[promptLines.length - 1]
          .replace(/\[\/?U\]/gi, '')
          .replace(/^\$|\$$/g, '')
          .trim();
        if (/^[\-\+]?\d+(?:[\,\.\/]\d+)?$/.test(lastLineClean)) {
          acceptableAnswers = buildAcceptableShortAnswers(lastLineClean);
          foundShortAns = true;
          promptLines.pop();
        }
      }

      if (!foundShortAns && explanation) {
        const expShortMatch = explanation.match(
          /(?:Đáp số|Đáp án|Kết quả|KQ|ĐS|Vậy\s+[a-zA-Z0-9_]+\s*=)\s*[\:\.\=]?\s*([+\-]?\d+(?:[,\.]\d+)?)/i
        );
        if (expShortMatch && expShortMatch[1]) {
          acceptableAnswers = buildAcceptableShortAnswers(expShortMatch[1]);
          foundShortAns = true;
        }
      }

      if (!foundShortAns && fallbackPart3KeyMap[questionNumber]) {
        acceptableAnswers = buildAcceptableShortAnswers(fallbackPart3KeyMap[questionNumber]);
        foundShortAns = true;
      }

      if (foundShortAns) verifiedAnswerCount++;

      const cleanPrompt = promptLines.join('\n').replace(/\[\/?U\]/gi, '').trim();
      if (!cleanPrompt) {
        addUnrecognized({
          part: 'part3',
          partLabel: PART_LABELS.part3,
          questionNumber,
          questionLabel: `Câu ${questionNumber}`,
          status: 'incomplete_structure',
          reason: 'Chưa nhận dạng được nội dung câu hỏi',
        });
        warnings.push(`Phần III - Câu ${questionNumber}: Chưa nhận dạng được nội dung câu hỏi.`);
      } else if (!foundShortAns) {
        addUnrecognized({
          part: 'part3',
          partLabel: PART_LABELS.part3,
          questionNumber,
          questionLabel: `Câu ${questionNumber}`,
          status: 'missing_answer',
          reason: 'Chưa nhận dạng được Đáp số (cần ghi "Đáp số: ..." hoặc gạch chân đáp số)',
        });
        warnings.push(
          `Phần III - Câu ${questionNumber}: Chưa nhận dạng được Đáp số (tạm mặc định 0).`
        );
      } else {
        recognizedByPart.part3.push(`Câu ${questionNumber}`);
      }

      part3.push({
        id: `custom_p3_q${part3.length + 1}`,
        part: 'part3',
        number: part3.length + 1,
        topic: 'Câu hỏi trả lời ngắn',
        prompt: cleanPrompt || `Câu ${questionNumber}`,
        acceptableAnswers,
        explanation: explanation || `Đáp số chính xác: ${acceptableAnswers[0]}`,
        pedagogicalTip: 'Điền chính xác giá trị số nguyên hoặc số thập phân.',
        points: 0.5,
        tikzType: extractedTikzCode
          ? 'custom'
          : extractedImageUrl
          ? undefined
          : detectAutoTikzType(cleanPrompt),
        tikzCode: extractedTikzCode,
        imageUrl: extractedImageUrl,
      });
    }
  }

  // Kiểm tra các câu bị khuyết thứ tự trong từng Phần
  (['part1', 'part2', 'part3', 'part4'] as const).forEach((partKey) => {
    const mentioned = Array.from(mentionedNumbersByPart[partKey]).sort((a, b) => a - b);
    const parsed = parsedNumbersByPart[partKey];
    if (mentioned.length === 0) return;

    const minNum = mentioned[0];
    const maxNum = mentioned[mentioned.length - 1];
    const startCheck = minNum <= 5 ? 1 : minNum;
    if (maxNum - startCheck <= 60) {
      for (let n = startCheck; n <= maxNum; n++) {
        if (!parsed.has(n)) {
          addUnrecognized({
            part: partKey,
            partLabel: PART_LABELS[partKey],
            questionNumber: n,
            questionLabel: `Câu ${n}`,
            status: 'missing',
            reason: 'Không nhận dạng được câu hỏi (bị gộp dòng, thiếu hoặc sai định dạng tiêu đề Câu)',
          });
          warnings.push(
            `${PART_LABELS[partKey]} - Câu ${n}: Không nhận dạng được câu hỏi (bị khuyết hoặc gộp vào câu trước).`
          );
        }
      }
    }
  });

  const partOrder: Record<'part1' | 'part2' | 'part3' | 'part4', number> = {
    part1: 1,
    part2: 2,
    part3: 3,
    part4: 4,
  };
  unrecognizedQuestions.sort((a, b) => {
    if (partOrder[a.part] !== partOrder[b.part]) {
      return partOrder[a.part] - partOrder[b.part];
    }
    return a.questionNumber - b.questionNumber;
  });
  (['part1', 'part2', 'part3', 'part4'] as const).forEach((p) => {
    unrecognizedByPart[p].sort((a, b) => a.questionNumber - b.questionNumber);
  });

  // Thống kê số lượng công thức LaTeX, hình vẽ và bảng toán học
  const mathFormulaMatches = text.match(/\$[^\$]+\$/g);
  const mathFormulaCount = mathFormulaMatches ? mathFormulaMatches.length : 0;
  const tableMatches = text.match(/\[BẢNG_TOÁN\]/g);
  const tableCount = tableMatches ? tableMatches.length : 0;
  const figureCount =
    part1.filter((q) => q.imageUrl || q.tikzCode || q.tikzType).length +
    part2.filter((q) => q.imageUrl || q.tikzCode || q.tikzType).length +
    part3.filter((q) => q.imageUrl || q.tikzCode || q.tikzType).length +
    part4.filter((q) => q.imageUrl || q.tikzCode || q.tikzType).length;

  const exam: ExamSet = {
    id: `de-custom-${Date.now()}`,
    title: examTitle || 'Đề tải từ file Word / PDF',
    subtitle: 'Đề thi tự biên soạn theo chuẩn cấu trúc',
    grade: 12,
    durationMinutes: 90,
    totalPoints: 10,
    description: `Đề thi gồm ${part1.length} câu trắc nghiệm, ${part2.length} câu đúng/sai, ${part3.length} câu trả lời ngắn, ${part4.length} câu tự luận ghép bước.`,
    part1,
    part2,
    part3,
    part4,
  };

  return {
    exam,
    warnings,
    unrecognizedQuestions,
    unrecognizedByPart,
    recognizedByPart,
    counts: {
      part1: part1.length,
      part2: part2.length,
      part3: part3.length,
      part4: part4.length,
      total: part1.length + part2.length + part3.length + part4.length,
    },
    stats: {
      mathFormulaCount,
      figureCount,
      tableCount,
      verifiedAnswerCount,
    },
  };
}

/**
 * Mẫu văn bản chuẩn Toán 12 theo đúng quy tắc:
 * Phần I. (gạch chân đáp án đúng) -> Câu 1, Câu 2...
 * Phần II. (gạch chân đáp án đúng) -> Câu 1 -> a) b) c) d)
 * Phần III. -> Câu 1...
 * Phần IV. -> Câu 1...
 */
export const SAMPLE_WORD_CONTENT = `Phần I. ( gạch chân đáp án đúng )
Câu 1. Cho hàm số $y = x^3 - 3x^2 + 2$ có đồ thị như hình vẽ. Hàm số đã cho nghịch biến trên khoảng nào dưới đây?
<u>A. $(0; 2)$</u>
B. $(-\\infty; 0)$
C. $(2; +\\infty)$
D. $(-1; 3)$

Câu 2. Trong không gian $Oxyz$, mặt phẳng $(P): 2x - y + 3z - 5 = 0$ có một vectơ pháp tuyến là:
A. $\\vec{n}_1 = (2; 1; 3)$    <u>B. $\\vec{n}_2 = (2; -1; 3)$</u>    C. $\\vec{n}_3 = (-1; 3; -5)$    D. $\\vec{n}_4 = (2; -1; -5)$

Phần II. ( gạch chân đáp án đúng )
Câu 1. Cho hàm số $f(x) = x^3 - 3x^2 + 4$ có đồ thị $(C)$. Xét tính đúng/sai của các mệnh đề sau:
<u>a) Đạo hàm của hàm số là $f'(x) = 3x^2 - 6x$.</u>
<u>b) Hàm số đạt cực đại tại $x = 0$ và giá trị cực đại $y_{CĐ} = 4$.</u>
c) Giá trị nhỏ nhất của hàm số trên đoạn $[1; 3]$ bằng $4$.
<u>d) Diện tích hình phẳng giới hạn bởi đồ thị $(C)$ và trục hoành trên đoạn $[-1; 2]$ bằng $\\frac{27}{4}$.</u>

Câu 2. Trong không gian $Oxyz$, cho điểm $A(1; 2; -1)$ và mặt phẳng $(P): 2x - y + 2z + 5 = 0$. Xét tính đúng/sai của các phát biểu sau:
a) Điểm $A(1; 2; -1)$ thuộc mặt phẳng $(P)$.
<u>b) Khoảng cách từ điểm $A$ đến mặt phẳng $(P)$ bằng $1$.</u>
<u>c) Đường thẳng $d$ đi qua $A$ và vuông góc với $(P)$ có phương trình tham số là $x = 1 + 2t,\\ y = 2 - t,\\ z = -1 + 2t$.</u>
d) Mặt cầu tâm $A$ tiếp xúc với mặt phẳng $(P)$ có bán kính $R = 3$.

Phần III.
Câu 1. Biết tích phân $\\int_{0}^{2} (3x^2 - 2x + 1)\\,dx = a$. Tìm giá trị của $a$.
Đáp số: 6

Câu 2. Trong không gian $Oxyz$, tính khoảng cách từ điểm $M(2; -1; 3)$ đến mặt phẳng $(P): 2x - 2y + z + 3 = 0$.
Đáp số: 4

Phần IV.
Câu 1. Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số $y = f(x) = x^3 - 3x^2 - 9x + 10$ trên đoạn $[0; 4]$.
Hàm số xác định và liên tục trên đoạn $[0; 4]$. Ta có đạo hàm $f'(x) = 3x^2 - 6x - 9$.
Giải phương trình $f'(x) = 0 \\Leftrightarrow 3x^2 - 6x - 9 = 0 \\Leftrightarrow x = -1 \\notin [0; 4]$ hoặc $x = 3 \\in [0; 4]$.
Tính giá trị của hàm số tại các đầu mút và điểm tới hạn: $f(0) = 10$; $f(3) = -17$; $f(4) = -10$.
Vậy trên đoạn $[0; 4]$, giá trị lớn nhất là $\\max\\limits_{[0;4]} f(x) = f(0) = 10$ và giá trị nhỏ nhất là $\\min\\limits_{[0;4]} f(x) = f(3) = -17$.
`;
