import { LessonInfo } from './types';
import { ExamSet } from '../../types/exam';
import { makeMC, makeTF, makeSA, makeSO, makeLessonExam } from './helpers';

// BÀI 8. BIỂU THỨC TOẠ ĐỘ CỦA CÁC PHÉP TOÁN VECTƠ (Đề ôn số 1 & Đề ôn số 2)
function buildBai8Exam(variant: 1 | 2): ExamSet {
  const p = variant === 1 ? 'b8-d1' : 'b8-d2';
  // Vectơ a = (2; -1; 3) hoặc (3; -2; 1); vectơ b = (1; 4; -2) hoặc (2; 1; -4)
  const ax = variant === 1 ? 2 : 3;
  const ay = variant === 1 ? -1 : -2;
  const az = variant === 1 ? 3 : 1;
  const bx = variant === 1 ? 1 : 2;
  const by = variant === 1 ? 4 : 1;
  const bz = variant === 1 ? -2 : -4;
  // Tích vô hướng a . b: v1: 2 - 4 - 6 = -8; v2: 6 - 2 - 4 = 0
  const dotAB = ax * bx + ay * by + az * bz;

  const part1 = [
    makeMC(
      p,
      1,
      'Bài 8. Biểu thức toạ độ của các phép toán vectơ',
      `Trong không gian $Oxyz$, cho hai vectơ $\\vec{a} = (${ax}; ${ay}; ${az})$ và $\\vec{b} = (${bx}; ${by}; ${bz})$. Tọa độ của vectơ $\\vec{a} + \\vec{b}$ là:`,
      [
        `$(${ax + bx}; ${ay + by}; ${az + bz})$`,
        `$(${ax - bx}; ${ay - by}; ${az - bz})$`,
        `$(${ax * bx}; ${ay * by}; ${az * bz})$`,
        `$(${bx - ax}; ${by - ay}; ${bz - az})$`,
      ],
      'A',
      `Cộng từng tọa độ tương ứng: $\\vec{a} + \\vec{b} = (${ax} + ${bx}; ${ay} + ${by}; ${az} + (${bz})) = (${ax + bx}; ${ay + by}; ${az + bz})$.`,
      'Công thức cộng hai vectơ: $\\vec{a} + \\vec{b} = (x_1 + x_2; y_1 + y_2; z_1 + z_2)$.'
    ),
    makeMC(
      p,
      2,
      'Bài 8. Biểu thức toạ độ của các phép toán vectơ',
      `Trong không gian $Oxyz$, cho hai vectơ $\\vec{a} = (${ax}; ${ay}; ${az})$ và $\\vec{b} = (${bx}; ${by}; ${bz})$. Tọa độ của vectơ $\\vec{u} = 2\\vec{a} - \\vec{b}$ là:`,
      [
        `$(${2 * ax - bx}; ${2 * ay - by}; ${2 * az - bz})$`,
        `$(${2 * ax + bx}; ${2 * ay + by}; ${2 * az + bz})$`,
        `$(${ax - 2 * bx}; ${ay - 2 * by}; ${az - 2 * bz})$`,
        `$(${2 * ax - bx}; ${2 * ay + by}; ${2 * az - bz})$`,
      ],
      'A',
      `Ta có $2\\vec{a} = (${2 * ax}; ${2 * ay}; ${2 * az})$. Suy ra $2\\vec{a} - \\vec{b} = (${2 * ax - bx}; ${2 * ay - by}; ${2 * az - bz})$.`,
      'Tính tọa độ $k\\vec{a}$ trước rồi trừ từng thành phần tương ứng của $\\vec{b}$.'
    ),
    makeMC(
      p,
      3,
      'Bài 8. Biểu thức toạ độ của các phép toán vectơ',
      `Trong không gian $Oxyz$, tích vô hướng của hai vectơ $\\vec{a} = (${ax}; ${ay}; ${az})$ và $\\vec{b} = (${bx}; ${by}; ${bz})$ bằng:`,
      [`$${dotAB}$`, `$${-dotAB - 4}$`, `$${ax + by + bz}$`, `$${Math.abs(dotAB) + 6}$`],
      'A',
      `Áp dụng công thức tích vô hướng: $\\vec{a} \\cdot \\vec{b} = ${ax}\\cdot ${bx} + (${ay})\\cdot ${by} + ${az}\\cdot (${bz}) = ${dotAB}$.`,
      'Tích vô hướng của hai vectơ là một số thực: $\\vec{a}\\cdot\\vec{b} = x_1 x_2 + y_1 y_2 + z_1 z_2$.'
    ),
    makeMC(
      p,
      4,
      'Bài 8. Biểu thức toạ độ của các phép toán vectơ',
      `Trong không gian $Oxyz$, độ dài của vectơ $\\vec{u} = (${variant === 1 ? 2 : 3}; -${variant === 1 ? 3 : 4}; ${variant === 1 ? 6 : 12})$ bằng:`,
      [
        `$${variant === 1 ? 7 : 13}$`,
        `$${variant === 1 ? 49 : 169}$`,
        `$${variant === 1 ? 5 : 7}$`,
        `$${variant === 1 ? 11 : 19}$`,
      ],
      'A',
      `Ta có $|\\vec{u}| = \\sqrt{${variant === 1 ? '2^2 + (-3)^2 + 6^2' : '3^2 + (-4)^2 + 12^2'}} = \\sqrt{${variant === 1 ? 49 : 169}} = ${variant === 1 ? 7 : 13}$.`,
      'Độ dài vectơ $\\vec{u} = (x; y; z)$ là $|\\vec{u}| = \\sqrt{x^2 + y^2 + z^2}$.'
    ),
    makeMC(
      p,
      5,
      'Bài 8. Biểu thức toạ độ của các phép toán vectơ',
      `Trong không gian $Oxyz$, cho hai điểm $A(2; ${variant === 1 ? 4 : 6}; -2)$ và $B(${variant === 1 ? 6 : 8}; 0; 4)$. Tọa độ trung điểm $I$ của đoạn thẳng $AB$ là:`,
      [
        `$(${variant === 1 ? 4 : 5}; ${variant === 1 ? 2 : 3}; 1)$`,
        `$(${variant === 1 ? 8 : 10}; ${variant === 1 ? 4 : 6}; 2)$`,
        `$(${variant === 1 ? 2 : 3}; -${variant === 1 ? 2 : 3}; 3)$`,
        `$(${variant === 1 ? 4 : 5}; -${variant === 1 ? 2 : 3}; 1)$`,
      ],
      'A',
      `Tọa độ trung điểm $I$ là trung bình cộng tọa độ hai đầu mút: $I\\left(\\frac{2 + ${variant === 1 ? 6 : 8}}{2}; \\frac{${variant === 1 ? 4 : 6} + 0}{2}; \\frac{-2 + 4}{2}\\right) = (${variant === 1 ? 4 : 5}; ${variant === 1 ? 2 : 3}; 1)$.`,
      'Công thức trung điểm: $I\\left(\\frac{x_A+x_B}{2}; \\frac{y_A+y_B}{2}; \\frac{z_A+z_B}{2}\\right)$.'
    ),
    makeMC(
      p,
      6,
      'Bài 8. Biểu thức toạ độ của các phép toán vectơ',
      `Trong không gian $Oxyz$, cho tam giác $ABC$ có $A(1; 2; 3), B(2; ${variant === 1 ? 4 : 7}; 0), C(3; 0; ${variant === 1 ? 6 : 9})$. Tọa độ trọng tâm $G$ của tam giác $ABC$ là:`,
      [
        `$(2; ${variant === 1 ? 2 : 3}; ${variant === 1 ? 3 : 4})$`,
        `$(3; ${variant === 1 ? 3 : 4.5}; ${variant === 1 ? 4.5 : 6})$`,
        `$(6; ${variant === 1 ? 6 : 9}; ${variant === 1 ? 9 : 12})$`,
        `$(2; ${variant === 1 ? 3 : 2}; ${variant === 1 ? 4 : 3})$`,
      ],
      'A',
      `Áp dụng công thức trọng tâm tam giác: $G\\left(\\frac{1+2+3}{3}; \\frac{2+${variant === 1 ? 4 : 7}+0}{3}; \\frac{3+0+${variant === 1 ? 6 : 9}}{3}\\right) = (2; ${variant === 1 ? 2 : 3}; ${variant === 1 ? 3 : 4})$.`,
      'Trọng tâm tam giác bằng tổng tọa độ 3 đỉnh chia 3.',
      'sp_oxyz_triangle_abc'
    ),
    makeMC(
      p,
      7,
      'Bài 8. Biểu thức toạ độ của các phép toán vectơ',
      `Trong không gian $Oxyz$, khoảng cách giữa hai điểm $M(1; -2; ${variant === 1 ? 3 : 4})$ và $N(${variant === 1 ? 3 : 4}; 0; ${variant === 1 ? 4 : 6})$ bằng:`,
      [
        `$${variant === 1 ? 3 : '\\sqrt{17}'}$`,
        `$${variant === 1 ? 9 : 17}$`,
        `$${variant === 1 ? '\\sqrt{5}' : 5}$`,
        `$${variant === 1 ? 5 : 4}$`,
      ],
      'A',
      `Ta có $\\overrightarrow{MN} = (${variant === 1 ? 2 : 3}; 2; ${variant === 1 ? 1 : 2}) \\Rightarrow MN = \\sqrt{${variant === 1 ? '2^2 + 2^2 + 1^2' : '3^2 + 2^2 + 2^2'}} = ${variant === 1 ? '3' : '\\sqrt{17}'}$.`,
      'Khoảng cách $MN = |\\overrightarrow{MN}| = \\sqrt{(x_N-x_M)^2 + (y_N-y_M)^2 + (z_N-z_M)^2}$.'
    ),
    makeMC(
      p,
      8,
      'Bài 8. Biểu thức toạ độ của các phép toán vectơ',
      `Trong không gian $Oxyz$, tìm giá trị của tham số $m$ để hai vectơ $\\vec{u} = (2; -1; ${variant === 1 ? 3 : 4})$ và $\\vec{v} = (${variant === 1 ? 4 : 6}; m; -3)$ vuông góc với nhau.`,
      [
        `$m = -1$`,
        `$m = 1$`,
        `$m = ${variant === 1 ? 17 : 24}$`,
        `$m = 0$`,
      ],
      'A',
      `Ta có $\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0 \\Leftrightarrow 2\\cdot ${variant === 1 ? 4 : 6} + (-1)\\cdot m + ${variant === 1 ? 3 : 4}\\cdot (-3) = 0 \\Leftrightarrow ${variant === 1 ? 8 : 12} - m - ${variant === 1 ? 9 : 12} = 0$.`,
      'Hai vectơ vuông góc khi và chỉ khi tích vô hướng của chúng bằng $0$.'
    ),
    makeMC(
      p,
      9,
      'Bài 8. Biểu thức toạ độ của các phép toán vectơ',
      `Trong không gian $Oxyz$, côsin của góc giữa hai vectơ $\\vec{a} = (1; 0; 1)$ và $\\vec{b} = (0; 1; 1)$ bằng:`,
      [`$\\frac{1}{2}$`, `$\\frac{\\sqrt{2}}{2}$`, `$-\\frac{1}{2}$`, `$0$`],
      'A',
      `Ta có $\\cos(\\vec{a}, \\vec{b}) = \\frac{1\\cdot 0 + 0\\cdot 1 + 1\\cdot 1}{\\sqrt{1^2+0^2+1^2}\\cdot\\sqrt{0^2+1^2+1^2}} = \\frac{1}{\\sqrt{2}\\cdot\\sqrt{2}} = \\frac{1}{2}$.`,
      'Công thức côsin góc giữa hai vectơ: $\\cos(\\vec{a}, \\vec{b}) = \\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{a}|\\cdot|\\vec{b}|}$.'
    ),
    makeMC(
      p,
      10,
      'Bài 8. Biểu thức toạ độ của các phép toán vectơ',
      `Trong không gian $Oxyz$, vectơ nào dưới đây cùng phương với vectơ $\\vec{a} = (${variant === 1 ? 2 : 3}; -1; ${variant === 1 ? 4 : 2})$?`,
      [
        `$\\vec{u} = (-${variant === 1 ? 4 : 6}; 2; -${variant === 1 ? 8 : 4})$`,
        `$\\vec{v} = (${variant === 1 ? 4 : 6}; 2; ${variant === 1 ? 8 : 4})$`,
        `$\\vec{w} = (${variant === 1 ? 2 : 3}; 1; -${variant === 1 ? 4 : 2})$`,
        `$\\vec{n} = (-${variant === 1 ? 2 : 3}; -1; -${variant === 1 ? 4 : 2})$`,
      ],
      'A',
      `Ta có $\\vec{u} = -2\\vec{a}$ nên hai vectơ $\\vec{u}$ và $\\vec{a}$ cùng phương.`,
      'Hai vectơ cùng phương khi bộ ba tọa độ của chúng tỉ lệ với nhau: $\\frac{x_2}{x_1} = \\frac{y_2}{y_1} = \\frac{z_2}{z_1} = k$.'
    ),
    makeMC(
      p,
      11,
      'Bài 8. Biểu thức toạ độ của các phép toán vectơ',
      `Trong không gian $Oxyz$, cho tứ diện $ABCD$ có $A(1; 0; 0), B(0; 2; 0), C(0; 0; 3)$ và $D(3; ${variant === 1 ? 6 : 2}; ${variant === 1 ? 5 : 9})$. Trọng tâm $G$ của tứ diện $ABCD$ có tọa độ là:`,
      [
        `$(1; ${variant === 1 ? 2 : 1}; ${variant === 1 ? 2 : 3})$`,
        `$(4; ${variant === 1 ? 8 : 4}; ${variant === 1 ? 8 : 12})$`,
        `$(\\frac{4}{3}; ${variant === 1 ? '\\frac{8}{3}' : '\\frac{4}{3}'}; ${variant === 1 ? '\\frac{8}{3}' : '4'})$`,
        `$(2; ${variant === 1 ? 4 : 2}; ${variant === 1 ? 4 : 6})$`,
      ],
      'A',
      `Trọng tâm tứ diện $ABCD$ có tọa độ bằng trung bình cộng tọa độ 4 đỉnh: $G\\left(\\frac{1+0+0+3}{4}; \\frac{0+2+0+${variant === 1 ? 6 : 2}}{4}; \\frac{0+0+3+${variant === 1 ? 5 : 9}}{4}\\right) = (1; ${variant === 1 ? 2 : 1}; ${variant === 1 ? 2 : 3})$.`,
      'Công thức trọng tâm tứ diện $ABCD$: $x_G = \\frac{x_A+x_B+x_C+x_D}{4}$ (chia cho $4$).',
      'sp_oxyz_tetra_oabc'
    ),
    makeMC(
      p,
      12,
      'Bài 8. Biểu thức toạ độ của các phép toán vectơ',
      `Một trạm radar đặt tại gốc tọa độ $O(0; 0; 0)$ (đơn vị trên mỗi trục là kilômét). Tại cùng một thời điểm, radar phát hiện hai máy bay ở các vị trí $A(${variant === 1 ? 3 : 6}; ${variant === 1 ? 4 : 8}; 5)$ và $B(${variant === 1 ? 3 : 6}; ${variant === 1 ? 4 : 8}; 2)$. Khoảng cách giữa hai máy bay tại thời điểm đó bằng:`,
      ['$3\\text{ km}$', '$5\\text{ km}$', '$7\\text{ km}$', '$4\\text{ km}$'],
      'A',
      `Ta có $\\overrightarrow{AB} = (0; 0; -3) \\Rightarrow AB = \\sqrt{0^2 + 0^2 + (-3)^2} = 3\\text{ km}$.`,
      'Khoảng cách giữa hai vị trí trong không gian $Oxyz$ là độ dài đoạn thẳng $AB$.',
      'sp_oxyz_flight_trajectory'
    ),
  ];

  // Đồng bộ câu 8 phần I của đề 2 để đáp án luôn là A:
  if (variant === 2) {
    part1[7] = makeMC(
      p,
      8,
      'Bài 8. Biểu thức toạ độ của các phép toán vectơ',
      `Trong không gian $Oxyz$, tìm giá trị của tham số $m$ để hai vectơ $\\vec{u} = (2; -1; 4)$ và $\\vec{v} = (5; m; -3)$ vuông góc với nhau.`,
      ['$m = -2$', '$m = 2$', '$m = 22$', '$m = 0$'],
      'A',
      `Ta có $\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0 \\Leftrightarrow 2\\cdot 5 + (-1)\\cdot m + 4\\cdot (-3) = 0 \\Leftrightarrow 10 - m - 12 = 0 \\Leftrightarrow m = -2$.`,
      'Hai vectơ vuông góc khi và chỉ khi tích vô hướng của chúng bằng $0$.'
    );
  }

  const part2 = [
    makeTF(
      p,
      1,
      'Bài 8. Biểu thức toạ độ của các phép toán vectơ',
      `Trong không gian $Oxyz$, cho tam giác $ABC$ có ba đỉnh $A(1; 0; 2), B(3; 2; 1)$ và $C(2; -2; ${variant === 1 ? 3 : 6})$. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Tọa độ của vectơ $\\overrightarrow{AB}$ là $(2; 2; -1)$.`,
          isCorrect: true,
          exp: `$\\overrightarrow{AB} = (3 - 1; 2 - 0; 1 - 2) = (2; 2; -1)$.`,
        },
        {
          text: `Độ dài cạnh $AB$ bằng $3$.`,
          isCorrect: true,
          exp: `$AB = |\\overrightarrow{AB}| = \\sqrt{2^2 + 2^2 + (-1)^2} = \\sqrt{9} = 3$.`,
        },
        {
          text: `Trung điểm $M$ của cạnh $AB$ có tọa độ là $M(2; 1; 1,5)$.`,
          isCorrect: true,
          exp: `$M = \\left(\\frac{1+3}{2}; \\frac{0+2}{2}; \\frac{2+1}{2}\\right) = (2; 1; 1,5)$.`,
        },
        {
          text: `Trọng tâm $G$ của tam giác $ABC$ có tung độ bằng $1$.`,
          isCorrect: false,
          exp: `Tung độ trọng tâm $G$ là $y_G = \\frac{y_A + y_B + y_C}{3} = \\frac{0 + 2 + (-2)}{3} = 0 \\neq 1$.`,
        },
      ],
      'Kiểm tra từng thành phần tọa độ trung điểm (chia 2) và trọng tâm (chia 3).',
      'sp_oxyz_triangle_abc'
    ),
    makeTF(
      p,
      2,
      'Bài 8. Biểu thức toạ độ của các phép toán vectơ',
      `Trong không gian $Oxyz$, cho hai vectơ $\\vec{a} = (2; -1; 2)$ và $\\vec{b} = (0; ${variant === 1 ? 3 : 4}; ${variant === 1 ? 4 : 3})$. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Độ dài của vectơ $\\vec{a}$ bằng $3$ và độ dài của vectơ $\\vec{b}$ bằng $5$.`,
          isCorrect: true,
          exp: `$|\\vec{a}| = \\sqrt{2^2 + (-1)^2 + 2^2} = 3$ và $|\\vec{b}| = \\sqrt{0^2 + 3^2 + 4^2} = 5$.`,
        },
        {
          text: `Tích vô hướng $\\vec{a} \\cdot \\vec{b}$ bằng $${variant === 1 ? 5 : 2}$.`,
          isCorrect: true,
          exp: `$\\vec{a} \\cdot \\vec{b} = 2\\cdot 0 + (-1)\\cdot ${variant === 1 ? 3 : 4} + 2\\cdot ${variant === 1 ? 4 : 3} = ${variant === 1 ? 5 : 2}$.`,
        },
        {
          text: `Hai vectơ $\\vec{a}$ và $\\vec{b}$ vuông góc với nhau.`,
          isCorrect: false,
          exp: `Vì $\\vec{a} \\cdot \\vec{b} = ${variant === 1 ? 5 : 2} \\neq 0$ nên hai vectơ không vuông góc.`,
        },
        {
          text: `Côsin của góc giữa hai vectơ $\\vec{a}$ và $\\vec{b}$ bằng $\\frac{${variant === 1 ? 1 : 2}}{${variant === 1 ? 3 : 15}}$.`,
          isCorrect: true,
          exp: `$\\cos(\\vec{a}, \\vec{b}) = \\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{a}|\\cdot|\\vec{b}|} = \\frac{${variant === 1 ? 5 : 2}}{3 \\cdot 5} = \\frac{${variant === 1 ? 1 : 2}}{${variant === 1 ? 3 : 15}}$.`,
        },
      ],
      'Tính chuẩn $|\\vec{a}|$, $|\\vec{b}|$ và $\\vec{a}\\cdot\\vec{b}$ trước khi tính $\\cos(\\vec{a}, \\vec{b})$.'
    ),
    makeTF(
      p,
      3,
      'Bài 8. Biểu thức toạ độ của các phép toán vectơ',
      `Trong không gian $Oxyz$ (đơn vị trên mỗi trục là mét), một flycam bay từ vị trí $A(2; 3; 4)$ đến vị trí $B(${variant === 1 ? 5 : 8}; ${variant === 1 ? 7 : 11}; 4)$ theo một đường thẳng với vận tốc không đổi trong $5$ giây. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Trong suốt quá trình bay từ $A$ đến $B$, độ cao của flycam so với mặt đất $(Oxy)$ luôn bằng $4\\text{ m}$.`,
          isCorrect: true,
          exp: `Vì $z_A = z_B = 4$ nên mọi điểm trên đoạn thẳng $AB$ đều có cao độ bằng $4\\text{ m}$.`,
        },
        {
          text: `Vectơ độ dịch chuyển của flycam là $\\overrightarrow{AB} = (${variant === 1 ? 3 : 6}; ${variant === 1 ? 4 : 8}; 0)$.`,
          isCorrect: true,
          exp: `$\\overrightarrow{AB} = (${variant === 1 ? 5 : 8} - 2; ${variant === 1 ? 7 : 11} - 3; 4 - 4) = (${variant === 1 ? 3 : 6}; ${variant === 1 ? 4 : 8}; 0)$.`,
        },
        {
          text: `Quãng đường flycam đã bay từ $A$ đến $B$ là $${variant === 1 ? 5 : 10}\\text{ m}$.`,
          isCorrect: true,
          exp: `$AB = \\sqrt{${variant === 1 ? '3^2 + 4^2 + 0^2' : '6^2 + 8^2 + 0^2'}} = ${variant === 1 ? 5 : 10}\\text{ m}$.`,
        },
        {
          text: `Vận tốc của flycam bằng $${variant === 1 ? 5 : 10}\\text{ m/s}$.`,
          isCorrect: false,
          exp: `Flycam bay quãng đường $${variant === 1 ? 5 : 10}\\text{ m}$ trong $5$ giây nên vận tốc là $v = \\frac{${variant === 1 ? 5 : 10}}{5} = ${variant === 1 ? 1 : 2}\\text{ m/s}$.`,
        },
      ],
      'Vận tốc trung bình bằng độ dài quãng đường $AB$ chia cho thời gian bay $t$.',
      'sp_oxyz_flight_trajectory'
    ),
  ];

  const part3 = [
    makeSA(
      p,
      1,
      'Bài 8. Biểu thức toạ độ của các phép toán vectơ',
      `Trong không gian $Oxyz$, cho hai vectơ $\\vec{a} = (3; -2; ${variant === 1 ? 4 : 5})$ và $\\vec{b} = (2; ${variant === 1 ? 5 : 6}; 1)$. Tính tích vô hướng $\\vec{a} \\cdot \\vec{b}$.`,
      [variant === 1 ? '0' : '-1'],
      `Ta có $\\vec{a} \\cdot \\vec{b} = 3\\cdot 2 + (-2)\\cdot ${variant === 1 ? 5 : 6} + ${variant === 1 ? 4 : 5}\\cdot 1 = ${variant === 1 ? 0 : -1}$.`,
      'Áp dụng công thức $\\vec{a}\\cdot\\vec{b} = x_1x_2 + y_1y_2 + z_1z_2$.'
    ),
    makeSA(
      p,
      2,
      'Bài 8. Biểu thức toạ độ của các phép toán vectơ',
      `Trong không gian $Oxyz$, tính khoảng cách giữa hai điểm $A(1; 2; -1)$ và $B(${variant === 1 ? 4 : 7}; ${variant === 1 ? 6 : 10}; -1)$.`,
      [variant === 1 ? '5' : '10'],
      `Ta có $\\overrightarrow{AB} = (${variant === 1 ? 3 : 6}; ${variant === 1 ? 4 : 8}; 0) \\Rightarrow AB = \\sqrt{${variant === 1 ? '3^2 + 4^2' : '6^2 + 8^2'}} = ${variant === 1 ? 5 : 10}$.`,
      'Sử dụng bộ số Pythagore $(3, 4, 5)$ hoặc $(6, 8, 10)$.'
    ),
    makeSA(
      p,
      3,
      'Bài 8. Biểu thức toạ độ của các phép toán vectơ',
      `Trong không gian $Oxyz$, cho tam giác $ABC$ có $A(2; 1; 3), B(4; -1; 5), C(0; ${variant === 1 ? 6 : 9}; 1)$. Biết trọng tâm của tam giác là $G(x_0; y_0; z_0)$, tính tổng $x_0 + y_0 + z_0$.`,
      [variant === 1 ? '7' : '8'],
      `Ta có $G = \\left(\\frac{2+4+0}{3}; \\frac{1-1+${variant === 1 ? 6 : 9}}{3}; \\frac{3+5+1}{3}\\right) = (2; ${variant === 1 ? 2 : 3}; 3)$. Vậy $x_0 + y_0 + z_0 = 2 + ${variant === 1 ? 2 : 3} + 3 = ${variant === 1 ? 7 : 8}$.`,
      'Tính từng tọa độ trọng tâm $G$ rồi lấy tổng.',
      undefined,
      'sp_oxyz_triangle_abc'
    ),
    makeSA(
      p,
      4,
      'Bài 8. Biểu thức toạ độ của các phép toán vectơ',
      `Trong không gian $Oxyz$, tìm số đo góc (đơn vị: độ) giữa hai vectơ $\\vec{u} = (1; 1; 0)$ và $\\vec{v} = (-1; 1; 0)$.`,
      ['90'],
      `Ta có $\\vec{u} \\cdot \\vec{v} = 1(-1) + 1(1) + 0(0) = 0 \\Rightarrow \\vec{u} \\perp \\vec{v}$, suy ra góc giữa hai vectơ bằng $90^\\circ$.`,
      'Khi tích vô hướng bằng $0$, góc giữa hai vectơ khác $\\vec{0}$ bằng $90^\\circ$.'
    ),
  ];

  const part4 = [
    makeSO(
      p,
      1,
      'Bài 8. Biểu thức toạ độ của các phép toán vectơ',
      `Trong không gian $Oxyz$, cho ba điểm $A(1; 2; 1), B(2; 1; 3)$ và $C(3; ${variant === 1 ? 3 : 4}; ${variant === 1 ? 2 : 2})$. Chứng minh tam giác $ABC$ vuông tại $A$ và tính diện tích tam giác $ABC$.`,
      `Sử dụng tích vô hướng và độ dài vectơ để chứng minh tam giác vuông và tính diện tích.`,
      [
        {
          role: 'Tính tọa độ hai vectơ AB và AC',
          content: `Ta có $\\overrightarrow{AB} = (1; -1; 2)$ và $\\overrightarrow{AC} = (2; 2; 0)$ (với $C(3; 4; 1)$).`,
        },
        {
          role: 'Kiểm tra tích vô hướng AB . AC = 0',
          content: `Ta có $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = 1\\cdot 2 + (-1)\\cdot 2 + 2\\cdot 0 = 0 \\Rightarrow \\overrightarrow{AB} \\perp \\overrightarrow{AC}$, vậy tam giác $ABC$ vuông tại $A$.`,
        },
        {
          role: 'Tính độ dài hai cạnh góc vuông và diện tích tam giác',
          content: `Ta có $AB = \\sqrt{1^2 + (-1)^2 + 2^2} = \\sqrt{6}$ và $AC = \\sqrt{2^2 + 2^2 + 0^2} = 2\\sqrt{2}$. Diện tích $S_{\\triangle ABC} = \\frac{1}{2} AB \\cdot AC = 2\\sqrt{3}$.`,
        },
      ],
      'Tam giác $ABC$ vuông tại $A$ khi và chỉ khi $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = 0$ (với $A, B, C$ không trùng nhau).',
      'Ứng dụng biểu thức tọa độ tích vô hướng trong bài toán tam giác.',
      0.7,
      'sp_oxyz_triangle_abc'
    ),
    makeSO(
      p,
      2,
      'Bài 8. Biểu thức toạ độ của các phép toán vectơ',
      `Trong không gian $Oxyz$, cho hai điểm $A(1; 3; -2)$ và $B(3; -1; 4)$. Tìm tọa độ điểm $M$ thuộc trục $Ox$ sao cho $M$ cách đều hai điểm $A$ và $B$.`,
      `Gọi $M(x; 0; 0) \\in Ox$ và giải phương trình $MA^2 = MB^2$.`,
      [
        {
          role: 'Tham số hóa tọa độ điểm M thuộc trục Ox',
          content: `Vì $M$ thuộc trục $Ox$ nên tọa độ của $M$ có dạng $M(x; 0; 0)$.`,
        },
        {
          role: 'Thiết lập phương trình từ điều kiện MA = MB',
          content: `Ta có $MA = MB \\Leftrightarrow MA^2 = MB^2 \\Leftrightarrow (x - 1)^2 + 3^2 + (-2)^2 = (x - 3)^2 + (-1)^2 + 4^2$.`,
        },
        {
          role: 'Rút gọn phương trình bậc nhất và kết luận tọa độ điểm M',
          content: `Khai triển: $x^2 - 2x + 14 = x^2 - 6x + 26 \\Leftrightarrow 4x = 12 \\Leftrightarrow x = 3$. Vậy $M(3; 0; 0)$.`,
        },
      ],
      'Bình phương hai vế $MA^2 = MB^2$ giúp khử căn thức và triệt tiêu $x^2$ ngay lập tức.',
      'Kỹ năng tham số hóa điểm thuộc trục tọa độ.',
      0.65
    ),
    makeSO(
      p,
      3,
      'Bài 8. Biểu thức toạ độ của các phép toán vectơ',
      `Trong không gian $Oxyz$, cho hai vectơ $\\vec{a} = (1; 2; 2)$ và $\\vec{b} = (2; -2; 1)$. Tính góc giữa hai vectơ $\\vec{a}$ và $\\vec{b}$.`,
      `Áp dụng công thức côsin góc giữa hai vectơ theo tọa độ.`,
      [
        {
          role: 'Tính tích vô hướng và độ dài của từng vectơ',
          content: `Ta có $\\vec{a} \\cdot \\vec{b} = 1\\cdot 2 + 2(-2) + 2\\cdot 1 = 0$, $|\\vec{a}| = \\sqrt{1^2+2^2+2^2} = 3$, $|\\vec{b}| = \\sqrt{2^2+(-2)^2+1^2} = 3$.`,
        },
        {
          role: 'Tính cos(a, b)',
          content: `Áp dụng công thức: $\\cos(\\vec{a}, \\vec{b}) = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|} = \\frac{0}{3 \\cdot 3} = 0$.`,
        },
        {
          role: 'Kết luận số đo góc giữa hai vectơ',
          content: `Vì $0^\\circ \\le (\\vec{a}, \\vec{b}) \\le 180^\\circ$ và $\\cos(\\vec{a}, \\vec{b}) = 0$ nên $(\\vec{a}, \\vec{b}) = 90^\\circ$.`,
        },
      ],
      'Góc giữa hai vectơ luôn nằm trong đoạn $[0^\\circ; 180^\\circ]$.',
      'Trình bày chuẩn bài toán tìm góc giữa hai vectơ trong hệ trục $Oxyz$.',
      0.65
    ),
  ];

  // Đồng bộ đề bài câu 1 phần IV với tọa độ C(3; 4; 1):
  part4[0].problemStatement = `Trong không gian $Oxyz$, cho ba điểm $A(1; 2; 1), B(2; 1; 3)$ và $C(3; 4; 1)$. Chứng minh tam giác $ABC$ vuông tại $A$ và tính diện tích tam giác $ABC$.`;

  return makeLessonExam(
    `bai-08-de-${variant}`,
    `Bài 8 - Đề ôn số ${variant}`,
    `Bài 8. Biểu thức toạ độ của các phép toán vectơ (SGK Toán 12 Tập 1)`,
    `Đề ôn số ${variant} - Bài 8: Biểu thức toạ độ của các phép toán vectơ (22 câu hỏi chuẩn cấu trúc 4 phần).`,
    part1,
    part2,
    part3,
    part4
  );
}

// BÀI TẬP CUỐI CHƯƠNG II (Đề ôn số 1 & Đề ôn số 2)
function buildOnTapChuong2Exam(variant: 1 | 2): ExamSet {
  const p = variant === 1 ? 'c2-d1' : 'c2-d2';
  const aEdge = variant === 1 ? 6 : 8;

  const part1 = [
    makeMC(
      p,
      1,
      'Bài tập cuối chương II',
      `Cho hình hộp $ABCD.A'B'C'D'$. Đẳng thức vectơ nào sau đây là đúng?`,
      [
        `$\\overrightarrow{BA} + \\overrightarrow{BC} + \\overrightarrow{BB'} = \\overrightarrow{BD'}$`,
        `$\\overrightarrow{BA} + \\overrightarrow{BC} + \\overrightarrow{BB'} = \\overrightarrow{AC'}$`,
        `$\\overrightarrow{BA} + \\overrightarrow{BC} + \\overrightarrow{BB'} = \\overrightarrow{B'D}$`,
        `$\\overrightarrow{BA} + \\overrightarrow{BC} + \\overrightarrow{BB'} = \\overrightarrow{DB'}$`,
      ],
      'A',
      `Áp dụng quy tắc hình hộp tại đỉnh $B$: ba vectơ cạnh xuất phát từ $B$ là $\\overrightarrow{BA}, \\overrightarrow{BC}, \\overrightarrow{BB'}$ có tổng bằng vectơ đường chéo $\\overrightarrow{BD'}$.`,
      'Quy tắc hình hộp áp dụng được tại bất kỳ đỉnh nào của hình hộp.',
      'sp_box_abcd'
    ),
    makeMC(
      p,
      2,
      'Bài tập cuối chương II',
      `Cho tứ diện đều $ABCD$ cạnh $${aEdge}$. Tích vô hướng $\\overrightarrow{AC} \\cdot \\overrightarrow{CD}$ bằng:`,
      [
        `$-${(aEdge * aEdge) / 2}$`,
        `$${(aEdge * aEdge) / 2}$`,
        `$0$`,
        `$${aEdge * aEdge}$`,
      ],
      'A',
      `Góc giữa $\\overrightarrow{AC}$ và $\\overrightarrow{CD}$ bằng $180^\\circ - \\widehat{ACD} = 120^\\circ$. Vậy $\\overrightarrow{AC} \\cdot \\overrightarrow{CD} = ${aEdge}^2 \\cos 120^\\circ = -${(aEdge * aEdge) / 2}$.`,
      'Khi điểm cuối của vectơ thứ nhất trùng điểm đầu của vectơ thứ hai trong tam giác đều, góc giữa chúng bằng $120^\\circ$.',
      'sp_tetra_abcd'
    ),
    makeMC(
      p,
      3,
      'Bài tập cuối chương II',
      `Trong không gian $Oxyz$, cho điểm $A(${variant === 1 ? 4 : 6}; -3; ${variant === 1 ? 5 : 7})$. Hình chiếu vuông góc của $A$ trên mặt phẳng $(Oyz)$ là:`,
      [
        `$(0; -3; ${variant === 1 ? 5 : 7})$`,
        `$(${variant === 1 ? 4 : 6}; 0; 0)$`,
        `$(${variant === 1 ? 4 : 6}; -3; 0)$`,
        `$(0; 3; -${variant === 1 ? 5 : 7})$`,
      ],
      'A',
      `Hình chiếu vuông góc lên $(Oyz)$ có hoành độ $x = 0$, giữ nguyên tung độ và cao độ: $(0; -3; ${variant === 1 ? 5 : 7})$.`,
      'Mặt phẳng $(Oyz)$ có phương trình $x = 0$.',
      'sp_oxyz_point_proj'
    ),
    makeMC(
      p,
      4,
      'Bài tập cuối chương II',
      `Trong không gian $Oxyz$, cho $\\vec{a} = (1; -2; ${variant === 1 ? 3 : 4})$ và $\\vec{b} = (3; 0; -1)$. Tọa độ của vectơ $\\vec{c} = 3\\vec{a} + 2\\vec{b}$ là:`,
      [
        `$(9; -6; ${variant === 1 ? 7 : 10})$`,
        `$(9; 6; ${variant === 1 ? 7 : 10})$`,
        `$(6; -6; ${variant === 1 ? 7 : 10})$`,
        `$(9; -6; ${variant === 1 ? 11 : 14})$`,
      ],
      'A',
      `Ta có $3\\vec{a} + 2\\vec{b} = (3\\cdot 1 + 2\\cdot 3; 3(-2) + 2\\cdot 0; 3\\cdot ${variant === 1 ? 3 : 4} + 2(-1)) = (9; -6; ${variant === 1 ? 7 : 10})$.`,
      'Nhân hệ số vào từng vectơ rồi cộng các tọa độ tương ứng.'
    ),
    makeMC(
      p,
      5,
      'Bài tập cuối chương II',
      `Trong không gian $Oxyz$, cho hai điểm $A(3; -1; ${variant === 1 ? 2 : 4})$ và $B(1; 5; -${variant === 1 ? 4 : 2})$. Trung điểm của đoạn thẳng $AB$ có tọa độ là:`,
      [
        `$(2; 2; ${variant === 1 ? -1 : 1})$`,
        `$(4; 4; ${variant === 1 ? -2 : 2})$`,
        `$(-1; 3; -3)$`,
        `$(2; -2; ${variant === 1 ? -1 : 1})$`,
      ],
      'A',
      `Trung điểm $I = \\left(\\frac{3+1}{2}; \\frac{-1+5}{2}; \\frac{${variant === 1 ? '2-4' : '4-2'}}{2}\\right) = (2; 2; ${variant === 1 ? -1 : 1})$.`,
      'Lấy tổng tọa độ hai đầu mút chia đôi.'
    ),
    makeMC(
      p,
      6,
      'Bài tập cuối chương II',
      `Trong không gian $Oxyz$, cho vectơ $\\vec{u} = (${variant === 1 ? 1 : 2}; 2; -2)$. Độ dài của vectơ $2\\vec{u}$ bằng:`,
      [
        `$${variant === 1 ? 6 : '2\\sqrt{12}'}$`,
        `$${variant === 1 ? 3 : '\\sqrt{12}'}$`,
        `$${variant === 1 ? 9 : 12}$`,
        `$${variant === 1 ? 12 : 24}$`,
      ],
      'A',
      `Với $\\vec{u} = (${variant === 1 ? '1; 2; -2' : '2; 1; -2'})$ thì $|\\vec{u}| = 3 \\Rightarrow |2\\vec{u}| = 2|\\vec{u}| = 6$.`,
      'Sử dụng tính chất $|k\\vec{u}| = |k|\\cdot |\\vec{u}|$.'
    ),
    makeMC(
      p,
      7,
      'Bài tập cuối chương II',
      `Trong không gian $Oxyz$, góc giữa hai vectơ đơn vị $\\vec{i}$ và vectơ $\\vec{u} = (1; \\sqrt{3}; 0)$ bằng:`,
      [`$60^\\circ$`, `$30^\\circ$`, `$45^\\circ$`, `$120^\\circ$`],
      'A',
      `Ta có $\\vec{i} = (1; 0; 0)$ nên $\\cos(\\vec{i}, \\vec{u}) = \\frac{1}{1 \\cdot \\sqrt{1 + 3}} = \\frac{1}{2} \\Rightarrow (\\vec{i}, \\vec{u}) = 60^\\circ$.`,
      'Nhớ tọa độ ba vectơ đơn vị: $\\vec{i}=(1;0;0), \\vec{j}=(0;1;0), \\vec{k}=(0;0;1)$.'
    ),
    makeMC(
      p,
      8,
      'Bài tập cuối chương II',
      `Trong không gian $Oxyz$, cho hình bình hành $ABCD$ có $A(1; 1; 1), B(2; 3; 4), C(${variant === 1 ? 5 : 6}; 5; 5)$. Tọa độ đỉnh $D$ là:`,
      [
        `$(${variant === 1 ? 4 : 5}; 3; 2)$`,
        `$(${variant === 1 ? 6 : 7}; 7; 8)$`,
        `$(${variant === 1 ? 4 : 5}; -3; 2)$`,
        `$(-${variant === 1 ? 4 : 5}; 3; 2)$`,
      ],
      'A',
      `Áp dụng quy tắc $D = A + C - B = (1 + ${variant === 1 ? 5 : 6} - 2; 1 + 5 - 3; 1 + 5 - 4) = (${variant === 1 ? 4 : 5}; 3; 2)$.`,
      'Công thức đỉnh thứ tư hình bình hành: $D = A + C - B$.',
      'sp_oxyz_parallelogram'
    ),
    makeMC(
      p,
      9,
      'Bài tập cuối chương II',
      `Trong không gian $Oxyz$, tìm $m$ để hai vectơ $\\vec{a} = (1; m; 2)$ và $\\vec{b} = (m + 1; 2; -${variant === 1 ? 5 : 8})$ vuông góc với nhau.`,
      [
        `$m = ${variant === 1 ? 3 : 5}$`,
        `$m = -${variant === 1 ? 3 : 5}$`,
        `$m = ${variant === 1 ? 2 : 4}$`,
        `$m = 1$`,
      ],
      'A',
      `Ta có $\\vec{a} \\cdot \\vec{b} = 0 \\Leftrightarrow (m + 1) + 2m - ${variant === 1 ? 10 : 16} = 0 \\Leftrightarrow 3m = ${variant === 1 ? 9 : 15} \\Leftrightarrow m = ${variant === 1 ? 3 : 5}$.`,
      'Giải phương trình bậc nhất từ điều kiện $\\vec{a}\\cdot\\vec{b} = 0$.'
    ),
    makeMC(
      p,
      10,
      'Bài tập cuối chương II',
      `Trong không gian $Oxyz$, cho điểm $M(${variant === 1 ? 3 : 6}; ${variant === 1 ? 4 : 8}; 12)$. Khoảng cách từ điểm $M$ đến trục $Oz$ bằng:`,
      [
        `$${variant === 1 ? 5 : 10}$`,
        `$12$`,
        `$${variant === 1 ? 13 : '\\sqrt{244}'}$`,
        `$${variant === 1 ? 7 : 14}$`,
      ],
      'A',
      `Hình chiếu của $M$ lên trục $Oz$ là $H(0; 0; 12)$. Khoảng cách từ $M$ đến trục $Oz$ là $MH = \\sqrt{x_M^2 + y_M^2} = \\sqrt{${variant === 1 ? '3^2 + 4^2' : '6^2 + 8^2'}} = ${variant === 1 ? 5 : 10}$.`,
      'Khoảng cách từ $M(x; y; z)$ đến trục $Oz$ là $\\sqrt{x^2 + y^2}$ (không phải $|z|$).',
      'sp_oxyz_point_proj'
    ),
    makeMC(
      p,
      11,
      'Bài tập cuối chương II',
      `Cho ba lực $\\vec{F}_1 = (2; 1; 3), \\vec{F}_2 = (1; 3; -1), \\vec{F}_3 = (0; -1; 2)$ (đơn vị: Newton) cùng tác dụng vào một vật tại điểm $M$. Độ lớn của hợp lực $\\vec{F} = \\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3$ bằng:`,
      [
        `$\\sqrt{34}\\text{ N}$`,
        `$10\\text{ N}$`,
        `$\\sqrt{26}\\text{ N}$`,
        `$6\\text{ N}$`,
      ],
      'A',
      `Ta có $\\vec{F} = \\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = (3; 3; 4)$. Độ lớn hợp lực là $|\\vec{F}| = \\sqrt{3^2 + 3^2 + 4^2} = \\sqrt{34}\\text{ N}$.`,
      'Cộng tọa độ các lực thành phần trước, sau đó mới tính độ dài của vectơ hợp lực.',
      'sp_oxyz_forces_3d'
    ),
    makeMC(
      p,
      12,
      'Bài tập cuối chương II',
      `Trong không gian $Oxyz$, cho hai điểm $A(1; 2; 3)$ và $B(0; 1; 5)$. Điểm $M$ thỏa mãn $\\overrightarrow{AM} = 2\\overrightarrow{AB}$ có tọa độ là:`,
      [
        `$(-1; 0; 7)$`,
        `$(1; 1; -2)$`,
        `$(-2; -2; 4)$`,
        `$(0; 0; 7)$`,
      ],
      'A',
      `Ta có $\\overrightarrow{AB} = (-1; -1; 2) \\Rightarrow 2\\overrightarrow{AB} = (-2; -2; 4)$. Do đó $M = A + 2\\overrightarrow{AB} = (1 - 2; 2 - 2; 3 + 4) = (-1; 0; 7)$.`,
      'Từ $\\overrightarrow{AM} = k\\overrightarrow{AB}$ suy ra $M = A + k(B - A)$.'
    ),
  ];

  // Đồng bộ câu 6 phần I của đề 2 để kết quả nguyên bằng 6:
  part1[5].prompt = `Trong không gian $Oxyz$, cho vectơ $\\vec{u} = (${variant === 1 ? '1; 2; -2' : '2; 1; -2'})$. Độ dài của vectơ $2\\vec{u}$ bằng:`;
  part1[5].options = [
    { key: 'A', content: '$6$' },
    { key: 'B', content: '$3$' },
    { key: 'C', content: '$9$' },
    { key: 'D', content: '$12$' },
  ];

  const part2 = [
    makeTF(
      p,
      1,
      'Bài tập cuối chương II',
      `Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $${variant === 1 ? 4 : 6}$, cạnh bên $SA$ vuông góc với mặt phẳng đáy $(ABCD)$ và $SA = ${variant === 1 ? 4 : 6}$. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Theo quy tắc hình bình hành trong mặt đáy, ta có $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$.`,
          isCorrect: true,
          exp: `Vì $ABCD$ là hình vuông nên $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$.`,
        },
        {
          text: `Hai vectơ $\\overrightarrow{SA}$ và $\\overrightarrow{BD}$ vuông góc với nhau.`,
          isCorrect: true,
          exp: `Vì $SA \\perp (ABCD)$ và $BD \\subset (ABCD)$ nên $SA \\perp BD \\Rightarrow \\overrightarrow{SA} \\cdot \\overrightarrow{BD} = 0$.`,
        },
        {
          text: `Tích vô hướng $\\overrightarrow{SC} \\cdot \\overrightarrow{BD} = 0$.`,
          isCorrect: true,
          exp: `Ta có $\\overrightarrow{SC} \\cdot \\overrightarrow{BD} = (\\overrightarrow{SA} + \\overrightarrow{AC}) \\cdot \\overrightarrow{BD} = \\overrightarrow{SA}\\cdot\\overrightarrow{BD} + \\overrightarrow{AC}\\cdot\\overrightarrow{BD} = 0 + 0 = 0$ (do hai đường chéo hình vuông vuông góc).`,
        },
        {
          text: `Độ dài của vectơ $\\overrightarrow{SC}$ bằng $${variant === 1 ? '4\\sqrt{2}' : '6\\sqrt{2}'}$.`,
          isCorrect: false,
          exp: `Ta có $SC = \\sqrt{SA^2 + AC^2} = \\sqrt{a^2 + 2a^2} = a\\sqrt{3} = ${variant === 1 ? '4\\sqrt{3}' : '6\\sqrt{3}'}$.`,
        },
      ],
      'Kỹ thuật phân tích $\\overrightarrow{SC} = \\overrightarrow{SA} + \\overrightarrow{AC}$ giúp tính tích vô hướng với các vectơ trong mặt đáy rất dễ dàng.',
      'sp_pyramid_sa_perp'
    ),
    makeTF(
      p,
      2,
      'Bài tập cuối chương II',
      `Trong không gian $Oxyz$, cho ba điểm $A(2; 0; 0), B(0; ${variant === 1 ? 4 : 6}; 0)$ và $C(0; 0; ${variant === 1 ? 4 : 6})$. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Ba điểm $A, B, C$ lần lượt nằm trên ba trục tọa độ $Ox, Oy, Oz$.`,
          isCorrect: true,
          exp: `Tọa độ của $A, B, C$ chỉ có một thành phần khác $0$ tương ứng trên $Ox, Oy, Oz$.`,
        },
        {
          text: `Tam giác $OBC$ là tam giác vuông cân tại gốc tọa độ $O$.`,
          isCorrect: true,
          exp: `Vì $OB \\perp OC$ và $OB = OC = ${variant === 1 ? 4 : 6}$ nên $\\triangle OBC$ vuông cân tại $O$.`,
        },
        {
          text: `Tích vô hướng $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = 4$.`,
          isCorrect: true,
          exp: `Ta có $\\overrightarrow{AB} = (-2; ${variant === 1 ? 4 : 6}; 0)$ và $\\overrightarrow{AC} = (-2; 0; ${variant === 1 ? 4 : 6}) \\Rightarrow \\overrightarrow{AB} \\cdot \\overrightarrow{AC} = (-2)(-2) + 0 + 0 = 4$.`,
        },
        {
          text: `Trọng tâm của tứ diện $OABC$ là điểm $G\\left(\\frac{2}{3}; \\frac{${variant === 1 ? 4 : 6}}{3}; \\frac{${variant === 1 ? 4 : 6}}{3}\\right)$.`,
          isCorrect: false,
          exp: `Trọng tâm tứ diện $OABC$ phải chia cho $4$: $G\\left(\\frac{1}{2}; \\frac{${variant === 1 ? 4 : 6}}{4}; \\frac{${variant === 1 ? 4 : 6}}{4}\\right)$, còn chia $3$ là trọng tâm tam giác $ABC$.`,
        },
      ],
      'Đọc kỹ đề hỏi trọng tâm tam giác $ABC$ (chia 3) hay trọng tâm tứ diện $OABC$ (chia 4).',
      'sp_oxyz_tetra_oabc'
    ),
    makeTF(
      p,
      3,
      'Bài tập cuối chương II',
      `Hai khinh khí cầu cùng xuất phát từ mặt đất trong hệ trục tọa độ $Oxyz$ (đơn vị: km, mặt phẳng $(Oxy)$ là mặt đất). Sau 30 phút, khinh khí cầu thứ nhất ở vị trí $M(1; 2; ${variant === 1 ? 1 : 2})$ và khinh khí cầu thứ hai ở vị trí $N(4; 6; ${variant === 1 ? 1 : 2})$. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Hai khinh khí cầu đang ở cùng một độ cao so với mặt đất.`,
          isCorrect: true,
          exp: `Vì $z_M = z_N = ${variant === 1 ? 1 : 2}\\text{ km}$ nên hai khinh khí cầu ở cùng độ cao.`,
        },
        {
          text: `Khoảng cách giữa hai khinh khí cầu tại thời điểm đó bằng $5\\text{ km}$.`,
          isCorrect: true,
          exp: `$\\overrightarrow{MN} = (3; 4; 0) \\Rightarrow MN = \\sqrt{3^2 + 4^2 + 0^2} = 5\\text{ km}$.`,
        },
        {
          text: `Trung điểm $I$ của đoạn thẳng nối hai khinh khí cầu có tọa độ là $I(2,5; 4; ${variant === 1 ? 1 : 2})$.`,
          isCorrect: true,
          exp: `$I = \\left(\\frac{1+4}{2}; \\frac{2+6}{2}; ${variant === 1 ? 1 : 2}\\right) = (2,5; 4; ${variant === 1 ? 1 : 2})$.`,
        },
        {
          text: `Khoảng cách từ khinh khí cầu thứ nhất $M$ đến trạm quan sát tại gốc $O(0; 0; 0)$ bằng $4\\text{ km}$.`,
          isCorrect: false,
          exp: `Ta có $OM = \\sqrt{1^2 + 2^2 + ${variant === 1 ? '1^2' : '2^2'}} = ${variant === 1 ? '\\sqrt{6} \\approx 2,45' : '3'}\\text{ km} \\neq 4\\text{ km}$.`,
        },
      ],
      'Áp dụng công thức khoảng cách Euclid trong không gian 3 chiều.',
      'sp_oxyz_flight_trajectory'
    ),
  ];

  const part3 = [
    makeSA(
      p,
      1,
      'Bài tập cuối chương II',
      `Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $${variant === 1 ? 4 : 5}$. Tính tích vô hướng $\\overrightarrow{AB} \\cdot \\overrightarrow{AC'}$.`,
      [variant === 1 ? '16' : '25'],
      `Vì $\\overrightarrow{AC'} = \\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'}$ và $\\overrightarrow{AB}$ vuông góc với $\\overrightarrow{AD}, \\overrightarrow{AA'}$ nên $\\overrightarrow{AB} \\cdot \\overrightarrow{AC'} = \\overrightarrow{AB}^2 = ${variant === 1 ? 16 : 25}$.`,
      'Chiếu $\\overrightarrow{AC\'}$ lên $\\overrightarrow{AB}$ được chính $\\overrightarrow{AB}$.',
      undefined,
      'sp_box_abcd'
    ),
    makeSA(
      p,
      2,
      'Bài tập cuối chương II',
      `Trong không gian $Oxyz$, cho hai vectơ $\\vec{u} = (2; -3; 1)$ và $\\vec{v} = (1; 2; m)$. Tìm giá trị của $m$ để $\\vec{u} \\perp \\vec{v}$.`,
      ['4'],
      `Ta có $\\vec{u} \\cdot \\vec{v} = 0 \\Leftrightarrow 2(1) + (-3)(2) + 1\\cdot m = 0 \\Leftrightarrow m - 4 = 0 \\Leftrightarrow m = 4$.`,
      'Giải phương trình tích vô hướng bằng $0$.'
    ),
    makeSA(
      p,
      3,
      'Bài tập cuối chương II',
      `Trong không gian $Oxyz$, cho tam giác $ABC$ có $A(1; 0; 2), B(3; 4; 0), C(2; 2; ${variant === 1 ? 4 : 7})$. Tính độ dài đoạn thẳng $OG$ với $G$ là trọng tâm tam giác $ABC$.`,
      [variant === 1 ? '3' : '4', variant === 1 ? '3' : '3.74'],
      `Trọng tâm $G = (2; 2; ${variant === 1 ? 2 : 3}) \\Rightarrow OG = \\sqrt{2^2 + 2^2 + ${variant === 1 ? '2^2' : '3^2'}}$.`,
      'Tìm tọa độ $G$ rồi tính $OG = \\sqrt{x_G^2 + y_G^2 + z_G^2}$.'
    ),
    makeSA(
      p,
      4,
      'Bài tập cuối chương II',
      `Trong không gian $Oxyz$, cho hai điểm $A(1; 2; 3)$ và $B(3; 4; 1)$. Điểm $M(0; y; 0)$ thuộc trục $Oy$ cách đều hai điểm $A$ và $B$. Tìm giá trị của $y$.`,
      ['3'],
      `Ta có $MA^2 = MB^2 \\Leftrightarrow 1^2 + (y - 2)^2 + 3^2 = 3^2 + (y - 4)^2 + 1^2 \\Leftrightarrow y^2 - 4y + 14 = y^2 - 8y + 26 \\Leftrightarrow 4y = 12 \\Leftrightarrow y = 3$.`,
      'Thiết lập phương trình $MA^2 = MB^2$ để tìm tung độ $y$.'
    ),
  ];

  // Chỉnh câu 3 phần III để OG nguyên đẹp cho cả 2 đề:
  part3[2] = makeSA(
    p,
    3,
    'Bài tập cuối chương II',
    `Trong không gian $Oxyz$, cho tam giác $ABC$ có $A(1; 0; 2), B(2; 4; 0), C(0; 2; ${variant === 1 ? 4 : 4})$. Tính độ dài đoạn thẳng $OG$ với $G$ là trọng tâm tam giác $ABC$.`,
    ['3'],
    `Ta có $G = \\left(\\frac{1+2+0}{3}; \\frac{0+4+2}{3}; \\frac{2+0+4}{3}\\right) = (1; 2; 2)$. Khi đó $OG = \\sqrt{1^2 + 2^2 + 2^2} = 3$.`,
    'Tìm tọa độ trọng tâm $G(1; 2; 2)$ rồi tính $OG = \\sqrt{1^2 + 2^2 + 2^2} = 3$.',
    undefined,
    'sp_oxyz_triangle_abc'
  );

  const part4 = [
    makeSO(
      p,
      1,
      'Bài tập cuối chương II',
      `Cho hình hộp $ABCD.A'B'C'D'$ có tất cả các mặt đều là hình vuông cạnh $${variant === 1 ? 4 : 6}$. Tính tích vô hướng $\\overrightarrow{AC'} \\cdot \\overrightarrow{BD}$.`,
      `Biểu diễn các vectơ theo ba vectơ cơ sở $\\overrightarrow{AB}, \\overrightarrow{AD}, \\overrightarrow{AA'}$ và chứng minh $AC' \\perp BD$.`,
      [
        {
          role: 'Biểu diễn vectơ AC\' và BD theo bộ ba vectơ cạnh xuất phát từ A',
          content: `Ta có $\\overrightarrow{AC'} = \\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'}$ và $\\overrightarrow{BD} = \\overrightarrow{AD} - \\overrightarrow{AB}$.`,
        },
        {
          role: 'Nhân vô hướng hai biểu thức vectơ',
          content: `Khi đó $\\overrightarrow{AC'} \\cdot \\overrightarrow{BD} = (\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'}) \\cdot (\\overrightarrow{AD} - \\overrightarrow{AB}) = \\overrightarrow{AD}^2 - \\overrightarrow{AB}^2 + \\overrightarrow{AA'}\\cdot\\overrightarrow{AD} - \\overrightarrow{AA'}\\cdot\\overrightarrow{AB}$.`,
        },
        {
          role: 'Thay độ dài và góc vuông để kết luận',
          content: `Vì hình lập phương có $AD = AB = ${variant === 1 ? 4 : 6}$ và $AA' \\perp AD, AA' \\perp AB$ nên $\\overrightarrow{AC'} \\cdot \\overrightarrow{BD} = ${variant === 1 ? 16 : 36} - ${variant === 1 ? 16 : 36} + 0 - 0 = 0$.`,
        },
      ],
      'Phân tích mọi vectơ trong hình hộp theo 3 vectơ chung gốc $\\overrightarrow{AB}, \\overrightarrow{AD}, \\overrightarrow{AA\'}$.',
      'Phương pháp vectơ cơ sở giải toán hình học không gian.',
      0.7,
      'sp_box_abcd'
    ),
    makeSO(
      p,
      2,
      'Bài tập cuối chương II',
      `Trong không gian $Oxyz$, cho ba điểm $A(2; 1; -1), B(3; 0; 1)$ và $C(2; -1; 3)$. Tìm tọa độ điểm $D$ thuộc trục $Oy$ sao cho $\\overrightarrow{AB} \\perp \\overrightarrow{CD}$.`,
      `Tham số hóa điểm $D(0; y; 0) \\in Oy$ và giải phương trình tích vô hướng bằng $0$.`,
      [
        {
          role: 'Tham số hóa điểm D và tính hai vectơ AB, CD',
          content: `Vì $D \\in Oy$ nên $D(0; y; 0)$. Ta có $\\overrightarrow{AB} = (1; -1; 2)$ và $\\overrightarrow{CD} = (-2; y + 1; -3)$.`,
        },
        {
          role: 'Thiết lập phương trình từ điều kiện vuông góc',
          content: `Ta có $\\overrightarrow{AB} \\perp \\overrightarrow{CD} \\Leftrightarrow \\overrightarrow{AB} \\cdot \\overrightarrow{CD} = 0 \\Leftrightarrow 1(-2) + (-1)(y + 1) + 2(-3) = 0$.`,
        },
        {
          role: 'Giải phương trình và kết luận tọa độ điểm D',
          content: `Thu gọn phương trình: $-2 - y - 1 - 6 = 0 \\Leftrightarrow y = -9$. Vậy $D(0; -9; 0)$.`,
        },
      ],
      'Điểm thuộc trục $Oy$ luôn có hoành độ $x = 0$ và cao độ $z = 0$.',
      'Kết hợp tọa độ điểm đặc biệt và điều kiện vuông góc của hai vectơ.',
      0.65
    ),
    makeSO(
      p,
      3,
      'Bài tập cuối chương II',
      `Trong không gian $Oxyz$, cho tam giác $ABC$ có $A(1; 2; 3), B(4; 2; 3)$ và $C(1; 6; 3)$. Tính chu vi và diện tích của tam giác $ABC$.`,
      `Tính độ dài ba cạnh $AB, AC, BC$ và kiểm tra tam giác vuông.`,
      [
        {
          role: 'Tính tọa độ và độ dài các vectơ cạnh AB, AC, BC',
          content: `Ta có $\\overrightarrow{AB} = (3; 0; 0) \\Rightarrow AB = 3$; $\\overrightarrow{AC} = (0; 4; 0) \\Rightarrow AC = 4$; $\\overrightarrow{BC} = (-3; 4; 0) \\Rightarrow BC = 5$.`,
        },
        {
          role: 'Tính chu vi tam giác ABC',
          content: `Chu vi của tam giác $ABC$ là $2p = AB + AC + BC = 3 + 4 + 5 = 12$.`,
        },
        {
          role: 'Chứng minh tam giác vuông tại A và tính diện tích',
          content: `Vì $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = 0$ (hoặc $AB^2 + AC^2 = BC^2$) nên $\\triangle ABC$ vuông tại $A$. Diện tích $S_{\\triangle ABC} = \\frac{1}{2} AB \\cdot AC = 6$.`,
        },
      ],
      'Bộ ba cạnh $(3, 4, 5)$ là bộ số Pythagore đặc trưng của tam giác vuông.',
      'Tổng hợp các phép toán tọa độ vectơ trong tam giác.',
      0.65,
      'sp_oxyz_triangle_abc'
    ),
  ];

  return makeLessonExam(
    `chuong-02-ontap-de-${variant}`,
    `Ôn tập Chương II - Đề ôn số ${variant}`,
    `Bài tập cuối chương II (SGK Toán 12 Tập 1)`,
    `Đề ôn số ${variant} - Bài tập cuối chương II: Tổng hợp Vectơ và Hệ trục tọa độ trong không gian (22 câu hỏi chuẩn cấu trúc 4 phần).`,
    part1,
    part2,
    part3,
    part4
  );
}

export const CHAPTER_2_PART_B_LESSONS: LessonInfo[] = [
  {
    id: 'bai-08',
    code: 'Bài 8',
    title: 'Biểu thức toạ độ của các phép toán vectơ',
    fullName: 'Bài 8. Biểu thức toạ độ của các phép toán vectơ',
    chapterId: 'chuong-2',
    chapterTitle: 'CHƯƠNG II. VECTƠ VÀ HỆ TRỤC TOẠ ĐỘ TRONG KHÔNG GIAN',
    pageNumber: 67,
    coreTopics: [
      'Biểu thức tọa độ của tổng, hiệu hai vectơ và tích một số với một vectơ',
      'Tọa độ trung điểm đoạn thẳng, tọa độ trọng tâm tam giác và tứ diện',
      'Biểu thức tọa độ của tích vô hướng, độ dài vectơ, khoảng cách và góc giữa hai vectơ',
    ],
    practiceExams: [buildBai8Exam(1), buildBai8Exam(2)],
  },
  {
    id: 'ontap-chuong-2',
    code: 'Ôn tập Chương II',
    title: 'Bài tập cuối chương II',
    fullName: 'Bài tập cuối chương II',
    chapterId: 'chuong-2',
    chapterTitle: 'CHƯƠNG II. VECTƠ VÀ HỆ TRỤC TOẠ ĐỘ TRONG KHÔNG GIAN',
    pageNumber: 73,
    coreTopics: [
      'Tổng hợp các phép toán vectơ trong hình học không gian (hình hộp, tứ diện, hình chóp)',
      'Tổng hợp hệ trục tọa độ Oxyz, hình chiếu, điểm đối xứng và biểu thức tọa độ',
      'Ứng dụng tọa độ vectơ trong các bài toán thực tiễn (lực cơ học, radar, khinh khí cầu)',
    ],
    practiceExams: [buildOnTapChuong2Exam(1), buildOnTapChuong2Exam(2)],
  },
];
