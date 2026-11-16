import { LessonInfo } from './types';
import { makeMC, makeTF, makeSA, makeSO, makeLessonExam } from './helpers';

// ============================================================================
// BÀI TẬP ÔN TẬP CUỐI NĂM (SGK Toán 12 Tập 2 - Kết nối tri thức - Trang 90)
// ============================================================================

const ontapCuoiNamDe1 = makeLessonExam(
  'ontap-cn-de01',
  'Ôn tập cuối năm - Đề ôn số 1',
  'Tổng hợp toàn bộ chương trình Toán 12: Giải tích, Hình học không gian Oxyz và Xác suất thống kê',
  'Đề ôn tập cuối năm (Số 1) bám sát cấu trúc Bài tập ôn tập cuối năm SGK Toán 12 Tập 2 Kết nối tri thức (trang 90): Khảo sát hàm số, Nguyên hàm - Tích phân và ứng dụng hình học, Phương pháp toạ độ trong không gian Oxyz (mặt phẳng, đường thẳng, mặt cầu, góc) và Xác suất có điều kiện - Công thức Bayes.',
  [
    makeMC(
      'otcnd1',
      1,
      'Tính đơn điệu của hàm số bậc ba',
      'Cho hàm số $y = x^3 - 3x^2 + 2$. Hàm số đã cho nghịch biến trên khoảng nào dưới đây?',
      [
        '$(0; 2)$',
        '$(-\\infty; 0)$',
        '$(2; +\\infty)$',
        '$(-1; 1)$',
      ],
      'A',
      'Ta có $y\' = 3x^2 - 6x = 3x(x - 2)$. Cho $y\' < 0 \\iff 0 < x < 2$. Vậy hàm số nghịch biến trên khoảng $(0; 2)$.',
      'Hàm số nghịch biến trên khoảng mà đạo hàm $y\' < 0$.'
    ),
    makeMC(
      'otcnd1',
      2,
      'Đường tiệm cận của đồ thị hàm số phân thức',
      'Đường tiệm cận ngang của đồ thị hàm số $y = \\frac{4x - 1}{2x + 3}$ là đường thẳng có phương trình:',
      [
        '$y = 2$',
        '$y = -\\frac{1}{3}$',
        '$x = -\\frac{3}{2}$',
        '$y = 4$',
      ],
      'A',
      'Ta có $\\lim_{x \\to \\pm\\infty} \\frac{4x - 1}{2x + 3} = \\frac{4}{2} = 2$. Vậy tiệm cận ngang của đồ thị hàm số là đường thẳng $y = 2$.',
      'Với hàm phân thức bậc nhất trên bậc nhất $y = \\frac{ax+b}{cx+d}$, tiệm cận ngang là $y = \\frac{a}{c}$.'
    ),
    makeMC(
      'otcnd1',
      3,
      'Nguyên hàm của hàm số sơ cấp',
      'Họ tất cả các nguyên hàm của hàm số $f(x) = 3x^2 - \\sin x$ trên $\\mathbb{R}$ là:',
      [
        '$x^3 + \\cos x + C$',
        '$x^3 - \\cos x + C$',
        '$6x + \\cos x + C$',
        '$3x^3 + \\cos x + C$',
      ],
      'A',
      'Ta có $\\int (3x^2 - \\sin x)\\,dx = x^3 - (-\\cos x) + C = x^3 + \\cos x + C$.',
      'Chú ý $\\int \\sin x\\,dx = -\\cos x + C$ nên $\\int (-\\sin x)\\,dx = \\cos x + C$.'
    ),
    makeMC(
      'otcnd1',
      4,
      'Tính tích phân đa thức',
      'Giá trị của tích phân $I = \\int_{0}^{1} (4x^3 + 2x)\\,dx$ bằng:',
      [
        '$2$',
        '$1$',
        '$3$',
        '$4$',
      ],
      'A',
      'Ta có $I = (x^4 + x^2)\\Big|_0^1 = (1 + 1) - 0 = 2$.',
      'Áp dụng công thức Newton - Leibniz: $\\int_a^b f(x)\\,dx = F(b) - F(a)$.'
    ),
    makeMC(
      'otcnd1',
      5,
      'Ứng dụng tích phân tính diện tích hình phẳng',
      'Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = x^2 - 4$, trục hoành và hai đường thẳng $x = -2, x = 2$ bằng:',
      [
        '$\\frac{32}{3}$',
        '$\\frac{16}{3}$',
        '$8$',
        '$0$',
      ],
      'A',
      'Trên đoạn $[-2; 2]$, $x^2 - 4 \\le 0$ nên $S = \\int_{-2}^{2} |x^2 - 4|\\,dx = \\int_{-2}^{2} (4 - x^2)\\,dx = \\left(4x - \\frac{x^3}{3}\\right)\\Big|_{-2}^{2} = \\frac{32}{3}$.',
      'Không được quên dấu giá trị tuyệt đối $|f(x)|$ trong công thức tính diện tích hình phẳng.',
      'sp_integral_area_curve'
    ),
    makeMC(
      'otcnd1',
      6,
      'Toạ độ trung điểm đoạn thẳng trong không gian',
      'Trong không gian $Oxyz$, cho hai điểm $A(1; -2; 3)$ và $B(3; 4; -1)$. Toạ độ trung điểm $M$ của đoạn thẳng $AB$ là:',
      [
        '$M(2; 1; 1)$',
        '$M(4; 2; 2)$',
        '$M(1; 3; -2)$',
        '$M(2; 2; 1)$',
      ],
      'A',
      'Toạ độ trung điểm $M$ là $x_M = \\frac{1+3}{2} = 2;\\ y_M = \\frac{-2+4}{2} = 1;\\ z_M = \\frac{3+(-1)}{2} = 1$. Vậy $M(2; 1; 1)$.',
      'Toạ độ trung điểm bằng trung bình cộng toạ độ tương ứng của hai đầu mút.'
    ),
    makeMC(
      'otcnd1',
      7,
      'Vectơ pháp tuyến của mặt phẳng',
      'Trong không gian $Oxyz$, mặt phẳng $(P): 2x - 3y + z - 5 = 0$ có một vectơ pháp tuyến là:',
      [
        '$\\vec{n} = (2; -3; 1)$',
        '$\\vec{n} = (2; 3; 1)$',
        '$\\vec{n} = (2; -3; -5)$',
        '$\\vec{n} = (-2; -3; 1)$',
      ],
      'A',
      'Mặt phẳng $(P): 2x - 3y + z - 5 = 0$ có một vectơ pháp tuyến là $\\vec{n} = (2; -3; 1)$.',
      'Hệ số của $x, y, z$ trong phương trình tổng quát là toạ độ vectơ pháp tuyến.',
      'sp_oxyz_plane_normal'
    ),
    makeMC(
      'otcnd1',
      8,
      'Điểm thuộc đường thẳng trong không gian',
      'Trong không gian $Oxyz$, đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 2}{-1} = \\frac{z - 4}{3}$ đi qua điểm nào dưới đây?',
      [
        '$A(1; -2; 4)$',
        '$B(-1; 2; -4)$',
        '$C(2; -1; 3)$',
        '$D(1; 2; 4)$',
      ],
      'A',
      'Cho các phân thức bằng $0$, ta được $x = 1, y = -2, z = 4$. Vậy đường thẳng $d$ đi qua điểm $A(1; -2; 4)$.',
      'Trong phương trình chính tắc $\\frac{x-x_0}{a} = \\frac{y-y_0}{b} = \\frac{z-z_0}{c}$, điểm đi qua là $M_0(x_0; y_0; z_0)$.',
      'sp_oxyz_line_3d'
    ),
    makeMC(
      'otcnd1',
      9,
      'Bán kính mặt cầu trong không gian Oxyz',
      'Trong không gian $Oxyz$, mặt cầu $(S): (x - 2)^2 + (y + 1)^2 + (z - 3)^2 = 16$ có bán kính $R$ bằng:',
      [
        '$4$',
        '$16$',
        '$8$',
        '$2$',
      ],
      'A',
      'Từ phương trình chính tắc của mặt cầu $(S)$, ta có $R^2 = 16 \\implies R = 4$.',
      'Vế phải của phương trình mặt cầu chính tắc là $R^2$, cần lấy căn bậc hai để tìm bán kính $R$.',
      'sp_oxyz_sphere'
    ),
    makeMC(
      'otcnd1',
      10,
      'Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm',
      'Nếu một mẫu số liệu ghép nhóm có phương sai $s^2 = 12{,}25$ thì độ lệch chuẩn $s$ của mẫu số liệu đó bằng:',
      [
        '$3{,}5$',
        '$12{,}25$',
        '$6{,}125$',
        '$150{,}0625$',
      ],
      'A',
      'Độ lệch chuẩn là căn bậc hai số học của phương sai: $s = \\sqrt{s^2} = \\sqrt{12{,}25} = 3{,}5$.',
      'Độ lệch chuẩn có cùng đơn vị đo với số liệu ban đầu và bằng $\\sqrt{s^2}$.'
    ),
    makeMC(
      'otcnd1',
      11,
      'Xác suất có điều kiện cơ bản',
      'Cho hai biến cố $A$ và $B$ với $P(B) = 0{,}5$ và $P(AB) = 0{,}2$. Xác suất có điều kiện $P(A|B)$ bằng:',
      [
        '$0{,}4$',
        '$0{,}1$',
        '$0{,}7$',
        '$0{,}25$',
      ],
      'A',
      'Áp dụng công thức $P(A|B) = \\frac{P(AB)}{P(B)} = \\frac{0{,}2}{0{,}5} = 0{,}4$.',
      'Chia xác suất giao $P(AB)$ cho xác suất của biến cố điều kiện $P(B)$.'
    ),
    makeMC(
      'otcnd1',
      12,
      'Công thức xác suất toàn phần',
      'Cho hai biến cố $A, B$ thoả mãn $P(A) = 0{,}6$; $P(B|A) = 0{,}5$ và $P(B|\\overline{A}) = 0{,}25$. Theo công thức xác suất toàn phần, $P(B)$ bằng:',
      [
        '$0{,}40$',
        '$0{,}35$',
        '$0{,}45$',
        '$0{,}50$',
      ],
      'A',
      'Ta có $P(\\overline{A}) = 1 - 0{,}6 = 0{,}4$. Áp dụng công thức xác suất toàn phần: $P(B) = P(A)P(B|A) + P(\\overline{A})P(B|\\overline{A}) = 0{,}6 \\cdot 0{,}5 + 0{,}4 \\cdot 0{,}25 = 0{,}30 + 0{,}10 = 0{,}40$.',
      'Luôn tính $P(\\overline{A}) = 1 - P(A)$ trước khi thay vào công thức xác suất toàn phần.',
      'sp_prob_tree_bayes'
    ),
  ],
  [
    makeTF(
      'otcnd1',
      1,
      'Tổng hợp Giải tích: Khảo sát hàm số và Tích phân',
      'Cho hàm số $f(x) = x^3 - 3x + 2$ có đồ thị $(C)$. Xét tính đúng sai của các mệnh đề sau:',
      [
        {
          text: 'Đạo hàm của hàm số đã cho là $f\'(x) = 3x^2 - 3$.',
          isCorrect: true,
          exp: 'Ta có $f\'(x) = (x^3 - 3x + 2)\' = 3x^2 - 3$.',
        },
        {
          text: 'Giá trị cực đại của hàm số đã cho bằng $4$ đạt tại $x = -1$.',
          isCorrect: true,
          exp: 'Cho $f\'(x) = 0 \\iff x = \\pm 1$. Vì $f\'(x)$ đổi dấu từ dương sang âm qua $x = -1$ nên $x_{\\text{CĐ}} = -1$ và $y_{\\text{CĐ}} = f(-1) = (-1)^3 - 3(-1) + 2 = 4$.',
        },
        {
          text: 'Giá trị lớn nhất của hàm số $f(x)$ trên đoạn $[0; 2]$ bằng $2$.',
          isCorrect: false,
          exp: 'Trên đoạn $[0; 2]$, có $x = 1 \\in [0; 2]$ là nghiệm của $f\'(x) = 0$. Ta có $f(0) = 2,\\ f(1) = 0,\\ f(2) = 4$. Vậy $\\max_{[0; 2]} f(x) = 4 \\ne 2$.',
        },
        {
          text: 'Diện tích hình phẳng giới hạn bởi đồ thị $(C)$, trục hoành và hai đường thẳng $x = -1, x = 1$ bằng $4$.',
          isCorrect: true,
          exp: 'Trên đoạn $[-1; 1]$, $f(x) \\ge 0$ nên $S = \\int_{-1}^{1} (x^3 - 3x + 2)\\,dx = \\left(\\frac{x^4}{4} - \\frac{3x^2}{2} + 2x\\right)\\Big|_{-1}^{1} = 4$.',
        },
      ],
      'Kết hợp bảng biến thiên của hàm bậc ba để xét dấu hàm số khi tính tích phân diện tích.'
    ),
    makeTF(
      'otcnd1',
      2,
      'Tổng hợp Hình học Oxyz: Đường thẳng, Mặt phẳng và Mặt cầu',
      'Trong không gian $Oxyz$, cho điểm $A(1; 2; -1)$, mặt phẳng $(P): 2x - y + 2z - 4 = 0$ và đường thẳng $d: \\frac{x - 1}{2} = \\frac{y - 2}{-1} = \\frac{z + 1}{2}$. Xét tính đúng sai của các mệnh đề sau:',
      [
        {
          text: 'Đường thẳng $d$ đi qua điểm $A(1; 2; -1)$ và vuông góc với mặt phẳng $(P)$.',
          isCorrect: true,
          exp: 'Thay toạ độ $A(1; 2; -1)$ vào $d$ thoả mãn, và $\\vec{u}_d = (2; -1; 2) = \\vec{n}_P$ nên $d \\perp (P)$.',
        },
        {
          text: 'Khoảng cách từ điểm $A$ đến mặt phẳng $(P)$ bằng $2$.',
          isCorrect: true,
          exp: 'Ta có $d(A, (P)) = \\frac{|2(1) - 2 + 2(-1) - 4|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{|-6|}{3} = 2$.',
        },
        {
          text: 'Hình chiếu vuông góc của điểm $A$ trên mặt phẳng $(P)$ là điểm $H\\left(\\frac{7}{3}; \\frac{4}{3}; \\frac{1}{3}\\right)$.',
          isCorrect: true,
          exp: 'Vì $d$ qua $A$ và $d \\perp (P)$ nên $H = d \\cap (P)$. Tham số hoá $H(1 + 2t; 2 - t; -1 + 2t) \\in (P) \\implies 2(1 + 2t) - (2 - t) + 2(-1 + 2t) - 4 = 0 \\implies 9t - 6 = 0 \\implies t = \\frac{2}{3}$. Suy ra $H\\left(\\frac{7}{3}; \\frac{4}{3}; \\frac{1}{3}\\right)$.',
        },
        {
          text: 'Mặt cầu tâm $A$ và tiếp xúc với mặt phẳng $(P)$ có phương trình là $(x - 1)^2 + (y - 2)^2 + (z + 1)^2 = 2$.',
          isCorrect: false,
          exp: 'Mặt cầu tiếp xúc với $(P)$ có bán kính $R = d(A, (P)) = 2$, nên vế phải của phương trình phải là $R^2 = 4$ (không phải $2$).',
        },
      ],
      'Hình chiếu vuông góc của $A$ lên $(P)$ chính là giao điểm của đường thẳng qua $A$ vuông góc với $(P)$ và mặt phẳng $(P)$.',
      'sp_oxyz_plane_normal'
    ),
    makeTF(
      'otcnd1',
      3,
      'Tổng hợp Xác suất: Xác suất toàn phần và công thức Bayes',
      'Một nhà máy có hai phân xưởng I và II cùng sản xuất một loại linh kiện điện tử. Phân xưởng I sản xuất $60\\%$ và phân xưởng II sản xuất $40\\%$ tổng số linh kiện của nhà máy. Tỉ lệ linh kiện đạt chuẩn của phân xưởng I là $95\\%$ và của phân xưởng II là $90\\%$. Chọn ngẫu nhiên $1$ linh kiện của nhà máy. Gọi $A$ là biến cố "Linh kiện do phân xưởng I sản xuất" và $B$ là biến cố "Linh kiện đạt chuẩn".',
      [
        {
          text: '$P(A) = 0{,}6$ và $P(B|A) = 0{,}95$.',
          isCorrect: true,
          exp: 'Từ giả thiết đề bài, phân xưởng I chiếm $60\\%$ nên $P(A) = 0{,}6$ và tỉ lệ đạt chuẩn của phân xưởng I là $P(B|A) = 0{,}95$.',
        },
        {
          text: 'Xác suất để linh kiện được chọn do phân xưởng II sản xuất và không đạt chuẩn là $0{,}04$.',
          isCorrect: true,
          exp: 'Ta có $P(\\overline{A}\\overline{B}) = P(\\overline{A}) \\cdot P(\\overline{B}|\\overline{A}) = 0{,}4 \\cdot (1 - 0{,}90) = 0{,}04$.',
        },
        {
          text: 'Xác suất chọn được linh kiện đạt chuẩn của nhà máy là $P(B) = 0{,}93$.',
          isCorrect: true,
          exp: 'Theo công thức xác suất toàn phần: $P(B) = 0{,}6 \\cdot 0{,}95 + 0{,}4 \\cdot 0{,}90 = 0{,}57 + 0{,}36 = 0{,}93$.',
        },
        {
          text: 'Biết linh kiện được chọn không đạt chuẩn, xác suất nó do phân xưởng I sản xuất lớn hơn $0{,}5$.',
          isCorrect: false,
          exp: 'Ta có $P(\\overline{B}) = 1 - 0{,}93 = 0{,}07$. Theo công thức Bayes: $P(A|\\overline{B}) = \\frac{P(A)P(\\overline{B}|A)}{P(\\overline{B})} = \\frac{0{,}6 \\cdot 0{,}05}{0{,}07} = \\frac{3}{7} \\approx 0{,}4286 < 0{,}5$.',
        },
      ],
      'Khi xét linh kiện không đạt chuẩn (biến cố $\\overline{B}$), ta áp dụng công thức Bayes cho biến cố đối $\\overline{B}$.',
      'sp_prob_tree_bayes'
    ),
  ],
  [
    makeSA(
      'otcnd1',
      1,
      'Bài toán vận tốc - quãng đường dùng tích phân',
      'Một vật chuyển động theo quy luật vận tốc $v(t) = 6t - 3t^2\\text{ (m/s)}$, với $t\\text{ (giây)}$ là khoảng thời gian tính từ lúc vật bắt đầu chuyển động ($t \\ge 0$). Tính quãng đường (đơn vị: mét) vật đi được từ lúc bắt đầu chuyển động ($t = 0$) đến khi vật dừng lại.',
      ['4'],
      'Vật dừng lại khi $v(t) = 0 \\iff 6t - 3t^2 = 0 \\iff t = 2$ (vì $t > 0$). Quãng đường vật đi được là $S = \\int_{0}^{2} (6t - 3t^2)\\,dt = (3t^2 - t^3)\\Big|_0^2 = 12 - 8 = 4\\text{ (m)}$.',
      'Giải phương trình $v(t) = 0$ để tìm thời điểm vật dừng lại trước khi lấy tích phân.',
      'm'
    ),
    makeSA(
      'otcnd1',
      2,
      'Thể tích khối tròn xoay khi quay quanh trục Ox',
      'Cho hình phẳng $(H)$ giới hạn bởi đồ thị hàm số $y = \\sqrt{3x}$, trục hoành và hai đường thẳng $x = 0, x = 2$. Khi quay $(H)$ quanh trục $Ox$, khối tròn xoay tạo thành có thể tích $V = a\\pi$. Tìm giá trị của $a$.',
      ['6'],
      'Thể tích khối tròn xoay là $V = \\pi \\int_{0}^{2} (\\sqrt{3x})^2\\,dx = \\pi \\int_{0}^{2} 3x\\,dx = \\pi \\cdot \\frac{3x^2}{2}\\Big|_0^2 = 6\\pi$. Vậy $a = 6$.',
      'Chú ý đề hỏi hệ số $a$ trong biểu thức $V = a\\pi$.',
      undefined,
      'sp_solid_of_revolution'
    ),
    makeSA(
      'otcnd1',
      3,
      'Góc giữa đường thẳng và mặt phẳng toạ độ',
      'Trong không gian $Oxyz$, tính góc (theo đơn vị độ) giữa đường thẳng $d: \\frac{x}{1} = \\frac{y}{-1} = \\frac{z}{\\sqrt{2}}$ và mặt phẳng $(Oxy)$.',
      ['45'],
      'Đường thẳng $d$ có vectơ chỉ phương $\\vec{u} = (1; -1; \\sqrt{2})$ và mặt phẳng $(Oxy): z = 0$ có vectơ pháp tuyến $\\vec{k} = (0; 0; 1)$. Ta có $\\sin(d, (Oxy)) = \\frac{|\\vec{u} \\cdot \\vec{k}|}{|\\vec{u}| \\cdot |\\vec{k}|} = \\frac{\\sqrt{2}}{\\sqrt{1 + 1 + 2} \\cdot 1} = \\frac{\\sqrt{2}}{2} \\implies (d, (Oxy)) = 45^\\circ$.',
      'Góc giữa đường thẳng và mặt phẳng được tính qua hàm $\\sin$ của góc giữa VTCP và VTPT.',
      'độ',
      'sp_oxyz_angle_line_plane'
    ),
    makeSA(
      'otcnd1',
      4,
      'Xác suất có điều kiện trong bài toán rút sản phẩm',
      'Một hộp có $10$ sản phẩm gồm $7$ chính phẩm và $3$ phế phẩm. Lấy ngẫu nhiên lần lượt $2$ sản phẩm theo phương thức không hoàn lại. Biết sản phẩm lấy ra ở lần thứ nhất là chính phẩm, tính xác suất để sản phẩm lấy ra ở lần thứ hai cũng là chính phẩm (làm tròn kết quả đến hàng phần trăm).',
      ['0,67', '0.67'],
      'Sau khi lấy ra $1$ chính phẩm ở lần thứ nhất, trong hộp còn lại $9$ sản phẩm gồm $6$ chính phẩm và $3$ phế phẩm. Xác suất để lần thứ hai lấy được chính phẩm là $\\frac{6}{9} = \\frac{2}{3} \\approx 0{,}67$.',
      'Khi lấy không hoàn lại, cả tổng số phần tử và số phần tử thuận lợi đều giảm đi 1 sau lần lấy đầu.'
    ),
  ],
  [
    makeSO(
      'otcnd1',
      1,
      'Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên một đoạn',
      'Cho hàm số $f(x) = x^3 - 3x^2 - 9x + 10$ liên tục trên đoạn $[-2; 4]$.',
      'Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số $f(x)$ trên đoạn $[-2; 4]$.',
      [
        {
          role: 'Tính đạo hàm của hàm số',
          content: 'Ta có đạo hàm $f\'(x) = 3x^2 - 6x - 9$.',
        },
        {
          role: 'Tìm các điểm tới hạn thuộc đoạn đang xét',
          content: 'Trên đoạn $[-2; 4]$, giải phương trình $f\'(x) = 0 \\iff 3x^2 - 6x - 9 = 0 \\iff x = -1 \\in [-2; 4]$ hoặc $x = 3 \\in [-2; 4]$.',
        },
        {
          role: 'Tính giá trị hàm số tại các điểm tới hạn và hai đầu mút',
          content: 'Ta tính được: $f(-2) = 8;\\ f(-1) = 15;\\ f(3) = -17;\\ f(4) = -10$.',
        },
        {
          role: 'So sánh và kết luận GTLN, GTNN',
          content: 'Vậy $\\max_{[-2; 4]} f(x) = f(-1) = 15$ và $\\min_{[-2; 4]} f(x) = f(3) = -17$.',
        },
      ],
      'Quy trình 4 bước chuẩn tìm GTLN - GTNN của hàm số trên một đoạn $[a; b]$.',
      'Bài toán kiểm tra kỹ năng đạo hàm và quy tắc tìm GTLN - GTNN trên đoạn.',
      0.7
    ),
    makeSO(
      'otcnd1',
      2,
      'Viết phương trình mặt phẳng đi qua một điểm và vuông góc với đường thẳng',
      'Trong không gian $Oxyz$, cho ba điểm $A(1; 0; -2)$, $B(2; -1; 3)$ và $C(4; 1; 1)$.',
      'Viết phương trình tổng quát của mặt phẳng $(P)$ đi qua điểm $A$ và vuông góc với đường thẳng $BC$.',
      [
        {
          role: 'Tính toạ độ vectơ chỉ phương của đường thẳng BC',
          content: 'Ta có $\\overrightarrow{BC} = (4 - 2; 1 - (-1); 1 - 3) = (2; 2; -2)$.',
        },
        {
          role: 'Xác định vectơ pháp tuyến của mặt phẳng (P)',
          content: 'Vì $(P) \\perp BC$ nên mặt phẳng $(P)$ nhận vectơ $\\vec{n} = \\frac{1}{2}\\overrightarrow{BC} = (1; 1; -1)$ làm một vectơ pháp tuyến.',
        },
        {
          role: 'Thay toạ độ điểm đi qua và VTPT vào phương trình mặt phẳng',
          content: 'Phương trình mặt phẳng $(P)$ đi qua $A(1; 0; -2)$ có VTPT $\\vec{n} = (1; 1; -1)$ là: $1(x - 1) + 1(y - 0) - 1(z + 2) = 0$.',
        },
        {
          role: 'Thu gọn về phương trình tổng quát',
          content: 'Khai triển và rút gọn ta được phương trình $(P): x + y - z - 3 = 0$.',
        },
      ],
      'Mặt phẳng vuông góc với đường thẳng nhận vectơ chỉ phương của đường thẳng làm vectơ pháp tuyến.',
      'Rút gọn vectơ pháp tuyến cùng phương giúp phương trình mặt phẳng tối giản ngay từ đầu.',
      0.65,
      'sp_oxyz_plane_normal'
    ),
    makeSO(
      'otcnd1',
      3,
      'Giải bài toán thực tế bằng công thức xác suất toàn phần và công thức Bayes',
      'Một cửa hàng nhập linh kiện từ hai lô hàng: lô I chiếm $70\\%$ và lô II chiếm $30\\%$ tổng số linh kiện. Tỉ lệ linh kiện tốt của lô I là $90\\%$ và của lô II là $80\\%$. Lấy ngẫu nhiên $1$ linh kiện thấy đó là linh kiện tốt.',
      'Tính xác suất để linh kiện tốt đó thuộc lô I.',
      [
        {
          role: 'Gọi tên các biến cố và xác định xác suất tiên nghiệm',
          content: 'Gọi $A$ là biến cố "Linh kiện thuộc lô I" và $B$ là biến cố "Linh kiện lấy ra là linh kiện tốt". Ta có $P(A) = 0{,}7$ và $P(\\overline{A}) = 0{,}3$.',
        },
        {
          role: 'Xác định các xác suất có điều kiện ở từng lô',
          content: 'Theo đề bài, xác suất linh kiện tốt ở mỗi lô là $P(B|A) = 0{,}9$ và $P(B|\\overline{A}) = 0{,}8$.',
        },
        {
          role: 'Áp dụng công thức xác suất toàn phần tính P(B)',
          content: 'Xác suất lấy được linh kiện tốt là $P(B) = P(A)P(B|A) + P(\\overline{A})P(B|\\overline{A}) = 0{,}7 \\cdot 0{,}9 + 0{,}3 \\cdot 0{,}8 = 0{,}87$.',
        },
        {
          role: 'Áp dụng công thức Bayes tìm xác suất hậu nghiệm P(A|B)',
          content: 'Xác suất linh kiện tốt đó thuộc lô I là $P(A|B) = \\frac{P(A)P(B|A)}{P(B)} = \\frac{0{,}63}{0{,}87} = \\frac{21}{29}$.',
        },
      ],
      'Quy trình 4 bước giải bài toán thực tế bằng công thức xác suất toàn phần và Bayes.',
      'Bài toán điển hình trong phần Ôn tập cuối năm của SGK Toán 12 Tập 2.',
      0.65,
      'sp_prob_tree_bayes'
    ),
  ]
);

const ontapCuoiNamDe2 = makeLessonExam(
  'ontap-cn-de02',
  'Ôn tập cuối năm - Đề ôn số 2',
  'Đề tổng hợp nâng cao kỹ năng giải toán 12 và ôn thi tốt nghiệp THPT',
  'Đề ôn tập cuối năm (Số 2) bao quát toàn diện kiến thức Toán 12 (Tập 1 & Tập 2 - SGK Kết nối tri thức trang 90): Cực trị - tiệm cận hàm số, Nguyên hàm - Tích phân và thể tích vật thể tròn xoay, Hình học Oxyz (mặt phẳng đoạn chắn, đường thẳng tham số, mặt cầu) và Xác suất có điều kiện - Bayes.',
  [
    makeMC(
      'otcnd2',
      1,
      'Giá trị cực tiểu của hàm số bậc ba',
      'Giá trị cực tiểu của hàm số $y = x^3 - 12x + 5$ bằng:',
      [
        '$-11$',
        '$21$',
        '$2$',
        '$-2$',
      ],
      'A',
      'Ta có $y\' = 3x^2 - 12 = 0 \\iff x = \\pm 2$. Điểm cực tiểu của hàm số là $x = 2$, suy ra giá trị cực tiểu là $y_{\\text{CT}} = y(2) = 2^3 - 12(2) + 5 = -11$.',
      'Phân biệt rõ "điểm cực tiểu của hàm số" ($x = 2$) và "giá trị cực tiểu của hàm số" ($y = -11$).'
    ),
    makeMC(
      'otcnd2',
      2,
      'Đường tiệm cận đứng của đồ thị hàm số',
      'Đường tiệm cận đứng của đồ thị hàm số $y = \\frac{2x + 1}{x - 3}$ là đường thẳng có phương trình:',
      [
        '$x = 3$',
        '$y = 2$',
        '$x = -3$',
        '$y = 3$',
      ],
      'A',
      'Ta có $\\lim_{x \\to 3^+} \\frac{2x + 1}{x - 3} = +\\infty$ và $\\lim_{x \\to 3^-} \\frac{2x + 1}{x - 3} = -\\infty$. Vậy tiệm cận đứng của đồ thị là đường thẳng $x = 3$.',
      'Nghiệm của mẫu số không trùng với nghiệm tử số của hàm phân thức bậc nhất trên bậc nhất là tiệm cận đứng.'
    ),
    makeMC(
      'otcnd2',
      3,
      'Nguyên hàm của hàm số mũ và đa thức',
      'Họ tất cả các nguyên hàm của hàm số $f(x) = e^x + 2x$ trên $\\mathbb{R}$ là:',
      [
        '$e^x + x^2 + C$',
        '$e^x + 2 + C$',
        '$e^x + 2x^2 + C$',
        '$xe^x + x^2 + C$',
      ],
      'A',
      'Ta có $\\int (e^x + 2x)\\,dx = e^x + x^2 + C$.',
      'Áp dụng công thức $\\int e^x\\,dx = e^x + C$ và $\\int 2x\\,dx = x^2 + C$.'
    ),
    makeMC(
      'otcnd2',
      4,
      'Tính chất tuyến tính của tích phân',
      'Biết $\\int_{1}^{2} f(x)\\,dx = 3$ và $\\int_{1}^{2} g(x)\\,dx = -2$. Khi đó giá trị của $\\int_{1}^{2} [2f(x) - g(x)]\\,dx$ bằng:',
      [
        '$8$',
        '$4$',
        '$1$',
        '$5$',
      ],
      'A',
      'Ta có $\\int_{1}^{2} [2f(x) - g(x)]\\,dx = 2\\int_{1}^{2} f(x)\\,dx - \\int_{1}^{2} g(x)\\,dx = 2(3) - (-2) = 8$.',
      'Cẩn thận dấu trừ khi thay $\\int_1^2 g(x)\\,dx = -2$.'
    ),
    makeMC(
      'otcnd2',
      5,
      'Thể tích khối tròn xoay quanh trục Ox',
      'Thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi đồ thị hàm số $y = x^2$, trục hoành và hai đường thẳng $x = 0, x = 2$ quanh trục $Ox$ là:',
      [
        '$\\frac{32\\pi}{5}$',
        '$\\frac{8\\pi}{3}$',
        '$\\frac{32}{5}$',
        '$16\\pi$',
      ],
      'A',
      'Áp dụng công thức $V = \\pi \\int_{0}^{2} (x^2)^2\\,dx = \\pi \\int_{0}^{2} x^4\\,dx = \\pi \\cdot \\frac{x^5}{5}\\Big|_0^2 = \\frac{32\\pi}{5}$.',
      'Công thức thể tích khối tròn xoay luôn có thừa số $\\pi$ và bình phương hàm số $f^2(x)$.',
      'sp_solid_of_revolution'
    ),
    makeMC(
      'otcnd2',
      6,
      'Tích vô hướng của hai vectơ trong không gian',
      'Trong không gian $Oxyz$, cho hai vectơ $\\vec{u} = (2; -1; 3)$ và $\\vec{v} = (1; 4; -2)$. Tích vô hướng $\\vec{u} \\cdot \\vec{v}$ bằng:',
      [
        '$-8$',
        '$8$',
        '$0$',
        '$-4$',
      ],
      'A',
      'Ta có $\\vec{u} \\cdot \\vec{v} = 2 \\cdot 1 + (-1) \\cdot 4 + 3 \\cdot (-2) = 2 - 4 - 6 = -8$.',
      'Tích vô hướng của hai vectơ là một số thực bằng tổng tích các toạ độ tương ứng.'
    ),
    makeMC(
      'otcnd2',
      7,
      'Phương trình mặt phẳng theo đoạn chắn',
      'Trong không gian $Oxyz$, phương trình mặt phẳng đi qua ba điểm $A(3; 0; 0)$, $B(0; -2; 0)$ và $C(0; 0; 4)$ là:',
      [
        '$\\frac{x}{3} + \\frac{y}{-2} + \\frac{z}{4} = 1$',
        '$\\frac{x}{3} + \\frac{y}{-2} + \\frac{z}{4} = 0$',
        '$3x - 2y + 4z - 1 = 0$',
        '$4x - 6y + 3z = 1$',
      ],
      'A',
      'Mặt phẳng cắt ba trục toạ độ tại $A(3; 0; 0), B(0; -2; 0), C(0; 0; 4)$ có phương trình theo đoạn chắn là $\\frac{x}{3} + \\frac{y}{-2} + \\frac{z}{4} = 1$.',
      'Vế phải của phương trình mặt phẳng theo đoạn chắn luôn bằng $1$.',
      'sp_oxyz_plane_intercepts'
    ),
    makeMC(
      'otcnd2',
      8,
      'Phương trình tham số của đường thẳng',
      'Trong không gian $Oxyz$, đường thẳng đi qua điểm $M(2; 0; -1)$ và có một vectơ chỉ phương $\\vec{u} = (1; -3; 2)$ có phương trình tham số là:',
      [
        '$\\begin{cases} x = 2 + t \\\\ y = -3t \\\\ z = -1 + 2t \\end{cases}$',
        '$\\begin{cases} x = 1 + 2t \\\\ y = -3 \\\\ z = 2 - t \\end{cases}$',
        '$\\begin{cases} x = -2 + t \\\\ y = -3t \\\\ z = 1 + 2t \\end{cases}$',
        '$\\begin{cases} x = 2 + t \\\\ y = 3t \\\\ z = -1 + 2t \\end{cases}$',
      ],
      'A',
      'Đường thẳng qua $M(2; 0; -1)$ với VTCP $\\vec{u} = (1; -3; 2)$ có phương trình tham số là $x = 2 + t,\\ y = -3t,\\ z = -1 + 2t$.',
      'Toạ độ điểm đi qua là hệ số tự do, toạ độ VTCP là hệ số nhân với tham số $t$.',
      'sp_oxyz_line_3d'
    ),
    makeMC(
      'otcnd2',
      9,
      'Tâm và bán kính mặt cầu từ phương trình khai triển',
      'Trong không gian $Oxyz$, mặt cầu $(S): x^2 + y^2 + z^2 - 4x + 2y - 6z + 5 = 0$ có tâm $I$ và bán kính $R$ là:',
      [
        '$I(2; -1; 3),\\ R = 3$',
        '$I(-2; 1; -3),\\ R = 3$',
        '$I(2; -1; 3),\\ R = 9$',
        '$I(4; -2; 6),\\ R = 3$',
      ],
      'A',
      'Chia các hệ số của $x, y, z$ cho $-2$, ta được tâm $I(2; -1; 3)$. Bán kính $R = \\sqrt{2^2 + (-1)^2 + 3^2 - 5} = \\sqrt{9} = 3$.',
      'Áp dụng công thức $R = \\sqrt{a^2 + b^2 + c^2 - d}$ với tâm $I(a; b; c)$.',
      'sp_oxyz_sphere'
    ),
    makeMC(
      'otcnd2',
      10,
      'Khoảng tứ phân vị của mẫu số liệu ghép nhóm',
      'Khoảng tứ phân vị $\\Delta_Q$ của một mẫu số liệu ghép nhóm có tứ phân vị thứ nhất $Q_1$, tứ phân vị thứ hai $Q_2$ và tứ phân vị thứ ba $Q_3$ được tính bởi công thức:',
      [
        '$\\Delta_Q = Q_3 - Q_1$',
        '$\\Delta_Q = Q_3 + Q_1$',
        '$\\Delta_Q = Q_2 - Q_1$',
        '$\\Delta_Q = \\frac{Q_3 - Q_1}{2}$',
      ],
      'A',
      'Theo định nghĩa, khoảng tứ phân vị của mẫu số liệu ghép nhóm là $\\Delta_Q = Q_3 - Q_1$.',
      'Khoảng tứ phân vị đo mức độ phân tán của $50\\%$ số liệu nằm ở chính giữa mẫu.'
    ),
    makeMC(
      'otcnd2',
      11,
      'Liên hệ giữa P(A|B) và P(B|A)',
      'Cho hai biến cố $A$ và $B$ có $P(A) = 0{,}4$; $P(B) = 0{,}6$ và $P(A|B) = 0{,}5$. Khi đó xác suất có điều kiện $P(B|A)$ bằng:',
      [
        '$0{,}75$',
        '$0{,}50$',
        '$0{,}30$',
        '$0{,}60$',
      ],
      'A',
      'Ta có $P(AB) = P(B) \\cdot P(A|B) = 0{,}6 \\cdot 0{,}5 = 0{,}3$. Suy ra $P(B|A) = \\frac{P(AB)}{P(A)} = \\frac{0{,}3}{0{,}4} = 0{,}75$.',
      'Sử dụng $P(AB) = P(B)P(A|B) = P(A)P(B|A)$ để chuyển đổi giữa $P(A|B)$ và $P(B|A)$.'
    ),
    makeMC(
      'otcnd2',
      12,
      'Bài toán xét nghiệm y khoa bằng công thức xác suất toàn phần',
      'Tỉ lệ người mắc bệnh $X$ trong một cộng đồng là $2\\%$. Một phương pháp xét nghiệm cho kết quả dương tính với $95\\%$ người mắc bệnh và $4\\%$ người không mắc bệnh. Chọn ngẫu nhiên một người trong cộng đồng đi xét nghiệm thì xác suất người đó có kết quả dương tính là:',
      [
        '$0{,}0582$',
        '$0{,}0190$',
        '$0{,}0392$',
        '$0{,}0590$',
      ],
      'A',
      'Gọi $A$ là biến cố "Người đó mắc bệnh" ($P(A) = 0{,}02,\\ P(\\overline{A}) = 0{,}98$) và $B$ là biến cố "Xét nghiệm dương tính". Ta có $P(B) = 0{,}02 \\cdot 0{,}95 + 0{,}98 \\cdot 0{,}04 = 0{,}019 + 0{,}0392 = 0{,}0582$.',
      'Kết quả dương tính gồm cả người mắc bệnh thật (dương tính thật) và người không mắc bệnh (dương tính giả).',
      'sp_prob_tree_bayes'
    ),
  ],
  [
    makeTF(
      'otcnd2',
      1,
      'Tổng hợp Khảo sát hàm phân thức và Tích phân',
      'Cho hàm số $y = \\frac{2x - 1}{x + 1}$ có đồ thị $(C)$. Xét tính đúng sai của các mệnh đề sau:',
      [
        {
          text: 'Đạo hàm của hàm số là $y\' = \\frac{3}{(x + 1)^2} > 0$ với mọi $x \\ne -1$.',
          isCorrect: true,
          exp: 'Ta có $y\' = \\frac{2(x + 1) - 1(2x - 1)}{(x + 1)^2} = \\frac{3}{(x + 1)^2} > 0,\\ \\forall x \\ne -1$.',
        },
        {
          text: 'Đồ thị $(C)$ có tâm đối xứng là giao điểm $I(-1; 2)$ của hai đường tiệm cận.',
          isCorrect: true,
          exp: 'Đồ thị có tiệm cận đứng $x = -1$ và tiệm cận ngang $y = 2$, nên giao điểm $I(-1; 2)$ là tâm đối xứng của $(C)$.',
        },
        {
          text: 'Tích phân $\\int_{0}^{2} \\frac{2x - 1}{x + 1}\\,dx = 4 - 3\\ln 3$.',
          isCorrect: true,
          exp: 'Ta có $\\int_{0}^{2} \\left(2 - \\frac{3}{x + 1}\\right)dx = (2x - 3\\ln|x + 1|)\\Big|_0^2 = 4 - 3\\ln 3$.',
        },
        {
          text: 'Giá trị lớn nhất của hàm số trên đoạn $[0; 2]$ bằng $2$.',
          isCorrect: false,
          exp: 'Vì hàm số đồng biến trên đoạn $[0; 2]$ nên $\\max_{[0; 2]} y = y(2) = \\frac{2(2) - 1}{2 + 1} = 1 \\ne 2$.',
        },
      ],
      'Khi tính tích phân của hàm phân thức hữu tỉ, ta chia tử cho mẫu để tách thành phần nguyên và phần phân thức đơn giản.'
    ),
    makeTF(
      'otcnd2',
      2,
      'Tổng hợp Hình học Oxyz: Mặt cầu và Mặt phẳng tiếp xúc',
      'Trong không gian $Oxyz$, cho mặt cầu $(S): (x - 1)^2 + (y + 2)^2 + (z - 2)^2 = 9$ và mặt phẳng $(P): 2x + 2y - z + 13 = 0$. Xét tính đúng sai của các mệnh đề sau:',
      [
        {
          text: 'Mặt cầu $(S)$ có tâm $I(1; -2; 2)$ và bán kính $R = 3$.',
          isCorrect: true,
          exp: 'Từ phương trình chính tắc của $(S)$, tâm $I(1; -2; 2)$ và $R = \\sqrt{9} = 3$.',
        },
        {
          text: 'Khoảng cách từ tâm $I$ đến mặt phẳng $(P)$ bằng $3$.',
          isCorrect: true,
          exp: 'Ta có $d(I, (P)) = \\frac{|2(1) + 2(-2) - 2 + 13|}{\\sqrt{2^2 + 2^2 + (-1)^2}} = \\frac{|2 - 4 - 2 + 13|}{3} = \\frac{9}{3} = 3$.',
        },
        {
          text: 'Mặt phẳng $(P)$ tiếp xúc với mặt cầu $(S)$.',
          isCorrect: true,
          exp: 'Vì $d(I, (P)) = 3 = R$ nên mặt phẳng $(P)$ tiếp xúc với mặt cầu $(S)$.',
        },
        {
          text: 'Điểm $M(1; 1; 2)$ nằm ở bên ngoài mặt cầu $(S)$.',
          isCorrect: false,
          exp: 'Ta có $IM = \\sqrt{(1 - 1)^2 + (1 - (-2))^2 + (2 - 2)^2} = 3 = R$, nên điểm $M$ nằm trên mặt cầu $(S)$ (không phải nằm bên ngoài).',
        },
      ],
      'So sánh khoảng cách từ tâm $I$ đến mặt phẳng $(P)$ với bán kính $R$: nếu $d(I, (P)) = R$ thì mặt phẳng tiếp xúc với mặt cầu.',
      'sp_oxyz_sphere'
    ),
    makeTF(
      'otcnd2',
      3,
      'Tổng hợp Xác suất: Thí nghiệm hai giai đoạn với xúc xắc và hộp bi',
      'Một hộp I có $4$ viên bi đỏ và $6$ viên bi xanh; hộp II có $7$ viên bi đỏ và $3$ viên bi xanh. Gieo một con xúc xắc cân đối và đồng chất: nếu xuất hiện mặt $1$ chấm hoặc $2$ chấm thì lấy ngẫu nhiên $1$ viên bi từ hộp I; nếu xuất hiện mặt từ $3$ chấm đến $6$ chấm thì lấy ngẫu nhiên $1$ viên bi từ hộp II. Gọi $A$ là biến cố "Lấy bi từ hộp I" và $B$ là biến cố "Lấy được viên bi màu đỏ".',
      [
        {
          text: '$P(A) = \\frac{1}{3}$ và $P(\\overline{A}) = \\frac{2}{3}$.',
          isCorrect: true,
          exp: 'Có $2$ kết quả thuận lợi ($1, 2$ chấm) trong $6$ kết quả đồng khả năng của xúc xắc nên $P(A) = \\frac{2}{6} = \\frac{1}{3}$ và $P(\\overline{A}) = \\frac{4}{6} = \\frac{2}{3}$.',
        },
        {
          text: '$P(B|A) = 0{,}4$ và $P(B|\\overline{A}) = 0{,}7$.',
          isCorrect: true,
          exp: 'Hộp I có $\\frac{4}{10} = 0{,}4$ bi đỏ; hộp II có $\\frac{7}{10} = 0{,}7$ bi đỏ.',
        },
        {
          text: 'Xác suất lấy được viên bi màu đỏ là $P(B) = 0{,}6$.',
          isCorrect: true,
          exp: 'Theo công thức xác suất toàn phần: $P(B) = \\frac{1}{3} \\cdot 0{,}4 + \\frac{2}{3} \\cdot 0{,}7 = \\frac{1{,}8}{3} = 0{,}6$.',
        },
        {
          text: 'Biết viên bi lấy ra có màu đỏ, xác suất nó được lấy từ hộp I là $\\frac{1}{3}$.',
          isCorrect: false,
          exp: 'Theo công thức Bayes: $P(A|B) = \\frac{P(A)P(B|A)}{P(B)} = \\frac{\\frac{1}{3} \\cdot 0{,}4}{0{,}6} = \\frac{0{,}4}{1{,}8} = \\frac{2}{9} \\ne \\frac{1}{3}$.',
        },
      ],
      'Vẽ sơ đồ hình cây hai tầng giúp kiểm soát rõ xác suất nhánh chọn hộp và nhánh chọn bi.',
      'sp_prob_tree_bayes'
    ),
  ],
  [
    makeSA(
      'otcnd2',
      1,
      'Tính diện tích hình phẳng giới hạn bởi parabol và trục hoành',
      'Tính diện tích $S$ của hình phẳng giới hạn bởi đồ thị hàm số $y = 3x^2 - 12$ và trục hoành.',
      ['32'],
      'Phương trình hoành độ giao điểm: $3x^2 - 12 = 0 \\iff x = \\pm 2$. Diện tích hình phẳng là $S = \\int_{-2}^{2} |3x^2 - 12|\\,dx = \\int_{-2}^{2} (12 - 3x^2)\\,dx = (12x - x^3)\\Big|_{-2}^{2} = 16 - (-16) = 32$.',
      'Giải phương trình $f(x) = 0$ để tìm hai cận tích phân khi đề chưa cho sẵn cận.',
      undefined,
      'sp_integral_area_curve'
    ),
    makeSA(
      'otcnd2',
      2,
      'Tính khoảng cách từ một điểm đến mặt phẳng',
      'Trong không gian $Oxyz$, khoảng cách từ điểm $M(2; -1; 4)$ đến mặt phẳng $(P): 2x - y + 2z + 2 = 0$ bằng bao nhiêu?',
      ['5'],
      'Áp dụng công thức khoảng cách: $d(M, (P)) = \\frac{|2(2) - (-1) + 2(4) + 2|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{|4 + 1 + 8 + 2|}{3} = \\frac{15}{3} = 5$.',
      'Thay đúng dấu toạ độ điểm $M$ vào vế trái phương trình mặt phẳng và chia cho độ dài vectơ pháp tuyến.',
      undefined,
      'sp_oxyz_plane_normal'
    ),
    makeSA(
      'otcnd2',
      3,
      'Tìm bán kính mặt cầu biết tâm và một điểm đi qua',
      'Trong không gian $Oxyz$, mặt cầu $(S)$ có tâm $I(1; 2; -2)$ và đi qua điểm $A(3; 4; -1)$ có bán kính $R$ bằng bao nhiêu?',
      ['3'],
      'Bán kính của mặt cầu là khoảng cách từ tâm $I$ đến điểm $A$: $R = IA = \\sqrt{(3 - 1)^2 + (4 - 2)^2 + (-1 - (-2))^2} = \\sqrt{4 + 4 + 1} = 3$.',
      'Mặt cầu tâm $I$ đi qua $A$ có bán kính $R = IA$.',
      undefined,
      'sp_oxyz_sphere'
    ),
    makeSA(
      'otcnd2',
      4,
      'Tính xác suất hậu nghiệm bằng công thức Bayes',
      'Cho hai biến cố $A$ và $B$ với $P(A) = 0{,}5$; $P(B|A) = 0{,}6$ và $P(B|\\overline{A}) = 0{,}2$. Tính xác suất $P(A|B)$.',
      ['0,75', '0.75'],
      'Ta có $P(\\overline{A}) = 0{,}5$. Theo công thức xác suất toàn phần: $P(B) = 0{,}5 \\cdot 0{,}6 + 0{,}5 \\cdot 0{,}2 = 0{,}4$. Theo công thức Bayes: $P(A|B) = \\frac{0{,}5 \\cdot 0{,}6}{0{,}4} = 0{,}75$.',
      'Khi $P(A) = P(\\overline{A}) = 0{,}5$, công thức Bayes rút gọn thành $\\frac{P(B|A)}{P(B|A) + P(B|\\overline{A})}$.',
      undefined,
      'sp_prob_tree_bayes'
    ),
  ],
  [
    makeSO(
      'otcnd2',
      1,
      'Tính diện tích hình phẳng giới hạn bởi hai đồ thị hàm số',
      'Cho hình phẳng $(H)$ giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 2x + 3$.',
      'Tính diện tích $S$ của hình phẳng $(H)$.',
      [
        {
          role: 'Tìm hoành độ giao điểm của hai đồ thị',
          content: 'Giải phương trình hoành độ giao điểm: $x^2 = 2x + 3 \\iff x^2 - 2x - 3 = 0 \\iff x = -1$ hoặc $x = 3$.',
        },
        {
          role: 'Thiết lập tích phân diện tích hình phẳng',
          content: 'Trên đoạn $[-1; 3]$, $2x + 3 \\ge x^2$ nên diện tích hình phẳng là $S = \\int_{-1}^{3} |2x + 3 - x^2|\\,dx = \\int_{-1}^{3} (2x + 3 - x^2)\\,dx$.',
        },
        {
          role: 'Tìm nguyên hàm của biểu thức dưới dấu tích phân',
          content: 'Một nguyên hàm của hàm số $2x + 3 - x^2$ là $F(x) = x^2 + 3x - \\frac{x^3}{3}$.',
        },
        {
          role: 'Thế cận và tính kết quả diện tích',
          content: 'Thế cận ta được $S = F(3) - F(-1) = 9 - \\left(-\\frac{5}{3}\\right) = \\frac{32}{3}$.',
        },
      ],
      'Quy trình chuẩn tính diện tích hình phẳng giới hạn bởi hai đồ thị $y = f(x)$ và $y = g(x)$ khi chưa biết cận.',
      'Bài toán kết hợp giải phương trình bậc hai và tính tích phân đa thức.',
      0.7,
      'sp_integral_area_curve'
    ),
    makeSO(
      'otcnd2',
      2,
      'Tìm toạ độ giao điểm của đường thẳng và mặt phẳng',
      'Trong không gian $Oxyz$, cho đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 1}{1} = \\frac{z}{3}$ và mặt phẳng $(P): x + y + z - 6 = 0$.',
      'Tìm toạ độ giao điểm $M$ của đường thẳng $d$ và mặt phẳng $(P)$.',
      [
        {
          role: 'Chuyển phương trình đường thẳng về dạng tham số',
          content: 'Viết phương trình tham số của $d$: $x = 1 + 2t,\\ y = -1 + t,\\ z = 3t\\ (t \\in \\mathbb{R})$.',
        },
        {
          role: 'Tham số hoá toạ độ điểm M và thay vào phương trình mặt phẳng',
          content: 'Gọi $M(1 + 2t; -1 + t; 3t) \\in d$. Vì $M \\in (P)$ nên $(1 + 2t) + (-1 + t) + 3t - 6 = 0$.',
        },
        {
          role: 'Giải phương trình tìm giá trị tham số t',
          content: 'Thu gọn phương trình ta được $6t - 6 = 0 \\iff t = 1$.',
        },
        {
          role: 'Thay t vào toạ độ điểm M và kết luận',
          content: 'Thay $t = 1$ vào toạ độ của $M$, ta được giao điểm $M(3; 0; 3)$.',
        },
      ],
      'Tham số hoá điểm thuộc đường thẳng rồi thế vào phương trình mặt phẳng là phương pháp tổng quát tìm giao điểm.',
      'Kỹ năng cơ bản và quan trọng trong Hình học Oxyz.',
      0.65,
      'sp_oxyz_line_3d'
    ),
    makeSO(
      'otcnd2',
      3,
      'Viết phương trình mặt cầu có đường kính AB',
      'Trong không gian $Oxyz$, cho hai điểm $A(1; 3; -2)$ và $B(5; -1; 4)$.',
      'Viết phương trình mặt cầu $(S)$ có đường kính $AB$.',
      [
        {
          role: 'Tìm toạ độ tâm I là trung điểm của đoạn thẳng AB',
          content: 'Tâm $I$ của mặt cầu là trung điểm của $AB$: $I\\left(\\frac{1+5}{2}; \\frac{3-1}{2}; \\frac{-2+4}{2}\\right) = I(3; 1; 1)$.',
        },
        {
          role: 'Tính toạ độ vectơ IA',
          content: 'Ta có $\\overrightarrow{IA} = (1 - 3; 3 - 1; -2 - 1) = (-2; 2; -3)$.',
        },
        {
          role: 'Tính bán kính R của mặt cầu',
          content: 'Bán kính mặt cầu là $R = IA = \\sqrt{(-2)^2 + 2^2 + (-3)^2} = \\sqrt{17}$.',
        },
        {
          role: 'Viết phương trình chính tắc của mặt cầu (S)',
          content: 'Vậy phương trình mặt cầu $(S)$ là $(x - 3)^2 + (y - 1)^2 + (z - 1)^2 = 17$.',
        },
      ],
      'Mặt cầu đường kính $AB$ có tâm là trung điểm $I$ của $AB$ và bán kính $R = IA = \\frac{AB}{2}$.',
      'Cẩn thận ghi $R^2 = 17$ ở vế phải của phương trình mặt cầu.',
      0.65,
      'sp_oxyz_sphere'
    ),
  ]
);

export const YEAR_END_REVIEW_LESSONS: LessonInfo[] = [
  {
    id: 'ontap-cuoi-nam',
    code: 'Ôn tập cuối năm',
    title: 'Bài tập ôn tập cuối năm',
    fullName: 'Bài tập ôn tập cuối năm',
    chapterId: 'ontap-cuoi-nam-group',
    chapterTitle: 'ÔN TẬP CUỐI NĂM',
    pageNumber: 90,
    coreTopics: [
      'Tổng hợp Giải tích 12: Ứng dụng đạo hàm để khảo sát hàm số, Nguyên hàm, Tích phân và ứng dụng hình học',
      'Tổng hợp Hình học không gian Oxyz: Vectơ, Phương trình mặt phẳng, đường thẳng, mặt cầu và công thức tính góc',
      'Tổng hợp Thống kê & Xác suất: Các số đặc trưng đo mức độ phân tán, Xác suất có điều kiện và công thức Bayes',
    ],
    practiceExams: [ontapCuoiNamDe1, ontapCuoiNamDe2],
  },
];
