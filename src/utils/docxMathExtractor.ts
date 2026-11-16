import mammoth from 'mammoth';
import { normalizeWordHtmlToText } from './wordExamParser';

/**
 * Chuyển đổi các ký tự Toán học Unicode phổ biến sang lệnh LaTeX chuẩn
 */
const UNICODE_TO_LATEX_MAP: Record<string, string> = {
  '∀': '\\forall ',
  '∃': '\\exists ',
  '∈': '\\in ',
  '∉': '\\notin ',
  '⊂': '\\subset ',
  '⊃': '\\supset ',
  '⊆': '\\subseteq ',
  '⊇': '\\supseteq ',
  '∪': '\\cup ',
  '∩': '\\cap ',
  '∅': '\\emptyset ',
  '∖': '\\setminus ',
  '≤': '\\le ',
  '≥': '\\ge ',
  '⩽': '\\le ',
  '⩾': '\\ge ',
  '≠': '\\neq ',
  '≈': '\\approx ',
  '≡': '\\equiv ',
  '±': '\\pm ',
  '∓': '\\mp ',
  '×': '\\times ',
  '÷': '\\div ',
  '⋅': '\\cdot ',
  '∙': '\\cdot ',
  '∞': '\\infty ',
  '⇒': '\\Rightarrow ',
  '⟹': '\\Rightarrow ',
  '⇔': '\\Leftrightarrow ',
  '⟺': '\\Leftrightarrow ',
  '→': '\\to ',
  '⟶': '\\to ',
  '↦': '\\mapsto ',
  '↑': '\\uparrow ',
  '↓': '\\downarrow ',
  '↗': '\\nearrow ',
  '↘': '\\searrow ',
  'ℝ': '\\mathbb{R}',
  'ℤ': '\\mathbb{Z}',
  'ℕ': '\\mathbb{N}',
  'ℚ': '\\mathbb{Q}',
  'ℂ': '\\mathbb{C}',
  'α': '\\alpha ',
  'β': '\\beta ',
  'γ': '\\gamma ',
  'δ': '\\delta ',
  'ε': '\\varepsilon ',
  'θ': '\\theta ',
  'λ': '\\lambda ',
  'μ': '\\mu ',
  'π': '\\pi ',
  'ρ': '\\rho ',
  'σ': '\\sigma ',
  'τ': '\\tau ',
  'φ': '\\varphi ',
  'ω': '\\omega ',
  'Δ': '\\Delta ',
  'Ω': '\\Omega ',
  '∑': '\\sum ',
  '∏': '\\prod ',
  '∫': '\\int ',
  '⊥': '\\perp ',
  '∥': '\\parallel ',
  '∠': '\\widehat ',
  '△': '\\triangle ',
  '°': '^\\circ ',
  '²': '^{2}',
  '³': '^{3}',
  '⁴': '^{4}',
  '¹': '^{1}',
  '⁰': '^{0}',
  '−': '-',
  '–': '-',
};

/**
 * Dịch chuỗi văn bản bên trong khối toán học (OMML <m:t>) sang ký hiệu LaTeX
 */
function convertMathRunText(raw: string): string {
  if (!raw) return '';
  let out = '';
  for (let i = 0; i < raw.length; i++) {
    const ch = raw[i];
    // Kiểm tra dấu vector kết hợp (combining right arrow above U+20D7)
    if (i + 1 < raw.length && (raw[i + 1] === '\u20D7' || raw[i + 1] === '\u20D6')) {
      out += `\\overrightarrow{${ch}}`;
      i++;
      continue;
    }
    if (UNICODE_TO_LATEX_MAP[ch]) {
      out += UNICODE_TO_LATEX_MAP[ch];
    } else if (ch === '{') {
      out += '\\{';
    } else if (ch === '}') {
      out += '\\}';
    } else {
      out += ch;
    }
  }
  return out;
}

/**
 * Lấy phần tử con trực tiếp theo localName (bỏ qua tiền tố namespace m: hoặc w:)
 */
function getDirectChild(parent: Element, localName: string): Element | null {
  for (let i = 0; i < parent.children.length; i++) {
    const child = parent.children[i];
    const name = child.localName || child.nodeName.replace(/^.*:/, '');
    if (name === localName) return child;
  }
  return null;
}

function getDirectChildren(parent: Element, localName: string): Element[] {
  const result: Element[] = [];
  for (let i = 0; i < parent.children.length; i++) {
    const child = parent.children[i];
    const name = child.localName || child.nodeName.replace(/^.*:/, '');
    if (name === localName) result.push(child);
  }
  return result;
}

function getAttrVal(el: Element | null, attrLocalName: string = 'val'): string {
  if (!el) return '';
  for (let i = 0; i < el.attributes.length; i++) {
    const attr = el.attributes[i];
    const local = attr.localName || attr.name.replace(/^.*:/, '');
    if (local === attrLocalName) return attr.value;
  }
  return '';
}

/**
 * Tìm tất cả phần tử con theo localName (đệ quy)
 */
function findDescendantsByLocalName(root: Element, targetLocalName: string): Element[] {
  const found: Element[] = [];
  const walk = (el: Element) => {
    for (let i = 0; i < el.children.length; i++) {
      const c = el.children[i];
      const name = c.localName || c.nodeName.replace(/^.*:/, '');
      if (name === targetLocalName) {
        found.push(c);
      }
      walk(c);
    }
  };
  walk(root);
  return found;
}

/**
 * Chuyển đổi đệ quy cây XML OMML (<m:oMath>, <m:f>, <m:rad>, <m:sSup>,...) của Microsoft Word sang LaTeX chuẩn
 */
function convertOmmlNodeToLatex(node: Node): string {
  if (node.nodeType === Node.TEXT_NODE) {
    return convertMathRunText(node.nodeValue || '');
  }
  if (node.nodeType !== Node.ELEMENT_NODE) {
    return '';
  }

  const el = node as Element;
  const localName = el.localName || el.nodeName.replace(/^.*:/, '');

  switch (localName) {
    case 'oMathPara':
    case 'oMath': {
      let inner = '';
      for (let i = 0; i < el.childNodes.length; i++) {
        inner += convertOmmlNodeToLatex(el.childNodes[i]);
      }
      return inner.trim();
    }

    case 'r': {
      const tNodes = getDirectChildren(el, 't');
      if (tNodes.length > 0) {
        return tNodes.map((t) => convertMathRunText(t.textContent || '')).join('');
      }
      return '';
    }

    case 't': {
      return convertMathRunText(el.textContent || '');
    }

    case 'f': {
      // Phân số <m:f>: <m:num> và <m:den>
      const fPr = getDirectChild(el, 'fPr');
      const typeEl = fPr ? getDirectChild(fPr, 'type') : null;
      const fracType = getAttrVal(typeEl);
      const num = getDirectChild(el, 'num');
      const den = getDirectChild(el, 'den');
      const numLatex = num ? convertOmmlChildren(num).trim() : '';
      const denLatex = den ? convertOmmlChildren(den).trim() : '';
      if (fracType === 'noBar') {
        return `\\binom{${numLatex}}{${denLatex}}`;
      }
      return `\\frac{${numLatex}}{${denLatex}}`;
    }

    case 'rad': {
      // Căn thức <m:rad>: <m:deg> và <m:e>
      const radPr = getDirectChild(el, 'radPr');
      const degHideEl = radPr ? getDirectChild(radPr, 'degHide') : null;
      const degHide = getAttrVal(degHideEl) === '1' || getAttrVal(degHideEl) === 'true';
      const deg = getDirectChild(el, 'deg');
      const base = getDirectChild(el, 'e');
      const degLatex = deg ? convertOmmlChildren(deg).trim() : '';
      const baseLatex = base ? convertOmmlChildren(base).trim() : '';
      if (!degHide && degLatex) {
        return `\\sqrt[${degLatex}]{${baseLatex}}`;
      }
      return `\\sqrt{${baseLatex}}`;
    }

    case 'sSup': {
      // Số mũ <m:sSup>: <m:e> và <m:sup>
      const base = getDirectChild(el, 'e');
      const sup = getDirectChild(el, 'sup');
      const baseLatex = base ? convertOmmlChildren(base).trim() : '';
      const supLatex = sup ? convertOmmlChildren(sup).trim() : '';
      if (supLatex === 'o' || supLatex === '0' || supLatex === '\\circ' || supLatex === '^\\circ') {
        if (/^\d+$/.test(baseLatex) || /^\\widehat/.test(baseLatex) || /^\([0-9a-zA-Z]+\)$/.test(baseLatex)) {
          return `${baseLatex}^\\circ `;
        }
      }
      if (supLatex === "'" || supLatex === '′') {
        return `${baseLatex}'`;
      }
      const wrappedBase =
        baseLatex.length > 1 && !baseLatex.startsWith('{') && !baseLatex.startsWith('\\')
          ? `{${baseLatex}}`
          : baseLatex;
      return `${wrappedBase}^{${supLatex}}`;
    }

    case 'sSub': {
      // Chỉ số dưới <m:sSub>: <m:e> và <m:sub>
      const base = getDirectChild(el, 'e');
      const sub = getDirectChild(el, 'sub');
      let baseLatex = base ? convertOmmlChildren(base).trim() : '';
      const subLatex = sub ? convertOmmlChildren(sub).trim() : '';
      if (/^(?:\\?(?:max|min|lim|sup|inf))$/i.test(baseLatex)) {
        const cleanOp = baseLatex.replace(/^\\/, '').toLowerCase();
        return `\\${cleanOp}\\limits_{${subLatex}} `;
      }
      const wrappedBase =
        baseLatex.length > 1 && !baseLatex.startsWith('{') && !baseLatex.startsWith('\\')
          ? `{${baseLatex}}`
          : baseLatex;
      return `${wrappedBase}_{${subLatex}}`;
    }

    case 'sSubSup': {
      // Vừa chỉ số dưới vừa số mũ <m:sSubSup>
      const base = getDirectChild(el, 'e');
      const sub = getDirectChild(el, 'sub');
      const sup = getDirectChild(el, 'sup');
      const baseLatex = base ? convertOmmlChildren(base).trim() : '';
      const subLatex = sub ? convertOmmlChildren(sub).trim() : '';
      const supLatex = sup ? convertOmmlChildren(sup).trim() : '';
      return `${baseLatex}_{${subLatex}}^{${supLatex}}`;
    }

    case 'sPre': {
      const sub = getDirectChild(el, 'sub');
      const sup = getDirectChild(el, 'sup');
      const base = getDirectChild(el, 'e');
      const subLatex = sub ? convertOmmlChildren(sub).trim() : '';
      const supLatex = sup ? convertOmmlChildren(sup).trim() : '';
      const baseLatex = base ? convertOmmlChildren(base).trim() : '';
      return `{}_{${subLatex}}^{${supLatex}}${baseLatex}`;
    }

    case 'd': {
      // Cặp dấu ngoặc / Hệ phương trình <m:d>
      const dPr = getDirectChild(el, 'dPr');
      const begChrEl = dPr ? getDirectChild(dPr, 'begChr') : null;
      const endChrEl = dPr ? getDirectChild(dPr, 'endChr') : null;
      const sepChrEl = dPr ? getDirectChild(dPr, 'sepChr') : null;

      const begChr = begChrEl ? getAttrVal(begChrEl) : '(';
      const endChr = endChrEl ? getAttrVal(endChrEl) : ')';
      const sepChr = sepChrEl ? getAttrVal(sepChrEl) : '|';

      const eNodes = getDirectChildren(el, 'e');
      const eStrings = eNodes.map((eNode) => convertOmmlChildren(eNode).trim());

      // Hệ phương trình / hệ bất phương trình: dấu ngoặc nhọn trái '{' và không có ngoặc phải
      if (begChr === '{' && (!endChr || endChr === '')) {
        const rows: string[] = [];
        for (const s of eStrings) {
          if (s.includes('\\\\')) {
            rows.push(...s.split('\\\\').map((r) => r.trim()).filter(Boolean));
          } else if (s) {
            rows.push(s);
          }
        }
        return `\\begin{cases} ${rows.join(' \\\\ ')} \\end{cases}`;
      }

      // Tuyển (hoặc) ngoặc vuông trái '[' và không có ngoặc phải
      if (begChr === '[' && (!endChr || endChr === '') && eStrings.length >= 1) {
        const rows: string[] = [];
        for (const s of eStrings) {
          if (s.includes('\\\\')) {
            rows.push(...s.split('\\\\').map((r) => r.trim()).filter(Boolean));
          } else if (s) {
            rows.push(s);
          }
        }
        return `\\left[ \\begin{aligned} ${rows.join(' \\\\ ')} \\end{aligned} \\right.`;
      }

      const mapDelim = (c: string, isLeft: boolean): string => {
        if (!c) return '.';
        if (c === '{') return '\\{';
        if (c === '}') return '\\}';
        if (c === '|') return isLeft ? '\\left|' : '\\right|';
        if (c === '‖' || c === '\\|') return isLeft ? '\\left\\|' : '\\right\\|';
        if (c === '⌊') return '\\lfloor ';
        if (c === '⌋') return '\\rfloor ';
        if (c === '⌈') return '\\lceil ';
        if (c === '⌉') return '\\rceil ';
        return c;
      };

      const leftStr = mapDelim(begChr, true);
      const rightStr = mapDelim(endChr, false);
      const sepStr = sepChr === '|' ? ' \\mid ' : ` ${sepChr} `;
      return `${leftStr}${eStrings.join(sepStr)}${rightStr}`;
    }

    case 'eqArr': {
      // Mảng phương trình nhiều dòng <m:eqArr>
      const eNodes = getDirectChildren(el, 'e');
      const rows = eNodes.map((eNode) => convertOmmlChildren(eNode).trim()).filter(Boolean);
      return rows.join(' \\\\ ');
    }

    case 'acc': {
      // Dấu mũ góc, vectơ, gạch ngang trên đầu <m:acc>
      const accPr = getDirectChild(el, 'accPr');
      const chrEl = accPr ? getDirectChild(accPr, 'chr') : null;
      const chr = getAttrVal(chrEl);
      const base = getDirectChild(el, 'e');
      const baseLatex = base ? convertOmmlChildren(base).trim() : '';

      if (chr === '\u20D7' || chr === '→' || chr === '\u2192' || chr === '\u20D6' || chr === '\u20D1') {
        return `\\overrightarrow{${baseLatex}}`;
      }
      if (chr === '\u0305' || chr === '\u00AF' || chr === '¯' || chr === '-') {
        return `\\overline{${baseLatex}}`;
      }
      if (chr === '\u0303' || chr === '~') {
        return `\\widetilde{${baseLatex}}`;
      }
      return `\\widehat{${baseLatex}}`;
    }

    case 'bar': {
      const barPr = getDirectChild(el, 'barPr');
      const posEl = barPr ? getDirectChild(barPr, 'pos') : null;
      const pos = getAttrVal(posEl);
      const base = getDirectChild(el, 'e');
      const baseLatex = base ? convertOmmlChildren(base).trim() : '';
      if (pos === 'bot') {
        return `\\underline{${baseLatex}}`;
      }
      if (/^[A-Z]{2}$/.test(baseLatex)) {
        return `\\overrightarrow{${baseLatex}}`;
      }
      return `\\overline{${baseLatex}}`;
    }

    case 'nary': {
      // Tổng \sum, tích \prod, tích phân \int, hợp \bigcup, giao \bigcap
      const naryPr = getDirectChild(el, 'naryPr');
      const chrEl = naryPr ? getDirectChild(naryPr, 'chr') : null;
      const chr = getAttrVal(chrEl) || '∫';
      const sub = getDirectChild(el, 'sub');
      const sup = getDirectChild(el, 'sup');
      const base = getDirectChild(el, 'e');

      let op = '\\int';
      if (chr === '∑') op = '\\sum';
      else if (chr === '∏') op = '\\prod';
      else if (chr === '⋃' || chr === '∪') op = '\\bigcup';
      else if (chr === '⋂' || chr === '∩') op = '\\bigcap';

      const subLatex = sub ? convertOmmlChildren(sub).trim() : '';
      const supLatex = sup ? convertOmmlChildren(sup).trim() : '';
      const baseLatex = base ? convertOmmlChildren(base).trim() : '';

      let result = op;
      if (subLatex) result += `_{${subLatex}}`;
      if (supLatex) result += `^{${supLatex}}`;
      return `${result} ${baseLatex}`;
    }

    case 'func': {
      const fNameEl = getDirectChild(el, 'fName');
      const baseEl = getDirectChild(el, 'e');
      let fName = fNameEl ? convertOmmlChildren(fNameEl).trim() : '';
      const baseLatex = baseEl ? convertOmmlChildren(baseEl).trim() : '';

      const cleanFn = fName.replace(/\\/g, '').trim().toLowerCase();
      if (['sin', 'cos', 'tan', 'cot', 'arcsin', 'arccos', 'arctan', 'ln', 'log', 'lim', 'max', 'min'].includes(cleanFn)) {
        fName = `\\${cleanFn}`;
      } else if (cleanFn === 'tg') {
        fName = '\\tan';
      } else if (cleanFn === 'cotg') {
        fName = '\\cot';
      }
      return `${fName} ${baseLatex}`;
    }

    case 'limLow': {
      const baseEl = getDirectChild(el, 'e');
      const limEl = getDirectChild(el, 'lim');
      let baseLatex = baseEl ? convertOmmlChildren(baseEl).trim() : '';
      const limLatex = limEl ? convertOmmlChildren(limEl).trim() : '';
      const cleanBase = baseLatex.replace(/^\\/, '').trim();
      if (/^(?:lim|max|min|sup|inf)$/i.test(cleanBase)) {
        return `\\${cleanBase.toLowerCase()}\\limits_{${limLatex}} `;
      }
      return `${baseLatex}_{${limLatex}}`;
    }

    case 'limUpp': {
      const baseEl = getDirectChild(el, 'e');
      const limEl = getDirectChild(el, 'lim');
      const baseLatex = baseEl ? convertOmmlChildren(baseEl).trim() : '';
      const limLatex = limEl ? convertOmmlChildren(limEl).trim() : '';
      if (limLatex === '→' || limLatex === '\\to' || limLatex === '\u20D7') {
        return `\\overrightarrow{${baseLatex}}`;
      }
      return `\\overset{${limLatex}}{${baseLatex}}`;
    }

    case 'm': {
      // Ma trận <m:m> -> <m:mr> -> <m:e>
      const rows = getDirectChildren(el, 'mr');
      const rowStrings = rows.map((mr) => {
        const cells = getDirectChildren(mr, 'e');
        return cells.map((c) => convertOmmlChildren(c).trim()).join(' & ');
      });
      if (rowStrings.length > 1 && rowStrings.every((r) => !r.includes('&'))) {
        return rowStrings.join(' \\\\ ');
      }
      return `\\begin{pmatrix} ${rowStrings.join(' \\\\ ')} \\end{pmatrix}`;
    }

    case 'groupChr': {
      const groupChrPr = getDirectChild(el, 'groupChrPr');
      const chrEl = groupChrPr ? getDirectChild(groupChrPr, 'chr') : null;
      const chr = getAttrVal(chrEl);
      const baseEl = getDirectChild(el, 'e');
      const baseLatex = baseEl ? convertOmmlChildren(baseEl).trim() : '';
      if (chr === '→' || chr === '\u2192' || chr === '\u20D7') {
        return `\\overrightarrow{${baseLatex}}`;
      }
      return `\\underbrace{${baseLatex}}`;
    }

    case 'box':
    case 'borderBox':
    case 'phant':
    case 'e':
    case 'num':
    case 'den':
    case 'deg':
    case 'sub':
    case 'sup':
    case 'lim':
    case 'fName': {
      return convertOmmlChildren(el);
    }

    case 'oMathParaPr':
    case 'rPr':
    case 'ctrlPr':
    case 'fPr':
    case 'radPr':
    case 'sSupPr':
    case 'sSubPr':
    case 'sSubSupPr':
    case 'sPrePr':
    case 'dPr':
    case 'eqArrPr':
    case 'accPr':
    case 'barPr':
    case 'naryPr':
    case 'funcPr':
    case 'limLowPr':
    case 'limUppPr':
    case 'mPr':
    case 'groupChrPr':
      return '';

    default:
      return convertOmmlChildren(el);
  }
}

function convertOmmlChildren(el: Element): string {
  let res = '';
  for (let i = 0; i < el.childNodes.length; i++) {
    res += convertOmmlNodeToLatex(el.childNodes[i]);
  }
  return res;
}

/**
 * Chuẩn hóa biểu thức LaTeX sau khi trích xuất từ OMML
 */
function cleanConvertedLatex(latex: string): string {
  let s = latex.trim();
  if (!s) return '';

  s = s
    .replace(/(?<!\\)\b(sin|cos|tan|cot|ln|log|lim|max|min)\b/g, '\\$1')
    .replace(/\\(max|min|lim)_\{/g, '\\$1\\limits_{')
    .replace(/\\(sin|cos|tan|cot)\s*\^\s*\{?2\}?/g, '\\$1^2 ')
    .replace(/\s{2,}/g, ' ')
    .trim();

  return s;
}

function uint8ToBase64(bytes: Uint8Array): string {
  let binary = '';
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    const chunk = bytes.subarray(i, i + chunkSize);
    binary += String.fromCharCode.apply(null, Array.from(chunk));
  }
  return btoa(binary);
}

function getMimeTypeForMedia(fileName: string): string | null {
  const lower = fileName.toLowerCase();
  if (lower.endsWith('.png')) return 'image/png';
  if (lower.endsWith('.jpg') || lower.endsWith('.jpeg')) return 'image/jpeg';
  if (lower.endsWith('.gif')) return 'image/gif';
  if (lower.endsWith('.webp')) return 'image/webp';
  if (lower.endsWith('.svg')) return 'image/svg+xml';
  if (lower.endsWith('.bmp')) return 'image/bmp';
  return null;
}

interface ExtractedDocxArchive {
  textFiles: Record<string, string>;
  mediaDataUrls: Record<string, string>;
}

/**
 * Giải nén file XML và toàn bộ hình ảnh minh họa (word/media/*) bên trong kho lưu trữ ZIP (.docx)
 */
async function readZipEntriesFromDocx(arrayBuffer: ArrayBuffer): Promise<ExtractedDocxArchive> {
  const bytes = new Uint8Array(arrayBuffer);
  const view = new DataView(arrayBuffer);

  let eocdOffset = -1;
  const minEocdOffset = Math.max(0, bytes.length - 65557);
  for (let i = bytes.length - 22; i >= minEocdOffset; i--) {
    if (view.getUint32(i, true) === 0x06054b50) {
      eocdOffset = i;
      break;
    }
  }

  if (eocdOffset === -1) {
    throw new Error('Invalid ZIP/DOCX archive');
  }

  const totalEntries = view.getUint16(eocdOffset + 10, true);
  const cdOffset = view.getUint32(eocdOffset + 16, true);

  const decoder = new TextDecoder('utf-8');
  const targetTextFiles = new Set([
    'word/document.xml',
    'word/numbering.xml',
    'word/_rels/document.xml.rels',
  ]);
  const textFiles: Record<string, string> = {};
  const mediaDataUrls: Record<string, string> = {};

  let ptr = cdOffset;
  for (let idx = 0; idx < totalEntries; idx++) {
    if (ptr + 46 > bytes.length || view.getUint32(ptr, true) !== 0x02014b50) {
      break;
    }

    const compressionMethod = view.getUint16(ptr + 10, true);
    const compressedSize = view.getUint32(ptr + 20, true);
    const fileNameLen = view.getUint16(ptr + 28, true);
    const extraLen = view.getUint16(ptr + 30, true);
    const commentLen = view.getUint16(ptr + 32, true);
    const localHeaderOffset = view.getUint32(ptr + 42, true);

    const fileName = decoder.decode(bytes.subarray(ptr + 46, ptr + 46 + fileNameLen));
    ptr += 46 + fileNameLen + extraLen + commentLen;

    const isTextTarget = targetTextFiles.has(fileName);
    const mediaMime = fileName.startsWith('word/media/') ? getMimeTypeForMedia(fileName) : null;

    if (!isTextTarget && !mediaMime) continue;

    if (localHeaderOffset + 30 > bytes.length) continue;
    const localNameLen = view.getUint16(localHeaderOffset + 26, true);
    const localExtraLen = view.getUint16(localHeaderOffset + 28, true);
    const dataStart = localHeaderOffset + 30 + localNameLen + localExtraLen;
    const compressedData = bytes.subarray(dataStart, dataStart + compressedSize);

    let rawBytes: Uint8Array | null = null;
    if (compressionMethod === 0) {
      rawBytes = compressedData;
    } else if (compressionMethod === 8 && typeof DecompressionStream !== 'undefined') {
      const ds = new DecompressionStream('deflate-raw');
      const writer = ds.writable.getWriter();
      writer.write(compressedData);
      writer.close();
      const decompressedBuffer = await new Response(ds.readable).arrayBuffer();
      rawBytes = new Uint8Array(decompressedBuffer);
    }

    if (!rawBytes) continue;

    if (isTextTarget) {
      textFiles[fileName] = decoder.decode(rawBytes);
    } else if (mediaMime) {
      const base64 = uint8ToBase64(rawBytes);
      const shortKey = fileName.replace(/^word\//, '');
      const dataUrl = `data:${mediaMime};base64,${base64}`;
      mediaDataUrls[fileName] = dataUrl;
      mediaDataUrls[shortKey] = dataUrl;
    }
  }

  return { textFiles, mediaDataUrls };
}

/**
 * Phân tích word/_rels/document.xml.rels để ánh xạ rId -> data:image/...
 */
function parseDocumentRels(
  relsXml: string | undefined,
  mediaDataUrls: Record<string, string>
): Map<string, string> {
  const relMap = new Map<string, string>();
  if (!relsXml) return relMap;

  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(relsXml, 'application/xml');
    const rels = findDescendantsByLocalName(doc.documentElement, 'Relationship');
    for (const rel of rels) {
      const id = getAttrVal(rel, 'Id');
      const target = getAttrVal(rel, 'Target').replace(/^\/?word\//, '').replace(/^\.\//, '');
      if (id && target) {
        const matchedUrl = mediaDataUrls[target] || mediaDataUrls[`word/${target}`];
        if (matchedUrl) {
          relMap.set(id, matchedUrl);
        }
      }
    }
  } catch {
    // Bỏ qua nếu rels lỗi
  }

  return relMap;
}

interface NumberingLevelInfo {
  numFmt: string;
  lvlText: string;
  start: number;
  isUnderlined: boolean;
}

/**
 * Phân tích word/numbering.xml để khôi phục đánh số tự động (Câu 1., A., B., C., D., a), b), c), d))
 */
function parseNumberingXml(numberingXml?: string): Map<string, Map<string, NumberingLevelInfo>> {
  const numMap = new Map<string, Map<string, NumberingLevelInfo>>();
  if (!numberingXml) return numMap;

  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(numberingXml, 'application/xml');
    const abstractMap = new Map<string, Map<string, NumberingLevelInfo>>();

    const abstractNums = getDirectChildren(doc.documentElement, 'abstractNum');
    for (const abs of abstractNums) {
      const absId = getAttrVal(abs, 'abstractNumId');
      const lvlMap = new Map<string, NumberingLevelInfo>();
      const lvls = getDirectChildren(abs, 'lvl');
      for (const lvl of lvls) {
        const ilvl = getAttrVal(lvl, 'ilvl') || '0';
        const numFmtEl = getDirectChild(lvl, 'numFmt');
        const lvlTextEl = getDirectChild(lvl, 'lvlText');
        const startEl = getDirectChild(lvl, 'start');
        const rPrEl = getDirectChild(lvl, 'rPr');
        const uEl = rPrEl ? getDirectChild(rPrEl, 'u') : null;
        const uVal = uEl ? getAttrVal(uEl, 'val') : '';

        lvlMap.set(ilvl, {
          numFmt: getAttrVal(numFmtEl) || 'decimal',
          lvlText: getAttrVal(lvlTextEl) || '%1.',
          start: parseInt(getAttrVal(startEl) || '1', 10) || 1,
          isUnderlined: Boolean(uEl && uVal !== 'none'),
        });
      }
      abstractMap.set(absId, lvlMap);
    }

    const nums = getDirectChildren(doc.documentElement, 'num');
    for (const num of nums) {
      const numId = getAttrVal(num, 'numId');
      const absIdEl = getDirectChild(num, 'abstractNumId');
      const absId = getAttrVal(absIdEl);
      const baseLvlMap = abstractMap.get(absId);
      if (baseLvlMap) {
        const cloned = new Map<string, NumberingLevelInfo>();
        baseLvlMap.forEach((v, k) => cloned.set(k, { ...v }));
        numMap.set(numId, cloned);
      }
    }
  } catch {
    // Bỏ qua nếu không đọc được numbering.xml
  }

  return numMap;
}

function formatListNumber(n: number, fmt: string): string {
  if (fmt === 'upperLetter') {
    return String.fromCharCode(64 + ((n - 1) % 26) + 1);
  }
  if (fmt === 'lowerLetter') {
    return String.fromCharCode(96 + ((n - 1) % 26) + 1);
  }
  if (fmt === 'upperRoman' || fmt === 'lowerRoman') {
    const romans = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    const val = romans[n - 1] || String(n);
    return fmt === 'lowerRoman' ? val.toLowerCase() : val;
  }
  return String(n);
}

/**
 * Kiểm tra xem màu chữ trong Word (<w:color w:val="..."/>) có phải màu đánh dấu đáp án đúng (Đỏ, Xanh lá, Cam...) không
 */
function isAnswerHighlightColor(hexVal: string): boolean {
  if (!hexVal) return false;
  const clean = hexVal.replace(/^#/, '').trim().toUpperCase();
  if (clean.length !== 6 || clean === '000000' || clean === 'AUTO' || clean === 'FFFFFF') {
    return false;
  }
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  if (isNaN(r) || isNaN(g) || isNaN(b)) return false;

  // Màu đỏ / cam đậm / hồng đậm thường dùng tô đáp án đúng trong Word
  if (r >= 170 && g <= 90 && b <= 90) return true;
  // Màu xanh lá đậm
  if (g >= 140 && r <= 70 && b <= 90) return true;
  return false;
}

/**
 * Chuẩn hóa văn bản Toán học có chứa ký hiệu Unicode hoặc biểu thức rời rạc sang LaTeX chuẩn $...$
 */
export function normalizeMathExpressionsToLatex(rawText: string): string {
  if (!rawText) return '';
  let text = rawText.normalize('NFC');

  // 1. Chuyển đổi \[ ... \] -> $$ ... $$ và \( ... \) -> $ ... $
  text = text
    .replace(/\\\[([\s\S]*?)\\\]/g, '$$$$$1$$$$')
    .replace(/\\\(([\s\S]*?)\\\)/g, '$$$1$$');

  // 2. Bảo vệ các vùng đã nằm trong $...$, $$...$$, [HÌNH_VẼ:...], [BẢNG_TOÁN]...[/BẢNG_TOÁN] hoặc \begin{tikzpicture}
  const protectedBlocks: string[] = [];
  const placeholderPrefix = '__MATH_HOLD_';

  text = text.replace(
    /\[HÌNH_VẼ:[^\]]+\]|\[BẢNG_TOÁN\][\s\S]*?\[\/BẢNG_TOÁN\]|\\begin\{tikzpicture\}[\s\S]*?\\end\{tikzpicture\}|\$\$[\s\S]*?\$\$|\$[^\$]+?\$/g,
    (match) => {
      const idx = protectedBlocks.length;
      protectedBlocks.push(match);
      return `${placeholderPrefix}${idx}__`;
    }
  );

  // 3. Chuyển các ký hiệu toán học Unicode đứng ngoài $...$ sang LaTeX
  text = text
    .replace(/(\d+)\s*°/g, '$$$1^\\circ$$')
    .replace(/([a-zA-Z0-9\)\}])\s*²/g, '$$$1^2$$')
    .replace(/([a-zA-Z0-9\)\}])\s*³/g, '$$$1^3$$')
    .replace(/([a-zA-Z0-9\)\}])\s*⁴/g, '$$$1^4$$')
    .replace(/√\s*\(([^)]+)\)/g, '$$\\sqrt{$1}$$')
    .replace(/√\s*(\d+[a-zA-Z0-9]*)/g, '$$\\sqrt{$1}$$')
    .replace(/∀/g, '$$\\forall$$')
    .replace(/∃/g, '$$\\exists$$')
    .replace(/∉/g, '$$\\notin$$')
    .replace(/∈/g, '$$\\in$$')
    .replace(/⊆/g, '$$\\subseteq$$')
    .replace(/⊂/g, '$$\\subset$$')
    .replace(/∪/g, '$$\\cup$$')
    .replace(/∩/g, '$$\\cap$$')
    .replace(/∅/g, '$$\\emptyset$$')
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

  // 4. Khôi phục các khối đã bảo vệ
  text = text.replace(/__MATH_HOLD_(\d+)__/g, (_, idxStr) => {
    return protectedBlocks[parseInt(idxStr, 10)] || '';
  });

  // 5. Gộp hai công thức $...$ liền kề chỉ cách nhau bởi khoảng trắng/toán tử đơn giản
  text = text.replace(/\$\s*\$/g, ' ');

  return text;
}

/**
 * Trích xuất nội dung đề thi từ file Word (.docx) giữ nguyên:
 * - Công thức Toán học OMML (<m:oMath>) chuyển sang chuẩn LaTeX $...$
 * - Hình vẽ, đồ thị, bảng biến thiên nhúng trong Word (word/media/*) -> [HÌNH_VẼ:data:image/...]
 * - Bảng số liệu / bảng biến thiên / bảng đáp án (<w:tbl>) -> [BẢNG_TOÁN]...[/BẢNG_TOÁN]
 * - Gạch chân / Tô màu / Highlight đáp án đúng (<u>...</u>)
 * - Chỉ số trên / chỉ số dưới (<w:vertAlign>)
 * - Đánh số tự động (<w:numPr>) cho Câu 1, Câu 2, A. B. C. D., a) b) c) d)
 */
export async function extractWordDocxWithMath(arrayBuffer: ArrayBuffer): Promise<string> {
  try {
    const { textFiles, mediaDataUrls } = await readZipEntriesFromDocx(arrayBuffer);
    const documentXml = textFiles['word/document.xml'];

    if (documentXml) {
      const numberingMap = parseNumberingXml(textFiles['word/numbering.xml']);
      const relsMap = parseDocumentRels(textFiles['word/_rels/document.xml.rels'], mediaDataUrls);
      const listCounters = new Map<string, number>();

      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(documentXml, 'application/xml');
      const body = getDirectChild(xmlDoc.documentElement, 'body');

      if (body) {
        const lines: string[] = [];

        const extractEmbeddedImagesFromNode = (el: Element): string[] => {
          const images: string[] = [];
          const blips = findDescendantsByLocalName(el, 'blip');
          for (const blip of blips) {
            const embedId = getAttrVal(blip, 'embed') || getAttrVal(blip, 'link');
            if (embedId && relsMap.has(embedId)) {
              images.push(`[HÌNH_VẼ:${relsMap.get(embedId)!}]`);
            }
          }
          const vmlImages = findDescendantsByLocalName(el, 'imagedata');
          for (const vImg of vmlImages) {
            const rId = getAttrVal(vImg, 'id') || getAttrVal(vImg, 'href');
            if (rId && relsMap.has(rId)) {
              images.push(`[HÌNH_VẼ:${relsMap.get(rId)!}]`);
            }
          }
          return images;
        };

        const processParagraph = (pEl: Element): string => {
          let prefix = '';
          let paragraphUnderlined = false;

          const pPr = getDirectChild(pEl, 'pPr');
          if (pPr) {
            const pRPr = getDirectChild(pPr, 'rPr');
            const pUEl = pRPr ? getDirectChild(pRPr, 'u') : null;
            if (pUEl && getAttrVal(pUEl, 'val') !== 'none') {
              paragraphUnderlined = true;
            }

            // Kiểm tra đánh số tự động <w:numPr>
            const numPr = getDirectChild(pPr, 'numPr');
            if (numPr) {
              const ilvlEl = getDirectChild(numPr, 'ilvl');
              const numIdEl = getDirectChild(numPr, 'numId');
              const ilvl = getAttrVal(ilvlEl) || '0';
              const numId = getAttrVal(numIdEl);
              if (numId && numId !== '0') {
                const counterKey = `${numId}:${ilvl}`;
                const lvlInfo = numberingMap.get(numId)?.get(ilvl);
                const startVal = lvlInfo?.start ?? 1;
                const currentCount = (listCounters.get(counterKey) ?? startVal - 1) + 1;
                listCounters.set(counterKey, currentCount);

                for (let subLvl = parseInt(ilvl, 10) + 1; subLvl <= 8; subLvl++) {
                  listCounters.delete(`${numId}:${subLvl}`);
                }

                if (lvlInfo) {
                  const formattedNum = formatListNumber(currentCount, lvlInfo.numFmt);
                  const renderedPrefix = lvlInfo.lvlText.replace(`%${parseInt(ilvl, 10) + 1}`, formattedNum);
                  prefix = lvlInfo.isUnderlined
                    ? `<u>${renderedPrefix}</u> `
                    : `${renderedPrefix} `;
                }
              }
            }
          }

          let pContent = '';
          const inlineImages: string[] = [];

          const walkParagraphChild = (child: Node) => {
            if (child.nodeType !== Node.ELEMENT_NODE) return;
            const el = child as Element;
            const name = el.localName || el.nodeName.replace(/^.*:/, '');

            if (name === 'oMathPara' || name === 'oMath') {
              const rawLatex = cleanConvertedLatex(convertOmmlNodeToLatex(el));
              if (rawLatex) {
                pContent += `$${rawLatex}$`;
              }
              return;
            }

            if (name === 'drawing' || name === 'pict' || name === 'object') {
              const imgs = extractEmbeddedImagesFromNode(el);
              if (imgs.length > 0) {
                inlineImages.push(...imgs);
              }
              return;
            }

            if (name === 'r') {
              const imgs = extractEmbeddedImagesFromNode(el);
              if (imgs.length > 0) {
                inlineImages.push(...imgs);
              }

              const rPr = getDirectChild(el, 'rPr');
              const uEl = rPr ? getDirectChild(rPr, 'u') : null;
              const uVal = uEl ? getAttrVal(uEl, 'val') : '';
              const highlightEl = rPr ? getDirectChild(rPr, 'highlight') : null;
              const highlightVal = highlightEl ? getAttrVal(highlightEl, 'val') : '';
              const colorEl = rPr ? getDirectChild(rPr, 'color') : null;
              const colorVal = colorEl ? getAttrVal(colorEl, 'val') : '';

              const isRunMarkedCorrect = Boolean(
                (uEl && uVal !== 'none') ||
                  (highlightEl && highlightVal && highlightVal !== 'none') ||
                  isAnswerHighlightColor(colorVal) ||
                  paragraphUnderlined
              );

              const vertAlignEl = rPr ? getDirectChild(rPr, 'vertAlign') : null;
              const vertAlign = getAttrVal(vertAlignEl);

              let runText = '';
              for (let i = 0; i < el.childNodes.length; i++) {
                const rc = el.childNodes[i] as Element;
                const rcName = rc.localName || rc.nodeName.replace(/^.*:/, '');
                if (rcName === 't') {
                  runText += rc.textContent || '';
                } else if (rcName === 'tab') {
                  runText += '    ';
                } else if (rcName === 'br' || rcName === 'cr') {
                  runText += '\n';
                } else if (rcName === 'sym') {
                  const charCode = getAttrVal(rc, 'char');
                  if (charCode) {
                    const code = parseInt(charCode, 16);
                    if (!isNaN(code)) runText += String.fromCharCode(code);
                  }
                }
              }

              if (!runText) return;

              if (vertAlign === 'superscript') {
                const cleanSup = runText.trim();
                if (cleanSup === 'o' || cleanSup === '0' || cleanSup === '°') {
                  runText = '$^\\circ$';
                } else if (cleanSup) {
                  runText = `$^{${cleanSup}}$`;
                }
              } else if (vertAlign === 'subscript') {
                const cleanSub = runText.trim();
                if (cleanSub) {
                  runText = `$_{${cleanSub}}$`;
                }
              }

              if (isRunMarkedCorrect && runText.trim()) {
                pContent += `<u>${runText}</u>`;
              } else {
                pContent += runText;
              }
              return;
            }

            if (
              name === 'hyperlink' ||
              name === 'smartTag' ||
              name === 'ins' ||
              name === 'sdt' ||
              name === 'sdtContent'
            ) {
              for (let i = 0; i < el.childNodes.length; i++) {
                walkParagraphChild(el.childNodes[i]);
              }
            }
          };

          for (let i = 0; i < pEl.childNodes.length; i++) {
            walkParagraphChild(pEl.childNodes[i]);
          }

          let fullLine = (prefix + pContent)
            .replace(/<\/u>(\s*)<u>/gi, '$1')
            .replace(/([a-zA-Z0-9\)\}])\$\^\{([^}]+)\}\$/g, '$$$1^{$2}$$')
            .replace(/([a-zA-Z0-9\)\}])\$_\{([^}]+)\}\$/g, '$$$1_{$2}$$')
            .replace(/(\d+)\$\^\\circ\$/g, '$$$1^\\circ$$')
            .trim();

          fullLine = normalizeMathExpressionsToLatex(fullLine);

          if (inlineImages.length > 0) {
            const uniqueImgs = Array.from(new Set(inlineImages));
            return [fullLine, ...uniqueImgs].filter(Boolean).join('\n');
          }

          return fullLine;
        };

        const processTable = (tblEl: Element) => {
          const rows = getDirectChildren(tblEl, 'tr');
          const matrix: string[][] = [];

          for (const tr of rows) {
            const cells = getDirectChildren(tr, 'tc');
            const rowCells: string[] = [];
            for (const tc of cells) {
              const cellParagraphs = getDirectChildren(tc, 'p');
              const pStrings = cellParagraphs.map((p) => processParagraph(p)).filter(Boolean);
              rowCells.push(pStrings.join(' ').trim());
            }
            if (rowCells.some((c) => c.length > 0)) {
              matrix.push(rowCells);
            }
          }

          if (matrix.length === 0) return;

          const flatCells = matrix.flat().filter(Boolean);

          // 1. Kiểm tra nếu bảng là bảng chia cột chứa các phương án A., B., C., D. hoặc a), b), c), d)
          const optionCellsCount = flatCells.filter((c) =>
            /^(?:<u>)?\s*\*?\s*(?:<u>)?(?:[A-D][\.\:\)]|[a-d]\))/i.test(c.trim())
          ).length;
          if (optionCellsCount >= 2) {
            for (const cell of flatCells) {
              if (cell.trim()) lines.push(cell.trim());
            }
            return;
          }

          // 2. Kiểm tra nếu bảng là BẢNG ĐÁP ÁN 2 hàng (hàng trên là số câu 1, 2, 3..., hàng dưới là A, B, C, D)
          let isAnswerKeyGrid = false;
          const answerPairs: string[] = [];
          for (let r = 0; r + 1 < matrix.length; r += 2) {
            const topRow = matrix[r];
            const botRow = matrix[r + 1];
            if (
              topRow.length >= 2 &&
              topRow.length === botRow.length &&
              topRow.every((c) => /^(?:Câu\s*)?\d+$/i.test(c.replace(/<\/?u>/gi, '').trim())) &&
              botRow.every((c) => /^[A-D]$/i.test(c.replace(/<\/?u>/gi, '').trim()))
            ) {
              isAnswerKeyGrid = true;
              for (let col = 0; col < topRow.length; col++) {
                const qNumMatch = topRow[col].match(/\d+/);
                const ansChar = botRow[col].replace(/<\/?u>/gi, '').trim().toUpperCase();
                if (qNumMatch && ansChar) {
                  answerPairs.push(`${qNumMatch[0]}.${ansChar}`);
                }
              }
            }
          }
          if (isAnswerKeyGrid && answerPairs.length > 0) {
            lines.push('BẢNG ĐÁP ÁN');
            lines.push(answerPairs.join('  '));
            return;
          }

          // 3. Nếu bảng chỉ chứa 1 ô hoặc toàn bộ là câu hỏi dài, xuất từng dòng bình thường
          if (matrix.length === 1 && matrix[0].length === 1) {
            lines.push(matrix[0][0]);
            return;
          }

          // 4. Bảng số liệu thống kê (Bảng tần số ghép nhóm) hoặc Bảng biến thiên / Bảng xét dấu:
          // Xuất dưới dạng khối [BẢNG_TOÁN]...[/BẢNG_TOÁN] để MathRenderer vẽ bảng chuẩn SGK
          const formattedRows = matrix.map((r) =>
            r.map((cell) => cell.replace(/\n+/g, ' ').trim() || ' ').join(' | ')
          );
          lines.push(`[BẢNG_TOÁN]\n${formattedRows.join('\n')}\n[/BẢNG_TOÁN]`);
        };

        const walkBodyNode = (node: Node) => {
          if (node.nodeType !== Node.ELEMENT_NODE) return;
          const el = node as Element;
          const name = el.localName || el.nodeName.replace(/^.*:/, '');

          if (name === 'p') {
            const pText = processParagraph(el);
            if (pText) lines.push(pText);
          } else if (name === 'tbl') {
            processTable(el);
          } else if (name === 'sdt' || name === 'sdtContent' || name === 'customXml') {
            for (let i = 0; i < el.childNodes.length; i++) {
              walkBodyNode(el.childNodes[i]);
            }
          }
        };

        for (let i = 0; i < body.childNodes.length; i++) {
          walkBodyNode(body.childNodes[i]);
        }

        const finalDocxText = lines.join('\n').replace(/\n{3,}/g, '\n\n').trim();
        if (finalDocxText) {
          return finalDocxText;
        }
      }
    }
  } catch {
    // Fallback sang Mammoth nếu có lỗi đọc cấu trúc ZIP/XML
  }

  // Fallback với Mammoth kèm xử lý <img>, <sup>, <sub> và chuẩn hóa LaTeX
  const result = await mammoth.convertToHtml(
    { arrayBuffer },
    {
      styleMap: [
        'u => u',
        'b => strong',
        'i => em',
        'strike => s',
      ],
    }
  );

  const htmlWithImagesAndMath = result.value
    .replace(/<img\b[^>]*src=["'](data:image\/[^"']+)["'][^>]*\/?>/gi, '\n[HÌNH_VẼ:$1]\n')
    .replace(/<sup>\s*(?:o|0|°)\s*<\/sup>/gi, '$^\\circ$')
    .replace(/<sup>([\s\S]*?)<\/sup>/gi, '$^{$1}$')
    .replace(/<sub>([\s\S]*?)<\/sub>/gi, '$_{$1}$');

  const cleanReadable = normalizeWordHtmlToText(htmlWithImagesAndMath)
    .replace(/\[U\]/g, '<u>')
    .replace(/\[\/U\]/g, '</u>')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  return normalizeMathExpressionsToLatex(cleanReadable);
}
