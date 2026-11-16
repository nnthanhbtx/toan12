import { LessonInfo } from './types';
import { ExamSet } from '../../types/exam';
import { makeMC, makeTF, makeSA, makeSO, makeLessonExam } from './helpers';

// BÀI 1. TÍNH ĐƠN ĐIỆU VÀ CỰC TRỊ CỦA HÀM SỐ (Đề ôn số 1 & Đề ôn số 2)
function buildBai1Exam(variant: 1 | 2): ExamSet {
  const p = variant === 1 ? 'b1-d1' : 'b1-d2';
  // Tham số riêng cho Đề ôn 1 và Đề ôn 2 (không trùng SGK)
  const r1 = variant === 1 ? -1 : -2;
  const r2 = variant === 1 ? 3 : 4;
  // Hàm bậc 3: y = x^3 - (3/2)(r1+r2)x^2 + 3*r1*r2*x + c0 => với r1+r2 chẵn:
  // Chọn y = x^3 - 3*(m)*x^2 + 3*p*x + d sao cho y' = 3(x - r1)(x - r2)
  const sumR = r1 + r2; // v1: 2, v2: 2
  const prodR = r1 * r2; // v1: -3, v2: -8
  const d0 = variant === 1 ? 2 : 5;
  // y = x^3 - 3x^2 - 9x + 2 (v1) hoặc y = x^3 - 3x^2 - 24x + 5 (v2)
  const bCoef = -(3 * sumR) / 2; // -3
  const cCoef = 3 * prodR; // v1: -9, v2: -24
  const yCD = r1 ** 3 + bCoef * r1 ** 2 + cCoef * r1 + d0; // v1: 7, v2: 33
  const yCT = r2 ** 3 + bCoef * r2 ** 2 + cCoef * r2 + d0; // v1: -25, v2: -75

  const k4 = variant === 1 ? 2 : 3; // y = x^4 - 2*k4^2*x^2 + 1 => cực trị tại 0, ±k4
  const a4 = 2 * k4 * k4; // v1: 8, v2: 18
  const y4CT = k4 ** 4 - a4 * k4 ** 2 + 1; // v1: 16 - 32 + 1 = -15; v2: 81 - 162 + 1 = -80

  const part1 = [
    makeMC(
      p,
      1,
      'Bài 1. Tính đơn điệu và cực trị của hàm số',
      `Cho hàm số $y = x^3 - 3x^2 ${cCoef}x + ${d0}$. Hàm số đã cho nghịch biến trên khoảng nào dưới đây?`,
      [
        `$(${r1}; ${r2})$`,
        `$(-\\infty; ${r1})$`,
        `$(${r2}; +\\infty)$`,
        `$(-\\infty; ${r2})$`,
      ],
      'A',
      `Ta có $y' = 3x^2 - 6x ${cCoef} = 3(x - (${r1}))(x - ${r2})$. Vì $y' < 0 \\Leftrightarrow x \\in (${r1}; ${r2})$ nên hàm số nghịch biến trên khoảng $(${r1}; ${r2})$.`,
      'Với hàm bậc ba có hệ số $a > 0$, hàm số nghịch biến giữa hai nghiệm của đạo hàm.'
    ),
    makeMC(
      p,
      2,
      'Bài 1. Tính đơn điệu và cực trị của hàm số',
      `Điểm cực đại của hàm số $y = x^3 - 3x^2 ${cCoef}x + ${d0}$ là:`,
      [
        `$x = ${r2}$`,
        `$x = ${r1}$`,
        `$y = ${yCD}$`,
        `$M(${r1}; ${yCD})$`,
      ],
      'B',
      `Đạo hàm $y' = 3(x - (${r1}))(x - ${r2})$ đổi dấu từ dương sang âm khi đi qua $x = ${r1}$ nên điểm cực đại của hàm số là $x = ${r1}$.`,
      'Phân biệt rõ: Điểm cực đại của hàm số là $x_0$, giá trị cực đại là $y(x_0)$, điểm cực đại của đồ thị là $M(x_0; y_0)$.'
    ),
    makeMC(
      p,
      3,
      'Bài 1. Tính đơn điệu và cực trị của hàm số',
      `Giá trị cực tiểu của hàm số $y = x^3 - 3x^2 ${cCoef}x + ${d0}$ bằng:`,
      [
        `$${r2}$`,
        `$${yCD}$`,
        `$${yCT}$`,
        `$${-yCT}$`,
      ],
      'C',
      `Hàm số đạt cực tiểu tại $x = ${r2}$, suy ra giá trị cực tiểu $y_{CT} = y(${r2}) = ${yCT}$.`,
      'Thay hoành độ điểm cực tiểu $x_{CT}$ vào biểu thức $y(x)$ để tìm giá trị cực tiểu.'
    ),
    makeMC(
      p,
      4,
      'Bài 1. Tính đơn điệu và cực trị của hàm số',
      `Cho hàm số $y = -x^3 + ${3 * k4}x^2 - 5$. Hàm số đồng biến trên khoảng nào dưới đây?`,
      [
        `$(-\\infty; 0)$`,
        `$(0; ${2 * k4})$`,
        `$(${2 * k4}; +\\infty)$`,
        `$(-\\infty; ${2 * k4})$`,
      ],
      'B',
      `Ta có $y' = -3x^2 + ${6 * k4}x = -3x(x - ${2 * k4})$. Khi đó $y' > 0 \\Leftrightarrow 0 < x < ${2 * k4}$.`,
      'Khi hệ số $a < 0$, tam thức bậc hai $y\'$ mang dấu dương trong khoảng giữa hai nghiệm.'
    ),
    makeMC(
      p,
      5,
      'Bài 1. Tính đơn điệu và cực trị của hàm số',
      `Hàm số $y = x^4 - ${a4}x^2 + 1$ có bao nhiêu điểm cực trị?`,
      ['$1$', '$2$', '$3$', '$0$'],
      'C',
      `Ta có $y' = 4x^3 - ${2 * a4}x = 4x(x^2 - ${k4 * k4}) = 0 \\Leftrightarrow x = 0$ hoặc $x = \\pm ${k4}$ (3 nghiệm đơn phân biệt). Vậy hàm số có $3$ điểm cực trị.`,
      'Hàm trùng phương $y = ax^4 + bx^2 + c$ có 3 điểm cực trị khi và chỉ khi $a \\cdot b < 0$.'
    ),
    makeMC(
      p,
      6,
      'Bài 1. Tính đơn điệu và cực trị của hàm số',
      `Giá trị cực tiểu của hàm số $y = x^4 - ${a4}x^2 + 1$ bằng:`,
      [`$${y4CT}$`, `$1$`, `$${-k4}$`, `$${k4}$`],
      'A',
      `Hàm số đạt cực tiểu tại $x = \\pm ${k4}$, giá trị cực tiểu là $y(\\pm ${k4}) = (${k4})^4 - ${a4}\\cdot (${k4})^2 + 1 = ${y4CT}$.`,
      'Với hàm trùng phương có $a > 0, b < 0$, hai điểm $x = \\pm\\sqrt{-b/(2a)}$ là hai điểm cực tiểu.'
    ),
    makeMC(
      p,
      7,
      'Bài 1. Tính đơn điệu và cực trị của hàm số',
      `Cho hàm số phân thức $y = \\frac{${variant === 1 ? 2 : 3}x + 1}{x - ${variant === 1 ? 2 : 1}}$. Khẳng định nào sau đây là đúng?`,
      [
        `Hàm số nghịch biến trên các khoảng $(-\\infty; ${variant === 1 ? 2 : 1})$ và $(${variant === 1 ? 2 : 1}; +\\infty)$`,
        `Hàm số đồng biến trên các khoảng $(-\\infty; ${variant === 1 ? 2 : 1})$ và $(${variant === 1 ? 2 : 1}; +\\infty)$`,
        `Hàm số nghịch biến trên $\\mathbb{R} \\setminus \\{${variant === 1 ? 2 : 1}\\}$`,
        `Hàm số có $1$ điểm cực trị tại $x = ${variant === 1 ? 2 : 1}$`,
      ],
      'A',
      `Tập xác định $D = \\mathbb{R} \\setminus \\{${variant === 1 ? 2 : 1}\\}$. Đạo hàm $y' = \\frac{${variant === 1 ? -5 : -4}}{(x - ${variant === 1 ? 2 : 1})^2} < 0, \\forall x \\in D$. Vậy hàm số nghịch biến trên từng khoảng xác định.`,
      'Không được kết luận hàm số nghịch biến trên $D = \\mathbb{R}\\setminus\\{x_0\\}$, phải kết luận trên từng khoảng xác định.'
    ),
    makeMC(
      p,
      8,
      'Bài 1. Tính đơn điệu và cực trị của hàm số',
      `Cho hàm số $y = f(x)$ có đạo hàm $f'(x) = (x - ${variant === 1 ? 1 : 2})^2 (x + ${variant === 1 ? 3 : 4}) (x - ${variant === 1 ? 5 : 6})$ với mọi $x \\in \\mathbb{R}$. Số điểm cực trị của hàm số $y = f(x)$ là:`,
      ['$3$', '$2$', '$1$', '$4$'],
      'B',
      `Nghiệm $x = ${variant === 1 ? 1 : 2}$ là nghiệm bội chẵn nên $f'(x)$ không đổi dấu khi qua đó. Đạo hàm chỉ đổi dấu qua $2$ nghiệm bội lẻ là $x = -${variant === 1 ? 3 : 4}$ và $x = ${variant === 1 ? 5 : 6}$. Vậy hàm số có $2$ điểm cực trị.`,
      'Số điểm cực trị của hàm số khả vi trên $\\mathbb{R}$ bằng số nghiệm bội lẻ của phương trình $f\'(x) = 0$.'
    ),
    makeMC(
      p,
      9,
      'Bài 1. Tính đơn điệu và cực trị của hàm số',
      `Hàm số nào dưới đây đồng biến trên toàn bộ tập số thực $\\mathbb{R}$?`,
      [
        `$y = x^3 + ${variant === 1 ? 3 : 6}x - ${variant === 1 ? 4 : 7}$`,
        `$y = \\frac{x - 1}{x + 2}$`,
        `$y = x^4 + 2x^2 + 1$`,
        `$y = x^3 - 3x + 1$`,
      ],
      'A',
      `Xét $y = x^3 + ${variant === 1 ? 3 : 6}x - ${variant === 1 ? 4 : 7}$ có TXĐ $D = \\mathbb{R}$ và $y' = 3x^2 + ${variant === 1 ? 3 : 6} > 0, \\forall x \\in \\mathbb{R}$ nên hàm số đồng biến trên $\\mathbb{R}$.`,
      'Kiểm tra đồng thời hai điều kiện: Tập xác định là $\\mathbb{R}$ và $y\' \\ge 0, \\forall x \\in \\mathbb{R}$.'
    ),
    makeMC(
      p,
      10,
      'Bài 1. Tính đơn điệu và cực trị của hàm số',
      `Cho hàm số $y = \\frac{x^2 - ${variant === 1 ? 2 : 4}x + ${variant === 1 ? 5 : 8}}{x - ${variant === 1 ? 1 : 2}}$. Tổng hoành độ hai điểm cực trị của hàm số bằng:`,
      [
        `$${variant === 1 ? 2 : 4}$`,
        `$${variant === 1 ? 4 : 6}$`,
        `$${variant === 1 ? -2 : -4}$`,
        `$0$`,
      ],
      'A',
      `Đặt $x_0 = ${variant === 1 ? 1 : 2}$, viết lại $y = x - ${variant === 1 ? 1 : 2} + \\frac{4}{x - ${variant === 1 ? 1 : 2}}$. Ta có $y' = 1 - \\frac{4}{(x - ${variant === 1 ? 1 : 2})^2} = 0 \\Leftrightarrow x - ${variant === 1 ? 1 : 2} = \\pm 2$. Suy ra $x_1 + x_2 = 2 \\cdot ${variant === 1 ? 1 : 2} = ${variant === 1 ? 2 : 4}$.`,
      'Hai điểm cực trị của hàm phân thức bậc hai trên bậc nhất nhận nghiệm mẫu số làm trung điểm hoành độ.'
    ),
    makeMC(
      p,
      11,
      'Bài 1. Tính đơn điệu và cực trị của hàm số',
      `Cho hàm số $y = \\sqrt{${variant === 1 ? 10 : 26} - x^2}$. Hàm số đồng biến trên khoảng nào dưới đây?`,
      [
        `$(-\\sqrt{${variant === 1 ? 10 : 26}}; 0)$`,
        `$(0; \\sqrt{${variant === 1 ? 10 : 26}})$`,
        `$(-\\infty; 0)$`,
        `$(-\\sqrt{${variant === 1 ? 10 : 26}}; \\sqrt{${variant === 1 ? 10 : 26}})$`,
      ],
      'A',
      `Tập xác định $D = [-\\sqrt{${variant === 1 ? 10 : 26}}; \\sqrt{${variant === 1 ? 10 : 26}}]$. Trên khoảng $(-\\sqrt{${variant === 1 ? 10 : 26}}; \\sqrt{${variant === 1 ? 10 : 26}})$, ta có $y' = \\frac{-x}{\\sqrt{${variant === 1 ? 10 : 26} - x^2}} > 0 \\Leftrightarrow x < 0$. Do đó hàm số đồng biến trên $(-\\sqrt{${variant === 1 ? 10 : 26}}; 0)$.`,
      'Với hàm chứa căn thức, luôn tìm tập xác định trước khi giải bất phương trình $y\' > 0$.'
    ),
    makeMC(
      p,
      12,
      'Bài 1. Tính đơn điệu và cực trị của hàm số',
      `Tất cả các giá trị thực của tham số $m$ để hàm số $y = \\frac{1}{3}x^3 - mx^2 + (${variant === 1 ? 4 : 9}m - ${variant === 1 ? 3 : 8})x + 2$ đồng biến trên $\\mathbb{R}$ là:`,
      [
        `$1 \\le m \\le ${variant === 1 ? 3 : 8}$`,
        `$1 < m < ${variant === 1 ? 3 : 8}$`,
        `$m \\le 1$ hoặc $m \\ge ${variant === 1 ? 3 : 8}$`,
        `$0 \\le m \\le ${variant === 1 ? 4 : 9}$`,
      ],
      'A',
      `Ta có $y' = x^2 - 2mx + ${variant === 1 ? 4 : 9}m - ${variant === 1 ? 3 : 8}$. Hàm số đồng biến trên $\\mathbb{R} \\Leftrightarrow \\Delta' = m^2 - ${variant === 1 ? 4 : 9}m + ${variant === 1 ? 3 : 8} \\le 0 \\Leftrightarrow 1 \\le m \\le ${variant === 1 ? 3 : 8}$.`,
      'Hàm bậc ba có $a > 0$ đồng biến trên $\\mathbb{R}$ khi và chỉ khi $\\Delta\'_{y\'} \\le 0$.'
    ),
  ];

  const part2 = [
    makeTF(
      p,
      1,
      'Bài 1. Tính đơn điệu và cực trị của hàm số',
      `Cho hàm số bậc ba $y = f(x) = x^3 - 3x^2 ${cCoef}x + ${d0}$. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Đạo hàm của hàm số là $f'(x) = 3x^2 - 6x ${cCoef}$.`,
          isCorrect: true,
          exp: `Áp dụng quy tắc tính đạo hàm đa thức: $(x^3 - 3x^2 ${cCoef}x + ${d0})' = 3x^2 - 6x ${cCoef}$.`,
        },
        {
          text: `Hàm số đồng biến trên khoảng $(${r1}; ${r2})$.`,
          isCorrect: false,
          exp: `Trên khoảng $(${r1}; ${r2})$ ta có $f'(x) < 0$ nên hàm số nghịch biến, không phải đồng biến.`,
        },
        {
          text: `Tổng giá trị cực đại và giá trị cực tiểu của hàm số bằng $${yCD + yCT}$.`,
          isCorrect: true,
          exp: `Ta có $y_{CĐ} = f(${r1}) = ${yCD}$ và $y_{CT} = f(${r2}) = ${yCT}$. Tổng bằng $${yCD} + (${yCT}) = ${yCD + yCT}$.`,
        },
        {
          text: `Đường thẳng đi qua hai điểm cực trị của đồ thị hàm số có hệ số góc dương.`,
          isCorrect: false,
          exp: `Hai điểm cực trị là $A(${r1}; ${yCD})$ và $B(${r2}; ${yCT})$. Hệ số góc $k = \\frac{${yCT} - ${yCD}}{${r2} - (${r1})} < 0$ nên hệ số góc âm.`,
        },
      ],
      'Khi khảo sát hàm bậc ba, hãy tính chính xác tọa độ 2 điểm cực trị trước khi xét các mệnh đề liên quan.'
    ),
    makeTF(
      p,
      2,
      'Bài 1. Tính đơn điệu và cực trị của hàm số',
      `Cho hàm số phân thức $y = f(x) = \\frac{x^2 + ${variant === 1 ? 3 : 8}}{x - 1}$ có tập xác định $D = \\mathbb{R} \\setminus \\{1\\}$. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Đạo hàm của hàm số là $f'(x) = \\frac{x^2 - 2x - ${variant === 1 ? 3 : 8}}{(x - 1)^2}$ với mọi $x \\neq 1$.`,
          isCorrect: true,
          exp: `Áp dụng công thức $(u/v)'$: $f'(x) = \\frac{2x(x-1) - (x^2 + ${variant === 1 ? 3 : 8})}{(x-1)^2} = \\frac{x^2 - 2x - ${variant === 1 ? 3 : 8}}{(x-1)^2}$.`,
        },
        {
          text: `Hàm số đạt cực đại tại điểm $x = ${variant === 1 ? -1 : -2}$.`,
          isCorrect: true,
          exp: `$f'(x) = 0 \\Leftrightarrow x = ${variant === 1 ? -1 : -2}$ hoặc $x = ${variant === 1 ? 3 : 4}$. Qua $x = ${variant === 1 ? -1 : -2}$, $f'(x)$ đổi dấu từ $+$ sang $-$ nên đó là điểm cực đại.`,
        },
        {
          text: `Hàm số nghịch biến trên khoảng $(${variant === 1 ? -1 : -2}; ${variant === 1 ? 3 : 4})$.`,
          isCorrect: false,
          exp: `Điểm $x = 1 \\notin D$ nằm trong khoảng $(${variant === 1 ? -1 : -2}; ${variant === 1 ? 3 : 4})$. Hàm số chỉ nghịch biến trên từng khoảng $(${variant === 1 ? -1 : -2}; 1)$ và $(1; ${variant === 1 ? 3 : 4})$.`,
        },
        {
          text: `Giá trị cực tiểu của hàm số bằng $${variant === 1 ? 6 : 8}$.`,
          isCorrect: true,
          exp: `Tại $x_{CT} = ${variant === 1 ? 3 : 4}$, ta có $f(${variant === 1 ? 3 : 4}) = \\frac{${variant === 1 ? 9 + 3 : 16 + 8}}{${variant === 1 ? 2 : 3}} = ${variant === 1 ? 6 : 8}$.`,
        },
      ],
      'Chú ý điểm gián đoạn $x = 1$ của hàm phân thức: không bao giờ gộp hai khoảng cách nhau bởi điểm không xác định.'
    ),
    makeTF(
      p,
      3,
      'Bài 1. Tính đơn điệu và cực trị của hàm số',
      `Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ và có đạo hàm $f'(x) = x(x + ${variant === 1 ? 2 : 4})(x - ${variant === 1 ? 2 : 3})^2$. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Hàm số $y = f(x)$ có tất cả $3$ điểm cực trị.`,
          isCorrect: false,
          exp: `Nghiệm $x = ${variant === 1 ? 2 : 3}$ là nghiệm bội chẵn nên không phải điểm cực trị. Hàm số chỉ có $2$ điểm cực trị là $x = -${variant === 1 ? 2 : 4}$ và $x = 0$.`,
        },
        {
          text: `Hàm số nghịch biến trên khoảng $(-\\${variant === 1 ? 2 : 4}; 0)$.`,
          isCorrect: true,
          exp: `Trên khoảng $(-${variant === 1 ? 2 : 4}; 0)$, ta có $x < 0$, $x + ${variant === 1 ? 2 : 4} > 0$ và $(x - ${variant === 1 ? 2 : 3})^2 > 0$ nên $f'(x) < 0$.`,
        },
        {
          text: `Hàm số đồng biến trên khoảng $(0; +\\infty)$.`,
          isCorrect: true,
          exp: `Trên $(0; +\\infty)$, $f'(x) \\ge 0$ và chỉ bằng $0$ tại điểm hữu hạn $x = ${variant === 1 ? 2 : 3}$ nên hàm số đồng biến trên $(0; +\\infty)$.`,
        },
        {
          text: `Ta luôn có $f(-${variant === 1 ? 2 : 4}) > f(0)$.`,
          isCorrect: true,
          exp: `Vì hàm số nghịch biến trên đoạn $[-${variant === 1 ? 2 : 4}; 0]$ nên $f(-${variant === 1 ? 2 : 4}) > f(0)$.`,
        },
      ],
      'Nếu $f\'(x) \\ge 0$ trên khoảng $K$ và chỉ bằng $0$ tại hữu hạn điểm thì hàm số vẫn đồng biến trên cả khoảng $K$.'
    ),
  ];

  const part3 = [
    makeSA(
      p,
      1,
      'Bài 1. Tính đơn điệu và cực trị của hàm số',
      `Tìm giá trị cực đại của hàm số $y = -x^3 + 3x^2 + ${variant === 1 ? 9 : 24}x + ${variant === 1 ? 5 : 10}$.`,
      [variant === 1 ? '32' : '90'],
      `Ta có $y' = -3x^2 + 6x + ${variant === 1 ? 9 : 24} = 0 \\Leftrightarrow x = ${variant === 1 ? -1 : -2}$ hoặc $x = ${variant === 1 ? 3 : 4}$. Vì $a = -1 < 0$ nên hàm số đạt cực đại tại $x = ${variant === 1 ? 3 : 4}$. Khi đó $y_{CĐ} = y(${variant === 1 ? 3 : 4}) = ${variant === 1 ? 32 : 90}$.`,
      'Với hàm bậc ba có $a < 0$, nghiệm lớn hơn của phương trình $y\' = 0$ là điểm cực đại.'
    ),
    makeSA(
      p,
      2,
      'Bài 1. Tính đơn điệu và cực trị của hàm số',
      `Biết đồ thị hàm số $y = x^3 - ${variant === 1 ? 6 : 3}x^2 + ${variant === 1 ? 9 : 0}x + ${variant === 1 ? 2 : 4}$ có hai điểm cực trị là $A$ và $B$. Tính độ dài đoạn thẳng $AB$ (làm tròn đến hàng phần trăm nếu lẻ, hoặc ghi số nguyên/thập phân).`,
      variant === 1 ? ['4.47', '4,47'] : ['4.47', '4,47'],
      variant === 1
        ? `Ta có $y' = 3x^2 - 12x + 9 = 0 \\Leftrightarrow x = 1 \\Rightarrow y = 6$ hoặc $x = 3 \\Rightarrow y = 2$. Vậy $A(1; 6), B(3; 2) \\Rightarrow AB = \\sqrt{(3-1)^2 + (2-6)^2} = \\sqrt{20} \\approx 4,47$.`
        : `Ta có $y' = 3x^2 - 6x = 0 \\Leftrightarrow x = 0 \\Rightarrow y = 4$ hoặc $x = 2 \\Rightarrow y = 0$. Vậy $A(0; 4), B(2; 0) \\Rightarrow AB = \\sqrt{(2-0)^2 + (0-4)^2} = \\sqrt{20} \\approx 4,47$.`,
      'Tìm tọa độ $A(x_1; y_1)$ và $B(x_2; y_2)$ rồi áp dụng công thức $AB = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$.'
    ),
    makeSA(
      p,
      3,
      'Bài 1. Tính đơn điệu và cực trị của hàm số',
      `Có bao nhiêu giá trị nguyên của tham số $m$ để hàm số $y = \\frac{1}{3}x^3 - mx^2 + (${variant === 1 ? 6 : 8}m - ${variant === 1 ? 5 : 7})x - 1$ đồng biến trên $\\mathbb{R}$?`,
      [variant === 1 ? '5' : '7'],
      `Hàm số đồng biến trên $\\mathbb{R} \\Leftrightarrow \\Delta' = m^2 - ${variant === 1 ? 6 : 8}m + ${variant === 1 ? 5 : 7} \\le 0 \\Leftrightarrow 1 \\le m \\le ${variant === 1 ? 5 : 7}$. Có tất cả $${variant === 1 ? 5 : 7}$ giá trị nguyên của $m$.`,
      'Đếm cả hai đầu mút nguyên của đoạn $[a; b]$ theo công thức $b - a + 1$.'
    ),
    makeSA(
      p,
      4,
      'Bài 1. Tính đơn điệu và cực trị của hàm số',
      `Tìm giá trị thực của tham số $m$ để hàm số $y = x^3 - 3mx^2 + 3(m^2 - 1)x - m^3$ đạt cực tiểu tại $x = ${variant === 1 ? 4 : 5}$.`,
      [variant === 1 ? '3' : '4'],
      `Ta có $y' = 3x^2 - 6mx + 3(m^2 - 1) = 3[(x - m)^2 - 1] = 0 \\Leftrightarrow x = m - 1$ hoặc $x = m + 1$. Vì $a = 1 > 0$ nên điểm cực tiểu là nghiệm lớn hơn $x_{CT} = m + 1$. Theo đề $m + 1 = ${variant === 1 ? 4 : 5} \\Leftrightarrow m = ${variant === 1 ? 3 : 4}$.`,
      'Phân tích đạo hàm thành tích để xác định trực tiếp nghiệm lớn hơn là điểm cực tiểu.'
    ),
  ];

  const part4 = [
    makeSO(
      p,
      1,
      'Bài 1. Tính đơn điệu và cực trị của hàm số',
      `Xét tính đơn điệu và tìm các cực trị của hàm số $y = x^3 - 3x^2 ${cCoef}x + ${d0}$.`,
      `Kết luận đầy đủ các khoảng đồng biến, nghịch biến và điểm cực đại, cực tiểu của hàm số.`,
      [
        {
          role: 'Tìm tập xác định và tính đạo hàm',
          content: `Tập xác định $D = \\mathbb{R}$. Đạo hàm $y' = 3x^2 - 6x ${cCoef}$.`,
        },
        {
          role: 'Tìm nghiệm của đạo hàm',
          content: `Giải phương trình $y' = 0 \\Leftrightarrow 3(x - (${r1}))(x - ${r2}) = 0 \\Leftrightarrow x = ${r1}$ hoặc $x = ${r2}$.`,
        },
        {
          role: 'Xét dấu đạo hàm và kết luận tính đơn điệu',
          content: `Ta có $y' > 0$ trên $(-\\infty; ${r1})$ và $(${r2}; +\\infty)$; $y' < 0$ trên $(${r1}; ${r2})$. Vậy hàm số đồng biến trên $(-\\infty; ${r1})$ và $(${r2}; +\\infty)$, nghịch biến trên $(${r1}; ${r2})$.`,
        },
        {
          role: 'Kết luận cực trị của hàm số',
          content: `Hàm số đạt cực đại tại $x = ${r1}$ với $y_{CĐ} = ${yCD}$ và đạt cực tiểu tại $x = ${r2}$ với $y_{CT} = ${yCT}$.`,
        },
      ],
      'Quy trình chuẩn 4 bước: Tập xác định & đạo hàm -> Giải y\' = 0 -> Xét dấu kết luận đơn điệu -> Kết luận cực trị.',
      'Bài toán rèn luyện quy trình chuẩn xét tính đơn điệu và tìm cực trị hàm đa thức bậc ba.',
      0.7
    ),
    makeSO(
      p,
      2,
      'Bài 1. Tính đơn điệu và cực trị của hàm số',
      `Tìm các khoảng đơn điệu và cực trị của hàm phân thức $y = \\frac{x^2 + ${variant === 1 ? 3 : 8}}{x - 1}$.`,
      `Xác định các khoảng đồng biến, nghịch biến và giá trị cực trị của hàm số.`,
      [
        {
          role: 'Tìm tập xác định của hàm phân thức',
          content: `Điều kiện $x - 1 \\neq 0 \\Leftrightarrow x \\neq 1$. Tập xác định $D = \\mathbb{R} \\setminus \\{1\\}$.`,
        },
        {
          role: 'Tính đạo hàm và giải phương trình đạo hàm bằng 0',
          content: `Ta có $y' = \\frac{x^2 - 2x - ${variant === 1 ? 3 : 8}}{(x - 1)^2}$. Cho $y' = 0 \\Leftrightarrow x = ${variant === 1 ? -1 : -2}$ hoặc $x = ${variant === 1 ? 3 : 4}$ (đều thuộc $D$).`,
        },
        {
          role: 'Kết luận các khoảng đơn điệu',
          content: `Hàm số đồng biến trên các khoảng $(-\\infty; ${variant === 1 ? -1 : -2})$ và $(${variant === 1 ? 3 : 4}; +\\infty)$; nghịch biến trên các khoảng $(${variant === 1 ? -1 : -2}; 1)$ và $(1; ${variant === 1 ? 3 : 4})$.`,
        },
        {
          role: 'Kết luận điểm cực đại và điểm cực tiểu',
          content: `Hàm số đạt cực đại tại $x = ${variant === 1 ? -1 : -2}$ với $y_{CĐ} = ${variant === 1 ? -2 : -4}$ và đạt cực tiểu tại $x = ${variant === 1 ? 3 : 4}$ với $y_{CT} = ${variant === 1 ? 6 : 8}$.`,
        },
      ],
      'Luôn tách khoảng nghịch biến tại điểm không xác định $x = 1$.',
      'Kỹ năng khảo sát đạo hàm hàm hữu tỉ bậc hai trên bậc nhất.',
      0.65
    ),
    makeSO(
      p,
      3,
      'Bài 1. Tính đơn điệu và cực trị của hàm số',
      `Tìm tất cả các giá trị của tham số $m$ để hàm số $y = \\frac{m x + ${variant === 1 ? 4 : 9}}{x + m}$ nghịch biến trên từng khoảng xác định.`,
      `Xác định tập hợp các giá trị của $m$ thỏa mãn yêu cầu.`,
      [
        {
          role: 'Tìm tập xác định và tính đạo hàm theo tham số m',
          content: `Tập xác định $D = \\mathbb{R} \\setminus \\{-m\\}$. Đạo hàm $y' = \\frac{m^2 - ${variant === 1 ? 4 : 9}}{(x + m)^2}, \\forall x \\neq -m$.`,
        },
        {
          role: 'Thiết lập điều kiện nghịch biến trên từng khoảng xác định',
          content: `Để hàm số nghịch biến trên từng khoảng xác định thì $y' < 0, \\forall x \\neq -m \\Leftrightarrow m^2 - ${variant === 1 ? 4 : 9} < 0$.`,
        },
        {
          role: 'Giải bất phương trình và kết luận',
          content: `Ta có $m^2 - ${variant === 1 ? 4 : 9} < 0 \\Leftrightarrow -${variant === 1 ? 2 : 3} < m < ${variant === 1 ? 2 : 3}$. Vậy $m \\in (-${variant === 1 ? 2 : 3}; ${variant === 1 ? 2 : 3})$.`,
        },
      ],
      'Với hàm bậc nhất trên bậc nhất, đạo hàm không được bằng 0 (nếu bằng 0 hàm số suy biến thành hàm hằng).',
      'Phân biệt điều kiện đơn điệu của hàm phân thức bậc nhất/bậc nhất ($ad - bc < 0$, không có dấu bằng).',
      0.65
    ),
  ];

  return makeLessonExam(
    `bai-01-de-${variant}`,
    `Bài 1 - Đề ôn số ${variant}`,
    `Bài 1. Tính đơn điệu và cực trị của hàm số (SGK Toán 12 Tập 1)`,
    `Đề ôn số ${variant} - Bài 1: Tính đơn điệu và cực trị của hàm số (22 câu hỏi chuẩn cấu trúc 4 phần, số liệu độc lập).`,
    part1,
    part2,
    part3,
    part4
  );
}

// BÀI 2. GIÁ TRỊ LỚN NHẤT VÀ GIÁ TRỊ NHỎ NHẤT CỦA HÀM SỐ (Đề ôn số 1 & Đề ôn số 2)
function buildBai2Exam(variant: 1 | 2): ExamSet {
  const p = variant === 1 ? 'b2-d1' : 'b2-d2';
  // Hàm bậc 3 trên đoạn [0; 3]: y = x^3 - 3x^2 + c0 (đạt min tại x = 2, max tại x = 0 và x = 3)
  const c0 = variant === 1 ? 5 : 8;
  // y(0) = c0, y(2) = 8 - 12 + c0 = c0 - 4, y(3) = 27 - 27 + c0 = c0
  const minVal1 = c0 - 4;
  const maxVal1 = c0;

  const k = variant === 1 ? 4 : 9; // y = x + k/x trên (0; +inf), min = 2*sqrt(k) tại x = sqrt(k)
  const sqrtK = variant === 1 ? 2 : 3;
  const minCauchy = 2 * sqrtK;

  const part1 = [
    makeMC(
      p,
      1,
      'Bài 2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số',
      `Giá trị nhỏ nhất của hàm số $y = x^3 - 3x^2 + ${c0}$ trên đoạn $[0; 3]$ bằng:`,
      [`$${minVal1}$`, `$${maxVal1}$`, `$${c0 - 2}$`, `$2$`],
      'A',
      `Ta có $y' = 3x^2 - 6x = 0 \\Leftrightarrow x = 0 \\in [0; 3]$ hoặc $x = 2 \\in [0; 3]$. Tính $y(0) = ${c0}$, $y(2) = ${minVal1}$, $y(3) = ${c0}$. Vậy $\\min_{[0; 3]} y = ${minVal1}$.`,
      'Để tìm GTLN, GTNN trên đoạn $[a; b]$, chỉ cần tính giá trị hàm số tại các nghiệm của $y\' = 0$ thuộc $(a; b)$ và tại hai đầu mút $a, b$.'
    ),
    makeMC(
      p,
      2,
      'Bài 2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số',
      `Giá trị lớn nhất của hàm số $y = x^3 - 3x^2 + ${c0}$ trên đoạn $[1; 4]$ bằng:`,
      [
        `$${16 + c0}$`,
        `$${c0}$`,
        `$${minVal1}$`,
        `$${c0 - 2}$`,
      ],
      'A',
      `Trên đoạn $[1; 4]$, $y' = 3x^2 - 6x = 0 \\Leftrightarrow x = 2 \\in [1; 4]$. Ta có $y(1) = ${c0 - 2}$, $y(2) = ${minVal1}$, $y(4) = 64 - 48 + ${c0} = ${16 + c0}$. Vậy $\\max_{[1; 4]} y = ${16 + c0}$.`,
      'Loại nghiệm $x = 0$ vì $0 \\notin [1; 4]$.'
    ),
    makeMC(
      p,
      3,
      'Bài 2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số',
      `Trên khoảng $(0; +\\infty)$, hàm số $y = x + \\frac{${k}}{x}$ đạt giá trị nhỏ nhất bằng:`,
      [`$${minCauchy}$`, `$${sqrtK}$`, `$${k + 1}$`, `$${2 * k}$`],
      'A',
      `Với $x > 0$, ta có $y' = 1 - \\frac{${k}}{x^2} = 0 \\Leftrightarrow x = ${sqrtK}$. Lập bảng biến thiên trên $(0; +\\infty)$, hàm số đạt GTNN tại $x = ${sqrtK}$ và $\\min_{(0; +\\infty)} y = y(${sqrtK}) = ${minCauchy}$.`,
      'Trên khoảng mở $(0; +\\infty)$, cần lập bảng biến thiên (hoặc dùng BĐT AM-GM cho $x > 0$) để kết luận GTNN.'
    ),
    makeMC(
      p,
      4,
      'Bài 2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số',
      `Giá trị lớn nhất của hàm số $y = \\frac{x + ${variant === 1 ? 2 : 3}}{x - 1}$ trên đoạn $[2; ${variant === 1 ? 4 : 5}]$ bằng:`,
      [
        `$${variant === 1 ? 4 : 5}$`,
        `$2$`,
        `$${variant === 1 ? 3 : 4}$`,
        `$1$`,
      ],
      'A',
      `Hàm số có $y' = \\frac{-(${variant === 1 ? 3 : 4})}{(x-1)^2} < 0, \\forall x \\in [2; ${variant === 1 ? 4 : 5}]$. Do hàm số nghịch biến trên $[2; ${variant === 1 ? 4 : 5}]$ nên $\\max y = y(2) = ${variant === 1 ? 4 : 5}$.`,
      'Hàm phân thức bậc nhất/bậc nhất luôn đơn điệu trên mọi đoạn không chứa nghiệm mẫu, nên GTLN và GTNN đạt tại hai đầu mút.'
    ),
    makeMC(
      p,
      5,
      'Bài 2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số',
      `Tìm giá trị lớn nhất của hàm số $y = -x^4 + ${variant === 1 ? 4 : 8}x^2 + ${variant === 1 ? 1 : 3}$ trên đoạn $[-1; ${variant === 1 ? 2 : 3}]$.`,
      [
        `$${variant === 1 ? 5 : 19}$`,
        `$${variant === 1 ? 1 : 3}$`,
        `$${variant === 1 ? 4 : 10}$`,
        `$${variant === 1 ? -11 : -6}$`,
      ],
      'A',
      `Ta có $y' = -4x^3 + ${variant === 1 ? 8 : 16}x = 0 \\Leftrightarrow x = 0$ hoặc $x = \\pm ${variant === 1 ? '\\sqrt{2}' : '2'}$. Trên đoạn $[-1; ${variant === 1 ? 2 : 3}]$, giá trị lớn nhất đạt tại $x = ${variant === 1 ? '\\sqrt{2}' : '2'}$ với $\\max y = ${variant === 1 ? 5 : 19}$.`,
      'Kiểm tra kỹ các điểm cực trị nằm trong đoạn đang xét.'
    ),
    makeMC(
      p,
      6,
      'Bài 2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số',
      `Giá trị lớn nhất của hàm số $y = \\sqrt{${variant === 1 ? 16 : 36} - x^2}$ trên tập xác định của nó bằng:`,
      [
        `$${variant === 1 ? 4 : 6}$`,
        `$${variant === 1 ? 16 : 36}$`,
        `$0$`,
        `$${variant === 1 ? 8 : 12}$`,
      ],
      'A',
      `Tập xác định $D = [-${variant === 1 ? 4 : 6}; ${variant === 1 ? 4 : 6}]$. Vì $0 \\le ${variant === 1 ? 16 : 36} - x^2 \\le ${variant === 1 ? 16 : 36}$ nên $0 \\le y \\le ${variant === 1 ? 4 : 6}$. Đẳng thức xảy ra khi $x = 0$.`,
      'Có thể dùng đánh giá $x^2 \\ge 0$ hoặc tính đạo hàm để tìm nhanh GTLN.'
    ),
    makeMC(
      p,
      7,
      'Bài 2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số',
      `Cho hàm số $y = x\\sqrt{${variant === 1 ? 8 : 18} - x^2}$ với $x \\in [-${variant === 1 ? '2\\sqrt{2}' : '3\\sqrt{2}'}; ${variant === 1 ? '2\\sqrt{2}' : '3\\sqrt{2}'}]$. Tổng giá trị lớn nhất và giá trị nhỏ nhất của hàm số bằng:`,
      ['$0$', `$${variant === 1 ? 8 : 18}$`, `$${variant === 1 ? 4 : 9}$`, `$${variant === 1 ? -4 : -9}$`],
      'A',
      `Hàm số $f(x) = x\\sqrt{${variant === 1 ? 8 : 18} - x^2}$ là hàm số lẻ trên tập xác định đối xứng nên $\\max f(x) + \\min f(x) = ${variant === 1 ? 4 : 9} + (${variant === 1 ? -4 : -9}) = 0$.`,
      'Với hàm số lẻ liên tục trên đoạn đối xứng $[-a; a]$, tổng GTLN và GTNN luôn bằng $0$.'
    ),
    makeMC(
      p,
      8,
      'Bài 2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số',
      `Hàm số $y = (x - ${variant === 1 ? 2 : 3})e^x$ đạt giá trị nhỏ nhất trên đoạn $[0; ${variant === 1 ? 3 : 4}]$ tại điểm:`,
      [
        `$x = ${variant === 1 ? 1 : 2}$`,
        `$x = 0$`,
        `$x = ${variant === 1 ? 2 : 3}$`,
        `$x = ${variant === 1 ? 3 : 4}$`,
      ],
      'A',
      `Ta có $y' = (x - ${variant === 1 ? 1 : 2})e^x = 0 \\Leftrightarrow x = ${variant === 1 ? 1 : 2} \\in [0; ${variant === 1 ? 3 : 4}]$. Vì $y'$ đổi dấu từ âm sang dương qua $x = ${variant === 1 ? 1 : 2}$ nên hàm số đạt GTNN tại $x = ${variant === 1 ? 1 : 2}$.`,
      'Chú ý đề hỏi đạt GTNN "tại điểm $x$ nào" chứ không hỏi giá trị nhỏ nhất.'
    ),
    makeMC(
      p,
      9,
      'Bài 2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số',
      `Giá trị nhỏ nhất của hàm số $y = x - \\ln x$ trên đoạn $[\\frac{1}{e}; e]$ bằng:`,
      ['$1$', `$e - 1$`, `$\\frac{1}{e} + 1$`, '$0$'],
      'A',
      `Trên đoạn $[1/e; e]$, ta có $y' = 1 - \\frac{1}{x} = 0 \\Leftrightarrow x = 1 \\in [1/e; e]$. Khi đó $y(1) = 1 - \\ln 1 = 1$ là giá trị nhỏ nhất.`,
      'Bất đẳng thức quen thuộc: $\\ln x \\le x - 1, \\forall x > 0$, dấu bằng xảy ra khi $x = 1$.'
    ),
    makeMC(
      p,
      10,
      'Bài 2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số',
      `Một vật chuyển động theo quy luật $s(t) = -t^3 + ${variant === 1 ? 6 : 9}t^2 + ${variant === 1 ? 15 : 24}t$ (với $t$ tính bằng giây, $s$ tính bằng mét). Vận tốc lớn nhất của vật đạt được trong khoảng thời gian từ $t = 0$ đến $t = ${variant === 1 ? 4 : 5}$ giây là:`,
      [
        `$${variant === 1 ? 27 : 51}\\text{ m/s}$`,
        `$${variant === 1 ? 15 : 24}\\text{ m/s}$`,
        `$${variant === 1 ? 24 : 48}\\text{ m/s}$`,
        `$${variant === 1 ? 2 : 3}\\text{ m/s}$`,
      ],
      'A',
      `Vận tốc tức thời là $v(t) = s'(t) = -3t^2 + ${variant === 1 ? 12 : 18}t + ${variant === 1 ? 15 : 24} = -3(t - ${variant === 1 ? 2 : 3})^2 + ${variant === 1 ? 27 : 51} \\le ${variant === 1 ? 27 : 51}$. Đẳng thức xảy ra tại $t = ${variant === 1 ? 2 : 3}$ giây.`,
      'Vận tốc tức thời là đạo hàm bậc nhất của quãng đường: $v(t) = s\'(t)$.'
    ),
    makeMC(
      p,
      11,
      'Bài 2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số',
      `Cho hai số thực dương $x, y$ thỏa mãn $x + y = ${variant === 1 ? 10 : 12}$. Giá trị lớn nhất của biểu thức $P = x^2 y$ bằng:`,
      [
        `$${variant === 1 ? '\\frac{4000}{27}' : '256'}$`,
        `$${variant === 1 ? '125' : '216'}$`,
        `$${variant === 1 ? '100' : '144'}$`,
        `$${variant === 1 ? '150' : '240'}$`,
      ],
      'A',
      `Thay $y = ${variant === 1 ? 10 : 12} - x$ với $x \\in (0; ${variant === 1 ? 10 : 12})$, xét $f(x) = ${variant === 1 ? 10 : 12}x^2 - x^3$. Ta có $f'(x) = ${variant === 1 ? 20 : 24}x - 3x^2 = 0 \\Leftrightarrow x = ${variant === 1 ? '20/3' : '8'}$. Khi đó $\\max P = ${variant === 1 ? '\\frac{4000}{27}' : '8^2 \\cdot 4 = 256'}$.`,
      'Khử một biến từ giả thiết rồi khảo sát hàm một biến trên khoảng xác định.'
    ),
    makeMC(
      p,
      12,
      'Bài 2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số',
      `Tìm tham số $m$ để giá trị lớn nhất của hàm số $y = \\frac{x + m}{x + 1}$ trên đoạn $[1; 2]$ bằng $${variant === 1 ? 3 : 4}$.`,
      [
        `$m = ${variant === 1 ? 5 : 7}$`,
        `$m = ${variant === 1 ? 4 : 6}$`,
        `$m = ${variant === 1 ? 2 : 3}$`,
        `$m = ${variant === 1 ? 1 : 2}$`,
      ],
      'A',
      `Giá trị tại hai đầu mút là $y(1) = \\frac{m+1}{2}$ và $y(2) = \\frac{m+2}{3}$. Khi $m = ${variant === 1 ? 5 : 7} > 1$, hàm số nghịch biến trên $[1; 2]$ nên $\\max_{[1; 2]} y = y(1) = \\frac{${variant === 1 ? 5 : 7} + 1}{2} = ${variant === 1 ? 3 : 4}$ (thỏa mãn).`,
      'Với hàm $y = (x+m)/(x+1)$ trên đoạn $[1; 2]$, GTLN luôn đạt tại một trong hai đầu mút $x = 1$ hoặc $x = 2$.'
    ),
  ];

  const part2 = [
    makeTF(
      p,
      1,
      'Bài 2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số',
      `Cho hàm số $f(x) = x^3 - 3x^2 + ${c0}$ xác định và liên tục trên $\\mathbb{R}$. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Trên đoạn $[0; 3]$, hàm số có giá trị nhỏ nhất bằng $${minVal1}$.`,
          isCorrect: true,
          exp: `Ta có $f(0) = ${c0}, f(2) = ${minVal1}, f(3) = ${c0}$ nên $\\min_{[0; 3]} f(x) = ${minVal1}$.`,
        },
        {
          text: `Trên đoạn $[0; 3]$, hàm số đạt giá trị lớn nhất tại duy nhất một điểm $x = 3$.`,
          isCorrect: false,
          exp: `Vì $f(0) = f(3) = ${c0}$ nên trên đoạn $[0; 3]$ hàm số đạt GTLN tại hai điểm là $x = 0$ và $x = 3$.`,
        },
        {
          text: `Trên khoảng $(0; +\\infty)$, hàm số không có giá trị lớn nhất.`,
          isCorrect: true,
          exp: `Vì $\\lim_{x \\to +\\infty} f(x) = +\\infty$ nên hàm số không có giá trị lớn nhất trên $(0; +\\infty)$.`,
        },
        {
          text: `Trên khoảng $(0; +\\infty)$, giá trị nhỏ nhất của hàm số bằng $${minVal1}$.`,
          isCorrect: true,
          exp: `Trên $(0; +\\infty)$, hàm số giảm trên $(0; 2)$ và tăng trên $(2; +\\infty)$ nên $\\min_{(0; +\\infty)} f(x) = f(2) = ${minVal1}$.`,
        },
      ],
      'Một hàm số có thể đạt GTLN hoặc GTNN tại nhiều điểm khác nhau trên cùng một đoạn.'
    ),
    makeTF(
      p,
      2,
      'Bài 2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số',
      `Cho hàm số $g(x) = x + \\frac{${k}}{x - 1}$ xét trên khoảng $(1; +\\infty)$. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Đạo hàm của hàm số là $g'(x) = 1 - \\frac{${k}}{(x - 1)^2}$ với mọi $x > 1$.`,
          isCorrect: true,
          exp: `Tính đạo hàm trực tiếp: $(x)' + (${k}(x-1)^{-1})' = 1 - \\frac{${k}}{(x-1)^2}$.`,
        },
        {
          text: `Phương trình $g'(x) = 0$ có nghiệm duy nhất trên khoảng $(1; +\\infty)$ là $x = ${sqrtK + 1}$.`,
          isCorrect: true,
          exp: `$g'(x) = 0 \\Leftrightarrow (x - 1)^2 = ${k} \\Leftrightarrow x - 1 = ${sqrtK}$ (do $x > 1$) $\\Leftrightarrow x = ${sqrtK + 1}$.`,
        },
        {
          text: `Giá trị nhỏ nhất của hàm số $g(x)$ trên khoảng $(1; +\\infty)$ bằng $${minCauchy + 1}$.`,
          isCorrect: true,
          exp: `Từ bảng biến thiên trên $(1; +\\infty)$, ta có $\\min_{(1; +\\infty)} g(x) = g(${sqrtK + 1}) = ${sqrtK + 1} + \\frac{${k}}{${sqrtK}} = ${minCauchy + 1}$.`,
        },
        {
          text: `Trên đoạn $[2; ${sqrtK + 2}]$, giá trị lớn nhất của hàm số đạt tại $x = ${sqrtK + 1}$.`,
          isCorrect: false,
          exp: `$x = ${sqrtK + 1}$ là điểm cực tiểu nên là nơi hàm số đạt GTNN, còn GTLN trên đoạn $[2; ${sqrtK + 2}]$ đạt tại đầu mút.`,
        },
      ],
      'Trên khoảng $(a; +\\infty)$, nếu hàm số chỉ có duy nhất một cực trị là cực tiểu thì giá trị cực tiểu chính là GTNN.'
    ),
    makeTF(
      p,
      3,
      'Bài 2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số',
      `Một xưởng sản xuất mỗi ngày làm ra $x$ sản phẩm ($1 \\le x \\le ${variant === 1 ? 20 : 30}$). Tổng lợi nhuận thu được (đơn vị: triệu đồng) được mô hình hóa bởi hàm số $L(x) = -x^2 + ${variant === 1 ? 24 : 36}x - ${variant === 1 ? 44 : 80}$. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Đạo hàm của hàm lợi nhuận là $L'(x) = -2x + ${variant === 1 ? 24 : 36}$.`,
          isCorrect: true,
          exp: `Tính đạo hàm của tam thức bậc hai: $L'(x) = -2x + ${variant === 1 ? 24 : 36}$.`,
        },
        {
          text: `Khi sản xuất $x = ${variant === 1 ? 12 : 18}$ sản phẩm mỗi ngày thì xưởng đạt lợi nhuận lớn nhất.`,
          isCorrect: true,
          exp: `$L'(x) = 0 \\Leftrightarrow x = ${variant === 1 ? 12 : 18}$ thuộc đoạn $[1; ${variant === 1 ? 20 : 30}]$ và $a = -1 < 0$ nên $x = ${variant === 1 ? 12 : 18}$ là điểm đạt GTLN.`,
        },
        {
          text: `Lợi nhuận lớn nhất mỗi ngày của xưởng là $${variant === 1 ? 100 : 244}$ triệu đồng.`,
          isCorrect: true,
          exp: `Ta có $L(${variant === 1 ? 12 : 18}) = -(${variant === 1 ? 12 : 18})^2 + ${variant === 1 ? 24 : 36}\\cdot ${variant === 1 ? 12 : 18} - ${variant === 1 ? 44 : 80} = ${variant === 1 ? 100 : 244}$ (triệu đồng).`,
        },
        {
          text: `Nếu xưởng sản xuất tối đa $${variant === 1 ? 20 : 30}$ sản phẩm mỗi ngày thì lợi nhuận cao hơn khi sản xuất $${variant === 1 ? 12 : 18}$ sản phẩm.`,
          isCorrect: false,
          exp: `Vì hàm số nghịch biến trên $(${variant === 1 ? 12 : 18}; ${variant === 1 ? 20 : 30}]$ nên $L(${variant === 1 ? 20 : 30}) < L(${variant === 1 ? 12 : 18})$.`,
        },
      ],
      'Bài toán tối ưu lợi nhuận quy về tìm GTLN của hàm lợi nhuận $L(x)$ trên miền điều kiện của $x$.'
    ),
  ];

  const part3 = [
    makeSA(
      p,
      1,
      'Bài 2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số',
      `Tìm giá trị lớn nhất của hàm số $y = -x^3 + 3x + ${variant === 1 ? 10 : 15}$ trên đoạn $[0; 2]$.`,
      [variant === 1 ? '12' : '17'],
      `Trên đoạn $[0; 2]$, $y' = -3x^2 + 3 = 0 \\Leftrightarrow x = 1 \\in [0; 2]$. Ta có $y(0) = ${variant === 1 ? 10 : 15}$, $y(1) = ${variant === 1 ? 12 : 17}$, $y(2) = ${variant === 1 ? 8 : 13}$. Vậy $\\max_{[0; 2]} y = ${variant === 1 ? 12 : 17}$.`,
      'So sánh giá trị tại $x = 0, x = 1, x = 2$.'
    ),
    makeSA(
      p,
      2,
      'Bài 2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số',
      `Gọi $M$ và $m$ lần lượt là giá trị lớn nhất và giá trị nhỏ nhất của hàm số $y = \\frac{2x - ${variant === 1 ? 1 : 3}}{x + 1}$ trên đoạn $[0; ${variant === 1 ? 2 : 3}]$. Tính giá trị của $M - m$.`,
      [variant === 1 ? '2' : '2.5', variant === 1 ? '2' : '2,5'],
      variant === 1
        ? `Hàm số đồng biến trên $[0; 2]$ vì $y' = \\frac{3}{(x+1)^2} > 0$. Do đó $m = y(0) = -1$ và $M = y(2) = 1$. Suy ra $M - m = 1 - (-1) = 2$.`
        : `Hàm số đồng biến trên $[0; 3]$ vì $y' = \\frac{5}{(x+1)^2} > 0$. Do đó $m = y(0) = -3$ và $M = y(3) = \\frac{3}{4} = 0,75$? Kiểm tra lại: $y(3) = (6-3)/4 = 0,75 \\Rightarrow M - m = 3,75$? Để chẵn đẹp: với $y = \\frac{2x-3}{x+1}$ trên $[0; 1]$ thì $m = -3, M = -0,5 \\Rightarrow M - m = 2,5$. Ta tính trên $[0; 3]$: tại $x=0 \\Rightarrow y=-3$, tại $x=3 \\Rightarrow y=3/4=0,75$. Để kết quả là $2,5$, xét trên đoạn $[0; 1]$ hoặc dùng công thức dưới đây.`,
      'Hàm phân thức bậc nhất trên bậc nhất đạt GTLN và GTNN tại hai đầu mút của đoạn.'
    ),
    makeSA(
      p,
      3,
      'Bài 2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số',
      `Tìm giá trị nhỏ nhất của hàm số $y = x + \\frac{${variant === 1 ? 25 : 36}}{x}$ trên khoảng $(0; +\\infty)$.`,
      [variant === 1 ? '10' : '12'],
      `Với $x > 0$, ta có $y' = 1 - \\frac{${variant === 1 ? 25 : 36}}{x^2} = 0 \\Leftrightarrow x = ${variant === 1 ? 5 : 6}$. Giá trị nhỏ nhất trên $(0; +\\infty)$ là $y(${variant === 1 ? 5 : 6}) = ${variant === 1 ? 10 : 12}$.`,
      'Áp dụng đạo hàm hoặc BĐT Cauchy cho hai số dương $x$ và $a^2/x$.'
    ),
    makeSA(
      p,
      4,
      'Bài 2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số',
      `Một tấm bìa hình vuông cạnh $${variant === 1 ? 12 : 18}\\text{ cm}$. Người ta cắt bỏ ở bốn góc bốn hình vuông bằng nhau có cạnh $x\\text{ (cm)}$ rồi gấp lên thành một hình hộp chữ nhật không nắp. Tìm $x$ để thể tích hình hộp lớn nhất.`,
      [variant === 1 ? '2' : '3'],
      `Cạnh đáy hộp là $${variant === 1 ? 12 : 18} - 2x$ với $0 < x < ${variant === 1 ? 6 : 9}$. Thể tích $V(x) = x(${variant === 1 ? 12 : 18} - 2x)^2$. Ta có $V'(x) = (${variant === 1 ? 12 : 18} - 2x)(${variant === 1 ? 12 : 18} - 6x) = 0 \\Leftrightarrow x = ${variant === 1 ? 2 : 3}\\text{ cm}$.`,
      'Với tấm bìa hình vuông cạnh $a$, cắt 4 góc hình vuông cạnh $x$ thì thể tích hộp lớn nhất khi $x = a/6$.'
    ),
  ];

  // Fix câu 2 phần III của variant 2 để đề bài và đáp án khớp tuyệt đối:
  if (variant === 2) {
    part3[1] = makeSA(
      p,
      2,
      'Bài 2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số',
      `Gọi $M$ và $m$ lần lượt là giá trị lớn nhất và giá trị nhỏ nhất của hàm số $y = \\frac{3x - 1}{x + 1}$ trên đoạn $[0; 3]$. Tính giá trị của $M - m$.`,
      ['3'],
      `Ta có $y' = \\frac{4}{(x+1)^2} > 0, \\forall x \\in [0; 3]$. Do đó $m = y(0) = -1$ và $M = y(3) = \\frac{8}{4} = 2$. Suy ra $M - m = 2 - (-1) = 3$.`,
      'Hàm phân thức bậc nhất trên bậc nhất đạt GTLN và GTNN tại hai đầu mút của đoạn.'
    );
  }

  const part4 = [
    makeSO(
      p,
      1,
      'Bài 2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số',
      `Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số $y = x^3 - 3x^2 + ${c0}$ trên đoạn $[0; 3]$.`,
      `Xác định chính xác $\\max_{[0; 3]} y$ và $\\min_{[0; 3]} y$.`,
      [
        {
          role: 'Tính đạo hàm và tìm các điểm tới hạn trên khoảng (0; 3)',
          content: `Hàm số liên tục trên $[0; 3]$. Ta có $y' = 3x^2 - 6x = 0 \\Leftrightarrow x = 0$ hoặc $x = 2 \\in (0; 3)$.`,
        },
        {
          role: 'Tính giá trị của hàm số tại các điểm tới hạn và hai đầu mút',
          content: `Ta có $y(0) = ${c0}$, $y(2) = 2^3 - 3\\cdot 2^2 + ${c0} = ${minVal1}$ và $y(3) = 3^3 - 3\\cdot 3^2 + ${c0} = ${c0}$.`,
        },
        {
          role: 'So sánh và kết luận GTLN, GTNN',
          content: `Vậy $\\max_{[0; 3]} y = ${maxVal1}$ (đạt tại $x = 0$ và $x = 3$) và $\\min_{[0; 3]} y = ${minVal1}$ (đạt tại $x = 2$).`,
        },
      ],
      'Quy tắc tìm GTLN-GTNN trên đoạn $[a; b]$ không cần lập bảng biến thiên.',
      'Rèn luyện thuật toán tìm GTLN-GTNN trên một đoạn đóng.',
      0.7
    ),
    makeSO(
      p,
      2,
      'Bài 2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số',
      `Tìm giá trị nhỏ nhất của hàm số $y = x + \\frac{${k}}{x - 1}$ trên khoảng $(1; +\\infty)$.`,
      `Chứng minh hàm số đạt giá trị nhỏ nhất bằng $${minCauchy + 1}$ tại $x = ${sqrtK + 1}$.`,
      [
        {
          role: 'Tính đạo hàm trên khoảng (1; +∞)',
          content: `Với mọi $x \\in (1; +\\infty)$, ta có $y' = 1 - \\frac{${k}}{(x - 1)^2} = \\frac{(x - 1)^2 - ${k}}{(x - 1)^2}$.`,
        },
        {
          role: 'Giải phương trình y\' = 0 trên khoảng (1; +∞)',
          content: `Cho $y' = 0 \\Leftrightarrow (x - 1)^2 = ${k} \\Leftrightarrow x = ${sqrtK + 1}$ (vì $x > 1$).`,
        },
        {
          role: 'Xét dấu đạo hàm và kết luận GTNN',
          content: `Trên $(1; ${sqrtK + 1})$ ta có $y' < 0$, trên $(${sqrtK + 1}; +\\infty)$ ta có $y' > 0$. Do đó $\\min_{(1; +\\infty)} y = y(${sqrtK + 1}) = ${minCauchy + 1}$.`,
        },
      ],
      'Trên khoảng mở, bắt buộc phải xét chiều biến thiên để khẳng định điểm cực tiểu là điểm đạt GTNN toàn cục.',
      'Kỹ năng tìm cực trị toàn cục trên khoảng không bị chặn.',
      0.65
    ),
    makeSO(
      p,
      3,
      'Bài 2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số',
      `Trong tất cả các hình chữ nhật có cùng chu vi bằng $${variant === 1 ? 40 : 60}\\text{ cm}$, hãy tìm hình chữ nhật có diện tích lớn nhất.`,
      `Chứng minh diện tích lớn nhất khi hình chữ nhật là hình vuông cạnh $${variant === 1 ? 10 : 15}\\text{ cm}$.`,
      [
        {
          role: 'Gọi ẩn và biểu diễn diện tích theo một biến',
          content: `Gọi một cạnh của hình chữ nhật là $x\\text{ (cm)}$ với $0 < x < ${variant === 1 ? 20 : 30}$, cạnh còn lại là $${variant === 1 ? 20 : 30} - x\\text{ (cm)}$. Diện tích là $S(x) = x(${variant === 1 ? 20 : 30} - x) = -x^2 + ${variant === 1 ? 20 : 30}x$.`,
        },
        {
          role: 'Tính đạo hàm và tìm điểm dừng',
          content: `Ta có $S'(x) = -2x + ${variant === 1 ? 20 : 30} = 0 \\Leftrightarrow x = ${variant === 1 ? 10 : 15} \\in (0; ${variant === 1 ? 20 : 30})$.`,
        },
        {
          role: 'Kết luận diện tích lớn nhất',
          content: `Vì $S(x)$ đạt cực đại duy nhất tại $x = ${variant === 1 ? 10 : 15}$ nên $\\max S = S(${variant === 1 ? 10 : 15}) = ${variant === 1 ? 100 : 225}\\text{ cm}^2$ khi hai cạnh bằng $${variant === 1 ? 10 : 15}\\text{ cm}$.`,
        },
      ],
      'Thiết lập hàm mục tiêu một biến kèm điều kiện xác định của biến số thực tế.',
      'Bài toán tối ưu hình học cơ bản bằng công cụ đạo hàm.',
      0.65
    ),
  ];

  return makeLessonExam(
    `bai-02-de-${variant}`,
    `Bài 2 - Đề ôn số ${variant}`,
    `Bài 2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số (SGK Toán 12 Tập 1)`,
    `Đề ôn số ${variant} - Bài 2: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số (22 câu hỏi chuẩn cấu trúc 4 phần).`,
    part1,
    part2,
    part3,
    part4
  );
}

// BÀI 3. ĐƯỜNG TIỆM CẬN CỦA ĐỒ THỊ HÀM SỐ (Đề ôn số 1 & Đề ôn số 2)
function buildBai3Exam(variant: 1 | 2): ExamSet {
  const p = variant === 1 ? 'b3-d1' : 'b3-d2';
  const a1 = variant === 1 ? 3 : 4;
  const x0 = variant === 1 ? 2 : 3;
  // y = (a1*x - 1)/(x - x0) => TCN y = a1, TCĐ x = x0
  // Tiệm cận xiên: y = (2x^2 + bx + c)/(x - 1) = 2x + b0 + r/(x - 1)
  const b0 = variant === 1 ? 3 : 5;
  // (2x + b0)(x - 1) + 4 = 2x^2 + (b0 - 2)x + 4 - b0
  const midCoef = b0 - 2; // v1: 1, v2: 3
  const constTerm = 4 - b0; // v1: 1, v2: -1

  const part1 = [
    makeMC(
      p,
      1,
      'Bài 3. Đường tiệm cận của đồ thị hàm số',
      `Tiệm cận ngang của đồ thị hàm số $y = \\frac{${a1}x - 1}{x - ${x0}}$ là đường thẳng có phương trình:`,
      [`$y = ${a1}$`, `$x = ${x0}$`, `$y = ${x0}$`, `$y = -\\frac{1}{${x0}}$`],
      'A',
      `Ta có $\\lim_{x \\to \\pm\\infty} \\frac{${a1}x - 1}{x - ${x0}} = ${a1}$ nên đường thẳng $y = ${a1}$ là tiệm cận ngang của đồ thị hàm số.`,
      'Với hàm $y = \\frac{ax+b}{cx+d}$ ($c \\neq 0$), tiệm cận ngang là $y = \\frac{a}{c}$.'
    ),
    makeMC(
      p,
      2,
      'Bài 3. Đường tiệm cận của đồ thị hàm số',
      `Tiệm cận đứng của đồ thị hàm số $y = \\frac{${a1}x - 1}{x - ${x0}}$ là đường thẳng có phương trình:`,
      [`$x = ${x0}$`, `$y = ${a1}$`, `$x = -${x0}$`, `$x = \\frac{1}{${a1}}$`],
      'A',
      `Ta có $\\lim_{x \\to ${x0}^+} y = +\\infty$ và $\\lim_{x \\to ${x0}^-} y = -\\infty$ nên đường thẳng $x = ${x0}$ là tiệm cận đứng.`,
      'Với hàm phân thức tối giản bậc nhất/bậc nhất, tiệm cận đứng là nghiệm của mẫu số $cx + d = 0$.'
    ),
    makeMC(
      p,
      3,
      'Bài 3. Đường tiệm cận của đồ thị hàm số',
      `Đồ thị hàm số $y = \\frac{2x^2 + ${midCoef === 1 ? '' : midCoef}x ${constTerm >= 0 ? `+ ${constTerm}` : constTerm}}{x - 1}$ có đường tiệm cận xiên là:`,
      [
        `$y = 2x + ${b0}$`,
        `$y = 2x - ${b0}$`,
        `$y = x + ${b0}$`,
        `$y = 2x + ${midCoef}$`,
      ],
      'A',
      `Chia đa thức: $y = 2x + ${b0} + \\frac{4}{x - 1}$. Vì $\\lim_{x \\to \\pm\\infty} [y - (2x + ${b0})] = \\lim_{x \\to \\pm\\infty} \\frac{4}{x - 1} = 0$ nên $y = 2x + ${b0}$ là tiệm cận xiên.`,
      'Chia tử cho mẫu để tách phần nguyên bậc nhất $y = ax + b$, đó chính là tiệm cận xiên.'
    ),
    makeMC(
      p,
      4,
      'Bài 3. Đường tiệm cận của đồ thị hàm số',
      `Tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y = \\frac{x + ${variant === 1 ? 5 : 7}}{x^2 - ${variant === 1 ? 4 : 9}}$ là:`,
      ['$3$', '$2$', '$1$', '$4$'],
      'A',
      `Ta có $\\lim_{x \\to \\pm\\infty} y = 0 \\Rightarrow$ có $1$ TCN là $y = 0$. Mẫu số $x^2 - ${variant === 1 ? 4 : 9} = 0 \\Leftrightarrow x = \\pm ${variant === 1 ? 2 : 3}$ (không trùng nghiệm tử) $\\Rightarrow$ có $2$ TCĐ. Tổng cộng có $3$ đường tiệm cận.`,
      'Khi bậc tử nhỏ hơn bậc mẫu, đồ thị luôn có tiệm cận ngang $y = 0$.'
    ),
    makeMC(
      p,
      5,
      'Bài 3. Đường tiệm cận của đồ thị hàm số',
      `Số đường tiệm cận đứng của đồ thị hàm số $y = \\frac{x - ${variant === 1 ? 2 : 3}}{x^2 - ${variant === 1 ? 4 : 9}}$ là:`,
      ['$1$', '$2$', '$0$', '$3$'],
      'A',
      `Rút gọn với $x \\neq \\pm ${variant === 1 ? 2 : 3}$: $y = \\frac{1}{x + ${variant === 1 ? 2 : 3}}$. Tại $x = ${variant === 1 ? 2 : 3}$ giới hạn hữu hạn bằng $\\frac{1}{${variant === 1 ? 4 : 6}}$ nên không là TCĐ. Chỉ có $1$ TCĐ là $x = -${variant === 1 ? 2 : 3}$.`,
      'Nếu nghiệm của mẫu cũng là nghiệm của tử với bội lớn hơn hoặc bằng ở mẫu thì đường thẳng đó không phải là tiệm cận đứng.'
    ),
    makeMC(
      p,
      6,
      'Bài 3. Đường tiệm cận của đồ thị hàm số',
      `Giao điểm $I$ của hai đường tiệm cận của đồ thị hàm số $y = \\frac{${variant === 1 ? 5 : 6}x + 1}{x + ${variant === 1 ? 2 : 4}}$ có tọa độ là:`,
      [
        `$I(-${variant === 1 ? 2 : 4}; ${variant === 1 ? 5 : 6})$`,
        `$I(${variant === 1 ? 2 : 4}; ${variant === 1 ? 5 : 6})$`,
        `$I(${variant === 1 ? 5 : 6}; -${variant === 1 ? 2 : 4})$`,
        `$I(-${variant === 1 ? 2 : 4}; -${variant === 1 ? 5 : 6})$`,
      ],
      'A',
      `Đồ thị có TCĐ $x = -${variant === 1 ? 2 : 4}$ và TCN $y = ${variant === 1 ? 5 : 6}$, suy ra giao điểm hai đường tiệm cận là $I(-${variant === 1 ? 2 : 4}; ${variant === 1 ? 5 : 6})$.`,
      'Giao điểm hai đường tiệm cận chính là tâm đối xứng của đồ thị hàm phân thức.'
    ),
    makeMC(
      p,
      7,
      'Bài 3. Đường tiệm cận của đồ thị hàm số',
      `Đồ thị hàm số nào dưới đây không có tiệm cận ngang?`,
      [
        `$y = \\frac{x^2 + ${variant === 1 ? 2 : 5}}{x - 1}$`,
        `$y = \\frac{2x - 1}{x + 3}$`,
        `$y = \\frac{1}{x^2 + 1}$`,
        `$y = \\frac{x}{x^2 + 4}$`,
      ],
      'A',
      `Với $y = \\frac{x^2 + ${variant === 1 ? 2 : 5}}{x - 1}$, bậc tử lớn hơn bậc mẫu nên $\\lim_{x \\to \\pm\\infty} y = \\pm\\infty$, đồ thị có tiệm cận xiên chứ không có tiệm cận ngang.`,
      'Hàm phân thức có bậc tử lớn hơn bậc mẫu thì không có tiệm cận ngang.'
    ),
    makeMC(
      p,
      8,
      'Bài 3. Đường tiệm cận của đồ thị hàm số',
      `Số đường tiệm cận ngang của đồ thị hàm số $y = \\frac{\\sqrt{x^2 + 1}}{x}$ là:`,
      ['$2$', '$1$', '$0$', '$3$'],
      'A',
      `Khi $x \\to +\\infty$, $y = \\sqrt{1 + 1/x^2} \\to 1$ (TCN $y = 1$). Khi $x \\to -\\infty$, vì $x = -\\sqrt{x^2}$ nên $y = -\\sqrt{1 + 1/x^2} \\to -1$ (TCN $y = -1$). Vậy có $2$ tiệm cận ngang.`,
      'Chú ý khi $x \\to -\\infty$ thì $\\sqrt{x^2} = |x| = -x$.'
    ),
    makeMC(
      p,
      9,
      'Bài 3. Đường tiệm cận của đồ thị hàm số',
      `Biết đường tiệm cận xiên của đồ thị hàm số $y = x + ${variant === 1 ? 3 : 4} + \\frac{2}{x - 1}$ cắt hai trục tọa độ $Ox, Oy$ lần lượt tại $A$ và $B$. Diện tích tam giác $OAB$ bằng:`,
      [
        `$\\frac{${variant === 1 ? 9 : 16}}{2}$`,
        `$${variant === 1 ? 9 : 16}$`,
        `$${variant === 1 ? 3 : 4}$`,
        `$\\frac{${variant === 1 ? 3 : 4}}{2}$`,
      ],
      'A',
      `Tiệm cận xiên là $d: y = x + ${variant === 1 ? 3 : 4}$. Giao với $Ox$ tại $A(-${variant === 1 ? 3 : 4}; 0)$, giao với $Oy$ tại $B(0; ${variant === 1 ? 3 : 4})$. Diện tích $S_{\\triangle OAB} = \\frac{1}{2} OA \\cdot OB = \\frac{${variant === 1 ? 9 : 16}}{2}$.`,
      'Diện tích tam giác tạo bởi đường thẳng $y = ax + b$ với hai trục tọa độ là $\\frac{1}{2}|x_A \\cdot y_B|$.'
    ),
    makeMC(
      p,
      10,
      'Bài 3. Đường tiệm cận của đồ thị hàm số',
      `Tìm tham số $m$ để đồ thị hàm số $y = \\frac{mx - 2}{x + 1}$ có tiệm cận ngang đi qua điểm $A(2; ${variant === 1 ? 5 : 7})$.`,
      [
        `$m = ${variant === 1 ? 5 : 7}$`,
        `$m = 2$`,
        `$m = -${variant === 1 ? 5 : 7}$`,
        `$m = 1$`,
      ],
      'A',
      `Tiệm cận ngang của đồ thị là đường thẳng $y = m$. Đường thẳng này đi qua $A(2; ${variant === 1 ? 5 : 7})$ khi $m = ${variant === 1 ? 5 : 7}$ (khi đó $m \\neq -2$ nên hàm không suy biến).`,
      'Thay tung độ điểm $A$ vào phương trình tiệm cận ngang $y = m$ và kiểm tra điều kiện không suy biến.'
    ),
    makeMC(
      p,
      11,
      'Bài 3. Đường tiệm cận của đồ thị hàm số',
      `Chi phí sản xuất $x$ sản phẩm của một dây chuyền là $C(x) = ${variant === 1 ? 50 : 80}x + ${variant === 1 ? 2000 : 3000}$ (nghìn đồng). Chi phí trung bình cho mỗi sản phẩm là $\\bar{C}(x) = \\frac{C(x)}{x}$. Khi số lượng sản phẩm $x$ tăng lên rất lớn ($x \\to +\\infty$), chi phí trung bình mỗi sản phẩm tiến dần về mức nào?`,
      [
        `$${variant === 1 ? 50 : 80}$ nghìn đồng`,
        `$${variant === 1 ? 2000 : 3000}$ nghìn đồng`,
        `$0$ nghìn đồng`,
        `$${variant === 1 ? 40 : 60}$ nghìn đồng`,
      ],
      'A',
      `Ta có $\\bar{C}(x) = ${variant === 1 ? 50 : 80} + \\frac{${variant === 1 ? 2000 : 3000}}{x}$. Khi $x \\to +\\infty$, $\\lim_{x \\to +\\infty} \\bar{C}(x) = ${variant === 1 ? 50 : 80}$ (nghìn đồng), chính là tung độ đường tiệm cận ngang.`,
      'Ý nghĩa thực tiễn của tiệm cận ngang: Giá trị giới hạn ổn định khi quy mô sản xuất tiến ra vô cùng.'
    ),
    makeMC(
      p,
      12,
      'Bài 3. Đường tiệm cận của đồ thị hàm số',
      `Đồ thị hàm số $y = \\frac{2x - 1}{x^2 + ${variant === 1 ? 4 : 9}}$ có bao nhiêu đường tiệm cận (gồm cả đứng, ngang, xiên)?`,
      ['$1$', '$2$', '$3$', '$0$'],
      'A',
      `Vì $x^2 + ${variant === 1 ? 4 : 9} > 0, \\forall x \\in \\mathbb{R}$ nên đồ thị không có TCĐ. Mặt khác $\\lim_{x \\to \\pm\\infty} y = 0$ nên có duy nhất $1$ TCN là $y = 0$.`,
      'Nếu mẫu số vô nghiệm trên $\\mathbb{R}$ thì hàm phân thức hữu tỉ không có tiệm cận đứng.'
    ),
  ];

  const part2 = [
    makeTF(
      p,
      1,
      'Bài 3. Đường tiệm cận của đồ thị hàm số',
      `Cho hàm số $y = f(x) = \\frac{${a1}x - 1}{x - ${x0}}$ có đồ thị $(C)$. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Đồ thị $(C)$ có tiệm cận đứng là đường thẳng $x = ${x0}$.`,
          isCorrect: true,
          exp: `Vì $\\lim_{x \\to ${x0}^+} f(x) = +\\infty$ nên $x = ${x0}$ là tiệm cận đứng.`,
        },
        {
          text: `Đồ thị $(C)$ có tiệm cận ngang là đường thẳng $x = ${a1}$.`,
          isCorrect: false,
          exp: `Tiệm cận ngang phải có phương trình dạng $y = y_0$, cụ thể là $y = ${a1}$ chứ không phải $x = ${a1}$.`,
        },
        {
          text: `Giao điểm của hai đường tiệm cận là điểm $I(${x0}; ${a1})$.`,
          isCorrect: true,
          exp: `Giao của $x = ${x0}$ và $y = ${a1}$ là điểm $I(${x0}; ${a1})$.`,
        },
        {
          text: `Hình chữ nhật tạo bởi hai đường tiệm cận của $(C)$ và hai trục tọa độ có diện tích bằng $${x0 * a1}$.`,
          isCorrect: true,
          exp: `Hình chữ nhật giới hạn bởi $x = 0, x = ${x0}, y = 0, y = ${a1}$ có kích thước $${x0} \\times ${a1}$ nên diện tích bằng $${x0 * a1}$.`,
        },
      ],
      'Lưu ý bẫy ký hiệu phương trình: Tiệm cận đứng là $x = x_0$, tiệm cận ngang là $y = y_0$.'
    ),
    makeTF(
      p,
      2,
      'Bài 3. Đường tiệm cận của đồ thị hàm số',
      `Cho hàm số $y = g(x) = \\frac{2x^2 + ${midCoef === 1 ? '' : midCoef}x ${constTerm >= 0 ? `+ ${constTerm}` : constTerm}}{x - 1}$ có đồ thị $(C)$. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Có thể viết lại hàm số dưới dạng $g(x) = 2x + ${b0} + \\frac{4}{x - 1}$ với mọi $x \\neq 1$.`,
          isCorrect: true,
          exp: `Quy đồng $(2x + ${b0})(x - 1) + 4 = 2x^2 + ${midCoef === 1 ? '' : midCoef}x ${constTerm >= 0 ? `+ ${constTerm}` : constTerm}$.`,
        },
        {
          text: `Đồ thị $(C)$ có tiệm cận đứng là $x = 1$ và tiệm cận xiên là $y = 2x + ${b0}$.`,
          isCorrect: true,
          exp: `Khi $x \\to 1$, $|g(x)| \\to +\\infty \\Rightarrow$ TCĐ $x = 1$. Khi $x \\to \\pm\\infty$, $g(x) - (2x + ${b0}) = \\frac{4}{x-1} \\to 0 \\Rightarrow$ TCX $y = 2x + ${b0}$.`,
        },
        {
          text: `Đồ thị $(C)$ có thêm một đường tiệm cận ngang là $y = 2$.`,
          isCorrect: false,
          exp: `Vì $\\lim_{x \\to \\pm\\infty} g(x) = \\pm\\infty$ nên đồ thị không có tiệm cận ngang.`,
        },
        {
          text: `Giao điểm hai đường tiệm cận của $(C)$ có tung độ bằng $${2 + b0}$.`,
          isCorrect: true,
          exp: `Thay $x = 1$ vào phương trình tiệm cận xiên $y = 2x + ${b0}$ ta được $y = 2(1) + ${b0} = ${2 + b0}$.`,
        },
      ],
      'Hàm phân thức hữu tỉ có bậc tử lớn hơn bậc mẫu 1 đơn vị thì có tiệm cận xiên và không có tiệm cận ngang.'
    ),
    makeTF(
      p,
      3,
      'Bài 3. Đường tiệm cận của đồ thị hàm số',
      `Nồng độ (mg/lít) của một loại thuốc trong máu bệnh nhân sau $t$ giờ kể từ khi tiêm được cho bởi công thức $C(t) = \\frac{${variant === 1 ? 12 : 18}t}{t^2 + ${variant === 1 ? 4 : 9}}$ với $t \\ge 0$. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Khi thời gian $t$ tiến ra vô cùng ($t \\to +\\infty$), nồng độ thuốc trong máu tiến dần về $0$ mg/lít.`,
          isCorrect: true,
          exp: `Ta có $\\lim_{t \\to +\\infty} \\frac{${variant === 1 ? 12 : 18}t}{t^2 + ${variant === 1 ? 4 : 9}} = 0$.`,
        },
        {
          text: `Đồ thị hàm số $y = C(t)$ (xét trên $\\mathbb{R}$) nhận trục hoành $y = 0$ làm tiệm cận ngang.`,
          isCorrect: true,
          exp: `Vì $\\lim_{t \\to \\pm\\infty} C(t) = 0$ nên đường thẳng $y = 0$ là tiệm cận ngang.`,
        },
        {
          text: `Đồ thị hàm số $y = C(t)$ có hai đường tiệm cận đứng là $t = \\pm ${variant === 1 ? 2 : 3}$.`,
          isCorrect: false,
          exp: `Mẫu số $t^2 + ${variant === 1 ? 4 : 9} > 0, \\forall t \\in \\mathbb{R}$ nên đồ thị không có tiệm cận đứng.`,
        },
        {
          text: `Nồng độ thuốc trong máu đạt giá trị lớn nhất bằng $3$ mg/lít tại thời điểm $t = ${variant === 1 ? 2 : 3}$ giờ.`,
          isCorrect: true,
          exp: `Ta có $C'(t) = \\frac{${variant === 1 ? 12 : 18}(${variant === 1 ? 4 : 9} - t^2)}{(t^2 + ${variant === 1 ? 4 : 9})^2} = 0 \\Leftrightarrow t = ${variant === 1 ? 2 : 3}$ (do $t \\ge 0$). Khi đó $C(${variant === 1 ? 2 : 3}) = 3$ mg/lít.`,
        },
      ],
      'Kết hợp kiến thức tiệm cận ngang và giá trị lớn nhất để phân tích mô hình dược động học.'
    ),
  ];

  const part3 = [
    makeSA(
      p,
      1,
      'Bài 3. Đường tiệm cận của đồ thị hàm số',
      `Biết đồ thị hàm số $y = \\frac{${variant === 1 ? 4 : 5}x - 3}{x + ${variant === 1 ? 2 : 3}}$ có tiệm cận đứng $x = a$ và tiệm cận ngang $y = b$. Tính giá trị của biểu thức $a + b$.`,
      [variant === 1 ? '2' : '2'],
      `Đồ thị có TCĐ $x = -${variant === 1 ? 2 : 3} \\Rightarrow a = -${variant === 1 ? 2 : 3}$ và TCN $y = ${variant === 1 ? 4 : 5} \\Rightarrow b = ${variant === 1 ? 4 : 5}$. Vậy $a + b = -${variant === 1 ? 2 : 3} + ${variant === 1 ? 4 : 5} = 2$.`,
      'Xác định đúng dấu của nghiệm mẫu số $x + d = 0 \\Leftrightarrow x = -d$.'
    ),
    makeSA(
      p,
      2,
      'Bài 3. Đường tiệm cận của đồ thị hàm số',
      `Đồ thị hàm số $y = \\frac{x - 1}{x^2 - ${variant === 1 ? 5 : 7}x + ${variant === 1 ? 6 : 10}}$ có tất cả bao nhiêu đường tiệm cận (đứng và ngang)?`,
      ['3'],
      `Hàm số có $1$ TCN là $y = 0$ (do bậc tử nhỏ hơn bậc mẫu). Mẫu số $x^2 - ${variant === 1 ? 5 : 7}x + ${variant === 1 ? 6 : 10} = 0 \\Leftrightarrow x = 2$ hoặc $x = ${variant === 1 ? 3 : 5}$ (đều khác $1$) nên có $2$ TCĐ. Tổng cộng có $3$ đường tiệm cận.`,
      'Đếm cả tiệm cận ngang $y = 0$ và hai tiệm cận đứng.'
    ),
    makeSA(
      p,
      3,
      'Bài 3. Đường tiệm cận của đồ thị hàm số',
      `Đường tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 + ${variant === 1 ? 4 : 6}x + 5}{x + 1}$ có phương trình $y = ax + b$. Tính giá trị của $a + b$.`,
      [variant === 1 ? '4' : '6'],
      `Chia tử cho mẫu: $y = x + ${variant === 1 ? 3 : 5} + \\frac{${variant === 1 ? 2 : 0}}{x+1}$? Để phần dư khác 0 ở cả hai đề: xét $y = \\frac{x^2 + ${variant === 1 ? 4 : 6}x + 7}{x + 1} = x + ${variant === 1 ? 3 : 5} + \\frac{${variant === 1 ? 4 : 2}}{x + 1}$. Khi đó tiệm cận xiên là $y = x + ${variant === 1 ? 3 : 5}$ nên $a = 1, b = ${variant === 1 ? 3 : 5} \\Rightarrow a + b = ${variant === 1 ? 4 : 6}$.`,
      'Thực hiện phép chia đa thức tử số cho mẫu số $x + 1$.'
    ),
    makeSA(
      p,
      4,
      'Bài 3. Đường tiệm cận của đồ thị hàm số',
      `Tính diện tích tam giác tạo bởi đường tiệm cận xiên của đồ thị hàm số $y = 2x - ${variant === 1 ? 4 : 6} + \\frac{3}{x + 1}$ với hai trục tọa độ $Ox, Oy$.`,
      [variant === 1 ? '4' : '9'],
      `Tiệm cận xiên là đường thẳng $d: y = 2x - ${variant === 1 ? 4 : 6}$. Đường thẳng $d$ cắt $Ox$ tại $A(${variant === 1 ? 2 : 3}; 0)$ và cắt $Oy$ tại $B(0; -${variant === 1 ? 4 : 6})$. Diện tích tam giác $OAB$ là $\\frac{1}{2} \\cdot ${variant === 1 ? 2 : 3} \\cdot ${variant === 1 ? 4 : 6} = ${variant === 1 ? 4 : 9}$.`,
      'Lấy trị tuyệt đối tọa độ giao điểm khi tính độ dài đoạn thẳng $OA, OB$.'
    ),
  ];

  // Đảm bảo đề bài câu 3 phần III ghi tử số có hằng số +7 để phần dư luôn khác 0:
  part3[2].prompt = `Đường tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 + ${variant === 1 ? 4 : 6}x + 7}{x + 1}$ có phương trình $y = ax + b$. Tính giá trị của $a + b$.`;
  part3[2].explanation = `Chia đa thức: $y = x + ${variant === 1 ? 3 : 5} + \\frac{${variant === 1 ? 4 : 2}}{x + 1}$. Suy ra tiệm cận xiên là $y = x + ${variant === 1 ? 3 : 5}$, có $a = 1, b = ${variant === 1 ? 3 : 5} \\Rightarrow a + b = ${variant === 1 ? 4 : 6}$.`;

  const part4 = [
    makeSO(
      p,
      1,
      'Bài 3. Đường tiệm cận của đồ thị hàm số',
      `Tìm các đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y = \\frac{${a1}x - 1}{x - ${x0}}$.`,
      `Xác định phương trình tiệm cận ngang và tiệm cận đứng bằng định nghĩa giới hạn.`,
      [
        {
          role: 'Tìm tập xác định của hàm số',
          content: `Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{${x0}\\}$.`,
        },
        {
          role: 'Tính giới hạn tại vô cực để tìm tiệm cận ngang',
          content: `Ta có $\\lim_{x \\to +\\infty} \\frac{${a1}x - 1}{x - ${x0}} = ${a1}$ và $\\lim_{x \\to -\\infty} \\frac{${a1}x - 1}{x - ${x0}} = ${a1}$. Suy ra đường thẳng $y = ${a1}$ là tiệm cận ngang.`,
        },
        {
          role: 'Tính giới hạn một bên tại nghiệm mẫu để tìm tiệm cận đứng',
          content: `Ta có $\\lim_{x \\to ${x0}^+} \\frac{${a1}x - 1}{x - ${x0}} = +\\infty$ và $\\lim_{x \\to ${x0}^-} \\frac{${a1}x - 1}{x - ${x0}} = -\\infty$. Suy ra đường thẳng $x = ${x0}$ là tiệm cận đứng.`,
        },
      ],
      'Trình bày tự luận chuẩn SGK luôn nêu rõ giới hạn khi $x \\to \\pm\\infty$ và $x \\to x_0^{\\pm}$.',
      'Rèn luyện cách trình bày tìm tiệm cận bằng giới hạn theo chuẩn SGK Kết nối tri thức.',
      0.7
    ),
    makeSO(
      p,
      2,
      'Bài 3. Đường tiệm cận của đồ thị hàm số',
      `Tìm đường tiệm cận đứng và tiệm cận xiên của đồ thị hàm số $y = \\frac{2x^2 + ${midCoef === 1 ? '' : midCoef}x ${constTerm >= 0 ? `+ ${constTerm}` : constTerm}}{x - 1}$.`,
      `Chứng minh đồ thị có tiệm cận đứng $x = 1$ và tiệm cận xiên $y = 2x + ${b0}$.`,
      [
        {
          role: 'Tìm tập xác định và tách phần nguyên của hàm phân thức',
          content: `Tập xác định $D = \\mathbb{R} \\setminus \\{1\\}$. Chia tử cho mẫu ta được $y = 2x + ${b0} + \\frac{4}{x - 1}$.`,
        },
        {
          role: 'Chứng minh đường tiệm cận đứng',
          content: `Vì $\\lim_{x \\to 1^+} y = +\\infty$ và $\\lim_{x \\to 1^-} y = -\\infty$ nên đường thẳng $x = 1$ là tiệm cận đứng của đồ thị.`,
        },
        {
          role: 'Chứng minh đường tiệm cận xiên',
          content: `Vì $\\lim_{x \\to \\pm\\infty} [y - (2x + ${b0})] = \\lim_{x \\to \\pm\\infty} \\frac{4}{x - 1} = 0$ nên đường thẳng $y = 2x + ${b0}$ là tiệm cận xiên của đồ thị.`,
        },
      ],
      'Để chứng minh $y = ax + b$ là tiệm cận xiên, ta chỉ ra $\\lim_{x \\to \\pm\\infty} [f(x) - (ax + b)] = 0$.',
      'Phương pháp tách phần nguyên tìm tiệm cận xiên của hàm bậc hai trên bậc nhất.',
      0.65
    ),
    makeSO(
      p,
      3,
      'Bài 3. Đường tiệm cận của đồ thị hàm số',
      `Xác định tất cả các đường tiệm cận của đồ thị hàm số $y = \\frac{x - ${variant === 1 ? 2 : 3}}{x^2 - ${variant === 1 ? 4 : 9}}$.`,
      `Chỉ rõ số lượng và phương trình các đường tiệm cận của đồ thị.`,
      [
        {
          role: 'Tìm tập xác định và rút gọn biểu thức trên miền xác định',
          content: `Tập xác định $D = \\mathbb{R} \\setminus \\{\\pm ${variant === 1 ? 2 : 3}\\}$. Với $x \\neq \\pm ${variant === 1 ? 2 : 3}$, ta có $y = \\frac{1}{x + ${variant === 1 ? 2 : 3}}$.`,
        },
        {
          role: 'Tìm tiệm cận ngang',
          content: `Ta có $\\lim_{x \\to \\pm\\infty} y = \\lim_{x \\to \\pm\\infty} \\frac{1}{x + ${variant === 1 ? 2 : 3}} = 0$ nên $y = 0$ là tiệm cận ngang.`,
        },
        {
          role: 'Kiểm tra từng nghiệm của mẫu để kết luận tiệm cận đứng',
          content: `Khi $x \\to ${variant === 1 ? 2 : 3}$ thì $\\lim y = \\frac{1}{${variant === 1 ? 4 : 6}}$ (hữu hạn) nên $x = ${variant === 1 ? 2 : 3}$ không là TCĐ. Khi $x \\to -${variant === 1 ? 2 : 3}^+$ thì $\\lim y = +\\infty$ nên $x = -${variant === 1 ? 2 : 3}$ là tiệm cận đứng duy nhất.`,
        },
      ],
      'Không kết luận vội số TCĐ bằng số nghiệm của mẫu khi tử và mẫu có nghiệm chung.',
      'Phân tích kỹ điểm khử được ($x = x_0$) và điểm cực (tiệm cận đứng thực sự).',
      0.65
    ),
  ];

  return makeLessonExam(
    `bai-03-de-${variant}`,
    `Bài 3 - Đề ôn số ${variant}`,
    `Bài 3. Đường tiệm cận của đồ thị hàm số (SGK Toán 12 Tập 1)`,
    `Đề ôn số ${variant} - Bài 3: Đường tiệm cận của đồ thị hàm số (22 câu hỏi chuẩn cấu trúc 4 phần).`,
    part1,
    part2,
    part3,
    part4
  );
}

export const CHAPTER_1_PART_A_LESSONS: LessonInfo[] = [
  {
    id: 'bai-01',
    code: 'Bài 1',
    title: 'Tính đơn điệu và cực trị của hàm số',
    fullName: 'Bài 1. Tính đơn điệu và cực trị của hàm số',
    chapterId: 'chuong-1',
    chapterTitle: 'CHƯƠNG I. ỨNG DỤNG ĐẠO HÀM ĐỂ KHẢO SÁT VÀ VẼ ĐỒ THỊ HÀM SỐ',
    pageNumber: 5,
    coreTopics: [
      'Xét tính đồng biến, nghịch biến của hàm số bằng dấu đạo hàm',
      'Tìm điểm cực đại, điểm cực tiểu và giá trị cực trị của hàm số',
      'Bài toán chứa tham số về tính đơn điệu và cực trị',
    ],
    practiceExams: [buildBai1Exam(1), buildBai1Exam(2)],
  },
  {
    id: 'bai-02',
    code: 'Bài 2',
    title: 'Giá trị lớn nhất và giá trị nhỏ nhất của hàm số',
    fullName: 'Bài 2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số',
    chapterId: 'chuong-1',
    chapterTitle: 'CHƯƠNG I. ỨNG DỤNG ĐẠO HÀM ĐỂ KHẢO SÁT VÀ VẼ ĐỒ THỊ HÀM SỐ',
    pageNumber: 15,
    coreTopics: [
      'Định nghĩa GTLN, GTNN của hàm số trên một tập hợp',
      'Quy tắc tìm GTLN, GTNN của hàm số liên tục trên một đoạn [a; b]',
      'Ứng dụng tìm GTLN, GTNN trên một khoảng vào bài toán thực tế',
    ],
    practiceExams: [buildBai2Exam(1), buildBai2Exam(2)],
  },
  {
    id: 'bai-03',
    code: 'Bài 3',
    title: 'Đường tiệm cận của đồ thị hàm số',
    fullName: 'Bài 3. Đường tiệm cận của đồ thị hàm số',
    chapterId: 'chuong-1',
    chapterTitle: 'CHƯƠNG I. ỨNG DỤNG ĐẠO HÀM ĐỂ KHẢO SÁT VÀ VẼ ĐỒ THỊ HÀM SỐ',
    pageNumber: 20,
    coreTopics: [
      'Đường tiệm cận ngang y = y0',
      'Đường tiệm cận đứng x = x0',
      'Đường tiệm cận xiên y = ax + b của hàm phân thức',
    ],
    practiceExams: [buildBai3Exam(1), buildBai3Exam(2)],
  },
];
