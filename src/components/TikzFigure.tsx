import React, { useState } from 'react';
import { Copy, Check, Eye, Code2 } from 'lucide-react';
import { playClickSound } from '../utils/audio';
import { getSpaceTikzCode, renderSpaceTikzSvg } from './SpaceTikzFigures';

export type TikzDiagramType =
  | 'number_line_intersection'
  | 'number_line_minus2_4'
  | 'set_difference_venn'
  | 'venn_diagram_40'
  | 'venn_diagram_100'
  | 'venn_diagram_50_10b'
  | 'bpt_halfplane_2x_y_4'
  | 'feasible_region_quad'
  | 'feasible_region_aircon'
  | 'feasible_region_coffee_cocoa'
  | 'trig_unit_circle_supp'
  | 'triangle_60deg'
  | 'triangle_sin_circumcircle'
  | 'triangle_obtuse_cos'
  | 'triangle_heron'
  | 'river_triangulation'
  | 'lighthouse_coast'
  | 'parabola_vertex_2_1'
  | 'broken_tree_storm'
  | 'feasible_region_aloe_asparagus'
  | 'venn_diagram_70_tourists'
  | 'number_line_3_6'
  | 'triangle_cos_inscribed_d2'
  | 'mountain_building_observation'
  | 'cubic_graph_d1'
  | 'rational_asymptotes_d1'
  | 'integral_area_parabola'
  | 'space_box_vectors'
  | 'oxyz_plane_normal'
  | 'd0_q1_bbt'
  | 'd0_q2_graph'
  | 'd0_q3_graph'
  | 'd0_q4_graph'
  | 'd0_q5_graph'
  | 'd0_q6_graph'
  | 'd0_q7_graph'
  | 'd0_q9_graph'
  | 'd0_q12_bbt'
  | 'd0_q13_bbt'
  | 'd0_q20_bbt'
  | 'd2_q1_bxd'
  | 'd2_q2_graph'
  | 'd2_q3_bxd'
  | 'd2_q4_graph'
  | 'd2_q5_graph'
  | 'd2_q7_bbt'
  | 'd2_q9_graph'
  | 'd2_q10_bbt'
  | 'd2_p2_q1_graph'
  | 'd2_p2_q2_bbt'
  | 'd2_p3_q3_graph'
  | 'd2_p4_q1_bbt'
  | 'd3_q1_bbt'
  | 'd3_q2_graph'
  | 'd3_q3_graph'
  | 'd3_q4_bbt'
  | 'd3_q5_graph'
  | 'd3_q6_graph'
  | 'd3_q7_graph'
  | 'd3_q10_bxd'
  | 'd3_q11_bbt'
  | 'd3_p2_q1_bbt'
  | 'd3_p2_q2_graph'
  | 'd3_p4_q1_bbt'
  | 'd3_p4_q3_bbt'
  | 'd4_q1_bbt'
  | 'd4_q2_graph'
  | 'd4_q3_graph'
  | 'd4_q4_bbt'
  | 'd4_q5_graph'
  | 'd4_q6_graph'
  | 'd4_q7_graph'
  | 'd4_q10_bxd'
  | 'd4_q11_bbt'
  | 'd4_p2_q1_bbt'
  | 'd4_p2_q2_graph'
  | 'd4_p4_q1_bbt'
  | 'd5_q1_bbt'
  | 'd5_q2_graph'
  | 'd5_q3_graph'
  | 'd5_q4_bbt'
  | 'd5_q5_graph'
  | 'd5_q6_graph'
  | 'd5_q7_graph'
  | 'd5_q10_bxd'
  | 'd5_q11_bbt'
  | 'd5_p2_q1_bbt'
  | 'd5_p2_q2_graph'
  | 'd5_p4_q1_bbt'
  | 'd6_q1_bbt'
  | 'd6_q2_graph'
  | 'd6_q3_graph'
  | 'd6_q4_graph'
  | 'd6_q5_graph'
  | 'd6_q6_graph'
  | 'd6_q7_graph'
  | 'd6_q9_graph'
  | 'd6_q12_bbt'
  | 'd6_p2_q1_bbt'
  | 'd6_p2_q2_graph'
  | 'd6_p4_q1_bbt'
  | 'd7_q1_bxd'
  | 'd7_q2_graph'
  | 'd7_q3_bxd'
  | 'd7_q4_graph'
  | 'd7_q5_graph'
  | 'd7_q7_bbt'
  | 'd7_q9_graph'
  | 'd7_q10_bbt'
  | 'd7_p2_q1_graph'
  | 'd7_p2_q2_bbt'
  | 'd7_p3_q3_graph'
  | 'd7_p4_q1_bbt'
  | 'd8_q1_bbt'
  | 'd8_q2_graph'
  | 'd8_q3_graph'
  | 'd8_q4_bbt'
  | 'd8_q5_graph'
  | 'd8_q6_graph'
  | 'd8_q7_graph'
  | 'd8_q10_bxd'
  | 'd8_q11_bbt'
  | 'd8_p2_q1_bbt'
  | 'd8_p2_q2_graph'
  | 'd8_p4_q1_bbt'
  | 'd8_p4_q3_bbt'
  | 'custom';

interface TikzFigureProps {
  type?: TikzDiagramType | string;
  tikzCode?: string;
  imageUrl?: string;
  caption?: string;
  className?: string;
}

const MATH_SERIF = '"Times New Roman", Times, "KaTeX_Main", "Computer Modern Serif", Georgia, serif';

/**
 * Tính giá trị biểu thức hàm số đơn giản y = f(x) trong lệnh plot[domain=...] (\x, {expr}) của TikZ
 */
function evalTikzPlotFormula(formulaRaw: string, xVal: number): number | null {
  try {
    let expr = formulaRaw
      .trim()
      .replace(/^\{|\}$/g, '')
      .replace(/\\x\b/g, `(${xVal})`)
      .replace(/\bx\b/g, `(${xVal})`)
      .replace(/\^/g, '**')
      .replace(/sqrt\s*\(/gi, 'Math.sqrt(')
      .replace(/sin\s*\(/gi, 'Math.sin(')
      .replace(/cos\s*\(/gi, 'Math.cos(')
      .replace(/tan\s*\(/gi, 'Math.tan(')
      .replace(/abs\s*\(/gi, 'Math.abs(')
      .replace(/ln\s*\(/gi, 'Math.log(')
      .replace(/exp\s*\(/gi, 'Math.exp(');

    // Chỉ cho phép các ký tự toán học an toàn
    if (!/^[0-9+\-*/().\sA-Za-z_]+$/.test(expr)) return null;
    const fn = new Function(`return (${expr});`);
    const y = Number(fn());
    if (!Number.isFinite(y) || Math.abs(y) > 50) return null;
    return y;
  } catch {
    return null;
  }
}

/**
 * Bộ dịch trực tiếp khối mã \begin{tikzpicture} ... \end{tikzpicture} tùy chỉnh sang hình vẽ vector SVG chuẩn TikZ
 */
function renderCustomTikzToSvg(rawCode: string): React.ReactNode {
  const coords = new Map<string, { x: number; y: number }>();

  const scaleMatch = rawCode.match(/scale\s*=\s*([\d\.]+)/);
  const userScale = scaleMatch ? parseFloat(scaleMatch[1]) || 1 : 1;

  const evalNum = (expr: string): number => {
    const clean = expr
      .replace(/[{}]/g, '')
      .replace(/cos\(\s*60\s*\)/g, '0.5')
      .replace(/sin\(\s*60\s*\)/g, '0.866')
      .replace(/cos\(\s*30\s*\)/g, '0.866')
      .replace(/sin\(\s*30\s*\)/g, '0.5')
      .replace(/cos\(\s*45\s*\)/g, '0.707')
      .replace(/sin\(\s*45\s*\)/g, '0.707')
      .replace(/sqrt\(\s*3\s*\)/g, '1.732')
      .replace(/sqrt\(\s*2\s*\)/g, '1.414')
      .trim();
    if (clean.includes('*')) {
      const parts = clean.split('*').map((p) => parseFloat(p.trim()));
      if (parts.every((n) => !isNaN(n))) {
        return parts.reduce((a, b) => a * b, 1);
      }
    }
    const v = parseFloat(clean);
    return isNaN(v) ? 0 : v;
  };

  // 1. Đọc các điểm \coordinate (A) at (x, y); và \node (m1) at (x, y) {...};
  const coordRegex = /\\coordinate\s*\(\s*([A-Za-z0-9_]+)\s*\)\s*at\s*\(\s*([^\),]+)\s*,\s*([^\)]+)\s*\)/g;
  let cm;
  while ((cm = coordRegex.exec(rawCode)) !== null) {
    coords.set(cm[1], { x: evalNum(cm[2]), y: evalNum(cm[3]) });
  }

  const namedNodeRegex =
    /\\node(?:\[[^\]]*\])?\s*\(\s*([A-Za-z0-9_]+)\s*\)\s*at\s*\(\s*([^\),]+)\s*,\s*([^\)]+)\s*\)/g;
  let nnm;
  while ((nnm = namedNodeRegex.exec(rawCode)) !== null) {
    coords.set(nnm[1], { x: evalNum(nnm[2]), y: evalNum(nnm[3]) });
  }

  const resolvePoint = (ptStr: string): { x: number; y: number } | null => {
    const clean = ptStr.trim();
    if (coords.has(clean)) {
      return coords.get(clean)!;
    }
    const m = clean.match(/^\(\s*([^\),]+)\s*,\s*([^\)]+)\s*\)$/);
    if (m) {
      return { x: evalNum(m[1]), y: evalNum(m[2]) };
    }
    const named = clean.match(/^\(\s*([A-Za-z0-9_]+)\s*\)$/);
    if (named && coords.has(named[1])) {
      return coords.get(named[1])!;
    }
    return null;
  };

  // Thu thập tất cả tọa độ để tự động căn khung viewBox
  const allPoints: { x: number; y: number }[] = [];
  coords.forEach((pt) => allPoints.push(pt));
  const rawPairRegex = /\(\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*\)/g;
  let pm;
  while ((pm = rawPairRegex.exec(rawCode)) !== null) {
    allPoints.push({ x: parseFloat(pm[1]), y: parseFloat(pm[2]) });
  }

  const minX = allPoints.length > 0 ? Math.min(...allPoints.map((p) => p.x)) - 0.9 : -4;
  const maxX = allPoints.length > 0 ? Math.max(...allPoints.map((p) => p.x)) + 1.1 : 5;
  const minY = allPoints.length > 0 ? Math.min(...allPoints.map((p) => p.y)) - 0.9 : -3;
  const maxY = allPoints.length > 0 ? Math.max(...allPoints.map((p) => p.y)) + 0.9 : 4;

  const widthUnits = Math.max(maxX - minX, 3.5);
  const heightUnits = Math.max(maxY - minY, 2.5);
  const svgW = 480;
  const svgH = Math.min(340, Math.max(175, Math.round((svgW * heightUnits) / widthUnits)));

  const unitPx = Math.min((svgW - 48) / widthUnits, (svgH - 36) / heightUnits);
  const toSvgX = (x: number) => 24 + (x - minX) * unitPx;
  const toSvgY = (y: number) => svgH - 18 - (y - minY) * unitPx;

  const cleanLatexLabel = (raw: string): string => {
    return raw
      .replace(/^\$|\$$/g, '')
      .replace(/\\mathbb\{R\}/g, 'ℝ')
      .replace(/\\mathbb\{Z\}/g, 'ℤ')
      .replace(/\\mathbb\{N\}/g, 'ℕ')
      .replace(/\\cap/g, '∩')
      .replace(/\\cup/g, '∪')
      .replace(/\\setminus/g, '∖')
      .replace(/\+\\infty/g, '+∞')
      .replace(/-\\infty/g, '−∞')
      .replace(/\\infty/g, '∞')
      .replace(/\\le/g, '≤')
      .replace(/\\ge/g, '≥')
      .replace(/\\approx/g, '≈')
      .replace(/\^\\circ/g, '°')
      .replace(/\\overrightarrow\{([^}]+)\}/g, '$1⃗')
      .replace(/\\vec\{([^}]+)\}/g, '$1⃗')
      .replace(/\\sqrt\{([^}]+)\}/g, '√($1)')
      .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '$1/$2')
      .replace(/\\text\{([^}]+)\}/g, '$1')
      .replace(/\\[a-zA-Z]+/g, '')
      .replace(/[{}]/g, '')
      .trim();
  };

  const elements: React.ReactNode[] = [];
  const statements = rawCode
    .replace(/%.*$/gm, '')
    .replace(/\\begin\{tikzpicture\}(?:\[[^\]]*\])?/g, '')
    .replace(/\\end\{tikzpicture\}/g, '')
    .split(';');

  statements.forEach((stmt, idx) => {
    const line = stmt.trim();
    if (!line) return;

    const isDashed = /dashed/.test(line);
    const isDotted = /dotted/.test(line);
    const hasArrowEnd = /->/.test(line);
    const hasArrowBoth = /<->/.test(line);
    const isVeryThick = /very\s+thick/.test(line);

    let strokeColor = '#0f172a';
    if (/cyan|sky|blue|teal/.test(line)) strokeColor = '#1d4ed8';
    else if (/emerald|green/.test(line)) strokeColor = '#047857';
    else if (/amber|orange/.test(line)) strokeColor = '#b45309';
    else if (/rose|red|crimson/.test(line)) strokeColor = '#be123c';
    else if (/gray/.test(line)) strokeColor = '#64748b';

    // 1. \draw hoặc \filldraw hình tròn: \draw[...] (x,y) circle (r);
    const circleMatch = line.match(
      /\\(?:draw|filldraw|fill)(?:\[[^\]]*\])?\s*(\([^\)]+\))\s*circle\s*\(\s*([\d\.]+)\s*(?:cm|pt)?\s*\)/
    );
    if (circleMatch) {
      const center = resolvePoint(circleMatch[1]);
      const rawR = parseFloat(circleMatch[2]) || 1;
      const isPt = /pt\s*\)/.test(circleMatch[0]);
      if (center) {
        const rPx = isPt ? Math.max(3, rawR * 1.1) : rawR * unitPx * (userScale > 0.2 ? 1 : userScale);
        elements.push(
          <circle
            key={`c-${idx}`}
            cx={toSvgX(center.x)}
            cy={toSvgY(center.y)}
            r={rPx}
            fill={isPt ? strokeColor : /^\\fill/.test(line) ? `${strokeColor}22` : 'none'}
            stroke={strokeColor}
            strokeWidth={isPt ? 1.5 : 1.8}
            strokeDasharray={isDashed ? '5 3' : isDotted ? '2 2' : undefined}
          />
        );
      }
    }

    // 2. \draw hoặc \fill hình chữ nhật: (x1,y1) rectangle (x2,y2)
    const rectMatch = line.match(
      /\\(?:draw|fill|filldraw)(?:\[[^\]]*\])?\s*(\([^\)]+\))\s*rectangle\s*(\([^\)]+\))/
    );
    if (rectMatch) {
      const p1 = resolvePoint(rectMatch[1]);
      const p2 = resolvePoint(rectMatch[2]);
      if (p1 && p2) {
        const x = Math.min(toSvgX(p1.x), toSvgX(p2.x));
        const y = Math.min(toSvgY(p1.y), toSvgY(p2.y));
        const w = Math.abs(toSvgX(p2.x) - toSvgX(p1.x));
        const h = Math.abs(toSvgY(p2.y) - toSvgY(p1.y));
        const isHatched = /pattern\s*=/.test(line);
        elements.push(
          <rect
            key={`rect-${idx}`}
            x={x}
            y={y}
            width={w}
            height={h}
            fill={isHatched ? 'url(#tikz-hatch-ne)' : /^\\fill/.test(line) ? '#e0f2fe' : 'none'}
            stroke={/^\\fill\[/.test(line) && !/draw=/.test(line) ? 'none' : strokeColor}
            strokeWidth={1.5}
          />
        );
      }
    }

    // 2b. Đồ thị hàm số \draw[...] plot[domain=a:b] (\x, {f(\x)})
    if (/plot/.test(line)) {
      const coordsPlotMatch = line.match(/plot\s*(?:\[[^\]]*\])?\s*coordinates\s*\{([^}]+)\}/);
      if (coordsPlotMatch) {
        const pairMatches = [...coordsPlotMatch[1].matchAll(/\(\s*(-?[\d\.]+)\s*,\s*(-?[\d\.]+)\s*\)/g)];
        const pts = pairMatches.map((m) => ({
          x: toSvgX(parseFloat(m[1])),
          y: toSvgY(parseFloat(m[2])),
        }));
        if (pts.length >= 2) {
          const d = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ');
          elements.push(
            <path
              key={`plot-coords-${idx}`}
              d={d}
              fill="none"
              stroke={strokeColor === '#0f172a' ? '#1d4ed8' : strokeColor}
              strokeWidth={2.2}
            />
          );
        }
      } else {
        const domainMatch = line.match(/domain\s*=\s*(-?[\d\.]+)\s*:\s*(-?[\d\.]+)/);
        const exprMatch = line.match(/plot\s*(?:\[[^\]]*\])?\s*\(\s*\\x\s*,\s*(\{[\s\S]+\}|[^\)]+)\)/);
        if (exprMatch) {
          const domStart = domainMatch ? parseFloat(domainMatch[1]) : minX + 0.5;
          const domEnd = domainMatch ? parseFloat(domainMatch[2]) : maxX - 0.5;
          const rawFormula = exprMatch[1].trim();
          const steps = 90;
          const stepSize = (domEnd - domStart) / steps;
          const pathParts: string[] = [];
          let penDown = false;

          for (let s = 0; s <= steps; s++) {
            const xv = domStart + s * stepSize;
            const yv = evalTikzPlotFormula(rawFormula, xv);
            if (yv !== null && yv >= minY - 2 && yv <= maxY + 2) {
              const sx = toSvgX(xv).toFixed(1);
              const sy = toSvgY(yv).toFixed(1);
              pathParts.push(`${penDown ? 'L' : 'M'} ${sx} ${sy}`);
              penDown = true;
            } else {
              penDown = false;
            }
          }

          if (pathParts.length >= 2) {
            elements.push(
              <path
                key={`plot-fn-${idx}`}
                d={pathParts.join(' ')}
                fill="none"
                stroke={strokeColor === '#0f172a' ? '#1d4ed8' : strokeColor}
                strokeWidth={2.2}
              />
            );
          }
        }
      }
    }

    // 3. Đường gấp khúc / đoạn thẳng / mũi tên bảng biến thiên: (p1) -- (p2) -- ...
    if (line.includes('--') && /^\\(?:draw|fill|filldraw)/.test(line) && !/plot/.test(line)) {
      const ptMatches = [...line.matchAll(/\(\s*[A-Za-z0-9_]+\s*\)|\(\s*-?[\d\.]+\s*,\s*-?[\d\.]+\s*\)/g)];
      const rawPts = ptMatches.map((m) => {
        const rawToken = m[0].replace(/[\(\)\s]/g, '');
        return { pt: resolvePoint(m[0]), isNamedNode: coords.has(rawToken) };
      }).filter((item) => item.pt !== null) as { pt: { x: number; y: number }; isNamedNode: boolean }[];

      const isClosed = /--\s*cycle/.test(line);

      if (rawPts.length >= 2) {
        // Nếu nối giữa 2 node có nhãn (ví dụ mũi tên BBT (m1) -- (M1)), rút ngắn 2 đầu một chút để không đè lên chữ
        const svgPts = rawPts.map((item) => ({
          x: toSvgX(item.pt.x),
          y: toSvgY(item.pt.y),
          isNamedNode: item.isNamedNode,
        }));

        if (svgPts.length === 2 && (svgPts[0].isNamedNode || svgPts[1].isNamedNode) && hasArrowEnd) {
          const dx = svgPts[1].x - svgPts[0].x;
          const dy = svgPts[1].y - svgPts[0].y;
          const len = Math.hypot(dx, dy);
          if (len > 36) {
            const shrinkStart = svgPts[0].isNamedNode ? 16 : 0;
            const shrinkEnd = svgPts[1].isNamedNode ? 16 : 0;
            svgPts[0].x += (dx / len) * shrinkStart;
            svgPts[0].y += (dy / len) * shrinkStart;
            svgPts[1].x -= (dx / len) * shrinkEnd;
            svgPts[1].y -= (dy / len) * shrinkEnd;
          }
        }

        const pointsAttr = svgPts.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
        if (isClosed || /^\\fill/.test(line)) {
          elements.push(
            <polygon
              key={`poly-${idx}`}
              points={pointsAttr}
              fill={/^\\fill/.test(line) || /fill=/.test(line) ? 'rgba(14, 165, 233, 0.16)' : 'none'}
              stroke={strokeColor}
              strokeWidth={isVeryThick ? 2.4 : 1.8}
              strokeDasharray={isDashed ? '5 3' : undefined}
            />
          );
        } else {
          elements.push(
            <polyline
              key={`line-${idx}`}
              points={pointsAttr}
              fill="none"
              stroke={strokeColor}
              strokeWidth={isVeryThick ? 2.4 : 1.7}
              strokeDasharray={isDashed ? '5 3' : isDotted ? '2 2' : undefined}
              markerEnd={hasArrowEnd || hasArrowBoth ? 'url(#tikz-arrow)' : undefined}
              markerStart={hasArrowBoth ? 'url(#tikz-arrow-start)' : undefined}
            />
          );
        }
      }
    }

    // 4. Các nhãn \node (optionalName) at (x,y) {label}
    const nodeAtMatches = [
      ...line.matchAll(/node(?:\[([^\]]*)\])?\s*(?:\([A-Za-z0-9_]+\)\s*)?at\s*(\([^\)]+\))\s*\{([\s\S]*?)\}/g),
    ];
    nodeAtMatches.forEach((nm, nIdx) => {
      const opts = nm[1] || '';
      const pt = resolvePoint(nm[2]);
      const label = cleanLatexLabel(nm[3]);
      if (pt && label) {
        let dx = 0;
        let dy = 5;
        if (/above/.test(opts)) dy = -8;
        if (/below/.test(opts)) dy = 15;
        if (/left/.test(opts)) dx = -14;
        if (/right/.test(opts)) dx = 14;
        elements.push(
          <text
            key={`node-at-${idx}-${nIdx}`}
            x={toSvgX(pt.x) + dx}
            y={toSvgY(pt.y) + dy}
            fill="#0f172a"
            fontFamily={MATH_SERIF}
            fontSize="14"
            fontStyle={/^[A-Za-zxy]$/.test(label) ? 'italic' : 'normal'}
            fontWeight="600"
            textAnchor="middle"
          >
            {label}
          </text>
        );
      }
    });

    // Nhãn ở cuối đoạn thẳng: ... (x,y) node[right] {label}
    const trailingNodeMatches = [
      ...line.matchAll(
        /(\(\s*[A-Za-z0-9_]+\s*\)|\(\s*-?[\d\.]+\s*,\s*-?[\d\.]+\s*\))\s*(?:circle\s*\([^\)]+\)\s*)?node(?:\[([^\]]*)\])?\s*\{([\s\S]*?)\}/g
      ),
    ];
    trailingNodeMatches.forEach((tm, tIdx) => {
      const pt = resolvePoint(tm[1]);
      const opts = tm[2] || '';
      const label = cleanLatexLabel(tm[3]);
      if (pt && label) {
        let dx = 0;
        let dy = 4;
        if (/above/.test(opts)) dy = -9;
        if (/below/.test(opts)) dy = 16;
        if (/left/.test(opts)) dx = -14;
        if (/right/.test(opts)) dx = 14;
        elements.push(
          <text
            key={`trail-${idx}-${tIdx}`}
            x={toSvgX(pt.x) + dx}
            y={toSvgY(pt.y) + dy}
            fill="#0f172a"
            fontFamily={MATH_SERIF}
            fontSize="13.5"
            fontStyle={/^[A-Za-zxy]$/.test(label) ? 'italic' : 'normal'}
            fontWeight="600"
            textAnchor="middle"
          >
            {label}
          </text>
        );
      }
    });
  });

  return (
    <svg
      viewBox={`0 0 ${svgW} ${svgH}`}
      className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
    >
      <defs>
        <marker
          id="tikz-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
        </marker>
        <marker
          id="tikz-arrow-start"
          viewBox="0 0 10 10"
          refX="2"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto"
        >
          <path d="M 10 1.5 L 1 5 L 10 8.5 L 8 5 z" fill="#0f172a" />
        </marker>
        <pattern id="tikz-hatch-ne" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="8" stroke="#64748b" strokeWidth="1.2" />
        </pattern>
      </defs>
      {elements}
    </svg>
  );
}

export const TikzFigure: React.FC<TikzFigureProps> = ({
  type,
  tikzCode,
  imageUrl,
  caption,
  className = '',
}) => {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  // Chuẩn mã TikZ tương ứng cho từng hình vẽ toán học (ẩn kết quả bằng dấu ?)
  const getTikzCode = (diagramType?: TikzDiagramType | string): string => {
    if (tikzCode && tikzCode.trim()) {
      return tikzCode.trim();
    }

    switch (diagramType) {
      case 'number_line_intersection':
        return `% TikZ: Biểu diễn giao của hai tập hợp A = [-2; 3] và B = (1; +\\infty)
\\begin{tikzpicture}[>=stealth, scale=1.1]
  % Trục số thực
  \\draw[->, thick] (-3.5,0) -- (4.5,0) node[below] {$\\mathbb{R}$};
  \\fill[pattern=north east lines, pattern color=gray!60] (-3.3,-0.18) rectangle (1,0.18);
  \\fill[pattern=north east lines, pattern color=gray!60] (3,-0.18) rectangle (4.2,0.18);
  \\draw (-2, 0.08) -- (-2, -0.08) node[below=4pt] {$-2$};
  \\draw (1, 0.08) -- (1, -0.08) node[below=4pt] {$?$};
  \\draw (3, 0.08) -- (3, -0.08) node[below=4pt] {$?$};
  \\draw[very thick, blue!80!black] (1, 0) -- (3, 0) node[midway, above=5pt] {$A \\cap B = ?$};
\\end{tikzpicture}`;

      case 'set_difference_venn':
        return `% TikZ: Biểu đồ Ven minh họa hiệu hai tập hợp A \\setminus B = ?
\\begin{tikzpicture}[scale=1.0]
  % Miền A \\setminus B tô gạch chéo
  \\begin{scope}
    \\clip (-0.85, 0) circle (1.4cm);
    \\fill[pattern=north east lines, pattern color=blue!50] (-2.5,-1.6) rectangle (2.5,1.6);
    \\fill[white] (0.85, 0) circle (1.4cm);
  \\end{scope}
  \\draw[thick] (-0.85, 0) circle (1.4cm);
  \\draw[thick] (0.85, 0) circle (1.4cm);
  \\node[above] at (-1.2, 1.4) {$A$};
  \\node[above] at (1.2, 1.4) {$B$};
  \\node[font=\\bfseries, red!80!black] at (-1.35, 0) {$A \\setminus B = ?$};
  \\node at (0, 0) {$?$};
  \\node at (1.35, 0) {$?$};
\\end{tikzpicture}`;

      case 'venn_diagram_40':
        return `% TikZ: Biểu đồ Ven 40 học sinh (CLB Bóng đá A và Cầu lông B)
\\begin{tikzpicture}[scale=1.0]
  \\draw[thick, rounded corners=4pt] (-3.4,-2.0) rectangle (3.4,2.0);
  \\node[anchor=north west] at (-3.2, 1.85) {$n(U) = 40$};
  \\draw[thick, fill=blue!8] (-0.85, -0.05) circle (1.4cm);
  \\draw[thick, fill=teal!8] (0.85, -0.05) circle (1.4cm);
  \\draw[thick] (-0.85, -0.05) circle (1.4cm);
  \\node at (-1.5, 1.45) {Bóng đá $A$ ($25$)};
  \\node at (1.5, 1.45) {Cầu lông $B$ ($18$)};
  \\node[font=\\bfseries] at (-1.35, -0.05) {$?$};
  \\node[font=\\bfseries] at (0, -0.05) {$8$};
  \\node[font=\\bfseries] at (1.35, -0.05) {$?$};
  \\node at (2.4, -1.55) {Ngoài: $?$};
\\end{tikzpicture}`;

      case 'venn_diagram_100':
        return `% TikZ: Biểu đồ Ven 100 học sinh (Toán n(A)=65, Văn n(B)=55)
\\begin{tikzpicture}[scale=1.0]
  \\draw[thick, rounded corners=4pt] (-3.4,-2.0) rectangle (3.4,2.0);
  \\node[anchor=north west] at (-3.2, 1.85) {$n(A \\cup B) = 100$};
  \\draw[thick, fill=blue!8] (-0.85, -0.05) circle (1.4cm);
  \\draw[thick, fill=teal!8] (0.85, -0.05) circle (1.4cm);
  \\draw[thick] (-0.85, -0.05) circle (1.4cm);
  \\node at (-1.5, 1.45) {Toán $n(A) = 65$};
  \\node at (1.5, 1.45) {Văn $n(B) = 55$};
  \\node at (-1.35, -0.05) {$?$};
  \\node[font=\\bfseries, red!80!black] at (0, -0.05) {$A \\cap B = ?$};
  \\node at (1.35, -0.05) {$?$};
\\end{tikzpicture}`;

      case 'bpt_halfplane_2x_y_4':
        return `% TikZ: Miền nghiệm của bất phương trình 2x - y + 4 >= 0
\\begin{tikzpicture}[>=stealth, scale=0.65]
  \\draw[->, thick] (-3.5,0) -- (3.2,0) node[below] {$x$};
  \\draw[->, thick] (0,-1.5) -- (0,5.5) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  % Đường thẳng d: 2x - y + 4 = 0 qua (-2,0) và (0,4)
  \\fill[pattern=north east lines, pattern color=gray!45] (-3.2,-1.2) -- (-3.2,5.2) -- (0.6,5.2) -- (-2.6,-1.2) -- cycle;
  \\draw[thick, blue!80!black] (-2.6,-1.2) -- (0.6,5.2) node[right] {$2x - y + 4 = 0$};
  \\filldraw (-2,0) circle (2pt) node[below right] {$-2$};
  \\filldraw (0,4) circle (2pt) node[right] {$4$};
  \\node[red!80!black, font=\\bfseries] at (1.3, 2.2) {$M(x; y) = ?$};
\\end{tikzpicture}`;

      case 'feasible_region_quad':
        return `% TikZ: Miền nghiệm tứ giác OABC của hệ BPT trên Oxy
\\begin{tikzpicture}[>=stealth, scale=0.85]
  \\draw[->, thick] (-1.0,0) -- (5.0,0) node[below] {$x$};
  \\draw[->, thick] (0,-0.8) -- (0,4.6) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\fill[blue!15] (0,0) -- (0,1) -- (1,3) -- (4,0) -- cycle;
  \\draw[thick] (-0.4, 4.4) -- (4.4, -0.4) node[above right] {$x+y=4$};
  \\draw[thick] (-0.7, -0.4) -- (1.7, 4.4) node[right] {$2x-y=-1$};
  \\draw[dashed] (1,0) node[below] {$?$} -- (1,3) -- (0,3) node[left] {$?$};
  \\filldraw (0,0) circle (1.8pt);
  \\filldraw (0,1) circle (1.8pt) node[left] {$A$};
  \\filldraw[red!80!black] (1,3) circle (2pt) node[above right] {$B(?; ?)$};
  \\filldraw (4,0) circle (1.8pt) node[below] {$C$};
\\end{tikzpicture}`;

      case 'feasible_region_aircon':
        return `% TikZ: Miền nghiệm bài toán tối ưu x + y <= 100, 2x + y <= 120
\\begin{tikzpicture}[>=stealth, scale=0.036]
  \\draw[->, thick] (-15,0) -- (125,0) node[below] {$x$};
  \\draw[->, thick] (0,-15) -- (0,132) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\fill[blue!15] (0,0) -- (0,100) -- (20,80) -- (60,0) -- cycle;
  \\draw[thick, blue!80!black] (-8, 108) -- (108, -8) node[above right] {$x+y=100$};
  \\draw[thick, teal!80!black] (-4, 128) -- (64, -8) node[right] {$2x+y=120$};
  \\draw[dashed] (20,0) node[below] {$?$} -- (20,80) -- (0,80) node[left] {$?$};
  \\filldraw (0,0) circle (45pt);
  \\filldraw (0,100) circle (45pt) node[left] {$A$};
  \\filldraw[red!80!black] (20,80) circle (55pt) node[above right] {$B(?; ?)$};
  \\filldraw (60,0) circle (45pt) node[below] {$C$};
  \\filldraw (100,0) circle (35pt) node[below] {$100$};
  \\filldraw (0,120) circle (35pt) node[left] {$120$};
\\end{tikzpicture}`;

      case 'trig_unit_circle_supp':
        return `% TikZ: Nửa đường tròn đơn vị biểu diễn hai góc bù nhau alpha và 180^o - alpha
\\begin{tikzpicture}[>=stealth, scale=1.8]
  \\draw[->, thick] (-1.35,0) -- (1.35,0) node[below] {$x$};
  \\draw[->, thick] (0,-0.2) -- (0,1.35) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[thick] (1,0) arc (0:180:1);
  \\coordinate (M) at ({cos(50)}, {sin(50)});
  \\coordinate (N) at ({-cos(50)}, {sin(50)});
  \\draw[thick, blue!80!black] (0,0) -- (M) node[above right] {$M$};
  \\draw[thick, red!75!black] (0,0) -- (N) node[above left] {$M'(?; ?)$};
  \\draw[dashed] (N) -- (M);
  \\draw[dashed] (M) -- ({cos(50)},0) node[below] {$\\cos\\alpha$};
  \\draw[dashed] (N) -- ({-cos(50)},0) node[below] {$?$};
  \\draw (0.28,0) arc (0:50:0.28) node[right=2pt, above=1pt] {$\\alpha$};
  \\draw (0.42,0) arc (0:130:0.42);
  \\node at (-0.18, 0.52) {$180^\\circ-\\alpha$};
\\end{tikzpicture}`;

      case 'triangle_60deg':
        return `% TikZ: Tam giác ABC có b = 5, c = 8 và góc A = 60 độ
\\begin{tikzpicture}[scale=0.55]
  \\coordinate (A) at (0, 0);
  \\coordinate (B) at (8, 0);
  \\coordinate (C) at ({5*cos(60)}, {5*sin(60)});
  \\draw[thick, fill=blue!5] (A) -- (B) node[midway, below] {$c = 8$}
    -- (C) node[midway, above right] {$a = ?$}
    -- cycle node[midway, above left] {$b = 5$};
  \\draw (0.9, 0) arc (0:60:0.9);
  \\node at (1.35, 0.5) {$60^\\circ$};
  \\filldraw (A) circle (2.2pt) node[below left] {$A$};
  \\filldraw (B) circle (2.2pt) node[below right] {$B$};
  \\filldraw (C) circle (2.2pt) node[above] {$C$};
\\end{tikzpicture}`;

      case 'triangle_sin_circumcircle':
        return `% TikZ: Tam giác ABC nội tiếp đường tròn (O; R) với a = 6, góc A = 30 độ
\\begin{tikzpicture}[scale=0.38]
  \\coordinate (O) at (0,0);
  \\draw[thick] (O) circle (6cm);
  \\coordinate (A) at (90:6);
  \\coordinate (B) at (210:6);
  \\coordinate (C) at (330:6);
  \\draw[thick, fill=blue!5] (A) -- (B) -- (C) -- cycle;
  \\draw[dashed, red!75!black] (O) -- (B) node[midway, above left] {$R = ?$};
  \\draw[dashed, red!75!black] (O) -- (C) node[midway, above right] {$R = ?$};
  \\filldraw (O) circle (3pt) node[above] {$O$};
  \\filldraw (A) circle (3pt) node[above] {$A$};
  \\filldraw (B) circle (3pt) node[below left] {$B$};
  \\filldraw (C) circle (3pt) node[below right] {$C$};
  \\node[below] at (0, -3) {$a = BC = 6$};
  \\node[below] at (0, 4.4) {$30^\\circ$};
\\end{tikzpicture}`;

      case 'triangle_obtuse_cos':
        return `% TikZ: Tam giác ABC với b = 3, c = 5, cos A = -1/15 (góc A tù)
\\begin{tikzpicture}[scale=0.65]
  \\coordinate (A) at (0, 0);
  \\coordinate (B) at (5, 0);
  \\coordinate (C) at (-0.2, 2.99);
  \\draw[thick, fill=blue!5] (A) -- (B) node[midway, below] {$c = 5$}
    -- (C) node[midway, above right] {$a = ?$}
    -- cycle node[midway, left] {$b = 3$};
  \\draw (0.7, 0) arc (0:94:0.7);
  \\filldraw (A) circle (2pt) node[below left] {$A$};
  \\filldraw (B) circle (2pt) node[below right] {$B$};
  \\filldraw (C) circle (2pt) node[above] {$C$};
\\end{tikzpicture}`;

      case 'triangle_heron':
        return `% TikZ: Tam giác ABC với 3 cạnh a = 7, b = 8, c = 5
\\begin{tikzpicture}[scale=0.52]
  \\coordinate (A) at (0,0);
  \\coordinate (B) at (5,0);
  \\coordinate (C) at (4, 6.93);
  \\draw[thick, fill=blue!5] (A) -- (B) node[midway, below] {$c = 5$}
    -- (C) node[midway, right] {$a = 7$}
    -- cycle node[midway, above left] {$b = 8$};
  \\node[red!80!black, font=\\bfseries] at (2.8, 2.3) {$S = ?$};
  \\filldraw (A) circle (2.2pt) node[below left] {$A$};
  \\filldraw (B) circle (2.2pt) node[below right] {$B$};
  \\filldraw (C) circle (2.2pt) node[above] {$C$};
\\end{tikzpicture}`;

      case 'river_triangulation':
        return `% TikZ: Bài toán đo khoảng cách AB qua hai bờ sông (AC = 60m, góc A = 75^o, góc C = 60^o)
\\begin{tikzpicture}[scale=0.07]
  % Hai bờ sông song song
  \\fill[cyan!12] (-12, 22) rectangle (82, 58);
  \\draw[dashed, blue!60] (-12, 22) -- (82, 22);
  \\draw[dashed, blue!60] (-12, 58) -- (82, 58);
  \\coordinate (C) at (0, 0);
  \\coordinate (A) at (60, 0);
  \\coordinate (B) at (36.8, 63.7);
  \\draw[thick] (C) -- (A) node[midway, below] {$AC = 60\\text{ m}$};
  \\draw[dashed] (C) -- (B);
  \\draw[thick, blue!80!black] (A) -- (B) node[midway, right] {$AB = ?$};
  \\draw (9,0) arc (0:60:9) node[right=4pt, above=2pt] {$60^\\circ$};
  \\draw (51,0) arc (180:105:9) node[left=4pt, above=2pt] {$75^\\circ$};
  \\filldraw (C) circle (14pt) node[below left] {$C$};
  \\filldraw (A) circle (14pt) node[below right] {$A$};
  \\filldraw (B) circle (14pt) node[above] {$B$};
\\end{tikzpicture}`;

      case 'parabola_vertex_2_1':
        return `% TikZ: Đồ thị Parabol (P): y = -x^2 + 4x - 3 có đỉnh I(?; ?)
\\begin{tikzpicture}[>=stealth, scale=0.8]
  \\draw[->, thick] (-0.8,0) -- (4.6,0) node[below] {$x$};
  \\draw[->, thick] (0,-3.4) -- (0,2.2) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[dashed, gray] (2,-3.2) -- (2,1.8);
  \\draw[dashed] (2,0) node[below] {$?$} -- (2,1) -- (0,1) node[left] {$?$};
  \\draw[thick, blue!80!black, domain=-0.1:4.1, samples=60] plot (\\x, {-(\\x)^2 + 4*(\\x) - 3});
  \\filldraw[red!80!black] (2,1) circle (2pt) node[above right] {$I(?; ?)$};
  \\filldraw (1,0) circle (1.8pt) node[below left] {$1$};
  \\filldraw (3,0) circle (1.8pt) node[below right] {$3$};
  \\filldraw (0,-3) circle (1.8pt) node[left] {$-3$};
\\end{tikzpicture}`;

      case 'number_line_minus2_4':
        return `% TikZ: Biểu diễn tập hợp A \\cap B = ? trên trục số (Đề 01 - Phần IV Câu 1)
\\begin{tikzpicture}[>=stealth, scale=0.9]
  \\draw[->, thick] (-4.5,0) -- (6.2,0);
  \\fill[pattern=north east lines, pattern color=gray!65] (-4.3,-0.2) rectangle (-2,0.2);
  \\fill[pattern=north east lines, pattern color=gray!65] (4,-0.2) rectangle (5.8,0.2);
  \\draw[very thick, blue!80!black] (-2,0) -- (4,0) node[midway, above=6pt] {$A \\cap B = ?$};
  \\node[font=\\bfseries, scale=1.2] at (-2,0) {$($};
  \\node[font=\\bfseries, scale=1.2] at (4,0) {$]$};
  \\node[below=6pt] at (-2,0) {$?$};
  \\node[below=6pt] at (4,0) {$?$};
\\end{tikzpicture}`;

      case 'lighthouse_coast':
        return `% TikZ: Bài toán quan sát ngọn hải đăng từ hai vị trí A, B dọc bờ biển (Đề 01 - Phần IV Câu 4)
\\begin{tikzpicture}[>=stealth, scale=0.95]
  \\coordinate (A) at (0,0);
  \\coordinate (B) at (3.2,0);
  \\coordinate (H) at (4.4,0);
  \\coordinate (C) at (4.4, 4.4);
  % Đường thẳng bờ biển và các tia ngắm
  \\draw[thick] (-0.6,0) -- (5.5,0);
  \\draw[thick] (A) -- (C);
  \\draw[thick] (B) -- (C);
  \\draw[dashed, thick, blue!80!black] (C) -- (H) node[midway, right] {$CH = ?$};
  % Ký hiệu vuông góc tại H
  \\draw (4.15,0) -- (4.15,0.25) -- (4.4,0.25);
  % Cung góc 45 độ tại A và 75 độ tại B
  \\draw (0.65,0) arc (0:45:0.65);
  \\node at (0.95, 0.32) {$45^\\circ$};
  \\draw (3.75,0) arc (0:75:0.55);
  \\node at (3.92, 0.42) {$75^\\circ$};
  % Độ dài AB = 30 m
  \\draw[<->, dashed] (0,-0.45) -- (3.2,-0.45) node[midway, fill=white, inner sep=2pt] {$30\\text{ m}$};
  % Nhãn các đỉnh
  \\filldraw (A) circle (1.5pt) node[above left] {$A$};
  \\filldraw (B) circle (1.5pt) node[above left] {$B$};
  \\filldraw (H) circle (1.5pt) node[below] {$H$};
  \\filldraw (C) circle (1.8pt) node[above] {$C$ (Ngọn hải đăng)};
\\end{tikzpicture}`;

      case 'feasible_region_coffee_cocoa':
        return `% TikZ: Miền nghiệm bài toán trồng cà phê và ca cao: x + y <= 8, 2x + 3y <= 18 (Đề 01 - Phần III Câu 3)
\\begin{tikzpicture}[>=stealth, scale=0.45]
  \\draw[->, thick] (-1.2,0) -- (10.5,0) node[below] {$x$};
  \\draw[->, thick] (0,-1.2) -- (0,9.5) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\fill[blue!15] (0,0) -- (8,0) -- (6,2) -- (0,6) -- cycle;
  \\draw[thick, blue!80!black] (-0.5, 8.5) -- (8.5, -0.5) node[above right] {$x+y=8$};
  \\draw[thick, teal!80!black] (-0.6, 6.4) -- (9.3, -0.2) node[right] {$2x+3y=18$};
  \\draw[dashed] (6,0) node[below] {$m = ?$} -- (6,2) -- (0,2) node[left] {$n = ?$};
  \\filldraw (0,0) circle (3pt);
  \\filldraw (8,0) circle (3.5pt) node[below] {$A$};
  \\filldraw[red!80!black] (6,2) circle (4pt) node[above right] {$B(m; n) = (?; ?)$};
  \\filldraw (0,6) circle (3.5pt) node[left] {$C$};
\\end{tikzpicture}`;

      case 'venn_diagram_50_10b':
        return `% TikZ: Biểu đồ Ven lớp 10B (50 học sinh: 32 CLB Tiếng Anh, 25 CLB Tin học, 7 không đăng ký)
\\begin{tikzpicture}[scale=1.0]
  \\draw[thick, rounded corners=4pt] (-3.4,-2.0) rectangle (3.4,2.0);
  \\node[anchor=north west] at (-3.2, 1.85) {$n(U) = 50$};
  \\draw[thick, fill=blue!8] (-0.85, -0.05) circle (1.4cm);
  \\draw[thick, fill=teal!8] (0.85, -0.05) circle (1.4cm);
  \\draw[thick] (-0.85, -0.05) circle (1.4cm);
  \\node at (-1.5, 1.45) {Tiếng Anh $A$ ($32$)};
  \\node at (1.5, 1.45) {Tin học $B$ ($25$)};
  \\node at (-1.35, -0.05) {$?$};
  \\node[font=\\bfseries, red!80!black] at (0, -0.05) {$A \\cap B = ?$};
  \\node at (1.35, -0.05) {$?$};
  \\node at (2.3, -1.55) {Ngoài: $7$};
\\end{tikzpicture}`;

      case 'broken_tree_storm':
        return `% TikZ: Bài toán cây bị gãy trong cơn bão (Đề 02 - Phần II Câu 2)
\\begin{tikzpicture}[>=stealth, scale=0.85]
  \\coordinate (A) at (0,0);
  \\coordinate (B) at (6,0);
  \\coordinate (C) at (0.89, 3.58);
  % Vẽ tam giác ABC
  \\draw[thick] (A) -- (B) -- (C) -- cycle;
  % Cung góc tại A (76 độ) và tại B (35 độ)
  \\draw (0.65,0) arc (0:76:0.65);
  \\node at (0.85, 0.42) {$76^\\circ$};
  \\draw (4.95,0) arc (180:145:1.05);
  \\node at (4.65, 0.35) {$35^\\circ$};
  % Nhãn các đỉnh và cạnh
  \\node[below left] at (A) {$A$};
  \\node[below right] at (B) {$B$};
  \\node[above] at (C) {$C$};
  \\node[below] at (3,0) {$6\\text{ m}$};
  \\node[left, red!80!black] at (0.4, 1.85) {$AC = ?$};
\\end{tikzpicture}`;

      case 'feasible_region_aloe_asparagus':
        return `% TikZ: Miền nghiệm bài toán trồng nha đam và măng tây: x + y <= 10, x + 3y <= 15 (Đề 02 - Phần III Câu 3)
\\begin{tikzpicture}[>=stealth, scale=0.38]
  \\draw[->, thick] (-1.5,0) -- (16.5,0) node[below] {$x$};
  \\draw[->, thick] (0,-1.5) -- (0,11.5) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\fill[blue!15] (0,0) -- (10,0) -- (7.5,2.5) -- (0,5) -- cycle;
  \\draw[thick, blue!80!black] (-0.5, 10.5) -- (10.5, -0.5) node[above right] {$x+y=10$};
  \\draw[thick, teal!80!black] (-0.9, 5.3) -- (15.3, -0.1) node[above right] {$x+3y=15$};
  \\draw[dashed] (7.5,0) node[below] {$?$} -- (7.5,2.5) -- (0,2.5) node[left] {$?$};
  \\filldraw (0,0) circle (3.5pt);
  \\filldraw (10,0) circle (4pt) node[below] {$A$};
  \\filldraw[red!80!black] (7.5,2.5) circle (4.5pt) node[above right] {$B(?; ?),\\ F_{\\max} = ?$};
  \\filldraw (0,5) circle (4pt) node[left] {$C$};
\\end{tikzpicture}`;

      case 'venn_diagram_70_tourists':
        return `% TikZ: Biểu đồ Ven khảo sát 70 khách du lịch (45 Nha Trang, 38 Đà Lạt, 8 chưa đến cả hai nơi)
\\begin{tikzpicture}[scale=1.0]
  \\draw[thick, rounded corners=4pt] (-3.4,-2.0) rectangle (3.4,2.0);
  \\node[anchor=north west] at (-3.2, 1.85) {$n(U) = 70$};
  \\draw[thick, fill=blue!8] (-0.85, -0.05) circle (1.4cm);
  \\draw[thick, fill=teal!8] (0.85, -0.05) circle (1.4cm);
  \\draw[thick] (-0.85, -0.05) circle (1.4cm);
  \\node at (-1.5, 1.45) {Nha Trang $A$ ($45$)};
  \\node at (1.5, 1.45) {Đà Lạt $B$ ($38$)};
  \\node at (-1.35, -0.05) {$?$};
  \\node[font=\\bfseries, red!80!black] at (0, -0.05) {$A \\cap B = ?$};
  \\node at (1.35, -0.05) {$?$};
  \\node at (2.3, -1.55) {Ngoài: $8$};
\\end{tikzpicture}`;

      case 'number_line_3_6':
        return `% TikZ: Biểu diễn tập hợp A \\cap B = ? trên trục số (Đề 02 - Phần IV Câu 1)
\\begin{tikzpicture}[>=stealth, scale=0.9]
  \\draw[->, thick] (-3.5,0) -- (7.5,0);
  \\fill[pattern=north east lines, pattern color=gray!65] (-3.3,-0.2) rectangle (1.5,0.2);
  \\fill[pattern=north east lines, pattern color=gray!65] (4.5,-0.2) rectangle (7.1,0.2);
  \\draw[very thick, blue!80!black] (1.5,0) -- (4.5,0) node[midway, above=6pt] {$A \\cap B = ?$};
  \\node[font=\\bfseries, scale=1.2] at (1.5,0) {$($};
  \\node[font=\\bfseries, scale=1.2] at (4.5,0) {$]$};
  \\node[below=6pt] at (1.5,0) {$?$};
  \\node[below=6pt] at (4.5,0) {$?$};
\\end{tikzpicture}`;

      case 'triangle_cos_inscribed_d2':
        return `% TikZ: Tam giác ABC có b = 6 cm, c = 8 cm, góc A = 60 độ, tìm cạnh a = ? và bán kính nội tiếp r = ? (Đề 02 - Phần IV Câu 3)
\\begin{tikzpicture}[>=stealth, scale=0.65]
  \\coordinate (A) at (0,0);
  \\coordinate (B) at (8,0);
  \\coordinate (C) at (3, 5.196);
  \\coordinate (I) at (3.42, 1.97);
  \\draw[thick] (A) -- (B) -- (C) -- cycle;
  \\draw[dashed, blue!80!black] (I) circle (1.97cm);
  \\draw[dashed, red!80!black] (I) -- (3.42, 0) node[midway, right] {$r = ?$};
  \\filldraw (I) circle (2pt) node[above left] {$I$};
  \\draw (0.95,0) arc (0:60:0.95);
  \\node at (1.35, 0.45) {$60^\\circ$};
  \\node[below left] at (A) {$A$};
  \\node[below right] at (B) {$B$};
  \\node[above] at (C) {$C$};
  \\node[below] at (4,0) {$c = 8\\text{ cm}$};
  \\node[above left] at (1.5, 2.6) {$b = 6\\text{ cm}$};
  \\node[above right, red!80!black] at (5.5, 2.6) {$a = ?$};
\\end{tikzpicture}`;

      case 'mountain_building_observation':
        return `% TikZ: Quan sát đỉnh núi nhân tạo CD từ hai vị trí A, B của tòa nhà cao 46 m (Đề 02 - Phần IV Câu 4)
\\begin{tikzpicture}[>=stealth, scale=0.85]
  \\coordinate (A) at (0,0);
  \\coordinate (B) at (0,2.2);
  \\coordinate (D) at (4.8,0);
  \\coordinate (E) at (4.8,2.2);
  \\coordinate (C) at (4.8,3.8);
  % Tòa nhà AB, ngọn núi CD và mặt đất AD
  \\draw[thick] (A) -- (D) -- (C);
  \\draw[thick] (A) -- (B);
  % Phương nằm ngang BE tại sân thượng
  \\draw[thick] (B) -- (E);
  % Các tia ngắm AC và BC
  \\draw[thick] (A) -- (C);
  \\draw[thick] (B) -- (C);
  % Cung góc 35 độ tại A và 15 độ tại B
  \\draw (0.75,0) arc (0:38:0.75);
  \\node at (1.15, 0.28) {$35^\\circ$};
  \\draw[dashed] (0.85,2.2) arc (0:18:0.85);
  \\node at (1.2, 2.42) {$15^\\circ$};
  % Nhãn các đỉnh và chiều cao
  \\node[below left] at (A) {$A$};
  \\node[left] at (B) {$B$};
  \\node[above] at (C) {$C$};
  \\node[below right] at (D) {$D$};
  \\node[right] at (E) {$E$};
  \\node[left] at (0, 1.1) {$46\\text{ m}$};
  \\node[right, red!80!black] at (4.9, 3.0) {$CD = ?$};
\\end{tikzpicture}`;

      case 'cubic_graph_d1':
        return `% TikZ: Đồ thị hàm số bậc ba y = x^3 - 3x^2 + 2 (Toán 12 - Khảo sát hàm số)
\\begin{tikzpicture}[>=stealth, scale=0.85]
  \\draw[->, thick] (-1.6,0) -- (3.6,0) node[below] {$x$};
  \\draw[->, thick] (0,-2.6) -- (0,2.8) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[dashed, gray] (2,0) node[above] {$2$} -- (2,-2) -- (0,-2) node[left] {$-2$};
  \\draw[thick, blue!80!black, domain=-0.85:2.85, samples=80] plot (\\x, {(\\x)^3 - 3*(\\x)^2 + 2});
  \\filldraw[red!80!black] (0,2) circle (2pt) node[above right] {$A(0; 2)$};
  \\filldraw[red!80!black] (2,-2) circle (2pt) node[below right] {$B(2; -2)$};
  \\filldraw (1,0) circle (1.8pt) node[above right] {$1$};
\\end{tikzpicture}`;

      case 'rational_asymptotes_d1':
        return `% TikZ: Đồ thị hàm phân thức y = (2x - 1)/(x - 1) với TCĐ x = 1, TCN y = 2
\\begin{tikzpicture}[>=stealth, scale=0.75]
  \\draw[->, thick] (-2.8,0) -- (4.8,0) node[below] {$x$};
  \\draw[->, thick] (0,-2.2) -- (0,5.2) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[dashed, red!80!black, thick] (1,-2.0) -- (1,5.0) node[right] {$x = 1$};
  \\draw[dashed, teal!80!black, thick] (-2.6,2) -- (4.6,2) node[above left] {$y = 2$};
  \\draw[thick, blue!80!black, domain=-2.4:0.65, samples=50] plot (\\x, {(2*\\x - 1)/(\\x - 1)});
  \\draw[thick, blue!80!black, domain=1.35:4.4, samples=50] plot (\\x, {(2*\\x - 1)/(\\x - 1)});
  \\filldraw[red!80!black] (1,2) circle (2pt) node[above right] {$I(1; 2)$};
\\end{tikzpicture}`;

      case 'integral_area_parabola':
        return `% TikZ: Diện tích hình phẳng giới hạn bởi y = 4 - x^2 và trục Ox trên [-2; 2]
\\begin{tikzpicture}[>=stealth, scale=0.8]
  \\fill[cyan!20] plot[domain=-2:2, samples=60] (\\x, {4 - (\\x)^2}) -- (2,0) -- (-2,0) -- cycle;
  \\draw[->, thick] (-3.0,0) -- (3.2,0) node[below] {$x$};
  \\draw[->, thick] (0,-0.8) -- (0,4.8) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[thick, blue!80!black, domain=-2.2:2.2, samples=60] plot (\\x, {4 - (\\x)^2});
  \\node[red!80!black, font=\\bfseries] at (0, 1.6) {$S = \\int_{-2}^{2} (4 - x^2)\\,dx = ?$};
  \\filldraw (-2,0) circle (2pt) node[below left] {$-2$};
  \\filldraw (2,0) circle (2pt) node[below right] {$2$};
  \\filldraw (0,4) circle (2pt) node[above right] {$4$};
\\end{tikzpicture}`;

      case 'space_box_vectors':
        return `% TikZ: Hình hộp chữ nhật ABCD.A'B'C'D' và quy tắc hình hộp trong không gian
\\begin{tikzpicture}[>=stealth, scale=0.9]
  \\coordinate (A) at (0,0);
  \\coordinate (B) at (3.2,0);
  \\coordinate (D) at (1.1,1.1);
  \\coordinate (C) at (4.3,1.1);
  \\coordinate (A1) at (0,2.4);
  \\coordinate (B1) at (3.2,2.4);
  \\coordinate (D1) at (1.1,3.5);
  \\coordinate (C1) at (4.3,3.5);
  \\draw[dashed] (A) -- (D) -- (C);
  \\draw[dashed] (D) -- (D1);
  \\draw[thick] (A) -- (B) -- (C) -- (C1) -- (D1) -- (A1) -- cycle;
  \\draw[thick] (A1) -- (B1) -- (C1);
  \\draw[thick] (B) -- (B1);
  \\draw[->, very thick, red!80!black] (A) -- (C1) node[midway, above left] {$\\overrightarrow{AC'}$};
  \\node[below left] at (A) {$A$};
  \\node[below right] at (B) {$B$};
  \\node[right] at (C) {$C$};
  \\node[above left] at (D) {$D$};
  \\node[left] at (A1) {$A'$};
  \\node[right] at (B1) {$B'$};
  \\node[above right] at (C1) {$C'$};
  \\node[above left] at (D1) {$D'$};
\\end{tikzpicture}`;

      case 'oxyz_plane_normal':
        return `% TikZ: Mặt phẳng (P) cắt 3 trục tọa độ tại A, B, C trong không gian Oxyz
\\begin{tikzpicture}[>=stealth, scale=0.85]
  \\draw[->, thick] (0,0) -- (-1.6,-1.2) node[below left] {$x$};
  \\draw[->, thick] (0,0) -- (3.8,0) node[below] {$y$};
  \\draw[->, thick] (0,0) -- (0,3.5) node[left] {$z$};
  \\fill[cyan!18, opacity=0.8] (-1.1,-0.825) -- (2.8,0) -- (0,2.6) -- cycle;
  \\draw[thick, blue!80!black] (-1.1,-0.825) -- (2.8,0) -- (0,2.6) -- cycle;
  \\node[below left] at (0,0) {$O$};
  \\filldraw (-1.1,-0.825) circle (2pt) node[left] {$A(a;0;0)$};
  \\filldraw (2.8,0) circle (2pt) node[below right] {$B(0;b;0)$};
  \\filldraw (0,2.6) circle (2pt) node[above right] {$C(0;0;c)$};
\\end{tikzpicture}`;

      case 'd0_q1_bbt':
        return `% TikZ: Bảng biến thiên Câu 1 (Đề 00)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (9.2, 3.3);
  \\draw[thick] (0, 2.5) -- (9.2, 2.5);
  \\draw[thick] (0, 1.7) -- (9.2, 1.7);
  \\draw[thick] (1.3, 0) -- (1.3, 3.3);
  \\node at (0.65, 2.9) {$x$};
  \\node at (1.9, 2.9) {$-\\infty$};
  \\node at (4.1, 2.9) {$-1$};
  \\node at (6.4, 2.9) {$2$};
  \\node at (8.6, 2.9) {$+\\infty$};
  \\node at (0.65, 2.1) {$f'(x)$};
  \\node at (3.0, 2.1) {$+$};
  \\node at (4.1, 2.1) {$0$};
  \\node at (5.25, 2.1) {$-$};
  \\node at (6.4, 2.1) {$0$};
  \\node at (7.5, 2.1) {$+$};
  \\node at (0.65, 0.85) {$y = f(x)$};
  \\node (m1) at (1.9, 0.35) {$-\\infty$};
  \\node (M1) at (4.1, 1.35) {$f(-1)$};
  \\node (m2) at (6.4, 0.35) {$f(2)$};
  \\node (M2) at (8.6, 1.35) {$+\\infty$};
  \\draw[->, thick] (m1) -- (M1);
  \\draw[->, thick] (M1) -- (m2);
  \\draw[->, thick] (m2) -- (M2);
\\end{tikzpicture}`;

      case 'd0_q2_graph':
        return `% TikZ: Đồ thị hàm số y = f(x) Câu 2 (Đề 00)
\\begin{tikzpicture}[>=stealth, scale=0.8]
  \\draw[->, thick] (-1.2,0) -- (5.8,0) node[above] {$x$};
  \\draw[->, thick] (0,-0.8) -- (0,4.5) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[dashed] (1,0) node[below] {$1$} -- (1,1.0);
  \\draw[dashed] (4,0) node[below] {$4$} -- (4,3.4);
  \\draw[thick, smooth] plot coordinates {(-0.8,4.2) (0,2.0) (1,1.0) (2.5,2.2) (4,3.4) (5.1,0) (5.3,-0.6)};
  \\node[right] at (4.3, 3.4) {$y = f(x)$};
\\end{tikzpicture}`;

      case 'd0_q3_graph':
        return `% TikZ: Đồ thị hàm số y = f(x) Câu 3 (Đề 00)
\\begin{tikzpicture}[>=stealth, scale=0.9]
  \\draw[->, thick] (-1.4,0) -- (3.6,0) node[below] {$x$};
  \\draw[->, thick] (0,-0.6) -- (0,4.2) node[right] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[dashed] (1,0) node[below] {$1$} -- (1,3) -- (0,3) node[left] {$3$};
  \\filldraw (1,3) circle (1.8pt);
  \\draw[thick, smooth] plot coordinates {(-1.1,3.9) (-0.5,0.8) (0,0) (0.5,1.6) (1,3) (1.5,1.6) (2,0) (2.5,0.8) (3.1,3.9)};
  \\node[right] at (2.8, 3.0) {$y = f(x)$};
\\end{tikzpicture}`;

      case 'd0_q4_graph':
        return `% TikZ: Đồ thị hàm số y = f(x) trên đoạn [-2; 3] Câu 4 (Đề 00)
\\begin{tikzpicture}[>=stealth, scale=0.55]
  \\draw[->, thick] (-3.2,0) -- (4.8,0) node[above] {$x$};
  \\draw[->, thick] (0,-5.8) -- (0,8.2) node[right] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[dashed] (-2,0) node[below] {$-2$} -- (-2,3.5);
  \\draw[dashed] (0,-5) node[left] {$-5$} -- (2,-5);
  \\draw[dashed] (3,0) node[below] {$3$} -- (3,3.2);
  \\draw[thick, smooth] plot coordinates {(-2,3.5) (-1,5.2) (0,7) (1,1) (2,-5) (3,3.2)};
  \\filldraw (-2,3.5) circle (2.5pt);
  \\filldraw (0,7) circle (2.5pt) node[above left] {$7$};
  \\filldraw (2,-5) circle (2.5pt);
  \\filldraw (3,3.2) circle (2.5pt);
  \\node[right] at (1.1, 4.5) {$y = f(x)$};
\\end{tikzpicture}`;

      case 'd0_q5_graph':
        return `% TikZ: Đồ thị hàm phân thức Câu 5 (Đề 00) với TCĐ x = 1, TCN y = 2
\\begin{tikzpicture}[>=stealth, scale=0.8]
  \\draw[->, thick] (-2.6,0) -- (4.6,0) node[below] {$x$};
  \\draw[->, thick] (0,-2.0) -- (0,4.6) node[right] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[dashed] (1,-1.8) -- (1,4.4);
  \\draw[dashed] (-2.4,2) -- (4.4,2);
  \\node[below right] at (1,0) {$1$};
  \\node[above left] at (0,2) {$2$};
  \\draw[thick, blue!80!black, domain=-2.3:0.65, samples=50] plot (\\x, {(2*\\x - 1)/(\\x - 1)});
  \\draw[thick, blue!80!black, domain=1.35:4.3, samples=50] plot (\\x, {(2*\\x - 1)/(\\x - 1)});
\\end{tikzpicture}`;

      case 'd0_q6_graph':
        return `% TikZ: Đồ thị hàm số bậc ba Câu 6 (Đề 01): y = x^3 - 3x^2 + 2
\\begin{tikzpicture}[>=stealth, scale=0.75]
  \\draw[->, thick] (-2.8,0) -- (3.2,0) node[below] {$x$};
  \\draw[->, thick] (0,-3.5) -- (0,3.6) node[right] {$y$};
  \\node[below left] at (0,0) {$0$};
  \\node[below] at (-2,0) {$-2$};
  \\node[below] at (-1,0) {$-1$};
  \\node[below] at (1,0) {$1$};
  \\node[below] at (2,0) {$2$};
  \\node[left] at (0,1) {$1$};
  \\node[left] at (0,2) {$2$};
  \\node[left] at (0,3) {$3$};
  \\node[left] at (0,-1) {$-1$};
  \\node[left] at (0,-2) {$-2$};
  \\node[left] at (0,-3) {$-3$};
  \\draw[dashed] (2,0) -- (2,-2) -- (0,-2);
  \\draw[thick, blue!80!black, domain=-1.15:3.1, samples=80] plot (\\x, {(\\x)^3 - 3*(\\x)^2 + 2});
\\end{tikzpicture}`;

      case 'd0_q7_graph':
        return `% TikZ: Đồ thị hàm số y = (x + 2)/(x - 1) Câu 7 (Đề 00)
\\begin{tikzpicture}[>=stealth, scale=0.55]
  \\draw[step=1cm, gray!25, very thin] (-5,-5) grid (6,6);
  \\draw[->, thick] (-5,0) -- (6,0) node[below] {$x$};
  \\draw[->, thick] (0,-5) -- (0,6) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[thick] (1,-5) -- (1,6);
  \\draw[thick] (-5,1) -- (6,1);
  \\draw[thick, domain=-4.8:0.45, samples=60] plot (\\x, {(\\x + 2)/(\\x - 1)});
  \\draw[thick, domain=1.55:5.8, samples=60] plot (\\x, {(\\x + 2)/(\\x - 1)});
  \\filldraw (-2,0) circle (2.2pt) node[below left] {$-2$};
  \\filldraw (0,-2) circle (2.2pt) node[below left] {$-2$};
  \\node[below right] at (1,0) {$1$};
  \\node[above left] at (0,1) {$1$};
\\end{tikzpicture}`;

      case 'd0_q9_graph':
        return `% TikZ: Đồ thị hàm số bậc ba Câu 9 (Đề 00)
\\begin{tikzpicture}[>=stealth, scale=0.8]
  \\draw[step=1cm, gray!30, very thin] (-3,-3) grid (3,3);
  \\draw[->, thick] (-3,0) -- (3,0) node[below] {$x$};
  \\draw[->, thick] (0,-3) -- (0,3) node[left] {$y$};
  \\node[below left] at (0,0) {$0$};
  \\draw[very thick, blue!80!black, smooth] plot coordinates {(-0.85,3) (-0.5,0) (0,-2) (0.5,-0.5) (1,1) (1.5,-0.8) (1.75,-3)};
\\end{tikzpicture}`;

      case 'd0_q12_bbt':
        return `% TikZ: Bảng biến thiên Câu 12 (Đề 00)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (8.4, 3.3);
  \\draw[thick] (0, 2.5) -- (8.4, 2.5);
  \\draw[thick] (0, 1.7) -- (8.4, 1.7);
  \\draw[thick] (1.2, 0) -- (1.2, 3.3);
  \\draw[thick] (4.75, 0) -- (4.75, 2.5);
  \\draw[thick] (4.85, 0) -- (4.85, 2.5);
  \\node at (0.6, 2.9) {$x$};
  \\node at (1.8, 2.9) {$-\\infty$};
  \\node at (4.8, 2.9) {$1$};
  \\node at (7.8, 2.9) {$+\\infty$};
  \\node at (0.6, 2.1) {$y'$};
  \\node at (3.0, 2.1) {$-$};
  \\node at (6.3, 2.1) {$-$};
  \\node at (0.6, 0.85) {$y$};
  \\node (L1) at (1.8, 1.35) {$2$};
  \\node (L2) at (4.2, 0.35) {$-\\infty$};
  \\node (R1) at (5.4, 1.35) {$+\\infty$};
  \\node (R2) at (7.8, 0.35) {$2$};
  \\draw[->, thick] (L1) -- (L2);
  \\draw[->, thick] (R1) -- (R2);
\\end{tikzpicture}`;

      case 'd0_q13_bbt':
        return `% TikZ: Bảng biến thiên Câu 13 (Phần II - Đề 00)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (9.6, 3.3);
  \\draw[thick] (0, 2.5) -- (9.6, 2.5);
  \\draw[thick] (0, 1.7) -- (9.6, 1.7);
  \\draw[thick] (1.3, 0) -- (1.3, 3.3);
  \\draw[thick] (6.35, 0) -- (6.35, 2.5);
  \\draw[thick] (6.45, 0) -- (6.45, 2.5);
  \\node at (0.65, 2.9) {$x$};
  \\node at (1.9, 2.9) {$-\\infty$};
  \\node at (4.1, 2.9) {$-2$};
  \\node at (6.4, 2.9) {$1$};
  \\node at (9.0, 2.9) {$+\\infty$};
  \\node at (0.65, 2.1) {$f'(x)$};
  \\node at (3.0, 2.1) {$+$};
  \\node at (4.1, 2.1) {$0$};
  \\node at (5.25, 2.1) {$-$};
  \\node at (7.7, 2.1) {$+$};
  \\node at (0.65, 0.85) {$y = f(x)$};
  \\node (p1) at (1.9, 0.35) {$-\\infty$};
  \\node (p2) at (4.1, 1.35) {$5$};
  \\node (p3) at (5.8, 0.35) {$-\\infty$};
  \\node (p4) at (7.0, 0.35) {$-\\infty$};
  \\node (p5) at (9.0, 1.35) {$2$};
  \\draw[->, thick] (p1) -- (p2);
  \\draw[->, thick] (p2) -- (p3);
  \\draw[->, thick] (p4) -- (p5);
\\end{tikzpicture}`;

      case 'd0_q20_bbt':
        return `% TikZ: Bảng biến thiên Câu 20 (Phần IV Câu 1 - Đề 00): y = -x^3 + 3x^2 + 9x - 1
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (9.2, 3.3);
  \\draw[thick] (0, 2.5) -- (9.2, 2.5);
  \\draw[thick] (0, 1.7) -- (9.2, 1.7);
  \\draw[thick] (1.3, 0) -- (1.3, 3.3);
  \\node at (0.65, 2.9) {$x$};
  \\node at (1.9, 2.9) {$-\\infty$};
  \\node at (4.1, 2.9) {$-1$};
  \\node at (6.4, 2.9) {$3$};
  \\node at (8.6, 2.9) {$+\\infty$};
  \\node at (0.65, 2.1) {$y'$};
  \\node at (3.0, 2.1) {$-$};
  \\node at (4.1, 2.1) {$0$};
  \\node at (5.25, 2.1) {$+$};
  \\node at (6.4, 2.1) {$0$};
  \\node at (7.5, 2.1) {$-$};
  \\node at (0.65, 0.85) {$y$};
  \\node (q1) at (1.9, 1.35) {$+\\infty$};
  \\node (q2) at (4.1, 0.35) {$-6$};
  \\node (q3) at (6.4, 1.35) {$26$};
  \\node (q4) at (8.6, 0.35) {$-\\infty$};
  \\draw[->, thick] (q1) -- (q2);
  \\draw[->, thick] (q2) -- (q3);
  \\draw[->, thick] (q3) -- (q4);
\\end{tikzpicture}`;

      case 'd2_q1_bxd':
        return `% TikZ: Bảng xét dấu đạo hàm Câu 1 (Phần I - Đề 02)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (8.8, 1.8);
  \\draw[thick] (0, 0.9) -- (8.8, 0.9);
  \\draw[thick] (1.2, 0) -- (1.2, 1.8);
  \\draw[thick] (3.75, 0) -- (3.75, 0.9);
  \\draw[thick] (3.85, 0) -- (3.85, 0.9);
  \\node at (0.6, 1.35) {$x$};
  \\node at (1.8, 1.35) {$-\\infty$};
  \\node at (3.8, 1.35) {$-1$};
  \\node at (6.0, 1.35) {$1$};
  \\node at (8.2, 1.35) {$+\\infty$};
  \\node at (0.6, 0.45) {$y'$};
  \\node at (2.8, 0.45) {$-$};
  \\node at (4.9, 0.45) {$-$};
  \\node at (6.0, 0.45) {$0$};
  \\node at (7.1, 0.45) {$+$};
\\end{tikzpicture}`;

      case 'd2_q2_graph':
        return `% TikZ: Đồ thị hàm trùng phương y = -x^4 + 2x^2 Câu 2 (Phần I - Đề 02)
\\begin{tikzpicture}[>=stealth, scale=1.0]
  \\draw[->, thick] (-2.2,0) -- (2.3,0) node[below] {$x$};
  \\draw[->, thick] (0,-2.6) -- (0,1.8) node[right] {$y$};
  \\node[below right] at (0,0) {$0$};
  \\draw[dashed] (-1,0) node[below] {$-1$} -- (-1,1) -- (1,1) -- (1,0) node[below] {$1$};
  \\node[above right] at (0,1) {$1$};
  \\draw[thick, domain=-1.62:1.62, samples=80] plot (\\x, {-(\\x)^4 + 2*(\\x)^2});
\\end{tikzpicture}`;

      case 'd2_q3_bxd':
        return `% TikZ: Bảng xét dấu đạo hàm Câu 3 (Phần I - Đề 02)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (10.8, 1.8);
  \\draw[thick] (0, 0.9) -- (10.8, 0.9);
  \\draw[thick] (1.2, 0) -- (1.2, 1.8);
  \\node at (0.6, 1.35) {$x$};
  \\node at (1.8, 1.35) {$-\\infty$};
  \\node at (3.4, 1.35) {$-3$};
  \\node at (5.1, 1.35) {$-2$};
  \\node at (6.8, 1.35) {$3$};
  \\node at (8.5, 1.35) {$5$};
  \\node at (10.1, 1.35) {$+\\infty$};
  \\node at (0.6, 0.45) {$y'$};
  \\node at (2.6, 0.45) {$-$};
  \\node at (3.4, 0.45) {$0$};
  \\node at (4.25, 0.45) {$+$};
  \\node at (5.1, 0.45) {$0$};
  \\node at (5.95, 0.45) {$-$};
  \\node at (6.8, 0.45) {$0$};
  \\node at (7.65, 0.45) {$+$};
  \\node at (8.5, 0.45) {$0$};
  \\node at (9.3, 0.45) {$-$};
\\end{tikzpicture}`;

      case 'd2_q4_graph':
        return `% TikZ: Đồ thị hàm phân thức y = (2x - 1)/(x - 1) Câu 4 (Phần I - Đề 02)
\\begin{tikzpicture}[>=stealth, scale=0.75]
  \\draw[->, thick] (-3.2,0) -- (4.6,0) node[below] {$x$};
  \\draw[->, thick] (0,-2.6) -- (0,5.2) node[left] {$y$};
  \\node[below right] at (0,0) {$O$};
  \\draw[thin] (1,-2.5) -- (1,5.0);
  \\draw[thin] (-3.1,2) -- (4.4,2);
  \\node[below right] at (1,0) {$1$};
  \\node[left] at (0,1) {$1$};
  \\draw[thick, domain=-3.0:0.72, samples=60] plot (\\x, {(2*\\x - 1)/(\\x - 1)});
  \\draw[thick, domain=1.32:4.4, samples=60] plot (\\x, {(2*\\x - 1)/(\\x - 1)});
\\end{tikzpicture}`;

      case 'd2_q5_graph':
        return `% TikZ: Đồ thị hàm bậc ba y = -x^3 + 3x^2 - 4 Câu 5 (Phần I - Đề 02)
\\begin{tikzpicture}[>=stealth, scale=0.8]
  \\draw[->, thick] (-2.2,0) -- (3.8,0) node[below] {$x$};
  \\draw[->, thick] (0,-4.8) -- (0,1.4) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\node[above right] at (-1,0) {$-1$};
  \\node[above] at (2,0) {$2$};
  \\node[above] at (3,0) {$3$};
  \\node[left] at (0,-2) {$-2$};
  \\node[left] at (0,-4) {$-4$};
  \\draw[dashed] (1,0) -- (1,-2) -- (0,-2);
  \\draw[dashed] (3,0) -- (3,-4) -- (0,-4);
  \\draw[thick, domain=-1.22:3.12, samples=80] plot (\\x, {-(\\x)^3 + 3*(\\x)^2 - 4});
\\end{tikzpicture}`;

      case 'd2_q7_bbt':
        return `% TikZ: Bảng biến thiên Câu 7 (Phần I - Đề 02)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (8.8, 2.5);
  \\draw[thick] (0, 1.7) -- (8.8, 1.7);
  \\draw[thick] (1.3, 0) -- (1.3, 2.5);
  \\node at (0.65, 2.1) {$x$};
  \\node at (1.9, 2.1) {$-\\infty$};
  \\node at (4.0, 2.1) {$1$};
  \\node at (6.2, 2.1) {$2$};
  \\node at (8.2, 2.1) {$+\\infty$};
  \\node at (0.65, 0.85) {$f(x)$};
  \\node (b1) at (1.9, 0.35) {$-\\infty$};
  \\node (b2) at (4.0, 1.35) {$3$};
  \\node (b3) at (6.2, 0.35) {$0$};
  \\node (b4) at (8.2, 1.35) {$+\\infty$};
  \\draw[->, thick] (b1) -- (b2);
  \\draw[->, thick] (b2) -- (b3);
  \\draw[->, thick] (b3) -- (b4);
\\end{tikzpicture}`;

      case 'd2_q9_graph':
        return `% TikZ: Đồ thị hàm phân thức Câu 9 (Phần I - Đề 02) với TCĐ x = 1, TCN y = 2
\\begin{tikzpicture}[>=stealth, scale=0.75]
  \\draw[->, thick] (-2.8,0) -- (4.8,0) node[below] {$x$};
  \\draw[->, thick] (0,-2.2) -- (0,4.8) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[thin] (1,-2.1) -- (1,4.6);
  \\draw[thin] (-2.7,2) -- (4.6,2);
  \\node[below left] at (1,0) {$1$};
  \\node[below] at (2,0) {$2$};
  \\node[left] at (0,1) {$1$};
  \\node[above left] at (0,2) {$2$};
  \\draw[thick, domain=-2.6:0.25, samples=60] plot (\\x, {(2*\\x - 4)/(\\x - 1)});
  \\draw[thick, domain=1.48:4.5, samples=60] plot (\\x, {(2*\\x - 4)/(\\x - 1)});
\\end{tikzpicture}`;

      case 'd2_q10_bbt':
        return `% TikZ: Bảng biến thiên Câu 10 (Phần I - Đề 02)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0, 2.5) -- (9.2, 2.5);
  \\draw[thick] (0, 1.7) -- (9.2, 1.7);
  \\draw[thick] (1.2, 0) -- (1.2, 3.2);
  \\draw[thick] (6.15, 0) -- (6.15, 2.5);
  \\draw[thick] (6.25, 0) -- (6.25, 2.5);
  \\node at (0.6, 2.85) {$x$};
  \\node at (1.8, 2.85) {$-\\infty$};
  \\node at (3.9, 2.85) {$0$};
  \\node at (6.2, 2.85) {$1$};
  \\node at (8.6, 2.85) {$+\\infty$};
  \\node at (0.6, 2.1) {$y'$};
  \\node at (2.85, 2.1) {$+$};
  \\node at (3.9, 2.1) {$0$};
  \\node at (5.05, 2.1) {$-$};
  \\node at (7.4, 2.1) {$+$};
  \\node at (0.6, 0.85) {$y$};
  \\node (c1) at (1.8, 0.35) {$0$};
  \\node (c2) at (3.9, 1.35) {$2$};
  \\node (c3) at (5.6, 0.35) {$-\\infty$};
  \\node (c4) at (6.7, 0.35) {$3$};
  \\node (c5) at (8.6, 1.35) {$5$};
  \\draw[->, thick] (c1) -- (c2);
  \\draw[->, thick] (c2) -- (c3);
  \\draw[->, thick] (c4) -- (c5);
\\end{tikzpicture}`;

      case 'd2_p2_q1_graph':
        return `% TikZ: Đồ thị hàm bậc ba Câu 1 (Phần II - Đề 02) có CĐ (-1; 1) và CT (2; -2)
\\begin{tikzpicture}[>=stealth, scale=0.75]
  \\draw[step=1cm, gray!25, very thin] (-4,-3) grid (4,3);
  \\draw[->, thick] (-4,0) -- (4.2,0) node[below] {$x$};
  \\draw[->, thick] (0,-3.2) -- (0,3.2) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[dashed] (-1,0) node[below] {$-1$} -- (-1,1) -- (0,1) node[right] {$1$};
  \\draw[dashed] (2,0) node[above] {$2$} -- (2,-2) -- (0,-2) node[left] {$-2$};
  \\draw[thick, red!75!black, smooth] plot coordinates {(-2.6,-2.8) (-2,0) (-1,1) (0,0.2) (1,-1.2) (2,-2) (3,0) (3.5,2.8)};
\\end{tikzpicture}`;

      case 'd2_p2_q2_bbt':
        return `% TikZ: Bảng biến thiên mệnh đề c) Câu 2 (Phần II - Đề 02)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (5.6, 3.1);
  \\draw[thick] (0, 2.35) -- (5.6, 2.35);
  \\draw[thick] (0, 1.6) -- (5.6, 1.6);
  \\draw[thick] (1.1, 0) -- (1.1, 3.1);
  \\node at (0.55, 2.72) {$x$};
  \\node at (1.7, 2.72) {$-\\infty$};
  \\node at (5.0, 2.72) {$+\\infty$};
  \\node at (0.55, 1.98) {$y'$};
  \\node at (3.35, 1.98) {$-$};
  \\node at (0.55, 0.8) {$y$};
  \\node (topL) at (1.7, 1.25) {$+\\infty$};
  \\node (botR) at (5.0, 0.35) {$-\\infty$};
  \\draw[->, thick] (topL) -- (botR);
\\end{tikzpicture}`;

      case 'd2_p3_q3_graph':
        return `% TikZ: Đồ thị hàm số y = (ax + b)/(3x + c) Câu 3 (Phần III - Đề 02)
\\begin{tikzpicture}[>=stealth, scale=0.8]
  \\draw[->, thick] (-2.8,0) -- (4.2,0) node[below] {$x$};
  \\draw[->, thick] (0,-3.2) -- (0,4.8) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[dashed, thick] (1,-3.0) -- (1,4.6);
  \\draw[dashed, thick] (-2.6,2) -- (4.0,2);
  \\node[below right] at (1,0) {$1$};
  \\node[above left] at (0,2) {$2$};
  \\node[below left] at (0,-1) {$-1$};
  \\draw[thick, domain=-2.5:0.4, samples=60] plot (\\x, {(2*\\x + 1)/(\\x - 1)});
  \\draw[thick, domain=1.6:3.9, samples=60] plot (\\x, {(2*\\x + 1)/(\\x - 1)});
\\end{tikzpicture}`;

      case 'd2_p4_q1_bbt':
        return `% TikZ: Bảng biến thiên Câu 1 (Phần IV - Đề 02): y = -1/3 x^3 + x^2 + 3x + 2
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (9.2, 3.5);
  \\draw[thick] (0, 2.7) -- (9.2, 2.7);
  \\draw[thick] (0, 1.9) -- (9.2, 1.9);
  \\draw[thick] (1.3, 0) -- (1.3, 3.5);
  \\node at (0.65, 3.1) {$x$};
  \\node at (1.9, 3.1) {$-\\infty$};
  \\node at (4.1, 3.1) {$-1$};
  \\node at (6.4, 3.1) {$3$};
  \\node at (8.6, 3.1) {$+\\infty$};
  \\node at (0.65, 2.3) {$y'$};
  \\node at (3.0, 2.3) {$-$};
  \\node at (4.1, 2.3) {$0$};
  \\node at (5.25, 2.3) {$+$};
  \\node at (6.4, 2.3) {$0$};
  \\node at (7.5, 2.3) {$-$};
  \\node at (0.65, 0.95) {$y$};
  \\node (q1) at (1.9, 1.5) {$+\\infty$};
  \\node (q2) at (4.1, 0.45) {$\\dfrac{1}{3}$};
  \\node (q3) at (6.4, 1.5) {$11$};
  \\node (q4) at (8.6, 0.45) {$-\\infty$};
  \\draw[->, thick] (q1) -- (q2);
  \\draw[->, thick] (q2) -- (q3);
  \\draw[->, thick] (q3) -- (q4);
\\end{tikzpicture}`;

      case 'd4_q1_bbt':
        return `% TikZ: Bảng biến thiên Câu 1 (Phần I - Đề 04)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (9.2, 3.3);
  \\draw[thick] (0, 2.5) -- (9.2, 2.5);
  \\draw[thick] (0, 1.7) -- (9.2, 1.7);
  \\draw[thick] (1.3, 0) -- (1.3, 3.3);
  \\node at (0.65, 2.9) {$x$};
  \\node at (1.9, 2.9) {$-\\infty$};
  \\node at (4.1, 2.9) {$-2$};
  \\node at (6.4, 2.9) {$1$};
  \\node at (8.6, 2.9) {$+\\infty$};
  \\node at (0.65, 2.1) {$f'(x)$};
  \\node at (3.0, 2.1) {$-$};
  \\node at (4.1, 2.1) {$0$};
  \\node at (5.25, 2.1) {$+$};
  \\node at (6.4, 2.1) {$0$};
  \\node at (7.5, 2.1) {$-$};
  \\node at (0.65, 0.85) {$f(x)$};
  \\node (a1) at (1.9, 1.35) {$+\\infty$};
  \\node (a2) at (4.1, 0.35) {$-3$};
  \\node (a3) at (6.4, 1.35) {$4$};
  \\node (a4) at (8.6, 0.35) {$-\\infty$};
  \\draw[->, thick] (a1) -- (a2);
  \\draw[->, thick] (a2) -- (a3);
  \\draw[->, thick] (a3) -- (a4);
\\end{tikzpicture}`;

      case 'd4_q2_graph':
        return `% TikZ: Đồ thị hàm bậc ba Câu 2 (Phần I - Đề 04) có CĐ (-2; 1), CT (0; -3)
\\begin{tikzpicture}[>=stealth, scale=0.75]
  \\draw[->, thick] (-3.2,0) -- (2.2,0) node[below] {$x$};
  \\draw[->, thick] (0,-4.0) -- (0,2.5) node[left] {$y$};
  \\node[below right] at (0,0) {$O$};
  \\draw[dashed] (-2,0) node[below] {$-2$} -- (-2,1) -- (0,1) node[left] {$1$};
  \\node[below] at (-1,0) {$-1$};
  \\node[left] at (0,-3) {$-3$};
  \\draw[thick, domain=-3.05:1.1, samples=80] plot (\\x, {(\\x)^3 + 3*(\\x)^2 - 3});
\\end{tikzpicture}`;

      case 'd4_q3_graph':
        return `% TikZ: Đồ thị hàm trùng phương Câu 3 (Phần I - Đề 04): y = -x^4 + 2x^2 + 1
\\begin{tikzpicture}[>=stealth, scale=0.85]
  \\draw[->, thick] (-2.4,0) -- (2.4,0) node[below] {$x$};
  \\draw[->, thick] (0,-1.5) -- (0,3.2) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[dashed] (-1,0) node[below] {$-1$} -- (-1,2) -- (1,2) -- (1,0) node[below] {$1$};
  \\node[above left] at (0,2) {$2$};
  \\node[below left] at (0,1) {$1$};
  \\draw[thick, domain=-1.72:1.72, samples=80] plot (\\x, {-(\\x)^4 + 2*(\\x)^2 + 1});
\\end{tikzpicture}`;

      case 'd4_q4_bbt':
        return `% TikZ: Bảng biến thiên Câu 4 (Phần I - Đề 04) trên đoạn [-3; 2]
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (9.2, 3.3);
  \\draw[thick] (0, 2.5) -- (9.2, 2.5);
  \\draw[thick] (0, 1.7) -- (9.2, 1.7);
  \\draw[thick] (1.3, 0) -- (1.3, 3.3);
  \\node at (0.65, 2.9) {$x$};
  \\node at (1.9, 2.9) {$-3$};
  \\node at (4.1, 2.9) {$-1$};
  \\node at (6.4, 2.9) {$0$};
  \\node at (8.6, 2.9) {$2$};
  \\node at (0.65, 2.1) {$y'$};
  \\node at (3.0, 2.1) {$+$};
  \\node at (4.1, 2.1) {$0$};
  \\node at (5.25, 2.1) {$-$};
  \\node at (6.4, 2.1) {$0$};
  \\node at (7.5, 2.1) {$+$};
  \\node at (0.65, 0.85) {$y$};
  \\node (b1) at (1.9, 0.35) {$-2$};
  \\node (b2) at (4.1, 1.35) {$5$};
  \\node (b3) at (6.4, 0.35) {$-3$};
  \\node (b4) at (8.6, 1.35) {$1$};
  \\draw[->, thick] (b1) -- (b2);
  \\draw[->, thick] (b2) -- (b3);
  \\draw[->, thick] (b3) -- (b4);
\\end{tikzpicture}`;

      case 'd4_q5_graph':
        return `% TikZ: Đồ thị hàm phân thức Câu 5 (Phần I - Đề 04): TCĐ x = 1, TCN y = -1
\\begin{tikzpicture}[>=stealth, scale=0.8]
  \\draw[->, thick] (-2.8,0) -- (3.8,0) node[below] {$x$};
  \\draw[->, thick] (0,-4.2) -- (0,3.2) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[dashed, red!80!black, thick] (1,-4.0) -- (1,3.0);
  \\draw[dashed, violet!80!black, thick] (-2.6,-1) -- (3.6,-1);
  \\node[above right] at (1,0) {$1$};
  \\node[below left] at (0,-1) {$-1$};
  \\draw[thick, domain=-2.5:0.74, samples=60] plot (\\x, {-(\\x)/(\\x - 1)});
  \\draw[thick, domain=1.34:3.5, samples=60] plot (\\x, {-(\\x)/(\\x - 1)});
\\end{tikzpicture}`;

      case 'd4_q6_graph':
        return `% TikZ: Đồ thị hàm số y = (x - 2)/(x + 1) Câu 6 (Phần I - Đề 04)
\\begin{tikzpicture}[>=stealth, scale=0.75]
  \\draw[->, thick] (-3.8,0) -- (3.5,0) node[below] {$x$};
  \\draw[->, thick] (0,-4.2) -- (0,3.8) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[dashed, red!80!black, thick] (-1,-4.0) -- (-1,3.6);
  \\draw[dashed, violet!80!black, thick] (-3.6,1) -- (3.3,1);
  \\node[below left] at (-1,0) {$-1$};
  \\node[above right] at (0,1) {$1$};
  \\node[below right] at (0,-2) {$-2$};
  \\node[below] at (2,0) {$2$};
  \\draw[thick, domain=-3.5:-1.6, samples=60] plot (\\x, {(\\x - 2)/(\\x + 1)});
  \\draw[thick, domain=-0.4:3.2, samples=60] plot (\\x, {(\\x - 2)/(\\x + 1)});
\\end{tikzpicture}`;

      case 'd4_q7_graph':
        return `% TikZ: Đồ thị hàm số y = x^3 + 3x^2 Câu 7 (Phần I - Đề 04)
\\begin{tikzpicture}[>=stealth, scale=0.75]
  \\draw[->, thick] (-3.6,0) -- (2.2,0) node[below] {$x$};
  \\draw[->, thick] (0,-1.5) -- (0,5.2) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[dashed] (-2,0) node[below] {$-2$} -- (-2,4) -- (0,4) node[left] {$4$};
  \\draw[dashed] (-1,0) node[below] {$-1$} -- (-1,2) -- (0,2) node[left] {$2$};
  \\node[below left] at (-3,0) {$-3$};
  \\node[below] at (1,0) {$1$};
  \\draw[thick, domain=-3.15:0.85, samples=80] plot (\\x, {(\\x)^3 + 3*(\\x)^2});
\\end{tikzpicture}`;

      case 'd4_q10_bxd':
        return `% TikZ: Bảng xét dấu f'(x) Câu 10 (Phần I - Đề 04)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (8.8, 1.8);
  \\draw[thick] (0, 0.9) -- (8.8, 0.9);
  \\draw[thick] (1.4, 0) -- (1.4, 1.8);
  \\node at (0.7, 1.35) {$x$};
  \\node at (2.0, 1.35) {$-\\infty$};
  \\node at (4.1, 1.35) {$-3$};
  \\node at (6.2, 1.35) {$2$};
  \\node at (8.2, 1.35) {$+\\infty$};
  \\node at (0.7, 0.45) {$f'(x)$};
  \\node at (3.05, 0.45) {$-$};
  \\node at (4.1, 0.45) {$0$};
  \\node at (5.15, 0.45) {$+$};
  \\node at (6.2, 0.45) {$0$};
  \\node at (7.2, 0.45) {$+$};
\\end{tikzpicture}`;

      case 'd4_q11_bbt':
        return `% TikZ: Bảng biến thiên Câu 11 (Phần I - Đề 04)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (9.6, 3.4);
  \\draw[thick] (0, 2.6) -- (9.6, 2.6);
  \\draw[thick] (0, 1.8) -- (9.6, 1.8);
  \\draw[thick] (1.2, 0) -- (1.2, 3.4);
  \\draw[thick] (4.35, 0) -- (4.35, 2.6);
  \\draw[thick] (4.45, 0) -- (4.45, 2.6);
  \\node at (0.6, 3.0) {$x$};
  \\node at (1.8, 3.0) {$-\\infty$};
  \\node at (4.4, 3.0) {$-1$};
  \\node at (6.8, 3.0) {$3$};
  \\node at (9.0, 3.0) {$+\\infty$};
  \\node at (0.6, 2.2) {$y'$};
  \\node at (3.1, 2.2) {$-$};
  \\node at (5.6, 2.2) {$-$};
  \\node at (6.8, 2.2) {$0$};
  \\node at (7.9, 2.2) {$+$};
  \\node at (0.6, 0.9) {$y$};
  \\node (u1) at (1.8, 1.45) {$2$};
  \\node (u2) at (3.9, 0.35) {$-\\infty$};
  \\node (u3) at (4.9, 1.45) {$+\\infty$};
  \\node (u4) at (6.8, 0.35) {$-4$};
  \\node (u5) at (9.0, 1.45) {$5$};
  \\draw[->, thick] (u1) -- (u2);
  \\draw[->, thick] (u3) -- (u4);
  \\draw[->, thick] (u4) -- (u5);
\\end{tikzpicture}`;

      case 'd4_p2_q1_bbt':
        return `% TikZ: Bảng biến thiên Câu 1 (Phần II - Đề 04)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (10.8, 3.4);
  \\draw[thick] (0, 2.6) -- (10.8, 2.6);
  \\draw[thick] (0, 1.8) -- (10.8, 1.8);
  \\draw[thick] (1.2, 0) -- (1.2, 3.4);
  \\draw[thick] (5.95, 0) -- (5.95, 2.6);
  \\draw[thick] (6.05, 0) -- (6.05, 2.6);
  \\node at (0.6, 3.0) {$x$};
  \\node at (1.8, 3.0) {$-\\infty$};
  \\node at (3.9, 3.0) {$0$};
  \\node at (6.0, 3.0) {$2$};
  \\node at (8.1, 3.0) {$4$};
  \\node at (10.2, 3.0) {$+\\infty$};
  \\node at (0.6, 2.2) {$y'$};
  \\node at (2.85, 2.2) {$+$};
  \\node at (3.9, 2.2) {$0$};
  \\node at (4.95, 2.2) {$-$};
  \\node at (7.05, 2.2) {$-$};
  \\node at (8.1, 2.2) {$0$};
  \\node at (9.15, 2.2) {$+$};
  \\node at (0.6, 0.9) {$y$};
  \\node (v1) at (1.8, 0.35) {$-\\infty$};
  \\node (v2) at (3.9, 1.45) {$-1$};
  \\node (v3) at (5.45, 0.35) {$-\\infty$};
  \\node (v4) at (6.55, 1.45) {$+\\infty$};
  \\node (v5) at (8.1, 0.35) {$3$};
  \\node (v6) at (10.2, 1.45) {$+\\infty$};
  \\draw[->, thick] (v1) -- (v2);
  \\draw[->, thick] (v2) -- (v3);
  \\draw[->, thick] (v4) -- (v5);
  \\draw[->, thick] (v5) -- (v6);
\\end{tikzpicture}`;

      case 'd4_p2_q2_graph':
        return `% TikZ: Đồ thị hàm bậc ba Câu 2 (Phần II - Đề 04): y = x^3 - 3x^2
\\begin{tikzpicture}[>=stealth, scale=0.75]
  \\draw[->, thick] (-2.2,0) -- (3.8,0) node[below] {$x$};
  \\draw[->, thick] (0,-4.6) -- (0,2.2) node[left] {$y$};
  \\node[above left] at (0,0) {$O$};
  \\node[above left] at (-1,0) {$-1$};
  \\draw[dashed] (-1,0) -- (-1,-4) -- (2,-4) -- (2,0) node[below] {$2$};
  \\node[left] at (0,-4) {$-4$};
  \\draw[thick, domain=-1.1:3.1, samples=80] plot (\\x, {(\\x)^3 - 3*(\\x)^2});
\\end{tikzpicture}`;

      case 'd4_p4_q1_bbt':
        return `% TikZ: Bảng biến thiên Câu 1 (Phần IV - Đề 04): y = 1/3 x^3 - x^2 - 3x + 2
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (9.2, 3.5);
  \\draw[thick] (0, 2.7) -- (9.2, 2.7);
  \\draw[thick] (0, 1.9) -- (9.2, 1.9);
  \\draw[thick] (1.3, 0) -- (1.3, 3.5);
  \\node at (0.65, 3.1) {$x$};
  \\node at (1.9, 3.1) {$-\\infty$};
  \\node at (4.1, 3.1) {$-1$};
  \\node at (6.4, 3.1) {$3$};
  \\node at (8.6, 3.1) {$+\\infty$};
  \\node at (0.65, 2.3) {$y'$};
  \\node at (3.0, 2.3) {$+$};
  \\node at (4.1, 2.3) {$0$};
  \\node at (5.25, 2.3) {$-$};
  \\node at (6.4, 2.3) {$0$};
  \\node at (7.5, 2.3) {$+$};
  \\node at (0.65, 0.95) {$y$};
  \\node (w1) at (1.9, 0.45) {$-\\infty$};
  \\node (w2) at (4.1, 1.45) {$\\dfrac{11}{3}$};
  \\node (w3) at (6.4, 0.45) {$-7$};
  \\node (w4) at (8.6, 1.45) {$+\\infty$};
  \\draw[->, thick] (w1) -- (w2);
  \\draw[->, thick] (w2) -- (w3);
  \\draw[->, thick] (w3) -- (w4);
\\end{tikzpicture}`;

      case 'd3_q1_bbt':
        return `% TikZ: Bảng biến thiên Câu 1 (Phần I - Đề 03)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (9.2, 3.3);
  \\draw[thick] (0, 2.5) -- (9.2, 2.5);
  \\draw[thick] (0, 1.7) -- (9.2, 1.7);
  \\draw[thick] (1.3, 0) -- (1.3, 3.3);
  \\node at (0.65, 2.9) {$x$};
  \\node at (1.9, 2.9) {$-\\infty$};
  \\node at (4.1, 2.9) {$-1$};
  \\node at (6.4, 2.9) {$2$};
  \\node at (8.6, 2.9) {$+\\infty$};
  \\node at (0.65, 2.1) {$f'(x)$};
  \\node at (3.0, 2.1) {$-$};
  \\node at (4.1, 2.1) {$0$};
  \\node at (5.25, 2.1) {$+$};
  \\node at (6.4, 2.1) {$0$};
  \\node at (7.5, 2.1) {$-$};
  \\node at (0.65, 0.85) {$f(x)$};
  \\node (a1) at (1.9, 1.35) {$+\\infty$};
  \\node (a2) at (4.1, 0.35) {$-2$};
  \\node (a3) at (6.4, 1.35) {$3$};
  \\node (a4) at (8.6, 0.35) {$-\\infty$};
  \\draw[->, thick] (a1) -- (a2);
  \\draw[->, thick] (a2) -- (a3);
  \\draw[->, thick] (a3) -- (a4);
\\end{tikzpicture}`;

      case 'd3_q2_graph':
        return `% TikZ: Đồ thị hàm số bậc ba Câu 2 (Phần I - Đề 03): CĐ (-2;1), đi qua (-1;-2), CT (0;-4), cắt Ox tại (1;0)
\\begin{tikzpicture}[>=stealth, scale=0.75]
  \\draw[->, thick] (-3.2,0) -- (2.5,0) node[below] {$x$};
  \\draw[->, thick] (0,-4.6) -- (0,2.2) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[dashed] (-2,0) node[below] {$-2$} -- (-2,1) -- (0,1) node[right] {$1$};
  \\draw[dashed] (-1,0) node[below] {$-1$} -- (-1,-2) -- (0,-2) node[right] {$-2$};
  \\node[right] at (0,-4) {$-4$};
  \\node[below right] at (1,0) {$1$};
  \\draw[thick, domain=-2.85:1.15, samples=80] plot (\\x, {1.25*(\\x)^3 + 3.75*(\\x)^2 - 4});
\\end{tikzpicture}`;

      case 'd3_q3_graph':
        return `% TikZ: Đồ thị hàm trùng phương Câu 3 (Phần I - Đề 03): y = -x^4 + 2x^2 + 1
\\begin{tikzpicture}[>=stealth, scale=0.9]
  \\draw[->, thick] (-2.4,0) -- (2.6,0) node[below] {$x$};
  \\draw[->, thick] (0,-1.5) -- (0,3.2) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[dashed] (-1,0) node[below] {$-1$} -- (-1,2) -- (1,2) -- (1,0) node[below] {$1$};
  \\node[above left] at (0,2) {$2$};
  \\node[below left] at (0,1) {$1$};
  \\draw[thick, domain=-1.72:1.72, samples=80] plot (\\x, {-(\\x)^4 + 2*(\\x)^2 + 1});
\\end{tikzpicture}`;

      case 'd3_q4_bbt':
        return `% TikZ: Bảng biến thiên Câu 4 (Phần I - Đề 03) trên đoạn [-2; 3]
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (9.2, 3.3);
  \\draw[thick] (0, 2.5) -- (9.2, 2.5);
  \\draw[thick] (0, 1.7) -- (9.2, 1.7);
  \\draw[thick] (1.3, 0) -- (1.3, 3.3);
  \\node at (0.65, 2.9) {$x$};
  \\node at (1.9, 2.9) {$-2$};
  \\node at (4.1, 2.9) {$-1$};
  \\node at (6.4, 2.9) {$1$};
  \\node at (8.6, 2.9) {$3$};
  \\node at (0.65, 2.1) {$y'$};
  \\node at (3.0, 2.1) {$+$};
  \\node at (4.1, 2.1) {$0$};
  \\node at (5.25, 2.1) {$-$};
  \\node at (6.4, 2.1) {$0$};
  \\node at (7.5, 2.1) {$+$};
  \\node at (0.65, 0.85) {$y$};
  \\node (b1) at (1.9, 0.35) {$-1$};
  \\node (b2) at (4.1, 1.35) {$4$};
  \\node (b3) at (6.4, 0.35) {$-2$};
  \\node (b4) at (8.6, 1.35) {$3$};
  \\draw[->, thick] (b1) -- (b2);
  \\draw[->, thick] (b2) -- (b3);
  \\draw[->, thick] (b3) -- (b4);
\\end{tikzpicture}`;

      case 'd3_q5_graph':
        return `% TikZ: Đồ thị hàm phân thức Câu 5 (Phần I - Đề 03): TCĐ x = -1, TCN y = 2
\\begin{tikzpicture}[>=stealth, scale=0.8]
  \\draw[->, thick] (-3.5,0) -- (4.2,0) node[below] {$x$};
  \\draw[->, thick] (0,-3.8) -- (0,4.2) node[left] {$y$};
  \\node[below right] at (0,0) {$O$};
  \\draw[dashed, red!80!black, thick] (-1,-3.6) -- (-1,4.0);
  \\draw[dashed, violet!80!black, thick] (-3.3,2) -- (4.0,2);
  \\node[below left] at (-1,0) {$-1$};
  \\node[above right] at (0,2) {$2$};
  \\draw[thick, domain=-3.2:-1.38, samples=60] plot (\\x, {(2*\\x)/(\\x + 1)});
  \\draw[thick, domain=-0.64:3.8, samples=60] plot (\\x, {(2*\\x)/(\\x + 1)});
\\end{tikzpicture}`;

      case 'd3_q6_graph':
        return `% TikZ: Đồ thị hàm số y = (x + 2)/(x - 1) Câu 6 (Phần I - Đề 03)
\\begin{tikzpicture}[>=stealth, scale=0.75]
  \\draw[->, thick] (-3.6,0) -- (3.8,0) node[below] {$x$};
  \\draw[->, thick] (0,-3.8) -- (0,4.2) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[dashed, red!80!black, thick] (1,-3.6) -- (1,4.0);
  \\draw[dashed, violet!80!black, thick] (-3.4,1) -- (3.6,1);
  \\node[below right] at (1,0) {$1$};
  \\node[above left] at (0,1) {$1$};
  \\node[left] at (0,-2) {$-2$};
  \\node[below left] at (-2,0) {$-2$};
  \\draw[thick, domain=-3.3:0.35, samples=60] plot (\\x, {(\\x + 2)/(\\x - 1)});
  \\draw[thick, domain=1.95:3.5, samples=60] plot (\\x, {(\\x + 2)/(\\x - 1)});
\\end{tikzpicture}`;

      case 'd3_q7_graph':
        return `% TikZ: Đồ thị hàm số y = -x^3 - 3x^2 Câu 7 (Phần I - Đề 03)
\\begin{tikzpicture}[>=stealth, scale=0.75]
  \\draw[->, thick] (-3.6,0) -- (2.2,0) node[below] {$x$};
  \\draw[->, thick] (0,-4.6) -- (0,2.2) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[dashed] (-2,0) node[above] {$-2$} -- (-2,-4) -- (0,-4) node[right] {$-4$};
  \\draw[thick, domain=-3.15:0.85, samples=80] plot (\\x, {-(\\x)^3 - 3*(\\x)^2});
\\end{tikzpicture}`;

      case 'd3_q10_bxd':
        return `% TikZ: Bảng xét dấu f'(x) Câu 10 (Phần I - Đề 03)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (8.8, 1.8);
  \\draw[thick] (0, 0.9) -- (8.8, 0.9);
  \\draw[thick] (1.4, 0) -- (1.4, 1.8);
  \\draw[thick] (4.05, 0) -- (4.05, 0.9);
  \\draw[thick] (4.15, 0) -- (4.15, 0.9);
  \\node at (0.7, 1.35) {$x$};
  \\node at (2.0, 1.35) {$-\\infty$};
  \\node at (4.1, 1.35) {$-2$};
  \\node at (6.2, 1.35) {$1$};
  \\node at (8.2, 1.35) {$+\\infty$};
  \\node at (0.7, 0.45) {$f'(x)$};
  \\node at (3.05, 0.45) {$-$};
  \\node at (5.15, 0.45) {$-$};
  \\node at (6.2, 0.45) {$0$};
  \\node at (7.2, 0.45) {$+$};
\\end{tikzpicture}`;

      case 'd3_q11_bbt':
        return `% TikZ: Bảng biến thiên Câu 11 (Phần I - Đề 03)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (9.6, 3.4);
  \\draw[thick] (0, 2.6) -- (9.6, 2.6);
  \\draw[thick] (0, 1.8) -- (9.6, 1.8);
  \\draw[thick] (1.2, 0) -- (1.2, 3.4);
  \\draw[thick] (4.35, 0) -- (4.35, 2.6);
  \\draw[thick] (4.45, 0) -- (4.45, 2.6);
  \\node at (0.6, 3.0) {$x$};
  \\node at (1.8, 3.0) {$-\\infty$};
  \\node at (4.4, 3.0) {$0$};
  \\node at (6.8, 3.0) {$2$};
  \\node at (9.0, 3.0) {$+\\infty$};
  \\node at (0.6, 2.2) {$y'$};
  \\node at (3.1, 2.2) {$-$};
  \\node at (5.6, 2.2) {$-$};
  \\node at (6.8, 2.2) {$0$};
  \\node at (7.9, 2.2) {$+$};
  \\node at (0.6, 0.9) {$y$};
  \\node (u1) at (1.8, 1.45) {$3$};
  \\node (u2) at (3.9, 0.35) {$-\\infty$};
  \\node (u3) at (4.9, 1.45) {$+\\infty$};
  \\node (u4) at (6.8, 0.35) {$-1$};
  \\node (u5) at (9.0, 1.45) {$1$};
  \\draw[->, thick] (u1) -- (u2);
  \\draw[->, thick] (u3) -- (u4);
  \\draw[->, thick] (u4) -- (u5);
\\end{tikzpicture}`;

      case 'd3_p2_q1_bbt':
        return `% TikZ: Bảng biến thiên Câu 1 (Phần II - Đề 03)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (10.8, 3.4);
  \\draw[thick] (0, 2.6) -- (10.8, 2.6);
  \\draw[thick] (0, 1.8) -- (10.8, 1.8);
  \\draw[thick] (1.2, 0) -- (1.2, 3.4);
  \\draw[thick] (5.95, 0) -- (5.95, 2.6);
  \\draw[thick] (6.05, 0) -- (6.05, 2.6);
  \\node at (0.6, 3.0) {$x$};
  \\node at (1.8, 3.0) {$-\\infty$};
  \\node at (3.9, 3.0) {$-1$};
  \\node at (6.0, 3.0) {$1$};
  \\node at (8.1, 3.0) {$3$};
  \\node at (10.2, 3.0) {$+\\infty$};
  \\node at (0.6, 2.2) {$y'$};
  \\node at (2.85, 2.2) {$+$};
  \\node at (3.9, 2.2) {$0$};
  \\node at (4.95, 2.2) {$-$};
  \\node at (7.05, 2.2) {$-$};
  \\node at (8.1, 2.2) {$0$};
  \\node at (9.15, 2.2) {$+$};
  \\node at (0.6, 0.9) {$y$};
  \\node (v1) at (1.8, 0.35) {$-\\infty$};
  \\node (v2) at (3.9, 1.45) {$-3$};
  \\node (v3) at (5.45, 0.35) {$-\\infty$};
  \\node (v4) at (6.55, 1.45) {$+\\infty$};
  \\node (v5) at (8.1, 0.35) {$5$};
  \\node (v6) at (10.2, 1.45) {$+\\infty$};
  \\draw[->, thick] (v1) -- (v2);
  \\draw[->, thick] (v2) -- (v3);
  \\draw[->, thick] (v4) -- (v5);
  \\draw[->, thick] (v5) -- (v6);
\\end{tikzpicture}`;

      case 'd3_p2_q2_graph':
        return `% TikZ: Đồ thị hàm bậc ba Câu 2 (Phần II - Đề 03): y = x^3 - 3x^2
\\begin{tikzpicture}[>=stealth, scale=0.75]
  \\draw[->, thick] (-2.2,0) -- (3.8,0) node[below] {$x$};
  \\draw[->, thick] (0,-4.6) -- (0,2.2) node[left] {$y$};
  \\node[below right] at (0,0) {$O$};
  \\node[above left] at (-1,0) {$-1$};
  \\node[above] at (1,0) {$1$};
  \\node[above] at (2,0) {$2$};
  \\node[left] at (0,-2) {$-2$};
  \\node[left] at (0,-4) {$-4$};
  \\draw[dashed] (-1,0) -- (-1,-4) -- (2,-4) -- (2,0);
  \\draw[dashed] (1,0) -- (1,-2) -- (0,-2);
  \\draw[thick, domain=-1.1:3.1, samples=80] plot (\\x, {(\\x)^3 - 3*(\\x)^2});
\\end{tikzpicture}`;

      case 'd3_p4_q1_bbt':
        return `% TikZ: Bảng biến thiên Câu 1 (Phần IV - Đề 03): y = 1/3 x^3 - 2x^2 + 3x + 1
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (9.2, 3.5);
  \\draw[thick] (0, 2.7) -- (9.2, 2.7);
  \\draw[thick] (0, 1.9) -- (9.2, 1.9);
  \\draw[thick] (1.3, 0) -- (1.3, 3.5);
  \\node at (0.65, 3.1) {$x$};
  \\node at (1.9, 3.1) {$-\\infty$};
  \\node at (4.1, 3.1) {$1$};
  \\node at (6.4, 3.1) {$3$};
  \\node at (8.6, 3.1) {$+\\infty$};
  \\node at (0.65, 2.3) {$y'$};
  \\node at (3.0, 2.3) {$+$};
  \\node at (4.1, 2.3) {$0$};
  \\node at (5.25, 2.3) {$-$};
  \\node at (6.4, 2.3) {$0$};
  \\node at (7.5, 2.3) {$+$};
  \\node at (0.65, 0.95) {$y$};
  \\node (w1) at (1.9, 0.45) {$-\\infty$};
  \\node (w2) at (4.1, 1.45) {$\\dfrac{7}{3}$};
  \\node (w3) at (6.4, 0.45) {$1$};
  \\node (w4) at (8.6, 1.45) {$+\\infty$};
  \\draw[->, thick] (w1) -- (w2);
  \\draw[->, thick] (w2) -- (w3);
  \\draw[->, thick] (w3) -- (w4);
\\end{tikzpicture}`;

      case 'd3_p4_q3_bbt':
        return `% TikZ: Bảng biến thiên Câu 3 (Phần IV - Đề 03): C_tb(x) = x + 50 + 14400/x trên (0; +oo)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (7.4, 3.3);
  \\draw[thick] (0, 2.5) -- (7.4, 2.5);
  \\draw[thick] (0, 1.7) -- (7.4, 1.7);
  \\draw[thick] (1.4, 0) -- (1.4, 3.3);
  \\node at (0.7, 2.9) {$x$};
  \\node at (1.9, 2.9) {$0$};
  \\node at (4.4, 2.9) {$120$};
  \\node at (6.8, 2.9) {$+\\infty$};
  \\node at (0.7, 2.1) {$\\overline{C}'(x)$};
  \\node at (3.15, 2.1) {$-$};
  \\node at (4.4, 2.1) {$0$};
  \\node at (5.6, 2.1) {$+$};
  \\node at (0.7, 0.85) {$\\overline{C}(x)$};
  \\node (c1) at (2.0, 1.35) {$+\\infty$};
  \\node (c2) at (4.4, 0.35) {$290$};
  \\node (c3) at (6.8, 1.35) {$+\\infty$};
  \\draw[->, thick] (c1) -- (c2);
  \\draw[->, thick] (c2) -- (c3);
\\end{tikzpicture}`;

      case 'd5_q1_bbt':
        return `% TikZ: Bảng biến thiên Câu 1 (Phần I - Đề 05)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (9.2, 3.3);
  \\draw[thick] (0, 2.5) -- (9.2, 2.5);
  \\draw[thick] (0, 1.7) -- (9.2, 1.7);
  \\draw[thick] (1.3, 0) -- (1.3, 3.3);
  \\node at (0.65, 2.9) {$x$};
  \\node at (1.9, 2.9) {$-\\infty$};
  \\node at (4.1, 2.9) {$-1$};
  \\node at (6.4, 2.9) {$3$};
  \\node at (8.6, 2.9) {$+\\infty$};
  \\node at (0.65, 2.1) {$f'(x)$};
  \\node at (3.0, 2.1) {$-$};
  \\node at (4.1, 2.1) {$0$};
  \\node at (5.25, 2.1) {$+$};
  \\node at (6.4, 2.1) {$0$};
  \\node at (7.5, 2.1) {$-$};
  \\node at (0.65, 0.85) {$f(x)$};
  \\node (a1) at (1.9, 1.35) {$+\\infty$};
  \\node (a2) at (4.1, 0.35) {$-2$};
  \\node (a3) at (6.4, 1.35) {$5$};
  \\node (a4) at (8.6, 0.35) {$-\\infty$};
  \\draw[->, thick] (a1) -- (a2);
  \\draw[->, thick] (a2) -- (a3);
  \\draw[->, thick] (a3) -- (a4);
\\end{tikzpicture}`;

      case 'd5_q2_graph':
        return `% TikZ: Đồ thị hàm bậc ba Câu 2 (Phần I - Đề 05) có CĐ (0; 1), CT (2; -3)
\\begin{tikzpicture}[>=stealth, scale=0.75]
  \\draw[->, thick] (-2.2,0) -- (3.5,0) node[below] {$x$};
  \\draw[->, thick] (0,-3.8) -- (0,2.5) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\node[left] at (0,1) {$1$};
  \\draw[dashed] (2,0) node[above] {$2$} -- (2,-3) -- (0,-3) node[left] {$-3$};
  \\draw[thick, domain=-1.1:3.05, samples=80] plot (\\x, {(\\x)^3 - 3*(\\x)^2 + 1});
\\end{tikzpicture}`;

      case 'd5_q3_graph':
        return `% TikZ: Đồ thị hàm trùng phương Câu 3 (Phần I - Đề 05): y = x^4 - 2x^2 - 1
\\begin{tikzpicture}[>=stealth, scale=0.85]
  \\draw[->, thick] (-2.4,0) -- (2.4,0) node[below] {$x$};
  \\draw[->, thick] (0,-2.8) -- (0,2.2) node[left] {$y$};
  \\node[above left] at (0,0) {$O$};
  \\draw[dashed] (-1,0) node[above] {$-1$} -- (-1,-2) -- (1,-2) -- (1,0) node[above] {$1$};
  \\node[below left] at (0,-2) {$-2$};
  \\node[above right] at (0,-1) {$-1$};
  \\draw[thick, domain=-1.75:1.75, samples=80] plot (\\x, {(\\x)^4 - 2*(\\x)^2 - 1});
\\end{tikzpicture}`;

      case 'd5_q4_bbt':
        return `% TikZ: Bảng biến thiên Câu 4 (Phần I - Đề 05) trên đoạn [-1; 4]
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (9.2, 3.3);
  \\draw[thick] (0, 2.5) -- (9.2, 2.5);
  \\draw[thick] (0, 1.7) -- (9.2, 1.7);
  \\draw[thick] (1.3, 0) -- (1.3, 3.3);
  \\node at (0.65, 2.9) {$x$};
  \\node at (1.9, 2.9) {$-1$};
  \\node at (4.1, 2.9) {$1$};
  \\node at (6.4, 2.9) {$2$};
  \\node at (8.6, 2.9) {$4$};
  \\node at (0.65, 2.1) {$y'$};
  \\node at (3.0, 2.1) {$+$};
  \\node at (4.1, 2.1) {$0$};
  \\node at (5.25, 2.1) {$-$};
  \\node at (6.4, 2.1) {$0$};
  \\node at (7.5, 2.1) {$+$};
  \\node at (0.65, 0.85) {$y$};
  \\node (b1) at (1.9, 0.35) {$-1$};
  \\node (b2) at (4.1, 1.35) {$6$};
  \\node (b3) at (6.4, 0.35) {$-4$};
  \\node (b4) at (8.6, 1.35) {$2$};
  \\draw[->, thick] (b1) -- (b2);
  \\draw[->, thick] (b2) -- (b3);
  \\draw[->, thick] (b3) -- (b4);
\\end{tikzpicture}`;

      case 'd5_q5_graph':
        return `% TikZ: Đồ thị hàm phân thức Câu 5 (Phần I - Đề 05): TCĐ x = 2, TCN y = -1
\\begin{tikzpicture}[>=stealth, scale=0.8]
  \\draw[->, thick] (-2.4,0) -- (4.4,0) node[below] {$x$};
  \\draw[->, thick] (0,-4.2) -- (0,3.2) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[dashed, red!80!black, thick] (2,-4.0) -- (2,3.0);
  \\draw[dashed, violet!80!black, thick] (-2.2,-1) -- (4.2,-1);
  \\node[above right] at (2,0) {$2$};
  \\node[below left] at (0,-1) {$-1$};
  \\draw[thick, domain=-2.1:1.68, samples=60] plot (\\x, {(-\\x + 1)/(\\x - 2)});
  \\draw[thick, domain=2.32:4.1, samples=60] plot (\\x, {(-\\x + 1)/(\\x - 2)});
\\end{tikzpicture}`;

      case 'd5_q6_graph':
        return `% TikZ: Đồ thị hàm số y = (2x - 2)/(x + 1) Câu 6 (Phần I - Đề 05)
\\begin{tikzpicture}[>=stealth, scale=0.75]
  \\draw[->, thick] (-3.8,0) -- (3.5,0) node[below] {$x$};
  \\draw[->, thick] (0,-4.2) -- (0,4.2) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[dashed, red!80!black, thick] (-1,-4.0) -- (-1,4.0);
  \\draw[dashed, violet!80!black, thick] (-3.6,2) -- (3.3,2);
  \\node[below left] at (-1,0) {$-1$};
  \\node[above right] at (0,2) {$2$};
  \\node[below right] at (0,-2) {$-2$};
  \\node[below] at (1,0) {$1$};
  \\draw[thick, domain=-3.5:-1.75, samples=60] plot (\\x, {(2*\\x - 2)/(\\x + 1)});
  \\draw[thick, domain=-0.35:3.2, samples=60] plot (\\x, {(2*\\x - 2)/(\\x + 1)});
\\end{tikzpicture}`;

      case 'd5_q7_graph':
        return `% TikZ: Đồ thị hàm số y = x^3 - 3x^2 Câu 7 (Phần I - Đề 05)
\\begin{tikzpicture}[>=stealth, scale=0.75]
  \\draw[->, thick] (-1.8,0) -- (3.8,0) node[below] {$x$};
  \\draw[->, thick] (0,-4.6) -- (0,2.2) node[left] {$y$};
  \\node[above left] at (0,0) {$O$};
  \\draw[dashed] (2,0) node[above] {$2$} -- (2,-4) -- (0,-4) node[left] {$-4$};
  \\draw[dashed] (1,0) node[above] {$1$} -- (1,-2) -- (0,-2) node[left] {$-2$};
  \\node[below right] at (3,0) {$3$};
  \\draw[thick, domain=-1.1:3.15, samples=80] plot (\\x, {(\\x)^3 - 3*(\\x)^2});
\\end{tikzpicture}`;

      case 'd5_q10_bxd':
        return `% TikZ: Bảng xét dấu f'(x) Câu 10 (Phần I - Đề 05)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (10.2, 1.8);
  \\draw[thick] (0, 0.9) -- (10.2, 0.9);
  \\draw[thick] (1.4, 0) -- (1.4, 1.8);
  \\node at (0.7, 1.35) {$x$};
  \\node at (2.0, 1.35) {$-\\infty$};
  \\node at (4.0, 1.35) {$-2$};
  \\node at (5.8, 1.35) {$1$};
  \\node at (7.6, 1.35) {$4$};
  \\node at (9.5, 1.35) {$+\\infty$};
  \\node at (0.7, 0.45) {$f'(x)$};
  \\node at (3.0, 0.45) {$+$};
  \\node at (4.0, 0.45) {$0$};
  \\node at (4.9, 0.45) {$-$};
  \\node at (5.8, 0.45) {$0$};
  \\node at (6.7, 0.45) {$-$};
  \\node at (7.6, 0.45) {$0$};
  \\node at (8.55, 0.45) {$+$};
\\end{tikzpicture}`;

      case 'd5_q11_bbt':
        return `% TikZ: Bảng biến thiên Câu 11 (Phần I - Đề 05)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (9.6, 3.4);
  \\draw[thick] (0, 2.6) -- (9.6, 2.6);
  \\draw[thick] (0, 1.8) -- (9.6, 1.8);
  \\draw[thick] (1.2, 0) -- (1.2, 3.4);
  \\draw[thick] (4.35, 0) -- (4.35, 2.6);
  \\draw[thick] (4.45, 0) -- (4.45, 2.6);
  \\node at (0.6, 3.0) {$x$};
  \\node at (1.8, 3.0) {$-\\infty$};
  \\node at (4.4, 3.0) {$1$};
  \\node at (6.8, 3.0) {$4$};
  \\node at (9.0, 3.0) {$+\\infty$};
  \\node at (0.6, 2.2) {$y'$};
  \\node at (3.1, 2.2) {$-$};
  \\node at (5.6, 2.2) {$-$};
  \\node at (6.8, 2.2) {$0$};
  \\node at (7.9, 2.2) {$+$};
  \\node at (0.6, 0.9) {$y$};
  \\node (u1) at (1.8, 1.45) {$4$};
  \\node (u2) at (3.9, 0.35) {$-\\infty$};
  \\node (u3) at (4.9, 1.45) {$+\\infty$};
  \\node (u4) at (6.8, 0.35) {$-2$};
  \\node (u5) at (9.0, 1.45) {$4$};
  \\draw[->, thick] (u1) -- (u2);
  \\draw[->, thick] (u3) -- (u4);
  \\draw[->, thick] (u4) -- (u5);
\\end{tikzpicture}`;

      case 'd5_p2_q1_bbt':
        return `% TikZ: Bảng biến thiên Câu 1 (Phần II - Đề 05)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (10.8, 3.4);
  \\draw[thick] (0, 2.6) -- (10.8, 2.6);
  \\draw[thick] (0, 1.8) -- (10.8, 1.8);
  \\draw[thick] (1.2, 0) -- (1.2, 3.4);
  \\draw[thick] (5.95, 0) -- (5.95, 2.6);
  \\draw[thick] (6.05, 0) -- (6.05, 2.6);
  \\node at (0.6, 3.0) {$x$};
  \\node at (1.8, 3.0) {$-\\infty$};
  \\node at (3.9, 3.0) {$-1$};
  \\node at (6.0, 3.0) {$1$};
  \\node at (8.1, 3.0) {$3$};
  \\node at (10.2, 3.0) {$+\\infty$};
  \\node at (0.6, 2.2) {$y'$};
  \\node at (2.85, 2.2) {$+$};
  \\node at (3.9, 2.2) {$0$};
  \\node at (4.95, 2.2) {$-$};
  \\node at (7.05, 2.2) {$-$};
  \\node at (8.1, 2.2) {$0$};
  \\node at (9.15, 2.2) {$+$};
  \\node at (0.6, 0.9) {$y$};
  \\node (v1) at (1.8, 0.35) {$-\\infty$};
  \\node (v2) at (3.9, 1.45) {$-2$};
  \\node (v3) at (5.45, 0.35) {$-\\infty$};
  \\node (v4) at (6.55, 1.45) {$+\\infty$};
  \\node (v5) at (8.1, 0.35) {$2$};
  \\node (v6) at (10.2, 1.45) {$+\\infty$};
  \\draw[->, thick] (v1) -- (v2);
  \\draw[->, thick] (v2) -- (v3);
  \\draw[->, thick] (v4) -- (v5);
  \\draw[->, thick] (v5) -- (v6);
\\end{tikzpicture}`;

      case 'd5_p2_q2_graph':
        return `% TikZ: Đồ thị hàm bậc ba Câu 2 (Phần II - Đề 05): y = -x^3 + 3x^2
\\begin{tikzpicture}[>=stealth, scale=0.75]
  \\draw[->, thick] (-2.2,0) -- (3.8,0) node[below] {$x$};
  \\draw[->, thick] (0,-1.8) -- (0,4.8) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\node[below] at (-1,0) {$-1$};
  \\draw[dashed] (-1,0) -- (-1,4) -- (2,4) -- (2,0) node[below] {$2$};
  \\node[left] at (0,4) {$4$};
  \\node[below] at (3,0) {$3$};
  \\draw[thick, domain=-1.1:3.1, samples=80] plot (\\x, {-(\\x)^3 + 3*(\\x)^2});
\\end{tikzpicture}`;

      case 'd5_p4_q1_bbt':
        return `% TikZ: Bảng biến thiên Câu 1 (Phần IV - Đề 05): y = -1/3 x^3 + x^2 + 3x - 2
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (9.2, 3.5);
  \\draw[thick] (0, 2.7) -- (9.2, 2.7);
  \\draw[thick] (0, 1.9) -- (9.2, 1.9);
  \\draw[thick] (1.3, 0) -- (1.3, 3.5);
  \\node at (0.65, 3.1) {$x$};
  \\node at (1.9, 3.1) {$-\\infty$};
  \\node at (4.1, 3.1) {$-1$};
  \\node at (6.4, 3.1) {$3$};
  \\node at (8.6, 3.1) {$+\\infty$};
  \\node at (0.65, 2.3) {$y'$};
  \\node at (3.0, 2.3) {$-$};
  \\node at (4.1, 2.3) {$0$};
  \\node at (5.25, 2.3) {$+$};
  \\node at (6.4, 2.3) {$0$};
  \\node at (7.5, 2.3) {$-$};
  \\node at (0.65, 0.95) {$y$};
  \\node (w1) at (1.9, 1.45) {$+\\infty$};
  \\node (w2) at (4.1, 0.45) {$-\\dfrac{11}{3}$};
  \\node (w3) at (6.4, 1.45) {$7$};
  \\node (w4) at (8.6, 0.45) {$-\\infty$};
  \\draw[->, thick] (w1) -- (w2);
  \\draw[->, thick] (w2) -- (w3);
  \\draw[->, thick] (w3) -- (w4);
\\end{tikzpicture}`;

      case 'd6_q1_bbt':
        return `% TikZ: Bảng biến thiên Câu 1 (Phần I - Đề 06)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (9.2, 3.3);
  \\draw[thick] (0, 2.5) -- (9.2, 2.5);
  \\draw[thick] (0, 1.7) -- (9.2, 1.7);
  \\draw[thick] (1.3, 0) -- (1.3, 3.3);
  \\node at (0.65, 2.9) {$x$};
  \\node at (1.9, 2.9) {$-\\infty$};
  \\node at (4.1, 2.9) {$-2$};
  \\node at (6.4, 2.9) {$1$};
  \\node at (8.6, 2.9) {$+\\infty$};
  \\node at (0.65, 2.1) {$f'(x)$};
  \\node at (3.0, 2.1) {$-$};
  \\node at (4.1, 2.1) {$0$};
  \\node at (5.25, 2.1) {$+$};
  \\node at (6.4, 2.1) {$0$};
  \\node at (7.5, 2.1) {$-$};
  \\node at (0.65, 0.85) {$f(x)$};
  \\node (a1) at (1.9, 1.35) {$+\\infty$};
  \\node (a2) at (4.1, 0.35) {$-3$};
  \\node (a3) at (6.4, 1.35) {$4$};
  \\node (a4) at (8.6, 0.35) {$-\\infty$};
  \\draw[->, thick] (a1) -- (a2);
  \\draw[->, thick] (a2) -- (a3);
  \\draw[->, thick] (a3) -- (a4);
\\end{tikzpicture}`;

      case 'd6_q2_graph':
        return `% TikZ: Đồ thị hàm bậc ba Câu 2 (Phần I - Đề 06) có CT (-1; -2), CĐ (2; 3)
\\begin{tikzpicture}[>=stealth, scale=0.75]
  \\draw[->, thick] (-2.6,0) -- (3.8,0) node[below] {$x$};
  \\draw[->, thick] (0,-3.2) -- (0,3.8) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[dashed] (-1,0) node[above] {$-1$} -- (-1,-2) -- (0,-2) node[right] {$-2$};
  \\draw[dashed] (2,0) node[below] {$2$} -- (2,3) -- (0,3) node[left] {$3$};
  \\draw[thick, domain=-2.2:3.2, samples=80] plot (\\x, {-0.37*(\\x)^3 + 0.555*(\\x)^2 + 2.22*(\\x) - 0.704});
\\end{tikzpicture}`;

      case 'd6_q3_graph':
        return `% TikZ: Đồ thị hàm bậc ba Câu 3 (Phần I - Đề 06) có điểm cực đại (-1; 4) và cực tiểu (1; 0)
\\begin{tikzpicture}[>=stealth, scale=0.75]
  \\draw[->, thick] (-2.8,0) -- (2.8,0) node[below] {$x$};
  \\draw[->, thick] (0,-1.8) -- (0,4.8) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[dashed] (-1,0) node[below] {$-1$} -- (-1,4) -- (0,4) node[right] {$4$};
  \\node[below] at (1,0) {$1$};
  \\node[right] at (0,2) {$2$};
  \\draw[thick, domain=-2.1:2.1, samples=80] plot (\\x, {(\\x)^3 - 3*(\\x) + 2});
\\end{tikzpicture}`;

      case 'd6_q4_graph':
        return `% TikZ: Đồ thị hàm số trên đoạn [-1; 4] Câu 4 (Phần I - Đề 06)
\\begin{tikzpicture}[>=stealth, scale=0.75]
  \\draw[->, thick] (-2.2,0) -- (4.8,0) node[below] {$x$};
  \\draw[->, thick] (0,-4.8) -- (0,5.6) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[dashed] (-1,0) node[below] {$-1$} -- (-1,2) -- (0,2) node[left] {$2$};
  \\draw[dashed] (1,0) node[below] {$1$} -- (1,5) -- (0,5) node[left] {$5$};
  \\draw[dashed] (3,0) node[above] {$3$} -- (3,-4) -- (0,-4) node[left] {$-4$};
  \\draw[dashed] (4,0) node[below] {$4$} -- (4,1) -- (0,1) node[left] {$1$};
  \\filldraw (-1,2) circle (2pt);
  \\filldraw (1,5) circle (2pt);
  \\filldraw (3,-4) circle (2pt);
  \\filldraw (4,1) circle (2pt);
\\end{tikzpicture}`;

      case 'd6_q5_graph':
        return `% TikZ: Đồ thị hàm phân thức Câu 5 (Phần I - Đề 06): TCĐ x = 2, TCN y = -1
\\begin{tikzpicture}[>=stealth, scale=0.75]
  \\draw[->, thick] (-2.5,0) -- (4.8,0) node[below] {$x$};
  \\draw[->, thick] (0,-4.2) -- (0,3.2) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[dashed, red!80!black, thick] (2,-4.0) -- (2,3.0);
  \\draw[dashed, violet!80!black, thick] (-2.3,-1) -- (4.6,-1);
  \\node[above right] at (2,0) {$2$};
  \\node[below left] at (0,-1) {$-1$};
  \\draw[thick, domain=-2.1:1.65, samples=60] plot (\\x, {(-\\x + 1)/(\\x - 2)});
  \\draw[thick, domain=2.35:4.4, samples=60] plot (\\x, {(-\\x + 1)/(\\x - 2)});
\\end{tikzpicture}`;

      case 'd6_q6_graph':
        return `% TikZ: Đồ thị hàm bậc ba Câu 6 (Phần I - Đề 06): y = -x^3 + 3x^2 - 1
\\begin{tikzpicture}[>=stealth, scale=0.75]
  \\draw[->, thick] (-1.8,0) -- (3.6,0) node[below] {$x$};
  \\draw[->, thick] (0,-2.6) -- (0,3.8) node[left] {$y$};
  \\node[above left] at (0,0) {$O$};
  \\node[left] at (0,-1) {$-1$};
  \\draw[dashed] (1,0) node[below] {$1$} -- (1,1) -- (0,1) node[left] {$1$};
  \\draw[dashed] (2,0) node[below] {$2$} -- (2,3) -- (0,3) node[left] {$3$};
  \\draw[thick, domain=-0.95:2.95, samples=80] plot (\\x, {-(\\x)^3 + 3*(\\x)^2 - 1});
\\end{tikzpicture}`;

      case 'd6_q7_graph':
        return `% TikZ: Đồ thị hàm phân thức Câu 7 (Phần I - Đề 06): y = (2x - 2)/(x + 1)
\\begin{tikzpicture}[>=stealth, scale=0.75]
  \\draw[->, thick] (-4.2,0) -- (3.6,0) node[below] {$x$};
  \\draw[->, thick] (0,-4.2) -- (0,4.4) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[dashed, red!80!black, thick] (-1,-4.0) -- (-1,4.2);
  \\draw[dashed, violet!80!black, thick] (-4.0,2) -- (3.4,2);
  \\node[below left] at (-1,0) {$-1$};
  \\node[above right] at (0,2) {$2$};
  \\node[right] at (0,-2) {$-2$};
  \\node[below] at (1,0) {$1$};
  \\draw[thick, domain=-3.8:-1.7, samples=60] plot (\\x, {(2*\\x - 2)/(\\x + 1)});
  \\draw[thick, domain=-0.35:3.3, samples=60] plot (\\x, {(2*\\x - 2)/(\\x + 1)});
\\end{tikzpicture}`;

      case 'd6_q9_graph':
        return `% TikZ: Đồ thị hàm trùng phương Câu 9 (Phần I - Đề 06): y = x^4 - 2x^2
\\begin{tikzpicture}[>=stealth, scale=0.85]
  \\draw[->, thick] (-2.4,0) -- (2.4,0) node[below] {$x$};
  \\draw[->, thick] (0,-1.8) -- (0,2.4) node[left] {$y$};
  \\node[above left] at (0,0) {$O$};
  \\draw[dashed] (-1,0) node[above] {$-1$} -- (-1,-1) -- (1,-1) -- (1,0) node[above] {$1$};
  \\node[below left] at (0,-1) {$-1$};
  \\draw[thick, domain=-1.68:1.68, samples=80] plot (\\x, {(\\x)^4 - 2*(\\x)^2});
\\end{tikzpicture}`;

      case 'd6_q12_bbt':
        return `% TikZ: Bảng biến thiên Câu 12 (Phần I - Đề 06): y = (3x + 1)/(x + 1)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (8.8, 3.4);
  \\draw[thick] (0, 2.6) -- (8.8, 2.6);
  \\draw[thick] (0, 1.8) -- (8.8, 1.8);
  \\draw[thick] (1.3, 0) -- (1.3, 3.4);
  \\draw[thick] (5.0, 0) -- (5.0, 2.6);
  \\draw[thick] (5.1, 0) -- (5.1, 2.6);
  \\node at (0.65, 3.0) {$x$};
  \\node at (1.9, 3.0) {$-\\infty$};
  \\node at (5.05, 3.0) {$-1$};
  \\node at (8.2, 3.0) {$+\\infty$};
  \\node at (0.65, 2.2) {$y'$};
  \\node at (3.4, 2.2) {$+$};
  \\node at (6.6, 2.2) {$+$};
  \\node at (0.65, 0.9) {$y$};
  \\node (u1) at (1.9, 0.35) {$3$};
  \\node (u2) at (4.45, 1.45) {$+\\infty$};
  \\node (u3) at (5.65, 0.35) {$-\\infty$};
  \\node (u4) at (8.2, 1.45) {$3$};
  \\draw[->, thick] (u1) -- (u2);
  \\draw[->, thick] (u3) -- (u4);
\\end{tikzpicture}`;

      case 'd6_p2_q1_bbt':
        return `% TikZ: Bảng biến thiên Câu 1 (Phần II - Đề 06)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (9.8, 3.4);
  \\draw[thick] (0, 2.6) -- (9.8, 2.6);
  \\draw[thick] (0, 1.8) -- (9.8, 1.8);
  \\draw[thick] (1.3, 0) -- (1.3, 3.4);
  \\draw[thick] (6.15, 0) -- (6.15, 2.6);
  \\draw[thick] (6.25, 0) -- (6.25, 2.6);
  \\node at (0.65, 3.0) {$x$};
  \\node at (1.9, 3.0) {$-\\infty$};
  \\node at (4.0, 3.0) {$-1$};
  \\node at (6.2, 3.0) {$2$};
  \\node at (9.2, 3.0) {$+\\infty$};
  \\node at (0.65, 2.2) {$f'(x)$};
  \\node at (2.95, 2.2) {$+$};
  \\node at (4.0, 2.2) {$0$};
  \\node at (5.1, 2.2) {$-$};
  \\node at (7.7, 2.2) {$+$};
  \\node at (0.65, 0.9) {$f(x)$};
  \\node (v1) at (1.9, 0.35) {$-\\infty$};
  \\node (v2) at (4.0, 1.45) {$4$};
  \\node (v3) at (5.6, 0.35) {$-\\infty$};
  \\node (v4) at (6.8, 0.35) {$-\\infty$};
  \\node (v5) at (9.2, 1.45) {$1$};
  \\draw[->, thick] (v1) -- (v2);
  \\draw[->, thick] (v2) -- (v3);
  \\draw[->, thick] (v4) -- (v5);
\\end{tikzpicture}`;

      case 'd6_p2_q2_graph':
        return `% TikZ: Đồ thị hàm bậc ba Câu 2 (Phần II - Đề 06): y = -x^3 + 3x^2 - 1
\\begin{tikzpicture}[>=stealth, scale=0.75]
  \\draw[->, thick] (-1.8,0) -- (3.6,0) node[below] {$x$};
  \\draw[->, thick] (0,-2.6) -- (0,3.8) node[left] {$y$};
  \\node[above left] at (0,0) {$O$};
  \\node[left] at (0,-1) {$-1$};
  \\draw[dashed] (1,0) node[below] {$1$} -- (1,1) -- (0,1) node[left] {$1$};
  \\draw[dashed] (2,0) node[below] {$2$} -- (2,3) -- (0,3) node[left] {$3$};
  \\draw[thick, domain=-0.95:2.95, samples=80] plot (\\x, {-(\\x)^3 + 3*(\\x)^2 - 1});
\\end{tikzpicture}`;

      case 'd6_p4_q1_bbt':
        return `% TikZ: Bảng biến thiên Câu 1 (Phần IV - Đề 06): y = x^3 - 3x^2 - 9x + 2
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (9.2, 3.4);
  \\draw[thick] (0, 2.6) -- (9.2, 2.6);
  \\draw[thick] (0, 1.8) -- (9.2, 1.8);
  \\draw[thick] (1.3, 0) -- (1.3, 3.4);
  \\node at (0.65, 3.0) {$x$};
  \\node at (1.9, 3.0) {$-\\infty$};
  \\node at (4.1, 3.0) {$-1$};
  \\node at (6.4, 3.0) {$3$};
  \\node at (8.6, 3.0) {$+\\infty$};
  \\node at (0.65, 2.2) {$y'$};
  \\node at (3.0, 2.2) {$+$};
  \\node at (4.1, 2.2) {$0$};
  \\node at (5.25, 2.2) {$-$};
  \\node at (6.4, 2.2) {$0$};
  \\node at (7.5, 2.2) {$+$};
  \\node at (0.65, 0.9) {$y$};
  \\node (w1) at (1.9, 0.35) {$-\\infty$};
  \\node (w2) at (4.1, 1.45) {$7$};
  \\node (w3) at (6.4, 0.35) {$-25$};
  \\node (w4) at (8.6, 1.45) {$+\\infty$};
  \\draw[->, thick] (w1) -- (w2);
  \\draw[->, thick] (w2) -- (w3);
  \\draw[->, thick] (w3) -- (w4);
\\end{tikzpicture}`;

      case 'd7_q1_bxd':
        return `% TikZ: Bảng xét dấu đạo hàm Câu 1 (Phần I - Đề 07)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (8.8, 1.8);
  \\draw[thick] (0, 0.9) -- (8.8, 0.9);
  \\draw[thick] (1.4, 0) -- (1.4, 1.8);
  \\draw[thick] (6.15, 0) -- (6.15, 0.9);
  \\draw[thick] (6.25, 0) -- (6.25, 0.9);
  \\node at (0.7, 1.35) {$x$};
  \\node at (2.0, 1.35) {$-\\infty$};
  \\node at (4.1, 1.35) {$-2$};
  \\node at (6.2, 1.35) {$1$};
  \\node at (8.2, 1.35) {$+\\infty$};
  \\node at (0.7, 0.45) {$y'$};
  \\node at (3.05, 0.45) {$+$};
  \\node at (4.1, 0.45) {$0$};
  \\node at (5.15, 0.45) {$-$};
  \\node at (7.2, 0.45) {$-$};
\\end{tikzpicture}`;

      case 'd7_q2_graph':
        return `% TikZ: Đồ thị hàm trùng phương Câu 2 (Phần I - Đề 07): y = x^4 - 2x^2 + 2
\\begin{tikzpicture}[>=stealth, scale=0.85]
  \\draw[->, thick] (-2.4,0) -- (2.4,0) node[below] {$x$};
  \\draw[->, thick] (0,-0.8) -- (0,3.6) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[dashed] (-1,0) node[below] {$-1$} -- (-1,1) -- (1,1) -- (1,0) node[below] {$1$};
  \\node[below left] at (0,1) {$1$};
  \\node[above left] at (0,2) {$2$};
  \\draw[thick, domain=-1.6:1.6, samples=80] plot (\\x, {(\\x)^4 - 2*(\\x)^2 + 2});
\\end{tikzpicture}`;

      case 'd7_q3_bxd':
        return `% TikZ: Bảng xét dấu đạo hàm Câu 3 (Phần I - Đề 07)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (10.6, 1.8);
  \\draw[thick] (0, 0.9) -- (10.6, 0.9);
  \\draw[thick] (1.4, 0) -- (1.4, 1.8);
  \\node at (0.7, 1.35) {$x$};
  \\node at (2.0, 1.35) {$-\\infty$};
  \\node at (3.6, 1.35) {$-2$};
  \\node at (5.2, 1.35) {$0$};
  \\node at (6.8, 1.35) {$2$};
  \\node at (8.4, 1.35) {$4$};
  \\node at (10.0, 1.35) {$+\\infty$};
  \\node at (0.7, 0.45) {$f'(x)$};
  \\node at (2.8, 0.45) {$-$};
  \\node at (3.6, 0.45) {$0$};
  \\node at (4.4, 0.45) {$+$};
  \\node at (5.2, 0.45) {$0$};
  \\node at (6.0, 0.45) {$+$};
  \\node at (6.8, 0.45) {$0$};
  \\node at (7.6, 0.45) {$-$};
  \\node at (8.4, 0.45) {$0$};
  \\node at (9.2, 0.45) {$+$};
\\end{tikzpicture}`;

      case 'd7_q4_graph':
        return `% TikZ: Đồ thị hàm phân thức Câu 4 (Phần I - Đề 07): y = (x + 1)/(x - 2)
\\begin{tikzpicture}[>=stealth, scale=0.75]
  \\draw[->, thick] (-3.2,0) -- (4.8,0) node[below] {$x$};
  \\draw[->, thick] (0,-3.6) -- (0,4.2) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[dashed, red!80!black, thick] (2,-3.4) -- (2,4.0);
  \\draw[dashed, violet!80!black, thick] (-3.0,1) -- (4.6,1);
  \\node[below right] at (2,0) {$2$};
  \\node[above left] at (0,1) {$1$};
  \\node[above left] at (-1,0) {$-1$};
  \\draw[thick, domain=-2.8:1.3, samples=60] plot (\\x, {(\\x + 1)/(\\x - 2)});
  \\draw[thick, domain=2.95:4.5, samples=60] plot (\\x, {(\\x + 1)/(\\x - 2)});
\\end{tikzpicture}`;

      case 'd7_q5_graph':
        return `% TikZ: Đồ thị hàm số bậc ba Câu 5 (Phần I - Đề 07): y = x^3 - 3x^2 + 4
\\begin{tikzpicture}[>=stealth, scale=0.75]
  \\draw[->, thick] (-2.2,0) -- (3.6,0) node[below] {$x$};
  \\draw[->, thick] (0,-1.8) -- (0,5.2) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\node[above left] at (-1,0) {$-1$};
  \\node[below] at (2,0) {$2$};
  \\node[left] at (0,4) {$4$};
  \\draw[dashed] (1,0) node[below] {$1$} -- (1,2) -- (0,2) node[left] {$2$};
  \\draw[thick, domain=-1.2:3.05, samples=80] plot (\\x, {(\\x)^3 - 3*(\\x)^2 + 4});
\\end{tikzpicture}`;

      case 'd7_q7_bbt':
        return `% TikZ: Bảng biến thiên Câu 7 (Phần I - Đề 07)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (9.2, 3.3);
  \\draw[thick] (0, 2.5) -- (9.2, 2.5);
  \\draw[thick] (0, 1.7) -- (9.2, 1.7);
  \\draw[thick] (1.3, 0) -- (1.3, 3.3);
  \\node at (0.65, 2.9) {$x$};
  \\node at (1.9, 2.9) {$-\\infty$};
  \\node at (4.1, 2.9) {$-1$};
  \\node at (6.4, 2.9) {$2$};
  \\node at (8.6, 2.9) {$+\\infty$};
  \\node at (0.65, 2.1) {$y'$};
  \\node at (3.0, 2.1) {$+$};
  \\node at (4.1, 2.1) {$0$};
  \\node at (5.25, 2.1) {$-$};
  \\node at (6.4, 2.1) {$0$};
  \\node at (7.5, 2.1) {$+$};
  \\node at (0.65, 0.85) {$y$};
  \\node (a1) at (1.9, 0.35) {$-\\infty$};
  \\node (a2) at (4.1, 1.35) {$5$};
  \\node (a3) at (6.4, 0.35) {$-1$};
  \\node (a4) at (8.6, 1.35) {$+\\infty$};
  \\draw[->, thick] (a1) -- (a2);
  \\draw[->, thick] (a2) -- (a3);
  \\draw[->, thick] (a3) -- (a4);
\\end{tikzpicture}`;

      case 'd7_q9_graph':
        return `% TikZ: Đồ thị hàm phân thức Câu 9 (Phần I - Đề 07): TCĐ x = -1, TCN y = 1
\\begin{tikzpicture}[>=stealth, scale=0.75]
  \\draw[->, thick] (-4.2,0) -- (3.6,0) node[below] {$x$};
  \\draw[->, thick] (0,-3.6) -- (0,4.2) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[dashed, red!80!black, thick] (-1,-3.4) -- (-1,4.0);
  \\draw[dashed, violet!80!black, thick] (-4.0,1) -- (3.4,1);
  \\node[below left] at (-1,0) {$-1$};
  \\node[above right] at (0,1) {$1$};
  \\node[right] at (0,-1) {$-1$};
  \\node[below] at (1,0) {$1$};
  \\draw[thick, domain=-3.8:-1.65, samples=60] plot (\\x, {(\\x - 1)/(\\x + 1)});
  \\draw[thick, domain=-0.5:3.2, samples=60] plot (\\x, {(\\x - 1)/(\\x + 1)});
\\end{tikzpicture}`;

      case 'd7_q10_bbt':
        return `% TikZ: Bảng biến thiên Câu 10 (Phần I - Đề 07)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (9.6, 3.4);
  \\draw[thick] (0, 2.6) -- (9.6, 2.6);
  \\draw[thick] (0, 1.8) -- (9.6, 1.8);
  \\draw[thick] (1.2, 0) -- (1.2, 3.4);
  \\draw[thick] (4.35, 0) -- (4.35, 2.6);
  \\draw[thick] (4.45, 0) -- (4.45, 2.6);
  \\node at (0.6, 3.0) {$x$};
  \\node at (1.8, 3.0) {$-\\infty$};
  \\node at (4.4, 3.0) {$-2$};
  \\node at (6.8, 3.0) {$1$};
  \\node at (9.0, 3.0) {$+\\infty$};
  \\node at (0.6, 2.2) {$f'(x)$};
  \\node at (3.1, 2.2) {$-$};
  \\node at (5.6, 2.2) {$-$};
  \\node at (6.8, 2.2) {$0$};
  \\node at (7.9, 2.2) {$+$};
  \\node at (0.6, 0.9) {$f(x)$};
  \\node (u1) at (1.8, 1.45) {$2$};
  \\node (u2) at (3.9, 0.35) {$-\\infty$};
  \\node (u3) at (4.9, 1.45) {$+\\infty$};
  \\node (u4) at (6.8, 0.35) {$-3$};
  \\node (u5) at (9.0, 1.45) {$4$};
  \\draw[->, thick] (u1) -- (u2);
  \\draw[->, thick] (u3) -- (u4);
  \\draw[->, thick] (u4) -- (u5);
\\end{tikzpicture}`;

      case 'd7_p2_q1_graph':
        return `% TikZ: Đồ thị hàm bậc ba Câu 1 (Phần II - Đề 07): y = x^3 - 3x + 1
\\begin{tikzpicture}[>=stealth, scale=0.75]
  \\draw[->, thick] (-2.6,0) -- (2.6,0) node[below] {$x$};
  \\draw[->, thick] (0,-2.4) -- (0,3.8) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[dashed] (-1,0) node[below] {$-1$} -- (-1,3) -- (0,3) node[right] {$3$};
  \\draw[dashed] (1,0) node[above] {$1$} -- (1,-1) -- (0,-1) node[left] {$-1$};
  \\node[right] at (0,1) {$1$};
  \\draw[thick, domain=-2.1:2.1, samples=80] plot (\\x, {(\\x)^3 - 3*(\\x) + 1});
\\end{tikzpicture}`;

      case 'd7_p2_q2_bbt':
        return `% TikZ: Bảng biến thiên thiếu điểm gián đoạn Câu 2c (Phần II - Đề 07)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (7.4, 3.2);
  \\draw[thick] (0, 2.4) -- (7.4, 2.4);
  \\draw[thick] (0, 1.6) -- (7.4, 1.6);
  \\draw[thick] (1.3, 0) -- (1.3, 3.2);
  \\node at (0.65, 2.8) {$x$};
  \\node at (2.0, 2.8) {$-\\infty$};
  \\node at (6.7, 2.8) {$+\\infty$};
  \\node at (0.65, 2.0) {$y'$};
  \\node at (4.35, 2.0) {$-$};
  \\node at (0.65, 0.8) {$y$};
  \\node (m1) at (2.0, 1.3) {$3$};
  \\node (m2) at (6.7, 0.3) {$3$};
  \\draw[->, thick] (m1) -- (m2);
\\end{tikzpicture}`;

      case 'd7_p3_q3_graph':
        return `% TikZ: Đồ thị hàm phân thức Câu 3 (Phần III - Đề 07): TCĐ x = 2, TCN y = 1, qua (0; -1)
\\begin{tikzpicture}[>=stealth, scale=0.75]
  \\draw[->, thick] (-2.6,0) -- (4.8,0) node[below] {$x$};
  \\draw[->, thick] (0,-3.6) -- (0,4.2) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[dashed, red!80!black, thick] (2,-3.4) -- (2,4.0);
  \\draw[dashed, violet!80!black, thick] (-2.4,1) -- (4.6,1);
  \\node[below right] at (2,0) {$2$};
  \\node[above left] at (0,1) {$1$};
  \\node[left] at (0,-1) {$-1$};
  \\draw[thick, domain=-2.2:1.2, samples=60] plot (\\x, {(2*\\x + 4)/(2*\\x - 4)});
  \\draw[thick, domain=2.8:4.4, samples=60] plot (\\x, {(2*\\x + 4)/(2*\\x - 4)});
\\end{tikzpicture}`;

      case 'd7_p4_q1_bbt':
        return `% TikZ: Bảng biến thiên Câu 1 (Phần IV - Đề 07): y = 1/3 x^3 - x^2 - 3x + 4
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (9.2, 3.5);
  \\draw[thick] (0, 2.7) -- (9.2, 2.7);
  \\draw[thick] (0, 1.9) -- (9.2, 1.9);
  \\draw[thick] (1.3, 0) -- (1.3, 3.5);
  \\node at (0.65, 3.1) {$x$};
  \\node at (1.9, 3.1) {$-\\infty$};
  \\node at (4.1, 3.1) {$-1$};
  \\node at (6.4, 3.1) {$3$};
  \\node at (8.6, 3.1) {$+\\infty$};
  \\node at (0.65, 2.3) {$y'$};
  \\node at (3.0, 2.3) {$+$};
  \\node at (4.1, 2.3) {$0$};
  \\node at (5.25, 2.3) {$-$};
  \\node at (6.4, 2.3) {$0$};
  \\node at (7.5, 2.3) {$+$};
  \\node at (0.65, 0.95) {$y$};
  \\node (w1) at (1.9, 0.45) {$-\\infty$};
  \\node (w2) at (4.1, 1.45) {$\\dfrac{17}{3}$};
  \\node (w3) at (6.4, 0.45) {$-5$};
  \\node (w4) at (8.6, 1.45) {$+\\infty$};
  \\draw[->, thick] (w1) -- (w2);
  \\draw[->, thick] (w2) -- (w3);
  \\draw[->, thick] (w3) -- (w4);
\\end{tikzpicture}`;

      case 'd8_q1_bbt':
        return `% TikZ: Bảng biến thiên Câu 1 (Đề 08)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (9.2, 3.5);
  \\draw[thick] (0, 2.7) -- (9.2, 2.7);
  \\draw[thick] (0, 1.9) -- (9.2, 1.9);
  \\draw[thick] (1.3, 0) -- (1.3, 3.5);
  \\node at (0.65, 3.1) {$x$};
  \\node at (1.9, 3.1) {$-\\infty$};
  \\node at (4.1, 3.1) {$-1$};
  \\node at (6.4, 3.1) {$3$};
  \\node at (8.6, 3.1) {$+\\infty$};
  \\node at (0.65, 2.3) {$f'(x)$};
  \\node at (3.0, 2.3) {$+$};
  \\node at (4.1, 2.3) {$0$};
  \\node at (5.25, 2.3) {$-$};
  \\node at (6.4, 2.3) {$0$};
  \\node at (7.5, 2.3) {$+$};
  \\node at (0.65, 0.95) {$f(x)$};
  \\node (n1) at (1.9, 0.45) {$-\\infty$};
  \\node (n2) at (4.1, 1.45) {$4$};
  \\node (n3) at (6.4, 0.45) {$-2$};
  \\node (n4) at (8.6, 1.45) {$+\\infty$};
  \\draw[->, thick] (n1) -- (n2);
  \\draw[->, thick] (n2) -- (n3);
  \\draw[->, thick] (n3) -- (n4);
\\end{tikzpicture}`;

      case 'd8_q2_graph':
        return `% TikZ: Đồ thị hàm bậc ba Câu 2 (Đề 08): y = x^3 - 3x + 1
\\begin{tikzpicture}[>=stealth, scale=0.8]
  \\draw[->, thick] (-2.6,0) -- (2.6,0) node[below] {$x$};
  \\draw[->, thick] (0,-2.0) -- (0,3.8) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[dashed, gray] (-1,0) -- (-1,3) -- (0,3);
  \\draw[dashed, gray] (1,0) -- (1,-1) -- (0,-1);
  \\node[below] at (-1,0) {$-1$};
  \\node[above] at (1,0) {$1$};
  \\node[right] at (0,3) {$3$};
  \\node[left] at (0,1) {$1$};
  \\node[left] at (0,-1) {$-1$};
  \\draw[thick, blue!80!black, domain=-2.05:2.05, samples=100] plot (\\x, {(\\x)^3 - 3*(\\x) + 1});
\\end{tikzpicture}`;

      case 'd8_q3_graph':
        return `% TikZ: Đồ thị hàm trùng phương Câu 3 (Đề 08): y = x^4 - 2x^2 - 1
\\begin{tikzpicture}[>=stealth, scale=0.85]
  \\draw[->, thick] (-2.5,0) -- (2.5,0) node[below] {$x$};
  \\draw[->, thick] (0,-2.6) -- (0,2.5) node[left] {$y$};
  \\node[above left] at (0,0) {$O$};
  \\draw[dashed, gray] (-1,0) -- (-1,-2) -- (1,-2) -- (1,0);
  \\node[above] at (-1,0) {$-1$};
  \\node[above] at (1,0) {$1$};
  \\node[above right] at (0,-1) {$-1$};
  \\node[below left] at (0,-2) {$-2$};
  \\draw[thick, blue!80!black, domain=-1.82:1.82, samples=100] plot (\\x, {(\\x)^4 - 2*(\\x)^2 - 1});
\\end{tikzpicture}`;

      case 'd8_q4_bbt':
        return `% TikZ: Bảng biến thiên Câu 4 (Đề 08) trên đoạn [-2; 3]
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (9.2, 3.5);
  \\draw[thick] (0, 2.7) -- (9.2, 2.7);
  \\draw[thick] (0, 1.9) -- (9.2, 1.9);
  \\draw[thick] (1.3, 0) -- (1.3, 3.5);
  \\node at (0.65, 3.1) {$x$};
  \\node at (1.9, 3.1) {$-2$};
  \\node at (4.1, 3.1) {$0$};
  \\node at (6.4, 3.1) {$2$};
  \\node at (8.6, 3.1) {$3$};
  \\node at (0.65, 2.3) {$y'$};
  \\node at (3.0, 2.3) {$+$};
  \\node at (4.1, 2.3) {$0$};
  \\node at (5.25, 2.3) {$-$};
  \\node at (6.4, 2.3) {$0$};
  \\node at (7.5, 2.3) {$+$};
  \\node at (0.65, 0.95) {$y$};
  \\node (n1) at (1.9, 0.55) {$-1$};
  \\node (n2) at (4.1, 1.45) {$4$};
  \\node (n3) at (6.4, 0.35) {$-3$};
  \\node (n4) at (8.6, 1.25) {$2$};
  \\draw[->, thick] (n1) -- (n2);
  \\draw[->, thick] (n2) -- (n3);
  \\draw[->, thick] (n3) -- (n4);
\\end{tikzpicture}`;

      case 'd8_q5_graph':
        return `% TikZ: Đồ thị hàm phân thức Câu 5 (Đề 08): y = (2x+1)/(x-1), TCĐ x=1, TCN y=2
\\begin{tikzpicture}[>=stealth, scale=0.75]
  \\draw[->, thick] (-3.2,0) -- (4.5,0) node[below] {$x$};
  \\draw[->, thick] (0,-2.5) -- (0,5.2) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[dashed, red!80!black, thick] (1,-2.4) -- (1,5.0);
  \\draw[dashed, violet!80!black, thick] (-3.0,2) -- (4.3,2);
  \\node[below right] at (1,0) {$1$};
  \\node[above left] at (0,2) {$2$};
  \\draw[thick, blue!80!black, domain=-2.8:0.3, samples=60] plot (\\x, {(2*\\x + 1)/(\\x - 1)});
  \\draw[thick, blue!80!black, domain=1.9:4.1, samples=60] plot (\\x, {(2*\\x + 1)/(\\x - 1)});
\\end{tikzpicture}`;

      case 'd8_q6_graph':
        return `% TikZ: Đồ thị hàm phân thức Câu 6 (Đề 08): y = (2x-1)/(x+1), TCĐ x=-1, TCN y=2, qua (0;-1)
\\begin{tikzpicture}[>=stealth, scale=0.75]
  \\draw[->, thick] (-4.5,0) -- (3.2,0) node[below] {$x$};
  \\draw[->, thick] (0,-2.8) -- (0,5.2) node[left] {$y$};
  \\node[below right] at (0,0) {$O$};
  \\draw[dashed, red!80!black, thick] (-1,-2.6) -- (-1,5.0);
  \\draw[dashed, violet!80!black, thick] (-4.3,2) -- (3.0,2);
  \\node[below left] at (-1,0) {$-1$};
  \\node[above right] at (0,2) {$2$};
  \\node[right] at (0,-1) {$-1$};
  \\draw[thick, blue!80!black, domain=-4.1:-1.9, samples=60] plot (\\x, {(2*\\x - 1)/(\\x + 1)});
  \\draw[thick, blue!80!black, domain=-0.35:2.8, samples=60] plot (\\x, {(2*\\x - 1)/(\\x + 1)});
\\end{tikzpicture}`;

      case 'd8_q7_graph':
        return `% TikZ: Đồ thị hàm bậc ba Câu 7 (Đề 08): y = -x^3 + 3x^2 + 1
\\begin{tikzpicture}[>=stealth, scale=0.75]
  \\draw[->, thick] (-1.8,0) -- (3.6,0) node[below] {$x$};
  \\draw[->, thick] (0,-1.8) -- (0,5.8) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[dashed, gray] (2,0) -- (2,5) -- (0,5);
  \\node[below] at (2,0) {$2$};
  \\node[left] at (0,1) {$1$};
  \\node[left] at (0,5) {$5$};
  \\draw[thick, blue!80!black, domain=-0.95:3.1, samples=100] plot (\\x, {-(\\x)^3 + 3*(\\x)^2 + 1});
\\end{tikzpicture}`;

      case 'd8_q10_bxd':
        return `% TikZ: Bảng xét dấu f'(x) Câu 10 (Đề 08)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (10.5, 2.0);
  \\draw[thick] (0, 1.0) -- (10.5, 1.0);
  \\draw[thick] (1.4, 0) -- (1.4, 2.0);
  \\node at (0.7, 1.5) {$x$};
  \\node at (2.0, 1.5) {$-\\infty$};
  \\node at (3.6, 1.5) {$-2$};
  \\node at (5.4, 1.5) {$0$};
  \\node at (7.1, 1.5) {$2$};
  \\node at (8.7, 1.5) {$4$};
  \\node at (9.9, 1.5) {$+\\infty$};
  \\node at (0.7, 0.5) {$f'(x)$};
  \\node at (2.8, 0.5) {$+$};
  \\node at (3.6, 0.5) {$0$};
  \\node at (4.5, 0.5) {$-$};
  \\draw[double, thick] (5.4, 0) -- (5.4, 1.0);
  \\node at (6.25, 0.5) {$+$};
  \\node at (7.1, 0.5) {$0$};
  \\node at (7.9, 0.5) {$+$};
  \\node at (8.7, 0.5) {$0$};
  \\node at (9.35, 0.5) {$-$};
\\end{tikzpicture}`;

      case 'd8_q11_bbt':
        return `% TikZ: Bảng biến thiên Câu 11 (Đề 08)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (9.6, 3.6);
  \\draw[thick] (0, 2.8) -- (9.6, 2.8);
  \\draw[thick] (0, 2.0) -- (9.6, 2.0);
  \\draw[thick] (1.3, 0) -- (1.3, 3.6);
  \\draw[double, thick] (4.3, 0) -- (4.3, 2.8);
  \\node at (0.65, 3.2) {$x$};
  \\node at (1.9, 3.2) {$-\\infty$};
  \\node at (4.3, 3.2) {$0$};
  \\node at (6.8, 3.2) {$2$};
  \\node at (9.0, 3.2) {$+\\infty$};
  \\node at (0.65, 2.4) {$y'$};
  \\node at (3.1, 2.4) {$-$};
  \\node at (5.55, 2.4) {$-$};
  \\node at (6.8, 2.4) {$0$};
  \\node at (7.9, 2.4) {$+$};
  \\node at (0.65, 1.0) {$y$};
  \\node (a1) at (1.9, 1.55) {$-1$};
  \\node (a2) at (3.7, 0.4) {$-\\infty$};
  \\node (a3) at (4.9, 1.55) {$+\\infty$};
  \\node (a4) at (6.8, 0.4) {$1$};
  \\node (a5) at (9.0, 1.55) {$3$};
  \\draw[->, thick] (a1) -- (a2);
  \\draw[->, thick] (a3) -- (a4);
  \\draw[->, thick] (a4) -- (a5);
\\end{tikzpicture}`;

      case 'd8_p2_q1_bbt':
        return `% TikZ: Bảng biến thiên Câu 1 (Phần II - Đề 08)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (9.6, 3.6);
  \\draw[thick] (0, 2.8) -- (9.6, 2.8);
  \\draw[thick] (0, 2.0) -- (9.6, 2.0);
  \\draw[thick] (1.3, 0) -- (1.3, 3.6);
  \\draw[double, thick] (6.2, 0) -- (6.2, 2.8);
  \\node at (0.65, 3.2) {$x$};
  \\node at (1.9, 3.2) {$-\\infty$};
  \\node at (4.0, 3.2) {$-1$};
  \\node at (6.2, 3.2) {$1$};
  \\node at (9.0, 3.2) {$+\\infty$};
  \\node at (0.65, 2.4) {$f'(x)$};
  \\node at (2.95, 2.4) {$+$};
  \\node at (4.0, 2.4) {$0$};
  \\node at (5.1, 2.4) {$-$};
  \\node at (7.6, 2.4) {$-$};
  \\node at (0.65, 1.0) {$f(x)$};
  \\node (b1) at (1.9, 0.4) {$-\\infty$};
  \\node (b2) at (4.0, 1.55) {$3$};
  \\node (b3) at (5.6, 0.4) {$-\\infty$};
  \\node (b4) at (6.8, 1.55) {$+\\infty$};
  \\node (b5) at (9.0, 0.4) {$2$};
  \\draw[->, thick] (b1) -- (b2);
  \\draw[->, thick] (b2) -- (b3);
  \\draw[->, thick] (b4) -- (b5);
\\end{tikzpicture}`;

      case 'd8_p2_q2_graph':
        return `% TikZ: Đồ thị hàm bậc ba Câu 2 (Phần II - Đề 08): y = -x^3 + 3x + 1
\\begin{tikzpicture}[>=stealth, scale=0.8]
  \\draw[->, thick] (-2.6,0) -- (2.6,0) node[below] {$x$};
  \\draw[->, thick] (0,-2.0) -- (0,3.8) node[left] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[dashed, gray] (-1,0) -- (-1,-1) -- (0,-1);
  \\draw[dashed, gray] (1,0) -- (1,3) -- (0,3);
  \\draw[dashed, gray] (2,0) -- (2,-1) -- (0,-1);
  \\node[above] at (-1,0) {$-1$};
  \\node[below] at (1,0) {$1$};
  \\node[above] at (2,0) {$2$};
  \\node[left] at (0,3) {$3$};
  \\node[above left] at (0,1) {$1$};
  \\node[below left] at (0,-1) {$-1$};
  \\draw[thick, blue!80!black, domain=-2.05:2.05, samples=100] plot (\\x, {-(\\x)^3 + 3*(\\x) + 1});
\\end{tikzpicture}`;

      case 'd8_p4_q1_bbt':
        return `% TikZ: Bảng biến thiên Câu 1 (Phần IV - Đề 08): y = -x^3 + 3x^2 + 9x - 2
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (9.2, 3.5);
  \\draw[thick] (0, 2.7) -- (9.2, 2.7);
  \\draw[thick] (0, 1.9) -- (9.2, 1.9);
  \\draw[thick] (1.3, 0) -- (1.3, 3.5);
  \\node at (0.65, 3.1) {$x$};
  \\node at (1.9, 3.1) {$-\\infty$};
  \\node at (4.1, 3.1) {$-1$};
  \\node at (6.4, 3.1) {$3$};
  \\node at (8.6, 3.1) {$+\\infty$};
  \\node at (0.65, 2.3) {$y'$};
  \\node at (3.0, 2.3) {$-$};
  \\node at (4.1, 2.3) {$0$};
  \\node at (5.25, 2.3) {$+$};
  \\node at (6.4, 2.3) {$0$};
  \\node at (7.5, 2.3) {$-$};
  \\node at (0.65, 0.95) {$y$};
  \\node (p1) at (1.9, 1.45) {$+\\infty$};
  \\node (p2) at (4.1, 0.45) {$-7$};
  \\node (p3) at (6.4, 1.45) {$25$};
  \\node (p4) at (8.6, 0.45) {$-\\infty$};
  \\draw[->, thick] (p1) -- (p2);
  \\draw[->, thick] (p2) -- (p3);
  \\draw[->, thick] (p3) -- (p4);
\\end{tikzpicture}`;

      case 'd8_p4_q3_bbt':
        return `% TikZ: Bảng biến thiên Câu 3 (Phần IV - Đề 08): C_tb(x) = x + 30 + 900/x trên (0; +infty)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (8.0, 3.5);
  \\draw[thick] (0, 2.7) -- (8.0, 2.7);
  \\draw[thick] (0, 1.9) -- (8.0, 1.9);
  \\draw[thick] (1.6, 0) -- (1.6, 3.5);
  \\node at (0.8, 3.1) {$x$};
  \\node at (2.2, 3.1) {$0$};
  \\node at (4.8, 3.1) {$30$};
  \\node at (7.3, 3.1) {$+\\infty$};
  \\node at (0.8, 2.3) {$\\overline{C}'(x)$};
  \\node at (3.5, 2.3) {$-$};
  \\node at (4.8, 2.3) {$0$};
  \\node at (6.05, 2.3) {$+$};
  \\node at (0.8, 0.95) {$\\overline{C}(x)$};
  \\node (q1) at (2.2, 1.45) {$+\\infty$};
  \\node (q2) at (4.8, 0.45) {$90$};
  \\node (q3) at (7.3, 1.45) {$+\\infty$};
  \\draw[->, thick] (q1) -- (q2);
  \\draw[->, thick] (q2) -- (q3);
\\end{tikzpicture}`;

      default:
        return getSpaceTikzCode(diagramType);
    }
  };

  const handleCopyCode = () => {
    playClickSound();
    const code = getTikzCode(type);
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Render SVG hình vẽ trực quan chuẩn phong cách xuất bản LaTeX TikZ (nền giấy trắng kỹ thuật, font Times New Roman, ẩn đáp số bằng dấu ?)
  const renderSvgDiagram = () => {
    if (tikzCode && tikzCode.trim() && (!type || type === 'custom')) {
      return renderCustomTikzToSvg(tikzCode);
    }

    switch (type) {
      case 'number_line_intersection':
        return (
          <svg
            viewBox="0 0 520 115"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="nl-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
              <pattern id="nl-hatch-ne" width="7" height="7" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="7" stroke="#64748b" strokeWidth="1.2" />
              </pattern>
              <pattern id="nl-hatch-nw" width="7" height="7" patternTransform="rotate(-45 0 0)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="7" stroke="#94a3b8" strokeWidth="1.1" />
              </pattern>
            </defs>

            {/* Vùng gạch chéo bị loại */}
            <rect x="36" y="43" width="84" height="24" fill="url(#nl-hatch-ne)" />
            <rect x="370" y="43" width="95" height="24" fill="url(#nl-hatch-ne)" />
            <rect x="36" y="43" width="234" height="24" fill="url(#nl-hatch-nw)" />

            {/* Trục số thực R */}
            <line x1="30" y1="55" x2="480" y2="55" stroke="#0f172a" strokeWidth="1.8" markerEnd="url(#nl-arrow)" />
            <text x="492" y="60" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontWeight="bold">
              ℝ
            </text>

            {/* Phần giao lấy nghiệm tô đậm với dấu chấm hỏi ? */}
            <line x1="270" y1="55" x2="370" y2="55" stroke="#1d4ed8" strokeWidth="3.5" />

            {/* Vạch chia và dấu chấm hỏi tại biên nghiệm */}
            {[
              { val: '−2', x: 120, color: '#0f172a' },
              { val: '0', x: 220, color: '#0f172a' },
              { val: '?', x: 270, color: '#dc2626' },
              { val: '?', x: 370, color: '#dc2626' },
            ].map((item, idx) => (
              <g key={idx}>
                <line x1={item.x} y1="48" x2={item.x} y2="62" stroke="#0f172a" strokeWidth="1.5" />
                <text
                  x={item.x}
                  y="85"
                  fill={item.color}
                  fontFamily={MATH_SERIF}
                  fontSize="16"
                  fontWeight={item.val === '?' ? 'bold' : 'normal'}
                  textAnchor="middle"
                >
                  {item.val}
                </text>
              </g>
            ))}

            {/* Dấu ngoặc tại -2 và dấu ? tại miền giao */}
            <text x="120" y="61" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="22" fontWeight="bold" textAnchor="middle">
              [
            </text>

            {/* Nhãn chú thích */}
            <text x="320" y="30" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold" textAnchor="middle">
              A ∩ B = ?
            </text>
          </svg>
        );

      case 'set_difference_venn':
        return (
          <svg
            viewBox="0 0 420 210"
            className="w-full max-w-md mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <pattern id="venn-diff-hatch" width="7" height="7" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="7" stroke="#2563eb" strokeWidth="1.2" opacity="0.55" />
              </pattern>
              <clipPath id="clip-circle-a">
                <circle cx="165" cy="110" r="72" />
              </clipPath>
            </defs>

            {/* Miền A \ B gạch chéo chuẩn TikZ */}
            <g clipPath="url(#clip-circle-a)">
              <rect x="80" y="30" width="170" height="160" fill="url(#venn-diff-hatch)" />
              <circle cx="255" cy="110" r="72" fill="#ffffff" />
            </g>

            {/* Hai đường tròn A và B */}
            <circle cx="165" cy="110" r="72" fill="none" stroke="#0f172a" strokeWidth="1.8" />
            <circle cx="255" cy="110" r="72" fill="none" stroke="#0f172a" strokeWidth="1.8" />

            {/* Tên tập hợp A, B */}
            <text x="125" y="30" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="17" fontStyle="italic" fontWeight="bold">
              A
            </text>
            <text x="285" y="30" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="17" fontStyle="italic" fontWeight="bold">
              B
            </text>

            {/* Dấu chấm hỏi ? ở các miền thay vì hiện sẵn đáp án */}
            <rect x="104" y="96" width="60" height="26" rx="4" fill="#ffffff" fillOpacity="0.9" />
            <text x="134" y="115" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="16" fontWeight="bold" textAnchor="middle">
              A \ B = ?
            </text>

            <text x="210" y="115" fill="#475569" fontFamily={MATH_SERIF} fontSize="17" fontWeight="bold" textAnchor="middle">
              ?
            </text>

            <text x="288" y="115" fill="#475569" fontFamily={MATH_SERIF} fontSize="17" fontWeight="bold" textAnchor="middle">
              ?
            </text>

            <text x="210" y="198" fill="#334155" fontFamily={MATH_SERIF} fontSize="13" fontStyle="italic" textAnchor="middle">
              Miền gạch chéo biểu diễn hiệu A \ B = ?
            </text>
          </svg>
        );

      case 'venn_diagram_40':
        return (
          <svg
            viewBox="0 0 450 230"
            className="w-full max-w-md mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            {/* Tập vũ trụ U = 40 */}
            <rect x="20" y="18" width="410" height="194" rx="6" fill="#ffffff" stroke="#0f172a" strokeWidth="1.8" />
            <text x="34" y="42" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">
              n(U) = 40
            </text>

            {/* Hai tập hợp A (Bóng đá) và B (Cầu lông) */}
            <circle cx="175" cy="118" r="74" fill="#eff6ff" fillOpacity="0.7" stroke="#0f172a" strokeWidth="1.8" />
            <circle cx="275" cy="118" r="74" fill="#f0fdf4" fillOpacity="0.6" stroke="#0f172a" strokeWidth="1.8" />
            <circle cx="175" cy="118" r="74" fill="none" stroke="#0f172a" strokeWidth="1.8" />

            <text x="140" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontWeight="bold" textAnchor="middle">
              Bóng đá A (25)
            </text>
            <text x="310" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontWeight="bold" textAnchor="middle">
              Cầu lông B (18)
            </text>

            <text x="135" y="122" fill="#1e3a8a" fontFamily={MATH_SERIF} fontSize="20" fontWeight="bold" textAnchor="middle">
              ?
            </text>
            <text x="225" y="122" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="20" fontWeight="bold" textAnchor="middle">
              8
            </text>
            <text x="315" y="122" fill="#065f46" fontFamily={MATH_SERIF} fontSize="20" fontWeight="bold" textAnchor="middle">
              ?
            </text>

            <text x="225" y="142" fill="#475569" fontFamily={MATH_SERIF} fontSize="12" fontStyle="italic" textAnchor="middle">
              A ∩ B
            </text>
            <text x="372" y="198" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold" textAnchor="middle">
              Ngoài: ?
            </text>
          </svg>
        );

      case 'venn_diagram_100':
        return (
          <svg
            viewBox="0 0 450 230"
            className="w-full max-w-md mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <rect x="20" y="18" width="410" height="194" rx="6" fill="#ffffff" stroke="#0f172a" strokeWidth="1.8" />
            <text x="34" y="42" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">
              n(A ∪ B) = 100
            </text>

            <circle cx="175" cy="118" r="74" fill="#eff6ff" fillOpacity="0.7" stroke="#0f172a" strokeWidth="1.8" />
            <circle cx="275" cy="118" r="74" fill="#f0fdf4" fillOpacity="0.6" stroke="#0f172a" strokeWidth="1.8" />
            <circle cx="175" cy="118" r="74" fill="none" stroke="#0f172a" strokeWidth="1.8" />

            <text x="135" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontWeight="bold" textAnchor="middle">
              Toán: n(A) = 65
            </text>
            <text x="315" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontWeight="bold" textAnchor="middle">
              Ngữ văn: n(B) = 55
            </text>

            <text x="135" y="122" fill="#1e3a8a" fontFamily={MATH_SERIF} fontSize="18" fontWeight="bold" textAnchor="middle">
              ?
            </text>
            <text x="225" y="122" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="17" fontWeight="bold" textAnchor="middle">
              A ∩ B = ?
            </text>
            <text x="315" y="122" fill="#065f46" fontFamily={MATH_SERIF} fontSize="18" fontWeight="bold" textAnchor="middle">
              ?
            </text>
          </svg>
        );

      case 'bpt_halfplane_2x_y_4':
        return (
          <svg
            viewBox="0 0 380 280"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="bpt-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
              <pattern id="bpt-hatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="8" stroke="#94a3b8" strokeWidth="1.1" />
              </pattern>
            </defs>

            {/* Gốc tọa độ O(200, 210), 1 đơn vị = 35px */}
            {/* Nửa mặt phẳng bị gạch bỏ: 2x - y + 4 < 0 */}
            <polygon points="30,25 222,25 112,245 30,245" fill="url(#bpt-hatch)" />

            {/* Trục Ox, Oy */}
            <line x1="30" y1="210" x2="345" y2="210" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#bpt-arrow)" />
            <text x="352" y="224" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">
              x
            </text>
            <line x1="200" y1="255" x2="200" y2="22" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#bpt-arrow)" />
            <text x="184" y="28" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">
              y
            </text>
            <text x="186" y="226" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">
              O
            </text>

            {/* Đường thẳng d: 2x - y + 4 = 0 qua (-2,0)=(130,210) và (0,4)=(200,70) */}
            <line x1="112" y1="246" x2="222" y2="26" stroke="#1d4ed8" strokeWidth="2.2" />
            <text x="230" y="48" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">
              2x − y + 4 = 0
            </text>

            {/* Giao điểm với trục: (-2, 0) và (0, 4) */}
            <circle cx="130" cy="210" r="3" fill="#0f172a" />
            <text x="132" y="228" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14">
              −2
            </text>
            <circle cx="200" cy="70" r="3" fill="#0f172a" />
            <text x="208" y="75" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14">
              4
            </text>

            {/* Dấu chấm hỏi ? trong miền nghiệm thay vì vẽ sẵn điểm đáp án (1; 2) */}
            <text x="268" y="142" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold" textAnchor="middle">
              (x; y) = ?
            </text>
          </svg>
        );

      case 'feasible_region_quad':
        return (
          <svg
            viewBox="0 0 400 310"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="quad-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>

            {/* Gốc O(95, 245), 1 đơn vị = 48px */}
            <polygon
              points="95,245 95,197 143,101 287,245"
              fill="#dbeafe"
              stroke="#1d4ed8"
              strokeWidth="2"
            />

            {/* Trục tọa độ Ox, Oy */}
            <line x1="35" y1="245" x2="355" y2="245" stroke="#0f172a" strokeWidth="1.7" markerEnd="url(#quad-arrow)" />
            <text x="362" y="258" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic">
              x
            </text>
            <line x1="95" y1="285" x2="95" y2="22" stroke="#0f172a" strokeWidth="1.7" markerEnd="url(#quad-arrow)" />
            <text x="78" y="28" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic">
              y
            </text>
            <text x="78" y="262" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">
              O
            </text>

            {/* Đường d1: x + y = 4 */}
            <line x1="75" y1="33" x2="312" y2="270" stroke="#0f172a" strokeWidth="1.5" />
            <text x="235" y="135" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">
              x + y = 4
            </text>

            {/* Đường d2: 2x - y = -1 */}
            <line x1="59" y1="269" x2="175" y2="37" stroke="#0f172a" strokeWidth="1.5" />
            <text x="172" y="55" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">
              2x − y = −1
            </text>

            {/* Đường gióng nét đứt từ đỉnh B(?; ?) */}
            <line x1="143" y1="245" x2="143" y2="101" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="95" y1="101" x2="143" y2="101" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <text x="143" y="262" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="14" fontWeight="bold" textAnchor="middle">
              ?
            </text>
            <text x="82" y="105" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="14" fontWeight="bold" textAnchor="end">
              ?
            </text>

            {/* Các đỉnh O, A, B, C */}
            <circle cx="95" cy="245" r="3" fill="#0f172a" />
            <circle cx="95" cy="197" r="3.2" fill="#1d4ed8" />
            <text x="85" y="198" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" textAnchor="end">
              A
            </text>

            <circle cx="143" cy="101" r="3.5" fill="#dc2626" />
            <text x="152" y="100" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">
              B(?; ?)
            </text>

            <circle cx="287" cy="245" r="3.2" fill="#1d4ed8" />
            <text x="287" y="264" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" textAnchor="middle">
              C
            </text>
          </svg>
        );

      case 'feasible_region_aircon':
        return (
          <svg
            viewBox="0 0 410 315"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="ac-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>

            <polygon
              points="80,255 80,75 116,111 188,255"
              fill="#dbeafe"
              stroke="#1d4ed8"
              strokeWidth="2"
            />

            {/* Trục tọa độ Ox, Oy */}
            <line x1="40" y1="255" x2="345" y2="255" stroke="#0f172a" strokeWidth="1.7" markerEnd="url(#ac-arrow)" />
            <text x="355" y="268" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic">
              x
            </text>
            <line x1="80" y1="285" x2="80" y2="18" stroke="#0f172a" strokeWidth="1.7" markerEnd="url(#ac-arrow)" />
            <text x="64" y="25" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic">
              y
            </text>
            <text x="65" y="272" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">
              O
            </text>

            {/* Đường d1: x + y = 100 */}
            <line x1="65" y1="60" x2="278" y2="273" stroke="#0f172a" strokeWidth="1.5" />
            <text x="232" y="185" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" fontStyle="italic">
              x + y = 100
            </text>

            {/* Đường d2: 2x + y = 120 */}
            <line x1="72" y1="23" x2="198" y2="275" stroke="#0f172a" strokeWidth="1.5" />
            <text x="148" y="68" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" fontStyle="italic">
              2x + y = 120
            </text>

            {/* Đường gióng nét đứt từ đỉnh B(?; ?) */}
            <line x1="116" y1="255" x2="116" y2="111" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="80" y1="111" x2="116" y2="111" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <text x="116" y="272" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="14" fontWeight="bold" textAnchor="middle">
              ?
            </text>
            <text x="72" y="115" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="14" fontWeight="bold" textAnchor="end">
              ?
            </text>

            {/* Điểm mốc trên trục */}
            <circle cx="80" cy="39" r="2.5" fill="#0f172a" />
            <text x="72" y="43" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="end">
              120
            </text>
            <circle cx="260" cy="255" r="2.5" fill="#0f172a" />
            <text x="260" y="272" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="middle">
              100
            </text>

            {/* Các đỉnh miền nghiệm OABC */}
            <circle cx="80" cy="255" r="3" fill="#0f172a" />
            <circle cx="80" cy="75" r="3.2" fill="#1d4ed8" />
            <text x="72" y="78" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="13" fontStyle="italic" textAnchor="end">
              A
            </text>

            <circle cx="116" cy="111" r="3.8" fill="#dc2626" />
            <text x="125" y="112" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">
              B(?; ?)
            </text>

            <circle cx="188" cy="255" r="3.2" fill="#1d4ed8" />
            <text x="188" y="272" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="13" fontStyle="italic" textAnchor="middle">
              C
            </text>
          </svg>
        );

      case 'trig_unit_circle_supp':
        return (
          <svg
            viewBox="0 0 400 225"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="trig-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>

            {/* Gốc O(200, 180), R = 120px */}
            <line x1="35" y1="180" x2="365" y2="180" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#trig-arrow)" />
            <text x="372" y="194" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">
              x
            </text>
            <line x1="200" y1="205" x2="200" y2="20" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#trig-arrow)" />
            <text x="184" y="28" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">
              y
            </text>
            <text x="186" y="196" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">
              O
            </text>

            {/* Nửa đường tròn đơn vị bán kính R = 1 */}
            <path d="M 320,180 A 120,120 0 0 0 80,180" fill="none" stroke="#0f172a" strokeWidth="1.8" />
            <text x="322" y="196" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13">
              1
            </text>
            <text x="72" y="196" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="end">
              −1
            </text>
            <text x="208" y="56" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13">
              1
            </text>

            {/* Điểm M ứng với góc alpha và M' ứng với 180 - alpha */}
            <line x1="123" y1="88" x2="277" y2="88" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="277" y1="88" x2="277" y2="180" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="123" y1="88" x2="123" y2="180" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />

            <line x1="200" y1="180" x2="277" y2="88" stroke="#1d4ed8" strokeWidth="2" />
            <line x1="200" y1="180" x2="123" y2="88" stroke="#dc2626" strokeWidth="2" />

            {/* Cung góc alpha và 180 - alpha */}
            <path d="M 232,180 A 32,32 0 0 0 220,155" fill="none" stroke="#1d4ed8" strokeWidth="1.5" />
            <text x="242" y="168" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">
              α
            </text>

            <path d="M 246,180 A 46,46 0 0 0 170,145" fill="none" stroke="#dc2626" strokeWidth="1.4" />
            <text x="165" y="132" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="13" fontStyle="italic">
              180° − α
            </text>

            <circle cx="277" cy="88" r="3.2" fill="#1d4ed8" />
            <text x="286" y="84" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">
              M
            </text>
            <circle cx="123" cy="88" r="3.2" fill="#dc2626" />
            <text x="112" y="84" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold" textAnchor="end">
              M&apos;
            </text>

            <text x="277" y="196" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="13" fontStyle="italic" textAnchor="middle">
              cos α
            </text>
            <text x="123" y="196" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="15" fontWeight="bold" textAnchor="middle">
              ?
            </text>
            <text x="212" y="84" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="14" fontWeight="bold">
              ?
            </text>
          </svg>
        );

      case 'triangle_60deg':
        return (
          <svg
            viewBox="0 0 380 225"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            {/* Tam giác ABC: A(55, 185), B(315, 185) [c=8], C(136, 44) [b=5, góc A = 60°] */}
            <polygon
              points="55,185 315,185 136,44"
              fill="#f8fafc"
              stroke="#0f172a"
              strokeWidth="2"
            />
            {/* Cung góc A = 60° */}
            <path d="M 93,185 A 38,38 0 0 0 74,152" fill="#dbeafe" fillOpacity="0.6" stroke="#1d4ed8" strokeWidth="1.6" />
            <text x="102" y="170" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="14" fontWeight="bold">
              60°
            </text>

            {/* Độ dài các cạnh */}
            <text x="185" y="206" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" textAnchor="middle">
              c = 8
            </text>
            <text x="76" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" textAnchor="middle">
              b = 5
            </text>
            <text x="242" y="108" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold" textAnchor="middle">
              a = ?
            </text>

            {/* Các đỉnh A, B, C */}
            <circle cx="55" cy="185" r="3" fill="#0f172a" />
            <text x="40" y="195" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">
              A
            </text>
            <circle cx="315" cy="185" r="3" fill="#0f172a" />
            <text x="326" y="195" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">
              B
            </text>
            <circle cx="136" cy="44" r="3" fill="#0f172a" />
            <text x="136" y="32" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold" textAnchor="middle">
              C
            </text>
          </svg>
        );

      case 'triangle_sin_circumcircle':
        return (
          <svg
            viewBox="0 0 360 235"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            {/* Đường tròn ngoại tiếp tâm O(180, 120), R = 88px */}
            <circle cx="180" cy="120" r="88" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.6" />

            {/* Tam giác ABC nội tiếp: A(180, 32), B(104, 164), C(256, 164) */}
            <polygon
              points="180,32 104,164 256,164"
              fill="#eff6ff"
              fillOpacity="0.45"
              stroke="#0f172a"
              strokeWidth="2"
            />

            {/* Cung góc A = 30° */}
            <path d="M 164,60 A 32,32 0 0 0 196,60" fill="none" stroke="#1d4ed8" strokeWidth="1.5" />
            <text x="180" y="76" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="13" fontWeight="bold" textAnchor="middle">
              30°
            </text>

            {/* Bán kính R từ tâm O tới B và C */}
            <line x1="180" y1="120" x2="256" y2="164" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4 3" />
            <circle cx="180" cy="120" r="3" fill="#dc2626" />
            <text x="174" y="114" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">
              O
            </text>
            <text x="224" y="136" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">
              R = ?
            </text>

            {/* Cạnh a = 6 */}
            <text x="180" y="182" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" textAnchor="middle">
              a = 6
            </text>

            {/* Đỉnh A, B, C */}
            <circle cx="180" cy="32" r="3" fill="#0f172a" />
            <text x="180" y="22" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold" textAnchor="middle">
              A
            </text>
            <circle cx="104" cy="164" r="3" fill="#0f172a" />
            <text x="88" y="174" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">
              B
            </text>
            <circle cx="256" cy="164" r="3" fill="#0f172a" />
            <text x="266" y="174" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">
              C
            </text>
          </svg>
        );

      case 'triangle_obtuse_cos':
        return (
          <svg
            viewBox="0 0 380 220"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            {/* Tam giác ABC với góc A tù (cos A = -1/15): A(110, 180), B(320, 180) [c=5], C(98, 52) [b=3] */}
            <polygon
              points="110,180 320,180 98,52"
              fill="#f8fafc"
              stroke="#0f172a"
              strokeWidth="2"
            />
            <path d="M 140,180 A 30,30 0 0 0 107,150" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
            <text x="152" y="166" fill="#b45309" fontFamily={MATH_SERIF} fontSize="13" fontStyle="italic">
              cos A = −1/15
            </text>

            <text x="215" y="202" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" textAnchor="middle">
              c = 5
            </text>
            <text x="82" y="122" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" textAnchor="end">
              b = 3
            </text>
            <text x="225" y="106" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">
              a = ?
            </text>

            <circle cx="110" cy="180" r="3" fill="#0f172a" />
            <text x="95" y="196" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">
              A
            </text>
            <circle cx="320" cy="180" r="3" fill="#0f172a" />
            <text x="330" y="196" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">
              B
            </text>
            <circle cx="98" cy="52" r="3" fill="#0f172a" />
            <text x="98" y="38" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold" textAnchor="middle">
              C
            </text>
          </svg>
        );

      case 'triangle_heron':
        return (
          <svg
            viewBox="0 0 380 230"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            {/* Tam giác ABC: A(55, 190), B(315, 190), C(215, 42) */}
            <polygon
              points="55,190 315,190 215,42"
              fill="#f8fafc"
              stroke="#0f172a"
              strokeWidth="2"
            />
            <circle
              cx="190"
              cy="134"
              r="36"
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="1.3"
              strokeDasharray="4 3"
            />
            <circle cx="190" cy="134" r="2.5" fill="#1d4ed8" />
            <text x="190" y="138" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold" textAnchor="middle">
              S = ?
            </text>

            <text x="185" y="210" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" textAnchor="middle">
              c = 5
            </text>
            <text x="118" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" textAnchor="middle">
              b = 8
            </text>
            <text x="280" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" textAnchor="middle">
              a = 7
            </text>

            <circle cx="55" cy="190" r="3" fill="#0f172a" />
            <text x="40" y="202" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">
              A
            </text>
            <circle cx="315" cy="190" r="3" fill="#0f172a" />
            <text x="326" y="202" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">
              B
            </text>
            <circle cx="215" cy="42" r="3" fill="#0f172a" />
            <text x="215" y="30" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold" textAnchor="middle">
              C
            </text>
          </svg>
        );

      case 'river_triangulation':
        return (
          <svg
            viewBox="0 0 420 250"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            {/* Dải sông giữa hai bờ */}
            <rect x="15" y="82" width="390" height="76" fill="#e0f2fe" />
            <line x1="15" y1="82" x2="405" y2="82" stroke="#0284c7" strokeWidth="1.4" strokeDasharray="6 4" />
            <line x1="15" y1="158" x2="405" y2="158" stroke="#0284c7" strokeWidth="1.4" strokeDasharray="6 4" />
            <text x="36" y="124" fill="#0369a1" fontFamily={MATH_SERIF} fontSize="13" fontStyle="italic">
              Khúc sông
            </text>

            {/* Tam giác đo đạc: C(75, 205), A(295, 205) [AC=60m], B(185, 42) */}
            <line x1="75" y1="205" x2="295" y2="205" stroke="#0f172a" strokeWidth="2.2" />
            <line x1="75" y1="205" x2="185" y2="42" stroke="#475569" strokeWidth="1.6" strokeDasharray="5 3" />
            <line x1="295" y1="205" x2="185" y2="42" stroke="#1d4ed8" strokeWidth="2.2" />

            {/* Cung góc C = 60° và góc A = 75° */}
            <path d="M 105,205 A 30,30 0 0 0 92,180" fill="none" stroke="#0f172a" strokeWidth="1.5" />
            <text x="112" y="196" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" fontWeight="bold">
              60°
            </text>

            <path d="M 265,205 A 30,30 0 0 1 278,180" fill="none" stroke="#0f172a" strokeWidth="1.5" />
            <text x="242" y="196" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" fontWeight="bold">
              75°
            </text>

            <text x="185" y="226" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold" textAnchor="middle">
              AC = 60 m
            </text>
            <text x="256" y="122" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">
              AB = ?
            </text>

            <circle cx="75" cy="205" r="3.2" fill="#0f172a" />
            <text x="58" y="214" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">
              C
            </text>
            <circle cx="295" cy="205" r="3.2" fill="#0f172a" />
            <text x="306" y="214" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">
              A
            </text>
            <circle cx="185" cy="42" r="3.5" fill="#1d4ed8" />
            <text x="185" y="28" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold" textAnchor="middle">
              B
            </text>
          </svg>
        );

      case 'parabola_vertex_2_1':
        return (
          <svg
            viewBox="0 0 380 260"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="para-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>

            <line x1="40" y1="100" x2="340" y2="100" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#para-arrow)" />
            <text x="348" y="114" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">
              x
            </text>
            <line x1="110" y1="245" x2="110" y2="18" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#para-arrow)" />
            <text x="94" y="26" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">
              y
            </text>
            <text x="96" y="116" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">
              O
            </text>

            {/* Trục đối xứng */}
            <line x1="194" y1="22" x2="194" y2="242" stroke="#64748b" strokeWidth="1.2" strokeDasharray="5 3" />
            <line x1="110" y1="58" x2="194" y2="58" stroke="#64748b" strokeWidth="1.2" strokeDasharray="4 3" />

            {/* Đường cong Parabol */}
            <path
              d="M 106,238 Q 194,-116 282,238"
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="2.2"
            />

            <circle cx="194" cy="58" r="3.5" fill="#dc2626" />
            <text x="204" y="52" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">
              I(?; ?)
            </text>
            <circle cx="152" cy="100" r="2.8" fill="#0f172a" />
            <text x="144" y="116" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13">
              1
            </text>
            <text x="198" y="116" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="14" fontWeight="bold">
              ?
            </text>
            <circle cx="236" cy="100" r="2.8" fill="#0f172a" />
            <text x="244" y="116" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13">
              3
            </text>
            <text x="96" y="62" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="14" fontWeight="bold">
              ?
            </text>
            <circle cx="110" cy="226" r="2.8" fill="#0f172a" />
            <text x="88" y="230" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13">
              −3
            </text>
          </svg>
        );

      case 'number_line_minus2_4':
        return (
          <svg
            viewBox="0 0 520 115"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="nl24-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
              <pattern id="nl24-hatch" width="7" height="7" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="7" stroke="#475569" strokeWidth="1.25" />
              </pattern>
            </defs>

            {/* Vùng gạch chéo ngoài tập hợp giao */}
            <rect x="36" y="42" width="129" height="26" fill="url(#nl24-hatch)" />
            <rect x="355" y="42" width="113" height="26" fill="url(#nl24-hatch)" />

            {/* Trục số thực */}
            <line x1="30" y1="55" x2="482" y2="55" stroke="#0f172a" strokeWidth="1.8" markerEnd="url(#nl24-arrow)" />

            {/* Đoạn nghiệm tô đậm */}
            <line x1="165" y1="55" x2="355" y2="55" stroke="#1d4ed8" strokeWidth="3.5" />

            {/* Dấu ngoặc tại hai đầu mút */}
            <text x="165" y="62" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="24" fontWeight="bold" textAnchor="middle">
              (
            </text>
            <text x="355" y="62" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="24" fontWeight="bold" textAnchor="middle">
              ]
            </text>

            {/* Dấu chấm hỏi ? tại hai đầu mút thay vì hiện sẵn -2 và 4 */}
            <text x="165" y="88" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="16" fontWeight="bold" textAnchor="middle">
              ?
            </text>
            <text x="355" y="88" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="16" fontWeight="bold" textAnchor="middle">
              ?
            </text>

            <text x="260" y="25" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold" textAnchor="middle">
              A ∩ B = ?
            </text>
          </svg>
        );

      case 'lighthouse_coast':
        return (
          <svg
            viewBox="0 0 460 250"
            className="w-full max-w-md mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="lh-arrow-end" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
              <marker id="lh-arrow-start" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 10 1.5 L 1 5 L 10 8.5 L 8 5 z" fill="#0f172a" />
              </marker>
            </defs>

            {/* Đường bờ biển nằm ngang: A(75, 185), B(255, 185), H(335, 185), C(335, 42) */}
            <line x1="25" y1="185" x2="430" y2="185" stroke="#0f172a" strokeWidth="1.9" />

            {/* Tia ngắm AC và BC */}
            <line x1="75" y1="185" x2="335" y2="42" stroke="#0f172a" strokeWidth="1.8" />
            <line x1="255" y1="185" x2="335" y2="42" stroke="#0f172a" strokeWidth="1.8" />

            {/* Đường vuông góc CH nét đứt */}
            <line x1="335" y1="42" x2="335" y2="185" stroke="#1d4ed8" strokeWidth="1.8" strokeDasharray="5 4" />

            {/* Ký hiệu góc vuông tại H(335, 185) */}
            <polyline points="323,185 323,173 335,173" fill="none" stroke="#0f172a" strokeWidth="1.3" />

            {/* Cung góc 45° tại A(75, 185) */}
            <path d="M 122,185 A 47,47 0 0 0 112,165" fill="none" stroke="#0f172a" strokeWidth="1.4" />
            <text x="135" y="176" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14">
              45°
            </text>

            {/* Cung góc 75° tại B(255, 185) */}
            <path d="M 290,185 A 35,35 0 0 0 272,155" fill="none" stroke="#0f172a" strokeWidth="1.4" />
            <text x="295" y="173" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14">
              75°
            </text>

            {/* Gióng kích thước AB = 30 m phía dưới */}
            <line x1="75" y1="185" x2="75" y2="222" stroke="#475569" strokeWidth="1.2" strokeDasharray="3 3" />
            <line x1="255" y1="185" x2="255" y2="222" stroke="#475569" strokeWidth="1.2" strokeDasharray="3 3" />
            <line
              x1="78"
              y1="214"
              x2="252"
              y2="214"
              stroke="#0f172a"
              strokeWidth="1.3"
              strokeDasharray="4 3"
              markerStart="url(#lh-arrow-start)"
              markerEnd="url(#lh-arrow-end)"
            />
            <rect x="142" y="203" width="46" height="20" fill="#ffffff" />
            <text x="165" y="218" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontWeight="bold" textAnchor="middle">
              30 m
            </text>

            {/* Biểu tượng ngọn hải đăng tại đỉnh C(335, 42) */}
            <polygon points="329,42 341,42 338,22 332,22" fill="#dc2626" stroke="#0f172a" strokeWidth="1.2" />
            <circle cx="335" cy="18" r="4" fill="#f59e0b" stroke="#0f172a" strokeWidth="1" />
            <line x1="322" y1="15" x2="313" y2="11" stroke="#f59e0b" strokeWidth="1.4" />
            <line x1="348" y1="15" x2="357" y2="11" stroke="#f59e0b" strokeWidth="1.4" />

            {/* Nhãn các điểm A, B, H, C */}
            <circle cx="75" cy="185" r="3" fill="#0f172a" />
            <text x="68" y="175" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">
              A
            </text>

            <circle cx="255" cy="185" r="3" fill="#0f172a" />
            <text x="242" y="175" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">
              B
            </text>

            <circle cx="335" cy="185" r="3" fill="#0f172a" />
            <text x="335" y="204" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold" textAnchor="middle">
              H
            </text>

            <circle cx="335" cy="42" r="3" fill="#1d4ed8" />
            <text x="352" y="42" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">
              C
            </text>
            <text x="346" y="118" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">
              CH = ?
            </text>
          </svg>
        );

      case 'feasible_region_coffee_cocoa':
        return (
          <svg
            viewBox="0 0 410 300"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="cc-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>

            <polygon
              points="80,240 272,240 224,192 80,96"
              fill="#dbeafe"
              stroke="#1d4ed8"
              strokeWidth="2"
            />

            {/* Trục Ox, Oy */}
            <line x1="40" y1="240" x2="355" y2="240" stroke="#0f172a" strokeWidth="1.7" markerEnd="url(#cc-arrow)" />
            <text x="364" y="253" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic">
              x
            </text>
            <line x1="80" y1="275" x2="80" y2="20" stroke="#0f172a" strokeWidth="1.7" markerEnd="url(#cc-arrow)" />
            <text x="64" y="28" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic">
              y
            </text>
            <text x="64" y="256" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">
              O
            </text>

            {/* Đường d1: x + y = 8 */}
            <line x1="65" y1="33" x2="290" y2="258" stroke="#1d4ed8" strokeWidth="1.5" />
            <text x="155" y="95" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="13" fontStyle="italic">
              x + y = 8
            </text>

            {/* Đường d2: 2x + 3y = 18 */}
            <line x1="62" y1="84" x2="314" y2="252" stroke="#0f766e" strokeWidth="1.5" />
            <text x="242" y="172" fill="#0f766e" fontFamily={MATH_SERIF} fontSize="13" fontStyle="italic">
              2x + 3y = 18
            </text>

            {/* Đường gióng nét đứt từ đỉnh tối ưu B(m; n) = (?; ?) */}
            <line x1="224" y1="240" x2="224" y2="192" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="80" y1="192" x2="224" y2="192" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <text x="224" y="258" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="13" fontStyle="italic" fontWeight="bold" textAnchor="middle">
              m = ?
            </text>
            <text x="74" y="196" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="13" fontStyle="italic" fontWeight="bold" textAnchor="end">
              n = ?
            </text>

            {/* Các đỉnh O, A, B, C */}
            <circle cx="80" cy="240" r="3" fill="#0f172a" />
            <circle cx="272" cy="240" r="3.2" fill="#1d4ed8" />
            <text x="272" y="258" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="13" fontStyle="italic" textAnchor="middle">
              A
            </text>

            <circle cx="224" cy="192" r="3.8" fill="#dc2626" />
            <text x="234" y="188" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">
              B(m; n) = (?; ?)
            </text>

            <circle cx="80" cy="96" r="3.2" fill="#1d4ed8" />
            <text x="72" y="99" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="13" fontStyle="italic" textAnchor="end">
              C
            </text>
          </svg>
        );

      case 'venn_diagram_50_10b':
        return (
          <svg
            viewBox="0 0 450 230"
            className="w-full max-w-md mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <rect x="20" y="18" width="410" height="194" rx="6" fill="#ffffff" stroke="#0f172a" strokeWidth="1.8" />
            <text x="34" y="42" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">
              Lớp 10B: n(U) = 50
            </text>

            <circle cx="175" cy="118" r="74" fill="#eff6ff" fillOpacity="0.7" stroke="#0f172a" strokeWidth="1.8" />
            <circle cx="275" cy="118" r="74" fill="#f0fdf4" fillOpacity="0.6" stroke="#0f172a" strokeWidth="1.8" />
            <circle cx="175" cy="118" r="74" fill="none" stroke="#0f172a" strokeWidth="1.8" />

            <text x="145" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontWeight="bold" textAnchor="middle">
              CLB Tiếng Anh (32)
            </text>
            <text x="310" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontWeight="bold" textAnchor="middle">
              CLB Tin học (25)
            </text>

            <text x="135" y="122" fill="#1e3a8a" fontFamily={MATH_SERIF} fontSize="20" fontWeight="bold" textAnchor="middle">
              ?
            </text>
            <text x="225" y="118" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="22" fontWeight="bold" textAnchor="middle">
              ?
            </text>
            <text x="315" y="122" fill="#065f46" fontFamily={MATH_SERIF} fontSize="20" fontWeight="bold" textAnchor="middle">
              ?
            </text>

            <text x="225" y="142" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="13" fontStyle="italic" fontWeight="bold" textAnchor="middle">
              A ∩ B = ?
            </text>
            <text x="372" y="198" fill="#475569" fontFamily={MATH_SERIF} fontSize="13" fontStyle="italic" textAnchor="middle">
              Ngoài: 7
            </text>
          </svg>
        );

      case 'broken_tree_storm':
        return (
          <svg
            viewBox="0 0 380 235"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            {/* Đỉnh A(65, 195), B(325, 195), C(108, 25) */}
            <polygon
              points="65,195 325,195 108,25"
              fill="#f8fafc"
              stroke="#0f172a"
              strokeWidth="1.9"
              strokeLinejoin="round"
            />

            {/* Cung góc 76° tại A */}
            <path
              d="M 93 195 A 28 28 0 0 0 72 168"
              fill="none"
              stroke="#0f172a"
              strokeWidth="1.4"
            />
            <text x="95" y="182" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14">
              76°
            </text>

            {/* Cung góc 35° tại B */}
            <path
              d="M 283 195 A 42 42 0 0 1 291 170"
              fill="none"
              stroke="#0f172a"
              strokeWidth="1.4"
            />
            <text x="248" y="185" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14">
              35°
            </text>

            {/* Nhãn các đỉnh A, B, C */}
            <text x="50" y="210" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic">
              A
            </text>
            <text x="334" y="202" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic">
              B
            </text>
            <text x="108" y="16" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">
              C
            </text>

            {/* Độ dài AB = 6 m và các đại lượng cần tìm có dấu ? */}
            <text x="195" y="214" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" textAnchor="middle">
              6 m
            </text>
            <text x="64" y="108" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold" textAnchor="end">
              AC = ?
            </text>
          </svg>
        );

      case 'feasible_region_aloe_asparagus':
        return (
          <svg
            viewBox="0 0 420 290"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="aa-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>

            {/* Gốc O(70, 235), 1 đơn vị = 18px: O(70,235), A(10,0)->(250,235), B(7.5,2.5)->(205,190), C(0,5)->(70,145) */}
            <polygon
              points="70,235 250,235 205,190 70,145"
              fill="#dbeafe"
              stroke="#1d4ed8"
              strokeWidth="2"
            />

            {/* Trục Ox, Oy */}
            <line x1="35" y1="235" x2="365" y2="235" stroke="#0f172a" strokeWidth="1.7" markerEnd="url(#aa-arrow)" />
            <text x="375" y="248" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic">
              x
            </text>
            <line x1="70" y1="268" x2="70" y2="22" stroke="#0f172a" strokeWidth="1.7" markerEnd="url(#aa-arrow)" />
            <text x="54" y="30" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic">
              y
            </text>
            <text x="54" y="252" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">
              O
            </text>

            {/* Đường d1: x + y = 10 */}
            <line x1="58" y1="43" x2="264" y2="249" stroke="#1d4ed8" strokeWidth="1.5" />
            <text x="135" y="102" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="13" fontStyle="italic">
              x + y = 10
            </text>

            {/* Đường d2: x + 3y = 15 */}
            <line x1="52" y1="139" x2="349" y2="238" stroke="#0f766e" strokeWidth="1.5" />
            <text x="242" y="182" fill="#0f766e" fontFamily={MATH_SERIF} fontSize="13" fontStyle="italic">
              x + 3y = 15
            </text>

            {/* Đường gióng nét đứt từ đỉnh tối ưu B(?; ?) */}
            <line x1="205" y1="235" x2="205" y2="190" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="70" y1="190" x2="205" y2="190" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <text x="205" y="254" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="14" fontWeight="bold" textAnchor="middle">
              ?
            </text>
            <text x="62" y="194" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="14" fontWeight="bold" textAnchor="end">
              ?
            </text>

            {/* Các đỉnh O, A, B, C */}
            <circle cx="70" cy="235" r="3" fill="#0f172a" />
            <circle cx="250" cy="235" r="3.2" fill="#1d4ed8" />
            <text x="250" y="254" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="13" fontStyle="italic" textAnchor="middle">
              A
            </text>

            <circle cx="205" cy="190" r="3.8" fill="#dc2626" />
            <text x="214" y="168" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">
              B(?; ?), F_max = ?
            </text>

            <circle cx="70" cy="145" r="3.2" fill="#1d4ed8" />
            <text x="60" y="148" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="13" fontStyle="italic" textAnchor="end">
              C
            </text>
          </svg>
        );

      case 'venn_diagram_70_tourists':
        return (
          <svg
            viewBox="0 0 450 230"
            className="w-full max-w-md mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <rect x="20" y="18" width="410" height="194" rx="6" fill="#ffffff" stroke="#0f172a" strokeWidth="1.8" />
            <text x="34" y="42" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">
              Khảo sát: n(U) = 70
            </text>

            <circle cx="175" cy="118" r="74" fill="#eff6ff" fillOpacity="0.7" stroke="#0f172a" strokeWidth="1.8" />
            <circle cx="275" cy="118" r="74" fill="#f0fdf4" fillOpacity="0.6" stroke="#0f172a" strokeWidth="1.8" />
            <circle cx="175" cy="118" r="74" fill="none" stroke="#0f172a" strokeWidth="1.8" />

            <text x="145" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontWeight="bold" textAnchor="middle">
              Nha Trang A (45)
            </text>
            <text x="310" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontWeight="bold" textAnchor="middle">
              Đà Lạt B (38)
            </text>

            <text x="135" y="122" fill="#1e3a8a" fontFamily={MATH_SERIF} fontSize="20" fontWeight="bold" textAnchor="middle">
              ?
            </text>
            <text x="225" y="118" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="22" fontWeight="bold" textAnchor="middle">
              ?
            </text>
            <text x="315" y="122" fill="#065f46" fontFamily={MATH_SERIF} fontSize="20" fontWeight="bold" textAnchor="middle">
              ?
            </text>

            <text x="225" y="142" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="13" fontStyle="italic" fontWeight="bold" textAnchor="middle">
              A ∩ B = ?
            </text>
            <text x="372" y="198" fill="#475569" fontFamily={MATH_SERIF} fontSize="13" fontStyle="italic" textAnchor="middle">
              Ngoài: 8
            </text>
          </svg>
        );

      case 'number_line_3_6':
        return (
          <svg
            viewBox="0 0 520 115"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="nl36-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
              <pattern id="nl36-hatch" width="7" height="7" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="7" stroke="#64748b" strokeWidth="1.2" />
              </pattern>
            </defs>

            {/* Vùng gạch chéo bị loại */}
            <rect x="36" y="43" width="184" height="24" fill="url(#nl36-hatch)" />
            <rect x="340" y="43" width="125" height="24" fill="url(#nl36-hatch)" />

            {/* Trục số thực R */}
            <line x1="30" y1="55" x2="480" y2="55" stroke="#0f172a" strokeWidth="1.8" markerEnd="url(#nl36-arrow)" />

            {/* Miền giao lấy nghiệm tô đậm */}
            <line x1="220" y1="55" x2="340" y2="55" stroke="#1d4ed8" strokeWidth="3.5" />

            {/* Dấu ngoặc ( và ] */}
            <text x="220" y="61" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="22" fontWeight="bold" textAnchor="middle">
              (
            </text>
            <text x="340" y="61" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="22" fontWeight="bold" textAnchor="middle">
              ]
            </text>

            {/* Nhãn ? tại hai đầu mút và trên miền giao */}
            <text x="220" y="86" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="16" fontWeight="bold" textAnchor="middle">
              ?
            </text>
            <text x="340" y="86" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="16" fontWeight="bold" textAnchor="middle">
              ?
            </text>
            <text x="280" y="30" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold" textAnchor="middle">
              A ∩ B = ?
            </text>
          </svg>
        );

      case 'triangle_cos_inscribed_d2':
        return (
          <svg
            viewBox="0 0 380 230"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            {/* Tam giác ABC: A(65, 190), B(315, 190), C(158, 30) */}
            <polygon
              points="65,190 315,190 158,30"
              fill="#f8fafc"
              stroke="#0f172a"
              strokeWidth="1.9"
              strokeLinejoin="round"
            />

            {/* Đường tròn nội tiếp tâm I(172, 130), bán kính r = 60px */}
            <circle
              cx="172"
              cy="130"
              r="60"
              fill="#eff6ff"
              fillOpacity="0.55"
              stroke="#1d4ed8"
              strokeWidth="1.5"
              strokeDasharray="5 3"
            />
            <line x1="172" y1="130" x2="172" y2="190" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4 2" />
            <circle cx="172" cy="130" r="2.8" fill="#1d4ed8" />
            <text x="164" y="124" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">
              I
            </text>
            <text x="180" y="164" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">
              r = ?
            </text>

            {/* Cung góc 60° tại A */}
            <path d="M 97 190 A 32 32 0 0 0 81 162" fill="none" stroke="#0f172a" strokeWidth="1.4" />
            <text x="102" y="178" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14">
              60°
            </text>

            {/* Các đỉnh và độ dài cạnh */}
            <text x="48" y="204" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">
              A
            </text>
            <text x="324" y="204" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">
              B
            </text>
            <text x="158" y="20" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold" textAnchor="middle">
              C
            </text>

            <text x="190" y="212" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" textAnchor="middle">
              c = 8 cm
            </text>
            <text x="95" y="102" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" textAnchor="end">
              b = 6 cm
            </text>
            <text x="252" y="102" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">
              a = ?
            </text>
          </svg>
        );

      case 'mountain_building_observation':
        return (
          <svg
            viewBox="0 0 400 250"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            {/* A(75, 210), B(75, 118), D(285, 210), E(285, 118), C(285, 32) */}
            {/* Tòa nhà AB, mặt đất AD, ngọn núi CD */}
            <line x1="75" y1="210" x2="285" y2="210" stroke="#0f172a" strokeWidth="1.8" />
            <line x1="75" y1="210" x2="75" y2="118" stroke="#0f172a" strokeWidth="2" />
            <line x1="285" y1="210" x2="285" y2="32" stroke="#0f172a" strokeWidth="2" />

            {/* Đường nằm ngang BE */}
            <line x1="75" y1="118" x2="285" y2="118" stroke="#0f172a" strokeWidth="1.6" />

            {/* Hai tia ngắm AC và BC */}
            <line x1="75" y1="210" x2="285" y2="32" stroke="#0f172a" strokeWidth="1.7" />
            <line x1="75" y1="118" x2="285" y2="32" stroke="#0f172a" strokeWidth="1.7" />

            {/* Cung góc 35° tại A */}
            <path d="M 111 210 A 36 36 0 0 0 103 187" fill="none" stroke="#0f172a" strokeWidth="1.4" />
            <text x="116" y="203" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14">
              35°
            </text>

            {/* Cung góc 15° nét đứt tại B (như hình gốc trang 6 PDF) */}
            <path
              d="M 115 118 A 40 40 0 0 0 112 103"
              fill="none"
              stroke="#0f172a"
              strokeWidth="1.4"
              strokeDasharray="3 2"
            />
            <text x="118" y="114" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14">
              15°
            </text>

            {/* Nhãn các đỉnh A, B, C, D, E */}
            <text x="64" y="226" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">
              A
            </text>
            <text x="58" y="122" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">
              B
            </text>
            <text x="285" y="22" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" textAnchor="middle">
              C
            </text>
            <text x="292" y="226" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">
              D
            </text>
            <text x="295" y="123" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">
              E
            </text>

            {/* Chiều cao tòa nhà 46m và chiều cao ngọn núi CD = ? */}
            <text x="68" y="170" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">
              46m
            </text>
            <text x="298" y="78" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">
              CD = ?
            </text>
          </svg>
        );

      case 'cubic_graph_d1':
        return (
          <svg
            viewBox="0 0 380 250"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="cg-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(140, 125), 1 unit = 42px */}
            <line x1="40" y1="125" x2="335" y2="125" stroke="#0f172a" strokeWidth="1.7" markerEnd="url(#cg-arrow)" />
            <line x1="140" y1="230" x2="140" y2="20" stroke="#0f172a" strokeWidth="1.7" markerEnd="url(#cg-arrow)" />
            <text x="342" y="130" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="126" y="24" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="125" y="142" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            {/* Dashed projection from B(2, -2) -> (224, 209) */}
            <line x1="224" y1="125" x2="224" y2="209" stroke="#64748b" strokeWidth="1.3" strokeDasharray="4 3" />
            <line x1="140" y1="209" x2="224" y2="209" stroke="#64748b" strokeWidth="1.3" strokeDasharray="4 3" />

            {/* Cubic curve y = x^3 - 3x^2 + 2 */}
            <path
              d="M 98 209 C 112 125, 124 41, 140 41 C 168 41, 196 209, 224 209 C 240 209, 254 125, 266 41"
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="2.4"
            />

            {/* Key points */}
            <circle cx="140" cy="41" r="3.5" fill="#dc2626" />
            <circle cx="224" cy="209" r="3.5" fill="#dc2626" />
            <circle cx="182" cy="125" r="3" fill="#0f172a" />

            <text x="148" y="38" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="14" fontWeight="bold">2</text>
            <text x="224" y="118" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">2</text>
            <text x="184" y="118" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14">1</text>
            <text x="118" y="214" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="14" fontWeight="bold">-2</text>
            <text x="234" y="218" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="13" fontStyle="italic" fontWeight="bold">B(2; -2)</text>
          </svg>
        );

      case 'rational_asymptotes_d1':
        return (
          <svg
            viewBox="0 0 380 250"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="ra-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(145, 165), unit = 32px. Asymptotes x = 1 (x=177), y = 2 (y=101) */}
            <line x1="30" y1="165" x2="345" y2="165" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#ra-arrow)" />
            <line x1="145" y1="235" x2="145" y2="20" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#ra-arrow)" />
            <text x="352" y="170" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="130" y="25" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="131" y="180" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            {/* Asymptotes */}
            <line x1="177" y1="22" x2="177" y2="232" stroke="#dc2626" strokeWidth="1.6" strokeDasharray="5 3" />
            <line x1="32" y1="101" x2="340" y2="101" stroke="#0d9488" strokeWidth="1.6" strokeDasharray="5 3" />

            {/* Two branches of hyperbola y = (2x-1)/(x-1) */}
            <path d="M 40 109 Q 152 115 169 228" fill="none" stroke="#1d4ed8" strokeWidth="2.3" />
            <path d="M 185 26 Q 202 87 332 93" fill="none" stroke="#1d4ed8" strokeWidth="2.3" />

            <circle cx="177" cy="101" r="3.2" fill="#dc2626" />
            <text x="184" y="95" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="13" fontWeight="bold">I(1; 2)</text>
            <text x="183" y="180" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="14" fontWeight="bold">1</text>
            <text x="130" y="97" fill="#0d9488" fontFamily={MATH_SERIF} fontSize="14" fontWeight="bold">2</text>
          </svg>
        );

      case 'integral_area_parabola':
        return (
          <svg
            viewBox="0 0 380 235"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="ia-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
              <pattern id="ia-hatch" width="7" height="7" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="7" stroke="#0284c7" strokeWidth="1.4" />
              </pattern>
            </defs>
            {/* Shaded area under y = 4 - x^2 from -2 (x=100) to 2 (x=280), vertex (190, 40), Ox at y=180 */}
            <path
              d="M 100 180 Q 190 -100 280 180 Z"
              fill="url(#ia-hatch)"
              stroke="none"
            />
            <path
              d="M 85 215 Q 190 -130 295 215"
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="2.4"
            />
            <line x1="35" y1="180" x2="345" y2="180" stroke="#0f172a" strokeWidth="1.7" markerEnd="url(#ia-arrow)" />
            <line x1="190" y1="222" x2="190" y2="18" stroke="#0f172a" strokeWidth="1.7" markerEnd="url(#ia-arrow)" />
            <text x="350" y="185" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="175" y="24" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="176" y="196" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>
            <text x="95" y="198" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontWeight="bold">-2</text>
            <text x="278" y="198" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontWeight="bold">2</text>
            <text x="198" y="44" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontWeight="bold">4</text>
            <rect x="148" y="108" width="84" height="26" rx="5" fill="#ffffff" fillOpacity="0.92" stroke="#0284c7" strokeWidth="1.2" />
            <text x="190" y="126" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="15" fontWeight="bold" textAnchor="middle">
              S = ?
            </text>
          </svg>
        );

      case 'space_box_vectors':
        return (
          <svg
            viewBox="0 0 380 240"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="sb-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#dc2626" />
              </marker>
            </defs>
            {/* A(65,190), B(245,190), D(135,140), C(315,140), A'(65,80), B'(245,80), D'(135,30), C'(315,30) */}
            <line x1="65" y1="190" x2="135" y2="140" stroke="#475569" strokeWidth="1.5" strokeDasharray="5 3" />
            <line x1="135" y1="140" x2="315" y2="140" stroke="#475569" strokeWidth="1.5" strokeDasharray="5 3" />
            <line x1="135" y1="140" x2="135" y2="30" stroke="#475569" strokeWidth="1.5" strokeDasharray="5 3" />

            <polygon points="65,190 245,190 315,140 315,30 135,30 65,80" fill="none" stroke="#0f172a" strokeWidth="1.8" />
            <line x1="65" y1="80" x2="245" y2="80" stroke="#0f172a" strokeWidth="1.8" />
            <line x1="245" y1="80" x2="315" y2="30" stroke="#0f172a" strokeWidth="1.8" />
            <line x1="245" y1="190" x2="245" y2="80" stroke="#0f172a" strokeWidth="1.8" />

            {/* Diagonal vector AC' */}
            <line x1="65" y1="190" x2="312" y2="32" stroke="#dc2626" strokeWidth="2.3" markerEnd="url(#sb-arrow)" />

            <text x="48" y="202" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">A</text>
            <text x="248" y="205" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">B</text>
            <text x="323" y="146" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">C</text>
            <text x="122" y="135" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">D</text>
            <text x="44" y="82" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">A'</text>
            <text x="252" y="88" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">B'</text>
            <text x="322" y="32" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">C'</text>
            <text x="120" y="22" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">D'</text>
          </svg>
        );

      case 'oxyz_plane_normal':
        return (
          <svg
            viewBox="0 0 380 245"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="oz-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(155, 150) */}
            <polygon points="85,205 295,150 155,45" fill="#e0f2fe" fillOpacity="0.75" stroke="#1d4ed8" strokeWidth="2" />
            <line x1="155" y1="150" x2="55" y2="228" stroke="#0f172a" strokeWidth="1.7" markerEnd="url(#oz-arrow)" />
            <line x1="155" y1="150" x2="340" y2="150" stroke="#0f172a" strokeWidth="1.7" markerEnd="url(#oz-arrow)" />
            <line x1="155" y1="150" x2="155" y2="18" stroke="#0f172a" strokeWidth="1.7" markerEnd="url(#oz-arrow)" />

            <circle cx="85" cy="205" r="3.2" fill="#dc2626" />
            <circle cx="295" cy="150" r="3.2" fill="#dc2626" />
            <circle cx="155" cy="45" r="3.2" fill="#dc2626" />

            <text x="140" y="146" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>
            <text x="42" y="232" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="346" y="155" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="140" y="22" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">z</text>
            <text x="45" y="200" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="13" fontWeight="bold">A(a;0;0)</text>
            <text x="275" y="170" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="13" fontWeight="bold">B(0;b;0)</text>
            <text x="164" y="48" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="13" fontWeight="bold">C(0;0;c)</text>
            <text x="195" y="132" fill="#1e3a8a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">(P)</text>
          </svg>
        );

      case 'd0_q1_bbt':
        return (
          <svg
            viewBox="0 0 520 185"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d0q1-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="500" height="165" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="48" x2="510" y2="48" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="10" y1="86" x2="510" y2="86" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="85" y1="10" x2="85" y2="175" stroke="#0f172a" strokeWidth="1.4" />

            {/* Row 1: x */}
            <text x="47" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="115" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="235" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−1</text>
            <text x="360" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">2</text>
            <text x="480" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            {/* Row 2: f'(x) */}
            <text x="47" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">f'(x)</text>
            <text x="175" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="235" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="298" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="360" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="420" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>

            {/* Row 3: y = f(x) */}
            <text x="47" y="125" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" textAnchor="middle">y =</text>
            <text x="47" y="146" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" textAnchor="middle">f(x)</text>

            <text x="115" y="162" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="235" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">f(−1)</text>
            <text x="360" y="162" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">f(2)</text>
            <text x="480" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <line x1="135" y1="152" x2="210" y2="114" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d0q1-arr)" />
            <line x1="260" y1="114" x2="336" y2="152" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d0q1-arr)" />
            <line x1="384" y1="152" x2="458" y2="114" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d0q1-arr)" />
          </svg>
        );

      case 'd0_q2_graph':
        return (
          <svg
            viewBox="0 0 360 230"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d0q2-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* Axes: O(75, 185) */}
            <line x1="25" y1="185" x2="325" y2="185" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d0q2-arr)" />
            <line x1="75" y1="215" x2="75" y2="20" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d0q2-arr)" />
            <text x="330" y="182" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="62" y="25" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="61" y="200" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            {/* Dashed projections at x = 1 (x=110, y=148) and x = 4 (x=215, y=68) */}
            <line x1="110" y1="185" x2="110" y2="148" stroke="#0f172a" strokeWidth="1.3" strokeDasharray="3 3" />
            <line x1="215" y1="185" x2="215" y2="68" stroke="#0f172a" strokeWidth="1.3" strokeDasharray="3 3" />
            <text x="110" y="202" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">1</text>
            <text x="215" y="202" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">4</text>

            {/* Cubic curve */}
            <path
              d="M 38 30 C 65 135, 88 148, 110 148 C 148 148, 182 68, 215 68 C 242 68, 265 140, 282 212"
              fill="none"
              stroke="#0f172a"
              strokeWidth="2.1"
            />
            <circle cx="110" cy="148" r="2.6" fill="#1d4ed8" />
            <circle cx="215" cy="68" r="2.6" fill="#1d4ed8" />
            <text x="242" y="75" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y = f(x)</text>
          </svg>
        );

      case 'd0_q3_graph':
        return (
          <svg
            viewBox="0 0 360 230"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d0q3-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* Axes: O(115, 185) */}
            <line x1="30" y1="185" x2="315" y2="185" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d0q3-arr)" />
            <line x1="115" y1="215" x2="115" y2="20" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d0q3-arr)" />
            <text x="318" y="198" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="122" y="26" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="100" y="200" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            {/* Peak at (1, 3) -> (170, 68) */}
            <line x1="115" y1="68" x2="170" y2="68" stroke="#0f172a" strokeWidth="1.3" strokeDasharray="3 2" />
            <line x1="170" y1="68" x2="170" y2="185" stroke="#0f172a" strokeWidth="1.3" strokeDasharray="3 2" />
            <text x="104" y="73" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14">3</text>
            <text x="170" y="201" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">1</text>

            {/* W-shaped curve touching Ox at O(115, 185) and (225, 185), peaking at (170, 68) */}
            <path
              d="M 55 32 C 75 155, 98 185, 115 185 C 136 185, 150 68, 170 68 C 190 68, 204 185, 225 185 C 242 185, 265 155, 285 32"
              fill="none"
              stroke="#0f172a"
              strokeWidth="2.1"
            />
            <circle cx="170" cy="68" r="3" fill="#1d4ed8" />
            <text x="275" y="75" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y = f(x)</text>
          </svg>
        );

      case 'd0_q4_graph':
        return (
          <svg
            viewBox="0 0 380 250"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d0q4-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* Axes: O(145, 145) */}
            <line x1="35" y1="145" x2="345" y2="145" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d0q4-arr)" />
            <line x1="145" y1="235" x2="145" y2="18" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d0q4-arr)" />
            <text x="348" y="140" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="153" y="25" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="132" y="160" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            {/* Points: (-2, y1) at (75, 92), max (0, 7) at (145, 42), min (x_m, -5) at (232, 215), (3, y2) at (285, 95) */}
            <line x1="75" y1="145" x2="75" y2="92" stroke="#0f172a" strokeWidth="1.3" strokeDasharray="3 3" />
            <line x1="145" y1="215" x2="232" y2="215" stroke="#0f172a" strokeWidth="1.3" strokeDasharray="3 3" />
            <line x1="285" y1="145" x2="285" y2="95" stroke="#0f172a" strokeWidth="1.3" strokeDasharray="3 3" />

            <path
              d="M 75 92 C 102 82, 122 42, 145 42 C 178 42, 202 215, 232 215 C 254 215, 270 135, 285 95"
              fill="none"
              stroke="#0f172a"
              strokeWidth="2.2"
            />
            <circle cx="75" cy="92" r="3" fill="#0f172a" />
            <circle cx="145" cy="42" r="3" fill="#0f172a" />
            <circle cx="232" cy="215" r="3" fill="#0f172a" />
            <circle cx="285" cy="95" r="3" fill="#0f172a" />

            <text x="75" y="162" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">−2</text>
            <text x="285" y="162" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">3</text>
            <text x="133" y="42" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14">7</text>
            <text x="122" y="220" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14">−5</text>
            <text x="190" y="75" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y = f(x)</text>
          </svg>
        );

      case 'd0_q5_graph':
        return (
          <svg
            viewBox="0 0 360 230"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d0q5-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(130, 155), x = 1 at 172, y = 2 at 85 */}
            <line x1="25" y1="155" x2="325" y2="155" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d0q5-arr)" />
            <line x1="130" y1="215" x2="130" y2="18" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d0q5-arr)" />
            <text x="328" y="168" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="137" y="25" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="116" y="170" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">0</text>

            {/* Dashed asymptotes */}
            <line x1="172" y1="22" x2="172" y2="212" stroke="#0f172a" strokeWidth="1.3" strokeDasharray="3 3" />
            <line x1="28" y1="85" x2="320" y2="85" stroke="#0f172a" strokeWidth="1.3" strokeDasharray="3 3" />
            <text x="177" y="170" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15">1</text>
            <text x="116" y="81" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15">2</text>

            {/* Hyperbola branches */}
            <path d="M 30 92 Q 148 100 164 210" fill="none" stroke="#1d4ed8" strokeWidth="2.1" />
            <path d="M 180 24 Q 196 72 318 78" fill="none" stroke="#1d4ed8" strokeWidth="2.1" />
          </svg>
        );

      case 'd0_q6_graph':
        return (
          <svg
            viewBox="0 0 360 240"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d0q6-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(165, 120), 1 unit = 32px */}
            <line x1="45" y1="120" x2="315" y2="120" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#d0q6-arr)" />
            <line x1="165" y1="225" x2="165" y2="18" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#d0q6-arr)" />
            <text x="318" y="132" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="172" y="24" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="153" y="134" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13">0</text>

            {/* Ticks on Ox: -2 (101), -1 (133), 1 (197), 2 (229) */}
            <text x="101" y="134" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="middle">−2</text>
            <text x="133" y="134" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="middle">−1</text>
            <text x="197" y="134" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="middle">1</text>
            <text x="229" y="134" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="middle">2</text>

            {/* Ticks on Oy: 1 (88), 2 (56), 3 (24), -1 (152), -2 (184), -3 (216) */}
            <text x="155" y="92" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="end">1</text>
            <text x="155" y="60" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="end">2</text>
            <text x="155" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="end">3</text>
            <text x="155" y="156" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="end">−1</text>
            <text x="155" y="188" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="end">−2</text>
            <text x="155" y="216" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="end">−3</text>

            <line x1="229" y1="120" x2="229" y2="184" stroke="#64748b" strokeWidth="1.2" strokeDasharray="3 2" />
            <line x1="165" y1="184" x2="229" y2="184" stroke="#64748b" strokeWidth="1.2" strokeDasharray="3 2" />

            {/* Cubic curve y = x^3 - 3x^2 + 2: CĐ (0,2)->(165,56), (1,0)->(197,120), CT (2,-2)->(229,184) */}
            <path
              d="M 128 218 C 141 120, 152 56, 165 56 C 184 56, 208 184, 229 184 C 245 184, 258 110, 265 24"
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="2.2"
            />
          </svg>
        );

      case 'd0_q7_graph':
        return (
          <svg
            viewBox="0 0 360 250"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d0q7-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
              <pattern id="d0q7-grid" width="22" height="22" patternUnits="userSpaceOnUse">
                <path d="M 22 0 L 0 0 0 22" fill="none" stroke="#e2e8f0" strokeWidth="1" />
              </pattern>
            </defs>
            <rect x="24" y="14" width="308" height="220" fill="url(#d0q7-grid)" />
            {/* O(178, 124), unit = 22px. Asymptotes x = 1 (200), y = 1 (102) */}
            <line x1="24" y1="124" x2="332" y2="124" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#d0q7-arr)" />
            <line x1="178" y1="234" x2="178" y2="14" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#d0q7-arr)" />

            {/* Asymptotes x = 1 and y = 1 */}
            <line x1="200" y1="14" x2="200" y2="234" stroke="#334155" strokeWidth="1.4" />
            <line x1="24" y1="102" x2="332" y2="102" stroke="#334155" strokeWidth="1.4" />

            {/* Branches of y = (x + 2)/(x - 1): passes (-2, 0) at (134, 124) and (0, -2) at (178, 168); right branch passes (2, 4) at (222, 36) and (4, 2) at (266, 80) */}
            <path d="M 26 111 Q 172 116 192 232" fill="none" stroke="#0f172a" strokeWidth="2" />
            <path d="M 208 16 Q 226 90 330 95" fill="none" stroke="#0f172a" strokeWidth="2" />

            <circle cx="134" cy="124" r="2.8" fill="#dc2626" />
            <circle cx="178" cy="168" r="2.8" fill="#dc2626" />
            <text x="167" y="136" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="11">0</text>
            <text x="203" y="136" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="11">1</text>
            <text x="134" y="138" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="11" textAnchor="middle">−2</text>
            <text x="166" y="172" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="11">−2</text>
            <text x="168" y="100" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="11">1</text>
          </svg>
        );

      case 'd0_q9_graph':
        return (
          <svg
            viewBox="0 0 320 260"
            className="w-full max-w-xs mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <pattern id="d0q9-grid" width="38" height="38" patternUnits="userSpaceOnUse" x="10" y="16">
                <path d="M 38 0 L 0 0 0 38" fill="none" stroke="#cbd5e1" strokeWidth="1" />
              </pattern>
            </defs>
            {/* 6x6 grid of 38px = 228x228, O at (124, 130) */}
            <rect x="10" y="16" width="228" height="228" fill="url(#d0q9-grid)" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="10" y1="130" x2="238" y2="130" stroke="#334155" strokeWidth="1.6" />
            <line x1="124" y1="16" x2="124" y2="244" stroke="#334155" strokeWidth="1.6" />

            {/* Axis numbers */}
            <text x="48" y="144" fill="#334155" fontFamily={MATH_SERIF} fontSize="12" textAnchor="middle">−2</text>
            <text x="86" y="144" fill="#334155" fontFamily={MATH_SERIF} fontSize="12" textAnchor="middle">−1</text>
            <text x="116" y="144" fill="#334155" fontFamily={MATH_SERIF} fontSize="12">0</text>
            <text x="162" y="144" fill="#334155" fontFamily={MATH_SERIF} fontSize="12" textAnchor="middle">1</text>
            <text x="200" y="144" fill="#334155" fontFamily={MATH_SERIF} fontSize="12" textAnchor="middle">2</text>

            <text x="116" y="96" fill="#334155" fontFamily={MATH_SERIF} fontSize="12" textAnchor="end">1</text>
            <text x="116" y="58" fill="#334155" fontFamily={MATH_SERIF} fontSize="12" textAnchor="end">2</text>
            <text x="116" y="24" fill="#334155" fontFamily={MATH_SERIF} fontSize="12" textAnchor="end">3</text>
            <text x="116" y="172" fill="#334155" fontFamily={MATH_SERIF} fontSize="12" textAnchor="end">−1</text>
            <text x="116" y="210" fill="#334155" fontFamily={MATH_SERIF} fontSize="12" textAnchor="end">−2</text>
            <text x="116" y="242" fill="#334155" fontFamily={MATH_SERIF} fontSize="12" textAnchor="end">−3</text>

            {/* Cubic curve: min at (0, -2) -> (124, 206), max at (1, 1) -> (162, 92) */}
            <path
              d="M 92 16 C 102 140, 112 206, 124 206 C 138 206, 148 92, 162 92 C 174 92, 184 155, 193 244"
              fill="none"
              stroke="#2563eb"
              strokeWidth="2.4"
            />
          </svg>
        );

      case 'd0_q12_bbt':
        return (
          <svg
            viewBox="0 0 480 185"
            className="w-full max-w-md mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d0q12-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="460" height="165" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="48" x2="470" y2="48" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="10" y1="86" x2="470" y2="86" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="75" y1="10" x2="75" y2="175" stroke="#0f172a" strokeWidth="1.4" />

            {/* Double vertical line at x = 1 (x = 270) */}
            <line x1="267" y1="48" x2="267" y2="175" stroke="#0f172a" strokeWidth="1.3" />
            <line x1="273" y1="48" x2="273" y2="175" stroke="#0f172a" strokeWidth="1.3" />

            <text x="42" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="105" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="270" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">1</text>
            <text x="440" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="42" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y'</text>
            <text x="172" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="355" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>

            <text x="42" y="135" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y</text>
            <text x="100" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">2</text>
            <text x="242" y="164" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="298" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>
            <text x="445" y="164" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">2</text>

            <line x1="115" y1="112" x2="222" y2="154" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d0q12-arr)" />
            <line x1="318" y1="112" x2="430" y2="154" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d0q12-arr)" />
          </svg>
        );

      case 'd0_q13_bbt':
        return (
          <svg
            viewBox="0 0 540 185"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d0q13-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="520" height="165" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="48" x2="530" y2="48" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="10" y1="86" x2="530" y2="86" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="85" y1="10" x2="85" y2="175" stroke="#0f172a" strokeWidth="1.4" />

            {/* Double bar at x = 1 (x = 365) */}
            <line x1="362" y1="48" x2="362" y2="175" stroke="#0f172a" strokeWidth="1.3" />
            <line x1="368" y1="48" x2="368" y2="175" stroke="#0f172a" strokeWidth="1.3" />

            <text x="47" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="112" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="235" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−2</text>
            <text x="365" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">1</text>
            <text x="500" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="47" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">f'(x)</text>
            <text x="172" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="235" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="300" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="435" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>

            <text x="47" y="125" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" textAnchor="middle">y =</text>
            <text x="47" y="146" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" textAnchor="middle">f(x)</text>

            <text x="112" y="164" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="235" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">5</text>
            <text x="338" y="164" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="394" y="164" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="505" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">2</text>

            <line x1="132" y1="154" x2="218" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d0q13-arr)" />
            <line x1="250" y1="112" x2="322" y2="154" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d0q13-arr)" />
            <line x1="414" y1="154" x2="492" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d0q13-arr)" />
          </svg>
        );

      case 'd0_q20_bbt':
        return (
          <svg
            viewBox="0 0 520 185"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d0q20-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="500" height="165" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="48" x2="510" y2="48" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="10" y1="86" x2="510" y2="86" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="85" y1="10" x2="85" y2="175" stroke="#0f172a" strokeWidth="1.4" />

            <text x="47" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="115" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="235" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−1</text>
            <text x="360" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">3</text>
            <text x="480" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="47" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y'</text>
            <text x="175" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="235" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="298" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="360" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="420" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>

            <text x="47" y="135" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y</text>
            <text x="115" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>
            <text x="235" y="164" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−6</text>
            <text x="360" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">26</text>
            <text x="480" y="164" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>

            <line x1="135" y1="112" x2="215" y2="154" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d0q20-arr)" />
            <line x1="255" y1="154" x2="340" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d0q20-arr)" />
            <line x1="380" y1="112" x2="460" y2="154" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d0q20-arr)" />
          </svg>
        );

      case 'd2_q1_bxd':
        return (
          <svg
            viewBox="0 0 480 105"
            className="w-full max-w-md mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <rect x="10" y="10" width="460" height="85" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="52" x2="470" y2="52" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="75" y1="10" x2="75" y2="95" stroke="#0f172a" strokeWidth="1.4" />

            {/* Double vertical line at x = -1 (x = 215) */}
            <line x1="212" y1="52" x2="212" y2="95" stroke="#0f172a" strokeWidth="1.3" />
            <line x1="218" y1="52" x2="218" y2="95" stroke="#0f172a" strokeWidth="1.3" />

            <text x="42" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="105" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="215" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−1</text>
            <text x="330" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">1</text>
            <text x="440" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="42" y="80" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y'</text>
            <text x="155" y="80" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="275" y="80" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="330" y="80" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="388" y="80" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
          </svg>
        );

      case 'd2_q2_graph':
        return (
          <svg
            viewBox="0 0 360 220"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d2q2-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(180, 75), unit = 55px */}
            <line x1="40" y1="75" x2="320" y2="75" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d2q2-arr)" />
            <line x1="180" y1="205" x2="180" y2="16" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d2q2-arr)" />
            <text x="322" y="90" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="188" y="24" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="185" y="90" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13">0</text>

            {/* Dashed lines from (-1, 1) -> (125, 32) and (1, 1) -> (235, 32) */}
            <line x1="125" y1="75" x2="125" y2="32" stroke="#0f172a" strokeWidth="1.2" strokeDasharray="3 2" />
            <line x1="235" y1="75" x2="235" y2="32" stroke="#0f172a" strokeWidth="1.2" strokeDasharray="3 2" />
            <line x1="125" y1="32" x2="235" y2="32" stroke="#0f172a" strokeWidth="1.2" strokeDasharray="3 2" />

            <text x="125" y="91" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="middle">−1</text>
            <text x="235" y="91" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="middle">1</text>
            <text x="186" y="45" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13">1</text>

            {/* Quartic curve y = -x^4 + 2x^2 */}
            <path
              d="M 82 200 C 96 90, 110 32, 125 32 C 145 32, 162 75, 180 75 C 198 75, 215 32, 235 32 C 250 32, 264 90, 278 200"
              fill="none"
              stroke="#0f172a"
              strokeWidth="2.1"
            />
          </svg>
        );

      case 'd2_q3_bxd':
        return (
          <svg
            viewBox="0 0 560 105"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <rect x="10" y="10" width="540" height="85" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="52" x2="550" y2="52" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="72" y1="10" x2="72" y2="95" stroke="#0f172a" strokeWidth="1.4" />

            <text x="41" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="102" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="186" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−3</text>
            <text x="272" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−2</text>
            <text x="358" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">3</text>
            <text x="444" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">5</text>
            <text x="522" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="41" y="80" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y'</text>
            <text x="145" y="80" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="186" y="80" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="229" y="80" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="272" y="80" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="315" y="80" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="358" y="80" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="401" y="80" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="444" y="80" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="485" y="80" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
          </svg>
        );

      case 'd2_q4_graph':
        return (
          <svg
            viewBox="0 0 380 240"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d2q4-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(150, 165), unit = 32px. TCĐ x = 1 (182), TCN y = 2 (101) */}
            <line x1="25" y1="165" x2="345" y2="165" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#d2q4-arr)" />
            <line x1="150" y1="228" x2="150" y2="16" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#d2q4-arr)" />
            <text x="348" y="178" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="136" y="24" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="155" y="180" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" fontStyle="italic">O</text>

            {/* Asymptotes x = 1 and y = 2 */}
            <line x1="182" y1="18" x2="182" y2="226" stroke="#334155" strokeWidth="1.3" />
            <line x1="26" y1="101" x2="342" y2="101" stroke="#334155" strokeWidth="1.3" />

            <text x="188" y="182" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14">1</text>
            <text x="138" y="136" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">1</text>

            {/* Hyperbola y = (2x-1)/(x-1): passes (0, 1)->(150, 133) and (0.5, 0)->(166, 165) */}
            <path d="M 28 109 Q 158 114 175 224" fill="none" stroke="#0f172a" strokeWidth="2.1" />
            <path d="M 189 20 Q 206 88 338 93" fill="none" stroke="#0f172a" strokeWidth="2.1" />
          </svg>
        );

      case 'd2_q5_graph':
        return (
          <svg
            viewBox="0 0 360 250"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d2q5-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(145, 55), x unit = 42px, y unit = 38px */}
            <line x1="35" y1="55" x2="315" y2="55" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d2q5-arr)" />
            <line x1="145" y1="238" x2="145" y2="16" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d2q5-arr)" />
            <text x="316" y="68" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="132" y="24" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="131" y="70" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            {/* Points: (-1, 0)->(103, 55), (0, -4)->(145, 207), (1, -2)->(187, 131), (2, 0)->(229, 55), (3, -4)->(271, 207) */}
            <line x1="187" y1="55" x2="187" y2="131" stroke="#0f172a" strokeWidth="1.3" strokeDasharray="4 3" />
            <line x1="145" y1="131" x2="187" y2="131" stroke="#0f172a" strokeWidth="1.3" strokeDasharray="4 3" />
            <line x1="271" y1="55" x2="271" y2="207" stroke="#0f172a" strokeWidth="1.3" strokeDasharray="4 3" />
            <line x1="145" y1="207" x2="271" y2="207" stroke="#0f172a" strokeWidth="1.3" strokeDasharray="4 3" />

            <text x="108" y="48" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14">−1</text>
            <text x="229" y="48" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">2</text>
            <text x="271" y="48" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">3</text>
            <text x="142" y="135" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">−2</text>
            <text x="142" y="212" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">−4</text>

            {/* Cubic curve y = -x^3 + 3x^2 - 4 */}
            <path
              d="M 96 18 C 110 135, 128 207, 145 207 C 175 207, 200 55, 229 55 C 248 55, 262 145, 275 232"
              fill="none"
              stroke="#0f172a"
              strokeWidth="2.1"
            />
          </svg>
        );

      case 'd2_q7_bbt':
        return (
          <svg
            viewBox="0 0 500 145"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d2q7-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="480" height="125" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="48" x2="490" y2="48" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="80" y1="10" x2="80" y2="135" stroke="#0f172a" strokeWidth="1.4" />

            <text x="45" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="112" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="235" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">1</text>
            <text x="355" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">2</text>
            <text x="462" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="45" y="96" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">f(x)</text>
            <text x="112" y="122" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="235" y="70" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">3</text>
            <text x="355" y="122" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="462" y="70" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <line x1="132" y1="114" x2="218" y2="74" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d2q7-arr)" />
            <line x1="252" y1="74" x2="338" y2="114" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d2q7-arr)" />
            <line x1="372" y1="114" x2="442" y2="74" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d2q7-arr)" />
          </svg>
        );

      case 'd2_q9_graph':
        return (
          <svg
            viewBox="0 0 380 215"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d2q9-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(145, 145), unit = 32px. TCĐ x = 1 (177), TCN y = 2 (81) */}
            <line x1="25" y1="145" x2="345" y2="145" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#d2q9-arr)" />
            <line x1="145" y1="200" x2="145" y2="16" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#d2q9-arr)" />
            <text x="342" y="156" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">x</text>
            <text x="132" y="24" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">y</text>
            <text x="131" y="158" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" fontStyle="italic">O</text>

            {/* Asymptotes x = 1 and y = 2 */}
            <line x1="177" y1="18" x2="177" y2="198" stroke="#334155" strokeWidth="1.3" />
            <line x1="28" y1="81" x2="340" y2="81" stroke="#334155" strokeWidth="1.3" />

            <text x="167" y="158" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13">1</text>
            <text x="209" y="158" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13">2</text>
            <text x="135" y="117" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="end">1</text>
            <text x="135" y="77" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="end">2</text>

            {/* Branches of y = (2x - 4)/(x - 1) */}
            <path d="M 30 71 Q 152 62 168 18" fill="none" stroke="#0f172a" strokeWidth="2" />
            <path d="M 186 196 Q 202 96 335 89" fill="none" stroke="#0f172a" strokeWidth="2" />
          </svg>
        );

      case 'd2_q10_bbt':
        return (
          <svg
            viewBox="0 0 520 180"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d2q10-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="500" height="160" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="48" x2="510" y2="48" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="10" y1="86" x2="510" y2="86" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="75" y1="10" x2="75" y2="170" stroke="#0f172a" strokeWidth="1.4" />

            {/* Double vertical line at x = 1 (x = 345) */}
            <line x1="342" y1="48" x2="342" y2="170" stroke="#0f172a" strokeWidth="1.3" />
            <line x1="348" y1="48" x2="348" y2="170" stroke="#0f172a" strokeWidth="1.3" />

            <text x="42" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="102" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="220" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="345" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">1</text>
            <text x="480" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="42" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y'</text>
            <text x="160" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="220" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="282" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="415" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>

            <text x="42" y="132" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y</text>
            <text x="102" y="158" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="220" y="106" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">2</text>
            <text x="318" y="158" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="368" y="158" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">3</text>
            <text x="480" y="114" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">5</text>

            <line x1="118" y1="150" x2="204" y2="110" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d2q10-arr)" />
            <line x1="236" y1="110" x2="300" y2="150" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d2q10-arr)" />
            <line x1="382" y1="150" x2="464" y2="118" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d2q10-arr)" />
          </svg>
        );

      case 'd2_p2_q1_graph':
        return (
          <svg
            viewBox="0 0 360 240"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d2p2q1-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
              <pattern id="d2p2q1-grid" width="32" height="32" patternUnits="userSpaceOnUse" x="16" y="20">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#e2e8f0" strokeWidth="1" />
              </pattern>
            </defs>
            <rect x="16" y="20" width="320" height="192" fill="url(#d2p2q1-grid)" stroke="#cbd5e1" strokeWidth="1" />
            {/* O(176, 116), 1 unit = 32px */}
            <line x1="16" y1="116" x2="334" y2="116" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d2p2q1-arr)" />
            <line x1="176" y1="212" x2="176" y2="20" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d2p2q1-arr)" />
            <text x="326" y="130" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">x</text>
            <text x="162" y="32" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">y</text>
            <text x="162" y="131" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13">O</text>

            {/* Dashed projections for (-1, 1)->(144, 84) and (2, -2)->(240, 180) */}
            <line x1="144" y1="116" x2="144" y2="84" stroke="#0f172a" strokeWidth="1.3" strokeDasharray="3 2" />
            <line x1="144" y1="84" x2="176" y2="84" stroke="#0f172a" strokeWidth="1.3" strokeDasharray="3 2" />
            <line x1="240" y1="116" x2="240" y2="180" stroke="#0f172a" strokeWidth="1.3" strokeDasharray="3 2" />
            <line x1="176" y1="180" x2="240" y2="180" stroke="#0f172a" strokeWidth="1.3" strokeDasharray="3 2" />

            <text x="144" y="132" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="middle">−1</text>
            <text x="182" y="88" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13">1</text>
            <text x="245" y="130" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13">2</text>
            <text x="170" y="184" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="end">−2</text>

            {/* Cubic curve with local max (-1, 1) at (144, 84) and local min (2, -2) at (240, 180) */}
            <path
              d="M 96 208 C 112 125, 128 84, 144 84 C 176 84, 208 180, 240 180 C 258 180, 274 125, 290 28"
              fill="none"
              stroke="#b91c1c"
              strokeWidth="2.2"
            />
          </svg>
        );

      case 'd2_p2_q2_bbt':
        return (
          <svg
            viewBox="0 0 340 170"
            className="w-full max-w-xs mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d2p2q2-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="320" height="150" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
            <line x1="10" y1="45" x2="330" y2="45" stroke="#0f172a" strokeWidth="1.3" />
            <line x1="10" y1="80" x2="330" y2="80" stroke="#0f172a" strokeWidth="1.3" />
            <line x1="65" y1="10" x2="65" y2="160" stroke="#0f172a" strokeWidth="1.3" />

            <text x="37" y="33" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" textAnchor="middle">x</text>
            <text x="95" y="33" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" textAnchor="middle">−∞</text>
            <text x="300" y="33" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" textAnchor="middle">+∞</text>

            <text x="37" y="68" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" textAnchor="middle">y'</text>
            <text x="198" y="68" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" textAnchor="middle">−</text>

            <text x="37" y="125" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" textAnchor="middle">y</text>
            <text x="95" y="102" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" textAnchor="middle">+∞</text>
            <text x="300" y="148" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" textAnchor="middle">−∞</text>

            <line x1="115" y1="106" x2="278" y2="142" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d2p2q2-arr)" />
          </svg>
        );

      case 'd2_p3_q3_graph':
        return (
          <svg
            viewBox="0 0 360 250"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d2p3q3-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(145, 145), unit = 34px. TCĐ x = 1 (179), TCN y = 2 (77), Oy intercept (0, -1) -> (145, 179) */}
            <line x1="25" y1="145" x2="335" y2="145" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d2p3q3-arr)" />
            <line x1="145" y1="235" x2="145" y2="16" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d2p3q3-arr)" />
            <text x="334" y="158" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="132" y="24" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="132" y="159" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            {/* Dashed asymptotes x = 1 and y = 2 */}
            <line x1="179" y1="18" x2="179" y2="232" stroke="#0f172a" strokeWidth="1.4" strokeDasharray="5 3" />
            <line x1="28" y1="77" x2="332" y2="77" stroke="#0f172a" strokeWidth="1.4" strokeDasharray="5 3" />

            <text x="184" y="159" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14">1</text>
            <text x="136" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">2</text>
            <text x="138" y="183" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">−1</text>

            {/* Hyperbola y = (2x + 1)/(x - 1) passing (0, -1)->(145, 179) and (-0.5, 0)->(128, 145) */}
            <path d="M 30 96 Q 152 115 170 230" fill="none" stroke="#0f172a" strokeWidth="2.1" />
            <path d="M 188 20 Q 210 62 330 70" fill="none" stroke="#0f172a" strokeWidth="2.1" />
          </svg>
        );

      case 'd2_p4_q1_bbt':
        return (
          <svg
            viewBox="0 0 520 195"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d2p4q1-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="500" height="175" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="48" x2="510" y2="48" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="10" y1="86" x2="510" y2="86" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="85" y1="10" x2="85" y2="185" stroke="#0f172a" strokeWidth="1.4" />

            <text x="47" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="115" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="235" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−1</text>
            <text x="360" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">3</text>
            <text x="480" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="47" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y'</text>
            <text x="175" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="235" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="298" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="360" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="420" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>

            <text x="47" y="138" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y</text>
            <text x="115" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>
            {/* Fraction 1/3 at x = -1 */}
            <text x="235" y="152" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">1</text>
            <line x1="227" y1="156" x2="243" y2="156" stroke="#0f172a" strokeWidth="1.2" />
            <text x="235" y="172" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">3</text>

            <text x="360" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">11</text>
            <text x="480" y="168" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>

            <line x1="135" y1="112" x2="215" y2="152" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d2p4q1-arr)" />
            <line x1="255" y1="152" x2="340" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d2p4q1-arr)" />
            <line x1="380" y1="112" x2="460" y2="156" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d2p4q1-arr)" />
          </svg>
        );

      case 'd4_q1_bbt':
        return (
          <svg
            viewBox="0 0 520 185"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d4q1-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="500" height="165" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="48" x2="510" y2="48" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="10" y1="86" x2="510" y2="86" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="90" y1="10" x2="90" y2="175" stroke="#0f172a" strokeWidth="1.4" />

            <text x="50" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="120" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="240" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−2</text>
            <text x="360" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">1</text>
            <text x="480" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="50" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">f'(x)</text>
            <text x="180" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="240" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="300" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="360" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="420" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>

            <text x="50" y="136" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">f(x)</text>
            <text x="120" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>
            <text x="240" y="164" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−3</text>
            <text x="360" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">4</text>
            <text x="480" y="164" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>

            <line x1="140" y1="112" x2="220" y2="152" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d4q1-arr)" />
            <line x1="260" y1="152" x2="340" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d4q1-arr)" />
            <line x1="380" y1="112" x2="460" y2="152" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d4q1-arr)" />
          </svg>
        );

      case 'd4_q2_graph':
        return (
          <svg
            viewBox="0 0 340 250"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d4q2-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(190, 95), 1 unit = 36px */}
            <line x1="30" y1="95" x2="305" y2="95" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d4q2-arr)" />
            <line x1="190" y1="235" x2="190" y2="18" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d4q2-arr)" />
            <text x="298" y="112" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="176" y="26" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="195" y="112" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            {/* Dashed projection from (-2, 1) -> (118, 59) */}
            <line x1="118" y1="95" x2="118" y2="59" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="118" y1="59" x2="190" y2="59" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />

            <text x="118" y="112" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">−2</text>
            <text x="150" y="112" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">−1</text>
            <text x="183" y="64" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">1</text>
            <text x="183" y="207" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">−3</text>

            {/* Cubic curve passing (-2,1)->(118,59), (-1,0)->(154,95), (0,-3)->(190,203) */}
            <path
              d="M 78 222 C 94 110, 106 59, 118 59 C 138 59, 168 203, 190 203 C 206 203, 218 110, 230 18"
              fill="none"
              stroke="#0f172a"
              strokeWidth="2.1"
            />
          </svg>
        );

      case 'd4_q3_graph':
        return (
          <svg
            viewBox="0 0 340 230"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d4q3-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(170, 165), 1 unit = 45px */}
            <line x1="35" y1="165" x2="305" y2="165" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d4q3-arr)" />
            <line x1="170" y1="215" x2="170" y2="18" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d4q3-arr)" />
            <text x="298" y="180" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="156" y="26" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="155" y="182" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            {/* Dashed projections for (-1, 2)->(125, 75) and (1, 2)->(215, 75) */}
            <line x1="125" y1="165" x2="125" y2="75" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="215" y1="165" x2="215" y2="75" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="125" y1="75" x2="215" y2="75" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />

            <text x="125" y="182" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">−1</text>
            <text x="215" y="182" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">1</text>
            <text x="163" y="79" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">2</text>
            <text x="163" y="128" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">1</text>

            {/* Quartic curve y = -x^4 + 2x^2 + 1 */}
            <path
              d="M 93 205 C 105 120, 114 75, 125 75 C 142 75, 155 120, 170 120 C 185 120, 198 75, 215 75 C 226 75, 235 120, 247 205"
              fill="none"
              stroke="#0f172a"
              strokeWidth="2.1"
            />
          </svg>
        );

      case 'd4_q4_bbt':
        return (
          <svg
            viewBox="0 0 520 185"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d4q4-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="500" height="165" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="48" x2="510" y2="48" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="10" y1="86" x2="510" y2="86" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="85" y1="10" x2="85" y2="175" stroke="#0f172a" strokeWidth="1.4" />

            <text x="47" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="120" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−3</text>
            <text x="240" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−1</text>
            <text x="360" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="480" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">2</text>

            <text x="47" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y'</text>
            <text x="180" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="240" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="300" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="360" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="420" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>

            <text x="47" y="136" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y</text>
            <text x="120" y="164" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−2</text>
            <text x="240" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">5</text>
            <text x="360" y="164" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−3</text>
            <text x="480" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">1</text>

            <line x1="140" y1="152" x2="220" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d4q4-arr)" />
            <line x1="260" y1="112" x2="340" y2="152" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d4q4-arr)" />
            <line x1="380" y1="152" x2="460" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d4q4-arr)" />
          </svg>
        );

      case 'd4_q5_graph':
        return (
          <svg
            viewBox="0 0 350 250"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d4q5-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(145, 115), 1 unit = 36px */}
            <line x1="25" y1="115" x2="325" y2="115" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d4q5-arr)" />
            <line x1="145" y1="235" x2="145" y2="18" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d4q5-arr)" />
            <text x="318" y="130" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="131" y="26" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="130" y="132" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            {/* Asymptotes x = 1 (181) and y = -1 (151) */}
            <line x1="181" y1="18" x2="181" y2="235" stroke="#dc2626" strokeWidth="1.4" strokeDasharray="5 3" />
            <line x1="25" y1="151" x2="325" y2="151" stroke="#6d28d9" strokeWidth="1.4" strokeDasharray="5 3" />

            <text x="187" y="110" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14">1</text>
            <text x="139" y="166" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">−1</text>

            {/* Hyperbola y = -x / (x - 1) passing through O(145, 115) */}
            <path d="M 30 140 Q 152 132 170 20" fill="none" stroke="#0f172a" strokeWidth="2.1" />
            <path d="M 192 232 Q 210 168 320 160" fill="none" stroke="#0f172a" strokeWidth="2.1" />
          </svg>
        );

      case 'd4_q6_graph':
        return (
          <svg
            viewBox="0 0 350 250"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d4q6-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(175, 125), 1 unit = 32px */}
            <line x1="25" y1="125" x2="325" y2="125" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d4q6-arr)" />
            <line x1="175" y1="235" x2="175" y2="18" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d4q6-arr)" />
            <text x="318" y="140" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="161" y="26" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="160" y="142" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            {/* Asymptotes x = -1 (143) and y = 1 (93) */}
            <line x1="143" y1="18" x2="143" y2="235" stroke="#dc2626" strokeWidth="1.4" strokeDasharray="5 3" />
            <line x1="25" y1="93" x2="325" y2="93" stroke="#6d28d9" strokeWidth="1.4" strokeDasharray="5 3" />

            <text x="137" y="142" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">−1</text>
            <text x="182" y="88" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14">1</text>
            <text x="182" y="193" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14">−2</text>
            <text x="239" y="142" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">2</text>

            {/* Hyperbola y = (x - 2)/(x + 1) passing (0,-2)->(175,189) and (2,0)->(239,125) */}
            <path d="M 30 75 Q 118 65 132 20" fill="none" stroke="#0f172a" strokeWidth="2.1" />
            <path d="M 155 232 Q 175 135 320 105" fill="none" stroke="#0f172a" strokeWidth="2.1" />
          </svg>
        );

      case 'd4_q7_graph':
        return (
          <svg
            viewBox="0 0 350 250"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d4q7-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(215, 195), 1 unit x = 40px, 1 unit y = 34px */}
            <line x1="35" y1="195" x2="315" y2="195" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d4q7-arr)" />
            <line x1="215" y1="235" x2="215" y2="18" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d4q7-arr)" />
            <text x="308" y="210" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="201" y="26" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="202" y="212" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            {/* Dashed projections for (-2, 4)->(135, 59) and (-1, 2)->(175, 127) */}
            <line x1="135" y1="195" x2="135" y2="59" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="135" y1="59" x2="215" y2="59" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="175" y1="195" x2="175" y2="127" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="175" y1="127" x2="215" y2="127" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />

            <text x="90" y="212" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">−3</text>
            <text x="135" y="212" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">−2</text>
            <text x="175" y="212" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">−1</text>
            <text x="255" y="212" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">1</text>
            <text x="210" y="131" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">2</text>
            <text x="210" y="63" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">4</text>

            {/* Cubic curve y = x^3 + 3x^2 passing (-3,0)->(95,195), (-2,4)->(135,59), (-1,2)->(175,127), (0,0)->(215,195) */}
            <path
              d="M 88 228 C 102 125, 118 59, 135 59 C 158 59, 192 195, 215 195 C 232 195, 244 115, 255 24"
              fill="none"
              stroke="#0f172a"
              strokeWidth="2.1"
            />
          </svg>
        );

      case 'd4_q10_bxd':
        return (
          <svg
            viewBox="0 0 500 105"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <rect x="10" y="10" width="480" height="85" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="52" x2="490" y2="52" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="90" y1="10" x2="90" y2="95" stroke="#0f172a" strokeWidth="1.4" />

            <text x="50" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="125" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="240" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−3</text>
            <text x="355" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">2</text>
            <text x="460" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="50" y="79" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">f'(x)</text>
            <text x="182" y="79" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="240" y="79" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="298" y="79" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="355" y="79" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="410" y="79" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
          </svg>
        );

      case 'd4_q11_bbt':
        return (
          <svg
            viewBox="0 0 540 190"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d4q11-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="520" height="170" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="48" x2="530" y2="48" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="10" y1="86" x2="530" y2="86" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="80" y1="10" x2="80" y2="180" stroke="#0f172a" strokeWidth="1.4" />

            {/* Double bar at x = -1 (x=250) */}
            <line x1="247" y1="48" x2="247" y2="180" stroke="#0f172a" strokeWidth="1.3" />
            <line x1="253" y1="48" x2="253" y2="180" stroke="#0f172a" strokeWidth="1.3" />

            <text x="45" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="110" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="250" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−1</text>
            <text x="385" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">3</text>
            <text x="500" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="45" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y'</text>
            <text x="175" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="320" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="385" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="445" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>

            <text x="45" y="138" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y</text>
            <text x="110" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">2</text>
            <text x="220" y="168" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="280" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>
            <text x="385" y="168" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−4</text>
            <text x="500" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">5</text>

            <line x1="125" y1="112" x2="202" y2="154" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d4q11-arr)" />
            <line x1="300" y1="112" x2="368" y2="154" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d4q11-arr)" />
            <line x1="405" y1="154" x2="482" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d4q11-arr)" />
          </svg>
        );

      case 'd4_p2_q1_bbt':
        return (
          <svg
            viewBox="0 0 580 190"
            className="w-full max-w-xl mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d4p2q1-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="560" height="170" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="48" x2="570" y2="48" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="10" y1="86" x2="570" y2="86" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="75" y1="10" x2="75" y2="180" stroke="#0f172a" strokeWidth="1.4" />

            {/* Double bar at x = 2 (x=325) */}
            <line x1="322" y1="48" x2="322" y2="180" stroke="#0f172a" strokeWidth="1.3" />
            <line x1="328" y1="48" x2="328" y2="180" stroke="#0f172a" strokeWidth="1.3" />

            <text x="42" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="105" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="215" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="325" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">2</text>
            <text x="435" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">4</text>
            <text x="540" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="42" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y'</text>
            <text x="160" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="215" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="270" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="380" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="435" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="490" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>

            <text x="42" y="138" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y</text>
            <text x="105" y="168" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="215" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−1</text>
            <text x="295" y="168" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="355" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>
            <text x="435" y="168" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">3</text>
            <text x="540" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <line x1="125" y1="154" x2="198" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d4p2q1-arr)" />
            <line x1="232" y1="112" x2="282" y2="154" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d4p2q1-arr)" />
            <line x1="370" y1="112" x2="420" y2="154" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d4p2q1-arr)" />
            <line x1="450" y1="154" x2="522" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d4p2q1-arr)" />
          </svg>
        );

      case 'd4_p2_q2_graph':
        return (
          <svg
            viewBox="0 0 340 245"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d4p2q2-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(135, 75), 1 unit x = 40px, 1 unit y = 34px */}
            <line x1="30" y1="75" x2="310" y2="75" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d4p2q2-arr)" />
            <line x1="135" y1="235" x2="135" y2="18" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d4p2q2-arr)" />
            <text x="303" y="90" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="121" y="26" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="122" y="68" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            {/* Dashed projections for (-1, -4)->(95, 211) and (2, -4)->(215, 211) */}
            <line x1="95" y1="75" x2="95" y2="211" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="215" y1="75" x2="215" y2="211" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="95" y1="211" x2="215" y2="211" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />

            <text x="95" y="68" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">−1</text>
            <text x="215" y="92" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">2</text>
            <text x="128" y="215" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">−4</text>

            {/* Cubic curve y = x^3 - 3x^2 passing (-1,-4)->(95,211), (0,0)->(135,75), (2,-4)->(215,211), (3,0)->(255,75) */}
            <path
              d="M 90 228 C 102 135, 118 75, 135 75 C 158 75, 192 211, 215 211 C 232 211, 248 130, 265 24"
              fill="none"
              stroke="#0f172a"
              strokeWidth="2.1"
            />
          </svg>
        );

      case 'd4_p4_q1_bbt':
        return (
          <svg
            viewBox="0 0 520 195"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d4p4q1-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="500" height="175" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="48" x2="510" y2="48" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="10" y1="86" x2="510" y2="86" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="85" y1="10" x2="85" y2="185" stroke="#0f172a" strokeWidth="1.4" />

            <text x="47" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="115" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="235" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−1</text>
            <text x="360" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">3</text>
            <text x="480" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="47" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y'</text>
            <text x="175" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="235" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="298" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="360" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="420" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>

            <text x="47" y="138" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y</text>
            <text x="115" y="168" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            {/* Fraction 11/3 at x = -1 */}
            <text x="235" y="106" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">11</text>
            <line x1="226" y1="110" x2="244" y2="110" stroke="#0f172a" strokeWidth="1.2" />
            <text x="235" y="125" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">3</text>

            <text x="360" y="168" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−7</text>
            <text x="480" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <line x1="135" y1="156" x2="215" y2="114" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d4p4q1-arr)" />
            <line x1="255" y1="114" x2="340" y2="156" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d4p4q1-arr)" />
            <line x1="380" y1="156" x2="460" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d4p4q1-arr)" />
          </svg>
        );

      case 'd3_q1_bbt':
        return (
          <svg
            viewBox="0 0 520 185"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d3q1-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="500" height="165" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="48" x2="510" y2="48" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="10" y1="86" x2="510" y2="86" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="85" y1="10" x2="85" y2="175" stroke="#0f172a" strokeWidth="1.4" />

            <text x="47" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="115" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="235" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−1</text>
            <text x="360" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">2</text>
            <text x="480" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="47" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">f'(x)</text>
            <text x="175" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="235" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="298" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="360" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="420" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>

            <text x="47" y="135" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">f(x)</text>
            <text x="115" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>
            <text x="235" y="164" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−2</text>
            <text x="360" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">3</text>
            <text x="480" y="164" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>

            <line x1="135" y1="112" x2="215" y2="152" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d3q1-arr)" />
            <line x1="255" y1="152" x2="340" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d3q1-arr)" />
            <line x1="380" y1="112" x2="460" y2="152" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d3q1-arr)" />
          </svg>
        );

      case 'd3_q2_graph':
        return (
          <svg
            viewBox="0 0 340 250"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d3q2-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(190, 90), 1 unit x = 42px, 1 unit y = 32px */}
            <line x1="30" y1="90" x2="305" y2="90" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d3q2-arr)" />
            <line x1="190" y1="238" x2="190" y2="18" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d3q2-arr)" />
            <text x="298" y="106" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="175" y="26" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="176" y="106" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            {/* Dashed projections for (-2, 1) -> (106, 58) and (-1, -2) -> (148, 154) */}
            <line x1="106" y1="90" x2="106" y2="58" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="106" y1="58" x2="190" y2="58" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="148" y1="90" x2="148" y2="154" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="148" y1="154" x2="190" y2="154" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />

            <text x="106" y="106" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">−2</text>
            <text x="148" y="106" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">−1</text>
            <text x="236" y="106" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14">1</text>
            <text x="196" y="62" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14">1</text>
            <text x="196" y="158" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14">−2</text>
            <text x="196" y="222" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14">−4</text>

            {/* Cubic curve passing (-2,1)->(106,58), (-1,-2)->(148,154), (0,-4)->(190,218), (1,0)->(232,90) */}
            <path
              d="M 74 150 C 86 85, 96 58, 106 58 C 126 58, 168 218, 190 218 C 208 218, 224 140, 240 28"
              fill="none"
              stroke="#0f172a"
              strokeWidth="2.1"
            />
          </svg>
        );

      case 'd3_q3_graph':
        return (
          <svg
            viewBox="0 0 340 230"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d3q3-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(170, 155), 1 unit x = 48px, 1 unit y = 46px */}
            <line x1="35" y1="155" x2="305" y2="155" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d3q3-arr)" />
            <line x1="170" y1="215" x2="170" y2="18" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d3q3-arr)" />
            <text x="298" y="170" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="155" y="26" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="156" y="172" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            <line x1="122" y1="155" x2="122" y2="63" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="218" y1="155" x2="218" y2="63" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="122" y1="63" x2="218" y2="63" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />

            <text x="122" y="172" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">−1</text>
            <text x="218" y="172" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">1</text>
            <text x="163" y="60" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">2</text>
            <text x="163" y="106" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">1</text>

            <path
              d="M 88 205 C 98 110, 108 63, 122 63 C 138 63, 154 109, 170 109 C 186 109, 202 63, 218 63 C 232 63, 242 110, 252 205"
              fill="none"
              stroke="#0f172a"
              strokeWidth="2.1"
            />
          </svg>
        );

      case 'd3_q4_bbt':
        return (
          <svg
            viewBox="0 0 520 185"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d3q4-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="500" height="165" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="48" x2="510" y2="48" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="10" y1="86" x2="510" y2="86" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="85" y1="10" x2="85" y2="175" stroke="#0f172a" strokeWidth="1.4" />

            <text x="47" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="115" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−2</text>
            <text x="235" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−1</text>
            <text x="360" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">1</text>
            <text x="480" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">3</text>

            <text x="47" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y'</text>
            <text x="175" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="235" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="298" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="360" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="420" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>

            <text x="47" y="135" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y</text>
            <text x="115" y="164" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−1</text>
            <text x="235" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">4</text>
            <text x="360" y="164" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−2</text>
            <text x="480" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">3</text>

            <line x1="135" y1="152" x2="215" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d3q4-arr)" />
            <line x1="255" y1="112" x2="340" y2="152" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d3q4-arr)" />
            <line x1="380" y1="152" x2="460" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d3q4-arr)" />
          </svg>
        );

      case 'd3_q5_graph':
        return (
          <svg
            viewBox="0 0 340 240"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d3q5-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(165, 130), 1 unit = 32px; TCĐ x = -1 -> x=133; TCN y = 2 -> y=66 */}
            <line x1="30" y1="130" x2="305" y2="130" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d3q5-arr)" />
            <line x1="165" y1="225" x2="165" y2="18" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d3q5-arr)" />
            <text x="298" y="145" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="150" y="26" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="169" y="145" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            {/* Asymptotes */}
            <line x1="133" y1="18" x2="133" y2="225" stroke="#dc2626" strokeWidth="1.3" strokeDasharray="4 3" />
            <line x1="30" y1="66" x2="300" y2="66" stroke="#7c3aed" strokeWidth="1.3" strokeDasharray="4 3" />

            <text x="122" y="145" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">−1</text>
            <text x="172" y="61" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14">2</text>

            {/* Curve y = 2x/(x+1): left branch x<-1 above y=2; right branch x>-1 through (0,0) */}
            <path d="M 35 44 Q 96 42, 118 18" fill="none" stroke="#0f172a" strokeWidth="2.0" />
            <path d="M 142 222 Q 154 90, 295 82" fill="none" stroke="#0f172a" strokeWidth="2.0" />
          </svg>
        );

      case 'd3_q6_graph':
        return (
          <svg
            viewBox="0 0 340 245"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d3q6-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(165, 130), 1 unit = 32px; TCĐ x = 1 -> x=197; TCN y = 1 -> y=98 */}
            <line x1="30" y1="130" x2="305" y2="130" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d3q6-arr)" />
            <line x1="165" y1="230" x2="165" y2="18" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d3q6-arr)" />
            <text x="298" y="145" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="150" y="26" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="151" y="145" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            {/* Asymptotes */}
            <line x1="197" y1="18" x2="197" y2="230" stroke="#dc2626" strokeWidth="1.3" strokeDasharray="4 3" />
            <line x1="30" y1="98" x2="300" y2="98" stroke="#7c3aed" strokeWidth="1.3" strokeDasharray="4 3" />

            <text x="204" y="145" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14">1</text>
            <text x="158" y="94" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">1</text>
            <text x="158" y="68" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">2</text>
            <text x="101" y="145" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">−2</text>

            {/* Curve y = (x+2)/(x-1): left branch passes (-2,0)->(101,130) and (0,-2)->(165,194); right branch above y=1 */}
            <path d="M 35 120 Q 152 135, 182 228" fill="none" stroke="#0f172a" strokeWidth="2.0" />
            <path d="M 214 18 Q 232 76, 298 84" fill="none" stroke="#0f172a" strokeWidth="2.0" />
          </svg>
        );

      case 'd3_q7_graph':
        return (
          <svg
            viewBox="0 0 340 245"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d3q7-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(195, 75), 1 unit x = 40px, 1 unit y = 34px; CT (-2,-4)->(115,211), CĐ (0,0)->(195,75) */}
            <line x1="35" y1="75" x2="305" y2="75" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d3q7-arr)" />
            <line x1="195" y1="232" x2="195" y2="18" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d3q7-arr)" />
            <text x="298" y="90" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="180" y="26" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="182" y="90" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            {/* Dashed projections for (-2, -4) -> (115, 211) */}
            <line x1="115" y1="75" x2="115" y2="211" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="115" y1="211" x2="195" y2="211" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />

            <text x="115" y="68" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">−2</text>
            <text x="202" y="215" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14">−4</text>

            {/* Cubic curve y = -x^3 - 3x^2 passing (-3,0)->(75,75), (-2,-4)->(115,211), (0,0)->(195,75) */}
            <path
              d="M 68 24 C 82 130, 98 211, 115 211 C 138 211, 172 75, 195 75 C 212 75, 226 140, 238 228"
              fill="none"
              stroke="#0f172a"
              strokeWidth="2.1"
            />
          </svg>
        );

      case 'd3_q10_bxd':
        return (
          <svg
            viewBox="0 0 500 105"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <rect x="10" y="10" width="480" height="85" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="52" x2="490" y2="52" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="85" y1="10" x2="85" y2="95" stroke="#0f172a" strokeWidth="1.4" />
            {/* Double vertical line at x = -2 */}
            <line x1="227" y1="52" x2="227" y2="95" stroke="#0f172a" strokeWidth="1.3" />
            <line x1="233" y1="52" x2="233" y2="95" stroke="#0f172a" strokeWidth="1.3" />

            <text x="47" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="115" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="230" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−2</text>
            <text x="350" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">1</text>
            <text x="460" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="47" y="79" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">f'(x)</text>
            <text x="172" y="79" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="290" y="79" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="350" y="79" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="408" y="79" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
          </svg>
        );

      case 'd3_q11_bbt':
        return (
          <svg
            viewBox="0 0 530 190"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d3q11-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="510" height="170" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="48" x2="520" y2="48" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="10" y1="86" x2="520" y2="86" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="75" y1="10" x2="75" y2="180" stroke="#0f172a" strokeWidth="1.4" />

            {/* Double bar at x = 0 */}
            <line x1="237" y1="48" x2="237" y2="180" stroke="#0f172a" strokeWidth="1.3" />
            <line x1="243" y1="48" x2="243" y2="180" stroke="#0f172a" strokeWidth="1.3" />

            <text x="42" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="105" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="240" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="375" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">2</text>
            <text x="490" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="42" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y'</text>
            <text x="172" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="308" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="375" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="435" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>

            <text x="42" y="138" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y</text>
            <text x="105" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">3</text>
            <text x="212" y="168" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="268" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>
            <text x="375" y="168" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−1</text>
            <text x="490" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">1</text>

            <line x1="120" y1="112" x2="195" y2="154" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d3q11-arr)" />
            <line x1="286" y1="112" x2="356" y2="154" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d3q11-arr)" />
            <line x1="394" y1="154" x2="474" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d3q11-arr)" />
          </svg>
        );

      case 'd3_p2_q1_bbt':
        return (
          <svg
            viewBox="0 0 560 190"
            className="w-full max-w-xl mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d3p2q1-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="540" height="170" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="48" x2="550" y2="48" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="10" y1="86" x2="550" y2="86" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="70" y1="10" x2="70" y2="180" stroke="#0f172a" strokeWidth="1.4" />

            {/* Double bar at x = 1 */}
            <line x1="307" y1="48" x2="307" y2="180" stroke="#0f172a" strokeWidth="1.3" />
            <line x1="313" y1="48" x2="313" y2="180" stroke="#0f172a" strokeWidth="1.3" />

            <text x="40" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="98" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="204" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−1</text>
            <text x="310" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">1</text>
            <text x="416" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">3</text>
            <text x="522" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="40" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y'</text>
            <text x="150" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="204" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="256" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="364" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="416" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="470" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>

            <text x="40" y="138" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y</text>
            <text x="98" y="168" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="204" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−3</text>
            <text x="282" y="168" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="338" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>
            <text x="416" y="168" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">5</text>
            <text x="522" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <line x1="115" y1="154" x2="186" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d3p2q1-arr)" />
            <line x1="222" y1="112" x2="268" y2="154" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d3p2q1-arr)" />
            <line x1="354" y1="112" x2="400" y2="154" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d3p2q1-arr)" />
            <line x1="432" y1="154" x2="504" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d3p2q1-arr)" />
          </svg>
        );

      case 'd3_p2_q2_graph':
        return (
          <svg
            viewBox="0 0 340 245"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d3p2q2-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(135, 75), 1 unit x = 40px, 1 unit y = 34px */}
            <line x1="30" y1="75" x2="310" y2="75" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d3p2q2-arr)" />
            <line x1="135" y1="235" x2="135" y2="18" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d3p2q2-arr)" />
            <text x="303" y="90" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="121" y="26" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="142" y="90" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            {/* Dashed projections for (-1, -4)->(95, 211), (1, -2)->(175, 143) and (2, -4)->(215, 211) */}
            <line x1="95" y1="75" x2="95" y2="211" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="175" y1="75" x2="175" y2="143" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="135" y1="143" x2="175" y2="143" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="215" y1="75" x2="215" y2="211" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="95" y1="211" x2="215" y2="211" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />

            <text x="95" y="68" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">−1</text>
            <text x="175" y="68" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">1</text>
            <text x="215" y="68" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">2</text>
            <text x="128" y="147" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">−2</text>
            <text x="128" y="215" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">−4</text>

            {/* Cubic curve y = x^3 - 3x^2 passing (-1,-4)->(95,211), (0,0)->(135,75), (2,-4)->(215,211), (3,0)->(255,75) */}
            <path
              d="M 90 228 C 102 135, 118 75, 135 75 C 158 75, 192 211, 215 211 C 232 211, 248 130, 265 24"
              fill="none"
              stroke="#0f172a"
              strokeWidth="2.1"
            />
          </svg>
        );

      case 'd3_p4_q1_bbt':
        return (
          <svg
            viewBox="0 0 520 195"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d3p4q1-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="500" height="175" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="48" x2="510" y2="48" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="10" y1="86" x2="510" y2="86" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="85" y1="10" x2="85" y2="185" stroke="#0f172a" strokeWidth="1.4" />

            <text x="47" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="115" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="235" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">1</text>
            <text x="360" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">3</text>
            <text x="480" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="47" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y'</text>
            <text x="175" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="235" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="298" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="360" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="420" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>

            <text x="47" y="138" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y</text>
            <text x="115" y="168" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            {/* Fraction 7/3 at x = 1 */}
            <text x="235" y="106" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">7</text>
            <line x1="227" y1="110" x2="243" y2="110" stroke="#0f172a" strokeWidth="1.2" />
            <text x="235" y="125" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">3</text>

            <text x="360" y="168" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">1</text>
            <text x="480" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <line x1="135" y1="156" x2="215" y2="114" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d3p4q1-arr)" />
            <line x1="255" y1="114" x2="340" y2="156" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d3p4q1-arr)" />
            <line x1="380" y1="156" x2="460" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d3p4q1-arr)" />
          </svg>
        );

      case 'd3_p4_q3_bbt':
        return (
          <svg
            viewBox="0 0 420 185"
            className="w-full max-w-md mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d3p4q3-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="400" height="165" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="48" x2="410" y2="48" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="10" y1="86" x2="410" y2="86" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="90" y1="10" x2="90" y2="175" stroke="#0f172a" strokeWidth="1.4" />

            <text x="50" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="120" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="250" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">120</text>
            <text x="380" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="50" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" textAnchor="middle">C̄'(x)</text>
            <text x="185" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="250" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="315" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>

            <text x="50" y="135" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" textAnchor="middle">C̄(x)</text>
            <text x="125" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>
            <text x="250" y="164" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">290</text>
            <text x="380" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <line x1="145" y1="112" x2="230" y2="152" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d3p4q3-arr)" />
            <line x1="270" y1="152" x2="358" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d3p4q3-arr)" />
          </svg>
        );

      case 'd5_q1_bbt':
        return (
          <svg
            viewBox="0 0 520 185"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d5q1-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="500" height="165" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="48" x2="510" y2="48" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="10" y1="86" x2="510" y2="86" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="90" y1="10" x2="90" y2="175" stroke="#0f172a" strokeWidth="1.4" />

            <text x="50" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="120" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="240" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−1</text>
            <text x="360" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">3</text>
            <text x="480" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="50" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">f'(x)</text>
            <text x="180" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="240" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="300" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="360" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="420" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>

            <text x="50" y="136" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">f(x)</text>
            <text x="120" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>
            <text x="240" y="164" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−2</text>
            <text x="360" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">5</text>
            <text x="480" y="164" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>

            <line x1="140" y1="112" x2="220" y2="152" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d5q1-arr)" />
            <line x1="260" y1="152" x2="340" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d5q1-arr)" />
            <line x1="380" y1="112" x2="460" y2="152" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d5q1-arr)" />
          </svg>
        );

      case 'd5_q2_graph':
        return (
          <svg
            viewBox="0 0 340 250"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d5q2-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(140, 95), 1 unit = 36px */}
            <line x1="30" y1="95" x2="305" y2="95" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d5q2-arr)" />
            <line x1="140" y1="235" x2="140" y2="18" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d5q2-arr)" />
            <text x="298" y="112" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="126" y="26" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="125" y="112" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            {/* Dashed projection from (2, -3) -> (212, 203) */}
            <line x1="212" y1="95" x2="212" y2="203" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="140" y1="203" x2="212" y2="203" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />

            <text x="212" y="88" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">2</text>
            <text x="133" y="62" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">1</text>
            <text x="133" y="207" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">−3</text>

            {/* Cubic curve y = x^3 - 3x^2 + 1: CĐ (0,1)->(140,59), CT (2,-3)->(212,203) */}
            <path
              d="M 100 222 C 115 110, 128 59, 140 59 C 162 59, 192 203, 212 203 C 228 203, 240 110, 252 18"
              fill="none"
              stroke="#0f172a"
              strokeWidth="2.1"
            />
          </svg>
        );

      case 'd5_q3_graph':
        return (
          <svg
            viewBox="0 0 340 230"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d5q3-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(170, 85), 1 unit = 45px */}
            <line x1="35" y1="85" x2="305" y2="85" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d5q3-arr)" />
            <line x1="170" y1="215" x2="170" y2="18" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d5q3-arr)" />
            <text x="298" y="100" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="156" y="26" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="155" y="78" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            {/* Dashed projections for (-1, -2)->(125, 175) and (1, -2)->(215, 175) */}
            <line x1="125" y1="85" x2="125" y2="175" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="215" y1="85" x2="215" y2="175" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="125" y1="175" x2="215" y2="175" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />

            <text x="125" y="78" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">−1</text>
            <text x="215" y="78" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">1</text>
            <text x="163" y="191" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">−2</text>
            <text x="184" y="128" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14">−1</text>

            {/* Quartic curve y = x^4 - 2x^2 - 1 */}
            <path
              d="M 88 28 C 102 125, 114 175, 125 175 C 142 175, 155 130, 170 130 C 185 130, 198 175, 215 175 C 226 175, 238 125, 252 28"
              fill="none"
              stroke="#0f172a"
              strokeWidth="2.1"
            />
          </svg>
        );

      case 'd5_q4_bbt':
        return (
          <svg
            viewBox="0 0 520 185"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d5q4-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="500" height="165" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="48" x2="510" y2="48" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="10" y1="86" x2="510" y2="86" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="85" y1="10" x2="85" y2="175" stroke="#0f172a" strokeWidth="1.4" />

            <text x="47" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="120" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−1</text>
            <text x="240" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">1</text>
            <text x="360" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">2</text>
            <text x="480" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">4</text>

            <text x="47" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y'</text>
            <text x="180" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="240" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="300" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="360" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="420" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>

            <text x="47" y="136" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y</text>
            <text x="120" y="164" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−1</text>
            <text x="240" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">6</text>
            <text x="360" y="164" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−4</text>
            <text x="480" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">2</text>

            <line x1="140" y1="152" x2="220" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d5q4-arr)" />
            <line x1="260" y1="112" x2="340" y2="152" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d5q4-arr)" />
            <line x1="380" y1="152" x2="460" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d5q4-arr)" />
          </svg>
        );

      case 'd5_q5_graph':
        return (
          <svg
            viewBox="0 0 350 250"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d5q5-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(125, 115), 1 unit = 36px */}
            <line x1="25" y1="115" x2="325" y2="115" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d5q5-arr)" />
            <line x1="125" y1="235" x2="125" y2="18" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d5q5-arr)" />
            <text x="318" y="130" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="111" y="26" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="110" y="132" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            {/* Asymptotes x = 2 (197) and y = -1 (151) */}
            <line x1="197" y1="18" x2="197" y2="235" stroke="#dc2626" strokeWidth="1.4" strokeDasharray="5 3" />
            <line x1="25" y1="151" x2="325" y2="151" stroke="#6d28d9" strokeWidth="1.4" strokeDasharray="5 3" />

            <text x="203" y="110" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14">2</text>
            <text x="119" y="166" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">−1</text>

            {/* Hyperbola y = (-x + 1)/(x - 2) */}
            <path d="M 30 142 Q 168 134 186 20" fill="none" stroke="#0f172a" strokeWidth="2.1" />
            <path d="M 208 232 Q 226 168 320 160" fill="none" stroke="#0f172a" strokeWidth="2.1" />
          </svg>
        );

      case 'd5_q6_graph':
        return (
          <svg
            viewBox="0 0 350 250"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d5q6-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(175, 135), 1 unit = 32px */}
            <line x1="25" y1="135" x2="325" y2="135" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d5q6-arr)" />
            <line x1="175" y1="235" x2="175" y2="18" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d5q6-arr)" />
            <text x="318" y="150" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="161" y="26" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="160" y="152" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            {/* Asymptotes x = -1 (143) and y = 2 (71) */}
            <line x1="143" y1="18" x2="143" y2="235" stroke="#dc2626" strokeWidth="1.4" strokeDasharray="5 3" />
            <line x1="25" y1="71" x2="325" y2="71" stroke="#6d28d9" strokeWidth="1.4" strokeDasharray="5 3" />

            <text x="137" y="152" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">−1</text>
            <text x="182" y="66" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14">2</text>
            <text x="182" y="203" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14">−2</text>
            <text x="207" y="152" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">1</text>

            {/* Hyperbola y = (2x - 2)/(x + 1) passing (0,-2)->(175,199) and (1,0)->(207,135) */}
            <path d="M 30 58 Q 118 48 132 20" fill="none" stroke="#0f172a" strokeWidth="2.1" />
            <path d="M 155 232 Q 182 115 320 84" fill="none" stroke="#0f172a" strokeWidth="2.1" />
          </svg>
        );

      case 'd5_q7_graph':
        return (
          <svg
            viewBox="0 0 340 245"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d5q7-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(125, 75), 1 unit x = 40px, 1 unit y = 34px */}
            <line x1="30" y1="75" x2="310" y2="75" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d5q7-arr)" />
            <line x1="125" y1="235" x2="125" y2="18" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d5q7-arr)" />
            <text x="303" y="90" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="111" y="26" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="112" y="68" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            {/* Dashed projections for (1, -2)->(165, 143) and (2, -4)->(205, 211) */}
            <line x1="165" y1="75" x2="165" y2="143" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="125" y1="143" x2="165" y2="143" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="205" y1="75" x2="205" y2="211" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="125" y1="211" x2="205" y2="211" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />

            <text x="165" y="68" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">1</text>
            <text x="205" y="68" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">2</text>
            <text x="252" y="92" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">3</text>
            <text x="118" y="147" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">−2</text>
            <text x="118" y="215" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">−4</text>

            {/* Cubic curve y = x^3 - 3x^2 */}
            <path
              d="M 80 228 C 92 135, 108 75, 125 75 C 148 75, 182 211, 205 211 C 222 211, 238 130, 255 24"
              fill="none"
              stroke="#0f172a"
              strokeWidth="2.1"
            />
          </svg>
        );

      case 'd5_q10_bxd':
        return (
          <svg
            viewBox="0 0 560 105"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <rect x="10" y="10" width="540" height="85" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="52" x2="550" y2="52" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="90" y1="10" x2="90" y2="95" stroke="#0f172a" strokeWidth="1.4" />

            <text x="50" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="125" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="220" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−2</text>
            <text x="315" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">1</text>
            <text x="410" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">4</text>
            <text x="515" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="50" y="79" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">f'(x)</text>
            <text x="172" y="79" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="220" y="79" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="268" y="79" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="315" y="79" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="362" y="79" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="410" y="79" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="462" y="79" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
          </svg>
        );

      case 'd5_q11_bbt':
        return (
          <svg
            viewBox="0 0 540 190"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d5q11-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="520" height="170" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="48" x2="530" y2="48" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="10" y1="86" x2="530" y2="86" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="80" y1="10" x2="80" y2="180" stroke="#0f172a" strokeWidth="1.4" />

            {/* Double bar at x = 1 (x=250) */}
            <line x1="247" y1="48" x2="247" y2="180" stroke="#0f172a" strokeWidth="1.3" />
            <line x1="253" y1="48" x2="253" y2="180" stroke="#0f172a" strokeWidth="1.3" />

            <text x="45" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="110" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="250" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">1</text>
            <text x="385" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">4</text>
            <text x="500" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="45" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y'</text>
            <text x="175" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="320" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="385" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="445" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>

            <text x="45" y="138" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y</text>
            <text x="110" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">4</text>
            <text x="220" y="168" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="280" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>
            <text x="385" y="168" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−2</text>
            <text x="500" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">4</text>

            <line x1="125" y1="112" x2="202" y2="154" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d5q11-arr)" />
            <line x1="300" y1="112" x2="368" y2="154" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d5q11-arr)" />
            <line x1="405" y1="154" x2="482" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d5q11-arr)" />
          </svg>
        );

      case 'd5_p2_q1_bbt':
        return (
          <svg
            viewBox="0 0 580 190"
            className="w-full max-w-xl mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d5p2q1-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="560" height="170" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="48" x2="570" y2="48" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="10" y1="86" x2="570" y2="86" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="75" y1="10" x2="75" y2="180" stroke="#0f172a" strokeWidth="1.4" />

            {/* Double bar at x = 1 (x=325) */}
            <line x1="322" y1="48" x2="322" y2="180" stroke="#0f172a" strokeWidth="1.3" />
            <line x1="328" y1="48" x2="328" y2="180" stroke="#0f172a" strokeWidth="1.3" />

            <text x="42" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="105" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="215" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−1</text>
            <text x="325" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">1</text>
            <text x="435" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">3</text>
            <text x="540" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="42" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y'</text>
            <text x="160" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="215" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="270" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="380" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="435" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="490" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>

            <text x="42" y="138" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y</text>
            <text x="105" y="168" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="215" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−2</text>
            <text x="295" y="168" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="355" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>
            <text x="435" y="168" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">2</text>
            <text x="540" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <line x1="125" y1="154" x2="198" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d5p2q1-arr)" />
            <line x1="232" y1="112" x2="282" y2="154" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d5p2q1-arr)" />
            <line x1="370" y1="112" x2="420" y2="154" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d5p2q1-arr)" />
            <line x1="450" y1="154" x2="522" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d5p2q1-arr)" />
          </svg>
        );

      case 'd5_p2_q2_graph':
        return (
          <svg
            viewBox="0 0 340 245"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d5p2q2-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(135, 195), 1 unit x = 40px, 1 unit y = 34px */}
            <line x1="30" y1="195" x2="310" y2="195" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d5p2q2-arr)" />
            <line x1="135" y1="235" x2="135" y2="18" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d5p2q2-arr)" />
            <text x="303" y="210" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="121" y="26" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="122" y="212" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            {/* Dashed projections for (-1, 4)->(95, 59) and (2, 4)->(215, 59) */}
            <line x1="95" y1="195" x2="95" y2="59" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="215" y1="195" x2="215" y2="59" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="95" y1="59" x2="215" y2="59" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />

            <text x="95" y="212" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">−1</text>
            <text x="215" y="212" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">2</text>
            <text x="255" y="212" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">3</text>
            <text x="128" y="63" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">4</text>

            {/* Cubic curve y = -x^3 + 3x^2 passing (-1,4)->(95,59), (0,0)->(135,195), (2,4)->(215,59), (3,0)->(255,195) */}
            <path
              d="M 90 38 C 102 135, 118 195, 135 195 C 158 195, 192 59, 215 59 C 232 59, 248 140, 265 232"
              fill="none"
              stroke="#0f172a"
              strokeWidth="2.1"
            />
          </svg>
        );

      case 'd5_p4_q1_bbt':
        return (
          <svg
            viewBox="0 0 520 195"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d5p4q1-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="500" height="175" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="48" x2="510" y2="48" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="10" y1="86" x2="510" y2="86" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="85" y1="10" x2="85" y2="185" stroke="#0f172a" strokeWidth="1.4" />

            <text x="47" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="115" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="235" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−1</text>
            <text x="360" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">3</text>
            <text x="480" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="47" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y'</text>
            <text x="175" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="235" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="298" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="360" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="420" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>

            <text x="47" y="138" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y</text>
            <text x="115" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>
            {/* Fraction -11/3 at x = -1 */}
            <text x="220" y="162" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">−</text>
            <text x="238" y="153" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">11</text>
            <line x1="229" y1="157" x2="247" y2="157" stroke="#0f172a" strokeWidth="1.2" />
            <text x="238" y="172" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">3</text>

            <text x="360" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">7</text>
            <text x="480" y="168" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>

            <line x1="135" y1="112" x2="210" y2="154" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d5p4q1-arr)" />
            <line x1="258" y1="154" x2="340" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d5p4q1-arr)" />
            <line x1="380" y1="112" x2="460" y2="156" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d5p4q1-arr)" />
          </svg>
        );

      case 'd6_q1_bbt':
        return (
          <svg
            viewBox="0 0 520 185"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d6q1-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="500" height="165" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="48" x2="510" y2="48" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="10" y1="86" x2="510" y2="86" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="85" y1="10" x2="85" y2="175" stroke="#0f172a" strokeWidth="1.4" />

            <text x="47" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="115" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="235" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−2</text>
            <text x="360" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">1</text>
            <text x="480" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="47" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">f'(x)</text>
            <text x="175" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="235" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="298" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="360" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="420" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>

            <text x="47" y="136" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">f(x)</text>
            <text x="115" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>
            <text x="235" y="164" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−3</text>
            <text x="360" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">4</text>
            <text x="480" y="164" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>

            <line x1="135" y1="112" x2="215" y2="152" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d6q1-arr)" />
            <line x1="255" y1="152" x2="340" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d6q1-arr)" />
            <line x1="380" y1="112" x2="460" y2="152" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d6q1-arr)" />
          </svg>
        );

      case 'd6_q2_graph':
        return (
          <svg
            viewBox="0 0 340 245"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d6q2-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(145, 135), 1 unit x = 38px, 1 unit y = 28px */}
            <line x1="25" y1="135" x2="315" y2="135" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d6q2-arr)" />
            <line x1="145" y1="225" x2="145" y2="18" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d6q2-arr)" />
            <text x="306" y="152" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="131" y="26" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="132" y="152" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            {/* CT (-1, -2) -> (107, 191), CĐ (2, 3) -> (221, 51) */}
            <line x1="107" y1="135" x2="107" y2="191" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="107" y1="191" x2="145" y2="191" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="221" y1="135" x2="221" y2="51" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="145" y1="51" x2="221" y2="51" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />

            <text x="107" y="128" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">−1</text>
            <text x="221" y="152" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">2</text>
            <text x="155" y="195" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14">−2</text>
            <text x="137" y="55" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">3</text>

            <path
              d="M 55 32 C 75 130, 92 191, 107 191 C 138 191, 190 51, 221 51 C 238 51, 255 120, 275 215"
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="2.2"
            />
          </svg>
        );

      case 'd6_q3_graph':
        return (
          <svg
            viewBox="0 0 340 245"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d6q3-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(165, 175), 1 unit x = 42px, 1 unit y = 32px */}
            <line x1="25" y1="175" x2="315" y2="175" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d6q3-arr)" />
            <line x1="165" y1="228" x2="165" y2="18" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d6q3-arr)" />
            <text x="306" y="192" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="151" y="26" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="152" y="192" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            {/* CĐ (-1, 4) -> (123, 47), CT (1, 0) -> (207, 175), (0, 2) -> (165, 111) */}
            <line x1="123" y1="175" x2="123" y2="47" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="123" y1="47" x2="165" y2="47" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />

            <text x="123" y="192" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">−1</text>
            <text x="207" y="192" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">1</text>
            <text x="174" y="52" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14">4</text>
            <text x="174" y="115" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14">2</text>

            <path
              d="M 70 220 C 90 110, 108 47, 123 47 C 145 47, 185 175, 207 175 C 222 175, 240 110, 258 25"
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="2.2"
            />
          </svg>
        );

      case 'd6_q4_graph':
        return (
          <svg
            viewBox="0 0 360 250"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d6q4-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(115, 135), 1 unit x = 42px, 1 unit y = 20px */}
            <line x1="25" y1="135" x2="335" y2="135" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d6q4-arr)" />
            <line x1="115" y1="235" x2="115" y2="15" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d6q4-arr)" />
            <text x="326" y="152" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="101" y="25" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="102" y="152" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            {/* Points: (-1,2)->(73,95), (1,5)->(157,35), (3,-4)->(241,215), (4,1)->(283,115) */}
            <line x1="73" y1="135" x2="73" y2="95" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="73" y1="95" x2="115" y2="95" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />

            <line x1="157" y1="135" x2="157" y2="35" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="115" y1="35" x2="157" y2="35" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />

            <line x1="241" y1="135" x2="241" y2="215" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="115" y1="215" x2="241" y2="215" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />

            <line x1="283" y1="135" x2="283" y2="115" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="115" y1="115" x2="283" y2="115" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />

            <text x="73" y="152" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="middle">−1</text>
            <text x="157" y="152" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="middle">1</text>
            <text x="241" y="128" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="middle">3</text>
            <text x="283" y="152" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="middle">4</text>

            <text x="108" y="39" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="end">5</text>
            <text x="123" y="99" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13">2</text>
            <text x="108" y="119" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="end">1</text>
            <text x="108" y="219" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="end">−4</text>

            <path
              d="M 73 95 C 102 55, 135 35, 157 35 C 185 35, 215 215, 241 215 C 258 215, 272 155, 283 115"
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="2.2"
            />
            <circle cx="73" cy="95" r="3" fill="#0f172a" />
            <circle cx="157" cy="35" r="3" fill="#0f172a" />
            <circle cx="241" cy="215" r="3" fill="#0f172a" />
            <circle cx="283" cy="115" r="3" fill="#0f172a" />
          </svg>
        );

      case 'd6_q5_graph':
        return (
          <svg
            viewBox="0 0 340 245"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d6q5-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(125, 105), 1 unit = 34px. TCĐ x=2 -> x=193, TCN y=-1 -> y=139 */}
            <line x1="25" y1="105" x2="315" y2="105" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d6q5-arr)" />
            <line x1="125" y1="230" x2="125" y2="18" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d6q5-arr)" />
            <text x="307" y="122" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="112" y="26" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="112" y="122" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            <line x1="193" y1="22" x2="193" y2="225" stroke="#dc2626" strokeWidth="1.4" strokeDasharray="5 3" />
            <line x1="30" y1="139" x2="308" y2="139" stroke="#7c3aed" strokeWidth="1.4" strokeDasharray="5 3" />

            <text x="201" y="99" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14">2</text>
            <text x="116" y="154" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">−1</text>

            {/* Left branch y = (-x+1)/(x-2) */}
            <path
              d="M 35 129 Q 162 125 184 220"
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="2.1"
            />
            {/* Right branch */}
            <path
              d="M 202 25 Q 222 132 305 135"
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="2.1"
            />
          </svg>
        );

      case 'd6_q6_graph':
      case 'd6_p2_q2_graph':
        return (
          <svg
            viewBox="0 0 340 245"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d6q6-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(135, 145), 1 unit x = 42px, 1 unit y = 32px */}
            {/* y = -x^3 + 3x^2 - 1: CT (0,-1)->(135,177), I(1,1)->(177,113), CĐ(2,3)->(219,49) */}
            <line x1="25" y1="145" x2="315" y2="145" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d6q6-arr)" />
            <line x1="135" y1="230" x2="135" y2="18" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d6q6-arr)" />
            <text x="307" y="162" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="121" y="26" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="122" y="139" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            <line x1="177" y1="145" x2="177" y2="113" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="135" y1="113" x2="177" y2="113" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="219" y1="145" x2="219" y2="49" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="135" y1="49" x2="219" y2="49" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />

            <text x="177" y="162" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">1</text>
            <text x="219" y="162" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">2</text>
            <text x="127" y="182" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">−1</text>
            <text x="127" y="117" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">1</text>
            <text x="127" y="53" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">3</text>

            <path
              d="M 88 28 C 105 120, 120 177, 135 177 C 155 177, 198 49, 219 49 C 234 49, 250 115, 268 225"
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="2.2"
            />
          </svg>
        );

      case 'd6_q7_graph':
        return (
          <svg
            viewBox="0 0 340 245"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d6q7-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(175, 130), 1 unit = 32px. TCĐ x=-1 -> x=143, TCN y=2 -> y=66 */}
            {/* Oy (0,-2)->(175, 194), Ox (1,0)->(207, 130) */}
            <line x1="25" y1="130" x2="315" y2="130" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d6q7-arr)" />
            <line x1="175" y1="232" x2="175" y2="16" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d6q7-arr)" />
            <text x="307" y="147" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="162" y="25" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="163" y="146" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            <line x1="143" y1="18" x2="143" y2="228" stroke="#dc2626" strokeWidth="1.4" strokeDasharray="5 3" />
            <line x1="28" y1="66" x2="308" y2="66" stroke="#7c3aed" strokeWidth="1.4" strokeDasharray="5 3" />

            <text x="131" y="146" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="middle">−1</text>
            <text x="184" y="61" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13">2</text>
            <text x="184" y="198" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13">−2</text>
            <text x="207" y="146" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="middle">1</text>

            {/* Left branch */}
            <path
              d="M 32 52 Q 118 46 132 18"
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="2.1"
            />
            {/* Right branch passing (0,-2)->(175,194) and (1,0)->(207,130) */}
            <path
              d="M 155 226 Q 172 120 305 78"
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="2.1"
            />
          </svg>
        );

      case 'd6_q9_graph':
        return (
          <svg
            viewBox="0 0 340 235"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d6q9-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(170, 125), 1 unit x = 48px, 1 unit y = 45px */}
            {/* y = x^4 - 2x^2: (-1,-1)->(122,170), (0,0)->(170,125), (1,-1)->(218,170) */}
            <line x1="30" y1="125" x2="310" y2="125" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d6q9-arr)" />
            <line x1="170" y1="220" x2="170" y2="18" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d6q9-arr)" />
            <text x="302" y="142" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="156" y="26" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="157" y="118" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            <line x1="122" y1="125" x2="122" y2="170" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="218" y1="125" x2="218" y2="170" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="122" y1="170" x2="218" y2="170" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />

            <text x="122" y="118" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">−1</text>
            <text x="218" y="118" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">1</text>
            <text x="162" y="185" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">−1</text>

            <path
              d="M 88 28 C 98 115, 110 170, 122 170 C 138 170, 154 125, 170 125 C 186 125, 202 170, 218 170 C 230 170, 242 115, 252 28"
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="2.2"
            />
          </svg>
        );

      case 'd6_q12_bbt':
        return (
          <svg
            viewBox="0 0 500 185"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d6q12-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="480" height="165" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="48" x2="490" y2="48" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="10" y1="86" x2="490" y2="86" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="85" y1="10" x2="85" y2="175" stroke="#0f172a" strokeWidth="1.4" />

            {/* Double bar at x = -1 (x=285) */}
            <line x1="282" y1="48" x2="282" y2="175" stroke="#0f172a" strokeWidth="1.3" />
            <line x1="288" y1="48" x2="288" y2="175" stroke="#0f172a" strokeWidth="1.3" />

            <text x="47" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="115" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="285" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−1</text>
            <text x="460" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="47" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y'</text>
            <text x="195" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="375" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>

            <text x="47" y="136" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y</text>
            <text x="115" y="164" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">3</text>
            <text x="252" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>
            <text x="318" y="164" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="460" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">3</text>

            <line x1="132" y1="154" x2="232" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d6q12-arr)" />
            <line x1="338" y1="154" x2="442" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d6q12-arr)" />
          </svg>
        );

      case 'd6_p2_q1_bbt':
        return (
          <svg
            viewBox="0 0 540 185"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d6p2q1-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="520" height="165" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="48" x2="530" y2="48" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="10" y1="86" x2="530" y2="86" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="85" y1="10" x2="85" y2="175" stroke="#0f172a" strokeWidth="1.4" />

            {/* Double bar at x = 2 (x=345) */}
            <line x1="342" y1="48" x2="342" y2="175" stroke="#0f172a" strokeWidth="1.3" />
            <line x1="348" y1="48" x2="348" y2="175" stroke="#0f172a" strokeWidth="1.3" />

            <text x="47" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="115" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="225" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−1</text>
            <text x="345" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">2</text>
            <text x="500" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="47" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">f'(x)</text>
            <text x="170" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="225" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="285" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="425" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>

            <text x="47" y="136" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">f(x)</text>
            <text x="115" y="164" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="225" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">4</text>
            <text x="312" y="164" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="380" y="164" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="500" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">1</text>

            <line x1="135" y1="152" x2="208" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d6p2q1-arr)" />
            <line x1="242" y1="112" x2="298" y2="152" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d6p2q1-arr)" />
            <line x1="400" y1="152" x2="482" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d6p2q1-arr)" />
          </svg>
        );

      case 'd6_p4_q1_bbt':
        return (
          <svg
            viewBox="0 0 520 185"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d6p4q1-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="500" height="165" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="48" x2="510" y2="48" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="10" y1="86" x2="510" y2="86" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="85" y1="10" x2="85" y2="175" stroke="#0f172a" strokeWidth="1.4" />

            <text x="47" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="115" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="235" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−1</text>
            <text x="360" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">3</text>
            <text x="480" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="47" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y'</text>
            <text x="175" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="235" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="298" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="360" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="420" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>

            <text x="47" y="136" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y</text>
            <text x="115" y="164" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="235" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">7</text>
            <text x="360" y="164" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−25</text>
            <text x="480" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <line x1="135" y1="152" x2="215" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d6p4q1-arr)" />
            <line x1="255" y1="112" x2="340" y2="152" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d6p4q1-arr)" />
            <line x1="382" y1="152" x2="460" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d6p4q1-arr)" />
          </svg>
        );

      case 'd7_q1_bxd':
        return (
          <svg
            viewBox="0 0 500 105"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <rect x="10" y="10" width="480" height="85" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="52" x2="490" y2="52" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="85" y1="10" x2="85" y2="95" stroke="#0f172a" strokeWidth="1.4" />

            {/* Double bar at x = 1 (x=355) */}
            <line x1="352" y1="52" x2="352" y2="95" stroke="#0f172a" strokeWidth="1.3" />
            <line x1="358" y1="52" x2="358" y2="95" stroke="#0f172a" strokeWidth="1.3" />

            <text x="47" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="115" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="235" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−2</text>
            <text x="355" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">1</text>
            <text x="460" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="47" y="79" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y'</text>
            <text x="175" y="79" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="235" y="79" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="295" y="79" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="410" y="79" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
          </svg>
        );

      case 'd7_q2_graph':
        return (
          <svg
            viewBox="0 0 340 235"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d7q2-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(170, 185), 1 unit x = 48px, 1 unit y = 42px */}
            {/* y = x^4 - 2x^2 + 2: (-1,1)->(122,143), (0,2)->(170,101), (1,1)->(218,143) */}
            <line x1="30" y1="185" x2="310" y2="185" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d7q2-arr)" />
            <line x1="170" y1="220" x2="170" y2="18" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d7q2-arr)" />
            <text x="302" y="202" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="156" y="26" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="157" y="202" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            <line x1="122" y1="185" x2="122" y2="143" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="218" y1="185" x2="218" y2="143" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="122" y1="143" x2="218" y2="143" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />

            <text x="122" y="202" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">−1</text>
            <text x="218" y="202" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">1</text>
            <text x="162" y="138" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">1</text>
            <text x="162" y="98" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">2</text>

            <path
              d="M 92 25 C 102 95, 112 143, 122 143 C 138 143, 154 101, 170 101 C 186 101, 202 143, 218 143 C 228 143, 238 95, 248 25"
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="2.2"
            />
          </svg>
        );

      case 'd7_q3_bxd':
        return (
          <svg
            viewBox="0 0 580 105"
            className="w-full max-w-xl mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <rect x="10" y="10" width="560" height="85" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="52" x2="570" y2="52" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="85" y1="10" x2="85" y2="95" stroke="#0f172a" strokeWidth="1.4" />

            <text x="47" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="115" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="200" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−2</text>
            <text x="285" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="370" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">2</text>
            <text x="455" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">4</text>
            <text x="540" y="36" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="47" y="79" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">f'(x)</text>
            <text x="157" y="79" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="200" y="79" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="242" y="79" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="285" y="79" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="327" y="79" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="370" y="79" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="412" y="79" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="455" y="79" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="497" y="79" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
          </svg>
        );

      case 'd7_q4_graph':
        return (
          <svg
            viewBox="0 0 340 245"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d7q4-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(125, 135), 1 unit = 32px. TCĐ x=2 -> x=189, TCN y=1 -> y=103 */}
            {/* Ox (-1,0)->(93,135), Oy (0,-1/2)->(125,151) */}
            <line x1="25" y1="135" x2="315" y2="135" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d7q4-arr)" />
            <line x1="125" y1="230" x2="125" y2="18" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d7q4-arr)" />
            <text x="307" y="152" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="112" y="26" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="112" y="152" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            <line x1="189" y1="20" x2="189" y2="225" stroke="#dc2626" strokeWidth="1.4" strokeDasharray="5 3" />
            <line x1="28" y1="103" x2="308" y2="103" stroke="#7c3aed" strokeWidth="1.4" strokeDasharray="5 3" />

            <text x="197" y="152" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13">2</text>
            <text x="116" y="98" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="end">1</text>
            <text x="93" y="128" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="middle">−1</text>

            {/* Left branch */}
            <path
              d="M 32 114 Q 155 125 178 222"
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="2.1"
            />
            {/* Right branch */}
            <path
              d="M 200 22 Q 220 92 305 97"
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="2.1"
            />
          </svg>
        );

      case 'd7_q5_graph':
        return (
          <svg
            viewBox="0 0 340 245"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d7q5-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(135, 190), 1 unit x = 40px, 1 unit y = 34px */}
            {/* y = x^3 - 3x^2 + 4: (-1,0)->(95,190), CĐ(0,4)->(135,54), I(1,2)->(175,122), CT(2,0)->(215,190) */}
            <line x1="25" y1="190" x2="315" y2="190" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d7q5-arr)" />
            <line x1="135" y1="232" x2="135" y2="18" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d7q5-arr)" />
            <text x="307" y="207" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="121" y="26" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="122" y="207" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            <text x="95" y="207" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">−1</text>
            <text x="215" y="207" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">2</text>
            <text x="127" y="58" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">4</text>

            <path
              d="M 86 226 C 102 125, 120 54, 135 54 C 158 54, 192 190, 215 190 C 232 190, 248 115, 264 25"
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="2.2"
            />
          </svg>
        );

      case 'd7_q7_bbt':
        return (
          <svg
            viewBox="0 0 520 185"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d7q7-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="500" height="165" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="48" x2="510" y2="48" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="10" y1="86" x2="510" y2="86" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="85" y1="10" x2="85" y2="175" stroke="#0f172a" strokeWidth="1.4" />

            <text x="47" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="115" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="235" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−1</text>
            <text x="360" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">2</text>
            <text x="480" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="47" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y'</text>
            <text x="175" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="235" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="298" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="360" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="420" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>

            <text x="47" y="136" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y</text>
            <text x="115" y="164" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="235" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">5</text>
            <text x="360" y="164" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−1</text>
            <text x="480" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <line x1="135" y1="152" x2="215" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d7q7-arr)" />
            <line x1="255" y1="112" x2="340" y2="152" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d7q7-arr)" />
            <line x1="380" y1="152" x2="460" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d7q7-arr)" />
          </svg>
        );

      case 'd7_q9_graph':
        return (
          <svg
            viewBox="0 0 340 245"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d7q9-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(175, 130), 1 unit = 32px. TCĐ x=-1 -> x=143, TCN y=1 -> y=98 */}
            {/* Oy (0,-1)->(175, 162), Ox (1,0)->(207, 130) */}
            <line x1="25" y1="130" x2="315" y2="130" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d7q9-arr)" />
            <line x1="175" y1="232" x2="175" y2="16" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d7q9-arr)" />
            <text x="307" y="147" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="162" y="25" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="163" y="146" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            <line x1="143" y1="18" x2="143" y2="228" stroke="#dc2626" strokeWidth="1.4" strokeDasharray="5 3" />
            <line x1="28" y1="98" x2="308" y2="98" stroke="#7c3aed" strokeWidth="1.4" strokeDasharray="5 3" />

            <text x="131" y="146" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="middle">−1</text>
            <text x="184" y="93" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13">1</text>
            <text x="184" y="166" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13">−1</text>
            <text x="207" y="146" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="middle">1</text>

            {/* Left branch */}
            <path
              d="M 32 82 Q 118 76 132 18"
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="2.1"
            />
            {/* Right branch */}
            <path
              d="M 155 226 Q 172 135 305 108"
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="2.1"
            />
          </svg>
        );

      case 'd7_q10_bbt':
        return (
          <svg
            viewBox="0 0 540 190"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d7q10-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="520" height="170" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="48" x2="530" y2="48" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="10" y1="86" x2="530" y2="86" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="85" y1="10" x2="85" y2="180" stroke="#0f172a" strokeWidth="1.4" />

            {/* Double bar at x = -2 (x=250) */}
            <line x1="247" y1="48" x2="247" y2="180" stroke="#0f172a" strokeWidth="1.3" />
            <line x1="253" y1="48" x2="253" y2="180" stroke="#0f172a" strokeWidth="1.3" />

            <text x="47" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="115" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="250" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−2</text>
            <text x="385" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">1</text>
            <text x="500" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="47" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">f'(x)</text>
            <text x="175" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="320" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="385" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="445" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>

            <text x="47" y="138" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">f(x)</text>
            <text x="115" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">2</text>
            <text x="220" y="168" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="280" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>
            <text x="385" y="168" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−3</text>
            <text x="500" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">4</text>

            <line x1="130" y1="112" x2="202" y2="154" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d7q10-arr)" />
            <line x1="300" y1="112" x2="368" y2="154" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d7q10-arr)" />
            <line x1="405" y1="154" x2="482" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d7q10-arr)" />
          </svg>
        );

      case 'd7_p2_q1_graph':
        return (
          <svg
            viewBox="0 0 340 245"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d7p2q1-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(165, 145), 1 unit x = 42px, 1 unit y = 32px */}
            {/* y = x^3 - 3x + 1: CĐ(-1,3)->(123,49), (0,1)->(165,113), CT(1,-1)->(207,177) */}
            <line x1="25" y1="145" x2="315" y2="145" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d7p2q1-arr)" />
            <line x1="165" y1="228" x2="165" y2="18" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d7p2q1-arr)" />
            <text x="306" y="162" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="151" y="26" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="152" y="162" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            <line x1="123" y1="145" x2="123" y2="49" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="123" y1="49" x2="165" y2="49" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="207" y1="145" x2="207" y2="177" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="165" y1="177" x2="207" y2="177" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />

            <text x="123" y="162" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">−1</text>
            <text x="207" y="139" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">1</text>
            <text x="174" y="54" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14">3</text>
            <text x="174" y="117" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14">1</text>
            <text x="157" y="182" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="end">−1</text>

            <path
              d="M 70 220 C 90 112, 108 49, 123 49 C 145 49, 185 177, 207 177 C 222 177, 240 112, 258 25"
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="2.2"
            />
          </svg>
        );

      case 'd7_p2_q2_bbt':
        return (
          <svg
            viewBox="0 0 420 175"
            className="w-full max-w-md mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d7p2q2-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="400" height="155" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="46" x2="410" y2="46" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="10" y1="82" x2="410" y2="82" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="80" y1="10" x2="80" y2="165" stroke="#0f172a" strokeWidth="1.4" />

            <text x="45" y="33" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="115" y="33" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="375" y="33" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="45" y="69" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y'</text>
            <text x="245" y="69" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>

            <text x="45" y="130" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y</text>
            <text x="115" y="105" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">3</text>
            <text x="375" y="152" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">3</text>

            <line x1="135" y1="108" x2="352" y2="146" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d7p2q2-arr)" />
          </svg>
        );

      case 'd7_p3_q3_graph':
        return (
          <svg
            viewBox="0 0 340 245"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d7p3q3-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(125, 135), 1 unit = 32px. TCĐ x=2 -> x=189, TCN y=1 -> y=103 */}
            {/* Oy (0,-1)->(125,167), Ox (-2,0)->(61,135) */}
            <line x1="25" y1="135" x2="315" y2="135" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d7p3q3-arr)" />
            <line x1="125" y1="230" x2="125" y2="18" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d7p3q3-arr)" />
            <text x="307" y="152" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="112" y="26" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="112" y="152" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            <line x1="189" y1="20" x2="189" y2="225" stroke="#dc2626" strokeWidth="1.4" strokeDasharray="5 3" />
            <line x1="28" y1="103" x2="308" y2="103" stroke="#7c3aed" strokeWidth="1.4" strokeDasharray="5 3" />

            <text x="197" y="152" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13">2</text>
            <text x="116" y="98" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="end">1</text>
            <text x="116" y="172" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="end">−1</text>

            {/* Left branch passing (0,-1)->(125,167) */}
            <path
              d="M 32 116 Q 152 135 178 222"
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="2.1"
            />
            {/* Right branch */}
            <path
              d="M 200 22 Q 220 92 305 97"
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="2.1"
            />
          </svg>
        );

      case 'd7_p4_q1_bbt':
        return (
          <svg
            viewBox="0 0 520 195"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d7p4q1-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="500" height="175" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="48" x2="510" y2="48" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="10" y1="86" x2="510" y2="86" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="85" y1="10" x2="85" y2="185" stroke="#0f172a" strokeWidth="1.4" />

            <text x="47" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="115" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="235" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−1</text>
            <text x="360" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">3</text>
            <text x="480" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="47" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y'</text>
            <text x="175" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="235" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="298" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="360" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="420" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>

            <text x="47" y="138" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y</text>
            <text x="115" y="168" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            {/* Fraction 17/3 at x = -1 */}
            <text x="235" y="102" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">17</text>
            <line x1="226" y1="106" x2="244" y2="106" stroke="#0f172a" strokeWidth="1.2" />
            <text x="235" y="121" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" textAnchor="middle">3</text>

            <text x="360" y="168" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−5</text>
            <text x="480" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <line x1="135" y1="156" x2="215" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d7p4q1-arr)" />
            <line x1="255" y1="112" x2="340" y2="156" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d7p4q1-arr)" />
            <line x1="380" y1="156" x2="460" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d7p4q1-arr)" />
          </svg>
        );

      case 'd8_q1_bbt':
        return (
          <svg
            viewBox="0 0 520 185"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d8q1-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="500" height="165" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="48" x2="510" y2="48" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="10" y1="86" x2="510" y2="86" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="85" y1="10" x2="85" y2="175" stroke="#0f172a" strokeWidth="1.4" />

            <text x="47" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="115" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="235" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−1</text>
            <text x="360" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">3</text>
            <text x="480" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="47" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">f'(x)</text>
            <text x="175" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="235" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="298" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="360" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="420" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>

            <text x="47" y="136" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">f(x)</text>
            <text x="115" y="164" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="235" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">4</text>
            <text x="360" y="164" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−2</text>
            <text x="480" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <line x1="135" y1="152" x2="215" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d8q1-arr)" />
            <line x1="255" y1="112" x2="340" y2="152" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d8q1-arr)" />
            <line x1="380" y1="152" x2="460" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d8q1-arr)" />
          </svg>
        );

      case 'd8_q2_graph':
        return (
          <svg
            viewBox="0 0 320 250"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d8q2-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(160, 150), 1 unit = 36px: y = x^3 - 3x + 1. (-1, 3)->(124, 42), (0, 1)->(160, 114), (1, -1)->(196, 186) */}
            <line x1="30" y1="150" x2="295" y2="150" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d8q2-arr)" />
            <line x1="160" y1="235" x2="160" y2="16" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d8q2-arr)" />
            <text x="287" y="167" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="147" y="25" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="148" y="166" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            <line x1="124" y1="150" x2="124" y2="42" stroke="#64748b" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="124" y1="42" x2="160" y2="42" stroke="#64748b" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="196" y1="150" x2="196" y2="186" stroke="#64748b" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="196" y1="186" x2="160" y2="186" stroke="#64748b" strokeWidth="1.2" strokeDasharray="4 3" />

            <text x="124" y="166" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="middle">−1</text>
            <text x="196" y="144" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="middle">1</text>
            <text x="167" y="46" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13">3</text>
            <text x="167" y="116" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13">1</text>
            <text x="143" y="190" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13">−1</text>

            <path
              d={(() => {
                const pts: string[] = [];
                for (let x = -2.08; x <= 2.08; x += 0.04) {
                  const y = x * x * x - 3 * x + 1;
                  const px = 160 + x * 36;
                  const py = 150 - y * 36;
                  pts.push(`${pts.length === 0 ? 'M' : 'L'} ${px.toFixed(1)} ${py.toFixed(1)}`);
                }
                return pts.join(' ');
              })()}
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="2.2"
            />
          </svg>
        );

      case 'd8_q3_graph':
        return (
          <svg
            viewBox="0 0 320 245"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d8q3-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(160, 105), 1 unit = 44px: y = x^4 - 2x^2 - 1 */}
            <line x1="30" y1="105" x2="295" y2="105" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d8q3-arr)" />
            <line x1="160" y1="230" x2="160" y2="16" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d8q3-arr)" />
            <text x="287" y="122" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="147" y="25" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="147" y="100" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            <line x1="116" y1="105" x2="116" y2="193" stroke="#64748b" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="204" y1="105" x2="204" y2="193" stroke="#64748b" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="116" y1="193" x2="204" y2="193" stroke="#64748b" strokeWidth="1.2" strokeDasharray="4 3" />

            <text x="116" y="100" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="middle">−1</text>
            <text x="204" y="100" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="middle">1</text>
            <text x="172" y="148" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13">−1</text>
            <text x="145" y="208" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13">−2</text>

            <path
              d={(() => {
                const pts: string[] = [];
                for (let x = -1.72; x <= 1.72; x += 0.03) {
                  const y = x * x * x * x - 2 * x * x - 1;
                  const px = 160 + x * 44;
                  const py = 105 - y * 44;
                  pts.push(`${pts.length === 0 ? 'M' : 'L'} ${px.toFixed(1)} ${py.toFixed(1)}`);
                }
                return pts.join(' ');
              })()}
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="2.2"
            />
          </svg>
        );

      case 'd8_q4_bbt':
        return (
          <svg
            viewBox="0 0 520 185"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d8q4-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="500" height="165" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="48" x2="510" y2="48" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="10" y1="86" x2="510" y2="86" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="85" y1="10" x2="85" y2="175" stroke="#0f172a" strokeWidth="1.4" />

            <text x="47" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="115" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−2</text>
            <text x="235" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="360" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">2</text>
            <text x="480" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">3</text>

            <text x="47" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y'</text>
            <text x="175" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="235" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="298" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="360" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="420" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>

            <text x="47" y="136" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y</text>
            <text x="115" y="156" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−1</text>
            <text x="235" y="106" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">4</text>
            <text x="360" y="166" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−3</text>
            <text x="480" y="114" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">2</text>

            <line x1="135" y1="146" x2="215" y2="110" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d8q4-arr)" />
            <line x1="255" y1="110" x2="340" y2="156" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d8q4-arr)" />
            <line x1="380" y1="156" x2="460" y2="116" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d8q4-arr)" />
          </svg>
        );

      case 'd8_q5_graph':
        return (
          <svg
            viewBox="0 0 340 250"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d8q5-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(145, 165), 1 unit = 32px: y = (2x+1)/(x-1), TCĐ x=1 (177), TCN y=2 (101) */}
            <line x1="25" y1="165" x2="315" y2="165" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d8q5-arr)" />
            <line x1="145" y1="235" x2="145" y2="16" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d8q5-arr)" />
            <text x="307" y="182" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="132" y="25" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="132" y="181" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            <line x1="177" y1="18" x2="177" y2="232" stroke="#dc2626" strokeWidth="1.4" strokeDasharray="5 3" />
            <line x1="28" y1="101" x2="308" y2="101" stroke="#7c3aed" strokeWidth="1.4" strokeDasharray="5 3" />

            <text x="184" y="181" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13">1</text>
            <text x="132" y="96" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13">2</text>

            <path
              d={(() => {
                const pts: string[] = [];
                for (let x = -3.4; x <= 0.25; x += 0.05) {
                  const y = (2 * x + 1) / (x - 1);
                  const px = 145 + x * 32;
                  const py = 165 - y * 32;
                  pts.push(`${pts.length === 0 ? 'M' : 'L'} ${px.toFixed(1)} ${py.toFixed(1)}`);
                }
                return pts.join(' ');
              })()}
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="2.1"
            />
            <path
              d={(() => {
                const pts: string[] = [];
                for (let x = 1.75; x <= 4.8; x += 0.05) {
                  const y = (2 * x + 1) / (x - 1);
                  const px = 145 + x * 32;
                  const py = 165 - y * 32;
                  pts.push(`${pts.length === 0 ? 'M' : 'L'} ${px.toFixed(1)} ${py.toFixed(1)}`);
                }
                return pts.join(' ');
              })()}
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="2.1"
            />
          </svg>
        );

      case 'd8_q6_graph':
        return (
          <svg
            viewBox="0 0 340 250"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d8q6-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(190, 160), 1 unit = 32px: y = (2x-1)/(x+1), TCĐ x=-1 (158), TCN y=2 (96), qua (0,-1)->(190,192) */}
            <line x1="25" y1="160" x2="315" y2="160" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d8q6-arr)" />
            <line x1="190" y1="235" x2="190" y2="16" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d8q6-arr)" />
            <text x="307" y="177" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="177" y="25" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="196" y="175" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            <line x1="158" y1="18" x2="158" y2="232" stroke="#dc2626" strokeWidth="1.4" strokeDasharray="5 3" />
            <line x1="28" y1="96" x2="308" y2="96" stroke="#7c3aed" strokeWidth="1.4" strokeDasharray="5 3" />

            <text x="145" y="176" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="middle">−1</text>
            <text x="197" y="91" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13">2</text>
            <text x="197" y="196" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13">−1</text>

            <path
              d={(() => {
                const pts: string[] = [];
                for (let x = -4.6; x <= -1.75; x += 0.05) {
                  const y = (2 * x - 1) / (x + 1);
                  const px = 190 + x * 32;
                  const py = 160 - y * 32;
                  pts.push(`${pts.length === 0 ? 'M' : 'L'} ${px.toFixed(1)} ${py.toFixed(1)}`);
                }
                return pts.join(' ');
              })()}
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="2.1"
            />
            <path
              d={(() => {
                const pts: string[] = [];
                for (let x = -0.35; x <= 3.4; x += 0.05) {
                  const y = (2 * x - 1) / (x + 1);
                  const px = 190 + x * 32;
                  const py = 160 - y * 32;
                  pts.push(`${pts.length === 0 ? 'M' : 'L'} ${px.toFixed(1)} ${py.toFixed(1)}`);
                }
                return pts.join(' ');
              })()}
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="2.1"
            />
          </svg>
        );

      case 'd8_q7_graph':
        return (
          <svg
            viewBox="0 0 320 250"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d8q7-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(125, 190), x unit = 40px, y unit = 28px: y = -x^3 + 3x^2 + 1. (0,1)->(125,162), (2,5)->(205,50) */}
            <line x1="30" y1="190" x2="295" y2="190" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d8q7-arr)" />
            <line x1="125" y1="235" x2="125" y2="16" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d8q7-arr)" />
            <text x="287" y="207" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="112" y="25" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="112" y="206" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            <line x1="205" y1="190" x2="205" y2="50" stroke="#64748b" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="205" y1="50" x2="125" y2="50" stroke="#64748b" strokeWidth="1.2" strokeDasharray="4 3" />

            <text x="205" y="206" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="middle">2</text>
            <text x="113" y="166" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13">1</text>
            <text x="113" y="54" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13">5</text>

            <path
              d={(() => {
                const pts: string[] = [];
                for (let x = -0.95; x <= 3.12; x += 0.04) {
                  const y = -x * x * x + 3 * x * x + 1;
                  const px = 125 + x * 40;
                  const py = 190 - y * 28;
                  pts.push(`${pts.length === 0 ? 'M' : 'L'} ${px.toFixed(1)} ${py.toFixed(1)}`);
                }
                return pts.join(' ');
              })()}
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="2.2"
            />
          </svg>
        );

      case 'd8_q10_bxd':
        return (
          <svg
            viewBox="0 0 560 110"
            className="w-full max-w-xl mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <rect x="10" y="10" width="540" height="90" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="55" x2="550" y2="55" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="85" y1="10" x2="85" y2="100" stroke="#0f172a" strokeWidth="1.4" />

            {/* Double vertical line at x = 0 (x=295) */}
            <line x1="292" y1="55" x2="292" y2="100" stroke="#0f172a" strokeWidth="1.3" />
            <line x1="298" y1="55" x2="298" y2="100" stroke="#0f172a" strokeWidth="1.3" />

            <text x="47" y="38" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="115" y="38" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="205" y="38" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−2</text>
            <text x="295" y="38" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="385" y="38" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">2</text>
            <text x="465" y="38" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">4</text>
            <text x="525" y="38" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="47" y="83" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">f'(x)</text>
            <text x="160" y="83" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="205" y="83" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="250" y="83" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="340" y="83" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="385" y="83" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="425" y="83" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="465" y="83" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="500" y="83" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
          </svg>
        );

      case 'd8_q11_bbt':
        return (
          <svg
            viewBox="0 0 540 190"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d8q11-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="520" height="170" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="48" x2="530" y2="48" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="10" y1="86" x2="530" y2="86" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="85" y1="10" x2="85" y2="180" stroke="#0f172a" strokeWidth="1.4" />

            {/* Double bar at x = 0 (x=250) */}
            <line x1="247" y1="48" x2="247" y2="180" stroke="#0f172a" strokeWidth="1.3" />
            <line x1="253" y1="48" x2="253" y2="180" stroke="#0f172a" strokeWidth="1.3" />

            <text x="47" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="115" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="250" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="385" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">2</text>
            <text x="500" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="47" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y'</text>
            <text x="175" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="320" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="385" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="445" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>

            <text x="47" y="138" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y</text>
            <text x="115" y="110" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−1</text>
            <text x="222" y="168" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="280" y="110" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>
            <text x="385" y="168" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">1</text>
            <text x="500" y="110" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">3</text>

            <line x1="132" y1="114" x2="202" y2="156" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d8q11-arr)" />
            <line x1="298" y1="114" x2="368" y2="156" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d8q11-arr)" />
            <line x1="402" y1="156" x2="482" y2="114" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d8q11-arr)" />
          </svg>
        );

      case 'd8_p2_q1_bbt':
        return (
          <svg
            viewBox="0 0 540 190"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d8p2q1-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="520" height="170" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="48" x2="530" y2="48" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="10" y1="86" x2="530" y2="86" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="85" y1="10" x2="85" y2="180" stroke="#0f172a" strokeWidth="1.4" />

            {/* Double bar at x = 1 (x=355) */}
            <line x1="352" y1="48" x2="352" y2="180" stroke="#0f172a" strokeWidth="1.3" />
            <line x1="358" y1="48" x2="358" y2="180" stroke="#0f172a" strokeWidth="1.3" />

            <text x="47" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="115" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="235" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−1</text>
            <text x="355" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">1</text>
            <text x="500" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="47" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">f'(x)</text>
            <text x="175" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="235" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="295" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="430" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>

            <text x="47" y="138" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">f(x)</text>
            <text x="115" y="168" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="235" y="110" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">3</text>
            <text x="328" y="168" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="385" y="110" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>
            <text x="500" y="168" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">2</text>

            <line x1="132" y1="156" x2="215" y2="114" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d8p2q1-arr)" />
            <line x1="252" y1="114" x2="312" y2="156" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d8p2q1-arr)" />
            <line x1="402" y1="114" x2="482" y2="156" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d8p2q1-arr)" />
          </svg>
        );

      case 'd8_p2_q2_graph':
        return (
          <svg
            viewBox="0 0 320 250"
            className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d8p2q2-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            {/* O(155, 150), 1 unit = 36px: y = -x^3 + 3x + 1. (-1,-1)->(119,186), (0,1)->(155,114), (1,3)->(191,42), (2,-1)->(227,186) */}
            <line x1="30" y1="150" x2="295" y2="150" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d8p2q2-arr)" />
            <line x1="155" y1="235" x2="155" y2="16" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#d8p2q2-arr)" />
            <text x="287" y="167" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">x</text>
            <text x="142" y="25" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic">y</text>
            <text x="142" y="166" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>

            <line x1="119" y1="150" x2="119" y2="186" stroke="#64748b" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="119" y1="186" x2="227" y2="186" stroke="#64748b" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="227" y1="150" x2="227" y2="186" stroke="#64748b" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="191" y1="150" x2="191" y2="42" stroke="#64748b" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="191" y1="42" x2="155" y2="42" stroke="#64748b" strokeWidth="1.2" strokeDasharray="4 3" />

            <text x="119" y="144" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="middle">−1</text>
            <text x="191" y="166" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="middle">1</text>
            <text x="227" y="144" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13" textAnchor="middle">2</text>
            <text x="142" y="46" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13">3</text>
            <text x="142" y="114" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13">1</text>
            <text x="162" y="200" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="13">−1</text>

            <path
              d={(() => {
                const pts: string[] = [];
                for (let x = -2.08; x <= 2.12; x += 0.04) {
                  const y = -x * x * x + 3 * x + 1;
                  const px = 155 + x * 36;
                  const py = 150 - y * 36;
                  pts.push(`${pts.length === 0 ? 'M' : 'L'} ${px.toFixed(1)} ${py.toFixed(1)}`);
                }
                return pts.join(' ');
              })()}
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="2.2"
            />
          </svg>
        );

      case 'd8_p4_q1_bbt':
        return (
          <svg
            viewBox="0 0 520 185"
            className="w-full max-w-lg mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d8p4q1-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="500" height="165" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="48" x2="510" y2="48" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="10" y1="86" x2="510" y2="86" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="85" y1="10" x2="85" y2="175" stroke="#0f172a" strokeWidth="1.4" />

            <text x="47" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="115" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>
            <text x="235" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−1</text>
            <text x="360" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">3</text>
            <text x="480" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="47" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y'</text>
            <text x="175" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="235" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="298" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>
            <text x="360" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="420" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>

            <text x="47" y="136" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">y</text>
            <text x="115" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>
            <text x="235" y="164" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−7</text>
            <text x="360" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">25</text>
            <text x="480" y="164" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−∞</text>

            <line x1="135" y1="112" x2="215" y2="152" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d8p4q1-arr)" />
            <line x1="255" y1="152" x2="340" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d8p4q1-arr)" />
            <line x1="380" y1="112" x2="460" y2="152" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d8p4q1-arr)" />
          </svg>
        );

      case 'd8_p4_q3_bbt':
        return (
          <svg
            viewBox="0 0 460 185"
            className="w-full max-w-md mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
          >
            <defs>
              <marker id="d8p4q3-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
              </marker>
            </defs>
            <rect x="10" y="10" width="440" height="165" fill="#ffffff" stroke="#0f172a" strokeWidth="1.6" />
            <line x1="10" y1="48" x2="450" y2="48" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="10" y1="86" x2="450" y2="86" stroke="#0f172a" strokeWidth="1.4" />
            <line x1="95" y1="10" x2="95" y2="175" stroke="#0f172a" strokeWidth="1.4" />

            <text x="52" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" textAnchor="middle">x</text>
            <text x="125" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="275" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">30</text>
            <text x="415" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <text x="52" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" textAnchor="middle">C̄'(x)</text>
            <text x="200" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">−</text>
            <text x="275" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">0</text>
            <text x="345" y="72" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+</text>

            <text x="52" y="136" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" textAnchor="middle">C̄(x)</text>
            <text x="125" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>
            <text x="275" y="164" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">90</text>
            <text x="415" y="108" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" textAnchor="middle">+∞</text>

            <line x1="145" y1="112" x2="255" y2="152" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d8p4q3-arr)" />
            <line x1="295" y1="152" x2="395" y2="112" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#d8p4q3-arr)" />
          </svg>
        );

      default: {
        const spaceSvg = renderSpaceTikzSvg(type);
        if (spaceSvg) {
          return spaceSvg;
        }
        if (tikzCode && tikzCode.trim()) {
          return renderCustomTikzToSvg(tikzCode);
        }
        return null;
      }
    }
  };

  const renderedSvg = renderSvgDiagram();
  if (!renderedSvg && !imageUrl) return null;

  return (
    <div className={`rounded-xl border border-sky-900/60 bg-[#060e20] p-2 sm:p-4 shadow-inner space-y-2 my-2.5 sm:my-3 ${className}`}>
      {caption && (
        <div className="text-sky-300 font-semibold text-[11px] sm:text-xs">
          {caption}
        </div>
      )}

      {/* Hình ảnh gốc trích xuất từ Word / PDF (nếu có) */}
      {imageUrl && (
        <div className="flex justify-center items-center py-1 sm:py-2 overflow-x-auto">
          <div className="bg-white p-2 sm:p-3 rounded-lg border border-slate-300 shadow-xs max-w-lg w-full flex justify-center">
            <img
              src={imageUrl}
              alt={caption || 'Hình vẽ câu hỏi'}
              className="max-w-full max-h-[320px] w-auto h-auto object-contain rounded"
              loading="lazy"
            />
          </div>
        </div>
      )}

      {/* Vector Figure Container */}
      {renderedSvg && !imageUrl && (
        <div className="flex justify-center items-center py-1 sm:py-2 overflow-x-auto">
          {renderedSvg}
        </div>
      )}
    </div>
  );
};
