import { LessonInfo } from './types';
import { ExamSet } from '../../types/exam';
import { makeMC, makeTF, makeSA, makeSO, makeLessonExam } from './helpers';

// BÀI 4. KHẢO SÁT SỰ BIẾN THIÊN VÀ VẼ ĐỒ THỊ CỦA HÀM SỐ (Đề ôn số 1 & Đề ôn số 2)
function buildBai4Exam(variant: 1 | 2): ExamSet {
  const p = variant === 1 ? 'b4-d1' : 'b4-d2';
  // Hàm bậc ba y = x^3 - 3*x0*x^2 + d0 => tâm đối xứng I(x0; y(x0))
  const x0 = variant === 1 ? 1 : 2;
  const d0 = variant === 1 ? 4 : 10;
  // y = x^3 - 3x^2 + 4 (v1) hoặc y = x^3 - 6x^2 + 10 (v2)
  const b3 = 3 * x0; // v1: 3, v2: 6
  const yI = x0 ** 3 - b3 * x0 ** 2 + d0; // v1: 2, v2: -6

  const part1 = [
    makeMC(
      p,
      1,
      'Bài 4. Khảo sát sự biến thiên và vẽ đồ thị của hàm số',
      `Tâm đối xứng của đồ thị hàm số $y = x^3 - ${b3}x^2 + ${d0}$ là điểm có tọa độ:`,
      [
        `$I(${x0}; ${yI})$`,
        `$I(-${x0}; ${yI})$`,
        `$I(0; ${d0})$`,
        `$I(${2 * x0}; ${d0})$`,
      ],
      'A',
      `Ta có $y' = 3x^2 - ${2 * b3}x$ và $y'' = 6x - ${2 * b3} = 0 \\Leftrightarrow x = ${x0}$. Thay $x = ${x0}$ vào hàm số được $y(${x0}) = ${yI}$. Vậy tâm đối xứng là $I(${x0}; ${yI})$.`,
      'Tâm đối xứng của đồ thị hàm bậc ba là điểm uốn có hoành độ nghiệm phương trình $y\'\' = 0$.'
    ),
    makeMC(
      p,
      2,
      'Bài 4. Khảo sát sự biến thiên và vẽ đồ thị của hàm số',
      `Đồ thị hàm số $y = x^3 - ${b3}x^2 + ${d0}$ cắt trục tung $Oy$ tại điểm có tung độ bằng:`,
      [`$${d0}$`, `$0$`, `$${yI}$`, `$-${d0}$`],
      'A',
      `Cho $x = 0 \\Rightarrow y = ${d0}$. Vậy đồ thị cắt trục tung tại điểm $(0; ${d0})$ có tung độ bằng $${d0}$.`,
      'Giao điểm của đồ thị hàm số $y = f(x)$ với trục tung $Oy$ luôn có hoành độ $x = 0$ và tung độ $y = f(0)$.'
    ),
    makeMC(
      p,
      3,
      'Bài 4. Khảo sát sự biến thiên và vẽ đồ thị của hàm số',
      `Tâm đối xứng của đồ thị hàm số phân thức $y = \\frac{${variant === 1 ? 3 : 4}x - 2}{x + ${variant === 1 ? 1 : 2}}$ là điểm:`,
      [
        `$I(-${variant === 1 ? 1 : 2}; ${variant === 1 ? 3 : 4})$`,
        `$I(${variant === 1 ? 1 : 2}; ${variant === 1 ? 3 : 4})$`,
        `$I(${variant === 1 ? 3 : 4}; -${variant === 1 ? 1 : 2})$`,
        `$I(0; -${variant === 1 ? 2 : 1})$`,
      ],
      'A',
      `Đồ thị có tiệm cận đứng $x = -${variant === 1 ? 1 : 2}$ và tiệm cận ngang $y = ${variant === 1 ? 3 : 4}$. Giao điểm $I(-${variant === 1 ? 1 : 2}; ${variant === 1 ? 3 : 4})$ của hai đường tiệm cận chính là tâm đối xứng của đồ thị.`,
      'Tâm đối xứng của đồ thị hàm phân thức bậc nhất/bậc nhất là giao điểm của hai đường tiệm cận.'
    ),
    makeMC(
      p,
      4,
      'Bài 4. Khảo sát sự biến thiên và vẽ đồ thị của hàm số',
      `Đồ thị hàm số $y = \\frac{2x - ${variant === 1 ? 6 : 8}}{x + 1}$ cắt trục hoành $Ox$ tại điểm có tọa độ là:`,
      [
        `$(${variant === 1 ? 3 : 4}; 0)$`,
        `$(0; ${variant === 1 ? 3 : 4})$`,
        `$(-${variant === 1 ? 6 : 8}; 0)$`,
        `$(-1; 2)$`,
      ],
      'A',
      `Cho $y = 0 \\Leftrightarrow 2x - ${variant === 1 ? 6 : 8} = 0 \\Leftrightarrow x = ${variant === 1 ? 3 : 4}$. Vậy giao điểm với $Ox$ là $(${variant === 1 ? 3 : 4}; 0)$.`,
      'Giải phương trình $y = 0$ (tử số bằng $0$ và mẫu số khác $0$) để tìm hoành độ giao điểm với trục $Ox$.'
    ),
    makeMC(
      p,
      5,
      'Bài 4. Khảo sát sự biến thiên và vẽ đồ thị của hàm số',
      `Số giao điểm của đồ thị hàm số $y = x^3 - 3x + ${variant === 1 ? 1 : 0}$ với trục hoành $Ox$ là:`,
      ['$3$', '$2$', '$1$', '$0$'],
      'A',
      `Hàm số có $y_{CĐ} = y(-1) = ${variant === 1 ? 3 : 2} > 0$ và $y_{CT} = y(1) = ${variant === 1 ? -1 : -2} < 0$. Vì $y_{CĐ} \\cdot y_{CT} < 0$ nên đồ thị cắt trục hoành tại $3$ điểm phân biệt.`,
      'Đồ thị hàm bậc ba cắt trục hoành tại 3 điểm phân biệt khi và chỉ khi $y_{CĐ}$ và $y_{CT}$ trái dấu.'
    ),
    makeMC(
      p,
      6,
      'Bài 4. Khảo sát sự biến thiên và vẽ đồ thị của hàm số',
      `Cho hàm số bậc ba $y = ax^3 + bx^2 + cx + d$ có nhánh cuối cùng đi xuống khi $x \\to +\\infty$ và cắt trục tung tại điểm nằm phía trên trục hoành. Khẳng định nào sau đây đúng?`,
      [
        `$a < 0$ và $d > 0$`,
        `$a > 0$ và $d > 0$`,
        `$a < 0$ và $d < 0$`,
        `$a > 0$ và $d < 0$`,
      ],
      'A',
      `Vì $\\lim_{x \\to +\\infty} y = -\\infty$ nên hệ số bậc cao nhất $a < 0$. Giao điểm với $Oy$ là $(0; d)$ nằm phía trên trục hoành nên $d > 0$.`,
      'Dấu của $a$ xác định từ nhánh phải ngoài cùng của đồ thị; dấu của $d$ xác định từ tung độ giao điểm với trục $Oy$.'
    ),
    makeMC(
      p,
      7,
      'Bài 4. Khảo sát sự biến thiên và vẽ đồ thị của hàm số',
      `Tâm đối xứng của đồ thị hàm số $y = x + ${variant === 1 ? 2 : 3} + \\frac{5}{x - ${variant === 1 ? 1 : 2}}$ là điểm:`,
      [
        `$I(${variant === 1 ? 1 : 2}; ${variant === 1 ? 3 : 5})$`,
        `$I(${variant === 1 ? 1 : 2}; ${variant === 1 ? 2 : 3})$`,
        `$I(-${variant === 1 ? 1 : 2}; ${variant === 1 ? 3 : 5})$`,
        `$I(0; ${variant === 1 ? 2 : 3})$`,
      ],
      'A',
      `Tiệm cận đứng là $x = ${variant === 1 ? 1 : 2}$ và tiệm cận xiên là $y = x + ${variant === 1 ? 2 : 3}$. Giao điểm hai tiệm cận là $I(${variant === 1 ? 1 : 2}; ${variant === 1 ? 3 : 5})$, đó là tâm đối xứng của đồ thị.`,
      'Tâm đối xứng của đồ thị hàm bậc hai trên bậc nhất là giao điểm của tiệm cận đứng và tiệm cận xiên.'
    ),
    makeMC(
      p,
      8,
      'Bài 4. Khảo sát sự biến thiên và vẽ đồ thị của hàm số',
      `Số giao điểm của đồ thị hàm số $y = \\frac{${variant === 1 ? 2 : 3}x + 1}{x - 1}$ và đường thẳng $y = x + ${variant === 1 ? 1 : 2}$ là:`,
      ['$2$', '$1$', '$0$', '$3$'],
      'A',
      `Phương trình hoành độ giao điểm ($x \\neq 1$): $${variant === 1 ? 2 : 3}x + 1 = (x - 1)(x + ${variant === 1 ? 1 : 2}) \\Leftrightarrow x^2 - 2x - ${variant === 1 ? 2 : 3} = 0$. Phương trình có $ac = -${variant === 1 ? 2 : 3} < 0$ (và $x = 1$ không là nghiệm) nên luôn có $2$ nghiệm phân biệt.`,
      'Khi lập phương trình hoành độ giao điểm, nhớ kiểm tra nghiệm khác nghiệm của mẫu số.'
    ),
    makeMC(
      p,
      9,
      'Bài 4. Khảo sát sự biến thiên và vẽ đồ thị của hàm số',
      `Hệ số góc của tiếp tuyến với đồ thị hàm số $y = x^3 - 3x^2 + ${variant === 1 ? 5 : 7}$ tại tâm đối xứng của đồ thị bằng:`,
      ['$-3$', '$3$', '$0$', '$-6$'],
      'A',
      `Ta có $y' = 3x^2 - 6x$, $y'' = 6x - 6 = 0 \\Leftrightarrow x = 1$. Hệ số góc tiếp tuyến tại tâm đối xứng $x = 1$ là $k = y'(1) = 3(1)^2 - 6(1) = -3$.`,
      'Hệ số góc tiếp tuyến tại điểm uốn $x_0$ là $k = y\'(x_0)$, đây cũng là giá trị nhỏ nhất của hệ số góc tiếp tuyến khi $a > 0$.'
    ),
    makeMC(
      p,
      10,
      'Bài 4. Khảo sát sự biến thiên và vẽ đồ thị của hàm số',
      `Tìm tất cả các giá trị thực của tham số $m$ để phương trình $x^3 - 3x^2 + 4 = m$ có $3$ nghiệm thực phân biệt.`,
      [
        `$0 < m < 4$`,
        `$0 \\le m \\le 4$`,
        `$-4 < m < 0$`,
        `$m > 4$`,
      ],
      'A',
      `Xét hàm số $f(x) = x^3 - 3x^2 + 4$ có $y_{CĐ} = f(0) = 4$ và $y_{CT} = f(2) = 0$. Đường thẳng $y = m$ cắt đồ thị tại $3$ điểm phân biệt khi và chỉ khi $y_{CT} < m < y_{CĐ} \\Leftrightarrow 0 < m < 4$.`,
      'Số nghiệm của phương trình $f(x) = m$ là số giao điểm của đồ thị $y = f(x)$ và đường thẳng nằm ngang $y = m$.'
    ),
    makeMC(
      p,
      11,
      'Bài 4. Khảo sát sự biến thiên và vẽ đồ thị của hàm số',
      `Cho hàm số $y = \\frac{ax + b}{x + c}$ có đồ thị nhận điểm $I(1; ${variant === 1 ? 2 : 3})$ làm tâm đối xứng và đi qua gốc tọa độ $O(0; 0)$. Giá trị của tổng $a + b + c$ bằng:`,
      [
        `$${variant === 1 ? 1 : 2}$`,
        `$${variant === 1 ? 3 : 4}$`,
        `$0$`,
        `$-1$`,
      ],
      'A',
      `Tâm đối xứng $I(1; ${variant === 1 ? 2 : 3}) \\Rightarrow$ TCĐ $x = -c = 1 \\Leftrightarrow c = -1$ và TCN $y = a = ${variant === 1 ? 2 : 3}$. Đồ thị đi qua $O(0; 0) \\Rightarrow b = 0$. Vậy $a + b + c = ${variant === 1 ? 2 : 3} + 0 + (-1) = ${variant === 1 ? 1 : 2}$.`,
      'Từ tọa độ tâm đối xứng $I(-c; a)$ suy ngay ra $c$ và $a$, sau đó thay điểm đi qua để tìm $b$.'
    ),
    makeMC(
      p,
      12,
      'Bài 4. Khảo sát sự biến thiên và vẽ đồ thị của hàm số',
      `Đồ thị của hàm số nào dưới đây đi qua điểm $M(1; ${variant === 1 ? 3 : 5})$ và có tiệm cận ngang $y = 2$?`,
      [
        `$y = \\frac{2x + ${variant === 1 ? 1 : 3}}{x}$`,
        `$y = \\frac{x + 2}{x - 1}$`,
        `$y = x^3 + 2x$`,
        `$y = \\frac{3x}{x + 1}$`,
      ],
      'A',
      `Hàm số $y = \\frac{2x + ${variant === 1 ? 1 : 3}}{x}$ có tiệm cận ngang $y = 2$ và tại $x = 1$ thì $y(1) = 2 + ${variant === 1 ? 1 : 3} = ${variant === 1 ? 3 : 5}$ nên đi qua $M(1; ${variant === 1 ? 3 : 5})$.`,
      'Kiểm tra lần lượt điều kiện tiệm cận ngang $y = 2$ rồi thay tọa độ điểm $M$.'
    ),
  ];

  const part2 = [
    makeTF(
      p,
      1,
      'Bài 4. Khảo sát sự biến thiên và vẽ đồ thị của hàm số',
      `Cho hàm số bậc ba $y = f(x) = x^3 - ${b3}x^2 + ${d0}$ có đồ thị $(C)$. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Đồ thị $(C)$ cắt trục tung tại điểm $(0; ${d0})$.`,
          isCorrect: true,
          exp: `Thay $x = 0$ ta có $f(0) = ${d0}$ nên giao điểm với trục tung là $(0; ${d0})$.`,
        },
        {
          text: `Hàm số có hai điểm cực trị là $x = 0$ và $x = ${2 * x0}$.`,
          isCorrect: true,
          exp: `Ta có $f'(x) = 3x^2 - ${2 * b3}x = 3x(x - ${2 * x0}) = 0 \\Leftrightarrow x = 0$ hoặc $x = ${2 * x0}$.`,
        },
        {
          text: `Tâm đối xứng của đồ thị $(C)$ là điểm $I(${x0}; ${yI})$.`,
          isCorrect: true,
          exp: `Trung điểm của đoạn nối hai điểm cực trị $(0; ${d0})$ và $(${2 * x0}; ${d0 - 4 * x0 ** 3})$ là $I(${x0}; ${yI})$.`,
        },
        {
          text: `Khi $x \\to +\\infty$ thì $f(x) \\to -\\infty$.`,
          isCorrect: false,
          exp: `Vì hệ số $a = 1 > 0$ nên $\\lim_{x \\to +\\infty} f(x) = +\\infty$.`,
        },
      ],
      'Tâm đối xứng của đồ thị hàm bậc ba luôn là trung điểm của đoạn thẳng nối hai điểm cực trị (nếu có).'
    ),
    makeTF(
      p,
      2,
      'Bài 4. Khảo sát sự biến thiên và vẽ đồ thị của hàm số',
      `Cho hàm số phân thức $y = f(x) = \\frac{2x - ${variant === 1 ? 1 : 3}}{x - 1}$ có đồ thị $(C)$. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Đồ thị $(C)$ có tiệm cận đứng $x = 1$ và tiệm cận ngang $y = 2$.`,
          isCorrect: true,
          exp: `Nghiệm mẫu là $x = 1$ (TCĐ) và $\\lim_{x \\to \\pm\\infty} f(x) = 2$ (TCN).`,
        },
        {
          text: `Hàm số đồng biến trên từng khoảng $(-\\infty; 1)$ và $(1; +\\infty)$.`,
          isCorrect: variant === 1 ? false : true,
          exp:
            variant === 1
              ? `Ta có $f'(x) = \\frac{-1}{(x-1)^2} < 0$ nên hàm số nghịch biến trên từng khoảng xác định.`
              : `Ta có $f'(x) = \\frac{1}{(x-1)^2} > 0$ nên hàm số đồng biến trên từng khoảng xác định.`,
        },
        {
          text: `Tâm đối xứng của đồ thị $(C)$ là điểm $I(1; 2)$.`,
          isCorrect: true,
          exp: `Giao điểm hai đường tiệm cận $x = 1$ và $y = 2$ là $I(1; 2)$.`,
        },
        {
          text: `Đồ thị $(C)$ cắt trục tung tại điểm có tung độ bằng $${variant === 1 ? 1 : 3}$.`,
          isCorrect: true,
          exp: `Tại $x = 0$, ta có $f(0) = \\frac{-(${variant === 1 ? 1 : 3})}{-1} = ${variant === 1 ? 1 : 3}$.`,
        },
      ],
      'Kiểm tra kỹ dấu của $ad - bc$ khi xét chiều biến thiên của hàm $y = \\frac{ax+b}{cx+d}$.'
    ),
    makeTF(
      p,
      3,
      'Bài 4. Khảo sát sự biến thiên và vẽ đồ thị của hàm số',
      `Cho hàm số $y = f(x) = \\frac{x^2 - 2x + ${variant === 1 ? 5 : 10}}{x - 1}$ có đồ thị $(C)$. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Đồ thị $(C)$ có tiệm cận đứng là $x = 1$ và tiệm cận xiên là $y = x - 1$.`,
          isCorrect: true,
          exp: `Viết lại $f(x) = x - 1 + \\frac{${variant === 1 ? 4 : 9}}{x - 1}$. Suy ra TCĐ là $x = 1$ và TCX là $y = x - 1$.`,
        },
        {
          text: `Hàm số đạt cực đại tại $x = ${variant === 1 ? -1 : -2}$ và đạt cực tiểu tại $x = ${variant === 1 ? 3 : 4}$.`,
          isCorrect: true,
          exp: `Ta có $f'(x) = 1 - \\frac{${variant === 1 ? 4 : 9}}{(x-1)^2} = 0 \\Leftrightarrow x - 1 = \\pm ${variant === 1 ? 2 : 3} \\Leftrightarrow x = ${variant === 1 ? -1 : -2}$ (cực đại) hoặc $x = ${variant === 1 ? 3 : 4}$ (cực tiểu).`,
        },
        {
          text: `Đồ thị $(C)$ cắt trục hoành tại $2$ điểm phân biệt.`,
          isCorrect: false,
          exp: `Tử số $x^2 - 2x + ${variant === 1 ? 5 : 10} = (x - 1)^2 + ${variant === 1 ? 4 : 9} > 0, \\forall x \\in \\mathbb{R}$ nên đồ thị không cắt trục hoành.`,
        },
        {
          text: `Tâm đối xứng của đồ thị $(C)$ là điểm $I(1; 0)$.`,
          isCorrect: true,
          exp: `Giao điểm của TCĐ $x = 1$ và TCX $y = x - 1$ là điểm $I(1; 0)$.`,
        },
      ],
      'Biến đổi hàm phân thức về dạng $y = ax + b + \\frac{r}{x - x_0}$ giúp đọc nhanh tiệm cận, đạo hàm và tâm đối xứng.'
    ),
  ];

  const part3 = [
    makeSA(
      p,
      1,
      'Bài 4. Khảo sát sự biến thiên và vẽ đồ thị của hàm số',
      `Biết điểm $I(x_0; y_0)$ là tâm đối xứng của đồ thị hàm số $y = x^3 - ${variant === 1 ? 6 : 9}x^2 + ${variant === 1 ? 12 : 27}x + ${variant === 1 ? 5 : 2}$. Tính giá trị của $x_0 + y_0$.`,
      [variant === 1 ? '15' : '32'],
      `Ta có $y'' = 6x - ${variant === 1 ? 12 : 18} = 0 \\Leftrightarrow x_0 = ${variant === 1 ? 2 : 3}$. Khi đó $y_0 = y(${variant === 1 ? 2 : 3}) = ${variant === 1 ? 13 : 29}$. Suy ra $x_0 + y_0 = ${variant === 1 ? 15 : 32}$.`,
      'Giải $y\'\' = 0$ để tìm $x_0$, sau đó thay vào hàm số tìm $y_0$.'
    ),
    makeSA(
      p,
      2,
      'Bài 4. Khảo sát sự biến thiên và vẽ đồ thị của hàm số',
      `Tìm số giao điểm của đồ thị hàm số $y = x^3 - ${variant === 1 ? 4 : 9}x$ và trục hoành $Ox$.`,
      ['3'],
      `Phương trình hoành độ giao điểm: $x^3 - ${variant === 1 ? 4 : 9}x = 0 \\Leftrightarrow x(x^2 - ${variant === 1 ? 4 : 9}) = 0 \\Leftrightarrow x = 0$ hoặc $x = \\pm ${variant === 1 ? 2 : 3}$. Có $3$ giao điểm phân biệt.`,
      'Giải phương trình $f(x) = 0$ để đếm số giao điểm với trục hoành.'
    ),
    makeSA(
      p,
      3,
      'Bài 4. Khảo sát sự biến thiên và vẽ đồ thị của hàm số',
      `Đồ thị hàm số $y = \\frac{${variant === 1 ? 3 : 5}x + ${variant === 1 ? 4 : 6}}{x + 2}$ có tâm đối xứng là $I(a; b)$. Tính giá trị của $2a + b$.`,
      [variant === 1 ? '-1' : '1'],
      `Đồ thị có TCĐ $x = -2 \\Rightarrow a = -2$ và TCN $y = ${variant === 1 ? 3 : 5} \\Rightarrow b = ${variant === 1 ? 3 : 5}$. Vậy $2a + b = 2(-2) + ${variant === 1 ? 3 : 5} = ${variant === 1 ? -1 : 1}$.`,
      'Tâm đối xứng $I(a; b)$ có $a$ là nghiệm mẫu và $b$ là tỉ số hệ số của $x$.'
    ),
    makeSA(
      p,
      4,
      'Bài 4. Khảo sát sự biến thiên và vẽ đồ thị của hàm số',
      `Có bao nhiêu giá trị nguyên của tham số $m$ để đường thẳng $y = m$ cắt đồ thị hàm số $y = x^3 - 3x + ${variant === 1 ? 2 : 5}$ tại $3$ điểm phân biệt?`,
      ['3'],
      `Hàm số $f(x) = x^3 - 3x + ${variant === 1 ? 2 : 5}$ có $y_{CĐ} = f(-1) = ${variant === 1 ? 4 : 7}$ và $y_{CT} = f(1) = ${variant === 1 ? 0 : 3}$. Để cắt tại $3$ điểm phân biệt thì $${variant === 1 ? 0 : 3} < m < ${variant === 1 ? 4 : 7}$, suy ra $m \\in \\{${variant === 1 ? '1, 2, 3' : '4, 5, 6'}\\}$ (có $3$ giá trị nguyên).`,
      'Điều kiện cắt tại 3 điểm phân biệt là $y_{CT} < m < y_{CĐ}$ (không lấy dấu bằng).'
    ),
  ];

  const part4 = [
    makeSO(
      p,
      1,
      'Bài 4. Khảo sát sự biến thiên và vẽ đồ thị của hàm số',
      `Khảo sát sự biến thiên của hàm số bậc ba $y = x^3 - ${b3}x^2 + ${d0}$.`,
      `Hoàn thiện các bước khảo sát chuẩn SGK từ tập xác định đến tâm đối xứng của đồ thị.`,
      [
        {
          role: 'Tìm tập xác định và giới hạn tại vô cực',
          content: `Tập xác định $D = \\mathbb{R}$. Giới hạn $\\lim_{x \\to +\\infty} y = +\\infty$ và $\\lim_{x \\to -\\infty} y = -\\infty$.`,
        },
        {
          role: 'Tính đạo hàm và tìm nghiệm của đạo hàm',
          content: `Ta có $y' = 3x^2 - ${2 * b3}x = 0 \\Leftrightarrow x = 0$ hoặc $x = ${2 * x0}$.`,
        },
        {
          role: 'Kết luận chiều biến thiên và cực trị',
          content: `Hàm số đồng biến trên $(-\\infty; 0)$ và $(${2 * x0}; +\\infty)$, nghịch biến trên $(0; ${2 * x0})$. Hàm số đạt cực đại tại $x = 0, y_{CĐ} = ${d0}$ và đạt cực tiểu tại $x = ${2 * x0}, y_{CT} = ${d0 - 4 * x0 ** 3}$.`,
        },
        {
          role: 'Xác định tâm đối xứng và giao điểm với trục tung',
          content: `Đồ thị cắt trục tung tại $(0; ${d0})$ và nhận điểm uốn $I(${x0}; ${yI})$ làm tâm đối xứng.`,
        },
      ],
      'Sơ đồ khảo sát hàm số chuẩn SGK Kết nối tri thức gồm: TXĐ -> Sự biến thiên (giới hạn, đạo hàm, BBT, đơn điệu, cực trị) -> Đồ thị (giao điểm, tâm đối xứng).',
      'Nắm vững quy trình khảo sát toàn diện hàm số đa thức bậc ba.',
      0.7
    ),
    makeSO(
      p,
      2,
      'Bài 4. Khảo sát sự biến thiên và vẽ đồ thị của hàm số',
      `Khảo sát sự biến thiên và xác định các yếu tố hình học của đồ thị hàm số $y = \\frac{${variant === 1 ? 3 : 4}x - 2}{x + ${variant === 1 ? 1 : 2}}$.`,
      `Xác định chiều biến thiên, các đường tiệm cận và tâm đối xứng của đồ thị.`,
      [
        {
          role: 'Tìm tập xác định và tính đạo hàm',
          content: `Tập xác định $D = \\mathbb{R} \\setminus \\{-${variant === 1 ? 1 : 2}\\}$. Đạo hàm $y' = \\frac{${variant === 1 ? 5 : 10}}{(x + ${variant === 1 ? 1 : 2})^2} > 0, \\forall x \\in D$.`,
        },
        {
          role: 'Kết luận sự biến thiên và tiệm cận',
          content: `Hàm số đồng biến trên từng khoảng $(-\\infty; -${variant === 1 ? 1 : 2})$ và $(-${variant === 1 ? 1 : 2}; +\\infty)$, không có cực trị. Đồ thị có TCĐ $x = -${variant === 1 ? 1 : 2}$ và TCN $y = ${variant === 1 ? 3 : 4}$.`,
        },
        {
          role: 'Xác định giao điểm với trục tọa độ và tâm đối xứng',
          content: `Đồ thị cắt $Oy$ tại $(0; -${variant === 1 ? 2 : 1})$, cắt $Ox$ tại $(\\frac{2}{${variant === 1 ? 3 : 4}}; 0)$ và nhận giao điểm hai tiệm cận $I(-${variant === 1 ? 1 : 2}; ${variant === 1 ? 3 : 4})$ làm tâm đối xứng.`,
        },
      ],
      'Khi khảo sát hàm phân thức, luôn xác định hai đường tiệm cận và giao điểm của chúng.',
      'Quy trình chuẩn khảo sát hàm phân thức bậc nhất trên bậc nhất.',
      0.65
    ),
    makeSO(
      p,
      3,
      'Bài 4. Khảo sát sự biến thiên và vẽ đồ thị của hàm số',
      `Tìm tọa độ các giao điểm của đồ thị hàm số $y = \\frac{2x + ${variant === 1 ? 1 : 4}}{x - 1}$ và đường thẳng $d: y = x + ${variant === 1 ? 3 : 4}$.`,
      `Giải phương trình hoành độ giao điểm và kết luận tọa độ hai giao điểm.`,
      [
        {
          role: 'Lập phương trình hoành độ giao điểm',
          content: `Phương trình hoành độ giao điểm (điều kiện $x \\neq 1$): $\\frac{2x + ${variant === 1 ? 1 : 4}}{x - 1} = x + ${variant === 1 ? 3 : 4}$.`,
        },
        {
          role: 'Biến đổi về phương trình bậc hai và giải nghiệm',
          content: `Quy đồng khử mẫu: $2x + ${variant === 1 ? 1 : 4} = (x - 1)(x + ${variant === 1 ? 3 : 4}) \\Leftrightarrow x^2 + ${variant === 1 ? '' : '1'}x - ${variant === 1 ? 4 : 8} = 0$? Để nghiệm nguyên đẹp: xét đường thẳng $d: y = x + 1$, khi đó $(x-1)(x+1) = 2x + ${variant === 1 ? 2 : 7} \\Leftrightarrow x^2 - 2x - ${variant === 1 ? 3 : 8} = 0 \\Leftrightarrow x = -${variant === 1 ? 1 : 2}$ hoặc $x = ${variant === 1 ? 3 : 4}$.`,
        },
        {
          role: 'Tìm tung độ tương ứng và kết luận tọa độ giao điểm',
          content: `Thay vào phương trình đường thẳng $y = x + 1$, ta được hai giao điểm là $A(-${variant === 1 ? 1 : 2}; ${variant === 1 ? 0 : -1})$ và $B(${variant === 1 ? 3 : 4}; ${variant === 1 ? 4 : 5})$.`,
        },
      ],
      'Thay hoành độ giao điểm vào phương trình đường thẳng $y = ax + b$ để tìm tung độ nhanh nhất.',
      'Kỹ năng giải bài toán tương giao giữa đồ thị hàm phân thức và đường thẳng.',
      0.65
    ),
  ];

  // Đồng bộ đề bài câu 3 phần IV với lời giải nghiệm nguyên:
  part4[2].problemStatement = `Tìm tọa độ các giao điểm của đồ thị hàm số $y = \\frac{2x + ${variant === 1 ? 2 : 7}}{x - 1}$ và đường thẳng $d: y = x + 1$.`;
  part4[2].steps[0].content = `Phương trình hoành độ giao điểm (điều kiện $x \\neq 1$): $\\frac{2x + ${variant === 1 ? 2 : 7}}{x - 1} = x + 1$.`;
  part4[2].steps[1].content = `Quy đồng khử mẫu: $2x + ${variant === 1 ? 2 : 7} = (x - 1)(x + 1) \\Leftrightarrow x^2 - 2x - ${variant === 1 ? 3 : 8} = 0 \\Leftrightarrow x = -${variant === 1 ? 1 : 2}$ hoặc $x = ${variant === 1 ? 3 : 4}$ (đều thỏa mãn $x \\neq 1$).`;

  return makeLessonExam(
    `bai-04-de-${variant}`,
    `Bài 4 - Đề ôn số ${variant}`,
    `Bài 4. Khảo sát sự biến thiên và vẽ đồ thị của hàm số (SGK Toán 12 Tập 1)`,
    `Đề ôn số ${variant} - Bài 4: Khảo sát sự biến thiên và vẽ đồ thị của hàm số (22 câu hỏi chuẩn cấu trúc 4 phần).`,
    part1,
    part2,
    part3,
    part4
  );
}

// BÀI 5. ỨNG DỤNG ĐẠO HÀM ĐỂ GIẢI QUYẾT MỘT SỐ VẤN ĐỀ LIÊN QUAN ĐẾN THỰC TIỄN (Đề ôn số 1 & Đề ôn số 2)
function buildBai5Exam(variant: 1 | 2): ExamSet {
  const p = variant === 1 ? 'b5-d1' : 'b5-d2';
  const v0 = variant === 1 ? 24 : 36; // s(t) = v0*t - 3*t^2 => v(t) = v0 - 6t = 0 tại t = v0/6 (v1: 4s, v2: 6s)
  const tStop = v0 / 6; // v1: 4, v2: 6
  const sMax = v0 * tStop - 3 * tStop * tStop; // v1: 48, v2: 108

  const part1 = [
    makeMC(
      p,
      1,
      'Bài 5. Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn',
      `Một ô tô đang chạy thì người lái đạp phanh; từ thời điểm đó ô tô chuyển động chậm dần với quãng đường đi được sau $t$ giây là $s(t) = ${v0}t - 3t^2\\text{ (m)}$. Hỏi sau bao nhiêu giây kể từ lúc đạp phanh thì ô tô dừng hẳn?`,
      [
        `$${tStop}$ giây`,
        `$${2 * tStop}$ giây`,
        `$${tStop / 2}$ giây`,
        `$${v0}$ giây`,
      ],
      'A',
      `Vận tốc tức thời của ô tô là $v(t) = s'(t) = ${v0} - 6t$. Ô tô dừng hẳn khi $v(t) = 0 \\Leftrightarrow ${v0} - 6t = 0 \\Leftrightarrow t = ${tStop}$ (giây).`,
      'Khi vật dừng hẳn thì vận tốc tức thời bằng $0$: $v(t) = s\'(t) = 0$.'
    ),
    makeMC(
      p,
      2,
      'Bài 5. Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn',
      `Với cùng chuyển động $s(t) = ${v0}t - 3t^2\\text{ (m)}$ ở Câu 1, quãng đường ô tô đi thêm được kể từ lúc đạp phanh đến khi dừng hẳn là:`,
      [
        `$${sMax}\\text{ m}$`,
        `$${v0}\\text{ m}$`,
        `$${sMax / 2}\\text{ m}$`,
        `$${sMax + 12}\\text{ m}$`,
      ],
      'A',
      `Ô tô dừng hẳn tại $t = ${tStop}$ giây. Quãng đường đi được là $s(${tStop}) = ${v0}\\cdot ${tStop} - 3\\cdot ${tStop}^2 = ${sMax}\\text{ (m)}$.`,
      'Tìm thời điểm dừng $t_0$ từ phương trình $v(t_0) = 0$, sau đó thay $t_0$ vào hàm quãng đường $s(t)$.'
    ),
    makeMC(
      p,
      3,
      'Bài 5. Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn',
      `Một chất điểm chuyển động theo phương trình $s(t) = t^3 - ${variant === 1 ? 6 : 9}t^2 + ${variant === 1 ? 15 : 27}t + 2$, trong đó $t$ tính bằng giây và $s$ tính bằng mét. Gia tốc tức thời của chất điểm tại thời điểm $t = ${variant === 1 ? 4 : 5}$ giây là:`,
      [
        `$${variant === 1 ? 12 : 12}\\text{ m/s}^2$`,
        `$${variant === 1 ? 6 : 9}\\text{ m/s}^2$`,
        `$${variant === 1 ? 24 : 30}\\text{ m/s}^2$`,
        `$${variant === 1 ? 7 : 12}\\text{ m/s}^2$`,
      ],
      'A',
      `Ta có $v(t) = s'(t) = 3t^2 - ${variant === 1 ? 12 : 18}t + ${variant === 1 ? 15 : 27}$ và gia tốc $a(t) = v'(t) = 6t - ${variant === 1 ? 12 : 18}$. Tại $t = ${variant === 1 ? 4 : 5}$, ta có $a(${variant === 1 ? 4 : 5}) = 6\\cdot ${variant === 1 ? 4 : 5} - ${variant === 1 ? 12 : 18} = 12\\text{ m/s}^2$.`,
      'Gia tốc tức thời là đạo hàm của vận tốc (đạo hàm cấp hai của quãng đường): $a(t) = v\'(t) = s\'\'(t)$.'
    ),
    makeMC(
      p,
      4,
      'Bài 5. Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn',
      `Tổng chi phí để sản xuất $x$ sản phẩm mỗi ngày của một xí nghiệp là $C(x) = x^2 + ${variant === 1 ? 40 : 60}x + ${variant === 1 ? 500 : 800}$ (nghìn đồng). Chi phí biên tại mức sản lượng $x = ${variant === 1 ? 30 : 50}$ sản phẩm bằng:`,
      [
        `$${variant === 1 ? 100 : 160}$ nghìn đồng`,
        `$${variant === 1 ? 70 : 110}$ nghìn đồng`,
        `$${variant === 1 ? 2600 : 6300}$ nghìn đồng`,
        `$${variant === 1 ? 40 : 60}$ nghìn đồng`,
      ],
      'A',
      `Hàm chi phí biên là $C'(x) = 2x + ${variant === 1 ? 40 : 60}$. Tại $x = ${variant === 1 ? 30 : 50}$, ta có $C'(${variant === 1 ? 30 : 50}) = 2\\cdot ${variant === 1 ? 30 : 50} + ${variant === 1 ? 40 : 60} = ${variant === 1 ? 100 : 160}$ (nghìn đồng).`,
      'Trong kinh tế học, chi phí biên tại mức sản lượng $x$ là đạo hàm $C\'(x)$ của hàm tổng chi phí.'
    ),
    makeMC(
      p,
      5,
      'Bài 5. Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn',
      `Một hộ kinh doanh bán $x$ chiếc áo mỗi tuần với giá bán mỗi chiếc là $p(x) = ${variant === 1 ? 300 : 400} - 2x$ (nghìn đồng). Hàm doanh thu $R(x)$ đạt giá trị lớn nhất khi số áo bán ra mỗi tuần là:`,
      [
        `$${variant === 1 ? 75 : 100}$ chiếc`,
        `$${variant === 1 ? 150 : 200}$ chiếc`,
        `$${variant === 1 ? 50 : 80}$ chiếc`,
        `$${variant === 1 ? 60 : 90}$ chiếc`,
      ],
      'A',
      `Hàm doanh thu là $R(x) = x \\cdot p(x) = ${variant === 1 ? 300 : 400}x - 2x^2$. Ta có $R'(x) = ${variant === 1 ? 300 : 400} - 4x = 0 \\Leftrightarrow x = ${variant === 1 ? 75 : 100}$ (chiếc).`,
      'Doanh thu bằng số lượng nhân đơn giá: $R(x) = x \\cdot p(x)$.'
    ),
    makeMC(
      p,
      6,
      'Bài 5. Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn',
      `Bác An muốn rào một mảnh vườn hình chữ nhật dọc theo bờ tường có sẵn (bờ tường làm một cạnh của mảnh vườn, chỉ cần rào $3$ cạnh còn lại) bằng $${variant === 1 ? 80 : 120}\\text{ m}$ lưới thép. Diện tích lớn nhất của mảnh vườn mà bác An có thể rào được là:`,
      [
        `$${variant === 1 ? 800 : 1800}\\text{ m}^2$`,
        `$${variant === 1 ? 400 : 900}\\text{ m}^2$`,
        `$${variant === 1 ? 1600 : 3600}\\text{ m}^2$`,
        `$${variant === 1 ? 600 : 1200}\\text{ m}^2$`,
      ],
      'A',
      `Gọi chiều rộng vuông góc với tường là $x\\text{ (m)}$ thì chiều dài song song với tường là $${variant === 1 ? 80 : 120} - 2x\\text{ (m)}$. Diện tích $S(x) = x(${variant === 1 ? 80 : 120} - 2x) = -2x^2 + ${variant === 1 ? 80 : 120}x$. Đạo hàm $S'(x) = -4x + ${variant === 1 ? 80 : 120} = 0 \\Leftrightarrow x = ${variant === 1 ? 20 : 30}$. Khi đó $\\max S = ${variant === 1 ? 800 : 1800}\\text{ m}^2$.`,
      'Khi rào 3 cạnh hình chữ nhật bằng chiều dài $L$, diện tích lớn nhất khi chiều dài gấp đôi chiều rộng ($2x = L - 2x \\Leftrightarrow x = L/4$).'
    ),
    makeMC(
      p,
      7,
      'Bài 5. Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn',
      `Điện lượng $Q$ (đơn vị: Coulomb) truyền qua tiết diện thẳng của một dây dẫn trong khoảng thời gian $t$ giây được cho bởi $Q(t) = 2t^2 + ${variant === 1 ? 5 : 8}t + 1$. Cường độ dòng điện tức thời $I(t)$ tại thời điểm $t = ${variant === 1 ? 3 : 4}$ giây là:`,
      [
        `$${variant === 1 ? 17 : 24}\\text{ A}$`,
        `$${variant === 1 ? 34 : 65}\\text{ A}$`,
        `$${variant === 1 ? 12 : 16}\\text{ A}$`,
        `$${variant === 1 ? 11 : 20}\\text{ A}$`,
      ],
      'A',
      `Cường độ dòng điện tức thời là $I(t) = Q'(t) = 4t + ${variant === 1 ? 5 : 8}$. Tại $t = ${variant === 1 ? 3 : 4}$, ta có $I(${variant === 1 ? 3 : 4}) = 4\\cdot ${variant === 1 ? 3 : 4} + ${variant === 1 ? 5 : 8} = ${variant === 1 ? 17 : 24}\\text{ (A)}$.`,
      'Cường độ dòng điện tức thời là tốc độ biến thiên của điện lượng theo thời gian: $I(t) = Q\'(t)$.'
    ),
    makeMC(
      p,
      8,
      'Bài 5. Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn',
      `Số lượng vi khuẩn trong một bình nuôi cấy sau $t$ giờ được tính theo công thức $N(t) = ${variant === 1 ? 1000 : 2000} + ${variant === 1 ? 60 : 90}t^2 - t^3$ ($0 \\le t \\le ${variant === 1 ? 50 : 70}$). Tốc độ tăng trưởng tức thời của quần thể vi khuẩn đạt cực đại tại thời điểm:`,
      [
        `$t = ${variant === 1 ? 20 : 30}$ giờ`,
        `$t = ${variant === 1 ? 40 : 60}$ giờ`,
        `$t = ${variant === 1 ? 10 : 15}$ giờ`,
        `$t = ${variant === 1 ? 30 : 45}$ giờ`,
      ],
      'A',
      `Tốc độ tăng trưởng tức thời là $v(t) = N'(t) = ${variant === 1 ? 120 : 180}t - 3t^2$. Xét $v'(t) = ${variant === 1 ? 120 : 180} - 6t = 0 \\Leftrightarrow t = ${variant === 1 ? 20 : 30}$ (giờ).`,
      'Chú ý phân biệt: "Số lượng vi khuẩn cực đại" ($N\'(t) = 0$) và "Tốc độ tăng trưởng cực đại" ($N\'\'(t) = 0$).'
    ),
    makeMC(
      p,
      9,
      'Bài 5. Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn',
      `Một trang sách hình chữ nhật cần có diện tích phần in chữ là $${variant === 1 ? 150 : 216}\\text{ cm}^2$. Lề trên và lề dưới đều rộng $3\\text{ cm}$, lề trái và lề phải đều rộng $2\\text{ cm}$. Để diện tích cả trang sách là nhỏ nhất thì chiều rộng và chiều cao của phần in chữ lần lượt là:`,
      [
        `$${variant === 1 ? 10 : 12}\\text{ cm}$ và $${variant === 1 ? 15 : 18}\\text{ cm}$`,
        `$${variant === 1 ? 15 : 18}\\text{ cm}$ và $${variant === 1 ? 10 : 12}\\text{ cm}$`,
        `$${variant === 1 ? 12 : 16}\\text{ cm}$ và $${variant === 1 ? 12.5 : 13.5}\\text{ cm}$`,
        `$${variant === 1 ? 6 : 9}\\text{ cm}$ và $${variant === 1 ? 25 : 24}\\text{ cm}$`,
      ],
      'A',
      `Gọi chiều rộng phần in chữ là $x > 0$ thì chiều cao phần in chữ là $\\frac{${variant === 1 ? 150 : 216}}{x}$. Kích thước trang sách là $(x + 4)$ và $(\\frac{${variant === 1 ? 150 : 216}}{x} + 6)$. Diện tích trang sách $S(x) = (x+4)(\\frac{${variant === 1 ? 150 : 216}}{x}+6) = 6x + \\frac{${variant === 1 ? 600 : 864}}{x} + ${variant === 1 ? 174 : 240}$ đạt GTNN khi $6x = \\frac{${variant === 1 ? 600 : 864}}{x} \\Leftrightarrow x = ${variant === 1 ? 10 : 12}\\text{ cm}$, chiều cao là $${variant === 1 ? 15 : 18}\\text{ cm}$.`,
      'Tỉ lệ vàng của bài toán trang sách: tỉ số hai cạnh phần in chữ bằng tỉ số độ rộng hai lề tương ứng.'
    ),
    makeMC(
      p,
      10,
      'Bài 5. Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn',
      `Một cửa hàng nhập máy tính xách tay với giá $${variant === 1 ? 12 : 14}$ triệu đồng/chiếc. Nếu bán với giá $x$ triệu đồng/chiếc ($x > ${variant === 1 ? 12 : 14}$) thì mỗi tháng cửa hàng bán được $${variant === 1 ? 60 : 70} - 2x$ chiếc. Để lợi nhuận hàng tháng lớn nhất, cửa hàng nên bán mỗi chiếc với giá:`,
      [
        `$${variant === 1 ? 21 : 24.5}$ triệu đồng`,
        `$${variant === 1 ? 20 : 24}$ triệu đồng`,
        `$${variant === 1 ? 18 : 22}$ triệu đồng`,
        `$${variant === 1 ? 25 : 28}$ triệu đồng`,
      ],
      'A',
      `Hàm lợi nhuận là $L(x) = (x - ${variant === 1 ? 12 : 14})(${variant === 1 ? 60 : 70} - 2x) = -2(x - ${variant === 1 ? 12 : 14})(x - ${variant === 1 ? 30 : 35})$. Đỉnh parabol đạt tại trung điểm hai nghiệm: $x = \\frac{${variant === 1 ? 12 + 30 : 14 + 35}}{2} = ${variant === 1 ? 21 : 24.5}$ (triệu đồng).`,
      'Hàm bậc hai $L(x) = -a(x - x_1)(x - x_2)$ với $a > 0$ đạt GTLN tại trung bình cộng hai nghiệm $x = (x_1 + x_2)/2$.'
    ),
    makeMC(
      p,
      11,
      'Bài 5. Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn',
      `Cần làm một thùng chứa hình trụ có nắp với thể tích không đổi bằng $${variant === 1 ? 16 : 54}\\pi\\text{ dm}^3$. Để diện tích toàn phần của thùng (tốn ít vật liệu nhất) là nhỏ nhất thì bán kính đáy $R$ của hình trụ phải bằng:`,
      [
        `$${variant === 1 ? 2 : 3}\\text{ dm}$`,
        `$${variant === 1 ? 4 : 6}\\text{ dm}$`,
        `$${variant === 1 ? 1 : 1.5}\\text{ dm}$`,
        `$${variant === 1 ? 3 : 4}\\text{ dm}$`,
      ],
      'A',
      `Từ $V = \\pi R^2 h = ${variant === 1 ? 16 : 54}\\pi \\Rightarrow h = \\frac{${variant === 1 ? 16 : 54}}{R^2}$. Diện tích toàn phần $S_{tp} = 2\\pi R^2 + 2\\pi R h = 2\\pi\\left(R^2 + \\frac{${variant === 1 ? 16 : 54}}{R}\\right)$. Ta có $S'_{tp}(R) = 2\\pi\\left(2R - \\frac{${variant === 1 ? 16 : 54}}{R^2}\\right) = 0 \\Leftrightarrow R^3 = ${variant === 1 ? 8 : 27} \\Leftrightarrow R = ${variant === 1 ? 2 : 3}\\text{ dm}$.`,
      'Hình trụ có nắp có diện tích toàn phần nhỏ nhất (khi thể tích cố định) khi chiều cao bằng đường kính đáy ($h = 2R$).',
      'sp_cylinder_rh'
    ),
    makeMC(
      p,
      12,
      'Bài 5. Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn',
      `Một ngọn hải đăng ở vị trí $A$ cách bờ biển thẳng một khoảng $AB = ${variant === 1 ? 4 : 6}\\text{ km}$. Kho hàng ở vị trí $C$ trên bờ biển cách $B$ một khoảng $BC = ${variant === 1 ? 9 : 12}\\text{ km}$. Người canh hải đăng chèo thuyền từ $A$ đến một điểm $M$ trên đoạn $BC$ với vận tốc $3\\text{ km/h}$ rồi đi bộ từ $M$ đến $C$ với vận tốc $5\\text{ km/h}$. Khoảng cách $BM$ để tổng thời gian đi từ $A$ đến $C$ ngắn nhất là:`,
      [
        `$${variant === 1 ? 3 : 4.5}\\text{ km}$`,
        `$${variant === 1 ? 4 : 6}\\text{ km}$`,
        `$${variant === 1 ? 5 : 8}\\text{ km}$`,
        `$${variant === 1 ? 2 : 3}\\text{ km}$`,
      ],
      'A',
      `Đặt $BM = x \\in [0; ${variant === 1 ? 9 : 12}]$. Thời gian di chuyển là $T(x) = \\frac{\\sqrt{x^2 + ${variant === 1 ? 16 : 36}}}{3} + \\frac{${variant === 1 ? 9 : 12} - x}{5}$. Giải $T'(x) = \\frac{x}{3\\sqrt{x^2 + ${variant === 1 ? 16 : 36}}} - \\frac{1}{5} = 0 \\Leftrightarrow 5x = 3\\sqrt{x^2 + ${variant === 1 ? 16 : 36}} \\Leftrightarrow 16x^2 = 9\\cdot ${variant === 1 ? 16 : 36} \\Leftrightarrow x = ${variant === 1 ? 3 : 4.5}\\text{ km}$.`,
      'Thiết lập hàm tổng thời gian $T(x) = \\frac{s_1}{v_1} + \\frac{s_2}{v_2}$ rồi giải phương trình $T\'(x) = 0$.',
      'lighthouse_coast'
    ),
  ];

  const part2 = [
    makeTF(
      p,
      1,
      'Bài 5. Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn',
      `Một quả bóng được ném thẳng đứng lên cao từ độ cao ban đầu $2\\text{ m}$ với phương trình chuyển động $h(t) = -5t^2 + ${variant === 1 ? 20 : 30}t + 2$, trong đó $t \\ge 0$ tính bằng giây và $h$ tính bằng mét. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Vận tốc tức thời của quả bóng tại thời điểm $t$ giây là $v(t) = -10t + ${variant === 1 ? 20 : 30}\\text{ (m/s)}$.`,
          isCorrect: true,
          exp: `Đạo hàm của độ cao theo thời gian là $v(t) = h'(t) = -10t + ${variant === 1 ? 20 : 30}$.`,
        },
        {
          text: `Quả bóng đạt độ cao lớn nhất tại thời điểm $t = ${variant === 1 ? 2 : 3}$ giây.`,
          isCorrect: true,
          exp: `Tại đỉnh cao nhất thì $v(t) = 0 \\Leftrightarrow -10t + ${variant === 1 ? 20 : 30} = 0 \\Leftrightarrow t = ${variant === 1 ? 2 : 3}$ giây.`,
        },
        {
          text: `Độ cao lớn nhất mà quả bóng đạt được so với mặt đất là $${variant === 1 ? 22 : 47}\\text{ m}$.`,
          isCorrect: true,
          exp: `Thay $t = ${variant === 1 ? 2 : 3}$ vào $h(t)$: $h(${variant === 1 ? 2 : 3}) = -5(${variant === 1 ? 4 : 9}) + ${variant === 1 ? 40 : 90} + 2 = ${variant === 1 ? 22 : 47}\\text{ m}$.`,
        },
        {
          text: `Gia tốc tức thời của quả bóng thay đổi theo thời gian $t$.`,
          isCorrect: false,
          exp: `Gia tốc $a(t) = v'(t) = -10\\text{ m/s}^2$ là hằng số không đổi theo thời gian.`,
        },
      ],
      'Trong chuyển động ném thẳng đứng, tại điểm cao nhất vận tốc tức thời bằng $0$.'
    ),
    makeTF(
      p,
      2,
      'Bài 5. Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn',
      `Một doanh nghiệp sản xuất và bán $x$ tấn sản phẩm mỗi tháng ($1 \\le x \\le ${variant === 1 ? 25 : 35}$). Tổng doanh thu là $R(x) = -x^3 + ${variant === 1 ? 24 : 33}x^2 + ${variant === 1 ? 120 : 180}x$ (triệu đồng) và tổng chi phí là $C(x) = ${variant === 1 ? 9 : 12}x^2 + ${variant === 1 ? 120 : 180}x + ${variant === 1 ? 50 : 100}$ (triệu đồng). Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Hàm lợi nhuận của doanh nghiệp là $P(x) = -x^3 + ${variant === 1 ? 15 : 21}x^2 - ${variant === 1 ? 50 : 100}$ (triệu đồng).`,
          isCorrect: true,
          exp: `Ta có $P(x) = R(x) - C(x) = -x^3 + ${variant === 1 ? 15 : 21}x^2 - ${variant === 1 ? 50 : 100}$.`,
        },
        {
          text: `Đạo hàm của hàm lợi nhuận là $P'(x) = -3x^2 + ${variant === 1 ? 30 : 42}x$.`,
          isCorrect: true,
          exp: `Tính đạo hàm trực tiếp: $P'(x) = -3x^2 + ${variant === 1 ? 30 : 42}x$.`,
        },
        {
          text: `Doanh nghiệp đạt lợi nhuận lớn nhất khi sản xuất và bán được $x = ${variant === 1 ? 10 : 14}$ tấn sản phẩm mỗi tháng.`,
          isCorrect: true,
          exp: `Với $x \\ge 1$, $P'(x) = 0 \\Leftrightarrow x = ${variant === 1 ? 10 : 14}$. Qua điểm này $P'(x)$ đổi dấu từ dương sang âm nên $P(x)$ đạt GTLN.`,
        },
        {
          text: `Lợi nhuận lớn nhất hàng tháng của doanh nghiệp bằng $${variant === 1 ? 500 : 1372}$ triệu đồng.`,
          isCorrect: false,
          exp: `Ta có $P(${variant === 1 ? 10 : 14}) = -(${variant === 1 ? 1000 : 2744}) + ${variant === 1 ? 1500 : 4116} - ${variant === 1 ? 50 : 100} = ${variant === 1 ? 450 : 1272}$ triệu đồng (chưa trừ chi phí cố định nếu tính ra $${variant === 1 ? 500 : 1372}$).`,
        },
      ],
      'Lợi nhuận bằng Doanh thu trừ Chi phí: $P(x) = R(x) - C(x)$, đạt cực đại khi doanh thu biên bằng chi phí biên ($R\'(x) = C\'(x)$).'
    ),
    makeTF(
      p,
      3,
      'Bài 5. Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn',
      `Một hồ chứa nước hình hộp chữ nhật không có nắp có đáy là hình vuông cạnh $x\\text{ (m)}$, chiều cao $h\\text{ (m)}$ và có thể tích chứa nước cố định bằng $${variant === 1 ? 32 : 108}\\text{ m}^3$. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Chiều cao $h$ của hồ nước được biểu diễn theo $x$ là $h = \\frac{${variant === 1 ? 32 : 108}}{x^2}\\text{ (m)}$ với $x > 0$.`,
          isCorrect: true,
          exp: `Vì thể tích hồ là $V = x^2 h = ${variant === 1 ? 32 : 108}$ nên $h = \\frac{${variant === 1 ? 32 : 108}}{x^2}$.`,
        },
        {
          text: `Tổng diện tích mặt đáy và bốn mặt xung quanh của hồ là $S(x) = x^2 + \\frac{${variant === 1 ? 128 : 432}}{x}\\text{ (m}^2\\text{)}$.`,
          isCorrect: true,
          exp: `Diện tích đáy là $x^2$, diện tích $4$ mặt bên là $4xh = 4x \\cdot \\frac{${variant === 1 ? 32 : 108}}{x^2} = \\frac{${variant === 1 ? 128 : 432}}{x}$.`,
        },
        {
          text: `Diện tích $S(x)$ đạt giá trị nhỏ nhất khi cạnh đáy $x = ${variant === 1 ? 4 : 6}\\text{ m}$.`,
          isCorrect: true,
          exp: `Ta có $S'(x) = 2x - \\frac{${variant === 1 ? 128 : 432}}{x^2} = 0 \\Leftrightarrow x^3 = ${variant === 1 ? 64 : 216} \\Leftrightarrow x = ${variant === 1 ? 4 : 6}\\text{ m}$.`,
        },
        {
          text: `Khi diện tích $S(x)$ nhỏ nhất thì chiều cao $h$ bằng đúng cạnh đáy $x$.`,
          isCorrect: false,
          exp: `Khi $x = ${variant === 1 ? 4 : 6}\\text{ m}$ thì $h = \\frac{${variant === 1 ? 32 : 108}}{${variant === 1 ? 16 : 36}} = ${variant === 1 ? 2 : 3}\\text{ m} = \\frac{x}{2}$ (bằng một nửa cạnh đáy vì hồ không có nắp).`,
        },
      ],
      'Bể hình hộp chữ nhật có đáy hình vuông KHÔNG NẮP tốn ít vật liệu nhất khi chiều cao bằng một nửa cạnh đáy ($h = x/2$).',
      'sp_open_box_xh'
    ),
  ];

  const part3 = [
    makeSA(
      p,
      1,
      'Bài 5. Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn',
      `Một vật chuyển động theo quy luật $s(t) = t^3 - 3t^2 + ${variant === 1 ? 24 : 36}t$ ($t$ tính bằng giây, $s$ tính bằng mét). Tìm vận tốc nhỏ nhất của vật (đơn vị: m/s) với $t \\ge 0$.`,
      [variant === 1 ? '21' : '33'],
      `Vận tốc tức thời là $v(t) = s'(t) = 3t^2 - 6t + ${variant === 1 ? 24 : 36} = 3(t - 1)^2 + ${variant === 1 ? 21 : 33} \\ge ${variant === 1 ? 21 : 33}$. Vậy vận tốc nhỏ nhất là $${variant === 1 ? 21 : 33}\\text{ m/s}$ tại $t = 1$ giây.`,
      'Lập hàm vận tốc $v(t) = s\'(t)$ rồi tìm GTNN của hàm bậc hai $v(t)$.'
    ),
    makeSA(
      p,
      2,
      'Bài 5. Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn',
      `Một xưởng thủ công sản xuất $x$ chiếc túi xách mỗi ngày với hàm lợi nhuận $L(x) = -x^3 + ${variant === 1 ? 12 : 15}x^2 + ${variant === 1 ? 60 : 75}x - 100$ (nghìn đồng). Hỏi xưởng cần sản xuất bao nhiêu chiếc túi mỗi ngày để lợi nhuận thu được là lớn nhất?`,
      [variant === 1 ? '10' : '12.1', variant === 1 ? '10' : '12'],
      `Ta có $L'(x) = -3x^2 + ${variant === 1 ? 24 : 30}x + ${variant === 1 ? 60 : 75} = 0$.`,
      'Giải phương trình $L\'(x) = 0$ với $x > 0$.'
    ),
    makeSA(
      p,
      3,
      'Bài 5. Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn',
      `Một sợi dây kim loại dài $${variant === 1 ? 36 : 48}\\text{ cm}$ được uốn thành một khung hình chữ nhật. Diện tích lớn nhất của khung hình chữ nhật đó bằng bao nhiêu $\\text{cm}^2$?`,
      [variant === 1 ? '81' : '144'],
      `Nửa chu vi hình chữ nhật là $${variant === 1 ? 18 : 24}\\text{ cm}$. Gọi một cạnh là $x$ thì cạnh kia là $${variant === 1 ? 18 : 24} - x$. Diện tích $S(x) = x(${variant === 1 ? 18 : 24} - x) \\le (${variant === 1 ? 9 : 12})^2 = ${variant === 1 ? 81 : 144}\\text{ cm}^2$.`,
      'Với chu vi cố định $2p$, hình chữ nhật có diện tích lớn nhất là hình vuông cạnh $p/2$.'
    ),
    makeSA(
      p,
      4,
      'Bài 5. Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn',
      `Một khách sạn có $${variant === 1 ? 60 : 80}$ phòng cho thuê. Nếu giá thuê mỗi phòng là $${variant === 1 ? 400 : 500}$ nghìn đồng/ngày thì tất cả các phòng đều có khách thuê. Cứ mỗi lần tăng giá phòng thêm $${variant === 1 ? 20 : 25}$ nghìn đồng/ngày thì có thêm $2$ phòng bị bỏ trống. Hỏi khách sạn nên đặt giá thuê mỗi phòng là bao nhiêu nghìn đồng/ngày để doanh thu một ngày là lớn nhất?`,
      [variant === 1 ? '500' : '625'],
      `Gọi $x$ là số lần tăng giá ($x \\ge 0$). Giá mới là $${variant === 1 ? 400 : 500} + ${variant === 1 ? 20 : 25}x$, số phòng có khách là $${variant === 1 ? 60 : 80} - 2x$. Doanh thu $R(x) = (${variant === 1 ? 400 : 500} + ${variant === 1 ? 20 : 25}x)(${variant === 1 ? 60 : 80} - 2x)$ đạt cực đại tại $x = ${variant === 1 ? 5 : 5}$. Khi đó giá thuê tối ưu là $${variant === 1 ? 400 + 20 * 5 : 500 + 25 * 5} = ${variant === 1 ? 500 : 625}$ nghìn đồng/ngày.`,
      'Đặt số lần tăng giá là $x$, biểu diễn đơn giá và số lượng phòng theo $x$ rồi tìm đỉnh của parabol doanh thu.'
    ),
  ];

  // Đảm bảo câu 2 phần III của cả 2 đề đều có nghiệm nguyên đẹp:
  part3[1] = makeSA(
    p,
    2,
    'Bài 5. Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn',
    `Một xưởng thủ công sản xuất $x$ chiếc túi xách mỗi ngày với hàm lợi nhuận $L(x) = -x^3 + ${variant === 1 ? 9 : 12}x^2 + ${variant === 1 ? 48 : 60}x - 100$ (nghìn đồng). Hỏi xưởng cần sản xuất bao nhiêu chiếc túi mỗi ngày để lợi nhuận thu được là lớn nhất?`,
    [variant === 1 ? '8' : '10'],
    `Ta có $L'(x) = -3x^2 + ${variant === 1 ? 18 : 24}x + ${variant === 1 ? 48 : 60} = -3(x + 2)(x - ${variant === 1 ? 8 : 10}) = 0 \\Leftrightarrow x = ${variant === 1 ? 8 : 10}$ (do $x > 0$). Vậy xưởng cần sản xuất $${variant === 1 ? 8 : 10}$ chiếc túi mỗi ngày.`,
    'Giải phương trình $L\'(x) = 0$ trên miền $x > 0$.'
  );

  const part4 = [
    makeSO(
      p,
      1,
      'Bài 5. Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn',
      `Một ô tô đang chuyển động thì hãm phanh, đi thêm được quãng đường $s(t) = ${v0}t - 3t^2\\text{ (m)}$ trong $t$ giây. Tính quãng đường ô tô đi được từ lúc hãm phanh đến khi dừng hẳn.`,
      `Tìm thời điểm dừng và quãng đường tối đa bằng đạo hàm.`,
      [
        {
          role: 'Tìm biểu thức vận tốc tức thời theo thời gian',
          content: `Vận tốc tức thời của ô tô tại thời điểm $t$ là $v(t) = s'(t) = ${v0} - 6t\\text{ (m/s)}$.`,
        },
        {
          role: 'Xác định thời điểm ô tô dừng hẳn',
          content: `Khi ô tô dừng hẳn thì $v(t) = 0 \\Leftrightarrow ${v0} - 6t = 0 \\Leftrightarrow t = ${tStop}$ (giây).`,
        },
        {
          role: 'Tính quãng đường đi được đến khi dừng hẳn',
          content: `Thay $t = ${tStop}$ vào công thức quãng đường: $s(${tStop}) = ${v0}\\cdot ${tStop} - 3\\cdot ${tStop}^2 = ${sMax}\\text{ (m)}$.`,
        },
      ],
      'Liên hệ vật lý cơ bản: $v(t) = s\'(t)$, dừng hẳn ứng với $v(t) = 0$.',
      'Ứng dụng đạo hàm giải bài toán chuyển động chậm dần đều.',
      0.7
    ),
    makeSO(
      p,
      2,
      'Bài 5. Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn',
      `Cần thiết kế một bể cá không nắp hình hộp chữ nhật có đáy là hình vuông cạnh $x\\text{ (dm)}$, chiều cao $h\\text{ (dm)}$ và thể tích bằng $${variant === 1 ? 32 : 108}\\text{ dm}^3$. Tìm $x$ và $h$ để diện tích kính cần dùng là nhỏ nhất.`,
      `Chứng minh diện tích kính nhỏ nhất khi $x = ${variant === 1 ? 4 : 6}\\text{ dm}$ và $h = ${variant === 1 ? 2 : 3}\\text{ dm}$.`,
      [
        {
          role: 'Biểu diễn chiều cao và tổng diện tích kính theo cạnh đáy x',
          content: `Từ $V = x^2 h = ${variant === 1 ? 32 : 108} \\Rightarrow h = \\frac{${variant === 1 ? 32 : 108}}{x^2}$. Diện tích kính cần dùng là $S(x) = x^2 + 4xh = x^2 + \\frac{${variant === 1 ? 128 : 432}}{x}$ với $x > 0$.`,
        },
        {
          role: 'Tính đạo hàm và tìm điểm cực trị',
          content: `Ta có $S'(x) = 2x - \\frac{${variant === 1 ? 128 : 432}}{x^2} = 0 \\Leftrightarrow 2x^3 = ${variant === 1 ? 128 : 432} \\Leftrightarrow x = ${variant === 1 ? 4 : 6}\\text{ (dm)}$.`,
        },
        {
          role: 'Kết luận kích thước tối ưu và diện tích kính nhỏ nhất',
          content: `Với $x = ${variant === 1 ? 4 : 6}\\text{ dm}$, ta có $h = ${variant === 1 ? 2 : 3}\\text{ dm}$ và diện tích kính nhỏ nhất là $\\min S = ${variant === 1 ? 48 : 108}\\text{ dm}^2$.`,
        },
      ],
      'Sử dụng điều kiện thể tích cố định để đưa hàm diện tích hai biến $(x, h)$ về hàm một biến $S(x)$.',
      'Phương pháp giải bài toán tối ưu hình học không gian bằng đạo hàm.',
      0.65,
      'sp_open_box_xh'
    ),
    makeSO(
      p,
      3,
      'Bài 5. Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn',
      `Một công ty bán sản phẩm với hàm cầu $p(x) = ${variant === 1 ? 200 : 300} - x$ (nghìn đồng/sản phẩm) và hàm tổng chi phí $C(x) = x^2 + ${variant === 1 ? 40 : 60}x + 500$ (nghìn đồng), trong đó $x$ là số sản phẩm. Tìm số lượng sản phẩm $x$ để lợi nhuận công ty lớn nhất.`,
      `Thiết lập hàm lợi nhuận $P(x)$ và tìm điểm đạt giá trị lớn nhất.`,
      [
        {
          role: 'Lập hàm doanh thu R(x) và hàm lợi nhuận P(x)',
          content: `Doanh thu $R(x) = x \\cdot p(x) = ${variant === 1 ? 200 : 300}x - x^2$. Lợi nhuận $P(x) = R(x) - C(x) = -2x^2 + ${variant === 1 ? 160 : 240}x - 500$.`,
        },
        {
          role: 'Tính đạo hàm của hàm lợi nhuận và giải phương trình P\'(x) = 0',
          content: `Ta có $P'(x) = -4x + ${variant === 1 ? 160 : 240} = 0 \\Leftrightarrow x = ${variant === 1 ? 40 : 60}$ (sản phẩm).`,
        },
        {
          role: 'Kết luận mức sản lượng tối ưu',
          content: `Vì $P'(x)$ đổi dấu từ dương sang âm qua $x = ${variant === 1 ? 40 : 60}$ nên lợi nhuận đạt giá trị lớn nhất khi sản xuất và bán $x = ${variant === 1 ? 40 : 60}$ sản phẩm.`,
        },
      ],
      'Nhớ nhân đơn giá $p(x)$ với sản lượng $x$ để được hàm doanh thu $R(x) = x \\cdot p(x)$ trước khi trừ chi phí $C(x)$.',
      'Ứng dụng đạo hàm trong bài toán tối ưu kinh tế.',
      0.65
    ),
  ];

  return makeLessonExam(
    `bai-05-de-${variant}`,
    `Bài 5 - Đề ôn số ${variant}`,
    `Bài 5. Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn (SGK Toán 12 Tập 1)`,
    `Đề ôn số ${variant} - Bài 5: Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn (22 câu hỏi chuẩn cấu trúc 4 phần).`,
    part1,
    part2,
    part3,
    part4
  );
}

// BÀI TẬP CUỐI CHƯƠNG I (Đề ôn số 1 & Đề ôn số 2)
function buildOnTapChuong1Exam(variant: 1 | 2): ExamSet {
  const p = variant === 1 ? 'c1-d1' : 'c1-d2';
  const k = variant === 1 ? 1 : 2;
  // y = x^3 - 3*k^2*x + 2 => cực trị tại ±k
  const c1 = 3 * k * k; // v1: 3, v2: 12
  const yMaxC = 2 * k ** 3 + 2; // v1: 4, v2: 18
  const yMinC = -2 * k ** 3 + 2; // v1: 0, v2: -14

  const part1 = [
    makeMC(
      p,
      1,
      'Bài tập cuối chương I',
      `Hàm số $y = x^3 - ${c1}x + 2$ nghịch biến trên khoảng nào dưới đây?`,
      [
        `$(-${k}; ${k})$`,
        `$(-\\infty; -${k})$`,
        `$(${k}; +\\infty)$`,
        `$(0; ${2 * k})$`,
      ],
      'A',
      `Ta có $y' = 3x^2 - ${c1} = 3(x^2 - ${k * k}) < 0 \\Leftrightarrow -${k} < x < ${k}$.`,
      'Tổng hợp kiến thức xét dấu đạo hàm hàm bậc ba.'
    ),
    makeMC(
      p,
      2,
      'Bài tập cuối chương I',
      `Hiệu giữa giá trị cực đại và giá trị cực tiểu của hàm số $y = x^3 - ${c1}x + 2$ bằng:`,
      [
        `$${yMaxC - yMinC}$`,
        `$${yMaxC}$`,
        `$${2 * k}$`,
        `$${yMaxC + yMinC}$`,
      ],
      'A',
      `Ta có $y_{CĐ} = y(-${k}) = ${yMaxC}$ và $y_{CT} = y(${k}) = ${yMinC}$. Suy ra $y_{CĐ} - y_{CT} = ${yMaxC - yMinC}$.`,
      'Tính giá trị hàm số tại hai nghiệm của phương trình $y\' = 0$.'
    ),
    makeMC(
      p,
      3,
      'Bài tập cuối chương I',
      `Giá trị lớn nhất của hàm số $y = x^4 - ${variant === 1 ? 2 : 8}x^2 + ${variant === 1 ? 3 : 5}$ trên đoạn $[0; ${variant === 1 ? 2 : 3}]$ bằng:`,
      [
        `$${variant === 1 ? 11 : 14}$`,
        `$${variant === 1 ? 3 : 5}$`,
        `$${variant === 1 ? 2 : -11}$`,
        `$${variant === 1 ? 6 : 10}$`,
      ],
      'A',
      `Trên đoạn $[0; ${variant === 1 ? 2 : 3}]$, $y' = 4x^3 - ${variant === 1 ? 4 : 16}x = 0 \\Leftrightarrow x = 0$ hoặc $x = ${variant === 1 ? 1 : 2}$. Tính $y(0) = ${variant === 1 ? 3 : 5}$, $y(${variant === 1 ? 1 : 2}) = ${variant === 1 ? 2 : -11}$, $y(${variant === 1 ? 2 : 3}) = ${variant === 1 ? 11 : 14}$. Vậy GTLN bằng $${variant === 1 ? 11 : 14}$.`,
      'So sánh giá trị tại các điểm dừng trong đoạn và tại hai đầu mút.'
    ),
    makeMC(
      p,
      4,
      'Bài tập cuối chương I',
      `Đồ thị hàm số $y = \\frac{${variant === 1 ? 2 : 5}x - 3}{x + ${variant === 1 ? 4 : 1}}$ có tiệm cận ngang và tiệm cận đứng lần lượt là:`,
      [
        `$y = ${variant === 1 ? 2 : 5}$ và $x = -${variant === 1 ? 4 : 1}$`,
        `$x = ${variant === 1 ? 2 : 5}$ và $y = -${variant === 1 ? 4 : 1}$`,
        `$y = ${variant === 1 ? 2 : 5}$ và $x = ${variant === 1 ? 4 : 1}$`,
        `$y = -3$ và $x = -${variant === 1 ? 4 : 1}$`,
      ],
      'A',
      `Ta có $\\lim_{x \\to \\pm\\infty} y = ${variant === 1 ? 2 : 5} \\Rightarrow$ TCN $y = ${variant === 1 ? 2 : 5}$ và nghiệm mẫu là $x = -${variant === 1 ? 4 : 1} \\Rightarrow$ TCĐ $x = -${variant === 1 ? 4 : 1}$.`,
      'Đọc đúng thứ tự đề hỏi: tiệm cận ngang trước, tiệm cận đứng sau.'
    ),
    makeMC(
      p,
      5,
      'Bài tập cuối chương I',
      `Đường tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 + ${variant === 1 ? 3 : 5}x + 1}{x + 1}$ đi qua điểm nào dưới đây?`,
      [
        `$M(0; ${variant === 1 ? 2 : 4})$`,
        `$N(0; ${variant === 1 ? 3 : 5})$`,
        `$P(1; 1)$`,
        `$Q(-1; 0)$`,
      ],
      'A',
      `Chia tử cho mẫu: $y = x + ${variant === 1 ? 2 : 4} - \\frac{${variant === 1 ? 1 : 3}}{x + 1}$. Tiệm cận xiên là $y = x + ${variant === 1 ? 2 : 4}$ đi qua điểm $M(0; ${variant === 1 ? 2 : 4})$.`,
      'Tìm phương trình tiệm cận xiên $y = ax + b$ rồi thay tọa độ các điểm vào kiểm tra.'
    ),
    makeMC(
      p,
      6,
      'Bài tập cuối chương I',
      `Tâm đối xứng của đồ thị hàm số $y = -x^3 + ${variant === 1 ? 6 : 3}x^2 - 1$ là điểm:`,
      [
        `$I(${variant === 1 ? 2 : 1}; ${variant === 1 ? 7 : 1})$`,
        `$I(${variant === 1 ? 2 : 1}; -1)$`,
        `$I(0; -1)$`,
        `$I(-${variant === 1 ? 2 : 1}; ${variant === 1 ? 7 : 1})$`,
      ],
      'A',
      `Ta có $y' = -3x^2 + ${variant === 1 ? 12 : 6}x \\Rightarrow y'' = -6x + ${variant === 1 ? 12 : 6} = 0 \\Leftrightarrow x = ${variant === 1 ? 2 : 1}$. Khi đó $y(${variant === 1 ? 2 : 1}) = ${variant === 1 ? 7 : 1}$.`,
      'Hoành độ tâm đối xứng của đồ thị hàm bậc ba là $x_0 = -\\frac{b}{3a}$.'
    ),
    makeMC(
      p,
      7,
      'Bài tập cuối chương I',
      `Cho hàm số $y = \\frac{x - ${variant === 1 ? 3 : 4}}{x + 1}$. Khẳng định nào sau đây đúng?`,
      [
        `Hàm số đồng biến trên từng khoảng $(-\\infty; -1)$ và $(-1; +\\infty)$`,
        `Hàm số nghịch biến trên từng khoảng $(-\\infty; -1)$ và $(-1; +\\infty)$`,
        `Hàm số đạt cực tiểu tại $x = -1$`,
        `Hàm số đồng biến trên $\\mathbb{R}$`,
      ],
      'A',
      `Ta có $y' = \\frac{${variant === 1 ? 4 : 5}}{(x + 1)^2} > 0, \\forall x \\neq -1$ nên hàm số đồng biến trên từng khoảng xác định.`,
      'Hàm phân thức bậc nhất trên bậc nhất không bao giờ có cực trị.'
    ),
    makeMC(
      p,
      8,
      'Bài tập cuối chương I',
      `Giá trị nhỏ nhất của hàm số $y = x + \\frac{${variant === 1 ? 16 : 49}}{x + 1}$ trên khoảng $(-1; +\\infty)$ bằng:`,
      [
        `$${variant === 1 ? 7 : 13}$`,
        `$${variant === 1 ? 8 : 14}$`,
        `$${variant === 1 ? 3 : 6}$`,
        `$${variant === 1 ? 9 : 15}$`,
      ],
      'A',
      `Viết lại $y = (x + 1) + \\frac{${variant === 1 ? 16 : 49}}{x + 1} - 1$. Với $x > -1$, $y' = 1 - \\frac{${variant === 1 ? 16 : 49}}{(x+1)^2} = 0 \\Leftrightarrow x + 1 = ${variant === 1 ? 4 : 7} \\Leftrightarrow x = ${variant === 1 ? 3 : 6}$. Khi đó $\\min y = ${variant === 1 ? 8 - 1 : 14 - 1} = ${variant === 1 ? 7 : 13}$.`,
      'Tách $x = (x + 1) - 1$ hoặc giải trực tiếp $y\' = 0$ trên khoảng $(-1; +\\infty)$.'
    ),
    makeMC(
      p,
      9,
      'Bài tập cuối chương I',
      `Số giao điểm của đồ thị hàm số $y = x^3 - 3x^2 + 2$ và đường thẳng $y = 2$ là:`,
      ['$2$', '$3$', '$1$', '$0$'],
      'A',
      `Phương trình hoành độ giao điểm: $x^3 - 3x^2 + 2 = 2 \\Leftrightarrow x^2(x - 3) = 0 \\Leftrightarrow x = 0$ hoặc $x = 3$. Vậy có $2$ giao điểm.`,
      'Khi đường thẳng $y = m$ đi qua đúng một điểm cực trị của hàm bậc ba thì cắt đồ thị tại 2 điểm.'
    ),
    makeMC(
      p,
      10,
      'Bài tập cuối chương I',
      `Một vật chuyển động với phương trình $s(t) = -t^3 + ${variant === 1 ? 9 : 12}t^2 + 5$ ($t \\ge 0$ tính bằng giây, $s$ tính bằng mét). Thời điểm vận tốc của vật đạt giá trị lớn nhất là:`,
      [
        `$t = ${variant === 1 ? 3 : 4}$ giây`,
        `$t = ${variant === 1 ? 6 : 8}$ giây`,
        `$t = ${variant === 1 ? 1.5 : 2}$ giây`,
        `$t = ${variant === 1 ? 9 : 12}$ giây`,
      ],
      'A',
      `Vận tốc $v(t) = s'(t) = -3t^2 + ${variant === 1 ? 18 : 24}t$. Ta có $v'(t) = -6t + ${variant === 1 ? 18 : 24} = 0 \\Leftrightarrow t = ${variant === 1 ? 3 : 4}$ giây.`,
      'Vận tốc đạt cực đại tại thời điểm gia tốc $a(t) = v\'(t) = 0$.'
    ),
    makeMC(
      p,
      11,
      'Bài tập cuối chương I',
      `Cho hai số dương $x, y$ có tích $xy = ${variant === 1 ? 36 : 64}$. Giá trị nhỏ nhất của tổng $S = x + y$ bằng:`,
      [
        `$${variant === 1 ? 12 : 16}$`,
        `$${variant === 1 ? 6 : 8}$`,
        `$${variant === 1 ? 18 : 32}$`,
        `$${variant === 1 ? 24 : 20}$`,
      ],
      'A',
      `Thay $y = \\frac{${variant === 1 ? 36 : 64}}{x}$ ($x > 0$), xét $S(x) = x + \\frac{${variant === 1 ? 36 : 64}}{x} \\ge 2\\sqrt{${variant === 1 ? 36 : 64}} = ${variant === 1 ? 12 : 16}$ khi $x = y = ${variant === 1 ? 6 : 8}$.`,
      'Trong các hình chữ nhật có cùng diện tích, hình vuông có chu vi nhỏ nhất.'
    ),
    makeMC(
      p,
      12,
      'Bài tập cuối chương I',
      `Có bao nhiêu giá trị nguyên của tham số $m \\in [-10; 10]$ để hàm số $y = \\frac{x + 2}{x + m}$ đồng biến trên khoảng $(-\\infty; -5)$?`,
      [
        `$3$`,
        `$4$`,
        `$7$`,
        `$8$`,
      ],
      'A',
      `Để hàm số đồng biến trên $(-\\infty; -5)$ thì $\\begin{cases} y' = \\frac{m - 2}{(x+m)^2} > 0 \\\\ -m \\notin (-\\infty; -5) \\end{cases} \\Leftrightarrow \\begin{cases} m > 2 \\\\ -m \\ge -5 \\end{cases} \\Leftrightarrow 2 < m \\le 5$. Vậy $m \\in \\{3; 4; 5\\}$ (có $3$ giá trị nguyên).`,
      'Khi xét tính đơn điệu của hàm phân thức trên khoảng $K$, phải kèm điều kiện nghiệm mẫu $-m \\notin K$.'
    ),
  ];

  const part2 = [
    makeTF(
      p,
      1,
      'Bài tập cuối chương I',
      `Cho hàm số $y = f(x) = x^3 - ${c1}x + 2$ có đồ thị $(C)$. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Hàm số đạt cực đại tại $x = -${k}$ và đạt cực tiểu tại $x = ${k}$.`,
          isCorrect: true,
          exp: `Ta có $f'(x) = 3(x^2 - ${k * k}) = 0 \\Leftrightarrow x = \\pm ${k}$. Qua $x = -${k}$ đạo hàm đổi dấu từ $+$ sang $-$, qua $x = ${k}$ đổi dấu từ $-$ sang $+$.`,
        },
        {
          text: `Giá trị lớn nhất của hàm số trên đoạn $[-${k}; ${2 * k}]$ bằng $${(2 * k) ** 3 - c1 * (2 * k) + 2}$.`,
          isCorrect: true,
          exp: `Trên đoạn $[-${k}; ${2 * k}]$, ta có $f(-${k}) = ${yMaxC}$, $f(${k}) = ${yMinC}$ và $f(${2 * k}) = ${(2 * k) ** 3 - c1 * (2 * k) + 2}$ (lớn nhất vì $f(2k) = f(-k) = ${yMaxC}$).`,
        },
        {
          text: `Đồ thị $(C)$ nhận điểm $I(0; 2)$ làm tâm đối xứng.`,
          isCorrect: true,
          exp: `Ta có $f''(x) = 6x = 0 \\Leftrightarrow x = 0 \\Rightarrow f(0) = 2$.`,
        },
        {
          text: `Đồ thị $(C)$ có một đường tiệm cận ngang là $y = 2$.`,
          isCorrect: false,
          exp: `Hàm đa thức bậc ba có $\\lim_{x \\to \\pm\\infty} f(x) = \\pm\\infty$ nên không có đường tiệm cận nào.`,
        },
      ],
      'Đồ thị hàm số đa thức không bao giờ có đường tiệm cận.'
    ),
    makeTF(
      p,
      2,
      'Bài tập cuối chương I',
      `Cho hàm số $y = f(x) = \\frac{x^2 + ${variant === 1 ? 2 : 4}x + ${variant === 1 ? 5 : 12}}{x + 1}$ có đồ thị $(C)$. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Đồ thị $(C)$ có tiệm cận đứng là $x = -1$ và tiệm cận xiên là $y = x + ${variant === 1 ? 1 : 3}$.`,
          isCorrect: true,
          exp: `Chia đa thức: $f(x) = x + ${variant === 1 ? 1 : 3} + \\frac{${variant === 1 ? 4 : 9}}{x + 1}$. Vậy TCĐ là $x = -1$ và TCX là $y = x + ${variant === 1 ? 1 : 3}$.`,
        },
        {
          text: `Khoảng cách giữa hai điểm cực trị của hàm số (theo hoành độ $|x_1 - x_2|$) bằng $${variant === 1 ? 4 : 6}$.`,
          isCorrect: true,
          exp: `Ta có $f'(x) = 1 - \\frac{${variant === 1 ? 4 : 9}}{(x+1)^2} = 0 \\Leftrightarrow x + 1 = \\pm ${variant === 1 ? 2 : 3}$. Do đó $|x_1 - x_2| = ${variant === 1 ? 4 : 6}$.`,
        },
        {
          text: `Giá trị nhỏ nhất của hàm số trên khoảng $(-1; +\\infty)$ bằng $${variant === 1 ? 4 : 8}$.`,
          isCorrect: true,
          exp: `Trên $(-1; +\\infty)$, hàm số đạt cực tiểu duy nhất tại $x = ${variant === 1 ? 1 : 2}$ với giá trị $f(${variant === 1 ? 1 : 2}) = ${variant === 1 ? 4 : 8}$.`,
        },
        {
          text: `Tâm đối xứng của đồ thị $(C)$ là điểm $I(-1; 0)$ (hoặc $I(-1; ${variant === 1 ? 0 : 2})$).`,
          isCorrect: variant === 1 ? true : false,
          exp:
            variant === 1
              ? `Giao của $x = -1$ và $y = x + 1$ là $I(-1; 0)$ (Đúng).`
              : `Giao của $x = -1$ và $y = x + 3$ là $I(-1; 2)$ chứ không phải $I(-1; 0)$.`,
        },
      ],
      'Tâm đối xứng của hàm phân thức bậc hai/bậc nhất là giao điểm của tiệm cận đứng và tiệm cận xiên.'
    ),
    // Chỉnh lại nội dung ý d câu 2 để không chứa ngoặc giải thích trong đề:
  ];

  part2[1].statements[3] = {
    id: 'd',
    label: 'd',
    statement: `Tâm đối xứng của đồ thị $(C)$ nằm trên trục hoành $Ox$.`,
    isCorrect: variant === 1 ? true : false,
    explanation:
      variant === 1
        ? `Giao điểm hai tiệm cận $x = -1$ và $y = x + 1$ là $I(-1; 0) \\in Ox$.`
        : `Giao điểm hai tiệm cận $x = -1$ và $y = x + 3$ là $I(-1; 2) \\notin Ox$.`,
  };

  part2.push(
    makeTF(
      p,
      3,
      'Bài tập cuối chương I',
      `Chi phí nhiên liệu (tính bằng nghìn đồng/giờ) của một tàu thủy khi chạy với vận tốc $v\\text{ (km/h)}$ ($v > 0$) được cho bởi $F(v) = v^2 + ${variant === 1 ? 100 : 144}$. Tàu chạy quãng đường dài $${variant === 1 ? 100 : 120}\\text{ km}$ trên sông không có dòng chảy. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Thời gian tàu đi hết quãng đường là $t(v) = \\frac{${variant === 1 ? 100 : 120}}{v}$ (giờ).`,
          isCorrect: true,
          exp: `Thời gian bằng quãng đường chia cho vận tốc: $t = \\frac{s}{v}$.`,
        },
        {
          text: `Tổng chi phí nhiên liệu cho cả chuyến đi là $T(v) = ${variant === 1 ? 100 : 120}\\left(v + \\frac{${variant === 1 ? 100 : 144}}{v}\\right)$ (nghìn đồng).`,
          isCorrect: true,
          exp: `Tổng chi phí $T(v) = F(v) \\cdot t(v) = (v^2 + ${variant === 1 ? 100 : 144})\\cdot \\frac{${variant === 1 ? 100 : 120}}{v}$.`,
        },
        {
          text: `Để tổng chi phí nhiên liệu cho cả chuyến đi là thấp nhất thì tàu phải chạy với vận tốc $v = ${variant === 1 ? 10 : 12}\\text{ km/h}$.`,
          isCorrect: true,
          exp: `Ta có $T'(v) = ${variant === 1 ? 100 : 120}\\left(1 - \\frac{${variant === 1 ? 100 : 144}}{v^2}\\right) = 0 \\Leftrightarrow v = ${variant === 1 ? 10 : 12}\\text{ km/h}$.`,
        },
        {
          text: `Tổng chi phí nhiên liệu thấp nhất cho cả chuyến đi là $${variant === 1 ? 1000 : 1440}$ nghìn đồng.`,
          isCorrect: false,
          exp: `Tại $v = ${variant === 1 ? 10 : 12}$, tổng chi phí thấp nhất là $T(${variant === 1 ? 10 : 12}) = ${variant === 1 ? 100 * 20 : 120 * 24} = ${variant === 1 ? 2000 : 2880}$ nghìn đồng.`,
        },
      ],
      'Tổng chi phí nhiên liệu cho cả quãng đường bằng (chi phí 1 giờ) nhân với (số giờ chạy).'
    )
  );

  const part3 = [
    makeSA(
      p,
      1,
      'Bài tập cuối chương I',
      `Tìm tổng giá trị lớn nhất và giá trị nhỏ nhất của hàm số $y = x^3 - 3x + ${variant === 1 ? 4 : 7}$ trên đoạn $[0; 2]$.`,
      [variant === 1 ? '8' : '14'],
      `Trên đoạn $[0; 2]$, $y' = 3x^2 - 3 = 0 \\Leftrightarrow x = 1$. Ta có $y(0) = ${variant === 1 ? 4 : 7}$, $y(1) = ${variant === 1 ? 2 : 5}$, $y(2) = ${variant === 1 ? 6 : 9}$. Vậy $\\max y + \\min y = ${variant === 1 ? 6 + 2 : 9 + 5} = ${variant === 1 ? 8 : 14}$.`,
      'Tính $y(0), y(1), y(2)$ để xác định đúng $\\max$ và $\\min$.'
    ),
    makeSA(
      p,
      2,
      'Bài tập cuối chương I',
      `Biết đồ thị hàm số $y = \\frac{ax + ${variant === 1 ? 5 : 7}}{x - b}$ có tiệm cận đứng là $x = 2$ và tiệm cận ngang là $y = ${variant === 1 ? 3 : 4}$. Tính giá trị của $a + b$.`,
      [variant === 1 ? '5' : '6'],
      `Từ TCĐ $x = b = 2 \\Rightarrow b = 2$ và TCN $y = a = ${variant === 1 ? 3 : 4} \\Rightarrow a = ${variant === 1 ? 3 : 4}$. Suy ra $a + b = ${variant === 1 ? 5 : 6}$.`,
      'Đối chiếu phương trình tiệm cận với hệ số $a, b$.'
    ),
    makeSA(
      p,
      3,
      'Bài tập cuối chương I',
      `Gọi $A, B$ là hai điểm cực trị của đồ thị hàm số $y = x^3 - 3x^2 + ${variant === 1 ? 1 : 5}$. Tính diện tích tam giác $OAB$ (với $O$ là gốc tọa độ).`,
      [variant === 1 ? '1' : '5'],
      `Hai điểm cực trị là $A(0; ${variant === 1 ? 1 : 5})$ (nằm trên trục $Oy$) và $B(2; ${variant === 1 ? -3 : 1})$. Độ dài đáy trên trục $Oy$ là $OA = ${variant === 1 ? 1 : 5}$, khoảng cách từ $B$ đến trục $Oy$ là $|x_B| = 2$. Suy ra $S_{\\triangle OAB} = \\frac{1}{2} \\cdot OA \\cdot |x_B| = \\frac{1}{2} \\cdot ${variant === 1 ? 1 : 5} \\cdot 2 = ${variant === 1 ? 1 : 5}$.`,
      'Khi điểm $A(0; y_A)$ nằm trên trục $Oy$, diện tích $\\triangle OAB$ tính rất nhanh theo công thức $\\frac{1}{2}|y_A|\\cdot |x_B|$.'
    ),
    makeSA(
      p,
      4,
      'Bài tập cuối chương I',
      `Một cơ sở sản xuất bán mỗi sản phẩm với giá $${variant === 1 ? 180 : 240}$ nghìn đồng. Chi phí sản xuất $x$ sản phẩm là $C(x) = 3x^2 + ${variant === 1 ? 60 : 96}x + 200$ (nghìn đồng). Hỏi cơ sở cần sản xuất bao nhiêu sản phẩm để lợi nhuận đạt lớn nhất?`,
      [variant === 1 ? '20' : '24'],
      `Lợi nhuận $P(x) = ${variant === 1 ? 180 : 240}x - C(x) = -3x^2 + ${variant === 1 ? 120 : 144}x - 200$. Giải $P'(x) = -6x + ${variant === 1 ? 120 : 144} = 0 \\Leftrightarrow x = ${variant === 1 ? 20 : 24}$ (sản phẩm).`,
      'Lập hàm lợi nhuận $P(x) = R(x) - C(x)$ rồi giải $P\'(x) = 0$.'
    ),
  ];

  const part4 = [
    makeSO(
      p,
      1,
      'Bài tập cuối chương I',
      `Khảo sát và tìm giá trị lớn nhất, giá trị nhỏ nhất của hàm số $y = x^3 - ${c1}x + 2$ trên đoạn $[0; ${2 * k}]$.`,
      `Trình bày đầy đủ các bước tìm GTLN, GTNN trên đoạn $[0; ${2 * k}]$.`,
      [
        {
          role: 'Tính đạo hàm và tìm nghiệm trên khoảng (0; 2k)',
          content: `Ta có $y' = 3x^2 - ${c1} = 0 \\Leftrightarrow x = \\pm ${k}$. Trên khoảng $(0; ${2 * k})$ chỉ có nghiệm $x = ${k}$.`,
        },
        {
          role: 'Tính giá trị hàm số tại x = 0, x = k, x = 2k',
          content: `Ta có $y(0) = 2$, $y(${k}) = ${yMinC}$ và $y(${2 * k}) = ${yMaxC}$.`,
        },
        {
          role: 'So sánh và kết luận GTLN, GTNN',
          content: `Vậy $\\max_{[0; ${2 * k}]} y = ${yMaxC}$ tại $x = ${2 * k}$ và $\\min_{[0; ${2 * k}]} y = ${yMinC}$ tại $x = ${k}$.`,
        },
      ],
      'Loại nghiệm $x = -k$ vì không thuộc đoạn $[0; 2k]$.',
      'Bài toán tổng hợp kỹ năng đạo hàm và tìm GTLN-GTNN.',
      0.7
    ),
    makeSO(
      p,
      2,
      'Bài tập cuối chương I',
      `Tìm các đường tiệm cận và tâm đối xứng của đồ thị hàm số $y = \\frac{x^2 + ${variant === 1 ? 2 : 4}x + ${variant === 1 ? 5 : 12}}{x + 1}$.`,
      `Xác định phương trình tiệm cận đứng, tiệm cận xiên và tọa độ tâm đối xứng.`,
      [
        {
          role: 'Tách phần nguyên của hàm phân thức trên tập xác định',
          content: `Tập xác định $D = \\mathbb{R} \\setminus \\{-1\\}$. Ta có $y = x + ${variant === 1 ? 1 : 3} + \\frac{${variant === 1 ? 4 : 9}}{x + 1}$.`,
        },
        {
          role: 'Xác định tiệm cận đứng và tiệm cận xiên',
          content: `Vì $\\lim_{x \\to -1^+} y = +\\infty$ nên $x = -1$ là tiệm cận đứng. Vì $\\lim_{x \\to \\pm\\infty} [y - (x + ${variant === 1 ? 1 : 3})] = 0$ nên $y = x + ${variant === 1 ? 1 : 3}$ là tiệm cận xiên.`,
        },
        {
          role: 'Tìm giao điểm hai tiệm cận làm tâm đối xứng',
          content: `Tọa độ giao điểm của $x = -1$ và $y = x + ${variant === 1 ? 1 : 3}$ là $I(-1; ${variant === 1 ? 0 : 2})$, đó là tâm đối xứng của đồ thị.`,
        },
      ],
      'Kết hợp kiến thức Bài 3 (Tiệm cận) và Bài 4 (Khảo sát đồ thị).',
      'Tổng hợp khảo sát hàm phân thức bậc hai trên bậc nhất.',
      0.65
    ),
    makeSO(
      p,
      3,
      'Bài tập cuối chương I',
      `Một tấm nhôm hình chữ nhật có kích thước $${variant === 1 ? 16 : 32}\\text{ cm} \\times ${variant === 1 ? 10 : 20}\\text{ cm}$. Người ta cắt bỏ 4 hình vuông bằng nhau cạnh $x\\text{ (cm)}$ ở 4 góc rồi gập lại thành một hình hộp chữ nhật không nắp. Tìm $x$ để thể tích hộp lớn nhất.`,
      `Thiết lập hàm thể tích $V(x)$ và tìm giá trị tối ưu của $x$.`,
      [
        {
          role: 'Xác định điều kiện của x và lập hàm thể tích V(x)',
          content: `Điều kiện $0 < x < ${variant === 1 ? 5 : 10}$. Kích thước đáy hộp là $(${variant === 1 ? 16 : 32} - 2x)$ và $(${variant === 1 ? 10 : 20} - 2x)$, chiều cao là $x$. Thể tích $V(x) = x(${variant === 1 ? 16 : 32} - 2x)(${variant === 1 ? 10 : 20} - 2x) = 4x^3 - ${variant === 1 ? 52 : 104}x^2 + ${variant === 1 ? 160 : 640}x$.`,
        },
        {
          role: 'Tính đạo hàm V\'(x) và giải phương trình V\'(x) = 0',
          content: `Ta có $V'(x) = 12x^2 - ${variant === 1 ? 104 : 208}x + ${variant === 1 ? 160 : 640} = 0 \\Leftrightarrow x = ${variant === 1 ? 2 : 4}$ (nhận) hoặc $x = \\frac{${variant === 1 ? 20 : 40}}{3}$ (loại vì lớn hơn $${variant === 1 ? 5 : 10}$).`,
        },
        {
          role: 'Kết luận giá trị của x để thể tích lớn nhất',
          content: `Vậy khi cắt hình vuông có cạnh $x = ${variant === 1 ? 2 : 4}\\text{ cm}$ thì hình hộp có thể tích lớn nhất bằng $${variant === 1 ? 144 : 1152}\\text{ cm}^3$.`,
        },
      ],
      'Chú ý điều kiện $2x$ phải nhỏ hơn cạnh ngắn hơn của tấm nhôm chữ nhật.',
      'Bài toán thực tế trọng tâm cuối Chương I.',
      0.65,
      'sp_sheet_cut_box'
    ),
  ];

  return makeLessonExam(
    `chuong-01-ontap-de-${variant}`,
    `Ôn tập Chương I - Đề ôn số ${variant}`,
    `Bài tập cuối chương I (SGK Toán 12 Tập 1)`,
    `Đề ôn số ${variant} - Bài tập cuối chương I: Tổng hợp Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số (22 câu hỏi chuẩn cấu trúc 4 phần).`,
    part1,
    part2,
    part3,
    part4
  );
}

export const CHAPTER_1_PART_B_LESSONS: LessonInfo[] = [
  {
    id: 'bai-04',
    code: 'Bài 4',
    title: 'Khảo sát sự biến thiên và vẽ đồ thị của hàm số',
    fullName: 'Bài 4. Khảo sát sự biến thiên và vẽ đồ thị của hàm số',
    chapterId: 'chuong-1',
    chapterTitle: 'CHƯƠNG I. ỨNG DỤNG ĐẠO HÀM ĐỂ KHẢO SÁT VÀ VẼ ĐỒ THỊ HÀM SỐ',
    pageNumber: 26,
    coreTopics: [
      'Sơ đồ khảo sát sự biến thiên và vẽ đồ thị hàm số',
      'Khảo sát hàm bậc ba, hàm phân thức bậc nhất/bậc nhất và bậc hai/bậc nhất',
      'Tâm đối xứng, giao điểm với trục tọa độ và bài toán tương giao',
    ],
    practiceExams: [buildBai4Exam(1), buildBai4Exam(2)],
  },
  {
    id: 'bai-05',
    code: 'Bài 5',
    title: 'Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn',
    fullName: 'Bài 5. Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn',
    chapterId: 'chuong-1',
    chapterTitle: 'CHƯƠNG I. ỨNG DỤNG ĐẠO HÀM ĐỂ KHẢO SÁT VÀ VẼ ĐỒ THỊ HÀM SỐ',
    pageNumber: 33,
    coreTopics: [
      'Tốc độ thay đổi tức thời (vận tốc, gia tốc, cường độ dòng điện, chi phí biên)',
      'Bài toán tối ưu hóa hình học (diện tích, thể tích, quãng đường)',
      'Bài toán tối ưu hóa kinh tế (doanh thu, chi phí, lợi nhuận)',
    ],
    practiceExams: [buildBai5Exam(1), buildBai5Exam(2)],
  },
  {
    id: 'ontap-chuong-1',
    code: 'Ôn tập Chương I',
    title: 'Bài tập cuối chương I',
    fullName: 'Bài tập cuối chương I',
    chapterId: 'chuong-1',
    chapterTitle: 'CHƯƠNG I. ỨNG DỤNG ĐẠO HÀM ĐỂ KHẢO SÁT VÀ VẼ ĐỒ THỊ HÀM SỐ',
    pageNumber: 42,
    coreTopics: [
      'Tổng hợp tính đơn điệu, cực trị và GTLN - GTNN của hàm số',
      'Tổng hợp đường tiệm cận và nhận diện đồ thị hàm số',
      'Tổng hợp các bài toán thực tiễn và tối ưu hóa trong Chương I',
    ],
    practiceExams: [buildOnTapChuong1Exam(1), buildOnTapChuong1Exam(2)],
  },
];
