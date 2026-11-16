import React, { useMemo } from 'react';
import katex from 'katex';
import { TikzFigure } from './TikzFigure';

interface MathRendererProps {
  content: string;
  className?: string;
  inline?: boolean;
}

interface MathPart {
  type: 'text' | 'inline-math' | 'block-math' | 'tikz' | 'image' | 'table';
  value: string;
}

const KATEX_MACROS: Record<string, string> = {
  '\\R': '\\mathbb{R}',
  '\\N': '\\mathbb{N}',
  '\\Z': '\\mathbb{Z}',
  '\\Q': '\\mathbb{Q}',
  '\\C': '\\mathbb{C}',
  '\\vec': '\\overrightarrow{#1}',
  '\\wideparen': '\\widehat{#1}',
  '\\tg': '\\tan',
  '\\cotg': '\\cot',
};

/**
 * Chuẩn hóa chuỗi công thức bên trong $...$ để mọi ký hiệu Unicode đều được KaTeX hiển thị đúng chuẩn SGK Toán 12
 */
function sanitizeLatexFormula(rawFormula: string): string {
  const cleaned = rawFormula
    .replace(/∀/g, '\\forall ')
    .replace(/∃/g, '\\exists ')
    .replace(/∉/g, '\\notin ')
    .replace(/∈/g, '\\in ')
    .replace(/⊆/g, '\\subseteq ')
    .replace(/⊇/g, '\\supseteq ')
    .replace(/⊂/g, '\\subset ')
    .replace(/⊃/g, '\\supset ')
    .replace(/∪/g, '\\cup ')
    .replace(/∩/g, '\\cap ')
    .replace(/∅/g, '\\emptyset ')
    .replace(/∖/g, '\\setminus ')
    .replace(/≤|⩽/g, '\\le ')
    .replace(/≥|⩾/g, '\\ge ')
    .replace(/≠/g, '\\neq ')
    .replace(/≈/g, '\\approx ')
    .replace(/±/g, '\\pm ')
    .replace(/∓/g, '\\mp ')
    .replace(/×/g, '\\times ')
    .replace(/÷/g, '\\div ')
    .replace(/⋅|∙/g, '\\cdot ')
    .replace(/∞/g, '\\infty ')
    .replace(/⇔|⟺/g, '\\Leftrightarrow ')
    .replace(/⇒|⟹/g, '\\Rightarrow ')
    .replace(/→|⟶/g, '\\to ')
    .replace(/↗/g, '\\nearrow ')
    .replace(/↘/g, '\\searrow ')
    .replace(/ℝ/g, '\\mathbb{R}')
    .replace(/ℤ/g, '\\mathbb{Z}')
    .replace(/ℕ/g, '\\mathbb{N}')
    .replace(/ℚ/g, '\\mathbb{Q}')
    .replace(/ℂ/g, '\\mathbb{C}')
    .replace(/α/g, '\\alpha ')
    .replace(/β/g, '\\beta ')
    .replace(/γ/g, '\\gamma ')
    .replace(/δ/g, '\\delta ')
    .replace(/ε/g, '\\varepsilon ')
    .replace(/φ/g, '\\varphi ')
    .replace(/π/g, '\\pi ')
    .replace(/Δ/g, '\\Delta ')
    .replace(/Ω/g, '\\Omega ')
    .replace(/°/g, '^\\circ ')
    .replace(/²/g, '^{2}')
    .replace(/³/g, '^{3}')
    .replace(/⁴/g, '^{4}')
    .replace(/−/g, '-')
    .replace(/\\(max|min|lim|sup|inf)\s*(?!\\limits)_/g, '\\$1\\limits_')
    .replace(/(?<!\\)\b(max|min|lim)\s*(?!\\limits)_/g, '\\$1\\limits_')
    .replace(/(\d),(\d)/g, '$1{,}$2')
    .trim();

  // Tự động cân bằng dấu ngoặc nhọn { } không có \ phía trước để tránh lỗi KaTeX render
  let balanced = '';
  let depth = 0;
  for (let i = 0; i < cleaned.length; i++) {
    const ch = cleaned[i];
    const prev = i > 0 ? cleaned[i - 1] : '';
    if (ch === '{' && prev !== '\\') {
      depth++;
      balanced += ch;
    } else if (ch === '}' && prev !== '\\') {
      if (depth > 0) {
        depth--;
        balanced += ch;
      }
    } else {
      balanced += ch;
    }
  }
  if (depth > 0) {
    balanced += '}'.repeat(depth);
  }
  return balanced;
}

/**
 * Tự động bọc $...$ cho các biểu thức LaTeX hoặc ký hiệu toán học bị thiếu cặp dấu $...$ trong văn bản
 */
function preprocessRawMathContent(input: string): string {
  if (!input) return '';

  // 0. Chuyển thẻ <img src="..."> sang [HÌNH_VẼ:...]
  let s = input
    .replace(/<img\b[^>]*src=["']([^"']+)["'][^>]*\/?>/gi, '[HÌNH_VẼ:$1]')
    .replace(/\\\[([\s\S]*?)\\\]/g, '$$$$$1$$$$')
    .replace(/\\\(([\s\S]*?)\\\)/g, '$$$1$$');

  // 1. Bảo vệ các khối [HÌNH_VẼ:...], [BẢNG_TOÁN]...[/BẢNG_TOÁN], \begin{tikzpicture}...\end{tikzpicture}, $$...$$ và $...$
  const saved: string[] = [];
  s = s.replace(
    /\[HÌNH_VẼ:[^\]]+\]|\[BẢNG_TOÁN\][\s\S]*?\[\/BẢNG_TOÁN\]|\\begin\{tikzpicture\}[\s\S]*?\\end\{tikzpicture\}|\$\$[\s\S]*?\$\$|\$[\s\S]+?\$/g,
    (m) => {
      const idx = saved.length;
      saved.push(m);
      return `__SAVED_MATH_${idx}__`;
    }
  );

  // 2. Tự động bọc $...$ cho các lệnh LaTeX bị viết trần ngoài dấu $
  s = s
    .replace(
      /(\\begin\{(?:cases|aligned|matrix|pmatrix|bmatrix|vmatrix)\}[\s\S]*?\\end\{(?:cases|aligned|matrix|pmatrix|bmatrix|vmatrix)\})/g,
      '$$$1$$'
    )
    .replace(/(\\frac\{[^{}]+\}\{[^{}]+\})/g, '$$$1$$')
    .replace(/(\\sqrt(?:\[[^\]]+\])?\{[^{}]+\})/g, '$$$1$$')
    .replace(/(\\(?:widehat|overrightarrow|overline|underline|vec)\{[^{}]+\})/g, '$$$1$$')
    .replace(/(\\(?:max|min|lim)(?:\\limits)?_\{[^{}]+\})/g, '$$$1$$')
    .replace(/(\\int_\{[^{}]+\}\^\{[^{}]+\})/g, '$$$1$$')
    .replace(/(\\mathbb\{[RZNQC]\})/g, '$$$1$$')
    .replace(/(\d+)\s*°/g, '$$$1^\\circ$$')
    .replace(/([a-zA-Z0-9\)\}])\s*²/g, '$$$1^2$$')
    .replace(/([a-zA-Z0-9\)\}])\s*³/g, '$$$1^3$$')
    .replace(/([a-zA-Z0-9\)\}])\s*⁴/g, '$$$1^4$$')
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

  // 3. Khôi phục các khối đã bảo vệ
  s = s.replace(/__SAVED_MATH_(\d+)__/g, (_, idxStr) => {
    return saved[parseInt(idxStr, 10)] || '';
  });

  return s;
}

/**
 * Hiển thị bảng toán học (Bảng tần số ghép nhóm, Bảng giá trị, Bảng biến thiên trích từ Word/PDF)
 */
const MathTableBlock: React.FC<{ rawTable: string }> = ({ rawTable }) => {
  const rows = rawTable
    .trim()
    .split(/\r?\n/)
    .map((r) => r.trim())
    .filter(Boolean)
    .map((r) =>
      r
        .replace(/^\|/, '')
        .replace(/\|$/, '')
        .split(/\s*\|\s*/)
        .map((c) => c.trim())
    );

  if (rows.length === 0) return null;

  return (
    <span className="block my-3 overflow-x-auto max-w-full">
      <table className="mx-auto border-collapse bg-white text-slate-900 rounded-lg overflow-hidden shadow-md border-2 border-slate-800 text-sm sm:text-base">
        <tbody>
          {rows.map((cells, rIdx) => (
            <tr
              key={rIdx}
              className={rIdx === 0 ? 'bg-slate-100 font-bold border-b-2 border-slate-800' : 'border-b border-slate-300'}
            >
              {cells.map((cell, cIdx) => (
                <td
                  key={cIdx}
                  className={`px-3 sm:px-4 py-2 text-center align-middle ${
                    cIdx === 0
                      ? 'font-bold bg-slate-50 border-r-2 border-slate-800 whitespace-nowrap'
                      : 'border-r border-slate-300 last:border-r-0'
                  } [&_.katex]:text-slate-900`}
                >
                  <MathRenderer content={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </span>
  );
};

export const MathRenderer: React.FC<MathRendererProps> = ({
  content,
  className = '',
}) => {
  const renderedContent = useMemo<MathPart[]>(() => {
    if (!content) return [];

    const normalized = preprocessRawMathContent(content);
    const parts: MathPart[] = [];

    const regex =
      /\[HÌNH_VẼ:([^\]]+)\]|\[BẢNG_TOÁN\]([\s\S]*?)\[\/BẢNG_TOÁN\]|(\\begin\{tikzpicture\}[\s\S]*?\\end\{tikzpicture\})|\$\$([\s\S]*?)\$\$|\$([\s\S]+?)\$/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(normalized)) !== null) {
      if (match.index > lastIndex) {
        parts.push({
          type: 'text',
          value: normalized.substring(lastIndex, match.index),
        });
      }

      if (match[1] !== undefined) {
        parts.push({
          type: 'image',
          value: match[1].trim(),
        });
      } else if (match[2] !== undefined) {
        parts.push({
          type: 'table',
          value: match[2].trim(),
        });
      } else if (match[3] !== undefined) {
        parts.push({
          type: 'tikz',
          value: match[3],
        });
      } else if (match[4] !== undefined) {
        parts.push({
          type: 'block-math',
          value: match[4],
        });
      } else if (match[5] !== undefined) {
        parts.push({
          type: 'inline-math',
          value: match[5],
        });
      }

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < normalized.length) {
      parts.push({
        type: 'text',
        value: normalized.substring(lastIndex),
      });
    }

    return parts;
  }, [content]);

  return (
    <span
      className={`leading-relaxed font-times break-words max-w-full ${className}`}
      style={{ fontFamily: "'Times New Roman', Times, Georgia, serif" }}
    >
      {renderedContent.map((part, index) => {
        if (part.type === 'image') {
          return (
            <span
              key={index}
              className="block my-3 p-2.5 sm:p-3.5 rounded-xl bg-white border border-sky-800/60 shadow-md max-w-lg mx-auto text-center"
            >
              <img
                src={part.value}
                alt="Hình vẽ đề toán"
                className="max-w-full max-h-[320px] w-auto h-auto mx-auto object-contain rounded"
                loading="lazy"
              />
            </span>
          );
        }

        if (part.type === 'table') {
          return <MathTableBlock key={index} rawTable={part.value} />;
        }

        if (part.type === 'tikz') {
          return (
            <span key={index} className="block my-2 max-w-full overflow-x-auto">
              <TikzFigure type="custom" tikzCode={part.value} />
            </span>
          );
        }

        if (part.type === 'text') {
          const lines = part.value.split('\n');
          return (
            <React.Fragment key={index}>
              {lines.map((line, lineIdx) => {
                const boldSegments = line.split(/(\*\*[^*]+\*\*)/g);
                return (
                  <React.Fragment key={lineIdx}>
                    {boldSegments.map((seg, segIdx) =>
                      seg.startsWith('**') && seg.endsWith('**') && seg.length > 4 ? (
                        <strong key={segIdx} className="font-bold">
                          {seg.slice(2, -2)}
                        </strong>
                      ) : (
                        <React.Fragment key={segIdx}>{seg}</React.Fragment>
                      )
                    )}
                    {lineIdx < lines.length - 1 && <br />}
                  </React.Fragment>
                );
              })}
            </React.Fragment>
          );
        }

        const isDisplay = part.type === 'block-math';
        const cleanMath = sanitizeLatexFormula(part.value);
        const formulaToRender =
          !isDisplay && /\\(?:max|min|lim|sup|inf|sum|prod|frac|int|binom)\b/.test(cleanMath)
            ? `\\displaystyle ${cleanMath}`
            : cleanMath;

        try {
          const html = katex.renderToString(formulaToRender, {
            displayMode: isDisplay,
            throwOnError: false,
            errorColor: 'currentColor',
            strict: false,
            trust: true,
            macros: KATEX_MACROS,
            output: 'htmlAndMathml',
          });

          return isDisplay ? (
            <span
              key={index}
              className="block my-2 text-center overflow-x-auto max-w-full py-1 font-math"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          ) : (
            <span
              key={index}
              className="inline-math mx-0.5 align-baseline max-w-full"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return (
            <code
              key={index}
              className="text-amber-300 bg-amber-950/50 px-1 py-0.5 rounded text-sm font-mono break-all"
            >
              ${cleanMath}$
            </code>
          );
        }
      })}
    </span>
  );
};
