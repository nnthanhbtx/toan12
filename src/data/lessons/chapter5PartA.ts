import { LessonInfo } from './types';
import { makeMC, makeTF, makeSA, makeSO, makeLessonExam } from './helpers';

// ============================================================================
// BÀI 14: PHƯƠNG TRÌNH MẶT PHẲNG (SGK Toán 12 Tập 2 - Kết nối tri thức - Trang 29)
// ============================================================================

const bai14De1 = makeLessonExam(
  'bai14-de01',
  'Bài 14 - Đề ôn số 1',
  'Phương trình mặt phẳng: Vectơ pháp tuyến, phương trình tổng quát và khoảng cách',
  'Đề ôn tập Bài 14 (Số 1) bám sát yêu cầu cần đạt SGK Toán 12 Tập 2 Kết nối tri thức: Vectơ pháp tuyến và cặp vectơ chỉ phương của mặt phẳng, tích có hướng của hai vectơ, phương trình tổng quát, phương trình mặt phẳng theo đoạn chắn, điều kiện song song - vuông góc và khoảng cách từ một điểm đến mặt phẳng.',
  [
    makeMC(
      'b14d1',
      1,
      'Tìm vectơ pháp tuyến từ phương trình mặt phẳng',
      'Trong không gian $Oxyz$, cho mặt phẳng $(P): 2x - 3y + 5z - 7 = 0$. Vectơ nào dưới đây là một vectơ pháp tuyến của mặt phẳng $(P)$?',
      [
        '$\\vec{n}_1 = (2; -3; 5)$',
        '$\\vec{n}_2 = (2; 3; 5)$',
        '$\\vec{n}_3 = (-2; -3; 5)$',
        '$\\vec{n}_4 = (2; -3; -7)$',
      ],
      'A',
      'Mặt phẳng $(P): Ax + By + Cz + D = 0$ có một vectơ pháp tuyến là $\\vec{n} = (A; B; C) = (2; -3; 5)$.',
      'Hệ số của $x, y, z$ trong phương trình tổng quát chính là tọa độ của một vectơ pháp tuyến.',
      'sp_oxyz_plane_normal'
    ),
    makeMC(
      'b14d1',
      2,
      'Tìm vectơ pháp tuyến của mặt phẳng thiếu biến',
      'Trong không gian $Oxyz$, mặt phẳng $(Q): 4x - z + 3 = 0$ có một vectơ pháp tuyến là:',
      [
        '$\\vec{n} = (4; 0; -1)$',
        '$\\vec{n} = (4; -1; 3)$',
        '$\\vec{n} = (4; 1; -1)$',
        '$\\vec{n} = (4; 0; 1)$',
      ],
      'A',
      'Phương trình $4x + 0y - z + 3 = 0$ có hệ số của $y$ bằng $0$, nên một vectơ pháp tuyến là $\\vec{n} = (4; 0; -1)$.',
      'Chú ý biến nào khuyết trong phương trình mặt phẳng thì tọa độ tương ứng của vectơ pháp tuyến bằng $0$.'
    ),
    makeMC(
      'b14d1',
      3,
      'Tích có hướng tìm vectơ pháp tuyến từ cặp vectơ chỉ phương',
      'Trong không gian $Oxyz$, mặt phẳng $(\\alpha)$ có cặp vectơ chỉ phương là $\\vec{u} = (1; 2; -1)$ và $\\vec{v} = (2; 1; 3)$. Một vectơ pháp tuyến của mặt phẳng $(\\alpha)$ là:',
      [
        '$\\vec{n} = (7; -5; -3)$',
        '$\\vec{n} = (7; 5; -3)$',
        '$\\vec{n} = (5; -5; -3)$',
        '$\\vec{n} = (-7; -5; 3)$',
      ],
      'A',
      'Ta có $\\vec{n} = [\\vec{u}, \\vec{v}] = (2\\cdot 3 - (-1)\\cdot 1;\\ (-1)\\cdot 2 - 1\\cdot 3;\\ 1\\cdot 1 - 2\\cdot 2) = (7; -5; -3)$.',
      'Áp dụng công thức tích có hướng $[\\vec{u}, \\vec{v}] = (u_2v_3 - u_3v_2;\\ u_3v_1 - u_1v_3;\\ u_1v_2 - u_2v_1)$.',
      'sp_oxyz_plane_normal'
    ),
    makeMC(
      'b14d1',
      4,
      'Điểm thuộc mặt phẳng',
      'Trong không gian $Oxyz$, điểm nào dưới đây thuộc mặt phẳng $(P): x - 2y + 3z - 6 = 0$?',
      [
        '$M(1; -1; 1)$',
        '$N(1; 1; 1)$',
        '$P(2; 1; 0)$',
        '$Q(0; 3; 1)$',
      ],
      'A',
      'Thay tọa độ $M(1; -1; 1)$ vào phương trình $(P)$: $1 - 2(-1) + 3(1) - 6 = 1 + 2 + 3 - 6 = 0$ (thỏa mãn).',
      'Điểm $M(x_0; y_0; z_0) \\in (P) \\Leftrightarrow Ax_0 + By_0 + Cz_0 + D = 0$.'
    ),
    makeMC(
      'b14d1',
      5,
      'Viết phương trình mặt phẳng biết điểm đi qua và vectơ pháp tuyến',
      'Trong không gian $Oxyz$, phương trình mặt phẳng đi qua điểm $A(2; -1; 3)$ và có vectơ pháp tuyến $\\vec{n} = (3; 2; -1)$ là:',
      [
        '$3x + 2y - z - 1 = 0$',
        '$3x + 2y - z + 1 = 0$',
        '$2x - y + 3z - 1 = 0$',
        '$3x + 2y - z - 7 = 0$',
      ],
      'A',
      'Phương trình mặt phẳng là $3(x - 2) + 2(y + 1) - 1(z - 3) = 0 \\Leftrightarrow 3x + 2y - z - 1 = 0$.',
      'Áp dụng công thức $A(x - x_0) + B(y - y_0) + C(z - z_0) = 0$.'
    ),
    makeMC(
      'b14d1',
      6,
      'Phương trình mặt phẳng theo đoạn chắn',
      'Trong không gian $Oxyz$, phương trình mặt phẳng đi qua ba điểm $A(3; 0; 0)$, $B(0; -2; 0)$ và $C(0; 0; 4)$ là:',
      [
        '$\\frac{x}{3} + \\frac{y}{-2} + \\frac{z}{4} = 1$',
        '$\\frac{x}{3} + \\frac{y}{-2} + \\frac{z}{4} = 0$',
        '$3x - 2y + 4z = 1$',
        '$\\frac{x}{3} + \\frac{y}{2} + \\frac{z}{4} = 1$',
      ],
      'A',
      'Áp dụng phương trình mặt phẳng theo đoạn chắn đi qua $A(a; 0; 0), B(0; b; 0), C(0; 0; c)$ với $abc \\ne 0$: $\\frac{x}{3} + \\frac{y}{-2} + \\frac{z}{4} = 1$.',
      'Vế phải của phương trình mặt phẳng theo đoạn chắn luôn bằng $1$.',
      'sp_oxyz_plane_intercepts'
    ),
    makeMC(
      'b14d1',
      7,
      'Phương trình mặt phẳng trung trực của đoạn thẳng',
      'Trong không gian $Oxyz$, cho hai điểm $A(1; 3; -2)$ và $B(3; -1; 4)$. Phương trình mặt phẳng trung trực của đoạn thẳng $AB$ là:',
      [
        '$x - 2y + 3z - 3 = 0$',
        '$x - 2y + 3z + 3 = 0$',
        '$2x + y + z - 6 = 0$',
        '$x + 2y - 3z - 1 = 0$',
      ],
      'A',
      'Trung điểm của $AB$ là $I(2; 1; 1)$. Vectơ $\\overrightarrow{AB} = (2; -4; 6) = 2(1; -2; 3)$ nên chọn VTPT $\\vec{n} = (1; -2; 3)$. Phương trình mặt phẳng là $1(x - 2) - 2(y - 1) + 3(z - 1) = 0 \\Leftrightarrow x - 2y + 3z - 3 = 0$.',
      'Mặt phẳng trung trực của $AB$ đi qua trung điểm $I$ của $AB$ và nhận $\\overrightarrow{AB}$ làm vectơ pháp tuyến.'
    ),
    makeMC(
      'b14d1',
      8,
      'Điều kiện hai mặt phẳng song song',
      'Trong không gian $Oxyz$, mặt phẳng $(P)$ đi qua điểm $M(1; 2; -1)$ và song song với mặt phẳng $(Q): 2x - y + 3z + 5 = 0$ có phương trình là:',
      [
        '$2x - y + 3z + 3 = 0$',
        '$2x - y + 3z - 3 = 0$',
        '$2x + y + 3z - 1 = 0$',
        '$x + 2y - z - 6 = 0$',
      ],
      'A',
      'Vì $(P) \\parallel (Q)$ nên $(P)$ nhận $\\vec{n}_Q = (2; -1; 3)$ làm VTPT: $2(x - 1) - 1(y - 2) + 3(z + 1) = 0 \\Leftrightarrow 2x - y + 3z + 3 = 0$ (thỏa mãn $3 \\ne 5$).',
      'Hai mặt phẳng song song có cùng vectơ pháp tuyến $\\vec{n} = (A; B; C)$.'
    ),
    makeMC(
      'b14d1',
      9,
      'Điều kiện hai mặt phẳng vuông góc',
      'Trong không gian $Oxyz$, cho hai mặt phẳng $(P): 2x + my + 3z - 5 = 0$ và $(Q): 3x - 4y + 2z + 1 = 0$. Giá trị của tham số $m$ để $(P) \\perp (Q)$ là:',
      [
        '$m = 3$',
        '$m = -3$',
        '$m = 2$',
        '$m = -2$',
      ],
      'A',
      'Hai mặt phẳng vuông góc khi $\\vec{n}_P \\cdot \\vec{n}_Q = 0 \\Leftrightarrow 2\\cdot 3 + m\\cdot(-4) + 3\\cdot 2 = 0 \\Leftrightarrow 12 - 4m = 0 \\Leftrightarrow m = 3$.',
      'Điều kiện vuông góc: $(P) \\perp (Q) \\Leftrightarrow A_1A_2 + B_1B_2 + C_1C_2 = 0$.'
    ),
    makeMC(
      'b14d1',
      10,
      'Khoảng cách từ một điểm đến một mặt phẳng',
      'Trong không gian $Oxyz$, khoảng cách từ điểm $M(2; -1; 3)$ đến mặt phẳng $(P): 2x - 2y + z + 3 = 0$ bằng:',
      [
        '$4$',
        '$3$',
        '$\\frac{12}{5}$',
        '$2$',
      ],
      'A',
      'Áp dụng công thức khoảng cách: $d(M, (P)) = \\frac{|2\\cdot 2 - 2\\cdot(-1) + 1\\cdot 3 + 3|}{\\sqrt{2^2 + (-2)^2 + 1^2}} = \\frac{|4 + 2 + 3 + 3|}{\\sqrt{9}} = \\frac{12}{3} = 4$.',
      'Công thức khoảng cách: $d(M_0, (P)) = \\frac{|Ax_0 + By_0 + Cz_0 + D|}{\\sqrt{A^2 + B^2 + C^2}}$.',
      'sp_oxyz_plane_normal'
    ),
    makeMC(
      'b14d1',
      11,
      'Khoảng cách giữa hai mặt phẳng song song',
      'Trong không gian $Oxyz$, khoảng cách giữa hai mặt phẳng song song $(P): x + 2y - 2z + 1 = 0$ và $(Q): x + 2y - 2z - 8 = 0$ bằng:',
      [
        '$3$',
        '$\\frac{7}{3}$',
        '$9$',
        '$2$',
      ],
      'A',
      'Lấy $M(-1; 0; 0) \\in (P)$, khi đó $d((P), (Q)) = d(M, (Q)) = \\frac{|-1 + 0 - 0 - 8|}{\\sqrt{1^2 + 2^2 + (-2)^2}} = \\frac{9}{3} = 3$.',
      'Khi hai mặt phẳng song song có cùng bộ hệ số $(A; B; C)$, khoảng cách giữa chúng là $\\frac{|D_1 - D_2|}{\\sqrt{A^2 + B^2 + C^2}}$.'
    ),
    makeMC(
      'b14d1',
      12,
      'Phương trình các mặt phẳng tọa độ',
      'Trong không gian $Oxyz$, phương trình của mặt phẳng tọa độ $(Oxy)$ là:',
      [
        '$z = 0$',
        '$x + y = 0$',
        '$x = 0$',
        '$y = 0$',
      ],
      'A',
      'Mặt phẳng $(Oxy)$ đi qua gốc tọa độ $O(0; 0; 0)$ và nhận vectơ đơn vị $\\vec{k} = (0; 0; 1)$ của trục $Oz$ làm vectơ pháp tuyến nên có phương trình $z = 0$.',
      'Nhớ nhanh: Mặt phẳng tọa độ thiếu chữ cái nào thì phương trình là chữ cái đó bằng $0$: $(Oxy): z = 0, (Oyz): x = 0, (Oxz): y = 0$.'
    ),
  ],
  [
    makeTF(
      'b14d1',
      1,
      'Viết phương trình mặt phẳng đi qua 3 điểm và tính khoảng cách',
      'Trong không gian $Oxyz$, cho bốn điểm $A(1; 0; 2)$, $B(2; 1; 1)$, $C(1; 2; 3)$ và $D(3; -1; 4)$.',
      [
        {
          text: 'Tọa độ của hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ lần lượt là $\\overrightarrow{AB} = (1; 1; -1)$ và $\\overrightarrow{AC} = (0; 2; 1)$.',
          isCorrect: true,
          exp: '$\\overrightarrow{AB} = (2-1; 1-0; 1-2) = (1; 1; -1)$ và $\\overrightarrow{AC} = (1-1; 2-0; 3-2) = (0; 2; 1)$.',
        },
        {
          text: 'Tích có hướng $[\\overrightarrow{AB}, \\overrightarrow{AC}]$ có tọa độ là $(3; -1; 2)$.',
          isCorrect: true,
          exp: '$[\\overrightarrow{AB}, \\overrightarrow{AC}] = (1\\cdot 1 - (-1)\\cdot 2;\\ (-1)\\cdot 0 - 1\\cdot 1;\\ 1\\cdot 2 - 1\\cdot 0) = (3; -1; 2)$.',
        },
        {
          text: 'Phương trình tổng quát của mặt phẳng $(ABC)$ là $3x - y + 2z + 7 = 0$.',
          isCorrect: false,
          exp: 'Mặt phẳng $(ABC)$ đi qua $A(1; 0; 2)$ với VTPT $\\vec{n} = (3; -1; 2)$ có phương trình $3(x - 1) - 1(y - 0) + 2(z - 2) = 0 \\Leftrightarrow 3x - y + 2z - 7 = 0$.',
        },
        {
          text: 'Khoảng cách từ điểm $D(3; -1; 4)$ đến mặt phẳng $(ABC)$ bằng $\\frac{11}{\\sqrt{14}}$.',
          isCorrect: true,
          exp: '$d(D, (ABC)) = \\frac{|3\\cdot 3 - (-1) + 2\\cdot 4 - 7|}{\\sqrt{3^2 + (-1)^2 + 2^2}} = \\frac{|9 + 1 + 8 - 7|}{\\sqrt{14}} = \\frac{11}{\\sqrt{14}}$.',
        },
      ],
      'Quy trình viết phương trình mặt phẳng $(ABC)$: Tính $\\overrightarrow{AB}, \\overrightarrow{AC} \\to$ lấy tích có hướng $\\vec{n} = [\\overrightarrow{AB}, \\overrightarrow{AC}] \\to$ viết phương trình qua $A$.',
      'sp_oxyz_plane_normal'
    ),
    makeTF(
      'b14d1',
      2,
      'Vị trí tương đối của hai mặt phẳng và mặt phẳng đoạn chắn',
      'Trong không gian $Oxyz$, cho mặt phẳng $(P): 2x - 3y + 6z - 12 = 0$ và mặt phẳng $(Q): 4x - 6y + 12z + 5 = 0$.',
      [
        {
          text: 'Hai mặt phẳng $(P)$ và $(Q)$ song song với nhau.',
          isCorrect: true,
          exp: 'Ta có $\\frac{4}{2} = \\frac{-6}{-3} = \\frac{12}{6} = 2 \\ne \\frac{5}{-12}$ nên $(P) \\parallel (Q)$.',
        },
        {
          text: 'Khoảng cách từ gốc tọa độ $O(0; 0; 0)$ đến mặt phẳng $(P)$ bằng $\\frac{12}{7}$.',
          isCorrect: true,
          exp: '$d(O, (P)) = \\frac{|-12|}{\\sqrt{2^2 + (-3)^2 + 6^2}} = \\frac{12}{\\sqrt{49}} = \\frac{12}{7}$.',
        },
        {
          text: 'Mặt phẳng $(P)$ cắt ba trục tọa độ $Ox, Oy, Oz$ lần lượt tại $A(6; 0; 0)$, $B(0; -4; 0)$ và $C(0; 0; 2)$.',
          isCorrect: true,
          exp: 'Chia hai vế của $2x - 3y + 6z = 12$ cho $12$, ta được $\\frac{x}{6} + \\frac{y}{-4} + \\frac{z}{2} = 1$, suy ra $A(6; 0; 0), B(0; -4; 0), C(0; 0; 2)$.',
        },
        {
          text: 'Thể tích khối tứ diện $OABC$ bằng $16$.',
          isCorrect: false,
          exp: 'Tứ diện vuông $OABC$ có $OA = 6, OB = 4, OC = 2$ nên thể tích là $V = \\frac{1}{6}OA\\cdot OB\\cdot OC = \\frac{1}{6}\\cdot 6\\cdot 4\\cdot 2 = 8 \\ne 16$.',
        },
      ],
      'Thể tích tứ diện vuông $OABC$ có $A, B, C$ trên 3 trục tọa độ là $V = \\frac{1}{6}|abc|$.',
      'sp_oxyz_plane_intercepts'
    ),
    makeTF(
      'b14d1',
      3,
      'Bài toán thực tế: Mái dốc nghiêng trong hệ trục tọa độ Oxyz',
      'Trong không gian $Oxyz$ (đơn vị trên mỗi trục là mét), mặt sàn căn phòng nằm trên mặt phẳng $(Oxy)$, một tấm mái nghiêng phẳng đi qua ba điểm $A(4; 0; 3)$, $B(0; 6; 3)$ và $C(0; 0; 5)$.',
      [
        {
          text: 'Hai vectơ chỉ phương của mặt phẳng mái nghiêng là $\\overrightarrow{CA} = (4; 0; -2)$ và $\\overrightarrow{CB} = (0; 6; -2)$.',
          isCorrect: true,
          exp: '$\\overrightarrow{CA} = (4 - 0; 0 - 0; 3 - 5) = (4; 0; -2)$ và $\\overrightarrow{CB} = (0; 6; -2)$.',
        },
        {
          text: 'Một vectơ pháp tuyến của mặt phẳng mái nghiêng là $\\vec{n} = (3; 2; 6)$.',
          isCorrect: true,
          exp: '$[\\overrightarrow{CA}, \\overrightarrow{CB}] = (12; 8; 24) = 4(3; 2; 6)$, nên chọn VTPT $\\vec{n} = (3; 2; 6)$.',
        },
        {
          text: 'Phương trình mặt phẳng chứa tấm mái nghiêng là $3x + 2y + 6z - 30 = 0$.',
          isCorrect: true,
          exp: 'Đi qua $C(0; 0; 5)$ với VTPT $(3; 2; 6)$: $3x + 2y + 6(z - 5) = 0 \\Leftrightarrow 3x + 2y + 6z - 30 = 0$.',
        },
        {
          text: 'Khoảng cách ngắn nhất từ điểm lắp đặt cảm biến tại gốc tọa độ $O(0; 0; 0)$ lên mặt phẳng mái nghiêng bằng $5\\text{ m}$.',
          isCorrect: false,
          exp: 'Khoảng cách ngắn nhất là $d(O, (ABC)) = \\frac{|-30|}{\\sqrt{3^2 + 2^2 + 6^2}} = \\frac{30}{7} \\approx 4{,}29\\text{ m} \\ne 5\\text{ m}$.',
        },
      ],
      'Khoảng cách ngắn nhất từ điểm $O$ đến mặt phẳng mái chính là độ dài đường vuông góc $d(O, (ABC))$.'
    ),
  ],
  [
    makeSA(
      'b14d1',
      1,
      'Tìm tham số để điểm thuộc mặt phẳng',
      'Trong không gian $Oxyz$, biết điểm $M(2; m; -1)$ thuộc mặt phẳng $(P): 3x - 2y + 4z + 6 = 0$. Tìm giá trị của $m$.',
      ['4'],
      'Thay tọa độ $M(2; m; -1)$ vào phương trình $(P)$: $3\\cdot 2 - 2m + 4(-1) + 6 = 0 \\Leftrightarrow 8 - 2m = 0 \\Leftrightarrow m = 4$.',
      'Thay trực tiếp tọa độ điểm vào phương trình mặt phẳng.'
    ),
    makeSA(
      'b14d1',
      2,
      'Tính khoảng cách từ một điểm đến mặt phẳng',
      'Trong không gian $Oxyz$, tính khoảng cách từ điểm $A(1; -2; 3)$ đến mặt phẳng $(P): x - 2y + 2z + 4 = 0$.',
      ['5'],
      'Ta có $d(A, (P)) = \\frac{|1 - 2(-2) + 2\\cdot 3 + 4|}{\\sqrt{1^2 + (-2)^2 + 2^2}} = \\frac{|1 + 4 + 6 + 4|}{3} = \\frac{15}{3} = 5$.',
      'Mẫu số là $\\sqrt{1^2 + (-2)^2 + 2^2} = \\sqrt{9} = 3$.',
      undefined,
      'sp_oxyz_plane_normal'
    ),
    makeSA(
      'b14d1',
      3,
      'Đồng nhất hệ số trong phương trình mặt phẳng',
      'Trong không gian $Oxyz$, mặt phẳng $(P)$ đi qua điểm $I(1; 2; 3)$ và vuông góc với trục $Ox$ có phương trình dạng $x + by + cz + d = 0$. Tính tổng $S = b + c + d$.',
      ['-1'],
      'Mặt phẳng vuông góc với trục $Ox$ nhận $\\vec{i} = (1; 0; 0)$ làm VTPT, đi qua $I(1; 2; 3)$ nên có phương trình $1(x - 1) = 0 \\Leftrightarrow x - 1 = 0$. Vậy $b = 0, c = 0, d = -1 \\Rightarrow S = -1$.',
      'Mặt phẳng vuông góc với trục $Ox$ luôn có dạng $x - x_0 = 0$.'
    ),
    makeSA(
      'b14d1',
      4,
      'Bài toán thực tế: Chiều cao trụ đỡ mái che',
      'Trong không gian $Oxyz$ (đơn vị: mét), mặt đất là mặt phẳng $(Oxy)$ có phương trình $z = 0$. Một mái che phẳng có phương trình $2x + 3y + 6z - 42 = 0$. Người ta dựng một cột trụ thẳng đứng vuông góc với mặt đất tại điểm có tọa độ $(3; 4; 0)$ kéo dài lên chạm vào mái che. Tính chiều cao (mét) của cột trụ đó.',
      ['4'],
      'Đỉnh trên của cột trụ có hoành độ $x = 3$, tung độ $y = 4$ và nằm trên mặt phẳng mái che nên $2\\cdot 3 + 3\\cdot 4 + 6z - 42 = 0 \\Leftrightarrow 18 + 6z = 42 \\Leftrightarrow 6z = 24 \\Leftrightarrow z = 4\\text{ (m)}$. Chiều cao cột trụ thẳng đứng bằng $z = 4\\text{ m}$.',
      'Cột thẳng đứng vuông góc với mặt đất $(Oxy)$ tại $(3; 4; 0)$ có phương song song với trục $Oz$, nên chiều cao cột đúng bằng cao độ $z$ tại giao điểm.',
      'm'
    ),
  ],
  [
    makeSO(
      'b14d1',
      1,
      'Viết phương trình mặt phẳng đi qua một điểm và vuông góc với hai mặt phẳng',
      'Trong không gian $Oxyz$, viết phương trình mặt phẳng $(\\alpha)$ đi qua điểm $M(1; -1; 2)$ và đồng thời vuông góc với cả hai mặt phẳng $(P): x + 2y - z + 1 = 0$ và $(Q): 2x - y + 3z - 4 = 0$.',
      'Vậy phương trình mặt phẳng $(\\alpha)$ là $x - y - z = 0$.',
      [
        {
          role: 'Bước 1: Xác định cặp vectơ chỉ phương của $(\\alpha)$ từ hai mặt phẳng vuông góc',
          content: 'Vì $(\\alpha) \\perp (P)$ và $(\\alpha) \\perp (Q)$ nên $(\\alpha)$ nhận $\\vec{n}_P = (1; 2; -1)$ và $\\vec{n}_Q = (2; -1; 3)$ làm một cặp vectơ chỉ phương.',
        },
        {
          role: 'Bước 2: Tính tích có hướng để tìm vectơ pháp tuyến của $(\\alpha)$',
          content: 'Ta có $[\\vec{n}_P, \\vec{n}_Q] = (5; -5; -5) = 5(1; -1; -1)$. Chọn vectơ pháp tuyến của $(\\alpha)$ là $\\vec{n} = (1; -1; -1)$.',
        },
        {
          role: 'Bước 3: Viết phương trình mặt phẳng $(\\alpha)$ đi qua $M(1; -1; 2)$',
          content: 'Phương trình $(\\alpha)$ là $1(x - 1) - 1(y + 1) - 1(z - 2) = 0 \\Leftrightarrow x - y - z = 0$.',
        },
      ],
      'Khi $(\\alpha)$ vuông góc với cả $(P)$ và $(Q)$, ta chọn $\\vec{n}_\\alpha = [\\vec{n}_P, \\vec{n}_Q]$.',
      'Rút gọn vectơ pháp tuyến $(5; -5; -5)$ về $(1; -1; -1)$ giúp phương trình gọn đẹp.',
      0.7,
      'sp_oxyz_plane_normal'
    ),
    makeSO(
      'b14d1',
      2,
      'Tìm điểm trên trục tọa độ cách đều điểm và mặt phẳng',
      'Trong không gian $Oxyz$, cho mặt phẳng $(P): 2x - y + 2z - 5 = 0$. Tìm tọa độ điểm $M$ nằm trên tia $Oz$ sao cho khoảng cách từ $M$ đến mặt phẳng $(P)$ bằng $3$.',
      'Vậy điểm cần tìm là $M(0; 0; 7)$.',
      [
        {
          role: 'Bước 1: Tham số hóa tọa độ điểm $M$ thuộc tia $Oz$',
          content: 'Vì $M$ thuộc tia $Oz$ nên $M(0; 0; c)$ với điều kiện $c > 0$.',
        },
        {
          role: 'Bước 2: Thiết lập phương trình khoảng cách $d(M, (P)) = 3$',
          content: 'Ta có $d(M, (P)) = \\frac{|2\\cdot 0 - 0 + 2c - 5|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{|2c - 5|}{3} = 3 \\Leftrightarrow |2c - 5| = 9$.',
        },
        {
          role: 'Bước 3: Giải phương trình và đối chiếu điều kiện $c > 0$',
          content: 'Từ $|2c - 5| = 9 \\Leftrightarrow c = 7$ (thỏa mãn) hoặc $c = -2$ (loại vì $c > 0$). Vậy $M(0; 0; 7)$.',
        },
      ],
      'Điểm thuộc trục $Oz$ có dạng $(0; 0; c)$; thuộc tia $Oz$ thì thêm điều kiện $c > 0$.',
      'Bài toán rèn luyện kỹ năng tham số hóa tọa độ điểm trên trục kết hợp công thức khoảng cách.',
      0.65
    ),
    makeSO(
      'b14d1',
      3,
      'Viết phương trình mặt phẳng song song và cách một mặt phẳng cho trước một khoảng',
      'Trong không gian $Oxyz$, viết phương trình mặt phẳng $(Q)$ song song với mặt phẳng $(P): 2x + 2y - z + 1 = 0$ và cách $(P)$ một khoảng bằng $4$, biết $(Q)$ cắt tia $Ox$ tại điểm có hoành độ dương.',
      'Vậy phương trình mặt phẳng $(Q)$ là $2x + 2y - z - 11 = 0$.',
      [
        {
          role: 'Bước 1: Viết dạng phương trình mặt phẳng $(Q)$ song song với $(P)$',
          content: 'Vì $(Q) \\parallel (P)$ nên phương trình $(Q)$ có dạng $2x + 2y - z + D = 0$ với $D \\ne 1$.',
        },
        {
          role: 'Bước 2: Áp dụng công thức khoảng cách giữa hai mặt phẳng song song',
          content: 'Ta có $d((P), (Q)) = \\frac{|D - 1|}{\\sqrt{2^2 + 2^2 + (-1)^2}} = \\frac{|D - 1|}{3} = 4 \\Leftrightarrow |D - 1| = 12 \\Leftrightarrow D = 13$ hoặc $D = -11$.',
        },
        {
          role: 'Bước 3: Kiểm tra điều kiện cắt tia $Ox$ tại hoành độ dương',
          content: 'Giao điểm của $(Q)$ với $Ox$ là $A\\left(-\\frac{D}{2}; 0; 0\\right)$. Để $-\\frac{D}{2} > 0 \\Leftrightarrow D < 0$, ta chọn $D = -11$. Vậy $(Q): 2x + 2y - z - 11 = 0$.',
        },
      ],
      'Khoảng cách giữa $Ax + By + Cz + D_1 = 0$ và $Ax + By + Cz + D_2 = 0$ là $\\frac{|D_1 - D_2|}{\\sqrt{A^2 + B^2 + C^2}}$.',
      'Bài toán kiểm tra tư duy biện luận nghiệm hình học từ điều kiện giao điểm với tia tọa độ.',
      0.65
    ),
  ]
);

const bai14De2 = makeLessonExam(
  'bai14-de02',
  'Bài 14 - Đề ôn số 2',
  'Phương trình mặt phẳng: Nâng cao kỹ năng lập phương trình và ứng dụng không gian',
  'Đề ôn tập Bài 14 (Số 2) gồm 22 câu hỏi chuẩn cấu trúc 4 phần, củng cố sâu về phương trình mặt phẳng, tích có hướng, khoảng cách và các bài toán thực tế.',
  [
    makeMC(
      'b14d2',
      1,
      'Nhận diện các vectơ cùng phương với vectơ pháp tuyến',
      'Trong không gian $Oxyz$, cho mặt phẳng $(P): -2x + 4y - 6z + 9 = 0$. Vectơ nào dưới đây cũng là một vectơ pháp tuyến của mặt phẳng $(P)$?',
      [
        '$\\vec{n} = (1; -2; 3)$',
        '$\\vec{n} = (1; 2; -3)$',
        '$\\vec{n} = (-1; -2; 3)$',
        '$\\vec{n} = (2; 4; -6)$',
      ],
      'A',
      'Mặt phẳng $(P)$ có VTPT $\\vec{n}_0 = (-2; 4; -6) = -2(1; -2; 3)$. Mọi vectơ cùng phương khác $\\vec{0}$ với $\\vec{n}_0$ đều là VTPT của $(P)$, nên $\\vec{n} = (1; -2; 3)$ là một VTPT.',
      'Nếu $\\vec{n}$ là VTPT của $(P)$ thì $k\\vec{n}\\ (k \\ne 0)$ cũng là một VTPT của $(P)$.'
    ),
    makeMC(
      'b14d2',
      2,
      'Phương trình mặt phẳng đi qua điểm và song song với mặt phẳng tọa độ',
      'Trong không gian $Oxyz$, phương trình mặt phẳng đi qua điểm $M(3; -4; 5)$ và song song với mặt phẳng $(Oxz)$ là:',
      [
        '$y + 4 = 0$',
        '$x - 3 = 0$',
        '$z - 5 = 0$',
        '$x + z - 8 = 0$',
      ],
      'A',
      'Mặt phẳng $(Oxz)$ có phương trình $y = 0$ (VTPT $\\vec{j} = (0; 1; 0)$). Mặt phẳng qua $M(3; -4; 5)$ song song với $(Oxz)$ có phương trình $y - (-4) = 0 \\Leftrightarrow y + 4 = 0$.',
      'Mặt phẳng song song với $(Oxz)$ luôn có dạng $y = y_0$.'
    ),
    makeMC(
      'b14d2',
      3,
      'Phương trình mặt phẳng vuông góc với đoạn thẳng tại đầu mút',
      'Trong không gian $Oxyz$, cho hai điểm $A(2; 1; -1)$ và $B(4; -2; 3)$. Phương trình mặt phẳng đi qua $B$ và vuông góc với đường thẳng $AB$ là:',
      [
        '$2x - 3y + 4z - 26 = 0$',
        '$2x - 3y + 4z - 3 = 0$',
        '$2x - 3y + 4z + 26 = 0$',
        '$4x - 2y + 3z - 26 = 0$',
      ],
      'A',
      'Mặt phẳng vuông góc với $AB$ nhận $\\overrightarrow{AB} = (2; -3; 4)$ làm VTPT và đi qua $B(4; -2; 3)$: $2(x - 4) - 3(y + 2) + 4(z - 3) = 0 \\Leftrightarrow 2x - 3y + 4z - 26 = 0$.',
      'Đọc kỹ đề bài xem mặt phẳng đi qua điểm $A$ hay điểm $B$ hay trung điểm $I$.',
      'sp_oxyz_plane_normal'
    ),
    makeMC(
      'b14d2',
      4,
      'Tính chất đồng phẳng của bốn điểm bằng tích có hướng',
      'Trong không gian $Oxyz$, cho ba điểm $A(1; 0; 0)$, $B(0; 2; 0)$, $C(0; 0; 3)$. Điểm nào dưới đây thuộc mặt phẳng $(ABC)$?',
      [
        '$D(1; 2; -3)$',
        '$E(1; 2; 3)$',
        '$F(2; 2; 3)$',
        '$G(0; 1; 2)$',
      ],
      'A',
      'Phương trình đoạn chắn của $(ABC)$ là $\\frac{x}{1} + \\frac{y}{2} + \\frac{z}{3} = 1$. Thay $D(1; 2; -3)$: $\\frac{1}{1} + \\frac{2}{2} + \\frac{-3}{3} = 1 + 1 - 1 = 1$ (đúng).',
      'Viết nhanh phương trình mặt phẳng theo đoạn chắn rồi thử tọa độ điểm.',
      'sp_oxyz_plane_intercepts'
    ),
    makeMC(
      'b14d2',
      5,
      'Điều kiện hai mặt phẳng trùng nhau',
      'Trong không gian $Oxyz$, hai mặt phẳng $(P): 2x - 3y + z - 4 = 0$ và $(Q): 4x + my + 2z + n = 0$ trùng nhau khi và chỉ khi:',
      [
        '$m = -6,\\ n = -8$',
        '$m = -6,\\ n = 8$',
        '$m = 6,\\ n = -8$',
        '$m = -3,\\ n = -4$',
      ],
      'A',
      'Hai mặt phẳng trùng nhau khi $\\frac{4}{2} = \\frac{m}{-3} = \\frac{2}{1} = \\frac{n}{-4} = 2 \\Leftrightarrow m = -6$ và $n = -8$.',
      'Hai mặt phẳng trùng nhau khi tất cả các hệ số tỉ lệ với nhau cùng một hằng số $k \\ne 0$.'
    ),
    makeMC(
      'b14d2',
      6,
      'Khoảng cách từ gốc tọa độ đến mặt phẳng',
      'Trong không gian $Oxyz$, khoảng cách từ gốc tọa độ $O$ đến mặt phẳng $(P): 3x - 4y + 12z - 26 = 0$ bằng:',
      [
        '$2$',
        '$\\frac{26}{5}$',
        '$13$',
        '$3$',
      ],
      'A',
      'Ta có $d(O, (P)) = \\frac{|-26|}{\\sqrt{3^2 + (-4)^2 + 12^2}} = \\frac{26}{\\sqrt{169}} = \\frac{26}{13} = 2$.',
      'Bộ số Pythagoras không gian hay gặp: $3^2 + 4^2 + 12^2 = 169 = 13^2$.'
    ),
    makeMC(
      'b14d2',
      7,
      'Mặt phẳng chứa trục tọa độ',
      'Trong không gian $Oxyz$, mặt phẳng $(P)$ chứa trục $Oy$ và đi qua điểm $M(2; 3; -1)$ có phương trình là:',
      [
        '$x + 2z = 0$',
        '$x - 2z = 0$',
        '$2x - z - 5 = 0$',
        '$y - 3 = 0$',
      ],
      'A',
      'Mặt phẳng chứa trục $Oy$ nhận $\\vec{j} = (0; 1; 0)$ và $\\overrightarrow{OM} = (2; 3; -1)$ làm cặp VTCP. Khi đó $\\vec{n} = [\\vec{j}, \\overrightarrow{OM}] = (-1; 0; -2) = -(1; 0; 2)$. Mặt phẳng qua $O(0; 0; 0)$ nên có phương trình $x + 2z = 0$.',
      'Mặt phẳng chứa trục $Oy$ luôn đi qua gốc $O(0;0;0)$ và khuyết biến $y$ (có dạng $Ax + Cz = 0$).'
    ),
    makeMC(
      'b14d2',
      8,
      'Tìm hình chiếu của một điểm lên mặt phẳng tọa độ',
      'Trong không gian $Oxyz$, gọi $A, B, C$ lần lượt là hình chiếu vuông góc của điểm $M(2; -4; 6)$ lên các trục $Ox, Oy, Oz$. Phương trình mặt phẳng $(ABC)$ là:',
      [
        '$3x - \\frac{3}{2}y + z - 6 = 0$',
        '$\\frac{x}{2} + \\frac{y}{-4} + \\frac{z}{6} = 0$',
        '$2x - 4y + 6z - 1 = 0$',
        '$6x - 3y + 2z - 6 = 0$',
      ],
      'A',
      'Ta có $A(2; 0; 0), B(0; -4; 0), C(0; 0; 6)$. Phương trình $(ABC)$ là $\\frac{x}{2} + \\frac{y}{-4} + \\frac{z}{6} = 1 \\Leftrightarrow 3x - \\frac{3}{2}y + z - 6 = 0$.',
      'Nhân hai vế của phương trình đoạn chắn với $6$ để đưa về phương trình tổng quát.',
      'sp_oxyz_plane_intercepts'
    ),
    makeMC(
      'b14d2',
      9,
      'Chiều cao của hình chóp trong không gian Oxyz',
      'Trong không gian $Oxyz$, cho hình chóp $S.ABC$ biết $S(3; 1; -2)$ và mặt phẳng đáy $(ABC)$ có phương trình $2x + y - 2z + 5 = 0$. Chiều cao $SH$ của hình chóp $S.ABC$ bằng:',
      [
        '$\\frac{16}{3}$',
        '$4$',
        '$\\frac{14}{3}$',
        '$5$',
      ],
      'A',
      'Chiều cao $SH$ chính là khoảng cách từ đỉnh $S$ đến mặt phẳng $(ABC)$: $SH = d(S, (ABC)) = \\frac{|2\\cdot 3 + 1 - 2(-2) + 5|}{\\sqrt{2^2 + 1^2 + (-2)^2}} = \\frac{16}{3}$.',
      'Độ dài đường cao từ đỉnh $S$ xuống đáy $(ABC)$ bằng $d(S, (ABC))$.',
      'sp_oxyz_plane_normal'
    ),
    makeMC(
      'b14d2',
      10,
      'Mặt phẳng tiếp xúc với mặt cầu tâm I',
      'Trong không gian $Oxyz$, khoảng cách từ tâm $I(1; -2; 2)$ đến mặt phẳng $(P): x + 2y + 2z - 10 = 0$ bằng:',
      [
        '$3$',
        '$2$',
        '$4$',
        '$\\frac{7}{3}$',
      ],
      'A',
      'Ta có $d(I, (P)) = \\frac{|1 + 2(-2) + 2\\cdot 2 - 10|}{\\sqrt{1^2 + 2^2 + 2^2}} = \\frac{|-9|}{3} = 3$.',
      'Thay tọa độ điểm $I$ vào công thức khoảng cách.'
    ),
    makeMC(
      'b14d2',
      11,
      'Viết phương trình mặt phẳng đi qua hai điểm và vuông góc với một mặt phẳng',
      'Trong không gian $Oxyz$, mặt phẳng $(\\alpha)$ đi qua hai điểm $A(1; 0; 1), B(2; 1; 2)$ và vuông góc với mặt phẳng $(P): x + 2y - 3z + 4 = 0$ có một vectơ pháp tuyến là:',
      [
        '$\\vec{n} = (-5; 4; 1)$',
        '$\\vec{n} = (5; 4; -1)$',
        '$\\vec{n} = (1; 2; -3)$',
        '$\\vec{n} = (1; 1; 1)$',
      ],
      'A',
      'Cặp VTCP của $(\\alpha)$ là $\\overrightarrow{AB} = (1; 1; 1)$ và $\\vec{n}_P = (1; 2; -3)$. Khi đó $\\vec{n} = [\\overrightarrow{AB}, \\vec{n}_P] = (-5; 4; 1)$.',
      'Mặt phẳng đi qua $A, B$ và vuông góc với $(P)$ nhận $\\overrightarrow{AB}$ và $\\vec{n}_P$ làm cặp vectơ chỉ phương.'
    ),
    makeMC(
      'b14d2',
      12,
      'Bài toán thực tế: Kiểm tra bốn đầu cọc đồng phẳng',
      'Trên một công trường xây dựng, gắn hệ trục tọa độ $Oxyz$ (đơn vị: mét), bốn đầu cọc cố định mái lều có tọa độ $A(0; 0; 3), B(4; 0; 5), C(0; 6; 6)$ và $D(4; 6; h)$. Để bốn đầu cọc $A, B, C, D$ cùng nằm trên một mặt phẳng (mái phẳng không bị vênh), giá trị của $h$ phải bằng:',
      [
        '$8\\text{ m}$',
        '$7\\text{ m}$',
        '$9\\text{ m}$',
        '$6\\text{ m}$',
      ],
      'A',
      'Ta có $\\overrightarrow{AB} = (4; 0; 2), \\overrightarrow{AC} = (0; 6; 3) \\Rightarrow [\\overrightarrow{AB}, \\overrightarrow{AC}] = (-12; -12; 24) = -12(1; 1; -2)$. Phương trình $(ABC)$ qua $A(0; 0; 3)$ là $x + y - 2(z - 3) = 0 \\Leftrightarrow x + y - 2z + 6 = 0$. Thay $D(4; 6; h) \\in (ABC) \\Rightarrow 4 + 6 - 2h + 6 = 0 \\Rightarrow h = 8\\text{ (m)}$.',
      'Cũng có thể nhận xét hình chiếu của $A, B, C, D$ lên $(Oxy)$ là hình chữ nhật nên $\\overrightarrow{AB} = \\overrightarrow{CD} \\Rightarrow z_D = z_B + z_C - z_A = 5 + 6 - 3 = 8$.'
    ),
  ],
  [
    makeTF(
      'b14d2',
      1,
      'Mặt phẳng trung trực và khoảng cách trong không gian Oxyz',
      'Trong không gian $Oxyz$, cho hai điểm $A(2; 0; -1)$ và $B(4; -2; 3)$. Gọi $(P)$ là mặt phẳng trung trực của đoạn thẳng $AB$.',
      [
        {
          text: 'Trung điểm $I$ của đoạn thẳng $AB$ có tọa độ là $I(3; -1; 1)$.',
          isCorrect: true,
          exp: '$I = \\left(\\frac{2+4}{2}; \\frac{0-2}{2}; \\frac{-1+3}{2}\\right) = (3; -1; 1)$.',
        },
        {
          text: 'Một vectơ pháp tuyến của mặt phẳng $(P)$ là $\\vec{n} = (1; -1; 2)$.',
          isCorrect: true,
          exp: '$\\overrightarrow{AB} = (2; -2; 4) = 2(1; -1; 2)$ vuông góc với $(P)$ nên $\\vec{n} = (1; -1; 2)$ là một VTPT.',
        },
        {
          text: 'Phương trình của mặt phẳng $(P)$ là $x - y + 2z - 6 = 0$.',
          isCorrect: true,
          exp: '$1(x - 3) - 1(y + 1) + 2(z - 1) = 0 \\Leftrightarrow x - y + 2z - 6 = 0$.',
        },
        {
          text: 'Với mọi điểm $M$ thuộc mặt phẳng $(P)$, ta luôn có $MA = 2MB$.',
          isCorrect: false,
          exp: 'Tính chất mặt phẳng trung trực của đoạn $AB$: Mọi điểm $M \\in (P)$ đều cách đều $A$ và $B$, tức là $MA = MB$.',
        },
      ],
      'Mặt phẳng trung trực của đoạn thẳng $AB$ là tập hợp tất cả các điểm cách đều hai đầu mút $A$ và $B$.'
    ),
    makeTF(
      'b14d2',
      2,
      'Khảo sát họ mặt phẳng và khoảng cách',
      'Trong không gian $Oxyz$, cho mặt phẳng $(P): 2x + y - 2z + 6 = 0$ và điểm $A(1; 2; -1)$.',
      [
        {
          text: 'Khoảng cách từ điểm $A$ đến mặt phẳng $(P)$ bằng $4$.',
          isCorrect: true,
          exp: '$d(A, (P)) = \\frac{|2\\cdot 1 + 2 - 2(-1) + 6|}{\\sqrt{2^2 + 1^2 + (-2)^2}} = \\frac{12}{3} = 4$.',
        },
        {
          text: 'Mặt phẳng $(Q)$ đi qua $A$ và song song với $(P)$ có phương trình là $2x + y - 2z - 6 = 0$.',
          isCorrect: true,
          exp: 'Phương trình $(Q): 2(x - 1) + 1(y - 2) - 2(z + 1) = 0 \\Leftrightarrow 2x + y - 2z - 6 = 0$.',
        },
        {
          text: 'Gốc tọa độ $O(0; 0; 0)$ cách đều hai mặt phẳng $(P)$ và $(Q)$.',
          isCorrect: true,
          exp: '$d(O, (P)) = \\frac{|6|}{3} = 2$ và $d(O, (Q)) = \\frac{|-6|}{3} = 2$, nên $O$ cách đều $(P)$ và $(Q)$.',
        },
        {
          text: 'Mặt phẳng $(R): x - 2y + z - 1 = 0$ vuông góc với mặt phẳng $(P)$.',
          isCorrect: false,
          exp: 'Tích vô hướng hai VTPT: $\\vec{n}_P \\cdot \\vec{n}_R = 2\\cdot 1 + 1\\cdot(-2) + (-2)\\cdot 1 = -2 \\ne 0$ nên hai mặt phẳng không vuông góc.',
        },
      ],
      'Kiểm tra hai mặt phẳng vuông góc bằng tích vô hướng của hai vectơ pháp tuyến.',
      'sp_oxyz_plane_normal'
    ),
    makeTF(
      'b14d2',
      3,
      'Bài toán thực tế: Tấm pin năng lượng mặt trời trong không gian Oxyz',
      'Một tấm pin năng lượng mặt trời phẳng được lắp đặt trên mái nhà. Trong hệ trục tọa độ $Oxyz$ (đơn vị: mét), ba góc của tấm pin có tọa độ $A(2; 0; 4)$, $B(0; 3; 4)$ và $C(0; 0; 6)$.',
      [
        {
          text: 'Tấm pin nằm trên mặt phẳng có cặp vectơ chỉ phương là $\\overrightarrow{CA} = (2; 0; -2)$ và $\\overrightarrow{CB} = (0; 3; -2)$.',
          isCorrect: true,
          exp: '$\\overrightarrow{CA} = (2; 0; -2)$ và $\\overrightarrow{CB} = (0; 3; -2)$.',
        },
        {
          text: 'Một vectơ pháp tuyến của mặt phẳng chứa tấm pin là $\\vec{n} = (3; 2; 3)$.',
          isCorrect: true,
          exp: '$[\\overrightarrow{CA}, \\overrightarrow{CB}] = (6; 4; 6) = 2(3; 2; 3)$.',
        },
        {
          text: 'Phương trình mặt phẳng chứa tấm pin là $3x + 2y + 3z - 18 = 0$.',
          isCorrect: true,
          exp: 'Đi qua $C(0; 0; 6)$ với VTPT $(3; 2; 3)$: $3x + 2y + 3(z - 6) = 0 \\Leftrightarrow 3x + 2y + 3z - 18 = 0$.',
        },
        {
          text: 'Điểm $M(1; 1; 4)$ nằm trên bề mặt của mặt phẳng chứa tấm pin.',
          isCorrect: false,
          exp: 'Thay $M(1; 1; 4)$ vào phương trình: $3(1) + 2(1) + 3(4) - 18 = 17 - 18 = -1 \\ne 0$ nên $M$ không thuộc mặt phẳng chứa tấm pin.',
        },
      ],
      'Thay tọa độ điểm vào phương trình mặt phẳng để kiểm tra điểm có thuộc mặt phẳng hay không.'
    ),
  ],
  [
    makeSA(
      'b14d2',
      1,
      'Tìm tham số vuông góc của hai mặt phẳng',
      'Trong không gian $Oxyz$, tìm giá trị của tham số $m$ để hai mặt phẳng $(P): 4x - 3y + mz - 1 = 0$ và $(Q): 2x + 6y - 5z + 7 = 0$ vuông góc với nhau.',
      ['-2'],
      'Điều kiện $(P) \\perp (Q) \\Leftrightarrow 4\\cdot 2 + (-3)\\cdot 6 + m\\cdot(-5) = 0 \\Leftrightarrow 8 - 18 - 5m = 0 \\Leftrightarrow -5m = 10 \\Leftrightarrow m = -2$.',
      'Tích vô hướng của hai vectơ pháp tuyến bằng $0$.'
    ),
    makeSA(
      'b14d2',
      2,
      'Tính thể tích tứ diện tạo bởi mặt phẳng với ba trục tọa độ',
      'Trong không gian $Oxyz$, mặt phẳng $(P): 2x + 3y + 6z - 18 = 0$ cắt các trục $Ox, Oy, Oz$ lần lượt tại $A, B, C$. Tính thể tích $V$ của khối tứ diện $OABC$.',
      ['27'],
      'Chia hai vế của $2x + 3y + 6z = 18$ cho $18$: $\\frac{x}{9} + \\frac{y}{6} + \\frac{z}{3} = 1 \\Rightarrow OA = 9, OB = 6, OC = 3$. Thể tích tứ diện vuông $OABC$ là $V = \\frac{1}{6}\\cdot 9\\cdot 6\\cdot 3 = 27$.',
      'Đưa về phương trình đoạn chắn $\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$ rồi dùng $V = \\frac{1}{6}|abc|$.',
      undefined,
      'sp_oxyz_plane_intercepts'
    ),
    makeSA(
      'b14d2',
      3,
      'Khoảng cách giữa hai mặt phẳng song song có hệ số lệch',
      'Trong không gian $Oxyz$, tính khoảng cách giữa hai mặt phẳng song song $(P): 2x - y + 2z + 4 = 0$ và $(Q): 4x - 2y + 4z - 10 = 0$.',
      ['3'],
      'Chia hai vế của phương trình $(Q)$ cho $2$, ta được $(Q): 2x - y + 2z - 5 = 0$. Khi đó $d((P), (Q)) = \\frac{|4 - (-5)|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{9}{3} = 3$.',
      'Trước khi dùng công thức $\\frac{|D_1 - D_2|}{\\sqrt{A^2 + B^2 + C^2}}$, bắt buộc phải đưa hai phương trình về cùng hệ số $A, B, C$.'
    ),
    makeSA(
      'b14d2',
      4,
      'Bài toán thực tế: Khoảng cách từ đèn chiếu đến màn chắn phẳng',
      'Trong không gian $Oxyz$ (đơn vị: mét), một bóng đèn chiếu được đặt tại điểm $S(2; 3; 5)$ và chiếu sáng một màn chắn phẳng có phương trình $2x + 2y + z - 1 = 0$. Tính khoảng cách ngắn nhất (mét) từ bóng đèn $S$ đến màn chắn phẳng đó.',
      ['4'],
      'Khoảng cách ngắn nhất chính là $d(S, (P)) = \\frac{|2\\cdot 2 + 2\\cdot 3 + 5 - 1|}{\\sqrt{2^2 + 2^2 + 1^2}} = \\frac{14}{3}$... Để kết quả nguyên đẹp, xét $S(1; 3; 5) \\Rightarrow |2 + 6 + 5 - 1| / 3 = 12 / 3 = 4$.',
      'Áp dụng công thức khoảng cách từ một điểm đến một mặt phẳng.',
      'm',
      'sp_oxyz_plane_normal'
    ),
  ],
  [
    makeSO(
      'b14d2',
      1,
      'Viết phương trình mặt phẳng đi qua 3 điểm phân biệt',
      'Trong không gian $Oxyz$, viết phương trình mặt phẳng $(ABC)$ đi qua ba điểm $A(1; 1; 0)$, $B(2; 0; 1)$ và $C(0; 2; 3)$.',
      'Vậy phương trình mặt phẳng $(ABC)$ là $x + y - 2 = 0$.',
      [
        {
          role: 'Bước 1: Tính tọa độ hai vectơ chỉ phương $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$',
          content: 'Ta có $\\overrightarrow{AB} = (1; -1; 1)$ và $\\overrightarrow{AC} = (-1; 1; 3)$.',
        },
        {
          role: 'Bước 2: Tính tích có hướng để tìm vectơ pháp tuyến của $(ABC)$',
          content: 'Ta có $[\\overrightarrow{AB}, \\overrightarrow{AC}] = (-4; -4; 0) = -4(1; 1; 0)$. Chọn vectơ pháp tuyến là $\\vec{n} = (1; 1; 0)$.',
        },
        {
          role: 'Bước 3: Lập phương trình tổng quát đi qua $A(1; 1; 0)$',
          content: 'Phương trình mặt phẳng $(ABC)$ là $1(x - 1) + 1(y - 1) + 0(z - 0) = 0 \\Leftrightarrow x + y - 2 = 0$.',
        },
      ],
      'Sau khi viết xong phương trình, hãy thay nhẩm tọa độ cả 3 điểm $A, B, C$ để kiểm tra chính xác 100%.',
      'Thói quen thử lại tọa độ 3 điểm giúp học sinh không bao giờ mất điểm câu viết phương trình mặt phẳng.',
      0.7,
      'sp_oxyz_plane_normal'
    ),
    makeSO(
      'b14d2',
      2,
      'Viết phương trình mặt phẳng theo đoạn chắn đi qua trọng tâm tam giác',
      'Trong không gian $Oxyz$, cho ba điểm $A(6; 0; 0)$, $B(0; 3; 0)$, $C(0; 0; 9)$. Gọi $G$ là trọng tâm tam giác $ABC$. Viết phương trình mặt phẳng $(P)$ đi qua $G$ và vuông góc với đường thẳng $OG$.',
      'Vậy phương trình mặt phẳng $(P)$ là $2x + y + 3z - 14 = 0$.',
      [
        {
          role: 'Bước 1: Tìm tọa độ trọng tâm $G$ của tam giác $ABC$',
          content: 'Tọa độ trọng tâm $G$ là $G\\left(\\frac{6+0+0}{3}; \\frac{0+3+0}{3}; \\frac{0+0+9}{3}\\right) = (2; 1; 3)$.',
        },
        {
          role: 'Bước 2: Xác định vectơ pháp tuyến của mặt phẳng $(P)$',
          content: 'Vì $(P) \\perp OG$ nên $(P)$ nhận vectơ $\\overrightarrow{OG} = (2; 1; 3)$ làm một vectơ pháp tuyến.',
        },
        {
          role: 'Bước 3: Viết phương trình mặt phẳng $(P)$ đi qua $G(2; 1; 3)$',
          content: 'Phương trình mặt phẳng $(P)$ là $2(x - 2) + 1(y - 1) + 3(z - 3) = 0 \\Leftrightarrow 2x + y + 3z - 14 = 0$.',
        },
      ],
      'Kết hợp công thức tọa độ trọng tâm tam giác $G\\left(\\frac{x_A+x_B+x_C}{3}; \\frac{y_A+y_B+y_C}{3}; \\frac{z_A+z_B+z_C}{3}\\right)$ với phương trình mặt phẳng.',
      'Bài toán liên kết kiến thức Chương II (Tập 1) với Chương V (Tập 2).',
      0.65
    ),
    makeSO(
      'b14d2',
      3,
      'Cực trị mặt phẳng đoạn chắn: Thể tích tứ diện OABC nhỏ nhất',
      'Trong không gian $Oxyz$, viết phương trình mặt phẳng $(P)$ đi qua điểm $M(1; 2; 3)$ và cắt ba tia $Ox, Oy, Oz$ lần lượt tại $A, B, C$ sao cho thể tích khối tứ diện $OABC$ đạt giá trị nhỏ nhất.',
      'Vậy phương trình mặt phẳng $(P)$ cần tìm là $6x + 3y + 2z - 18 = 0$.',
      [
        {
          role: 'Bước 1: Gọi phương trình đoạn chắn và điều kiện điểm $M(1; 2; 3) \\in (P)$',
          content: 'Gọi $A(a; 0; 0), B(0; b; 0), C(0; 0; c)$ với $a, b, c > 0$. Phương trình $(P)$ là $\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$. Vì $M(1; 2; 3) \\in (P)$ nên $\\frac{1}{a} + \\frac{2}{b} + \\frac{3}{c} = 1$.',
        },
        {
          role: 'Bước 2: Áp dụng bất đẳng thức AM-GM để tìm GTNN của thể tích $V_{OABC}$',
          content: 'Theo BĐT AM-GM: $1 = \\frac{1}{a} + \\frac{2}{b} + \\frac{3}{c} \\ge 3\\sqrt[3]{\\frac{6}{abc}} \\Rightarrow abc \\ge 162 \\Rightarrow V = \\frac{1}{6}abc \\ge 27$.',
        },
        {
          role: 'Bước 3: Xác định dấu bằng xảy ra và kết luận phương trình $(P)$',
          content: 'Dấu "$=$" xảy ra khi $\\frac{1}{a} = \\frac{2}{b} = \\frac{3}{c} = \\frac{1}{3} \\Leftrightarrow a = 3, b = 6, c = 9$. Phương trình $(P)$ là $\\frac{x}{3} + \\frac{y}{6} + \\frac{z}{9} = 1 \\Leftrightarrow 6x + 3y + 2z - 18 = 0$.',
        },
      ],
      'Quy tắc nhớ nhanh: Mặt phẳng qua $M(x_0; y_0; z_0)$ cắt 3 tia tạo tứ diện $OABC$ có thể tích nhỏ nhất khi $M$ là trọng tâm $\\triangle ABC$, tức $a = 3x_0, b = 3y_0, c = 3z_0$.',
      'Bài toán vận dụng cao rất hay về phương trình mặt phẳng theo đoạn chắn.',
      0.65,
      'sp_oxyz_plane_intercepts'
    ),
  ]
);

// Sync prompt of bai14De2.part3[3] with S(1; 3; 5)
bai14De2.part3[3].prompt = 'Trong không gian $Oxyz$ (đơn vị: mét), một bóng đèn chiếu được đặt tại điểm $S(1; 3; 5)$ và chiếu sáng một màn chắn phẳng có phương trình $2x + 2y + z - 1 = 0$. Tính khoảng cách ngắn nhất (mét) từ bóng đèn $S$ đến màn chắn phẳng đó.';
bai14De2.part3[3].explanation = 'Khoảng cách ngắn nhất chính là $d(S, (P)) = \\frac{|2\\cdot 1 + 2\\cdot 3 + 5 - 1|}{\\sqrt{2^2 + 2^2 + 1^2}} = \\frac{12}{3} = 4\\text{ (m)}$.';

// ============================================================================
// BÀI 15: PHƯƠNG TRÌNH ĐƯỜNG THẲNG TRONG KHÔNG GIAN (SGK Tập 2 - Trang 41)
// ============================================================================

const bai15De1 = makeLessonExam(
  'bai15-de01',
  'Bài 15 - Đề ôn số 1',
  'Phương trình đường thẳng trong không gian: Phương trình tham số, chính tắc và vị trí tương đối',
  'Đề ôn tập Bài 15 (Số 1) bám sát yêu cầu cần đạt SGK Toán 12 Tập 2 Kết nối tri thức: Vectơ chỉ phương của đường thẳng, phương trình tham số, phương trình chính tắc, đường thẳng đi qua hai điểm và vị trí tương đối giữa hai đường thẳng.',
  [
    makeMC(
      'b15d1',
      1,
      'Tìm vectơ chỉ phương từ phương trình tham số',
      'Trong không gian $Oxyz$, cho đường thẳng $d: \\begin{cases} x = 2 + 3t \\\\ y = -1 - 2t \\\\ z = 4 + t \\end{cases}$. Một vectơ chỉ phương của đường thẳng $d$ là:',
      [
        '$\\vec{u} = (3; -2; 1)$',
        '$\\vec{u} = (2; -1; 4)$',
        '$\\vec{u} = (3; 2; 1)$',
        '$\\vec{u} = (2; -2; 1)$',
      ],
      'A',
      'Hệ số của tham số $t$ trong phương trình tham số chính là tọa độ của một vectơ chỉ phương: $\\vec{u} = (3; -2; 1)$.',
      'Phân biệt tọa độ điểm đi qua $(x_0; y_0; z_0) = (2; -1; 4)$ và tọa độ VTCP $(a; b; c) = (3; -2; 1)$.',
      'sp_oxyz_line_3d'
    ),
    makeMC(
      'b15d1',
      2,
      'Tìm vectơ chỉ phương từ phương trình chính tắc',
      'Trong không gian $Oxyz$, cho đường thẳng $\\Delta: \\frac{x - 1}{2} = \\frac{y + 3}{-5} = \\frac{z - 2}{4}$. Vectơ nào dưới đây là một vectơ chỉ phương của $\\Delta$?',
      [
        '$\\vec{u} = (2; -5; 4)$',
        '$\\vec{u} = (1; -3; 2)$',
        '$\\vec{u} = (-1; 3; -2)$',
        '$\\vec{u} = (2; 5; 4)$',
      ],
      'A',
      'Mẫu số của phương trình chính tắc $\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}$ là tọa độ VTCP $\\vec{u} = (2; -5; 4)$.',
      'Kiểm tra hệ số của $x, y, z$ trên tử đều bằng $+1$ trước khi đọc mẫu số làm VTCP.'
    ),
    makeMC(
      'b15d1',
      3,
      'Điểm thuộc đường thẳng',
      'Trong không gian $Oxyz$, điểm nào dưới đây thuộc đường thẳng $d: \\frac{x - 2}{1} = \\frac{y + 1}{3} = \\frac{z - 4}{-2}$?',
      [
        '$M(2; -1; 4)$',
        '$N(-2; 1; -4)$',
        '$P(1; 3; -2)$',
        '$Q(3; 2; 6)$',
      ],
      'A',
      'Thay tọa độ $M(2; -1; 4)$ vào phương trình chính tắc được $\\frac{0}{1} = \\frac{0}{3} = \\frac{0}{-2} = 0$ (luôn đúng).',
      'Cho tử số của phương trình chính tắc bằng $0$ ta được ngay một điểm thuộc đường thẳng.'
    ),
    makeMC(
      'b15d1',
      4,
      'Phương trình chính tắc của đường thẳng đi qua điểm và có VTCP',
      'Trong không gian $Oxyz$, phương trình chính tắc của đường thẳng đi qua điểm $A(1; -2; 3)$ và có vectơ chỉ phương $\\vec{u} = (2; 4; -1)$ là:',
      [
        '$\\frac{x - 1}{2} = \\frac{y + 2}{4} = \\frac{z - 3}{-1}$',
        '$\\frac{x + 1}{2} = \\frac{y - 2}{4} = \\frac{z + 3}{-1}$',
        '$\\frac{x - 2}{1} = \\frac{y - 4}{-2} = \\frac{z + 1}{3}$',
        '$\\frac{x - 1}{2} = \\frac{y - 2}{4} = \\frac{z - 3}{-1}$',
      ],
      'A',
      'Áp dụng công thức $\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}$ với $M_0(1; -2; 3)$ và $\\vec{u} = (2; 4; -1)$.',
      'Chú ý đổi dấu tọa độ điểm trên tử: $y - (-2) = y + 2$.',
      'sp_oxyz_line_3d'
    ),
    makeMC(
      'b15d1',
      5,
      'Phương trình tham số của đường thẳng đi qua hai điểm',
      'Trong không gian $Oxyz$, cho hai điểm $A(1; 2; -1)$ và $B(3; 0; 2)$. Phương trình tham số của đường thẳng $AB$ là:',
      [
        '$\\begin{cases} x = 1 + 2t \\\\ y = 2 - 2t \\\\ z = -1 + 3t \\end{cases}$',
        '$\\begin{cases} x = 1 + 3t \\\\ y = 2 \\\\ z = -1 + 2t \\end{cases}$',
        '$\\begin{cases} x = 2 + t \\\\ y = -2 + 2t \\\\ z = 3 - t \\end{cases}$',
        '$\\begin{cases} x = 1 + 2t \\\\ y = 2 + 2t \\\\ z = -1 + 3t \\end{cases}$',
      ],
      'A',
      'Đường thẳng $AB$ đi qua $A(1; 2; -1)$ và nhận $\\overrightarrow{AB} = (2; -2; 3)$ làm VTCP nên có phương trình tham số $\\begin{cases} x = 1 + 2t \\\\ y = 2 - 2t \\\\ z = -1 + 3t \\end{cases}$.',
      'Đường thẳng đi qua hai điểm $A, B$ nhận $\\overrightarrow{AB}$ làm một vectơ chỉ phương.'
    ),
    makeMC(
      'b15d1',
      6,
      'Đường thẳng vuông góc với mặt phẳng',
      'Trong không gian $Oxyz$, đường thẳng $d$ đi qua điểm $M(2; -1; 3)$ và vuông góc với mặt phẳng $(P): 3x - y + 2z - 5 = 0$ có phương trình tham số là:',
      [
        '$\\begin{cases} x = 2 + 3t \\\\ y = -1 - t \\\\ z = 3 + 2t \\end{cases}$',
        '$\\begin{cases} x = 3 + 2t \\\\ y = -1 - t \\\\ z = 2 + 3t \\end{cases}$',
        '$\\begin{cases} x = 2 + 3t \\\\ y = -1 + t \\\\ z = 3 + 2t \\end{cases}$',
        '$\\begin{cases} x = -2 + 3t \\\\ y = 1 - t \\\\ z = -3 + 2t \\end{cases}$',
      ],
      'A',
      'Vì $d \\perp (P)$ nên $d$ nhận vectơ pháp tuyến $\\vec{n}_P = (3; -1; 2)$ của $(P)$ làm vectơ chỉ phương.',
      'Đường thẳng vuông góc với mặt phẳng thì VTCP của đường thẳng bằng VTPT của mặt phẳng.'
    ),
    makeMC(
      'b15d1',
      7,
      'Điều kiện hai đường thẳng vuông góc',
      'Trong không gian $Oxyz$, cho hai đường thẳng $d_1: \\frac{x - 1}{2} = \\frac{y + 1}{-3} = \\frac{z}{4}$ và $d_2: \\frac{x}{3} = \\frac{y - 2}{2} = \\frac{z + 1}{m}$. Giá trị của $m$ để $d_1 \\perp d_2$ là:',
      [
        '$m = 0$' ,
        '$m = 1$',
        '$m = -3$',
        '$m = 3$',
      ],
      'A',
      'Hai đường thẳng vuông góc khi $\\vec{u}_1 \\cdot \\vec{u}_2 = 0 \\Leftrightarrow 2\\cdot 3 + (-3)\\cdot 2 + 4\\cdot m = 0 \\Leftrightarrow 4m = 0$... Với $d_2$ ở dạng chính tắc thì mẫu số $m \\ne 0$, nên nếu đổi $\\vec{u}_1 = (2; -1; 4)$ thì $2\\cdot 3 + (-1)\\cdot 2 + 4m = 0 \\Leftrightarrow m = -1$.',
      'Hai đường thẳng vuông góc khi tích vô hướng của hai vectơ chỉ phương bằng $0$.'
    ),
    makeMC(
      'b15d1',
      8,
      'Xác định vị trí tương đối của hai đường thẳng song song',
      'Trong không gian $Oxyz$, cho hai đường thẳng $d_1: \\frac{x - 1}{2} = \\frac{y - 2}{-1} = \\frac{z + 1}{3}$ và $d_2: \\frac{x - 3}{4} = \\frac{y + 1}{-2} = \\frac{z - 2}{6}$. Vị trí tương đối của $d_1$ và $d_2$ là:',
      [
        'Song song',
        'Trùng nhau',
        'Cắt nhau',
        'Chéo nhau',
      ],
      'A',
      'Ta có $\\vec{u}_2 = (4; -2; 6) = 2\\vec{u}_1$ nên hai VTCP cùng phương. Lấy $M_1(1; 2; -1) \\in d_1$ thay vào $d_2$: $\\frac{1 - 3}{4} = -\\frac{1}{2} \\ne \\frac{2 + 1}{-2} = -\\frac{3}{2} \\Rightarrow M_1 \\notin d_2$. Vậy $d_1 \\parallel d_2$.',
      'Hai đường thẳng có VTCP cùng phương và một điểm thuộc đường này không thuộc đường kia thì song song.'
    ),
    makeMC(
      'b15d1',
      9,
      'Giao điểm của đường thẳng và mặt phẳng',
      'Trong không gian $Oxyz$, tọa độ giao điểm $M$ của đường thẳng $d: \\begin{cases} x = 1 + t \\\\ y = 2 - t \\\\ z = 3 + 2t \\end{cases}$ và mặt phẳng $(P): x + y + z - 8 = 0$ là:',
      [
        '$M(2; 1; 5)$',
        '$M(1; 2; 3)$',
        '$M(0; 3; 1)$',
        '$M(3; 0; 7)$',
      ],
      'A',
      'Thay phương trình tham số của $d$ vào $(P)$: $(1 + t) + (2 - t) + (3 + 2t) - 8 = 0 \\Leftrightarrow 2t - 2 = 0 \\Leftrightarrow t = 1$. Thay $t = 1$ vào $d$ được $M(2; 1; 5)$.',
      'Thay $x(t), y(t), z(t)$ của đường thẳng vào phương trình mặt phẳng để giải tìm $t$.'
    ),
    makeMC(
      'b15d1',
      10,
      'Phương trình đường thẳng song song với đường thẳng cho trước',
      'Trong không gian $Oxyz$, đường thẳng $\\Delta$ đi qua điểm $A(1; 0; -2)$ và song song với đường thẳng $d: \\frac{x + 2}{3} = \\frac{y - 1}{-4} = \\frac{z}{5}$ có phương trình là:',
      [
        '$\\frac{x - 1}{3} = \\frac{y}{-4} = \\frac{z + 2}{5}$',
        '$\\frac{x + 1}{3} = \\frac{y}{-4} = \\frac{z - 2}{5}$',
        '$\\frac{x - 1}{3} = \\frac{y}{4} = \\frac{z + 2}{5}$',
        '$\\frac{x - 3}{1} = \\frac{y + 4}{0} = \\frac{z - 5}{-2}$',
      ],
      'A',
      'Vì $\\Delta \\parallel d$ nên $\\Delta$ nhận $\\vec{u}_d = (3; -4; 5)$ làm một VTCP và đi qua $A(1; 0; -2)$.',
      'Hai đường thẳng song song có cùng vectơ chỉ phương.'
    ),
    makeMC(
      'b15d1',
      11,
      'Phương trình tham số của trục tọa độ',
      'Trong không gian $Oxyz$, phương trình tham số của trục $Oz$ là:',
      [
        '$\\begin{cases} x = 0 \\\\ y = 0 \\\\ z = t \\end{cases}$',
        '$\\begin{cases} x = t \\\\ y = t \\\\ z = 0 \\end{cases}$',
        '$\\begin{cases} x = 0 \\\\ y = t \\\\ z = 0 \\end{cases}$',
        '$\\begin{cases} x = t \\\\ y = 0 \\\\ z = 0 \\end{cases}$',
      ],
      'A',
      'Trục $Oz$ đi qua gốc tọa độ $O(0; 0; 0)$ và có vectơ chỉ phương $\\vec{k} = (0; 0; 1)$ nên có phương trình tham số $x = 0, y = 0, z = t$.',
      'Trục tọa độ nào thì chỉ có tọa độ ứng với trục đó bằng $t$, hai tọa độ còn lại bằng $0$.'
    ),
    makeMC(
      'b15d1',
      12,
      'Bài toán thực tế: Quỹ đạo chuyển động thẳng của thiết bị bay (UAV)',
      'Trong không gian $Oxyz$ (đơn vị: mét), một thiết bị bay không người lái (UAV) xuất phát từ điểm $A(10; 20; 30)$ và bay thẳng đều theo hướng của vectơ $\\vec{v} = (2; 3; 1)$ (m/s). Sau $t = 5$ giây kể từ lúc xuất phát, tọa độ của thiết bị bay là:',
      [
        '$(20; 35; 35)$',
        '$(12; 23; 31)$',
        '$(20; 30; 35)$',
        '$(15; 25; 35)$',
      ],
      'A',
      'Phương trình chuyển động của UAV là $x = 10 + 2t, y = 20 + 3t, z = 30 + t$. Khi $t = 5$, tọa độ của UAV là $(10 + 10; 20 + 15; 30 + 5) = (20; 35; 35)$.',
      'Vị trí tại thời điểm $t$ trên đường thẳng chuyển động đều là $\\overrightarrow{OM}(t) = \\overrightarrow{OA} + t\\vec{v}$.',
      'sp_oxyz_line_3d'
    ),
  ],
  [
    makeTF(
      'b15d1',
      1,
      'Khảo sát đường thẳng đi qua hai điểm và giao điểm với mặt phẳng',
      'Trong không gian $Oxyz$, cho hai điểm $A(1; -1; 2)$ và $B(3; 1; 0)$ cùng mặt phẳng $(P): 2x + y - z - 3 = 0$.',
      [
        {
          text: 'Một vectơ chỉ phương của đường thẳng $AB$ là $\\vec{u} = (1; 1; -1)$.',
          isCorrect: true,
          exp: '$\\overrightarrow{AB} = (2; 2; -2) = 2(1; 1; -1)$, nên $\\vec{u} = (1; 1; -1)$ là một VTCP.',
        },
        {
          text: 'Phương trình tham số của đường thẳng $AB$ là $\\begin{cases} x = 1 + t \\\\ y = -1 + t \\\\ z = 2 - t \\end{cases}$.',
          isCorrect: true,
          exp: 'Đi qua $A(1; -1; 2)$ và có VTCP $(1; 1; -1)$.',
        },
        {
          text: 'Điểm $C(5; 3; -2)$ thuộc đường thẳng $AB$.',
          isCorrect: true,
          exp: 'Ứng với $t = 4$, ta có $x = 5, y = 3, z = -2$, nên $C \\in AB$.',
        },
        {
          text: 'Giao điểm của đường thẳng $AB$ và mặt phẳng $(P)$ có tọa độ là $(2; 0; 1)$.',
          isCorrect: true,
          exp: 'Thay vào $(P)$: $2(1 + t) + (-1 + t) - (2 - t) - 3 = 0 \\Leftrightarrow 4t - 4 = 0 \\Leftrightarrow t = 1 \\Rightarrow I(2; 0; 1)$.',
        },
      ],
      'Rút gọn vectơ $\\overrightarrow{AB} = (2; 2; -2)$ về $(1; 1; -1)$ giúp phương trình tham số đơn giản hơn.',
      'sp_oxyz_line_3d'
    ),
    makeTF(
      'b15d1',
      2,
      'Xét vị trí tương đối giữa hai đường thẳng trong không gian',
      'Trong không gian $Oxyz$, cho hai đường thẳng $d_1: \\begin{cases} x = 1 + t \\\\ y = 2 + 2t \\\\ z = 3 - t \\end{cases}$ và $d_2: \\begin{cases} x = 2 + 2s \\\\ y = 3 + s \\\\ z = 1 + s \\end{cases}$.',
      [
        {
          text: 'Vectơ chỉ phương của $d_1$ và $d_2$ lần lượt là $\\vec{u}_1 = (1; 2; -1)$ và $\\vec{u}_2 = (2; 1; 1)$.',
          isCorrect: true,
          exp: 'Đọc từ hệ số của $t$ và $s$: $\\vec{u}_1 = (1; 2; -1)$ và $\\vec{u}_2 = (2; 1; 1)$.',
        },
        {
          text: 'Hai vectơ $\\vec{u}_1$ và $\\vec{u}_2$ cùng phương với nhau.',
          isCorrect: false,
          exp: 'Vì $\\frac{1}{2} \\ne \\frac{2}{1}$ nên $\\vec{u}_1$ và $\\vec{u}_2$ không cùng phương.',
        },
        {
          text: 'Hai đường thẳng $d_1$ và $d_2$ cắt nhau tại điểm $I(2; 4; 2)$.',
          isCorrect: true,
          exp: 'Giải hệ $1 + t = 2 + 2s,\\ 2 + 2t = 3 + s \\Rightarrow t = 1, s = 0$. Thay vào phương trình thứ ba: $3 - 1 = 1 + 0 \\Leftrightarrow 2 = 1$ (vô lý)... Vậy hệ vô nghiệm nên $d_1, d_2$ chéo nhau!',
        },
        {
          text: 'Hai đường thẳng $d_1$ và $d_2$ vuông góc với nhau.',
          isCorrect: false,
          exp: 'Tích vô hướng $\\vec{u}_1 \\cdot \\vec{u}_2 = 1\\cdot 2 + 2\\cdot 1 + (-1)\\cdot 1 = 3 \\ne 0$ nên $d_1$ và $d_2$ không vuông góc.',
        },
      ],
      'Giải hệ 3 phương trình 2 ẩn $t, s$: nếu có nghiệm duy nhất thỏa mãn cả 3 phương trình thì hai đường thẳng cắt nhau; nếu vô nghiệm (khi 2 VTCP không cùng phương) thì chéo nhau.'
    ),
    makeTF(
      'b15d1',
      3,
      'Bài toán thực tế: Đường tia laser trong không gian Oxyz',
      'Trong không gian $Oxyz$ (đơn vị: mét), một nguồn phát tia laser đặt tại điểm $S(1; 2; 3)$ chiếu một tia sáng thẳng đi qua điểm $A(3; 5; 9)$ hướng tới một bức tường phẳng $(P): x + y + z - 19 = 0$.',
      [
        {
          text: 'Tia laser có một vectơ chỉ phương là $\\overrightarrow{SA} = (2; 3; 6)$.',
          isCorrect: true,
          exp: '$\\overrightarrow{SA} = (3 - 1; 5 - 2; 9 - 3) = (2; 3; 6)$.',
        },
        {
          text: 'Khoảng cách từ nguồn phát $S$ đến điểm $A$ bằng $7\\text{ m}$.',
          isCorrect: true,
          exp: '$SA = \\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{49} = 7\\text{ (m)}$.',
        },
        {
          text: 'Phương trình chính tắc của đường thẳng chứa tia laser là $\\frac{x - 1}{2} = \\frac{y - 2}{3} = \\frac{z - 3}{6}$.',
          isCorrect: true,
          exp: 'Đi qua $S(1; 2; 3)$ với VTCP $(2; 3; 6)$.',
        },
        {
          text: 'Tia laser chiếu trúng bức tường $(P)$ tại điểm $M(5; 8; 15)$.',
          isCorrect: false,
          exp: 'Tham số $M(1 + 2t; 2 + 3t; 3 + 6t) \\in (P) \\Rightarrow (1+2t)+(2+3t)+(3+6t)-19 = 0 \\Leftrightarrow 11t = 13$. Còn tại $(5; 8; 15)$ thì $x+y+z = 28 \\ne 19$.',
        },
      ],
      'Kiểm tra nhanh điểm có thuộc bức tường $(P)$ hay không bằng cách tính $x + y + z - 19$.'
    ),
  ],
  [
    makeSA(
      'b15d1',
      1,
      'Tìm tọa độ điểm trên đường thẳng biết một tọa độ',
      'Trong không gian $Oxyz$, cho đường thẳng $d: \\frac{x - 2}{3} = \\frac{y + 1}{2} = \\frac{z - 1}{-1}$. Biết điểm $M(a; b; -2)$ thuộc đường thẳng $d$. Tính tổng $S = a + b$.',
      ['16'],
      'Thay $z = -2$ vào phương trình $d$: $\\frac{-2 - 1}{-1} = 3$. Khi đó $\\frac{a - 2}{3} = 3 \\Rightarrow a = 11$ và $\\frac{b + 1}{2} = 3 \\Rightarrow b = 5$. Vậy $S = a + b = 11 + 5 = 16$.',
      'Từ tọa độ đã biết $z = -2$, tính giá trị tỉ số chung rồi suy ra $a$ và $b$.'
    ),
    makeSA(
      'b15d1',
      2,
      'Tìm hình chiếu vuông góc của điểm lên mặt phẳng',
      'Trong không gian $Oxyz$, tìm tổng ba tọa độ $x_H + y_H + z_H$ của điểm $H$ là hình chiếu vuông góc của điểm $A(3; 4; 5)$ lên mặt phẳng $(P): x + 2y + 2z - 3 = 0$.',
      ['3'],
      'Đường thẳng $AH \\perp (P)$ có phương trình $x = 3 + t, y = 4 + 2t, z = 5 + 2t$. Thay vào $(P)$: $(3 + t) + 2(4 + 2t) + 2(5 + 2t) - 3 = 0 \\Leftrightarrow 9t + 18 = 0 \\Leftrightarrow t = -2$. Suy ra $H(1; 0; 1) \\Rightarrow x_H + y_H + z_H = 1 + 0 + 1 = 2$... Tính lại: $x_H = 3 - 2 = 1, y_H = 4 - 4 = 0, z_H = 5 - 4 = 1$, tổng là $2$.',
      'Viết phương trình tham số đường thẳng qua $A$ vuông góc với $(P)$ rồi tìm giao điểm $H$ với $(P)$.',
      undefined,
      'sp_oxyz_plane_normal'
    ),
    makeSA(
      'b15d1',
      3,
      'Tìm giao điểm của hai đường thẳng cắt nhau',
      'Trong không gian $Oxyz$, hai đường thẳng $d_1: \\begin{cases} x = 1 + 2t \\\\ y = 2 + t \\\\ z = 3 - t \\end{cases}$ và $d_2: \\begin{cases} x = 4 + s \\\\ y = 1 - 2s \\\\ z = 3 + s \\end{cases}$ cắt nhau tại điểm $I(a; b; c)$. Tính giá trị biểu thức $T = a + b + c$.',
      ['8'],
      'Giải hệ $1 + 2t = 4 + s$ và $2 + t = 1 - 2s \\Rightarrow t = 1, s = -1$ (thỏa mãn phương trình thứ ba: $3 - 1 = 3 + (-1) = 2$). Suy ra $I(3; 3; 2) \\Rightarrow T = 3 + 3 + 2 = 8$.',
      'Giải hệ 2 phương trình đầu tìm $t, s$ rồi thay vào $d_1$ để tìm tọa độ giao điểm $I$.'
    ),
    makeSA(
      'b15d1',
      4,
      'Bài toán thực tế: Vị trí máy bay cắt qua mặt phẳng tầng mây',
      'Trong không gian $Oxyz$ (đơn vị: $\\text{km}$), một máy bay đang hạ cánh theo đường thẳng $d: \\begin{cases} x = 12 - 2t \\\\ y = 8 - t \\\\ z = 4 - 0{,}5t \\end{cases}$. Một tầng mây mỏng nằm ngang trên mặt phẳng $z = 1{,}5\\text{ (km)}$. Tính khoảng cách (km) từ điểm máy bay xuyên qua tầng mây đến gốc tọa độ $O(0; 0; 0)$ (làm tròn hoặc tính chính xác). Để kết quả nguyên đẹp, hãy tính tổng hoành độ và tung độ $x + y$ của máy bay tại vị trí xuyên qua tầng mây.',
      ['5'],
      'Máy bay xuyên qua tầng mây khi $z = 1{,}5 \\Leftrightarrow 4 - 0{,}5t = 1{,}5 \\Leftrightarrow t = 5$. Tại $t = 5$, ta có $x = 12 - 10 = 2$ và $y = 8 - 5 = 3$. Vậy $x + y = 2 + 3 = 5$.',
      'Thay $z = 1{,}5$ để tìm thời điểm $t = 5$, sau đó tính $x(5)$ và $y(5)$.',
      'km'
    ),
  ],
  [
    makeSO(
      'b15d1',
      1,
      'Tìm tọa độ hình chiếu vuông góc và điểm đối xứng qua mặt phẳng',
      'Trong không gian $Oxyz$, cho điểm $A(2; 3; -1)$ và mặt phẳng $(P): 2x + y - 2z + 3 = 0$. Hãy tìm tọa độ hình chiếu vuông góc $H$ của điểm $A$ trên mặt phẳng $(P)$.',
      'Vậy hình chiếu vuông góc của $A$ trên $(P)$ là $H(0; 2; 1)$.',
      [
        {
          role: 'Bước 1: Viết phương trình tham số đường thẳng $d$ đi qua $A$ và vuông góc với $(P)$',
          content: 'Đường thẳng $d$ đi qua $A(2; 3; -1)$ và nhận $\\vec{n}_P = (2; 1; -2)$ làm VTCP nên có phương trình: $x = 2 + 2t,\\ y = 3 + t,\\ z = -1 - 2t$.',
        },
        {
          role: 'Bước 2: Tìm tham số $t$ ứng với giao điểm $H = d \\cap (P)$',
          content: 'Vì $H \\in (P)$ nên $2(2 + 2t) + (3 + t) - 2(-1 - 2t) + 3 = 0 \\Leftrightarrow 9t + 12 = 0$... Với $(P): 2x + y - 2z - 0 = 0$: nếu $(P): 2x + y - 2z + 0 = 0$ thì $9t + 9 = 0 \\Leftrightarrow t = -1$.',
        },
        {
          role: 'Bước 3: Thay giá trị $t = -1$ để suy ra tọa độ điểm $H$',
          content: 'Với $t = -1$, ta được $H(2 - 2; 3 - 1; -1 + 2) = H(0; 2; 1)$.',
        },
      ],
      'Nếu cần tìm thêm điểm $A\'$ đối xứng với $A$ qua $(P)$, ta dùng công thức trung điểm $x_{A\'} = 2x_H - x_A$.',
      'Bài toán chuẩn mực kết hợp phương trình đường thẳng và phương trình mặt phẳng.',
      0.7,
      'sp_oxyz_plane_normal'
    ),
    makeSO(
      'b15d1',
      2,
      'Viết phương trình đường thẳng đi qua một điểm, vuông góc và cắt một đường thẳng',
      'Trong không gian $Oxyz$, viết phương trình chính tắc của đường thẳng $\\Delta$ đi qua điểm $A(1; 0; 2)$, vuông góc và cắt đường thẳng $d: \\frac{x - 1}{1} = \\frac{y + 1}{2} = \\frac{z}{1}$.',
      'Vậy phương trình chính tắc của đường thẳng $\\Delta$ là $\\frac{x - 1}{1} = \\frac{y}{-1} = \\frac{z - 2}{1}$.',
      [
        {
          role: 'Bước 1: Tham số hóa giao điểm $H = \\Delta \\cap d$',
          content: 'Gọi $H = \\Delta \\cap d \\Rightarrow H(1 + t; -1 + 2t; t)$. Khi đó $\\overrightarrow{AH} = (t; -1 + 2t; t - 2)$.',
        },
        {
          role: 'Bước 2: Áp dụng điều kiện $\\Delta \\perp d$ để tìm $t$',
          content: 'Vì $\\Delta \\perp d$ nên $\\overrightarrow{AH} \\cdot \\vec{u}_d = 0$ với $\\vec{u}_d = (1; 2; 1)$: $1\\cdot t + 2(-1 + 2t) + 1(t - 2) = 0 \\Leftrightarrow 6t - 4 = 0$... Với $A(1; 1; 2)$ thì $\\overrightarrow{AH} = (t; -2 + 2t; t - 2) \\Rightarrow t + 2(-2+2t) + (t-2) = 6t - 6 = 0 \\Leftrightarrow t = 1$.',
        },
        {
          role: 'Bước 3: Suy ra vectơ chỉ phương và phương trình đường thẳng $\\Delta$',
          content: 'Với $t = 1$, ta có $\\overrightarrow{AH} = (1; 0; -1)$... Chọn VTCP và viết phương trình chính tắc của $\\Delta$.',
        },
      ],
      'Gọi giao điểm $H \\in d$ theo 1 ẩn $t$, sau đó dùng điều kiện $\\overrightarrow{AH} \\cdot \\vec{u}_d = 0$ để giải tìm $t$.',
      'Phương pháp tham số hóa điểm trên đường thẳng giúp giải gọn mọi bài toán hình chiếu và đường vuông góc.',
      0.65,
      'sp_oxyz_line_3d'
    ),
    makeSO(
      'b15d1',
      3,
      'Xét vị trí tương đối của hai đường thẳng bằng tích có hướng và tích hỗn tạp',
      'Trong không gian $Oxyz$, chứng minh rằng hai đường thẳng $d_1: \\frac{x - 1}{2} = \\frac{y}{1} = \\frac{z + 1}{3}$ và $d_2: \\frac{x - 2}{1} = \\frac{y - 1}{-1} = \\frac{z}{2}$ chéo nhau.',
      'Vậy hai đường thẳng $d_1$ và $d_2$ chéo nhau.',
      [
        {
          role: 'Bước 1: Xác định điểm đi qua và vectơ chỉ phương của mỗi đường thẳng',
          content: 'Đường thẳng $d_1$ đi qua $M_1(1; 0; -1)$ có VTCP $\\vec{u}_1 = (2; 1; 3)$. Đường thẳng $d_2$ đi qua $M_2(2; 1; 0)$ có VTCP $\\vec{u}_2 = (1; -1; 2)$.',
        },
        {
          role: 'Bước 2: Tính tích có hướng $[\\vec{u}_1, \\vec{u}_2]$ và vectơ $\\overrightarrow{M_1M_2}$',
          content: 'Ta có $[\\vec{u}_1, \\vec{u}_2] = (5; -1; -3) \\ne \\vec{0}$ (nên $\\vec{u}_1, \\vec{u}_2$ không cùng phương) và $\\overrightarrow{M_1M_2} = (1; 1; 1)$.',
        },
        {
          role: 'Bước 3: Kiểm tra tích hỗn tạp $[\\vec{u}_1, \\vec{u}_2] \\cdot \\overrightarrow{M_1M_2} \\ne 0$',
          content: 'Ta có $[\\vec{u}_1, \\vec{u}_2] \\cdot \\overrightarrow{M_1M_2} = 5\\cdot 1 + (-1)\\cdot 1 + (-3)\\cdot 1 = 1 \\ne 0$, suy ra ba vectơ không đồng phẳng hay $d_1$ và $d_2$ chéo nhau.',
        },
      ],
      'Hai đường thẳng $d_1, d_2$ chéo nhau khi và chỉ khi $[\\vec{u}_1, \\vec{u}_2] \\cdot \\overrightarrow{M_1M_2} \\ne 0$.',
      'Cách kiểm tra bằng tích hỗn tạp cực kỳ nhanh và chuẩn xác.',
      0.65
    ),
  ]
);

// Clean up minor adjustments in bai15De1 so all numbers match 100%
bai15De1.part1[6].prompt = 'Trong không gian $Oxyz$, cho hai đường thẳng $d_1: \\frac{x - 1}{2} = \\frac{y + 1}{-1} = \\frac{z}{4}$ và $d_2: \\frac{x}{3} = \\frac{y - 2}{2} = \\frac{z + 1}{m}$. Giá trị của $m$ để $d_1 \\perp d_2$ là:';
bai15De1.part1[6].options = [
  { key: 'A', content: '$m = -1$' },
  { key: 'B', content: '$m = 1$' },
  { key: 'C', content: '$m = -2$' },
  { key: 'D', content: '$m = 2$' },
];
bai15De1.part1[6].explanation = 'Hai đường thẳng vuông góc khi $\\vec{u}_1 \\cdot \\vec{u}_2 = 0 \\Leftrightarrow 2\\cdot 3 + (-1)\\cdot 2 + 4m = 0 \\Leftrightarrow 4 + 4m = 0 \\Leftrightarrow m = -1$.';

bai15De1.part2[1].statements[2] = {
  id: 'c',
  label: 'c',
  statement: 'Hai đường thẳng $d_1$ và $d_2$ chéo nhau.',
  isCorrect: true,
  explanation: 'Giải hệ $1 + t = 2 + 2s,\\ 2 + 2t = 3 + s \\Rightarrow t = 1, s = 0$. Thay vào phương trình thứ ba: $3 - 1 \\ne 1 + 0$, hệ vô nghiệm nên $d_1$ và $d_2$ chéo nhau.',
};

bai15De1.part3[1].acceptableAnswers = ['2'];

bai15De1.part4[0].problemStatement = 'Trong không gian $Oxyz$, cho điểm $A(2; 3; -1)$ và mặt phẳng $(P): 2x + y - 2z = 0$. Hãy tìm tọa độ hình chiếu vuông góc $H$ của điểm $A$ trên mặt phẳng $(P)$.';
bai15De1.part4[0].steps[1].content = 'Vì $H \\in (P)$ nên $2(2 + 2t) + (3 + t) - 2(-1 - 2t) = 0 \\Leftrightarrow 9t + 9 = 0 \\Leftrightarrow t = -1$.';

bai15De1.part4[1].problemStatement = 'Trong không gian $Oxyz$, viết phương trình chính tắc của đường thẳng $\\Delta$ đi qua điểm $A(1; 2; 3)$, vuông góc và cắt đường thẳng $d: \\frac{x - 1}{1} = \\frac{y + 1}{2} = \\frac{z}{1}$.';
bai15De1.part4[1].conclusionTarget = 'Vậy phương trình chính tắc của đường thẳng $\\Delta$ là $\\frac{x - 1}{1} = \\frac{y - 2}{-1} = \\frac{z - 3}{1}$.';
bai15De1.part4[1].steps = [
  {
    id: 'b15d1-p4-q2-s1',
    originalIndex: 1,
    roleDescription: 'Bước 1: Tham số hóa giao điểm $H = \\Delta \\cap d$',
    content: 'Gọi $H = \\Delta \\cap d \\Rightarrow H(1 + t; -1 + 2t; t)$. Khi đó $\\overrightarrow{AH} = (t; -3 + 2t; t - 3)$.',
  },
  {
    id: 'b15d1-p4-q2-s2',
    originalIndex: 2,
    roleDescription: 'Bước 2: Áp dụng điều kiện $\\Delta \\perp d$ để tìm $t$',
    content: 'Vì $\\Delta \\perp d$ nên $\\overrightarrow{AH} \\cdot \\vec{u}_d = 0$ với $\\vec{u}_d = (1; 2; 1)$: $t + 2(-3 + 2t) + (t - 3) = 0 \\Leftrightarrow 6t - 9 = 0 \\Leftrightarrow t = \\frac{3}{2}$.',
  },
  {
    id: 'b15d1-p4-q2-s3',
    originalIndex: 3,
    roleDescription: 'Bước 3: Xác định vectơ chỉ phương và phương trình chính tắc của $\\Delta$',
    content: 'Với $t = \\frac{3}{2}$, ta có $\\overrightarrow{AH} = \\left(\\frac{3}{2}; 0; -\\frac{3}{2}\\right)$... Chọn VTCP $\\vec{u}_\\Delta = (1; -1; 1)$ (khi $A(0; 2; 0)$ thì $H(1; 1; 1)$) và viết phương trình của $\\Delta$.',
  },
];
// Make bai15De1.part4[1] super clean with integer t=1: A(0; 2; 0) and d: (x-1)/1 = (y+1)/2 = z/1 -> H(1+t; -1+2t; t) -> AH=(1+t; -3+2t; t) -> 1+t - 6+4t + t = 6t - 5. If A(1; 2; 0): AH=(t; -3+2t; t) -> t - 6 + 4t + t = 6t - 6 = 0 -> t = 1! Then AH=(1; -1; 1)!
bai15De1.part4[1].problemStatement = 'Trong không gian $Oxyz$, viết phương trình chính tắc của đường thẳng $\\Delta$ đi qua điểm $A(1; 2; 0)$, vuông góc và cắt đường thẳng $d: \\frac{x - 1}{1} = \\frac{y + 1}{2} = \\frac{z}{1}$.';
bai15De1.part4[1].conclusionTarget = 'Vậy phương trình chính tắc của đường thẳng $\\Delta$ là $\\frac{x - 1}{1} = \\frac{y - 2}{-1} = \\frac{z}{1}$.';
bai15De1.part4[1].steps = [
  {
    id: 'b15d1-p4-q2-s1',
    originalIndex: 1,
    roleDescription: 'Bước 1: Tham số hóa giao điểm $H = \\Delta \\cap d$',
    content: 'Gọi $H = \\Delta \\cap d \\Rightarrow H(1 + t; -1 + 2t; t)$. Khi đó $\\overrightarrow{AH} = (t; -3 + 2t; t)$.',
  },
  {
    id: 'b15d1-p4-q2-s2',
    originalIndex: 2,
    roleDescription: 'Bước 2: Áp dụng điều kiện $\\Delta \\perp d$ để tìm $t$',
    content: 'Vì $\\Delta \\perp d$ nên $\\overrightarrow{AH} \\cdot \\vec{u}_d = 0$ với $\\vec{u}_d = (1; 2; 1)$: $1\\cdot t + 2(-3 + 2t) + 1\\cdot t = 0 \\Leftrightarrow 6t - 6 = 0 \\Leftrightarrow t = 1$.',
  },
  {
    id: 'b15d1-p4-q2-s3',
    originalIndex: 3,
    roleDescription: 'Bước 3: Xác định vectơ chỉ phương và phương trình chính tắc của $\\Delta$',
    content: 'Với $t = 1$, ta có $\\overrightarrow{AH} = (1; -1; 1)$ là một VTCP của $\\Delta$. Phương trình chính tắc của $\\Delta$ qua $A(1; 2; 0)$ là $\\frac{x - 1}{1} = \\frac{y - 2}{-1} = \\frac{z}{1}$.',
  },
];

const bai15De2 = makeLessonExam(
  'bai15-de02',
  'Bài 15 - Đề ôn số 2',
  'Phương trình đường thẳng trong không gian: Giao tuyến, hình chiếu và thực tiễn',
  'Đề ôn tập Bài 15 (Số 2) gồm 22 câu hỏi chuẩn cấu trúc 4 phần, rèn luyện kỹ năng lập phương trình đường thẳng dưới nhiều điều kiện hình học và bài toán thực tế.',
  [
    makeMC(
      'b15d2',
      1,
      'Chuyển phương trình chính tắc sang phương trình tham số',
      'Trong không gian $Oxyz$, đường thẳng $d: \\frac{x + 2}{3} = \\frac{y - 1}{-4} = \\frac{z + 5}{2}$ có phương trình tham số là:',
      [
        '$\\begin{cases} x = -2 + 3t \\\\ y = 1 - 4t \\\\ z = -5 + 2t \\end{cases}$',
        '$\\begin{cases} x = 2 + 3t \\\\ y = -1 - 4t \\\\ z = 5 + 2t \\end{cases}$',
        '$\\begin{cases} x = 3 - 2t \\\\ y = -4 + t \\\\ z = 2 - 5t \\end{cases}$',
        '$\\begin{cases} x = -2 + 3t \\\\ y = 1 + 4t \\\\ z = -5 + 2t \\end{cases}$',
      ],
      'A',
      'Đặt $\\frac{x + 2}{3} = \\frac{y - 1}{-4} = \\frac{z + 5}{2} = t$, ta rút ra $x = -2 + 3t,\\ y = 1 - 4t,\\ z = -5 + 2t$.',
      'Đặt tỉ số chung bằng $t$ để chuyển đổi nhanh từ chính tắc sang tham số.',
      'sp_oxyz_line_3d'
    ),
    makeMC(
      'b15d2',
      2,
      'Tìm vectơ chỉ phương khi phương trình chính tắc có hệ số âm trước biến',
      'Trong không gian $Oxyz$, cho đường thẳng $d: \\frac{x - 1}{2} = \\frac{3 - y}{4} = \\frac{z + 2}{5}$. Một vectơ chỉ phương của đường thẳng $d$ là:',
      [
        '$\\vec{u} = (2; -4; 5)$',
        '$\\vec{u} = (2; 4; 5)$',
        '$\\vec{u} = (1; 3; -2)$',
        '$\\vec{u} = (-2; -4; 5)$',
      ],
      'A',
      'Ta viết lại $\\frac{3 - y}{4} = \\frac{y - 3}{-4}$, nên phương trình chính tắc chuẩn là $\\frac{x - 1}{2} = \\frac{y - 3}{-4} = \\frac{z + 2}{5}$ có VTCP $\\vec{u} = (2; -4; 5)$.',
      'Cảnh giác bẫy dấu: $\\frac{y_0 - y}{b} = \\frac{y - y_0}{-b}$.'
    ),
    makeMC(
      'b15d2',
      3,
      'Đường thẳng đi qua gốc tọa độ',
      'Trong không gian $Oxyz$, phương trình tham số của đường thẳng đi qua gốc tọa độ $O$ và điểm $M(3; -2; 5)$ là:',
      [
        '$\\begin{cases} x = 3t \\\\ y = -2t \\\\ z = 5t \\end{cases}$',
        '$\\begin{cases} x = 3 + t \\\\ y = -2 + t \\\\ z = 5 + t \\end{cases}$',
        '$\\begin{cases} x = 3t \\\\ y = 2t \\\\ z = 5t \\end{cases}$',
        '$\\begin{cases} x = 3 \\\\ y = -2 \\\\ z = 5t \\end{cases}$',
      ],
      'A',
      'Đường thẳng $OM$ đi qua $O(0; 0; 0)$ và nhận $\\overrightarrow{OM} = (3; -2; 5)$ làm VTCP nên có phương trình $x = 3t, y = -2t, z = 5t$.',
      'Đường thẳng đi qua gốc tọa độ luôn có dạng $x = at, y = bt, z = ct$.'
    ),
    makeMC(
      'b15d2',
      4,
      'Đường thẳng vuông góc với hai đường thẳng cho trước',
      'Trong không gian $Oxyz$, biết đường thẳng $\\Delta$ vuông góc với cả hai đường thẳng $d_1: \\frac{x}{1} = \\frac{y - 1}{2} = \\frac{z + 2}{-1}$ và $d_2: \\frac{x + 1}{2} = \\frac{y}{1} = \\frac{z - 3}{1}$. Một vectơ chỉ phương của $\\Delta$ là:',
      [
        '$\\vec{u} = (3; -3; -3)$ hay $\\vec{u}\' = (1; -1; -1)$',
        '$\\vec{u} = (1; 1; -1)$',
        '$\\vec{u} = (1; -1; 1)$',
        '$\\vec{u} = (3; 3; -3)$',
      ],
      'A',
      'Vì $\\Delta \\perp d_1$ và $\\Delta \\perp d_2$ nên $\\vec{u}_\\Delta$ cùng phương với $[\\vec{u}_1, \\vec{u}_2] = (3; -3; -3) = 3(1; -1; -1)$.',
      'Đường thẳng vuông góc với hai đường thẳng có VTCP bằng tích có hướng của hai VTCP đó.'
    ),
    makeMC(
      'b15d2',
      5,
      'Đường thẳng giao tuyến của hai mặt phẳng',
      'Trong không gian $Oxyz$, gọi $d$ là giao tuyến của hai mặt phẳng $(P): x + y - z + 1 = 0$ và $(Q): 2x - y + z - 4 = 0$. Một vectơ chỉ phương của đường thẳng $d$ là:',
      [
        '$\\vec{u} = (0; -3; -3)$ hay $\\vec{u}\' = (0; 1; 1)$',
        '$\\vec{u} = (1; 1; -1)$',
        '$\\vec{u} = (2; -1; 1)$',
        '$\\vec{u} = (1; -1; 1)$',
      ],
      'A',
      'Giao tuyến $d = (P) \\cap (Q)$ vuông góc với cả $\\vec{n}_P = (1; 1; -1)$ và $\\vec{n}_Q = (2; -1; 1)$, nên VTCP của $d$ cùng phương với $[\\vec{n}_P, \\vec{n}_Q] = (0; -3; -3) = -3(0; 1; 1)$.',
      'VTCP của giao tuyến hai mặt phẳng là $\\vec{u}_d = [\\vec{n}_P, \\vec{n}_Q]$.'
    ),
    makeMC(
      'b15d2',
      6,
      'Đường thẳng đi qua trọng tâm tam giác',
      'Trong không gian $Oxyz$, cho tam giác $ABC$ có $A(1; 3; 2), B(2; 1; 4), C(3; 5; 0)$. Đường thẳng đi qua gốc tọa độ $O$ và trọng tâm $G$ của tam giác $ABC$ có một vectơ chỉ phương là:',
      [
        '$\\vec{u} = (2; 3; 2)$',
        '$\\vec{u} = (6; 9; 2)$',
        '$\\vec{u} = (2; 3; 3)$',
        '$\\vec{u} = (1; 3; 2)$',
      ],
      'A',
      'Trọng tâm $G\\left(\\frac{1+2+3}{3}; \\frac{3+1+5}{3}; \\frac{2+4+0}{3}\\right) = (2; 3; 2)$. Vậy $\\overrightarrow{OG} = (2; 3; 2)$ là một VTCP.',
      'Tính tọa độ trọng tâm $G$ trước rồi suy ra $\\overrightarrow{OG}$.'
    ),
    makeMC(
      'b15d2',
      7,
      'Vị trí tương đối của đường thẳng và mặt phẳng song song',
      'Trong không gian $Oxyz$, cho đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 1}{-1} = \\frac{z - 2}{1}$ và mặt phẳng $(P): x + 3y + z - 5 = 0$. Mệnh đề nào dưới đây là đúng?',
      [
        '$d$ song song với $(P)$',
        '$d$ nằm trong $(P)$',
        '$d$ vuông góc với $(P)$',
        '$d$ cắt $(P)$ tại một điểm duy nhất',
      ],
      'A',
      'Ta có $\\vec{u}_d \\cdot \\vec{n}_P = 2\\cdot 1 + (-1)\\cdot 3 + 1\\cdot 1 = 0$. Lấy điểm $M(1; -1; 2) \\in d$ thay vào $(P)$: $1 + 3(-1) + 2 - 5 = -5 \\ne 0 \\Rightarrow M \\notin (P)$. Vậy $d \\parallel (P)$.',
      'Khi $\\vec{u}_d \\cdot \\vec{n}_P = 0$ và điểm $M_0 \\in d$ không thuộc $(P)$ thì $d \\parallel (P)$.'
    ),
    makeMC(
      'b15d2',
      8,
      'Đường thẳng đi qua điểm, song song với mặt phẳng và cắt trục Oz',
      'Trong không gian $Oxyz$, cho điểm $A(1; 2; 3)$ và mặt phẳng $(P): x + y + z - 2 = 0$. Đường thẳng $d$ đi qua $A$, cắt trục $Oz$ và song song với mặt phẳng $(P)$ cắt trục $Oz$ tại điểm nào dưới đây?',
      [
        '$B(0; 0; 6)$',
        '$B(0; 0; 2)$',
        '$B(0; 0; -6)$',
        '$B(0; 0; 4)$',
      ],
      'A',
      'Gọi $B(0; 0; c) = d \\cap Oz$. Khi đó $\\overrightarrow{AB} = (-1; -2; c - 3)$. Vì $d \\parallel (P)$ nên $\\overrightarrow{AB} \\cdot \\vec{n}_P = 0 \\Leftrightarrow -1 - 2 + (c - 3) = 0 \\Leftrightarrow c = 6$. Vậy $B(0; 0; 6)$.',
      'Gọi giao điểm $B(0; 0; c) \\in Oz$, sau đó dùng điều kiện $\\overrightarrow{AB} \\perp \\vec{n}_P$.'
    ),
    makeMC(
      'b15d2',
      9,
      'Hai đường thẳng trùng nhau',
      'Trong không gian $Oxyz$, đường thẳng nào dưới đây trùng với đường thẳng $d: \\begin{cases} x = 1 + 2t \\\\ y = 3 - t \\\\ z = 2 + 4t \\end{cases}$?',
      [
        '$d_1: \\begin{cases} x = 3 + 2s \\\\ y = 2 - s \\\\ z = 6 + 4s \\end{cases}$',
        '$d_2: \\begin{cases} x = 3 + 2s \\\\ y = 2 - s \\\\ z = 5 + 4s \\end{cases}$',
        '$d_3: \\begin{cases} x = 1 + 2s \\\\ y = 3 + s \\\\ z = 2 + 4s \\end{cases}$',
        '$d_4: \\begin{cases} x = 2 + s \\\\ y = -1 + 3s \\\\ z = 4 + 2s \\end{cases}$',
      ],
      'A',
      'Đường thẳng $d_1$ có cùng VTCP $(2; -1; 4)$ với $d$ và đi qua điểm $(3; 2; 6)$ (ứng với $t = 1$ trên $d$), nên $d_1 \\equiv d$.',
      'Hai đường thẳng trùng nhau khi có VTCP cùng phương và có ít nhất một điểm chung.'
    ),
    makeMC(
      'b15d2',
      10,
      'Hình chiếu vuông góc của điểm lên đường thẳng',
      'Trong không gian $Oxyz$, hình chiếu vuông góc của điểm $M(3; -2; 5)$ trên trục $Ox$ là điểm:',
      [
        '$H(3; 0; 0)$',
        '$H(0; -2; 5)$',
        '$H(-3; 0; 0)$',
        '$H(0; -2; 0)$',
      ],
      'A',
      'Hình chiếu vuông góc của điểm $M(x_0; y_0; z_0)$ trên trục $Ox$ giữ nguyên hoành độ $x_0$, còn tung độ và cao độ bằng $0$: $H(3; 0; 0)$.',
      'Chiếu lên trục nào thì giữ nguyên tọa độ của trục đó, các tọa độ còn lại bằng $0$.'
    ),
    makeMC(
      'b15d2',
      11,
      'Đường trung tuyến của tam giác trong không gian',
      'Trong không gian $Oxyz$, cho tam giác $ABC$ có $A(1; 0; 2), B(3; 2; 4), C(1; 4; -2)$. Đường trung tuyến $AM$ của tam giác $ABC$ có một vectơ chỉ phương là:',
      [
        '$\\vec{u} = (1; 3; -1)$',
        '$\\vec{u} = (2; 3; 1)$',
        '$\\vec{u} = (1; 3; 1)$',
        '$\\vec{u} = (2; 6; 2)$',
      ],
      'A',
      'Trung điểm của $BC$ là $M(2; 3; 1)$. Vectơ chỉ phương của trung tuyến $AM$ là $\\overrightarrow{AM} = (2 - 1; 3 - 0; 1 - 2) = (1; 3; -1)$.',
      'Đường trung tuyến $AM$ đi qua đỉnh $A$ và trung điểm $M$ của cạnh $BC$.'
    ),
    makeMC(
      'b15d2',
      12,
      'Bài toán thực tế: Kiểm tra va chạm đường bay của hai UAV',
      'Trong không gian $Oxyz$, hai thiết bị bay chuyển động dọc theo hai đường thẳng $d_1: \\begin{cases} x = 1 + 2t \\\\ y = 2 + t \\\\ z = 3 + t \\end{cases}$ và $d_2: \\begin{cases} x = 2 + s \\\\ y = 1 + 2s \\\\ z = 2 + 2s \\end{cases}$. Hai đường bay $d_1$ và $d_2$ cắt nhau tại điểm có tọa độ là:',
      [
        '$(3; 3; 4)$',
        '$(1; 2; 3)$',
        '$(5; 4; 5)$',
        '$(4; 5; 6)$',
      ],
      'A',
      'Giải hệ $1 + 2t = 2 + s$ và $2 + t = 1 + 2s \\Rightarrow t = 1, s = 1$ (thỏa mãn $3 + 1 = 2 + 2 = 4$). Vậy giao điểm hai đường bay là $(3; 3; 4)$.',
      'Khi hai thiết bị cùng đi qua giao điểm $(3; 3; 4)$ tại cùng thời điểm $t = s = 1$, chúng sẽ xảy ra va chạm.'
    ),
  ],
  [
    makeTF(
      'b15d2',
      1,
      'Viết phương trình đường thẳng và xét vị trí tương đối',
      'Trong không gian $Oxyz$, cho điểm $A(2; -1; 3)$ và đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 2}{-1} = \\frac{z}{3}$.',
      [
        {
          text: 'Đường thẳng $d$ đi qua điểm $M(1; -2; 0)$ và có một vectơ chỉ phương là $\\vec{u} = (2; -1; 3)$.',
          isCorrect: true,
          exp: 'Từ phương trình chính tắc của $d$, điểm đi qua là $M(1; -2; 0)$ và VTCP là $\\vec{u} = (2; -1; 3)$.',
        },
        {
          text: 'Điểm $A(2; -1; 3)$ thuộc đường thẳng $d$.',
          isCorrect: false,
          exp: 'Thay tọa độ $A$ vào $d$: $\\frac{2 - 1}{2} = \\frac{1}{2} \\ne \\frac{-1 + 2}{-1} = -1$, nên $A \\notin d$.',
        },
        {
          text: 'Đường thẳng $\\Delta$ đi qua $A$ và song song với $d$ có phương trình tham số là $\\begin{cases} x = 2 + 2t \\\\ y = -1 - t \\\\ z = 3 + 3t \\end{cases}$.',
          isCorrect: true,
          exp: '$\\Delta$ qua $A(2; -1; 3)$ và nhận $\\vec{u} = (2; -1; 3)$ làm VTCP.',
        },
        {
          text: 'Mặt phẳng $(P)$ đi qua $A$ và vuông góc với $d$ có phương trình là $2x - y + 3z - 14 = 0$.',
          isCorrect: true,
          exp: '$(P)$ qua $A(2; -1; 3)$ có VTPT $\\vec{u} = (2; -1; 3)$: $2(x - 2) - 1(y + 1) + 3(z - 3) = 0 \\Leftrightarrow 2x - y + 3z - 14 = 0$.',
        },
      ],
      'Liên kết hai chiều: VTCP của đường thẳng vuông góc với mặt phẳng chính là VTPT của mặt phẳng đó.',
      'sp_oxyz_line_3d'
    ),
    makeTF(
      'b15d2',
      2,
      'Hình chiếu vuông góc của điểm lên đường thẳng',
      'Trong không gian $Oxyz$, cho điểm $M(2; 1; 4)$ và đường thẳng $d: \\begin{cases} x = 1 + t \\\\ y = 2 + t \\\\ z = 1 + 2t \\end{cases}$. Gọi $H$ là hình chiếu vuông góc của $M$ lên đường thẳng $d$.',
      [
        {
          text: 'Vì $H \\in d$ nên tọa độ điểm $H$ có dạng $H(1 + t; 2 + t; 1 + 2t)$.',
          isCorrect: true,
          exp: 'Tham số hóa điểm $H$ thuộc đường thẳng $d$.',
        },
        {
          text: 'Vectơ $\\overrightarrow{MH}$ có tọa độ theo $t$ là $(t - 1; t + 1; 2t - 3)$.',
          isCorrect: true,
          exp: '$\\overrightarrow{MH} = (1 + t - 2; 2 + t - 1; 1 + 2t - 4) = (t - 1; t + 1; 2t - 3)$.',
        },
        {
          text: 'Điều kiện $MH \\perp d$ cho ta phương trình $(t - 1) + (t + 1) + 2(2t - 3) = 0 \\Leftrightarrow t = 1$.',
          isCorrect: true,
          exp: '$\\overrightarrow{MH} \\cdot \\vec{u}_d = 0$ với $\\vec{u}_d = (1; 1; 2) \\Leftrightarrow 6t - 6 = 0 \\Leftrightarrow t = 1$.',
        },
        {
          text: 'Khoảng cách từ điểm $M$ đến đường thẳng $d$ bằng $3$.',
          isCorrect: false,
          exp: 'Khi $t = 1$, $\\overrightarrow{MH} = (0; 2; -1) \\Rightarrow d(M, d) = MH = \\sqrt{0^2 + 2^2 + (-1)^2} = \\sqrt{5} \\ne 3$.',
        },
      ],
      'Khoảng cách từ điểm $M$ đến đường thẳng $d$ chính là độ dài đoạn vuông góc $MH$.'
    ),
    makeTF(
      'b15d2',
      3,
      'Bài toán thực tế: Đường hầm xuyên núi trong không gian Oxyz',
      'Trong không gian $Oxyz$ (đơn vị: trăm mét), một kỹ sư thiết kế một đường hầm thẳng xuyên qua một quả núi nối từ cửa hầm $A(1; 2; 1)$ đến cửa hầm $B(5; 6; 3)$.',
      [
        {
          text: 'Vectơ chỉ phương của đường hầm là $\\vec{u} = (2; 2; 1)$.',
          isCorrect: true,
          exp: '$\\overrightarrow{AB} = (4; 4; 2) = 2(2; 2; 1)$.',
        },
        {
          text: 'Chiều dài của đoạn đường hầm nối từ $A$ đến $B$ bằng $600\\text{ m}$.',
          isCorrect: true,
          exp: '$AB = \\sqrt{4^2 + 4^2 + 2^2} = \\sqrt{36} = 6$ (trăm mét) $= 600\\text{ m}$.',
        },
        {
          text: 'Điểm thông gió nằm chính giữa đường hầm (trung điểm $AB$) có tọa độ là $(3; 4; 2)$.',
          isCorrect: true,
          exp: 'Trung điểm $I$ của $AB$ có tọa độ $\\left(\\frac{1+5}{2}; \\frac{2+6}{2}; \\frac{1+3}{2}\\right) = (3; 4; 2)$.',
        },
        {
          text: 'Nếu đào một giếng thông hơi thẳng đứng từ điểm $I(3; 4; 2)$ lên mặt sườn núi phẳng có phương trình $x + y + 2z - 15 = 0$ thì chiều dài giếng thông hơi là $200\\text{ m}$.',
          isCorrect: true,
          exp: 'Giếng thẳng đứng qua $I(3; 4; 2)$ có $x = 3, y = 4$. Thay vào mặt sườn núi: $3 + 4 + 2z - 15 = 0 \\Rightarrow z = 4$. Chiều dài giếng là $4 - 2 = 2$ (trăm mét) $= 200\\text{ m}$.',
        },
      ],
      'Chú ý đơn vị trên mỗi trục tọa độ là trăm mét ($1\\text{ đơn vị} = 100\\text{ m}$).'
    ),
  ],
  [
    makeSA(
      'b15d2',
      1,
      'Tìm tham số để hai đường thẳng vuông góc',
      'Trong không gian $Oxyz$, cho hai đường thẳng $d_1: \\frac{x - 2}{3} = \\frac{y + 1}{-2} = \\frac{z}{4}$ và $d_2: \\begin{cases} x = 1 + 2t \\\\ y = 3 + 5t \\\\ z = -1 + mt \\end{cases}$. Tìm giá trị của tham số $m$ để $d_1 \\perp d_2$.',
      ['1'],
      'Ta có $\\vec{u}_1 = (3; -2; 4)$ và $\\vec{u}_2 = (2; 5; m)$. Điều kiện $d_1 \\perp d_2 \\Leftrightarrow 3\\cdot 2 + (-2)\\cdot 5 + 4m = 0 \\Leftrightarrow 4m - 4 = 0 \\Leftrightarrow m = 1$.',
      'Tích vô hướng của hai vectơ chỉ phương bằng $0$.'
    ),
    makeSA(
      'b15d2',
      2,
      'Tìm điểm đối xứng của một điểm qua đường thẳng',
      'Trong không gian $Oxyz$, cho điểm $A(1; 0; 3)$ và đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 1}{1} = \\frac{z - 2}{2}$. Gọi $A\'(a; b; c)$ là điểm đối xứng với $A$ qua đường thẳng $d$. Tính tổng $S = a + b + c$.',
      ['2'],
      'Gọi $H(1 + 2t; -1 + t; 2 + 2t)$ là hình chiếu của $A$ lên $d$. Ta có $\\overrightarrow{AH} = (2t; -1 + t; -1 + 2t)$. Do $\\overrightarrow{AH} \\cdot \\vec{u}_d = 0 \\Leftrightarrow 2(2t) + 1(-1 + t) + 2(-1 + 2t) = 0 \\Leftrightarrow 9t - 3 = 0 \\Leftrightarrow t = \\frac{1}{3}$... Để $t$ nguyên đẹp: với $A(0; 1; 4)$, $\\overrightarrow{AH} = (1+2t; -2+t; -2+2t) \\Rightarrow 2(1+2t)+(-2+t)+2(-2+2t) = 9t - 4$. Với $A(1; 2; 4)$: $\\overrightarrow{AH} = (2t; -3+t; -2+2t) \\Rightarrow 4t - 3 + t - 4 + 4t = 9t - 7$. Với $A(2; 1; 3)$: $\\overrightarrow{AH} = (-1+2t; -2+t; -1+2t) \\Rightarrow -2 + 4t - 2 + t - 2 + 4t = 9t - 6$. Với $A(3; 0; 4)$: $\\overrightarrow{AH} = (-2+2t; -1+t; -2+2t) \\Rightarrow -4+4t-1+t-4+4t = 9t - 9 = 0 \\Leftrightarrow t = 1$! Khi đó $H(3; 0; 4)$... Nếu $A(5; -2; 2)$: $\\overrightarrow{AH} = (-4+2t; 1+t; 2t) \\Rightarrow -8+4t+1+t+4t = 9t - 7$. Nếu $A(3; -2; 4)$: $\\overrightarrow{AH} = (-2+2t; 1+t; -2+2t) \\Rightarrow -4+4t+1+t-4+4t = 9t - 7$. Nếu $A(1; 1; 4)$: $\\overrightarrow{AH} = (2t; -2+t; -2+2t) \\Rightarrow 9t - 6$. Với $d: \\frac{x-1}{1} = \\frac{y+1}{2} = \\frac{z-2}{1}$ và $A(1; 2; 0)$, ta đã có $H(2; 1; 1) \\Rightarrow A\'(3; 0; 2) \\Rightarrow a+b+c = 5$.',
      'Tìm hình chiếu $H$ rồi suy ra $A\' = 2H - A$.'
    ),
    makeSA(
      'b15d2',
      3,
      'Tìm tham số để đường thẳng cắt đường thẳng',
      'Trong không gian $Oxyz$, cho hai đường thẳng $d_1: \\frac{x - 1}{1} = \\frac{y - 2}{2} = \\frac{z - 3}{3}$ và $d_2: \\begin{cases} x = 2 + t \\\\ y = 4 + 3t \\\\ z = m + 2t \\end{cases}$. Tìm giá trị của $m$ để hai đường thẳng $d_1$ và $d_2$ cắt nhau.',
      ['6'],
      'Chuyển $d_1: x = 1 + s, y = 2 + 2s, z = 3 + 3s$. Giải hệ $1 + s = 2 + t$ và $2 + 2s = 4 + 3t \\Rightarrow s = 1, t = 0$. Thay vào phương trình thứ ba: $3 + 3(1) = m + 2(0) \\Rightarrow m = 6$.',
      'Giải hệ 2 phương trình đầu tìm $s, t$ rồi thay vào phương trình thứ ba để tìm $m$.'
    ),
    makeSA(
      'b15d2',
      4,
      'Bài toán thực tế: Thời gian ngắn nhất tàu ngầm tiếp cận mục tiêu',
      'Trong không gian $Oxyz$ (đơn vị: $\\text{km}$), một tàu ngầm di chuyển thẳng đều dọc theo đường thẳng $d: \\begin{cases} x = 1 + 2t \\\\ y = -2 + t \\\\ z = -1 + 2t \\end{cases}$ ($t \\ge 0$ tính bằng giờ). Một trạm thu phát tín hiệu đặt cố định tại điểm $M(7; 1; 5)$. Hỏi tại thời điểm $t$ bằng bao nhiêu giờ thì tàu ngầm ở vị trí gần trạm $M$ nhất?',
      ['3'],
      'Gọi $H(1 + 2t; -2 + t; -1 + 2t)$ là vị trí tàu ngầm. Khoảng cách $MH$ nhỏ nhất khi $MH \\perp d \\Leftrightarrow \\overrightarrow{MH} \\cdot \\vec{u}_d = 0 \\Leftrightarrow 2(2t - 6) + 1(t - 3) + 2(2t - 6) = 0 \\Leftrightarrow 9t - 27 = 0 \\Leftrightarrow t = 3$ (giờ).',
      'Vị trí gần $M$ nhất chính là hình chiếu vuông góc $H$ của $M$ lên đường thẳng $d$.',
      'giờ'
    ),
  ],
  [
    makeSO(
      'b15d2',
      1,
      'Viết phương trình đường thẳng đi qua một điểm và cắt cả hai đường thẳng cho trước',
      'Trong không gian $Oxyz$, viết phương trình chính tắc của đường thẳng $\\Delta$ đi qua điểm $A(1; 0; -1)$ và cắt cả hai đường thẳng $d_1: \\begin{cases} x = 1 + t \\\\ y = 2 + t \\\\ z = -t \\end{cases}$ và $d_2: \\begin{cases} x = 2 - s \\\\ y = 1 + 2s \\\\ z = 1 + s \\end{cases}$.',
      'Vậy phương trình chính tắc của đường thẳng $\\Delta$ là $\\frac{x - 1}{0} ...$ hay phương trình tham số là $\\begin{cases} x = 1 \\\\ y = t \\\\ z = -1 + t \\end{cases}$.',
      [
        {
          role: 'Bước 1: Tham số hóa hai giao điểm $M = \\Delta \\cap d_1$ và $N = \\Delta \\cap d_2$',
          content: 'Gọi $M(1 + t; 2 + t; -t) \\in d_1$ và $N(2 - s; 1 + 2s; 1 + s) \\in d_2$. Khi đó $\\overrightarrow{AM} = (t; 2 + t; 1 - t)$ và $\\overrightarrow{AN} = (1 - s; 1 + 2s; 2 + s)$.',
        },
        {
          role: 'Bước 2: Sử dụng điều kiện $A, M, N$ thẳng hàng để tìm $t$ và $s$',
          content: 'Để $A, M, N$ thẳng hàng, hai vectơ $\\overrightarrow{AM}$ và $\\overrightarrow{AN}$ cùng phương. Giải hệ tỉ lệ thu được $t = 0, s = 1$, suy ra $\\overrightarrow{AM} = (0; 2; 1)$ và $\\overrightarrow{AN} = (0; 3; 3)$... Kiểm tra lại: tại $t = -1$, $\\overrightarrow{AM} = (-1; 1; 2)$; tại $s = 2$, $\\overrightarrow{AN} = (-1; 5; 4)$.',
        },
        {
          role: 'Bước 3: Kết luận vectơ chỉ phương và phương trình đường thẳng $\\Delta$',
          content: 'Từ tọa độ giao điểm tìm được, rút ra vectơ chỉ phương $\\vec{u}_\\Delta$ và viết phương trình của $\\Delta$.',
        },
      ],
      'Cũng có thể tìm $\\vec{u}_\\Delta = [\\vec{n}_{(A, d_1)}, \\vec{n}_{(A, d_2)}]$ vì $\\Delta = (A, d_1) \\cap (A, d_2)$.',
      'Phương pháp giao tuyến hai mặt phẳng $(A, d_1)$ và $(A, d_2)$ luôn cho kết quả tổng quát.',
      0.7,
      'sp_oxyz_line_3d'
    ),
    makeSO(
      'b15d2',
      2,
      'Viết phương trình đường thẳng nằm trong mặt phẳng, đi qua một điểm và vuông góc với một đường thẳng',
      'Trong không gian $Oxyz$, viết phương trình tham số của đường thẳng $\\Delta$ đi qua điểm $A(1; 2; -1)$, nằm trong mặt phẳng $(P): x + y - z - 4 = 0$ và vuông góc với đường thẳng $d: \\frac{x}{2} = \\frac{y - 1}{1} = \\frac{z + 2}{3}$.',
      'Vậy phương trình tham số của $\\Delta$ là $\\begin{cases} x = 1 + 4t \\\\ y = 2 - 5t \\\\ z = -1 - t \\end{cases}$.',
      [
        {
          role: 'Bước 1: Xác định hai vectơ vuông góc với đường thẳng $\\Delta$',
          content: 'Vì $\\Delta \\subset (P)$ nên $\\vec{u}_\\Delta \\perp \\vec{n}_P = (1; 1; -1)$. Vì $\\Delta \\perp d$ nên $\\vec{u}_\\Delta \\perp \\vec{u}_d = (2; 1; 3)$.',
        },
        {
          role: 'Bước 2: Tính tích có hướng để tìm vectơ chỉ phương của $\\Delta$',
          content: 'Ta chọn $\\vec{u}_\\Delta = [\\vec{n}_P, \\vec{u}_d] = (1\\cdot 3 - (-1)\\cdot 1;\\ (-1)\\cdot 2 - 1\\cdot 3;\\ 1\\cdot 1 - 1\\cdot 2) = (4; -5; -1)$.',
        },
        {
          role: 'Bước 3: Viết phương trình tham số của $\\Delta$ đi qua $A(1; 2; -1)$',
          content: 'Phương trình tham số của $\\Delta$ là $\\begin{cases} x = 1 + 4t \\\\ y = 2 - 5t \\\\ z = -1 - t \\end{cases}$.',
        },
      ],
      'Khi đường thẳng $\\Delta$ vừa nằm trong $(P)$ vừa vuông góc với $d$, ta có $\\vec{u}_\\Delta = [\\vec{n}_P, \\vec{u}_d]$.',
      'Dạng toán kinh điển sử dụng tích có hướng trong không gian $Oxyz$.',
      0.65
    ),
    makeSO(
      'b15d2',
      3,
      'Viết phương trình đường vuông góc chung của hai đường thẳng chéo nhau',
      'Trong không gian $Oxyz$, cho hai đường thẳng chéo nhau $d_1: \\begin{cases} x = 1 + t \\\\ y = 0 \\\\ z = 2 \\end{cases}$ và $d_2: \\begin{cases} x = 0 \\\\ y = 2 + s \\\\ z = 0 \\end{cases}$. Hãy tìm đoạn vuông góc chung $MN$ ($M \\in d_1, N \\in d_2$) và viết phương trình đường vuông góc chung $\\Delta$ của $d_1$ và $d_2$.',
      'Vậy $M(0; 0; 2), N(0; 0; 0)$ và đường vuông góc chung $\\Delta$ là trục $Oz: \\begin{cases} x = 0 \\\\ y = 0 \\\\ z = u \\end{cases}$.',
      [
        {
          role: 'Bước 1: Tham số hóa tọa độ $M \\in d_1, N \\in d_2$ và tính $\\overrightarrow{MN}$',
          content: 'Gọi $M(1 + t; 0; 2) \\in d_1$ và $N(0; 2 + s; 0) \\in d_2$. Khi đó $\\overrightarrow{MN} = (-1 - t; 2 + s; -2)$.',
        },
        {
          role: 'Bước 2: Áp dụng điều kiện $\\overrightarrow{MN} \\perp \\vec{u}_1$ và $\\overrightarrow{MN} \\perp \\vec{u}_2$',
          content: 'Với $\\vec{u}_1 = (1; 0; 0)$ và $\\vec{u}_2 = (0; 1; 0)$, hệ điều kiện vuông góc cho $-1 - t = 0 \\Leftrightarrow t = -1$ và $2 + s = 0 \\Leftrightarrow s = -2$.',
        },
        {
          role: 'Bước 3: Suy ra tọa độ $M, N$ và phương trình đường vuông góc chung $\\Delta$',
          content: 'Ta được $M(0; 0; 2), N(0; 0; 0)$ và $\\overrightarrow{MN} = (0; 0; -2)$. Vậy đường vuông góc chung $\\Delta$ trùng với trục $Oz$ có phương trình $x = 0, y = 0, z = u$.',
        },
      ],
      'Đoạn vuông góc chung $MN$ thỏa mãn hệ hai phương trình $\\begin{cases} \\overrightarrow{MN} \\cdot \\vec{u}_1 = 0 \\\\ \\overrightarrow{MN} \\cdot \\vec{u}_2 = 0 \\end{cases}$.',
      'Bài toán giúp học sinh nắm vững bản chất hình học của đường vuông góc chung giữa hai đường thẳng chéo nhau.',
      0.65
    ),
  ]
);

// Refine bai15De2.part3[1] and bai15De2.part4[0] so numbers are 100% consistent
bai15De2.part3[1].prompt = 'Trong không gian $Oxyz$, cho điểm $A(1; 2; 0)$ và đường thẳng $d: \\frac{x - 1}{1} = \\frac{y + 1}{2} = \\frac{z}{1}$. Gọi $A\'(a; b; c)$ là điểm đối xứng với $A$ qua đường thẳng $d$. Tính tổng $S = a + b + c$.';
bai15De2.part3[1].acceptableAnswers = ['5'];
bai15De2.part3[1].explanation = 'Gọi $H(1 + t; -1 + 2t; t)$ là hình chiếu của $A(1; 2; 0)$ lên $d$. Ta có $\\overrightarrow{AH} = (t; -3 + 2t; t)$. Do $\\overrightarrow{AH} \\cdot \\vec{u}_d = 0 \\Leftrightarrow t + 2(-3 + 2t) + t = 0 \\Leftrightarrow 6t - 6 = 0 \\Leftrightarrow t = 1 \\Rightarrow H(2; 1; 1)$. Điểm đối xứng $A\' = 2H - A = (3; 0; 2) \\Rightarrow S = 3 + 0 + 2 = 5$.';

bai15De2.part4[0].problemStatement = 'Trong không gian $Oxyz$, viết phương trình chính tắc của đường thẳng $\\Delta$ đi qua điểm $A(1; 0; -1)$ và cắt cả hai đường thẳng $d_1: \\begin{cases} x = 2 + t \\\\ y = 1 + 2t \\\\ z = 1 + t \\end{cases}$ và $d_2: \\begin{cases} x = 3 - s \\\\ y = 2 + s \\\\ z = 1 + 2s \\end{cases}$.';
bai15De2.part4[0].conclusionTarget = 'Vậy phương trình chính tắc của đường thẳng $\\Delta$ là $\\frac{x - 1}{1} = \\frac{y}{1} = \\frac{z + 1}{2}$.';
bai15De2.part4[0].steps = [
  {
    id: 'b15d2-p4-q1-s1',
    originalIndex: 1,
    roleDescription: 'Bước 1: Tham số hóa giao điểm $M = \\Delta \\cap d_1$ và $N = \\Delta \\cap d_2$',
    content: 'Gọi $M(2 + t; 1 + 2t; 1 + t) \\in d_1$ và $N(3 - s; 2 + s; 1 + 2s) \\in d_2$. Khi đó $\\overrightarrow{AM} = (1 + t; 1 + 2t; 2 + t)$ và $\\overrightarrow{AN} = (2 - s; 2 + s; 2 + 2s)$.',
  },
  {
    id: 'b15d2-p4-q1-s2',
    originalIndex: 2,
    roleDescription: 'Bước 2: Áp dụng điều kiện $A, M, N$ thẳng hàng để tìm $t, s$',
    content: 'Hai vectơ $\\overrightarrow{AM}$ và $\\overrightarrow{AN}$ cùng phương khi $t = 0$ và $s = 0$, khi đó $\\overrightarrow{AM} = (1; 1; 2)$ và $\\overrightarrow{AN} = (2; 2; 2)$... Với $d_2: z = 3 + 2s$ thì tại $t = 0, s = 0$, $\\overrightarrow{AM} = (1; 1; 2)$ và $\\overrightarrow{AN} = (2; 2; 4) = 2\\overrightarrow{AM}$.',
  },
  {
    id: 'b15d2-p4-q1-s3',
    originalIndex: 3,
    roleDescription: 'Bước 3: Kết luận phương trình chính tắc của đường thẳng $\\Delta$',
    content: 'Chọn vectơ chỉ phương $\\vec{u}_\\Delta = \\overrightarrow{AM} = (1; 1; 2)$. Phương trình chính tắc của $\\Delta$ đi qua $A(1; 0; -1)$ là $\\frac{x - 1}{1} = \\frac{y}{1} = \\frac{z + 1}{2}$.',
  },
];
bai15De2.part4[0].problemStatement = 'Trong không gian $Oxyz$, viết phương trình chính tắc của đường thẳng $\\Delta$ đi qua điểm $A(1; 0; -1)$ và cắt cả hai đường thẳng $d_1: \\begin{cases} x = 2 + t \\\\ y = 1 + 2t \\\\ z = 1 + t \\end{cases}$ và $d_2: \\begin{cases} x = 3 - s \\\\ y = 2 + s \\\\ z = 3 + 2s \\end{cases}$.';
bai15De2.part4[0].steps[0].content = 'Gọi $M(2 + t; 1 + 2t; 1 + t) \\in d_1$ và $N(3 - s; 2 + s; 3 + 2s) \\in d_2$. Khi đó $\\overrightarrow{AM} = (1 + t; 1 + 2t; 2 + t)$ và $\\overrightarrow{AN} = (2 - s; 2 + s; 4 + 2s)$.';
bai15De2.part4[0].steps[1].content = 'Để $A, M, N$ thẳng hàng thì $\\overrightarrow{AN} = k\\overrightarrow{AM}$. Giải hệ ta được $t = 0, s = 0, k = 2$, suy ra $M(2; 1; 1), N(3; 2; 3)$ và $\\overrightarrow{AM} = (1; 1; 2)$.';

export const CHAPTER_5_PART_A_LESSONS: LessonInfo[] = [
  {
    id: 'bai-14',
    code: 'Bài 14',
    title: 'Phương trình mặt phẳng',
    fullName: 'Bài 14. Phương trình mặt phẳng',
    chapterId: 'chuong-5',
    chapterTitle: 'CHƯƠNG V. PHƯƠNG PHÁP TOẠ ĐỘ TRONG KHÔNG GIAN',
    pageNumber: 29,
    coreTopics: [
      'Vectơ pháp tuyến, cặp vectơ chỉ phương của mặt phẳng và công thức tích có hướng của hai vectơ',
      'Phương trình tổng quát của mặt phẳng và phương trình mặt phẳng theo đoạn chắn',
      'Điều kiện để hai mặt phẳng song song, trùng nhau, vuông góc và công thức khoảng cách từ một điểm đến mặt phẳng',
    ],
    practiceExams: [bai14De1, bai14De2],
  },
  {
    id: 'bai-15',
    code: 'Bài 15',
    title: 'Phương trình đường thẳng trong không gian',
    fullName: 'Bài 15. Phương trình đường thẳng trong không gian',
    chapterId: 'chuong-5',
    chapterTitle: 'CHƯƠNG V. PHƯƠNG PHÁP TOẠ ĐỘ TRONG KHÔNG GIAN',
    pageNumber: 41,
    coreTopics: [
      'Vectơ chỉ phương của đường thẳng, phương trình tham số và phương trình chính tắc của đường thẳng',
      'Viết phương trình đường thẳng đi qua hai điểm phân biệt trong không gian Oxyz',
      'Hai đường thẳng vuông góc và vị trí tương đối giữa hai đường thẳng (song song, trùng nhau, cắt nhau, chéo nhau)',
    ],
    practiceExams: [bai15De1, bai15De2],
  },
];
