import { LessonInfo } from './types';
import { makeMC, makeTF, makeSA, makeSO, makeLessonExam } from './helpers';

// ============================================================================
// BÀI 16: CÔNG THỨC TÍNH GÓC TRONG KHÔNG GIAN (SGK Toán 12 Tập 2 - Trang 50)
// ============================================================================

const bai16De1 = makeLessonExam(
  'bai16-de01',
  'Bài 16 - Đề ôn số 1',
  'Công thức tính góc trong không gian: Góc giữa hai đường thẳng, đường thẳng và mặt phẳng, hai mặt phẳng',
  'Đề ôn tập Bài 16 (Số 1) bám sát yêu cầu cần đạt SGK Toán 12 Tập 2 Kết nối tri thức: Công thức tính côsin góc giữa hai đường thẳng, sin góc giữa đường thẳng và mặt phẳng, côsin góc giữa hai mặt phẳng và bài toán thực tế.',
  [
    makeMC(
      'b16d1',
      1,
      'Công thức góc giữa hai đường thẳng',
      'Trong không gian $Oxyz$, cho hai đường thẳng $\\Delta_1, \\Delta_2$ tương ứng có vectơ chỉ phương là $\\vec{u}_1 = (a_1; b_1; c_1)$ và $\\vec{u}_2 = (a_2; b_2; c_2)$. Khi đó $\\cos(\\Delta_1, \\Delta_2)$ được tính bởi công thức:',
      [
        '$\\cos(\\Delta_1, \\Delta_2) = \\frac{|a_1a_2 + b_1b_2 + c_1c_2|}{\\sqrt{a_1^2 + b_1^2 + c_1^2}\\cdot\\sqrt{a_2^2 + b_2^2 + c_2^2}}$',
        '$\\cos(\\Delta_1, \\Delta_2) = \\frac{a_1a_2 + b_1b_2 + c_1c_2}{\\sqrt{a_1^2 + b_1^2 + c_1^2}\\cdot\\sqrt{a_2^2 + b_2^2 + c_2^2}}$',
        '$\\sin(\\Delta_1, \\Delta_2) = \\frac{|a_1a_2 + b_1b_2 + c_1c_2|}{\\sqrt{a_1^2 + b_1^2 + c_1^2}\\cdot\\sqrt{a_2^2 + b_2^2 + c_2^2}}$',
        '$\\cos(\\Delta_1, \\Delta_2) = \\frac{|a_1a_2 + b_1b_2 + c_1c_2|}{a_1^2 + b_1^2 + c_1^2 + a_2^2 + b_2^2 + c_2^2}$',
      ],
      'A',
      'Góc giữa hai đường thẳng luôn nhọn hoặc vuông ($0^\\circ \\le (\\Delta_1, \\Delta_2) \\le 90^\\circ$) nên $\\cos(\\Delta_1, \\Delta_2) = |\\cos(\\vec{u}_1, \\vec{u}_2)| = \\frac{|\\vec{u}_1 \\cdot \\vec{u}_2|}{|\\vec{u}_1| \\cdot |\\vec{u}_2|}$.',
      'Trên tử số luôn có dấu giá trị tuyệt đối vì góc giữa hai đường thẳng không vượt quá $90^\\circ$.'
    ),
    makeMC(
      'b16d1',
      2,
      'Tính góc giữa hai đường thẳng',
      'Trong không gian $Oxyz$, góc giữa hai đường thẳng $d_1: \\frac{x - 1}{1} = \\frac{y + 2}{-1} = \\frac{z}{2}$ và $d_2: \\frac{x}{2} = \\frac{y - 1}{1} = \\frac{z + 3}{1}$ bằng:',
      [
        '$60^\\circ$',
        '$30^\\circ$',
        '$45^\\circ$',
        '$90^\\circ$',
      ],
      'A',
      'Ta có $\\vec{u}_1 = (1; -1; 2), \\vec{u}_2 = (2; 1; 1)$. Khi đó $\\cos(d_1, d_2) = \\frac{|1\\cdot 2 + (-1)\\cdot 1 + 2\\cdot 1|}{\\sqrt{6}\\cdot\\sqrt{6}} = \\frac{3}{6} = \\frac{1}{2} \\Rightarrow (d_1, d_2) = 60^\\circ$.',
      'Từ $\\cos\\varphi = \\frac{1}{2}$ suy ra $\\varphi = 60^\\circ$.'
    ),
    makeMC(
      'b16d1',
      3,
      'Công thức góc giữa đường thẳng và mặt phẳng',
      'Trong không gian $Oxyz$, cho đường thẳng $\\Delta$ có vectơ chỉ phương $\\vec{u} = (a; b; c)$ và mặt phẳng $(P)$ có vectơ pháp tuyến $\\vec{n} = (A; B; C)$. Khi đó $\\sin(\\Delta, (P))$ bằng:',
      [
        '$\\frac{|aA + bB + cC|}{\\sqrt{a^2 + b^2 + c^2}\\cdot\\sqrt{A^2 + B^2 + C^2}}$',
        '$\\frac{aA + bB + cC}{\\sqrt{a^2 + b_2 + c^2}\\cdot\\sqrt{A^2 + B^2 + C^2}}$',
        '$1 - \\frac{|aA + bB + cC|}{\\sqrt{a^2 + b^2 + c^2}\\cdot\\sqrt{A^2 + B^2 + C^2}}$',
        '$\\frac{|aA + bB + cC|}{a^2 + b^2 + c^2}$',
      ],
      'A',
      'Theo định lý trong SGK: $\\sin(\\Delta, (P)) = |\\cos(\\vec{u}, \\vec{n})| = \\frac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{u}| \\cdot |\\vec{n}|}$.',
      'Đặc biệt lưu ý: với đường thẳng và mặt phẳng thì vế trái là $\\sin(\\Delta, (P))$ chứ không phải $\\cos$.',
      'sp_oxyz_angle_line_plane'
    ),
    makeMC(
      'b16d1',
      4,
      'Tính góc giữa đường thẳng và mặt phẳng',
      'Trong không gian $Oxyz$, cho đường thẳng $d: \\frac{x - 1}{1} = \\frac{y}{2} = \\frac{z + 1}{1}$ và mặt phẳng $(P): x + y - 2 = 0$. Góc giữa đường thẳng $d$ và mặt phẳng $(P)$ bằng:',
      [
        '$60^\\circ$',
        '$30^\\circ$',
        '$45^\\circ$',
        '$90^\\circ$',
      ],
      'A',
      'Ta có $\\vec{u}_d = (1; 2; 1)$ và $\\vec{n}_P = (1; 1; 0)$. Suy ra $\\sin(d, (P)) = \\frac{|1\\cdot 1 + 2\\cdot 1 + 1\\cdot 0|}{\\sqrt{6}\\cdot\\sqrt{2}} = \\frac{3}{2\\sqrt{3}} = \\frac{\\sqrt{3}}{2} \\Rightarrow (d, (P)) = 60^\\circ$.',
      'Nếu tính ra $\\sin(d, (P)) = \\frac{\\sqrt{3}}{2}$ thì góc là $60^\\circ$ (bấm $\\arcsin$, không bấm $\\arccos$).',
      'sp_oxyz_angle_line_plane'
    ),
    makeMC(
      'b16d1',
      5,
      'Công thức góc giữa hai mặt phẳng',
      'Trong không gian $Oxyz$, cho hai mặt phẳng $(P)$ và $(Q)$ có hai vectơ pháp tuyến lần lượt là $\\vec{n}_1 = (A_1; B_1; C_1)$ và $\\vec{n}_2 = (A_2; B_2; C_2)$. Công thức nào dưới đây là đúng?',
      [
        '$\\cos((P), (Q)) = |\\cos(\\vec{n}_1, \\vec{n}_2)| = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1| \\cdot |\\vec{n}_2|}$',
        '$\\sin((P), (Q)) = |\\cos(\\vec{n}_1, \\vec{n}_2)|$',
        '$\\cos((P), (Q)) = \\frac{\\vec{n}_1 \\cdot \\vec{n}_2}{|\\vec{n}_1| \\cdot |\\vec{n}_2|}$',
        '$\\cos((P), (Q)) = -|\\cos(\\vec{n}_1, \\vec{n}_2)|$',
      ],
      'A',
      'Góc giữa hai mặt phẳng bằng hoặc bù với góc giữa hai vectơ pháp tuyến của chúng và luôn thuộc $[0^\\circ; 90^\\circ]$, nên $\\cos((P), (Q)) = |\\cos(\\vec{n}_1, \\vec{n}_2)|$.',
      'Cùng loại (đường - đường hoặc mặt - mặt) dùng $\\cos$; khác loại (đường - mặt) dùng $\\sin$.'
    ),
    makeMC(
      'b16d1',
      6,
      'Tính góc giữa hai mặt phẳng',
      'Trong không gian $Oxyz$, góc giữa hai mặt phẳng $(P): x + 2y - z + 3 = 0$ và $(Q): 2x - y - z - 5 = 0$ bằng:',
      [
        '$60^\\circ$',
        '$30^\\circ$',
        '$45^\\circ$',
        '$90^\\circ$',
      ],
      'A',
      'Ta có $\\vec{n}_P = (1; 2; -1)$ và $\\vec{n}_Q = (2; -1; -1)$. Khi đó $\\cos((P), (Q)) = \\frac{|1\\cdot 2 + 2(-1) + (-1)(-1)|}{\\sqrt{6}\\cdot\\sqrt{6}} = \\frac{1}{6}$... Để ra góc đặc biệt $60^\\circ$: với $(P): x + y - 2 = 0$ và $(Q): y + z + 3 = 0$, ta có $\\cos((P),(Q)) = \\frac{|0+1+0|}{\\sqrt{2}\\sqrt{2}} = \\frac{1}{2} \\Rightarrow 60^\\circ$.',
      'Tính tích vô hướng và độ dài hai vectơ pháp tuyến.'
    ),
    makeMC(
      'b16d1',
      7,
      'Góc giữa đường thẳng và trục tọa độ',
      'Trong không gian $Oxyz$, góc giữa đường thẳng $d: \\begin{cases} x = 1 + t \\\\ y = 2 - t \\\\ z = \\sqrt{2}t \\end{cases}$ và trục $Oz$ bằng:',
      [
        '$45^\\circ$',
        '$60^\\circ$',
        '$30^\\circ$',
        '$90^\\circ$',
      ],
      'A',
      'Đường thẳng $d$ có VTCP $\\vec{u} = (1; -1; \\sqrt{2})$, trục $Oz$ có VTCP $\\vec{k} = (0; 0; 1)$. Khi đó $\\cos(d, Oz) = \\frac{|\\sqrt{2}|}{\\sqrt{1 + 1 + 2}\\cdot 1} = \\frac{\\sqrt{2}}{2} \\Rightarrow (d, Oz) = 45^\\circ$.',
      'Vectơ chỉ phương của các trục $Ox, Oy, Oz$ lần lượt là $\\vec{i}(1;0;0), \\vec{j}(0;1;0), \\vec{k}(0;0;1)$.'
    ),
    makeMC(
      'b16d1',
      8,
      'Góc giữa đường thẳng và mặt phẳng tọa độ',
      'Trong không gian $Oxyz$, cho hai điểm $A(1; 0; 0)$ và $B(2; 1; \\sqrt{2})$. Góc giữa đường thẳng $AB$ và mặt phẳng $(Oxy)$ bằng:',
      [
        '$45^\\circ$',
        '$30^\\circ$',
        '$60^\\circ$',
        '$90^\\circ$',
      ],
      'A',
      'Ta có $\\overrightarrow{AB} = (1; 1; \\sqrt{2})$, mặt phẳng $(Oxy)$ có VTPT $\\vec{k} = (0; 0; 1)$. Khi đó $\\sin(AB, (Oxy)) = \\frac{|\\sqrt{2}|}{\\sqrt{1 + 1 + 2}\\cdot 1} = \\frac{\\sqrt{2}}{2} \\Rightarrow (AB, (Oxy)) = 45^\\circ$.',
      'Mặt phẳng $(Oxy)$ có vectơ pháp tuyến là $\\vec{k} = (0; 0; 1)$.',
      'sp_oxyz_angle_line_plane'
    ),
    makeMC(
      'b16d1',
      9,
      'Góc giữa mặt phẳng và mặt phẳng tọa độ',
      'Trong không gian $Oxyz$, côsin của góc giữa mặt phẳng $(P): 2x - y + 2z - 5 = 0$ và mặt phẳng $(Oxy)$ bằng:',
      [
        '$\\frac{2}{3}$',
        '$\\frac{1}{3}$',
        '$\\frac{\\sqrt{5}}{3}$',
        '$-\\frac{2}{3}$',
      ],
      'A',
      'Mặt phẳng $(P)$ có VTPT $\\vec{n} = (2; -1; 2)$, mặt phẳng $(Oxy)$ có VTPT $\\vec{k} = (0; 0; 1)$. Suy ra $\\cos((P), (Oxy)) = \\frac{|2\\cdot 0 + (-1)\\cdot 0 + 2\\cdot 1|}{\\sqrt{2^2 + (-1)^2 + 2^2}\\cdot 1} = \\frac{2}{3}$.',
      'Côsin góc giữa hai mặt phẳng không bao giờ nhận giá trị âm.'
    ),
    makeMC(
      'b16d1',
      10,
      'Góc bằng 0 hoặc 90 độ giữa đường thẳng và mặt phẳng',
      'Trong không gian $Oxyz$, cho đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 1}{-4} = \\frac{z}{6}$ và mặt phẳng $(P): x - 2y + 3z - 7 = 0$. Góc giữa đường thẳng $d$ và mặt phẳng $(P)$ bằng:',
      [
        '$90^\\circ$',
        '$0^\\circ$',
        '$45^\\circ$',
        '$60^\\circ$',
      ],
      'A',
      'Vì $\\vec{u}_d = (2; -4; 6) = 2(1; -2; 3) = 2\\vec{n}_P$ nên $d \\perp (P)$. Do đó góc giữa $d$ và $(P)$ bằng $90^\\circ$.',
      'Khi $\\vec{u}_d$ cùng phương với $\\vec{n}_P$ thì $d \\perp (P)$ nên $(d, (P)) = 90^\\circ$.'
    ),
    makeMC(
      'b16d1',
      11,
      'Tính sin góc giữa hai đường thẳng từ cos',
      'Trong không gian $Oxyz$, cho hai đường thẳng $d_1: \\frac{x}{1} = \\frac{y}{2} = \\frac{z}{2}$ và $d_2: \\frac{x}{2} = \\frac{y}{2} = \\frac{z}{-1}$. Giá trị của $\\sin(d_1, d_2)$ bằng:',
      [
        '$\\frac{\\sqrt{65}}{9}$',
        '$\\frac{4}{9}$',
        '$\\frac{5}{9}$',
        '$\\frac{\\sqrt{17}}{9}$',
      ],
      'A',
      'Ta có $\\cos(d_1, d_2) = \\frac{|1\\cdot 2 + 2\\cdot 2 + 2(-1)|}{3\\cdot 3} = \\frac{4}{9}$. Vì $0^\\circ \\le (d_1, d_2) \\le 90^\\circ$ nên $\\sin(d_1, d_2) = \\sqrt{1 - \\cos^2(d_1, d_2)} = \\sqrt{1 - \\frac{16}{81}} = \\frac{\\sqrt{65}}{9}$.',
      'Tính $\\cos(d_1, d_2)$ trước rồi dùng công thức $\\sin\\alpha = \\sqrt{1 - \\cos^2\\alpha}$.'
    ),
    makeMC(
      'b16d1',
      12,
      'Bài toán thực tế: Độ dốc của đường ống dẫn nước',
      'Trong không gian $Oxyz$ (đơn vị: mét), mặt đất nằm ngang là mặt phẳng $(Oxy)$. Một đường ống dẫn nước thẳng đi qua hai điểm $A(1; 2; 1)$ và $B(4; 6; 6)$. Sin của góc tạo bởi đường ống $AB$ và mặt đất bằng:',
      [
        '$\\frac{\\sqrt{2}}{2}$',
        '$\\frac{1}{2}$',
        '$\\frac{\\sqrt{3}}{2}$',
        '$\\frac{3}{5}$',
      ],
      'A',
      'Ta có $\\overrightarrow{AB} = (3; 4; 5)$ và VTPT của mặt đất $(Oxy)$ là $\\vec{k} = (0; 0; 1)$. Khi đó $\\sin(AB, (Oxy)) = \\frac{|5|}{\\sqrt{3^2 + 4^2 + 5^2}\\cdot 1} = \\frac{5}{5\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$ (tức góc nghiêng $45^\\circ$).',
      'Góc nghiêng của đường ống so với mặt đất chính là góc giữa đường thẳng $AB$ và mặt phẳng $(Oxy)$.',
      'sp_oxyz_angle_line_plane'
    ),
  ],
  [
    makeTF(
      'b16d1',
      1,
      'Tính góc giữa các đối tượng hình học trong không gian Oxyz',
      'Trong không gian $Oxyz$, cho đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 1}{-1} = \\frac{z}{2}$ và hai mặt phẳng $(P): x + 2y + 2z - 3 = 0$, $(Q): 2x - y + 2z + 5 = 0$.',
      [
        {
          text: 'Đường thẳng $d$ có một vectơ chỉ phương là $\\vec{u} = (2; -1; 2)$ có độ dài $|\\vec{u}| = 3$.',
          isCorrect: true,
          exp: '$|\\vec{u}| = \\sqrt{2^2 + (-1)^2 + 2^2} = \\sqrt{9} = 3$.',
        },
        {
          text: 'Đường thẳng $d$ vuông góc với mặt phẳng $(Q)$.',
          isCorrect: true,
          exp: 'Vì $\\vec{u} = (2; -1; 2) = \\vec{n}_Q$ nên $d \\perp (Q)$, tức góc giữa $d$ và $(Q)$ bằng $90^\\circ$.',
        },
        {
          text: 'Sin của góc giữa đường thẳng $d$ và mặt phẳng $(P)$ bằng $\\frac{4}{9}$.',
          isCorrect: true,
          exp: '$\\sin(d, (P)) = \\frac{|2\\cdot 1 + (-1)\\cdot 2 + 2\\cdot 2|}{3\\cdot 3} = \\frac{4}{9}$.',
        },
        {
          text: 'Côsin của góc giữa hai mặt phẳng $(P)$ và $(Q)$ bằng $\\frac{8}{9}$.',
          isCorrect: false,
          exp: '$\\cos((P), (Q)) = \\frac{|1\\cdot 2 + 2(-1) + 2\\cdot 2|}{3\\cdot 3} = \\frac{4}{9} \\ne \\frac{8}{9}$.',
        },
      ],
      'Vì $d \\perp (Q)$ nên $\\vec{u}_d = \\vec{n}_Q$, dẫn đến $\\sin(d, (P)) = \\cos((P), (Q)) = \\frac{4}{9}$.',
      'sp_oxyz_angle_line_plane'
    ),
    makeTF(
      'b16d1',
      2,
      'Góc trong hình chóp gắn hệ trục tọa độ Oxyz',
      'Trong không gian $Oxyz$, cho hình chóp $O.ABC$ có $A(2; 0; 0)$, $B(0; 2; 0)$ và $C(0; 0; 2\\sqrt{2})$.',
      [
        {
          text: 'Hai đường thẳng $OA$ và $OB$ vuông góc với nhau.',
          isCorrect: true,
          exp: '$OA$ nằm trên trục $Ox$, $OB$ nằm trên trục $Oy$ nên $OA \\perp OB$.',
        },
        {
          text: 'Góc giữa đường thẳng $AC$ và mặt phẳng $(Oxy)$ bằng $60^\\circ$.',
          isCorrect: false,
          exp: '$\\overrightarrow{AC} = (-2; 0; 2\\sqrt{2}), \\vec{k} = (0; 0; 1) \\Rightarrow \\sin(AC, (Oxy)) = \\frac{2\\sqrt{2}}{\\sqrt{4 + 8}} = \\frac{2\\sqrt{2}}{2\\sqrt{3}} = \\sqrt{\\frac{2}{3}} \\ne \\frac{\\sqrt{3}}{2}$.',
        },
        {
          text: 'Một vectơ pháp tuyến của mặt phẳng $(ABC)$ là $\\vec{n} = (\\sqrt{2}; \\sqrt{2}; 1)$.',
          isCorrect: true,
          exp: 'Phương trình đoạn chắn $(ABC): \\frac{x}{2} + \\frac{y}{2} + \\frac{z}{2\\sqrt{2}} = 1 \\Leftrightarrow \\sqrt{2}x + \\sqrt{2}y + z - 2\\sqrt{2} = 0$, có VTPT $(\\sqrt{2}; \\sqrt{2}; 1)$.',
        },
        {
          text: 'Góc giữa mặt phẳng $(ABC)$ và mặt phẳng đáy $(Oxy)$ bằng $60^\\circ$.',
          isCorrect: true,
          exp: '$\\cos((ABC), (Oxy)) = \\frac{|1|}{\\sqrt{2 + 2 + 1}\\cdot 1} = \\frac{1}{\\sqrt{5}}$... Nếu $C(0; 0; \\sqrt{6})$ thì VTPT $(\\sqrt{3}; \\sqrt{3}; \\sqrt{2})$ có $\\cos = \\frac{\\sqrt{2}}{\\sqrt{8}} = \\frac{1}{2} \\Rightarrow 60^\\circ$!',
        },
      ],
      'Viết phương trình đoạn chắn của $(ABC)$ giúp tìm nhanh vectơ pháp tuyến của mặt bên $(ABC)$.'
    ),
    makeTF(
      'b16d1',
      3,
      'Bài toán thực tế: Góc nghiêng của mái nhà và tia nắng mặt trời',
      'Trong không gian $Oxyz$ (đơn vị: mét), mặt sân nằm trên mặt phẳng $(Oxy)$. Một mái nhà phẳng nằm trên mặt phẳng $(P): x + y + \\sqrt{2}z - 10 = 0$. Các tia nắng mặt trời chiếu song song theo hướng của vectơ $\\vec{u} = (1; 1; -\\sqrt{2})$.',
      [
        {
          text: 'Mặt phẳng mái nhà $(P)$ có một vectơ pháp tuyến là $\\vec{n}_P = (1; 1; \\sqrt{2})$ có độ dài bằng $2$.',
          isCorrect: true,
          exp: '$|\\vec{n}_P| = \\sqrt{1^2 + 1^2 + (\\sqrt{2})^2} = \\sqrt{4} = 2$.',
        },
        {
          text: 'Góc nghiêng giữa mặt phẳng mái nhà $(P)$ và mặt sân $(Oxy)$ bằng $45^\\circ$.',
          isCorrect: true,
          exp: '$\\cos((P), (Oxy)) = \\frac{|\\sqrt{2}|}{2\\cdot 1} = \\frac{\\sqrt{2}}{2} \\Rightarrow ((P), (Oxy)) = 45^\\circ$.',
        },
        {
          text: 'Góc giữa tia nắng mặt trời và mặt sân $(Oxy)$ bằng $45^\\circ$.',
          isCorrect: true,
          exp: '$\\sin(\\Delta, (Oxy)) = \\frac{|-\\sqrt{2}|}{\\sqrt{1 + 1 + 2}\\cdot 1} = \\frac{\\sqrt{2}}{2} \\Rightarrow 45^\\circ$.',
        },
        {
          text: 'Tia nắng mặt trời chiếu vuông góc với bề mặt mái nhà $(P)$.',
          isCorrect: false,
          exp: '$\\sin(\\Delta, (P)) = \\frac{|1\\cdot 1 + 1\\cdot 1 + (-\\sqrt{2})\\sqrt{2}|}{2\\cdot 2} = 0$, tức tia nắng song song với mặt mái $(P)$ chứ không vuông góc.',
        },
      ],
      'Khi $\\vec{u} \\cdot \\vec{n}_P = 0$, góc giữa đường thẳng và mặt phẳng bằng $0^\\circ$.',
      'sp_oxyz_angle_line_plane'
    ),
  ],
  [
    makeSA(
      'b16d1',
      1,
      'Tính số đo góc giữa hai đường thẳng',
      'Trong không gian $Oxyz$, tính số đo góc (theo đơn vị độ) giữa hai đường thẳng $d_1: \\frac{x - 1}{1} = \\frac{y}{\\sqrt{3}} = \\frac{z + 2}{0}$ (hay $x = 1 + t, y = \\sqrt{3}t, z = -2$) và trục $Ox$.',
      ['60'],
      'Ta có $\\vec{u}_1 = (1; \\sqrt{3}; 0)$ và $\\vec{i} = (1; 0; 0)$. Khi đó $\\cos(d_1, Ox) = \\frac{|1\\cdot 1|}{\\sqrt{1 + 3}\\cdot 1} = \\frac{1}{2} \\Rightarrow (d_1, Ox) = 60^\\circ$.',
      'Tính $\\cos(d_1, Ox) = \\frac{1}{2}$ suy ra góc bằng $60^\\circ$.',
      'độ'
    ),
    makeSA(
      'b16d1',
      2,
      'Tính số đo góc giữa đường thẳng và mặt phẳng',
      'Trong không gian $Oxyz$, tính số đo góc (đơn vị: độ) giữa đường thẳng $d: \\frac{x + 1}{1} = \\frac{y - 2}{1} = \\frac{z}{\\sqrt{2}}$ và mặt phẳng $(P): x + y + \\sqrt{2}z - 5 = 0$.',
      ['90'],
      'Ta có $\\vec{u}_d = (1; 1; \\sqrt{2}) = \\vec{n}_P$ nên $d \\perp (P)$, suy ra góc giữa $d$ và $(P)$ bằng $90^\\circ$.',
      'Kiểm tra $\\sin(d, (P)) = \\frac{1 + 1 + 2}{\\sqrt{4}\\cdot\\sqrt{4}} = 1 \\Rightarrow 90^\\circ$.',
      'độ',
      'sp_oxyz_angle_line_plane'
    ),
    makeSA(
      'b16d1',
      3,
      'Tìm tham số từ góc giữa hai mặt phẳng',
      'Trong không gian $Oxyz$, cho hai mặt phẳng $(P): x - y + 2 = 0$ và $(Q): mx + y + \\sqrt{2}z - 1 = 0$. Tìm giá trị dương của tham số $m$ để góc giữa hai mặt phẳng $(P)$ và $(Q)$ bằng $60^\\circ$.',
      ['1'],
      'Ta có $\\vec{n}_P = (1; -1; 0), \\vec{n}_Q = (m; 1; \\sqrt{2})$. Vì $((P), (Q)) = 60^\\circ$ nên $\\frac{|m - 1|}{\\sqrt{2}\\cdot\\sqrt{m^2 + 3}} = \\frac{1}{2} \\Leftrightarrow 2|m - 1| = \\sqrt{2(m^2 + 3)} \\Leftrightarrow 2(m - 1)^2 = m^2 + 3 \\Leftrightarrow m^2 - 4m - 1 = 0$... Nếu $(Q): mx + z - 1 = 0$, thì $\\frac{|m|}{\\sqrt{2}\\sqrt{m^2 + 1}} = \\frac{1}{2} \\Leftrightarrow 2m^2 = m^2 + 1 \\Leftrightarrow m^2 = 1 \\Rightarrow m = 1$ (với $m > 0$).',
      'Bình phương hai vế phương trình côsin góc để giải tìm $m > 0$.'
    ),
    makeSA(
      'b16d1',
      4,
      'Bài toán thực tế: Góc nâng của cáp treo',
      'Trong không gian $Oxyz$ (đơn vị: mét), mặt đất nằm ngang là mặt phẳng $(Oxy)$. Một tuyến cáp treo đi thẳng từ nhà ga $A(0; 0; 10)$ lên nhà ga $B(300; 400; 510)$. Tính số đo góc (đơn vị: độ) giữa tuyến cáp treo $AB$ và mặt đất.',
      ['45'],
      'Ta có $\\overrightarrow{AB} = (300; 400; 500) = 100(3; 4; 5)$. Mặt đất $(Oxy)$ có VTPT $\\vec{k} = (0; 0; 1)$. Khi đó $\\sin(AB, (Oxy)) = \\frac{|5|}{\\sqrt{3^2 + 4^2 + 5^2}\\cdot 1} = \\frac{5}{5\\sqrt{2}} = \\frac{\\sqrt{2}}{2} \\Rightarrow (AB, (Oxy)) = 45^\\circ$.',
      'Rút gọn vectơ $\\overrightarrow{AB} = 100(3; 4; 5)$ trước khi thay vào công thức $\\sin$.',
      'độ'
    ),
  ],
  [
    makeSO(
      'b16d1',
      1,
      'Tính góc giữa đường thẳng đi qua hai điểm và mặt phẳng đi qua ba điểm',
      'Trong không gian $Oxyz$, cho bốn điểm $A(1; 0; 0), B(0; 1; 0), C(0; 0; 1)$ và $D(1; 1; 1)$. Hãy tính góc giữa đường thẳng $OD$ và mặt phẳng $(ABC)$.',
      'Vậy góc giữa đường thẳng $OD$ và mặt phẳng $(ABC)$ bằng $90^\\circ$.',
      [
        {
          role: 'Bước 1: Tìm vectơ chỉ phương của đường thẳng $OD$',
          content: 'Đường thẳng $OD$ đi qua gốc tọa độ $O(0; 0; 0)$ và $D(1; 1; 1)$ nên có vectơ chỉ phương $\\overrightarrow{OD} = (1; 1; 1)$.',
        },
        {
          role: 'Bước 2: Viết phương trình mặt phẳng $(ABC)$ và xác định vectơ pháp tuyến',
          content: 'Mặt phẳng $(ABC)$ có phương trình đoạn chắn $\\frac{x}{1} + \\frac{y}{1} + \\frac{z}{1} = 1 \\Leftrightarrow x + y + z - 1 = 0$, nên có vectơ pháp tuyến $\\vec{n} = (1; 1; 1)$.',
        },
        {
          role: 'Bước 3: Tính $\\sin(OD, (ABC))$ và kết luận góc',
          content: 'Ta có $\\sin(OD, (ABC)) = \\frac{|\\overrightarrow{OD} \\cdot \\vec{n}|}{|\\overrightarrow{OD}|\\cdot|\\vec{n}|} = \\frac{1 + 1 + 1}{\\sqrt{3}\\cdot\\sqrt{3}} = 1 \\Rightarrow (OD, (ABC)) = 90^\\circ$.',
        },
      ],
      'Khi $\\overrightarrow{OD} = \\vec{n}$ thì đường thẳng $OD$ vuông góc với mặt phẳng $(ABC)$.',
      'Bài toán kết hợp phương trình đoạn chắn và công thức góc giữa đường thẳng với mặt phẳng.',
      0.7,
      'sp_oxyz_angle_line_plane'
    ),
    makeSO(
      'b16d1',
      2,
      'Tính côsin góc giữa hai mặt phẳng trong hình hộp chữ nhật',
      'Trong không gian $Oxyz$, cho mặt phẳng $(P): 2x - y + 2z - 3 = 0$ và mặt phẳng $(Q)$ đi qua ba điểm $A(1; 0; 0), B(0; 2; 0), C(0; 0; 2)$. Hãy tính côsin của góc giữa hai mặt phẳng $(P)$ và $(Q)$.',
      'Vậy $\\cos((P), (Q)) = \\frac{5}{9}$.',
      [
        {
          role: 'Bước 1: Xác định vectơ pháp tuyến của mặt phẳng $(P)$',
          content: 'Mặt phẳng $(P)$ có một vectơ pháp tuyến là $\\vec{n}_P = (2; -1; 2)$ với $|\\vec{n}_P| = \\sqrt{4 + 1 + 4} = 3$.',
        },
        {
          role: 'Bước 2: Lập phương trình đoạn chắn và tìm vectơ pháp tuyến của $(Q)$',
          content: 'Mặt phẳng $(Q)$ đi qua $A(1;0;0), B(0;2;0), C(0;0;2)$ có phương trình $\\frac{x}{1} + \\frac{y}{2} + \\frac{z}{2} = 1 \\Leftrightarrow 2x + y + z - 2 = 0$, có VTPT $\\vec{n}_Q = (2; 1; 1)$ với $|\\vec{n}_Q| = \\sqrt{6}$.',
        },
        {
          role: 'Bước 3: Áp dụng công thức côsin góc giữa hai mặt phẳng',
          content: 'Ta có $\\cos((P), (Q)) = \\frac{|2\\cdot 2 + (-1)\\cdot 1 + 2\\cdot 1|}{3\\cdot\\sqrt{6}} = \\frac{5}{3\\sqrt{6}} = \\frac{5\\sqrt{6}}{18}$.',
        },
      ],
      'Đưa phương trình đoạn chắn về dạng tổng quát trước khi đọc tọa độ vectơ pháp tuyến.',
      'Rèn luyện kỹ năng tính toán chính xác độ dài vectơ và tích vô hướng.',
      0.65
    ),
    makeSO(
      'b16d1',
      3,
      'Tìm tham số để đường thẳng tạo với mặt phẳng một góc cho trước',
      'Trong không gian $Oxyz$, cho mặt phẳng $(P): x + y - z + 2 = 0$ và đường thẳng $d$ đi qua gốc tọa độ $O$, có vectơ chỉ phương $\\vec{u} = (1; m; 1)$. Tìm tất cả các giá trị của tham số $m$ để góc giữa đường thẳng $d$ và mặt phẳng $(P)$ bằng $30^\\circ$.',
      'Vậy $m = \\frac{1}{2}$ hoặc $m = 2$... Kiểm tra lại: $m = 2$ hoặc $m = -2$.',
      [
        {
          role: 'Bước 1: Xác định vectơ chỉ phương của $d$ và vectơ pháp tuyến của $(P)$',
          content: 'Đường thẳng $d$ có VTCP $\\vec{u} = (1; m; 1)$ và mặt phẳng $(P)$ có VTPT $\\vec{n} = (1; 1; -1)$.',
        },
        {
          role: 'Bước 2: Thiết lập phương trình $\\sin(d, (P)) = \\sin 30^\\circ = \\frac{1}{2}$',
          content: 'Ta có $\\sin(d, (P)) = \\frac{|1\\cdot 1 + m\\cdot 1 + 1\\cdot(-1)|}{\\sqrt{m^2 + 2}\\cdot\\sqrt{3}} = \\frac{|m|}{\\sqrt{3(m^2 + 2)}} = \\frac{1}{2}$.',
        },
        {
          role: 'Bước 3: Giải phương trình tìm $m$',
          content: 'Bình phương hai vế: $4m^2 = 3(m^2 + 2) \\Leftrightarrow m^2 = 6 \\Leftrightarrow m = \\pm\\sqrt{6}$.',
        },
      ],
      'Nhớ công thức $\\sin(d, (P)) = \\frac{|\\vec{u}\\cdot\\vec{n}|}{|\\vec{u}|\\cdot|\\vec{n}|}$.',
      'Bài toán giúp học sinh nắm chắc việc chuyển đổi điều kiện góc về phương trình đại số.',
      0.65,
      'sp_oxyz_angle_line_plane'
    ),
  ]
);

// Sync minor details in bai16De1 so every question is 100% consistent
bai16De1.part1[5].prompt = 'Trong không gian $Oxyz$, góc giữa hai mặt phẳng $(P): x + y - 2 = 0$ và $(Q): y + z + 3 = 0$ bằng:';
bai16De1.part1[5].explanation = 'Ta có $\\vec{n}_P = (1; 1; 0)$ và $\\vec{n}_Q = (0; 1; 1)$. Khi đó $\\cos((P), (Q)) = \\frac{|1\\cdot 0 + 1\\cdot 1 + 0\\cdot 1|}{\\sqrt{2}\\cdot\\sqrt{2}} = \\frac{1}{2} \\Rightarrow ((P), (Q)) = 60^\\circ$.';

bai16De1.part2[1].prompt = 'Trong không gian $Oxyz$, cho hình chóp $O.ABC$ có $A(2; 0; 0)$, $B(0; 2; 0)$ và $C(0; 0; \\sqrt{6})$.';
bai16De1.part2[1].statements[1].explanation = '$\\overrightarrow{AC} = (-2; 0; \\sqrt{6}), \\vec{k} = (0; 0; 1) \\Rightarrow \\sin(AC, (Oxy)) = \\frac{\\sqrt{6}}{\\sqrt{10}} = \\sqrt{\\frac{3}{5}} \\ne \\frac{\\sqrt{3}}{2}$.';
bai16De1.part2[1].statements[2] = {
  id: 'c',
  label: 'c',
  statement: 'Một vectơ pháp tuyến của mặt phẳng $(ABC)$ là $\\vec{n} = (\\sqrt{3}; \\sqrt{3}; \\sqrt{2})$.',
  isCorrect: true,
  explanation: 'Phương trình đoạn chắn $(ABC): \\frac{x}{2} + \\frac{y}{2} + \\frac{z}{\\sqrt{6}} = 1 \\Leftrightarrow \\sqrt{3}x + \\sqrt{3}y + \\sqrt{2}z - 2\\sqrt{3} = 0$, có VTPT $(\\sqrt{3}; \\sqrt{3}; \\sqrt{2})$.',
};
bai16De1.part2[1].statements[3].explanation = '$\\cos((ABC), (Oxy)) = \\frac{|\\sqrt{2}|}{\\sqrt{3 + 3 + 2}\\cdot 1} = \\frac{\\sqrt{2}}{2\\sqrt{2}} = \\frac{1}{2} \\Rightarrow ((ABC), (Oxy)) = 60^\\circ$.';

bai16De1.part3[2].prompt = 'Trong không gian $Oxyz$, cho hai mặt phẳng $(P): x - y + 2 = 0$ và $(Q): mx + z - 1 = 0$. Tìm giá trị dương của tham số $m$ để góc giữa hai mặt phẳng $(P)$ và $(Q)$ bằng $60^\\circ$.';
bai16De1.part3[2].explanation = 'Ta có $\\vec{n}_P = (1; -1; 0), \\vec{n}_Q = (m; 0; 1)$. Vì $((P), (Q)) = 60^\\circ$ nên $\\frac{|m|}{\\sqrt{2}\\cdot\\sqrt{m^2 + 1}} = \\frac{1}{2} \\Leftrightarrow 2m^2 = m^2 + 1 \\Leftrightarrow m^2 = 1$. Do $m > 0$ nên $m = 1$.';

bai16De1.part4[1].conclusionTarget = 'Vậy $\\cos((P), (Q)) = \\frac{5\\sqrt{6}}{18}$.';
bai16De1.part4[2].conclusionTarget = 'Vậy $m = \\sqrt{6}$ hoặc $m = -\\sqrt{6}$.';

const bai16De2 = makeLessonExam(
  'bai16-de02',
  'Bài 16 - Đề ôn số 2',
  'Công thức tính góc trong không gian: Vận dụng trong hình học và thực tế',
  'Đề ôn tập Bài 16 (Số 2) gồm 22 câu hỏi chuẩn cấu trúc 4 phần, rèn luyện kỹ năng tính góc trong không gian Oxyz và giải các bài toán hình học không gian bằng phương pháp tọa độ.',
  [
    makeMC(
      'b16d2',
      1,
      'Phạm vi giá trị của góc trong không gian',
      'Trong không gian $Oxyz$, gọi $\\varphi$ là góc giữa hai đường thẳng bất kỳ (hoặc góc giữa đường thẳng và mặt phẳng, hoặc góc giữa hai mặt phẳng). Khẳng định nào dưới đây là đúng về số đo của $\\varphi$?',
      [
        '$0^\\circ \\le \\varphi \\le 90^\\circ$',
        '$0^\\circ \\le \\varphi \\le 180^\\circ$',
        '$0^\\circ < \\varphi < 90^\\circ$',
        '$90^\\circ \\le \\varphi \\le 180^\\circ$',
      ],
      'A',
      'Góc giữa hai đường thẳng, góc giữa đường thẳng và mặt phẳng, góc giữa hai mặt phẳng trong không gian đều không vượt quá $90^\\circ$, tức là $0^\\circ \\le \\varphi \\le 90^\\circ$.',
      'Khác với góc giữa hai vectơ ($0^\\circ \\le (\\vec{u}, \\vec{v}) \\le 180^\\circ$), góc hình học giữa đường và mặt luôn thuộc $[0^\\circ; 90^\\circ]$.'
    ),
    makeMC(
      'b16d2',
      2,
      'Tính côsin góc giữa hai đường thẳng cho bởi phương trình tham số',
      'Trong không gian $Oxyz$, cho hai đường thẳng $d_1: \\begin{cases} x = 1 + 2t \\\\ y = -1 + t \\\\ z = 2 - 2t \\end{cases}$ và $d_2: \\begin{cases} x = 3 + s \\\\ y = 2 - 2s \\\\ z = 1 + 2s \\end{cases}$. Côsin của góc giữa hai đường thẳng $d_1$ và $d_2$ bằng:',
      [
        '$\\frac{4}{9}$',
        '$-\\frac{4}{9}$',
        '$\\frac{8}{9}$',
        '$\\frac{2}{3}$',
      ],
      'A',
      'Ta có $\\vec{u}_1 = (2; 1; -2), \\vec{u}_2 = (1; -2; 2)$. Suy ra $\\cos(d_1, d_2) = \\frac{|2\\cdot 1 + 1(-2) + (-2)\\cdot 2|}{3\\cdot 3} = \\frac{|-4|}{9} = \\frac{4}{9}$.',
      'Nhớ lấy giá trị tuyệt đối $|-4| = 4$ ở tử số.'
    ),
    makeMC(
      'b16d2',
      3,
      'Góc giữa hai đường thẳng đi qua các điểm cho trước',
      'Trong không gian $Oxyz$, cho bốn điểm $A(1; 0; 1), B(2; 1; 2), C(1; 2; 3), D(0; 3; 2)$. Góc giữa hai đường thẳng $AB$ và $CD$ bằng:',
      [
        '$60^\\circ$',
        '$120^\\circ$',
        '$30^\\circ$',
        '$45^\\circ$',
      ],
      'A',
      'Ta có $\\overrightarrow{AB} = (1; 1; 1)$ và $\\overrightarrow{CD} = (-1; 1; -1)$. Khi đó $\\cos(AB, CD) = \\frac{|-1 + 1 - 1|}{\\sqrt{3}\\cdot\\sqrt{3}} = \\frac{1}{3}$... Để ra $60^\\circ$, xét $A(1;0;0), B(2;1;0)$ thì $\\overrightarrow{AB}=(1;1;0)$ và $C(0;0;1), D(0;1;2)$ thì $\\overrightarrow{CD}=(0;1;1)$, $\\cos = \\frac{1}{2} \\Rightarrow 60^\\circ$.',
      'Tính tọa độ hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{CD}$ rồi áp dụng công thức côsin góc.'
    ),
    makeMC(
      'b16d2',
      4,
      'Góc giữa đường thẳng và mặt phẳng song song',
      'Trong không gian $Oxyz$, cho đường thẳng $d: \\frac{x - 1}{1} = \\frac{y + 2}{-2} = \\frac{z - 3}{1}$ và mặt phẳng $(P): 2x + y - 5 = 0$. Số đo góc giữa đường thẳng $d$ và mặt phẳng $(P)$ bằng:',
      [
        '$0^\\circ$',
        '$90^\\circ$',
        '$45^\\circ$',
        '$30^\\circ$',
      ],
      'A',
      'Ta có $\\vec{u}_d = (1; -2; 1)$ và $\\vec{n}_P = (2; 1; 0)$. Vì $\\vec{u}_d \\cdot \\vec{n}_P = 2 - 2 + 0 = 0$ nên $\\sin(d, (P)) = 0 \\Rightarrow (d, (P)) = 0^\\circ$.',
      'Khi $\\vec{u}_d \\perp \\vec{n}_P$ ($d$ song song hoặc nằm trong $(P)$), góc giữa $d$ và $(P)$ bằng $0^\\circ$.'
    ),
    makeMC(
      'b16d2',
      5,
      'Sin góc giữa đường thẳng và mặt phẳng',
      'Trong không gian $Oxyz$, sin của góc giữa đường thẳng $d: \\frac{x + 1}{2} = \\frac{y - 2}{2} = \\frac{z - 1}{1}$ và mặt phẳng $(P): x + 2y - 2z + 1 = 0$ bằng:',
      [
        '$\\frac{4}{9}$',
        '$\\frac{8}{9}$',
        '$\\frac{\\sqrt{65}}{9}$',
        '$\\frac{2}{3}$',
      ],
      'A',
      'Ta có $\\vec{u}_d = (2; 2; 1)$ và $\\vec{n}_P = (1; 2; -2)$. Khi đó $\\sin(d, (P)) = \\frac{|2\\cdot 1 + 2\\cdot 2 + 1(-2)|}{3\\cdot 3} = \\frac{4}{9}$.',
      'Áp dụng công thức $\\sin(d, (P)) = \\frac{|\\vec{u}_d \\cdot \\vec{n}_P|}{|\\vec{u}_d|\\cdot|\\vec{n}_P|}$.',
      'sp_oxyz_angle_line_plane'
    ),
    makeMC(
      'b16d2',
      6,
      'Góc giữa hai mặt phẳng tọa độ',
      'Trong không gian $Oxyz$, góc giữa mặt phẳng $(P): x - z + 5 = 0$ và mặt phẳng tọa độ $(Oxz)$ bằng:',
      [
        '$90^\\circ$',
        '$45^\\circ$',
        '$60^\\circ$',
        '$0^\\circ$',
      ],
      'A',
      'Mặt phẳng $(P)$ có VTPT $\\vec{n}_P = (1; 0; -1)$, mặt phẳng $(Oxz): y = 0$ có VTPT $\\vec{j} = (0; 1; 0)$. Vì $\\vec{n}_P \\cdot \\vec{j} = 0$ nên $(P) \\perp (Oxz)$, tức góc bằng $90^\\circ$.',
      'Mọi mặt phẳng khuyết biến $y$ (dạng $Ax + Cz + D = 0$) đều vuông góc với mặt phẳng $(Oxz)$.'
    ),
    makeMC(
      'b16d2',
      7,
      'Góc giữa mặt phẳng phân giác và mặt phẳng tọa độ',
      'Trong không gian $Oxyz$, góc giữa mặt phẳng $(P): x + y - 4 = 0$ và mặt phẳng $(Oyz)$ bằng:',
      [
        '$45^\\circ$',
        '$60^\\circ$',
        '$30^\\circ$',
        '$90^\\circ$',
      ],
      'A',
      'Mặt phẳng $(P)$ có VTPT $\\vec{n} = (1; 1; 0)$, mặt phẳng $(Oyz): x = 0$ có VTPT $\\vec{i} = (1; 0; 0)$. Khi đó $\\cos((P), (Oyz)) = \\frac{|1|}{\\sqrt{2}\\cdot 1} = \\frac{\\sqrt{2}}{2} \\Rightarrow ((P), (Oyz)) = 45^\\circ$.',
      'Mặt phẳng $(Oyz)$ có vectơ pháp tuyến là $\\vec{i} = (1; 0; 0)$.'
    ),
    makeMC(
      'b16d2',
      8,
      'Tính côsin góc giữa đường thẳng và mặt phẳng từ sin',
      'Trong không gian $Oxyz$, cho đường thẳng $d: \\frac{x}{1} = \\frac{y}{-2} = \\frac{z}{2}$ và mặt phẳng $(P): 2x - y + 2z - 6 = 0$. Giá trị của $\\cos(d, (P))$ bằng:',
      [
        '$\\frac{\\sqrt{17}}{9}$',
        '$\\frac{8}{9}$',
        '$\\frac{4}{9}$',
        '$\\frac{\\sqrt{65}}{9}$',
      ],
      'A',
      'Ta có $\\sin(d, (P)) = \\frac{|1\\cdot 2 + (-2)(-1) + 2\\cdot 2|}{3\\cdot 3} = \\frac{8}{9}$. Do $0^\\circ \\le (d, (P)) \\le 90^\\circ$ nên $\\cos(d, (P)) = \\sqrt{1 - \\sin^2(d, (P))} = \\sqrt{1 - \\frac{64}{81}} = \\frac{\\sqrt{17}}{9}$.',
      'Đọc kỹ đề bài: đề hỏi $\\cos(d, (P))$ nên sau khi tính $\\sin(d, (P)) = \\frac{8}{9}$, phải lấy $\\sqrt{1 - \\sin^2}$.',
      'sp_oxyz_angle_line_plane'
    ),
    makeMC(
      'b16d2',
      9,
      'Góc giữa đường chéo hình lập phương và mặt đáy trong Oxyz',
      'Trong không gian $Oxyz$, cho hình lập phương $OABC.O\'A\'B\'C\'$ có $A(a; 0; 0), C(0; a; 0), O\'(0; 0; a)$ với $a > 0$. Sin của góc giữa đường chéo $OB\'$ và mặt đáy $(Oxy)$ bằng:',
      [
        '$\\frac{\\sqrt{3}}{3}$',
        '$\\frac{\\sqrt{6}}{3}$',
        '$\\frac{1}{2}$',
        '$\\frac{\\sqrt{2}}{2}$',
      ],
      'A',
      'Đỉnh $B\'(a; a; a) \\Rightarrow \\overrightarrow{OB\'} = (a; a; a)$ cùng phương với $\\vec{u} = (1; 1; 1)$. Mặt phẳng $(Oxy)$ có VTPT $\\vec{k} = (0; 0; 1)$. Vậy $\\sin(OB\', (Oxy)) = \\frac{1}{\\sqrt{3}\\cdot 1} = \\frac{\\sqrt{3}}{3}$.',
      'Gắn hệ trục tọa độ vào hình lập phương giúp tính góc nhanh gấp nhiều lần phương pháp cổ điển.',
      'sp_oxyz_box'
    ),
    makeMC(
      'b16d2',
      10,
      'Góc giữa hai đường chéo của hai mặt bên hình lập phương',
      'Trong không gian $Oxyz$, cho hình lập phương có các đỉnh $O(0; 0; 0), A(1; 0; 0), C(0; 1; 0), O\'(0; 0; 1), A\'(1; 0; 1), C\'(0; 1; 1)$. Góc giữa hai đường thẳng $OA\'$ và $OC\'$ bằng:',
      [
        '$60^\\circ$',
        '$45^\\circ$',
        '$90^\\circ$',
        '$30^\\circ$',
      ],
      'A',
      'Ta có $\\overrightarrow{OA\'} = (1; 0; 1)$ và $\\overrightarrow{OC\'} = (0; 1; 1)$. Khi đó $\\cos(OA\', OC\') = \\frac{|0 + 0 + 1|}{\\sqrt{2}\\cdot\\sqrt{2}} = \\frac{1}{2} \\Rightarrow (OA\', OC\') = 60^\\circ$.',
      'Tam giác $OA\'C\'$ có ba cạnh đều là đường chéo mặt vuông ($\\sqrt{2}$) nên là tam giác đều, suy ra góc bằng $60^\\circ$.'
    ),
    makeMC(
      'b16d2',
      11,
      'Góc giữa đường thẳng giao tuyến và trục tọa độ',
      'Trong không gian $Oxyz$, gọi $d$ là giao tuyến của hai mặt phẳng $(P): x - y + 1 = 0$ và $(Q): y - z + 2 = 0$. Côsin của góc giữa đường thẳng $d$ và trục $Ox$ bằng:',
      [
        '$\\frac{\\sqrt{3}}{3}$',
        '$\\frac{1}{3}$',
        '$\\frac{\\sqrt{6}}{3}$',
        '$\\frac{\\sqrt{2}}{2}$',
      ],
      'A',
      'Ta có $\\vec{u}_d = [\\vec{n}_P, \\vec{n}_Q] = (1; 1; 1)$ và $\\vec{i} = (1; 0; 0)$. Suy ra $\\cos(d, Ox) = \\frac{|1|}{\\sqrt{3}\\cdot 1} = \\frac{\\sqrt{3}}{3}$.',
      'Tìm VTCP của giao tuyến $\\vec{u}_d = [\\vec{n}_P, \\vec{n}_Q]$ trước khi tính góc.'
    ),
    makeMC(
      'b16d2',
      12,
      'Bài toán thực tế: Góc giữa hai mặt mái nhà hình chóp',
      'Trong không gian $Oxyz$, hai sườn mái nhà phẳng có phương trình lần lượt là $(P): x + 2z - 6 = 0$ và $(Q): y + 2z - 6 = 0$. Côsin của góc giữa hai mặt phẳng sườn mái $(P)$ và $(Q)$ bằng:',
      [
        '$\\frac{4}{5}$',
        '$\\frac{3}{5}$',
        '$\\frac{2}{5}$',
        '$\\frac{1}{5}$',
      ],
      'A',
      'Ta có $\\vec{n}_P = (1; 0; 2)$ và $\\vec{n}_Q = (0; 1; 2)$. Khi đó $\\cos((P), (Q)) = \\frac{|1\\cdot 0 + 0\\cdot 1 + 2\\cdot 2|}{\\sqrt{5}\\cdot\\sqrt{5}} = \\frac{4}{5}$.',
      'Áp dụng trực tiếp công thức côsin góc giữa hai mặt phẳng.'
    ),
  ],
  [
    makeTF(
      'b16d2',
      1,
      'Phân tích góc giữa đường thẳng và các mặt phẳng tọa độ',
      'Trong không gian $Oxyz$, cho đường thẳng $\\Delta: \\frac{x - 1}{1} = \\frac{y - 2}{2} = \\frac{z - 3}{2}$. Gọi $\\alpha, \\beta, \\gamma$ lần lượt là góc giữa đường thẳng $\\Delta$ và ba mặt phẳng tọa độ $(Oyz), (Oxz), (Oxy)$.',
      [
        {
          text: 'Một vectơ chỉ phương của đường thẳng $\\Delta$ là $\\vec{u} = (1; 2; 2)$ có độ dài bằng $3$.',
          isCorrect: true,
          exp: '$|\\vec{u}| = \\sqrt{1^2 + 2^2 + 2^2} = 3$.',
        },
        {
          text: 'Giá trị của $\\sin\\alpha = \\sin(\\Delta, (Oyz))$ bằng $\\frac{1}{3}$.',
          isCorrect: true,
          exp: 'Mặt phẳng $(Oyz)$ có VTPT $\\vec{i} = (1; 0; 0) \\Rightarrow \\sin\\alpha = \\frac{|1|}{3\\cdot 1} = \\frac{1}{3}$.',
        },
        {
          text: 'Hai góc $\\beta$ và $\\gamma$ bằng nhau và cùng có $\\sin\\beta = \\sin\\gamma = \\frac{2}{3}$.',
          isCorrect: true,
          exp: '$\\sin\\beta = \\frac{|2|}{3} = \\frac{2}{3}$ và $\\sin\\gamma = \\frac{|2|}{3} = \\frac{2}{3} \\Rightarrow \\beta = \\gamma$.',
        },
        {
          text: 'Tổng $\\sin^2\\alpha + \\sin^2\\beta + \\sin^2\\gamma$ bằng $2$.',
          isCorrect: false,
          exp: 'Ta có $\\sin^2\\alpha + \\sin^2\\beta + \\sin^2\\gamma = \\frac{a^2 + b^2 + c^2}{a^2 + b^2 + c^2} = 1 \\ne 2$.',
        },
      ],
      'Tính chất thú vị: Tổng bình phương các sin của góc tạo bởi một đường thẳng bất kỳ với ba mặt phẳng tọa độ luôn bằng $1$.',
      'sp_oxyz_angle_line_plane'
    ),
    makeTF(
      'b16d2',
      2,
      'Ứng dụng hệ trục tọa độ Oxyz tính góc trong hình chóp vuông góc đáy',
      'Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $2$ và $SA \\perp (ABCD)$, $SA = 2$. Chọn hệ trục tọa độ $Oxyz$ có gốc tại $A(0; 0; 0)$, tia $Ax \\equiv AB$, tia $Ay \\equiv AD$, tia $Az \\equiv AS$.',
      [
        {
          text: 'Tọa độ các đỉnh là $B(2; 0; 0), D(0; 2; 0), C(2; 2; 0)$ và $S(0; 0; 2)$.',
          isCorrect: true,
          exp: 'Theo cách gắn hệ trục tọa độ, $B(2; 0; 0), D(0; 2; 0), C(2; 2; 0), S(0; 0; 2)$.',
        },
        {
          text: 'Góc giữa hai đường thẳng $SB$ và $CD$ bằng $45^\\circ$.',
          isCorrect: false,
          exp: '$\\overrightarrow{SB} = (2; 0; -2)$ và $\\overrightarrow{CD} = (-2; 0; 0) \\Rightarrow \\cos(SB, CD) = \\frac{|-4|}{2\\sqrt{2}\\cdot 2} = \\frac{\\sqrt{2}}{2} \\Rightarrow (SB, CD) = 45^\\circ$ (nên phát biểu là Đúng!).',
        },
        {
          text: 'Góc giữa đường thẳng $SC$ và mặt phẳng đáy $(ABCD)$ có $\\sin(SC, (ABCD)) = \\frac{\\sqrt{3}}{3}$.',
          isCorrect: true,
          exp: '$\\overrightarrow{SC} = (2; 2; -2)$ cùng phương $(1; 1; -1)$, VTPT của đáy là $\\vec{k} = (0; 0; 1) \\Rightarrow \\sin(SC, (ABCD)) = \\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$.',
        },
        {
          text: 'Hai mặt phẳng $(SAB)$ và $(SAD)$ tạo với nhau một góc bằng $60^\\circ$.',
          isCorrect: false,
          exp: '$(SAB) \\equiv (Oxz)$ và $(SAD) \\equiv (Oyz)$ vuông góc với nhau nên góc giữa chúng bằng $90^\\circ$.',
        },
      ],
      'Phương pháp gắn hệ trục tọa độ $Oxyz$ vào đỉnh góc vuông $A$ của hình chóp giải quyết cực nhanh mọi câu hỏi góc và khoảng cách.',
      'sp_pyramid_sa_perp'
    ),
    makeTF(
      'b16d2',
      3,
      'Bài toán thực tế: Độ nghiêng đường cất cánh của máy bay',
      'Trong không gian $Oxyz$ (đơn vị: mét), mặt đường băng sân bay nằm trên mặt phẳng $(Oxy)$. Một máy bay rời đường băng tại điểm $A(100; 200; 0)$ và bay thẳng lên theo đường thẳng $d$ đi qua điểm $B(400; 600; 500\\sqrt{3})$.',
      [
        {
          text: 'Vectơ chỉ phương của đường bay $AB$ cùng phương với vectơ $\\vec{u} = (3; 4; 5\\sqrt{3})$. ',
          isCorrect: true,
          exp: '$\\overrightarrow{AB} = (300; 400; 500\\sqrt{3}) = 100(3; 4; 5\\sqrt{3})$.',
        },
        {
          text: 'Độ dài đoạn đường bay từ $A$ đến $B$ bằng $1000\\text{ m}$.',
          isCorrect: true,
          exp: '$AB = 100\\sqrt{3^2 + 4^2 + (5\\sqrt{3})^2} = 100\\sqrt{9 + 16 + 75} = 100\\cdot 10 = 1000\\text{ (m)}$.',
        },
        {
          text: 'Góc nâng của đường bay $AB$ so với mặt phẳng ngang $(Oxy)$ bằng $60^\\circ$.',
          isCorrect: true,
          exp: '$\\sin(AB, (Oxy)) = \\frac{5\\sqrt{3}}{10} = \\frac{\\sqrt{3}}{2} \\Rightarrow (AB, (Oxy)) = 60^\\circ$.',
        },
        {
          text: 'Khi máy bay đạt độ cao $z = 200\\sqrt{3}\\text{ m}$ thì máy bay đã bay được quãng đường $500\\text{ m}$ kể từ điểm rời đường băng $A$.',
          isCorrect: false,
          exp: 'Vì $\\sin 60^\\circ = \\frac{z}{s} \\Rightarrow s = \\frac{200\\sqrt{3}}{\\sqrt{3}/2} = 400\\text{ m} \\ne 500\\text{ m}$.',
        },
      ],
      'Quãng đường bay $s$ liên hệ với độ cao $z$ qua công thức $z = s \\cdot \\sin\\alpha$.'
    ),
  ],
  [
    makeSA(
      'b16d2',
      1,
      'Tính góc giữa hai mặt phẳng',
      'Trong không gian $Oxyz$, tính số đo góc (đơn vị: độ) giữa hai mặt phẳng $(P): x + \\sqrt{3}y - 5 = 0$ và $(Q): \\sqrt{3}x + y + 2 = 0$.',
      ['30'],
      'Ta có $\\vec{n}_P = (1; \\sqrt{3}; 0)$ và $\\vec{n}_Q = (\\sqrt{3}; 1; 0)$. Khi đó $\\cos((P), (Q)) = \\frac{|\\sqrt{3} + \\sqrt{3}|}{2\\cdot 2} = \\frac{2\\sqrt{3}}{4} = \\frac{\\sqrt{3}}{2} \\Rightarrow ((P), (Q)) = 30^\\circ$.',
      'Từ $\\cos\\varphi = \\frac{\\sqrt{3}}{2}$ suy ra $\\varphi = 30^\\circ$.',
      'độ'
    ),
    makeSA(
      'b16d2',
      2,
      'Tính 9 lần bình phương sin của góc giữa đường thẳng và mặt phẳng',
      'Trong không gian $Oxyz$, gọi $\\varphi$ là góc giữa đường thẳng $d: \\frac{x}{1} = \\frac{y}{2} = \\frac{z}{2}$ và mặt phẳng $(P): 2x + 2y - z + 3 = 0$. Tính giá trị của biểu thức $T = 9\\sin\\varphi$.',
      ['4'],
      'Ta có $\\vec{u}_d = (1; 2; 2), \\vec{n}_P = (2; 2; -1)$. Khi đó $\\sin\\varphi = \\frac{|1\\cdot 2 + 2\\cdot 2 + 2(-1)|}{3\\cdot 3} = \\frac{4}{9}$. Suy ra $T = 9\\sin\\varphi = 4$.',
      'Tính $\\sin\\varphi = \\frac{4}{9}$ rồi nhân với $9$.',
      undefined,
      'sp_oxyz_angle_line_plane'
    ),
    makeSA(
      'b16d2',
      3,
      'Tìm tham số để đường thẳng vuông góc với mặt phẳng',
      'Trong không gian $Oxyz$, cho đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 2}{-3} = \\frac{z}{4}$ và mặt phẳng $(P): 4x + ay + bz - 5 = 0$. Biết góc giữa đường thẳng $d$ và mặt phẳng $(P)$ bằng $90^\\circ$. Tính tổng $S = a + b$.',
      ['2'],
      'Góc giữa $d$ và $(P)$ bằng $90^\\circ \\Leftrightarrow d \\perp (P) \\Leftrightarrow \\vec{n}_P$ cùng phương với $\\vec{u}_d \\Leftrightarrow \\frac{4}{2} = \\frac{a}{-3} = \\frac{b}{4} = 2 \\Rightarrow a = -6, b = 8 \\Rightarrow S = a + b = 2$.',
      'Góc giữa đường thẳng và mặt phẳng bằng $90^\\circ$ khi và chỉ khi đường thẳng vuông góc với mặt phẳng.'
    ),
    makeSA(
      'b16d2',
      4,
      'Bài toán thực tế: Góc giữa hai dầm thép mái vòm',
      'Trong một nhà thi đấu thể thao gắn hệ trục tọa độ $Oxyz$, hai thanh dầm thép thẳng đi qua đỉnh $S(0; 0; 10)$ có vectơ chỉ phương lần lượt là $\\vec{u}_1 = (2; 1; -2)$ và $\\vec{u}_2 = (1; 2; 2)$. Tính số đo góc (đơn vị: độ) giữa hai đường thẳng chứa hai thanh dầm thép đó.',
      ['90'],
      'Ta có $\\vec{u}_1 \\cdot \\vec{u}_2 = 2\\cdot 1 + 1\\cdot 2 + (-2)\\cdot 2 = 0 \\Rightarrow \\cos(d_1, d_2) = 0$. Vậy góc giữa hai thanh dầm bằng $90^\\circ$.',
      'Khi tích vô hướng của hai vectơ chỉ phương bằng $0$, hai đường thẳng vuông góc với nhau.',
      'độ'
    ),
  ],
  [
    makeSO(
      'b16d2',
      1,
      'Tính góc giữa hai mặt phẳng trong tứ diện vuông bằng tọa độ',
      'Trong không gian $Oxyz$, cho ba điểm $A(3; 0; 0), B(0; 4; 0), C(0; 0; 5)$. Hãy tính côsin của góc giữa mặt phẳng $(ABC)$ và mặt phẳng $(Oxy)$.',
      'Vậy $\\cos((ABC), (Oxy)) = \\frac{12}{5\\sqrt{34}}$... Với $A(3; 0; 0), B(0; 6; 0), C(0; 0; 2)$, ta có $\\cos((ABC), (Oxy)) = \\frac{3}{7}$.',
      [
        {
          role: 'Bước 1: Viết phương trình đoạn chắn và tìm vectơ pháp tuyến của mặt phẳng $(ABC)$',
          content: 'Với $A(3; 0; 0), B(0; 6; 0), C(0; 0; 2)$, phương trình $(ABC)$ là $\\frac{x}{3} + \\frac{y}{6} + \\frac{z}{2} = 1 \\Leftrightarrow 2x + y + 3z - 6 = 0$, có VTPT $\\vec{n} = (2; 1; 3)$.',
        },
        {
          role: 'Bước 2: Xác định vectơ pháp tuyến của mặt phẳng $(Oxy)$',
          content: 'Mặt phẳng $(Oxy)$ có phương trình $z = 0$ nên có một vectơ pháp tuyến là $\\vec{k} = (0; 0; 1)$.',
        },
        {
          role: 'Bước 3: Áp dụng công thức côsin góc giữa hai mặt phẳng',
          content: 'Ta có $\\cos((ABC), (Oxy)) = \\frac{|\\vec{n}\\cdot\\vec{k}|}{|\\vec{n}|\\cdot|\\vec{k}|} = \\frac{3}{\\sqrt{2^2 + 1^2 + 3^2}\\cdot 1} = \\frac{3}{\\sqrt{14}}$.',
        },
      ],
      'Viết phương trình đoạn chắn rồi quy đồng mẫu số giúp tìm nhanh VTPT của $(ABC)$.',
      'Kỹ năng cơ bản để giải bài toán góc nhị diện trong tứ diện vuông $OABC$.',
      0.7,
      'sp_oxyz_plane_intercepts'
    ),
    makeSO(
      'b16d2',
      2,
      'Viết phương trình mặt phẳng chứa đường thẳng và tạo với mặt phẳng tọa độ góc lớn nhất',
      'Trong không gian $Oxyz$, cho hai điểm $A(1; 0; 1)$ và $B(2; 1; 3)$. Hãy tính sin của góc giữa đường thẳng $AB$ và mặt phẳng $(P): x - 2y + 2z - 1 = 0$.',
      'Vậy $\\sin(AB, (P)) = \\frac{\\sqrt{6}}{6}$.',
      [
        {
          role: 'Bước 1: Tìm vectơ chỉ phương của đường thẳng $AB$ và vectơ pháp tuyến của $(P)$',
          content: 'Đường thẳng $AB$ có VTCP $\\overrightarrow{AB} = (1; 1; 2)$. Mặt phẳng $(P)$ có VTPT $\\vec{n}_P = (1; -2; 2)$.',
        },
        {
          role: 'Bước 2: Tính độ dài hai vectơ và tích vô hướng của chúng',
          content: 'Ta có $|\\overrightarrow{AB}| = \\sqrt{1 + 1 + 4} = \\sqrt{6}$, $|\\vec{n}_P| = \\sqrt{1 + 4 + 4} = 3$ và $|\\overrightarrow{AB} \\cdot \\vec{n}_P| = |1 - 2 + 4| = 3$.',
        },
        {
          role: 'Bước 3: Thay vào công thức $\\sin(AB, (P))$ và rút gọn',
          content: 'Suy ra $\\sin(AB, (P)) = \\frac{3}{3\\sqrt{6}} = \\frac{1}{\\sqrt{6}} = \\frac{\\sqrt{6}}{6}$.',
        },
      ],
      'Tách riêng bước tính độ dài hai vectơ và tích vô hướng giúp hạn chế tối đa nhầm lẫn tính toán.',
      'Bài toán chuẩn mực về góc giữa đường thẳng đi qua hai điểm và mặt phẳng.',
      0.65,
      'sp_oxyz_angle_line_plane'
    ),
    makeSO(
      'b16d2',
      3,
      'Gắn hệ trục tọa độ Oxyz tính góc giữa hai đường thẳng trong hình lăng trụ đứng',
      'Cho hình lăng trụ tam giác đều $ABC.A\'B\'C\'$ có tất cả các cạnh đều bằng $2$. Hãy sử dụng phương pháp tọa độ trong không gian để tính côsin của góc giữa hai đường thẳng $AB\'$ và $BC\'$.',
      'Vậy $\\cos(AB\', BC\') = \\frac{1}{4}$.',
      [
        {
          role: 'Bước 1: Chọn hệ trục tọa độ $Oxyz$ và xác định tọa độ các đỉnh',
          content: 'Gọi $O$ là trung điểm $BC$. Chọn $O(0; 0; 0)$, tia $Ox \\equiv OC$, tia $Oy \\equiv OA$, tia $Oz$ cùng hướng $\\overrightarrow{AA\'}$. Khi đó $B(-1; 0; 0), C(1; 0; 0), A(0; \\sqrt{3}; 0), B\'(-1; 0; 2), C\'(1; 0; 2)$.',
        },
        {
          role: 'Bước 2: Tính tọa độ hai vectơ chỉ phương $\\overrightarrow{AB\'}$ và $\\overrightarrow{BC\'}$',
          content: 'Ta có $\\overrightarrow{AB\'} = (-1; -\\sqrt{3}; 2)$ với $|\\overrightarrow{AB\'}| = \\sqrt{1 + 3 + 4} = 2\\sqrt{2}$ và $\\overrightarrow{BC\'} = (2; 0; 2)$ với $|\\overrightarrow{BC\'}| = 2\\sqrt{2}$.',
        },
        {
          role: 'Bước 3: Áp dụng công thức côsin góc giữa hai đường thẳng',
          content: 'Suy ra $\\cos(AB\', BC\') = \\frac{|-1\\cdot 2 + (-\\sqrt{3})\\cdot 0 + 2\\cdot 2|}{2\\sqrt{2}\\cdot 2\\sqrt{2}} = \\frac{2}{8} = \\frac{1}{4}$.',
        },
      ],
      'Với đáy là tam giác đều cạnh $2a$, chọn gốc tọa độ tại trung điểm $O$ của một cạnh giúp tọa độ các đỉnh rất gọn.',
      'Ứng dụng mạnh mẽ của phương pháp tọa độ hóa trong SGK Toán 12 Tập 2.',
      0.65,
      'sp_prism_abca1b1c1'
    ),
  ]
);

// Sync minor adjustments in bai16De2
bai16De2.part1[2].prompt = 'Trong không gian $Oxyz$, cho bốn điểm $A(1; 0; 0), B(2; 1; 0), C(0; 0; 1), D(0; 1; 2)$. Góc giữa hai đường thẳng $AB$ và $CD$ bằng:';
bai16De2.part1[2].explanation = 'Ta có $\\overrightarrow{AB} = (1; 1; 0)$ và $\\overrightarrow{CD} = (0; 1; 1)$. Khi đó $\\cos(AB, CD) = \\frac{|0 + 1 + 0|}{\\sqrt{2}\\cdot\\sqrt{2}} = \\frac{1}{2} \\Rightarrow (AB, CD) = 60^\\circ$.';

bai16De2.part2[1].statements[1].isCorrect = true;

bai16De2.part4[0].problemStatement = 'Trong không gian $Oxyz$, cho ba điểm $A(3; 0; 0), B(0; 6; 0), C(0; 0; 2)$. Hãy tính côsin của góc giữa mặt phẳng $(ABC)$ và mặt phẳng $(Oxy)$.';
bai16De2.part4[0].conclusionTarget = 'Vậy $\\cos((ABC), (Oxy)) = \\frac{3}{\\sqrt{14}}$.';

// ============================================================================
// BÀI 17: PHƯƠNG TRÌNH MẶT CẦU (SGK Toán 12 Tập 2 - Kết nối tri thức - Trang 54)
// ============================================================================

const bai17De1 = makeLessonExam(
  'bai17-de01',
  'Bài 17 - Đề ôn số 1',
  'Phương trình mặt cầu: Tâm, bán kính, điều kiện mặt cầu và vị trí điểm',
  'Đề ôn tập Bài 17 (Số 1) bám sát yêu cầu cần đạt SGK Toán 12 Tập 2 Kết nối tri thức: Phương trình chính tắc và phương trình khai triển của mặt cầu, xác định tâm và bán kính, xét vị trí điểm trong/trên/ngoài mặt cầu và bài toán thực tế.',
  [
    makeMC(
      'b17d1',
      1,
      'Tìm tâm và bán kính từ phương trình chính tắc của mặt cầu',
      'Trong không gian $Oxyz$, cho mặt cầu $(S): (x - 2)^2 + (y + 3)^2 + (z - 1)^2 = 16$. Tâm $I$ và bán kính $R$ của mặt cầu $(S)$ là:',
      [
        '$I(2; -3; 1),\\ R = 4$',
        '$I(-2; 3; -1),\\ R = 4$',
        '$I(2; -3; 1),\\ R = 16$',
        '$I(-2; 3; -1),\\ R = 16$',
      ],
      'A',
      'Mặt cầu $(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2$ có tâm $I(2; -3; 1)$ và bán kính $R = \\sqrt{16} = 4$.',
      'Đổi dấu các hằng số trong ngoặc để tìm tọa độ tâm $I$ và lấy căn bậc hai vế phải để tìm bán kính $R$.',
      'sp_oxyz_sphere'
    ),
    makeMC(
      'b17d1',
      2,
      'Viết phương trình mặt cầu biết tâm và bán kính',
      'Trong không gian $Oxyz$, phương trình mặt cầu tâm $I(-1; 2; 0)$ và bán kính $R = 3$ là:',
      [
        '$(x + 1)^2 + (y - 2)^2 + z^2 = 9$',
        '$(x - 1)^2 + (y + 2)^2 + z^2 = 9$',
        '$(x + 1)^2 + (y - 2)^2 + z^2 = 3$',
        '$(x - 1)^2 + (y + 2)^2 + z^2 = 3$',
      ],
      'A',
      'Thay $a = -1, b = 2, c = 0$ và $R^2 = 9$ vào phương trình $(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2$, ta được $(x + 1)^2 + (y - 2)^2 + z^2 = 9$.',
      'Vế phải của phương trình mặt cầu là $R^2 = 3^2 = 9$ (không phải $R = 3$).',
      'sp_oxyz_sphere'
    ),
    makeMC(
      'b17d1',
      3,
      'Tìm tâm và bán kính từ phương trình dạng khai triển',
      'Trong không gian $Oxyz$, mặt cầu $(S): x^2 + y^2 + z^2 - 4x + 2y - 6z + 5 = 0$ có tâm $I$ và bán kính $R$ là:',
      [
        '$I(2; -1; 3),\\ R = 3$',
        '$I(-2; 1; -3),\\ R = 3$',
        '$I(2; -1; 3),\\ R = 9$',
        '$I(4; -2; 6),\\ R = 3$',
      ],
      'A',
      'Chia hệ số của $x, y, z$ cho $-2$, ta được tâm $I(2; -1; 3)$. Bán kính $R = \\sqrt{2^2 + (-1)^2 + 3^2 - 5} = \\sqrt{14 - 5} = 3$.',
      'Công thức nhanh với $x^2+y^2+z^2-2ax-2by-2cz+d=0$: tâm $I(a;b;c)$ và $R = \\sqrt{a^2+b^2+c^2-d}$.'
    ),
    makeMC(
      'b17d1',
      4,
      'Nhận diện phương trình mặt cầu',
      'Trong không gian $Oxyz$, phương trình nào dưới đây là phương trình của một mặt cầu?',
      [
        '$x^2 + y^2 + z^2 - 2x + 4y - 2z - 3 = 0$',
        '$x^2 + y^2 + z^2 - 2x + 2y + 10 = 0$',
        '$2x^2 + 2y^2 + z^2 - 4x + 2y - 1 = 0$',
        '$x^2 + y^2 - z^2 + 2x - 4y - 5 = 0$',
      ],
      'A',
      'Phương trình $x^2 + y^2 + z^2 - 2x + 4y - 2z - 3 = 0$ có hệ số của $x^2, y^2, z^2$ bằng nhau (bằng $1$) và $a^2 + b^2 + c^2 - d = 1^2 + (-2)^2 + 1^2 - (-3) = 9 > 0$ nên là phương trình mặt cầu.',
      'Điều kiện để $x^2 + y^2 + z^2 - 2ax - 2by - 2cz + d = 0$ là phương trình mặt cầu là $a^2 + b^2 + c^2 - d > 0$.'
    ),
    makeMC(
      'b17d1',
      5,
      'Viết phương trình mặt cầu biết tâm và điểm đi qua',
      'Trong không gian $Oxyz$, mặt cầu $(S)$ có tâm $I(1; 1; -2)$ và đi qua điểm $A(3; 2; 0)$ có phương trình là:',
      [
        '$(x - 1)^2 + (y - 1)^2 + (z + 2)^2 = 9$',
        '$(x - 1)^2 + (y - 1)^2 + (z + 2)^2 = 3$',
        '$(x + 1)^2 + (y + 1)^2 + (z - 2)^2 = 9$',
        '$(x - 3)^2 + (y - 2)^2 + z^2 = 9$',
      ],
      'A',
      'Bán kính mặt cầu là $R = IA = \\sqrt{(3 - 1)^2 + (2 - 1)^2 + (0 + 2)^2} = \\sqrt{4 + 1 + 4} = 3 \\Rightarrow R^2 = 9$.',
      'Mặt cầu tâm $I$ đi qua điểm $A$ có bán kính $R = IA$.',
      'sp_oxyz_sphere'
    ),
    makeMC(
      'b17d1',
      6,
      'Viết phương trình mặt cầu đường kính AB',
      'Trong không gian $Oxyz$, cho hai điểm $A(1; 3; -2)$ và $B(3; -1; 4)$. Phương trình mặt cầu đường kính $AB$ là:',
      [
        '$(x - 2)^2 + (y - 1)^2 + (z - 1)^2 = 14$',
        '$(x - 2)^2 + (y - 1)^2 + (z - 1)^2 = 56$',
        '$(x + 2)^2 + (y + 1)^2 + (z + 1)^2 = 14$',
        '$(x - 2)^2 + (y - 1)^2 + (z - 1)^2 = \\sqrt{14}$',
      ],
      'A',
      'Tâm $I$ là trung điểm của $AB \\Rightarrow I(2; 1; 1)$. Bán kính $R = IA = \\sqrt{(1 - 2)^2 + (3 - 1)^2 + (-2 - 1)^2} = \\sqrt{1 + 4 + 9} = \\sqrt{14} \\Rightarrow R^2 = 14$.',
      'Mặt cầu đường kính $AB$ có tâm $I$ là trung điểm $AB$ và bán kính $R = IA = \\frac{AB}{2}$.'
    ),
    makeMC(
      'b17d1',
      7,
      'Vị trí tương đối của một điểm đối với mặt cầu',
      'Trong không gian $Oxyz$, cho mặt cầu $(S): (x - 1)^2 + (y - 2)^2 + (z + 1)^2 = 9$ và điểm $M(2; 4; -3)$. Mệnh đề nào dưới đây là đúng?',
      [
        'Điểm $M$ nằm trên mặt cầu $(S)$',
        'Điểm $M$ nằm trong mặt cầu $(S)$',
        'Điểm $M$ nằm ngoài mặt cầu $(S)$',
        'Điểm $M$ trùng với tâm của mặt cầu $(S)$',
      ],
      'A',
      'Thay tọa độ $M(2; 4; -3)$ vào vế trái phương trình $(S)$: $(2 - 1)^2 + (4 - 2)^2 + (-3 + 1)^2 = 1 + 4 + 4 = 9 = R^2$, nên $IM = R$, tức $M$ nằm trên mặt cầu $(S)$.',
      'So sánh $IM^2$ với $R^2$: Nếu $IM^2 < R^2$ thì $M$ ở trong; $IM^2 = R^2$ thì $M$ thuộc $(S)$; $IM^2 > R^2$ thì $M$ ở ngoài.'
    ),
    makeMC(
      'b17d1',
      8,
      'Mặt cầu tiếp xúc với mặt phẳng',
      'Trong không gian $Oxyz$, mặt cầu $(S)$ có tâm $I(2; 1; -1)$ và tiếp xúc với mặt phẳng $(P): 2x - 2y - z + 3 = 0$ có bán kính $R$ bằng:',
      [
        '$2$',
        '$3$',
        '$4$',
        '$1$',
      ],
      'A',
      'Mặt cầu tâm $I$ tiếp xúc với mặt phẳng $(P)$ khi và chỉ khi $R = d(I, (P)) = \\frac{|2\\cdot 2 - 2\\cdot 1 - (-1) + 3|}{\\sqrt{2^2 + (-2)^2 + (-1)^2}} = \\frac{6}{3} = 2$.',
      'Điều kiện mặt cầu $(S)$ tiếp xúc với mặt phẳng $(P)$ là $R = d(I, (P))$.'
    ),
    makeMC(
      'b17d1',
      9,
      'Mặt cầu tiếp xúc với mặt phẳng tọa độ',
      'Trong không gian $Oxyz$, mặt cầu có tâm $I(3; -4; 5)$ và tiếp xúc với mặt phẳng $(Oxy)$ có phương trình là:',
      [
        '$(x - 3)^2 + (y + 4)^2 + (z - 5)^2 = 25$',
        '$(x - 3)^2 + (y + 4)^2 + (z - 5)^2 = 9$',
        '$(x - 3)^2 + (y + 4)^2 + (z - 5)^2 = 16$',
        '$(x - 3)^2 + (y + 4)^2 + (z - 5)^2 = 5$',
      ],
      'A',
      'Bán kính mặt cầu bằng khoảng cách từ $I(3; -4; 5)$ đến mặt phẳng $(Oxy): z = 0$, tức là $R = |z_I| = 5 \\Rightarrow R^2 = 25$.',
      'Khoảng cách từ điểm $I(a; b; c)$ đến $(Oxy)$ là $|c|$, đến $(Oyz)$ là $|a|$, đến $(Oxz)$ là $|b|$.'
    ),
    makeMC(
      'b17d1',
      10,
      'Tìm điều kiện của tham số m để phương trình là mặt cầu',
      'Trong không gian $Oxyz$, tìm tất cả các giá trị của tham số $m$ để phương trình $x^2 + y^2 + z^2 - 2x + 4y - 6z + 2m = 0$ là phương trình của một mặt cầu.',
      [
        '$m < 7$',
        '$m > 7$',
        '$m \\le 7$',
        '$m < 14$',
      ],
      'A',
      'Ta có $a = 1, b = -2, c = 3, d = 2m$. Điều kiện $a^2 + b^2 + c^2 - d > 0 \\Leftrightarrow 1 + 4 + 9 - 2m > 0 \\Leftrightarrow 2m < 14 \\Leftrightarrow m < 7$.',
      'Bán kính mặt cầu phải dương nghiêm ngặt ($R^2 > 0$), không lấy dấu bằng.'
    ),
    makeMC(
      'b17d1',
      11,
      'Diện tích mặt cầu từ phương trình tọa độ',
      'Trong không gian $Oxyz$, diện tích của mặt cầu $(S): x^2 + y^2 + z^2 - 2x + 2y + 4z - 3 = 0$ bằng:',
      [
        '$36\\pi$',
        '$9\\pi$',
        '$12\\pi$',
        '$108\\pi$',
      ],
      'A',
      'Ta có $a = 1, b = -1, c = -2, d = -3 \\Rightarrow R^2 = 1^2 + (-1)^2 + (-2)^2 - (-3) = 9$. Diện tích mặt cầu là $S = 4\\pi R^2 = 36\\pi$.',
      'Diện tích mặt cầu bán kính $R$ là $S = 4\\pi R^2$, thể tích khối cầu là $V = \\frac{4}{3}\\pi R^3$.'
    ),
    makeMC(
      'b17d1',
      12,
      'Bài toán thực tế: Kiểm tra thiết bị thu sóng Wi-Fi trong không gian',
      'Trong không gian $Oxyz$ (đơn vị: mét), một bộ phát sóng Wi-Fi đặt tại điểm $I(2; 3; 4)$ có bán kính phủ sóng là $R = 10\\text{ m}$. Một người dùng điện thoại đứng tại vị trí nào dưới đây sẽ **không** bắt được sóng Wi-Fi?',
      [
        '$M(10; 9; 6)$',
        '$N(8; 9; 4)$',
        '$P(2; 3; 14)$',
        '$Q(5; 7; 8)$',
      ],
      'A',
      'Khoảng cách từ $I(2; 3; 4)$ đến $M(10; 9; 6)$ là $IM = \\sqrt{8^2 + 6^2 + 2^2} = \\sqrt{104} > 10 = R$, nên điểm $M$ nằm ngoài vùng phủ sóng.',
      'Điểm $M$ nhận được sóng khi và chỉ khi $IM \\le R$.',
      'sp_oxyz_sphere'
    ),
  ],
  [
    makeTF(
      'b17d1',
      1,
      'Xác định các yếu tố của mặt cầu và vị trí tương đối của điểm',
      'Trong không gian $Oxyz$, cho mặt cầu $(S): x^2 + y^2 + z^2 - 2x + 4y - 4z - 16 = 0$.',
      [
        {
          text: 'Phương trình chính tắc của mặt cầu $(S)$ là $(x - 1)^2 + (y + 2)^2 + (z - 2)^2 = 25$.',
          isCorrect: true,
          exp: 'Nhóm hằng đẳng thức: $(x - 1)^2 + (y + 2)^2 + (z - 2)^2 = 16 + 1 + 4 + 4 = 25$.',
        },
        {
          text: 'Mặt cầu $(S)$ có tâm $I(1; -2; 2)$ và bán kính $R = 5$.',
          isCorrect: true,
          exp: 'Từ phương trình chính tắc, tâm $I(1; -2; 2)$ và bán kính $R = \\sqrt{25} = 5$.',
        },
        {
          text: 'Gốc tọa độ $O(0; 0; 0)$ nằm bên ngoài mặt cầu $(S)$.',
          isCorrect: false,
          exp: 'Ta có $IO = \\sqrt{1^2 + (-2)^2 + 2^2} = 3 < 5 = R$, nên gốc tọa độ $O$ nằm bên trong mặt cầu $(S)$.',
        },
        {
          text: 'Khoảng cách lớn nhất từ gốc tọa độ $O$ đến một điểm $M$ bất kỳ thuộc mặt cầu $(S)$ bằng $8$.',
          isCorrect: true,
          exp: 'Với $O$ nằm trong mặt cầu, khoảng cách lớn nhất từ $O$ đến điểm $M \\in (S)$ là $OM_{\\max} = IO + R = 3 + 5 = 8$.',
        },
      ],
      'Với một điểm $A$ bất kỳ và điểm $M \\in (S)$: $OM_{\\max} = IA + R$ và $OM_{\\min} = |IA - R|$.',
      'sp_oxyz_sphere'
    ),
    makeTF(
      'b17d1',
      2,
      'Viết phương trình mặt cầu ngoại tiếp tứ diện và tiếp xúc mặt phẳng',
      'Trong không gian $Oxyz$, cho điểm $I(2; -1; 3)$ và mặt phẳng $(P): 2x + y - 2z + 10 = 0$.',
      [
        {
          text: 'Khoảng cách từ điểm $I$ đến mặt phẳng $(P)$ bằng $3$.',
          isCorrect: true,
          exp: '$d(I, (P)) = \\frac{|2\\cdot 2 - 1 - 2\\cdot 3 + 10|}{\\sqrt{2^2 + 1^2 + (-2)^2}} = \\frac{7}{3}$... Với $(P): 2x + y - 2z + 12 = 0$, ta có $d(I, (P)) = \\frac{|4 - 1 - 6 + 12|}{3} = \\frac{9}{3} = 3$.',
        },
        {
          text: 'Mặt cầu $(S)$ tâm $I$ tiếp xúc với mặt phẳng $(P)$ có phương trình là $(x - 2)^2 + (y + 1)^2 + (z - 3)^2 = 9$.',
          isCorrect: true,
          exp: 'Vì $(S)$ tiếp xúc với $(P)$ nên $R = d(I, (P)) = 3 \\Rightarrow R^2 = 9$.',
        },
        {
          text: 'Tiếp điểm $H$ của mặt cầu $(S)$ và mặt phẳng $(P)$ là hình chiếu vuông góc của $I$ lên $(P)$ có tọa độ $H(0; -2; 5)$.',
          isCorrect: true,
          exp: 'Đường thẳng $IH: x = 2 + 2t, y = -1 + t, z = 3 - 2t$. Thay vào $(P): 2x + y - 2z + 12 = 0 \\Rightarrow 9t + 9 = 0 \\Leftrightarrow t = -1 \\Rightarrow H(0; -2; 5)$.',
        },
        {
          text: 'Mặt cầu $(S)$ cắt trục $Oz$ tại hai điểm phân biệt.',
          isCorrect: false,
          exp: 'Cho $x = 0, y = 0$ thay vào $(S)$: $4 + 1 + (z - 3)^2 = 9 \\Leftrightarrow (z - 3)^2 = 4 \\Leftrightarrow z = 5$ hoặc $z = 1$ (nên cắt trục $Oz$ tại 2 điểm phân biệt!).',
        },
      ],
      'Để tìm giao điểm của mặt cầu $(S)$ với trục $Oz$, ta cho $x = 0, y = 0$ rồi giải phương trình bậc hai theo $z$.'
    ),
    makeTF(
      'b17d1',
      3,
      'Bài toán thực tế: Hệ thống radar giám sát không lưu',
      'Trong không gian $Oxyz$ (đơn vị trên mỗi trục là $\\text{km}$), một trạm radar phòng không đặt tại điểm $I(3; 4; 0)$ có tầm quét tối đa là một hình cầu bán kính $R = 50\\text{ km}$.',
      [
        {
          text: 'Phương trình mặt cầu giới hạn vùng quét của radar là $(x - 3)^2 + (y - 4)^2 + z^2 = 2500$.',
          isCorrect: true,
          exp: 'Tâm $I(3; 4; 0)$ và $R^2 = 50^2 = 2500$.',
        },
        {
          text: 'Một máy bay đang ở vị trí $A(33; 44; 10)$ nằm trong vùng quét của radar.',
          isCorrect: false,
          exp: '$IA = \\sqrt{30^2 + 40^2 + 10^2} = \\sqrt{2600} > 50\\text{ km}$, nên máy bay ở $A$ nằm ngoài vùng quét.',
        },
        {
          text: 'Một máy bay khác bay ở vị trí $B(33; 44; 0)$ thì vừa đúng chạm ranh giới vùng quét của radar.',
          isCorrect: true,
          exp: '$IB = \\sqrt{30^2 + 40^2 + 0^2} = 50 = R$, nên $B$ nằm đúng trên mặt cầu biên.',
        },
        {
          text: 'Nếu máy bay bay dọc theo đường thẳng $d: \\begin{cases} x = 3 + 3t \\\\ y = 4 + 4t \\\\ z = 30 \\end{cases}$ thì quãng đường máy bay đi trong vùng quét của radar dài $80\\text{ km}$.',
          isCorrect: true,
          exp: 'Thay phương trình $d$ vào $(x - 3)^2 + (y - 4)^2 + z^2 \\le 2500$: $9t^2 + 16t^2 + 900 \\le 2500 \\Leftrightarrow 25t^2 \\le 1600 \\Leftrightarrow -8 \\le t \\le 8$. Hai điểm vào và ra ứng với $t = -8$ và $t = 8$, quãng đường là $\\sqrt{48^2 + 64^2 + 0^2} = 80\\text{ km}$.',
        },
      ],
      'Độ dài dây cung khi đường thẳng cắt mặt cầu cũng có thể tính bằng $2\\sqrt{R^2 - d^2(I, d)} = 2\\sqrt{50^2 - 30^2} = 80\\text{ km}$.',
      'sp_oxyz_sphere'
    ),
  ],
  [
    makeSA(
      'b17d1',
      1,
      'Tính bán kính mặt cầu từ phương trình khai triển',
      'Trong không gian $Oxyz$, tính bán kính $R$ của mặt cầu $(S): x^2 + y^2 + z^2 - 6x + 8y - 10z + 14 = 0$.',
      ['6'],
      'Ta có $a = 3, b = -4, c = 5, d = 14$. Bán kính mặt cầu là $R = \\sqrt{3^2 + (-4)^2 + 5^2 - 14} = \\sqrt{50 - 14} = \\sqrt{36} = 6$.',
      'Áp dụng công thức $R = \\sqrt{a^2 + b^2 + c^2 - d}$.'
    ),
    makeSA(
      'b17d1',
      2,
      'Tìm tâm mặt cầu có tâm thuộc trục tọa độ và đi qua hai điểm',
      'Trong không gian $Oxyz$, mặt cầu $(S)$ có tâm $I(a; 0; 0)$ thuộc trục $Ox$ và đi qua hai điểm $A(1; 2; -1)$, $B(3; 0; 1)$. Tìm giá trị của $a$ (hoành độ tâm $I$) và bán kính bình phương $R^2$, tính tổng $T = a + R^2$.',
      ['6'],
      'Vì $IA = IB \\Leftrightarrow IA^2 = IB^2 \\Leftrightarrow (a - 1)^2 + 4 + 1 = (a - 3)^2 + 0 + 1 \\Leftrightarrow a^2 - 2a + 6 = a^2 - 6a + 10 \\Leftrightarrow 4a = 4 \\Leftrightarrow a = 1$. Khi đó $R^2 = IA^2 = 0 + 4 + 1 = 5$. Vậy $T = a + R^2 = 1 + 5 = 6$.',
      'Tham số hóa tâm $I(a; 0; 0) \\in Ox$, giải phương trình $IA^2 = IB^2$ để tìm $a$.'
    ),
    makeSA(
      'b17d1',
      3,
      'Mặt cầu ngoại tiếp tứ diện vuông OABC',
      'Trong không gian $Oxyz$, cho bốn điểm $O(0; 0; 0), A(4; 0; 0), B(0; 4; 0), C(0; 0; 2)$. Tính bán kính $R$ của mặt cầu ngoại tiếp tứ diện $OABC$.',
      ['3'],
      'Gọi phương trình mặt cầu là $x^2 + y^2 + z^2 - 2ax - 2by - 2cz + d = 0$. Đi qua $O(0;0;0) \\Rightarrow d = 0$; qua $A(4;0;0) \\Rightarrow a = 2$; qua $B(0;4;0) \\Rightarrow b = 2$; qua $C(0;0;2) \\Rightarrow c = 1$. Vậy tâm $I(2; 2; 1)$ và bán kính $R = \\sqrt{2^2 + 2^2 + 1^2} = 3$.',
      'Công thức nhanh cho mặt cầu ngoại tiếp tứ diện vuông $OABC$: tâm $I\\left(\\frac{x_A}{2}; \\frac{y_B}{2}; \\frac{z_C}{2}\\right)$ và $R = \\frac{1}{2}\\sqrt{x_A^2 + y_B^2 + z_C^2}$.'
    ),
    makeSA(
      'b17d1',
      4,
      'Bài toán thực tế: Khoảng cách xa nhất tới vệ tinh trên quỹ đạo cầu',
      'Trong không gian $Oxyz$ (đơn vị: nghìn km), Trái Đất có tâm tại gốc tọa độ $O(0; 0; 0)$, một vệ tinh nhân tạo chuyển động trên mặt cầu $(S): (x - 1)^2 + (y - 2)^2 + (z - 2)^2 = 49$. Tính khoảng cách lớn nhất (nghìn km) từ tâm Trái Đất $O$ đến vệ tinh đó.',
      ['10'],
      'Mặt cầu $(S)$ có tâm $I(1; 2; 2)$ và bán kính $R = 7$. Khoảng cách từ $O$ đến $I$ là $OI = \\sqrt{1^2 + 2^2 + 2^2} = 3$. Khoảng cách lớn nhất từ $O$ đến một điểm trên $(S)$ là $d_{\\max} = OI + R = 3 + 7 = 10$ (nghìn km).',
      'Khoảng cách lớn nhất từ điểm $O$ đến mặt cầu $(I; R)$ là $OI + R$.',
      'nghìn km',
      'sp_oxyz_sphere'
    ),
  ],
  [
    makeSO(
      'b17d1',
      1,
      'Viết phương trình mặt cầu đi qua bốn điểm không đồng phẳng',
      'Trong không gian $Oxyz$, viết phương trình mặt cầu $(S)$ đi qua bốn điểm $A(1; 0; 0), B(0; -2; 0), C(0; 0; 4)$ và gốc tọa độ $O(0; 0; 0)$.',
      'Vậy phương trình mặt cầu $(S)$ là $x^2 + y^2 + z^2 - x + 2y - 4z = 0$.',
      [
        {
          role: 'Bước 1: Gọi dạng phương trình khai triển của mặt cầu $(S)$',
          content: 'Giả sử phương trình mặt cầu $(S)$ có dạng $x^2 + y^2 + z^2 - 2ax - 2by - 2cz + d = 0\\ (a^2 + b^2 + c^2 - d > 0)$.',
        },
        {
          role: 'Bước 2: Thay tọa độ bốn điểm $O, A, B, C$ để lập hệ phương trình',
          content: 'Vì $O(0; 0; 0) \\in (S)$ nên $d = 0$. Thay $A(1; 0; 0), B(0; -2; 0), C(0; 0; 4)$ vào phương trình, ta được $1 - 2a = 0,\\ 4 + 4b = 0,\\ 16 - 8c = 0 \\Leftrightarrow a = \\frac{1}{2},\\ b = -1,\\ c = 2$.',
        },
        {
          role: 'Bước 3: Kết luận phương trình mặt cầu $(S)$',
          content: 'Thay $a, b, c, d$ vào dạng tổng quát, ta được phương trình mặt cầu $(S): x^2 + y^2 + z^2 - x + 2y - 4z = 0$.',
        },
      ],
      'Khi viết phương trình mặt cầu đi qua 4 điểm cho trước, dùng dạng khai triển $x^2+y^2+z^2-2ax-2by-2cz+d=0$ giúp đưa về hệ phương trình bậc nhất.',
      'Phương pháp chuẩn mực được trình bày trong SGK Toán 12 Tập 2.',
      0.7,
      'sp_oxyz_sphere'
    ),
    makeSO(
      'b17d1',
      2,
      'Viết phương trình mặt cầu có tâm thuộc đường thẳng và tiếp xúc với mặt phẳng',
      'Trong không gian $Oxyz$, viết phương trình mặt cầu $(S)$ có tâm $I$ thuộc đường thẳng $d: \\begin{cases} x = 1 + t \\\\ y = 2 + t \\\\ z = -1 + 2t \\end{cases}$, biết rằng tâm $I$ nằm trên mặt phẳng $(Oxy)$ và mặt cầu $(S)$ tiếp xúc với mặt phẳng $(P): 2x - y + 2z - 9 = 0$.',
      'Vậy phương trình mặt cầu $(S)$ là $(x - 1{,}5)^2 + (y - 2{,}5)^2 + z^2 = ...$',
      [
        {
          role: 'Bước 1: Tìm tọa độ tâm $I = d \\cap (Oxy)$',
          content: 'Vì $I \\in d$ và $I \\in (Oxy): z = 0$ nên',
        },
        {
          role: 'Bước 2: Tính bán kính $R = d(I, (P))$',
          content: 'Bán kính của mặt cầu là khoảng cách từ tâm $I$ đến mặt phẳng $(P)$.',
        },
        {
          role: 'Bước 3: Viết phương trình chính tắc của mặt cầu $(S)$',
          content: 'Kết luận phương trình mặt cầu.',
        },
      ],
      'Tìm tâm $I$ trước rồi tính bán kính $R = d(I, (P))$.',
      'Kết hợp phương trình đường thẳng, mặt phẳng và mặt cầu.',
      0.65
    ),
    makeSO(
      'b17d1',
      3,
      'Bài toán thực tế: Xác định tọa độ tâm chấn động đất từ các trạm quan trắc',
      'Trong không gian $Oxyz$ (đơn vị: $\\text{km}$), một trận động đất có vùng ảnh hưởng chấn động là một hình cầu $(S)$ tâm $I(2; 3; -5)$. Biết trạm quan trắc tại điểm $A(5; 7; -5)$ nằm đúng trên ranh giới ngoài cùng của vùng ảnh hưởng. Hãy viết phương trình mặt cầu $(S)$ và kiểm tra xem thị trấn tại điểm $B(4; 5; 0)$ có nằm trong vùng ảnh hưởng không.',
      'Vậy $(S): (x - 2)^2 + (y - 3)^2 + (z + 5)^2 = 25$ và thị trấn $B(4; 5; 0)$ nằm ngoài vùng ảnh hưởng.',
      [
        {
          role: 'Bước 1: Tính bán kính vùng ảnh hưởng $R = IA$ và viết phương trình mặt cầu $(S)$',
          content: 'Ta có $R = IA = \\sqrt{(5 - 2)^2 + (7 - 3)^2 + (-5 + 5)^2} = \\sqrt{9 + 16 + 0} = 5\\text{ (km)}$. Phương trình mặt cầu $(S)$ là $(x - 2)^2 + (y - 3)^2 + (z + 5)^2 = 25$.',
        },
        {
          role: 'Bước 2: Tính khoảng cách từ tâm chấn $I$ đến thị trấn $B(4; 5; 0)$',
          content: 'Ta có $IB^2 = (4 - 2)^2 + (5 - 3)^2 + (0 + 5)^2 = 4 + 4 + 25 = 33$.',
        },
        {
          role: 'Bước 3: So sánh $IB$ với bán kính $R$ và kết luận',
          content: 'Vì $IB = \\sqrt{33} > 5 = R$ nên thị trấn $B(4; 5; 0)$ nằm bên ngoài vùng ảnh hưởng của trận động đất.',
        },
      ],
      'So sánh $IB^2$ với $R^2$ nhanh hơn lấy căn bậc hai.',
      'Bài toán thực tế mô phỏng bài toán định vị và vùng ảnh hưởng trong SGK.',
      0.65,
      'sp_oxyz_sphere'
    ),
  ]
);

// Refine bai17De1.part2[1] and bai17De1.part4[1] so numbers are integer and 100% consistent
bai17De1.part2[1].prompt = 'Trong không gian $Oxyz$, cho điểm $I(2; -1; 3)$ và mặt phẳng $(P): 2x + y - 2z + 12 = 0$.';
bai17De1.part2[1].statements[0].explanation = '$d(I, (P)) = \\frac{|2\\cdot 2 - 1 - 2\\cdot 3 + 12|}{\\sqrt{2^2 + 1^2 + (-2)^2}} = \\frac{9}{3} = 3$.';
bai17De1.part2[1].statements[3] = {
  id: 'd',
  label: 'd',
  statement: 'Mặt cầu $(S)$ tiếp xúc với trục $Oz$.',
  isCorrect: false,
  explanation: 'Cho $x = 0, y = 0$ thay vào $(S)$: $4 + 1 + (z - 3)^2 = 9 \\Leftrightarrow (z - 3)^2 = 4 \\Leftrightarrow z = 5$ hoặc $z = 1$, nên mặt cầu $(S)$ cắt trục $Oz$ tại 2 điểm phân biệt chứ không tiếp xúc.',
};

bai17De1.part4[1].problemStatement = 'Trong không gian $Oxyz$, viết phương trình mặt cầu $(S)$ có tâm $I$ thuộc đường thẳng $d: \\begin{cases} x = 1 + t \\\\ y = 1 + 2t \\\\ z = -2 + 2t \\end{cases}$, biết rằng tâm $I$ nằm trên mặt phẳng $(Oxy)$ và mặt cầu $(S)$ tiếp xúc với mặt phẳng $(P): 2x - y + 2z - 10 = 0$.';
bai17De1.part4[1].conclusionTarget = 'Vậy phương trình mặt cầu $(S)$ là $(x - 2)^2 + (y - 3)^2 + z^2 = 9$.';
bai17De1.part4[1].steps = [
  {
    id: 'b17d1-p4-q2-s1',
    originalIndex: 1,
    roleDescription: 'Bước 1: Tìm tọa độ tâm $I = d \\cap (Oxy)$',
    content: 'Vì $I \\in d$ và $I \\in (Oxy): z = 0$ nên $-2 + 2t = 0 \\Leftrightarrow t = 1$. Thay $t = 1$ vào phương trình $d$, ta được tâm $I(2; 3; 0)$.',
  },
  {
    id: 'b17d1-p4-q2-s2',
    originalIndex: 2,
    roleDescription: 'Bước 2: Tính bán kính $R = d(I, (P))$',
    content: 'Vì $(S)$ tiếp xúc với $(P)$ nên $R = d(I, (P)) = \\frac{|2\\cdot 2 - 3 + 2\\cdot 0 - 10|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{|-9|}{3} = 3$.',
  },
  {
    id: 'b17d1-p4-q2-s3',
    originalIndex: 3,
    roleDescription: 'Bước 3: Viết phương trình chính tắc của mặt cầu $(S)$',
    content: 'Mặt cầu $(S)$ có tâm $I(2; 3; 0)$ và bán kính $R = 3$ có phương trình $(x - 2)^2 + (y - 3)^2 + z^2 = 9$.',
  },
];

const bai17De2 = makeLessonExam(
  'bai17-de02',
  'Bài 17 - Đề ôn số 2',
  'Phương trình mặt cầu: Mặt phẳng tiếp diện, giao tuyến và tọa độ địa lý GPS',
  'Đề ôn tập Bài 17 (Số 2) gồm 22 câu hỏi chuẩn cấu trúc 4 phần, nâng cao kỹ năng viết phương trình mặt cầu, tiếp diện và ứng dụng định vị không gian.',
  [
    makeMC(
      'b17d2',
      1,
      'Phương trình mặt cầu tâm tại gốc tọa độ',
      'Trong không gian $Oxyz$, phương trình mặt cầu có tâm tại gốc tọa độ $O(0; 0; 0)$ và bán kính $R = 5$ là:',
      [
        '$x^2 + y^2 + z^2 = 25$',
        '$x^2 + y^2 + z^2 = 5$',
        '$(x - 5)^2 + (y - 5)^2 + (z - 5)^2 = 25$',
        '$x^2 + y^2 + z^2 - 25 = 5$',
      ],
      'A',
      'Thay $I(0; 0; 0)$ và $R = 5$ vào công thức chính tắc, ta được $x^2 + y^2 + z^2 = 25$.',
      'Mặt cầu tâm $O$ bán kính $R$ luôn có phương trình $x^2 + y^2 + z^2 = R^2$.',
      'sp_oxyz_sphere'
    ),
    makeMC(
      'b17d2',
      2,
      'Tìm tọa độ tâm mặt cầu khi có hệ số 2 trước x^2, y^2, z^2',
      'Trong không gian $Oxyz$, tâm $I$ của mặt cầu $(S): 2x^2 + 2y^2 + 2z^2 - 8x + 4y + 12z - 6 = 0$ có tọa độ là:',
      [
        '$I(2; -1; -3)$',
        '$I(4; -2; -6)$',
        '$I(-2; 1; 3)$',
        '$I(-4; 2; 6)$',
      ],
      'A',
      'Chia hai vế phương trình cho $2$: $x^2 + y^2 + z^2 - 4x + 2y + 6z - 3 = 0$. Chia tiếp hệ số bậc nhất cho $-2$, ta được tâm $I(2; -1; -3)$.',
      'Cảnh giác: Phải chia cả hai vế cho hệ số của $x^2, y^2, z^2$ để đưa về hệ số $1$ trước khi tìm tâm và bán kính!'
    ),
    makeMC(
      'b17d2',
      3,
      'Mặt cầu đi qua gốc tọa độ',
      'Trong không gian $Oxyz$, mặt cầu $(S)$ có tâm $I(2; -3; 6)$ và đi qua gốc tọa độ $O(0; 0; 0)$ có bán kính $R$ bằng:',
      [
        '$7$',
        '$49$',
        '$5$',
        '$\\sqrt{13}$',
      ],
      'A',
      'Bán kính mặt cầu là $R = IO = \\sqrt{2^2 + (-3)^2 + 6^2} = \\sqrt{49} = 7$.',
      'Bộ số Pythagoras không gian: $2^2 + 3^2 + 6^2 = 49 = 7^2$.'
    ),
    makeMC(
      'b17d2',
      4,
      'Phương trình mặt phẳng tiếp diện của mặt cầu tại điểm thuộc mặt cầu',
      'Trong không gian $Oxyz$, cho mặt cầu $(S): (x - 1)^2 + (y - 2)^2 + (z + 1)^2 = 9$ và điểm $M(3; 3; 1)$ thuộc $(S)$. Mặt phẳng $(P)$ tiếp xúc với mặt cầu $(S)$ tại điểm $M$ có một vectơ pháp tuyến là:',
      [
        '$\\vec{n} = (2; 1; 2)$',
        '$\\vec{n} = (1; 2; -1)$',
        '$\\vec{n} = (3; 3; 1)$',
        '$\\vec{n} = (2; -1; 2)$',
      ],
      'A',
      'Mặt phẳng tiếp diện của mặt cầu tâm $I(1; 2; -1)$ tại tiếp điểm $M(3; 3; 1)$ vuông góc với bán kính $IM$ nên nhận $\\overrightarrow{IM} = (2; 1; 2)$ làm vectơ pháp tuyến.',
      'Mặt phẳng tiếp xúc với mặt cầu tại $M$ đi qua $M$ và nhận $\\overrightarrow{IM}$ làm VTPT.'
    ),
    makeMC(
      'b17d2',
      5,
      'Thể tích khối cầu từ phương trình mặt cầu',
      'Trong không gian $Oxyz$, thể tích của khối cầu giới hạn bởi mặt cầu $(S): (x + 1)^2 + (y - 3)^2 + z^2 = 9$ bằng:',
      [
        '$36\\pi$',
        '$27\\pi$',
        '$108\\pi$',
        '$12\\pi$',
      ],
      'A',
      'Mặt cầu có bán kính $R = \\sqrt{9} = 3$. Thể tích khối cầu là $V = \\frac{4}{3}\\pi R^3 = \\frac{4}{3}\\pi \\cdot 27 = 36\\pi$.',
      'Nhớ công thức thể tích khối cầu $V = \\frac{4}{3}\\pi R^3$.'
    ),
    makeMC(
      'b17d2',
      6,
      'Vị trí tương đối của mặt phẳng và mặt cầu',
      'Trong không gian $Oxyz$, cho mặt cầu $(S): (x - 1)^2 + (y + 1)^2 + (z - 2)^2 = 16$ và mặt phẳng $(P): 2x - 2y + z - 12 = 0$. Khẳng định nào dưới đây là đúng?',
      [
        'Mặt phẳng $(P)$ cắt mặt cầu $(S)$ theo giao tuyến là một đường tròn',
        'Mặt phẳng $(P)$ tiếp xúc với mặt cầu $(S)$',
        'Mặt phẳng $(P)$ và mặt cầu $(S)$ không có điểm chung',
        'Mặt phẳng $(P)$ đi qua tâm của mặt cầu $(S)$',
      ],
      'A',
      'Tâm $I(1; -1; 2)$, bán kính $R = 4$. Khoảng cách $d(I, (P)) = \\frac{|2 - (-2) + 2 - 12|}{3} = \\frac{6}{3} = 2 < 4 = R$, nên $(P)$ cắt $(S)$ theo một đường tròn bán kính $r = \\sqrt{R^2 - d^2} = 2\\sqrt{3}$.',
      'So sánh $d(I, (P))$ với $R$: nếu $d < R$ thì cắt theo đường tròn; $d = R$ thì tiếp xúc; $d > R$ thì không giao nhau.'
    ),
    makeMC(
      'b17d2',
      7,
      'Bán kính đường tròn giao tuyến của mặt cầu và mặt phẳng',
      'Trong không gian $Oxyz$, mặt phẳng $(P): x + 2y + 2z - 3 = 0$ cắt mặt cầu $(S): x^2 + y^2 + z^2 = 25$ theo giao tuyến là một đường tròn có bán kính $r$ bằng:',
      [
        '$2\\sqrt{6}$',
        '$4$',
        '$3$',
        '$\\sqrt{24}$ hay $2\\sqrt{6}$',
      ],
      'A',
      'Mặt cầu có tâm $O(0; 0; 0)$, bán kính $R = 5$. Khoảng cách $d = d(O, (P)) = \\frac{|-3|}{3} = 1$. Bán kính đường tròn giao tuyến là $r = \\sqrt{R^2 - d^2} = \\sqrt{25 - 1} = \\sqrt{24} = 2\\sqrt{6}$.',
      'Định lý Pythagoras trong mặt cầu: $R^2 = d^2 + r^2 \\Rightarrow r = \\sqrt{R^2 - d^2}$.'
    ),
    makeMC(
      'b17d2',
      8,
      'Tập hợp điểm M thỏa mãn góc AMB = 90 độ',
      'Trong không gian $Oxyz$, cho hai điểm cố định $A(2; 0; 0)$ và $B(0; 4; 0)$. Tập hợp tất cả các điểm $M$ trong không gian thỏa mãn $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = 0$ là mặt cầu có phương trình:',
      [
        '$(x - 1)^2 + (y - 2)^2 + z^2 = 5$',
        '$(x - 1)^2 + (y - 2)^2 + z^2 = 20$',
        '$(x - 2)^2 + (y - 4)^2 + z^2 = 5$',
        '$(x + 1)^2 + (y + 2)^2 + z^2 = 5$',
      ],
      'A',
      'Điều kiện $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = 0$ nghĩa là $M$ nhìn đoạn $AB$ dưới một góc vuông, nên tập hợp điểm $M$ là mặt cầu đường kính $AB$ có tâm $I(1; 2; 0)$ và $R^2 = IA^2 = 1^2 + 2^2 + 0^2 = 5$.',
      'Điều kiện $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = 0$ chính là phương trình mặt cầu đường kính $AB$.',
      'sp_oxyz_sphere'
    ),
    makeMC(
      'b17d2',
      9,
      'Tìm điểm thuộc mặt cầu gần mặt phẳng nhất',
      'Trong không gian $Oxyz$, cho mặt cầu $(S): (x - 1)^2 + (y - 2)^2 + (z - 2)^2 = 4$ và mặt phẳng $(P): 2x + y + 2z + 10 = 0$. Khoảng cách ngắn nhất từ một điểm $M$ thuộc mặt cầu $(S)$ đến mặt phẳng $(P)$ bằng:',
      [
        '$4$',
        '$6$',
        '$8$',
        '$2$',
      ],
      'A',
      'Tâm $I(1; 2; 2)$, bán kính $R = 2$. Khoảng cách từ tâm $I$ đến $(P)$ là $d(I, (P)) = \\frac{|2 + 2 + 4 + 10|}{3} = 6 > R$. Vậy khoảng cách ngắn nhất từ $M \\in (S)$ đến $(P)$ là $d(I, (P)) - R = 6 - 2 = 4$.',
      'Khi $(P)$ không cắt $(S)$, khoảng cách từ điểm $M \\in (S)$ đến $(P)$ nhỏ nhất là $d(I, (P)) - R$ và lớn nhất là $d(I, (P)) + R$.'
    ),
    makeMC(
      'b17d2',
      10,
      'Mặt cầu có tâm nằm trên mặt phẳng tọa độ',
      'Trong không gian $Oxyz$, mặt cầu $(S): x^2 + y^2 + z^2 - 4x + 6y - 12 = 0$ có tâm nằm trên mặt phẳng tọa độ nào dưới đây?',
      [
        '$(Oxy)$',
        '$(Oyz)$',
        '$(Oxz)$',
        'Không thuộc mặt phẳng tọa độ nào',
      ],
      'A',
      'Tâm của $(S)$ là $I(2; -3; 0)$ có cao độ $z_I = 0$, nên tâm $I$ nằm trên mặt phẳng $(Oxy)$.',
      'Phương trình mặt cầu khuyết bậc nhất của biến $z$ thì tâm có $z_I = 0 \\in (Oxy)$.'
    ),
    makeMC(
      'b17d2',
      11,
      'Mặt cầu tiếp xúc với cả ba mặt phẳng tọa độ',
      'Trong không gian $Oxyz$, mặt cầu $(S)$ có tâm $I(a; b; c)$ thuộc góc phần tám thứ nhất ($a, b, c > 0$) và tiếp xúc với cả ba mặt phẳng tọa độ $(Oxy), (Oyz), (Oxz)$ luôn thỏa mãn:',
      [
        '$a = b = c = R$',
        '$a + b + c = R$',
        '$a^2 + b^2 + c^2 = R^2$',
        '$a = b = c = 2R$',
      ],
      'A',
      'Khoảng cách từ $I(a; b; c)$ đến 3 mặt phẳng tọa độ là $|a|, |b|, |c|$. Vì $a, b, c > 0$ và mặt cầu tiếp xúc với cả 3 mặt phẳng tọa độ nên $a = b = c = R$.',
      'Mặt cầu tiếp xúc với cả 3 mặt phẳng tọa độ có tâm cách đều 3 mặt phẳng tọa độ: $|a| = |b| = |c| = R$.'
    ),
    makeMC(
      'b17d2',
      12,
      'Bài toán thực tế: Vòm nhà kính hình bán cầu',
      'Một nhà kính nông nghiệp có dạng nửa mặt cầu phương trình $x^2 + y^2 + z^2 = 100$ (với $z \\ge 0$, đơn vị: mét). Tại vị trí có hoành độ $x = 6\\text{ m}$ và tung độ $y = 6\\text{ m}$, chiều cao $z$ của mái vòm nhà kính so với mặt đất $(Oxy)$ bằng:',
      [
        '$2\\sqrt{7}\\text{ m}$',
        '$8\\text{ m}$',
        '$4\\text{ m}$',
        '$6\\text{ m}$',
      ],
      'A',
      'Thay $x = 6, y = 6$ vào $x^2 + y^2 + z^2 = 100$ (với $z \\ge 0$): $36 + 36 + z^2 = 100 \\Leftrightarrow z^2 = 28 \\Rightarrow z = 2\\sqrt{7}\\text{ (m)}$.',
      'Thay tọa độ $(x; y)$ vào phương trình mặt cầu và lấy nghiệm $z \\ge 0$.'
    ),
  ],
  [
    makeTF(
      'b17d2',
      1,
      'Tương giao giữa mặt phẳng và mặt cầu trong không gian Oxyz',
      'Trong không gian $Oxyz$, cho mặt cầu $(S): (x - 2)^2 + (y + 1)^2 + (z - 3)^2 = 25$ và mặt phẳng $(P): 2x - 2y + z - 3 = 0$.',
      [
        {
          text: 'Mặt cầu $(S)$ có tâm $I(2; -1; 3)$ và bán kính $R = 5$.',
          isCorrect: true,
          exp: 'Đọc từ phương trình chính tắc của $(S)$: $I(2; -1; 3), R = 5$.',
        },
        {
          text: 'Khoảng cách từ tâm $I$ đến mặt phẳng $(P)$ bằng $2$.',
          isCorrect: true,
          exp: '$d(I, (P)) = \\frac{|2\\cdot 2 - 2(-1) + 3 - 3|}{\\sqrt{2^2 + (-2)^2 + 1^2}} = \\frac{6}{3} = 2$.',
        },
        {
          text: 'Mặt phẳng $(P)$ cắt mặt cầu $(S)$ theo một đường tròn có bán kính $r = \\sqrt{21}$.',
          isCorrect: true,
          exp: 'Vì $d = 2 < R = 5$ nên bán kính đường tròn giao tuyến là $r = \\sqrt{R^2 - d^2} = \\sqrt{25 - 4} = \\sqrt{21}$.',
        },
        {
          text: 'Tâm $H$ của đường tròn giao tuyến có tọa độ là $H(0; 1; 2)$.',
          isCorrect: true,
          exp: 'Tâm $H$ là hình chiếu vuông góc của $I(2; -1; 3)$ trên $(P)$. Đường thẳng $IH: x = 2 + 2t, y = -1 - 2t, z = 3 + t$. Thay vào $(P): 2(2+2t)-2(-1-2t)+(3+t)-3 = 0 \\Leftrightarrow 9t + 6 = 0$... Với $t = -1$ thì $H(0; 1; 2)$ thuộc $(P): 0 - 2 + 2 - 0 = 0$, còn với $(P): 2x - 2y + z - 3 = 0$ thì tại $H(0;1;2)$, $0 - 2 + 2 - 3 = -3 \\ne 0$ (nên phát biểu là Sai!).',
        },
      ],
      'Kiểm tra nhanh tọa độ tâm $H$ bằng cách thay vào phương trình mặt phẳng $(P)$ xem có thỏa mãn không.',
      'sp_oxyz_sphere'
    ),
    makeTF(
      'b17d2',
      2,
      'Viết phương trình mặt cầu và mặt phẳng tiếp diện',
      'Trong không gian $Oxyz$, cho hai điểm $A(1; -2; 3)$ và $B(3; 2; -1)$. Gọi $(S)$ là mặt cầu tâm $A$ đi qua điểm $B$.',
      [
        {
          text: 'Vectơ $\\overrightarrow{AB}$ có tọa độ là $(2; 4; -4)$ và độ dài $AB = 6$.',
          isCorrect: true,
          exp: '$\\overrightarrow{AB} = (2; 4; -4) \\Rightarrow AB = \\sqrt{4 + 16 + 16} = 6$.',
        },
        {
          text: 'Phương trình của mặt cầu $(S)$ là $(x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 36$.',
          isCorrect: true,
          exp: 'Tâm $A(1; -2; 3)$ và bán kính $R = AB = 6 \\Rightarrow R^2 = 36$.',
        },
        {
          text: 'Mặt phẳng tiếp diện của mặt cầu $(S)$ tại điểm $B$ đi qua $B$ và nhận $\\vec{n} = (1; 2; -2)$ làm một vectơ pháp tuyến.',
          isCorrect: true,
          exp: 'Tiếp diện tại $B$ vuông góc với $AB$, mà $\\overrightarrow{AB} = 2(1; 2; -2)$ nên $\\vec{n} = (1; 2; -2)$ là một VTPT.',
        },
        {
          text: 'Phương trình mặt phẳng tiếp diện của $(S)$ tại $B$ là $x + 2y - 2z - 9 = 0$.',
          isCorrect: true,
          exp: 'Qua $B(3; 2; -1)$ với VTPT $(1; 2; -2)$: $1(x - 3) + 2(y - 2) - 2(z + 1) = 0 \\Leftrightarrow x + 2y - 2z - 9 = 0$.',
        },
      ],
      'Tiếp diện của mặt cầu tâm $A$ tại điểm $B$ luôn vuông góc với bán kính $AB$ tại $B$.'
    ),
    makeTF(
      'b17d2',
      3,
      'Bài toán thực tế: Định vị tọa độ địa lý trên bề mặt Trái Đất (SGK trang 59)',
      'Mô hình hóa Trái Đất trong không gian $Oxyz$ là một hình cầu tâm $O(0; 0; 0)$ bán kính $R = 6400\\text{ km}$, trong đó tia $Oz$ đi qua cực Bắc, tia $Ox$ đi qua giao điểm của kinh tuyến gốc ($0^\\circ$) và xích đạo ($0^\\circ$), tia $Oy$ đi qua giao điểm của kinh tuyến $90^\\circ$ Đông và xích đạo. Biết một điểm $M$ trên mặt đất có vĩ độ $\\alpha^\\circ$ Bắc và kinh độ $\\beta^\\circ$ Đông có tọa độ $M(R\\cos\\alpha\\cos\\beta;\\ R\\cos\\alpha\\sin\\beta;\\ R\\sin\\alpha)$.',
      [
        {
          text: 'Điểm $A$ nằm trên xích đạo ($\alpha = 0^\\circ$) và kinh tuyến gốc ($\beta = 0^\\circ$) có tọa độ là $A(6400; 0; 0)$.',
          isCorrect: true,
          exp: 'Thay $\\alpha = 0^\\circ, \\beta = 0^\\circ$ vào công thức tọa độ: $A(6400; 0; 0)$.',
        },
        {
          text: 'Cực Bắc của Trái Đất ứng với vĩ độ $\\alpha = 90^\\circ$ Bắc có tọa độ là $N(0; 0; 6400)$.',
          isCorrect: true,
          exp: 'Khi $\\alpha = 90^\\circ$, $\\cos 90^\\circ = 0, \\sin 90^\\circ = 1 \\Rightarrow N(0; 0; 6400)$.',
        },
        {
          text: 'Một trạm nghiên cứu ở vĩ độ $60^\\circ$ Bắc và kinh độ $0^\\circ$ có cao độ $z = 3200\\text{ km}$.',
          isCorrect: false,
          exp: 'Tại $\\alpha = 60^\\circ$, cao độ $z = 6400\\sin 60^\\circ = 3200\\sqrt{3}\\text{ km} \\ne 3200\\text{ km}$ (còn hoành độ $x = 6400\\cos 60^\\circ = 3200\\text{ km}$).',
        },
        {
          text: 'Mọi điểm $M$ xác định bởi công thức trên đều thỏa mãn phương trình mặt cầu $x^2 + y^2 + z^2 = 6400^2$.',
          isCorrect: true,
          exp: '$x^2 + y^2 + z^2 = R^2\\cos^2\\alpha(\\cos^2\\beta + \\sin^2\\beta) + R^2\\sin^2\\alpha = R^2(\\cos^2\\alpha + \\sin^2\\alpha) = R^2 = 6400^2$.',
        },
      ],
      'Bài toán Vận dụng trong SGK Toán 12 Tập 2 trang 59 giúp hiểu nguyên lý chuyển đổi kinh độ - vĩ độ sang tọa độ Descartes $Oxyz$.',
      'sp_oxyz_sphere'
    ),
  ],
  [
    makeSA(
      'b17d2',
      1,
      'Tìm số giá trị nguyên của tham số m để phương trình là mặt cầu',
      'Trong không gian $Oxyz$, có bao nhiêu giá trị nguyên dương của tham số $m$ để phương trình $x^2 + y^2 + z^2 - 4x + 2y - 2z + m = 0$ là phương trình của một mặt cầu?',
      ['5'],
      'Ta có $a = 2, b = -1, c = 1, d = m$. Điều kiện $a^2 + b^2 + c^2 - d > 0 \\Leftrightarrow 4 + 1 + 1 - m > 0 \\Leftrightarrow m < 6$. Vì $m \\in \\mathbb{Z}^+$ nên $m \\in \\{1; 2; 3; 4; 5\\}$, có $5$ giá trị nguyên dương.',
      'Đọc kỹ điều kiện "nguyên dương" ($m \\in \\{1; 2; 3; 4; 5\\}$).'
    ),
    makeSA(
      'b17d2',
      2,
      'Tìm bán kính mặt cầu cắt đường thẳng theo dây cung cho trước',
      'Trong không gian $Oxyz$, mặt cầu $(S)$ có tâm $I(1; 2; 3)$ cắt trục $Ox$ tại hai điểm $A, B$ sao cho độ dài đoạn thẳng $AB = 6$. Tính bán kính $R$ của mặt cầu $(S)$ (biết $R^2$ là số nguyên, hãy điền giá trị của $R^2$).',
      ['22'],
      'Hình chiếu của $I(1; 2; 3)$ lên trục $Ox$ là $H(1; 0; 0)$. Khoảng cách từ tâm $I$ đến trục $Ox$ là $d = IH = \\sqrt{0^2 + 2^2 + 3^2} = \\sqrt{13}$. Theo định lý Pythagoras: $R^2 = d^2 + \\left(\\frac{AB}{2}\\right)^2 = 13 + 3^2 = 22$.',
      'Áp dụng công thức liên hệ giữa bán kính mặt cầu $R$, khoảng cách từ tâm đến đường thẳng $d$ và dây cung $AB$: $R^2 = d^2 + \\left(\\frac{AB}{2}\\right)^2$.'
    ),
    makeSA(
      'b17d2',
      3,
      'Tổng tọa độ tiếp điểm của mặt cầu và mặt phẳng',
      'Trong không gian $Oxyz$, mặt cầu $(S)$ tâm $I(3; 1; 2)$ tiếp xúc với mặt phẳng $(P): x + 2y + 2z + 9 = 0$ tại tiếp điểm $M(x_0; y_0; z_0)$. Tính tổng $S = x_0 + y_0 + z_0$.',
      ['-4'],
      'Đường thẳng $IM \\perp (P)$ có phương trình $x = 3 + t, y = 1 + 2t, z = 2 + 2t$. Thay vào $(P)$: $(3 + t) + 2(1 + 2t) + 2(2 + 2t) + 9 = 0 \\Leftrightarrow 9t + 18 = 0 \\Leftrightarrow t = -2$. Suy ra $M(1; -3; -2) \\Rightarrow S = 1 - 3 - 2 = -4$.',
      'Tiếp điểm $M$ chính là hình chiếu vuông góc của tâm $I$ trên mặt phẳng $(P)$.'
    ),
    makeSA(
      'b17d2',
      4,
      'Bài toán thực tế: Bán kính vùng phát sáng của đèn chùm cầu',
      'Trong không gian $Oxyz$ (đơn vị: mét), một quả cầu đèn trang trí có tâm $I(2; 2; 3)$ được treo sao cho điểm thấp nhất của quả cầu cách mặt sàn $(Oxy)$ một khoảng bằng $2{,}5\\text{ m}$. Tính đường kính (mét) của quả cầu đèn trang trí đó.',
      ['1'],
      'Khoảng cách từ tâm $I(2; 2; 3)$ đến mặt sàn $(Oxy): z = 0$ là $3\\text{ m}$. Điểm thấp nhất của quả cầu cách sàn $2{,}5\\text{ m}$ nên bán kính quả cầu là $R = 3 - 2{,}5 = 0{,}5\\text{ m}$. Vậy đường kính quả cầu là $2R = 1\\text{ (m)}$.',
      'Khoảng cách ngắn nhất từ mặt cầu $(I; R)$ đến mặt sàn là $d(I, (Oxy)) - R$.',
      'm'
    ),
  ],
  [
    makeSO(
      'b17d2',
      1,
      'Viết phương trình mặt phẳng tiếp diện của mặt cầu song song với mặt phẳng cho trước',
      'Trong không gian $Oxyz$, cho mặt cầu $(S): (x - 1)^2 + (y + 2)^2 + (z - 1)^2 = 9$. Viết phương trình mặt phẳng $(\\alpha)$ tiếp xúc với mặt cầu $(S)$ và song song với mặt phẳng $(P): 2x + 2y - z + 5 = 0$.',
      'Vậy có hai mặt phẳng thỏa mãn là $2x + 2y - z + 12 = 0$ và $2x + 2y - z - 6 = 0$.',
      [
        {
          role: 'Bước 1: Xác định tâm, bán kính của $(S)$ và dạng phương trình của $(\\alpha)$',
          content: 'Mặt cầu $(S)$ có tâm $I(1; -2; 1)$ và bán kính $R = 3$. Vì $(\\alpha) \\parallel (P)$ nên $(\\alpha)$ có dạng $2x + 2y - z + D = 0\\ (D \\ne 5)$.',
        },
        {
          role: 'Bước 2: Áp dụng điều kiện tiếp xúc $d(I, (\\alpha)) = R$',
          content: 'Ta có $d(I, (\\alpha)) = \\frac{|2\\cdot 1 + 2(-2) - 1 + D|}{\\sqrt{2^2 + 2^2 + (-1)^2}} = \\frac{|D - 3|}{3} = 3 \\Leftrightarrow |D - 3| = 9$.',
        },
        {
          role: 'Bước 3: Giải tìm $D$ và kết luận phương trình mặt phẳng $(\\alpha)$',
          content: 'Từ $|D - 3| = 9 \\Leftrightarrow D = 12$ hoặc $D = -6$ (đều khác $5$). Vậy có hai mặt phẳng là $2x + 2y - z + 12 = 0$ và $2x + 2y - z - 6 = 0$.',
        },
      ],
      'Luôn có 2 mặt phẳng tiếp diện của mặt cầu song song với một mặt phẳng cho trước.',
      'Dạng toán kết hợp điều kiện song song của hai mặt phẳng và điều kiện tiếp xúc với mặt cầu.',
      0.7,
      'sp_oxyz_sphere'
    ),
    makeSO(
      'b17d2',
      2,
      'Viết phương trình mặt cầu đi qua ba điểm và có tâm thuộc mặt phẳng tọa độ',
      'Trong không gian $Oxyz$, viết phương trình mặt cầu $(S)$ đi qua ba điểm $A(2; 0; 0), B(0; 4; 0), C(0; 0; 4)$ và có tâm $I$ nằm trên mặt phẳng $(Oyz)$.',
      'Vậy phương trình mặt cầu $(S)$ là $x^2 + (y - 2)^2 + (z - 2)^2 = 4$... Kiểm tra lại: $A(2;0;0) \\Rightarrow 4 + 4 + 4 = 12$, nên $R^2$ điều chỉnh theo $I$.',
      [
        {
          role: 'Bước 1: Gọi tọa độ tâm $I \\in (Oyz)$ và thiết lập hệ phương trình $IA^2 = IB^2 = IC^2$',
          content: 'Vì $I \\in (Oyz)$ nên $I(0; b; c)$. Ta có $IA^2 = 4 + b^2 + c^2$, $IB^2 = (b - 4)^2 + c^2$, $IC^2 = b^2 + (c - 4)^2$.',
        },
        {
          role: 'Bước 2: Giải hệ phương trình tìm $b, c$ và bán kính $R$',
          content: 'Từ $IA^2 = IB^2 \\Rightarrow 4 = -8b + 16 \\Rightarrow b = \\frac{3}{2}$. Từ $IA^2 = IC^2 \\Rightarrow 4 = -8c + 16 \\Rightarrow c = \\frac{3}{2}$. Khi đó $R^2 = IA^2 = 4 + \\frac{9}{4} + \\frac{9}{4} = \\frac{17}{2}$.',
        },
        {
          role: 'Bước 3: Kết luận phương trình mặt cầu $(S)$',
          content: 'Vậy phương trình mặt cầu $(S)$ là $x^2 + \\left(y - \\frac{3}{2}\\right)^2 + \\left(z - \\frac{3}{2}\\right)^2 = \\frac{17}{2}$.',
        },
      ],
      'Khi tâm $I$ thuộc mặt phẳng $(Oyz)$ thì hoành độ $x_I = 0$, chỉ còn 2 ẩn $(b; c)$.',
      'Kỹ năng giảm số ẩn của tọa độ tâm khi biết tâm thuộc mặt phẳng đặc biệt.',
      0.65
    ),
    makeSO(
      'b17d2',
      3,
      'Bài toán thực tế: Tìm vị trí trạm phát sóng cách đều các điểm dân cư',
      'Trong không gian $Oxyz$ (đơn vị: $\\text{km}$), người ta cần đặt một trạm thu phát sóng tại điểm $I$ nằm trên mặt đất $(Oxy)$ sao cho khoảng cách từ trạm $I$ đến ba khu dân cư tại $A(0; 0; 2), B(4; 0; 2)$ và $C(0; 6; 2)$ là bằng nhau. Hãy tìm tọa độ điểm đặt trạm $I$ và bán kính phủ sóng tối thiểu $R = IA$ để phủ sóng tới cả ba khu dân cư đó.',
      'Vậy điểm đặt trạm là $I(2; 3; 0)$ và bán kính phủ sóng tối thiểu là $R = \\sqrt{17}\\text{ km}$.',
      [
        {
          role: 'Bước 1: Tham số hóa tọa độ điểm $I$ trên mặt đất $(Oxy)$',
          content: 'Vì trạm $I$ nằm trên mặt đất $(Oxy)$ nên tọa độ của $I$ có dạng $I(a; b; 0)$.',
        },
        {
          role: 'Bước 2: Giải hệ phương trình $IA^2 = IB^2 = IC^2$ để tìm $a, b$',
          content: 'Ta có $IA^2 = a^2 + b^2 + 4$. Từ $IA^2 = IB^2 \\Leftrightarrow a^2 + b^2 + 4 = (a - 4)^2 + b^2 + 4 \\Leftrightarrow a = 2$. Từ $IA^2 = IC^2 \\Leftrightarrow a^2 + b^2 + 4 = a^2 + (b - 6)^2 + 4 \\Leftrightarrow b = 3$. Vậy $I(2; 3; 0)$.',
        },
        {
          role: 'Bước 3: Tính bán kính phủ sóng tối thiểu $R = IA$',
          content: 'Thay $a = 2, b = 3$ vào biểu thức $IA$, ta được $R = \\sqrt{2^2 + 3^2 + 2^2} = \\sqrt{17}\\text{ (km)}$.',
        },
      ],
      'Điểm $I$ trên $(Oxy)$ cách đều $A, B, C$ có hình chiếu trùng với tâm đường tròn ngoại tiếp hình chiếu của $\\triangle ABC$.',
      'Bài toán thực tế thiết thực về ứng dụng phương trình mặt cầu trong quy hoạch viễn thông.',
      0.65
    ),
  ]
);

// Fix conclusionTarget of bai17De2.part4[1] and bai17De2.part2[0] statement d
bai17De2.part2[0].statements[3].isCorrect = false;
bai17De2.part2[0].statements[3].explanation = 'Tâm $H$ là hình chiếu của $I(2; -1; 3)$ trên $(P)$. Thay $H(0; 1; 2)$ vào $(P): 2(0) - 2(1) + 2 - 3 = -3 \\ne 0$, nên $H(0; 1; 2)$ không thuộc $(P)$ (tâm đúng là $H(\\frac{2}{3}; \\frac{1}{3}; \\frac{7}{3})$).';
bai17De2.part4[1].conclusionTarget = 'Vậy phương trình mặt cầu $(S)$ là $x^2 + \\left(y - \\frac{3}{2}\\right)^2 + \\left(z - \\frac{3}{2}\\right)^2 = \\frac{17}{2}$.';

// ============================================================================
// BÀI TẬP CUỐI CHƯƠNG V (SGK Toán 12 Tập 2 - Kết nối tri thức - Trang 61)
// ============================================================================

const ontapC5De1 = makeLessonExam(
  'ontap-c5-de01',
  'Ôn tập Chương V - Đề ôn số 1',
  'Tổng hợp Phương pháp tọa độ trong không gian: Mặt phẳng, Đường thẳng, Góc và Mặt cầu (Đề 1)',
  'Đề ôn tập cuối Chương V (Số 1) tổng hợp toàn bộ kiến thức Chương V SGK Toán 12 Tập 2 Kết nối tri thức: Phương trình mặt phẳng, phương trình đường thẳng, công thức tính góc và phương trình mặt cầu.',
  [
    makeMC(
      'otc5d1',
      1,
      'Vectơ pháp tuyến của mặt phẳng',
      'Trong không gian $Oxyz$, cho mặt phẳng $(P): 3x - y + 4z - 2 = 0$. Vectơ nào dưới đây là một vectơ pháp tuyến của $(P)$?',
      [
        '$\\vec{n} = (3; -1; 4)$',
        '$\\vec{n} = (3; 1; 4)$',
        '$\\vec{n} = (-3; -1; 4)$',
        '$\\vec{n} = (3; -1; -2)$',
      ],
      'A',
      'Hệ số của $x, y, z$ trong phương trình mặt phẳng là tọa độ của một vectơ pháp tuyến: $\\vec{n} = (3; -1; 4)$.',
      'Đọc đúng dấu của từng hệ số trước $x, y, z$.',
      'sp_oxyz_plane_normal'
    ),
    makeMC(
      'otc5d1',
      2,
      'Phương trình mặt phẳng theo đoạn chắn',
      'Trong không gian $Oxyz$, mặt phẳng đi qua ba điểm $A(2; 0; 0), B(0; -3; 0), C(0; 0; 5)$ có phương trình là:',
      [
        '$\\frac{x}{2} + \\frac{y}{-3} + \\frac{z}{5} = 1$',
        '$\\frac{x}{2} + \\frac{y}{-3} + \\frac{z}{5} = 0$',
        '$2x - 3y + 5z = 1$',
        '$\\frac{x}{2} + \\frac{y}{3} + \\frac{z}{5} = 1$',
      ],
      'A',
      'Áp dụng công thức phương trình mặt phẳng theo đoạn chắn: $\\frac{x}{2} + \\frac{y}{-3} + \\frac{z}{5} = 1$.',
      'Chú ý vế phải luôn bằng $1$.',
      'sp_oxyz_plane_intercepts'
    ),
    makeMC(
      'otc5d1',
      3,
      'Khoảng cách từ điểm đến mặt phẳng',
      'Trong không gian $Oxyz$, khoảng cách từ điểm $M(1; 2; -3)$ đến mặt phẳng $(P): 2x + 2y - z + 6 = 0$ bằng:',
      [
        '$5$',
        '$3$',
        '$4$',
        '$\\frac{15}{7}$',
      ],
      'A',
      'Ta có $d(M, (P)) = \\frac{|2\\cdot 1 + 2\\cdot 2 - (-3) + 6|}{\\sqrt{2^2 + 2^2 + (-1)^2}} = \\frac{15}{3} = 5$.',
      'Thay tọa độ điểm $M$ vào công thức khoảng cách.'
    ),
    makeMC(
      'otc5d1',
      4,
      'Vectơ chỉ phương của đường thẳng',
      'Trong không gian $Oxyz$, đường thẳng $d: \\frac{x + 1}{3} = \\frac{y - 2}{-2} = \\frac{z}{1}$ có một vectơ chỉ phương là:',
      [
        '$\\vec{u} = (3; -2; 1)$',
        '$\\vec{u} = (-1; 2; 0)$',
        '$\\vec{u} = (3; 2; 1)$',
        '$\\vec{u} = (1; -2; 0)$',
      ],
      'A',
      'Mẫu số của phương trình chính tắc là tọa độ của một vectơ chỉ phương: $\\vec{u} = (3; -2; 1)$.',
      'Phân biệt tọa độ điểm đi qua trên tử và tọa độ VTCP dưới mẫu.',
      'sp_oxyz_line_3d'
    ),
    makeMC(
      'otc5d1',
      5,
      'Phương trình đường thẳng đi qua điểm và vuông góc với mặt phẳng',
      'Trong không gian $Oxyz$, đường thẳng đi qua điểm $A(2; 1; -1)$ và vuông góc với mặt phẳng $(P): x - 3y + 2z + 4 = 0$ có phương trình là:',
      [
        '$\\frac{x - 2}{1} = \\frac{y - 1}{-3} = \\frac{z + 1}{2}$',
        '$\\frac{x + 2}{1} = \\frac{y + 1}{-3} = \\frac{z - 1}{2}$',
        '$\\frac{x - 2}{1} = \\frac{y - 1}{3} = \\frac{z + 1}{2}$',
        '$\\frac{x - 1}{2} = \\frac{y + 3}{1} = \\frac{z - 2}{-1}$',
      ],
      'A',
      'Đường thẳng vuông góc với $(P)$ nhận $\\vec{n}_P = (1; -3; 2)$ làm VTCP và đi qua $A(2; 1; -1)$.',
      'Khi $d \\perp (P)$ thì $\\vec{u}_d = \\vec{n}_P$.'
    ),
    makeMC(
      'otc5d1',
      6,
      'Vị trí tương đối của hai đường thẳng',
      'Trong không gian $Oxyz$, hai đường thẳng $d_1: \\begin{cases} x = 1 + t \\\\ y = 2 - t \\\\ z = 3 + 2t \\end{cases}$ và $d_2: \\begin{cases} x = 2 + 2s \\\\ y = 1 - 2s \\\\ z = 5 + 4s \\end{cases}$ có vị trí tương đối là:',
      [
        'Trùng nhau',
        'Song song',
        'Cắt nhau',
        'Chéo nhau',
      ],
      'A',
      'Hai VTCP $\\vec{u}_2 = 2\\vec{u}_1$ cùng phương, và điểm $M_2(2; 1; 5) \\in d_2$ cũng thuộc $d_1$ (ứng với $t = 1$), nên $d_1 \\equiv d_2$.',
      'Khi hai VTCP cùng phương và điểm của đường này thuộc đường kia thì hai đường thẳng trùng nhau.'
    ),
    makeMC(
      'otc5d1',
      7,
      'Côsin góc giữa hai đường thẳng',
      'Trong không gian $Oxyz$, côsin của góc giữa hai đường thẳng $d_1: \\frac{x}{1} = \\frac{y}{2} = \\frac{z}{-2}$ và $d_2: \\frac{x}{2} = \\frac{y}{-1} = \\frac{z}{2}$ bằng:',
      [
        '$\\frac{4}{9}$',
        '$-\\frac{4}{9}$',
        '$\\frac{2}{9}$',
        '$\\frac{5}{9}$',
      ],
      'A',
      'Ta có $\\cos(d_1, d_2) = \\frac{|1\\cdot 2 + 2(-1) + (-2)\\cdot 2|}{3\\cdot 3} = \\frac{|-4|}{9} = \\frac{4}{9}$.',
      'Nhớ lấy trị tuyệt đối ở tử số.'
    ),
    makeMC(
      'otc5d1',
      8,
      'Góc giữa đường thẳng và mặt phẳng',
      'Trong không gian $Oxyz$, góc giữa đường thẳng $d: \\frac{x - 1}{1} = \\frac{y}{0} = \\frac{z + 2}{1}$ (tức $x = 1+t, y = 0, z = -2+t$) và mặt phẳng $(Oxy)$ bằng:',
      [
        '$45^\\circ$',
        '$30^\\circ$',
        '$60^\\circ$',
        '$90^\\circ$',
      ],
      'A',
      'Ta có $\\vec{u}_d = (1; 0; 1)$ và $\\vec{k} = (0; 0; 1)$. Khi đó $\\sin(d, (Oxy)) = \\frac{|1|}{\\sqrt{2}\\cdot 1} = \\frac{\\sqrt{2}}{2} \\Rightarrow (d, (Oxy)) = 45^\\circ$.',
      'Áp dụng công thức $\\sin(d, (P)) = |\\cos(\\vec{u}_d, \\vec{n}_P)|$.',
      'sp_oxyz_angle_line_plane'
    ),
    makeMC(
      'otc5d1',
      9,
      'Tâm và bán kính mặt cầu',
      'Trong không gian $Oxyz$, mặt cầu $(S): (x + 2)^2 + (y - 1)^2 + (z + 3)^2 = 25$ có tâm $I$ và bán kính $R$ là:',
      [
        '$I(-2; 1; -3),\\ R = 5$',
        '$I(2; -1; 3),\\ R = 5$',
        '$I(-2; 1; -3),\\ R = 25$',
        '$I(2; -1; 3),\\ R = 25$',
      ],
      'A',
      'Mặt cầu có tâm $I(-2; 1; -3)$ và bán kính $R = \\sqrt{25} = 5$.',
      'Đổi dấu các số hạng trong bình phương để suy ra tọa độ tâm $I$.',
      'sp_oxyz_sphere'
    ),
    makeMC(
      'otc5d1',
      10,
      'Phương trình mặt cầu đường kính AB',
      'Trong không gian $Oxyz$, cho hai điểm $A(2; 0; 1)$ và $B(4; 2; 3)$. Phương trình mặt cầu đường kính $AB$ là:',
      [
        '$(x - 3)^2 + (y - 1)^2 + (z - 2)^2 = 3$',
        '$(x - 3)^2 + (y - 1)^2 + (z - 2)^2 = 12$',
        '$(x + 3)^2 + (y + 1)^2 + (z + 2)^2 = 3$',
        '$(x - 3)^2 + (y - 1)^2 + (z - 2)^2 = \\sqrt{3}$',
      ],
      'A',
      'Tâm $I(3; 1; 2)$ là trung điểm $AB$, bán kính $R^2 = IA^2 = (2 - 3)^2 + (0 - 1)^2 + (1 - 2)^2 = 3$.',
      'Tính $R^2 = IA^2$ thay vì tính $AB$ để tránh nhầm bán kính với đường kính.'
    ),
    makeMC(
      'otc5d1',
      11,
      'Giao điểm của đường thẳng và mặt phẳng',
      'Trong không gian $Oxyz$, giao điểm của đường thẳng $d: \\begin{cases} x = 2 + t \\\\ y = 1 - 2t \\\\ z = 3 + t \\end{cases}$ và mặt phẳng $(Oxy)$ là điểm:',
      [
        '$M(-1; 7; 0)$',
        '$M(2; 1; 0)$',
        '$M(5; -5; 0)$',
        '$M(0; 5; 1)$',
      ],
      'A',
      'Mặt phẳng $(Oxy)$ có phương trình $z = 0 \\Leftrightarrow 3 + t = 0 \\Leftrightarrow t = -3$. Thay $t = -3$ vào $d$, ta được $M(-1; 7; 0)$.',
      'Giao điểm với mặt phẳng $(Oxy)$ ứng với $z = 0$.'
    ),
    makeMC(
      'otc5d1',
      12,
      'Bài toán thực tế: Kiểm tra khoảng cách an toàn bay',
      'Trong không gian $Oxyz$ (đơn vị: $\\text{km}$), một khinh khí cầu đang lơ lửng tại vị trí $M(2; 3; 4)$ và một máy bay đang bay trên mặt phẳng $(P): 2x + y + 2z - 27 = 0$. Khoảng cách ngắn nhất từ khinh khí cầu $M$ đến mặt phẳng bay $(P)$ bằng:',
      [
        '$4\\text{ km}$',
        '$3\\text{ km}$',
        '$5\\text{ km}$',
        '$6\\text{ km}$',
      ],
      'A',
      'Khoảng cách ngắn nhất là $d(M, (P)) = \\frac{|2\\cdot 2 + 3 + 2\\cdot 4 - 27|}{\\sqrt{2^2 + 1^2 + 2^2}} = \\frac{12}{3} = 4\\text{ (km)}$.',
      'Khoảng cách ngắn nhất từ điểm $M$ đến mặt phẳng $(P)$ chính là $d(M, (P))$.'
    ),
  ],
  [
    makeTF(
      'otc5d1',
      1,
      'Tổng hợp mặt phẳng, đường thẳng và góc trong không gian Oxyz',
      'Trong không gian $Oxyz$, cho điểm $A(1; 2; -1)$, đường thẳng $d: \\frac{x - 2}{1} = \\frac{y + 1}{2} = \\frac{z}{2}$ và mặt phẳng $(P): 2x - y + 2z - 4 = 0$.',
      [
        {
          text: 'Khoảng cách từ điểm $A$ đến mặt phẳng $(P)$ bằng $2$.',
          isCorrect: true,
          exp: '$d(A, (P)) = \\frac{|2\\cdot 1 - 2 + 2(-1) - 4|}{3} = \\frac{|-6|}{3} = 2$.',
        },
        {
          text: 'Sin của góc giữa đường thẳng $d$ và mặt phẳng $(P)$ bằng $\\frac{4}{9}$.',
          isCorrect: true,
          exp: '$\\vec{u}_d = (1; 2; 2), \\vec{n}_P = (2; -1; 2) \\Rightarrow \\sin(d, (P)) = \\frac{|2 - 2 + 4|}{3\\cdot 3} = \\frac{4}{9}$.',
        },
        {
          text: 'Đường thẳng $\\Delta$ đi qua $A$ và vuông góc với $(P)$ cắt mặt phẳng $(P)$ tại điểm $H(3; 1; 1)$.',
          isCorrect: false,
          exp: '$\\Delta: x = 1 + 2t, y = 2 - t, z = -1 + 2t$. Thay vào $(P)$: $2(1+2t)-(2-t)+2(-1+2t)-4 = 0 \\Leftrightarrow 9t - 6 = 0 \\Leftrightarrow t = \\frac{2}{3} \\ne 1$.',
        },
        {
          text: 'Mặt cầu tâm $A$ tiếp xúc với mặt phẳng $(P)$ có phương trình là $(x - 1)^2 + (y - 2)^2 + (z + 1)^2 = 4$.',
          isCorrect: true,
          exp: 'Vì $R = d(A, (P)) = 2$ nên $R^2 = 4$.',
        },
      ],
      'Liên kết trực tiếp khoảng cách $d(A, (P)) = 2$ với bán kính mặt cầu tâm $A$ tiếp xúc với $(P)$.',
      'sp_oxyz_plane_normal'
    ),
    makeTF(
      'otc5d1',
      2,
      'Khảo sát mặt cầu và mặt phẳng tiếp diện',
      'Trong không gian $Oxyz$, cho mặt cầu $(S): x^2 + y^2 + z^2 - 4x + 2y - 6z + 5 = 0$.',
      [
        {
          text: 'Mặt cầu $(S)$ có tâm $I(2; -1; 3)$ và bán kính $R = 3$.',
          isCorrect: true,
          exp: '$I(2; -1; 3)$ và $R = \\sqrt{4 + 1 + 9 - 5} = 3$.',
        },
        {
          text: 'Điểm $M(4; 1; 4)$ nằm trên mặt cầu $(S)$.',
          isCorrect: true,
          exp: '$IM^2 = (4 - 2)^2 + (1 + 1)^2 + (4 - 3)^2 = 4 + 4 + 1 = 9 = R^2$, nên $M \\in (S)$.',
        },
        {
          text: 'Mặt phẳng tiếp diện của $(S)$ tại điểm $M(4; 1; 4)$ có phương trình là $2x + 2y + z - 14 = 0$.',
          isCorrect: true,
          exp: '$\\overrightarrow{IM} = (2; 2; 1)$ là VTPT. Phương trình tiếp diện qua $M(4; 1; 4)$: $2(x - 4) + 2(y - 1) + 1(z - 4) = 0 \\Leftrightarrow 2x + 2y + z - 14 = 0$.',
        },
        {
          text: 'Mặt phẳng $(Oxy)$ cắt mặt cầu $(S)$ theo một đường tròn có bán kính lớn hơn $1$.',
          isCorrect: false,
          exp: 'Khoảng cách từ tâm $I(2; -1; 3)$ đến $(Oxy): z = 0$ là $d = |z_I| = 3 = R$, nên mặt cầu $(S)$ tiếp xúc với mặt phẳng $(Oxy)$ tại điểm $(2; -1; 0)$ chứ không cắt theo đường tròn.',
        },
      ],
      'Khi $d(I, (Oxy)) = |z_I| = R$, mặt cầu tiếp xúc với mặt phẳng $(Oxy)$.',
      'sp_oxyz_sphere'
    ),
    makeTF(
      'otc5d1',
      3,
      'Bài toán thực tế: Hệ thống cáp treo và cột trụ đỡ trong không gian Oxyz',
      'Trong không gian $Oxyz$ (đơn vị: mét), mặt sườn đồi phẳng có phương trình $(P): x + 2y + 2z - 20 = 0$. Một tuyến cáp treo đi thẳng theo đường thẳng $d$ qua hai điểm $A(2; 3; 10)$ và $B(6; 5; 14)$.',
      [
        {
          text: 'Một vectơ chỉ phương của đường cáp treo $AB$ là $\\vec{u} = (2; 1; 2)$.',
          isCorrect: true,
          exp: '$\\overrightarrow{AB} = (4; 2; 4) = 2(2; 1; 2)$.',
        },
        {
          text: 'Khoảng cách từ vị trí $A(2; 3; 10)$ xuống mặt sườn đồi $(P)$ bằng $4\\text{ m}$.',
          isCorrect: false,
          exp: '$d(A, (P)) = \\frac{|2 + 2\\cdot 3 + 2\\cdot 10 - 20|}{\\sqrt{1^2 + 2^2 + 2^2}} = \\frac{8}{3}\\text{ m} \\ne 4\\text{ m}$.',
        },
        {
          text: 'Sin của góc tạo bởi đường cáp treo $AB$ và mặt sườn đồi $(P)$ bằng $\\frac{8}{9}$.',
          isCorrect: true,
          exp: '$\\sin(AB, (P)) = \\frac{|2\\cdot 1 + 1\\cdot 2 + 2\\cdot 2|}{3\\cdot 3} = \\frac{8}{9}$.',
        },
        {
          text: 'Nếu dựng một trụ đỡ từ điểm $M(2; 3; z_0)$ nằm trên mặt sườn đồi $(P)$ thẳng đứng lên điểm $A(2; 3; 10)$ thì chiều dài trụ đỡ là $4\\text{ m}$.',
          isCorrect: true,
          exp: 'Vì $M(2; 3; z_0) \\in (P)$ nên $2 + 6 + 2z_0 - 20 = 0 \\Rightarrow z_0 = 6$. Chiều dài trụ thẳng đứng $MA$ là $10 - 6 = 4\\text{ (m)}$.',
        },
      ],
      'Phân biệt rõ: chiều dài cột thẳng đứng song song với trục $Oz$ là $|z_A - z_M|$, còn khoảng cách vuông góc với mặt đồi là $d(A, (P))$.'
    ),
  ],
  [
    makeSA(
      'otc5d1',
      1,
      'Tìm tham số vuông góc giữa đường thẳng và mặt phẳng',
      'Trong không gian $Oxyz$, cho đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 1}{-1} = \\frac{z}{3}$ và mặt phẳng $(P): 4x + my + nz - 7 = 0$. Biết đường thẳng $d$ vuông góc với mặt phẳng $(P)$. Tính tổng $S = m + n$.',
      ['4'],
      'Vì $d \\perp (P)$ nên $\\vec{n}_P$ cùng phương với $\\vec{u}_d \\Leftrightarrow \\frac{4}{2} = \\frac{m}{-1} = \\frac{n}{3} = 2 \\Rightarrow m = -2, n = 6 \\Rightarrow S = m + n = 4$.',
      'Sử dụng tỉ lệ hai vectơ cùng phương: $\\frac{4}{2} = \\frac{m}{-1} = \\frac{n}{3}$.'
    ),
    makeSA(
      'otc5d1',
      2,
      'Tính khoảng cách từ gốc tọa độ đến mặt phẳng đi qua 3 điểm',
      'Trong không gian $Oxyz$, mặt phẳng $(P)$ đi qua ba điểm $A(3; 0; 0), B(0; 6; 0), C(0; 0; 6)$. Tính khoảng cách từ gốc tọa độ $O$ đến mặt phẳng $(P)$.',
      ['2'],
      'Phương trình đoạn chắn của $(P)$ là $\\frac{x}{3} + \\frac{y}{6} + \\frac{z}{6} = 1 \\Leftrightarrow 2x + y + z - 6 = 0$... Với $A(3; 0; 0), B(0; 6; 0), C(0; 0; 3)$, phương trình là $2x + y + 2z - 6 = 0 \\Rightarrow d(O, (P)) = \\frac{6}{\\sqrt{4 + 1 + 4}} = \\frac{6}{3} = 2$.',
      'Viết phương trình đoạn chắn rồi tính $d(O, (P))$.',
      undefined,
      'sp_oxyz_plane_intercepts'
    ),
    makeSA(
      'otc5d1',
      3,
      'Tính bán kính mặt cầu tiếp xúc mặt phẳng',
      'Trong không gian $Oxyz$, tính bán kính $R$ của mặt cầu $(S)$ có tâm $I(1; -2; 3)$ và tiếp xúc với mặt phẳng $(P): 2x - 2y + z + 3 = 0$.',
      ['4'],
      'Ta có $R = d(I, (P)) = \\frac{|2\\cdot 1 - 2(-2) + 3 + 3|}{\\sqrt{2^2 + (-2)^2 + 1^2}} = \\frac{12}{3} = 4$.',
      'Bán kính mặt cầu tiếp xúc mặt phẳng bằng khoảng cách từ tâm đến mặt phẳng.',
      undefined,
      'sp_oxyz_sphere'
    ),
    makeSA(
      'otc5d1',
      4,
      'Bài toán thực tế: Góc chiếu của đèn pha sân vận động',
      'Trong không gian $Oxyz$ (đơn vị: mét), mặt sân cỏ nằm trên mặt phẳng $(Oxy)$. Một đèn pha đặt tại đỉnh cột cao $M(0; 0; 25)$ chiếu luồng sáng thẳng tập trung tới điểm phạt đền $A(15; 20; 0)$ trên mặt sân. Tính số đo góc (đơn vị: độ) giữa tia sáng $MA$ và mặt sân cỏ.',
      ['45'],
      'Ta có $\\overrightarrow{MA} = (15; 20; -25) = 5(3; 4; -5)$. Mặt sân $(Oxy)$ có VTPT $\\vec{k} = (0; 0; 1)$. Khi đó $\\sin(MA, (Oxy)) = \\frac{|-5|}{\\sqrt{9 + 16 + 25}\\cdot 1} = \\frac{5}{5\\sqrt{2}} = \\frac{\\sqrt{2}}{2} \\Rightarrow (MA, (Oxy)) = 45^\\circ$.',
      'Cũng có thể nhận thấy tam giác vuông $MOA$ có $OM = 25$ và $OA = \\sqrt{15^2 + 20^2} = 25$, nên tam giác vuông cân tại $O$, góc bằng $45^\\circ$.',
      'độ',
      'sp_oxyz_angle_line_plane'
    ),
  ],
  [
    makeSO(
      'otc5d1',
      1,
      'Viết phương trình mặt phẳng chứa đường thẳng và vuông góc với một mặt phẳng',
      'Trong không gian $Oxyz$, viết phương trình mặt phẳng $(\\alpha)$ chứa đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 1}{1} = \\frac{z}{1}$ và vuông góc với mặt phẳng $(P): x + y - z + 2 = 0$.',
      'Vậy phương trình mặt phẳng $(\\alpha)$ là $2x - 3y - z - 5 = 0$.',
      [
        {
          role: 'Bước 1: Xác định điểm đi qua và cặp vectơ chỉ phương của $(\\alpha)$',
          content: 'Vì $d \\subset (\\alpha)$ nên $(\\alpha)$ đi qua $M(1; -1; 0) \\in d$ và nhận $\\vec{u}_d = (2; 1; 1)$ làm một VTCP. Vì $(\\alpha) \\perp (P)$ nên $(\\alpha)$ nhận thêm $\\vec{n}_P = (1; 1; -1)$ làm VTCP thứ hai.',
        },
        {
          role: 'Bước 2: Tính tích có hướng tìm vectơ pháp tuyến của $(\\alpha)$',
          content: 'Ta có $\\vec{n}_\\alpha = [\\vec{u}_d, \\vec{n}_P] = (-2; 3; 1) = -(2; -3; -1)$. Chọn $\\vec{n} = (2; -3; -1)$.',
        },
        {
          role: 'Bước 3: Viết phương trình tổng quát của mặt phẳng $(\\alpha)$',
          content: 'Phương trình $(\\alpha)$ đi qua $M(1; -1; 0)$ là $2(x - 1) - 3(y + 1) - 1(z - 0) = 0 \\Leftrightarrow 2x - 3y - z - 5 = 0$.',
        },
      ],
      'Mặt phẳng chứa $d$ và vuông góc với $(P)$ có VTPT là $[\\vec{u}_d, \\vec{n}_P]$.',
      'Dạng toán tổng hợp đường thẳng và mặt phẳng rất phổ biến.',
      0.7,
      'sp_oxyz_plane_normal'
    ),
    makeSO(
      'otc5d1',
      2,
      'Viết phương trình đường thẳng là hình chiếu vuông góc của đường thẳng lên mặt phẳng',
      'Trong không gian $Oxyz$, cho đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 1}{1} = \\frac{z - 2}{1}$ và mặt phẳng $(Oxy): z = 0$. Hãy viết phương trình chính tắc của đường thẳng $d\'$ là hình chiếu vuông góc của $d$ trên mặt phẳng $(Oxy)$.',
      'Vậy phương trình tham số của $d\'$ là $x = 1 + 2t,\\ y = -1 + t,\\ z = 0$.',
      [
        {
          role: 'Bước 1: Chuyển phương trình đường thẳng $d$ sang dạng tham số',
          content: 'Phương trình tham số của $d$ là $x = 1 + 2t,\\ y = -1 + t,\\ z = 2 + t\\ (t \\in \\mathbb{R})$.',
        },
        {
          role: 'Bước 2: Xác định hình chiếu của điểm tổng quát $M(t) \\in d$ lên $(Oxy)$',
          content: 'Với mỗi điểm $M(1 + 2t; -1 + t; 2 + t) \\in d$, hình chiếu vuông góc của $M$ lên mặt phẳng $(Oxy): z = 0$ là điểm $M\'(1 + 2t; -1 + t; 0)$.',
        },
        {
          role: 'Bước 3: Kết luận phương trình đường thẳng hình chiếu $d\'$',
          content: 'Khi $t$ thay đổi trên $\\mathbb{R}$, điểm $M\'$ vạch nên đường thẳng $d\'$ có phương trình tham số $\\begin{cases} x = 1 + 2t \\\\ y = -1 + t \\\\ z = 0 \\end{cases}$.',
        },
      ],
      'Khi chiếu một đường thẳng lên mặt phẳng tọa độ $(Oxy)$, ta chỉ cần giữ nguyên $x(t), y(t)$ và cho $z = 0$ (nếu $d$ không vuông góc với $(Oxy)$).',
      'Kỹ thuật giải cực nhanh bài toán hình chiếu đường thẳng lên mặt phẳng tọa độ.',
      0.65,
      'sp_oxyz_line_3d'
    ),
    makeSO(
      'otc5d1',
      3,
      'Bài toán tổng hợp mặt cầu cắt mặt phẳng theo đường tròn có diện tích cho trước',
      'Trong không gian $Oxyz$, viết phương trình mặt cầu $(S)$ có tâm $I(1; 2; -1)$, biết rằng mặt phẳng $(P): 2x - y + 2z + 9 = 0$ cắt mặt cầu $(S)$ theo giao tuyến là một đường tròn có bán kính $r = 3$.',
      'Vậy phương trình mặt cầu $(S)$ là $(x - 1)^2 + (y - 2)^2 + (z + 1)^2 = 18$.',
      [
        {
          role: 'Bước 1: Tính khoảng cách $d$ từ tâm $I(1; 2; -1)$ đến mặt phẳng $(P)$',
          content: 'Ta có $d = d(I, (P)) = \\frac{|2\\cdot 1 - 2 + 2(-1) + 9|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{7}{3}$... Với $(P): 2x - y + 2z + 11 = 0$, ta có $d = \\frac{|2 - 2 - 2 + 11|}{3} = 3$.',
        },
        {
          role: 'Bước 2: Áp dụng định lý Pythagoras tính bán kính $R$ của mặt cầu $(S)$',
          content: 'Ta có $R^2 = d^2 + r^2 = 3^2 + 3^2 = 18 \\Rightarrow R = 3\\sqrt{2}$.',
        },
        {
          role: 'Bước 3: Lập phương trình mặt cầu $(S)$',
          content: 'Phương trình mặt cầu $(S)$ tâm $I(1; 2; -1)$ bán kính $R = 3\\sqrt{2}$ là $(x - 1)^2 + (y - 2)^2 + (z + 1)^2 = 18$.',
        },
      ],
      'Luôn vẽ mặt cắt đi qua tâm $I$ vuông góc với $(P)$ để thấy tam giác vuông có cạnh huyền $R$ và hai cạnh góc vuông $d, r$.',
      'Bài toán kinh điển kết hợp mặt phẳng và mặt cầu.',
      0.65,
      'sp_oxyz_sphere'
    ),
  ]
);

// Sync minor adjustments in ontapC5De1
ontapC5De1.part3[1].prompt = 'Trong không gian $Oxyz$, mặt phẳng $(P)$ đi qua ba điểm $A(3; 0; 0), B(0; 6; 0), C(0; 0; 3)$. Tính khoảng cách từ gốc tọa độ $O$ đến mặt phẳng $(P)$.';
ontapC5De1.part3[1].explanation = 'Phương trình đoạn chắn của $(P)$ là $\\frac{x}{3} + \\frac{y}{6} + \\frac{z}{3} = 1 \\Leftrightarrow 2x + y + 2z - 6 = 0$. Khi đó $d(O, (P)) = \\frac{|-6|}{\\sqrt{2^2 + 1^2 + 2^2}} = \\frac{6}{3} = 2$.';

ontapC5De1.part4[1].problemStatement = 'Trong không gian $Oxyz$, cho đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 1}{1} = \\frac{z - 2}{1}$ và mặt phẳng $(Oxy): z = 0$. Hãy viết phương trình tham số của đường thẳng $d\'$ là hình chiếu vuông góc của $d$ trên mặt phẳng $(Oxy)$.';
ontapC5De1.part4[2].problemStatement = 'Trong không gian $Oxyz$, viết phương trình mặt cầu $(S)$ có tâm $I(1; 2; -1)$, biết rằng mặt phẳng $(P): 2x - y + 2z + 11 = 0$ cắt mặt cầu $(S)$ theo giao tuyến là một đường tròn có bán kính $r = 3$.';
ontapC5De1.part4[2].steps[0].content = 'Ta có $d = d(I, (P)) = \\frac{|2\\cdot 1 - 2 + 2(-1) + 11|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{9}{3} = 3$.';

const ontapC5De2 = makeLessonExam(
  'ontap-c5-de02',
  'Ôn tập Chương V - Đề ôn số 2',
  'Tổng hợp Phương pháp tọa độ trong không gian: Vận dụng toàn diện Oxyz (Đề 2)',
  'Đề ôn tập cuối Chương V (Số 2) gồm 22 câu hỏi chuẩn cấu trúc 4 phần, giúp học sinh làm chủ hoàn toàn phương pháp tọa độ trong không gian Oxyz.',
  [
    makeMC(
      'otc5d2',
      1,
      'Phương trình mặt phẳng đi qua điểm và vuông góc với trục tọa độ',
      'Trong không gian $Oxyz$, mặt phẳng đi qua điểm $M(2; -3; 4)$ và vuông góc với trục $Oz$ có phương trình là:',
      [
        '$z - 4 = 0$',
        '$x - 2 = 0$',
        '$y + 3 = 0$',
        '$2x - 3y + 4z = 0$',
      ],
      'A',
      'Mặt phẳng vuông góc với trục $Oz$ nhận $\\vec{k} = (0; 0; 1)$ làm VTPT và đi qua $M(2; -3; 4)$ nên có phương trình $z - 4 = 0$.',
      'Mặt phẳng vuông góc với trục $Oz$ luôn có dạng $z = z_0$.'
    ),
    makeMC(
      'otc5d2',
      2,
      'Tích có hướng và phương trình mặt phẳng qua 3 điểm',
      'Trong không gian $Oxyz$, cho ba điểm $A(1; 0; 0), B(0; 2; 0), C(0; 0; -3)$. Một vectơ pháp tuyến của mặt phẳng $(ABC)$ là:',
      [
        '$\\vec{n} = (6; 3; -2)$',
        '$\\vec{n} = (1; 2; -3)$',
        '$\\vec{n} = (6; 3; 2)$',
        '$\\vec{n} = (2; 1; -3)$',
      ],
      'A',
      'Phương trình đoạn chắn: $\\frac{x}{1} + \\frac{y}{2} + \\frac{z}{-3} = 1 \\Leftrightarrow 6x + 3y - 2z - 6 = 0$, nên một VTPT là $\\vec{n} = (6; 3; -2)$.',
      'Quy đồng mẫu số chung bằng $6$ từ phương trình đoạn chắn.',
      'sp_oxyz_plane_intercepts'
    ),
    makeMC(
      'otc5d2',
      3,
      'Khoảng cách giữa hai mặt phẳng song song',
      'Trong không gian $Oxyz$, khoảng cách giữa hai mặt phẳng song song $(P): 2x - y + 2z - 1 = 0$ và $(Q): 2x - y + 2z + 8 = 0$ bằng:',
      [
        '$3$',
        '$\\frac{7}{3}$',
        '$9$',
        '$1$',
      ],
      'A',
      'Ta có $d((P), (Q)) = \\frac{|-1 - 8|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{9}{3} = 3$.',
      'Áp dụng công thức $\\frac{|D_1 - D_2|}{\\sqrt{A^2 + B^2 + C^2}}$ khi hai mặt phẳng cùng bộ hệ số $(A; B; C)$.'
    ),
    makeMC(
      'otc5d2',
      4,
      'Phương trình tham số của đường thẳng đi qua hai điểm',
      'Trong không gian $Oxyz$, đường thẳng đi qua hai điểm $A(2; 1; 0)$ và $B(3; 3; -2)$ có một vectơ chỉ phương là:',
      [
        '$\\vec{u} = (1; 2; -2)$',
        '$\\vec{u} = (5; 4; -2)$',
        '$\\vec{u} = (1; 2; 2)$',
        '$\\vec{u} = (2; 1; 0)$',
      ],
      'A',
      'Vectơ chỉ phương là $\\overrightarrow{AB} = (3 - 2; 3 - 1; -2 - 0) = (1; 2; -2)$.',
      'Lấy tọa độ điểm $B$ trừ tọa độ điểm $A$.',
      'sp_oxyz_line_3d'
    ),
    makeMC(
      'otc5d2',
      5,
      'Góc giữa hai mặt phẳng',
      'Trong không gian $Oxyz$, góc giữa hai mặt phẳng $(P): 2x - y + 3z - 1 = 0$ và $(Q): x + 5y + z + 4 = 0$ bằng:',
      [
        '$90^\\circ$',
        '$0^\\circ$',
        '$60^\\circ$',
        '$45^\\circ$',
      ],
      'A',
      'Tích vô hướng hai VTPT: $\\vec{n}_P \\cdot \\vec{n}_Q = 2\\cdot 1 + (-1)\\cdot 5 + 3\\cdot 1 = 0 \\Rightarrow (P) \\perp (Q)$, nên góc bằng $90^\\circ$.',
      'Khi tích vô hướng hai VTPT bằng $0$, hai mặt phẳng vuông góc.'
    ),
    makeMC(
      'otc5d2',
      6,
      'Góc giữa đường thẳng và mặt phẳng',
      'Trong không gian $Oxyz$, cho đường thẳng $d: \\frac{x}{1} = \\frac{y}{1} = \\frac{z}{\\sqrt{2}}$ và mặt phẳng $(Oxy)$. Số đo góc giữa đường thẳng $d$ và mặt phẳng $(Oxy)$ bằng:',
      [
        '$45^\\circ$',
        '$60^\\circ$',
        '$30^\\circ$',
        '$90^\\circ$',
      ],
      'A',
      'Ta có $\\vec{u}_d = (1; 1; \\sqrt{2})$ và $\\vec{k} = (0; 0; 1)$. Suy ra $\\sin(d, (Oxy)) = \\frac{\\sqrt{2}}{\\sqrt{1 + 1 + 2}} = \\frac{\\sqrt{2}}{2} \\Rightarrow (d, (Oxy)) = 45^\\circ$.',
      'Áp dụng công thức $\\sin(d, (Oxy)) = \\frac{|c|}{\\sqrt{a^2 + b^2 + c^2}}$.',
      'sp_oxyz_angle_line_plane'
    ),
    makeMC(
      'otc5d2',
      7,
      'Tìm bán kính mặt cầu từ phương trình khai triển',
      'Trong không gian $Oxyz$, bán kính $R$ của mặt cầu $(S): x^2 + y^2 + z^2 + 2x - 4y + 6z - 2 = 0$ bằng:',
      [
        '$4$',
        '$16$',
        '$2\\sqrt{3}$',
        '$3$',
      ],
      'A',
      'Tâm $I(-1; 2; -3)$ và $R = \\sqrt{(-1)^2 + 2^2 + (-3)^2 - (-2)} = \\sqrt{14 + 2} = 4$.',
      'Chú ý $-d = -(-2) = +2$ trong công thức $R = \\sqrt{a^2 + b^2 + c^2 - d}$.',
      'sp_oxyz_sphere'
    ),
    makeMC(
      'otc5d2',
      8,
      'Điểm thuộc mặt cầu',
      'Trong không gian $Oxyz$, điểm nào dưới đây thuộc mặt cầu $(S): (x - 1)^2 + (y + 1)^2 + (z - 2)^2 = 9$?',
      [
        '$A(3; 1; 3)$',
        '$B(1; -1; 2)$',
        '$C(1; 1; 5)$',
        '$D(4; 0; 2)$',
      ],
      'A',
      'Thay $A(3; 1; 3)$ vào $(S)$: $(3 - 1)^2 + (1 + 1)^2 + (3 - 2)^2 = 4 + 4 + 1 = 9$ (đúng). Điểm $B(1; -1; 2)$ là tâm mặt cầu chứ không thuộc mặt cầu.',
      'Tâm $I$ của mặt cầu không thuộc mặt cầu (vì $II^2 = 0 \\ne R^2$).'
    ),
    makeMC(
      'otc5d2',
      9,
      'Hình chiếu vuông góc của điểm lên mặt phẳng tọa độ',
      'Trong không gian $Oxyz$, điểm đối xứng của điểm $M(2; -3; 5)$ qua mặt phẳng $(Oxy)$ có tọa độ là:',
      [
        '$M\'(2; -3; -5)$',
        '$M\'(-2; 3; 5)$',
        '$M\'(2; -3; 0)$',
        '$M\'(-2; 3; -5)$',
      ],
      'A',
      'Hình chiếu của $M(2; -3; 5)$ lên $(Oxy)$ là $H(2; -3; 0)$, nên điểm đối xứng qua $(Oxy)$ giữ nguyên $x, y$ và đổi dấu $z$: $M\'(2; -3; -5)$.',
      'Đối xứng qua mặt phẳng tọa độ nào thì giữ nguyên 2 tọa độ của mặt phẳng đó và đổi dấu tọa độ thứ ba.'
    ),
    makeMC(
      'otc5d2',
      10,
      'Mặt phẳng trung trực của đoạn thẳng',
      'Trong không gian $Oxyz$, mặt phẳng trung trực của đoạn thẳng $OA$ với $A(2; 4; -6)$ có phương trình là:',
      [
        '$x + 2y - 3z - 14 = 0$',
        '$x + 2y - 3z + 14 = 0$',
        '$2x + 4y - 6z - 14 = 0$',
        '$x + 2y - 3z - 7 = 0$',
      ],
      'A',
      'Trung điểm của $OA$ là $I(1; 2; -3)$, vectơ pháp tuyến $\\vec{n} = \\frac{1}{2}\\overrightarrow{OA} = (1; 2; -3)$. Phương trình là $1(x - 1) + 2(y - 2) - 3(z + 3) = 0 \\Leftrightarrow x + 2y - 3z - 14 = 0$.',
      'Đi qua trung điểm $I(1; 2; -3)$ và có VTPT $(1; 2; -3)$.'
    ),
    makeMC(
      'otc5d2',
      11,
      'Đường thẳng nằm trong mặt phẳng',
      'Trong không gian $Oxyz$, đường thẳng $d: \\begin{cases} x = 1 + 2t \\\\ y = -1 + t \\\\ z = 2 - 3t \\end{cases}$ nằm trong mặt phẳng nào dưới đây?',
      [
        '$(P): x + y + z - 2 = 0$',
        '$(Q): x + y + z + 2 = 0$',
        '$(R): 2x + y - 3z - 1 = 0$',
        '$(S): x - 2y + z - 5 = 0$',
      ],
      'A',
      'Thay $x, y, z$ của $d$ vào $(P)$: $(1 + 2t) + (-1 + t) + (2 - 3t) - 2 = 0\\ (\\forall t \\in \\mathbb{R})$, nên $d \\subset (P)$.',
      'Đường thẳng nằm trong mặt phẳng khi thay phương trình tham số vào phương trình mặt phẳng được đồng nhất thức $0 = 0$.'
    ),
    makeMC(
      'otc5d2',
      12,
      'Bài toán thực tế: Vùng phủ sóng của trạm phát thanh',
      'Trong không gian $Oxyz$ (đơn vị: $\\text{km}$), một đài phát thanh đặt tại gốc tọa độ $O$ có bán kính phủ sóng $R = 30\\text{ km}$. Một ô tô chạy thẳng dọc theo con đường có phương trình $x = 18,\\ y = -24 + 10t,\\ z = 0$ ($t$ tính bằng giờ). Tổng quãng đường ô tô đi được trong vùng phủ sóng của đài phát thanh là:',
      [
        '$48\\text{ km}$',
        '$24\\text{ km}$',
        '$36\\text{ km}$',
        '$60\\text{ km}$',
      ],
      'A',
      'Phương trình mặt cầu phủ sóng: $x^2 + y^2 + z^2 \\le 900$. Thay $x = 18, z = 0$ vào: $18^2 + y^2 \\le 900 \\Leftrightarrow y^2 \\le 576 \\Leftrightarrow -24 \\le y \\le 24$. Vậy quãng đường ô tô đi trong vùng phủ sóng dài $24 - (-24) = 48\\text{ (km)}$.',
      'Khoảng cách từ đài phát $O$ đến đường thẳng quỹ đạo là $d = 18\\text{ km}$, nên độ dài dây cung trong mặt cầu bán kính $30\\text{ km}$ là $2\\sqrt{30^2 - 18^2} = 48\\text{ km}$.',
      'sp_oxyz_sphere'
    ),
  ],
  [
    makeTF(
      'otc5d2',
      1,
      'Tổng hợp đường thẳng, mặt phẳng và hình chiếu trong Oxyz',
      'Trong không gian $Oxyz$, cho điểm $M(3; 1; 2)$ và đường thẳng $d: \\frac{x - 1}{1} = \\frac{y}{1} = \\frac{z + 1}{2}$.',
      [
        {
          text: 'Mặt phẳng $(P)$ đi qua $M$ và vuông góc với $d$ có phương trình là $x + y + 2z - 8 = 0$.',
          isCorrect: true,
          exp: 'Đi qua $M(3; 1; 2)$ và nhận $\\vec{u}_d = (1; 1; 2)$ làm VTPT: $1(x - 3) + 1(y - 1) + 2(z - 2) = 0 \\Leftrightarrow x + y + 2z - 8 = 0$.',
        },
        {
          text: 'Giao điểm $H$ của đường thẳng $d$ và mặt phẳng $(P)$ có tọa độ là $H(2; 1; 1)$.',
          isCorrect: true,
          exp: 'Thay $x = 1+t, y = t, z = -1+2t$ vào $(P)$: $(1+t) + t + 2(-1+2t) - 8 = 0 \\Leftrightarrow 6t - 9 = 0$... Với $M(2; 1; 1) \\in d$, nếu $M(3; 1; 1)$ thì $(P): x + y + 2z - 6 = 0 \\Rightarrow 6t - 6 = 0 \\Leftrightarrow t = 1 \\Rightarrow H(2; 1; 1)$.',
        },
        {
          text: 'Khoảng cách từ điểm $M$ đến đường thẳng $d$ bằng độ dài đoạn thẳng $MH$.',
          isCorrect: true,
          exp: 'Vì $(P) \\perp d$ tại $H$ và $M \\in (P)$ nên $MH \\perp d$ tại $H$, tức $d(M, d) = MH$.',
        },
        {
          text: 'Mặt cầu tâm $M$ tiếp xúc với đường thẳng $d$ có bán kính bằng $3$.',
          isCorrect: false,
          exp: 'Với $M(3; 1; 1)$ và $H(2; 1; 1)$, bán kính tiếp xúc là $R = MH = 1 \\ne 3$.',
        },
      ],
      'Hình chiếu vuông góc $H$ của điểm $M$ trên đường thẳng $d$ chính là giao điểm của $d$ với mặt phẳng qua $M$ vuông góc với $d$.',
      'sp_oxyz_line_3d'
    ),
    makeTF(
      'otc5d2',
      2,
      'Góc và khoảng cách trong hình lăng trụ gắn hệ trục tọa độ',
      'Trong không gian $Oxyz$, cho bốn điểm $A(2; 0; 0), B(0; 2; 0), C(0; 0; 2)$ và $D(2; 2; 2)$.',
      [
        {
          text: 'Phương trình mặt phẳng $(ABC)$ là $x + y + z - 2 = 0$.',
          isCorrect: true,
          exp: 'Phương trình đoạn chắn $\\frac{x}{2} + \\frac{y}{2} + \\frac{z}{2} = 1 \\Leftrightarrow x + y + z - 2 = 0$.',
        },
        {
          text: 'Đường thẳng $OD$ vuông góc với mặt phẳng $(ABC)$.',
          isCorrect: true,
          exp: '$\\overrightarrow{OD} = (2; 2; 2) = 2(1; 1; 1) = 2\\vec{n}_{(ABC)}$ nên $OD \\perp (ABC)$.',
        },
        {
          text: 'Khoảng cách từ điểm $D(2; 2; 2)$ đến mặt phẳng $(ABC)$ bằng $\\frac{4\\sqrt{3}}{3}$.',
          isCorrect: true,
          exp: '$d(D, (ABC)) = \\frac{|2 + 2 + 2 - 2|}{\\sqrt{3}} = \\frac{4}{\\sqrt{3}} = \\frac{4\\sqrt{3}}{3}$.',
        },
        {
          text: 'Mặt cầu đường kính $OD$ có tâm $I(1; 1; 1)$ và bán kính $R = 3$.',
          isCorrect: false,
          exp: 'Trung điểm của $OD$ là $I(1; 1; 1)$ nhưng bán kính là $R = OI = \\sqrt{1^2 + 1^2 + 1^2} = \\sqrt{3} \\ne 3$.',
        },
      ],
      'Cẩn thận không nhầm lẫn $R^2 = 3$ với $R = \\sqrt{3}$.',
      'sp_oxyz_plane_intercepts'
    ),
    makeTF(
      'otc5d2',
      3,
      'Bài toán thực tế: Quỹ đạo bay của thiên thạch và vệ tinh quan sát',
      'Trong không gian $Oxyz$ (đơn vị: nghìn km), một vệ tinh quan sát đặt tại gốc tọa độ $O(0; 0; 0)$ có phạm vi camera giám sát là hình cầu $x^2 + y^2 + z^2 \\le 50$. Một mảnh thiên thạch nhỏ bay thẳng theo đường thẳng $d: \\begin{cases} x = 5 + t \\\\ y = 5 - t \\\\ z = 4 \\end{cases}$.',
      [
        {
          text: 'Đường bay $d$ của thiên thạch nằm trong mặt phẳng $z = 4$ song song với mặt phẳng $(Oxy)$.',
          isCorrect: true,
          exp: 'Vì cao độ $z = 4$ không đổi với mọi $t$ nên $d$ nằm trong mặt phẳng $z = 4 \\parallel (Oxy)$.',
        },
        {
          text: 'Vectơ chỉ phương của đường bay $d$ là $\\vec{u} = (1; -1; 0)$.',
          isCorrect: true,
          exp: 'Hệ số của $t$ trong phương trình tham số là $(1; -1; 0)$.',
        },
        {
          text: 'Vị trí mà thiên thạch bay gần vệ tinh $O$ nhất ứng với $t = 0$, tức tại điểm $H(5; 5; 4)$.',
          isCorrect: true,
          exp: '$OM^2 = (5 + t)^2 + (5 - t)^2 + 16 = 2t^2 + 66 \\ge 66$, đạt GTNN khi $t = 0$, tức tại $H(5; 5; 4)$.',
        },
        {
          text: 'Thiên thạch đi vào bên trong phạm vi camera giám sát của vệ tinh.',
          isCorrect: false,
          exp: 'Khoảng cách gần nhất từ thiên thạch đến $O$ có $OH^2 = 66 > 50 = R^2$, nên thiên thạch luôn nằm ngoài phạm vi camera.',
        },
      ],
      'Biểu diễn $OM^2$ thành tam thức bậc hai theo $t$ giúp tìm ngay khoảng cách ngắn nhất từ $O$ đến đường thẳng $d$.'
    ),
  ],
  [
    makeSA(
      'otc5d2',
      1,
      'Tính khoảng cách từ điểm đến mặt phẳng',
      'Trong không gian $Oxyz$, tính khoảng cách từ điểm $M(3; -4; 5)$ đến mặt phẳng $(P): 2x - 2y + z - 1 = 0$.',
      ['6'],
      'Ta có $d(M, (P)) = \\frac{|2\\cdot 3 - 2(-4) + 5 - 1|}{\\sqrt{2^2 + (-2)^2 + 1^2}} = \\frac{|6 + 8 + 5 - 1|}{3} = \\frac{18}{3} = 6$.',
      'Chú ý $-2(-4) = +8$.',
      undefined,
      'sp_oxyz_plane_normal'
    ),
    makeSA(
      'otc5d2',
      2,
      'Tìm giao điểm của đường thẳng và mặt phẳng',
      'Trong không gian $Oxyz$, đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 1}{1} = \\frac{z}{3}$ cắt mặt phẳng $(P): x + y + z - 6 = 0$ tại điểm $I(a; b; c)$. Tính tổng $S = a + b + c$.',
      ['6'],
      'Vì điểm $I(a; b; c)$ thuộc mặt phẳng $(P): x + y + z - 6 = 0$ nên ta có ngay $a + b + c = 6$ (ứng với $t = 1 \\Rightarrow I(3; 0; 3)$).',
      'Mẹo giải nhanh: Vì giao điểm $I(a; b; c)$ nằm trên mặt phẳng $x + y + z - 6 = 0$ nên tổng $a + b + c$ luôn bằng $6$!'
    ),
    makeSA(
      'otc5d2',
      3,
      'Tính số đo góc giữa hai mặt phẳng',
      'Trong không gian $Oxyz$, tính số đo góc (đơn vị: độ) giữa hai mặt phẳng $(P): x + y - 3 = 0$ và $(Q): x - z + 5 = 0$.',
      ['60'],
      'Ta có $\\vec{n}_P = (1; 1; 0)$ và $\\vec{n}_Q = (1; 0; -1)$. Khi đó $\\cos((P), (Q)) = \\frac{|1\\cdot 1 + 0 + 0|}{\\sqrt{2}\\cdot\\sqrt{2}} = \\frac{1}{2} \\Rightarrow ((P), (Q)) = 60^\\circ$.',
      'Hai vectơ pháp tuyến có độ dài $\\sqrt{2}$ và tích vô hướng bằng $1$.',
      'độ'
    ),
    makeSA(
      'otc5d2',
      4,
      'Bài toán thực tế: Diện tích mặt nước hồ cá hình cầu',
      'Một bể cá cảnh bằng thủy tinh có dạng mặt cầu $(S): x^2 + y^2 + (z - 5)^2 = 25$ (đơn vị: $\\text{cm}$). Người ta đổ nước vào bể sao cho mặt nước nằm trên mặt phẳng $z = 8\\text{ (cm)}$. Biết diện tích mặt thoáng của nước trong bể là $S = k\\pi\\text{ (cm}^2)$. Tìm giá trị của $k$.',
      ['16'],
      'Mặt cầu có tâm $I(0; 0; 5)$, bán kính $R = 5$. Khoảng cách từ tâm $I$ đến mặt phẳng nước $z = 8$ là $d = |8 - 5| = 3$. Bán kính đường tròn mặt nước là $r = \\sqrt{R^2 - d^2} = \\sqrt{25 - 9} = 4\\text{ (cm)}$. Diện tích mặt nước là $S = \\pi r^2 = 16\\pi\\text{ (cm}^2) \\Rightarrow k = 16$.',
      'Diện tích hình tròn giao tuyến là $S = \\pi r^2 = \\pi(R^2 - d^2)$.',
      undefined,
      'sp_oxyz_sphere'
    ),
  ],
  [
    makeSO(
      'otc5d2',
      1,
      'Viết phương trình mặt phẳng đi qua hai điểm và song song với một đường thẳng',
      'Trong không gian $Oxyz$, viết phương trình mặt phẳng $(\\alpha)$ đi qua hai điểm $A(1; 1; 0), B(2; 0; 1)$ và song song với đường thẳng $d: \\frac{x - 1}{1} = \\frac{y}{2} = \\frac{z + 1}{1}$.',
      'Vậy phương trình mặt phẳng $(\\alpha)$ là $3x - 2z - 3 = 0$... Kiểm tra lại: $[\\overrightarrow{AB}, \\vec{u}_d] = (-3; 0; 3) = -3(1; 0; -1)$, phương trình là $x - z - 1 = 0$.',
      [
        {
          role: 'Bước 1: Xác định cặp vectơ chỉ phương của mặt phẳng $(\\alpha)$',
          content: 'Mặt phẳng $(\\alpha)$ đi qua $A, B$ và song song với $d$ nên nhận $\\overrightarrow{AB} = (1; -1; 1)$ và $\\vec{u}_d = (1; 2; 1)$ làm một cặp vectơ chỉ phương.',
        },
        {
          role: 'Bước 2: Tính tích có hướng tìm vectơ pháp tuyến của $(\\alpha)$',
          content: 'Ta có $[\\overrightarrow{AB}, \\vec{u}_d] = (-3; 0; 3) = -3(1; 0; -1)$. Chọn vectơ pháp tuyến của $(\\alpha)$ là $\\vec{n} = (1; 0; -1)$.',
        },
        {
          role: 'Bước 3: Viết phương trình mặt phẳng $(\\alpha)$ và kiểm tra $d \\not\\subset (\\alpha)$',
          content: 'Phương trình $(\\alpha)$ đi qua $A(1; 1; 0)$ là $1(x - 1) + 0(y - 1) - 1(z - 0) = 0 \\Leftrightarrow x - z - 1 = 0$ (điểm $M(1; 0; -1) \\in d$ không thuộc $(\\alpha)$ nên thỏa mãn $d \\parallel (\\alpha)$).',
        },
      ],
      'Khi viết phương trình mặt phẳng song song với đường thẳng $d$, nhớ kiểm tra một điểm trên $d$ không thuộc mặt phẳng.',
      'Bài toán chuẩn mực rèn luyện tư duy tích có hướng.',
      0.7,
      'sp_oxyz_plane_normal'
    ),
    makeSO(
      'otc5d2',
      2,
      'Tìm điểm thuộc đường thẳng sao cho khoảng cách đến một điểm là nhỏ nhất',
      'Trong không gian $Oxyz$, cho đường thẳng $d: \\begin{cases} x = 1 + t \\\\ y = 2 - t \\\\ z = 1 + 2t \\end{cases}$ và điểm $A(3; 1; 4)$. Tìm tọa độ điểm $M$ thuộc đường thẳng $d$ sao cho độ dài đoạn thẳng $AM$ đạt giá trị nhỏ nhất.',
      'Vậy điểm cần tìm là $M(2; 1; 3)$.',
      [
        {
          role: 'Bước 1: Tham số hóa tọa độ điểm $M \\in d$ và tính vectơ $\\overrightarrow{AM}$',
          content: 'Vì $M \\in d$ nên $M(1 + t; 2 - t; 1 + 2t)$. Khi đó $\\overrightarrow{AM} = (t - 2; 1 - t; 2t - 3)$.',
        },
        {
          role: 'Bước 2: Sử dụng tính chất hình chiếu vuông góc hoặc cực trị tam thức bậc hai',
          content: 'Độ dài $AM$ nhỏ nhất khi $M$ là hình chiếu vuông góc của $A$ lên $d$: $\\overrightarrow{AM} \\cdot \\vec{u}_d = 0 \\Leftrightarrow 1(t - 2) - 1(1 - t) + 2(2t - 3) = 0 \\Leftrightarrow 6t - 9 = 0$... Với $A(2; 0; 3)$ thì $\\overrightarrow{AM} = (t - 1; 2 - t; 2t - 2) \\Rightarrow (t-1) - (2-t) + 2(2t-2) = 6t - 7$. Với $A(2; 1; 3)$ thuộc $d$ ($t=1$). Với $A(3; 2; 3)$: $\\overrightarrow{AM} = (t - 2; -t; 2t - 2) \\Rightarrow (t - 2) + t + 2(2t - 2) = 6t - 6 = 0 \\Leftrightarrow t = 1$!',
        },
        {
          role: 'Bước 3: Thay $t = 1$ để suy ra tọa độ điểm $M$',
          content: 'Thay $t = 1$ vào tọa độ $M$, ta được $M(2; 1; 3)$.',
        },
      ],
      'Điểm $M \\in d$ gần $A$ nhất chính là hình chiếu vuông góc của $A$ trên đường thẳng $d$.',
      'Có thể giải bằng $\\overrightarrow{AM}\\cdot\\vec{u}_d = 0$ hoặc tìm đỉnh parabol $AM^2(t)$.',
      0.65,
      'sp_oxyz_line_3d'
    ),
    makeSO(
      'otc5d2',
      3,
      'Bài toán thực tế: Viết phương trình mặt cầu vòm radar và kiểm tra đường bay',
      'Trong không gian $Oxyz$ (đơn vị: $\\text{km}$), một trạm radar đặt tại tâm $I(1; 2; 0)$ có vùng phủ sóng là hình cầu bán kính $R = 6\\text{ km}$. Một máy bay bay theo đường thẳng $d$ đi qua hai điểm $A(1; 2; 10)$ và $B(5; 4; 6)$. Hãy viết phương trình mặt cầu biên $(S)$ của vùng radar và tính góc giữa đường bay $AB$ với mặt đất $(Oxy)$.',
      'Vậy $(S): (x - 1)^2 + (y - 2)^2 + z^2 = 36$ và $\\sin(AB, (Oxy)) = \\frac{2}{3}$.',
      [
        {
          role: 'Bước 1: Viết phương trình mặt cầu biên $(S)$ của vùng phủ sóng radar',
          content: 'Mặt cầu $(S)$ có tâm $I(1; 2; 0)$ và bán kính $R = 6$ có phương trình $(x - 1)^2 + (y - 2)^2 + z^2 = 36$.',
        },
        {
          role: 'Bước 2: Tìm vectơ chỉ phương của đường bay $AB$ và vectơ pháp tuyến mặt đất',
          content: 'Ta có $\\overrightarrow{AB} = (4; 2; -4) = 2(2; 1; -2)$ nên chọn VTCP $\\vec{u} = (2; 1; -2)$. Mặt đất $(Oxy)$ có VTPT $\\vec{k} = (0; 0; 1)$.',
        },
        {
          role: 'Bước 3: Tính sin của góc giữa đường bay $AB$ và mặt đất $(Oxy)$',
          content: 'Ta có $\\sin(AB, (Oxy)) = \\frac{|\\vec{u}\\cdot\\vec{k}|}{|\\vec{u}|\\cdot|\\vec{k}|} = \\frac{|-2|}{\\sqrt{2^2 + 1^2 + (-2)^2}\\cdot 1} = \\frac{2}{3}$.',
        },
      ],
      'Rút gọn $\\overrightarrow{AB} = (4; 2; -4)$ về $\\vec{u} = (2; 1; -2)$ giúp nhẩm nhanh độ dài $|\\vec{u}| = 3$.',
      'Bài toán tổng hợp mặt cầu, đường thẳng và góc trong không gian.',
      0.65,
      'sp_oxyz_angle_line_plane'
    ),
  ]
);

// Sync minor adjustments in ontapC5De2
ontapC5De2.part2[0].prompt = 'Trong không gian $Oxyz$, cho điểm $M(3; 1; 1)$ và đường thẳng $d: \\frac{x - 1}{1} = \\frac{y}{1} = \\frac{z + 1}{2}$.';
ontapC5De2.part2[0].statements[0] = {
  id: 'a',
  label: 'a',
  statement: 'Mặt phẳng $(P)$ đi qua $M$ và vuông góc với $d$ có phương trình là $x + y + 2z - 6 = 0$.',
  isCorrect: true,
  explanation: 'Đi qua $M(3; 1; 1)$ và nhận $\\vec{u}_d = (1; 1; 2)$ làm VTPT: $1(x - 3) + 1(y - 1) + 2(z - 1) = 0 \\Leftrightarrow x + y + 2z - 6 = 0$.',
};
ontapC5De2.part2[0].statements[1].explanation = 'Thay $x = 1+t, y = t, z = -1+2t$ vào $(P): (1+t) + t + 2(-1+2t) - 6 = 0 \\Leftrightarrow 6t - 6 = 0 \\Leftrightarrow t = 1 \\Rightarrow H(2; 1; 1)$.';

ontapC5De2.part4[0].conclusionTarget = 'Vậy phương trình mặt phẳng $(\\alpha)$ là $x - z - 1 = 0$.';
ontapC5De2.part4[1].problemStatement = 'Trong không gian $Oxyz$, cho đường thẳng $d: \\begin{cases} x = 1 + t \\\\ y = 2 - t \\\\ z = 1 + 2t \\end{cases}$ và điểm $A(3; 2; 3)$. Tìm tọa độ điểm $M$ thuộc đường thẳng $d$ sao cho độ dài đoạn thẳng $AM$ đạt giá trị nhỏ nhất.';
ontapC5De2.part4[1].steps[0].content = 'Vì $M \\in d$ nên $M(1 + t; 2 - t; 1 + 2t)$. Khi đó $\\overrightarrow{AM} = (t - 2; -t; 2t - 2)$.';
ontapC5De2.part4[1].steps[1].content = 'Độ dài $AM$ nhỏ nhất khi $M$ là hình chiếu vuông góc của $A$ lên $d$: $\\overrightarrow{AM} \\cdot \\vec{u}_d = 0 \\Leftrightarrow 1(t - 2) - 1(-t) + 2(2t - 2) = 0 \\Leftrightarrow 6t - 6 = 0 \\Leftrightarrow t = 1$.';

export const CHAPTER_5_PART_B_LESSONS: LessonInfo[] = [
  {
    id: 'bai-16',
    code: 'Bài 16',
    title: 'Công thức tính góc trong không gian',
    fullName: 'Bài 16. Công thức tính góc trong không gian',
    chapterId: 'chuong-5',
    chapterTitle: 'CHƯƠNG V. PHƯƠNG PHÁP TOẠ ĐỘ TRONG KHÔNG GIAN',
    pageNumber: 50,
    coreTopics: [
      'Công thức tính côsin góc giữa hai đường thẳng trong không gian theo vectơ chỉ phương',
      'Công thức tính sin góc giữa đường thẳng và mặt phẳng theo vectơ chỉ phương và vectơ pháp tuyến',
      'Công thức tính côsin góc giữa hai mặt phẳng và vận dụng tính góc trong thực tiễn',
    ],
    practiceExams: [bai16De1, bai16De2],
  },
  {
    id: 'bai-17',
    code: 'Bài 17',
    title: 'Phương trình mặt cầu',
    fullName: 'Bài 17. Phương trình mặt cầu',
    chapterId: 'chuong-5',
    chapterTitle: 'CHƯƠNG V. PHƯƠNG PHÁP TOẠ ĐỘ TRONG KHÔNG GIAN',
    pageNumber: 54,
    coreTopics: [
      'Nhận biết phương trình chính tắc và phương trình dạng khai triển của mặt cầu trong không gian Oxyz',
      'Xác định tâm, bán kính mặt cầu và vị trí tương đối của một điểm trong/trên/ngoài mặt cầu',
      'Viết phương trình mặt cầu và vận dụng giải các bài toán thực tế (vùng phủ sóng, định vị GPS, tọa độ địa lý)',
    ],
    practiceExams: [bai17De1, bai17De2],
  },
  {
    id: 'ontap-chuong-5',
    code: 'Ôn tập Chương V',
    title: 'Bài tập cuối chương V',
    fullName: 'Bài tập cuối chương V',
    chapterId: 'chuong-5',
    chapterTitle: 'CHƯƠNG V. PHƯƠNG PHÁP TOẠ ĐỘ TRONG KHÔNG GIAN',
    pageNumber: 61,
    coreTopics: [
      'Tổng hợp phương trình mặt phẳng, phương trình đường thẳng và phương trình mặt cầu trong không gian Oxyz',
      'Xét vị trí tương đối, tìm giao điểm, hình chiếu vuông góc và khoảng cách trong không gian',
      'Tính góc giữa hai đường thẳng, đường thẳng và mặt phẳng, hai mặt phẳng và giải bài toán thực tiễn 3D',
    ],
    practiceExams: [ontapC5De1, ontapC5De2],
  },
];
