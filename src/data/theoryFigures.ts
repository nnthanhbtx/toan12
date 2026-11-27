import type { TheoryFigure } from './theoryCatalog';

/**
 * Toàn bộ hình vẽ minh họa chính xác 100% trích trực tiếp từ
 * SGK Toán 12 - Kết nối tri thức với cuộc sống (Tập 1 & Tập 2),
 * ánh xạ theo khóa `${lessonId}:${sectionIndex}:${boxIndex}`.
 */
export const THEORY_BOX_FIGURES: Record<string, TheoryFigure[]> = {
  // ===== CHƯƠNG I (TẬP 1) =====
  'bai-1:0:0': [
    {
      src: '/assets/sgk-figures/b01_h1_3.png',
      caption: 'Hình 1.3: Đồ thị hàm số đồng biến đi lên (a) và nghịch biến đi xuống (b) từ trái sang phải trên $(a; b)$.',
      source: 'SGK T1 · tr.6',
    },
  ],
  'bai-1:1:0': [
    {
      src: '/assets/sgk-figures/b01_h1_7.png',
      caption: 'Hình 1.7: Minh họa điểm cực đại và điểm cực tiểu trên đồ thị hàm số $y = x^3 + 3x^2 - 4$.',
      source: 'SGK T1 · tr.9',
    },
  ],
  'bai-1:1:1': [
    {
      src: '/assets/sgk-figures/b01_bbt_ct.png',
      caption: 'Hai bảng biến thiên tóm tắt dấu hiệu nhận biết cực tiểu và cực đại qua sự đổi dấu của $f\'(x)$.',
      source: 'SGK T1 · tr.11',
    },
    {
      src: '/assets/sgk-figures/b01_h1_10.png',
      caption: 'Hình 1.10: Đồ thị $y = x^3$ có $f\'(0)=0$ nhưng $f\'(x)$ không đổi dấu nên $x=0$ không là điểm cực trị.',
      source: 'SGK T1 · tr.11',
    },
  ],

  'bai-2:0:0': [
    {
      src: '/assets/sgk-figures/b02_h1_15.png',
      caption: 'Hình 1.15: Đồ thị $y = x^2 - 2x$ trên $[0; 3]$ minh họa GTLN $M = 3$ và GTNN $m = -1$.',
      source: 'SGK T1 · tr.15',
    },
  ],
  'bai-2:1:0': [
    {
      src: '/assets/sgk-figures/b02_h1_16.png',
      caption: 'Hình 1.16: Đồ thị hàm số $y = x^3 - 2x^2 + 1$ trên đoạn $[-1; 2]$ minh họa tìm GTLN, GTNN trên đoạn.',
      source: 'SGK T1 · tr.17',
    },
  ],

  'bai-3:0:0': [
    {
      src: '/assets/sgk-figures/b03_h1_20.png',
      caption: 'Hình 1.20: Đường thẳng $y = y_0$ là tiệm cận ngang của đồ thị hàm số khi $x \\to +\\infty$ và khi $x \\to -\\infty$.',
      source: 'SGK T1 · tr.20',
    },
  ],
  'bai-3:1:0': [
    {
      src: '/assets/sgk-figures/b03_h1_23.png',
      caption: 'Hình 1.23: Bốn dạng đồ thị minh họa đường thẳng $x = x_0$ là tiệm cận đứng khi $x \\to x_0^-$ và $x \\to x_0^+$.',
      source: 'SGK T1 · tr.22',
    },
  ],
  'bai-3:2:0': [
    {
      src: '/assets/sgk-figures/b03_h1_25.png',
      caption: 'Hình 1.25: Đường thẳng $y = ax + b$ là tiệm cận xiên của đồ thị hàm số khi $x \\to +\\infty$ và khi $x \\to -\\infty$.',
      source: 'SGK T1 · tr.23',
    },
  ],

  'bai-4:1:0': [
    {
      src: '/assets/sgk-figures/b04_h1_28.png',
      caption: 'Hình 1.28: Đồ thị hàm bậc ba có 2 cực trị ($y = -x^3 + 3x^2 - 4$) và tâm đối xứng $I(1; -2)$.',
      source: 'SGK T1 · tr.27',
    },
    {
      src: '/assets/sgk-figures/b04_h1_29.png',
      caption: 'Hình 1.29: Đồ thị hàm bậc ba không có cực trị ($y = x^3 - 2x^2 + 2x - 1$) và tâm đối xứng.',
      source: 'SGK T1 · tr.28',
    },
  ],
  'bai-4:1:1': [
    {
      src: '/assets/sgk-figures/b04_h1_30.png',
      caption: 'Hình 1.30: Đồ thị hàm phân thức $y = \\frac{x+1}{x-2}$ với TCĐ $x = 2$, TCN $y = 1$ và tâm đối xứng $I(2; 1)$.',
      source: 'SGK T1 · tr.29',
    },
  ],
  'bai-4:1:2': [
    {
      src: '/assets/sgk-figures/b04_h1_31.png',
      caption: 'Hình 1.31: Đồ thị hàm $y = \\frac{x^2-x-1}{x-2}$ (có 2 cực trị, TCĐ $x = 2$, TCX $y = x + 1$).',
      source: 'SGK T1 · tr.30',
    },
    {
      src: '/assets/sgk-figures/b04_h1_32.png',
      caption: 'Hình 1.32: Đồ thị hàm $y = \\frac{x^2+x-2}{x+1}$ (không có cực trị, TCĐ $x = -1$, TCX $y = x$).',
      source: 'SGK T1 · tr.31',
    },
  ],

  'bai-5:0:0': [
    {
      src: '/assets/sgk-figures/b05_h1_34.png',
      caption: 'Hình 1.34: Đồ thị hàm chi phí $C(x) = \\frac{300x}{100-x}$ minh họa ứng dụng đạo hàm và tiệm cận trong thực tiễn.',
      source: 'SGK T1 · tr.36',
    },
  ],
  'bai-5:1:1': [
    {
      src: '/assets/sgk-figures/b05_h1_36.png',
      caption: 'Hình 1.36: Đồ thị hàm lợi nhuận $P(x)$ xác định điểm hoà vốn và sản lượng tối ưu trong Kinh tế học.',
      source: 'SGK T1 · tr.40',
    },
  ],

  // ===== CHƯƠNG II (TẬP 1) =====
  'bai-6:0:0': [
    {
      src: '/assets/sgk-figures/b06_h2_4.png',
      caption: 'Hình 2.4: Đường thẳng $d$ đi qua điểm đầu và điểm cuối của vectơ $\\vec{a}$ là giá của vectơ $\\vec{a}$.',
      source: 'SGK T1 · tr.46',
    },
  ],
  'bai-6:0:1': [
    {
      src: '/assets/sgk-figures/b06_h2_7.png',
      caption: 'Hình 2.7: Hình hộp $ABCD.A\'B\'C\'D\'$ minh họa hai vectơ cùng phương, cùng hướng/ngược hướng và bằng nhau.',
      source: 'SGK T1 · tr.47',
    },
  ],
  'bai-6:1:0': [
    {
      src: '/assets/sgk-figures/b06_h2_11.png',
      caption: 'Hình 2.11: Minh họa tổng $\\vec{a} + \\vec{b} = \\overrightarrow{AC}$ của hai vectơ trong không gian (quy tắc ba điểm).',
      source: 'SGK T1 · tr.49',
    },
  ],
  'bai-6:1:1': [
    {
      src: '/assets/sgk-figures/b06_h2_14.png',
      caption: 'Hình 2.14: Quy tắc hình hộp $\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA\'} = \\overrightarrow{AC\'}$.',
      source: 'SGK T1 · tr.50',
    },
  ],
  'bai-6:1:2': [
    {
      src: '/assets/sgk-figures/b06_vec_doi.png',
      caption: 'Minh họa hai vectơ đối nhau $\\vec{a}$ và $-\\vec{a}$ (cùng độ dài và ngược hướng).',
      source: 'SGK T1 · tr.51',
    },
  ],
  'bai-6:2:0': [
    {
      src: '/assets/sgk-figures/b06_h2_19.png',
      caption: 'Hình 2.19: Trọng tâm $G$ của tam giác $BCD$ và trọng tâm $I$ của tứ diện $ABCD$.',
      source: 'SGK T1 · tr.54',
    },
  ],
  'bai-6:3:0': [
    {
      src: '/assets/sgk-figures/b06_h2_22.png',
      caption: 'Hình 2.22: Góc giữa hai vectơ $\\vec{a}, \\vec{b}$ trong không gian là $\\widehat{AOB}$ với $\\overrightarrow{OA}=\\vec{a}, \\overrightarrow{OB}=\\vec{b}$.',
      source: 'SGK T1 · tr.55',
    },
    {
      src: '/assets/sgk-figures/b06_h2_23.png',
      caption: 'Hình 2.23: Xác định góc $(\\overrightarrow{AB}, \\overrightarrow{CD}) = \\widehat{BAE}$ bằng cách lấy $\\overrightarrow{AE} = \\overrightarrow{CD}$.',
      source: 'SGK T1 · tr.55',
    },
  ],

  'bai-7:0:0': [
    {
      src: '/assets/sgk-figures/b07_h2_35.png',
      caption: 'Hình 2.35: Hệ trục toạ độ Descartes vuông góc $Oxyz$ và ba vectơ đơn vị $\\vec{i}, \\vec{j}, \\vec{k}$.',
      source: 'SGK T1 · tr.60',
    },
  ],
  'bai-7:1:0': [
    {
      src: '/assets/sgk-figures/b07_h2_37.png',
      caption: 'Hình 2.37: Xác định toạ độ của điểm $M(x; y; z)$ qua hình hộp chữ nhật $OADB.CFME$.',
      source: 'SGK T1 · tr.61',
    },
  ],
  'bai-7:1:1': [
    {
      src: '/assets/sgk-figures/b07_h2_41.png',
      caption: 'Hình 2.41: Toạ độ của vectơ $\\vec{a} = \\overrightarrow{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k}$ trong không gian $Oxyz$.',
      source: 'SGK T1 · tr.62',
    },
  ],

  'bai-8:1:0': [
    {
      src: '/assets/sgk-figures/b08_h2_48.png',
      caption: 'Hình 2.48: Gắn hệ trục toạ độ $Oxyz$ tính tích vô hướng và góc giữa hai vectơ trong hình chóp.',
      source: 'SGK T1 · tr.69',
    },
    {
      src: '/assets/sgk-figures/b08_h2_50.png',
      caption: 'Hình 2.50: Ứng dụng toạ độ vectơ tính khoảng cách giữa hai vật thể trong không gian $Oxyz$.',
      source: 'SGK T1 · tr.71',
    },
  ],

  // ===== CHƯƠNG III (TẬP 1) =====
  'bai-9:0:0': [
    {
      src: '/assets/sgk-figures/b09_b3_1.png',
      caption: 'Bảng 3.1: Mẫu số liệu ghép nhóm chuẩn SGK với các nhóm $[a_1; a_2), \\dots, [a_k; a_{k+1})$ và tần số $m_1, \\dots, m_k$.',
      source: 'SGK T1 · tr.76',
    },
  ],
  'bai-9:1:0': [
    {
      src: '/assets/sgk-figures/b09_qr_box.png',
      caption: 'Khung công thức tính tứ phân vị thứ $r$ ($Q_r$ với $r = 1, 2, 3$) của mẫu số liệu ghép nhóm.',
      source: 'SGK T1 · tr.77',
    },
  ],

  'bai-10:0:0': [
    {
      src: '/assets/sgk-figures/b09_b3_1.png',
      caption: 'Bảng 3.1: Mẫu số liệu ghép nhóm dùng để thiết lập công thức phương sai $s^2$ và độ lệch chuẩn $s$.',
      source: 'SGK T1 · tr.76 & 80',
    },
  ],
  'bai-10:1:0': [
    {
      src: '/assets/sgk-figures/b10_b3_2_3.png',
      caption: 'Bảng 3.2 & Bảng 3.3: Ví dụ minh họa không nên dùng độ lệch chuẩn so sánh rủi ro khi lợi nhuận trung bình khác nhau nhiều.',
      source: 'SGK T1 · tr.83',
    },
  ],

  // ===== CHƯƠNG IV (TẬP 2) =====
  'bai-11:0:1': [
    {
      src: '/assets/sgk-figures/b11_h4_2.png',
      caption: 'Hình 4.2: Sơ đồ mối quan hệ ngược nhau giữa phép tính đạo hàm và phép tìm nguyên hàm.',
      source: 'SGK T2 · tr.6',
    },
  ],
  'bai-11:2:1': [
    {
      src: '/assets/sgk-figures/b11_bang_nh.png',
      caption: 'Bảng tổng kết nguyên hàm của một số hàm số thường gặp chuẩn 100% SGK.',
      source: 'SGK T2 · tr.10',
    },
  ],

  'bai-12:0:0': [
    {
      src: '/assets/sgk-figures/b12_h4_7.png',
      caption: 'Hình 4.7: Hình thang cong giới hạn bởi đồ thị $y = f(x)$ không âm, trục hoành và $x = a, x = b$.',
      source: 'SGK T2 · tr.14',
    },
  ],
  'bai-12:0:1': [
    {
      src: '/assets/sgk-figures/b12_h4_9.png',
      caption: 'Hình 4.9: Ý nghĩa hình học của tích phân $S = \\int_a^b f(x)\\,dx$ với $f(x) \\ge 0$ trên $[a; b]$.',
      source: 'SGK T2 · tr.15',
    },
  ],

  'bai-13:0:0': [
    {
      src: '/assets/sgk-figures/b13_h4_12.png',
      caption: 'Hình 4.12: Hình phẳng giới hạn bởi đồ thị $y = f(x)$, trục hoành và hai đường thẳng $x = a, x = b$.',
      source: 'SGK T2 · tr.19',
    },
  ],
  'bai-13:0:1': [
    {
      src: '/assets/sgk-figures/b13_h4_16.png',
      caption: 'Hình 4.16: Hình phẳng giới hạn bởi hai đồ thị $y = f(x)$, $y = g(x)$ và $x = a, x = b$.',
      source: 'SGK T2 · tr.20',
    },
  ],
  'bai-13:1:0': [
    {
      src: '/assets/sgk-figures/b13_h4_21.png',
      caption: 'Hình 4.21: Vật thể giới hạn bởi hai mặt phẳng $x = a, x = b$ có diện tích mặt cắt $S(x)$.',
      source: 'SGK T2 · tr.22',
    },
  ],
  'bai-13:1:1': [
    {
      src: '/assets/sgk-figures/b13_h4_26.png',
      caption: 'Hình 4.26: Khối tròn xoay sinh ra khi quay hình phẳng giới hạn bởi $y = f(x)$, trục $Ox$, $x = a, x = b$ quanh trục $Ox$.',
      source: 'SGK T2 · tr.24',
    },
  ],

  // ===== CHƯƠNG V (TẬP 2) =====
  'bai-14:0:0': [
    {
      src: '/assets/sgk-figures/b14_h5_2.png',
      caption: 'Hình 5.2: Vectơ pháp tuyến $\\vec{n} \\neq \\vec{0}$ có giá vuông góc với mặt phẳng $(\\alpha)$.',
      source: 'SGK T2 · tr.30',
    },
  ],
  'bai-14:0:1': [
    {
      src: '/assets/sgk-figures/b14_h5_4.png',
      caption: 'Hình 5.4: Tích có hướng $[\\vec{u}, \\vec{v}]$ vuông góc với cả hai vectơ $\\vec{u}$ và $\\vec{v}$.',
      source: 'SGK T2 · tr.30',
    },
  ],
  'bai-14:0:2': [
    {
      src: '/assets/sgk-figures/b14_h5_5.png',
      caption: 'Hình 5.5: Cặp vectơ chỉ phương $\\vec{u}, \\vec{v}$ của mặt phẳng $(P)$ cho vectơ pháp tuyến $[\\vec{u}, \\vec{v}]$.',
      source: 'SGK T2 · tr.31',
    },
  ],
  'bai-14:1:1': [
    {
      src: '/assets/sgk-figures/b14_h5_8.png',
      caption: 'Hình 5.8: Mặt phẳng theo đoạn chắn $\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$ cắt ba trục toạ độ tại $A, B, C$.',
      source: 'SGK T2 · tr.35',
    },
  ],
  'bai-14:2:0': [
    {
      src: '/assets/sgk-figures/b14_h5_9.png',
      caption: 'Hình 5.9: Hai mặt phẳng vuông góc $(\\alpha) \\perp (\\beta) \\Leftrightarrow \\vec{n} \\perp \\vec{n}\'$.',
      source: 'SGK T2 · tr.36',
    },
  ],
  'bai-14:2:1': [
    {
      src: '/assets/sgk-figures/b14_h5_11.png',
      caption: 'Hình 5.11: Hai mặt phẳng song song $(\\alpha) \\parallel (\\beta)$ có hai vectơ pháp tuyến $\\vec{n}, \\vec{n}\'$ cùng phương.',
      source: 'SGK T2 · tr.37',
    },
  ],
  'bai-14:2:2': [
    {
      src: '/assets/sgk-figures/b14_h5_13.png',
      caption: 'Hình 5.13: Khoảng cách $MN = d(M, (P))$ từ điểm $M(x_0; y_0; z_0)$ đến mặt phẳng $(P)$.',
      source: 'SGK T2 · tr.38',
    },
  ],

  'bai-15:0:0': [
    {
      src: '/assets/sgk-figures/b15_h5_23.png',
      caption: 'Hình 5.23: Vectơ chỉ phương $\\vec{u} \\neq \\vec{0}$ có giá song song hoặc trùng với đường thẳng $\\Delta$.',
      source: 'SGK T2 · tr.41',
    },
  ],
  'bai-15:0:1': [
    {
      src: '/assets/sgk-figures/b15_h5_26.png',
      caption: 'Hình 5.26: Đường thẳng $\\Delta$ đi qua $A(x_0; y_0; z_0)$ và nhận $\\vec{u} = (a; b; c)$ làm vectơ chỉ phương.',
      source: 'SGK T2 · tr.42',
    },
  ],
  'bai-15:1:0': [
    {
      src: '/assets/sgk-figures/b15_h5_28.png',
      caption: 'Hình 5.28: Hai đường thẳng vuông góc $\\Delta_1 \\perp \\Delta_2 \\Leftrightarrow \\vec{u}_1 \\perp \\vec{u}_2$.',
      source: 'SGK T2 · tr.45',
    },
  ],
  'bai-15:1:1': [
    {
      src: '/assets/sgk-figures/b15_h5_29.png',
      caption: 'Hình 5.29: Xét vị trí tương đối giữa hai đường thẳng $\\Delta_1, \\Delta_2$ qua điểm $A_1, A_2$ và VTCP $\\vec{u}_1, \\vec{u}_2$.',
      source: 'SGK T2 · tr.46',
    },
  ],

  'bai-16:0:0': [
    {
      src: '/assets/sgk-figures/b16_h5_34.png',
      caption: 'Hình 5.34: Góc giữa hai đường thẳng $\\Delta, \\Delta\'$ và mối liên hệ với góc giữa hai vectơ chỉ phương $\\vec{u}, \\vec{u}\'$.',
      source: 'SGK T2 · tr.50',
    },
  ],
  'bai-16:1:0': [
    {
      src: '/assets/sgk-figures/b16_h5_35.png',
      caption: 'Hình 5.35: Góc giữa đường thẳng $\\Delta$ và mặt phẳng $(P)$ xác định qua $\\vec{u}$ và $\\vec{n}$.',
      source: 'SGK T2 · tr.51',
    },
  ],
  'bai-16:2:0': [
    {
      src: '/assets/sgk-figures/b16_h5_36.png',
      caption: 'Hình 5.36: Góc giữa hai mặt phẳng $(P)$ và $(Q)$ xác định qua hai vectơ pháp tuyến $\\vec{n}, \\vec{n}\'$.',
      source: 'SGK T2 · tr.52',
    },
  ],

  'bai-17:0:0': [
    {
      src: '/assets/sgk-figures/b17_h5_41.png',
      caption: 'Hình 5.41: Mặt cầu $(S)$ tâm $I(a; b; c)$, bán kính $R$ trong không gian $Oxyz$.',
      source: 'SGK T2 · tr.54',
    },
  ],
  'bai-17:1:0': [
    {
      src: '/assets/sgk-figures/b17_h5_42.png',
      caption: 'Hình 5.42: Mô hình mặt cầu Trái Đất với Kinh tuyến gốc, Xích đạo và vị trí $P(\\alpha^\\circ N, \\beta^\\circ E)$.',
      source: 'SGK T2 · tr.57',
    },
    {
      src: '/assets/sgk-figures/b17_h5_43_44.png',
      caption: 'Hình 5.43 & Hình 5.44: Xác định toạ độ điểm $P(\\alpha^\\circ N, \\beta^\\circ E)$ và $Q(\\alpha^\\circ N, \\beta^\\circ W)$ trong hệ $Oxyz$.',
      source: 'SGK T2 · tr.57',
    },
  ],

  // ===== CHƯƠNG VI (TẬP 2) =====
  'bai-18:0:0': [
    {
      src: '/assets/sgk-figures/b18_bang_2x2.png',
      caption: 'Bảng dữ liệu thống kê $2 \\times 2$ minh họa ứng dụng tính xác suất có điều kiện trong thực tiễn.',
      source: 'SGK T2 · tr.66',
    },
  ],
  'bai-18:1:0': [
    {
      src: '/assets/sgk-figures/b18_cay.png',
      caption: 'Sơ đồ hình cây mô tả trực quan công thức nhân xác suất $P(AB) = P(A) \\cdot P(B|A)$.',
      source: 'SGK T2 · tr.69',
    },
  ],

  'bai-19:0:0': [
    {
      src: '/assets/sgk-figures/b19_h6_2.png',
      caption: 'Hình 6.2: Sơ đồ hình cây mô tả trực quan công thức xác suất toàn phần $P(B) = P(A)P(B|A) + P(\\bar{A})P(B|\\bar{A})$.',
      source: 'SGK T2 · tr.73',
    },
  ],
};
