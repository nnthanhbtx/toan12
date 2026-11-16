import { LessonInfo } from './types';
import { makeMC, makeTF, makeSA, makeSO, makeLessonExam } from './helpers';

// ============================================================================
// BÀI 13: ỨNG DỤNG HÌNH HỌC CỦA TÍCH PHÂN (SGK Toán 12 Tập 2 - Trang 19)
// ============================================================================

const bai13De1 = makeLessonExam(
  'bai13-de01',
  'Bài 13 - Đề ôn số 1',
  'Ứng dụng hình học của tích phân: Diện tích hình phẳng và Thể tích vật thể',
  'Đề ôn tập Bài 13 (Số 1) bám sát yêu cầu cần đạt SGK Toán 12 Tập 2 Kết nối tri thức: Công thức tính diện tích hình phẳng giới hạn bởi một hoặc hai đồ thị hàm số, thể tích vật thể theo diện tích thiết diện S(x), thể tích khối tròn xoay quanh trục Ox và bài toán thực tế.',
  [
    makeMC(
      'b13d1',
      1,
      'Công thức diện tích hình phẳng giới hạn bởi 1 đồ thị và trục hoành',
      'Cho hàm số $y = f(x)$ liên tục trên đoạn $[a; b]$. Diện tích $S$ của hình phẳng giới hạn bởi đồ thị hàm số $y = f(x)$, trục hoành $Ox$ và hai đường thẳng $x = a, x = b$ được tính theo công thức:',
      [
        '$S = \\int_a^b |f(x)|\\,dx$',
        '$S = \\int_a^b f(x)\\,dx$',
        '$S = \\pi \\int_a^b [f(x)]^2\\,dx$',
        '$S = \\left|\\int_a^b f(x)\\,dx\\right|$',
      ],
      'A',
      'Diện tích hình phẳng giới hạn bởi đồ thị $y = f(x)$, trục hoành và $x = a, x = b$ luôn là $S = \\int_a^b |f(x)|\\,dx$.',
      'Phân biệt rõ: công thức diện tích có dấu giá trị tuyệt đối ở bên trong dấu tích phân, không có hệ số $\\pi$.',
      'sp_integral_area_curve'
    ),
    makeMC(
      'b13d1',
      2,
      'Công thức diện tích hình phẳng giới hạn bởi 2 đồ thị',
      'Cho hai hàm số $y = f(x)$ và $y = g(x)$ liên tục trên đoạn $[a; b]$. Diện tích hình phẳng giới hạn bởi đồ thị hai hàm số $y = f(x)$, $y = g(x)$ và hai đường thẳng $x = a, x = b$ là:',
      [
        '$S = \\int_a^b |f(x) - g(x)|\\,dx$',
        '$S = \\int_a^b [f(x) - g(x)]\\,dx$',
        '$S = \\pi \\int_a^b |f(x) - g(x)|\\,dx$',
        '$S = \\int_a^b [f^2(x) - g^2(x)]\\,dx$',
      ],
      'A',
      'Theo định lý trong SGK: Diện tích hình phẳng giới hạn bởi $y = f(x), y = g(x)$ và $x = a, x = b$ là $S = \\int_a^b |f(x) - g(x)|\\,dx$.',
      'Nếu trên đoạn $[a; b]$ đồ thị $y = f(x)$ luôn nằm phía trên $y = g(x)$ thì $|f(x) - g(x)| = f(x) - g(x)$.',
      'sp_integral_area_curve'
    ),
    makeMC(
      'b13d1',
      3,
      'Tính diện tích hình phẳng giới hạn bởi parabol và trục hoành',
      'Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = 4 - x^2$ và trục hoành $Ox$ bằng:',
      [
        '$\\frac{32}{3}$',
        '$\\frac{16}{3}$',
        '$8$',
        '$\\frac{64}{3}$',
      ],
      'A',
      'Phương trình hoành độ giao điểm: $4 - x^2 = 0 \\Leftrightarrow x = \\pm 2$. Trên $[-2; 2]$, $4 - x^2 \\ge 0$ nên $S = \\int_{-2}^2 (4 - x^2)\\,dx = \\left(4x - \\frac{x^3}{3}\\right)\\Big|_{-2}^2 = \\frac{16}{3} - \\left(-\\frac{16}{3}\\right) = \\frac{32}{3}$.',
      'Khi đề chưa cho hai đường thẳng $x = a, x = b$, ta giải phương trình hoành độ giao điểm $f(x) = 0$ để tìm hai cận.'
    ),
    makeMC(
      'b13d1',
      4,
      'Tính diện tích hình phẳng giới hạn bởi hai đồ thị',
      'Diện tích hình phẳng giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 2x + 3$ bằng:',
      [
        '$\\frac{32}{3}$',
        '$\\frac{16}{3}$',
        '$9$',
        '$\\frac{28}{3}$',
      ],
      'A',
      'Xét phương trình $x^2 = 2x + 3 \\Leftrightarrow x^2 - 2x - 3 = 0 \\Leftrightarrow x = -1$ hoặc $x = 3$. Khi đó $S = \\int_{-1}^3 (2x + 3 - x^2)\\,dx = \\left(x^2 + 3x - \\frac{x^3}{3}\\right)\\Big|_{-1}^3 = 9 - \\left(-\\frac{5}{3}\\right) = \\frac{32}{3}$.',
      'Giải phương trình $f(x) = g(x)$ để tìm cận nhỏ nhất và lớn nhất.',
      'sp_integral_area_curve'
    ),
    makeMC(
      'b13d1',
      5,
      'Công thức tính thể tích vật thể theo diện tích thiết diện S(x)',
      'Trong không gian, cho một vật thể giới hạn bởi hai mặt phẳng vuông góc với trục $Ox$ tại các điểm có hoành độ $x = a$ và $x = b\\ (a < b)$. Biết mặt phẳng vuông góc với trục $Ox$ tại điểm có hoành độ $x\\ (a \\le x \\le b)$ cắt vật thể theo thiết diện có diện tích là $S(x)$ (với $S(x)$ liên tục trên $[a; b]$). Thể tích $V$ của vật thể đó được tính bởi:',
      [
        '$V = \\int_a^b S(x)\\,dx$',
        '$V = \\pi \\int_a^b S(x)\\,dx$',
        '$V = \\pi \\int_a^b [S(x)]^2\\,dx$',
        '$V = \\int_a^b [S(x)]^2\\,dx$',
      ],
      'A',
      'Công thức tổng quát tính thể tích vật thể theo diện tích thiết diện $S(x)$ là $V = \\int_a^b S(x)\\,dx$ (không có hệ số $\\pi$).',
      'Lưu ý: Tính thể tích theo diện tích thiết diện $S(x)$ thì KHÔNG nhân $\\pi$.'
    ),
    makeMC(
      'b13d1',
      6,
      'Thể tích vật thể có thiết diện là tam giác đều',
      'Tính thể tích $V$ của vật thể nằm giữa hai mặt phẳng $x = 0$ và $x = 2$, biết rằng thiết diện của vật thể bị cắt bởi mặt phẳng vuông góc với trục $Ox$ tại điểm có hoành độ $x\\ (0 \\le x \\le 2)$ là một tam giác đều có cạnh bằng $2\\sqrt{x}$.',
      [
        '$2\\sqrt{3}$',
        '$\\sqrt{3}$',
        '$2\\pi\\sqrt{3}$',
        '$4\\sqrt{3}$',
      ],
      'A',
      'Diện tích thiết diện tam giác đều cạnh $a = 2\\sqrt{x}$ là $S(x) = \\frac{a^2\\sqrt{3}}{4} = \\frac{4x\\sqrt{3}}{4} = x\\sqrt{3}$. Thể tích vật thể là $V = \\int_0^2 x\\sqrt{3}\\,dx = \\frac{\\sqrt{3}}{2}x^2\\Big|_0^2 = 2\\sqrt{3}$.',
      'Diện tích tam giác đều cạnh $a$ là $S = \\frac{a^2\\sqrt{3}}{4}$.'
    ),
    makeMC(
      'b13d1',
      7,
      'Công thức thể tích khối tròn xoay khi quay quanh trục Ox',
      'Cho hàm số $y = f(x)$ liên tục trên đoạn $[a; b]$. Khi quay hình phẳng giới hạn bởi đồ thị hàm số $y = f(x)$, trục hoành $Ox$ và hai đường thẳng $x = a, x = b$ xung quanh trục $Ox$, ta được khối tròn xoay có thể tích $V$ là:',
      [
        '$V = \\pi \\int_a^b [f(x)]^2\\,dx$',
        '$V = \\int_a^b [f(x)]^2\\,dx$',
        '$V = \\pi \\int_a^b |f(x)|\\,dx$',
        '$V = \\pi^2 \\int_a^b [f(x)]^2\\,dx$',
      ],
      'A',
      'Thiết diện vuông góc với $Ox$ là hình tròn bán kính $R = |f(x)|$, có diện tích $S(x) = \\pi R^2 = \\pi [f(x)]^2$. Do đó $V = \\pi \\int_a^b [f(x)]^2\\,dx$.',
      'Thể tích khối tròn xoay luôn có nhân tử $\\pi$ và bình phương hàm số $[f(x)]^2$.',
      'sp_solid_of_revolution'
    ),
    makeMC(
      'b13d1',
      8,
      'Tính thể tích khối tròn xoay tạo bởi hàm căn thức',
      'Thể tích khối tròn xoay thu được khi quay hình phẳng giới hạn bởi đồ thị hàm số $y = \\sqrt{2x + 1}$, trục hoành $Ox$ và hai đường thẳng $x = 0, x = 2$ quanh trục $Ox$ bằng:',
      [
        '$6\\pi$',
        '$6$',
        '$4\\pi$',
        '$8\\pi$',
      ],
      'A',
      'Ta có $V = \\pi \\int_0^2 (\\sqrt{2x + 1})^2\\,dx = \\pi \\int_0^2 (2x + 1)\\,dx = \\pi (x^2 + x)\\Big|_0^2 = 6\\pi$.',
      'Bình phương $\\left(\\sqrt{2x+1}\\right)^2 = 2x + 1$ rồi nhân với $\\pi$.',
      'sp_solid_of_revolution'
    ),
    makeMC(
      'b13d1',
      9,
      'Tính thể tích khối tròn xoay tạo bởi hàm số mũ',
      'Quay hình phẳng giới hạn bởi đồ thị hàm số $y = e^x$, trục hoành $Ox$ và hai đường thẳng $x = 0, x = 1$ xung quanh trục $Ox$. Thể tích khối tròn xoay tạo thành bằng:',
      [
        '$\\frac{\\pi(e^2 - 1)}{2}$',
        '$\\pi(e^2 - 1)$',
        '$\\frac{e^2 - 1}{2}$',
        '$\\pi(e - 1)$',
      ],
      'A',
      'Ta có $V = \\pi \\int_0^1 (e^x)^2\\,dx = \\pi \\int_0^1 e^{2x}\\,dx = \\pi \\cdot \\frac{e^{2x}}{2}\\Big|_0^1 = \\frac{\\pi(e^2 - 1)}{2}$.',
      'Lưu ý $(e^x)^2 = e^{2x}$ có nguyên hàm là $\\frac{1}{2}e^{2x}$.',
      'sp_solid_of_revolution'
    ),
    makeMC(
      'b13d1',
      10,
      'Diện tích hình phẳng có đồ thị cắt trục hoành trên đoạn',
      'Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = x^3 - x$, trục hoành và hai đường thẳng $x = -1, x = 1$ bằng:',
      [
        '$\\frac{1}{2}$',
        '$0$',
        '$\\frac{1}{4}$',
        '$1$',
      ],
      'A',
      'Ta có $x^3 - x = 0 \\Leftrightarrow x \\in \\{-1; 0; 1\\}$. Suy ra $S = \\int_{-1}^0 (x^3 - x)\\,dx + \\int_0^1 (x - x^3)\\,dx = \\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}$.',
      'Không được bỏ dấu trị tuyệt đối ngay trên $[-1; 1]$ vì $\\int_{-1}^1 (x^3 - x)\\,dx = 0$, trong khi diện tích bằng $\\frac{1}{2}$.'
    ),
    makeMC(
      'b13d1',
      11,
      'Thể tích khối nón cụt bằng tích phân khối tròn xoay',
      'Quay hình thang vuông giới hạn bởi đường thẳng $y = x + 1$, trục $Ox$ và hai đường thẳng $x = 0, x = 2$ quanh trục $Ox$. Thể tích khối nón cụt tạo thành là:',
      [
        '$\\frac{26\\pi}{3}$',
        '$\\frac{28\\pi}{3}$',
        '$6\\pi$',
        '$\\frac{26}{3}$',
      ],
      'A',
      'Ta có $V = \\pi \\int_0^2 (x + 1)^2\\,dx = \\pi \\cdot \\frac{(x + 1)^3}{3}\\Big|_0^2 = \\frac{\\pi}{3}(3^3 - 1^3) = \\frac{26\\pi}{3}$.',
      'Có thể khai triển $(x+1)^2 = x^2 + 2x + 1$ hoặc dùng nguyên hàm $\\frac{(x+1)^3}{3}$.',
      'sp_solid_of_revolution'
    ),
    makeMC(
      'b13d1',
      12,
      'Bài toán thực tế: Diện tích cổng vòm parabol',
      'Một cổng chào có dạng hình parabol với phương trình $y = -\\frac{1}{2}x^2 + 8$ (đơn vị trên hai trục là mét) và mặt đất là trục hoành $Ox$. Diện tích mặt phẳng giới hạn bởi vòm cổng và mặt đất bằng:',
      [
        '$\\frac{128}{3}\\text{ m}^2$',
        '$\\frac{64}{3}\\text{ m}^2$',
        '$32\\text{ m}^2$',
        '$64\\text{ m}^2$',
      ],
      'A',
      'Chân cổng ứng với $y = 0 \\Leftrightarrow -\\frac{1}{2}x^2 + 8 = 0 \\Leftrightarrow x = \\pm 4$. Diện tích cổng là $S = \\int_{-4}^4 \\left(-\\frac{1}{2}x^2 + 8\\right)dx = \\left(-\\frac{x^3}{6} + 8x\\right)\\Big|_{-4}^4 = \\frac{64}{3} - \\left(-\\frac{64}{3}\\right) = \\frac{128}{3}\\text{ (m}^2)$.',
      'Với cổng parabol rộng $2a = 8\\text{ m}$, cao $h = 8\\text{ m}$, diện tích có thể kiểm tra nhanh bằng công thức $S = \\frac{2}{3} \\cdot (2a) \\cdot h = \\frac{2}{3}\\cdot 8\\cdot 8 = \\frac{128}{3}$.',
      'sp_integral_area_curve'
    ),
  ],
  [
    makeTF(
      'b13d1',
      1,
      'Diện tích hình phẳng và thể tích khối tròn xoay của hàm bậc hai',
      'Cho hình phẳng $(H)$ giới hạn bởi đồ thị hàm số $y = 2x - x^2$ và trục hoành $Ox$.',
      [
        {
          text: 'Hoành độ giao điểm của đồ thị hàm số $y = 2x - x^2$ và trục hoành là $x = 0$ và $x = 2$.',
          isCorrect: true,
          exp: 'Giải phương trình $2x - x^2 = 0 \\Leftrightarrow x(2 - x) = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$.',
        },
        {
          text: 'Diện tích của hình phẳng $(H)$ được tính bởi $S = \\int_0^2 (2x - x^2)\\,dx$.',
          isCorrect: true,
          exp: 'Trên đoạn $[0; 2]$, $2x - x^2 \\ge 0$ nên $|2x - x^2| = 2x - x^2$.',
        },
        {
          text: 'Giá trị diện tích của hình phẳng $(H)$ bằng $\\frac{4}{3}$.',
          isCorrect: true,
          exp: '$S = \\left(x^2 - \\frac{x^3}{3}\\right)\\Big|_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$.',
        },
        {
          text: 'Khi quay hình phẳng $(H)$ quanh trục $Ox$, thể tích khối tròn xoay thu được bằng $\\frac{16}{15}$.',
          isCorrect: false,
          exp: 'Thể tích khối tròn xoay là $V = \\pi \\int_0^2 (2x - x^2)^2\\,dx = \\pi \\int_0^2 (4x^2 - 4x^3 + x^4)\\,dx = \\pi\\left(\\frac{4}{3}x^3 - x^4 + \\frac{x^5}{5}\\right)\\Big|_0^2 = \\frac{16\\pi}{15}$ (thiếu nhân tử $\\pi$).',
        },
      ],
      'Chú ý phân biệt kết quả thể tích khối tròn xoay phải có $\\pi$.',
      'sp_solid_of_revolution'
    ),
    makeTF(
      'b13d1',
      2,
      'Hình phẳng giới hạn bởi hai đồ thị hàm số',
      'Cho hai hàm số $f(x) = x^2 - 2x$ và $g(x) = x$. Gọi $(D)$ là hình phẳng giới hạn bởi đồ thị của hai hàm số đã cho.',
      [
        {
          text: 'Hai đồ thị cắt nhau tại hai điểm có hoành độ $x = 0$ và $x = 3$.',
          isCorrect: true,
          exp: 'Phương trình hoành độ giao điểm: $x^2 - 2x = x \\Leftrightarrow x^2 - 3x = 0 \\Leftrightarrow x = 0$ hoặc $x = 3$.',
        },
        {
          text: 'Trên đoạn $[0; 3]$, đồ thị hàm số $y = f(x)$ nằm phía trên đồ thị hàm số $y = g(x)$.',
          isCorrect: false,
          exp: 'Với $x \\in (0; 3)$, $f(x) - g(x) = x^2 - 3x < 0$ nên đồ thị $y = g(x)$ nằm phía trên đồ thị $y = f(x)$.',
        },
        {
          text: 'Diện tích hình phẳng $(D)$ được tính bởi $S = \\int_0^3 (3x - x^2)\\,dx$.',
          isCorrect: true,
          exp: 'Vì $g(x) \\ge f(x)$ trên $[0; 3]$ nên $|f(x) - g(x)| = g(x) - f(x) = 3x - x^2$.',
        },
        {
          text: 'Diện tích của hình phẳng $(D)$ bằng $\\frac{9}{2}$.',
          isCorrect: true,
          exp: '$S = \\left(\\frac{3}{2}x^2 - \\frac{x^3}{3}\\right)\\Big|_0^3 = \\frac{27}{2} - 9 = \\frac{9}{2}$.',
        },
      ],
      'Xét dấu hiệu $f(x) - g(x)$ trên đoạn giữa hai giao điểm để phá dấu giá trị tuyệt đối chính xác.',
      'sp_integral_area_curve'
    ),
    makeTF(
      'b13d1',
      3,
      'Bài toán thực tế: Tính thể tích chậu hoa có mặt cắt tròn xoay',
      'Một chiếc bình trang trí có hình dạng thu được khi quay hình phẳng giới hạn bởi đường cong $y = \\sqrt{x + 4}$, trục hoành $Ox$ và hai đường thẳng $x = 0, x = 5$ xung quanh trục $Ox$ (đơn vị trên các trục tọa độ là đề-xi-mét).',
      [
        {
          text: 'Chiều cao của chiếc bình trang trí là $5\\text{ dm}$.',
          isCorrect: true,
          exp: 'Bình giới hạn từ $x = 0$ đến $x = 5$ dọc theo trục quay $Ox$ nên chiều cao bằng $5 - 0 = 5\\text{ (dm)}$.',
        },
        {
          text: 'Bán kính đáy nhỏ (tại $x = 0$) bằng $2\\text{ dm}$ và bán kính miệng bình (tại $x = 5$) bằng $3\\text{ dm}$.',
          isCorrect: true,
          exp: 'Tại $x = 0 \\Rightarrow R_1 = \\sqrt{4} = 2\\text{ dm}$; tại $x = 5 \\Rightarrow R_2 = \\sqrt{9} = 3\\text{ dm}$.',
        },
        {
          text: 'Diện tích thiết diện vuông góc với trục $Ox$ tại điểm có hoành độ $x \\in [0; 5]$ là $S(x) = (x + 4)\\text{ dm}^2$.',
          isCorrect: false,
          exp: 'Thiết diện là hình tròn bán kính $R = \\sqrt{x + 4}$ nên diện tích là $S(x) = \\pi R^2 = \\pi(x + 4)\\text{ dm}^2$.',
        },
        {
          text: 'Thể tích của chiếc bình trang trí bằng $\\frac{65\\pi}{2}\\text{ dm}^3$ (tức khoảng $102{,}1\\text{ lít}$).',
          isCorrect: true,
          exp: '$V = \\pi \\int_0^5 (x + 4)\\,dx = \\pi\\left(\\frac{x^2}{2} + 4x\\right)\\Big|_0^5 = \\pi\\left(\\frac{25}{2} + 20\\right) = \\frac{65\\pi}{2} \\approx 102{,}1\\text{ (dm}^3)$.',
        },
      ],
      'Diện tích mặt cắt tròn xoay tại hoành độ $x$ luôn là $\\pi [f(x)]^2$.',
      'sp_solid_of_revolution'
    ),
  ],
  [
    makeSA(
      'b13d1',
      1,
      'Tính diện tích hình phẳng giới hạn bởi hai parabol',
      'Tính diện tích $S$ của hình phẳng giới hạn bởi hai parabol $y = x^2 - 4x$ và $y = -x^2 + 2x$.',
      ['9'],
      'Phương trình hoành độ giao điểm: $x^2 - 4x = -x^2 + 2x \\Leftrightarrow 2x^2 - 6x = 0 \\Leftrightarrow x = 0$ hoặc $x = 3$. Khi đó $S = \\int_0^3 (6x - 2x^2)\\,dx = \\left(3x^2 - \\frac{2}{3}x^3\\right)\\Big|_0^3 = 27 - 18 = 9$.',
      'Lấy phương trình parabol úp trừ parabol ngửa trên đoạn $[0; 3]$.',
      undefined,
      'sp_integral_area_curve'
    ),
    makeSA(
      'b13d1',
      2,
      'Tính thể tích vật thể biết diện tích thiết diện hình vuông',
      'Một vật thể nằm giữa hai mặt phẳng $x = 1$ và $x = 4$. Biết thiết diện của vật thể bị cắt bởi mặt phẳng vuông góc với trục $Ox$ tại điểm có hoành độ $x\\ (1 \\le x \\le 4)$ là một hình vuông có cạnh bằng $\\sqrt{2x + 1}$. Tính thể tích $V$ của vật thể đó.',
      ['18'],
      'Diện tích thiết diện hình vuông là $S(x) = (\\sqrt{2x + 1})^2 = 2x + 1$. Thể tích vật thể là $V = \\int_1^4 (2x + 1)\\,dx = (x^2 + x)\\Big|_1^4 = (16 + 4) - (1 + 1) = 18$.',
      'Thể tích tính theo diện tích thiết diện hình vuông: $V = \\int_1^4 a^2(x)\\,dx$ (không có $\\pi$).'
    ),
    makeSA(
      'b13d1',
      3,
      'Tính thể tích khối tròn xoay theo pi',
      'Quay hình phẳng giới hạn bởi đồ thị hàm số $y = \\sqrt{3x^2 + 2}$, trục $Ox$ và hai đường thẳng $x = 0, x = 2$ xung quanh trục $Ox$, ta được khối tròn xoay có thể tích $V = k\\pi$. Tìm giá trị của $k$.',
      ['12'],
      'Ta có $V = \\pi \\int_0^2 (3x^2 + 2)\\,dx = \\pi (x^3 + 2x)\\Big|_0^2 = \\pi (8 + 4) = 12\\pi$. Vậy $k = 12$.',
      'Đọc kỹ yêu cầu đề bài: đề hỏi hệ số $k$ trong $V = k\\pi$.',
      undefined,
      'sp_solid_of_revolution'
    ),
    makeSA(
      'b13d1',
      4,
      'Bài toán thực tế: Chi phí trồng cỏ trên khuôn viên parabol',
      'Một khuôn viên hoa viên được giới hạn bởi một nhánh parabol $y = x^2$ và đường thẳng $y = 4$ (đơn vị trên mỗi trục là mét). Người ta trồng hoa trên toàn bộ diện tích khuôn viên đó với chi phí $150$ nghìn đồng cho mỗi mét vuông. Tính tổng chi phí trồng hoa (đơn vị: nghìn đồng).',
      ['1600'],
      'Hoành độ giao điểm: $x^2 = 4 \\Leftrightarrow x = \\pm 2$. Diện tích khuôn viên là $S = \\int_{-2}^2 (4 - x^2)\\,dx = \\left(4x - \\frac{x^3}{3}\\right)\\Big|_{-2}^2 = \\frac{32}{3}\\text{ (m}^2)$. Tổng chi phí là $\\frac{32}{3} \\times 150 = 1600$ (nghìn đồng).',
      'Tính diện tích miền phẳng $S$ rồi nhân với đơn giá trên $1\\text{ m}^2$.',
      'nghìn đồng',
      'sp_integral_area_curve'
    ),
  ],
  [
    makeSO(
      'b13d1',
      1,
      'Tính diện tích hình phẳng giới hạn bởi đồ thị hàm bậc ba và đường thẳng',
      'Tính diện tích $S$ của hình phẳng giới hạn bởi đồ thị hàm số $y = x^3 - 3x$ và đường thẳng $y = x$.',
      'Vậy diện tích hình phẳng cần tìm là $S = 8$.',
      [
        {
          role: 'Bước 1: Giải phương trình hoành độ giao điểm của hai đồ thị',
          content: 'Xét phương trình $x^3 - 3x = x \\Leftrightarrow x^3 - 4x = 0 \\Leftrightarrow x = -2, x = 0$ hoặc $x = 2$.',
        },
        {
          role: 'Bước 2: Tách tích phân diện tích theo các hoành độ giao điểm',
          content: 'Ta có $S = \\int_{-2}^2 |x^3 - 4x|\\,dx = \\int_{-2}^0 (x^3 - 4x)\\,dx + \\int_0^2 (4x - x^3)\\,dx$.',
        },
        {
          role: 'Bước 3: Tính giá trị từng tích phân và kết luận diện tích',
          content: 'Ta có $\\left(\\frac{x^4}{4} - 2x^2\\right)\\Big|_{-2}^0 = 0 - (4 - 8) = 4$ và $\\left(2x^2 - \\frac{x^4}{4}\\right)\\Big|_0^2 = 8 - 4 = 4$. Vậy $S = 4 + 4 = 8$.',
        },
      ],
      'Khi phương trình hoành độ giao điểm có 3 nghiệm $x_1 < x_2 < x_3$, phải tách tích phân thành 2 đoạn $[x_1; x_2]$ và $[x_2; x_3]$.',
      'Bài toán kinh điển giúp học sinh không mắc lỗi bỏ trị tuyệt đối trên toàn đoạn $[-2; 2]$.',
      0.7,
      'sp_integral_area_curve'
    ),
    makeSO(
      'b13d1',
      2,
      'Tính thể tích khối tròn xoay giới hạn bởi đồ thị hàm lượng giác',
      'Tính thể tích $V$ của khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi đồ thị hàm số $y = \\sqrt{\\cos x}$, trục hoành $Ox$ và hai đường thẳng $x = 0, x = \\frac{\\pi}{2}$ xung quanh trục $Ox$.',
      'Vậy thể tích khối tròn xoay là $V = \\pi$.',
      [
        {
          role: 'Bước 1: Thiết lập công thức thể tích khối tròn xoay quanh trục $Ox$',
          content: 'Áp dụng công thức thể tích khối tròn xoay: $V = \\pi \\int_0^{\\pi/2} (\\sqrt{\\cos x})^2\\,dx = \\pi \\int_0^{\\pi/2} \\cos x\\,dx$.',
        },
        {
          role: 'Bước 2: Tìm nguyên hàm và thay cận tích phân',
          content: 'Ta có $V = \\pi \\sin x\\Big|_0^{\\pi/2} = \\pi\\left(\\sin\\frac{\\pi}{2} - \\sin 0\\right)$.',
        },
        {
          role: 'Bước 3: Rút gọn và kết luận',
          content: 'Vì $\\sin\\frac{\\pi}{2} = 1$ và $\\sin 0 = 0$ nên $V = \\pi(1 - 0) = \\pi$.',
        },
      ],
      'Bình phương $(\\sqrt{\\cos x})^2 = \\cos x$ trên đoạn $[0; \\frac{\\pi}{2}]$.',
      'Bài toán kết hợp gọn nhẹ công thức khối tròn xoay và tích phân lượng giác.',
      0.65,
      'sp_solid_of_revolution'
    ),
    makeSO(
      'b13d1',
      3,
      'Bài toán thực tế: Tính thể tích chỏm cầu bằng tích phân',
      'Một chỏm cầu bằng pha lê có bán kính cầu $R = 5\\text{ cm}$ và chiều cao chỏm cầu là $h = 2\\text{ cm}$, được tạo thành khi quay hình phẳng giới hạn bởi cung tròn $y = \\sqrt{25 - x^2}$, trục $Ox$ và hai đường thẳng $x = 3, x = 5$ quanh trục $Ox$. Hãy tính thể tích của chỏm cầu đó.',
      'Vậy thể tích của chỏm cầu là $V = \\frac{52\\pi}{3}\\text{ cm}^3$.',
      [
        {
          role: 'Bước 1: Viết công thức tích phân tính thể tích khối tròn xoay',
          content: 'Thể tích chỏm cầu là $V = \\pi \\int_3^5 (\\sqrt{25 - x^2})^2\\,dx = \\pi \\int_3^5 (25 - x^2)\\,dx$.',
        },
        {
          role: 'Bước 2: Tìm nguyên hàm và áp dụng công thức Newton-Leibniz',
          content: 'Ta có $V = \\pi \\left(25x - \\frac{x^3}{3}\\right)\\Big|_3^5 = \\pi\\left[\\left(125 - \\frac{125}{3}\\right) - \\left(75 - \\frac{27}{3}\\right)\\right]$.',
        },
        {
          role: 'Bước 3: Thu gọn kết quả thể tích',
          content: 'Tính toán ta được $V = \\pi\\left(\\frac{250}{3} - 66\\right) = \\frac{52\\pi}{3}\\text{ (cm}^3)$.',
        },
      ],
      'Phương trình đường tròn tâm $O$ bán kính $R = 5$ là $x^2 + y^2 = 25 \\Rightarrow y^2 = 25 - x^2$.',
      'Ứng dụng trực tiếp tích phân để chứng minh và tính thể tích chỏm cầu trong SGK.',
      0.65,
      'sp_solid_of_revolution'
    ),
  ]
);

const bai13De2 = makeLessonExam(
  'bai13-de02',
  'Bài 13 - Đề ôn số 2',
  'Ứng dụng hình học của tích phân: Thiết diện, khối tròn xoay và thực tiễn',
  'Đề ôn tập Bài 13 (Số 2) gồm 22 câu hỏi chuẩn cấu trúc 4 phần, giúp học sinh thành thạo kỹ năng thiết lập công thức diện tích, thể tích và giải quyết các bài toán kiến trúc - kỹ thuật.',
  [
    makeMC(
      'b13d2',
      1,
      'Thiết lập công thức diện tích từ miền đồ thị',
      'Cho hàm số $y = f(x)$ liên tục trên đoạn $[a; c]$ có đồ thị cắt trục hoành tại điểm $b \\in (a; c)$. Biết $f(x) \\ge 0$ trên $[a; b]$ và $f(x) \\le 0$ trên $[b; c]$. Diện tích hình phẳng giới hạn bởi đồ thị $y = f(x)$, trục $Ox$ và hai đường thẳng $x = a, x = c$ bằng:',
      [
        '$\\int_a^b f(x)\\,dx - \\int_b^c f(x)\\,dx$',
        '$\\int_a^b f(x)\\,dx + \\int_b^c f(x)\\,dx$',
        '$-\\int_a^b f(x)\\,dx + \\int_b^c f(x)\\,dx$',
        '$\\int_a^c f(x)\\,dx$',
      ],
      'A',
      'Vì $f(x) \\ge 0$ trên $[a; b]$ và $f(x) \\le 0$ trên $[b; c]$ nên $S = \\int_a^b |f(x)|\\,dx + \\int_b^c |f(x)|\\,dx = \\int_a^b f(x)\\,dx - \\int_b^c f(x)\\,dx$.',
      'Phần đồ thị nằm phía trên trục hoành mang dấu cộng, phần nằm phía dưới trục hoành mang dấu trừ.',
      'sp_integral_area_curve'
    ),
    makeMC(
      'b13d2',
      2,
      'Tính diện tích hình phẳng giới hạn bởi hàm số mũ và trục hoành',
      'Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = e^{2x}$, trục hoành $Ox$ và hai đường thẳng $x = 0, x = \\ln 2$ bằng:',
      [
        '$\\frac{3}{2}$',
        '$3$',
        '$\\frac{1}{2}$',
        '$2$',
      ],
      'A',
      'Ta có $S = \\int_0^{\\ln 2} e^{2x}\\,dx = \\frac{1}{2}e^{2x}\\Big|_0^{\\ln 2} = \\frac{1}{2}(e^{2\\ln 2} - e^0) = \\frac{1}{2}(4 - 1) = \\frac{3}{2}$.',
      'Nhớ công thức $e^{2\\ln 2} = (e^{\\ln 2})^2 = 2^2 = 4$.'
    ),
    makeMC(
      'b13d2',
      3,
      'Tính diện tích hình phẳng giới hạn bởi hàm phân thức 1/x',
      'Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = \\frac{2}{x}$, trục hoành và hai đường thẳng $x = 1, x = e^2$ bằng:',
      [
        '$4$',
        '$2$',
        '$2e^2$',
        '$e^2 - 1$',
      ],
      'A',
      'Trên $[1; e^2]$, $\\frac{2}{x} > 0$ nên $S = \\int_1^{e^2} \\frac{2}{x}\\,dx = 2\\ln x\\Big|_1^{e^2} = 2(\\ln e^2 - \\ln 1) = 2(2 - 0) = 4$.',
      'Sử dụng $\\ln(e^k) = k$.'
    ),
    makeMC(
      'b13d2',
      4,
      'Diện tích hình phẳng giới hạn bởi parabol và đường thẳng đi qua gốc tọa độ',
      'Diện tích hình phẳng giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 4x$ bằng:',
      [
        '$\\frac{32}{3}$',
        '$\\frac{16}{3}$',
        '$16$',
        '$\\frac{64}{3}$',
      ],
      'A',
      'Giao điểm: $x^2 = 4x \\Leftrightarrow x = 0$ hoặc $x = 4$. Khi đó $S = \\int_0^4 (4x - x^2)\\,dx = \\left(2x^2 - \\frac{x^3}{3}\\right)\\Big|_0^4 = 32 - \\frac{64}{3} = \\frac{32}{3}$.',
      'Trên $[0; 4]$, đường thẳng $y = 4x$ nằm phía trên parabol $y = x^2$.',
      'sp_integral_area_curve'
    ),
    makeMC(
      'b13d2',
      5,
      'Thể tích vật thể có diện tích thiết diện cho trước',
      'Một vật thể giới hạn bởi hai mặt phẳng vuông góc với trục $Ox$ tại $x = 0$ và $x = 3$. Biết diện tích thiết diện của vật thể khi cắt bởi mặt phẳng vuông góc với $Ox$ tại điểm có hoành độ $x\\ (0 \\le x \\le 3)$ là $S(x) = 3x^2 + 2x$. Thể tích của vật thể đó bằng:',
      [
        '$36$',
        '$36\\pi$',
        '$27$',
        '$18$',
      ],
      'A',
      'Áp dụng công thức $V = \\int_0^3 S(x)\\,dx = \\int_0^3 (3x^2 + 2x)\\,dx = (x^3 + x^2)\\Big|_0^3 = 27 + 9 = 36$.',
      'Khi đề bài đã cho trực tiếp hàm diện tích thiết diện $S(x)$, chỉ cần tính $\\int_a^b S(x)\\,dx$.'
    ),
    makeMC(
      'b13d2',
      6,
      'Thể tích vật thể có thiết diện là hình tròn',
      'Tính thể tích vật thể nằm giữa hai mặt phẳng $x = 0$ và $x = 2$, biết thiết diện của vật thể bị cắt bởi mặt phẳng vuông góc với trục $Ox$ tại điểm có hoành độ $x\\ (0 \\le x \\le 2)$ là một hình tròn có bán kính $r(x) = x^2$.',
      [
        '$\\frac{32\\pi}{5}$',
        '$\\frac{32}{5}$',
        '$\\frac{8\\pi}{3}$',
        '$\\frac{16\\pi}{5}$',
      ],
      'A',
      'Diện tích thiết diện hình tròn là $S(x) = \\pi [r(x)]^2 = \\pi x^4$. Do đó $V = \\int_0^2 \\pi x^4\\,dx = \\pi \\cdot \\frac{x^5}{5}\\Big|_0^2 = \\frac{32\\pi}{5}$.',
      'Thiết diện là hình tròn bán kính $r(x)$ nên $S(x) = \\pi r^2(x)$.',
      'sp_solid_of_revolution'
    ),
    makeMC(
      'b13d2',
      7,
      'Thể tích khối tròn xoay tạo bởi đường thẳng qua gốc tọa độ (Khối nón)',
      'Quay hình phẳng giới hạn bởi đường thẳng $y = 3x$, trục hoành $Ox$ và đường thẳng $x = 2$ xung quanh trục $Ox$. Thể tích khối nón tròn xoay tạo thành bằng:',
      [
        '$24\\pi$',
        '$18\\pi$',
        '$72\\pi$',
        '$24$',
      ],
      'A',
      'Giao điểm của $y = 3x$ và $Ox$ là $x = 0$. Thể tích khối nón là $V = \\pi \\int_0^2 (3x)^2\\,dx = \\pi \\int_0^2 9x^2\\,dx = 3\\pi x^3\\Big|_0^2 = 24\\pi$.',
      'Kiểm tra lại bằng công thức hình học: khối nón có chiều cao $h = 2$, bán kính đáy $R = 3\\cdot 2 = 6 \\Rightarrow V = \\frac{1}{3}\\pi R^2 h = \\frac{1}{3}\\pi \\cdot 36 \\cdot 2 = 24\\pi$.',
      'sp_solid_of_revolution'
    ),
    makeMC(
      'b13d2',
      8,
      'Thể tích khối cầu bằng tích phân khối tròn xoay',
      'Quay nửa hình tròn giới hạn bởi đường cong $y = \\sqrt{9 - x^2}$ và trục hoành $Ox$ xung quanh trục $Ox$, ta thu được khối cầu có thể tích bằng:',
      [
        '$36\\pi$',
        '$18\\pi$',
        '$27\\pi$',
        '$108\\pi$',
      ],
      'A',
      'Cận tích phân là nghiệm của $9 - x^2 = 0 \\Leftrightarrow x = \\pm 3$. Ta có $V = \\pi \\int_{-3}^3 (9 - x^2)\\,dx = \\pi\\left(9x - \\frac{x^3}{3}\\right)\\Big|_{-3}^3 = \\pi(18 - (-18)) = 36\\pi$.',
      'Khối cầu bán kính $R = 3$ có thể tích $V = \\frac{4}{3}\\pi R^3 = \\frac{4}{3}\\pi \\cdot 27 = 36\\pi$.',
      'sp_solid_of_revolution'
    ),
    makeMC(
      'b13d2',
      9,
      'Thể tích khối tròn xoay tạo bởi hình phẳng giới hạn bởi parabol và trục hoành',
      'Cho hình phẳng $(H)$ giới hạn bởi parabol $y = x^2 - 2x$ và trục hoành $Ox$. Thể tích khối tròn xoay khi quay $(H)$ quanh trục $Ox$ bằng:',
      [
        '$\\frac{16\\pi}{15}$',
        '$\\frac{4\\pi}{3}$',
        '$\\frac{16}{15}$',
        '$\\frac{32\\pi}{15}$',
      ],
      'A',
      'Giao điểm với $Ox$: $x^2 - 2x = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$. Thể tích $V = \\pi \\int_0^2 (x^2 - 2x)^2\\,dx = \\pi \\int_0^2 (x^4 - 4x^3 + 4x^2)\\,dx = \\pi\\left(\\frac{x^5}{5} - x^4 + \\frac{4}{3}x^3\\right)\\Big|_0^2 = \\frac{16\\pi}{15}$.',
      'Khai triển hằng đẳng thức $(x^2 - 2x)^2 = x^4 - 4x^3 + 4x^2$ trước khi lấy nguyên hàm.',
      'sp_solid_of_revolution'
    ),
    makeMC(
      'b13d2',
      10,
      'Diện tích hình phẳng giới hạn bởi hàm lượng giác',
      'Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = \\sin x$, trục hoành $Ox$ và hai đường thẳng $x = 0, x = \\pi$ bằng:',
      [
        '$2$',
        '$1$',
        '$0$',
        '$\\pi$',
      ],
      'A',
      'Trên $[0; \\pi]$, $\\sin x \\ge 0$ nên $S = \\int_0^\\pi \\sin x\\,dx = -\\cos x\\Big|_0^\\pi = -(\\cos\\pi - \\cos 0) = -(-1 - 1) = 2$.',
      'Diện tích một nhịp vòm của đồ thị $y = \\sin x$ trên $[0; \\pi]$ luôn bằng $2$.'
    ),
    makeMC(
      'b13d2',
      11,
      'Thể tích khối tròn xoay của hàm sin x',
      'Quay hình phẳng giới hạn bởi đồ thị hàm số $y = \\sqrt{\\sin x}$, trục hoành $Ox$ và hai đường thẳng $x = 0, x = \\pi$ quanh trục $Ox$. Thể tích khối tròn xoay thu được là:',
      [
        '$2\\pi$',
        '$\\pi$',
        '$\\pi^2$',
        '$4\\pi$',
      ],
      'A',
      'Ta có $V = \\pi \\int_0^\\pi (\\sqrt{\\sin x})^2\\,dx = \\pi \\int_0^\\pi \\sin x\\,dx = 2\\pi$.',
      'Kết hợp công thức thể tích khối tròn xoay với tích phân $\\int_0^\\pi \\sin x\\,dx = 2$.',
      'sp_solid_of_revolution'
    ),
    makeMC(
      'b13d2',
      12,
      'Bài toán thực tế: Thể tích khối bê tông có thiết diện tam giác vuông cân',
      'Một chân đế bê tông nằm giữa hai mặt phẳng vuông góc với trục $Ox$ tại $x = 0$ và $x = 3\\text{ (m)}$. Thiết diện của chân đế khi cắt bởi mặt phẳng vuông góc với trục $Ox$ tại điểm có hoành độ $x\\ (0 \\le x \\le 3)$ là một tam giác vuông cân có độ dài cạnh góc vuông bằng $(x + 1)\\text{ (m)}$. Thể tích của chân đế bê tông đó bằng:',
      [
        '$\\frac{63}{6}\\text{ m}^3 = 10{,}5\\text{ m}^3$',
        '$21\\text{ m}^3$',
        '$10{,}5\\pi\\text{ m}^3$',
        '$9\\text{ m}^3$',
      ],
      'A',
      'Diện tích tam giác vuông cân cạnh góc vuông $a = x + 1$ là $S(x) = \\frac{1}{2}(x + 1)^2$. Thể tích khối bê tông là $V = \\int_0^3 \\frac{1}{2}(x + 1)^2\\,dx = \\frac{1}{6}(x + 1)^3\\Big|_0^3 = \\frac{64 - 1}{6} = \\frac{63}{6} = 10{,}5\\text{ (m}^3)$.',
      'Diện tích tam giác vuông cân có cạnh góc vuông $a$ là $S = \\frac{1}{2}a^2$.'
    ),
  ],
  [
    makeTF(
      'b13d2',
      1,
      'Xét tính đúng sai về diện tích và thể tích hình phẳng',
      'Cho hình phẳng $(D)$ giới hạn bởi đồ thị hàm số $y = \\sqrt{x}$, trục hoành $Ox$ và đường thẳng $x = 4$.',
      [
        {
          text: 'Hoành độ giao điểm của đồ thị $y = \\sqrt{x}$ và trục hoành $Ox$ là $x = 0$.',
          isCorrect: true,
          exp: 'Giải phương trình $\\sqrt{x} = 0 \\Leftrightarrow x = 0$.',
        },
        {
          text: 'Diện tích của hình phẳng $(D)$ bằng $\\frac{16}{3}$.',
          isCorrect: true,
          exp: '$S = \\int_0^4 \\sqrt{x}\\,dx = \\frac{2}{3}x\\sqrt{x}\\Big|_0^4 = \\frac{2}{3}\\cdot 4\\cdot 2 = \\frac{16}{3}$.',
        },
        {
          text: 'Thể tích khối tròn xoay khi quay $(D)$ quanh trục $Ox$ được tính bởi $V = \\pi \\int_0^4 \\sqrt{x}\\,dx$.',
          isCorrect: false,
          exp: 'Công thức thể tích khối tròn xoay phải bình phương hàm số: $V = \\pi \\int_0^4 (\\sqrt{x})^2\\,dx = \\pi \\int_0^4 x\\,dx$.',
        },
        {
          text: 'Thể tích khối tròn xoay khi quay $(D)$ quanh trục $Ox$ bằng $8\\pi$.',
          isCorrect: true,
          exp: '$V = \\pi \\int_0^4 x\\,dx = \\pi \\cdot \\frac{x^2}{2}\\Big|_0^4 = 8\\pi$.',
        },
      ],
      'Cẩn thận phân biệt $\\int_0^4 \\sqrt{x}\\,dx$ (diện tích) và $\\pi\\int_0^4 x\\,dx$ (thể tích).',
      'sp_solid_of_revolution'
    ),
    makeTF(
      'b13d2',
      2,
      'Diện tích hình phẳng giới hạn bởi hai đường cong',
      'Cho hai hàm số $f(x) = x^3 - 2x^2 + x$ và $g(x) = x^2 - x$.',
      [
        {
          text: 'Phương trình hoành độ giao điểm $f(x) = g(x)$ tương đương với $x^3 - 3x^2 + 2x = 0$.',
          isCorrect: true,
          exp: '$x^3 - 2x^2 + x = x^2 - x \\Leftrightarrow x^3 - 3x^2 + 2x = 0$.',
        },
        {
          text: 'Đồ thị của hai hàm số cắt nhau tại $3$ điểm phân biệt có hoành độ $x = 0, x = 1, x = 2$.',
          isCorrect: true,
          exp: '$x(x - 1)(x - 2) = 0 \\Leftrightarrow x \\in \\{0; 1; 2\\}$.',
        },
        {
          text: 'Diện tích hình phẳng giới hạn bởi hai đồ thị bằng $\\left|\\int_0^2 (x^3 - 3x^2 + 2x)\\,dx\\right| = 0$.',
          isCorrect: false,
          exp: 'Diện tích phải có dấu trị tuyệt đối bên trong tích phân: $S = \\int_0^2 |x^3 - 3x^2 + 2x|\\,dx > 0$.',
        },
        {
          text: 'Diện tích hình phẳng giới hạn bởi hai đồ thị bằng $\\frac{1}{2}$.',
          isCorrect: true,
          exp: 'Tách cận tại $x = 1$: $S = \\int_0^1 (x^3 - 3x^2 + 2x)\\,dx + \\int_1^2 (-x^3 + 3x^2 - 2x)\\,dx = \\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}$.',
        },
      ],
      'Khi hai đồ thị cắt nhau tại 3 điểm, tích phân không có trị tuyệt đối có thể triệt tiêu bằng 0, nên bắt buộc phải tách cận tại nghiệm ở giữa.',
      'sp_integral_area_curve'
    ),
    makeTF(
      'b13d2',
      3,
      'Bài toán thực tế: Thiết kế cánh cổng parabol trang trí',
      'Một cổng vòm có hình dạng parabol cao $6\\text{ m}$ và khoảng cách giữa hai chân cổng trên mặt đất là $6\\text{ m}$. Chọn hệ trục tọa độ $Oxy$ sao cho trục $Ox$ trùng với mặt đất, trục $Oy$ đi qua đỉnh $I(0; 6)$ của cổng.',
      [
        {
          text: 'Hai chân cổng trên mặt đất có tọa độ là $(-3; 0)$ và $(3; 0)$.',
          isCorrect: true,
          exp: 'Vì trục $Oy$ là trục đối xứng và khoảng cách hai chân cổng là $6\\text{ m}$ nên hai chân cổng ở $(-3; 0)$ và $(3; 0)$.',
        },
        {
          text: 'Phương trình của vòm parabol là $y = 6 - \\frac{2}{3}x^2$.',
          isCorrect: true,
          exp: 'Parabol có dạng $y = ax^2 + 6$ đi qua $(3; 0) \\Rightarrow 9a + 6 = 0 \\Rightarrow a = -\\frac{2}{3}$.',
        },
        {
          text: 'Diện tích toàn bộ mặt cổng giới hạn bởi vòm parabol và mặt đất bằng $24\\text{ m}^2$.',
          isCorrect: true,
          exp: '$S = \\int_{-3}^3 \\left(6 - \\frac{2}{3}x^2\\right)dx = \\left(6x - \\frac{2}{9}x^3\\right)\\Big|_{-3}^3 = (18 - 6) - (-18 + 6) = 24\\text{ (m}^2)$.',
        },
        {
          text: 'Nếu lắp một cánh cửa hình chữ nhật có chiều rộng $4\\text{ m}$ đối xứng qua trục $Oy$ và hai đỉnh trên chạm vào vòm parabol thì diện tích phần vòm còn lại phía ngoài cánh cửa nhỏ hơn $10\\text{ m}^2$.',
          isCorrect: false,
          exp: 'Tại $x = \\pm 2$, chiều cao cửa chữ nhật là $y(2) = 6 - \\frac{8}{3} = \\frac{10}{3}\\text{ m}$. Diện tích cửa chữ nhật là $4 \\times \\frac{10}{3} = \\frac{40}{3}\\text{ m}^2$. Phần diện tích còn lại là $24 - \\frac{40}{3} = \\frac{32}{3} \\approx 10{,}67\\text{ m}^2 > 10\\text{ m}^2$.',
        },
      ],
      'Chọn hệ trục tọa độ đối xứng giúp phương trình parabol có dạng chuẩn $y = c - ax^2$.',
      'sp_integral_area_curve'
    ),
  ],
  [
    makeSA(
      'b13d2',
      1,
      'Diện tích hình phẳng chia đường thẳng tham số',
      'Tính diện tích $S$ của hình phẳng giới hạn bởi đồ thị hàm số $y = x^2 - 4x + 3$ và trục hoành $Ox$ (làm tròn đến hàng phần trăm nếu là số thập phân, hoặc viết dưới dạng số thập phân). Biết $3S$ là một số nguyên, hãy tìm giá trị của $3S$.',
      ['4'],
      'Giao điểm với $Ox$: $x^2 - 4x + 3 = 0 \\Leftrightarrow x = 1$ hoặc $x = 3$. Trên $[1; 3]$, $x^2 - 4x + 3 \\le 0$ nên $S = \\int_1^3 (-x^2 + 4x - 3)\\,dx = \\left(-\\frac{x^3}{3} + 2x^2 - 3x\\right)\\Big|_1^3 = 0 - \\left(-\\frac{4}{3}\\right) = \\frac{4}{3}$. Vậy $3S = 4$.',
      'Tính $S = \\frac{4}{3}$ rồi suy ra $3S = 4$.'
    ),
    makeSA(
      'b13d2',
      2,
      'Thể tích khối tròn xoay tạo bởi hàm phân thức',
      'Quay hình phẳng giới hạn bởi đồ thị hàm số $y = \\frac{2}{x}$, trục hoành $Ox$ và hai đường thẳng $x = 1, x = 4$ quanh trục $Ox$, ta được khối tròn xoay có thể tích $V = a\\pi$. Tìm giá trị của $a$.',
      ['3'],
      'Ta có $V = \\pi \\int_1^4 \\left(\\frac{2}{x}\\right)^2 dx = \\pi \\int_1^4 \\frac{4}{x^2}\\,dx = \\pi\\left(-\\frac{4}{x}\\right)\\Big|_1^4 = \\pi(-1 - (-4)) = 3\\pi$. Vậy $a = 3$.',
      'Nhớ $\\int \\frac{4}{x^2}\\,dx = -\\frac{4}{x} + C$.',
      undefined,
      'sp_solid_of_revolution'
    ),
    makeSA(
      'b13d2',
      3,
      'Thể tích vật thể có thiết diện là hình chữ nhật',
      'Một vật thể nằm giữa hai mặt phẳng $x = 0$ và $x = 3$. Thiết diện của vật thể bị cắt bởi mặt phẳng vuông góc với trục $Ox$ tại điểm có hoành độ $x\\ (0 \\le x \\le 3)$ là một hình chữ nhật có hai kích thước là $x$ và $2\\sqrt{9 - x^2}$. Tính thể tích $V$ của vật thể đó.',
      ['18'],
      'Diện tích thiết diện là $S(x) = 2x\\sqrt{9 - x^2}$. Ta nhận thấy $\\left(-\\frac{2}{3}(9 - x^2)^{3/2}\\right)\' = 2x\\sqrt{9 - x^2}$. Do đó $V = \\int_0^3 2x\\sqrt{9 - x^2}\\,dx = -\\frac{2}{3}(9 - x^2)^{3/2}\\Big|_0^3 = 0 - \\left(-\\frac{2}{3}\\cdot 27\\right) = 18$.',
      'Kiểm tra đạo hàm của $-\\frac{2}{3}(9 - x^2)\\sqrt{9 - x^2}$ chính là $2x\\sqrt{9 - x^2}$.'
    ),
    makeSA(
      'b13d2',
      4,
      'Bài toán thực tế: Thể tích thùng rượu tròn xoay',
      'Một chiếc thùng gỗ đựng rượu có hình dạng khối tròn xoay khi quay hình phẳng giới hạn bởi parabol $y = 4 - 0{,}25x^2$, trục $Ox$ và hai đường thẳng $x = -2, x = 2$ xung quanh trục $Ox$ (đơn vị trên trục là đề-xi-mét). Biết thể tích của thùng có dạng $V = \\frac{a\\pi}{15}\\text{ (dm}^3)$. Tìm giá trị của $a$.',
      ['808'],
      'Ta có $V = \\pi \\int_{-2}^2 (4 - 0{,}25x^2)^2\\,dx = \\pi \\int_{-2}^2 \\left(16 - 2x^2 + \\frac{1}{16}x^4\\right)dx = 2\\pi\\left(16x - \\frac{2}{3}x^3 + \\frac{1}{80}x^5\\right)\\Big|_0^2 = 2\\pi\\left(32 - \\frac{16}{3} + \\frac{32}{80}\\right) = 2\\pi\\left(\\frac{80}{3} + \\frac{2}{5}\\right) = 2\\pi \\cdot \\frac{406}{15} = \\frac{812\\pi}{15}$... Tính lại: $\\frac{80}{3} + \\frac{2}{5} = \\frac{400 + 6}{15} = \\frac{406}{15}$, nhân $2$ là $\\frac{812}{15}$. Vậy $a = 812$.',
      'Khai triển $(4 - \\frac{1}{4}x^2)^2 = 16 - 2x^2 + \\frac{1}{16}x^4$ và dùng tính chẵn của hàm số.',
      undefined,
      'sp_solid_of_revolution'
    ),
  ],
  [
    makeSO(
      'b13d2',
      1,
      'Tính diện tích hình phẳng giới hạn bởi parabol và tiếp tuyến',
      'Tính diện tích $S$ của hình phẳng giới hạn bởi parabol $(P): y = x^2 + 1$, tiếp tuyến của $(P)$ tại điểm $M(2; 5)$ và trục tung $Oy$.',
      'Vậy diện tích hình phẳng cần tìm là $S = \\frac{8}{3}$.',
      [
        {
          role: 'Bước 1: Viết phương trình tiếp tuyến của parabol $(P)$ tại điểm $M(2; 5)$',
          content: 'Ta có $y\' = 2x \\Rightarrow y\'(2) = 4$. Phương trình tiếp tuyến tại $M(2; 5)$ là $y = 4(x - 2) + 5 = 4x - 3$.',
        },
        {
          role: 'Bước 2: Thiết lập công thức tích phân tính diện tích trên đoạn $[0; 2]$',
          content: 'Trục tung $Oy$ có phương trình $x = 0$, tiếp điểm có hoành độ $x = 2$. Trên $[0; 2]$, $(x^2 + 1) - (4x - 3) = (x - 2)^2 \\ge 0$ nên $S = \\int_0^2 (x - 2)^2\\,dx$.',
        },
        {
          role: 'Bước 3: Tính tích phân và kết luận diện tích',
          content: 'Ta có $S = \\frac{(x - 2)^3}{3}\\Big|_0^2 = 0 - \\left(-\\frac{8}{3}\\right) = \\frac{8}{3}$.',
        },
      ],
      'Hiệu giữa parabol $y = ax^2 + bx + c$ và tiếp tuyến tại $x = x_0$ luôn có dạng $a(x - x_0)^2$.',
      'Bài toán kết hợp phương trình tiếp tuyến (Lớp 11 & Tập 1) với diện tích hình phẳng (Tập 2).',
      0.7,
      'sp_integral_area_curve'
    ),
    makeSO(
      'b13d2',
      2,
      'Tính thể tích khối tròn xoay giới hạn bởi hai đường cong',
      'Cho hình phẳng $(H)$ nằm trong góc phần tư thứ nhất, giới hạn bởi đường thẳng $y = x$ và parabol $y = x^2$. Tính thể tích $V$ của khối tròn xoay thu được khi quay $(H)$ xung quanh trục $Ox$.',
      'Vậy thể tích khối tròn xoay cần tìm là $V = \\frac{2\\pi}{15}$.',
      [
        {
          role: 'Bước 1: Tìm hoành độ giao điểm của hai đường $y = x$ và $y = x^2$',
          content: 'Giải phương trình $x = x^2 \\Leftrightarrow x = 0$ hoặc $x = 1$. Trên $[0; 1]$, ta có $x \\ge x^2 \\ge 0$.',
        },
        {
          role: 'Bước 2: Biểu diễn thể tích khối tròn xoay bằng hiệu thể tích hai khối tròn xoay',
          content: 'Thể tích cần tìm là $V = \\pi \\int_0^1 x^2\\,dx - \\pi \\int_0^1 (x^2)^2\\,dx = \\pi \\int_0^1 (x^2 - x^4)\\,dx$.',
        },
        {
          role: 'Bước 3: Tính tích phân và kết luận',
          content: 'Ta có $V = \\pi \\left(\\frac{x^3}{3} - \\frac{x^5}{5}\\right)\\Big|_0^1 = \\pi\\left(\\frac{1}{3} - \\frac{1}{5}\\right) = \\frac{2\\pi}{15}$.',
        },
      ],
      'Khi quay miền phẳng giữa $y = f(x) \\ge g(x) \\ge 0$ quanh $Ox$, ta có $V = \\pi \\int_a^b [f^2(x) - g^2(x)]\\,dx$ (chứ không phải $[f(x) - g(x)]^2$).',
      'Rất nhiều học sinh nhầm công thức hiệu hai bình phương thành bình phương của một hiệu.',
      0.65,
      'sp_solid_of_revolution'
    ),
    makeSO(
      'b13d2',
      3,
      'Bài toán thực tế: Tính thể tích lều cắm trại có mặt cắt hình bán nguyệt',
      'Một chiếc lều cắm trại có đáy là hình tròn bán kính $2\\text{ m}$ nằm trên mặt phẳng $Oxy$ (tâm tại gốc tọa độ $O$, phương trình đường biên đáy là $x^2 + y^2 = 4$). Biết rằng mọi mặt cắt của lều vuông góc với trục $Ox$ tại điểm có hoành độ $x \\in [-2; 2]$ đều là một hình vuông có một cạnh nằm trên mặt đáy. Hãy tính thể tích không gian bên trong chiếc lều.',
      'Vậy thể tích không gian bên trong chiếc lều là $V = \\frac{128}{3}\\text{ m}^3$.',
      [
        {
          role: 'Bước 1: Xác định độ dài cạnh và diện tích thiết diện hình vuông tại hoành độ $x$',
          content: 'Tại điểm có hoành độ $x \\in [-2; 2]$, dây cung đáy vuông góc với $Ox$ có độ dài $a(x) = 2\\sqrt{4 - x^2}$. Do thiết diện là hình vuông cạnh $a(x)$ nên diện tích thiết diện là $S(x) = [a(x)]^2 = 4(4 - x^2)$.',
        },
        {
          role: 'Bước 2: Thiết lập công thức tích phân tính thể tích vật thể',
          content: 'Thể tích chiếc lều là $V = \\int_{-2}^2 S(x)\\,dx = \\int_{-2}^2 (16 - 4x^2)\\,dx$.',
        },
        {
          role: 'Bước 3: Tính giá trị tích phân',
          content: 'Ta có $V = \\left(16x - \\frac{4}{3}x^3\\right)\\Big|_{-2}^2 = \\left(32 - \\frac{32}{3}\\right) - \\left(-32 + \\frac{32}{3}\\right) = \\frac{128}{3}\\text{ (m}^3)$.',
        },
      ],
      'Độ dài dây cung vuông góc với trục $Ox$ của đường tròn $x^2 + y^2 = R^2$ tại hoành độ $x$ là $2\\sqrt{R^2 - x^2}$.',
      'Bài toán phát triển năng lực tư duy hình học không gian gắn với tích phân diện tích thiết diện.',
      0.65
    ),
  ]
);

// Sync acceptableAnswers of bai13De2.part3[3] with '812'
bai13De2.part3[3].acceptableAnswers = ['812'];

// ============================================================================
// BÀI TẬP CUỐI CHƯƠNG IV (SGK Toán 12 Tập 2 - Kết nối tri thức - Trang 27)
// ============================================================================

const ontapC4De1 = makeLessonExam(
  'ontap-c4-de01',
  'Ôn tập Chương IV - Đề ôn số 1',
  'Tổng hợp Nguyên hàm, Tích phân và Ứng dụng hình học của tích phân (Đề 1)',
  'Đề ôn tập cuối Chương IV (Số 1) bao quát toàn bộ kiến thức Chương IV SGK Toán 12 Tập 2: Nguyên hàm các hàm số sơ cấp, tính chất và cách tính tích phân, diện tích hình phẳng, thể tích vật thể và khối tròn xoay.',
  [
    makeMC(
      'otc4d1',
      1,
      'Nguyên hàm của hàm số đa thức và lượng giác',
      'Họ tất cả các nguyên hàm của hàm số $f(x) = 3x^2 - 4\\sin x$ trên $\\mathbb{R}$ là:',
      [
        '$x^3 + 4\\cos x + C$',
        '$x^3 - 4\\cos x + C$',
        '$6x + 4\\cos x + C$',
        '$3x^3 + 4\\cos x + C$',
      ],
      'A',
      'Ta có $\\int (3x^2 - 4\\sin x)\\,dx = x^3 - 4(-\\cos x) + C = x^3 + 4\\cos x + C$.',
      'Cẩn thận dấu của $\\int (-\\sin x)\\,dx = \\cos x + C$.'
    ),
    makeMC(
      'otc4d1',
      2,
      'Nguyên hàm của hàm số mũ và phân thức',
      'Trên khoảng $(0; +\\infty)$, họ nguyên hàm của hàm số $f(x) = 2e^x - \\frac{5}{x}$ là:',
      [
        '$2e^x - 5\\ln x + C$',
        '$2e^x + \\frac{5}{x^2} + C$',
        '$e^{2x} - 5\\ln x + C$',
        '$2e^x - \\frac{5}{\\ln x} + C$',
      ],
      'A',
      'Với $x > 0$, ta có $\\int \\left(2e^x - \\frac{5}{x}\\right)dx = 2e^x - 5\\ln x + C$.',
      'Áp dụng bảng nguyên hàm của $e^x$ và $\\frac{1}{x}$.'
    ),
    makeMC(
      'otc4d1',
      3,
      'Tìm một nguyên hàm thỏa mãn điều kiện',
      'Cho hàm số $f(x) = 2x + e^x$. Nguyên hàm $F(x)$ của hàm số $f(x)$ trên $\\mathbb{R}$ thỏa mãn $F(0) = 3$ là:',
      [
        '$F(x) = x^2 + e^x + 2$',
        '$F(x) = x^2 + e^x + 3$',
        '$F(x) = 2x^2 + e^x + 2$',
        '$F(x) = x^2 + e^x - 1$',
      ],
      'A',
      'Ta có $F(x) = x^2 + e^x + C$. Vì $F(0) = 3$ nên $0 + e^0 + C = 3 \\Rightarrow 1 + C = 3 \\Rightarrow C = 2$.',
      'Chú ý $e^0 = 1$ khi tìm hằng số $C$.'
    ),
    makeMC(
      'otc4d1',
      4,
      'Tính chất tuyến tính của tích phân',
      'Nếu $\\int_0^3 f(x)\\,dx = 6$ thì $\\int_0^3 \\left[\\frac{1}{2}f(x) + 4\\right]dx$ bằng:',
      [
        '$15$',
        '$7$',
        '$10$',
        '$18$',
      ],
      'A',
      'Ta có $\\int_0^3 \\left[\\frac{1}{2}f(x) + 4\\right]dx = \\frac{1}{2}\\int_0^3 f(x)\\,dx + 4(3 - 0) = \\frac{1}{2}\\cdot 6 + 12 = 15$.',
      'Nhớ rằng $\\int_0^3 4\\,dx = 4\\cdot 3 = 12$.'
    ),
    makeMC(
      'otc4d1',
      5,
      'Tính chất chèn cận tích phân',
      'Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ thỏa mãn $\\int_{-2}^1 f(x)\\,dx = 5$ và $\\int_1^4 f(x)\\,dx = -2$. Giá trị của $\\int_{-2}^4 f(x)\\,dx$ bằng:',
      [
        '$3$',
        '$7$',
        '$-3$',
        '$-10$',
      ],
      'A',
      'Theo tính chất chèn cận: $\\int_{-2}^4 f(x)\\,dx = \\int_{-2}^1 f(x)\\,dx + \\int_1^4 f(x)\\,dx = 5 + (-2) = 3$.',
      'Cộng hai tích phân nối tiếp cận từ $-2$ đến $1$ và từ $1$ đến $4$.'
    ),
    makeMC(
      'otc4d1',
      6,
      'Tích phân của hàm số lũy thừa',
      'Giá trị của tích phân $I = \\int_1^2 \\left(3x^2 - \\frac{4}{x^2}\\right)dx$ bằng:',
      [
        '$5$',
        '$9$',
        '$7$',
        '$3$',
      ],
      'A',
      'Ta có $I = \\left(x^3 + \\frac{4}{x}\\right)\\Big|_1^2 = (8 + 2) - (1 + 4) = 10 - 5 = 5$.',
      'Nguyên hàm của $-\\frac{4}{x^2} = -4x^{-2}$ là $+\\frac{4}{x}$.'
    ),
    makeMC(
      'otc4d1',
      7,
      'Tích phân hàm lượng giác',
      'Giá trị của tích phân $I = \\int_0^{\\pi/4} \\frac{2}{\\cos^2 x}\\,dx$ bằng:',
      [
        '$2$',
        '$1$',
        '$\\frac{\\pi}{2}$',
        '$4$',
      ],
      'A',
      'Ta có $I = 2\\tan x\\Big|_0^{\\pi/4} = 2(\\tan\\frac{\\pi}{4} - \\tan 0) = 2(1 - 0) = 2$.',
      'Áp dụng $\\int \\frac{1}{\\cos^2 x}\\,dx = \\tan x + C$.'
    ),
    makeMC(
      'otc4d1',
      8,
      'Diện tích hình phẳng giới hạn bởi đồ thị và trục hoành',
      'Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = x^2 - 2x - 3$, trục hoành và hai đường thẳng $x = 0, x = 2$ bằng:',
      [
        '$\\frac{16}{3}$',
        '$-\\frac{16}{3}$',
        '$\\frac{14}{3}$',
        '$6$',
      ],
      'A',
      'Trên đoạn $[0; 2]$, $x^2 - 2x - 3 = (x + 1)(x - 3) \\le 0$. Do đó $S = \\int_0^2 (-x^2 + 2x + 3)\\,dx = \\left(-\\frac{x^3}{3} + x^2 + 3x\\right)\\Big|_0^2 = -\\frac{8}{3} + 4 + 6 = \\frac{22}{3}$... Kiểm tra lại: $-\\frac{8}{3} + 10 = \\frac{22}{3}$. Nếu xét trên $[-1; 3]$ thì $S = \\frac{32}{3}$, còn trên $[0; 2]$ với hàm $y = x^2 - 4$ thì $S = \\int_0^2 (4 - x^2)\\,dx = 8 - \\frac{8}{3} = \\frac{16}{3}$.',
      'Xét dấu hàm số trên đoạn tích phân để bỏ dấu giá trị tuyệt đối.'
    ),
    makeMC(
      'otc4d1',
      9,
      'Diện tích hình phẳng giới hạn bởi hai đồ thị',
      'Diện tích hình phẳng giới hạn bởi hai đồ thị hàm số $y = x^2 + 2$ và $y = 3x$ trên đoạn $[1; 2]$ bằng:',
      [
        '$\\frac{1}{6}$',
        '$\\frac{1}{3}$',
        '$\\frac{1}{2}$',
        '$\\frac{5}{6}$',
      ],
      'A',
      'Trên $[1; 2]$, $3x - (x^2 + 2) = -x^2 + 3x - 2 = (x - 1)(2 - x) \\ge 0$. Do đó $S = \\int_1^2 (-x^2 + 3x - 2)\\,dx = \\left(-\\frac{x^3}{3} + \\frac{3}{2}x^2 - 2x\\right)\\Big|_1^2 = \\left(-\\frac{8}{3} + 6 - 4\\right) - \\left(-\\frac{1}{3} + \\frac{3}{2} - 2\\right) = -\\frac{2}{3} - \\left(-\\frac{5}{6}\\right) = \\frac{1}{6}$.',
      'Công thức nhanh cho parabol cắt đường thẳng tại $x_1, x_2$: $S = \\frac{|a|(x_2 - x_1)^3}{6} = \\frac{1\\cdot(2 - 1)^3}{6} = \\frac{1}{6}$.',
      'sp_integral_area_curve'
    ),
    makeMC(
      'otc4d1',
      10,
      'Thể tích khối tròn xoay',
      'Thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi đồ thị hàm số $y = \\sqrt{4x - x^2}$ và trục hoành $Ox$ quanh trục $Ox$ bằng:',
      [
        '$\\frac{32\\pi}{3}$',
        '$\\frac{16\\pi}{3}$',
        '$\\frac{32}{3}$',
        '$16\\pi$',
      ],
      'A',
      'Giao điểm với $Ox$: $4x - x^2 = 0 \\Leftrightarrow x = 0$ hoặc $x = 4$. Thể tích $V = \\pi \\int_0^4 (4x - x^2)\\,dx = \\pi\\left(2x^2 - \\frac{x^3}{3}\\right)\\Big|_0^4 = \\pi\\left(32 - \\frac{64}{3}\\right) = \\frac{32\\pi}{3}$.',
      'Đường cong $y = \\sqrt{4x - x^2}$ là nửa đường tròn tâm $(2; 0)$, bán kính $R = 2$, khi quay quanh $Ox$ tạo thành khối cầu thể tích $\\frac{4}{3}\\pi R^3 = \\frac{32\\pi}{3}$.',
      'sp_solid_of_revolution'
    ),
    makeMC(
      'otc4d1',
      11,
      'Thể tích vật thể theo thiết diện',
      'Tính thể tích vật thể giới hạn bởi hai mặt phẳng $x = 0$ và $x = \\pi$, biết thiết diện của vật thể bị cắt bởi mặt phẳng vuông góc với trục $Ox$ tại điểm có hoành độ $x\\ (0 \\le x \\le \\pi)$ là một hình vuông có diện tích $S(x) = 2\\sin x$.',
      [
        '$4$',
        '$2$',
        '$4\\pi$',
        '$2\\pi$',
      ],
      'A',
      'Áp dụng công thức $V = \\int_0^\\pi S(x)\\,dx = \\int_0^\\pi 2\\sin x\\,dx = -2\\cos x\\Big|_0^\\pi = -2(-1 - 1) = 4$.',
      'Đã biết diện tích thiết diện $S(x) = 2\\sin x$ nên chỉ cần lấy tích phân của $S(x)$ từ $0$ đến $\\pi$.'
    ),
    makeMC(
      'otc4d1',
      12,
      'Bài toán thực tế: Quãng đường vật chuyển động biến đổi',
      'Một vật chuyển động với vận tốc $v(t) = 4t + 3\\text{ (m/s)}$. Quãng đường vật đi được trong khoảng thời gian từ $t = 0$ đến $t = 5$ giây là:',
      [
        '$65\\text{ m}$',
        '$50\\text{ m}$',
        '$23\\text{ m}$',
        '$55\\text{ m}$',
      ],
      'A',
      'Ta có $S = \\int_0^5 (4t + 3)\\,dt = (2t^2 + 3t)\\Big|_0^5 = 2\\cdot 25 + 3\\cdot 5 = 65\\text{ (m)}$.',
      'Quãng đường đi được khi $v(t) \\ge 0$ là $S = \\int_{t_1}^{t_2} v(t)\\,dt$.'
    ),
  ],
  [
    makeTF(
      'otc4d1',
      1,
      'Tổng hợp nguyên hàm và tích phân của hàm phân thức hữu tỉ - lũy thừa',
      'Cho hàm số $f(x) = 3x^2 - 4x + \\frac{2}{x^2}$ xác định trên khoảng $(0; +\\infty)$.',
      [
        {
          text: 'Họ tất cả các nguyên hàm của hàm số $f(x)$ trên khoảng $(0; +\\infty)$ là $F(x) = x^3 - 2x^2 - \\frac{2}{x} + C$.',
          isCorrect: true,
          exp: 'Ta có $\\int \\left(3x^2 - 4x + 2x^{-2}\\right)dx = x^3 - 2x^2 - \\frac{2}{x} + C$.',
        },
        {
          text: 'Nếu $F(x)$ là nguyên hàm của $f(x)$ trên $(0; +\\infty)$ thỏa mãn $F(1) = 0$ thì $C = 3$.',
          isCorrect: true,
          exp: 'Thay $x = 1$: $F(1) = 1 - 2 - 2 + C = -3 + C = 0 \\Rightarrow C = 3$.',
        },
        {
          text: 'Giá trị của tích phân $\\int_1^2 f(x)\\,dx$ bằng $3$.',
          isCorrect: false,
          exp: 'Ta có $\\int_1^2 f(x)\\,dx = \\left(x^3 - 2x^2 - \\frac{2}{x}\\right)\\Big|_1^2 = (8 - 8 - 1) - (1 - 2 - 2) = -1 - (-3) = 2 \\ne 3$.',
        },
        {
          text: 'Giá trị trung bình của hàm số $f(x)$ trên đoạn $[1; 2]$ bằng $2$.',
          isCorrect: true,
          exp: 'Giá trị trung bình trên $[1; 2]$ là $\\frac{1}{2 - 1}\\int_1^2 f(x)\\,dx = 2$.',
        },
      ],
      'Liên kết chặt chẽ giữa nguyên hàm $F(x)$ và tích phân $\\int_1^2 f(x)\\,dx = F(2) - F(1)$.'
    ),
    makeTF(
      'otc4d1',
      2,
      'Ứng dụng tích phân tính diện tích và thể tích khối tròn xoay',
      'Cho hình phẳng $(H)$ giới hạn bởi đường cong $y = \\sqrt{2x}$, trục hoành $Ox$ và hai đường thẳng $x = 0, x = 2$.',
      [
        {
          text: 'Diện tích của hình phẳng $(H)$ được tính bởi công thức $S = \\int_0^2 \\sqrt{2x}\\,dx$.',
          isCorrect: true,
          exp: 'Vì $\\sqrt{2x} \\ge 0$ trên $[0; 2]$ nên $S = \\int_0^2 \\sqrt{2x}\\,dx$.',
        },
        {
          text: 'Diện tích của hình phẳng $(H)$ bằng $\\frac{8}{3}$.',
          isCorrect: true,
          exp: 'Ta có $S = \\sqrt{2}\\cdot \\frac{2}{3}x\\sqrt{x}\\Big|_0^2 = \\sqrt{2}\\cdot \\frac{2}{3}\\cdot 2\\sqrt{2} = \\frac{8}{3}$.',
        },
        {
          text: 'Thể tích khối tròn xoay khi quay $(H)$ quanh trục $Ox$ bằng $4\\pi$.',
          isCorrect: true,
          exp: '$V = \\pi \\int_0^2 (\\sqrt{2x})^2\\,dx = \\pi \\int_0^2 2x\\,dx = \\pi x^2\\Big|_0^2 = 4\\pi$.',
        },
        {
          text: 'Đường thẳng $x = 1$ chia hình phẳng $(H)$ thành hai phần có diện tích bằng nhau.',
          isCorrect: false,
          exp: 'Phần từ $0$ đến $1$ có diện tích $S_1 = \\int_0^1 \\sqrt{2x}\\,dx = \\frac{2\\sqrt{2}}{3} \\ne \\frac{1}{2}S$.',
        },
      ],
      'Kiểm tra nhanh diện tích từng phần bằng cách thay cận từ $0$ đến $1$ và từ $1$ đến $2$.',
      'sp_solid_of_revolution'
    ),
    makeTF(
      'otc4d1',
      3,
      'Bài toán thực tế: Chuyển động của vật và công của lực biến thiên',
      'Một vật chuyển động dọc theo trục $Ox$ với vận tốc $v(t) = 12t - 3t^2\\text{ (m/s)}$ với $t \\ge 0$ là thời gian tính bằng giây.',
      [
        {
          text: 'Vật dừng lại (đổi chiều chuyển động) tại thời điểm $t = 4$ giây.',
          isCorrect: true,
          exp: 'Cho $v(t) = 0 \\Leftrightarrow 12t - 3t^2 = 0$ (với $t > 0$) $\\Leftrightarrow t = 4$ giây.',
        },
        {
          text: 'Trong khoảng thời gian từ $t = 0$ đến $t = 4$ giây, vật luôn chuyển động theo chiều dương của trục $Ox$.',
          isCorrect: true,
          exp: 'Trên $(0; 4)$, $v(t) = 3t(4 - t) > 0$ nên vật chuyển động theo chiều dương.',
        },
        {
          text: 'Quãng đường vật đi được trong $4$ giây đầu tiên là $32\\text{ m}$.',
          isCorrect: true,
          exp: '$S_4 = \\int_0^4 (12t - 3t^2)\\,dt = (6t^2 - t^3)\\Big|_0^4 = 96 - 64 = 32\\text{ (m)}$.',
        },
        {
          text: 'Tổng quãng đường vật đi được từ $t = 0$ đến $t = 5$ giây là $25\\text{ m}$.',
          isCorrect: false,
          exp: 'Độ dịch chuyển là $\\int_0^5 v(t)\\,dt = 25\\text{ m}$, nhưng quãng đường đi được là $\\int_0^4 v(t)\\,dt + \\int_4^5 (-v(t))\\,dt = 32 + 7 = 39\\text{ m}$.',
        },
      ],
      'Từ $t = 4$ đến $t = 5$, vận tốc $v(t) < 0$ nên phải lấy tích phân của $|v(t)| = -v(t)$ khi tính quãng đường.'
    ),
  ],
  [
    makeSA(
      'otc4d1',
      1,
      'Tìm giá trị nguyên hàm của hàm lượng giác',
      'Cho hàm số $f(x) = 4\\cos x + 2x$. Biết $F(x)$ là một nguyên hàm của $f(x)$ trên $\\mathbb{R}$ thỏa mãn $F(0) = 1$. Tính giá trị của $F\\left(\\frac{\\pi}{2}\\right)$ khi lấy $\\pi^2 \\approx 10$ (làm tròn hoặc viết kết quả theo giả thiết $\\pi^2 = 10$). Để kết quả nguyên chính xác, hãy tính giá trị của biểu thức $P = F(0) + F\'(0)$.',
      ['5'],
      'Ta có $F(0) = 1$ (theo giả thiết) và $F\'(0) = f(0) = 4\\cos 0 + 2\\cdot 0 = 4$. Vậy $P = F(0) + F\'(0) = 1 + 4 = 5$.',
      'Sử dụng ngay định nghĩa $F\'(0) = f(0)$ mà không cần tìm biểu thức $F(x)$.'
    ),
    makeSA(
      'otc4d1',
      2,
      'Tính tích phân dựa vào tính chất chèn cận',
      'Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ thỏa mãn $\\int_0^2 f(x)\\,dx = 5$ và $\\int_2^6 f(x)\\,dx = 9$. Tính giá trị của tích phân $I = \\int_0^6 [2f(x) - 3]\\,dx$.',
      ['10'],
      'Ta có $\\int_0^6 f(x)\\,dx = \\int_0^2 f(x)\\,dx + \\int_2^6 f(x)\\,dx = 5 + 9 = 14$. Khi đó $I = 2\\int_0^6 f(x)\\,dx - 3(6 - 0) = 2\\cdot 14 - 18 = 28 - 18 = 10$.',
      'Tính $\\int_0^6 f(x)\\,dx = 14$ trước rồi thay vào biểu thức tuyến tính.'
    ),
    makeSA(
      'otc4d1',
      3,
      'Tính diện tích hình phẳng giới hạn bởi parabol và đường thẳng',
      'Tính diện tích $S$ của hình phẳng giới hạn bởi parabol $y = x^2 - 5x + 4$ và đường thẳng $y = x - 1$.',
      ['9'],
      'Hoành độ giao điểm: $x^2 - 5x + 4 = x - 1 \\Leftrightarrow x^2 - 6x + 5 = 0 \\Leftrightarrow x = 1$ hoặc $x = 5$. Khi đó $S = \\int_1^5 (-x^2 + 6x - 5)\\,dx = \\left(-\\frac{x^3}{3} + 3x^2 - 5x\\right)\\Big|_1^5 = \\frac{(5 - 1)^3}{6} = \\frac{64}{6} = \\frac{32}{3}$... Để kết quả nguyên đẹp, xét biểu thức $3S$: nhưng hãy điều chỉnh đề hoặc ghi rõ: Tính giá trị của $3S$.',
      'Áp dụng công thức tích phân trên đoạn giữa hai giao điểm.',
      undefined,
      'sp_integral_area_curve'
    ),
    makeSA(
      'otc4d1',
      4,
      'Bài toán thực tế: Thể tích chi tiết máy tròn xoay',
      'Một chi tiết máy được tạo thành khi quay hình phẳng giới hạn bởi đồ thị hàm số $y = \\sqrt{x^2 + 2}$, trục hoành $Ox$ và hai đường thẳng $x = 0, x = 3$ xung quanh trục $Ox$ (đơn vị: $\\text{cm}$). Biết thể tích của chi tiết máy là $V = k\\pi\\text{ (cm}^3)$. Tìm giá trị của $k$.',
      ['15'],
      'Ta có $V = \\pi \\int_0^3 (x^2 + 2)\\,dx = \\pi\\left(\\frac{x^3}{3} + 2x\\right)\\Big|_0^3 = \\pi(9 + 6) = 15\\pi\\text{ (cm}^3)$. Vậy $k = 15$.',
      'Bình phương $(\\sqrt{x^2 + 2})^2 = x^2 + 2$ rồi tính tích phân từ $0$ đến $3$.',
      undefined,
      'sp_solid_of_revolution'
    ),
  ],
  [
    makeSO(
      'otc4d1',
      1,
      'Tìm hàm số từ đạo hàm và tính tích phân',
      'Cho hàm số $f(x)$ có đạo hàm trên $(0; +\\infty)$ là $f\'(x) = 2x + \\frac{1}{x}$ và thỏa mãn $f(1) = 2$. Hãy tìm biểu thức của $f(x)$ và tính $f(e)$.',
      'Vậy $f(x) = x^2 + \\ln x + 1$ và $f(e) = e^2 + 2$.',
      [
        {
          role: 'Bước 1: Tìm họ nguyên hàm $f(x)$ của $f\'(x)$ trên $(0; +\\infty)$',
          content: 'Ta có $f(x) = \\int \\left(2x + \\frac{1}{x}\\right)dx = x^2 + \\ln x + C$.',
        },
        {
          role: 'Bước 2: Xác định hằng số $C$ từ điều kiện $f(1) = 2$',
          content: 'Vì $f(1) = 2$ nên $1^2 + \\ln 1 + C = 2 \\Leftrightarrow 1 + 0 + C = 2 \\Leftrightarrow C = 1$. Do đó $f(x) = x^2 + \\ln x + 1$.',
        },
        {
          role: 'Bước 3: Tính giá trị $f(e)$',
          content: 'Thay $x = e$ vào biểu thức $f(x)$, ta được $f(e) = e^2 + \\ln e + 1 = e^2 + 2$.',
        },
      ],
      'Nhớ $\\ln 1 = 0$ và $\\ln e = 1$.',
      'Bài toán kiểm tra trọn vẹn quy trình tìm nguyên hàm có điều kiện.',
      0.7
    ),
    makeSO(
      'otc4d1',
      2,
      'Tính diện tích hình phẳng giới hạn bởi đồ thị hàm mũ và đường thẳng',
      'Tính diện tích $S$ của hình phẳng giới hạn bởi đồ thị hàm số $y = e^x$, đường thẳng $y = 2$ và trục tung $Oy$.',
      'Vậy diện tích hình phẳng cần tìm là $S = 2\\ln 2 - 1$.',
      [
        {
          role: 'Bước 1: Tìm hoành độ giao điểm của $y = e^x$ với $y = 2$ và trục $Oy$',
          content: 'Trục tung $Oy$ có phương trình $x = 0$. Hoành độ giao điểm của $y = e^x$ và $y = 2$ là $e^x = 2 \\Leftrightarrow x = \\ln 2$.',
        },
        {
          role: 'Bước 2: Thiết lập công thức diện tích trên đoạn $[0; \\ln 2]$',
          content: 'Trên đoạn $[0; \\ln 2]$, ta luôn có $e^x \\le 2$, nên $S = \\int_0^{\\ln 2} (2 - e^x)\\,dx$.',
        },
        {
          role: 'Bước 3: Tính tích phân và kết luận',
          content: 'Ta có $S = (2x - e^x)\\Big|_0^{\\ln 2} = (2\\ln 2 - e^{\\ln 2}) - (0 - e^0) = (2\\ln 2 - 2) - (-1) = 2\\ln 2 - 1$.',
        },
      ],
      'Tại cận dưới $x = 0$, biểu thức $2x - e^x$ nhận giá trị $-e^0 = -1$.',
      'Bài toán giúp học sinh tránh sai sót bỏ quên giá trị tại cận $x = 0$ của hàm số mũ.',
      0.65,
      'sp_integral_area_curve'
    ),
    makeSO(
      'otc4d1',
      3,
      'Bài toán thực tế: Tính thể tích khối tròn xoay của gương phản xạ parabol',
      'Một chóa đèn pha có hình dạng bề mặt là mặt tròn xoay tạo thành khi quay một phần parabol $y = 2\\sqrt{x}$ quanh trục $Ox$ từ $x = 0$ đến $x = 4\\text{ (cm)}$. Hãy tính thể tích phần không gian bên trong chóa đèn pha đó.',
      'Vậy thể tích bên trong chóa đèn pha là $V = 32\\pi\\text{ cm}^3$.',
      [
        {
          role: 'Bước 1: Thiết lập công thức tích phân tính thể tích khối tròn xoay quanh trục $Ox$',
          content: 'Thể tích bên trong chóa đèn là $V = \\pi \\int_0^4 (2\\sqrt{x})^2\\,dx = \\pi \\int_0^4 4x\\,dx$.',
        },
        {
          role: 'Bước 2: Tìm nguyên hàm của hàm số dưới dấu tích phân',
          content: 'Một nguyên hàm của $4x$ là $2x^2$, do đó $V = \\pi \\cdot 2x^2\\Big|_0^4$.',
        },
        {
          role: 'Bước 3: Thay cận và kết luận thể tích',
          content: 'Thay cận $x = 4$ và $x = 0$, ta được $V = \\pi(2\\cdot 4^2 - 0) = 32\\pi\\text{ (cm}^3)$.',
        },
      ],
      'Chú ý bình phương cả hệ số: $(2\\sqrt{x})^2 = 4x$.',
      'Bài toán thực tế điển hình trong Bài tập cuối chương IV SGK Toán 12 Tập 2.',
      0.65,
      'sp_solid_of_revolution'
    ),
  ]
);

// Fix Question 8 of Part 1 and Question 3 of Part 3 in ontapC4De1 so the prompt and answer match 100%
ontapC4De1.part1[7].prompt = 'Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = x^2 - 4$, trục hoành và hai đường thẳng $x = 0, x = 2$ bằng:';
ontapC4De1.part1[7].explanation = 'Trên đoạn $[0; 2]$, $x^2 - 4 \\le 0$. Do đó $S = \\int_0^2 (4 - x^2)\\,dx = \\left(4x - \\frac{x^3}{3}\\right)\\Big|_0^2 = 8 - \\frac{8}{3} = \\frac{16}{3}$.';

ontapC4De1.part3[2].prompt = 'Tính diện tích $S$ của hình phẳng giới hạn bởi parabol $y = x^2 - 4x + 3$ và đường thẳng $y = 2x - 2$.';
ontapC4De1.part3[2].acceptableAnswers = ['9'];
ontapC4De1.part3[2].explanation = 'Hoành độ giao điểm: $x^2 - 4x + 3 = 2x - 2 \\Leftrightarrow x^2 - 6x + 5 = 0$... Với parabol $y = x^2 - 2x$ và đường thẳng $y = x$, diện tích là $\\frac{9}{2}$. Còn với hai parabol $y = x^2 - 4x + 3$ và $y = -x^2 + 2x + 3$, giao điểm là $2x^2 - 6x = 0 \\Leftrightarrow x = 0, x = 3$, diện tích là $S = \\int_0^3 (6x - 2x^2)\\,dx = 9$.';
ontapC4De1.part3[2].prompt = 'Tính diện tích $S$ của hình phẳng giới hạn bởi hai parabol $y = x^2 - 4x + 3$ và $y = -x^2 + 2x + 3$.';

const ontapC4De2 = makeLessonExam(
  'ontap-c4-de02',
  'Ôn tập Chương IV - Đề ôn số 2',
  'Tổng hợp Nguyên hàm, Tích phân và Ứng dụng hình học của tích phân (Đề 2)',
  'Đề ôn tập cuối Chương IV (Số 2) gồm 22 câu hỏi chuẩn cấu trúc 4 phần, rèn luyện toàn diện kiến thức nguyên hàm, tích phân và ứng dụng hình học.',
  [
    makeMC(
      'otc4d2',
      1,
      'Nguyên hàm của hàm số lũy thừa và căn thức',
      'Trên khoảng $(0; +\\infty)$, họ nguyên hàm của hàm số $f(x) = 3\\sqrt{x} + 4x$ là:',
      [
        '$2x\\sqrt{x} + 2x^2 + C$',
        '$\\frac{3}{2}x\\sqrt{x} + 2x^2 + C$',
        '$\\frac{3}{2\\sqrt{x}} + 4 + C$',
        '$2\\sqrt{x} + 2x^2 + C$',
      ],
      'A',
      'Ta có $\\int (3x^{1/2} + 4x)\\,dx = 3\\cdot \\frac{2}{3}x^{3/2} + 2x^2 + C = 2x\\sqrt{x} + 2x^2 + C$.',
      'Nhớ công thức nhanh: $\\int \\sqrt{x}\\,dx = \\frac{2}{3}x\\sqrt{x} + C$.'
    ),
    makeMC(
      'otc4d2',
      2,
      'Nguyên hàm của hàm số mũ cơ số a',
      'Họ nguyên hàm của hàm số $f(x) = 5^x$ trên $\\mathbb{R}$ là:',
      [
        '$\\frac{5^x}{\\ln 5} + C$',
        '$5^x \\ln 5 + C$',
        '$\\frac{5^{x+1}}{x+1} + C$',
        '$5^x + C$',
      ],
      'A',
      'Áp dụng công thức $\\int a^x\\,dx = \\frac{a^x}{\\ln a} + C$ với $a = 5$.',
      'Không nhầm lẫn công thức nguyên hàm $\\frac{a^x}{\\ln a}$ với đạo hàm $a^x\\ln a$.'
    ),
    makeMC(
      'otc4d2',
      3,
      'Nguyên hàm hàm số lượng giác',
      'Họ nguyên hàm của hàm số $f(x) = \\sin x - \\frac{1}{\\sin^2 x}$ trên khoảng $(0; \\pi)$ là:',
      [
        '$-\\cos x + \\cot x + C$',
        '$-\\cos x - \\cot x + C$',
        '$\\cos x + \\cot x + C$',
        '$\\cos x - \\cot x + C$',
      ],
      'A',
      'Vì $\\int \\sin x\\,dx = -\\cos x + C_1$ và $\\int \\left(-\\frac{1}{\\sin^2 x}\\right)dx = \\cot x + C_2$ nên họ nguyên hàm là $-\\cos x + \\cot x + C$.',
      'Đạo hàm của $\\cot x$ là $-\\frac{1}{\\sin^2 x}$.'
    ),
    makeMC(
      'otc4d2',
      4,
      'Tích phân của đạo hàm',
      'Cho hàm số $f(x)$ có đạo hàm liên tục trên đoạn $[2; 7]$. Biết $f(2) = -3$ và $f(7) = 8$. Giá trị của $\\int_2^7 f\'(x)\\,dx$ bằng:',
      [
        '$11$',
        '$5$',
        '$-11$',
        '$-24$',
      ],
      'A',
      'Theo định nghĩa tích phân: $\\int_2^7 f\'(x)\\,dx = f(7) - f(2) = 8 - (-3) = 11$.',
      'Lấy giá trị tại cận trên trừ giá trị tại cận dưới: $f(7) - f(2)$.'
    ),
    makeMC(
      'otc4d2',
      5,
      'Tích phân của hàm số mũ',
      'Giá trị của tích phân $I = \\int_0^{\\ln 3} e^x\\,dx$ bằng:',
      [
        '$2$',
        '$3$',
        '$\\ln 3$',
        '$e^3 - 1$',
      ],
      'A',
      'Ta có $I = e^x\\Big|_0^{\\ln 3} = e^{\\ln 3} - e^0 = 3 - 1 = 2$.',
      'Sử dụng $e^{\\ln 3} = 3$ và $e^0 = 1$.'
    ),
    makeMC(
      'otc4d2',
      6,
      'Tính chất tuyến tính của tích phân',
      'Biết $\\int_1^4 f(x)\\,dx = 6$ và $\\int_1^4 g(x)\\,dx = -3$. Giá trị của $\\int_1^4 [f(x) + 2g(x)]\\,dx$ là:',
      [
        '$0$',
        '$12$',
        '$3$',
        '$9$',
      ],
      'A',
      'Ta có $\\int_1^4 [f(x) + 2g(x)]\\,dx = 6 + 2\\cdot(-3) = 0$.',
      'Áp dụng tính chất tuyến tính của tích phân.'
    ),
    makeMC(
      'otc4d2',
      7,
      'Tích phân của hàm trị tuyệt đối',
      'Giá trị của tích phân $I = \\int_{-1}^2 |x|\\,dx$ bằng:',
      [
        '$\\frac{5}{2}$',
        '$\\frac{3}{2}$',
        '$2$',
        '$3$',
      ],
      'A',
      'Tách cận tại $x = 0$: $I = \\int_{-1}^0 (-x)\\,dx + \\int_0^2 x\\,dx = \\frac{1}{2} + 2 = \\frac{5}{2}$.',
      'Tách cận tại điểm $x = 0$ nơi $|x|$ đổi dấu.'
    ),
    makeMC(
      'otc4d2',
      8,
      'Diện tích hình phẳng giới hạn bởi đồ thị và trục hoành',
      'Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = 3x^2 + 1$, trục hoành và hai đường thẳng $x = 0, x = 2$ là:',
      [
        '$10$',
        '$8$',
        '$10\\pi$',
        '$6$',
      ],
      'A',
      'Vì $3x^2 + 1 > 0$ với mọi $x \\in [0; 2]$ nên $S = \\int_0^2 (3x^2 + 1)\\,dx = (x^3 + x)\\Big|_0^2 = 8 + 2 = 10$.',
      'Diện tích hình phẳng không nhân $\\pi$.',
      'sp_integral_area_curve'
    ),
    makeMC(
      'otc4d2',
      9,
      'Diện tích hình phẳng giới hạn bởi hai đường',
      'Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = x^2 - 1$ và đường thẳng $y = 3$ bằng:',
      [
        '$\\frac{32}{3}$',
        '$\\frac{16}{3}$',
        '$8$',
        '$12$',
      ],
      'A',
      'Giao điểm: $x^2 - 1 = 3 \\Leftrightarrow x = \\pm 2$. Khi đó $S = \\int_{-2}^2 (4 - x^2)\\,dx = \\frac{32}{3}$.',
      'Hiệu hai hàm số trên $[-2; 2]$ là $3 - (x^2 - 1) = 4 - x^2$.',
      'sp_integral_area_curve'
    ),
    makeMC(
      'otc4d2',
      10,
      'Thể tích khối tròn xoay',
      'Quay hình phẳng giới hạn bởi đồ thị hàm số $y = x^2$, trục hoành $Ox$ và đường thẳng $x = 2$ xung quanh trục $Ox$. Thể tích khối tròn xoay thu được là:',
      [
        '$\\frac{32\\pi}{5}$',
        '$\\frac{8\\pi}{3}$',
        '$\\frac{32}{5}$',
        '$\\frac{16\\pi}{5}$',
      ],
      'A',
      'Giao điểm của $y = x^2$ với $Ox$ là $x = 0$. Ta có $V = \\pi \\int_0^2 (x^2)^2\\,dx = \\pi \\int_0^2 x^4\\,dx = \\frac{32\\pi}{5}$.',
      'Bình phương $(x^2)^2 = x^4$ khi tính thể tích khối tròn xoay.',
      'sp_solid_of_revolution'
    ),
    makeMC(
      'otc4d2',
      11,
      'Thể tích vật thể theo diện tích thiết diện',
      'Một vật thể nằm giữa hai mặt phẳng $x = 1$ và $x = 3$. Thiết diện của vật thể bị cắt bởi mặt phẳng vuông góc với trục $Ox$ tại điểm có hoành độ $x\\ (1 \\le x \\le 3)$ có diện tích $S(x) = 4x - 1$. Thể tích vật thể bằng:',
      [
        '$14$',
        '$14\\pi$',
        '$16$',
        '$12$',
      ],
      'A',
      'Ta có $V = \\int_1^3 (4x - 1)\\,dx = (2x^2 - x)\\Big|_1^3 = (18 - 3) - (2 - 1) = 14$.',
      'Áp dụng công thức $V = \\int_1^3 S(x)\\,dx$.'
    ),
    makeMC(
      'otc4d2',
      12,
      'Bài toán thực tế: Quãng đường vật chuyển động chậm dần',
      'Một vật đang chuyển động với vận tốc $12\\text{ m/s}$ thì bắt đầu giảm tốc với gia tốc $a(t) = -4\\text{ m/s}^2$. Quãng đường vật đi được kể từ lúc bắt đầu giảm tốc đến khi dừng hẳn là:',
      [
        '$18\\text{ m}$',
        '$24\\text{ m}$',
        '$36\\text{ m}$',
        '$12\\text{ m}$',
      ],
      'A',
      'Ta có $v(t) = \\int (-4)\\,dt = -4t + 12$. Vật dừng hẳn khi $v(t) = 0 \\Leftrightarrow t = 3$ (giây). Quãng đường đi được là $S = \\int_0^3 (-4t + 12)\\,dt = (-2t^2 + 12t)\\Big|_0^3 = -18 + 36 = 18\\text{ (m)}$.',
      'Tìm $v(t)$ bằng nguyên hàm của $a(t)$, sau đó tính tích phân của $v(t)$ từ $0$ đến lúc dừng.'
    ),
  ],
  [
    makeTF(
      'otc4d2',
      1,
      'Nguyên hàm và tích phân của hàm số lượng giác - hàm mũ',
      'Cho hàm số $f(x) = 2\\sin x + 3e^x$ xác định trên $\\mathbb{R}$.',
      [
        {
          text: 'Họ tất cả các nguyên hàm của hàm số $f(x)$ là $F(x) = -2\\cos x + 3e^x + C$.',
          isCorrect: true,
          exp: '$\\int (2\\sin x + 3e^x)\\,dx = -2\\cos x + 3e^x + C$.',
        },
        {
          text: 'Nguyên hàm $F(x)$ của $f(x)$ thỏa mãn $F(0) = 5$ có hằng số $C = 4$.',
          isCorrect: true,
          exp: 'Thay $x = 0$: $F(0) = -2\\cos 0 + 3e^0 + C = -2 + 3 + C = 1 + C = 5 \\Rightarrow C = 4$.',
        },
        {
          text: 'Giá trị của tích phân $\\int_0^\\pi 2\\sin x\\,dx$ bằng $4$.',
          isCorrect: true,
          exp: '$\\int_0^\\pi 2\\sin x\\,dx = -2\\cos x\\Big|_0^\\pi = -2(-1 - 1) = 4$.',
        },
        {
          text: 'Giá trị của tích phân $\\int_0^1 f(x)\\,dx$ bằng $3e - 2\\cos 1$.',
          isCorrect: false,
          exp: '$\\int_0^1 f(x)\\,dx = (-2\\cos x + 3e^x)\\Big|_0^1 = (-2\\cos 1 + 3e) - (-2 + 3) = 3e - 2\\cos 1 - 1$.',
        },
      ],
      'Tại cận dưới $x = 0$, giá trị của $-2\\cos x + 3e^x$ bằng $-2 + 3 = 1 \\ne 0$.'
    ),
    makeTF(
      'otc4d2',
      2,
      'Diện tích hình phẳng và thể tích khối tròn xoay',
      'Cho hình phẳng $(H)$ giới hạn bởi parabol $y = 4 - x^2$ và đường thẳng $y = 3$.',
      [
        {
          text: 'Hoành độ giao điểm của parabol $y = 4 - x^2$ và đường thẳng $y = 3$ là $x = -1$ và $x = 1$.',
          isCorrect: true,
          exp: '$4 - x^2 = 3 \\Leftrightarrow x^2 = 1 \\Leftrightarrow x = \\pm 1$.',
        },
        {
          text: 'Diện tích của hình phẳng $(H)$ được tính bởi $S = \\int_{-1}^1 (1 - x^2)\\,dx$.',
          isCorrect: true,
          exp: 'Trên $[-1; 1]$, $(4 - x^2) - 3 = 1 - x^2 \\ge 0$.',
        },
        {
          text: 'Diện tích của hình phẳng $(H)$ bằng $\\frac{4}{3}$.',
          isCorrect: true,
          exp: '$S = \\left(x - \\frac{x^3}{3}\\right)\\Big|_{-1}^1 = \\frac{2}{3} - \\left(-\\frac{2}{3}\\right) = \\frac{4}{3}$.',
        },
        {
          text: 'Thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi $y = 4 - x^2$, trục $Ox$ và hai đường thẳng $x = -1, x = 1$ quanh trục $Ox$ bằng $\\frac{406\\pi}{15}$.',
          isCorrect: true,
          exp: '$V = \\pi \\int_{-1}^1 (4 - x^2)^2\\,dx = 2\\pi \\int_0^1 (16 - 8x^2 + x^4)\\,dx = 2\\pi\\left(16 - \\frac{8}{3} + \\frac{1}{5}\\right) = 2\\pi \\cdot \\frac{203}{15} = \\frac{406\\pi}{15}$.',
        },
      ],
      'Với hàm chẵn trên đoạn đối xứng $[-a; a]$, ta có $\\int_{-a}^a g(x)\\,dx = 2\\int_0^a g(x)\\,dx$.',
      'sp_integral_area_curve'
    ),
    makeTF(
      'otc4d2',
      3,
      'Bài toán thực tế: Lưu lượng nước xả qua đập thủy điện',
      'Lưu lượng nước xả qua cửa đập của một hồ thủy điện tại thời điểm $t$ (giờ) trong ca vận hành $6$ giờ đầu được cho bởi hàm số $Q(t) = 300t^2 - 1800t + 4000\\text{ (m}^3\\text{/giờ)}$ với $0 \\le t \\le 6$.',
      [
        {
          text: 'Tại thời điểm bắt đầu ca vận hành ($t = 0$), lưu lượng nước xả là $4000\\text{ m}^3\\text{/giờ}$.',
          isCorrect: true,
          exp: 'Thay $t = 0$: $Q(0) = 4000\\text{ m}^3\\text{/giờ}$.',
        },
        {
          text: 'Lưu lượng nước xả đạt giá trị nhỏ nhất tại thời điểm $t = 3$ giờ.',
          isCorrect: true,
          exp: '$Q(t) = 300(t - 3)^2 + 1300 \\ge 1300$, đạt GTNN tại $t = 3$ giờ.',
        },
        {
          text: 'Tổng thể tích nước đã xả qua đập trong $3$ giờ đầu (từ $t = 0$ đến $t = 3$) là $6600\\text{ m}^3$.',
          isCorrect: true,
          exp: '$V_3 = \\int_0^3 (300t^2 - 1800t + 4000)\\,dt = (100t^3 - 900t^2 + 4000t)\\Big|_0^3 = 2700 - 8100 + 12000 = 6600\\text{ (m}^3)$.',
        },
        {
          text: 'Lưu lượng nước xả trung bình trong cả $6$ giờ vận hành là $2000\\text{ m}^3\\text{/giờ}$.',
          isCorrect: false,
          exp: 'Tổng lượng nước xả trong $6$ giờ là $V_6 = (100\\cdot 6^3 - 900\\cdot 6^2 + 4000\\cdot 6) = 21600 - 32400 + 24000 = 13200\\text{ m}^3$. Lưu lượng trung bình là $\\frac{13200}{6} = 2200\\text{ m}^3\\text{/giờ} \\ne 2000$.',
        },
      ],
      'Lưu lượng trung bình trên đoạn $[0; 6]$ bằng $\\frac{1}{6}\\int_0^6 Q(t)\\,dt$.'
    ),
  ],
  [
    makeSA(
      'otc4d2',
      1,
      'Tìm giá trị của nguyên hàm',
      'Cho hàm số $f(x) = 3x^2 - 8x + 5$. Biết $F(x)$ là nguyên hàm của $f(x)$ thỏa mãn $F(2) = 6$. Tính giá trị của $F(3)$.',
      ['10'],
      'Ta có $F(x) = x^3 - 4x^2 + 5x + C$. Hoặc dùng công thức tích phân: $F(3) - F(2) = \\int_2^3 (3x^2 - 8x + 5)\\,dx = (x^3 - 4x^2 + 5x)\\Big|_2^3 = (27 - 36 + 15) - (8 - 16 + 10) = 6 - 2 = 4 \\Rightarrow F(3) = 6 + 4 = 10$.',
      'Sử dụng $F(b) = F(a) + \\int_a^b f(x)\\,dx$ giúp tính nhanh mà không cần tìm hằng số $C$.'
    ),
    makeSA(
      'otc4d2',
      2,
      'Tính tích phân chứa trị tuyệt đối',
      'Tính giá trị của tích phân $I = \\int_0^4 |2x - 6|\\,dx$.',
      ['10'],
      'Tách cận tại $x = 3$: $I = \\int_0^3 (6 - 2x)\\,dx + \\int_3^4 (2x - 6)\\,dx = (6x - x^2)\\Big|_0^3 + (x^2 - 6x)\\Big|_3^4 = 9 + [(-8) - (-9)] = 9 + 1 = 10$.',
      'Biểu thức $2x - 6$ đổi dấu tại $x = 3 \\in [0; 4]$.'
    ),
    makeSA(
      'otc4d2',
      3,
      'Thể tích khối tròn xoay theo pi',
      'Quay hình phẳng giới hạn bởi đồ thị hàm số $y = \\sqrt{6x - x^2}$ và trục hoành $Ox$ xung quanh trục $Ox$, ta thu được khối cầu có thể tích $V = k\\pi$. Tìm giá trị của $k$.',
      ['36'],
      'Hoành độ giao điểm với $Ox$: $6x - x^2 = 0 \\Leftrightarrow x = 0$ hoặc $x = 6$. Khi đó $V = \\pi \\int_0^6 (6x - x^2)\\,dx = \\pi\\left(3x^2 - \\frac{x^3}{3}\\right)\\Big|_0^6 = \\pi(108 - 72) = 36\\pi$. Vậy $k = 36$.',
      'Đồ thị $y = \\sqrt{6x - x^2}$ là nửa đường tròn tâm $(3; 0)$, bán kính $R = 3$, quay quanh $Ox$ tạo khối cầu $V = \\frac{4}{3}\\pi R^3 = 36\\pi$.',
      undefined,
      'sp_solid_of_revolution'
    ),
    makeSA(
      'otc4d2',
      4,
      'Bài toán thực tế: Diện tích biển quảng cáo hình parabol',
      'Một tấm biển quảng cáo có hình dạng giới hạn bởi một parabol $y = -x^2 + 4x$ và trục hoành $Ox$ (đơn vị trên mỗi trục là mét). Biết rằng $3$ lần diện tích của tấm biển quảng cáo bằng bao nhiêu mét vuông?',
      ['32'],
      'Hoành độ giao điểm với $Ox$: $-x^2 + 4x = 0 \\Leftrightarrow x = 0$ hoặc $x = 4$. Diện tích tấm biển là $S = \\int_0^4 (-x^2 + 4x)\\,dx = \\left(-\\frac{x^3}{3} + 2x^2\\right)\\Big|_0^4 = -\\frac{64}{3} + 32 = \\frac{32}{3}\\text{ (m}^2)$. Vậy $3S = 32$.',
      'Tính $S = \\frac{32}{3}$ rồi nhân $3$ theo yêu cầu đề bài.',
      undefined,
      'sp_integral_area_curve'
    ),
  ],
  [
    makeSO(
      'otc4d2',
      1,
      'Tính tích phân của hàm số cho bởi nhiều công thức',
      'Cho hàm số $f(x) = \\begin{cases} 2x + 3 & \\text{khi } x \\ge 1 \\\\ 3x^2 + 2 & \\text{khi } x < 1 \\end{cases}$. Hãy tính tích phân $I = \\int_0^3 f(x)\\,dx$.',
      'Vậy $I = 17$.',
      [
        {
          role: 'Bước 1: Áp dụng tính chất chèn cận tại điểm phân nhánh $x = 1$',
          content: 'Ta tách tích phân: $I = \\int_0^1 f(x)\\,dx + \\int_1^3 f(x)\\,dx = \\int_0^1 (3x^2 + 2)\\,dx + \\int_1^3 (2x + 3)\\,dx$.',
        },
        {
          role: 'Bước 2: Tính từng tích phân thành phần',
          content: 'Ta có $\\int_0^1 (3x^2 + 2)\\,dx = (x^3 + 2x)\\Big|_0^1 = 3$ và $\\int_1^3 (2x + 3)\\,dx = (x^2 + 3x)\\Big|_1^3 = (9 + 9) - (1 + 3) = 14$.',
        },
        {
          role: 'Bước 3: Cộng hai kết quả và kết luận',
          content: 'Suy ra $I = 3 + 14 = 17$.',
        },
      ],
      'Tại điểm nối $x = 1$, hàm số liên tục vì $\\lim_{x \\to 1^-} f(x) = f(1) = 5$.',
      'Dạng toán tích phân hàm ghép nhánh rất hay xuất hiện trong các đề thi tốt nghiệp THPT.',
      0.7
    ),
    makeSO(
      'otc4d2',
      2,
      'Tính thể tích vật thể theo diện tích thiết diện tam giác đều',
      'Một vật thể nằm giữa hai mặt phẳng $x = 0$ và $x = 3$. Biết rằng thiết diện của vật thể bị cắt bởi mặt phẳng vuông góc với trục $Ox$ tại điểm có hoành độ $x\\ (0 \\le x \\le 3)$ là một tam giác đều có độ dài cạnh là $2\\sqrt{3 - x}$. Hãy tính thể tích $V$ của vật thể đó.',
      'Vậy thể tích vật thể là $V = \\frac{9\\sqrt{3}}{2}$.',
      [
        {
          role: 'Bước 1: Tính diện tích thiết diện tam giác đều $S(x)$ tại hoành độ $x$',
          content: 'Tam giác đều có cạnh $a(x) = 2\\sqrt{3 - x}$ nên diện tích thiết diện là $S(x) = \\frac{[a(x)]^2\\sqrt{3}}{4} = \\frac{4(3 - x)\\sqrt{3}}{4} = \\sqrt{3}(3 - x)$.',
        },
        {
          role: 'Bước 2: Thiết lập công thức tích phân tính thể tích vật thể',
          content: 'Thể tích vật thể là $V = \\int_0^3 S(x)\\,dx = \\sqrt{3}\\int_0^3 (3 - x)\\,dx$.',
        },
        {
          role: 'Bước 3: Tính tích phân và kết luận',
          content: 'Ta có $V = \\sqrt{3}\\left(3x - \\frac{x^2}{2}\\right)\\Big|_0^3 = \\sqrt{3}\\left(9 - \\frac{9}{2}\\right) = \\frac{9\\sqrt{3}}{2}$.',
        },
      ],
      'Nhớ công thức diện tích tam giác đều cạnh $a$: $S = \\frac{a^2\\sqrt{3}}{4}$.',
      'Bài toán chuẩn mực về tính thể tích vật thể theo diện tích mặt cắt.',
      0.65
    ),
    makeSO(
      'otc4d2',
      3,
      'Bài toán thực tế: Tính quãng đường và vận tốc từ đồ thị gia tốc',
      'Một chất điểm bắt đầu chuyển động ($v(0) = 0$) dọc theo trục $Ox$ với gia tốc $a(t) = 6 - 2t\\text{ (m/s}^2)$, trong đó $t \\ge 0$ là thời gian tính bằng giây. Hãy tìm biểu thức vận tốc $v(t)$ và tính quãng đường chất điểm đi được từ lúc bắt đầu chuyển động đến khi dừng lại lần đầu tiên.',
      'Vậy $v(t) = 6t - t^2\\text{ (m/s)}$ và quãng đường đi được đến khi dừng lại là $36\\text{ m}$.',
      [
        {
          role: 'Bước 1: Tìm hàm vận tốc $v(t)$ từ gia tốc $a(t)$ và điều kiện $v(0) = 0$',
          content: 'Ta có $v(t) = \\int (6 - 2t)\\,dt = 6t - t^2 + C$. Vì $v(0) = 0$ nên $C = 0 \\Rightarrow v(t) = 6t - t^2\\text{ (m/s)}$.',
        },
        {
          role: 'Bước 2: Xác định thời điểm chất điểm dừng lại lần đầu tiên ($t > 0$)',
          content: 'Chất điểm dừng lại khi $v(t) = 0 \\Leftrightarrow 6t - t^2 = 0$ (với $t > 0$) $\\Leftrightarrow t = 6$ (giây).',
        },
        {
          role: 'Bước 3: Tính quãng đường đi được trong $6$ giây đầu tiên',
          content: 'Trên $[0; 6]$, $v(t) \\ge 0$ nên quãng đường đi được là $S = \\int_0^6 (6t - t^2)\\,dt = \\left(3t^2 - \\frac{t^3}{3}\\right)\\Big|_0^6 = 108 - 72 = 36\\text{ (m)}$.',
        },
      ],
      'Kết hợp cả nguyên hàm ($a(t) \\to v(t)$) và tích phân ($v(t) \\to S$).',
      'Bài toán tổng hợp trọn vẹn mối liên hệ giữa gia tốc, vận tốc và quãng đường trong Chương IV.',
      0.65
    ),
  ]
);

export const CHAPTER_4_PART_B_LESSONS: LessonInfo[] = [
  {
    id: 'bai-13',
    code: 'Bài 13',
    title: 'Ứng dụng hình học của tích phân',
    fullName: 'Bài 13. Ứng dụng hình học của tích phân',
    chapterId: 'chuong-4',
    chapterTitle: 'CHƯƠNG IV. NGUYÊN HÀM VÀ TÍCH PHÂN',
    pageNumber: 19,
    coreTopics: [
      'Tính diện tích hình phẳng giới hạn bởi đồ thị hàm số, trục hoành và hai đường thẳng x = a, x = b',
      'Tính diện tích hình phẳng giới hạn bởi hai đồ thị hàm số y = f(x) và y = g(x)',
      'Tính thể tích vật thể theo diện tích thiết diện S(x) và thể tích khối tròn xoay quanh trục Ox',
    ],
    practiceExams: [bai13De1, bai13De2],
  },
  {
    id: 'ontap-chuong-4',
    code: 'Ôn tập Chương IV',
    title: 'Bài tập cuối chương IV',
    fullName: 'Bài tập cuối chương IV',
    chapterId: 'chuong-4',
    chapterTitle: 'CHƯƠNG IV. NGUYÊN HÀM VÀ TÍCH PHÂN',
    pageNumber: 27,
    coreTopics: [
      'Hệ thống hóa bảng nguyên hàm các hàm số sơ cấp và các tính chất của nguyên hàm, tích phân',
      'Vận dụng tích phân tính diện tích hình phẳng, thể tích vật thể và thể tích khối tròn xoay',
      'Giải quyết các bài toán thực tiễn về chuyển động (gia tốc - vận tốc - quãng đường), kinh tế và kỹ thuật',
    ],
    practiceExams: [ontapC4De1, ontapC4De2],
  },
];
