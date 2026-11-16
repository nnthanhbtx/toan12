import { LessonInfo } from './types';
import { makeMC, makeTF, makeSA, makeSO, makeLessonExam } from './helpers';

// ============================================================================
// BÀI 11: NGUYÊN HÀM (SGK Toán 12 Tập 2 - Kết nối tri thức - Trang 4)
// ============================================================================

const bai11De1 = makeLessonExam(
  'bai11-de01',
  'Bài 11 - Đề ôn số 1',
  'Nguyên hàm: Khái niệm, tính chất và nguyên hàm một số hàm số sơ cấp',
  'Đề ôn tập Bài 11 (Số 1) bám sát yêu cầu cần đạt SGK Toán 12 Tập 2 Kết nối tri thức: Nhận biết nguyên hàm, họ nguyên hàm, tính chất nguyên hàm của tổng/hiệu/tích với hằng số, bảng nguyên hàm các hàm số sơ cấp (lũy thừa, lượng giác, mũ) và bài toán vận tốc - quãng đường.',
  [
    makeMC(
      'b11d1',
      1,
      'Khái niệm nguyên hàm',
      'Cho hàm số $f(x)$ xác định trên khoảng $K$. Hàm số $F(x)$ được gọi là một nguyên hàm của hàm số $f(x)$ trên khoảng $K$ nếu:',
      [
        '$F\'(x) = f(x)$ với mọi $x \\in K$',
        '$f\'(x) = F(x)$ với mọi $x \\in K$',
        '$F\'(x) = -f(x)$ với mọi $x \\in K$',
        '$F(x) = f\'(x) + C$ với mọi $x \\in K$',
      ],
      'A',
      'Theo định nghĩa nguyên hàm: Hàm số $F(x)$ được gọi là một nguyên hàm của hàm số $f(x)$ trên khoảng $K$ nếu $F\'(x) = f(x)$ với mọi $x \\in K$.',
      'Ghi nhớ: Đạo hàm của nguyên hàm $F(x)$ bằng hàm số dưới dấu tích phân $f(x)$.'
    ),
    makeMC(
      'b11d1',
      2,
      'Nguyên hàm của hàm số lũy thừa',
      'Họ tất cả các nguyên hàm của hàm số $f(x) = 4x^3 - 6x + 5$ trên $\\mathbb{R}$ là:',
      [
        '$x^4 - 3x^2 + 5x + C$',
        '$12x^2 - 6 + C$',
        '$4x^4 - 6x^2 + 5x + C$',
        '$x^4 - 6x^2 + 5x + C$',
      ],
      'A',
      'Ta có $\\int (4x^3 - 6x + 5)\\,dx = 4 \\cdot \\frac{x^4}{4} - 6 \\cdot \\frac{x^2}{2} + 5x + C = x^4 - 3x^2 + 5x + C$.',
      'Áp dụng công thức $\\int x^\\alpha\\,dx = \\frac{x^{\\alpha+1}}{\\alpha+1} + C\\ (\\alpha \\ne -1)$.'
    ),
    makeMC(
      'b11d1',
      3,
      'Nguyên hàm của hàm số có phân thức 1/x',
      'Tìm họ nguyên hàm của hàm số $f(x) = \\frac{3}{x}$ trên khoảng $(0; +\\infty)$.',
      [
        '$3\\ln x + C$',
        '$-\\frac{3}{x^2} + C$',
        '$\\ln(3x) + C$',
        '$\\frac{1}{3}\\ln x + C$',
      ],
      'A',
      'Trên khoảng $(0; +\\infty)$, $x > 0$ nên $\\int \\frac{3}{x}\\,dx = 3\\ln|x| + C = 3\\ln x + C$.',
      'Chú ý $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$. Khi $x > 0$ thì $|x| = x$.'
    ),
    makeMC(
      'b11d1',
      4,
      'Nguyên hàm của hàm số lũy thừa số mũ âm và phân số',
      'Trên khoảng $(0; +\\infty)$, họ nguyên hàm của hàm số $f(x) = \\sqrt{x} + \\frac{1}{x^2}$ là:',
      [
        '$\\frac{2}{3}x\\sqrt{x} - \\frac{1}{x} + C$',
        '$\\frac{3}{2}x\\sqrt{x} + \\frac{1}{x} + C$',
        '$\\frac{1}{2\\sqrt{x}} - \\frac{2}{x^3} + C$',
        '$\\frac{2}{3}x\\sqrt{x} + \\frac{1}{x} + C$',
      ],
      'A',
      'Với $x > 0$, ta viết $f(x) = x^{1/2} + x^{-2}$. Khi đó $\\int \\left(x^{1/2} + x^{-2}\\right)dx = \\frac{x^{3/2}}{3/2} + \\frac{x^{-1}}{-1} + C = \\frac{2}{3}x\\sqrt{x} - \\frac{1}{x} + C$.',
      'Đưa căn thức và phân thức về lũy thừa số mũ hữu tỉ hoặc nguyên âm trước khi lấy nguyên hàm.'
    ),
    makeMC(
      'b11d1',
      5,
      'Nguyên hàm của hàm số lượng giác',
      'Họ nguyên hàm của hàm số $f(x) = 2\\cos x - 3\\sin x$ là:',
      [
        '$2\\sin x + 3\\cos x + C$',
        '$2\\sin x - 3\\cos x + C$',
        '$-2\\sin x - 3\\cos x + C$',
        '$-2\\sin x + 3\\cos x + C$',
      ],
      'A',
      'Ta có $\\int (2\\cos x - 3\\sin x)\\,dx = 2\\int \\cos x\\,dx - 3\\int \\sin x\\,dx = 2\\sin x - 3(-\\cos x) + C = 2\\sin x + 3\\cos x + C$.',
      'Tránh nhầm dấu: $\\int \\cos x\\,dx = \\sin x + C$ và $\\int \\sin x\\,dx = -\\cos x + C$.'
    ),
    makeMC(
      'b11d1',
      6,
      'Nguyên hàm của hàm số lượng giác 1/cos^2 x',
      'Tìm họ nguyên hàm của hàm số $f(x) = \\frac{4}{\\cos^2 x}$ trên khoảng $\\left(-\\frac{\\pi}{2}; \\frac{\\pi}{2}\\right)$.',
      [
        '$4\\tan x + C$',
        '$-4\\cot x + C$',
        '$-4\\tan x + C$',
        '$4\\cot x + C$',
      ],
      'A',
      'Áp dụng công thức $\\int \\frac{1}{\\cos^2 x}\\,dx = \\tan x + C$, ta được $\\int \\frac{4}{\\cos^2 x}\\,dx = 4\\tan x + C$.',
      'Vì $(\\tan x)\' = \\frac{1}{\\cos^2 x}$ nên $\\int \\frac{1}{\\cos^2 x}\\,dx = \\tan x + C$.'
    ),
    makeMC(
      'b11d1',
      7,
      'Nguyên hàm của hàm số mũ',
      'Họ nguyên hàm của hàm số $f(x) = 5e^x + 3^x$ trên $\\mathbb{R}$ là:',
      [
        '$5e^x + \\frac{3^x}{\\ln 3} + C$',
        '$5e^x + 3^x\\ln 3 + C$',
        '$5e^x + \\frac{3^{x+1}}{x+1} + C$',
        '$\\frac{5e^x}{\\ln 5} + \\frac{3^x}{\\ln 3} + C$',
      ],
      'A',
      'Ta có $\\int (5e^x + 3^x)\\,dx = 5\\int e^x\\,dx + \\int 3^x\\,dx = 5e^x + \\frac{3^x}{\\ln 3} + C$.',
      'Nhớ công thức nguyên hàm hàm số mũ: $\\int e^x\\,dx = e^x + C$ và $\\int a^x\\,dx = \\frac{a^x}{\\ln a} + C\\ (0 < a \\ne 1)$.'
    ),
    makeMC(
      'b11d1',
      8,
      'Tính chất của nguyên hàm',
      'Khẳng định nào dưới đây là **sai** (với $f(x), g(x)$ liên tục trên $K$ và $k \\ne 0$)?',
      [
        '$\\int [f(x) \\cdot g(x)]\\,dx = \\int f(x)\\,dx \\cdot \\int g(x)\\,dx$',
        '$\\int [f(x) + g(x)]\\,dx = \\int f(x)\\,dx + \\int g(x)\\,dx$',
        '$\\int [f(x) - g(x)]\\,dx = \\int f(x)\\,dx - \\int g(x)\\,dx$',
        '$\\int k f(x)\\,dx = k \\int f(x)\\,dx$',
      ],
      'A',
      'Nguyên hàm của một tích không bằng tích các nguyên hàm. Do đó khẳng định $\\int [f(x)\\cdot g(x)]\\,dx = \\int f(x)\\,dx \\cdot \\int g(x)\\,dx$ là sai.',
      'Khi gặp tích hoặc thương dưới dấu nguyên hàm, ta cần khai triển hoặc rút gọn về tổng/hiệu các hàm sơ cấp.'
    ),
    makeMC(
      'b11d1',
      9,
      'Tìm một nguyên hàm thỏa mãn điều kiện ban đầu',
      'Cho hàm số $f(x) = 3x^2 - 2x + 1$. Tìm nguyên hàm $F(x)$ của hàm số $f(x)$ biết $F(1) = 5$.',
      [
        '$F(x) = x^3 - x^2 + x + 4$',
        '$F(x) = x^3 - x^2 + x + 5$',
        '$F(x) = x^3 - x^2 + x + 2$',
        '$F(x) = 6x - 2 + 4$',
      ],
      'A',
      'Ta có $F(x) = \\int (3x^2 - 2x + 1)\\,dx = x^3 - x^2 + x + C$. Vì $F(1) = 5$ nên $1^3 - 1^2 + 1 + C = 5 \\Rightarrow C = 4$. Vậy $F(x) = x^3 - x^2 + x + 4$.',
      'Tìm họ nguyên hàm có hằng số $C$, sau đó thay điều kiện $F(x_0) = y_0$ để xác định $C$.'
    ),
    makeMC(
      'b11d1',
      10,
      'Biến đổi hàm số مũ trước khi lấy nguyên hàm',
      'Họ nguyên hàm của hàm số $f(x) = e^{2x}$ trên $\\mathbb{R}$ là:',
      [
        '$\\frac{e^{2x}}{2} + C$',
        '$2e^{2x} + C$',
        '$e^{2x} + C$',
        '$\\frac{e^{2x+1}}{2x+1} + C$',
      ],
      'A',
      'Viết $f(x) = e^{2x} = (e^2)^x$. Áp dụng công thức $\\int a^x\\,dx = \\frac{a^x}{\\ln a} + C$ với $a = e^2$, ta có $\\int (e^2)^x\\,dx = \\frac{(e^2)^x}{\\ln(e^2)} + C = \\frac{e^{2x}}{2} + C$.',
      'Biến đổi $e^{kx} = (e^k)^x$ để áp dụng trực tiếp công thức nguyên hàm của hàm số mũ cơ số $a = e^k$.'
    ),
    makeMC(
      'b11d1',
      11,
      'Biến đổi lượng giác trong nguyên hàm',
      'Biết $\\cos 2x = 1 - 2\\sin^2 x$, họ nguyên hàm của hàm số $f(x) = \\sin^2 \\frac{x}{2}$ là:',
      [
        '$\\frac{1}{2}x - \\frac{1}{2}\\sin x + C$',
        '$\\frac{1}{2}x + \\frac{1}{2}\\sin x + C$',
        '$x - \\sin x + C$',
        '$\\frac{1}{3}\\sin^3 \\frac{x}{2} + C$',
      ],
      'A',
      'Ta hạ bậc: $\\sin^2 \\frac{x}{2} = \\frac{1 - \\cos x}{2} = \\frac{1}{2} - \\frac{1}{2}\\cos x$. Do đó $\\int \\sin^2 \\frac{x}{2}\\,dx = \\int \\left(\\frac{1}{2} - \\frac{1}{2}\\cos x\\right)dx = \\frac{1}{2}x - \\frac{1}{2}\\sin x + C$.',
      'Sử dụng công thức hạ bậc $\\sin^2 u = \\frac{1 - \\cos 2u}{2}$ để đưa về nguyên hàm cơ bản.'
    ),
    makeMC(
      'b11d1',
      12,
      'Bài toán thực tế: Vận tốc và quãng đường',
      'Một vật chuyển động thẳng với vận tốc $v(t) = 6t + 2\\text{ (m/s)}$, trong đó $t$ là thời gian tính bằng giây. Biết tại thời điểm $t = 0$ vật ở vị trí có tọa độ $s(0) = 3\\text{ m}$. Quãng đường (tọa độ) $s(t)$ của vật tại thời điểm $t = 4$ giây là:',
      [
        '$59\\text{ m}$',
        '$56\\text{ m}$',
        '$26\\text{ m}$',
        '$51\\text{ m}$',
      ],
      'A',
      'Vì $s\'(t) = v(t)$ nên $s(t) = \\int (6t + 2)\\,dt = 3t^2 + 2t + C$. Do $s(0) = 3 \\Rightarrow C = 3$, suy ra $s(t) = 3t^2 + 2t + 3$. Tại $t = 4$, $s(4) = 3\\cdot 4^2 + 2\\cdot 4 + 3 = 59\\text{ (m)}$.',
      'Hàm vị trí $s(t)$ là một nguyên hàm của hàm vận tốc $v(t)$.'
    ),
  ],
  [
    makeTF(
      'b11d1',
      1,
      'Nguyên hàm của hàm số phân thức và lũy thừa',
      'Cho hàm số $f(x) = \\frac{2x^3 - 3x^2 + 1}{x^2}$ xác định trên khoảng $(0; +\\infty)$.',
      [
        {
          text: 'Trên khoảng $(0; +\\infty)$, hàm số $f(x)$ viết lại được thành $f(x) = 2x - 3 + \\frac{1}{x^2}$.',
          isCorrect: true,
          exp: 'Chia từng hạng tử của tử cho $x^2$: $f(x) = \\frac{2x^3}{x^2} - \\frac{3x^2}{x^2} + \\frac{1}{x^2} = 2x - 3 + \\frac{1}{x^2}$.',
        },
        {
          text: 'Họ tất cả các nguyên hàm của hàm số $f(x)$ trên $(0; +\\infty)$ là $F(x) = x^2 - 3x + \\frac{1}{x} + C$.',
          isCorrect: false,
          exp: 'Vì $\\int x^{-2}\\,dx = -\\frac{1}{x} + C$ nên họ nguyên hàm phải là $F(x) = x^2 - 3x - \\frac{1}{x} + C$.',
        },
        {
          text: 'Nếu $F(x)$ là nguyên hàm của $f(x)$ trên $(0; +\\infty)$ thỏa mãn $F(1) = 2$ thì hằng số $C = 5$.',
          isCorrect: true,
          exp: 'Thay $x = 1$ vào $F(x) = x^2 - 3x - \\frac{1}{x} + C$: $F(1) = 1 - 3 - 1 + C = -3 + C = 2 \\Rightarrow C = 5$.',
        },
        {
          text: 'Với nguyên hàm $F(x)$ thỏa mãn $F(1) = 2$, giá trị của $F(2)$ bằng $\\frac{5}{2}$.',
          isCorrect: true,
          exp: 'Ta có $F(x) = x^2 - 3x - \\frac{1}{x} + 5$. Suy ra $F(2) = 2^2 - 3\\cdot 2 - \\frac{1}{2} + 5 = 4 - 6 - 0{,}5 + 5 = 2{,}5 = \\frac{5}{2}$.',
        },
      ],
      'Chia đa thức cho đơn thức ở mẫu trước khi lấy nguyên hàm từng số hạng.'
    ),
    makeTF(
      'b11d1',
      2,
      'Nguyên hàm của hàm số lượng giác và hàm số mũ',
      'Cho hàm số $f(x) = 3\\cos x - \\frac{2}{\\sin^2 x} + e^x$ trên khoảng $(0; \\pi)$.',
      [
        {
          text: 'Một nguyên hàm của hàm số $g(x) = 3\\cos x$ là $G(x) = 3\\sin x$.',
          isCorrect: true,
          exp: 'Ta có $G\'(x) = (3\\sin x)\' = 3\\cos x = g(x)$.',
        },
        {
          text: 'Họ nguyên hàm của hàm số $h(x) = -\\frac{2}{\\sin^2 x}$ trên $(0; \\pi)$ là $-2\\cot x + C$.',
          isCorrect: false,
          exp: 'Vì $\\int \\frac{1}{\\sin^2 x}\\,dx = -\\cot x + C$ nên $\\int \\left(-\\frac{2}{\\sin^2 x}\\right)dx = 2\\cot x + C$.',
        },
        {
          text: 'Họ tất cả các nguyên hàm của hàm số $f(x)$ trên $(0; \\pi)$ là $F(x) = 3\\sin x + 2\\cot x + e^x + C$.',
          isCorrect: true,
          exp: 'Lấy nguyên hàm từng số hạng: $\\int f(x)\\,dx = 3\\sin x + 2\\cot x + e^x + C$.',
        },
        {
          text: 'Nguyên hàm $F(x)$ của $f(x)$ thỏa mãn $F\\left(\\frac{\\pi}{2}\\right) = e^{\\pi/2}$ có giá trị tại $x = \\frac{\\pi}{4}$ là $\\frac{3\\sqrt{2}}{2} + e^{\\pi/4} - 1$.',
          isCorrect: true,
          exp: 'Từ $F(\\frac{\\pi}{2}) = 3\\sin\\frac{\\pi}{2} + 2\\cot\\frac{\\pi}{2} + e^{\\pi/2} + C = 3 + 0 + e^{\\pi/2} + C = e^{\\pi/2} \\Rightarrow C = -3$. Khi đó $F(\\frac{\\pi}{4}) = 3\\cdot\\frac{\\sqrt{2}}{2} + 2\\cdot 1 + e^{\\pi/4} - 3 = \\frac{3\\sqrt{2}}{2} + e^{\\pi/4} - 1$.',
        },
      ],
      'Chú ý dấu của $\\int \\frac{1}{\\sin^2 x}\\,dx = -\\cot x + C$.'
    ),
    makeTF(
      'b11d1',
      3,
      'Ứng dụng nguyên hàm trong bài toán chuyển động và kinh tế',
      'Một ô tô đang chạy với vận tốc $18\\text{ m/s}$ thì người lái xe đạp phanh. Từ thời điểm đạp phanh ($t = 0$), ô tô chuyển động chậm dần đều với gia tốc $a(t) = -3\\text{ m/s}^2$.',
      [
        {
          text: 'Vận tốc $v(t)$ của ô tô là một nguyên hàm của hàm gia tốc $a(t)$.',
          isCorrect: true,
          exp: 'Theo ý nghĩa cơ học của đạo hàm và nguyên hàm: $v\'(t) = a(t) \\Rightarrow v(t) = \\int a(t)\\,dt$.',
        },
        {
          text: 'Biểu thức vận tốc của ô tô sau $t$ giây kể từ lúc đạp phanh là $v(t) = -3t + 18\\text{ (m/s)}$.',
          isCorrect: true,
          exp: '$v(t) = \\int (-3)\\,dt = -3t + C$. Vì $v(0) = 18$ nên $C = 18 \\Rightarrow v(t) = -3t + 18$.',
        },
        {
          text: 'Thời gian từ lúc đạp phanh đến khi ô tô dừng hẳn là $9$ giây.',
          isCorrect: false,
          exp: 'Ô tô dừng hẳn khi $v(t) = 0 \\Leftrightarrow -3t + 18 = 0 \\Leftrightarrow t = 6$ giây.',
        },
        {
          text: 'Quãng đường ô tô đi thêm được kể từ lúc đạp phanh đến khi dừng hẳn là $54\\text{ m}$.',
          isCorrect: true,
          exp: 'Quãng đường $s(t) = \\int (-3t + 18)\\,dt = -\\frac{3}{2}t^2 + 18t + C_1$. Chọn $s(0) = 0 \\Rightarrow C_1 = 0$. Tại $t = 6$, $s(6) = -1{,}5\\cdot 36 + 18\\cdot 6 = 54\\text{ (m)}$.',
        },
      ],
      'Quy trình giải bài toán phanh xe: $a(t) \\xrightarrow{\\int} v(t) \\xrightarrow{\\int} s(t)$; xe dừng hẳn khi $v(t) = 0$.'
    ),
  ],
  [
    makeSA(
      'b11d1',
      1,
      'Tìm giá trị của nguyên hàm tại một điểm',
      'Cho hàm số $f(x) = 6x^2 - 4x + 3$. Biết $F(x)$ là một nguyên hàm của $f(x)$ và $F(1) = 4$. Tính giá trị của $F(2)$.',
      ['15'],
      'Ta có $F(x) = \\int (6x^2 - 4x + 3)\\,dx = 2x^3 - 2x^2 + 3x + C$. Vì $F(1) = 4$ nên $2 - 2 + 3 + C = 4 \\Rightarrow C = 1$. Suy ra $F(2) = 2\\cdot 2^3 - 2\\cdot 2^2 + 3\\cdot 2 + 1 = 16 - 8 + 6 + 1 = 15$.',
      'Tìm $C$ từ điều kiện $F(1) = 4$ rồi tính $F(2)$.'
    ),
    makeSA(
      'b11d1',
      2,
      'Đồng nhất hệ số nguyên hàm hàm mũ và đa thức',
      'Biết $F(x) = (ax + b)e^x$ là một nguyên hàm của hàm số $f(x) = (2x + 5)e^x$ trên $\\mathbb{R}$. Tính tổng $S = a + b$.',
      ['5'],
      'Vì $F\'(x) = f(x)$ nên $[a e^x + (ax + b)e^x] = (ax + a + b)e^x = (2x + 5)e^x$. Đồng nhất hệ số ta được $a = 2$ và $a + b = 5$. Vậy $S = a + b = 5$.',
      'Sử dụng định nghĩa $F\'(x) = f(x)$ rồi đồng nhất hệ số hai vế.'
    ),
    makeSA(
      'b11d1',
      3,
      'Bài toán thực tế: Tăng trưởng quần thể vi khuẩn',
      'Tốc độ tăng trưởng của một quần thể vi khuẩn tại thời điểm $t$ (giờ) kể từ lúc bắt đầu quan sát được cho bởi $N\'(t) = 300t + 200$ (con/giờ). Biết ban đầu ($t = 0$) quần thể có $1000$ con vi khuẩn. Hỏi sau $4$ giờ kể từ lúc bắt đầu quan sát, số lượng vi khuẩn của quần thể là bao nhiêu con?',
      ['4200'],
      'Số lượng vi khuẩn tại thời điểm $t$ là $N(t) = \\int (300t + 200)\\,dt = 150t^2 + 200t + C$. Vì $N(0) = 1000 \\Rightarrow C = 1000$. Tại $t = 4$, $N(4) = 150\\cdot 4^2 + 200\\cdot 4 + 1000 = 2400 + 800 + 1000 = 4200$ (con).',
      'Số lượng vi khuẩn $N(t)$ là nguyên hàm của tốc độ tăng trưởng $N\'(t)$.'
    ),
    makeSA(
      'b11d1',
      4,
      'Bài toán thực tế: Chi phí sản xuất và chi phí biên',
      'Trong kinh tế, hàm chi phí biên (marginal cost) để sản xuất $x$ đơn vị sản phẩm của một xưởng là $C\'(x) = 0{,}6x + 4$ (triệu đồng/đơn vị). Biết chi phí cố định ban đầu khi chưa sản xuất ($x = 0$) là $C(0) = 25$ (triệu đồng). Tính tổng chi phí (triệu đồng) khi xưởng sản xuất $10$ đơn vị sản phẩm.',
      ['95'],
      'Hàm tổng chi phí là $C(x) = \\int (0{,}6x + 4)\\,dx = 0{,}3x^2 + 4x + C_0$. Do $C(0) = 25 \\Rightarrow C_0 = 25$. Khi $x = 10$, tổng chi phí là $C(10) = 0{,}3\\cdot 10^2 + 4\\cdot 10 + 25 = 30 + 40 + 25 = 95$ (triệu đồng).',
      'Tổng chi phí $C(x)$ là nguyên hàm của hàm chi phí biên $C\'(x)$.'
    ),
  ],
  [
    makeSO(
      'b11d1',
      1,
      'Tìm họ nguyên hàm của hàm số phân thức kết hợp căn thức',
      'Tìm họ nguyên hàm của hàm số $f(x) = \\frac{3x^2 - 2\\sqrt{x} + 4}{x}$ trên khoảng $(0; +\\infty)$.',
      'Vậy $\\int f(x)\\,dx = \\frac{3}{2}x^2 - 4\\sqrt{x} + 4\\ln x + C$.',
      [
        {
          role: 'Bước 1: Tách phân thức thành tổng hiệu các lũy thừa của $x$ với $x > 0$',
          content: 'Trên khoảng $(0; +\\infty)$, ta có $f(x) = \\frac{3x^2}{x} - \\frac{2\\sqrt{x}}{x} + \\frac{4}{x} = 3x - 2x^{-1/2} + \\frac{4}{x}$.',
        },
        {
          role: 'Bước 2: Áp dụng tính chất nguyên hàm của tổng và hiệu',
          content: 'Ta có $\\int f(x)\\,dx = 3\\int x\\,dx - 2\\int x^{-1/2}\\,dx + 4\\int \\frac{1}{x}\\,dx$.',
        },
        {
          role: 'Bước 3: Tính từng nguyên hàm sơ cấp',
          content: 'Do $x > 0$ nên $\\int x\\,dx = \\frac{x^2}{2} + C_1$, $\\int x^{-1/2}\\,dx = 2\\sqrt{x} + C_2$ và $\\int \\frac{1}{x}\\,dx = \\ln x + C_3$.',
        },
        {
          role: 'Bước 4: Rút gọn và kết luận họ nguyên hàm',
          content: 'Suy ra $\\int f(x)\\,dx = \\frac{3}{2}x^2 - 4\\sqrt{x} + 4\\ln x + C$.',
        },
      ],
      'Chia từng số hạng trên tử cho mẫu số $x$ để đưa về dạng lũy thừa $x^\\alpha$ và $\\frac{1}{x}$.',
      'Bài toán rèn luyện kỹ năng biến đổi đại số về bảng nguyên hàm sơ cấp.',
      0.7
    ),
    makeSO(
      'b11d1',
      2,
      'Tìm nguyên hàm của hàm số lượng giác có điều kiện ban đầu',
      'Tìm nguyên hàm $F(x)$ của hàm số $f(x) = 4\\sin x + \\frac{3}{\\cos^2 x}$ trên khoảng $\\left(-\\frac{\\pi}{2}; \\frac{\\pi}{2}\\right)$, biết $F(0) = 2$.',
      'Vậy nguyên hàm cần tìm là $F(x) = -4\\cos x + 3\\tan x + 6$.',
      [
        {
          role: 'Bước 1: Tìm họ nguyên hàm tổng quát của $f(x)$',
          content: 'Ta có $F(x) = \\int \\left(4\\sin x + \\frac{3}{\\cos^2 x}\\right)dx = -4\\cos x + 3\\tan x + C$.',
        },
        {
          role: 'Bước 2: Thay điều kiện ban đầu $F(0) = 2$ để tìm hằng số $C$',
          content: 'Vì $F(0) = 2$ nên $-4\\cos 0 + 3\\tan 0 + C = 2 \\Leftrightarrow -4\\cdot 1 + 0 + C = 2 \\Leftrightarrow C = 6$.',
        },
        {
          role: 'Bước 3: Kết luận biểu thức nguyên hàm $F(x)$',
          content: 'Thay $C = 6$ vào họ nguyên hàm, ta được $F(x) = -4\\cos x + 3\\tan x + 6$.',
        },
      ],
      'Lưu ý $\\cos 0 = 1$ và $\\tan 0 = 0$ khi thay $x = 0$ để tìm hằng số $C$.',
      'Học sinh hay quên $\\cos 0 = 1$ nên dễ tính nhầm $C = 2$.',
      0.65
    ),
    makeSO(
      'b11d1',
      3,
      'Bài toán thực tế: Tìm hàm doanh thu từ doanh thu biên',
      'Doanh thu biên của một công ty khi bán $x$ sản phẩm được mô hình hóa bởi hàm số $R\'(x) = 50 - 0{,}04x$ (triệu đồng/sản phẩm). Biết rằng khi chưa bán sản phẩm nào ($x = 0$) thì doanh thu $R(0) = 0$. Hãy xác định hàm tổng doanh thu $R(x)$ và tính doanh thu khi công ty bán được $200$ sản phẩm.',
      'Vậy $R(x) = 50x - 0{,}02x^2$ và doanh thu khi bán $200$ sản phẩm là $9200$ triệu đồng.',
      [
        {
          role: 'Bước 1: Thiết lập công thức nguyên hàm cho hàm tổng doanh thu $R(x)$',
          content: 'Hàm tổng doanh thu $R(x)$ là một nguyên hàm của hàm doanh thu biên $R\'(x)$: $R(x) = \\int (50 - 0{,}04x)\\,dx = 50x - 0{,}02x^2 + C$.',
        },
        {
          role: 'Bước 2: Xác định hằng số $C$ từ điều kiện $R(0) = 0$',
          content: 'Do $R(0) = 0$ nên $50\\cdot 0 - 0{,}02\\cdot 0^2 + C = 0 \\Rightarrow C = 0$. Vậy $R(x) = 50x - 0{,}02x^2$.',
        },
        {
          role: 'Bước 3: Tính tổng doanh thu khi bán $x = 200$ sản phẩm',
          content: 'Thay $x = 200$ vào hàm $R(x)$, ta có $R(200) = 50\\cdot 200 - 0{,}02\\cdot 200^2 = 10000 - 800 = 9200$ (triệu đồng).',
        },
      ],
      'Hàm tổng doanh thu luôn thỏa mãn $R(0) = 0$ khi chưa tiêu thụ sản phẩm nào.',
      'Bài toán gắn kết ý nghĩa kinh tế của nguyên hàm với đạo hàm đã học ở Tập 1.',
      0.65
    ),
  ]
);

const bai11De2 = makeLessonExam(
  'bai11-de02',
  'Bài 11 - Đề ôn số 2',
  'Nguyên hàm: Nâng cao kỹ năng biến đổi và vận dụng thực tiễn',
  'Đề ôn tập Bài 11 (Số 2) gồm 22 câu hỏi rèn luyện sâu về biến đổi lũy thừa, lượng giác, mũ và các bài toán thực tế vận dụng nguyên hàm.',
  [
    makeMC(
      'b11d2',
      1,
      'Khái niệm họ nguyên hàm',
      'Nếu $F(x)$ là một nguyên hàm của hàm số $f(x)$ trên khoảng $K$ thì họ tất cả các nguyên hàm của $f(x)$ trên $K$ là:',
      [
        '$F(x) + C$ với $C$ là hằng số tùy ý',
        '$F\'(x) + C$ với $C$ là hằng số tùy ý',
        '$C\\cdot F(x)$ với $C$ là hằng số tùy ý',
        '$f\'(x) + C$ với $C$ là hằng số tùy ý',
      ],
      'A',
      'Theo định lý về họ nguyên hàm: Nếu $F(x)$ là một nguyên hàm của $f(x)$ trên $K$ thì mọi nguyên hàm của $f(x)$ trên $K$ đều có dạng $F(x) + C\\ (C \\in \\mathbb{R})$.',
      'Hai nguyên hàm bất kỳ của cùng một hàm số trên khoảng $K$ chỉ sai khác nhau một hằng số $C$.'
    ),
    makeMC(
      'b11d2',
      2,
      'Tính chất đạo hàm và nguyên hàm',
      'Cho hàm số $f(x)$ có đạo hàm liên tục trên $\\mathbb{R}$. Khẳng định nào dưới đây là đúng?',
      [
        '$\\int f\'(x)\\,dx = f(x) + C$',
        '$\\int f(x)\\,dx = f\'(x) + C$',
        '$\\left(\\int f(x)\\,dx\\right)\' = f\'(x)$',
        '$\\int f\'(x)\\,dx = f\'(x) + C$',
      ],
      'A',
      'Vì $(f(x))\' = f\'(x)$ nên $f(x)$ là một nguyên hàm của $f\'(x)$, tức là $\\int f\'(x)\\,dx = f(x) + C$.',
      'Phép lấy nguyên hàm là phép toán ngược của phép lấy đạo hàm.'
    ),
    makeMC(
      'b11d2',
      3,
      'Nguyên hàm của đa thức khai triển',
      'Họ nguyên hàm của hàm số $f(x) = (2x - 1)(x + 2)$ trên $\\mathbb{R}$ là:',
      [
        '$\\frac{2}{3}x^3 + \\frac{3}{2}x^2 - 2x + C$',
        '$\\frac{2}{3}x^3 + 3x^2 - 2x + C$',
        '$\\left(x^2 - x\\right)\\left(\\frac{1}{2}x^2 + 2x\\right) + C$',
        '$4x + 3 + C$',
      ],
      'A',
      'Khai triển $f(x) = 2x^2 + 3x - 2$. Do đó $\\int f(x)\\,dx = \\frac{2}{3}x^3 + \\frac{3}{2}x^2 - 2x + C$.',
      'Nhân đa thức để đưa về dạng tổng các lũy thừa trước khi lấy nguyên hàm.'
    ),
    makeMC(
      'b11d2',
      4,
      'Nguyên hàm của hàm số căn bậc ba',
      'Trên khoảng $(0; +\\infty)$, họ nguyên hàm của hàm số $f(x) = 4\\sqrt[3]{x}$ là:',
      [
        '$3x\\sqrt[3]{x} + C$',
        '$\\frac{4}{3}x\\sqrt[3]{x} + C$',
        '$\\frac{4}{3\\sqrt[3]{x^2}} + C$',
        '$4x\\sqrt[3]{x} + C$',
      ],
      'A',
      'Với $x > 0$, $f(x) = 4x^{1/3}$. Ta có $\\int 4x^{1/3}\\,dx = 4 \\cdot \\frac{x^{4/3}}{4/3} + C = 3x^{4/3} + C = 3x\\sqrt[3]{x} + C$.',
      'Sử dụng $\\sqrt[n]{x^m} = x^{m/n}$ với $x > 0$.'
    ),
    makeMC(
      'b11d2',
      5,
      'Nguyên hàm của hàm số có trị tuyệt đối trong logarit',
      'Trên khoảng $(-\\infty; 0)$, họ nguyên hàm của hàm số $f(x) = 2x - \\frac{5}{x}$ là:',
      [
        '$x^2 - 5\\ln(-x) + C$',
        '$x^2 - 5\\ln x + C$',
        '$x^2 + \\frac{5}{x^2} + C$',
        '$2 + \\frac{5}{x^2} + C$',
      ],
      'A',
      'Vì $x \\in (-\\infty; 0)$ nên $|x| = -x$. Do đó $\\int \\left(2x - \\frac{5}{x}\\right)dx = x^2 - 5\\ln|x| + C = x^2 - 5\\ln(-x) + C$.',
      'Khi $x < 0$, ta có $\\ln|x| = \\ln(-x)$.'
    ),
    makeMC(
      'b11d2',
      6,
      'Nguyên hàm của hàm số lượng giác với góc nhân đôi',
      'Biết $(\\sin 2x)\' = 2\\cos 2x$, họ nguyên hàm của hàm số $f(x) = \\cos 2x$ trên $\\mathbb{R}$ là:',
      [
        '$\\frac{1}{2}\\sin 2x + C$',
        '$2\\sin 2x + C$',
        '$-\\frac{1}{2}\\sin 2x + C$',
        '$\\sin 2x + C$',
      ],
      'A',
      'Vì $\\left(\\frac{1}{2}\\sin 2x\\right)\' = \\cos 2x$ nên $\\int \\cos 2x\\,dx = \\frac{1}{2}\\sin 2x + C$.',
      'Tổng quát: $\\int \\cos(ax+b)\\,dx = \\frac{1}{a}\\sin(ax+b) + C\\ (a \\ne 0)$.'
    ),
    makeMC(
      'b11d2',
      7,
      'Nguyên hàm của hàm số tan^2 x',
      'Tìm họ nguyên hàm của hàm số $f(x) = \\tan^2 x$ trên khoảng $\\left(-\\frac{\\pi}{2}; \\frac{\\pi}{2}\\right)$.',
      [
        '$\\tan x - x + C$',
        '$\\frac{1}{3}\\tan^3 x + C$',
        '$\\tan x + x + C$',
        '$\\frac{1}{\\cos^2 x} + C$',
      ],
      'A',
      'Ta biến đổi $\\tan^2 x = \\frac{1}{\\cos^2 x} - 1$. Suy ra $\\int \\tan^2 x\\,dx = \\int \\left(\\frac{1}{\\cos^2 x} - 1\\right)dx = \\tan x - x + C$.',
      'Áp dụng hằng đẳng thức lượng giác $1 + \\tan^2 x = \\frac{1}{\\cos^2 x}$.'
    ),
    makeMC(
      'b11d2',
      8,
      'Nguyên hàm của hàm số mũ thương',
      'Họ nguyên hàm của hàm số $f(x) = \\frac{6^x}{2^x}$ trên $\\mathbb{R}$ là:',
      [
        '$\\frac{3^x}{\\ln 3} + C$',
        '$3^x\\ln 3 + C$',
        '$\\frac{6^x}{2^x \\ln 3} + C$',
        '$3^x + C$',
      ],
      'A',
      'Rút gọn $f(x) = \\left(\\frac{6}{2}\\right)^x = 3^x$. Khi đó $\\int 3^x\\,dx = \\frac{3^x}{\\ln 3} + C$.',
      'Đưa thương hai lũy thừa cùng số mũ $x$ về dạng $\\left(\\frac{a}{b}\\right)^x$.'
    ),
    makeMC(
      'b11d2',
      9,
      'Nguyên hàm của hàm số mũ có số mũ cộng',
      'Họ nguyên hàm của hàm số $f(x) = e^{x+2}$ trên $\\mathbb{R}$ là:',
      [
        '$e^{x+2} + C$',
        '$\\frac{e^{x+2}}{2} + C$',
        '$(x+2)e^{x+1} + C$',
        '$e^x + C$',
      ],
      'A',
      'Ta viết $f(x) = e^2 \\cdot e^x$. Vì $e^2$ là hằng số nên $\\int e^2 \\cdot e^x\\,dx = e^2 \\cdot e^x + C = e^{x+2} + C$.',
      'Tách $e^{x+k} = e^k \\cdot e^x$ với $e^k$ là hằng số.'
    ),
    makeMC(
      'b11d2',
      10,
      'Tìm nguyên hàm thỏa mãn điều kiện giá trị tại 0',
      'Cho hàm số $f(x) = 2^x \\cdot \\ln 2 + 4x$. Nguyên hàm $F(x)$ của hàm số $f(x)$ thỏa mãn $F(0) = 5$ là:',
      [
        '$F(x) = 2^x + 2x^2 + 4$',
        '$F(x) = 2^x + 2x^2 + 5$',
        '$F(x) = \\frac{2^x}{\\ln 2} + 2x^2 + 4$',
        '$F(x) = 2^x + 4x^2 + 4$',
      ],
      'A',
      'Ta có $F(x) = \\int (2^x \\ln 2 + 4x)\\,dx = 2^x + 2x^2 + C$. Vì $F(0) = 5$ nên $2^0 + 0 + C = 5 \\Rightarrow 1 + C = 5 \\Rightarrow C = 4$.',
      'Chú ý $2^0 = 1$ khi thay $x = 0$ vào $F(x)$.'
    ),
    makeMC(
      'b11d2',
      11,
      'Ý nghĩa hình học của nguyên hàm',
      'Đồ thị của hàm số $y = F(x)$ đi qua điểm $M(1; 3)$ và có hệ số góc của tiếp tuyến tại mỗi điểm $(x; F(x))$ bằng $4x - 2$. Khi đó biểu thức của $F(x)$ là:',
      [
        '$F(x) = 2x^2 - 2x + 3$',
        '$F(x) = 2x^2 - 2x + 1$',
        '$F(x) = 4x^2 - 2x + 1$',
        '$F(x) = 2x^2 - 2x - 3$',
      ],
      'A',
      'Hệ số góc tiếp tuyến là $F\'(x) = 4x - 2 \\Rightarrow F(x) = \\int (4x - 2)\\,dx = 2x^2 - 2x + C$. Đồ thị qua $M(1; 3)$ nên $F(1) = 3 \\Rightarrow 2 - 2 + C = 3 \\Rightarrow C = 3$.',
      'Hệ số góc của tiếp tuyến tại điểm có hoành độ $x$ chính là đạo hàm $F\'(x)$.'
    ),
    makeMC(
      'b11d2',
      12,
      'Bài toán thực tế: Lưu lượng nước chảy vào bể',
      'Nước chảy vào một bể chứa với tốc độ $V\'(t) = 12t + 5$ (lít/phút), trong đó $t$ là thời gian tính bằng phút. Biết lúc đầu ($t = 0$) trong bể có $40$ lít nước. Thể tích nước trong bể sau $5$ phút là:',
      [
        '$215\\text{ lít}$',
        '$175\\text{ lít}$',
        '$65\\text{ lít}$',
        '$385\\text{ lít}$',
      ],
      'A',
      'Thể tích nước trong bể là $V(t) = \\int (12t + 5)\\,dt = 6t^2 + 5t + C$. Do $V(0) = 40 \\Rightarrow C = 40$. Sau $5$ phút, $V(5) = 6\\cdot 5^2 + 5\\cdot 5 + 40 = 150 + 25 + 40 = 215$ (lít).',
      'Thể tích nước $V(t)$ là nguyên hàm của lưu lượng (tốc độ chảy) $V\'(t)$.'
    ),
  ],
  [
    makeTF(
      'b11d2',
      1,
      'Khảo sát nguyên hàm của hàm số bậc hai và tiếp tuyến',
      'Cho hàm số $f(x) = 3x^2 - 6x + 2$ xác định trên $\\mathbb{R}$. Gọi $F(x)$ là một nguyên hàm của hàm số $f(x)$.',
      [
        {
          text: 'Họ tất cả các nguyên hàm của $f(x)$ là $x^3 - 3x^2 + 2x + C$.',
          isCorrect: true,
          exp: 'Ta có $\\int (3x^2 - 6x + 2)\\,dx = x^3 - 3x^2 + 2x + C$.',
        },
        {
          text: 'Nếu đồ thị hàm số $y = F(x)$ cắt trục tung tại điểm có tung độ bằng $-1$ thì $F(x) = x^3 - 3x^2 + 2x - 1$.',
          isCorrect: true,
          exp: 'Đồ thị cắt trục tung tại điểm có tung độ $-1 \\Rightarrow F(0) = -1 \\Rightarrow C = -1$.',
        },
        {
          text: 'Với $F(0) = -1$, giá trị của $F(3)$ bằng $6$.',
          isCorrect: false,
          exp: 'Ta có $F(3) = 3^3 - 3\\cdot 3^2 + 2\\cdot 3 - 1 = 27 - 27 + 6 - 1 = 5 \\ne 6$.',
        },
        {
          text: 'Hàm số $F(x)$ đồng biến trên khoảng $(2; +\\infty)$.',
          isCorrect: true,
          exp: 'Ta có $F\'(x) = f(x) = 3x^2 - 6x + 2$. Với mọi $x > 2$, $3x^2 - 6x + 2 = 3x(x - 2) + 2 > 0$ nên $F(x)$ đồng biến trên $(2; +\\infty)$.',
        },
      ],
      'Đạo hàm của nguyên hàm $F(x)$ chính là $f(x)$, nên xét tính đơn điệu của $F(x)$ dựa vào dấu của $f(x)$.'
    ),
    makeTF(
      'b11d2',
      2,
      'Nguyên hàm của hàm số lượng giác biến đổi',
      'Cho hàm số $f(x) = \\left(\\sin \\frac{x}{2} + \\cos \\frac{x}{2}\\right)^2$ và $g(x) = \\cot^2 x$ trên khoảng $(0; \\pi)$.',
      [
        {
          text: 'Với mọi $x \\in \\mathbb{R}$, ta luôn có $f(x) = 1 + \\sin x$.',
          isCorrect: true,
          exp: 'Khai triển hằng đẳng thức: $\\sin^2 \\frac{x}{2} + \\cos^2 \\frac{x}{2} + 2\\sin\\frac{x}{2}\\cos\\frac{x}{2} = 1 + \\sin x$.',
        },
        {
          text: 'Họ nguyên hàm của hàm số $f(x)$ trên $\\mathbb{R}$ là $x - \\cos x + C$.',
          isCorrect: true,
          exp: '$\\int (1 + \\sin x)\\,dx = x - \\cos x + C$.',
        },
        {
          text: 'Họ nguyên hàm của hàm số $g(x) = \\cot^2 x$ trên $(0; \\pi)$ là $-\\cot x + x + C$.',
          isCorrect: false,
          exp: 'Vì $\\cot^2 x = \\frac{1}{\\sin^2 x} - 1$ nên $\\int \\cot^2 x\\,dx = -\\cot x - x + C$.',
        },
        {
          text: 'Hiệu $H(x) = \\int [f(x) - g(x)]\\,dx$ trên $(0; \\pi)$ có dạng $H(x) = 2x - \\cos x + \\cot x + C$.',
          isCorrect: true,
          exp: '$H(x) = (x - \\cos x) - (-\\cot x - x) + C = 2x - \\cos x + \\cot x + C$.',
        },
      ],
      'Nhớ công thức biến đổi $\\cot^2 x = \\frac{1}{\\sin^2 x} - 1$ và $2\\sin\\frac{x}{2}\\cos\\frac{x}{2} = \\sin x$.'
    ),
    makeTF(
      'b11d2',
      3,
      'Bài toán thực tế: Chuyển động thẳng đứng dưới tác dụng trọng trường',
      'Từ độ cao $20\\text{ m}$ so với mặt đất, một vật được ném thẳng đứng lên cao với vận tốc ban đầu $v_0 = 15\\text{ m/s}$. Bỏ qua sức cản không khí, lấy gia tốc trọng trường $a(t) = -10\\text{ m/s}^2$. Gọi $h(t)$ là độ cao của vật so với mặt đất sau $t$ giây.',
      [
        {
          text: 'Vận tốc của vật tại thời điểm $t$ giây là $v(t) = -10t + 15\\text{ (m/s)}$.',
          isCorrect: true,
          exp: '$v(t) = \\int (-10)\\,dt = -10t + C$. Vì $v(0) = 15 \\Rightarrow C = 15 \\Rightarrow v(t) = -10t + 15$.',
        },
        {
          text: 'Vật đạt độ cao lớn nhất tại thời điểm $t = 2$ giây.',
          isCorrect: false,
          exp: 'Vật đạt độ cao cực đại khi $v(t) = 0 \\Leftrightarrow -10t + 15 = 0 \\Leftrightarrow t = 1{,}5$ giây.',
        },
        {
          text: 'Hàm độ cao của vật so với mặt đất là $h(t) = -5t^2 + 15t + 20\\text{ (m)}$.',
          isCorrect: true,
          exp: '$h(t) = \\int (-10t + 15)\\,dt = -5t^2 + 15t + C_1$. Do $h(0) = 20 \\Rightarrow C_1 = 20$.',
        },
        {
          text: 'Độ cao lớn nhất mà vật đạt được so với mặt đất là $31{,}25\\text{ m}$.',
          isCorrect: true,
          exp: 'Tại $t = 1{,}5$, $h(1{,}5) = -5\\cdot (1{,}5)^2 + 15\\cdot 1{,}5 + 20 = -11{,}25 + 22{,}5 + 20 = 31{,}25\\text{ (m)}$.',
        },
      ],
      'Độ cao cực đại đạt được tại thời điểm vận tốc tức thời $v(t) = 0$.'
    ),
  ],
  [
    makeSA(
      'b11d2',
      1,
      'Tìm giá trị nguyên hàm của hàm phân thức lũy thừa',
      'Cho hàm số $f(x) = 4x + \\frac{6}{x^2}$ trên khoảng $(0; +\\infty)$. Biết $F(x)$ là nguyên hàm của $f(x)$ thỏa mãn $F(1) = 3$. Tính $F(3)$.',
      ['25'],
      'Ta có $F(x) = \\int \\left(4x + \\frac{6}{x^2}\\right)dx = 2x^2 - \\frac{6}{x} + C$. Vì $F(1) = 3$ nên $2 - 6 + C = 3 \\Rightarrow C = 7$. Suy ra $F(3) = 2\\cdot 3^2 - \\frac{6}{3} + 7 = 18 - 2 + 7 = 23$... Kiểm tra lại: $18 - 2 + 7 = 23$.',
      'Cẩn thận dấu trừ khi lấy nguyên hàm của $\\frac{6}{x^2}$.'
    ),
    makeSA(
      'b11d2',
      2,
      'Đồng nhất hệ số nguyên hàm lượng giác',
      'Biết $F(x) = a\\sin x + b\\cos x$ là một nguyên hàm của hàm số $f(x) = 5\\cos x - 2\\sin x$ trên $\\mathbb{R}$ thỏa mãn $F(0) = 2$. Tính giá trị biểu thức $T = 2a + 3b$.',
      ['16'],
      'Ta có $F\'(x) = a\\cos x - b\\sin x = 5\\cos x - 2\\sin x \\Rightarrow a = 5$ và $b = 2$ (thỏa mãn $F(0) = b = 2$). Vậy $T = 2\\cdot 5 + 3\\cdot 2 = 16$.',
      'Đạo hàm $F(x)$ rồi đồng nhất hệ số của $\\cos x$ và $\\sin x$.'
    ),
    makeSA(
      'b11d2',
      3,
      'Bài toán thực tế: Khấu hao giá trị máy móc',
      'Giá trị $V(t)$ (đơn vị: triệu đồng) của một dây chuyền sản xuất sau $t$ năm sử dụng giảm với tốc độ $V\'(t) = 6t - 42$ (triệu đồng/năm) với $0 \\le t \\le 7$. Biết giá trị ban đầu khi mới mua ($t = 0$) của dây chuyền là $300$ triệu đồng. Tính giá trị của dây chuyền sau $5$ năm sử dụng.',
      ['165'],
      'Ta có $V(t) = \\int (6t - 42)\\,dt = 3t^2 - 42t + C$. Vì $V(0) = 300 \\Rightarrow C = 300$. Sau $5$ năm, $V(5) = 3\\cdot 5^2 - 42\\cdot 5 + 300 = 75 - 210 + 300 = 165$ (triệu đồng).',
      'Tìm nguyên hàm $V(t)$ từ tốc độ biến thiên $V\'(t)$ và điều kiện ban đầu $V(0) = 300$.'
    ),
    makeSA(
      'b11d2',
      4,
      'Bài toán thực tế: Chiều cao cây trồng theo thời gian',
      'Một cây giống cao $15\\text{ cm}$ được đem trồng trong vườn ươm. Tốc độ tăng chiều cao của cây sau $t$ tháng kể từ khi trồng được cho bởi $h\'(t) = 0{,}6t + 4\\text{ (cm/tháng)}$. Hỏi sau $10$ tháng kể từ khi trồng, cây cao bao nhiêu xăng-ti-mét?',
      ['85'],
      'Chiều cao cây sau $t$ tháng là $h(t) = \\int (0{,}6t + 4)\\,dt = 0{,}3t^2 + 4t + C$. Vì $h(0) = 15 \\Rightarrow C = 15$. Khi $t = 10$, $h(10) = 0{,}3\\cdot 10^2 + 4\\cdot 10 + 15 = 30 + 40 + 15 = 85\\text{ (cm)}$.',
      'Chiều cao tại $t = 0$ chính là hằng số $C$ trong nguyên hàm đa thức.'
    ),
  ],
  [
    makeSO(
      'b11d2',
      1,
      'Tìm nguyên hàm của hàm số mũ kết hợp lũy thừa',
      'Tìm họ nguyên hàm của hàm số $f(x) = e^{2x-1} + \\frac{4}{x^3}$ trên khoảng $(0; +\\infty)$.',
      'Vậy $\\int f(x)\\,dx = \\frac{1}{2}e^{2x-1} - \\frac{2}{x^2} + C$.',
      [
        {
          role: 'Bước 1: Biến đổi các số hạng về dạng hàm số mũ và hàm số lũy thừa cơ bản',
          content: 'Ta viết $f(x) = e^{-1}\\cdot (e^2)^x + 4x^{-3}$.',
        },
        {
          role: 'Bước 2: Áp dụng công thức nguyên hàm cho từng số hạng',
          content: 'Ta có $\\int e^{-1}\\cdot (e^2)^x\\,dx = e^{-1}\\cdot \\frac{(e^2)^x}{\\ln(e^2)} + C_1 = \\frac{1}{2}e^{2x-1} + C_1$ và $\\int 4x^{-3}\\,dx = 4\\cdot \\frac{x^{-2}}{-2} + C_2 = -\\frac{2}{x^2} + C_2$.',
        },
        {
          role: 'Bước 3: Tổng hợp kết quả họ nguyên hàm',
          content: 'Vậy $\\int f(x)\\,dx = \\frac{1}{2}e^{2x-1} - \\frac{2}{x^2} + C$.',
        },
      ],
      'Nhớ rằng $\\int e^{ax+b}\\,dx = \\frac{1}{a}e^{ax+b} + C\\ (a \\ne 0)$.',
      'Kỹ năng tách hằng số mũ giúp học sinh tránh sai lầm khi lấy nguyên hàm $e^{ax+b}$.',
      0.7
    ),
    makeSO(
      'b11d2',
      2,
      'Xác định hàm số từ đạo hàm cấp hai và hai điều kiện ban đầu',
      'Cho hàm số $f(x)$ thỏa mãn $f\'\'(x) = 12x - 6$ với mọi $x \\in \\mathbb{R}$, biết $f\'(1) = 4$ và $f(1) = 5$. Hãy tìm biểu thức của hàm số $f(x)$.',
      'Vậy hàm số cần tìm là $f(x) = 2x^3 - 3x^2 + 4x + 2$.',
      [
        {
          role: 'Bước 1: Tìm hàm đạo hàm cấp một $f\'(x)$ từ $f\'\'(x)$',
          content: 'Ta có $f\'(x) = \\int f\'\'(x)\\,dx = \\int (12x - 6)\\,dx = 6x^2 - 6x + C_1$. Do $f\'(1) = 4$ nên $6 - 6 + C_1 = 4 \\Rightarrow C_1 = 4$. Vậy $f\'(x) = 6x^2 - 6x + 4$.',
        },
        {
          role: 'Bước 2: Tìm họ nguyên hàm $f(x)$ từ $f\'(x)$',
          content: 'Ta có $f(x) = \\int (6x^2 - 6x + 4)\\,dx = 2x^3 - 3x^2 + 4x + C_2$.',
        },
        {
          role: 'Bước 3: Thay điều kiện $f(1) = 5$ để tìm $C_2$ và kết luận',
          content: 'Do $f(1) = 5$ nên $2 - 3 + 4 + C_2 = 5 \\Rightarrow C_2 = 2$. Vậy $f(x) = 2x^3 - 3x^2 + 4x + 2$.',
        },
      ],
      'Lấy nguyên hàm hai lần liên tiếp: $f\'\'(x) \\xrightarrow{\\int} f\'(x) \\xrightarrow{\\int} f(x)$.',
      'Bài toán củng cố mối liên hệ tuần tự giữa đạo hàm cấp hai, đạo hàm cấp một và hàm số ban đầu.',
      0.65
    ),
    makeSO(
      'b11d2',
      3,
      'Bài toán thực tế: Tìm gia tốc và quãng đường dừng xe',
      'Một đoàn tàu đang chạy với vận tốc $20\\text{ m/s}$ thì hãm phanh và chuyển động chậm dần đều với gia tốc không đổi $a\\text{ (m/s}^2)$. Biết sau $10$ giây kể từ lúc hãm phanh thì đoàn tàu dừng hẳn. Tính quãng đường đoàn tàu đi được trong $10$ giây đó.',
      'Vậy quãng đường đoàn tàu đi được từ lúc hãm phanh đến khi dừng hẳn là $100\\text{ m}$.',
      [
        {
          role: 'Bước 1: Biểu diễn hàm vận tốc $v(t)$ và tìm gia tốc $a$',
          content: 'Ta có $v(t) = \\int a\\,dt = at + v_0 = at + 20$. Tàu dừng hẳn tại $t = 10$ nên $v(10) = 10a + 20 = 0 \\Rightarrow a = -2\\text{ (m/s}^2)$. Suy ra $v(t) = -2t + 20$.',
        },
        {
          role: 'Bước 2: Tìm hàm quãng đường $s(t)$ với mốc $s(0) = 0$',
          content: 'Quãng đường đi được sau $t$ giây là $s(t) = \\int (-2t + 20)\\,dt = -t^2 + 20t + C$. Vì $s(0) = 0$ nên $C = 0$, tức là $s(t) = -t^2 + 20t$.',
        },
        {
          role: 'Bước 3: Tính quãng đường tại $t = 10$ giây',
          content: 'Thay $t = 10$ vào $s(t)$, ta được $s(10) = -10^2 + 20\\cdot 10 = 100\\text{ (m)}$.',
        },
      ],
      'Khi gia tốc $a$ chưa biết, sử dụng điều kiện vận tốc tại thời điểm dừng hẳn $v(t_{\\text{dừng}}) = 0$ để tìm $a$.',
      'Bài toán rèn luyện tư duy mô hình hóa chuyển động biến đổi đều bằng nguyên hàm.',
      0.65
    ),
  ]
);

// Fix Question 1 of Part 3 in bai11De2 so acceptableAnswers matches '23'
bai11De2.part3[0].acceptableAnswers = ['23'];

// ============================================================================
// BÀI 12: TÍCH PHÂN (SGK Toán 12 Tập 2 - Kết nối tri thức - Trang 12)
// ============================================================================

const bai12De1 = makeLessonExam(
  'bai12-de01',
  'Bài 12 - Đề ôn số 1',
  'Tích phân: Định nghĩa, ý nghĩa hình học và các tính chất của tích phân',
  'Đề ôn tập Bài 12 (Số 1) bám sát SGK Toán 12 Tập 2 Kết nối tri thức: Diện tích hình thang cong, công thức Newton-Leibniz, các tính chất của tích phân, tích phân của hàm số có trị tuyệt đối và bài toán thực tế.',
  [
    makeMC(
      'b12d1',
      1,
      'Định nghĩa tích phân (Công thức Newton-Leibniz)',
      'Cho hàm số $f(x)$ liên tục trên đoạn $[a; b]$. Nếu $F(x)$ là một nguyên hàm của hàm số $f(x)$ trên đoạn $[a; b]$ thì tích phân $\\int_a^b f(x)\\,dx$ bằng:',
      [
        '$F(b) - F(a)$',
        '$F(a) - F(b)$',
        '$f(b) - f(a)$',
        '$F\'(b) - F\'(a)$',
      ],
      'A',
      'Theo định nghĩa tích phân: $\\int_a^b f(x)\\,dx = F(x)\\Big|_a^b = F(b) - F(a)$, trong đó $F(x)$ là một nguyên hàm bất kỳ của $f(x)$ trên $[a; b]$.',
      'Thay cận trên $b$ trước rồi trừ đi giá trị tại cận dưới $a$: $F(b) - F(a)$.'
    ),
    makeMC(
      'b12d1',
      2,
      'Quy ước tích phân tại hai cận bằng nhau và đổi cận',
      'Cho hàm số $f(x)$ liên tục trên đoạn $[a; b]$. Khẳng định nào dưới đây là **đúng**?',
      [
        '$\\int_a^b f(x)\\,dx = -\\int_b^a f(x)\\,dx$',
        '$\\int_a^b f(x)\\,dx = \\int_b^a f(x)\\,dx$',
        '$\\int_a^a f(x)\\,dx = f(a)$',
        '$\\int_a^b f(x)\\,dx = \\int_a^b f(t)\\,dx$',
      ],
      'A',
      'Theo quy ước về tích phân: $\\int_a^a f(x)\\,dx = 0$ và khi đổi cận tích phân thì tích phân đổi dấu: $\\int_a^b f(x)\\,dx = -\\int_b^a f(x)\\,dx$.',
      'Đổi cận tích phân làm đổi dấu giá trị tích phân.'
    ),
    makeMC(
      'b12d1',
      3,
      'Tính chất tuyến tính của tích phân',
      'Biết $\\int_1^3 f(x)\\,dx = 5$ và $\\int_1^3 g(x)\\,dx = -2$. Giá trị của $\\int_1^3 [2f(x) - 3g(x)]\\,dx$ bằng:',
      [
        '$16$',
        '$4$',
        '$10$',
        '$7$',
      ],
      'A',
      'Ta có $\\int_1^3 [2f(x) - 3g(x)]\\,dx = 2\\int_1^3 f(x)\\,dx - 3\\int_1^3 g(x)\\,dx = 2\\cdot 5 - 3\\cdot(-2) = 10 + 6 = 16$.',
      'Áp dụng tính chất $\\int_a^b [k f(x) + l g(x)]\\,dx = k\\int_a^b f(x)\\,dx + l\\int_a^b g(x)\\,dx$.'
    ),
    makeMC(
      'b12d1',
      4,
      'Tính chất chèn cận của tích phân',
      'Cho hàm số $f(x)$ liên tục trên đoạn $[0; 5]$. Biết $\\int_0^5 f(x)\\,dx = 12$ và $\\int_0^2 f(x)\\,dx = 4$. Khi đó $\\int_2^5 f(x)\\,dx$ bằng:',
      [
        '$8$',
        '$16$',
        '$-8$',
        '$3$',
      ],
      'A',
      'Theo tính chất chèn cận: $\\int_0^5 f(x)\\,dx = \\int_0^2 f(x)\\,dx + \\int_2^5 f(x)\\,dx \\Rightarrow \\int_2^5 f(x)\\,dx = 12 - 4 = 8$.',
      'Sử dụng hệ thức Chasles: $\\int_a^b f(x)\\,dx = \\int_a^c f(x)\\,dx + \\int_c^b f(x)\\,dx$.'
    ),
    makeMC(
      'b12d1',
      5,
      'Tích phân của hàm số đa thức',
      'Giá trị của tích phân $I = \\int_0^2 (3x^2 - 2x + 1)\\,dx$ bằng:',
      [
        '$6$',
        '$8$',
        '$4$',
        '$10$',
      ],
      'A',
      'Ta có $I = (x^3 - x^2 + x)\\Big|_0^2 = (2^3 - 2^2 + 2) - 0 = 8 - 4 + 2 = 6$.',
      'Tìm nguyên hàm $F(x) = x^3 - x^2 + x$ rồi tính $F(2) - F(0)$.'
    ),
    makeMC(
      'b12d1',
      6,
      'Tích phân của hàm số phân thức 1/x',
      'Tích phân $I = \\int_1^e \\frac{4}{x}\\,dx$ có giá trị bằng:',
      [
        '$4$',
        '$4e$',
        '$1$',
        '$4e - 4$',
      ],
      'A',
      'Ta có $I = 4\\ln|x|\\Big|_1^e = 4(\\ln e - \\ln 1) = 4(1 - 0) = 4$.',
      'Nhớ $\\ln e = 1$ và $\\ln 1 = 0$.'
    ),
    makeMC(
      'b12d1',
      7,
      'Tích phân của hàm số lượng giác',
      'Tính tích phân $I = \\int_0^{\\pi/2} (2\\sin x + \\cos x)\\,dx$.',
      [
        '$3$',
        '$1$',
        '$2$',
        '$-1$',
      ],
      'A',
      'Ta có $I = (-2\\cos x + \\sin x)\\Big|_0^{\\pi/2} = \\left(-2\\cos\\frac{\\pi}{2} + \\sin\\frac{\\pi}{2}\\right) - (-2\\cos 0 + \\sin 0) = (0 + 1) - (-2 + 0) = 3$.',
      'Cẩn thận khi thay cận dưới $x = 0$: $\\cos 0 = 1 \\ne 0$.'
    ),
    makeMC(
      'b12d1',
      8,
      'Tích phân của hàm số mũ',
      'Tích phân $I = \\int_0^1 (2e^x + 3)\\,dx$ có giá trị bằng:',
      [
        '$2e + 1$',
        '$2e + 3$',
        '$2e - 1$',
        '$2e$',
      ],
      'A',
      'Ta có $I = (2e^x + 3x)\\Big|_0^1 = (2e^1 + 3\\cdot 1) - (2e^0 + 3\\cdot 0) = (2e + 3) - 2 = 2e + 1$.',
      'Chú ý $e^0 = 1$, do đó tại cận $x = 0$ giá trị của $2e^x$ bằng $2$ chứ không bằng $0$.'
    ),
    makeMC(
      'b12d1',
      9,
      'Ý nghĩa hình học của tích phân: Hình thang cong',
      'Cho hàm số $f(x) = 2x + 1$ liên tục và không âm trên đoạn $[1; 3]$. Diện tích hình thang cong giới hạn bởi đồ thị hàm số $y = f(x)$, trục hoành và hai đường thẳng $x = 1, x = 3$ là:',
      [
        '$10$',
        '$8$',
        '$12$',
        '$6$',
      ],
      'A',
      'Vì $f(x) = 2x + 1 > 0$ trên $[1; 3]$ nên diện tích hình thang cong là $S = \\int_1^3 (2x + 1)\\,dx = (x^2 + x)\\Big|_1^3 = (9 + 3) - (1 + 1) = 10$.',
      'Khi $f(x) \\ge 0$ trên $[a; b]$, tích phân $\\int_a^b f(x)\\,dx$ chính là diện tích hình thang cong.',
      'sp_integral_area_curve'
    ),
    makeMC(
      'b12d1',
      10,
      'Tích phân chứa dấu giá trị tuyệt đối',
      'Giá trị của tích phân $I = \\int_0^3 |x - 1|\\,dx$ bằng:',
      [
        '$\\frac{5}{2}$',
        '$\\frac{3}{2}$',
        '$2$',
        '$3$',
      ],
      'A',
      'Tách cận tại $x = 1$: $I = \\int_0^1 (1 - x)\\,dx + \\int_1^3 (x - 1)\\,dx = \\left(x - \\frac{x^2}{2}\\right)\\Big|_0^1 + \\left(\\frac{x^2}{2} - x\\right)\\Big|_1^3 = \\frac{1}{2} + 2 = \\frac{5}{2}$.',
      'Giải phương trình biểu thức trong trị tuyệt đối bằng $0$ để chèn cận và khử dấu trị tuyệt đối.'
    ),
    makeMC(
      'b12d1',
      11,
      'Giá trị trung bình của hàm số trên đoạn',
      'Giá trị trung bình của hàm số $f(x) = 3x^2 + 2$ trên đoạn $[0; 2]$ (được tính theo công thức $\\overline{f} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx$) bằng:',
      [
        '$6$',
        '$12$',
        '$4$',
        '$8$',
      ],
      'A',
      'Ta có $\\overline{f} = \\frac{1}{2 - 0}\\int_0^2 (3x^2 + 2)\\,dx = \\frac{1}{2}(x^3 + 2x)\\Big|_0^2 = \\frac{1}{2}(8 + 4) = 6$.',
      'Giá trị trung bình của hàm số $f(x)$ trên $[a; b]$ là $\\frac{1}{b-a}\\int_a^b f(x)\\,dx$.'
    ),
    makeMC(
      'b12d1',
      12,
      'Bài toán thực tế: Tính quãng đường từ vận tốc bằng tích phân',
      'Một chất điểm chuyển động thẳng với vận tốc $v(t) = 3t^2 + 4t\\text{ (m/s)}$. Quãng đường chất điểm đi được trong khoảng thời gian từ $t = 1$ giây đến $t = 3$ giây là:',
      [
        '$42\\text{ m}$',
        '$34\\text{ m}$',
        '$39\\text{ m}$',
        '$26\\text{ m}$',
      ],
      'A',
      'Quãng đường đi được là $S = \\int_1^3 (3t^2 + 4t)\\,dt = (t^3 + 2t^2)\\Big|_1^3 = (27 + 18) - (1 + 2) = 45 - 3 = 42\\text{ (m)}$.',
      'Khi $v(t) \\ge 0$ trên $[t_1; t_2]$, quãng đường vật đi được là $S = \\int_{t_1}^{t_2} v(t)\\,dt$.'
    ),
  ],
  [
    makeTF(
      'b12d1',
      1,
      'Vận dụng các tính chất của tích phân',
      'Cho hai hàm số $f(x), g(x)$ liên tục trên đoạn $[-1; 4]$ thỏa mãn $\\int_{-1}^2 f(x)\\,dx = 3$, $\\int_2^4 f(x)\\,dx = 5$ và $\\int_{-1}^4 g(x)\\,dx = 6$.',
      [
        {
          text: 'Giá trị của tích phân $\\int_{-1}^4 f(x)\\,dx$ bằng $8$.',
          isCorrect: true,
          exp: 'Theo tính chất chèn cận: $\\int_{-1}^4 f(x)\\,dx = \\int_{-1}^2 f(x)\\,dx + \\int_2^4 f(x)\\,dx = 3 + 5 = 8$.',
        },
        {
          text: 'Giá trị của tích phân $\\int_4^2 f(x)\\,dx$ bằng $5$.',
          isCorrect: false,
          exp: 'Đổi cận tích phân làm đổi dấu: $\\int_4^2 f(x)\\,dx = -\\int_2^4 f(x)\\,dx = -5$.',
        },
        {
          text: 'Tích phân $\\int_{-1}^4 [2f(x) - g(x)]\\,dx$ có giá trị bằng $10$.',
          isCorrect: true,
          exp: '$\\int_{-1}^4 [2f(x) - g(x)]\\,dx = 2\\int_{-1}^4 f(x)\\,dx - \\int_{-1}^4 g(x)\\,dx = 2\\cdot 8 - 6 = 10$.',
        },
        {
          text: 'Giá trị của tích phân $\\int_{-1}^4 [f(x) + 2]\\,dx$ bằng $18$.',
          isCorrect: true,
          exp: 'Ta có $\\int_{-1}^4 [f(x) + 2]\\,dx = \\int_{-1}^4 f(x)\\,dx + \\int_{-1}^4 2\\,dx = 8 + 2\\cdot(4 - (-1)) = 8 + 10 = 18$.',
        },
      ],
      'Chú ý $\\int_a^b k\\,dx = k(b - a)$, rất nhiều học sinh cộng nhầm hằng số $k$ mà quên nhân $(b - a)$.'
    ),
    makeTF(
      'b12d1',
      2,
      'Tích phân của hàm số cho bởi nhiều công thức',
      'Cho hàm số $f(x) = \\begin{cases} 3x^2 + 1 & \\text{khi } x \\ge 1 \\\\ 2x + 2 & \\text{khi } x < 1 \\end{cases}$ liên tục trên $\\mathbb{R}$.',
      [
        {
          text: 'Tại $x = 1$, giá trị của hàm số là $f(1) = 4$.',
          isCorrect: true,
          exp: 'Thay $x = 1$ vào nhánh $x \\ge 1$: $f(1) = 3\\cdot 1^2 + 1 = 4$.',
        },
        {
          text: 'Tích phân $I_1 = \\int_0^1 f(x)\\,dx$ bằng $3$.',
          isCorrect: true,
          exp: 'Trên $(0; 1)$, $f(x) = 2x + 2$ nên $I_1 = \\int_0^1 (2x + 2)\\,dx = (x^2 + 2x)\\Big|_0^1 = 3$.',
        },
        {
          text: 'Tích phân $I_2 = \\int_1^2 f(x)\\,dx$ bằng $7$.',
          isCorrect: false,
          exp: 'Trên $[1; 2]$, $f(x) = 3x^2 + 1$ nên $I_2 = \\int_1^2 (3x^2 + 1)\\,dx = (x^3 + x)\\Big|_1^2 = (8 + 2) - (1 + 1) = 8 \\ne 7$.',
        },
        {
          text: 'Tích phân $I = \\int_0^2 f(x)\\,dx$ có giá trị bằng $11$.',
          isCorrect: true,
          exp: 'Chèn cận tại $x = 1$: $I = \\int_0^1 f(x)\\,dx + \\int_1^2 f(x)\\,dx = 3 + 8 = 11$.',
        },
      ],
      'Khi tính tích phân của hàm số cho bởi nhiều công thức, ta tách cận tại điểm phân nhánh.'
    ),
    makeTF(
      'b12d1',
      3,
      'Ứng dụng tích phân trong bài toán kinh tế và vật lý',
      'Tốc độ tiêu thụ điện năng của một nhà máy trong một ngày được mô hình hóa bởi hàm số $P(t) = 12 + 6\\sin\\left(\\frac{\\pi t}{12}\\right)$ (đơn vị: $\\text{MW}$), trong đó $t \\in [0; 24]$ là thời gian tính bằng giờ kể từ $0$ giờ sáng. Biết tổng điện năng tiêu thụ từ thời điểm $t_1$ đến $t_2$ là $E = \\int_{t_1}^{t_2} P(t)\\,dt\\text{ (MWh)}$.',
      [
        {
          text: 'Tại thời điểm $t = 6$ giờ sáng, công suất tiêu thụ điện của nhà máy là $18\\text{ MW}$.',
          isCorrect: true,
          exp: 'Thay $t = 6$: $P(6) = 12 + 6\\sin\\frac{\\pi}{2} = 12 + 6 = 18\\text{ (MW)}$.',
        },
        {
          text: 'Một nguyên hàm của hàm số $P(t)$ là $F(t) = 12t - \\frac{72}{\\pi}\\cos\\left(\\frac{\\pi t}{12}\\right)$.',
          isCorrect: true,
          exp: 'Đạo hàm $F\'(t) = 12 - \\frac{72}{\\pi}\\cdot\\left(-\\frac{\\pi}{12}\\sin\\frac{\\pi t}{12}\\right) = 12 + 6\\sin\\frac{\\pi t}{12} = P(t)$.',
        },
        {
          text: 'Điện năng tiêu thụ trong $12$ giờ đầu ngày (từ $t = 0$ đến $t = 12$) là $144\\text{ MWh}$.',
          isCorrect: false,
          exp: '$E_{12} = \\int_0^{12} P(t)\\,dt = \\left[12t - \\frac{72}{\\pi}\\cos\\left(\\frac{\\pi t}{12}\\right)\\right]_0^{12} = \\left(144 + \\frac{72}{\\pi}\\right) - \\left(0 - \\frac{72}{\\pi}\\right) = 144 + \\frac{144}{\\pi}\\text{ (MWh)}$.',
        },
        {
          text: 'Tổng điện năng tiêu thụ của nhà máy trong cả ngày (từ $t = 0$ đến $t = 24$) đúng bằng $288\\text{ MWh}$.',
          isCorrect: true,
          exp: 'Tại $t = 24$, $\\cos(2\\pi) = 1 = \\cos 0$, nên phần lượng giác triệt tiêu: $E_{24} = 12\\cdot 24 = 288\\text{ (MWh)}$.',
        },
      ],
      'Tích phân của công suất $P(t)$ theo thời gian cho biết tổng điện năng tiêu thụ $E$.'
    ),
  ],
  [
    makeSA(
      'b12d1',
      1,
      'Tính tích phân hàm đa thức và phân thức',
      'Tính giá trị của tích phân $I = \\int_1^2 \\left(4x^3 + \\frac{2}{x^2}\\right)dx$.',
      ['16'],
      'Ta có $I = \\left(x^4 - \\frac{2}{x}\\right)\\Big|_1^2 = \\left(2^4 - \\frac{2}{2}\\right) - \\left(1^4 - \\frac{2}{1}\\right) = (16 - 1) - (1 - 2) = 15 - (-1) = 16$.',
      'Chú ý dấu trừ khi thay cận dưới $x = 1$: $(1 - 2) = -1$.'
    ),
    makeSA(
      'b12d1',
      2,
      'Tìm tham số trong tích phân',
      'Biết $\\int_1^e \\frac{3x + 2}{x}\\,dx = ae + b$ với $a, b \\in \\mathbb{Z}$. Tính tổng $S = a + b$.',
      ['2'],
      'Ta có $\\int_1^e \\left(3 + \\frac{2}{x}\\right)dx = (3x + 2\\ln x)\\Big|_1^e = (3e + 2) - (3 + 0) = 3e - 1$. Vậy $a = 3, b = -1 \\Rightarrow S = a + b = 2$.',
      'Tách phân thức $\\frac{3x+2}{x} = 3 + \\frac{2}{x}$ trước khi lấy nguyên hàm.'
    ),
    makeSA(
      'b12d1',
      3,
      'Sử dụng định lý cơ bản: tích phân của đạo hàm',
      'Cho hàm số $f(x)$ có đạo hàm liên tục trên đoạn $[1; 5]$ thỏa mãn $f(1) = 3$ và $\\int_1^5 f\'(x)\\,dx = 11$. Tính giá trị của $f(5)$.',
      ['14'],
      'Ta có $\\int_1^5 f\'(x)\\,dx = f(5) - f(1) = 11 \\Rightarrow f(5) = f(1) + 11 = 3 + 11 = 14$.',
      'Áp dụng trực tiếp $\\int_a^b f\'(x)\\,dx = f(b) - f(a)$.'
    ),
    makeSA(
      'b12d1',
      4,
      'Bài toán thực tế: Nhiệt độ thay đổi theo tốc độ tăng nhiệt',
      'Vào lúc $6$ giờ sáng ($t = 0$), nhiệt độ ngoài trời tại một trạm khí tượng là $20^\\circ\\text{C}$. Trong $6$ giờ tiếp theo, tốc độ tăng nhiệt độ tại thời điểm $t$ (giờ) là $T\'(t) = 3 - 0{,}4t\\ (\\text{}^\\circ\\text{C/giờ})$. Tính nhiệt độ ngoài trời (độ C) vào lúc $12$ giờ trưa ($t = 6$).',
      ['30.8', '30,8'],
      'Độ tăng nhiệt độ từ $t = 0$ đến $t = 6$ là $\\Delta T = \\int_0^6 (3 - 0{,}4t)\\,dt = (3t - 0{,}2t^2)\\Big|_0^6 = 18 - 7{,}2 = 10{,}8^\\circ\\text{C}$. Nhiệt độ lúc $12$ giờ trưa là $T(6) = 20 + 10{,}8 = 30{,}8^\\circ\\text{C}$.',
      'Ta có $T(6) = T(0) + \\int_0^6 T\'(t)\\,dt$.'
    ),
  ],
  [
    makeSO(
      'b12d1',
      1,
      'Tính tích phân chứa dấu giá trị tuyệt đối của hàm bậc hai',
      'Tính tích phân $I = \\int_0^3 |x^2 - 2x|\\,dx$.',
      'Vậy $I = \\frac{8}{3}$.',
      [
        {
          role: 'Bước 1: Xét dấu biểu thức $x^2 - 2x$ trên đoạn $[0; 3]$',
          content: 'Ta có $x^2 - 2x = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$. Trên $[0; 2]$, $x^2 - 2x \\le 0$; trên $[2; 3]$, $x^2 - 2x \\ge 0$.',
        },
        {
          role: 'Bước 2: Tách tích phân tại điểm $x = 2$ để khử dấu giá trị tuyệt đối',
          content: 'Ta có $I = \\int_0^2 (2x - x^2)\\,dx + \\int_2^3 (x^2 - 2x)\\,dx$.',
        },
        {
          role: 'Bước 3: Tính từng tích phân thành phần và cộng kết quả',
          content: 'Ta có $\\int_0^2 (2x - x^2)\\,dx = \\left(x^2 - \\frac{x^3}{3}\\right)\\Big|_0^2 = \\frac{4}{3}$ và $\\int_2^3 (x^2 - 2x)\\,dx = \\left(\\frac{x^3}{3} - x^2\\right)\\Big|_2^3 = 0 - \\left(-\\frac{4}{3}\\right) = \\frac{4}{3}$. Vậy $I = \\frac{4}{3} + \\frac{4}{3} = \\frac{8}{3}$.',
        },
      ],
      'Không được đưa dấu trị tuyệt đối ra ngoài dấu tích phân mà phải xét dấu biểu thức trong trị tuyệt đối.',
      'Bài toán rèn luyện kỹ năng chèn cận tích phân chuẩn mực.',
      0.7
    ),
    makeSO(
      'b12d1',
      2,
      'Tính tích phân hàm lượng giác kết hợp công thức biến đổi',
      'Tính tích phân $I = \\int_0^{\\pi/4} \\left(\\frac{3}{\\cos^2 x} + 4\\sin 2x\\right)dx$.',
      'Vậy $I = 5$.',
      [
        {
          role: 'Bước 1: Tìm một nguyên hàm của hàm số dưới dấu tích phân',
          content: 'Một nguyên hàm của $f(x) = \\frac{3}{\\cos^2 x} + 4\\sin 2x$ trên $\\left[0; \\frac{\\pi}{4}\\right]$ là $F(x) = 3\\tan x - 2\\cos 2x$.',
        },
        {
          role: 'Bước 2: Áp dụng công thức Newton-Leibniz tại hai cận $0$ và $\\frac{\\pi}{4}$',
          content: 'Ta có $I = (3\\tan x - 2\\cos 2x)\\Big|_0^{\\pi/4} = \\left(3\\tan\\frac{\\pi}{4} - 2\\cos\\frac{\\pi}{2}\\right) - (3\\tan 0 - 2\\cos 0)$.',
        },
        {
          role: 'Bước 3: Thay giá trị lượng giác và thu gọn',
          content: 'Suy ra $I = (3\\cdot 1 - 2\\cdot 0) - (0 - 2\\cdot 1) = 3 - (-2) = 5$.',
        },
      ],
      'Chú ý $\\int 4\\sin 2x\\,dx = -2\\cos 2x + C$.',
      'Rèn luyện tính toán chính xác giá trị lượng giác tại hai cận.',
      0.65
    ),
    makeSO(
      'b12d1',
      3,
      'Bài toán thực tế: Quãng đường vật chuyển động có đổi chiều',
      'Một vật chuyển động dọc theo một trục tọa độ với vận tốc $v(t) = 6t - 12\\text{ (m/s)}$, trong đó $t$ là thời gian tính bằng giây ($t \\ge 0$). Tính tổng quãng đường vật đi được trong khoảng thời gian từ $t = 0$ đến $t = 5$ giây.',
      'Vậy tổng quãng đường vật đi được trong $5$ giây đầu là $39\\text{ m}$.',
      [
        {
          role: 'Bước 1: Thiết lập công thức tính quãng đường và tìm thời điểm vật đổi chiều',
          content: 'Tổng quãng đường là $S = \\int_0^5 |v(t)|\\,dt = \\int_0^5 |6t - 12|\\,dt$. Cho $6t - 12 = 0 \\Leftrightarrow t = 2 \\in [0; 5]$.',
        },
        {
          role: 'Bước 2: Tách cận tích phân tại $t = 2$',
          content: 'Ta có $S = \\int_0^2 (12 - 6t)\\,dt + \\int_2^5 (6t - 12)\\,dt$.',
        },
        {
          role: 'Bước 3: Tính giá trị từng tích phân',
          content: 'Ta có $(12t - 3t^2)\\Big|_0^2 = 12$ và $(3t^2 - 12t)\\Big|_2^5 = (75 - 60) - (12 - 24) = 15 - (-12) = 27$. Vậy $S = 12 + 27 = 39\\text{ (m)}$.',
        },
      ],
      'Phân biệt độ dịch chuyển $\\Delta s = \\int_{t_1}^{t_2} v(t)\\,dt$ và quãng đường đi được $S = \\int_{t_1}^{t_2} |v(t)|\\,dt$.',
      'Bài toán giúp học sinh hiểu rõ bản chất vật lý của tích phân hàm trị tuyệt đối.',
      0.65
    ),
  ]
);

const bai12De2 = makeLessonExam(
  'bai12-de02',
  'Bài 12 - Đề ôn số 2',
  'Tích phân: Nâng cao kỹ năng tính tích phân và bài toán thực tế',
  'Đề ôn tập Bài 12 (Số 2) gồm 22 câu hỏi chuẩn cấu trúc 4 phần, tập trung vào kỹ thuật biến đổi tích phân, tính chất chèn cận và ứng dụng thực tiễn.',
  [
    makeMC(
      'b12d2',
      1,
      'Tính độc lập với biến số của tích phân',
      'Cho hàm số $f(x)$ liên tục trên đoạn $[1; 4]$ thỏa mãn $\\int_1^4 f(x)\\,dx = 9$. Giá trị của tích phân $\\int_1^4 2f(t)\\,dt$ bằng:',
      [
        '$18$',
        '$9$',
        '$36$',
        '$6$',
      ],
      'A',
      'Tích phân chỉ phụ thuộc vào hàm số và hai cận mà không phụ thuộc vào ký hiệu biến số: $\\int_1^4 f(t)\\,dt = \\int_1^4 f(x)\\,dx = 9 \\Rightarrow \\int_1^4 2f(t)\\,dt = 18$.',
      'Biến dưới dấu tích phân là biến hình thức: $\\int_a^b f(x)\\,dx = \\int_a^b f(t)\\,dt = \\int_a^b f(u)\\,du$.'
    ),
    makeMC(
      'b12d2',
      2,
      'Tích phân của hàm hằng',
      'Với $k$ là hằng số thực, giá trị của tích phân $\\int_{-2}^5 k\\,dx$ bằng:',
      [
        '$7k$',
        '$3k$',
        '$k$',
        '$0$',
      ],
      'A',
      'Ta có $\\int_{-2}^5 k\\,dx = kx\\Big|_{-2}^5 = k(5 - (-2)) = 7k$.',
      'Công thức nhanh: $\\int_a^b k\\,dx = k(b - a)$.'
    ),
    makeMC(
      'b12d2',
      3,
      'Tích phân hàm căn thức',
      'Giá trị của tích phân $I = \\int_1^4 \\frac{3}{\\sqrt{x}}\\,dx$ bằng:',
      [
        '$6$',
        '$3$',
        '$12$',
        '$9$',
      ],
      'A',
      'Ta có $\\int_1^4 3x^{-1/2}\\,dx = 6\\sqrt{x}\\Big|_1^4 = 6(\\sqrt{4} - \\sqrt{1}) = 6(2 - 1) = 6$.',
      'Nhớ công thức nhanh: $\\int \\frac{1}{2\\sqrt{x}}\\,dx = \\sqrt{x} + C \\Rightarrow \\int \\frac{1}{\\sqrt{x}}\\,dx = 2\\sqrt{x} + C$.'
    ),
    makeMC(
      'b12d2',
      4,
      'Tích phân hàm lượng giác 1/sin^2 x',
      'Tính tích phân $I = \\int_{\\pi/4}^{\\pi/2} \\frac{2}{\\sin^2 x}\\,dx$.',
      [
        '$2$',
        '$-2$',
        '$1$',
        '$0$',
      ],
      'A',
      'Ta có $I = -2\\cot x\\Big|_{\\pi/4}^{\\pi/2} = -2\\left(\\cot\\frac{\\pi}{2} - \\cot\\frac{\\pi}{4}\\right) = -2(0 - 1) = 2$.',
      'Lưu ý $\\cot\\frac{\\pi}{2} = 0$ và $\\cot\\frac{\\pi}{4} = 1$.'
    ),
    makeMC(
      'b12d2',
      5,
      'Tích phân hàm số mũ cơ số a',
      'Giá trị của tích phân $I = \\int_0^2 2^x \\ln 2\\,dx$ bằng:',
      [
        '$3$',
        '$4$',
        '$3\\ln 2$',
        '$2$',
      ],
      'A',
      'Vì $(2^x)\' = 2^x\\ln 2$ nên $I = 2^x\\Big|_0^2 = 2^2 - 2^0 = 4 - 1 = 3$.',
      'Khi dưới dấu tích phân có sẵn $a^x \\ln a$, nguyên hàm chính là $a^x$.'
    ),
    makeMC(
      'b12d2',
      6,
      'Tính chất chèn cận với 3 đoạn',
      'Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$. Biết $\\int_1^6 f(x)\\,dx = 20$ và $\\int_3^6 f(x)\\,dx = 7$. Giá trị của $\\int_1^3 f(x)\\,dx$ là:',
      [
        '$13$',
        '$27$',
        '$-13$',
        '$14$',
      ],
      'A',
      'Ta có $\\int_1^6 f(x)\\,dx = \\int_1^3 f(x)\\,dx + \\int_3^6 f(x)\\,dx \\Rightarrow \\int_1^3 f(x)\\,dx = 20 - 7 = 13$.',
      'Vẽ trục số các điểm $1 < 3 < 6$ để áp dụng hệ thức chèn cận không bị nhầm dấu.'
    ),
    makeMC(
      'b12d2',
      7,
      'Tích phân kết hợp tính chất tuyến tính và hàm sơ cấp',
      'Biết $\\int_0^2 f(x)\\,dx = 4$. Giá trị của tích phân $I = \\int_0^2 [3f(x) - 4x]\\,dx$ bằng:',
      [
        '$4$',
        '$12$',
        '$8$',
        '$0$',
      ],
      'A',
      'Ta có $I = 3\\int_0^2 f(x)\\,dx - \\int_0^2 4x\\,dx = 3\\cdot 4 - 2x^2\\Big|_0^2 = 12 - 8 = 4$.',
      'Tách thành hiệu hai tích phân rồi tính riêng từng phần.'
    ),
    makeMC(
      'b12d2',
      8,
      'Tìm cận tích phân chưa biết',
      'Cho số thực $m > 0$ thỏa mãn $\\int_0^m (2x + 3)\\,dx = 10$. Giá trị của $m$ bằng:',
      [
        '$2$',
        '$5$',
        '$1$',
        '$3$',
      ],
      'A',
      'Ta có $(x^2 + 3x)\\Big|_0^m = m^2 + 3m = 10 \\Leftrightarrow m^2 + 3m - 10 = 0 \\Leftrightarrow m = 2$ hoặc $m = -5$. Do $m > 0$ nên $m = 2$.',
      'Tính tích phân theo tham số cận $m$ rồi giải phương trình bậc hai.'
    ),
    makeMC(
      'b12d2',
      9,
      'Tích phân của hàm số lượng giác bình phương',
      'Giá trị của tích phân $I = \\int_0^{\\pi/2} 2\\cos^2 x\\,dx$ bằng:',
      [
        '$\\frac{\\pi}{2}$',
        '$\\pi$',
        '$1$',
        '$\\frac{\\pi}{4}$',
      ],
      'A',
      'Sử dụng công thức hạ bậc $2\\cos^2 x = 1 + \\cos 2x$, ta có $I = \\int_0^{\\pi/2} (1 + \\cos 2x)\\,dx = \\left(x + \\frac{1}{2}\\sin 2x\\right)\\Big|_0^{\\pi/2} = \\frac{\\pi}{2}$.',
      'Áp dụng công thức $2\\cos^2 x = 1 + \\cos 2x$ để đưa về nguyên hàm cơ bản.'
    ),
    makeMC(
      'b12d2',
      10,
      'Ý nghĩa hình học của tích phân: Diện tích hình thang cong',
      'Diện tích hình thang cong giới hạn bởi đồ thị hàm số $y = e^x$, trục hoành và hai đường thẳng $x = 0, x = 2$ là:',
      [
        '$e^2 - 1$',
        '$e^2$',
        '$e^2 + 1$',
        '$2e$',
      ],
      'A',
      'Vì $e^x > 0$ với mọi $x \\in [0; 2]$ nên diện tích hình thang cong là $S = \\int_0^2 e^x\\,dx = e^x\\Big|_0^2 = e^2 - e^0 = e^2 - 1$.',
      'Đừng quên trừ giá trị tại cận dưới $e^0 = 1$.',
      'sp_integral_area_curve'
    ),
    makeMC(
      'b12d2',
      11,
      'Liên hệ giữa nguyên hàm tại hai điểm và tích phân',
      'Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ có một nguyên hàm là $F(x)$. Biết $F(1) = -2$ và $F(4) = 7$. Giá trị của $\\int_1^4 f(x)\\,dx$ bằng:',
      [
        '$9$',
        '$5$',
        '$-9$',
        '$-14$',
      ],
      'A',
      'Theo công thức Newton-Leibniz: $\\int_1^4 f(x)\\,dx = F(4) - F(1) = 7 - (-2) = 9$.',
      'Chú ý dấu trừ của số âm: $7 - (-2) = 9$.'
    ),
    makeMC(
      'b12d2',
      12,
      'Bài toán thực tế: Độ tăng lợi nhuận từ lợi nhuận biên',
      'Hàm lợi nhuận biên của một xưởng sản xuất là $P\'(x) = 30 - 0{,}2x$ (triệu đồng/sản phẩm). Khi xưởng tăng sản lượng từ $x = 50$ lên $x = 100$ sản phẩm thì tổng lợi nhuận của xưởng tăng thêm bao nhiêu triệu đồng?',
      [
        '$750\\text{ triệu đồng}$',
        '$1500\\text{ triệu đồng}$',
        '$500\\text{ triệu đồng}$',
        '$1000\\text{ triệu đồng}$',
      ],
      'A',
      'Mức tăng lợi nhuận là $\\Delta P = \\int_{50}^{100} (30 - 0{,}2x)\\,dx = (30x - 0{,}1x^2)\\Big|_{50}^{100} = (3000 - 1000) - (1500 - 250) = 2000 - 1250 = 750$ (triệu đồng).',
      'Độ biến thiên của hàm $P(x)$ trên đoạn $[a; b]$ bằng $\\int_a^b P\'(x)\\,dx$.'
    ),
  ],
  [
    makeTF(
      'b12d2',
      1,
      'Tính tích phân chứa tham số và biểu thức logarit',
      'Cho tích phân $I = \\int_1^2 \\frac{2x^2 + 3x - 1}{x}\\,dx$.',
      [
        {
          text: 'Trên đoạn $[1; 2]$, hàm số dưới dấu tích phân viết được dưới dạng $2x + 3 - \\frac{1}{x}$.',
          isCorrect: true,
          exp: 'Chia từng số hạng trên tử cho $x$: $\\frac{2x^2 + 3x - 1}{x} = 2x + 3 - \\frac{1}{x}$.',
        },
        {
          text: 'Một nguyên hàm của hàm số $f(x) = 2x + 3 - \\frac{1}{x}$ trên $[1; 2]$ là $F(x) = x^2 + 3x - \\ln x$.',
          isCorrect: true,
          exp: 'Với $x \\in [1; 2] > 0$, $\\int (2x + 3 - \\frac{1}{x})\\,dx = x^2 + 3x - \\ln x + C$.',
        },
        {
          text: 'Giá trị của tích phân $I$ bằng $6 - \\ln 2$.',
          isCorrect: true,
          exp: '$I = (x^2 + 3x - \\ln x)\\Big|_1^2 = (4 + 6 - \\ln 2) - (1 + 3 - \\ln 1) = 10 - \\ln 2 - 4 = 6 - \\ln 2$.',
        },
        {
          text: 'Nếu biểu diễn $I = a + b\\ln 2$ với $a, b \\in \\mathbb{Z}$ thì $a^2 + b^2 = 35$.',
          isCorrect: false,
          exp: 'Ta có $a = 6, b = -1 \\Rightarrow a^2 + b^2 = 36 + 1 = 37 \\ne 35$.',
        },
      ],
      'Khi biểu diễn kết quả dưới dạng $a + b\\ln 2$, chú ý dấu âm của $b = -1$.'
    ),
    makeTF(
      'b12d2',
      2,
      'Tích phân của hàm số có chứa dấu giá trị tuyệt đối và hàm nhánh',
      'Cho hàm số $f(x) = |2x - 4|$ trên đoạn $[0; 5]$.',
      [
        {
          text: 'Phương trình $2x - 4 = 0$ có nghiệm duy nhất $x = 2$ thuộc đoạn $[0; 5]$.',
          isCorrect: true,
          exp: '$2x - 4 = 0 \\Leftrightarrow x = 2 \\in [0; 5]$.',
        },
        {
          text: 'Trên đoạn $[0; 2]$, ta có $|2x - 4| = 2x - 4$.',
          isCorrect: false,
          exp: 'Với $x \\in [0; 2]$ thì $2x - 4 \\le 0$ nên $|2x - 4| = 4 - 2x$.',
        },
        {
          text: 'Tích phân $\\int_0^2 |2x - 4|\\,dx$ có giá trị bằng $4$.',
          isCorrect: true,
          exp: '$\\int_0^2 (4 - 2x)\\,dx = (4x - x^2)\\Big|_0^2 = 8 - 4 = 4$.',
        },
        {
          text: 'Giá trị của tích phân $\\int_0^5 |2x - 4|\\,dx$ bằng $13$.',
          isCorrect: true,
          exp: 'Ta có $\\int_2^5 (2x - 4)\\,dx = (x^2 - 4x)\\Big|_2^5 = (25 - 20) - (4 - 8) = 5 - (-4) = 9$. Suy ra $\\int_0^5 |2x - 4|\\,dx = 4 + 9 = 13$.',
        },
      ],
      'Kiểm tra dấu của biểu thức bậc nhất $ax + b$ trên từng khoảng con sau khi tách cận.'
    ),
    makeTF(
      'b12d2',
      3,
      'Bài toán thực tế: Khối lượng nhiên liệu tiêu thụ của tên lửa đẩy',
      'Một tên lửa đẩy trong giai đoạn cất cánh tiêu thụ nhiên liệu với tốc độ $m\'(t) = 150 - 2t\\text{ (kg/s)}$, trong đó $t \\in [0; 40]$ là thời gian tính bằng giây kể từ lúc rời bệ phóng.',
      [
        {
          text: 'Tại thời điểm vừa rời bệ phóng ($t = 0$), tốc độ tiêu thụ nhiên liệu là $150\\text{ kg/s}$.',
          isCorrect: true,
          exp: 'Thay $t = 0$ vào $m\'(t)$: $m\'(0) = 150\\text{ kg/s}$.',
        },
        {
          text: 'Lượng nhiên liệu tên lửa tiêu thụ trong $10$ giây đầu tiên được tính bởi $\\int_0^{10} (150 - 2t)\\,dt$.',
          isCorrect: true,
          exp: 'Tổng lượng nhiên liệu tiêu thụ từ $t_1$ đến $t_2$ bằng tích phân của tốc độ tiêu thụ trên đoạn $[t_1; t_2]$.',
        },
        {
          text: 'Trong $10$ giây đầu tiên, tên lửa đã tiêu thụ hết $1400\\text{ kg}$ nhiên liệu.',
          isCorrect: true,
          exp: '$\\int_0^{10} (150 - 2t)\\,dt = (150t - t^2)\\Big|_0^{10} = 1500 - 100 = 1400\\text{ (kg)}$.',
        },
        {
          text: 'Trong khoảng thời gian từ giây thứ $10$ đến giây thứ $30$, tên lửa tiêu thụ thêm $2400\\text{ kg}$ nhiên liệu.',
          isCorrect: false,
          exp: '$\\int_{10}^{30} (150 - 2t)\\,dt = (150t - t^2)\\Big|_{10}^{30} = (4500 - 900) - 1400 = 3600 - 1400 = 2200\\text{ kg} \\ne 2400\\text{ kg}$.',
        },
      ],
      'Lượng tiêu thụ từ $t = 10$ đến $t = 30$ là $\\int_{10}^{30} m\'(t)\\,dt$.'
    ),
  ],
  [
    makeSA(
      'b12d2',
      1,
      'Tính tích phân kết hợp tính chất tuyến tính',
      'Cho $\\int_1^3 f(x)\\,dx = -4$ và $\\int_1^3 g(x)\\,dx = 5$. Tính giá trị của tích phân $I = \\int_1^3 [3g(x) - 2f(x) + 2x]\\,dx$.',
      ['31'],
      'Ta có $I = 3\\int_1^3 g(x)\\,dx - 2\\int_1^3 f(x)\\,dx + x^2\\Big|_1^3 = 3\\cdot 5 - 2\\cdot(-4) + (9 - 1) = 15 + 8 + 8 = 31$.',
      'Tách thành ba tích phân riêng biệt và tính từng phần.'
    ),
    makeSA(
      'b12d2',
      2,
      'Đồng nhất kết quả tích phân hàm số mũ',
      'Biết $\\int_0^1 (3e^{3x} + 4)\\,dx = e^a + b$ với $a, b \\in \\mathbb{Z}$. Tính tích $P = a \\cdot b$.',
      ['9'],
      'Ta có $\\int_0^1 (3e^{3x} + 4)\\,dx = (e^{3x} + 4x)\\Big|_0^1 = (e^3 + 4) - (e^0 + 0) = e^3 + 3$. Suy ra $a = 3, b = 3 \\Rightarrow P = a\\cdot b = 9$.',
      'Vì $(e^{3x})\' = 3e^{3x}$ nên nguyên hàm của $3e^{3x}$ là $e^{3x}$.'
    ),
    makeSA(
      'b12d2',
      3,
      'Tích phân của hàm số cho bởi nhiều công thức',
      'Cho hàm số $f(x) = \\begin{cases} 4x - 1 & \\text{khi } x \\ge 2 \\\\ 3x^2 - 5 & \\text{khi } x < 2 \\end{cases}$. Tính tích phân $I = \\int_0^4 f(x)\\,dx$.',
      ['20'],
      'Tách cận tại $x = 2$: $I = \\int_0^2 (3x^2 - 5)\\,dx + \\int_2^4 (4x - 1)\\,dx = (x^3 - 5x)\\Big|_0^2 + (2x^2 - x)\\Big|_2^4 = (8 - 10) + [(32 - 4) - (8 - 2)] = -2 + (28 - 6) = 20$.',
      'Tách tích phân trên $[0; 4]$ thành tổng hai tích phân trên $[0; 2]$ và $[2; 4]$.'
    ),
    makeSA(
      'b12d2',
      4,
      'Bài toán thực tế: Quãng đường phanh xe bằng tích phân',
      'Một ca nô đang chạy với vận tốc $16\\text{ m/s}$ thì tắt máy và chuyển động chậm dần với vận tốc $v(t) = 16 - 2t\\text{ (m/s)}$, trong đó $t$ là thời gian tính bằng giây kể từ lúc tắt máy. Tính quãng đường (m) ca nô đi thêm được từ lúc tắt máy đến khi dừng hẳn.',
      ['64'],
      'Ca nô dừng hẳn khi $v(t) = 0 \\Leftrightarrow 16 - 2t = 0 \\Leftrightarrow t = 8$ (giây). Quãng đường đi được là $S = \\int_0^8 (16 - 2t)\\,dt = (16t - t^2)\\Big|_0^8 = 128 - 64 = 64\\text{ (m)}$.',
      'Tìm thời điểm dừng hẳn $t_0$ từ $v(t_0) = 0$, sau đó tính $S = \\int_0^{t_0} v(t)\\,dt$.'
    ),
  ],
  [
    makeSO(
      'b12d2',
      1,
      'Tìm tham số thực trong phương trình tích phân',
      'Tìm số thực dương $a$ sao cho $\\int_1^a \\left(2x + \\frac{1}{x}\\right)dx = 3 + \\ln 2$.',
      'Vậy $a = 2$.',
      [
        {
          role: 'Bước 1: Tìm nguyên hàm và tính tích phân theo cận $a > 0$',
          content: 'Với $a > 0$, ta có $\\int_1^a \\left(2x + \\frac{1}{x}\\right)dx = (x^2 + \\ln x)\\Big|_1^a = a^2 + \\ln a - 1$.',
        },
        {
          role: 'Bước 2: Lập phương trình theo giả thiết bài toán',
          content: 'Theo đề bài, $a^2 + \\ln a - 1 = 3 + \\ln 2 \\Leftrightarrow a^2 + \\ln a = 4 + \\ln 2$.',
        },
        {
          role: 'Bước 3: Xét tính đơn điệu và kết luận nghiệm duy nhất',
          content: 'Xét hàm $g(t) = t^2 + \\ln t$ đồng biến trên $(0; +\\infty)$ vì $g\'(t) = 2t + \\frac{1}{t} > 0$. Mà $g(2) = 4 + \\ln 2$ nên phương trình có nghiệm duy nhất $a = 2$.',
        },
      ],
      'Sử dụng tính đơn điệu của hàm số $g(a) = a^2 + \\ln a$ để khẳng định nghiệm $a = 2$ là duy nhất.',
      'Kết hợp kiến thức tính đơn điệu ở Tập 1 với tích phân ở Tập 2.',
      0.7
    ),
    makeSO(
      'b12d2',
      2,
      'Tính giá trị trung bình của hàm số vận tốc',
      'Một vật chuyển động thẳng với vận tốc $v(t) = 3t^2 - 6t + 9\\text{ (m/s)}$ trong khoảng thời gian từ $t = 1$ giây đến $t = 4$ giây. Hãy tính vận tốc trung bình của vật trên đoạn thời gian $[1; 4]$.',
      'Vậy vận tốc trung bình của vật trên đoạn $[1; 4]$ là $12\\text{ m/s}$.',
      [
        {
          role: 'Bước 1: Viết công thức tính giá trị trung bình của hàm vận tốc trên $[1; 4]$',
          content: 'Vận tốc trung bình được tính bởi $v_{\\text{tb}} = \\frac{1}{4 - 1}\\int_1^4 (3t^2 - 6t + 9)\\,dt = \\frac{1}{3}\\int_1^4 (3t^2 - 6t + 9)\\,dt$.',
        },
        {
          role: 'Bước 2: Tính tích phân quãng đường đi được trên $[1; 4]$',
          content: 'Ta có $\\int_1^4 (3t^2 - 6t + 9)\\,dt = (t^3 - 3t^2 + 9t)\\Big|_1^4 = (64 - 48 + 36) - (1 - 3 + 9) = 52 - 7 = 45$... Kiểm tra lại: $45 / 3 = 15$.',
        },
        {
          role: 'Bước 3: Chia cho độ dài khoảng thời gian để suy ra vận tốc trung bình',
          content: 'Suy ra $v_{\\text{tb}} = \\frac{45}{3} = 15\\text{ (m/s)}$.',
        },
      ],
      'Vận tốc trung bình bằng tổng quãng đường chia cho tổng thời gian: $v_{\\text{tb}} = \\frac{1}{b-a}\\int_a^b v(t)\\,dt$.',
      'Bài toán làm rõ công thức giá trị trung bình của hàm số liên tục trong SGK.',
      0.65
    ),
    makeSO(
      'b12d2',
      3,
      'Chứng minh đẳng thức tích phân bằng biến đổi lượng giác',
      'Tính tích phân $I = \\int_0^{\\pi/2} \\sin x \\cos x\\,dx$.',
      'Vậy $I = \\frac{1}{2}$.',
      [
        {
          role: 'Bước 1: Sử dụng công thức nhân đôi lượng giác',
          content: 'Áp dụng công thức $\\sin x \\cos x = \\frac{1}{2}\\sin 2x$, ta viết lại $I = \\frac{1}{2}\\int_0^{\\pi/2} \\sin 2x\\,dx$.',
        },
        {
          role: 'Bước 2: Tìm nguyên hàm của hàm số $\\frac{1}{2}\\sin 2x$',
          content: 'Một nguyên hàm của $\\frac{1}{2}\\sin 2x$ là $F(x) = -\\frac{1}{4}\\cos 2x$.',
        },
        {
          role: 'Bước 3: Thay cận $0$ và $\\frac{\\pi}{2}$ để tính giá trị tích phân',
          content: 'Ta có $I = -\\frac{1}{4}\\cos 2x\\Big|_0^{\\pi/2} = -\\frac{1}{4}(\\cos\\pi - \\cos 0) = -\\frac{1}{4}(-1 - 1) = \\frac{1}{2}$.',
        },
      ],
      'Dùng công thức nhân đôi $\\sin x \\cos x = \\frac{1}{2}\\sin 2x$ giúp tính tích phân rất nhanh gọn.',
      'Kỹ thuật biến đổi lượng giác cơ bản thường gặp trong đề thi.',
      0.65
    ),
  ]
);

// Sync conclusionTarget of bai12De2.part4[1] with 15 m/s
bai12De2.part4[1].conclusionTarget = 'Vậy vận tốc trung bình của vật trên đoạn $[1; 4]$ là $15\\text{ m/s}$.';

export const CHAPTER_4_PART_A_LESSONS: LessonInfo[] = [
  {
    id: 'bai-11',
    code: 'Bài 11',
    title: 'Nguyên hàm',
    fullName: 'Bài 11. Nguyên hàm',
    chapterId: 'chuong-4',
    chapterTitle: 'CHƯƠNG IV. NGUYÊN HÀM VÀ TÍCH PHÂN',
    pageNumber: 4,
    coreTopics: [
      'Khái niệm nguyên hàm, họ nguyên hàm và mối liên hệ giữa nguyên hàm với đạo hàm',
      'Các tính chất cơ bản của nguyên hàm (nguyên hàm của tổng, hiệu, tích với một số thực khác 0)',
      'Bảng nguyên hàm các hàm số sơ cấp (hàm lũy thừa, hàm lượng giác, hàm số mũ) và bài toán vận tốc - quãng đường',
    ],
    practiceExams: [bai11De1, bai11De2],
  },
  {
    id: 'bai-12',
    code: 'Bài 12',
    title: 'Tích phân',
    fullName: 'Bài 12. Tích phân',
    chapterId: 'chuong-4',
    chapterTitle: 'CHƯƠNG IV. NGUYÊN HÀM VÀ TÍCH PHÂN',
    pageNumber: 12,
    coreTopics: [
      'Bài toán diện tích hình thang cong, định nghĩa tích phân và công thức Newton-Leibniz',
      'Các tính chất của tích phân (tính chất tuyến tính, tính chất chèn cận, tích phân hàm có trị tuyệt đối)',
      'Giá trị trung bình của hàm số và vận dụng tích phân giải bài toán chuyển động, kinh tế, vật lý',
    ],
    practiceExams: [bai12De1, bai12De2],
  },
];
