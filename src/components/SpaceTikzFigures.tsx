import React from 'react';

const MATH_SERIF = '"Times New Roman", Times, "KaTeX_Main", "Computer Modern Serif", Georgia, serif';

export function getSpaceTikzCode(type?: string): string {
  switch (type) {
    case 'sp_box_abcd':
      return `% TikZ 3D: Hình hộp / Hình lập phương ABCD.A'B'C'D' và quy tắc hình hộp
\\begin{tikzpicture}[>=stealth, scale=1]
  \\coordinate (A) at (0,0);
  \\coordinate (B) at (3.2,0);
  \\coordinate (D) at (1.3,1.1);
  \\coordinate (C) at (4.5,1.1);
  \\coordinate (A1) at (0,2.6);
  \\coordinate (B1) at (3.2,2.6);
  \\coordinate (D1) at (1.3,3.7);
  \\coordinate (C1) at (4.5,3.7);
  \\draw[dashed] (A) -- (D) -- (C) (D) -- (D1) (A) -- (C);
  \\draw[thick] (A) -- (B) -- (C) -- (C1) -- (D1) -- (A1) -- (A) (A1) -- (B1) -- (C1) (B) -- (B1);
  \\draw[->, very thick, blue!80!black] (A) -- (B);
  \\draw[->, very thick, blue!80!black, dashed] (A) -- (D);
  \\draw[->, very thick, blue!80!black] (A) -- (A1);
  \\draw[->, very thick, red!80!black, dashed] (A) -- (C1);
\\end{tikzpicture}`;

    case 'sp_box_a1bd_g':
      return `% TikZ 3D: Hình hộp ABCD.A'B'C'D' với trọng tâm G của tam giác A'BD trên đường chéo AC'
\\begin{tikzpicture}[>=stealth, scale=1]
  \\coordinate (A) at (0,0);
  \\coordinate (B) at (3.2,0);
  \\coordinate (D) at (1.3,1.1);
  \\coordinate (C) at (4.5,1.1);
  \\coordinate (A1) at (0,2.6);
  \\coordinate (B1) at (3.2,2.6);
  \\coordinate (D1) at (1.3,3.7);
  \\coordinate (C1) at (4.5,3.7);
  \\fill[cyan!15, opacity=0.7] (A1) -- (B) -- (D) -- cycle;
  \\draw[dashed] (A) -- (D) -- (C) (D) -- (D1) (B) -- (D) (A1) -- (D);
  \\draw[thick] (A) -- (B) -- (C) -- (C1) -- (D1) -- (A1) -- (A) (A1) -- (B1) -- (C1) (B) -- (B1) (A1) -- (B);
  \\draw[->, very thick, red!80!black, dashed] (A) -- (C1);
\\end{tikzpicture}`;

    case 'sp_tetra_abcd':
      return `% TikZ 3D: Tứ diện đều ABCD cạnh a trong không gian
\\begin{tikzpicture}[>=stealth, scale=1]
  \\coordinate (A) at (2.1,3.4);
  \\coordinate (B) at (0,0.6);
  \\coordinate (C) at (2.6,0);
  \\coordinate (D) at (4.2,1.1);
  \\draw[dashed, thick] (B) -- (D);
  \\draw[thick] (A) -- (B) -- (C) -- (D) -- (A) -- (C);
  \\draw[->, very thick, blue!80!black] (A) -- (B);
  \\draw[->, very thick, blue!80!black] (A) -- (C);
  \\draw[->, very thick, red!80!black] (C) -- (D);
\\end{tikzpicture}`;

    case 'sp_tetra_mn':
      return `% TikZ 3D: Tứ diện ABCD với M, N là trung điểm AB và CD
\\begin{tikzpicture}[>=stealth, scale=1]
  \\coordinate (A) at (2.0,3.4);
  \\coordinate (B) at (0,0.6);
  \\coordinate (C) at (2.6,0);
  \\coordinate (D) at (4.2,1.1);
  \\coordinate (M) at (1.0,2.0);
  \\coordinate (N) at (3.4,0.55);
  \\draw[dashed] (B) -- (D);
  \\draw[->, dashed, very thick, red!80!black] (M) -- (N);
  \\draw[thick] (A) -- (B) -- (C) -- (D) -- (A) -- (C);
\\end{tikzpicture}`;

    case 'sp_tetra_centroid_g':
      return `% TikZ 3D: Tứ diện đều ABCD với trung điểm M của BC và trọng tâm G của tam giác BCD
\\begin{tikzpicture}[>=stealth, scale=1]
  \\coordinate (A) at (2.1,3.5);
  \\coordinate (B) at (0,0.6);
  \\coordinate (C) at (2.6,0);
  \\coordinate (D) at (4.2,1.1);
  \\coordinate (M) at (1.3,0.3);
  \\coordinate (G) at (2.27,0.57);
  \\draw[dashed] (B) -- (D) (D) -- (M) (A) -- (G);
  \\draw[thick] (A) -- (B) -- (C) -- (D) -- (A) -- (C) (A) -- (M);
\\end{tikzpicture}`;

    case 'sp_triangle_space_mg':
      return `% TikZ 3D: Điểm M trong không gian và tam giác ABC có trọng tâm G
\\begin{tikzpicture}[>=stealth, scale=1]
  \\coordinate (M) at (2.1,3.4);
  \\coordinate (A) at (0,0.7);
  \\coordinate (B) at (2.5,0);
  \\coordinate (C) at (4.2,1.0);
  \\coordinate (G) at (2.23,0.57);
  \\draw[dashed] (A) -- (C);
  \\draw[thick] (A) -- (B) -- (C);
  \\draw[->, thick, blue!80!black] (M) -- (A);
  \\draw[->, thick, blue!80!black] (M) -- (B);
  \\draw[->, thick, blue!80!black] (M) -- (C);
  \\draw[->, very thick, red!80!black, dashed] (M) -- (G);
\\end{tikzpicture}`;

    case 'sp_pyramid_sabcd':
      return `% TikZ 3D: Hình chóp S.ABCD có đáy ABCD là hình bình hành tâm O
\\begin{tikzpicture}[>=stealth, scale=1]
  \\coordinate (S) at (2.1,3.6);
  \\coordinate (A) at (1.1,1.3);
  \\coordinate (B) at (0,0);
  \\coordinate (C) at (3.2,0);
  \\coordinate (D) at (4.3,1.3);
  \\coordinate (O) at (2.15,0.65);
  \\draw[dashed] (A) -- (B) (A) -- (D) (S) -- (A) (A) -- (C) (B) -- (D);
  \\draw[->, dashed, very thick, red!80!black] (S) -- (O);
  \\draw[thick] (S) -- (B) -- (C) -- (D) -- (S) -- (C);
\\end{tikzpicture}`;

    case 'sp_pyramid_sa_perp':
      return `% TikZ 3D: Hình chóp S.ABCD có đáy ABCD là hình vuông và SA vuông góc với đáy
\\begin{tikzpicture}[>=stealth, scale=1]
  \\coordinate (A) at (1.1,1.3);
  \\coordinate (S) at (1.1,3.7);
  \\coordinate (B) at (0,0);
  \\coordinate (C) at (3.2,0);
  \\coordinate (D) at (4.3,1.3);
  \\draw[dashed] (S) -- (A) (A) -- (B) (A) -- (D) (A) -- (C) (B) -- (D);
  \\draw[thick] (S) -- (B) -- (C) -- (D) -- (S) -- (C);
\\end{tikzpicture}`;

    case 'sp_prism_abca1b1c1':
      return `% TikZ 3D: Hình lăng trụ tam giác đều ABC.A'B'C'
\\begin{tikzpicture}[>=stealth, scale=1]
  \\coordinate (A) at (0,0.8);
  \\coordinate (B) at (2.1,0);
  \\coordinate (C) at (3.6,0.8);
  \\coordinate (A1) at (0,3.3);
  \\coordinate (B1) at (2.1,2.5);
  \\coordinate (C1) at (3.6,3.3);
  \\draw[dashed] (A) -- (C);
  \\draw[thick] (A) -- (B) -- (C) -- (C1) -- (A1) -- (B1) -- (C1) (A) -- (A1) (B) -- (B1);
  \\draw[->, very thick, red!80!black] (A) -- (B1);
\\end{tikzpicture}`;

    case 'sp_chandelier_oabc':
      return `% TikZ 3D: Mô hình đèn chùm treo cân bằng bởi 3 dây OA, OB, OC đôi một vuông góc
\\begin{tikzpicture}[>=stealth, scale=1]
  \\coordinate (O) at (2.1,1.8);
  \\coordinate (A) at (0.6,2.9);
  \\coordinate (B) at (3.6,2.9);
  \\coordinate (C) at (2.1,3.5);
  \\coordinate (P) at (2.1,0.2);
  \\draw[->, very thick, blue!80!black] (O) -- (A);
  \\draw[->, very thick, blue!80!black] (O) -- (B);
  \\draw[->, very thick, blue!80!black] (O) -- (C);
  \\draw[->, very thick, red!80!black] (O) -- (P);
\\end{tikzpicture}`;

    case 'sp_oxyz_point_proj':
      return `% TikZ 3D: Hệ trục tọa độ Oxyz, điểm M(x;y;z) và các hình chiếu vuông góc
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[->, thick] (0,0) -- (-1.6,-1.2) node[below left] {$x$};
  \\draw[->, thick] (0,0) -- (3.4,0) node[right] {$y$};
  \\draw[->, thick] (0,0) -- (0,3.2) node[above] {$z$};
  \\coordinate (H) at (1.5,-0.7);
  \\coordinate (M) at (1.5,1.6);
  \\draw[dashed] (-0.9,-0.7) -- (H) -- (2.4,0) (H) -- (M) -- (0,2.3);
  \\draw[->, very thick, red!80!black] (0,0) -- (M);
\\end{tikzpicture}`;

    case 'sp_oxyz_box':
      return `% TikZ 3D: Hình hộp chữ nhật gắn vào hệ trục tọa độ Oxyz
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[->, thick] (0,0) -- (-1.8,-1.35) node[below left] {$x$};
  \\draw[->, thick] (0,0) -- (3.6,0) node[right] {$y$};
  \\draw[->, thick] (0,0) -- (0,3.2) node[above] {$z$};
\\end{tikzpicture}`;

    case 'sp_oxyz_parallelogram':
      return `% TikZ 3D: Hình bình hành ABCD trong không gian Oxyz
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[->, thick] (0,0) -- (-1.4,-1.05) node[below left] {$x$};
  \\draw[->, thick] (0,0) -- (3.5,0) node[right] {$y$};
  \\draw[->, thick] (0,0) -- (0,3.0) node[above] {$z$};
\\end{tikzpicture}`;

    case 'sp_oxyz_tetra_oabc':
      return `% TikZ 3D: Tứ diện OABC với A, B, C trên ba trục Ox, Oy, Oz
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[->, thick] (0,0) -- (-1.7,-1.25) node[below left] {$x$};
  \\draw[->, thick] (0,0) -- (3.4,0) node[right] {$y$};
  \\draw[->, thick] (0,0) -- (0,3.1) node[above] {$z$};
  \\fill[cyan!15, opacity=0.75] (-1.1,-0.8) -- (2.5,0) -- (0,2.3) -- cycle;
  \\draw[thick, blue!80!black] (-1.1,-0.8) -- (2.5,0) -- (0,2.3) -- cycle;
\\end{tikzpicture}`;

    case 'sp_oxyz_triangle_abc':
      return `% TikZ 3D: Tam giác ABC và trọng tâm G trong hệ trục tọa độ Oxyz
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[->, thick] (0,0) -- (-1.5,-1.1) node[below left] {$x$};
  \\draw[->, thick] (0,0) -- (3.5,0) node[right] {$y$};
  \\draw[->, thick] (0,0) -- (0,3.1) node[above] {$z$};
\\end{tikzpicture}`;

    case 'sp_oxyz_flight_trajectory':
      return `% TikZ 3D: Quỹ đạo bay từ A đến B trong hệ trục tọa độ không gian Oxyz
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[->, thick] (0,0) -- (-1.6,-1.2) node[below left] {$x$};
  \\draw[->, thick] (0,0) -- (3.6,0) node[right] {$y$};
  \\draw[->, thick] (0,0) -- (0,3.1) node[above] {$z$};
\\end{tikzpicture}`;

    case 'sp_oxyz_forces_3d':
      return `% TikZ 3D: Hợp lực của ba lực F1, F2, F3 tác dụng tại điểm M trong không gian Oxyz
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[->, thick] (0,0) -- (-1.5,-1.1) node[below left] {$x$};
  \\draw[->, thick] (0,0) -- (3.5,0) node[right] {$y$};
  \\draw[->, thick] (0,0) -- (0,3.1) node[above] {$z$};
\\end{tikzpicture}`;

    case 'sp_open_box_xh':
      return `% TikZ 3D: Hình hộp chữ nhật đáy hình vuông cạnh x, chiều cao h
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[dashed] (0,0) -- (1.1,0.9) -- (3.9,0.9) (1.1,0.9) -- (1.1,2.7);
  \\draw[thick] (0,0) -- (2.8,0) -- (3.9,0.9) -- (3.9,2.7) -- (1.1,2.7) -- (0,1.8) -- cycle;
  \\draw[thick] (0,1.8) -- (2.8,1.8) -- (3.9,2.7) (2.8,0) -- (2.8,1.8);
\\end{tikzpicture}`;

    case 'sp_cylinder_rh':
      return `% TikZ 3D: Hình trụ tròn xoay bán kính đáy R, chiều cao h
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,2.4) ellipse (1.5 and 0.45);
  \\draw[thick] (-1.5,0) arc (180:360:1.5 and 0.45);
  \\draw[dashed] (1.5,0) arc (0:180:1.5 and 0.45);
  \\draw[thick] (-1.5,0) -- (-1.5,2.4) (1.5,0) -- (1.5,2.4);
  \\draw[dashed] (0,0) -- (0,2.4) -- (1.5,2.4);
\\end{tikzpicture}`;

    case 'sp_sheet_cut_box':
      return `% TikZ 3D: Cắt 4 góc hình vuông cạnh x của tấm nhôm và gập thành hình hộp không nắp
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[thick] (0,0) rectangle (3.2,2.2);
  \\draw[dashed] (0.45,0) -- (0.45,2.2) (2.75,0) -- (2.75,2.2) (0,0.45) -- (3.2,0.45) (0,1.75) -- (3.2,1.75);
\\end{tikzpicture}`;

    case 'sp_integral_area_curve':
      return `% TikZ: Diện tích hình phẳng giới hạn bởi y = f(x), y = g(x) và x = a, x = b
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[->, thick] (-0.5,0) -- (4.2,0) node[below] {$x$};
  \\draw[->, thick] (0,-0.5) -- (0,3.0) node[left] {$y$};
  \\fill[cyan!25, opacity=0.7] plot[smooth, domain=0.8:3.2] (\\x, {2.1 + 0.45*sin((\\x-0.8)*120)}) -- plot[smooth, domain=3.2:0.8] (\\x, {0.7 + 0.15*(\\x-2)^2}) -- cycle;
  \\draw[very thick, blue!80!black, domain=0.5:3.5, smooth] plot (\\x, {2.1 + 0.45*sin((\\x-0.8)*120)}) node[right] {$y=f(x)$};
  \\draw[very thick, red!80!black, domain=0.5:3.5, smooth] plot (\\x, {0.7 + 0.15*(\\x-2)^2}) node[right] {$y=g(x)$};
  \\draw[dashed] (0.8,0) node[below] {$a$} -- (0.8,2.1) (3.2,0) node[below] {$b$} -- (3.2,2.3);
\\end{tikzpicture}`;

    case 'sp_solid_of_revolution':
      return `% TikZ 3D: Khối tròn xoay khi quay hình phẳng quanh trục Ox
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[->, thick] (-0.5,0) -- (4.5,0) node[below] {$x$};
  \\draw[->, thick] (0,-1.6) -- (0,1.8) node[left] {$y$};
  \\draw[very thick, blue!80!black, domain=0.8:3.4, smooth] plot (\\x, {0.85 + 0.35*sin((\\x-0.8)*110)});
  \\draw[very thick, blue!80!black, domain=0.8:3.4, smooth] plot (\\x, {-0.85 - 0.35*sin((\\x-0.8)*110)});
  \\draw[thick] (0.8,0) ellipse (0.22 and 0.85);
  \\draw[thick] (3.4,0) ellipse (0.28 and 1.05);
\\end{tikzpicture}`;

    case 'sp_oxyz_plane_normal':
      return `% TikZ 3D: Mặt phẳng (alpha) đi qua M0 với vectơ pháp tuyến n = [u, v] và khoảng cách MH
\\begin{tikzpicture}[>=stealth, scale=1]
  \\fill[cyan!15] (0,0) -- (3.2,0) -- (4.3,1.4) -- (1.1,1.4) -- cycle;
  \\draw[thick] (0,0) -- (3.2,0) -- (4.3,1.4) -- (1.1,1.4) -- cycle;
  \\draw[->, very thick, red!80!black] (1.8,0.7) -- (1.8,2.6) node[left] {$\\vec{n}$};
  \\draw[->, thick, blue!80!black] (1.8,0.7) -- (2.9,0.45) node[below] {$\\vec{u}$};
  \\draw[->, thick, blue!80!black] (1.8,0.7) -- (2.5,1.2) node[right] {$\\vec{v}$};
\\end{tikzpicture}`;

    case 'sp_oxyz_plane_intercepts':
      return `% TikZ 3D: Mặt phẳng (alpha) cắt 3 trục tọa độ tại A(a;0;0), B(0;b;0), C(0;0;c)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[->, thick] (0,0) -- (-1.6,-1.2) node[below left] {$x$};
  \\draw[->, thick] (0,0) -- (3.4,0) node[right] {$y$};
  \\draw[->, thick] (0,0) -- (0,3.1) node[above] {$z$};
  \\fill[cyan!20, opacity=0.75] (-1.1,-0.82) -- (2.5,0) -- (0,2.3) -- cycle;
  \\draw[very thick, blue!80!black] (-1.1,-0.82) -- (2.5,0) -- (0,2.3) -- cycle;
\\end{tikzpicture}`;

    case 'sp_oxyz_line_3d':
      return `% TikZ 3D: Đường thẳng Delta đi qua M0(x0;y0;z0) với vectơ chỉ phương u(a;b;c)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[->, thick] (0,0) -- (-1.5,-1.1) node[below left] {$x$};
  \\draw[->, thick] (0,0) -- (3.5,0) node[right] {$y$};
  \\draw[->, thick] (0,0) -- (0,3.0) node[above] {$z$};
  \\draw[thick, blue!80!black] (-0.6,0.8) -- (3.3,2.5) node[right] {$\\Delta$};
  \\draw[->, very thick, red!80!black] (0.9,1.45) -- (2.2,2.02) node[above] {$\\vec{u}$};
\\end{tikzpicture}`;

    case 'sp_oxyz_angle_line_plane':
      return `% TikZ 3D: Góc giữa đường thẳng Delta (VTCP u) và mặt phẳng (P) (VTPT n)
\\begin{tikzpicture}[>=stealth, scale=1]
  \\fill[cyan!15] (0,0) -- (3.4,0) -- (4.4,1.3) -- (1.0,1.3) -- cycle;
  \\draw[thick] (0,0) -- (3.4,0) -- (4.4,1.3) -- (1.0,1.3) -- cycle;
  \\draw[->, very thick, red!80!black] (1.6,0.65) -- (1.6,2.7) node[left] {$\\vec{n}$};
  \\draw[->, very thick, blue!80!black] (1.6,0.65) -- (3.2,2.45) node[right] {$\\vec{u}$};
  \\draw[dashed] (3.2,2.45) -- (3.2,0.65) -- (1.6,0.65);
\\end{tikzpicture}`;

    case 'sp_oxyz_sphere':
      return `% TikZ 3D: Mặt cầu (S) tâm I(a;b;c) bán kính R trong không gian Oxyz
\\begin{tikzpicture}[>=stealth, scale=1]
  \\draw[->, thick] (0,0) -- (-1.4,-1.05) node[below left] {$x$};
  \\draw[->, thick] (0,0) -- (3.6,0) node[right] {$y$};
  \\draw[->, thick] (0,0) -- (0,3.1) node[above] {$z$};
  \\draw[thick, blue!80!black] (1.8,1.5) circle (1.15);
  \\draw[thick, blue!80!black] (0.65,1.5) arc (180:360:1.15 and 0.35);
  \\draw[dashed, blue!80!black] (2.95,1.5) arc (0:180:1.15 and 0.35);
  \\draw[->, very thick, red!80!black] (1.8,1.5) -- (2.75,2.15) node[midway, above] {$R$};
\\end{tikzpicture}`;

    case 'sp_prob_tree_bayes':
      return `% TikZ: Sơ đồ hình cây xác suất có điều kiện - Công thức toàn phần & Bayes
\\begin{tikzpicture}[>=stealth, scale=1]
  \\node[circle, draw, thick] (O) at (0,1.5) {$\\Omega$};
  \\node[rectangle, draw, thick, fill=cyan!10] (A) at (2.0,2.4) {$A$};
  \\node[rectangle, draw, thick, fill=cyan!10] (Ac) at (2.0,0.6) {$\\overline{A}$};
  \\node[rectangle, draw, thick, fill=amber!15] (B1) at (4.3,2.85) {$B$};
  \\node[rectangle, draw, thick] (Bc1) at (4.3,1.95) {$\\overline{B}$};
  \\node[rectangle, draw, thick, fill=amber!15] (B2) at (4.3,1.05) {$B$};
  \\node[rectangle, draw, thick] (Bc2) at (4.3,0.15) {$\\overline{B}$};
  \\draw[->, thick] (O) -- (A) node[midway, above left] {$P(A)$};
  \\draw[->, thick] (O) -- (Ac) node[midway, below left] {$P(\\overline{A})$};
  \\draw[->, thick] (A) -- (B1) node[midway, above] {$P(B|A)$};
  \\draw[->, thick] (A) -- (Bc1);
  \\draw[->, thick] (Ac) -- (B2) node[midway, above] {$P(B|\\overline{A})$};
  \\draw[->, thick] (Ac) -- (Bc2);
\\end{tikzpicture}`;

    default:
      return '';
  }
}

export function renderSpaceTikzSvg(type?: string): React.ReactNode {
  switch (type) {
    /* =====================================================================
       1. HÌNH HỘP / LẬP PHƯƠNG ABCD.A'B'C'D' & QUY TẮC HÌNH HỘP
       ===================================================================== */
    case 'sp_box_abcd':
      return (
        <svg
          viewBox="0 0 410 250"
          className="w-full max-w-md mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
        >
          <defs>
            <marker id="spbox-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#1d4ed8" />
            </marker>
            <marker id="spbox-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#dc2626" />
            </marker>
          </defs>

          {/* Đỉnh: A(125,140) sau-trái, B(60,200) trước-trái, C(265,200) trước-phải, D(330,140) sau-phải
                     A'(125,38), B'(60,98), C'(265,98), D'(330,38) */}
          {/* Các đường nét đứt khuất xuất phát từ đỉnh khuất A */}
          <line x1="125" y1="140" x2="64" y2="196" stroke="#1d4ed8" strokeWidth="2.1" strokeDasharray="5 3" markerEnd="url(#spbox-blue)" />
          <line x1="125" y1="140" x2="324" y2="140" stroke="#1d4ed8" strokeWidth="2.1" strokeDasharray="5 3" markerEnd="url(#spbox-blue)" />
          <line x1="125" y1="140" x2="125" y2="44" stroke="#1d4ed8" strokeWidth="2.1" strokeDasharray="5 3" markerEnd="url(#spbox-blue)" />
          {/* Đường chéo đáy AC nét đứt mảnh */}
          <line x1="125" y1="140" x2="265" y2="200" stroke="#64748b" strokeWidth="1.3" strokeDasharray="4 3" />
          {/* Đường chéo mặt trên B'D' nét liền mảnh */}
          <line x1="60" y1="98" x2="330" y2="38" stroke="#0284c7" strokeWidth="1.3" strokeDasharray="3 2" />
          {/* Vectơ đường chéo không gian AC' màu đỏ */}
          <line x1="125" y1="140" x2="260" y2="100" stroke="#dc2626" strokeWidth="2.4" strokeDasharray="6 3" markerEnd="url(#spbox-red)" />

          {/* Các cạnh nhìn thấy vẽ nét liền đậm chuẩn TikZ */}
          <polygon points="60,200 265,200 330,140 330,38 125,38 60,98" fill="none" stroke="#0f172a" strokeWidth="1.8" />
          <line x1="60" y1="98" x2="265" y2="98" stroke="#0f172a" strokeWidth="1.8" />
          <line x1="265" y1="98" x2="330" y2="38" stroke="#0f172a" strokeWidth="1.8" />
          <line x1="265" y1="200" x2="265" y2="98" stroke="#0f172a" strokeWidth="1.8" />

          {/* Chấm tròn tại các đỉnh */}
          {[
            [125, 140],
            [60, 200],
            [265, 200],
            [330, 140],
            [125, 38],
            [60, 98],
            [265, 98],
            [330, 38],
          ].map(([cx, cy], idx) => (
            <circle key={idx} cx={cx} cy={cy} r="3" fill="#0f172a" />
          ))}

          {/* Nhãn các đỉnh chuẩn SGK */}
          <text x="132" y="156" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">A</text>
          <text x="42" y="212" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">B</text>
          <text x="268" y="216" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">C</text>
          <text x="338" y="146" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">D</text>
          <text x="115" y="28" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">A'</text>
          <text x="36" y="102" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">B'</text>
          <text x="272" y="112" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">C'</text>
          <text x="338" y="38" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">D'</text>
        </svg>
      );

    /* =====================================================================
       2. HÌNH HỘP ABCD.A'B'C'D' VỚI TRỌNG TÂM G CỦA TAM GIÁC A'BD
       ===================================================================== */
    case 'sp_box_a1bd_g':
      return (
        <svg
          viewBox="0 0 410 250"
          className="w-full max-w-md mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
        >
          <defs>
            <marker id="spboxg-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#dc2626" />
            </marker>
          </defs>
          {/* A(125,140), B(60,200), C(265,200), D(330,140), A'(125,38), B'(60,98), C'(265,98), D'(330,38)
              Trọng tâm G của A'BD: ((125+60+330)/3, (38+200+140)/3) = (171.7, 126)
              Kiểm tra A(125,140) -> C'(265,98): A + 1/3 AC' = (125 + 46.7, 140 - 14) = (171.7, 126) trùng khít 100%! */}
          <polygon points="125,38 60,200 330,140" fill="#bae6fd" fillOpacity="0.45" />

          {/* Các cạnh khuất nét đứt */}
          <line x1="125" y1="140" x2="60" y2="200" stroke="#475569" strokeWidth="1.5" strokeDasharray="5 3" />
          <line x1="125" y1="140" x2="330" y2="140" stroke="#475569" strokeWidth="1.5" strokeDasharray="5 3" />
          <line x1="125" y1="140" x2="125" y2="38" stroke="#475569" strokeWidth="1.5" strokeDasharray="5 3" />
          <line x1="60" y1="200" x2="330" y2="140" stroke="#0284c7" strokeWidth="1.6" strokeDasharray="5 3" />
          <line x1="125" y1="38" x2="330" y2="140" stroke="#0284c7" strokeWidth="1.6" strokeDasharray="5 3" />
          <line x1="125" y1="38" x2="60" y2="200" stroke="#0284c7" strokeWidth="1.8" />

          {/* Đường trung tuyến A'O của tam giác A'BD đi qua G (với O(195,170) là trung điểm BD) */}
          <line x1="125" y1="38" x2="195" y2="170" stroke="#0369a1" strokeWidth="1.3" strokeDasharray="3 3" />

          {/* Vectơ đường chéo AC' đi qua G */}
          <line x1="125" y1="140" x2="260" y2="100" stroke="#dc2626" strokeWidth="2.3" strokeDasharray="5 3" markerEnd="url(#spboxg-red)" />

          {/* Khung ngoài hình hộp nét liền */}
          <polygon points="60,200 265,200 330,140 330,38 125,38 60,98" fill="none" stroke="#0f172a" strokeWidth="1.8" />
          <line x1="60" y1="98" x2="265" y2="98" stroke="#0f172a" strokeWidth="1.8" />
          <line x1="265" y1="98" x2="330" y2="38" stroke="#0f172a" strokeWidth="1.8" />
          <line x1="265" y1="200" x2="265" y2="98" stroke="#0f172a" strokeWidth="1.8" />

          {/* Trọng tâm G */}
          <circle cx="171.7" cy="126" r="4.2" fill="#dc2626" />
          <circle cx="195" cy="170" r="3" fill="#0369a1" />

          <text x="108" y="146" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">A</text>
          <text x="42" y="212" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">B</text>
          <text x="268" y="216" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">C</text>
          <text x="338" y="146" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">D</text>
          <text x="115" y="28" fill="#0284c7" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">A'</text>
          <text x="36" y="102" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">B'</text>
          <text x="272" y="112" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">C'</text>
          <text x="338" y="38" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">D'</text>
          <text x="175" y="119" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">G</text>
          <text x="198" y="185" fill="#0369a1" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">O</text>
        </svg>
      );

    /* =====================================================================
       3. TỨ DIỆN ĐỀU ABCD CẠNH a
       ===================================================================== */
    case 'sp_tetra_abcd':
      return (
        <svg
          viewBox="0 0 380 245"
          className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
        >
          <defs>
            <marker id="sptet-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#1d4ed8" />
            </marker>
            <marker id="sptet-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#dc2626" />
            </marker>
          </defs>
          {/* A(185, 30), B(55, 175), C(215, 215), D(325, 150) */}
          {/* Cạnh đáy phía sau BD nét đứt */}
          <line x1="55" y1="175" x2="325" y2="150" stroke="#475569" strokeWidth="1.6" strokeDasharray="6 4" />

          {/* Các cạnh nhìn thấy */}
          <line x1="55" y1="175" x2="215" y2="215" stroke="#0f172a" strokeWidth="1.9" />
          <line x1="185" y1="30" x2="325" y2="150" stroke="#0f172a" strokeWidth="1.9" />
          <line x1="185" y1="30" x2="59" y2="170" stroke="#1d4ed8" strokeWidth="2.2" markerEnd="url(#sptet-blue)" />
          <line x1="185" y1="30" x2="213" y2="208" stroke="#1d4ed8" strokeWidth="2.2" markerEnd="url(#sptet-blue)" />
          <line x1="215" y1="215" x2="320" y2="153" stroke="#dc2626" strokeWidth="2.2" markerEnd="url(#sptet-red)" />

          {/* Chấm tròn đỉnh */}
          {[
            [185, 30],
            [55, 175],
            [215, 215],
            [325, 150],
          ].map(([cx, cy], idx) => (
            <circle key={idx} cx={cx} cy={cy} r="3.2" fill="#0f172a" />
          ))}

          {/* Ký hiệu góc 60° tại đỉnh A */}
          <path d="M 166 51 A 28 28 0 0 0 190 58" fill="none" stroke="#1d4ed8" strokeWidth="1.4" />
          <text x="155" y="74" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="13">60°</text>

          <text x="180" y="20" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">A</text>
          <text x="34" y="182" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">B</text>
          <text x="212" y="236" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">C</text>
          <text x="336" y="156" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">D</text>
        </svg>
      );

    /* =====================================================================
       4. TỨ DIỆN ABCD VỚI M, N LÀ TRUNG ĐIỂM CỦA AB VÀ CD
       ===================================================================== */
    case 'sp_tetra_mn':
      return (
        <svg
          viewBox="0 0 380 245"
          className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
        >
          <defs>
            <marker id="sptmn-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#dc2626" />
            </marker>
            <marker id="sptmn-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#1d4ed8" />
            </marker>
          </defs>
          {/* A(185, 30), B(55, 175), C(215, 215), D(325, 150)
              M = trung điểm AB = (120, 102.5); N = trung điểm CD = (270, 182.5) */}
          <line x1="55" y1="175" x2="325" y2="150" stroke="#475569" strokeWidth="1.5" strokeDasharray="6 4" />
          <line x1="185" y1="30" x2="55" y2="175" stroke="#0f172a" strokeWidth="1.8" />
          <line x1="185" y1="30" x2="215" y2="215" stroke="#0f172a" strokeWidth="1.8" />
          <line x1="215" y1="215" x2="325" y2="150" stroke="#0f172a" strokeWidth="1.8" />

          {/* Vectơ AD và BC màu xanh */}
          <line x1="185" y1="30" x2="320" y2="146" stroke="#1d4ed8" strokeWidth="2.1" markerEnd="url(#sptmn-blue)" />
          <line x1="55" y1="175" x2="209" y2="213" stroke="#1d4ed8" strokeWidth="2.1" markerEnd="url(#sptmn-blue)" />

          {/* Vectơ nối trung điểm MN nét đứt màu đỏ */}
          <line x1="120" y1="102.5" x2="264" y2="179.5" stroke="#dc2626" strokeWidth="2.3" strokeDasharray="5 3" markerEnd="url(#sptmn-red)" />

          {[
            [185, 30],
            [55, 175],
            [215, 215],
            [325, 150],
          ].map(([cx, cy], idx) => (
            <circle key={idx} cx={cx} cy={cy} r="3" fill="#0f172a" />
          ))}
          <circle cx="120" cy="102.5" r="3.8" fill="#dc2626" />
          <circle cx="270" cy="182.5" r="3.8" fill="#dc2626" />

          <text x="180" y="20" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">A</text>
          <text x="34" y="182" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">B</text>
          <text x="212" y="236" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">C</text>
          <text x="336" y="156" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">D</text>
          <text x="95" y="100" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">M</text>
          <text x="278" y="196" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">N</text>
        </svg>
      );

    /* =====================================================================
       5. TỨ DIỆN ĐỀU ABCD VỚI TRỌNG TÂM ĐÁY G VÀ TRUNG ĐIỂM M CỦA BC
       ===================================================================== */
    case 'sp_tetra_centroid_g':
      return (
        <svg
          viewBox="0 0 380 250"
          className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
        >
          <defs>
            <marker id="sptg-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#dc2626" />
            </marker>
          </defs>
          {/* A(198, 28), B(55, 175), C(215, 215), D(325, 150)
              M = trung điểm BC = (135, 195)
              G = trọng tâm BCD = ((55+215+325)/3, (175+215+150)/3) = (198.3, 180) */}
          <polygon points="55,175 215,215 325,150" fill="#f1f5f9" />
          <line x1="55" y1="175" x2="325" y2="150" stroke="#475569" strokeWidth="1.5" strokeDasharray="6 4" />
          {/* Đường trung tuyến đáy DM nét đứt */}
          <line x1="325" y1="150" x2="135" y2="195" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="4 3" />

          {/* Đường cao AG vuông góc với đáy (BCD) nét đứt màu đỏ */}
          <line x1="198" y1="28" x2="198" y2="174" stroke="#dc2626" strokeWidth="2.2" strokeDasharray="5 3" markerEnd="url(#sptg-red)" />
          {/* Ký hiệu góc vuông tại G */}
          <polyline points="198,169 209,166.5 209,177.5" fill="none" stroke="#dc2626" strokeWidth="1.3" />

          {/* Trung tuyến mặt bên AM */}
          <line x1="198" y1="28" x2="135" y2="195" stroke="#0369a1" strokeWidth="1.7" />

          {/* Các cạnh bên và cạnh đáy nhìn thấy */}
          <line x1="198" y1="28" x2="55" y2="175" stroke="#0f172a" strokeWidth="1.9" />
          <line x1="198" y1="28" x2="215" y2="215" stroke="#0f172a" strokeWidth="1.9" />
          <line x1="198" y1="28" x2="325" y2="150" stroke="#0f172a" strokeWidth="1.9" />
          <line x1="55" y1="175" x2="215" y2="215" stroke="#0f172a" strokeWidth="1.9" />
          <line x1="215" y1="215" x2="325" y2="150" stroke="#0f172a" strokeWidth="1.9" />

          <circle cx="198" cy="28" r="3.2" fill="#0f172a" />
          <circle cx="55" cy="175" r="3.2" fill="#0f172a" />
          <circle cx="215" cy="215" r="3.2" fill="#0f172a" />
          <circle cx="325" cy="150" r="3.2" fill="#0f172a" />
          <circle cx="135" cy="195" r="3.6" fill="#0369a1" />
          <circle cx="198" cy="180" r="4" fill="#dc2626" />

          <text x="193" y="18" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">A</text>
          <text x="35" y="182" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">B</text>
          <text x="214" y="236" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">C</text>
          <text x="335" y="156" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">D</text>
          <text x="115" y="214" fill="#0369a1" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">M</text>
          <text x="206" y="194" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">G</text>
        </svg>
      );

    /* =====================================================================
       6. HỆ THỨC TRỌNG TÂM TAM GIÁC VỚI ĐIỂM M TRONG KHÔNG GIAN: MA+MB+MC=3MG
       ===================================================================== */
    case 'sp_triangle_space_mg':
      return (
        <svg
          viewBox="0 0 380 245"
          className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
        >
          <defs>
            <marker id="spmg-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#1d4ed8" />
            </marker>
            <marker id="spmg-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#dc2626" />
            </marker>
          </defs>
          {/* M(190, 28), A(55, 175), B(215, 215), C(325, 150), I=trung điểm BC=(270,182.5), G=(198.3,180) */}
          <polygon points="55,175 215,215 325,150" fill="#e0f2fe" fillOpacity="0.55" stroke="#0f172a" strokeWidth="1.8" />
          <line x1="55" y1="175" x2="270" y2="182.5" stroke="#64748b" strokeWidth="1.3" strokeDasharray="4 3" />

          <line x1="190" y1="28" x2="60" y2="170" stroke="#1d4ed8" strokeWidth="2.1" markerEnd="url(#spmg-blue)" />
          <line x1="190" y1="28" x2="214" y2="208" stroke="#1d4ed8" strokeWidth="2.1" markerEnd="url(#spmg-blue)" />
          <line x1="190" y1="28" x2="320" y2="145" stroke="#1d4ed8" strokeWidth="2.1" markerEnd="url(#spmg-blue)" />
          <line x1="190" y1="28" x2="198" y2="173" stroke="#dc2626" strokeWidth="2.4" strokeDasharray="5 3" markerEnd="url(#spmg-red)" />

          <circle cx="190" cy="28" r="3.5" fill="#0f172a" />
          <circle cx="198.3" cy="180" r="4" fill="#dc2626" />

          <text x="183" y="19" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">M</text>
          <text x="35" y="182" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">A</text>
          <text x="212" y="236" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">B</text>
          <text x="335" y="156" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">C</text>
          <text x="182" y="196" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">G</text>
        </svg>
      );

    /* =====================================================================
       7. HÌNH CHÓP S.ABCD ĐÁY HÌNH BÌNH HÀNH TÂM O (SA + SC = SB + SD = 2SO)
       ===================================================================== */
    case 'sp_pyramid_sabcd':
      return (
        <svg
          viewBox="0 0 400 250"
          className="w-full max-w-md mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
        >
          <defs>
            <marker id="sppyr-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#dc2626" />
            </marker>
          </defs>
          {/* S(195, 25), A(125, 140), B(55, 205), C(265, 205), D(335, 140), O(195, 172.5) */}
          {/* Cạnh đáy khuất AB, AD và cạnh bên SA, đường chéo AC, BD nét đứt */}
          <line x1="125" y1="140" x2="55" y2="205" stroke="#475569" strokeWidth="1.5" strokeDasharray="5 3" />
          <line x1="125" y1="140" x2="335" y2="140" stroke="#475569" strokeWidth="1.5" strokeDasharray="5 3" />
          <line x1="195" y1="25" x2="125" y2="140" stroke="#475569" strokeWidth="1.6" strokeDasharray="5 3" />
          <line x1="125" y1="140" x2="265" y2="205" stroke="#64748b" strokeWidth="1.3" strokeDasharray="4 3" />
          <line x1="55" y1="205" x2="335" y2="140" stroke="#64748b" strokeWidth="1.3" strokeDasharray="4 3" />

          {/* Vectơ SO màu đỏ nét đứt */}
          <line x1="195" y1="25" x2="195" y2="166" stroke="#dc2626" strokeWidth="2.3" strokeDasharray="5 3" markerEnd="url(#sppyr-red)" />

          {/* Các cạnh nhìn thấy */}
          <line x1="55" y1="205" x2="265" y2="205" stroke="#0f172a" strokeWidth="1.9" />
          <line x1="265" y1="205" x2="335" y2="140" stroke="#0f172a" strokeWidth="1.9" />
          <line x1="195" y1="25" x2="55" y2="205" stroke="#0f172a" strokeWidth="1.9" />
          <line x1="195" y1="25" x2="265" y2="205" stroke="#0f172a" strokeWidth="1.9" />
          <line x1="195" y1="25" x2="335" y2="140" stroke="#0f172a" strokeWidth="1.9" />

          {[
            [195, 25],
            [125, 140],
            [55, 205],
            [265, 205],
            [335, 140],
          ].map(([cx, cy], idx) => (
            <circle key={idx} cx={cx} cy={cy} r="3.2" fill="#0f172a" />
          ))}
          <circle cx="195" cy="172.5" r="3.8" fill="#dc2626" />

          <text x="190" y="17" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">S</text>
          <text x="115" y="133" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">A</text>
          <text x="36" y="215" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">B</text>
          <text x="268" y="222" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">C</text>
          <text x="344" y="145" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">D</text>
          <text x="199" y="190" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">O</text>
        </svg>
      );

    /* =====================================================================
       8. HÌNH CHÓP S.ABCD CÓ ĐÁY HÌNH VUÔNG & SA VUÔNG GÓC VỚI ĐÁY
       ===================================================================== */
    case 'sp_pyramid_sa_perp':
      return (
        <svg
          viewBox="0 0 400 250"
          className="w-full max-w-md mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
        >
          {/* A(120, 140), S(120, 28), B(55, 205), C(265, 205), D(330, 140), O(192.5, 172.5) */}
          <line x1="120" y1="28" x2="120" y2="140" stroke="#dc2626" strokeWidth="2" strokeDasharray="5 3" />
          <line x1="120" y1="140" x2="55" y2="205" stroke="#475569" strokeWidth="1.5" strokeDasharray="5 3" />
          <line x1="120" y1="140" x2="330" y2="140" stroke="#475569" strokeWidth="1.5" strokeDasharray="5 3" />
          <line x1="120" y1="140" x2="265" y2="205" stroke="#0284c7" strokeWidth="1.4" strokeDasharray="4 3" />
          <line x1="55" y1="205" x2="330" y2="140" stroke="#0284c7" strokeWidth="1.4" strokeDasharray="4 3" />

          {/* Ký hiệu góc vuông SA vuông góc AD và AB tại A */}
          <polyline points="120,128 132,128 132,140" fill="none" stroke="#dc2626" strokeWidth="1.3" />
          <polyline points="120,129 111,138 111,149" fill="none" stroke="#dc2626" strokeWidth="1.3" />

          {/* Các cạnh nhìn thấy */}
          <line x1="55" y1="205" x2="265" y2="205" stroke="#0f172a" strokeWidth="1.9" />
          <line x1="265" y1="205" x2="330" y2="140" stroke="#0f172a" strokeWidth="1.9" />
          <line x1="120" y1="28" x2="55" y2="205" stroke="#0f172a" strokeWidth="1.9" />
          <line x1="120" y1="28" x2="265" y2="205" stroke="#1d4ed8" strokeWidth="2.1" />
          <line x1="120" y1="28" x2="330" y2="140" stroke="#0f172a" strokeWidth="1.9" />

          {[
            [120, 28],
            [120, 140],
            [55, 205],
            [265, 205],
            [330, 140],
          ].map(([cx, cy], idx) => (
            <circle key={idx} cx={cx} cy={cy} r="3.2" fill="#0f172a" />
          ))}

          <text x="114" y="19" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">S</text>
          <text x="102" y="138" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">A</text>
          <text x="36" y="215" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">B</text>
          <text x="268" y="222" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">C</text>
          <text x="339" y="145" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">D</text>
        </svg>
      );

    /* =====================================================================
       9. HÌNH LĂNG TRỤ TAM GIÁC ĐỀU ABC.A'B'C'
       ===================================================================== */
    case 'sp_prism_abca1b1c1':
      return (
        <svg
          viewBox="0 0 380 250"
          className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
        >
          <defs>
            <marker id="sppr-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#dc2626" />
            </marker>
          </defs>
          {/* A(75, 165), B(200, 215), C(305, 165), A'(75, 45), B'(200, 95), C'(305, 45) */}
          <line x1="75" y1="165" x2="305" y2="165" stroke="#475569" strokeWidth="1.5" strokeDasharray="6 4" />

          {/* Đường chéo mặt bên AB' màu đỏ */}
          <line x1="75" y1="165" x2="195" y2="98" stroke="#dc2626" strokeWidth="2.2" markerEnd="url(#sppr-red)" />

          {/* Ký hiệu góc vuông tại A (AA' vuông góc AB) */}
          <polyline points="75,152 86,156.5 86,169.5" fill="none" stroke="#0284c7" strokeWidth="1.3" />

          {/* Các cạnh nhìn thấy */}
          <polygon points="75,45 200,95 305,45" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.8" />
          <line x1="75" y1="165" x2="200" y2="215" stroke="#0f172a" strokeWidth="1.9" />
          <line x1="200" y1="215" x2="305" y2="165" stroke="#0f172a" strokeWidth="1.9" />
          <line x1="75" y1="165" x2="75" y2="45" stroke="#0f172a" strokeWidth="1.9" />
          <line x1="200" y1="215" x2="200" y2="95" stroke="#0f172a" strokeWidth="1.9" />
          <line x1="305" y1="165" x2="305" y2="45" stroke="#0f172a" strokeWidth="1.9" />

          {[
            [75, 165],
            [200, 215],
            [305, 165],
            [75, 45],
            [200, 95],
            [305, 45],
          ].map(([cx, cy], idx) => (
            <circle key={idx} cx={cx} cy={cy} r="3.2" fill="#0f172a" />
          ))}

          <text x="53" y="172" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">A</text>
          <text x="196" y="236" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">B</text>
          <text x="315" y="172" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">C</text>
          <text x="50" y="45" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">A'</text>
          <text x="206" y="112" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">B'</text>
          <text x="314" y="45" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">C'</text>
        </svg>
      );

    /* =====================================================================
       10. MÔ HÌNH ĐÈN CHÙM TREO BỞI 3 DÂY OA, OB, OC ĐÔI MỘT VUÔNG GÓC
       ===================================================================== */
    case 'sp_chandelier_oabc':
      return (
        <svg
          viewBox="0 0 380 245"
          className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
        >
          <defs>
            <marker id="spch-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#1d4ed8" />
            </marker>
            <marker id="spch-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#dc2626" />
            </marker>
          </defs>
          {/* Mặt trần elip */}
          <ellipse cx="190" cy="48" rx="115" ry="24" fill="#f1f5f9" stroke="#475569" strokeWidth="1.5" strokeDasharray="5 3" />
          {/* O(190, 128), A(95, 55), B(285, 55), C(190, 26), P(190, 222) */}
          <line x1="95" y1="55" x2="285" y2="55" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4 3" />
          <line x1="95" y1="55" x2="190" y2="26" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4 3" />
          <line x1="285" y1="55" x2="190" y2="26" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4 3" />

          <line x1="190" y1="128" x2="100" y2="59" stroke="#1d4ed8" strokeWidth="2.2" markerEnd="url(#spch-blue)" />
          <line x1="190" y1="128" x2="280" y2="59" stroke="#1d4ed8" strokeWidth="2.2" markerEnd="url(#spch-blue)" />
          <line x1="190" y1="128" x2="190" y2="33" stroke="#1d4ed8" strokeWidth="2.2" markerEnd="url(#spch-blue)" />
          <line x1="190" y1="128" x2="190" y2="216" stroke="#dc2626" strokeWidth="2.5" markerEnd="url(#spch-red)" />

          <circle cx="190" cy="128" r="5" fill="#f59e0b" stroke="#0f172a" strokeWidth="1.5" />
          <circle cx="95" cy="55" r="3" fill="#0f172a" />
          <circle cx="285" cy="55" r="3" fill="#0f172a" />
          <circle cx="190" cy="26" r="3" fill="#0f172a" />

          <text x="168" y="136" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">O</text>
          <text x="75" y="55" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">A</text>
          <text x="294" y="55" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">B</text>
          <text x="198" y="22" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">C</text>
          <text x="115" y="102" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="13" fontStyle="italic" fontWeight="bold">F₁</text>
          <text x="250" y="102" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="13" fontStyle="italic" fontWeight="bold">F₂</text>
          <text x="196" y="82" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="13" fontStyle="italic" fontWeight="bold">F₃</text>
          <text x="200" y="212" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">P⃗</text>
        </svg>
      );

    /* =====================================================================
       11. HỆ TRỤC TỌA ĐỘ Oxyz, ĐIỂM M(x;y;z) VÀ HÌNH CHIẾU VUÔNG GÓC H
       ===================================================================== */
    case 'sp_oxyz_point_proj':
      return (
        <svg
          viewBox="0 0 410 255"
          className="w-full max-w-md mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
        >
          <defs>
            <marker id="spox-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
            </marker>
            <marker id="spox-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#dc2626" />
            </marker>
          </defs>
          {/* O(145, 150); Ox -> (45, 225); Oy -> (365, 150); Oz -> (145, 18)
              Mx(85, 195), My(285, 150), Mz(145, 62)
              H = Mx + My - O = (225, 195) trên (Oxy)
              M = H + (0, -88) = (225, 107) */}
          <polygon points="145,150 85,195 225,195 285,150" fill="#f1f5f9" />

          {/* Các đường gióng tọa độ nét đứt */}
          <line x1="85" y1="195" x2="225" y2="195" stroke="#64748b" strokeWidth="1.4" strokeDasharray="4 3" />
          <line x1="285" y1="150" x2="225" y2="195" stroke="#64748b" strokeWidth="1.4" strokeDasharray="4 3" />
          <line x1="145" y1="62" x2="225" y2="107" stroke="#64748b" strokeWidth="1.4" strokeDasharray="4 3" />
          <line x1="145" y1="150" x2="225" y2="195" stroke="#0284c7" strokeWidth="1.4" strokeDasharray="4 3" />
          <line x1="225" y1="107" x2="225" y2="195" stroke="#0284c7" strokeWidth="1.8" strokeDasharray="5 3" />

          {/* Ký hiệu góc vuông tại hình chiếu H trên (Oxy) */}
          <polyline points="225,184 215,178.5 215,189.5" fill="none" stroke="#0284c7" strokeWidth="1.3" />

          {/* Ba trục tọa độ Ox, Oy, Oz */}
          <line x1="145" y1="150" x2="48" y2="223" stroke="#0f172a" strokeWidth="1.8" markerEnd="url(#spox-arr)" />
          <line x1="145" y1="150" x2="365" y2="150" stroke="#0f172a" strokeWidth="1.8" markerEnd="url(#spox-arr)" />
          <line x1="145" y1="150" x2="145" y2="20" stroke="#0f172a" strokeWidth="1.8" markerEnd="url(#spox-arr)" />

          {/* Vectơ OM màu đỏ */}
          <line x1="145" y1="150" x2="220" y2="110" stroke="#dc2626" strokeWidth="2.3" markerEnd="url(#spox-red)" />

          <circle cx="145" cy="150" r="3" fill="#0f172a" />
          <circle cx="85" cy="195" r="3" fill="#0f172a" />
          <circle cx="285" cy="150" r="3" fill="#0f172a" />
          <circle cx="145" cy="62" r="3" fill="#0f172a" />
          <circle cx="225" cy="195" r="3.6" fill="#0284c7" />
          <circle cx="225" cy="107" r="4" fill="#dc2626" />

          <text x="128" y="146" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">O</text>
          <text x="32" y="234" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">x</text>
          <text x="372" y="155" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">y</text>
          <text x="130" y="24" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">z</text>
          <text x="64" y="192" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">x</text>
          <text x="282" y="142" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">y</text>
          <text x="128" y="66" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic">z</text>
          <text x="234" y="106" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">M(x; y; z)</text>
          <text x="233" y="208" fill="#0284c7" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">H(x; y; 0)</text>
        </svg>
      );

    /* =====================================================================
       12. HÌNH HỘP CHỮ NHẬT GẮN VÀO HỆ TRỤC TỌA ĐỘ Oxyz
       ===================================================================== */
    case 'sp_oxyz_box':
      return (
        <svg
          viewBox="0 0 410 255"
          className="w-full max-w-md mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
        >
          <defs>
            <marker id="spob-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
            </marker>
            <marker id="spob-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#dc2626" />
            </marker>
          </defs>
          {/* O(135, 148), A(70, 198) in Ox, C(290, 148) in Oy, O'(135, 52) in Oz
              B(225, 198), A'(70, 102), C'(290, 52), B'(225, 102) */}
          <line x1="135" y1="148" x2="38" y2="222" stroke="#0f172a" strokeWidth="1.8" markerEnd="url(#spob-arr)" />
          <line x1="135" y1="148" x2="365" y2="148" stroke="#0f172a" strokeWidth="1.8" markerEnd="url(#spob-arr)" />
          <line x1="135" y1="148" x2="135" y2="16" stroke="#0f172a" strokeWidth="1.8" markerEnd="url(#spob-arr)" />

          {/* Các cạnh hình hộp */}
          <polygon points="70,198 225,198 290,148 290,52 135,52 70,102" fill="none" stroke="#1e293b" strokeWidth="1.7" />
          <line x1="70" y1="102" x2="225" y2="102" stroke="#1e293b" strokeWidth="1.7" />
          <line x1="225" y1="102" x2="290" y2="52" stroke="#1e293b" strokeWidth="1.7" />
          <line x1="225" y1="198" x2="225" y2="102" stroke="#1e293b" strokeWidth="1.7" />

          {/* Đường chéo từ gốc O đến đỉnh đối diện B'(x;y;z) */}
          <line x1="135" y1="148" x2="220" y2="105" stroke="#dc2626" strokeWidth="2.2" strokeDasharray="5 3" markerEnd="url(#spob-red)" />

          <circle cx="135" cy="148" r="3.2" fill="#0f172a" />
          <circle cx="70" cy="198" r="3.2" fill="#1d4ed8" />
          <circle cx="290" cy="148" r="3.2" fill="#1d4ed8" />
          <circle cx="135" cy="52" r="3.2" fill="#1d4ed8" />
          <circle cx="225" cy="102" r="4" fill="#dc2626" />

          <text x="118" y="143" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">O</text>
          <text x="24" y="232" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">x</text>
          <text x="372" y="153" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">y</text>
          <text x="120" y="22" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">z</text>
          <text x="48" y="196" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">A</text>
          <text x="228" y="214" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">B</text>
          <text x="295" y="165" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">C</text>
          <text x="114" y="52" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">O'</text>
          <text x="50" y="102" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">A'</text>
          <text x="296" y="54" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">C'</text>
          <text x="232" y="114" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">B'(x;y;z)</text>
        </svg>
      );

    /* =====================================================================
       13. HÌNH BÌNH HÀNH ABCD TRONG KHÔNG GIAN Oxyz (AD = BC)
       ===================================================================== */
    case 'sp_oxyz_parallelogram':
      return (
        <svg
          viewBox="0 0 410 245"
          className="w-full max-w-md mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
        >
          <defs>
            <marker id="spop-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
            </marker>
            <marker id="spop-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#dc2626" />
            </marker>
          </defs>
          {/* Hệ trục Oxyz góc trái */}
          <line x1="95" y1="175" x2="35" y2="222" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#spop-arr)" />
          <line x1="95" y1="175" x2="365" y2="175" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#spop-arr)" />
          <line x1="95" y1="175" x2="95" y2="22" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#spop-arr)" />
          <text x="80" y="170" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">O</text>
          <text x="22" y="230" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">x</text>
          <text x="372" y="180" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">y</text>
          <text x="80" y="26" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">z</text>

          {/* Hình bình hành ABCD trong không gian: A(155, 125), B(125, 65), C(285, 45), D(315, 105) */}
          <polygon points="155,125 125,65 285,45 315,105" fill="#e0f2fe" fillOpacity="0.6" stroke="#1e293b" strokeWidth="1.8" />
          <line x1="155" y1="125" x2="285" y2="45" stroke="#64748b" strokeWidth="1.2" strokeDasharray="4 3" />
          <line x1="125" y1="65" x2="315" y2="105" stroke="#64748b" strokeWidth="1.2" strokeDasharray="4 3" />

          {/* Hai vectơ bằng nhau AD và BC */}
          <line x1="125" y1="65" x2="279" y2="46" stroke="#dc2626" strokeWidth="2.2" markerEnd="url(#spop-red)" />
          <line x1="155" y1="125" x2="309" y2="106" stroke="#dc2626" strokeWidth="2.2" markerEnd="url(#spop-red)" />

          <circle cx="155" cy="125" r="3.4" fill="#0f172a" />
          <circle cx="125" cy="65" r="3.4" fill="#0f172a" />
          <circle cx="285" cy="45" r="3.4" fill="#0f172a" />
          <circle cx="315" cy="105" r="4" fill="#dc2626" />

          <text x="142" y="144" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">A</text>
          <text x="108" y="62" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">B</text>
          <text x="290" y="42" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">C</text>
          <text x="324" y="112" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">D(x; y; z)</text>
        </svg>
      );

    /* =====================================================================
       14. TỨ DIỆN OABC VỚI 3 ĐỈNH A, B, C TRÊN 3 TRỤC Ox, Oy, Oz
       ===================================================================== */
    case 'sp_oxyz_tetra_oabc':
      return (
        <svg
          viewBox="0 0 390 245"
          className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
        >
          <defs>
            <marker id="spot-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
            </marker>
          </defs>
          {/* O(145, 150), A(75, 205) in Ox, B(295, 150) in Oy, C(145, 42) in Oz */}
          <polygon points="75,205 295,150 145,42" fill="#bae6fd" fillOpacity="0.55" stroke="#1d4ed8" strokeWidth="2" />

          <line x1="145" y1="150" x2="45" y2="228" stroke="#0f172a" strokeWidth="1.8" markerEnd="url(#spot-arr)" />
          <line x1="145" y1="150" x2="350" y2="150" stroke="#0f172a" strokeWidth="1.8" markerEnd="url(#spot-arr)" />
          <line x1="145" y1="150" x2="145" y2="16" stroke="#0f172a" strokeWidth="1.8" markerEnd="url(#spot-arr)" />

          {/* Ký hiệu góc vuông tại O */}
          <polyline points="145,138 157,138 157,150" fill="none" stroke="#dc2626" strokeWidth="1.3" />

          <circle cx="145" cy="150" r="3.2" fill="#0f172a" />
          <circle cx="75" cy="205" r="3.5" fill="#1d4ed8" />
          <circle cx="295" cy="150" r="3.5" fill="#1d4ed8" />
          <circle cx="145" cy="42" r="3.5" fill="#1d4ed8" />
          <circle cx="165" cy="136.7" r="3.8" fill="#dc2626" />

          <text x="128" y="145" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">O</text>
          <text x="32" y="235" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">x</text>
          <text x="358" y="155" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">y</text>
          <text x="130" y="22" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">z</text>
          <text x="48" y="200" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">A</text>
          <text x="292" y="170" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">B</text>
          <text x="155" y="45" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">C</text>
          <text x="173" y="135" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">G</text>
        </svg>
      );

    /* =====================================================================
       15. TAM GIÁC ABC VÀ TRỌNG TÂM G TRONG KHÔNG GIAN Oxyz
       ===================================================================== */
    case 'sp_oxyz_triangle_abc':
      return (
        <svg
          viewBox="0 0 400 245"
          className="w-full max-w-md mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
        >
          <defs>
            <marker id="spota-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
            </marker>
            <marker id="spota-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#dc2626" />
            </marker>
          </defs>
          {/* O(95, 175), A(165, 130), B(295, 145), C(225, 45), M=(230, 137.5), G=(228.3, 106.7) */}
          <line x1="95" y1="175" x2="35" y2="222" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#spota-arr)" />
          <line x1="95" y1="175" x2="365" y2="175" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#spota-arr)" />
          <line x1="95" y1="175" x2="95" y2="22" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#spota-arr)" />
          <text x="80" y="170" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">O</text>
          <text x="22" y="230" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">x</text>
          <text x="372" y="180" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">y</text>
          <text x="80" y="26" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">z</text>

          <polygon points="165,130 295,145 225,45" fill="#e0f2fe" fillOpacity="0.6" stroke="#1d4ed8" strokeWidth="1.9" />
          <line x1="225" y1="45" x2="230" y2="137.5" stroke="#64748b" strokeWidth="1.3" strokeDasharray="4 3" />
          <line x1="95" y1="175" x2="223" y2="109" stroke="#dc2626" strokeWidth="2.1" strokeDasharray="5 3" markerEnd="url(#spota-red)" />

          <circle cx="165" cy="130" r="3.4" fill="#0f172a" />
          <circle cx="295" cy="145" r="3.4" fill="#0f172a" />
          <circle cx="225" cy="45" r="3.4" fill="#0f172a" />
          <circle cx="230" cy="137.5" r="3.2" fill="#0284c7" />
          <circle cx="228.3" cy="106.7" r="4" fill="#dc2626" />

          <text x="145" y="136" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">A</text>
          <text x="304" y="150" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">B</text>
          <text x="220" y="34" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">C</text>
          <text x="224" y="156" fill="#0284c7" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">M</text>
          <text x="236" y="108" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">G</text>
        </svg>
      );

    /* =====================================================================
       16. QUỸ ĐẠO BAY FLYCAM / RADAR / KHINH KHÍ CẦU TRONG HỆ TRỤC Oxyz
       ===================================================================== */
    case 'sp_oxyz_flight_trajectory':
      return (
        <svg
          viewBox="0 0 410 250"
          className="w-full max-w-md mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
        >
          <defs>
            <marker id="spfl-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
            </marker>
            <marker id="spfl-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#dc2626" />
            </marker>
          </defs>
          {/* Mặt đất (Oxy): O(115, 165) */}
          <polygon points="115,165 55,215 315,215 360,165" fill="#f1f5f9" />
          <line x1="115" y1="165" x2="42" y2="225" stroke="#0f172a" strokeWidth="1.7" markerEnd="url(#spfl-arr)" />
          <line x1="115" y1="165" x2="370" y2="165" stroke="#0f172a" strokeWidth="1.7" markerEnd="url(#spfl-arr)" />
          <line x1="115" y1="165" x2="115" y2="20" stroke="#0f172a" strokeWidth="1.7" markerEnd="url(#spfl-arr)" />

          {/* Vị trí A(165, 85), B(295, 65) và hình chiếu xuống mặt đất A'(165, 195), B'(295, 175) */}
          <line x1="165" y1="85" x2="165" y2="195" stroke="#64748b" strokeWidth="1.4" strokeDasharray="4 3" />
          <line x1="295" y1="65" x2="295" y2="175" stroke="#64748b" strokeWidth="1.4" strokeDasharray="4 3" />
          <line x1="165" y1="195" x2="295" y2="175" stroke="#0284c7" strokeWidth="1.4" strokeDasharray="4 3" />
          <line x1="115" y1="165" x2="165" y2="85" stroke="#0284c7" strokeWidth="1.4" strokeDasharray="4 3" />

          {/* Vectơ độ dịch chuyển từ vị trí 1 đến vị trí 2 */}
          <line x1="165" y1="85" x2="288" y2="66" stroke="#dc2626" strokeWidth="2.4" markerEnd="url(#spfl-red)" />

          <circle cx="115" cy="165" r="3.5" fill="#0f172a" />
          <circle cx="165" cy="85" r="4" fill="#1d4ed8" />
          <circle cx="295" cy="65" r="4" fill="#dc2626" />
          <circle cx="165" cy="195" r="2.8" fill="#64748b" />
          <circle cx="295" cy="175" r="2.8" fill="#64748b" />

          <text x="96" y="160" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">O</text>
          <text x="28" y="234" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">x</text>
          <text x="378" y="170" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">y</text>
          <text x="100" y="24" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">z</text>
          <text x="148" y="74" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">A (M)</text>
          <text x="282" y="54" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">B (N)</text>
          <text x="215" y="198" fill="#475569" fontFamily={MATH_SERIF} fontSize="13" fontStyle="italic">Mặt đất (Oxy)</text>
        </svg>
      );

    /* =====================================================================
       17. BA LỰC F1, F2, F3 CÙNG TÁC DỤNG TẠI ĐIỂM M TRONG KHÔNG GIAN Oxyz
       ===================================================================== */
    case 'sp_oxyz_forces_3d':
      return (
        <svg
          viewBox="0 0 400 245"
          className="w-full max-w-md mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
        >
          <defs>
            <marker id="spfo-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
            </marker>
            <marker id="spfo-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#1d4ed8" />
            </marker>
            <marker id="spfo-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#dc2626" />
            </marker>
          </defs>
          <line x1="90" y1="180" x2="35" y2="225" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#spfo-arr)" />
          <line x1="90" y1="180" x2="365" y2="180" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#spfo-arr)" />
          <line x1="90" y1="180" x2="90" y2="22" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#spfo-arr)" />
          <text x="74" y="175" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">O</text>
          <text x="22" y="232" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">x</text>
          <text x="372" y="185" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">y</text>
          <text x="75" y="26" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">z</text>

          {/* Điểm đặt lực M(175, 135) */}
          <line x1="175" y1="135" x2="135" y2="95" stroke="#1d4ed8" strokeWidth="2.1" markerEnd="url(#spfo-blue)" />
          <line x1="175" y1="135" x2="265" y2="145" stroke="#1d4ed8" strokeWidth="2.1" markerEnd="url(#spfo-blue)" />
          <line x1="175" y1="135" x2="205" y2="62" stroke="#1d4ed8" strokeWidth="2.1" markerEnd="url(#spfo-blue)" />
          <line x1="175" y1="135" x2="285" y2="48" stroke="#dc2626" strokeWidth="2.5" markerEnd="url(#spfo-red)" />

          <circle cx="175" cy="135" r="4.5" fill="#f59e0b" stroke="#0f172a" strokeWidth="1.5" />
          <text x="162" y="156" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">M</text>
          <text x="112" y="92" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">F⃗₁</text>
          <text x="272" y="150" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">F⃗₂</text>
          <text x="185" y="55" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">F⃗₃</text>
          <text x="292" y="48" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">F⃗ = F⃗₁+F⃗₂+F⃗₃</text>
        </svg>
      );

    /* =====================================================================
       18. BỂ NƯỚC / THÙNG CHỨA HÌNH HỘP CHỮ NHẬT ĐÁY VUÔNG CẠNH x, CAO h
       ===================================================================== */
    case 'sp_open_box_xh':
      return (
        <svg
          viewBox="0 0 380 230"
          className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
        >
          {/* Bể hình hộp chữ nhật đáy vuông cạnh x, chiều cao h */}
          <polygon points="75,185 245,185 305,135 135,135" fill="#bae6fd" fillOpacity="0.55" />
          <polygon points="75,75 245,75 305,25 135,25" fill="#e0f2fe" fillOpacity="0.35" stroke="#0f172a" strokeWidth="1.7" />

          {/* Các cạnh khuất nét đứt */}
          <line x1="135" y1="135" x2="75" y2="185" stroke="#475569" strokeWidth="1.5" strokeDasharray="5 3" />
          <line x1="135" y1="135" x2="305" y2="135" stroke="#475569" strokeWidth="1.5" strokeDasharray="5 3" />
          <line x1="135" y1="135" x2="135" y2="25" stroke="#475569" strokeWidth="1.5" strokeDasharray="5 3" />

          {/* Các cạnh nhìn thấy */}
          <line x1="75" y1="185" x2="245" y2="185" stroke="#0f172a" strokeWidth="1.9" />
          <line x1="245" y1="185" x2="305" y2="135" stroke="#0f172a" strokeWidth="1.9" />
          <line x1="75" y1="185" x2="75" y2="75" stroke="#0f172a" strokeWidth="1.9" />
          <line x1="245" y1="185" x2="245" y2="75" stroke="#0f172a" strokeWidth="1.9" />
          <line x1="305" y1="135" x2="305" y2="25" stroke="#0f172a" strokeWidth="1.9" />

          {/* Ghi kích thước x, x, h */}
          <text x="160" y="206" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold" textAnchor="middle">x</text>
          <text x="288" y="172" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">x</text>
          <text x="320" y="88" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">h</text>
        </svg>
      );

    /* =====================================================================
       19. HÌNH TRỤ TRÒN XOAY BÁN KÍNH ĐÁY R, CHIỀU CAO h
       ===================================================================== */
    case 'sp_cylinder_rh':
      return (
        <svg
          viewBox="0 0 360 230"
          className="w-full max-w-sm mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
        >
          {/* Đáy trên elip */}
          <ellipse cx="170" cy="48" rx="95" ry="26" fill="#e0f2fe" fillOpacity="0.45" stroke="#0f172a" strokeWidth="1.8" />
          {/* Nửa sau đáy dưới nét đứt */}
          <path d="M 75 178 A 95 26 0 0 1 265 178" fill="none" stroke="#475569" strokeWidth="1.5" strokeDasharray="5 3" />
          {/* Nửa trước đáy dưới nét liền */}
          <path d="M 75 178 A 95 26 0 0 0 265 178" fill="none" stroke="#0f172a" strokeWidth="1.8" />

          {/* Hai đường sinh */}
          <line x1="75" y1="48" x2="75" y2="178" stroke="#0f172a" strokeWidth="1.8" />
          <line x1="265" y1="48" x2="265" y2="178" stroke="#0f172a" strokeWidth="1.8" />

          {/* Trục OO' và bán kính R */}
          <line x1="170" y1="48" x2="170" y2="178" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="4 3" />
          <line x1="170" y1="178" x2="265" y2="178" stroke="#dc2626" strokeWidth="2" strokeDasharray="5 3" />
          <polyline points="170,166 182,166 182,178" fill="none" stroke="#0284c7" strokeWidth="1.2" />

          <circle cx="170" cy="48" r="3" fill="#0f172a" />
          <circle cx="170" cy="178" r="3" fill="#0f172a" />

          <text x="152" y="44" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">O'</text>
          <text x="152" y="184" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">O</text>
          <text x="218" y="172" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold" textAnchor="middle">R</text>
          <text x="282" y="118" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">h</text>
        </svg>
      );

    /* =====================================================================
       20. TẤM NHÔM HÌNH CHỮ NHẬT CẮT 4 GÓC VUÔNG CẠNH x GẬP THÀNH HỘP
       ===================================================================== */
    case 'sp_sheet_cut_box':
      return (
        <svg
          viewBox="0 0 430 210"
          className="w-full max-w-md mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
        >
          <defs>
            <marker id="spcut-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0284c7" />
            </marker>
          </defs>
          {/* Bên trái: Tấm nhôm chữ nhật cắt 4 góc vuông cạnh x */}
          <rect x="20" y="35" width="165" height="125" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.7" />
          {/* 4 ô vuông góc cạnh x = 28px bị cắt */}
          <rect x="20" y="35" width="28" height="28" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.3" strokeDasharray="3 2" />
          <rect x="157" y="35" width="28" height="28" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.3" strokeDasharray="3 2" />
          <rect x="20" y="132" width="28" height="28" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.3" strokeDasharray="3 2" />
          <rect x="157" y="132" width="28" height="28" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.3" strokeDasharray="3 2" />
          {/* Đường gập nét đứt */}
          <rect x="48" y="63" width="109" height="69" fill="#e0f2fe" fillOpacity="0.5" stroke="#0284c7" strokeWidth="1.4" strokeDasharray="4 3" />
          <text x="34" y="30" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold" textAnchor="middle">x</text>
          <text x="10" y="53" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">x</text>

          {/* Mũi tên gập hộp */}
          <line x1="196" y1="98" x2="228" y2="98" stroke="#0284c7" strokeWidth="2.2" markerEnd="url(#spcut-arr)" />

          {/* Bên phải: Hình hộp chữ nhật không nắp sau khi gập */}
          <polygon points="242,155 362,155 402,118 282,118" fill="#bae6fd" fillOpacity="0.55" />
          <line x1="282" y1="118" x2="242" y2="155" stroke="#475569" strokeWidth="1.4" strokeDasharray="4 3" />
          <line x1="282" y1="118" x2="402" y2="118" stroke="#475569" strokeWidth="1.4" strokeDasharray="4 3" />
          <line x1="282" y1="118" x2="282" y2="82" stroke="#475569" strokeWidth="1.4" strokeDasharray="4 3" />

          <polygon points="242,119 362,119 402,82 282,82" fill="none" stroke="#0f172a" strokeWidth="1.6" />
          <line x1="242" y1="155" x2="362" y2="155" stroke="#0f172a" strokeWidth="1.8" />
          <line x1="362" y1="155" x2="402" y2="118" stroke="#0f172a" strokeWidth="1.8" />
          <line x1="242" y1="155" x2="242" y2="119" stroke="#0f172a" strokeWidth="1.8" />
          <line x1="362" y1="155" x2="362" y2="119" stroke="#0f172a" strokeWidth="1.8" />
          <line x1="402" y1="118" x2="402" y2="82" stroke="#0f172a" strokeWidth="1.8" />

          <text x="412" y="105" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">x</text>
        </svg>
      );

    /* =====================================================================
       21. DIỆN TÍCH HÌNH PHẲNG GIỚI HẠN BỞI ĐỒ THỊ y=f(x), y=g(x) VÀ x=a, x=b
       ===================================================================== */
    case 'sp_integral_area_curve':
      return (
        <svg
          viewBox="0 0 410 245"
          className="w-full max-w-md mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
        >
          <defs>
            <marker id="spint-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
            </marker>
            <pattern id="spint-hatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="8" stroke="#0284c7" strokeWidth="1.4" strokeOpacity="0.45" />
            </pattern>
          </defs>

          {/* Miền phẳng S tô màu + gạch chéo chuẩn SGK */}
          <path
            d="M 110 78 C 165 32, 235 105, 300 58 L 300 148 C 235 168, 165 135, 110 156 Z"
            fill="#bae6fd"
            fillOpacity="0.55"
          />
          <path
            d="M 110 78 C 165 32, 235 105, 300 58 L 300 148 C 235 168, 165 135, 110 156 Z"
            fill="url(#spint-hatch)"
          />

          {/* Hệ trục tọa độ Oxy */}
          <line x1="35" y1="195" x2="385" y2="195" stroke="#0f172a" strokeWidth="1.8" markerEnd="url(#spint-arr)" />
          <line x1="65" y1="225" x2="65" y2="18" stroke="#0f172a" strokeWidth="1.8" markerEnd="url(#spint-arr)" />

          {/* Đường gióng x = a và x = b */}
          <line x1="110" y1="78" x2="110" y2="195" stroke="#475569" strokeWidth="1.5" strokeDasharray="5 3" />
          <line x1="300" y1="58" x2="300" y2="195" stroke="#475569" strokeWidth="1.5" strokeDasharray="5 3" />

          {/* Đồ thị y = f(x) và y = g(x) */}
          <path d="M 80 105 C 145 20, 230 115, 330 42" fill="none" stroke="#1d4ed8" strokeWidth="2.4" />
          <path d="M 80 165 C 155 128, 235 175, 330 138" fill="none" stroke="#dc2626" strokeWidth="2.2" />

          <circle cx="110" cy="195" r="3" fill="#0f172a" />
          <circle cx="300" cy="195" r="3" fill="#0f172a" />

          <text x="50" y="212" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">O</text>
          <text x="378" y="214" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">x</text>
          <text x="46" y="26" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">y</text>
          <text x="106" y="214" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">a</text>
          <text x="296" y="214" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">b</text>
          <text x="202" y="118" fill="#0369a1" fontFamily={MATH_SERIF} fontSize="18" fontStyle="italic" fontWeight="bold">S</text>
          <text x="334" y="46" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">y = f(x)</text>
          <text x="334" y="142" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">y = g(x)</text>
        </svg>
      );

    /* =====================================================================
       22. KHỐI TRÒN XOAY KHI QUAY HÌNH PHẲNG QUANH TRỤC Ox
       ===================================================================== */
    case 'sp_solid_of_revolution':
      return (
        <svg
          viewBox="0 0 420 245"
          className="w-full max-w-md mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
        >
          <defs>
            <marker id="spsol-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
            </marker>
          </defs>

          {/* Tô màu thân khối tròn xoay */}
          <path
            d="M 105 72 C 170 42, 240 82, 315 52 L 315 198 C 240 168, 170 208, 105 178 Z"
            fill="#e0f2fe"
            fillOpacity="0.6"
          />

          {/* Thiết diện tại x=a, tại x trung gian và tại x=b */}
          <ellipse cx="105" cy="125" rx="14" ry="53" fill="#bae6fd" fillOpacity="0.55" stroke="#0284c7" strokeWidth="1.5" />
          <ellipse cx="215" cy="125" rx="16" ry="62" fill="#7dd3fc" fillOpacity="0.45" stroke="#dc2626" strokeWidth="1.6" strokeDasharray="4 2" />
          <ellipse cx="315" cy="125" rx="18" ry="73" fill="#bae6fd" fillOpacity="0.65" stroke="#1d4ed8" strokeWidth="1.8" />

          {/* Hệ trục tọa độ Oxy */}
          <line x1="25" y1="125" x2="395" y2="125" stroke="#0f172a" strokeWidth="1.8" markerEnd="url(#spsol-arr)" />
          <line x1="55" y1="225" x2="55" y2="18" stroke="#0f172a" strokeWidth="1.8" markerEnd="url(#spsol-arr)" />

          {/* Đường sinh trên y = f(x) và đường đối xứng dưới */}
          <path d="M 105 72 C 170 42, 240 82, 315 52" fill="none" stroke="#1d4ed8" strokeWidth="2.4" />
          <path d="M 105 178 C 170 208, 240 168, 315 198" fill="none" stroke="#1d4ed8" strokeWidth="2" />

          {/* Bán kính thiết diện R = |f(x)| */}
          <line x1="215" y1="125" x2="215" y2="63" stroke="#dc2626" strokeWidth="2" />
          <circle cx="215" cy="125" r="3" fill="#dc2626" />

          <text x="38" y="142" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">O</text>
          <text x="386" y="144" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">x</text>
          <text x="38" y="26" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">y</text>
          <text x="98" y="142" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">a</text>
          <text x="208" y="142" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">x</text>
          <text x="304" y="142" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">b</text>
          <text x="222" y="96" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="13" fontStyle="italic" fontWeight="bold">f(x)</text>
          <text x="180" y="42" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">y = f(x)</text>
        </svg>
      );

    /* =====================================================================
       23. MẶT PHẲNG (α) VỚI VECTƠ PHÁP TUYẾN n = [u, v] VÀ KHOẢNG CÁCH MH
       ===================================================================== */
    case 'sp_oxyz_plane_normal':
      return (
        <svg
          viewBox="0 0 410 245"
          className="w-full max-w-md mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
        >
          <defs>
            <marker id="sppln-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#dc2626" />
            </marker>
            <marker id="sppln-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#1d4ed8" />
            </marker>
          </defs>

          {/* Mặt phẳng (α) hình bình hành */}
          <polygon points="45,195 295,195 365,120 115,120" fill="#e0f2fe" fillOpacity="0.65" stroke="#0f172a" strokeWidth="1.8" />
          <path d="M 45 195 A 36 36 0 0 1 82 195 L 68 170 Z" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.2" />
          <text x="64" y="189" fill="#0369a1" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">α</text>

          {/* Điểm M0 và cặp VTCP u, v, VTPT n */}
          <line x1="155" y1="162" x2="235" y2="174" stroke="#1d4ed8" strokeWidth="2.1" markerEnd="url(#sppln-blue)" />
          <line x1="155" y1="162" x2="205" y2="132" stroke="#1d4ed8" strokeWidth="2.1" markerEnd="url(#sppln-blue)" />
          <line x1="155" y1="162" x2="155" y2="42" stroke="#dc2626" strokeWidth="2.5" markerEnd="url(#sppln-red)" />
          <polyline points="155,148 168,150 168,164" fill="none" stroke="#dc2626" strokeWidth="1.3" />

          {/* Điểm M và hình chiếu vuông góc H (khoảng cách d(M, (α)) = MH) */}
          <line x1="285" y1="55" x2="285" y2="158" stroke="#0284c7" strokeWidth="1.9" strokeDasharray="5 3" />
          <polyline points="285,145 297,145 297,158" fill="none" stroke="#0284c7" strokeWidth="1.3" />

          <circle cx="155" cy="162" r="3.5" fill="#0f172a" />
          <circle cx="285" cy="55" r="3.5" fill="#dc2626" />
          <circle cx="285" cy="158" r="3.5" fill="#0284c7" />

          <text x="125" y="172" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">M₀</text>
          <text x="132" y="48" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">n⃗</text>
          <text x="238" y="182" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">u⃗</text>
          <text x="212" y="135" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">v⃗</text>
          <text x="294" y="56" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">M</text>
          <text x="294" y="172" fill="#0284c7" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">H</text>
        </svg>
      );

    /* =====================================================================
       24. MẶT PHẲNG ĐOẠN CHẮN CẮT 3 TRỤC TẠI A(a;0;0), B(0;b;0), C(0;0;c)
       ===================================================================== */
    case 'sp_oxyz_plane_intercepts':
      return (
        <svg
          viewBox="0 0 410 250"
          className="w-full max-w-md mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
        >
          <defs>
            <marker id="spintc-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
            </marker>
          </defs>

          {/* O(145, 150), A(68, 208) trên Ox, B(310, 150) trên Oy, C(145, 42) trên Oz */}
          <polygon points="68,208 310,150 145,42" fill="#bae6fd" fillOpacity="0.6" stroke="#1d4ed8" strokeWidth="2.1" />

          {/* Phần trục khuất sau mặt phẳng (ABC) vẽ nét đứt */}
          <line x1="145" y1="150" x2="68" y2="208" stroke="#475569" strokeWidth="1.6" strokeDasharray="5 3" />
          <line x1="145" y1="150" x2="310" y2="150" stroke="#475569" strokeWidth="1.6" strokeDasharray="5 3" />
          <line x1="145" y1="150" x2="145" y2="42" stroke="#475569" strokeWidth="1.6" strokeDasharray="5 3" />

          {/* Phần trục bên ngoài vẽ nét liền */}
          <line x1="68" y1="208" x2="38" y2="230" stroke="#0f172a" strokeWidth="1.8" markerEnd="url(#spintc-arr)" />
          <line x1="310" y1="150" x2="375" y2="150" stroke="#0f172a" strokeWidth="1.8" markerEnd="url(#spintc-arr)" />
          <line x1="145" y1="42" x2="145" y2="15" stroke="#0f172a" strokeWidth="1.8" markerEnd="url(#spintc-arr)" />

          <circle cx="145" cy="150" r="3" fill="#0f172a" />
          <circle cx="68" cy="208" r="3.8" fill="#dc2626" />
          <circle cx="310" cy="150" r="3.8" fill="#dc2626" />
          <circle cx="145" cy="42" r="3.8" fill="#dc2626" />

          <text x="128" y="148" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">O</text>
          <text x="20" y="236" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">x</text>
          <text x="380" y="155" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">y</text>
          <text x="126" y="22" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">z</text>
          <text x="74" y="224" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">A(a;0;0)</text>
          <text x="285" y="172" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">B(0;b;0)</text>
          <text x="155" y="45" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">C(0;0;c)</text>
        </svg>
      );

    /* =====================================================================
       25. ĐƯỜNG THẲNG Δ TRONG KHÔNG GIAN Oxyz VỚI ĐIỂM M0 VÀ VTCP u
       ===================================================================== */
    case 'sp_oxyz_line_3d':
      return (
        <svg
          viewBox="0 0 410 250"
          className="w-full max-w-md mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
        >
          <defs>
            <marker id="spln-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
            </marker>
            <marker id="spln-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#dc2626" />
            </marker>
          </defs>

          {/* Hệ trục Oxyz */}
          <line x1="135" y1="160" x2="42" y2="230" stroke="#0f172a" strokeWidth="1.8" markerEnd="url(#spln-arr)" />
          <line x1="135" y1="160" x2="375" y2="160" stroke="#0f172a" strokeWidth="1.8" markerEnd="url(#spln-arr)" />
          <line x1="135" y1="160" x2="135" y2="18" stroke="#0f172a" strokeWidth="1.8" markerEnd="url(#spln-arr)" />

          {/* Đường thẳng Δ đi qua M0(165, 118) và M(295, 66) */}
          <line x1="75" y1="154" x2="355" y2="42" stroke="#1d4ed8" strokeWidth="2.1" />
          {/* Vectơ chỉ phương u trên đường thẳng Δ */}
          <line x1="165" y1="118" x2="265" y2="78" stroke="#dc2626" strokeWidth="2.6" markerEnd="url(#spln-red)" />

          {/* Đường gióng của M0 */}
          <line x1="165" y1="118" x2="165" y2="185" stroke="#64748b" strokeWidth="1.3" strokeDasharray="4 3" />
          <line x1="135" y1="160" x2="165" y2="185" stroke="#64748b" strokeWidth="1.3" strokeDasharray="4 3" />

          <circle cx="135" cy="160" r="3" fill="#0f172a" />
          <circle cx="165" cy="118" r="4" fill="#0f172a" />
          <circle cx="305" cy="62" r="3.5" fill="#1d4ed8" />

          <text x="118" y="158" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">O</text>
          <text x="24" y="236" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">x</text>
          <text x="380" y="165" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">y</text>
          <text x="116" y="24" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">z</text>
          <text x="148" y="106" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">M₀</text>
          <text x="210" y="84" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">u⃗</text>
          <text x="308" y="80" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">M</text>
          <text x="360" y="45" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">Δ</text>
        </svg>
      );

    /* =====================================================================
       26. GÓC GIỮA ĐƯỜNG THẲNG Δ (VTCP u) VÀ MẶT PHẲNG (P) (VTPT n)
       ===================================================================== */
    case 'sp_oxyz_angle_line_plane':
      return (
        <svg
          viewBox="0 0 410 245"
          className="w-full max-w-md mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
        >
          <defs>
            <marker id="spang-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#dc2626" />
            </marker>
            <marker id="spang-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#1d4ed8" />
            </marker>
          </defs>

          {/* Mặt phẳng (P) */}
          <polygon points="45,198 305,198 370,128 110,128" fill="#e0f2fe" fillOpacity="0.65" stroke="#0f172a" strokeWidth="1.8" />
          <text x="64" y="190" fill="#0369a1" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">P</text>

          {/* Giao điểm I(160, 165), hình chiếu H(285, 165) và đường chiếu Δ' */}
          <line x1="120" y1="165" x2="325" y2="165" stroke="#0284c7" strokeWidth="1.6" strokeDasharray="5 3" />
          <line x1="285" y1="65" x2="285" y2="165" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 3" />
          <polyline points="273,165 273,153 285,153" fill="none" stroke="#0284c7" strokeWidth="1.3" />

          {/* VTPT n vuông góc với (P) tại I */}
          <line x1="160" y1="165" x2="160" y2="35" stroke="#dc2626" strokeWidth="2.4" markerEnd="url(#spang-red)" />
          <polyline points="160,152 172,152 172,165" fill="none" stroke="#dc2626" strokeWidth="1.3" />

          {/* Đường thẳng Δ và VTCP u */}
          <line x1="115" y1="201" x2="325" y2="33" stroke="#1d4ed8" strokeWidth="1.8" />
          <line x1="160" y1="165" x2="285" y2="65" stroke="#1d4ed8" strokeWidth="2.5" markerEnd="url(#spang-blue)" />

          {/* Cung góc φ = (Δ, (P)) */}
          <path d="M 205 165 A 45 45 0 0 0 195 137" fill="none" stroke="#0284c7" strokeWidth="1.8" />
          <text x="212" y="155" fill="#0369a1" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">φ</text>

          <circle cx="160" cy="165" r="3.6" fill="#0f172a" />
          <circle cx="285" cy="165" r="3.2" fill="#0284c7" />

          <text x="142" y="182" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">I</text>
          <text x="288" y="182" fill="#0284c7" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">H</text>
          <text x="138" y="42" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">n⃗</text>
          <text x="235" y="88" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">u⃗</text>
          <text x="332" y="38" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold">Δ</text>
        </svg>
      );

    /* =====================================================================
       27. MẶT CẦU (S) TÂM I(a;b;c) BÁN KÍNH R TRONG HỆ TRỤC Oxyz
       ===================================================================== */
    case 'sp_oxyz_sphere':
      return (
        <svg
          viewBox="0 0 410 250"
          className="w-full max-w-md mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
        >
          <defs>
            <marker id="spsph-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#0f172a" />
            </marker>
            <radialGradient id="spsph-grad" cx="38%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#f0f9ff" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#bae6fd" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.35" />
            </radialGradient>
          </defs>

          {/* Hệ trục Oxyz */}
          <line x1="120" y1="168" x2="35" y2="232" stroke="#0f172a" strokeWidth="1.8" markerEnd="url(#spsph-arr)" />
          <line x1="120" y1="168" x2="375" y2="168" stroke="#0f172a" strokeWidth="1.8" markerEnd="url(#spsph-arr)" />
          <line x1="120" y1="168" x2="120" y2="18" stroke="#0f172a" strokeWidth="1.8" markerEnd="url(#spsph-arr)" />

          {/* Mặt cầu (S) tâm I(235, 108), bán kính R = 68 */}
          <circle cx="235" cy="108" r="68" fill="url(#spsph-grad)" stroke="#0284c7" strokeWidth="2" />
          {/* Đường xích đạo của mặt cầu */}
          <path d="M 167 108 A 68 20 0 0 1 303 108" fill="none" stroke="#0369a1" strokeWidth="1.4" strokeDasharray="5 3" />
          <path d="M 167 108 A 68 20 0 0 0 303 108" fill="none" stroke="#0284c7" strokeWidth="1.7" />

          {/* Bán kính IM = R */}
          <line x1="235" y1="108" x2="288" y2="65" stroke="#dc2626" strokeWidth="2.2" />

          <circle cx="120" cy="168" r="3" fill="#0f172a" />
          <circle cx="235" cy="108" r="3.8" fill="#dc2626" />
          <circle cx="288" cy="65" r="3.5" fill="#1d4ed8" />

          <text x="104" y="165" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">O</text>
          <text x="18" y="236" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">x</text>
          <text x="380" y="173" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">y</text>
          <text x="102" y="24" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">z</text>
          <text x="206" y="124" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">I(a;b;c)</text>
          <text x="252" y="80" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold">R</text>
          <text x="296" y="64" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="14" fontStyle="italic" fontWeight="bold">M(x;y;z)</text>
        </svg>
      );

    /* =====================================================================
       28. SƠ ĐỒ HÌNH CÂY XÁC SUẤT CÓ ĐIỀU KIỆN & CÔNG THỨC BAYES
       ===================================================================== */
    case 'sp_prob_tree_bayes':
      return (
        <svg
          viewBox="0 0 430 235"
          className="w-full max-w-md mx-auto h-auto select-none rounded-lg bg-white border border-slate-300 shadow-xs"
        >
          <defs>
            <marker id="spprb-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1.5 L 9 5 L 0 8.5 L 2 5 z" fill="#1e293b" />
            </marker>
          </defs>

          {/* Các nhánh cấp 1 */}
          <line x1="58" y1="118" x2="148" y2="66" stroke="#1d4ed8" strokeWidth="2" markerEnd="url(#spprb-arr)" />
          <line x1="58" y1="118" x2="148" y2="170" stroke="#0284c7" strokeWidth="2" markerEnd="url(#spprb-arr)" />

          {/* Các nhánh cấp 2 từ A */}
          <line x1="186" y1="62" x2="282" y2="36" stroke="#dc2626" strokeWidth="2" markerEnd="url(#spprb-arr)" />
          <line x1="186" y1="62" x2="282" y2="88" stroke="#64748b" strokeWidth="1.7" markerEnd="url(#spprb-arr)" />

          {/* Các nhánh cấp 2 từ A ngang */}
          <line x1="186" y1="174" x2="282" y2="148" stroke="#dc2626" strokeWidth="2" markerEnd="url(#spprb-arr)" />
          <line x1="186" y1="174" x2="282" y2="200" stroke="#64748b" strokeWidth="1.7" markerEnd="url(#spprb-arr)" />

          {/* Nút gốc */}
          <circle cx="42" cy="118" r="16" fill="#f1f5f9" stroke="#0f172a" strokeWidth="1.7" />
          <text x="42" y="123" fill="#0f172a" fontFamily={MATH_SERIF} fontSize="15" fontWeight="bold" textAnchor="middle">Ω</text>

          {/* Nút A và A ngang */}
          <rect x="150" y="46" width="36" height="32" rx="6" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="1.8" />
          <text x="168" y="67" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold" textAnchor="middle">A</text>

          <rect x="150" y="158" width="36" height="32" rx="6" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.8" />
          <text x="168" y="180" fill="#0369a1" fontFamily={MATH_SERIF} fontSize="16" fontStyle="italic" fontWeight="bold" textAnchor="middle">Ā</text>

          {/* Các nút lá B và B ngang */}
          <rect x="285" y="20" width="34" height="28" rx="6" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.8" />
          <text x="302" y="39" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold" textAnchor="middle">B</text>

          <rect x="285" y="74" width="34" height="28" rx="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1.5" />
          <text x="302" y="94" fill="#475569" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold" textAnchor="middle">B̄</text>

          <rect x="285" y="134" width="34" height="28" rx="6" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.8" />
          <text x="302" y="153" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold" textAnchor="middle">B</text>

          <rect x="285" y="186" width="34" height="28" rx="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1.5" />
          <text x="302" y="206" fill="#475569" fontFamily={MATH_SERIF} fontSize="15" fontStyle="italic" fontWeight="bold" textAnchor="middle">B̄</text>

          {/* Nhãn xác suất trên các nhánh */}
          <text x="92" y="82" fill="#1d4ed8" fontFamily={MATH_SERIF} fontSize="13" fontStyle="italic" fontWeight="bold">P(A)</text>
          <text x="88" y="164" fill="#0369a1" fontFamily={MATH_SERIF} fontSize="13" fontStyle="italic" fontWeight="bold">P(Ā)</text>
          <text x="232" y="38" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="12" fontStyle="italic" fontWeight="bold" textAnchor="middle">P(B|A)</text>
          <text x="232" y="92" fill="#475569" fontFamily={MATH_SERIF} fontSize="12" fontStyle="italic" textAnchor="middle">P(B̄|A)</text>
          <text x="232" y="152" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="12" fontStyle="italic" fontWeight="bold" textAnchor="middle">P(B|Ā)</text>
          <text x="232" y="204" fill="#475569" fontFamily={MATH_SERIF} fontSize="12" fontStyle="italic" textAnchor="middle">P(B̄|Ā)</text>

          {/* Kết quả xác suất nhánh tích */}
          <text x="328" y="38" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="12" fontStyle="italic" fontWeight="bold">P(A)·P(B|A)</text>
          <text x="328" y="152" fill="#dc2626" fontFamily={MATH_SERIF} fontSize="12" fontStyle="italic" fontWeight="bold">P(Ā)·P(B|Ā)</text>
        </svg>
      );

    default:
      return null;
  }
}
