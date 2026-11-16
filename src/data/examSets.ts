import { ExamSet } from '../types/exam';

export const examSets: ExamSet[] = [
  {
    id: 'de-so-01',
    title: 'Đề ôn GK1 01',
    subtitle: 'Ôn 12 - Đề ôn GK1 01: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số (GV Nguyễn Ngọc Thanh)',
    grade: 12,
    durationMinutes: 90,
    totalPoints: 10,
    description:
      'Đề ôn tập Toán 12 - Đề ôn GK1 01 (GV Nguyễn Ngọc Thanh) gồm 22 câu hỏi chuẩn cấu trúc 4 phần: Phần I (12 câu trắc nghiệm nhiều lựa chọn từ Câu 1 đến Câu 12 - 3,0đ), Phần II (3 câu trắc nghiệm Đúng/Sai từ Câu 1 đến Câu 3 - 3,0đ), Phần III (4 câu trả lời ngắn từ Câu 1 đến Câu 4 - 2,0đ), Phần IV (3 câu tự luận từ Câu 1 đến Câu 3 - 2,0đ).',
    part1: [
      {
        id: 'd1-p1-q1',
        part: 'part1',
        number: 1,
        topic: 'Tính đơn điệu của hàm số qua bảng biến thiên',
        prompt:
          'Cho hàm số $y = f(x)$ có bảng biến thiên sau. Hàm số đã cho đồng biến trên khoảng nào dưới đây?',
        tikzType: 'd0_q1_bbt',
        options: [
          { key: 'A', content: '$(2; +\\infty)$' },
          { key: 'B', content: '$(-\\infty; 3)$' },
          { key: 'C', content: '$(-4; 3)$' },
          { key: 'D', content: '$(-1; 2)$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Dựa vào bảng biến thiên, ta thấy đạo hàm $f\'(x) > 0$ trên các khoảng $(-\\infty; -1)$ và $(2; +\\infty)$. Do đó, hàm số đồng biến trên khoảng $(2; +\\infty)$.',
        pedagogicalTip:
          'Quan sát dòng dấu của đạo hàm $f\'(x)$ và chiều mũi tên đi lên trên bảng biến thiên: hàm số đồng biến trên $(-\\infty; -1)$ và $(2; +\\infty)$, nghịch biến trên $(-1; 2)$.',
        points: 0.25,
      },
      {
        id: 'd1-p1-q2',
        part: 'part1',
        number: 2,
        topic: 'Tính đơn điệu của hàm số qua đồ thị',
        prompt: 'Cho hàm số $y = f(x)$ có đồ thị như hình bên. Mệnh đề nào sau đây đúng?',
        tikzType: 'd0_q2_graph',
        options: [
          { key: 'A', content: 'Hàm số đồng biến trên khoảng $(-\\infty; 1)$.' },
          { key: 'B', content: 'Hàm số nghịch biến trên khoảng $(1; 4)$.' },
          { key: 'C', content: 'Hàm số đồng biến trên khoảng $(1; 4)$.' },
          { key: 'D', content: 'Hàm số nghịch biến trên khoảng $(-\\infty; 4)$.' },
        ],
        correctAnswer: 'C',
        explanation:
          'Quan sát đồ thị ta thấy, trên khoảng $(1; 4)$ đồ thị hàm số đi lên từ trái sang phải, do đó hàm số đồng biến trên khoảng $(1; 4)$.',
        pedagogicalTip:
          'Khi đọc đồ thị từ trái sang phải (theo chiều tăng của hoành độ $x$), nhánh đồ thị đi lên ứng với khoảng đồng biến, nhánh đi xuống ứng với khoảng nghịch biến.',
        points: 0.25,
      },
      {
        id: 'd1-p1-q3',
        part: 'part1',
        number: 3,
        topic: 'Cực trị của đồ thị hàm số',
        prompt:
          'Cho hàm số $y = f(x)$ có đồ thị là đường cong như hình bên. Điểm cực đại của đồ thị hàm số là:',
        tikzType: 'd0_q3_graph',
        options: [
          { key: 'A', content: '$x = 1$' },
          { key: 'B', content: '$y = 3$' },
          { key: 'C', content: '$(3; 1)$' },
          { key: 'D', content: '$(1; 3)$' },
        ],
        correctAnswer: 'D',
        explanation:
          'Dựa vào đồ thị, điểm cao nhất tương đối của đường cong có tọa độ là $(1; 3)$. Vậy điểm cực đại của đồ thị hàm số là $(1; 3)$.',
        pedagogicalTip:
          'Phân biệt rõ: "Điểm cực đại của hàm số" là $x = 1$; "Giá trị cực đại của hàm số" là $y = 3$; còn "Điểm cực đại của đồ thị hàm số" là điểm có tọa độ $(1; 3)$.',
        points: 0.25,
      },
      {
        id: 'd1-p1-q4',
        part: 'part1',
        number: 4,
        topic: 'Giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên đoạn',
        prompt:
          'Cho hàm số $y = f(x)$ có đồ thị trên đoạn $[-2; 3]$ như hình vẽ. Giá trị nhỏ nhất của hàm số trên $[-2; 3]$ bằng:',
        tikzType: 'd0_q4_graph',
        options: [
          { key: 'A', content: '$-5$' },
          { key: 'B', content: '$7$' },
          { key: 'C', content: '$3$' },
          { key: 'D', content: '$-2$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Dựa vào đồ thị hàm số trên đoạn $[-2; 3]$, điểm thấp nhất của đồ thị có tung độ bằng $-5$. Do đó $\\min_{[-2; 3]} f(x) = -5$.',
        pedagogicalTip:
          'Giá trị nhỏ nhất của hàm số trên đoạn $[-2; 3]$ là tung độ $y$ của điểm thấp nhất trên đồ thị.',
        points: 0.25,
      },
      {
        id: 'd1-p1-q5',
        part: 'part1',
        number: 5,
        topic: 'Đường tiệm cận của đồ thị hàm số',
        prompt:
          'Cho đồ thị hàm số $y = \\frac{ax + b}{cx + d}$ ($ad - bc \\neq 0, x \\neq -\\frac{d}{c}$) có đồ thị như hình vẽ. Tiệm cận ngang của đồ thị hàm số là:',
        tikzType: 'd0_q5_graph',
        options: [
          { key: 'A', content: '$y = 1$' },
          { key: 'B', content: '$x = 1$' },
          { key: 'C', content: '$y = 2$' },
          { key: 'D', content: '$x = 2$' },
        ],
        correctAnswer: 'C',
        explanation:
          'Dựa vào hình vẽ, đồ thị hàm số có đường tiệm cận ngang là đường thẳng $y = 2$.',
        pedagogicalTip:
          'Đường tiệm cận ngang có phương trình dạng $y = y_0$ (nằm ngang cắt trục tung tại $2$), còn đường tiệm cận đứng có phương trình dạng $x = x_0$ (thẳng đứng cắt trục hoành tại $1$).',
        points: 0.25,
      },
      {
        id: 'd1-p1-q6',
        part: 'part1',
        number: 6,
        topic: 'Nhận diện đồ thị hàm số bậc ba',
        prompt:
          'Cho đồ thị hàm số $y = f(x)$ như hình bên. Đồ thị trên là đồ thị của hàm số nào dưới đây?',
        tikzType: 'd0_q6_graph',
        options: [
          { key: 'A', content: '$y = \\frac{2x - 1}{x + 1}$' },
          { key: 'B', content: '$y = -x^3 + 3x + 1$' },
          { key: 'C', content: '$y = x^4 - 2x^2 + 1$' },
          { key: 'D', content: '$y = x^3 - 3x^2 + 2$' },
        ],
        correctAnswer: 'D',
        explanation:
          'Đồ thị có dạng của hàm số bậc ba với nhánh cuối bên phải đi lên khi $x \\to +\\infty$ nên hệ số $a > 0$ (loại A, B, C). Mặt khác, đồ thị cắt trục tung tại điểm $(0; 2)$, đạt cực đại tại $(0; 2)$, đi qua $(1; 0)$ và đạt cực tiểu tại $(2; -2)$. Thay vào kiểm tra, hàm số $y = x^3 - 3x^2 + 2$ thỏa mãn hoàn toàn. Chọn đáp án D.',
        pedagogicalTip:
          'Để nhận diện nhanh đồ thị hàm bậc ba: kiểm tra dáng điệu nhánh cuối bên phải để biết dấu hệ số $a$, giao điểm với trục tung $Oy$ và tọa độ các điểm cực trị.',
        points: 0.25,
      },
      {
        id: 'd1-p1-q7',
        part: 'part1',
        number: 7,
        topic: 'Nhận diện đồ thị hàm phân thức bậc nhất trên bậc nhất',
        prompt: 'Cho đồ thị hàm số như hình dưới. Đây là đồ thị của hàm số nào?',
        tikzType: 'd0_q7_graph',
        options: [
          { key: 'A', content: '$y = \\frac{x}{x^2 + 4}$' },
          { key: 'B', content: '$y = \\frac{2x + 1}{x + 2}$' },
          { key: 'C', content: '$y = \\frac{x + 2}{x - 1}$' },
          { key: 'D', content: '$y = \\frac{x + 1}{x - 2}$' },
        ],
        correctAnswer: 'C',
        explanation:
          'Quan sát hình vẽ, đồ thị có: Tiệm cận đứng $x = 1$, tiệm cận ngang $y = 1$. Đồ thị cắt trục tung tại điểm $(0; -2)$ và cắt trục hoành tại điểm $(-2; 0)$. Xét hàm số $y = \\frac{x + 2}{x - 1}$ có: Tiệm cận đứng $x = 1$, tiệm cận ngang $y = 1$; với $x = 0 \\Rightarrow y = -2$; với $y = 0 \\Rightarrow x = -2$. Vậy đây là đồ thị của hàm số $y = \\frac{x + 2}{x - 1}$.',
        pedagogicalTip:
          'Với đồ thị hàm phân thức $y = \\frac{ax+b}{cx+d}$, xác định lần lượt: (1) TCĐ $x = -d/c$, (2) TCN $y = a/c$, (3) Giao điểm với $Oy$ tại $(0; b/d)$ và với $Ox$ tại $(-b/a; 0)$.',
        points: 0.25,
      },
      {
        id: 'd1-p1-q8',
        part: 'part1',
        number: 8,
        topic: 'Giao điểm hai đường tiệm cận của đồ thị hàm số',
        prompt:
          'Giao điểm của hai đường tiệm cận của đồ thị hàm số $y = \\frac{-2x + 1}{x - 1}$ có tọa độ là:',
        options: [
          { key: 'A', content: '$(1; 2)$' },
          { key: 'B', content: '$\\left(-\\frac{1}{2}; 0\\right)$' },
          { key: 'C', content: '$(1; 0)$' },
          { key: 'D', content: '$(1; -2)$' },
        ],
        correctAnswer: 'D',
        explanation:
          'Đồ thị hàm số có tiệm cận đứng là $x = 1$ và tiệm cận ngang là $y = -2$. Giao điểm của hai đường tiệm cận là $I(1; -2)$.',
        pedagogicalTip:
          'Chú ý hệ số của $x$ trên tử là $-2$ nên tiệm cận ngang là $y = \\frac{-2}{1} = -2$.',
        points: 0.25,
      },
      {
        id: 'd1-p1-q9',
        part: 'part1',
        number: 9,
        topic: 'Tính đơn điệu của hàm số qua đồ thị trên lưới tọa độ',
        prompt: 'Cho hàm số $y = f(x)$ có đồ thị như hình dưới. Mệnh đề nào sau đây đúng?',
        tikzType: 'd0_q9_graph',
        options: [
          { key: 'A', content: 'Hàm số nghịch biến trong khoảng $(-\\infty; 0)$.' },
          { key: 'B', content: 'Hàm số nghịch biến trong khoảng $(0; 1)$.' },
          { key: 'C', content: 'Hàm số đồng biến trong khoảng $(0; 1)$.' },
          { key: 'D', content: 'Hàm số đồng biến trong khoảng $(1; +\\infty)$.' },
        ],
        correctAnswer: 'C',
        explanation:
          'Dựa vào đồ thị ta thấy trên khoảng $(0; 1)$ nét vẽ đi lên từ trái sang phải, suy ra hàm số đồng biến trong khoảng $(0; 1)$. Do đó khẳng định hàm số nghịch biến trên $(0; 1)$ là sai, đồng biến trên $(0; 1)$ là đúng.',
        pedagogicalTip:
          'Xét trên trục hoành từ $x = 0$ đến $x = 1$, tung độ đồ thị tăng từ $-2$ lên $1$ nên hàm số đồng biến trên $(0; 1)$.',
        points: 0.25,
      },
      {
        id: 'd1-p1-q10',
        part: 'part1',
        number: 10,
        topic: 'Xét tính đơn điệu và cực trị khi biết biểu thức đạo hàm',
        prompt:
          'Cho hàm số $y = f(x)$ có đạo hàm $f\'(x) = x(x - 2)^2$ với mọi $x \\in \\mathbb{R}$. Khẳng định nào sau đây đúng?',
        options: [
          { key: 'A', content: 'Hàm số nghịch biến trên khoảng $(2; +\\infty)$.' },
          { key: 'B', content: 'Hàm số nghịch biến trên khoảng $(0; 2)$.' },
          { key: 'C', content: 'Hàm số đồng biến trên khoảng $(0; +\\infty)$.' },
          { key: 'D', content: 'Hàm số đạt cực đại tại $x = 2$.' },
        ],
        correctAnswer: 'C',
        explanation:
          'Ta có $f\'(x) = x(x - 2)^2 = 0 \\Leftrightarrow \\left[\\begin{array}{l} x = 0 \\\\ x = 2 \\end{array}\\right.$. Vì $(x - 2)^2 \\ge 0,\\ \\forall x$ nên dấu của $f\'(x)$ cùng dấu với $x$: $f\'(x) < 0 \\Leftrightarrow x < 0$; $f\'(x) > 0 \\Leftrightarrow x > 0$ và $x \\neq 2$. Do đó hàm số đồng biến trên khoảng $(0; +\\infty)$.',
        pedagogicalTip:
          'Nếu $f\'(x) \\ge 0$ với mọi $x \\in (0; +\\infty)$ và $f\'(x) = 0$ chỉ tại hữu hạn điểm ($x = 2$) thì hàm số đồng biến trên toàn khoảng $(0; +\\infty)$.',
        points: 0.25,
      },
      {
        id: 'd1-p1-q11',
        part: 'part1',
        number: 11,
        topic: 'Đường tiệm cận ngang của đồ thị hàm phân thức',
        prompt: 'Đồ thị hàm số $y = \\frac{3x - 1}{x + 2}$ có tiệm cận ngang là đường thẳng:',
        options: [
          { key: 'A', content: '$x = -2$' },
          { key: 'B', content: '$y = 3$' },
          { key: 'C', content: '$x = 3$' },
          { key: 'D', content: '$y = -2$' },
        ],
        correctAnswer: 'B',
        explanation:
          'Ta có $\\lim_{x \\to \\pm\\infty} \\frac{3x - 1}{x + 2} = 3$. Do đó, tiệm cận ngang của đồ thị hàm số là đường thẳng $y = 3$.',
        pedagogicalTip:
          'Cẩn thận tránh chọn nhầm phương án C ($x = 3$) hoặc phương án A ($x = -2$ là tiệm cận đứng).',
        points: 0.25,
      },
      {
        id: 'd1-p1-q12',
        part: 'part1',
        number: 12,
        topic: 'Nhận diện hàm phân thức qua bảng biến thiên',
        prompt:
          'Cho hàm số $y = f(x)$ có bảng biến thiên như hình bên. Bảng biến thiên trên là của hàm số nào?',
        tikzType: 'd0_q12_bbt',
        options: [
          { key: 'A', content: '$y = \\frac{x + 2}{x - 1}$' },
          { key: 'B', content: '$y = \\frac{2x - 3}{x - 1}$' },
          { key: 'C', content: '$y = \\frac{-2x + 1}{x - 1}$' },
          { key: 'D', content: '$y = \\frac{2x + 1}{x - 1}$' },
        ],
        correctAnswer: 'D',
        explanation:
          'Dựa vào bảng biến thiên ta có: Đường tiệm cận đứng là $x = 1$, tiệm cận ngang là $y = 2$. Đạo hàm $y\' < 0$ với mọi $x \\neq 1$. Xét các hàm số có tiệm cận đứng $x = 1$ và ngang $y = 2$: Với $y = \\frac{2x + 1}{x - 1} \\Rightarrow y\' = \\frac{2(-1) - 1}{(x - 1)^2} = \\frac{-3}{(x - 1)^2} < 0$ (thỏa mãn). Với $y = \\frac{2x - 3}{x - 1} \\Rightarrow y\' = \\frac{2(-1) - (-3)}{(x - 1)^2} = \\frac{1}{(x - 1)^2} > 0$ (loại). Vậy bảng biến thiên đã cho là của hàm số $y = \\frac{2x + 1}{x - 1}$.',
        pedagogicalTip:
          'Khi hai phương án B và D có cùng TCĐ $x = 1$ và TCN $y = 2$, ta kiểm tra dấu của đạo hàm $y\'$: vì bảng biến thiên có $y\' < 0$ nên cần $ad - bc < 0$.',
        points: 0.25,
      },
    ],
    part2: [
      {
        id: 'd1-p2-q1',
        part: 'part2',
        number: 1,
        topic: 'Phần II - Câu 1: Đọc bảng biến thiên (Đơn điệu, Cực trị, Tiệm cận & GTLN)',
        prompt:
          'Cho hàm số $y = f(x)$ có bảng biến thiên như sau. Xét tính đúng sai của các khẳng định sau:',
        tikzType: 'd0_q13_bbt',
        statements: [
          {
            id: 'a',
            label: 'a',
            statement: 'Hàm số đồng biến trên khoảng $(-\\infty; -2)$.',
            isCorrect: true,
            explanation:
              'Đúng. Dựa vào bảng biến thiên, trên khoảng $(-\\infty; -2)$ đạo hàm $f\'(x) > 0$ nên hàm số đồng biến trên khoảng $(-\\infty; -2)$.',
          },
          {
            id: 'b',
            label: 'b',
            statement:
              'Đồ thị hàm số có đúng một đường tiệm cận ngang là $y = 2$ và một tiệm cận đứng là $x = 1$.',
            isCorrect: true,
            explanation:
              'Đúng. Ta có $\\lim_{x \\to -\\infty} f(x) = -\\infty$ và $\\lim_{x \\to +\\infty} f(x) = 2$ nên đồ thị có đúng một đường tiệm cận ngang là $y = 2$. Mặt khác $\\lim_{x \\to 1^-} f(x) = -\\infty$ và $\\lim_{x \\to 1^+} f(x) = -\\infty$ nên đồ thị có đúng một đường tiệm cận đứng là $x = 1$.',
          },
          {
            id: 'c',
            label: 'c',
            statement: 'Hàm số đạt cực đại tại điểm $x = -2$ và giá trị cực đại bằng $5$.',
            isCorrect: true,
            explanation:
              'Đúng. Tại $x = -2$, đạo hàm $f\'(x)$ đổi dấu từ dương sang âm nên hàm số đạt cực đại tại $x = -2$ và giá trị cực đại $y_{\\text{CĐ}} = f(-2) = 5$.',
          },
          {
            id: 'd',
            label: 'd',
            statement: 'Giá trị lớn nhất của hàm số trên tập xác định bằng $5$.',
            isCorrect: true,
            explanation:
              'Đúng. Trên tập xác định $D = \\mathbb{R} \\setminus \\{1\\}$: với $x \\in (-\\infty; 1)$ ta có $f(x) \\le f(-2) = 5$; với $x \\in (1; +\\infty)$ hàm số đồng biến từ $-\\infty$ đến $2$ nên $f(x) < 2 < 5$. Vậy $\\max_{D} f(x) = f(-2) = 5$.',
          },
        ],
        pedagogicalTip:
          'Khi xét tiệm cận ngang và giá trị lớn nhất từ bảng biến thiên, cần quan sát kỹ giới hạn và miền giá trị của hàm số trên cả hai nhánh.',
      },
      {
        id: 'd1-p2-q2',
        part: 'part2',
        number: 2,
        topic: 'Phần II - Câu 2: Khảo sát toàn diện hàm số bậc ba',
        prompt:
          'Cho hàm số bậc ba $y = f(x) = x^3 - 3x^2 + 2$ có đồ thị là $(C)$. Xét tính đúng sai của các khẳng định sau:',
        tikzType: 'cubic_graph_d1',
        statements: [
          {
            id: 'a',
            label: 'a',
            statement: 'Đồ thị $(C)$ cắt trục tung tại điểm có tung độ bằng $2$.',
            isCorrect: true,
            explanation:
              'Đúng. Cho $x = 0 \\Rightarrow y = 2$. Đồ thị cắt trục tung tại $(0; 2)$, có tung độ bằng $2$.',
          },
          {
            id: 'b',
            label: 'b',
            statement: 'Hàm số đồng biến trên khoảng $(0; 2)$.',
            isCorrect: false,
            explanation:
              'Sai. Ta có $y\' = 3x^2 - 6x = 3x(x - 2)$. Cho $y\' = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$. Trên khoảng $(0; 2)$, $y\' < 0$ nên hàm số nghịch biến trên khoảng $(0; 2)$.',
          },
          {
            id: 'c',
            label: 'c',
            statement: 'Đồ thị hàm số có hai điểm cực trị nằm về hai phía đối với trục hoành.',
            isCorrect: true,
            explanation:
              'Đúng. Tọa độ hai điểm cực trị là $A(0; 2)$ và $B(2; -2)$. Vì $y_A \\cdot y_B = 2 \\cdot (-2) = -4 < 0$ nên hai điểm cực trị nằm về hai phía đối với trục hoành.',
          },
          {
            id: 'd',
            label: 'd',
            statement: 'Đồ thị $(C)$ có tâm đối xứng là điểm $I(1; 0)$.',
            isCorrect: true,
            explanation:
              'Đúng. Ta có $y\'\' = 6x - 6 = 0 \\Leftrightarrow x = 1 \\Rightarrow y = 0$. Điểm uốn $I(1; 0)$ chính là tâm đối xứng của đồ thị $(C)$.',
          },
        ],
        pedagogicalTip:
          'Hai điểm cực trị của đồ thị hàm số nằm về hai phía đối với trục hoành $Ox$ khi và chỉ khi tích hai giá trị cực trị trái dấu ($y_{\\text{CĐ}} \\cdot y_{\\text{CT}} < 0$).',
      },
      {
        id: 'd1-p2-q3',
        part: 'part2',
        number: 3,
        topic: 'Phần II - Câu 3: Ứng dụng đạo hàm trong bài toán chuyển động vật lý',
        prompt:
          'Một quả bóng được ném lên theo phương thẳng đứng với phương trình chuyển động $s(t) = -5t^2 + 20t + 2$ (với $t$ tính bằng giây, $s$ tính bằng mét kể từ mặt đất). Xét tính đúng sai của các khẳng định sau:',
        statements: [
          {
            id: 'a',
            label: 'a',
            statement: 'Quả bóng được ném từ độ cao ban đầu là $2\\text{ m}$.',
            isCorrect: true,
            explanation:
              'Đúng. Tại thời điểm ban đầu $t = 0$, ta có $s(0) = 2\\text{ m}$. Do đó quả bóng được ném từ độ cao ban đầu là $2\\text{ m}$.',
          },
          {
            id: 'b',
            label: 'b',
            statement:
              'Vận tốc tức thời của quả bóng tại thời điểm $t$ là $v(t) = s\'(t) = -10t + 20\\text{ (m/s)}$.',
            isCorrect: true,
            explanation:
              'Đúng. Vận tốc tức thời của quả bóng là $v(t) = s\'(t) = (-5t^2 + 20t + 2)\' = -10t + 20\\text{ (m/s)}$.',
          },
          {
            id: 'c',
            label: 'c',
            statement: 'Quả bóng đạt vị trí cao nhất tại thời điểm $t = 3\\text{ s}$.',
            isCorrect: false,
            explanation:
              'Sai. Quả bóng đạt vị trí cao nhất khi vận tốc triệt tiêu: $v(t) = 0 \\Leftrightarrow -10t + 20 = 0 \\Leftrightarrow t = 2\\text{ s}$. Do đó khẳng định $t = 3\\text{ s}$ là sai.',
          },
          {
            id: 'd',
            label: 'd',
            statement: 'Độ cao lớn nhất mà quả bóng đạt được là $22\\text{ m}$.',
            isCorrect: true,
            explanation:
              'Đúng. Độ cao lớn nhất quả bóng đạt được là $s(2) = -5(2)^2 + 20(2) + 2 = -20 + 40 + 2 = 22\\text{ m}$.',
          },
        ],
        pedagogicalTip:
          'Trong chuyển động ném thẳng đứng lên trên, vật đạt độ cao cực đại tại thời điểm vận tốc tức thời $v(t) = s\'(t) = 0$.',
      },
    ],
    part3: [
      {
        id: 'd1-p3-q1',
        part: 'part3',
        number: 1,
        topic: 'Phần III - Câu 1: Số điểm cực trị của hàm số khi biết đạo hàm',
        prompt:
          'Cho hàm số $y = f(x)$ có đạo hàm $f\'(x) = (x - 1)^2(x + 2)^3(x - 5)$. Hỏi hàm số $y = f(x)$ có bao nhiêu điểm cực trị?',
        acceptableAnswers: ['2'],
        explanation:
          'Ta có phương trình $f\'(x) = 0 \\Leftrightarrow \\left[\\begin{array}{l} x = 1 \\\\ x = -2 \\\\ x = 5 \\end{array}\\right.$.\n- Tại $x = 1$, nghiệm có bội chẵn (bậc $2$) nên $f\'(x)$ không đổi dấu khi qua $x = 1$.\n- Tại $x = -2$, nghiệm bội lẻ (bậc $3$) nên $f\'(x)$ đổi dấu khi qua $x = -2$.\n- Tại $x = 5$, nghiệm đơn (bậc $1$) nên $f\'(x)$ đổi dấu khi qua $x = 5$.\nDo đó, hàm số đã cho có $2$ điểm cực trị.',
        pedagogicalTip:
          'Số điểm cực trị của hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ bằng số nghiệm bội lẻ của phương trình đạo hàm $f\'(x) = 0$.',
        points: 0.5,
      },
      {
        id: 'd1-p3-q2',
        part: 'part3',
        number: 2,
        topic: 'Phần III - Câu 2: Tìm tổng số đường tiệm cận đứng và tiệm cận ngang',
        prompt:
          'Tìm tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y = \\frac{2x + 1}{\\sqrt{x^2 - 4}}$.',
        acceptableAnswers: ['4'],
        explanation:
          'Tập xác định: $D = (-\\infty; -2) \\cup (2; +\\infty)$.\n- Tiệm cận ngang:\n$$\\lim_{x \\to +\\infty} \\frac{2x + 1}{\\sqrt{x^2 - 4}} = \\lim_{x \\to +\\infty} \\frac{2 + \\frac{1}{x}}{\\sqrt{1 - \\frac{4}{x^2}}} = 2 \\Rightarrow y = 2 \\text{ là một tiệm cận ngang.}$$\n$$\\lim_{x \\to -\\infty} \\frac{2x + 1}{\\sqrt{x^2 - 4}} = \\lim_{x \\to -\\infty} \\frac{2 + \\frac{1}{x}}{-\\sqrt{1 - \\frac{4}{x^2}}} = -2 \\Rightarrow y = -2 \\text{ là một tiệm cận ngang.}$$\n- Tiệm cận đứng:\n$$\\lim_{x \\to 2^+} \\frac{2x + 1}{\\sqrt{x^2 - 4}} = +\\infty \\Rightarrow x = 2 \\text{ là một tiệm cận đứng.}$$\n$$\\lim_{x \\to -2^-} \\frac{2x + 1}{\\sqrt{x^2 - 4}} = -\\infty \\Rightarrow x = -2 \\text{ là một tiệm cận đứng.}$$\nVậy đồ thị hàm số có $2$ tiệm cận ngang và $2$ tiệm cận đứng. Tổng số đường tiệm cận là $2 + 2 = 4$.',
        pedagogicalTip:
          'Khi đưa $x$ ra khỏi căn bậc hai $\\sqrt{x^2 - 4} = |x|\\sqrt{1 - \\frac{4}{x^2}}$, cần nhớ $|x| = x$ khi $x \\to +\\infty$ và $|x| = -x$ khi $x \\to -\\infty$.',
        points: 0.5,
      },
      {
        id: 'd1-p3-q3',
        part: 'part3',
        number: 3,
        topic: 'Phần III - Câu 3: Ứng dụng đạo hàm trong bài toán vận tốc - gia tốc',
        prompt:
          'Một chất điểm chuyển động thẳng với quãng đường $S(t) = t^3 - 6t^2 + 9t + 10$ ($t \\ge 0$, tính bằng giây, $S$ tính bằng mét). Trong khoảng thời gian $(a; b)$ (tính theo giây) thì vận tốc của chất điểm giảm dần. Tính $2a + b$?',
        acceptableAnswers: ['2'],
        explanation:
          'Vận tốc của chất điểm là $v(t) = S\'(t) = 3t^2 - 12t + 9$.\nGia tốc của chất điểm là $a(t) = v\'(t) = 6t - 12$.\nVận tốc của chất điểm giảm dần khi và chỉ khi gia tốc âm:\n$$v\'(t) < 0 \\Leftrightarrow 6t - 12 < 0 \\Leftrightarrow t < 2.$$\nKết hợp với điều kiện $t \\ge 0$, ta có vận tốc giảm trong khoảng $(0; 2)$.\nDo đó $a = 0$ và $b = 2$. Vậy $2a + b = 2(0) + 2 = 2$.',
        pedagogicalTip:
          'Đọc kỹ câu hỏi: đề hỏi "vận tốc giảm dần" tức là tìm khoảng nghịch biến của hàm vận tốc $v(t)$, tương đương giải bất phương trình $v\'(t) < 0$ với $t \\ge 0$.',
        points: 0.5,
      },
      {
        id: 'd1-p3-q4',
        part: 'part3',
        number: 4,
        topic: 'Phần III - Câu 4: Tối ưu hóa chi phí sản xuất bằng đạo hàm / AM-GM',
        prompt:
          'Người ta muốn làm một thùng chứa hình hộp chữ nhật có nắp, đáy là hình vuông, thể tích bằng $108\\text{ m}^3$. Biết chi phí vật liệu làm đáy và nắp là $40.000\\text{ đ/m}^2$, chi phí làm các mặt bên là $30.000\\text{ đ/m}^2$. Tìm độ dài cạnh đáy (theo đơn vị mét) để tổng chi phí vật liệu là nhỏ nhất. (làm tròn đến hàng phần mười)',
        tikzType: 'sp_open_box_xh',
        acceptableAnswers: ['4.3', '4,3', '4.33', '4,33', '4.5', '4,5'],
        unit: 'm',
        explanation:
          'Gọi độ dài cạnh đáy của hình hộp chữ nhật là $x\\ (x > 0,\\text{ mét})$, chiều cao của thùng là $h\\ (h > 0,\\text{ mét})$.\nThể tích khối hộp là: $V = x^2 \\cdot h = 108 \\Rightarrow h = \\frac{108}{x^2}$.\nDiện tích của đáy và nắp là: $2x^2\\text{ (m}^2\\text{)}$.\nDiện tích của $4$ mặt bên là: $4xh = 4x \\cdot \\frac{108}{x^2} = \\frac{432}{x}\\text{ (m}^2\\text{)}$.\nTổng chi phí vật liệu (đơn vị: nghìn đồng) là:\n$$C(x) = 40 \\cdot 2x^2 + 30 \\cdot \\frac{432}{x} = 80x^2 + \\frac{12960}{x} = 80x^2 + \\frac{6480}{x} + \\frac{6480}{x}.$$\nÁp dụng bất đẳng thức AM-GM:\n$$C(x) \\ge 3\\sqrt[3]{80x^2 \\cdot \\frac{6480}{x} \\cdot \\frac{6480}{x}} = 3\\sqrt[3]{80 \\cdot 6480^2}.$$\nDấu bằng xảy ra khi và chỉ khi:\n$$80x^2 = \\frac{6480}{x} \\Leftrightarrow x^3 = \\frac{6480}{80} = 81 \\Leftrightarrow x = \\sqrt[3]{81} = 3\\sqrt[3]{3} \\approx 4{,}3\\text{ m}.$$',
        pedagogicalTip:
          'Để khử biến $x$ dưới mẫu bằng bất đẳng thức AM-GM cho $80x^2 + \\frac{12960}{x}$, ta tách $\\frac{12960}{x} = \\frac{6480}{x} + \\frac{6480}{x}$, hoặc dùng đạo hàm $C\'(x) = 160x - \\frac{12960}{x^2} = 0 \\Leftrightarrow x^3 = 81$.',
        points: 0.5,
      },
    ],
    part4: [
      {
        id: 'd1-p4-q1',
        part: 'part4',
        number: 1,
        topic: 'Phần IV - Câu 1: Xét chiều biến thiên và tìm các điểm cực trị của hàm số',
        problemStatement:
          'Cho hàm số $y = f(x) = -x^3 + 3x^2 + 9x - 1$. Xét chiều biến thiên và tìm các điểm cực trị của hàm số đã cho.',
        conclusionTarget:
          'Hàm số đồng biến trên $(-1; 3)$, nghịch biến trên $(-\\infty; -1)$ và $(3; +\\infty)$; đạt cực tiểu tại $x = -1\\ (y_{\\text{CT}} = -6)$ và đạt cực đại tại $x = 3\\ (y_{\\text{CĐ}} = 26)$.',
        tikzType: 'd0_q20_bbt',
        steps: [
          {
            id: 'd1-p4-q1-s1',
            originalIndex: 1,
            roleDescription: 'Tìm tập xác định và tính đạo hàm',
            content:
              '1. Tập xác định: $D = \\mathbb{R}$. Ta có đạo hàm $y\' = -3x^2 + 6x + 9$.',
          },
          {
            id: 'd1-p4-q1-s2',
            originalIndex: 2,
            roleDescription: 'Giải phương trình đạo hàm bằng 0 và lập bảng biến thiên',
            content:
              'Cho $y\' = 0 \\Leftrightarrow -3(x^2 - 2x - 3) = 0 \\Leftrightarrow \\left[\\begin{array}{l} x = -1 \\\\ x = 3 \\end{array}\\right.$. Lập bảng biến thiên với $y(-1) = -6,\\ y(3) = 26$.',
          },
          {
            id: 'd1-p4-q1-s3',
            originalIndex: 3,
            roleDescription: 'Kết luận chiều biến thiên của hàm số',
            content:
              '2. Chiều biến thiên: Hàm số đồng biến trên khoảng $(-1; 3)$; hàm số nghịch biến trên các khoảng $(-\\infty; -1)$ và $(3; +\\infty)$.',
          },
          {
            id: 'd1-p4-q1-s4',
            originalIndex: 4,
            roleDescription: 'Kết luận các điểm cực trị của hàm số',
            content:
              '3. Cực trị: Hàm số đạt cực tiểu tại $x = -1$, giá trị cực tiểu $y_{\\text{CT}} = y(-1) = -6$; hàm số đạt cực đại tại $x = 3$, giá trị cực đại $y_{\\text{CĐ}} = y(3) = 26$.',
          },
        ],
        pedagogicalTip:
          'Trình bày tự luận khảo sát sự biến thiên cần đủ 3 mục rõ ràng: Tập xác định -> Đạo hàm & Bảng biến thiên -> Kết luận khoảng đồng biến/nghịch biến và cực trị.',
        teacherAnalysis:
          'Với tam thức bậc hai $y\' = -3x^2 + 6x + 9$ có hệ số $a = -3 < 0$, trong khoảng hai nghiệm $(-1; 3)$ thì $y\' > 0$, ngoài khoảng hai nghiệm thì $y\' < 0$.',
        points: 1.0,
      },
      {
        id: 'd1-p4-q2',
        part: 'part4',
        number: 2,
        topic: 'Phần IV - Câu 2: Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên đoạn',
        problemStatement:
          'Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số $f(x) = x^4 - 2x^2 + 3$ trên đoạn $[0; 2]$.',
        conclusionTarget:
          '$\\max_{[0; 2]} f(x) = f(2) = 11$ và $\\min_{[0; 2]} f(x) = f(1) = 2$.',
        steps: [
          {
            id: 'd1-p4-q2-s1',
            originalIndex: 1,
            roleDescription: 'Tính đạo hàm của hàm số trên đoạn [0; 2]',
            content:
              'Xét hàm số $f(x) = x^4 - 2x^2 + 3$ trên đoạn $[0; 2]$. Đạo hàm: $f\'(x) = 4x^3 - 4x = 4x(x^2 - 1)$.',
          },
          {
            id: 'd1-p4-q2-s2',
            originalIndex: 2,
            roleDescription: 'Tìm nghiệm của phương trình đạo hàm thuộc đoạn [0; 2]',
            content:
              'Cho $f\'(x) = 0 \\Leftrightarrow \\left[\\begin{array}{l} x = 0 \\in [0; 2] \\\\ x = 1 \\in [0; 2] \\\\ x = -1 \\notin [0; 2] \\end{array}\\right.$.',
          },
          {
            id: 'd1-p4-q2-s3',
            originalIndex: 3,
            roleDescription: 'Tính giá trị của hàm số tại các điểm tới hạn và hai đầu mút',
            content:
              'Tính các giá trị: $f(0) = 3;\\ f(1) = 2;\\ f(2) = 11$.',
          },
          {
            id: 'd1-p4-q2-s4',
            originalIndex: 4,
            roleDescription: 'So sánh và kết luận GTLN, GTNN trên đoạn [0; 2]',
            content:
              'So sánh các giá trị trên, ta được: $\\max_{[0; 2]} f(x) = f(2) = 11$ và $\\min_{[0; 2]} f(x) = f(1) = 2$.',
          },
        ],
        pedagogicalTip:
          'Loại nghiệm $x = -1 \\notin [0; 2]$ trước khi tính giá trị hàm số để tránh nhầm lẫn.',
        teacherAnalysis:
          'Quy trình tìm GTLN - GTNN của hàm số liên tục trên đoạn $[a; b]$: Tính $f\'(x)$ -> Tìm các nghiệm $x_i \\in [a; b]$ -> Tính $f(a), f(b), f(x_i)$ -> Kết luận.',
        points: 0.5,
      },
      {
        id: 'd1-p4-q3',
        part: 'part4',
        number: 3,
        topic: 'Phần IV - Câu 3: Bài toán thực tế tối ưu diện tích mảnh vườn',
        problemStatement:
          'Một bác nông dân có $60\\text{ m}$ lưới thép muốn rào một khu vườn hình chữ nhật sát một bức tường thẳng (không cần rào cạnh tiếp giáp bờ tường). Hãy tính diện tích lớn nhất của mảnh vườn mà bác nông dân có thể rào được.',
        conclusionTarget:
          'Diện tích lớn nhất của mảnh vườn có thể rào được là $S_{\\max} = S(15) = 450\\text{ m}^2$.',
        steps: [
          {
            id: 'd1-p4-q3-s1',
            originalIndex: 1,
            roleDescription: 'Đặt ẩn x cho cạnh vuông góc với tường và tìm cạnh còn lại',
            content:
              'Gọi cạnh của mảnh vườn vuông góc với bức tường là $x\\ (0 < x < 30,\\text{ mét})$. Vì có $2$ cạnh vuông góc với bờ tường và $1$ cạnh song song với bờ tường nên chiều dài cạnh song song với tường là $60 - 2x\\text{ (mét)}$.',
          },
          {
            id: 'd1-p4-q3-s2',
            originalIndex: 2,
            roleDescription: 'Lập hàm số biểu thị diện tích mảnh vườn S(x)',
            content:
              'Diện tích mảnh vườn rào được là: $S(x) = x(60 - 2x) = -2x^2 + 60x\\text{ (m}^2\\text{)}$ với $x \\in (0; 30)$.',
          },
          {
            id: 'd1-p4-q3-s3',
            originalIndex: 3,
            roleDescription: 'Tính đạo hàm và tìm điểm cực trị của hàm diện tích',
            content:
              'Xét hàm số $S(x) = -2x^2 + 60x$ với $x \\in (0; 30)$: Ta có $S\'(x) = -4x + 60 = 0 \\Leftrightarrow x = 15$ (thỏa mãn).',
          },
          {
            id: 'd1-p4-q3-s4',
            originalIndex: 4,
            roleDescription: 'Tính giá trị lớn nhất và kết luận diện tích mảnh vườn',
            content:
              'Vì hàm số bậc hai có hệ số $a = -2 < 0$ nên giá trị cực đại cũng là giá trị lớn nhất của hàm số: $S_{\\max} = S(15) = 15 \\cdot (60 - 2 \\cdot 15) = 15 \\cdot 30 = 450\\text{ m}^2$. Vậy diện tích lớn nhất của mảnh vườn có thể rào được là $450\\text{ m}^2$.',
          },
        ],
        pedagogicalTip:
          'Lưu ý khu vườn sát bức tường thẳng nên chỉ cần rào $3$ cạnh (hai cạnh chiều rộng $x$ và một cạnh chiều dài $60 - 2x$).',
        teacherAnalysis:
          'Bài toán tối ưu thực tế quy về tìm giá trị lớn nhất của hàm số bậc hai $S(x) = -2x^2 + 60x$ trên khoảng $(0; 30)$.',
        points: 0.5,
      },
    ],
  },
  {
    id: 'de-so-02',
    title: 'Đề ôn GK1 02',
    subtitle: 'Ôn 12 - Đề ôn GK1 02: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số (GV Nguyễn Ngọc Thanh)',
    grade: 12,
    durationMinutes: 90,
    totalPoints: 10,
    description:
      'Đề ôn tập Toán 12 - Đề ôn GK1 02 (GV Nguyễn Ngọc Thanh) gồm 22 câu hỏi chuẩn cấu trúc 4 phần: Phần I (12 câu trắc nghiệm nhiều lựa chọn từ Câu 1 đến Câu 12 - 3,0đ), Phần II (3 câu trắc nghiệm Đúng/Sai từ Câu 1 đến Câu 3 - 3,0đ), Phần III (4 câu trả lời ngắn từ Câu 1 đến Câu 4 - 2,0đ), Phần IV (3 câu tự luận từ Câu 1 đến Câu 3 - 2,0đ).',
    part1: [
      {
        id: 'd2-p1-q1',
        part: 'part1',
        number: 1,
        topic: 'Xét tính đơn điệu của hàm số qua bảng xét dấu đạo hàm',
        prompt:
          'Cho hàm số $y = f(x)$ có bảng xét dấu của đạo hàm như hình vẽ. Hàm số đã cho nghịch biến trên khoảng nào dưới đây?',
        tikzType: 'd2_q1_bxd',
        options: [
          { key: 'A', content: '$(-\\infty; 1)$' },
          { key: 'B', content: '$(1; +\\infty)$' },
          { key: 'C', content: '$(-1; +\\infty)$' },
          { key: 'D', content: '$(-\\infty; -1)$' },
        ],
        correctAnswer: 'D',
        explanation:
          'Dựa vào bảng xét dấu đạo hàm, ta thấy $y\' < 0$ trên các khoảng $(-\\infty; -1)$ và $(-1; 1)$. Do đó, hàm số nghịch biến trên khoảng $(-\\infty; -1)$ (và khoảng $(-1; 1)$). Vậy phương án phù hợp là $(-\\infty; -1)$.',
        pedagogicalTip:
          'Tại $x = -1$ đạo hàm không xác định (có dấu gạch đôi $||$), nên không được gộp thành khoảng $(-\\infty; 1)$ mà phải kết luận nghịch biến trên từng khoảng $(-\\infty; -1)$ và $(-1; 1)$.',
        points: 0.25,
      },
      {
        id: 'd2-p1-q2',
        part: 'part1',
        number: 2,
        topic: 'Xét tính đơn điệu của hàm số qua đồ thị',
        prompt:
          'Cho hàm số $y = f(x)$ có đồ thị là đường cong như hình vẽ sau. Hàm số đã cho nghịch biến trên khoảng nào dưới đây?',
        tikzType: 'd2_q2_graph',
        options: [
          { key: 'A', content: '$(0; +\\infty)$' },
          { key: 'B', content: '$(-1; 0)$' },
          { key: 'C', content: '$(-\\infty; -1)$' },
          { key: 'D', content: '$(0; 1)$' },
        ],
        correctAnswer: 'B',
        explanation:
          'Dựa vào đồ thị hàm số:\n- Đồ thị đi xuống từ trái sang phải trên các khoảng $(-1; 0)$ và $(1; +\\infty)$, do đó hàm số nghịch biến trên $(-1; 0)$ và $(1; +\\infty)$.\n- Đồ thị đi lên từ trái sang phải trên các khoảng $(-\\infty; -1)$ và $(0; 1)$, do đó hàm số đồng biến trên $(-\\infty; -1)$ và $(0; 1)$.\nVậy hàm số nghịch biến trên khoảng $(-1; 0)$.',
        pedagogicalTip:
          'Khi xét khoảng đồng biến/nghịch biến trên đồ thị, ta luôn đọc theo trục hoành $Ox$ từ trái sang phải.',
        points: 0.25,
      },
      {
        id: 'd2-p1-q3',
        part: 'part1',
        number: 3,
        topic: 'Tìm số điểm cực trị của hàm số qua bảng xét dấu đạo hàm',
        prompt:
          'Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ và có bảng xét dấu của đạo hàm như sau. Số điểm cực trị của hàm số đã cho là:',
        tikzType: 'd2_q3_bxd',
        options: [
          { key: 'A', content: '$3$' },
          { key: 'B', content: '$5$' },
          { key: 'C', content: '$4$' },
          { key: 'D', content: '$2$' },
        ],
        correctAnswer: 'C',
        explanation:
          'Vì hàm số liên tục trên $\\mathbb{R}$ và đạo hàm $y\' = f\'(x)$ đổi dấu khi đi qua các điểm $x = -3$, $x = -2$, $x = 3$, $x = 5$ (tổng cộng $4$ lần đổi dấu), nên hàm số đã cho có $4$ điểm cực trị.',
        pedagogicalTip:
          'Hàm số liên tục trên $\\mathbb{R}$ có bao nhiêu lần đạo hàm $f\'(x)$ đổi dấu khi đi qua các điểm trên trục số thì có bấy nhiêu điểm cực trị.',
        points: 0.25,
      },
      {
        id: 'd2-p1-q4',
        part: 'part1',
        number: 4,
        topic: 'Nhận diện đồ thị hàm phân thức bậc nhất trên bậc nhất',
        prompt:
          'Đường cong trong hình vẽ bên là của đồ thị hàm số nào trong các hàm số dưới đây?',
        tikzType: 'd2_q4_graph',
        options: [
          { key: 'A', content: '$y = \\frac{2x - 1}{x - 1}$' },
          { key: 'B', content: '$y = \\frac{2x - 2}{2x + 1}$' },
          { key: 'C', content: '$y = \\frac{-x + 1}{x + 1}$' },
          { key: 'D', content: '$y = \\frac{x + 1}{x - 1}$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Dựa vào hình vẽ:\n- Đồ thị có tiệm cận đứng $x = 1$, tiệm cận ngang $y = 2$.\n- Đồ thị cắt trục tung tại điểm $(0; 1)$ và cắt trục hoành tại $\\left(\\frac{1}{2}; 0\\right)$.\nXét hàm số $y = \\frac{2x - 1}{x - 1}$:\n+ Tiệm cận đứng: $x = 1$.\n+ Tiệm cận ngang: $y = 2$.\n+ Giao với trục tung: cho $x = 0 \\Rightarrow y = 1$ (thỏa mãn).\n+ Giao với trục hoành: $y = 0 \\Rightarrow 2x - 1 = 0 \\Leftrightarrow x = \\frac{1}{2}$ (thỏa mãn).',
        pedagogicalTip:
          'Kiểm tra nhanh 3 yếu tố: Tiệm cận đứng $x = 1$, tiệm cận ngang $y = 2$ và giao điểm với trục tung $(0; 1)$.',
        points: 0.25,
      },
      {
        id: 'd2-p1-q5',
        part: 'part1',
        number: 5,
        topic: 'Nhận diện đồ thị hàm số bậc ba',
        prompt: 'Đồ thị sau đây là của hàm số nào?',
        tikzType: 'd2_q5_graph',
        options: [
          { key: 'A', content: '$y = x^3 + 3x^2 - 4$' },
          { key: 'B', content: '$y = -x^3 - 3x^2 - 4$' },
          { key: 'C', content: '$y = x^3 - 3x - 4$' },
          { key: 'D', content: '$y = -x^3 + 3x^2 - 4$' },
        ],
        correctAnswer: 'D',
        explanation:
          'Dựa vào dạng đồ thị:\n- Đồ thị là của hàm số bậc ba $y = ax^3 + bx^2 + cx + d$ có nhánh cuối đi xuống nên hệ số $a < 0$.\n- Đồ thị cắt trục tung tại điểm $(0; -4)$, do đó $d = -4$.\n- Hàm số đạt cực tiểu tại $x = 0$ với $y = -4$, đạt cực đại tại $x = 2$ với $y = 0$.\nXét hàm số $y = -x^3 + 3x^2 - 4$:\nTa có $y\' = -3x^2 + 6x = 0 \\Leftrightarrow \\left[\\begin{array}{l} x = 0 \\Rightarrow y = -4 \\\\ x = 2 \\Rightarrow y = 0 \\end{array}\\right.$.\nHàm số này hoàn toàn phù hợp với đồ thị đã cho.',
        pedagogicalTip:
          'Nhánh cuối đi xuống $\\Rightarrow a < 0$ (loại A, C); điểm cực đại tại $x = 2 > 0 \\Rightarrow$ chọn $y = -x^3 + 3x^2 - 4$.',
        points: 0.25,
      },
      {
        id: 'd2-p1-q6',
        part: 'part1',
        number: 6,
        topic: 'Tìm tọa độ giao điểm của đồ thị hàm số với trục tung',
        prompt:
          'Giao điểm của đồ thị hàm số $y = \\frac{x - 2}{x + 1}$ với trục tung có tọa độ là:',
        options: [
          { key: 'A', content: '$(-2; 0)$' },
          { key: 'B', content: '$(0; -2)$' },
          { key: 'C', content: '$(0; 2)$' },
          { key: 'D', content: '$(-1; 0)$' },
        ],
        correctAnswer: 'B',
        explanation:
          'Giao điểm của đồ thị với trục tung ứng với $x = 0$.\nThay $x = 0$ vào hàm số ta được: $y = \\frac{0 - 2}{0 + 1} = -2$.\nVậy tọa độ giao điểm là $(0; -2)$.',
        pedagogicalTip:
          'Giao điểm với trục tung $Oy$ luôn có hoành độ $x = 0$, tọa độ viết dưới dạng $(0; y_0)$ chứ không phải $(y_0; 0)$.',
        points: 0.25,
      },
      {
        id: 'd2-p1-q7',
        part: 'part1',
        number: 7,
        topic: 'Tìm giá trị lớn nhất của hàm số trên đoạn qua bảng biến thiên',
        prompt:
          'Cho hàm số $y = f(x)$ xác định, liên tục trên $\\mathbb{R}$ và có bảng biến thiên như sau. Giá trị lớn nhất của hàm số $y = f(x)$ trên đoạn $[0; 2]$ bằng:',
        tikzType: 'd2_q7_bbt',
        options: [
          { key: 'A', content: '$2$' },
          { key: 'B', content: '$0$' },
          { key: 'C', content: '$3$' },
          { key: 'D', content: '$1$' },
        ],
        correctAnswer: 'C',
        explanation:
          'Dựa vào bảng biến thiên, trên đoạn $[0; 2]$ chứa điểm cực đại $x = 1$.\nHàm số đồng biến trên $(-\\infty; 1)$ và nghịch biến trên $(1; 2)$.\nDo đó, với mọi $x \\in [0; 2]$, ta có $f(x) \\le f(1) = 3$.\nVậy $\\max_{[0; 2]} f(x) = 3$ tại $x = 1$.',
        pedagogicalTip:
          'Phân biệt "giá trị lớn nhất của hàm số" là giá trị $y_{\\max} = 3$ với điểm đạt giá trị lớn nhất $x = 1$.',
        points: 0.25,
      },
      {
        id: 'd2-p1-q8',
        part: 'part1',
        number: 8,
        topic: 'Định nghĩa đường tiệm cận ngang của đồ thị hàm số',
        prompt:
          'Cho hàm số $y = f(x)$ có $\\lim_{x \\to +\\infty} f(x) = 1$ và $\\lim_{x \\to -\\infty} f(x) = -1$. Khẳng định nào sau đây là khẳng định đúng?',
        options: [
          { key: 'A', content: 'Đồ thị hàm số đã cho có đúng một tiệm cận ngang.' },
          {
            key: 'B',
            content: 'Đồ thị hàm số đã cho có hai tiệm cận ngang là các đường thẳng $y = 1$ và $y = -1$.',
          },
          {
            key: 'C',
            content: 'Đồ thị hàm số đã cho có hai tiệm cận ngang là các đường thẳng $x = 1$ và $x = -1$.',
          },
          { key: 'D', content: 'Đồ thị hàm số đã cho không có tiệm cận ngang.' },
        ],
        correctAnswer: 'B',
        explanation:
          'Theo định nghĩa đường tiệm cận ngang của đồ thị hàm số:\n- Vì $\\lim_{x \\to +\\infty} f(x) = 1$ nên đường thẳng $y = 1$ là một tiệm cận ngang của đồ thị hàm số.\n- Vì $\\lim_{x \\to -\\infty} f(x) = -1$ nên đường thẳng $y = -1$ là một tiệm cận ngang của đồ thị hàm số.\nVậy đồ thị hàm số có hai tiệm cận ngang là $y = 1$ và $y = -1$.',
        pedagogicalTip:
          'Phương trình đường tiệm cận ngang luôn có dạng $y = y_0$ (tránh nhầm với phương án C là $x = \\pm 1$).',
        points: 0.25,
      },
      {
        id: 'd2-p1-q9',
        part: 'part1',
        number: 9,
        topic: 'Tìm tiệm cận đứng và tiệm cận ngang qua đồ thị hàm phân thức',
        prompt:
          'Cho hàm số $y = \\frac{ax + b}{cx + d}$ ($ad - bc \\neq 0;\\ ac \\neq 0$) có đồ thị như hình vẽ bên dưới. Tìm phương trình đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số.',
        tikzType: 'd2_q9_graph',
        options: [
          { key: 'A', content: '$x = 1,\\ y = 1$.' },
          { key: 'B', content: '$x = 2,\\ y = 1$.' },
          { key: 'C', content: '$x = 1,\\ y = 2$.' },
          { key: 'D', content: '$x = -1,\\ y = 1$.' },
        ],
        correctAnswer: 'C',
        explanation:
          'Dựa vào hình vẽ đồ thị hàm số:\n- Đường thẳng đứng đi qua điểm có hoành độ $x = 1$ là đường tiệm cận đứng $x = 1$.\n- Đường nằm ngang đi qua điểm có tung độ $y = 2$ là đường tiệm cận ngang $y = 2$.\nVậy phương trình tiệm cận đứng và tiệm cận ngang lần lượt là $x = 1$ và $y = 2$.',
        pedagogicalTip:
          'Điểm $(2; 0)$ trên hình là giao điểm của đồ thị với trục hoành, còn đường tiệm cận đứng đi qua điểm $x = 1$.',
        points: 0.25,
      },
      {
        id: 'd2-p1-q10',
        part: 'part1',
        number: 10,
        topic: 'Đếm tổng số đường tiệm cận đứng và tiệm cận ngang từ bảng biến thiên',
        prompt:
          'Cho hàm số $f(x)$ có bảng biến thiên như sau. Tổng số tiệm cận ngang và tiệm cận đứng của đồ thị hàm số đã cho là:',
        tikzType: 'd2_q10_bbt',
        options: [
          { key: 'A', content: '$1$' },
          { key: 'B', content: '$3$' },
          { key: 'C', content: '$4$' },
          { key: 'D', content: '$2$' },
        ],
        correctAnswer: 'B',
        explanation:
          'Dựa vào bảng biến thiên:\n- $\\lim_{x \\to -\\infty} f(x) = 0 \\Rightarrow y = 0$ là một đường tiệm cận ngang.\n- $\\lim_{x \\to +\\infty} f(x) = 5 \\Rightarrow y = 5$ là một đường tiệm cận ngang.\n- $\\lim_{x \\to 1^-} f(x) = -\\infty \\Rightarrow x = 1$ là một đường tiệm cận đứng.\nVậy đồ thị hàm số có $2$ đường tiệm cận ngang và $1$ đường tiệm cận đứng. Tổng số đường tiệm cận là $2 + 1 = 3$.',
        pedagogicalTip:
          'Chỉ cần một trong hai giới hạn một bên $\\lim_{x \\to x_0^-} f(x)$ hoặc $\\lim_{x \\to x_0^+} f(x)$ bằng $\\pm\\infty$ thì đường thẳng $x = x_0$ đã là tiệm cận đứng.',
        points: 0.25,
      },
      {
        id: 'd2-p1-q11',
        part: 'part1',
        number: 11,
        topic: 'Tìm số điểm cực trị khi biết biểu thức đạo hàm dạng tích',
        prompt:
          'Cho hàm số $f(x)$ có đạo hàm $f\'(x) = (x + 3)(x^2 + 2x - 3)(x + 1)^2$ với mọi $x \\in \\mathbb{R}$. Số điểm cực trị của hàm số đã cho là:',
        options: [
          { key: 'A', content: '$2$' },
          { key: 'B', content: '$3$' },
          { key: 'C', content: '$1$' },
          { key: 'D', content: '$0$' },
        ],
        correctAnswer: 'C',
        explanation:
          'Ta có: $x^2 + 2x - 3 = (x - 1)(x + 3)$.\nDo đó: $f\'(x) = (x + 3) \\cdot (x - 1)(x + 3) \\cdot (x + 1)^2 = (x + 3)^2(x - 1)(x + 1)^2$.\nĐể tìm điểm cực trị, ta tìm các nghiệm mà tại đó $f\'(x)$ đổi dấu:\n- Các thừa số $(x + 3)^2 \\ge 0$ và $(x + 1)^2 \\ge 0$ với mọi $x$ nên không làm đổi dấu đạo hàm khi $x$ đi qua $-3$ và $-1$.\n- Thừa số $(x - 1)$ là nghiệm đơn bậc nhất, do đó $f\'(x)$ đổi dấu khi đi qua $x = 1$.\nVậy hàm số có duy nhất $1$ điểm cực trị là $x = 1$.',
        pedagogicalTip:
          'Cần phân tích tam thức bậc hai $x^2 + 2x - 3 = (x - 1)(x + 3)$ để phát hiện nhân tử $(x + 3)$ ghép với $(x + 3)$ bên ngoài thành bình phương $(x + 3)^2$ (nghiệm bội chẵn).',
        points: 0.25,
      },
      {
        id: 'd2-p1-q12',
        part: 'part1',
        number: 12,
        topic: 'Tìm khoảng nghịch biến của hàm số bậc ba',
        prompt:
          'Hàm số $y = \\frac{1}{3}x^3 - x^2 - 3x + 12$ nghịch biến trên khoảng nào dưới đây?',
        options: [
          { key: 'A', content: '$(3; +\\infty)$' },
          { key: 'B', content: '$(-\\infty; -1)$ và $(3; +\\infty)$' },
          { key: 'C', content: '$(-\\infty; -1)$' },
          { key: 'D', content: '$(-1; 3)$' },
        ],
        correctAnswer: 'D',
        explanation:
          'Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y\' = x^2 - 2x - 3$.\nCho $y\' < 0 \\Leftrightarrow x^2 - 2x - 3 < 0 \\Leftrightarrow -1 < x < 3$.\nVậy hàm số nghịch biến trên khoảng $(-1; 3)$.',
        pedagogicalTip:
          'Tam thức bậc hai $y\' = x^2 - 2x - 3$ có $a = 1 > 0$ và hai nghiệm $-1;\\ 3$, nên mang dấu âm trong khoảng hai nghiệm $(-1; 3)$.',
        points: 0.25,
      },
    ],
    part2: [
      {
        id: 'd2-p2-q1',
        part: 'part2',
        number: 1,
        topic: 'Phần II - Câu 1: Khảo sát hàm số bậc ba qua đồ thị',
        prompt:
          'Cho hàm số $y = f(x) = ax^3 + bx^2 + cx + d$ có đồ thị như hình vẽ sau. Xét tính đúng sai của các khẳng định sau:',
        tikzType: 'd2_p2_q1_graph',
        statements: [
          {
            id: 'a',
            label: 'a',
            statement: 'Hàm số đạt cực tiểu tại điểm $x = 2$.',
            isCorrect: true,
            explanation:
              'Đúng. Dựa vào đồ thị, điểm cực tiểu của hàm số có tọa độ $(2; -2)$, do đó hàm số đạt cực tiểu tại điểm $x = 2$. Khẳng định này là đúng.',
          },
          {
            id: 'b',
            label: 'b',
            statement: 'Giá trị cực đại của hàm số bằng $-1$.',
            isCorrect: false,
            explanation:
              'Sai. Điểm cực đại của đồ thị hàm số là $(-1; 1)$, do đó giá trị cực đại của hàm số là $y_{\\text{CĐ}} = 1$, còn điểm cực đại là $x = -1$. Khẳng định nói giá trị cực đại bằng $-1$ là sai.',
          },
          {
            id: 'c',
            label: 'c',
            statement:
              'Trên khoảng $(-\\infty; 2)$, hàm số có giá trị lớn nhất là $1$ và có giá trị nhỏ nhất là $-2$.',
            isCorrect: false,
            explanation:
              'Sai. Trên khoảng $(-\\infty; 2)$, khi $x \\to -\\infty$ thì $y \\to -\\infty$, do đó hàm số không có giá trị nhỏ nhất trên khoảng này. Khẳng định này là sai.',
          },
          {
            id: 'd',
            label: 'd',
            statement: 'Hàm số nghịch biến trên khoảng $(0; 1)$.',
            isCorrect: true,
            explanation:
              'Đúng. Hàm số nghịch biến trên khoảng $(-1; 2)$. Vì $(0; 1) \\subset (-1; 2)$ nên hàm số nghịch biến trên khoảng $(0; 1)$. Khẳng định này là đúng.',
          },
        ],
        pedagogicalTip:
          'Nếu hàm số nghịch biến trên khoảng $(a; b)$ thì nó cũng nghịch biến trên mọi khoảng con $(c; d) \\subset (a; b)$.',
      },
      {
        id: 'd2-p2-q2',
        part: 'part2',
        number: 2,
        topic: 'Phần II - Câu 2: Khảo sát hàm phân thức bậc nhất trên bậc nhất',
        prompt:
          'Cho hàm số $y = \\frac{2x - 1}{x - 1}$. Xét tính đúng sai của các khẳng định sau:',
        statements: [
          {
            id: 'a',
            label: 'a',
            statement: 'Đồ thị hàm số có $1$ cực trị.',
            isCorrect: false,
            explanation:
              'Sai. Tập xác định $D = \\mathbb{R} \\setminus \\{1\\}$. Ta có $y\' = \\frac{2(-1) - (-1)(1)}{(x - 1)^2} = \\frac{-1}{(x - 1)^2} < 0$ với mọi $x \\neq 1$. Hàm số không có điểm cực trị nào. Khẳng định đồ thị hàm số có $1$ cực trị là sai.',
          },
          {
            id: 'b',
            label: 'b',
            statement: 'Đồ thị hàm số có tiệm cận ngang là đường thẳng $y = 2$.',
            isCorrect: true,
            explanation:
              'Đúng. Ta có $\\lim_{x \\to \\pm\\infty} \\frac{2x - 1}{x - 1} = 2$, do đó tiệm cận ngang là đường thẳng $y = 2$. Khẳng định này là đúng.',
          },
          {
            id: 'c',
            label: 'c',
            statement: 'Bảng biến thiên của hàm số đã cho là:',
            tikzType: 'd2_p2_q2_bbt',
            isCorrect: false,
            explanation:
              'Sai. Bảng biến thiên ở phương án thiếu điểm không xác định $x = 1$ của hàm số (hàm số gián đoạn tại $x = 1$). Bảng biến thiên chuẩn phải có $2$ nhánh phân cách bởi đường đôi tại $x = 1$. Do đó khẳng định này là sai.',
          },
          {
            id: 'd',
            label: 'd',
            statement: 'Giá trị lớn nhất của hàm số trên $[2; 4]$ bằng $3$.',
            isCorrect: true,
            explanation:
              'Đúng. Trên đoạn $[2; 4]$, vì $y\' < 0$ nên hàm số nghịch biến trên $[2; 4]$. Do đó $\\max_{[2; 4]} y = y(2) = \\frac{2(2) - 1}{2 - 1} = 3$. Khẳng định này là đúng.',
          },
        ],
        pedagogicalTip:
          'Hàm phân thức bậc nhất trên bậc nhất $y = \\frac{ax + b}{cx + d}$ ($ad - bc \\neq 0$) luôn đơn điệu trên từng khoảng xác định và không bao giờ có cực trị.',
      },
      {
        id: 'd2-p2-q3',
        part: 'part2',
        number: 3,
        topic: 'Phần II - Câu 3: Bài toán thực tế sự tăng trưởng của vi khuẩn',
        prompt:
          'Một công ty nghiên cứu sự tăng trưởng của một loại vi khuẩn. Người ta ước tính rằng số lượng vi khuẩn (tính bằng hàng nghìn con) sau $t$ giờ kể từ thời điểm ban đầu được mô phỏng bởi hàm số $N(t) = -t^3 + 15t^2 + 10$ với $t \\in [0; 12]$. Xét tính đúng sai của các khẳng định sau:',
        statements: [
          {
            id: 'a',
            label: 'a',
            statement: 'Số lượng vi khuẩn tại thời điểm ban đầu (khi $t = 0$) là $10\\,000$ con.',
            isCorrect: true,
            explanation:
              'Đúng. Tại thời điểm ban đầu $t = 0$, ta có $N(0) = 10$ (nghìn con), tức là $10\\,000$ con. Khẳng định này là đúng.',
          },
          {
            id: 'b',
            label: 'b',
            statement:
              'Tốc độ tăng trưởng của vi khuẩn tại thời điểm $t$ là hàm số bậc hai $N\'(t) = -3t^2 + 30t$.',
            isCorrect: true,
            explanation:
              'Đúng. Tốc độ tăng trưởng của số lượng vi khuẩn là đạo hàm $N\'(t) = (-t^3 + 15t^2 + 10)\' = -3t^2 + 30t$. Khẳng định này là đúng.',
          },
          {
            id: 'c',
            label: 'c',
            statement: 'Số lượng vi khuẩn bắt đầu giảm đi sau giờ thứ $10$.',
            isCorrect: true,
            explanation:
              'Đúng. Ta xét dấu $N\'(t) = -3t(t - 10)$: Với $t \\in (0; 10)$ thì $N\'(t) > 0$, do đó số lượng vi khuẩn tăng; với $t \\in (10; 12]$ thì $N\'(t) < 0$, do đó số lượng vi khuẩn giảm. Vậy số lượng vi khuẩn bắt đầu giảm đi sau thời điểm $t = 10$ (sau giờ thứ $10$). Khẳng định này là đúng.',
          },
          {
            id: 'd',
            label: 'd',
            statement:
              'Tốc độ tăng trưởng của vi khuẩn đạt giá trị lớn nhất tại thời điểm $t = 10$.',
            isCorrect: false,
            explanation:
              'Sai. Tốc độ tăng trưởng là $v(t) = N\'(t) = -3t^2 + 30t = -3(t^2 - 10t + 25) + 75 = -3(t - 5)^2 + 75 \\le 75$. Tốc độ tăng trưởng đạt giá trị lớn nhất bằng $75$ khi $t = 5$, không phải tại $t = 10$. Khẳng định này là sai.',
          },
        ],
        pedagogicalTip:
          'Phân biệt rõ "số lượng vi khuẩn $N(t)$ lớn nhất" (đạt tại $t = 10$) với "tốc độ tăng trưởng $N\'(t)$ lớn nhất" (đạt tại đỉnh parabol $t = 5$).',
      },
    ],
    part3: [
      {
        id: 'd2-p3-q1',
        part: 'part3',
        number: 1,
        topic: 'Phần III - Câu 1: Giá trị lớn nhất của hàm số chứa căn thức',
        prompt:
          'Giá trị lớn nhất của hàm số $y = 3 + \\sqrt{16 - x^2}$ bằng bao nhiêu?',
        acceptableAnswers: ['7'],
        explanation:
          'Tập xác định: $16 - x^2 \\ge 0 \\Leftrightarrow -4 \\le x \\le 4$.\nVì $x^2 \\ge 0$ nên $16 - x^2 \\le 16$, suy ra $\\sqrt{16 - x^2} \\le \\sqrt{16} = 4$.\nDo đó $y = 3 + \\sqrt{16 - x^2} \\le 3 + 4 = 7$.\nDấu bằng xảy ra khi $x = 0 \\in [-4; 4]$.\nVậy giá trị lớn nhất của hàm số bằng $7$.',
        pedagogicalTip:
          'Biểu thức $\\sqrt{R^2 - x^2}$ luôn đạt giá trị lớn nhất bằng $R$ tại $x = 0$.',
        points: 0.5,
      },
      {
        id: 'd2-p3-q2',
        part: 'part3',
        number: 2,
        topic: 'Phần III - Câu 2: Xác định đường tiệm cận xiên của đồ thị hàm số',
        prompt:
          'Biết đường tiệm cận xiên của đồ thị hàm số $y = \\frac{2x^2 - x + 2}{x + 1}$ có dạng $y = ax + b$ ($a, b \\in \\mathbb{R}$). Tính $2a + b$.',
        acceptableAnswers: ['1'],
        explanation:
          'Thực hiện phép chia đa thức tử cho mẫu:\n$$2x^2 - x + 2 = (x + 1)(2x - 3) + 5.$$\nDo đó:\n$$y = \\frac{2x^2 - x + 2}{x + 1} = 2x - 3 + \\frac{5}{x + 1}.$$\nVì $\\lim_{x \\to \\pm\\infty} [y - (2x - 3)] = \\lim_{x \\to \\pm\\infty} \\frac{5}{x + 1} = 0$, nên đường tiệm cận xiên của đồ thị hàm số là đường thẳng $y = 2x - 3$.\nSuy ra $a = 2,\\ b = -3$.\nVậy $2a + b = 2(2) + (-3) = 1$.',
        pedagogicalTip:
          'Chia đa thức $2x^2 - x + 2$ cho $x + 1$ được thương là $2x - 3$ và dư $5$, suy ra ngay tiệm cận xiên $y = 2x - 3$.',
        points: 0.5,
      },
      {
        id: 'd2-p3-q3',
        part: 'part3',
        number: 3,
        topic: 'Phần III - Câu 3: Xác định hệ số của hàm phân thức từ đồ thị',
        prompt:
          'Cho hàm số $y = \\frac{ax + b}{3x + c}$ (với $a, b, c \\in \\mathbb{R}$) có đồ thị như hình vẽ. Tính giá trị của $P = 2a + 3b - c$.',
        tikzType: 'd2_p3_q3_graph',
        acceptableAnswers: ['24'],
        explanation:
          'Dựa vào đồ thị hàm số $y = \\frac{ax + b}{3x + c}$:\n- Đồ thị có tiệm cận đứng $x = 1$, suy ra mẫu số $3x + c = 0$ tại $x = 1$: $3(1) + c = 0 \\Leftrightarrow c = -3$.\n- Đồ thị có tiệm cận ngang $y = 2$, suy ra: $\\lim_{x \\to \\pm\\infty} y = \\frac{a}{3} = 2 \\Leftrightarrow a = 6$.\n- Đồ thị cắt trục tung tại điểm $(0; -1)$, suy ra: $y(0) = \\frac{b}{c} = -1 \\Rightarrow b = -c = -(-3) = 3$.\nThay các giá trị $a = 6,\\ b = 3,\\ c = -3$ vào biểu thức $P$:\n$$P = 2a + 3b - c = 2(6) + 3(3) - (-3) = 12 + 9 + 3 = 24.$$',
        pedagogicalTip:
          'Chú ý mẫu số của hàm đã cho là $3x + c$ (hệ số của $x$ ở mẫu bằng $3$), nên từ TCĐ $x = 1$ suy ra ngay $c = -3$.',
        points: 0.5,
      },
      {
        id: 'd2-p3-q4',
        part: 'part3',
        number: 4,
        topic: 'Phần III - Câu 4: Ứng dụng đạo hàm trong bài toán tốc độ tăng dân số',
        prompt:
          'Số dân của một thị trấn sau $t$ năm kể từ năm $2002$ được tính bởi công thức $f(t) = \\frac{30t - 60}{t + 4}$ ($f(t)$ được tính bằng nghìn người). Đạo hàm của hàm số $y = f(t)$ biểu thị tốc độ tăng dân số của thị trấn (tính bằng nghìn người/năm). Hỏi vào năm nào thì tốc độ tăng dân số là $0{,}05$ nghìn người/năm?',
        acceptableAnswers: ['2058', '2062'],
        explanation:
          'Tốc độ tăng dân số tại thời điểm $t$ là đạo hàm $f\'(t)$:\n$$f\'(t) = \\left(\\frac{30t - 60}{t + 4}\\right)\' = \\frac{30(4) - (-60)(1)}{(t + 4)^2} = \\frac{180}{(t + 4)^2}.$$\nTheo giả thiết, tốc độ tăng dân số là $0{,}05$ nghìn người/năm, ta có phương trình:\n$$\\frac{180}{(t + 4)^2} = 0{,}05 \\Leftrightarrow (t + 4)^2 = \\frac{180}{0{,}05} = 3600.$$\nVì $t > 0$ nên $t + 4 = 60 \\Leftrightarrow t = 56$.\nNăm cần tìm là: $2002 + 56 = 2058$.\n(Hệ thống chấp nhận cả kết quả giải chi tiết $2058$ và số $2062$ in trên dòng đáp án gốc của đề).',
        pedagogicalTip:
          'Sau khi giải được $t + 4 = 60$, nhớ trừ $4$ để được $t = 56$ năm rồi mới cộng vào mốc năm $2002$.',
        points: 0.5,
      },
    ],
    part4: [
      {
        id: 'd2-p4-q1',
        part: 'part4',
        number: 1,
        topic: 'Phần IV - Câu 1: Tìm các khoảng đơn điệu và cực trị của hàm số bậc ba',
        problemStatement:
          'Tìm các khoảng đơn điệu và cực trị của hàm số $y = -\\frac{1}{3}x^3 + x^2 + 3x + 2$.',
        conclusionTarget:
          'Hàm số đồng biến trên $(-1; 3)$, nghịch biến trên $(-\\infty; -1)$ và $(3; +\\infty)$; đạt cực tiểu tại $x = -1\\ \\left(y_{\\text{CT}} = \\frac{1}{3}\\right)$ và đạt cực đại tại $x = 3\\ (y_{\\text{CĐ}} = 11)$.',
        tikzType: 'd2_p4_q1_bbt',
        steps: [
          {
            id: 'd2-p4-q1-s1',
            originalIndex: 1,
            roleDescription: 'Tìm tập xác định và tính đạo hàm của hàm số',
            content:
              'Tập xác định: $D = \\mathbb{R}$. Đạo hàm: $y\' = -x^2 + 2x + 3$.',
          },
          {
            id: 'd2-p4-q1-s2',
            originalIndex: 2,
            roleDescription: 'Giải phương trình y\' = 0 và lập bảng biến thiên',
            content:
              'Cho $y\' = 0 \\Leftrightarrow -x^2 + 2x + 3 = 0 \\Leftrightarrow \\left[\\begin{array}{l} x = -1 \\\\ x = 3 \\end{array}\\right.$. Lập bảng biến thiên với $y(-1) = \\frac{1}{3}$ và $y(3) = 11$.',
          },
          {
            id: 'd2-p4-q1-s3',
            originalIndex: 3,
            roleDescription: 'Kết luận các khoảng đơn điệu của hàm số',
            content:
              'Kết luận đơn điệu: Hàm số đồng biến trên khoảng $(-1; 3)$; hàm số nghịch biến trên các khoảng $(-\\infty; -1)$ và $(3; +\\infty)$.',
          },
          {
            id: 'd2-p4-q1-s4',
            originalIndex: 4,
            roleDescription: 'Kết luận các điểm cực trị và giá trị cực trị của hàm số',
            content:
              'Kết luận cực trị: Hàm số đạt cực tiểu tại $x = -1$, giá trị cực tiểu $y_{\\text{CT}} = y(-1) = \\frac{1}{3}$; hàm số đạt cực đại tại $x = 3$, giá trị cực đại $y_{\\text{CĐ}} = y(3) = 11$.',
          },
        ],
        pedagogicalTip:
          'Khi tính $y(-1) = -\\frac{1}{3}(-1)^3 + (-1)^2 + 3(-1) + 2 = \\frac{1}{3} + 1 - 3 + 2 = \\frac{1}{3}$, chú ý dấu của $(-1)^3 = -1$.',
        teacherAnalysis:
          'Bài toán chuẩn mực khảo sát sự biến thiên và tìm cực trị của hàm số bậc ba có hệ số $a = -\\frac{1}{3} < 0$.',
        points: 1.0,
      },
      {
        id: 'd2-p4-q2',
        part: 'part4',
        number: 2,
        topic: 'Phần IV - Câu 2: Tìm giá trị lớn nhất của hàm số trên đoạn',
        problemStatement:
          'Tìm giá trị lớn nhất của hàm số $y = 2x^3 - 6x + 3$ trên đoạn $[0; 3]$.',
        conclusionTarget: '$\\max_{[0; 3]} y = 39$ tại $x = 3$.',
        steps: [
          {
            id: 'd2-p4-q2-s1',
            originalIndex: 1,
            roleDescription: 'Xét tính liên tục và tính đạo hàm của hàm số',
            content:
              'Hàm số $y = 2x^3 - 6x + 3$ liên tục trên đoạn $[0; 3]$. Đạo hàm: $y\' = 6x^2 - 6$.',
          },
          {
            id: 'd2-p4-q2-s2',
            originalIndex: 2,
            roleDescription: 'Tìm nghiệm của đạo hàm thuộc đoạn [0; 3]',
            content:
              'Cho $y\' = 0 \\Leftrightarrow 6x^2 - 6 = 0 \\Leftrightarrow x^2 = 1 \\Leftrightarrow \\left[\\begin{array}{l} x = 1 \\in [0; 3] \\\\ x = -1 \\notin [0; 3] \\end{array}\\right.$.',
          },
          {
            id: 'd2-p4-q2-s3',
            originalIndex: 3,
            roleDescription: 'Tính giá trị của hàm số tại x = 0, x = 1 và x = 3',
            content:
              'Tính giá trị của hàm số tại các điểm: $y(0) = 3$; $y(1) = 2(1)^3 - 6(1) + 3 = -1$; $y(3) = 2(3)^3 - 6(3) + 3 = 54 - 18 + 3 = 39$.',
          },
          {
            id: 'd2-p4-q2-s4',
            originalIndex: 4,
            roleDescription: 'So sánh các giá trị và kết luận GTLN',
            content:
              'So sánh các giá trị trên, ta có: $\\max_{[0; 3]} y = 39$ tại $x = 3$.',
          },
        ],
        pedagogicalTip:
          'Nghiệm $x = -1$ không thuộc đoạn $[0; 3]$ nên ta loại ngay và chỉ tính $y(0),\\ y(1),\\ y(3)$.',
        teacherAnalysis:
          'Các bước tìm GTLN trên đoạn đóng $[0; 3]$: Tính đạo hàm -> Giải $y\' = 0$ chọn nghiệm trong $[0; 3]$ -> Tính giá trị hàm số -> So sánh và kết luận.',
        points: 0.5,
      },
      {
        id: 'd2-p4-q3',
        part: 'part4',
        number: 3,
        topic: 'Phần IV - Câu 3: Bài toán thực tế tối ưu lợi nhuận sản xuất của doanh nghiệp',
        problemStatement:
          'Một doanh nghiệp dự định sản xuất $x$ sản phẩm ($0 \\le x \\le 1200$) thì doanh thu nhận được khi bán hết số sản phẩm đó là $F(x) = 2x^3 - 399x^2 + 1\\,315\\,000x + 1\\,800\\,000$ (đồng), trong khi chi phí sản xuất bình quân cho một sản phẩm là $G(x) = x + 8500 + \\frac{1\\,800\\,000}{x}$ (đồng). Doanh nghiệp cần sản xuất bao nhiêu sản phẩm để lợi nhuận thu được là lớn nhất?',
        conclusionTarget:
          'Lợi nhuận lớn nhất khi doanh nghiệp sản xuất số lượng sản phẩm tối đa trong khoảng cho phép, tức là $x = 1200$ sản phẩm.',
        steps: [
          {
            id: 'd2-p4-q3-s1',
            originalIndex: 1,
            roleDescription: 'Tính tổng chi phí sản xuất x sản phẩm C(x)',
            content:
              'Tổng chi phí sản xuất $x$ sản phẩm là: $C(x) = x \\cdot G(x) = x\\left(x + 8500 + \\frac{1\\,800\\,000}{x}\\right) = x^2 + 8500x + 1\\,800\\,000$ (đồng).',
          },
          {
            id: 'd2-p4-q3-s2',
            originalIndex: 2,
            roleDescription: 'Lập hàm lợi nhuận L(x) = F(x) - C(x)',
            content:
              'Lợi nhuận thu được khi bán hết $x$ sản phẩm là: $L(x) = F(x) - C(x) = (2x^3 - 399x^2 + 1\\,315\\,000x + 1\\,800\\,000) - (x^2 + 8500x + 1\\,800\\,000) = 2x^3 - 400x^2 + 1\\,306\\,500x$ với $x \\in [0; 1200]$.',
          },
          {
            id: 'd2-p4-q3-s3',
            originalIndex: 3,
            roleDescription: 'Tính đạo hàm L\'(x) và xét dấu trên khoảng (0; 1200)',
            content:
              'Xét hàm số $L(x)$ trên khoảng $(0; 1200)$: $L\'(x) = 6x^2 - 800x + 1\\,306\\,500$. Ta có $\\Delta\' = (-400)^2 - 6 \\cdot 1\\,306\\,500 = 160\\,000 - 7\\,839\\,000 < 0$.',
          },
          {
            id: 'd2-p4-q3-s4',
            originalIndex: 4,
            roleDescription: 'Kết luận tính đồng biến và số sản phẩm tối ưu',
            content:
              'Do $\\Delta\' < 0$ và hệ số $a = 6 > 0$ nên $L\'(x) > 0$ với mọi $x \\in \\mathbb{R}$, suy ra hàm số $L(x)$ luôn đồng biến trên đoạn $[0; 1200]$. Vì vậy, lợi nhuận lớn nhất khi doanh nghiệp sản xuất số lượng sản phẩm tối đa trong khoảng cho phép, tức là $x = 1200$ sản phẩm.',
          },
        ],
        pedagogicalTip:
          'Chú ý $G(x)$ là chi phí bình quân cho 1 sản phẩm, nên tổng chi phí sản xuất $x$ sản phẩm phải nhân thêm $x$: $C(x) = x \\cdot G(x)$.',
        teacherAnalysis:
          'Khi đạo hàm của hàm lợi nhuận $L\'(x) > 0$ với mọi $x \\in [0; 1200]$, hàm lợi nhuận đồng biến trên toàn đoạn nên đạt GTLN tại đầu mút phải $x = 1200$.',
        points: 0.5,
      },
    ],
  },
  {
    id: 'de-so-03',
    title: 'Đề ôn GK1 03',
    subtitle: 'Ôn 12 - Đề ôn GK1 03: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số (GV Nguyễn Ngọc Thanh)',
    grade: 12,
    durationMinutes: 90,
    totalPoints: 10,
    description:
      'Đề ôn tập Toán 12 - Đề ôn GK1 03 (GV Nguyễn Ngọc Thanh) gồm 22 câu hỏi chuẩn cấu trúc 4 phần: Phần I (12 câu trắc nghiệm nhiều lựa chọn từ Câu 1 đến Câu 12 - 3,0đ), Phần II (3 câu trắc nghiệm Đúng/Sai từ Câu 1 đến Câu 3 - 3,0đ), Phần III (4 câu trả lời ngắn từ Câu 1 đến Câu 4 - 2,0đ), Phần IV (3 câu tự luận từ Câu 1 đến Câu 3 - 2,0đ).',
    part1: [
      {
        id: 'd3-p1-q1',
        part: 'part1',
        number: 1,
        topic: 'Tính đơn điệu của hàm số qua bảng biến thiên',
        prompt:
          'Cho hàm số $f(x)$ có bảng biến thiên như sau. Hàm số đã cho nghịch biến trong khoảng nào dưới đây?',
        tikzType: 'd3_q1_bbt',
        options: [
          { key: 'A', content: '$(-1; +\\infty)$' },
          { key: 'B', content: '$(-\\infty; -1)$' },
          { key: 'C', content: '$(-\\infty; 2)$' },
          { key: 'D', content: '$(-1; 2)$' },
        ],
        correctAnswer: 'B',
        explanation:
          'Dựa vào bảng biến thiên, ta thấy trên các khoảng $(-\\infty; -1)$ và $(2; +\\infty)$, đạo hàm $f\'(x) < 0$ (mũi tên đi xuống).\nDo đó hàm số nghịch biến trên khoảng $(-\\infty; -1)$ và $(2; +\\infty)$. Đối chiếu với các phương án, chọn đáp án B.',
        pedagogicalTip:
          'Khi đọc khoảng nghịch biến trên bảng biến thiên, luôn nhìn trên dòng $x$ tương ứng với miền có dấu $f\'(x) < 0$.',
        points: 0.25,
      },
      {
        id: 'd3-p1-q2',
        part: 'part1',
        number: 2,
        topic: 'Tính đơn điệu của hàm số qua đồ thị',
        prompt:
          'Cho hàm số $y = f(x)$ có đồ thị như hình vẽ bên dưới. Hàm số đã cho đồng biến trong khoảng nào dưới đây?',
        tikzType: 'd3_q2_graph',
        options: [
          { key: 'A', content: '$(-2; 1)$' },
          { key: 'B', content: '$(-\\infty; -1)$' },
          { key: 'C', content: '$(-2; 0)$' },
          { key: 'D', content: '$(0; +\\infty)$' },
        ],
        correctAnswer: 'D',
        explanation:
          'Quan sát đồ thị hàm số $y = f(x)$ từ trái sang phải, đồ thị đi lên trên các khoảng $(-\\infty; -2)$ và $(0; +\\infty)$.\nDo đó hàm số đồng biến trên khoảng $(0; +\\infty)$. Chọn đáp án D.',
        pedagogicalTip:
          'Đồ thị đi lên ứng với hàm số đồng biến, nhưng khoảng đồng biến phải đọc theo hoành độ $x$ trên trục $Ox$.',
        points: 0.25,
      },
      {
        id: 'd3-p1-q3',
        part: 'part1',
        number: 3,
        topic: 'Số điểm cực trị của hàm số qua đồ thị',
        prompt:
          'Cho hàm số $y = f(x)$ có đồ thị như hình vẽ bên. Số điểm cực trị của hàm số đã cho là:',
        tikzType: 'd3_q3_graph',
        options: [
          { key: 'A', content: '$1$' },
          { key: 'B', content: '$2$' },
          { key: 'C', content: '$0$' },
          { key: 'D', content: '$3$' },
        ],
        correctAnswer: 'D',
        explanation:
          'Quan sát đồ thị hàm số trùng phương $y = f(x)$, ta thấy đồ thị có $2$ điểm cực đại tại $(-1; 2)$ và $(1; 2)$, cùng $1$ điểm cực tiểu tại $(0; 1)$.\nVậy hàm số đã cho có tất cả $3$ điểm cực trị. Chọn đáp án D.',
        pedagogicalTip:
          'Số điểm cực trị của hàm số đa thức bằng số lần đồ thị đổi chiều từ đi lên sang đi xuống hoặc ngược lại.',
        points: 0.25,
      },
      {
        id: 'd3-p1-q4',
        part: 'part1',
        number: 4,
        topic: 'Giá trị lớn nhất và giá trị nhỏ nhất trên đoạn qua bảng biến thiên',
        prompt:
          'Cho hàm số $y = f(x)$ liên tục và có bảng biến thiên trên đoạn $[-2; 3]$ như hình vẽ bên. Khẳng định nào sau đây là đúng?',
        tikzType: 'd3_q4_bbt',
        options: [
          { key: 'A', content: '$\\min\\limits_{[-2; 3]} f(x) = 1$' },
          { key: 'B', content: '$\\max\\limits_{[-2; 3]} f(x) = 3$' },
          { key: 'C', content: '$\\max\\limits_{[-2; 3]} f(x) = 4$' },
          { key: 'D', content: '$\\min\\limits_{[-2; 3]} f(x) = -1$' },
        ],
        correctAnswer: 'C',
        explanation:
          'Dựa vào bảng biến thiên trên đoạn $[-2; 3]$, các giá trị tại đầu mút và cực trị của hàm số là $f(-2) = -1,\\ f(-1) = 4,\\ f(1) = -2,\\ f(3) = 3$.\nGiá trị lớn nhất của hàm số trên đoạn $[-2; 3]$ là $\\max\\limits_{[-2; 3]} f(x) = f(-1) = 4$, và giá trị nhỏ nhất là $\\min\\limits_{[-2; 3]} f(x) = f(1) = -2$.\nVậy khẳng định đúng là $\\max\\limits_{[-2; 3]} f(x) = 4$. Chọn đáp án C.',
        pedagogicalTip:
          'Quan sát dòng biến thiên của $y$: vị trí cao nhất trên đoạn $[-2; 3]$ là $4$ (tại $x = -1$) và thấp nhất là $-2$ (tại $x = 1$).',
        points: 0.25,
      },
      {
        id: 'd3-p1-q5',
        part: 'part1',
        number: 5,
        topic: 'Xác định đường tiệm cận đứng và tiệm cận ngang từ đồ thị',
        prompt:
          'Cho hàm số $y = \\frac{ax + b}{cx + d}$ ($ad - bc \\neq 0;\\ c \\neq 0$) có đồ thị như hình vẽ bên dưới. Phương trình đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số lần lượt là:',
        tikzType: 'd3_q5_graph',
        options: [
          { key: 'A', content: '$x = 2$ và $y = -1$' },
          { key: 'B', content: '$x = 1$ và $y = 2$' },
          { key: 'C', content: '$x = -1$ và $y = 2$' },
          { key: 'D', content: '$x = -1$ và $y = 1$' },
        ],
        correctAnswer: 'C',
        explanation:
          'Quan sát hình vẽ:\n- Đường thẳng đứng nét đứt đi qua hoành độ $x = -1$ là tiệm cận đứng: $x = -1$.\n- Đường thẳng nằm ngang nét đứt đi qua tung độ $y = 2$ là tiệm cận ngang: $y = 2$.\nVậy tiệm cận đứng và tiệm cận ngang lần lượt là $x = -1$ và $y = 2$. Chọn đáp án C.',
        pedagogicalTip:
          'Tiệm cận đứng luôn có phương trình dạng $x = x_0$, tiệm cận ngang luôn có phương trình dạng $y = y_0$. Đọc kỹ thứ tự câu hỏi yêu cầu.',
        points: 0.25,
      },
      {
        id: 'd3-p1-q6',
        part: 'part1',
        number: 6,
        topic: 'Nhận dạng hàm số phân thức bậc nhất trên bậc nhất qua đồ thị',
        prompt:
          'Đường cong trong hình vẽ bên là đồ thị của hàm số nào dưới đây?',
        tikzType: 'd3_q6_graph',
        options: [
          { key: 'A', content: '$y = \\frac{x + 1}{x - 1}$' },
          { key: 'B', content: '$y = \\frac{2x - 1}{x - 1}$' },
          { key: 'C', content: '$y = \\frac{x - 2}{x + 1}$' },
          { key: 'D', content: '$y = \\frac{x + 2}{x - 1}$' },
        ],
        correctAnswer: 'D',
        explanation:
          'Quan sát đồ thị ta thấy:\n- Tiệm cận đứng là đường thẳng $x = 1$ (loại phương án C).\n- Tiệm cận ngang là đường thẳng $y = 1$ (loại phương án B vì có TCN $y = 2$).\n- Đồ thị đi qua điểm $(0; -2)$ và $(-2; 0)$. Thay $x = 0$ vào $y = \\frac{x + 2}{x - 1}$ được $y = -2$ (thỏa mãn, loại A vì tại $x = 0$ thì $y = -1$).\nChọn đáp án D.',
        pedagogicalTip:
          'Ba bước nhận diện nhanh đồ thị hàm nhất biến: (1) Tiệm cận đứng $x = -d/c$; (2) Tiệm cận ngang $y = a/c$; (3) Giao điểm với hai trục tọa độ.',
        points: 0.25,
      },
      {
        id: 'd3-p1-q7',
        part: 'part1',
        number: 7,
        topic: 'Nhận dạng hàm số bậc ba qua đồ thị',
        prompt:
          'Đường cong trong hình vẽ bên là đồ thị của hàm số nào dưới đây?',
        tikzType: 'd3_q7_graph',
        options: [
          { key: 'A', content: '$y = x^3 + 3x^2$' },
          { key: 'B', content: '$y = -x^3 - 3x$' },
          { key: 'C', content: '$y = -x^3 - 3x^2$' },
          { key: 'D', content: '$y = -x^3 + 3x^2$' },
        ],
        correctAnswer: 'C',
        explanation:
          'Quan sát đồ thị hàm số bậc ba:\n- Nhánh ngoài cùng bên phải đi xuống ($\\lim_{x \\to +\\infty} y = -\\infty$) nên hệ số $a < 0$ (loại A).\n- Đồ thị đạt cực tiểu tại $(-2; -4)$ và đạt cực đại tại $(0; 0)$.\nXét hàm số $y = -x^3 - 3x^2$: $y\' = -3x^2 - 6x = 0 \\Leftrightarrow x = 0$ hoặc $x = -2$. Tại $x = -2$, $y(-2) = -(-8) - 3(4) = -4$ (khớp hoàn toàn). Chọn đáp án C.',
        pedagogicalTip:
          'Kiểm tra nhanh điểm cực trị $(-2; -4)$ bằng cách thay $x = -2$ vào các hàm số có hệ số $a < 0$.',
        points: 0.25,
      },
      {
        id: 'd3-p1-q8',
        part: 'part1',
        number: 8,
        topic: 'Giao điểm của đồ thị hàm số với trục tung',
        prompt:
          'Đồ thị hàm số $y = \\frac{3x - 6}{x + 2}$ cắt trục tung tại điểm có tung độ bằng bao nhiêu?',
        options: [
          { key: 'A', content: '$-2$' },
          { key: 'B', content: '$3$' },
          { key: 'C', content: '$2$' },
          { key: 'D', content: '$-3$' },
        ],
        correctAnswer: 'D',
        explanation:
          'Giao điểm của đồ thị hàm số với trục tung $Oy$ có hoành độ $x = 0$.\nThay $x = 0$ vào công thức hàm số ta được:\n$$y(0) = \\frac{3 \\cdot 0 - 6}{0 + 2} = \\frac{-6}{2} = -3.$$\nVậy tung độ giao điểm bằng $-3$. Chọn đáp án D.',
        pedagogicalTip:
          'Cắt trục tung $Oy \\Rightarrow$ cho $x = 0$ tìm $y$; cắt trục hoành $Ox \\Rightarrow$ cho $y = 0$ tìm $x$.',
        points: 0.25,
      },
      {
        id: 'd3-p1-q9',
        part: 'part1',
        number: 9,
        topic: 'Tìm khoảng đồng biến của hàm phân thức bậc hai trên bậc nhất',
        prompt:
          'Cho hàm số $y = \\frac{x^2 + 4}{x}$. Hàm số đã cho đồng biến trong khoảng nào dưới đây?',
        options: [
          { key: 'A', content: '$(2; +\\infty)$' },
          { key: 'B', content: '$(0; 2)$' },
          { key: 'C', content: '$(-\\infty; 0)$' },
          { key: 'D', content: '$(-2; 2)$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Tập xác định: $D = \\mathbb{R} \\setminus \\{0\\}$.\nTa viết lại $y = x + \\frac{4}{x}$, suy ra đạo hàm:\n$$y\' = 1 - \\frac{4}{x^2} = \\frac{x^2 - 4}{x^2}.$$\nCho $y\' > 0 \\Leftrightarrow x^2 - 4 > 0 \\Leftrightarrow x \\in (-\\infty; -2) \\cup (2; +\\infty)$.\nVậy hàm số đồng biến trên các khoảng $(-\\infty; -2)$ và $(2; +\\infty)$. Chọn đáp án A.',
        pedagogicalTip:
          'Chia tử cho mẫu $y = x + \\frac{4}{x}$ giúp tính đạo hàm $y\' = 1 - \\frac{4}{x^2}$ cực kỳ nhanh chóng và tránh nhầm lẫn.',
        points: 0.25,
      },
      {
        id: 'd3-p1-q10',
        part: 'part1',
        number: 10,
        topic: 'Tìm số điểm cực trị qua bảng xét dấu đạo hàm có điểm không xác định',
        prompt:
          'Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ và có bảng xét dấu của đạo hàm như hình vẽ. Số điểm cực trị của hàm số đã cho là bao nhiêu?',
        tikzType: 'd3_q10_bxd',
        options: [
          { key: 'A', content: '$1$' },
          { key: 'B', content: '$2$' },
          { key: 'C', content: '$0$' },
          { key: 'D', content: '$3$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Dựa vào bảng xét dấu của $f\'(x)$:\n- Qua $x = -2$, đạo hàm $f\'(x)$ giữ nguyên dấu âm ($-$ sang $-$) nên $x = -2$ không phải là điểm cực trị.\n- Qua $x = 1$, đạo hàm $f\'(x)$ đổi dấu từ âm ($-$) sang dương ($+$) và hàm số liên tục trên $\\mathbb{R}$ nên $x = 1$ là điểm cực tiểu.\nVậy hàm số có duy nhất $1$ điểm cực trị. Chọn đáp án A.',
        pedagogicalTip:
          'Điểm cực trị của hàm số liên tục là điểm mà đạo hàm $f\'(x)$ đổi dấu khi đi qua nó (dù tại đó $f\'(x) = 0$ hay không xác định).',
        points: 0.25,
      },
      {
        id: 'd3-p1-q11',
        part: 'part1',
        number: 11,
        topic: 'Số đường tiệm cận ngang từ bảng biến thiên',
        prompt:
          'Cho hàm số $y = f(x)$ có bảng biến thiên như sau. Tổng số đường tiệm cận ngang của đồ thị hàm số đã cho là:',
        tikzType: 'd3_q11_bbt',
        options: [
          { key: 'A', content: '$0$' },
          { key: 'B', content: '$2$' },
          { key: 'C', content: '$3$' },
          { key: 'D', content: '$1$' },
        ],
        correctAnswer: 'B',
        explanation:
          'Đọc kỹ câu hỏi: Đề bài chỉ hỏi số đường tiệm cận ngang.\nDựa vào bảng biến thiên:\n- $\\lim_{x \\to -\\infty} f(x) = 3 \\Rightarrow y = 3$ là một đường tiệm cận ngang.\n- $\\lim_{x \\to +\\infty} f(x) = 1 \\Rightarrow y = 1$ là một đường tiệm cận ngang.\nVậy đồ thị hàm số có tất cả $2$ đường tiệm cận ngang. Chọn đáp án B.',
        pedagogicalTip:
          'Chú ý đọc kỹ đề hỏi "tổng số đường tiệm cận ngang" hay "tổng số đường tiệm cận đứng và ngang" để tránh cộng nhầm TCĐ $x = 0$.',
        points: 0.25,
      },
      {
        id: 'd3-p1-q12',
        part: 'part1',
        number: 12,
        topic: 'Nhận dạng đồ thị của hàm số phân thức bậc nhất trên bậc nhất',
        prompt:
          'Cho hàm số $y = \\frac{x + 1}{x - 2}$. Đồ thị của hàm số đã cho có đặc điểm nào dưới đây?',
        options: [
          {
            key: 'A',
            content:
              'Hình 4: Đồ thị nhận $x = 2$ làm tiệm cận đứng, $y = -1$ làm tiệm cận ngang.',
          },
          {
            key: 'B',
            content:
              'Hình 2: Đồ thị nhận $x = 1$ làm tiệm cận đứng, $y = 2$ làm tiệm cận ngang.',
          },
          {
            key: 'C',
            content:
              'Hình 1: Đồ thị hàm phân thức nhận $x = 2$ làm tiệm cận đứng, $y = 1$ làm tiệm cận ngang, cắt trục tung tại $(0; -0{,}5)$ và cắt trục hoành tại $(-1; 0)$.',
          },
          {
            key: 'D',
            content:
              'Hình 3: Đồ thị nhận $x = -2$ làm tiệm cận đứng, $y = 1$ làm tiệm cận ngang.',
          },
        ],
        correctAnswer: 'C',
        explanation:
          'Xét hàm số $y = \\frac{x + 1}{x - 2}$:\n- Tiệm cận đứng là đường thẳng $x = 2$; tiệm cận ngang là đường thẳng $y = 1$.\n- Đạo hàm $y\' = \\frac{-3}{(x - 2)^2} < 0,\\ \\forall x \\neq 2$ nên hàm số nghịch biến trên từng khoảng xác định.\n- Đồ thị cắt trục tung tại $(0; -\\frac{1}{2})$ và cắt trục hoành tại $(-1; 0)$ (ứng với Hình 1). Chọn đáp án C.',
        pedagogicalTip:
          'Hàm số $y = \\frac{x + 1}{x - 2}$ có mẫu bằng $0$ tại $x = 2$ (TCĐ $x = 2$) và tỉ số hệ số của $x$ bằng $1$ (TCN $y = 1$).',
        points: 0.25,
      },
    ],
    part2: [
      {
        id: 'd3-p2-q1',
        part: 'part2',
        number: 1,
        topic: 'Phần II - Câu 1: Khảo sát hàm số qua bảng biến thiên',
        prompt:
          'Cho hàm số $y = f(x)$ xác định trên $\\mathbb{R} \\setminus \\{1\\}$ và có bảng biến thiên như hình vẽ bên dưới:',
        tikzType: 'd3_p2_q1_bbt',
        statements: [
          {
            id: 'a',
            label: 'a',
            statement: 'Hàm số nghịch biến trên khoảng $(-1; 3)$.',
            isCorrect: false,
            explanation:
              'Sai. Trên khoảng $(-1; 3)$, hàm số bị gián đoạn (không xác định) tại $x = 1$. Ta chỉ có thể kết luận hàm số nghịch biến trên từng khoảng $(-1; 1)$ và $(1; 3)$, không nghịch biến trên cả khoảng $(-1; 3)$.',
          },
          {
            id: 'b',
            label: 'b',
            statement: 'Giá trị cực đại của hàm số bằng $-3$.',
            isCorrect: true,
            explanation:
              'Đúng. Tại $x = -1$, đạo hàm $f\'(x)$ đổi dấu từ $+$ sang $-$, hàm số đạt cực đại tại $x = -1$ và giá trị cực đại là $y_{\\text{CĐ}} = f(-1) = -3$.',
          },
          {
            id: 'c',
            label: 'c',
            statement: 'Đường tiệm cận đứng của đồ thị hàm số có phương trình $x = 1$.',
            isCorrect: true,
            explanation:
              'Đúng. Từ bảng biến thiên ta có $\\lim_{x \\to 1^-} f(x) = -\\infty$ và $\\lim_{x \\to 1^+} f(x) = +\\infty$, suy ra đường thẳng $x = 1$ là đường tiệm cận đứng của đồ thị hàm số.',
          },
          {
            id: 'd',
            label: 'd',
            statement: 'Giá trị lớn nhất của hàm số trên đoạn $[-3; 0]$ bằng $-3$.',
            isCorrect: true,
            explanation:
              'Đúng. Đoạn $[-3; 0]$ nằm hoàn toàn trong nhánh bên trái $( -\\infty; 1 )$. Trên đoạn $[-3; 0]$, hàm số đồng biến trên $[-3; -1]$, đạt cực đại tại $x = -1$ với $f(-1) = -3$, sau đó nghịch biến trên $[-1; 0]$. Do đó $\\max_{[-3; 0]} f(x) = f(-1) = -3$.',
          },
        ],
        pedagogicalTip:
          'Luôn kiểm tra xem đoạn $[a; b]$ có chứa điểm không xác định $x = 1$ hay không. Ở câu d, $[-3; 0] \\subset (-\\infty; 1)$ nên hàm số liên tục trên $[-3; 0]$ và đạt GTLN tại đỉnh cực đại $x = -1$.',
      },
      {
        id: 'd3-p2-q2',
        part: 'part2',
        number: 2,
        topic: 'Phần II - Câu 2: Phân tích đồ thị của hàm số bậc ba',
        prompt:
          'Cho hàm số $y = f(x) = ax^3 + bx^2 + cx + d$ ($a \\neq 0$) có đồ thị như hình vẽ bên dưới:',
        tikzType: 'd3_p2_q2_graph',
        statements: [
          {
            id: 'a',
            label: 'a',
            statement: '$a < 0$.',
            isCorrect: false,
            explanation:
              'Sai. Nhánh ngoài cùng bên phải của đồ thị đi lên ($\\lim_{x \\to +\\infty} f(x) = +\\infty$) nên hệ số $a > 0$.',
          },
          {
            id: 'b',
            label: 'b',
            statement: 'Hàm số nghịch biến trên khoảng $(0; 2)$.',
            isCorrect: true,
            explanation:
              'Đúng. Quan sát đồ thị trên khoảng $(0; 2)$, đồ thị đi xuống từ điểm $(0; 0)$ đến điểm $(2; -4)$ nên hàm số nghịch biến trên khoảng $(0; 2)$.',
          },
          {
            id: 'c',
            label: 'c',
            statement: 'Điểm cực đại của đồ thị hàm số là $(2; -4)$.',
            isCorrect: false,
            explanation:
              'Sai. Điểm $(2; -4)$ là điểm cực tiểu của đồ thị hàm số, còn điểm cực đại của đồ thị hàm số là $(0; 0)$.',
          },
          {
            id: 'd',
            label: 'd',
            statement: 'Tọa độ tâm đối xứng của đồ thị hàm số là $I(1; -2)$.',
            isCorrect: true,
            explanation:
              'Đúng. Tâm đối xứng của đồ thị hàm số bậc ba là trung điểm của đoạn thẳng nối hai điểm cực trị $A(0; 0)$ và $B(2; -4)$, có tọa độ là $I\\left(\\frac{0 + 2}{2}; \\frac{0 + (-4)}{2}\\right) = I(1; -2)$.',
          },
        ],
        pedagogicalTip:
          'Tâm đối xứng (điểm uốn) của đồ thị hàm bậc ba luôn là trung điểm của đoạn thẳng nối điểm cực đại và điểm cực tiểu.',
      },
      {
        id: 'd3-p2-q3',
        part: 'part2',
        number: 3,
        topic: 'Phần II - Câu 3: Bài toán thực tế mô hình hóa lợi nhuận sản phẩm',
        prompt:
          'Một doanh nghiệp theo dõi và nhận thấy rằng lợi nhuận $P(t)$ (tính bằng triệu đồng) của một dòng sản phẩm mới sau $t$ tháng kể từ khi ra mắt được mô hình hóa bởi hàm số $P(t) = -t^3 + 9t^2 + 48t$ với $t \\in [0; 12]$.',
        statements: [
          {
            id: 'a',
            label: 'a',
            statement:
              'Lợi nhuận của sản phẩm tại thời điểm kết thúc tháng thứ nhất ($t = 1$) là $56$ triệu đồng.',
            isCorrect: true,
            explanation:
              'Đúng. Thay $t = 1$ vào hàm lợi nhuận ta được: $P(1) = -1^3 + 9 \\cdot 1^2 + 48 \\cdot 1 = -1 + 9 + 48 = 56$ (triệu đồng).',
          },
          {
            id: 'b',
            label: 'b',
            statement:
              'Tốc độ thay đổi lợi nhuận tại thời điểm $t$ là hàm số $P\'(t) = -3t^2 + 18t + 48$.',
            isCorrect: true,
            explanation:
              'Đúng. Tốc độ thay đổi lợi nhuận tại thời điểm $t$ là đạo hàm $P\'(t) = (-t^3 + 9t^2 + 48t)\' = -3t^2 + 18t + 48$.',
          },
          {
            id: 'c',
            label: 'c',
            statement: 'Lợi nhuận của dòng sản phẩm tăng liên tục trong suốt $12$ tháng.',
            isCorrect: false,
            explanation:
              'Sai. Giải phương trình $P\'(t) = 0 \\Leftrightarrow -3t^2 + 18t + 48 = 0 \\Leftrightarrow t^2 - 6t - 16 = 0 \\Leftrightarrow t = 8$ (vì $t \\in [0; 12]$, loại $t = -2$). Trên khoảng $(8; 12)$, $P\'(t) < 0$ nên lợi nhuận giảm từ tháng thứ $8$ đến tháng thứ $12$.',
          },
          {
            id: 'd',
            label: 'd',
            statement: 'Lợi nhuận của dòng sản phẩm đạt giá trị lớn nhất vào tháng thứ $8$.',
            isCorrect: true,
            explanation:
              'Đúng. Hàm lợi nhuận $P(t)$ đồng biến trên $[0; 8]$ và nghịch biến trên $[8; 12]$, do đó đạt giá trị lớn nhất trên đoạn $[0; 12]$ tại $t = 8$ (tháng thứ $8$) với $P(8) = 448$ triệu đồng.',
          },
        ],
        pedagogicalTip:
          'Giải $P\'(t) = -3(t - 8)(t + 2) = 0$ trên $[0; 12]$ giúp xác định ngay lợi nhuận tăng trên $(0; 8)$, giảm trên $(8; 12)$ và đạt cực đại tại $t = 8$.',
      },
    ],
    part3: [
      {
        id: 'd3-p3-q1',
        part: 'part3',
        number: 1,
        topic: 'Phần III - Câu 1: Số điểm cực trị từ biểu thức đạo hàm tích các lũy thừa',
        prompt:
          'Cho hàm số $y = f(x)$ liên tục và có đạo hàm trên $\\mathbb{R}$, biết đạo hàm có công thức $f\'(x) = (x + 2)^2(x - 1)^3(x - 4)$. Số điểm cực trị của hàm số đã cho là bao nhiêu?',
        acceptableAnswers: ['2'],
        explanation:
          'Phương trình $f\'(x) = 0 \\Leftrightarrow (x + 2)^2(x - 1)^3(x - 4) = 0$ có $3$ nghiệm phân biệt là $x = -2,\\ x = 1,\\ x = 4$.\n- Nghiệm $x = -2$ là nghiệm bội chẵn (mũ $2$) nên đạo hàm $f\'(x)$ không đổi dấu khi đi qua $x = -2$.\n- Nghiệm $x = 1$ (bội lẻ mũ $3$) và $x = 4$ (nghiệm đơn mũ $1$) là các nghiệm bội lẻ nên $f\'(x)$ đổi dấu khi đi qua hai điểm này.\nVậy hàm số đã cho có $2$ điểm cực trị.',
        pedagogicalTip:
          'Số điểm cực trị của hàm số đa thức bằng số nghiệm bội lẻ của phương trình $f\'(x) = 0$.',
        points: 0.5,
      },
      {
        id: 'd3-p3-q2',
        part: 'part3',
        number: 2,
        topic: 'Phần III - Câu 2: Bài toán thực tế nuôi cấy vi khuẩn',
        prompt:
          'Một mẻ nuôi cấy vi khuẩn được xử lý bằng một chất dinh dưỡng kích thích sinh trưởng. Sau $t$ phút ($t \\ge 0$), số lượng vi khuẩn trong mẻ được xác định theo mô hình: $N(t) = 2000 + 45t^2 - t^3$. Hỏi sau bao nhiêu phút kể từ khi bắt đầu xử lý thì số lượng vi khuẩn ngừng tăng và bắt đầu giảm?',
        acceptableAnswers: ['30'],
        explanation:
          'Xét hàm số $N(t) = 2000 + 45t^2 - t^3$ với $t \\ge 0$.\nĐạo hàm: $N\'(t) = 90t - 3t^2 = 3t(30 - t)$.\nCho $N\'(t) = 0 \\Leftrightarrow t = 0$ hoặc $t = 30$.\n- Với $t \\in (0; 30)$, ta có $N\'(t) > 0$ nên số lượng vi khuẩn đang tăng.\n- Với $t > 30$, ta có $N\'(t) < 0$ nên số lượng vi khuẩn bắt đầu giảm.\nVậy sau $30$ phút kể từ khi bắt đầu xử lý thì số lượng vi khuẩn ngừng tăng và bắt đầu giảm.',
        pedagogicalTip:
          'Thời điểm đại lượng ngừng tăng và bắt đầu giảm chính là điểm cực đại của hàm số $N(t)$.',
        points: 0.5,
      },
      {
        id: 'd3-p3-q3',
        part: 'part3',
        number: 3,
        topic: 'Phần III - Câu 3: Tìm đường tiệm cận xiên của đồ thị hàm số',
        prompt:
          'Cho hàm số $y = f(x) = \\frac{x^2 - 4x + 2}{x - 2}$. Đồ thị hàm số có tiệm cận xiên là đường thẳng $y = ax + b$. Tính giá trị của biểu thức $P = a + 3b$.',
        acceptableAnswers: ['-5'],
        explanation:
          'Chia đa thức tử số cho mẫu số, ta có:\n$$y = \\frac{x^2 - 4x + 2}{x - 2} = \\frac{x(x - 2) - 2(x - 2) - 2}{x - 2} = x - 2 - \\frac{2}{x - 2}.$$\nVì $\\lim_{x \\to \\pm\\infty} [y - (x - 2)] = \\lim_{x \\to \\pm\\infty} \\frac{-2}{x - 2} = 0$, nên đường tiệm cận xiên của đồ thị hàm số là đường thẳng $y = x - 2$.\nSuy ra $a = 1$ và $b = -2$.\nVậy giá trị của biểu thức là $P = a + 3b = 1 + 3(-2) = -5$.',
        pedagogicalTip:
          'Tách nhanh $x^2 - 4x + 2 = (x - 2)^2 - 2$, chia cho $x - 2$ được ngay thương là $x - 2$.',
        points: 0.5,
      },
      {
        id: 'd3-p3-q4',
        part: 'part3',
        number: 4,
        topic: 'Phần III - Câu 4: Ứng dụng đạo hàm trong bài toán tốc độ tăng dân số',
        prompt:
          'Dân số của một thành phố vệ tinh sau $t$ năm kể từ đầu năm $2020$ được mô hình hóa bởi công thức: $f(t) = \\frac{40t + 20}{t + 1}$ ($t \\ge 0$), trong đó $f(t)$ tính bằng nghìn người. Đạo hàm $f\'(t)$ biểu thị tốc độ tăng dân số của thành phố (đơn vị: nghìn người/năm). Hỏi vào năm nào thì tốc độ tăng dân số của thành phố đạt mức $0{,}2$ nghìn người/năm?',
        acceptableAnswers: ['2029'],
        explanation:
          'Tốc độ tăng dân số của thành phố tại thời điểm $t$ là đạo hàm $f\'(t)$:\n$$f\'(t) = \\left(\\frac{40t + 20}{t + 1}\\right)\' = \\frac{40 \\cdot 1 - 20 \\cdot 1}{(t + 1)^2} = \\frac{20}{(t + 1)^2}.$$\nTheo đề bài, tốc độ tăng dân số đạt mức $0{,}2$ nghìn người/năm nên:\n$$\\frac{20}{(t + 1)^2} = 0{,}2 \\Leftrightarrow (t + 1)^2 = \\frac{20}{0{,}2} = 100.$$\nVì $t \\ge 0$ nên $t + 1 = 10 \\Leftrightarrow t = 9$ (năm).\nVậy thời điểm cần tìm là năm $2020 + 9 = 2029$.',
        pedagogicalTip:
          'Sau khi tìm được $t = 9$ năm, nhớ cộng vào mốc năm ban đầu $2020$ để ra năm $2029$.',
        points: 0.5,
      },
    ],
    part4: [
      {
        id: 'd3-p4-q1',
        part: 'part4',
        number: 1,
        topic: 'Phần IV - Câu 1: Xét tính đơn điệu và tìm cực trị của hàm số bậc ba',
        problemStatement:
          'Cho hàm số $y = \\frac{1}{3}x^3 - 2x^2 + 3x + 1$. Xét tính đơn điệu và tìm các điểm cực trị của hàm số đã cho.',
        conclusionTarget:
          'Hàm số đồng biến trên $(-\\infty; 1)$ và $(3; +\\infty)$, nghịch biến trên $(1; 3)$; đạt cực đại tại $x = 1\\ \\left(y_{\\text{CĐ}} = \\frac{7}{3}\\right)$ và đạt cực tiểu tại $x = 3\\ (y_{\\text{CT}} = 1)$.',
        tikzType: 'd3_p4_q1_bbt',
        steps: [
          {
            id: 'd3-p4-q1-s1',
            originalIndex: 1,
            roleDescription: 'Tìm tập xác định và tính đạo hàm của hàm số',
            content:
              'Tập xác định: $D = \\mathbb{R}$. Đạo hàm: $y\' = x^2 - 4x + 3$.',
          },
          {
            id: 'd3-p4-q1-s2',
            originalIndex: 2,
            roleDescription: 'Giải phương trình y\' = 0 và lập bảng biến thiên',
            content:
              'Cho $y\' = 0 \\Leftrightarrow x^2 - 4x + 3 = 0 \\Leftrightarrow \\left[\\begin{array}{l} x = 1 \\\\ x = 3 \\end{array}\\right.$. Lập bảng biến thiên với $y(1) = \\frac{7}{3}$ và $y(3) = 1$.',
          },
          {
            id: 'd3-p4-q1-s3',
            originalIndex: 3,
            roleDescription: 'Kết luận tính đơn điệu của hàm số',
            content:
              'Kết luận đơn điệu: Hàm số đồng biến trên các khoảng $(-\\infty; 1)$ và $(3; +\\infty)$; hàm số nghịch biến trên khoảng $(1; 3)$.',
          },
          {
            id: 'd3-p4-q1-s4',
            originalIndex: 4,
            roleDescription: 'Kết luận các điểm cực trị của hàm số',
            content:
              'Kết luận cực trị: Hàm số đạt cực đại tại $x = 1$, giá trị cực đại $y_{\\text{CĐ}} = y(1) = \\frac{7}{3}$; hàm số đạt cực tiểu tại $x = 3$, giá trị cực tiểu $y_{\\text{CT}} = y(3) = 1$.',
          },
        ],
        pedagogicalTip:
          'Tam thức bậc hai $y\' = x^2 - 4x + 3$ có $a = 1 > 0$ nên mang dấu dương ngoài khoảng hai nghiệm $(1; 3)$ và mang dấu âm trong khoảng $(1; 3)$.',
        teacherAnalysis:
          'Bài toán khảo sát sự biến thiên và tìm cực trị chuẩn mực của hàm số bậc ba có hệ số $a = \\frac{1}{3} > 0$.',
        points: 1.0,
      },
      {
        id: 'd3-p4-q2',
        part: 'part4',
        number: 2,
        topic: 'Phần IV - Câu 2: Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm phân thức trên đoạn',
        problemStatement:
          'Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số $y = \\frac{-3x + 2}{x + 1}$ trên đoạn $[0; 4]$.',
        conclusionTarget:
          '$\\max_{[0; 4]} y = 2$ tại $x = 0$ và $\\min_{[0; 4]} y = -2$ tại $x = 4$.',
        steps: [
          {
            id: 'd3-p4-q2-s1',
            originalIndex: 1,
            roleDescription: 'Xét tính liên tục của hàm số trên đoạn [0; 4]',
            content:
              'Hàm số xác định và liên tục trên đoạn $[0; 4]$ (vì $x = -1 \\notin [0; 4]$).',
          },
          {
            id: 'd3-p4-q2-s2',
            originalIndex: 2,
            roleDescription: 'Tính đạo hàm và xét tính đơn điệu trên đoạn [0; 4]',
            content:
              'Ta có đạo hàm: $y\' = \\frac{-3 \\cdot 1 - 1 \\cdot 2}{(x + 1)^2} = \\frac{-5}{(x + 1)^2} < 0,\\ \\forall x \\in [0; 4]$. Suy ra hàm số luôn nghịch biến trên đoạn $[0; 4]$.',
          },
          {
            id: 'd3-p4-q2-s3',
            originalIndex: 3,
            roleDescription: 'Tính giá trị của hàm số tại hai đầu mút x = 0 và x = 4',
            content:
              'Tính giá trị hàm số tại hai đầu mút: $y(0) = \\frac{-3(0) + 2}{0 + 1} = 2$ và $y(4) = \\frac{-3(4) + 2}{4 + 1} = \\frac{-10}{5} = -2$.',
          },
          {
            id: 'd3-p4-q2-s4',
            originalIndex: 4,
            roleDescription: 'Kết luận giá trị lớn nhất và giá trị nhỏ nhất',
            content:
              'Vậy $\\max_{[0; 4]} y = y(0) = 2$ (tại $x = 0$) và $\\min_{[0; 4]} y = y(4) = -2$ (tại $x = 4$).',
          },
        ],
        pedagogicalTip:
          'Hàm phân thức bậc nhất trên bậc nhất liên tục trên $[a; b]$ luôn đạt GTLN và GTNN tại hai đầu mút $a$ và $b$.',
        teacherAnalysis:
          'Chứng minh hàm số liên tục và đơn điệu trên $[0; 4]$ giúp suy ra ngay GTLN và GTNN tại hai đầu mút.',
        points: 0.5,
      },
      {
        id: 'd3-p4-q3',
        part: 'part4',
        number: 3,
        topic: 'Phần IV - Câu 3: Bài toán thực tế tối ưu chi phí trung bình sản xuất',
        problemStatement:
          'Một phân xưởng sản xuất thiết bị gia dụng xác định được hàm tổng chi phí để sản xuất $x$ sản phẩm ($x > 0$) trong một tuần là: $C(x) = x^2 + 50x + 14400$ (nghìn đồng). Chi phí trung bình để sản xuất một sản phẩm được cho bởi công thức $\\overline{C}(x) = \\frac{C(x)}{x}$. Hỏi phân xưởng cần sản xuất bao nhiêu sản phẩm mỗi tuần để chi phí trung bình cho mỗi sản phẩm là thấp nhất?',
        conclusionTarget:
          'Phân xưởng cần sản xuất $120$ sản phẩm mỗi tuần để chi phí trung bình thấp nhất (bằng $290$ nghìn đồng/sản phẩm).',
        tikzType: 'd3_p4_q3_bbt',
        steps: [
          {
            id: 'd3-p4-q3-s1',
            originalIndex: 1,
            roleDescription: 'Thiết lập hàm chi phí trung bình C_tb(x) với x > 0',
            content:
              'Hàm chi phí trung bình để sản xuất một sản phẩm là: $\\overline{C}(x) = \\frac{x^2 + 50x + 14400}{x} = x + 50 + \\frac{14400}{x}$ với $x > 0$.',
          },
          {
            id: 'd3-p4-q3-s2',
            originalIndex: 2,
            roleDescription: 'Tính đạo hàm và giải phương trình đạo hàm bằng 0 trên (0; +∞)',
            content:
              'Ta có đạo hàm: $\\overline{C}\'(x) = 1 - \\frac{14400}{x^2} = \\frac{x^2 - 14400}{x^2}$. Cho $\\overline{C}\'(x) = 0 \\Leftrightarrow x^2 = 14400 \\Leftrightarrow x = 120$ (vì $x > 0$, loại $x = -120$).',
          },
          {
            id: 'd3-p4-q3-s3',
            originalIndex: 3,
            roleDescription: 'Lập bảng biến thiên của hàm chi phí trung bình trên (0; +∞)',
            content:
              'Lập bảng biến thiên trên $(0; +\\infty)$: $\\overline{C}\'(x) < 0$ trên $(0; 120)$ và $\\overline{C}\'(x) > 0$ trên $(120; +\\infty)$, hàm số đạt cực tiểu (cũng là GTNN) tại $x = 120$ với $\\overline{C}(120) = 290$ (nghìn đồng).',
          },
          {
            id: 'd3-p4-q3-s4',
            originalIndex: 4,
            roleDescription: 'Kết luận số lượng sản phẩm cần sản xuất mỗi tuần',
            content:
              'Vậy phân xưởng cần sản xuất $120$ sản phẩm mỗi tuần để chi phí trung bình cho mỗi sản phẩm là thấp nhất.',
          },
        ],
        pedagogicalTip:
          'Có thể kiểm tra nhanh bằng bất đẳng thức Cauchy cho $x > 0$: $x + \\frac{14400}{x} \\ge 2\\sqrt{x \\cdot \\frac{14400}{x}} = 240$, dấu bằng xảy ra khi $x = 120$.',
        teacherAnalysis:
          'Bài toán tối ưu chi phí bình quân kinh điển: lập hàm $\\overline{C}(x) = \\frac{C(x)}{x}$, khảo sát trên $(0; +\\infty)$ để tìm điểm cực tiểu.',
        points: 0.5,
      },
    ],
  },
  {
    id: 'de-so-04',
    title: 'Đề ôn GK1 04',
    subtitle: 'Ôn 12 - Đề ôn GK1 04: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số (GV Nguyễn Ngọc Thanh)',
    grade: 12,
    durationMinutes: 90,
    totalPoints: 10,
    description:
      'Đề ôn tập Toán 12 - Đề ôn GK1 04 (GV Nguyễn Ngọc Thanh) gồm 22 câu hỏi chuẩn cấu trúc 4 phần: Phần I (12 câu trắc nghiệm nhiều lựa chọn từ Câu 1 đến Câu 12 - 3,0đ), Phần II (3 câu trắc nghiệm Đúng/Sai từ Câu 1 đến Câu 3 - 3,0đ), Phần III (4 câu trả lời ngắn từ Câu 1 đến Câu 4 - 2,0đ), Phần IV (3 câu tự luận từ Câu 1 đến Câu 3 - 2,0đ).',
    part1: [
      {
        id: 'd4-p1-q1',
        part: 'part1',
        number: 1,
        topic: 'Tính đơn điệu của hàm số qua bảng biến thiên',
        prompt:
          'Cho hàm số $f(x)$ có bảng biến thiên như sau. Hàm số đã cho nghịch biến trên khoảng nào dưới đây?',
        tikzType: 'd4_q1_bbt',
        options: [
          { key: 'A', content: '$(-\\infty; 1)$' },
          { key: 'B', content: '$(-\\infty; -2)$' },
          { key: 'C', content: '$(-2; 1)$' },
          { key: 'D', content: '$(-2; +\\infty)$' },
        ],
        correctAnswer: 'B',
        explanation:
          'Dựa vào bảng biến thiên, ta thấy $f\'(x) < 0$ trên các khoảng $(-\\infty; -2)$ và $(1; +\\infty)$. Do đó, hàm số đã cho nghịch biến trên các khoảng $(-\\infty; -2)$ và $(1; +\\infty)$. Chọn đáp án B.',
        pedagogicalTip:
          'Quan sát dấu của đạo hàm $f\'(x) < 0$ và chiều mũi tên đi xuống trên bảng biến thiên để xác định khoảng nghịch biến.',
        points: 0.25,
      },
      {
        id: 'd4-p1-q2',
        part: 'part1',
        number: 2,
        topic: 'Tính đơn điệu của hàm số qua đồ thị',
        prompt:
          'Cho hàm số $y = f(x)$ có đồ thị như hình vẽ bên. Hàm số đã cho đồng biến trên khoảng nào dưới đây?',
        tikzType: 'd4_q2_graph',
        options: [
          { key: 'A', content: '$(-2; 0)$' },
          { key: 'B', content: '$(0; +\\infty)$' },
          { key: 'C', content: '$(-2; 1)$' },
          { key: 'D', content: '$(-\\infty; 0)$' },
        ],
        correctAnswer: 'B',
        explanation:
          'Dựa vào đồ thị, hàm số đi lên từ trái sang phải trên các khoảng $(-\\infty; -2)$ và $(0; +\\infty)$. Do đó, hàm số đồng biến trên các khoảng $(-\\infty; -2)$ và $(0; +\\infty)$. Chọn đáp án B.',
        pedagogicalTip:
          'Khoảng đồng biến của hàm số được đọc trên trục hoành $Ox$ ứng với phần đồ thị đi lên từ trái sang phải.',
        points: 0.25,
      },
      {
        id: 'd4-p1-q3',
        part: 'part1',
        number: 3,
        topic: 'Số điểm cực trị của hàm số qua đồ thị',
        prompt:
          'Cho hàm số $y = f(x)$ có đồ thị như hình vẽ bên. Số điểm cực trị của hàm số đã cho là:',
        tikzType: 'd4_q3_graph',
        options: [
          { key: 'A', content: '$0$' },
          { key: 'B', content: '$3$' },
          { key: 'C', content: '$1$' },
          { key: 'D', content: '$2$' },
        ],
        correctAnswer: 'B',
        explanation:
          'Dựa vào đồ thị hàm số, đồ thị có hai điểm cực đại tại $x = -1$ và $x = 1$, một điểm cực tiểu tại $x = 0$. Vậy hàm số đã cho có tất cả $3$ điểm cực trị. Chọn đáp án B.',
        pedagogicalTip:
          'Số điểm cực trị của hàm số trùng phương bằng tổng số điểm cực đại và điểm cực tiểu trên đồ thị.',
        points: 0.25,
      },
      {
        id: 'd4-p1-q4',
        part: 'part1',
        number: 4,
        topic: 'Giá trị lớn nhất và giá trị nhỏ nhất qua bảng biến thiên',
        prompt:
          'Cho hàm số $y = f(x)$ liên tục và có bảng biến thiên trên đoạn $[-3; 2]$ như sau. Khẳng định nào sau đây là đúng?',
        tikzType: 'd4_q4_bbt',
        options: [
          { key: 'A', content: '$\\max\\limits_{[-3; 2]} f(x) = 5$' },
          { key: 'B', content: '$\\min\\limits_{[-3; 2]} f(x) = -2$' },
          { key: 'C', content: '$\\max\\limits_{[-3; 2]} f(x) = 1$' },
          { key: 'D', content: '$\\min\\limits_{[-3; 2]} f(x) = 0$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Từ bảng biến thiên của hàm số trên đoạn $[-3; 2]$, ta thấy $\\max\\limits_{[-3; 2]} f(x) = 5$ đạt được tại $x = -1$ và $\\min\\limits_{[-3; 2]} f(x) = -3$ đạt được tại $x = 0$. Do đó khẳng định đúng là $\\max\\limits_{[-3; 2]} f(x) = 5$. Chọn đáp án A.',
        pedagogicalTip:
          'So sánh tất cả các giá trị ở dòng $y$ trên đoạn $[-3; 2]$ gồm $\\{-2; 5; -3; 1\\}$ để tìm giá trị lớn nhất bằng $5$ và nhỏ nhất bằng $-3$.',
        points: 0.25,
      },
      {
        id: 'd4-p1-q5',
        part: 'part1',
        number: 5,
        topic: 'Đường tiệm cận của đồ thị hàm số qua hình vẽ',
        prompt:
          'Cho hàm số $y = \\frac{ax + b}{cx + d}$ ($ad - bc \\neq 0; c \\neq 0$) có đồ thị như hình vẽ sau. Phương trình đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số lần lượt là:',
        tikzType: 'd4_q5_graph',
        options: [
          { key: 'A', content: '$x = -1$ và $y = 1$' },
          { key: 'B', content: '$x = -1$ và $y = -1$' },
          { key: 'C', content: '$x = 1$ và $y = -1$' },
          { key: 'D', content: '$x = 1$ và $y = 2$' },
        ],
        correctAnswer: 'C',
        explanation:
          'Quan sát đồ thị ta thấy: Đường tiệm cận đứng là đường thẳng vuông góc với trục hoành đi qua điểm $(1; 0)$, có phương trình $x = 1$. Đường tiệm cận ngang là đường thẳng vuông góc với trục tung đi qua điểm $(0; -1)$, có phương trình $y = -1$. Chọn đáp án C.',
        pedagogicalTip:
          'Chú ý thứ tự câu hỏi: tiệm cận đứng ($x = 1$) viết trước, tiệm cận ngang ($y = -1$) viết sau.',
        points: 0.25,
      },
      {
        id: 'd4-p1-q6',
        part: 'part1',
        number: 6,
        topic: 'Nhận diện hàm số phân thức bậc nhất trên bậc nhất qua đồ thị',
        prompt: 'Đường cong trong hình vẽ bên là đồ thị của hàm số nào dưới đây?',
        tikzType: 'd4_q6_graph',
        options: [
          { key: 'A', content: '$y = \\frac{x - 2}{x + 1}$' },
          { key: 'B', content: '$y = \\frac{x - 1}{x + 1}$' },
          { key: 'C', content: '$y = \\frac{2x - 1}{x + 1}$' },
          { key: 'D', content: '$y = \\frac{x + 2}{x - 1}$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Tiệm cận đứng của đồ thị là đường thẳng $x = -1$, tiệm cận ngang là đường thẳng $y = 1$. Đồ thị cắt trục tung tại điểm $(0; -2)$ vì khi $x = 0$ thì $y = \\frac{0 - 2}{0 + 1} = -2$. Đồ thị cắt trục hoành tại điểm $(2; 0)$ vì khi $y = 0$ thì $x - 2 = 0 \\Leftrightarrow x = 2$. Vậy đường cong đã cho là đồ thị của hàm số $y = \\frac{x - 2}{x + 1}$. Chọn đáp án A.',
        pedagogicalTip:
          'Kiểm tra nhanh bằng giao điểm với trục tung $Oy$ tại $(0; -2)$ và giao điểm với trục hoành $Ox$ tại $(2; 0)$.',
        points: 0.25,
      },
      {
        id: 'd4-p1-q7',
        part: 'part1',
        number: 7,
        topic: 'Nhận diện hàm số bậc ba qua đồ thị',
        prompt: 'Đường cong trong hình vẽ bên là đồ thị của hàm số nào dưới đây?',
        tikzType: 'd4_q7_graph',
        options: [
          { key: 'A', content: '$y = x^3 - 3x^2$' },
          { key: 'B', content: '$y = -x^3 - 3x^2$' },
          { key: 'C', content: '$y = -x^3 + 3x^2$' },
          { key: 'D', content: '$y = x^3 + 3x^2$' },
        ],
        correctAnswer: 'D',
        explanation:
          'Đồ thị có nhánh bên phải đi lên khi $x \\to +\\infty$, do đó hệ số của $x^3$ dương ($a > 0$), loại B và C. Đồ thị đạt cực đại tại $(-2; 4)$ và cực tiểu tại $(0; 0)$, đi qua $(-1; 2)$. Thay $x = -2$ vào $y = x^3 + 3x^2$ được $y(-2) = (-2)^3 + 3(-2)^2 = -8 + 12 = 4$ (thỏa mãn). Vậy hàm số cần tìm là $y = x^3 + 3x^2$. Chọn đáp án D.',
        pedagogicalTip:
          'Nhánh phải đi lên $\\Rightarrow a > 0$; điểm cực đại tại $(-2; 4)$ giúp phân biệt ngay $y = x^3 + 3x^2$ với $y = x^3 - 3x^2$.',
        points: 0.25,
      },
      {
        id: 'd4-p1-q8',
        part: 'part1',
        number: 8,
        topic: 'Giao điểm của đồ thị hàm số với trục tung',
        prompt:
          'Đồ thị hàm số $y = \\frac{2x - 8}{x + 1}$ cắt trục tung tại điểm có tung độ bằng bao nhiêu?',
        options: [
          { key: 'A', content: '$2$' },
          { key: 'B', content: '$-4$' },
          { key: 'C', content: '$-8$' },
          { key: 'D', content: '$4$' },
        ],
        correctAnswer: 'C',
        explanation:
          'Trục tung có phương trình $x = 0$. Thay $x = 0$ vào hàm số $y = \\frac{2x - 8}{x + 1}$, ta được $y = \\frac{2(0) - 8}{0 + 1} = -8$. Vậy đồ thị cắt trục tung tại điểm có tung độ bằng $-8$. Chọn đáp án C.',
        pedagogicalTip:
          'Giao điểm với trục tung $Oy$ luôn có hoành độ $x = 0$; giao điểm với trục hoành $Ox$ luôn có tung độ $y = 0$.',
        points: 0.25,
      },
      {
        id: 'd4-p1-q9',
        part: 'part1',
        number: 9,
        topic: 'Tính đơn điệu của hàm phân thức bậc hai trên bậc nhất',
        prompt:
          'Cho hàm số $y = \\frac{x^2 + 9}{x}$. Hàm số đã cho đồng biến trên khoảng nào dưới đây?',
        options: [
          { key: 'A', content: '$(3; +\\infty)$' },
          { key: 'B', content: '$(0; 3)$' },
          { key: 'C', content: '$(-3; 3)$' },
          { key: 'D', content: '$(-3; 0)$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Tập xác định $D = \\mathbb{R} \\setminus \\{0\\}$. Đạo hàm $y\' = \\frac{2x \\cdot x - (x^2 + 9)}{x^2} = \\frac{x^2 - 9}{x^2}$. Cho $y\' = 0 \\Leftrightarrow x^2 - 9 = 0 \\Leftrightarrow x = \\pm 3$. Ta có $y\' > 0$ khi $x \\in (-\\infty; -3) \\cup (3; +\\infty)$ và $y\' < 0$ khi $x \\in (-3; 0) \\cup (0; 3)$. Do đó hàm số đồng biến trên mỗi khoảng $(-\\infty; -3)$ và $(3; +\\infty)$. Chọn đáp án A.',
        pedagogicalTip:
          'Có thể viết lại $y = x + \\frac{9}{x} \\Rightarrow y\' = 1 - \\frac{9}{x^2} = \\frac{x^2 - 9}{x^2}$ để tính đạo hàm nhanh và chính xác hơn.',
        points: 0.25,
      },
      {
        id: 'd4-p1-q10',
        part: 'part1',
        number: 10,
        topic: 'Số điểm cực trị của hàm số qua bảng xét dấu đạo hàm',
        prompt:
          'Cho hàm số $y = f(x)$ có bảng xét dấu của đạo hàm như sau. Số điểm cực trị của hàm số đã cho là bao nhiêu?',
        tikzType: 'd4_q10_bxd',
        options: [
          { key: 'A', content: '$1$' },
          { key: 'B', content: '$2$' },
          { key: 'C', content: '$0$' },
          { key: 'D', content: '$3$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Đạo hàm $f\'(x)$ đổi dấu từ âm sang dương khi đi qua điểm $x = -3$, do đó $x = -3$ là một điểm cực trị (cực tiểu). Khi đi qua điểm $x = 2$, đạo hàm $f\'(x)$ không đổi dấu (giữ nguyên dấu dương) nên $x = 2$ không phải là điểm cực trị. Vậy hàm số đã cho có đúng $1$ điểm cực trị. Chọn đáp án A.',
        pedagogicalTip:
          'Điểm cực trị chỉ xuất hiện tại điểm mà đạo hàm $f\'(x)$ đổi dấu khi đi qua điểm đó (tại $x = 2$ đạo hàm mang dấu $+$ ở cả hai phía nên không là cực trị).',
        points: 0.25,
      },
      {
        id: 'd4-p1-q11',
        part: 'part1',
        number: 11,
        topic: 'Số đường tiệm cận ngang của đồ thị hàm số qua bảng biến thiên',
        prompt:
          'Cho hàm số $y = f(x)$ có bảng biến thiên như sau. Tổng số đường tiệm cận ngang của đồ thị hàm số đã cho là:',
        tikzType: 'd4_q11_bbt',
        options: [
          { key: 'A', content: '$1$' },
          { key: 'B', content: '$0$' },
          { key: 'C', content: '$3$' },
          { key: 'D', content: '$2$' },
        ],
        correctAnswer: 'D',
        explanation:
          'Dựa vào bảng biến thiên của hàm số: $\\lim\\limits_{x \\to -\\infty} f(x) = 2 \\Rightarrow y = 2$ là đường tiệm cận ngang; $\\lim\\limits_{x \\to +\\infty} f(x) = 5 \\Rightarrow y = 5$ là đường tiệm cận ngang. Vì $2 \\neq 5$ nên đồ thị hàm số có đúng $2$ đường tiệm cận ngang. Chọn đáp án D.',
        pedagogicalTip:
          'Đồ thị hàm số có tối đa $2$ đường tiệm cận ngang khi giới hạn tại $-\\infty$ và $+\\infty$ là hai số hữu hạn khác nhau.',
        points: 0.25,
      },
      {
        id: 'd4-p1-q12',
        part: 'part1',
        number: 12,
        topic: 'Đặc điểm đồ thị của hàm số phân thức bậc nhất trên bậc nhất',
        prompt:
          'Cho hàm số $y = \\frac{x - 2}{x + 3}$. Đồ thị của hàm số đã cho có đặc điểm nào dưới đây?',
        options: [
          {
            key: 'A',
            content: 'Đồ thị nhận đường thẳng $x = 3$ làm tiệm cận đứng, $y = 1$ làm tiệm cận ngang.',
          },
          {
            key: 'B',
            content: 'Đồ thị nhận đường thẳng $x = 2$ làm tiệm cận đứng, $y = 1$ làm tiệm cận ngang.',
          },
          {
            key: 'C',
            content:
              'Đồ thị nhận đường thẳng $x = -3$ làm tiệm cận đứng, $y = 1$ làm tiệm cận ngang, cắt trục tung tại $\\left(0; -\\frac{2}{3}\\right)$ và cắt trục hoành tại $(2; 0)$.',
          },
          {
            key: 'D',
            content: 'Đồ thị nhận đường thẳng $x = -3$ làm tiệm cận đứng, $y = -2$ làm tiệm cận ngang.',
          },
        ],
        correctAnswer: 'C',
        explanation:
          'Xét hàm số $y = \\frac{x - 2}{x + 3}$ có tập xác định $D = \\mathbb{R} \\setminus \\{-3\\}$. Tiệm cận đứng là đường thẳng $x = -3$, tiệm cận ngang là đường thẳng $y = 1$. Giao điểm với trục tung ($x = 0$) là $\\left(0; -\\frac{2}{3}\\right)$; giao điểm với trục hoành ($y = 0$) là $(2; 0)$. Chọn đáp án C.',
        pedagogicalTip:
          'Nghiệm của mẫu số $x + 3 = 0 \\Leftrightarrow x = -3$ cho tiệm cận đứng; tỉ số hệ số bậc nhất $\\frac{1}{1} = 1$ cho tiệm cận ngang $y = 1$.',
        points: 0.25,
      },
    ],
    part2: [
      {
        id: 'd4-p2-q1',
        part: 'part2',
        number: 1,
        topic: 'Phân tích toàn diện hàm số qua bảng biến thiên',
        prompt:
          'Cho hàm số $y = f(x)$ xác định trên $\\mathbb{R} \\setminus \\{2\\}$ và có bảng biến thiên như sau. Xét tính đúng sai của các khẳng định sau:',
        tikzType: 'd4_p2_q1_bbt',
        statements: [
          {
            id: 'a',
            label: 'a',
            statement: 'Hàm số đồng biến trên khoảng $(-\\infty; 0)$.',
            isCorrect: true,
            explanation:
              'Đúng. Từ bảng biến thiên, trên khoảng $(-\\infty; 0)$ ta có $f\'(x) > 0$, nên hàm số đồng biến trên khoảng $(-\\infty; 0)$.',
          },
          {
            id: 'b',
            label: 'b',
            statement: 'Giá trị cực tiểu của hàm số bằng $4$.',
            isCorrect: false,
            explanation:
              'Sai. Dựa vào bảng biến thiên, hàm số đạt cực tiểu tại điểm $x = 4$ và giá trị cực tiểu của hàm số là $y_{\\text{CT}} = f(4) = 3$ (chứ không phải bằng $4$).',
          },
          {
            id: 'c',
            label: 'c',
            statement: 'Đường tiệm cận đứng của đồ thị hàm số có phương trình $x = 2$.',
            isCorrect: true,
            explanation:
              'Đúng. Ta có $\\lim_{x \\to 2^-} f(x) = -\\infty$ và $\\lim_{x \\to 2^+} f(x) = +\\infty$, do đó đường thẳng $x = 2$ là tiệm cận đứng của đồ thị hàm số.',
          },
          {
            id: 'd',
            label: 'd',
            statement: 'Giá trị lớn nhất của hàm số trên đoạn $[-2; 1]$ bằng $-1$.',
            isCorrect: true,
            explanation:
              'Đúng. Trên đoạn $[-2; 1] \\subset (-\\infty; 2)$, hàm số liên tục và đạt cực đại tại $x = 0$ với $f(0) = -1$ (tăng từ $f(-2)$ lên $f(0) = -1$ rồi giảm xuống $f(1)$). Do đó $\\max_{[-2; 1]} f(x) = f(0) = -1$.',
          },
        ],
        pedagogicalTip:
          'Cần phân biệt rõ "điểm cực tiểu của hàm số" ($x = 4$) và "giá trị cực tiểu của hàm số" ($y_{\\text{CT}} = 3$).',
      },
      {
        id: 'd4-p2-q2',
        part: 'part2',
        number: 2,
        topic: 'Khảo sát đồ thị hàm số bậc ba',
        prompt:
          'Cho hàm số bậc ba $y = f(x) = ax^3 + bx^2 + cx + d$ ($a \\neq 0$) có đồ thị như hình vẽ dưới đây. Xét tính đúng sai của các khẳng định sau:',
        tikzType: 'd4_p2_q2_graph',
        statements: [
          {
            id: 'a',
            label: 'a',
            statement: 'Hệ số $a > 0$.',
            isCorrect: true,
            explanation:
              'Đúng. Nhánh ngoài cùng bên phải của đồ thị đi lên khi $x \\to +\\infty$, suy ra hệ số $a > 0$.',
          },
          {
            id: 'b',
            label: 'b',
            statement: 'Hàm số nghịch biến trên khoảng $(0; 2)$.',
            isCorrect: true,
            explanation:
              'Đúng. Trên khoảng $(0; 2)$, đồ thị hàm số đi xuống từ điểm $(0; 0)$ đến điểm $(2; -4)$, do đó hàm số nghịch biến trên khoảng $(0; 2)$.',
          },
          {
            id: 'c',
            label: 'c',
            statement: 'Điểm cực tiểu của đồ thị hàm số là $(2; 0)$.',
            isCorrect: false,
            explanation:
              'Sai. Quan sát đồ thị, điểm cực tiểu của đồ thị hàm số có tọa độ là $(2; -4)$ chứ không phải $(2; 0)$.',
          },
          {
            id: 'd',
            label: 'd',
            statement: 'Tọa độ tâm đối xứng của đồ thị hàm số là $I(1; -2)$.',
            isCorrect: true,
            explanation:
              'Đúng. Tâm đối xứng của đồ thị hàm bậc ba là trung điểm của đoạn thẳng nối điểm cực đại $A(0; 0)$ và điểm cực tiểu $B(2; -4)$, có tọa độ $I\\left(\\frac{0 + 2}{2}; \\frac{0 + (-4)}{2}\\right) = I(1; -2)$.',
          },
        ],
        pedagogicalTip:
          'Tâm đối xứng của đồ thị hàm số bậc ba luôn là điểm uốn và cũng là trung điểm của đoạn thẳng nối hai điểm cực trị.',
      },
      {
        id: 'd4-p2-q3',
        part: 'part2',
        number: 3,
        topic: 'Ứng dụng đạo hàm vào bài toán tối ưu lợi nhuận thực tế',
        prompt:
          'Một doanh nghiệp theo dõi và nhận thấy rằng lợi nhuận $P(t)$ (tính bằng triệu đồng) của một dòng sản phẩm mới sau $t$ tháng kể từ khi ra mắt được mô hình hóa bởi hàm số $P(t) = -t^3 + 12t^2 + 60t$ với $t \\in [0; 12]$. Xét tính đúng sai của các khẳng định sau:',
        statements: [
          {
            id: 'a',
            label: 'a',
            statement: 'Lợi nhuận của dòng sản phẩm sau $1$ tháng kể từ khi ra mắt là $71$ triệu đồng.',
            isCorrect: true,
            explanation:
              'Đúng. Thay $t = 1$ vào hàm lợi nhuận: $P(1) = -1^3 + 12 \\cdot 1^2 + 60 \\cdot 1 = -1 + 12 + 60 = 71$ (triệu đồng).',
          },
          {
            id: 'b',
            label: 'b',
            statement: 'Tốc độ thay đổi lợi nhuận tại thời điểm $t$ là hàm số $P\'(t) = -3t^2 + 24t + 60$.',
            isCorrect: true,
            explanation:
              'Đúng. Đạo hàm của hàm lợi nhuận theo thời gian $t$ là $P\'(t) = (-t^3 + 12t^2 + 60t)\' = -3t^2 + 24t + 60$.',
          },
          {
            id: 'c',
            label: 'c',
            statement: 'Lợi nhuận của dòng sản phẩm tăng liên tục trong suốt $12$ tháng.',
            isCorrect: false,
            explanation:
              'Sai. Giải phương trình $P\'(t) = 0 \\Leftrightarrow -3t^2 + 24t + 60 = 0 \\Leftrightarrow -3(t - 10)(t + 2) = 0 \\Leftrightarrow t = 10$ (vì $t \\in [0; 12]$). Trên khoảng $(10; 12)$, ta có $P\'(t) < 0$ nên lợi nhuận giảm từ tháng thứ $10$ đến tháng thứ $12$.',
          },
          {
            id: 'd',
            label: 'd',
            statement: 'Lợi nhuận của dòng sản phẩm đạt giá trị lớn nhất vào tháng thứ $10$.',
            isCorrect: true,
            explanation:
              'Đúng. Trên đoạn $[0; 12]$, hàm số $P(t)$ đồng biến trên $(0; 10)$ và nghịch biến trên $(10; 12)$, do đó đạt giá trị lớn nhất tại $t = 10$ (tháng thứ $10$) với $P(10) = -1000 + 1200 + 600 = 800$ triệu đồng.',
          },
        ],
        pedagogicalTip:
          'Xét dấu đạo hàm $P\'(t) = -3(t - 10)(t + 2)$ trên đoạn $[0; 12]$ giúp thấy ngay lợi nhuận tăng trong $10$ tháng đầu và giảm trong $2$ tháng cuối.',
      },
    ],
    part3: [
      {
        id: 'd4-p3-q1',
        part: 'part3',
        number: 1,
        topic: 'Tìm số điểm cực trị của hàm số thông qua biểu thức đạo hàm',
        prompt:
          'Cho hàm số $y = f(x)$ liên tục và có đạo hàm trên $\\mathbb{R}$, biết đạo hàm có công thức $f\'(x) = (x + 3)^4(x - 2)^5(x - 5)$. Hỏi hàm số đã cho có bao nhiêu điểm cực trị?',
        acceptableAnswers: ['2'],
        explanation:
          'Phương trình $f\'(x) = 0$ có $3$ nghiệm là $x = -3$ (bội chẵn $4$), $x = 2$ (bội lẻ $5$) và $x = 5$ (nghiệm đơn, bội lẻ $1$). Đạo hàm $f\'(x)$ chỉ đổi dấu khi đi qua các nghiệm bội lẻ là $x = 2$ và $x = 5$. Vậy hàm số đã cho có $2$ điểm cực trị.',
        pedagogicalTip:
          'Chỉ các nghiệm bội lẻ của phương trình $f\'(x) = 0$ mới làm đạo hàm đổi dấu và tạo thành điểm cực trị.',
        points: 0.5,
      },
      {
        id: 'd4-p3-q2',
        part: 'part3',
        number: 2,
        topic: 'Ứng dụng cực trị hàm số trong bài toán sinh học',
        prompt:
          'Một mẻ nuôi cấy vi sinh vật được bổ sung môi trường dinh dưỡng để kích thích phát triển. Sau $t$ giờ ($t \\ge 0$), số lượng cá thể vi khuẩn trong môi trường được mô hình hóa theo hàm số $N(t) = 1500 + 36t^2 - t^3$. Hỏi sau bao nhiêu giờ kể từ khi bắt đầu thì số lượng vi khuẩn đạt cực đại trước khi giảm?',
        acceptableAnswers: ['24'],
        unit: 'giờ',
        explanation:
          'Xét hàm số $N(t) = 1500 + 36t^2 - t^3$ với $t \\ge 0$. Ta có đạo hàm $N\'(t) = 72t - 3t^2 = 3t(24 - t)$. Cho $N\'(t) = 0 \\Leftrightarrow t = 0$ hoặc $t = 24$. Vì $N\'(t) > 0$ trên $(0; 24)$ và $N\'(t) < 0$ trên $(24; +\\infty)$, nên số lượng vi khuẩn đạt cực đại tại $t = 24$ giờ.',
        pedagogicalTip:
          'Với $t > 0$, giải phương trình $N\'(t) = 72t - 3t^2 = 0$ cho nghiệm duy nhất $t = 24$ (giờ).',
        points: 0.5,
      },
      {
        id: 'd4-p3-q3',
        part: 'part3',
        number: 3,
        topic: 'Xác định đường tiệm cận xiên của đồ thị hàm phân thức',
        prompt:
          'Cho hàm số $y = f(x) = \\frac{x^2 - 5x + 7}{x - 3}$. Đồ thị hàm số có đường tiệm cận xiên là đường thẳng $y = ax + b$. Tính giá trị của biểu thức $P = 2a + b$.',
        acceptableAnswers: ['0'],
        explanation:
          'Thực hiện phép chia đa thức: $y = \\frac{x^2 - 5x + 7}{x - 3} = \\frac{(x - 3)(x - 2) + 1}{x - 3} = x - 2 + \\frac{1}{x - 3}$. Vì $\\lim_{x \\to \\pm\\infty} \\left[y - (x - 2)\\right] = \\lim_{x \\to \\pm\\infty} \\frac{1}{x - 3} = 0$, nên đường tiệm cận xiên là $y = x - 2$. Suy ra $a = 1, b = -2$. Vậy $P = 2a + b = 2(1) + (-2) = 0$.',
        pedagogicalTip:
          'Chia tử thức $x^2 - 5x + 7$ cho mẫu thức $x - 3$ được phần nguyên bậc nhất là $x - 2$, đó chính là vế phải của phương trình tiệm cận xiên.',
        points: 0.5,
      },
      {
        id: 'd4-p3-q4',
        part: 'part3',
        number: 4,
        topic: 'Ứng dụng đạo hàm trong bài toán tốc độ tăng dân số',
        prompt:
          'Dân số của một đô thị mới sau $t$ năm kể từ đầu năm $2020$ được ước lượng theo công thức $f(t) = \\frac{30t + 10}{t + 2}$ ($t \\ge 0$), trong đó $f(t)$ tính bằng nghìn người. Đạo hàm $f\'(t)$ biểu thị tốc độ tăng dân số của đô thị (đơn vị: nghìn người/năm). Hỏi vào năm nào thì tốc độ tăng dân số của đô thị đạt mức $0{,}2$ nghìn người/năm?',
        acceptableAnswers: ['2033', '2034'],
        explanation:
          'Tốc độ tăng dân số tại thời điểm $t$ là $f\'(t) = \\frac{30 \\cdot 2 - 1 \\cdot 10}{(t + 2)^2} = \\frac{50}{(t + 2)^2}$. Theo giả thiết: $f\'(t) = 0{,}2 \\Leftrightarrow \\frac{50}{(t + 2)^2} = 0{,}2 \\Leftrightarrow (t + 2)^2 = 250 \\Leftrightarrow t + 2 = \\sqrt{250} = 5\\sqrt{10} \\approx 15{,}81$ (do $t \\ge 0$), suy ra $t \\approx 13{,}81$ năm. Tính từ đầu năm $2020$, sau $13{,}81$ năm là vào khoảng cuối năm $2033$ ($2020 + 13 = 2033$, làm tròn thành $2034$).',
        pedagogicalTip:
          'Kể từ đầu năm $2020$, thời điểm $t \\in [13; 14)$ nằm trong năm $2033$ (hệ thống chấp nhận cả $2033$ và $2034$).',
        points: 0.5,
      },
    ],
    part4: [
      {
        id: 'd4-p4-q1',
        part: 'part4',
        number: 1,
        topic: 'Tự luận Câu 1 (1,0 điểm): Xét tính đơn điệu và tìm cực trị của hàm số bậc ba',
        problemStatement:
          'Cho hàm số $y = \\frac{1}{3}x^3 - x^2 - 3x + 2$. Xét tính đơn điệu và tìm các điểm cực trị của hàm số đã cho.',
        conclusionTarget:
          'Hàm số đồng biến trên $(-\\infty; -1)$ và $(3; +\\infty)$, nghịch biến trên $(-1; 3)$; đạt cực đại tại $x = -1\\ \\left(y_{\\text{CĐ}} = \\frac{11}{3}\\right)$ và đạt cực tiểu tại $x = 3\\ (y_{\\text{CT}} = -7)$.',
        tikzType: 'd4_p4_q1_bbt',
        steps: [
          {
            id: 'd4-p4-q1-s1',
            originalIndex: 1,
            roleDescription: 'Tìm tập xác định và tính đạo hàm y\'',
            content:
              'Tập xác định của hàm số là $D = \\mathbb{R}$. Đạo hàm: $y\' = x^2 - 2x - 3$.',
          },
          {
            id: 'd4-p4-q1-s2',
            originalIndex: 2,
            roleDescription: 'Tìm nghiệm của phương trình y\' = 0 và tính giá trị tương ứng',
            content:
              'Cho $y\' = 0 \\Leftrightarrow x^2 - 2x - 3 = 0 \\Leftrightarrow x = -1$ hoặc $x = 3$. Với $x = -1 \\Rightarrow y(-1) = \\frac{11}{3}$; với $x = 3 \\Rightarrow y(3) = -7$.',
          },
          {
            id: 'd4-p4-q1-s3',
            originalIndex: 3,
            roleDescription: 'Xét dấu đạo hàm và kết luận các khoảng đơn điệu',
            content:
              'Lập bảng biến thiên: $y\' > 0$ trên các khoảng $(-\\infty; -1)$ và $(3; +\\infty)$; $y\' < 0$ trên khoảng $(-1; 3)$. Vậy hàm số đồng biến trên các khoảng $(-\\infty; -1)$ và $(3; +\\infty)$, nghịch biến trên khoảng $(-1; 3)$.',
          },
          {
            id: 'd4-p4-q1-s4',
            originalIndex: 4,
            roleDescription: 'Kết luận điểm cực đại và điểm cực tiểu của hàm số',
            content:
              'Hàm số đạt cực đại tại $x = -1$, giá trị cực đại $y_{\\text{CĐ}} = \\frac{11}{3}$; hàm số đạt cực tiểu tại $x = 3$, giá trị cực tiểu $y_{\\text{CT}} = -7$.',
          },
        ],
        pedagogicalTip:
          'Khi kết luận tính đơn điệu trên hai khoảng rời nhau $(-\\infty; -1)$ và $(3; +\\infty)$, dùng liên từ "và" hoặc dấu chấm phẩy, không dùng ký hiệu hợp $\\cup$.',
        teacherAnalysis:
          'Câu 1 kiểm tra quy trình chuẩn mực xét tính đơn điệu và tìm cực trị của hàm đa thức bậc ba thông qua đạo hàm và bảng biến thiên.',
        points: 1.0,
      },
      {
        id: 'd4-p4-q2',
        part: 'part4',
        number: 2,
        topic: 'Tự luận Câu 2 (0,5 điểm): Tìm GTLN và GTNN của hàm phân thức trên đoạn',
        problemStatement:
          'Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số $y = \\frac{-2x + 3}{x + 1}$ trên đoạn $[0; 4]$.',
        conclusionTarget:
          '$\\max_{[0; 4]} y = y(0) = 3$ và $\\min_{[0; 4]} y = y(4) = -1$.',
        steps: [
          {
            id: 'd4-p4-q2-s1',
            originalIndex: 1,
            roleDescription: 'Kiểm tra tính xác định, liên tục của hàm số trên đoạn [0; 4]',
            content:
              'Hàm số $y = \\frac{-2x + 3}{x + 1}$ có tập xác định $D = \\mathbb{R} \\setminus \\{-1\\}$. Do $-1 \\notin [0; 4]$ nên hàm số xác định và liên tục trên đoạn $[0; 4]$.',
          },
          {
            id: 'd4-p4-q2-s2',
            originalIndex: 2,
            roleDescription: 'Tính đạo hàm và xét tính đơn điệu trên đoạn [0; 4]',
            content:
              'Ta có đạo hàm: $y\' = \\frac{-2 \\cdot 1 - 1 \\cdot 3}{(x + 1)^2} = \\frac{-5}{(x + 1)^2} < 0, \\forall x \\in [0; 4]$. Suy ra hàm số nghịch biến trên đoạn $[0; 4]$.',
          },
          {
            id: 'd4-p4-q2-s3',
            originalIndex: 3,
            roleDescription: 'Tính giá trị của hàm số tại hai đầu mút x = 0 và x = 4',
            content:
              'Tính giá trị hàm số tại hai đầu mút của đoạn $[0; 4]$: Tại $x = 0$, ta có $y(0) = \\frac{-2(0) + 3}{0 + 1} = 3$. Tại $x = 4$, ta có $y(4) = \\frac{-2(4) + 3}{4 + 1} = \\frac{-5}{5} = -1$.',
          },
          {
            id: 'd4-p4-q2-s4',
            originalIndex: 4,
            roleDescription: 'Kết luận giá trị lớn nhất và giá trị nhỏ nhất trên đoạn [0; 4]',
            content:
              'Vậy trên đoạn $[0; 4]$, giá trị lớn nhất của hàm số là $\\max_{[0; 4]} y = y(0) = 3$ (đạt tại $x = 0$) và giá trị nhỏ nhất của hàm số là $\\min_{[0; 4]} y = y(4) = -1$ (đạt tại $x = 4$).',
          },
        ],
        pedagogicalTip:
          'Với hàm phân thức bậc nhất trên bậc nhất liên tục trên đoạn $[a; b]$, đạo hàm luôn mang một dấu không đổi nên GTLN và GTNN luôn đạt được tại hai đầu mút $a, b$.',
        teacherAnalysis:
          'Học sinh cần nêu rõ hàm số liên tục trên đoạn $[0; 4]$ (vì điểm gián đoạn $x = -1 \\notin [0; 4]$) trước khi sử dụng tính đơn điệu để kết luận GTLN, GTNN.',
        points: 0.5,
      },
      {
        id: 'd4-p4-q3',
        part: 'part4',
        number: 3,
        topic: 'Tự luận Câu 3 (0,5 điểm): Bài toán tối ưu chi phí trung bình trong sản xuất',
        problemStatement:
          'Một phân xưởng may gia công ước tính hàm tổng chi phí để sản xuất $x$ sản phẩm ($x > 0$) mỗi ngày là $C(x) = x^2 + 40x + 10000$ (nghìn đồng). Chi phí trung bình để sản xuất một sản phẩm được cho bởi công thức $\\overline{C}(x) = \\frac{C(x)}{x}$. Hỏi phân xưởng cần sản xuất bao nhiêu sản phẩm mỗi ngày để chi phí trung bình cho mỗi sản phẩm là thấp nhất?',
        conclusionTarget:
          'Phân xưởng cần sản xuất $x = 100$ sản phẩm mỗi ngày để chi phí trung bình thấp nhất bằng $240$ nghìn đồng/sản phẩm.',
        steps: [
          {
            id: 'd4-p4-q3-s1',
            originalIndex: 1,
            roleDescription: 'Thiết lập hàm chi phí trung bình C_tb(x)',
            content:
              'Với $x > 0$, hàm chi phí trung bình để sản xuất một sản phẩm là: $\\overline{C}(x) = \\frac{C(x)}{x} = \\frac{x^2 + 40x + 10000}{x} = x + 40 + \\frac{10000}{x}$ (nghìn đồng).',
          },
          {
            id: 'd4-p4-q3-s2',
            originalIndex: 2,
            roleDescription: 'Tính đạo hàm của hàm chi phí trung bình và tìm điểm tới hạn',
            content:
              'Tính đạo hàm trên khoảng $(0; +\\infty)$: $\\overline{C}\'(x) = 1 - \\frac{10000}{x^2} = \\frac{x^2 - 10000}{x^2}$. Cho $\\overline{C}\'(x) = 0 \\Leftrightarrow x^2 = 10000 \\Leftrightarrow x = 100$ (do $x > 0$).',
          },
          {
            id: 'd4-p4-q3-s3',
            originalIndex: 3,
            roleDescription: 'Xét sự biến thiên của hàm chi phí trung bình trên khoảng (0; +∞)',
            content:
              'Xét dấu $\\overline{C}\'(x)$ trên khoảng $(0; +\\infty)$: $\\overline{C}\'(x) < 0$ khi $x \\in (0; 100)$ và $\\overline{C}\'(x) > 0$ khi $x \\in (100; +\\infty)$. Suy ra hàm số $\\overline{C}(x)$ nghịch biến trên $(0; 100)$ và đồng biến trên $(100; +\\infty)$.',
          },
          {
            id: 'd4-p4-q3-s4',
            originalIndex: 4,
            roleDescription: 'Kết luận số lượng sản phẩm tối ưu và chi phí trung bình thấp nhất',
            content:
              'Do đó, hàm số $\\overline{C}(x)$ đạt giá trị nhỏ nhất tại $x = 100$ với $\\overline{C}(100) = 100 + 40 + \\frac{10000}{100} = 240$ (nghìn đồng). Vậy phân xưởng cần sản xuất $100$ sản phẩm mỗi ngày để chi phí trung bình cho mỗi sản phẩm là thấp nhất.',
          },
        ],
        pedagogicalTip:
          'Bài toán này cũng có thể kiểm tra nhanh bằng bất đẳng thức Cauchy cho hai số dương $x$ và $\\frac{10000}{x}$: $\\overline{C}(x) = x + \\frac{10000}{x} + 40 \\ge 2\\sqrt{x \\cdot \\frac{10000}{x}} + 40 = 240$, dấu bằng xảy ra khi $x = 100$.',
        teacherAnalysis:
          'Đây là bài toán tối ưu kinh tế điển hình vận dụng đạo hàm hàm phân thức hữu tỉ trên khoảng $(0; +\\infty)$.',
        points: 0.5,
      },
    ],
  },
  {
    id: 'de-so-05',
    title: 'Đề ôn GK1 05',
    subtitle: 'Ôn 12 - Đề ôn GK1 05: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số (GV Nguyễn Ngọc Thanh)',
    grade: 12,
    durationMinutes: 90,
    totalPoints: 10,
    description:
      'Đề ôn tập Toán 12 - Đề ôn GK1 05 (GV Nguyễn Ngọc Thanh) gồm 22 câu hỏi chuẩn cấu trúc 4 phần: Phần I (12 câu trắc nghiệm nhiều lựa chọn từ Câu 1 đến Câu 12 - 3,0đ), Phần II (3 câu trắc nghiệm Đúng/Sai từ Câu 1 đến Câu 3 - 3,0đ), Phần III (4 câu trả lời ngắn từ Câu 1 đến Câu 4 - 2,0đ), Phần IV (3 câu tự luận từ Câu 1 đến Câu 3 - 2,0đ).',
    part1: [
      {
        id: 'd5-p1-q1',
        part: 'part1',
        number: 1,
        topic: 'Tính đơn điệu của hàm số qua bảng biến thiên',
        prompt:
          'Cho hàm số $y = f(x)$ có bảng biến thiên như sau. Hàm số đã cho nghịch biến trên khoảng nào dưới đây?',
        tikzType: 'd5_q1_bbt',
        options: [
          { key: 'A', content: '$(-1; 3)$' },
          { key: 'B', content: '$(-\\infty; 3)$' },
          { key: 'C', content: '$(3; +\\infty)$' },
          { key: 'D', content: '$(-1; +\\infty)$' },
        ],
        correctAnswer: 'C',
        explanation:
          'Dựa vào bảng biến thiên, ta thấy đạo hàm $f\'(x) < 0$ trên các khoảng $(-\\infty; -1)$ và $(3; +\\infty)$. Do đó, hàm số đã cho nghịch biến trên khoảng $(3; +\\infty)$. Chọn đáp án C.',
        pedagogicalTip:
          'Quan sát dấu của đạo hàm $f\'(x) < 0$ và chiều mũi tên đi xuống trên bảng biến thiên để xác định khoảng nghịch biến.',
        points: 0.25,
      },
      {
        id: 'd5-p1-q2',
        part: 'part1',
        number: 2,
        topic: 'Tính đơn điệu của hàm số qua đồ thị',
        prompt:
          'Cho hàm số $y = f(x)$ có đồ thị như hình vẽ bên. Hàm số đã cho đồng biến trên khoảng nào dưới đây?',
        tikzType: 'd5_q2_graph',
        options: [
          { key: 'A', content: '$(0; 2)$' },
          { key: 'B', content: '$(2; +\\infty)$' },
          { key: 'C', content: '$(-1; 2)$' },
          { key: 'D', content: '$(0; +\\infty)$' },
        ],
        correctAnswer: 'B',
        explanation:
          'Dựa vào đồ thị, hàm số đi lên từ trái sang phải trên các khoảng $(-\\infty; 0)$ và $(2; +\\infty)$. Do đó, hàm số đồng biến trên khoảng $(2; +\\infty)$. Chọn đáp án B.',
        pedagogicalTip:
          'Khoảng đồng biến của hàm số được đọc trên trục hoành $Ox$ ứng với phần đồ thị đi lên từ trái sang phải.',
        points: 0.25,
      },
      {
        id: 'd5-p1-q3',
        part: 'part1',
        number: 3,
        topic: 'Số điểm cực trị của hàm số qua đồ thị',
        prompt:
          'Cho hàm số $y = f(x)$ có đồ thị như hình vẽ bên. Số điểm cực trị của hàm số đã cho là:',
        tikzType: 'd5_q3_graph',
        options: [
          { key: 'A', content: '$2$' },
          { key: 'B', content: '$1$' },
          { key: 'C', content: '$3$' },
          { key: 'D', content: '$0$' },
        ],
        correctAnswer: 'C',
        explanation:
          'Dựa vào đồ thị hàm số, đồ thị có hai điểm cực tiểu tại $x = -1$ và $x = 1$, một điểm cực đại tại $x = 0$. Vậy hàm số đã cho có tất cả $3$ điểm cực trị. Chọn đáp án C.',
        pedagogicalTip:
          'Số điểm cực trị của hàm số trùng phương bằng tổng số điểm cực đại và điểm cực tiểu trên đồ thị.',
        points: 0.25,
      },
      {
        id: 'd5-p1-q4',
        part: 'part1',
        number: 4,
        topic: 'Giá trị lớn nhất và giá trị nhỏ nhất qua bảng biến thiên',
        prompt:
          'Cho hàm số $y = f(x)$ liên tục và có bảng biến thiên trên đoạn $[-1; 4]$ như sau. Khẳng định nào sau đây là đúng?',
        tikzType: 'd5_q4_bbt',
        options: [
          { key: 'A', content: '$\\max\\limits_{[-1; 4]} f(x) = 2$' },
          { key: 'B', content: '$\\min\\limits_{[-1; 4]} f(x) = -4$' },
          { key: 'C', content: '$\\max\\limits_{[-1; 4]} f(x) = 4$' },
          { key: 'D', content: '$\\min\\limits_{[-1; 4]} f(x) = -1$' },
        ],
        correctAnswer: 'B',
        explanation:
          'Từ bảng biến thiên của hàm số trên đoạn $[-1; 4]$, ta thấy $\\max\\limits_{[-1; 4]} f(x) = 6$ đạt được tại $x = 1$ và $\\min\\limits_{[-1; 4]} f(x) = -4$ đạt được tại $x = 2$. Do đó khẳng định đúng là $\\min\\limits_{[-1; 4]} f(x) = -4$. Chọn đáp án B.',
        pedagogicalTip:
          'So sánh tất cả các giá trị ở dòng $y$ trên đoạn $[-1; 4]$ gồm $\\{-1; 6; -4; 2\\}$ để tìm giá trị lớn nhất bằng $6$ và nhỏ nhất bằng $-4$.',
        points: 0.25,
      },
      {
        id: 'd5-p1-q5',
        part: 'part1',
        number: 5,
        topic: 'Đường tiệm cận của đồ thị hàm số qua hình vẽ',
        prompt:
          'Cho hàm số $y = \\frac{ax + b}{cx + d}$ ($ad - bc \\neq 0; c \\neq 0$) có đồ thị như hình vẽ sau. Phương trình đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số lần lượt là:',
        tikzType: 'd5_q5_graph',
        options: [
          { key: 'A', content: '$x = 2$ và $y = -1$' },
          { key: 'B', content: '$x = -1$ và $y = 2$' },
          { key: 'C', content: '$x = 2$ và $y = 1$' },
          { key: 'D', content: '$x = -2$ và $y = -1$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Quan sát đồ thị ta thấy: Đường tiệm cận đứng là đường thẳng vuông góc với trục hoành đi qua điểm $(2; 0)$, có phương trình $x = 2$. Đường tiệm cận ngang là đường thẳng vuông góc với trục tung đi qua điểm $(0; -1)$, có phương trình $y = -1$. Chọn đáp án A.',
        pedagogicalTip:
          'Chú ý thứ tự câu hỏi: tiệm cận đứng ($x = 2$) viết trước, tiệm cận ngang ($y = -1$) viết sau.',
        points: 0.25,
      },
      {
        id: 'd5-p1-q6',
        part: 'part1',
        number: 6,
        topic: 'Nhận diện hàm số phân thức bậc nhất trên bậc nhất qua đồ thị',
        prompt: 'Đường cong trong hình vẽ bên là đồ thị của hàm số nào dưới đây?',
        tikzType: 'd5_q6_graph',
        options: [
          { key: 'A', content: '$y = \\frac{x - 2}{x + 1}$' },
          { key: 'B', content: '$y = \\frac{2x - 2}{x - 1}$' },
          { key: 'C', content: '$y = \\frac{2x - 2}{x + 1}$' },
          { key: 'D', content: '$y = \\frac{2x + 2}{x + 1}$' },
        ],
        correctAnswer: 'C',
        explanation:
          'Tiệm cận đứng của đồ thị là đường thẳng $x = -1$, tiệm cận ngang là đường thẳng $y = 2$. Đồ thị cắt trục tung tại điểm $(0; -2)$ vì khi $x = 0$ thì $y = \\frac{2(0) - 2}{0 + 1} = -2$. Đồ thị cắt trục hoành tại điểm $(1; 0)$ vì khi $y = 0$ thì $2x - 2 = 0 \\Leftrightarrow x = 1$. Vậy đường cong đã cho là đồ thị của hàm số $y = \\frac{2x - 2}{x + 1}$. Chọn đáp án C.',
        pedagogicalTip:
          'Kiểm tra nhanh bằng tiệm cận đứng $x = -1$, tiệm cận ngang $y = 2$, giao điểm với trục tung $Oy$ tại $(0; -2)$ và giao điểm với trục hoành $Ox$ tại $(1; 0)$.',
        points: 0.25,
      },
      {
        id: 'd5-p1-q7',
        part: 'part1',
        number: 7,
        topic: 'Nhận diện hàm số bậc ba qua đồ thị',
        prompt: 'Đường cong trong hình vẽ bên là đồ thị của hàm số nào dưới đây?',
        tikzType: 'd5_q7_graph',
        options: [
          { key: 'A', content: '$y = -x^3 + 3x^2$' },
          { key: 'B', content: '$y = x^3 - 3x^2$' },
          { key: 'C', content: '$y = x^3 + 3x^2$' },
          { key: 'D', content: '$y = -x^3 - 3x^2$' },
        ],
        correctAnswer: 'B',
        explanation:
          'Đồ thị có nhánh bên phải đi lên khi $x \\to +\\infty$, do đó hệ số của $x^3$ dương ($a > 0$), loại A và D. Đồ thị đạt cực đại tại $(0; 0)$ và đạt cực tiểu tại $(2; -4)$, đi qua $(1; -2)$ và $(3; 0)$. Thay $x = 2$ vào $y = x^3 - 3x^2$ được $y(2) = 2^3 - 3(2)^2 = 8 - 12 = -4$ (thỏa mãn). Vậy hàm số cần tìm là $y = x^3 - 3x^2$. Chọn đáp án B.',
        pedagogicalTip:
          'Nhánh phải đi lên $\\Rightarrow a > 0$; điểm cực tiểu tại $(2; -4)$ giúp phân biệt ngay $y = x^3 - 3x^2$ với $y = x^3 + 3x^2$.',
        points: 0.25,
      },
      {
        id: 'd5-p1-q8',
        part: 'part1',
        number: 8,
        topic: 'Giao điểm của đồ thị hàm số với trục tung',
        prompt:
          'Đồ thị hàm số $y = \\frac{3x - 10}{x + 2}$ cắt trục tung tại điểm có tung độ bằng bao nhiêu?',
        options: [
          { key: 'A', content: '$3$' },
          { key: 'B', content: '$-10$' },
          { key: 'C', content: '$5$' },
          { key: 'D', content: '$-5$' },
        ],
        correctAnswer: 'D',
        explanation:
          'Trục tung có phương trình $x = 0$. Thay $x = 0$ vào hàm số $y = \\frac{3x - 10}{x + 2}$, ta được $y = \\frac{3(0) - 10}{0 + 2} = -5$. Vậy đồ thị cắt trục tung tại điểm có tung độ bằng $-5$. Chọn đáp án D.',
        pedagogicalTip:
          'Giao điểm với trục tung $Oy$ luôn có hoành độ $x = 0$; giao điểm với trục hoành $Ox$ luôn có tung độ $y = 0$.',
        points: 0.25,
      },
      {
        id: 'd5-p1-q9',
        part: 'part1',
        number: 9,
        topic: 'Tính đơn điệu của hàm phân thức bậc hai trên bậc nhất',
        prompt:
          'Cho hàm số $y = \\frac{x^2 + 16}{x}$. Hàm số đã cho đồng biến trên khoảng nào dưới đây?',
        options: [
          { key: 'A', content: '$(4; +\\infty)$' },
          { key: 'B', content: '$(0; 4)$' },
          { key: 'C', content: '$(-4; 4)$' },
          { key: 'D', content: '$(-4; 0)$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Tập xác định $D = \\mathbb{R} \\setminus \\{0\\}$. Đạo hàm $y\' = \\frac{2x \\cdot x - (x^2 + 16)}{x^2} = \\frac{x^2 - 16}{x^2}$. Cho $y\' = 0 \\Leftrightarrow x^2 - 16 = 0 \\Leftrightarrow x = \\pm 4$. Ta có $y\' > 0$ khi $x \\in (-\\infty; -4) \\cup (4; +\\infty)$ và $y\' < 0$ khi $x \\in (-4; 0) \\cup (0; 4)$. Do đó hàm số đồng biến trên mỗi khoảng $(-\\infty; -4)$ và $(4; +\\infty)$. Chọn đáp án A.',
        pedagogicalTip:
          'Có thể viết lại $y = x + \\frac{16}{x} \\Rightarrow y\' = 1 - \\frac{16}{x^2} = \\frac{x^2 - 16}{x^2}$ để tính đạo hàm nhanh và chính xác hơn.',
        points: 0.25,
      },
      {
        id: 'd5-p1-q10',
        part: 'part1',
        number: 10,
        topic: 'Số điểm cực trị của hàm số qua bảng xét dấu đạo hàm',
        prompt:
          'Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ và có bảng xét dấu của đạo hàm như sau. Số điểm cực trị của hàm số đã cho là bao nhiêu?',
        tikzType: 'd5_q10_bxd',
        options: [
          { key: 'A', content: '$3$' },
          { key: 'B', content: '$1$' },
          { key: 'C', content: '$2$' },
          { key: 'D', content: '$0$' },
        ],
        correctAnswer: 'C',
        explanation:
          'Đạo hàm $f\'(x)$ đổi dấu từ dương sang âm khi đi qua $x = -2$ và đổi dấu từ âm sang dương khi đi qua $x = 4$. Khi đi qua điểm $x = 1$, đạo hàm $f\'(x)$ không đổi dấu (giữ nguyên dấu âm) nên $x = 1$ không phải là điểm cực trị. Vậy hàm số đã cho có đúng $2$ điểm cực trị. Chọn đáp án C.',
        pedagogicalTip:
          'Điểm cực trị chỉ xuất hiện tại điểm mà đạo hàm $f\'(x)$ đổi dấu khi đi qua điểm đó.',
        points: 0.25,
      },
      {
        id: 'd5-p1-q11',
        part: 'part1',
        number: 11,
        topic: 'Số đường tiệm cận ngang của đồ thị hàm số qua bảng biến thiên',
        prompt:
          'Cho hàm số $y = f(x)$ có bảng biến thiên như sau. Tổng số đường tiệm cận ngang của đồ thị hàm số đã cho là:',
        tikzType: 'd5_q11_bbt',
        options: [
          { key: 'A', content: '$1$' },
          { key: 'B', content: '$2$' },
          { key: 'C', content: '$0$' },
          { key: 'D', content: '$3$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Dựa vào bảng biến thiên của hàm số: $\\lim\\limits_{x \\to -\\infty} f(x) = 4$ và $\\lim\\limits_{x \\to +\\infty} f(x) = 4$. Cả hai giới hạn tại $-\\infty$ và $+\\infty$ đều bằng $4$ nên đồ thị hàm số chỉ có đúng $1$ đường tiệm cận ngang là đường thẳng $y = 4$. Chọn đáp án A.',
        pedagogicalTip:
          'Khi $\\lim\\limits_{x \\to -\\infty} f(x) = \\lim\\limits_{x \\to +\\infty} f(x) = y_0$ (cùng một giá trị hữu hạn), hai nhánh tiệm cận trùng nhau thành $1$ đường tiệm cận ngang duy nhất $y = y_0$.',
        points: 0.25,
      },
      {
        id: 'd5-p1-q12',
        part: 'part1',
        number: 12,
        topic: 'Đặc điểm đồ thị của hàm số phân thức bậc nhất trên bậc nhất',
        prompt:
          'Cho hàm số $y = \\frac{2x - 4}{x + 1}$. Đồ thị của hàm số đã cho có đặc điểm nào dưới đây?',
        options: [
          {
            key: 'A',
            content: 'Đồ thị nhận đường thẳng $x = 1$ làm tiệm cận đứng, $y = 2$ làm tiệm cận ngang.',
          },
          {
            key: 'B',
            content:
              'Đồ thị nhận đường thẳng $x = -1$ làm tiệm cận đứng, $y = 2$ làm tiệm cận ngang, cắt trục tung tại $(0; -4)$ và cắt trục hoành tại $(2; 0)$.',
          },
          {
            key: 'C',
            content: 'Đồ thị nhận đường thẳng $x = -1$ làm tiệm cận đứng, $y = -4$ làm tiệm cận ngang.',
          },
          {
            key: 'D',
            content: 'Đồ thị nhận đường thẳng $x = 2$ làm tiệm cận đứng, $y = -1$ làm tiệm cận ngang.',
          },
        ],
        correctAnswer: 'B',
        explanation:
          'Xét hàm số $y = \\frac{2x - 4}{x + 1}$ có tập xác định $D = \\mathbb{R} \\setminus \\{-1\\}$. Tiệm cận đứng là đường thẳng $x = -1$, tiệm cận ngang là đường thẳng $y = 2$. Giao điểm với trục tung ($x = 0$) là $(0; -4)$; giao điểm với trục hoành ($y = 0$) là $(2; 0)$. Chọn đáp án B.',
        pedagogicalTip:
          'Nghiệm của mẫu số $x + 1 = 0 \\Leftrightarrow x = -1$ cho tiệm cận đứng; tỉ số hệ số bậc nhất $\\frac{2}{1} = 2$ cho tiệm cận ngang $y = 2$.',
        points: 0.25,
      },
    ],
    part2: [
      {
        id: 'd5-p2-q1',
        part: 'part2',
        number: 1,
        topic: 'Phân tích toàn diện hàm số qua bảng biến thiên',
        prompt:
          'Cho hàm số $y = f(x)$ xác định trên $\\mathbb{R} \\setminus \\{1\\}$ và có bảng biến thiên như sau. Xét tính đúng sai của các khẳng định sau:',
        tikzType: 'd5_p2_q1_bbt',
        statements: [
          {
            id: 'a',
            label: 'a',
            statement: 'Hàm số đồng biến trên khoảng $(-\\infty; -1)$.',
            isCorrect: true,
            explanation:
              'Đúng. Từ bảng biến thiên, trên khoảng $(-\\infty; -1)$ ta có $f\'(x) > 0$, nên hàm số đồng biến trên khoảng $(-\\infty; -1)$.',
          },
          {
            id: 'b',
            label: 'b',
            statement: 'Giá trị cực tiểu của hàm số bằng $3$.',
            isCorrect: false,
            explanation:
              'Sai. Dựa vào bảng biến thiên, hàm số đạt cực tiểu tại điểm $x = 3$ và giá trị cực tiểu của hàm số là $y_{\\text{CT}} = f(3) = 2$ (chứ không phải bằng $3$).',
          },
          {
            id: 'c',
            label: 'c',
            statement: 'Đường tiệm cận đứng của đồ thị hàm số có phương trình $x = 1$.',
            isCorrect: true,
            explanation:
              'Đúng. Ta có $\\lim\\limits_{x \\to 1^-} f(x) = -\\infty$ và $\\lim\\limits_{x \\to 1^+} f(x) = +\\infty$, do đó đường thẳng $x = 1$ là tiệm cận đứng của đồ thị hàm số.',
          },
          {
            id: 'd',
            label: 'd',
            statement: 'Giá trị lớn nhất của hàm số trên đoạn $[-3; 0]$ bằng $-2$.',
            isCorrect: true,
            explanation:
              'Đúng. Trên đoạn $[-3; 0] \\subset (-\\infty; 1)$, hàm số liên tục và đạt cực đại tại $x = -1$ với $f(-1) = -2$ (tăng từ $f(-3)$ lên $f(-1) = -2$ rồi giảm xuống $f(0)$). Do đó $\\max\\limits_{[-3; 0]} f(x) = f(-1) = -2$.',
          },
        ],
        pedagogicalTip:
          'Cần phân biệt rõ "điểm cực tiểu của hàm số" ($x = 3$) và "giá trị cực tiểu của hàm số" ($y_{\\text{CT}} = 2$).',
      },
      {
        id: 'd5-p2-q2',
        part: 'part2',
        number: 2,
        topic: 'Khảo sát đồ thị hàm số bậc ba',
        prompt:
          'Cho hàm số bậc ba $y = f(x) = ax^3 + bx^2 + cx + d$ ($a \\neq 0$) có đồ thị như hình vẽ dưới đây. Xét tính đúng sai của các khẳng định sau:',
        tikzType: 'd5_p2_q2_graph',
        statements: [
          {
            id: 'a',
            label: 'a',
            statement: 'Hệ số $a < 0$.',
            isCorrect: true,
            explanation:
              'Đúng. Nhánh ngoài cùng bên phải của đồ thị đi xuống khi $x \\to +\\infty$, suy ra hệ số $a < 0$.',
          },
          {
            id: 'b',
            label: 'b',
            statement: 'Hàm số đồng biến trên khoảng $(0; 2)$.',
            isCorrect: true,
            explanation:
              'Đúng. Trên khoảng $(0; 2)$, đồ thị hàm số đi lên từ điểm $(0; 0)$ đến điểm $(2; 4)$, do đó hàm số đồng biến trên khoảng $(0; 2)$.',
          },
          {
            id: 'c',
            label: 'c',
            statement: 'Điểm cực đại của đồ thị hàm số là $(4; 2)$.',
            isCorrect: false,
            explanation:
              'Sai. Quan sát đồ thị, điểm cực đại của đồ thị hàm số có tọa độ là $(2; 4)$ chứ không phải $(4; 2)$.',
          },
          {
            id: 'd',
            label: 'd',
            statement: 'Tọa độ tâm đối xứng của đồ thị hàm số là $I(1; 2)$.',
            isCorrect: true,
            explanation:
              'Đúng. Tâm đối xứng của đồ thị hàm bậc ba là trung điểm của đoạn thẳng nối điểm cực tiểu $O(0; 0)$ và điểm cực đại $A(2; 4)$, có tọa độ $I\\left(\\frac{0 + 2}{2}; \\frac{0 + 4}{2}\\right) = I(1; 2)$.',
          },
        ],
        pedagogicalTip:
          'Tâm đối xứng của đồ thị hàm số bậc ba luôn là điểm uốn và cũng là trung điểm của đoạn thẳng nối hai điểm cực trị.',
      },
      {
        id: 'd5-p2-q3',
        part: 'part2',
        number: 3,
        topic: 'Ứng dụng đạo hàm vào bài toán tối ưu lợi nhuận thực tế',
        prompt:
          'Một công ty công nghệ theo dõi và nhận thấy rằng lợi nhuận $P(t)$ (tính bằng triệu đồng) của một ứng dụng mới sau $t$ tháng kể từ khi phát hành được mô hình hóa bởi hàm số $P(t) = -t^3 + 9t^2 + 48t$ với $t \\in [0; 10]$. Xét tính đúng sai của các khẳng định sau:',
        statements: [
          {
            id: 'a',
            label: 'a',
            statement: 'Lợi nhuận của ứng dụng sau $2$ tháng kể từ khi phát hành là $124$ triệu đồng.',
            isCorrect: true,
            explanation:
              'Đúng. Thay $t = 2$ vào hàm lợi nhuận: $P(2) = -2^3 + 9 \\cdot 2^2 + 48 \\cdot 2 = -8 + 36 + 96 = 124$ (triệu đồng).',
          },
          {
            id: 'b',
            label: 'b',
            statement: 'Tốc độ thay đổi lợi nhuận tại thời điểm $t$ là hàm số $P\'(t) = -3t^2 + 18t + 48$.',
            isCorrect: true,
            explanation:
              'Đúng. Đạo hàm của hàm lợi nhuận theo thời gian $t$ là $P\'(t) = (-t^3 + 9t^2 + 48t)\' = -3t^2 + 18t + 48$.',
          },
          {
            id: 'c',
            label: 'c',
            statement: 'Lợi nhuận của ứng dụng tăng liên tục trong suốt $10$ tháng đầu.',
            isCorrect: false,
            explanation:
              'Sai. Giải phương trình $P\'(t) = 0 \\Leftrightarrow -3t^2 + 18t + 48 = 0 \\Leftrightarrow -3(t - 8)(t + 2) = 0 \\Leftrightarrow t = 8$ (vì $t \\in [0; 10]$). Trên khoảng $(8; 10)$, ta có $P\'(t) < 0$ nên lợi nhuận giảm từ tháng thứ $8$ đến tháng thứ $10$.',
          },
          {
            id: 'd',
            label: 'd',
            statement: 'Lợi nhuận của ứng dụng đạt giá trị lớn nhất vào tháng thứ $8$ với mức $448$ triệu đồng.',
            isCorrect: true,
            explanation:
              'Đúng. Trên đoạn $[0; 10]$, hàm số $P(t)$ đồng biến trên $(0; 8)$ và nghịch biến trên $(8; 10)$, do đó đạt giá trị lớn nhất tại $t = 8$ (tháng thứ $8$) với $P(8) = -8^3 + 9 \\cdot 8^2 + 48 \\cdot 8 = -512 + 576 + 384 = 448$ triệu đồng.',
          },
        ],
        pedagogicalTip:
          'Xét dấu đạo hàm $P\'(t) = -3(t - 8)(t + 2)$ trên đoạn $[0; 10]$ giúp thấy ngay lợi nhuận tăng trong $8$ tháng đầu và giảm trong $2$ tháng cuối.',
      },
    ],
    part3: [
      {
        id: 'd5-p3-q1',
        part: 'part3',
        number: 1,
        topic: 'Tìm số điểm cực trị của hàm số thông qua biểu thức đạo hàm',
        prompt:
          'Cho hàm số $y = f(x)$ liên tục và có đạo hàm trên $\\mathbb{R}$, biết đạo hàm có công thức $f\'(x) = (x - 1)^2(x + 4)^3(x - 3)^5(x + 1)^4$. Hỏi hàm số đã cho có bao nhiêu điểm cực trị?',
        acceptableAnswers: ['2'],
        explanation:
          'Phương trình $f\'(x) = 0$ có $4$ nghiệm phân biệt là $x = 1$ (bội chẵn $2$), $x = -4$ (bội lẻ $3$), $x = 3$ (bội lẻ $5$) và $x = -1$ (bội chẵn $4$). Đạo hàm $f\'(x)$ chỉ đổi dấu khi đi qua các nghiệm bội lẻ là $x = -4$ và $x = 3$. Vậy hàm số đã cho có $2$ điểm cực trị.',
        pedagogicalTip:
          'Chỉ các nghiệm bội lẻ của phương trình $f\'(x) = 0$ mới làm đạo hàm đổi dấu và tạo thành điểm cực trị.',
        points: 0.5,
      },
      {
        id: 'd5-p3-q2',
        part: 'part3',
        number: 2,
        topic: 'Ứng dụng cực trị hàm số trong bài toán sinh học',
        prompt:
          'Một quần thể nấm men trong bình nuôi cấy sinh học được bổ sung dưỡng chất để phát triển. Sau $t$ giờ ($t \\ge 0$), số lượng tế bào nấm men trong bình được mô hình hóa theo hàm số $N(t) = 1200 + 27t^2 - t^3$. Hỏi sau bao nhiêu giờ kể từ khi bắt đầu nuôi cấy thì số lượng nấm men đạt cực đại trước khi suy giảm?',
        acceptableAnswers: ['18'],
        unit: 'giờ',
        explanation:
          'Xét hàm số $N(t) = 1200 + 27t^2 - t^3$ với $t \\ge 0$. Ta có đạo hàm $N\'(t) = 54t - 3t^2 = 3t(18 - t)$. Cho $N\'(t) = 0 \\Leftrightarrow t = 0$ hoặc $t = 18$. Vì $N\'(t) > 0$ trên $(0; 18)$ và $N\'(t) < 0$ trên $(18; +\\infty)$, nên số lượng nấm men đạt cực đại tại $t = 18$ giờ.',
        pedagogicalTip:
          'Với $t > 0$, giải phương trình $N\'(t) = 54t - 3t^2 = 0$ cho nghiệm duy nhất $t = 18$ (giờ).',
        points: 0.5,
      },
      {
        id: 'd5-p3-q3',
        part: 'part3',
        number: 3,
        topic: 'Xác định đường tiệm cận xiên của đồ thị hàm phân thức',
        prompt:
          'Cho hàm số $y = f(x) = \\frac{x^2 - 3x + 5}{x - 1}$. Đồ thị hàm số có đường tiệm cận xiên là đường thẳng $y = ax + b$. Tính giá trị của biểu thức $P = 3a + 2b$.',
        acceptableAnswers: ['-1'],
        explanation:
          'Thực hiện phép chia đa thức: $y = \\frac{x^2 - 3x + 5}{x - 1} = \\frac{(x - 1)(x - 2) + 3}{x - 1} = x - 2 + \\frac{3}{x - 1}$. Vì $\\lim\\limits_{x \\to \\pm\\infty} \\left[y - (x - 2)\\right] = \\lim\\limits_{x \\to \\pm\\infty} \\frac{3}{x - 1} = 0$, nên đường tiệm cận xiên là $y = x - 2$. Suy ra $a = 1, b = -2$. Vậy $P = 3a + 2b = 3(1) + 2(-2) = -1$.',
        pedagogicalTip:
          'Chia tử thức $x^2 - 3x + 5$ cho mẫu thức $x - 1$ được phần nguyên bậc nhất là $x - 2$, đó chính là vế phải của phương trình tiệm cận xiên.',
        points: 0.5,
      },
      {
        id: 'd5-p3-q4',
        part: 'part3',
        number: 4,
        topic: 'Ứng dụng đạo hàm trong bài toán tốc độ tăng dân số',
        prompt:
          'Dân số của một khu đô thị công nghệ cao sau $t$ năm kể từ đầu năm $2020$ được ước lượng theo công thức $f(t) = \\frac{35t + 20}{t + 2}$ ($t \\ge 0$), trong đó $f(t)$ tính bằng nghìn người. Đạo hàm $f\'(t)$ biểu thị tốc độ tăng dân số của khu đô thị (đơn vị: nghìn người/năm). Hỏi vào năm nào thì tốc độ tăng dân số của khu đô thị đạt mức $0{,}5$ nghìn người/năm?',
        acceptableAnswers: ['2028'],
        explanation:
          'Tốc độ tăng dân số tại thời điểm $t$ là $f\'(t) = \\frac{35 \\cdot 2 - 1 \\cdot 20}{(t + 2)^2} = \\frac{50}{(t + 2)^2}$. Theo giả thiết: $f\'(t) = 0{,}5 \\Leftrightarrow \\frac{50}{(t + 2)^2} = 0{,}5 \\Leftrightarrow (t + 2)^2 = 100 \\Leftrightarrow t + 2 = 10$ (do $t \\ge 0$), suy ra $t = 8$ năm. Tính từ đầu năm $2020$, thời điểm cần tìm là năm $2020 + 8 = 2028$.',
        pedagogicalTip:
          'Sau khi giải phương trình $(t + 2)^2 = 100$ tìm được $t = 8$ năm, nhớ cộng với mốc năm $2020$ để ra năm $2028$.',
        points: 0.5,
      },
    ],
    part4: [
      {
        id: 'd5-p4-q1',
        part: 'part4',
        number: 1,
        topic: 'Tự luận Câu 1 (1,0 điểm): Xét tính đơn điệu và tìm cực trị của hàm số bậc ba',
        problemStatement:
          'Cho hàm số $y = -\\frac{1}{3}x^3 + x^2 + 3x - 2$. Xét tính đơn điệu và tìm các điểm cực trị của hàm số đã cho.',
        conclusionTarget:
          'Hàm số đồng biến trên $(-1; 3)$, nghịch biến trên $(-\\infty; -1)$ và $(3; +\\infty)$; đạt cực tiểu tại $x = -1\\ \\left(y_{\\text{CT}} = -\\frac{11}{3}\\right)$ và đạt cực đại tại $x = 3\\ (y_{\\text{CĐ}} = 7)$.',
        tikzType: 'd5_p4_q1_bbt',
        steps: [
          {
            id: 'd5-p4-q1-s1',
            originalIndex: 1,
            roleDescription: 'Tìm tập xác định và tính đạo hàm y\'',
            content:
              'Tập xác định của hàm số là $D = \\mathbb{R}$. Đạo hàm: $y\' = -x^2 + 2x + 3$.',
          },
          {
            id: 'd5-p4-q1-s2',
            originalIndex: 2,
            roleDescription: 'Tìm nghiệm của phương trình y\' = 0 và tính giá trị tương ứng',
            content:
              'Cho $y\' = 0 \\Leftrightarrow -x^2 + 2x + 3 = 0 \\Leftrightarrow x = -1$ hoặc $x = 3$. Với $x = -1 \\Rightarrow y(-1) = -\\frac{11}{3}$; với $x = 3 \\Rightarrow y(3) = 7$.',
          },
          {
            id: 'd5-p4-q1-s3',
            originalIndex: 3,
            roleDescription: 'Xét dấu đạo hàm và kết luận các khoảng đơn điệu',
            content:
              'Lập bảng biến thiên: $y\' > 0$ trên khoảng $(-1; 3)$; $y\' < 0$ trên các khoảng $(-\\infty; -1)$ và $(3; +\\infty)$. Vậy hàm số đồng biến trên khoảng $(-1; 3)$, nghịch biến trên các khoảng $(-\\infty; -1)$ và $(3; +\\infty)$.',
          },
          {
            id: 'd5-p4-q1-s4',
            originalIndex: 4,
            roleDescription: 'Kết luận điểm cực tiểu và điểm cực đại của hàm số',
            content:
              'Hàm số đạt cực tiểu tại $x = -1$, giá trị cực tiểu $y_{\\text{CT}} = -\\frac{11}{3}$; hàm số đạt cực đại tại $x = 3$, giá trị cực đại $y_{\\text{CĐ}} = 7$.',
          },
        ],
        pedagogicalTip:
          'Khi kết luận tính đơn điệu trên hai khoảng rời nhau $(-\\infty; -1)$ và $(3; +\\infty)$, dùng liên từ "và" hoặc dấu chấm phẩy, không dùng ký hiệu hợp $\\cup$.',
        teacherAnalysis:
          'Câu 1 kiểm tra quy trình chuẩn mực xét tính đơn điệu và tìm cực trị của hàm đa thức bậc ba thông qua đạo hàm và bảng biến thiên.',
        points: 1.0,
      },
      {
        id: 'd5-p4-q2',
        part: 'part4',
        number: 2,
        topic: 'Tự luận Câu 2 (0,5 điểm): Tìm GTLN và GTNN của hàm phân thức trên đoạn',
        problemStatement:
          'Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số $y = \\frac{3x - 1}{x + 2}$ trên đoạn $[0; 3]$.',
        conclusionTarget:
          '$\\max\\limits_{[0; 3]} y = y(3) = \\frac{8}{5}$ và $\\min\\limits_{[0; 3]} y = y(0) = -\\frac{1}{2}$.',
        steps: [
          {
            id: 'd5-p4-q2-s1',
            originalIndex: 1,
            roleDescription: 'Kiểm tra tính xác định, liên tục của hàm số trên đoạn [0; 3]',
            content:
              'Hàm số $y = \\frac{3x - 1}{x + 2}$ có tập xác định $D = \\mathbb{R} \\setminus \\{-2\\}$. Do $-2 \\notin [0; 3]$ nên hàm số xác định và liên tục trên đoạn $[0; 3]$.',
          },
          {
            id: 'd5-p4-q2-s2',
            originalIndex: 2,
            roleDescription: 'Tính đạo hàm và xét tính đơn điệu trên đoạn [0; 3]',
            content:
              'Ta có đạo hàm: $y\' = \\frac{3 \\cdot 2 - 1 \\cdot (-1)}{(x + 2)^2} = \\frac{7}{(x + 2)^2} > 0, \\forall x \\in [0; 3]$. Suy ra hàm số luôn đồng biến trên đoạn $[0; 3]$.',
          },
          {
            id: 'd5-p4-q2-s3',
            originalIndex: 3,
            roleDescription: 'Tính giá trị của hàm số tại hai đầu mút x = 0 và x = 3',
            content:
              'Tính giá trị hàm số tại hai đầu mút của đoạn $[0; 3]$: Tại $x = 0$, ta có $y(0) = \\frac{3(0) - 1}{0 + 2} = -\\frac{1}{2}$. Tại $x = 3$, ta có $y(3) = \\frac{3(3) - 1}{3 + 2} = \\frac{8}{5}$.',
          },
          {
            id: 'd5-p4-q2-s4',
            originalIndex: 4,
            roleDescription: 'Kết luận giá trị lớn nhất và giá trị nhỏ nhất trên đoạn [0; 3]',
            content:
              'Vậy trên đoạn $[0; 3]$, giá trị lớn nhất của hàm số là $\\max\\limits_{[0; 3]} y = y(3) = \\frac{8}{5}$ (đạt tại $x = 3$) và giá trị nhỏ nhất của hàm số là $\\min\\limits_{[0; 3]} y = y(0) = -\\frac{1}{2}$ (đạt tại $x = 0$).',
          },
        ],
        pedagogicalTip:
          'Với hàm phân thức bậc nhất trên bậc nhất liên tục trên đoạn $[a; b]$, đạo hàm luôn mang một dấu không đổi nên GTLN và GTNN luôn đạt được tại hai đầu mút $a, b$.',
        teacherAnalysis:
          'Học sinh cần nêu rõ hàm số liên tục trên đoạn $[0; 3]$ (vì điểm gián đoạn $x = -2 \\notin [0; 3]$) trước khi sử dụng tính đơn điệu để kết luận GTLN, GTNN.',
        points: 0.5,
      },
      {
        id: 'd5-p4-q3',
        part: 'part4',
        number: 3,
        topic: 'Tự luận Câu 3 (0,5 điểm): Bài toán tối ưu chi phí trung bình trong sản xuất',
        problemStatement:
          'Một xưởng sản xuất linh kiện điện tử ước tính hàm tổng chi phí để sản xuất $x$ linh kiện ($x > 0$) mỗi ngày là $C(x) = x^2 + 60x + 6400$ (nghìn đồng). Chi phí trung bình để sản xuất một linh kiện được cho bởi công thức $\\overline{C}(x) = \\frac{C(x)}{x}$. Hỏi xưởng cần sản xuất bao nhiêu linh kiện mỗi ngày để chi phí trung bình cho mỗi linh kiện là thấp nhất?',
        conclusionTarget:
          'Xưởng cần sản xuất $x = 80$ linh kiện mỗi ngày để chi phí trung bình thấp nhất bằng $220$ nghìn đồng/linh kiện.',
        steps: [
          {
            id: 'd5-p4-q3-s1',
            originalIndex: 1,
            roleDescription: 'Thiết lập hàm chi phí trung bình C_tb(x)',
            content:
              'Với $x > 0$, hàm chi phí trung bình để sản xuất một linh kiện là: $\\overline{C}(x) = \\frac{C(x)}{x} = \\frac{x^2 + 60x + 6400}{x} = x + 60 + \\frac{6400}{x}$ (nghìn đồng).',
          },
          {
            id: 'd5-p4-q3-s2',
            originalIndex: 2,
            roleDescription: 'Tính đạo hàm của hàm chi phí trung bình và tìm điểm tới hạn',
            content:
              'Tính đạo hàm trên khoảng $(0; +\\infty)$: $\\overline{C}\'(x) = 1 - \\frac{6400}{x^2} = \\frac{x^2 - 6400}{x^2}$. Cho $\\overline{C}\'(x) = 0 \\Leftrightarrow x^2 = 6400 \\Leftrightarrow x = 80$ (do $x > 0$).',
          },
          {
            id: 'd5-p4-q3-s3',
            originalIndex: 3,
            roleDescription: 'Xét sự biến thiên của hàm chi phí trung bình trên khoảng (0; +∞)',
            content:
              'Xét dấu $\\overline{C}\'(x)$ trên khoảng $(0; +\\infty)$: $\\overline{C}\'(x) < 0$ khi $x \\in (0; 80)$ và $\\overline{C}\'(x) > 0$ khi $x \\in (80; +\\infty)$. Suy ra hàm số $\\overline{C}(x)$ nghịch biến trên $(0; 80)$ và đồng biến trên $(80; +\\infty)$.',
          },
          {
            id: 'd5-p4-q3-s4',
            originalIndex: 4,
            roleDescription: 'Kết luận số lượng linh kiện tối ưu và chi phí trung bình thấp nhất',
            content:
              'Do đó, hàm số $\\overline{C}(x)$ đạt giá trị nhỏ nhất tại $x = 80$ với $\\overline{C}(80) = 80 + 60 + \\frac{6400}{80} = 220$ (nghìn đồng). Vậy xưởng cần sản xuất $80$ linh kiện mỗi ngày để chi phí trung bình cho mỗi linh kiện là thấp nhất.',
          },
        ],
        pedagogicalTip:
          'Có thể kiểm tra nhanh bằng bất đẳng thức Cauchy cho hai số dương $x$ và $\\frac{6400}{x}$: $\\overline{C}(x) = x + \\frac{6400}{x} + 60 \\ge 2\\sqrt{x \\cdot \\frac{6400}{x}} + 60 = 220$, dấu bằng xảy ra khi $x = 80$.',
        teacherAnalysis:
          'Đây là bài toán tối ưu kinh tế điển hình vận dụng đạo hàm hàm phân thức hữu tỉ trên khoảng $(0; +\\infty)$.',
        points: 0.5,
      },
    ],
  },
  {
    id: 'de-so-06',
    title: 'Đề ôn GK1 06',
    subtitle: 'Ôn 12 - Đề ôn GK1 06: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số (GV Nguyễn Ngọc Thanh)',
    grade: 12,
    durationMinutes: 90,
    totalPoints: 10,
    description:
      'Đề ôn tập Toán 12 - Đề ôn GK1 06 (GV Nguyễn Ngọc Thanh) tương tự Đề ôn GK1 01 gồm 22 câu hỏi chuẩn cấu trúc 4 phần: Phần I (12 câu trắc nghiệm nhiều lựa chọn từ Câu 1 đến Câu 12 - 3,0đ), Phần II (3 câu trắc nghiệm Đúng/Sai từ Câu 1 đến Câu 3 - 3,0đ), Phần III (4 câu trả lời ngắn từ Câu 1 đến Câu 4 - 2,0đ), Phần IV (3 câu tự luận từ Câu 1 đến Câu 3 - 2,0đ).',
    part1: [
      {
        id: 'd6-p1-q1',
        part: 'part1',
        number: 1,
        topic: 'Tính đơn điệu của hàm số qua bảng biến thiên',
        prompt:
          'Cho hàm số $y = f(x)$ có bảng biến thiên sau. Hàm số đã cho đồng biến trên khoảng nào dưới đây?',
        tikzType: 'd6_q1_bbt',
        options: [
          { key: 'A', content: '$(-\\infty; -2)$' },
          { key: 'B', content: '$(-2; 1)$' },
          { key: 'C', content: '$(-3; 4)$' },
          { key: 'D', content: '$(1; +\\infty)$' },
        ],
        correctAnswer: 'B',
        explanation:
          'Dựa vào bảng biến thiên, ta thấy đạo hàm $f\'(x) > 0$ trên khoảng $(-2; 1)$. Do đó, hàm số đã cho đồng biến trên khoảng $(-2; 1)$.',
        pedagogicalTip:
          'Quan sát dòng dấu của đạo hàm $f\'(x)$ và chiều mũi tên đi lên trên bảng biến thiên: khoảng đồng biến đọc trên dòng biến $x$ là $(-2; 1)$, tránh nhầm với khoảng giá trị $(-3; 4)$ của $f(x)$.',
        points: 0.25,
      },
      {
        id: 'd6-p1-q2',
        part: 'part1',
        number: 2,
        topic: 'Tính đơn điệu của hàm số qua đồ thị',
        prompt: 'Cho hàm số $y = f(x)$ có đồ thị như hình bên. Mệnh đề nào sau đây đúng?',
        tikzType: 'd6_q2_graph',
        options: [
          { key: 'A', content: 'Hàm số đồng biến trên khoảng $(-\\infty; -1)$.' },
          { key: 'B', content: 'Hàm số nghịch biến trên khoảng $(-1; 2)$.' },
          { key: 'C', content: 'Hàm số đồng biến trên khoảng $(-1; 2)$.' },
          { key: 'D', content: 'Hàm số đồng biến trên khoảng $(2; +\\infty)$.' },
        ],
        correctAnswer: 'C',
        explanation:
          'Quan sát đồ thị từ trái sang phải, trên khoảng $(-1; 2)$ đồ thị hàm số đi lên (tung độ tăng từ $-2$ lên $3$), do đó hàm số đồng biến trên khoảng $(-1; 2)$.',
        pedagogicalTip:
          'Khi đọc đồ thị theo chiều tăng của hoành độ $x$, nhánh đồ thị đi lên ứng với khoảng đồng biến $(-1; 2)$, hai nhánh đi xuống ứng với các khoảng nghịch biến $(-\\infty; -1)$ và $(2; +\\infty)$.',
        points: 0.25,
      },
      {
        id: 'd6-p1-q3',
        part: 'part1',
        number: 3,
        topic: 'Cực trị của đồ thị hàm số',
        prompt:
          'Cho hàm số $y = f(x)$ có đồ thị là đường cong như hình bên. Điểm cực đại của đồ thị hàm số là:',
        tikzType: 'd6_q3_graph',
        options: [
          { key: 'A', content: '$x = -1$' },
          { key: 'B', content: '$y = 4$' },
          { key: 'C', content: '$(4; -1)$' },
          { key: 'D', content: '$(-1; 4)$' },
        ],
        correctAnswer: 'D',
        explanation:
          'Dựa vào đồ thị, điểm cực đại của đồ thị hàm số có hoành độ $x = -1$ và tung độ $y = 4$. Vậy điểm cực đại của đồ thị hàm số là $(-1; 4)$.',
        pedagogicalTip:
          'Phân biệt rõ: "Điểm cực đại của hàm số" là $x = -1$; "Giá trị cực đại của hàm số" là $y = 4$; còn "Điểm cực đại của đồ thị hàm số" là điểm có tọa độ $(-1; 4)$.',
        points: 0.25,
      },
      {
        id: 'd6-p1-q4',
        part: 'part1',
        number: 4,
        topic: 'Giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên đoạn',
        prompt:
          'Cho hàm số $y = f(x)$ liên tục và có đồ thị trên đoạn $[-1; 4]$ như hình vẽ. Giá trị nhỏ nhất của hàm số trên đoạn $[-1; 4]$ bằng:',
        tikzType: 'd6_q4_graph',
        options: [
          { key: 'A', content: '$-4$' },
          { key: 'B', content: '$5$' },
          { key: 'C', content: '$-1$' },
          { key: 'D', content: '$3$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Dựa vào đồ thị hàm số trên đoạn $[-1; 4]$, điểm thấp nhất của đồ thị là $(3; -4)$ có tung độ bằng $-4$. Do đó $\\min\\limits_{[-1; 4]} f(x) = -4$.',
        pedagogicalTip:
          'Giá trị nhỏ nhất của hàm số trên đoạn $[-1; 4]$ là tung độ $y$ của điểm thấp nhất trên đồ thị (bằng $-4$), không phải hoành độ $x = 3$.',
        points: 0.25,
      },
      {
        id: 'd6-p1-q5',
        part: 'part1',
        number: 5,
        topic: 'Đường tiệm cận của đồ thị hàm số',
        prompt:
          'Cho hàm số $y = \\frac{ax + b}{cx + d}$ ($ad - bc \\neq 0, x \\neq -\\frac{d}{c}$) có đồ thị như hình vẽ. Tiệm cận ngang của đồ thị hàm số là:',
        tikzType: 'd6_q5_graph',
        options: [
          { key: 'A', content: '$x = 2$' },
          { key: 'B', content: '$y = 2$' },
          { key: 'C', content: '$y = -1$' },
          { key: 'D', content: '$x = -1$' },
        ],
        correctAnswer: 'C',
        explanation:
          'Dựa vào hình vẽ, đường thẳng nằm ngang mà đồ thị tiến sát khi $x \\to \\pm\\infty$ cắt trục tung tại $-1$, nên đường tiệm cận ngang của đồ thị hàm số là $y = -1$.',
        pedagogicalTip:
          'Đường tiệm cận ngang có phương trình dạng $y = y_0$ (đường nét đứt nằm ngang $y = -1$), còn đường tiệm cận đứng có phương trình dạng $x = x_0$ (đường nét đứt thẳng đứng $x = 2$).',
        points: 0.25,
      },
      {
        id: 'd6-p1-q6',
        part: 'part1',
        number: 6,
        topic: 'Nhận diện đồ thị hàm số bậc ba',
        prompt:
          'Cho đồ thị hàm số $y = f(x)$ như hình bên. Đồ thị trên là đồ thị của hàm số nào dưới đây?',
        tikzType: 'd6_q6_graph',
        options: [
          { key: 'A', content: '$y = \\frac{x + 1}{x - 1}$' },
          { key: 'B', content: '$y = x^3 - 3x^2 - 1$' },
          { key: 'C', content: '$y = -x^4 + 2x^2 - 1$' },
          { key: 'D', content: '$y = -x^3 + 3x^2 - 1$' },
        ],
        correctAnswer: 'D',
        explanation:
          'Đồ thị có dạng của hàm số bậc ba với nhánh cuối bên phải đi xuống khi $x \\to +\\infty$ nên hệ số $a < 0$ (loại A, B, C). Mặt khác, đồ thị cắt trục tung tại $(0; -1)$, đạt cực tiểu tại $(0; -1)$, đi qua điểm uốn $(1; 1)$ và đạt cực đại tại $(2; 3)$. Hàm số $y = -x^3 + 3x^2 - 1$ thỏa mãn hoàn toàn.',
        pedagogicalTip:
          'Nhánh cuối bên phải của đồ thị hàm bậc ba đi xuống ứng với hệ số $a < 0$; kiểm tra thêm tọa độ hai điểm cực trị $(0; -1)$ và $(2; 3)$ để xác định chính xác hàm số.',
        points: 0.25,
      },
      {
        id: 'd6-p1-q7',
        part: 'part1',
        number: 7,
        topic: 'Nhận diện đồ thị hàm phân thức bậc nhất trên bậc nhất',
        prompt: 'Cho đồ thị hàm số như hình dưới. Đây là đồ thị của hàm số nào?',
        tikzType: 'd6_q7_graph',
        options: [
          { key: 'A', content: '$y = \\frac{x - 2}{x + 1}$' },
          { key: 'B', content: '$y = \\frac{2x + 2}{x - 1}$' },
          { key: 'C', content: '$y = \\frac{2x - 2}{x + 1}$' },
          { key: 'D', content: '$y = \\frac{2x - 1}{x + 1}$' },
        ],
        correctAnswer: 'C',
        explanation:
          'Quan sát hình vẽ, đồ thị hàm số có tiệm cận đứng là $x = -1$, tiệm cận ngang là $y = 2$. Đồ thị cắt trục tung tại điểm $(0; -2)$ và cắt trục hoành tại điểm $(1; 0)$. Xét hàm số $y = \\frac{2x - 2}{x + 1}$ có TCĐ $x = -1$, TCN $y = 2$; khi $x = 0 \\Rightarrow y = -2$; khi $y = 0 \\Rightarrow x = 1$. Do đó đáp án đúng là C.',
        pedagogicalTip:
          'Với đồ thị hàm phân thức $y = \\frac{ax+b}{cx+d}$, kiểm tra lần lượt: (1) TCĐ $x = -d/c$, (2) TCN $y = a/c$, (3) Giao điểm với $Oy$ và $Ox$.',
        points: 0.25,
      },
      {
        id: 'd6-p1-q8',
        part: 'part1',
        number: 8,
        topic: 'Giao điểm hai đường tiệm cận của đồ thị hàm số',
        prompt:
          'Giao điểm của hai đường tiệm cận của đồ thị hàm số $y = \\frac{-3x + 2}{x + 1}$ có tọa độ là:',
        options: [
          { key: 'A', content: '$(1; -3)$' },
          { key: 'B', content: '$(-1; 3)$' },
          { key: 'C', content: '$(-3; -1)$' },
          { key: 'D', content: '$(-1; -3)$' },
        ],
        correctAnswer: 'D',
        explanation:
          'Đồ thị hàm số có đường tiệm cận đứng là $x = -1$ và đường tiệm cận ngang là $y = -3$. Do đó giao điểm của hai đường tiệm cận có tọa độ là $I(-1; -3)$.',
        pedagogicalTip:
          'Tọa độ giao điểm của hai đường tiệm cận là $(x_0; y_0)$ với $x_0 = -1$ (nghiệm mẫu số) và $y_0 = -3$ (tỉ số hệ số của $x$).',
        points: 0.25,
      },
      {
        id: 'd6-p1-q9',
        part: 'part1',
        number: 9,
        topic: 'Tính đơn điệu của hàm số qua đồ thị trên hệ trục tọa độ',
        prompt: 'Cho hàm số $y = f(x)$ có đồ thị như hình dưới. Mệnh đề nào sau đây đúng?',
        tikzType: 'd6_q9_graph',
        options: [
          { key: 'A', content: 'Hàm số đồng biến trong khoảng $(-\\infty; -1)$.' },
          { key: 'B', content: 'Hàm số đồng biến trong khoảng $(0; 1)$.' },
          { key: 'C', content: 'Hàm số nghịch biến trong khoảng $(0; 1)$.' },
          { key: 'D', content: 'Hàm số nghịch biến trong khoảng $(1; +\\infty)$.' },
        ],
        correctAnswer: 'C',
        explanation:
          'Quan sát đồ thị hàm số từ trái sang phải, trên khoảng $(0; 1)$ đường cong đi xuống (tung độ giảm từ $0$ xuống $-1$), do đó hàm số nghịch biến trong khoảng $(0; 1)$.',
        pedagogicalTip:
          'Đồ thị hàm số đi lên trên các khoảng $(-1; 0)$ và $(1; +\\infty)$; đi xuống trên các khoảng $(-\\infty; -1)$ và $(0; 1)$.',
        points: 0.25,
      },
      {
        id: 'd6-p1-q10',
        part: 'part1',
        number: 10,
        topic: 'Xét tính đơn điệu và cực trị khi biết biểu thức đạo hàm',
        prompt:
          'Cho hàm số $y = f(x)$ có đạo hàm $f\'(x) = (x - 1)(x + 3)^2$ với mọi $x \\in \\mathbb{R}$. Khẳng định nào sau đây đúng?',
        options: [
          { key: 'A', content: 'Hàm số đồng biến trên khoảng $(-3; 1)$.' },
          { key: 'B', content: 'Hàm số nghịch biến trên khoảng $(1; +\\infty)$.' },
          { key: 'C', content: 'Hàm số đồng biến trên khoảng $(1; +\\infty)$.' },
          { key: 'D', content: 'Hàm số đạt cực tiểu tại $x = -3$.' },
        ],
        correctAnswer: 'C',
        explanation:
          'Ta có $f\'(x) = (x - 1)(x + 3)^2 = 0 \\Leftrightarrow x = 1$ hoặc $x = -3$. Vì $(x + 3)^2 \\ge 0,\\ \\forall x \\in \\mathbb{R}$ nên dấu của $f\'(x)$ phụ thuộc vào dấu của $(x - 1)$: $f\'(x) > 0 \\Leftrightarrow x > 1$ và $f\'(x) \\le 0 \\Leftrightarrow x \\le 1$. Vậy hàm số đồng biến trên khoảng $(1; +\\infty)$.',
        pedagogicalTip:
          'Nhân tử bình phương $(x + 3)^2 \\ge 0$ không làm đổi dấu đạo hàm qua $x = -3$, nên hàm số nghịch biến trên toàn khoảng $(-\\infty; 1)$ và đồng biến trên $(1; +\\infty)$.',
        points: 0.25,
      },
      {
        id: 'd6-p1-q11',
        part: 'part1',
        number: 11,
        topic: 'Đường tiệm cận ngang của đồ thị hàm phân thức',
        prompt: 'Đồ thị hàm số $y = \\frac{4x + 1}{x - 3}$ có tiệm cận ngang là đường thẳng:',
        options: [
          { key: 'A', content: '$x = 3$' },
          { key: 'B', content: '$y = 4$' },
          { key: 'C', content: '$x = 4$' },
          { key: 'D', content: '$y = 3$' },
        ],
        correctAnswer: 'B',
        explanation:
          'Ta có $\\lim\\limits_{x \\to \\pm\\infty} \\frac{4x + 1}{x - 3} = 4$. Do đó, đường tiệm cận ngang của đồ thị hàm số là đường thẳng $y = 4$.',
        pedagogicalTip:
          'Tiệm cận ngang của đồ thị hàm số $y = \\frac{ax + b}{cx + d}$ là đường thẳng $y = \\frac{a}{c} = 4$, còn $x = 3$ là đường tiệm cận đứng.',
        points: 0.25,
      },
      {
        id: 'd6-p1-q12',
        part: 'part1',
        number: 12,
        topic: 'Nhận diện hàm phân thức qua bảng biến thiên',
        prompt:
          'Cho hàm số $y = f(x)$ có bảng biến thiên như hình bên. Bảng biến thiên trên là của hàm số nào?',
        tikzType: 'd6_q12_bbt',
        options: [
          { key: 'A', content: '$y = \\frac{3x - 1}{x - 1}$' },
          { key: 'B', content: '$y = \\frac{3x + 5}{x + 1}$' },
          { key: 'C', content: '$y = \\frac{x + 3}{x + 1}$' },
          { key: 'D', content: '$y = \\frac{3x + 1}{x + 1}$' },
        ],
        correctAnswer: 'D',
        explanation:
          'Dựa vào bảng biến thiên ta có: Đường tiệm cận đứng là $x = -1$, đường tiệm cận ngang là $y = 3$ (loại A và C). Mặt khác, đạo hàm $y\' > 0$ với mọi $x \\neq -1$. Kiểm tra phương án D: $y = \\frac{3x + 1}{x + 1} \\Rightarrow y\' = \\frac{3 \\cdot 1 - 1 \\cdot 1}{(x + 1)^2} = \\frac{2}{(x + 1)^2} > 0,\\ \\forall x \\neq -1$ (thỏa mãn). Phương án B có $y\' = \\frac{-2}{(x + 1)^2} < 0$ (loại).',
        pedagogicalTip:
          'Khi hai phương án B và D có cùng TCĐ $x = -1$ và TCN $y = 3$, ta xét dấu đạo hàm $y\' = \\frac{ad - bc}{(cx + d)^2}$: vì bảng biến thiên có $y\' > 0$ nên cần $ad - bc > 0$.',
        points: 0.25,
      },
    ],
    part2: [
      {
        id: 'd6-p2-q1',
        part: 'part2',
        number: 1,
        topic: 'Phần II - Câu 1: Đọc bảng biến thiên (Đơn điệu, Cực trị, Tiệm cận & GTLN)',
        prompt:
          'Cho hàm số $y = f(x)$ có bảng biến thiên như sau. Xét tính đúng sai của các khẳng định sau:',
        tikzType: 'd6_p2_q1_bbt',
        statements: [
          {
            id: 'a',
            label: 'a',
            statement: 'Hàm số đồng biến trên khoảng $(-\\infty; -1)$.',
            isCorrect: true,
            explanation:
              'Đúng. Dựa vào bảng biến thiên, trên khoảng $(-\\infty; -1)$ đạo hàm $f\'(x) > 0$ nên hàm số đồng biến trên khoảng $(-\\infty; -1)$.',
          },
          {
            id: 'b',
            label: 'b',
            statement:
              'Đồ thị hàm số có đúng một đường tiệm cận ngang là $y = 1$ và một đường tiệm cận đứng là $x = 2$.',
            isCorrect: true,
            explanation:
              'Đúng. Vì $\\lim\\limits_{x \\to +\\infty} f(x) = 1$ và $\\lim\\limits_{x \\to -\\infty} f(x) = -\\infty$ nên đồ thị có đúng một tiệm cận ngang là $y = 1$. Mặt khác $\\lim\\limits_{x \\to 2^-} f(x) = -\\infty$ và $\\lim\\limits_{x \\to 2^+} f(x) = -\\infty$ nên đồ thị có đúng một tiệm cận đứng là $x = 2$.',
          },
          {
            id: 'c',
            label: 'c',
            statement: 'Hàm số đạt cực đại tại điểm $x = 4$.',
            isCorrect: false,
            explanation:
              'Sai. Dựa vào bảng biến thiên, hàm số đạt cực đại tại điểm $x = -1$, còn $y_{\\text{CĐ}} = 4$ là giá trị cực đại của hàm số.',
          },
          {
            id: 'd',
            label: 'd',
            statement: 'Giá trị lớn nhất của hàm số trên tập xác định bằng $4$.',
            isCorrect: true,
            explanation:
              'Đúng. Trên tập xác định $D = \\mathbb{R} \\setminus \\{2\\}$: với $x \\in (-\\infty; 2)$ ta có $f(x) \\le f(-1) = 4$; với $x \\in (2; +\\infty)$ ta có $f(x) < 1 < 4$. Vậy $\\max\\limits_{D} f(x) = f(-1) = 4$.',
          },
        ],
        pedagogicalTip:
          'Cần phân biệt rõ "điểm cực đại của hàm số" ($x = -1$) và "giá trị cực đại của hàm số" ($y = 4$).',
      },
      {
        id: 'd6-p2-q2',
        part: 'part2',
        number: 2,
        topic: 'Phần II - Câu 2: Khảo sát toàn diện hàm số bậc ba',
        prompt:
          'Cho hàm số bậc ba $y = f(x) = -x^3 + 3x^2 - 1$ có đồ thị là $(C)$. Xét tính đúng sai của các khẳng định sau:',
        tikzType: 'd6_p2_q2_graph',
        statements: [
          {
            id: 'a',
            label: 'a',
            statement: 'Đồ thị $(C)$ cắt trục tung tại điểm có tung độ bằng $-1$.',
            isCorrect: true,
            explanation:
              'Đúng. Thay $x = 0$ vào phương trình hàm số ta được $y = -1$. Vậy đồ thị $(C)$ cắt trục tung tại điểm $(0; -1)$ có tung độ bằng $-1$.',
          },
          {
            id: 'b',
            label: 'b',
            statement: 'Hàm số nghịch biến trên khoảng $(0; 2)$.',
            isCorrect: false,
            explanation:
              'Sai. Ta có $y\' = -3x^2 + 6x = -3x(x - 2)$. Trên khoảng $(0; 2)$, ta có $y\' > 0$ nên hàm số đồng biến trên khoảng $(0; 2)$.',
          },
          {
            id: 'c',
            label: 'c',
            statement: 'Đồ thị hàm số có hai điểm cực trị nằm về hai phía đối với trục hoành.',
            isCorrect: true,
            explanation:
              'Đúng. Hai điểm cực trị của đồ thị hàm số là $A(0; -1)$ và $B(2; 3)$. Vì $y_A \\cdot y_B = (-1) \\cdot 3 = -3 < 0$ nên hai điểm cực trị nằm về hai phía đối với trục hoành $Ox$.',
          },
          {
            id: 'd',
            label: 'd',
            statement: 'Đồ thị $(C)$ có tâm đối xứng là điểm $I(1; 1)$.',
            isCorrect: true,
            explanation:
              'Đúng. Ta có $y\'\' = -6x + 6 = 0 \\Leftrightarrow x = 1 \\Rightarrow y(1) = -1 + 3 - 1 = 1$. Điểm uốn $I(1; 1)$ là tâm đối xứng của đồ thị $(C)$.',
          },
        ],
        pedagogicalTip:
          'Tâm đối xứng của đồ thị hàm bậc ba $y = ax^3 + bx^2 + cx + d$ là điểm uốn $I(x_0; y_0)$ với $x_0 = -\\frac{b}{3a}$ là nghiệm của phương trình $y\'\' = 0$.',
      },
      {
        id: 'd6-p2-q3',
        part: 'part2',
        number: 3,
        topic: 'Phần II - Câu 3: Ứng dụng đạo hàm trong bài toán chuyển động vật lý',
        prompt:
          'Một vật được phóng thẳng đứng lên trên với phương trình chuyển động $s(t) = -5t^2 + 30t + 3$ (với $t \\ge 0$ tính bằng giây, $s$ tính bằng mét kể từ mặt đất). Xét tính đúng sai của các khẳng định sau:',
        statements: [
          {
            id: 'a',
            label: 'a',
            statement: 'Vật được phóng lên từ độ cao ban đầu là $3\\text{ m}$ so với mặt đất.',
            isCorrect: true,
            explanation:
              'Đúng. Tại thời điểm ban đầu $t = 0$, ta có $s(0) = 3\\text{ m}$. Do đó vật được phóng lên từ độ cao ban đầu là $3\\text{ m}$.',
          },
          {
            id: 'b',
            label: 'b',
            statement:
              'Vận tốc tức thời của vật tại thời điểm $t$ là $v(t) = s\'(t) = -10t + 30\\text{ (m/s)}$.',
            isCorrect: true,
            explanation:
              'Đúng. Vận tốc tức thời của vật là $v(t) = s\'(t) = (-5t^2 + 30t + 3)\' = -10t + 30\\text{ (m/s)}$.',
          },
          {
            id: 'c',
            label: 'c',
            statement: 'Vật đạt vị trí cao nhất tại thời điểm $t = 4\\text{ s}$.',
            isCorrect: false,
            explanation:
              'Sai. Vật đạt vị trí cao nhất khi vận tốc tức thời bằng $0$: $v(t) = 0 \\Leftrightarrow -10t + 30 = 0 \\Leftrightarrow t = 3\\text{ s}$. Do đó khẳng định $t = 4\\text{ s}$ là sai.',
          },
          {
            id: 'd',
            label: 'd',
            statement: 'Độ cao lớn nhất mà vật đạt được so với mặt đất là $48\\text{ m}$.',
            isCorrect: true,
            explanation:
              'Đúng. Độ cao lớn nhất mà vật đạt được là $s(3) = -5(3)^2 + 30(3) + 3 = -45 + 90 + 3 = 48\\text{ m}$.',
          },
        ],
        pedagogicalTip:
          'Trong chuyển động ném thẳng đứng lên trên, vật đạt độ cao lớn nhất tại thời điểm vận tốc tức thời triệt tiêu $v(t) = s\'(t) = 0$.',
      },
    ],
    part3: [
      {
        id: 'd6-p3-q1',
        part: 'part3',
        number: 1,
        topic: 'Phần III - Câu 1: Số điểm cực trị của hàm số khi biết đạo hàm',
        prompt:
          'Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ và có đạo hàm $f\'(x) = x(x - 1)^2(x + 2)^3(x - 4)^5$. Hỏi hàm số $y = f(x)$ có bao nhiêu điểm cực trị?',
        acceptableAnswers: ['3'],
        explanation:
          'Phương trình $f\'(x) = 0 \\Leftrightarrow \\left[\\begin{array}{l} x = 0 \\text{ (nghiệm đơn - bội } 1\\text{)} \\\\ x = 1 \\text{ (nghiệm bội chẵn - bậc } 2\\text{)} \\\\ x = -2 \\text{ (nghiệm bội lẻ - bậc } 3\\text{)} \\\\ x = 4 \\text{ (nghiệm bội lẻ - bậc } 5\\text{)} \\end{array}\\right.$.\nĐạo hàm $f\'(x)$ đổi dấu khi đi qua các nghiệm bội lẻ $x = 0,\\ x = -2,\\ x = 4$ và không đổi dấu khi đi qua nghiệm bội chẵn $x = 1$.\nVậy hàm số đã cho có $3$ điểm cực trị.',
        pedagogicalTip:
          'Số điểm cực trị của hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ bằng số nghiệm bội lẻ của phương trình $f\'(x) = 0$.',
        points: 0.5,
      },
      {
        id: 'd6-p3-q2',
        part: 'part3',
        number: 2,
        topic: 'Phần III - Câu 2: Tìm tổng số đường tiệm cận đứng và tiệm cận ngang',
        prompt:
          'Tìm tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y = \\frac{3x - 1}{\\sqrt{x^2 - 9}}$.',
        acceptableAnswers: ['4'],
        explanation:
          'Tập xác định của hàm số là $D = (-\\infty; -3) \\cup (3; +\\infty)$.\n- Xét tiệm cận ngang:\n$$\\lim\\limits_{x \\to +\\infty} \\frac{3x - 1}{\\sqrt{x^2 - 9}} = \\lim\\limits_{x \\to +\\infty} \\frac{3 - \\frac{1}{x}}{\\sqrt{1 - \\frac{9}{x^2}}} = 3 \\Rightarrow y = 3 \\text{ là một tiệm cận ngang.}$$\n$$\\lim\\limits_{x \\to -\\infty} \\frac{3x - 1}{\\sqrt{x^2 - 9}} = \\lim\\limits_{x \\to -\\infty} \\frac{3 - \\frac{1}{x}}{-\\sqrt{1 - \\frac{9}{x^2}}} = -3 \\Rightarrow y = -3 \\text{ là một tiệm cận ngang.}$$\n- Xét tiệm cận đứng:\n$$\\lim\\limits_{x \\to 3^+} \\frac{3x - 1}{\\sqrt{x^2 - 9}} = +\\infty \\Rightarrow x = 3 \\text{ là một tiệm cận đứng.}$$\n$$\\lim\\limits_{x \\to -3^-} \\frac{3x - 1}{\\sqrt{x^2 - 9}} = -\\infty \\Rightarrow x = -3 \\text{ là một tiệm cận đứng.}$$\nVậy đồ thị hàm số có $2$ đường tiệm cận ngang và $2$ đường tiệm cận đứng. Tổng số đường tiệm cận là $2 + 2 = 4$.',
        pedagogicalTip:
          'Chú ý $\\sqrt{x^2 - 9} = |x|\\sqrt{1 - \\frac{9}{x^2}}$, do đó khi $x \\to +\\infty$ và $x \\to -\\infty$ giới hạn có dấu trái nhau, sinh ra $2$ đường tiệm cận ngang.',
        points: 0.5,
      },
      {
        id: 'd6-p3-q3',
        part: 'part3',
        number: 3,
        topic: 'Phần III - Câu 3: Ứng dụng đạo hàm trong bài toán vận tốc - gia tốc',
        prompt:
          'Một chất điểm chuyển động thẳng với quãng đường $S(t) = t^3 - 9t^2 + 15t + 5$ ($t \\ge 0$, tính bằng giây, $S$ tính bằng mét). Trong khoảng thời gian $(a; b)$ (tính theo giây) thì vận tốc của chất điểm giảm dần. Tính giá trị biểu thức $3a + 2b$.',
        acceptableAnswers: ['6'],
        explanation:
          'Vận tốc tức thời của chất điểm là $v(t) = S\'(t) = 3t^2 - 18t + 15$.\nGia tốc của chất điểm là $a(t) = v\'(t) = 6t - 18$.\nVận tốc của chất điểm giảm dần khi và chỉ khi $v\'(t) < 0 \\Leftrightarrow 6t - 18 < 0 \\Leftrightarrow t < 3$.\nKết hợp với điều kiện $t \\ge 0$, vận tốc của chất điểm giảm dần trong khoảng thời gian $(0; 3)$.\nSuy ra $a = 0$ và $b = 3$. Vậy $3a + 2b = 3(0) + 2(3) = 6$.',
        pedagogicalTip:
          'Vận tốc giảm dần tương ứng với hàm số vận tốc $v(t)$ nghịch biến, tức là đạo hàm của vận tốc (gia tốc $a(t) = v\'(t)$) nhận giá trị âm.',
        points: 0.5,
      },
      {
        id: 'd6-p3-q4',
        part: 'part3',
        number: 4,
        topic: 'Phần III - Câu 4: Tối ưu hóa chi phí sản xuất bằng đạo hàm / AM-GM',
        prompt:
          'Người ta muốn làm một thùng chứa hình hộp chữ nhật có nắp, đáy là hình vuông, thể tích bằng $36\\text{ m}^3$. Biết chi phí vật liệu làm đáy và nắp là $40.000\\text{ đ/m}^2$, chi phí làm các mặt bên là $30.000\\text{ đ/m}^2$. Tìm độ dài cạnh đáy (theo đơn vị mét) để tổng chi phí vật liệu là nhỏ nhất.',
        tikzType: 'sp_open_box_xh',
        acceptableAnswers: ['3'],
        unit: 'm',
        explanation:
          'Gọi độ dài cạnh đáy của hình hộp chữ nhật là $x\\ (x > 0,\\text{ mét})$ và chiều cao của thùng là $h\\ (h > 0,\\text{ mét})$.\nVì thể tích của thùng bằng $36\\text{ m}^3$ nên $V = x^2h = 36 \\Rightarrow h = \\frac{36}{x^2}$.\nDiện tích của đáy và nắp là $2x^2\\text{ (m}^2\\text{)}$.\nDiện tích của $4$ mặt bên là $4xh = 4x \\cdot \\frac{36}{x^2} = \\frac{144}{x}\\text{ (m}^2\\text{)}$.\nTổng chi phí vật liệu (tính theo nghìn đồng) là:\n$$C(x) = 40 \\cdot 2x^2 + 30 \\cdot \\frac{144}{x} = 80x^2 + \\frac{4320}{x}.$$\nTa có đạo hàm:\n$$C\'(x) = 160x - \\frac{4320}{x^2} = 0 \\Leftrightarrow x^3 = \\frac{4320}{160} = 27 \\Leftrightarrow x = 3\\text{ (m)}.$$\nLập bảng biến thiên trên $(0; +\\infty)$, ta thấy $C(x)$ đạt giá trị nhỏ nhất tại $x = 3\\text{ m}$.',
        pedagogicalTip:
          'Có thể dùng bất đẳng thức AM-GM cho $3$ số dương: $C(x) = 80x^2 + \\frac{2160}{x} + \\frac{2160}{x} \\ge 3\\sqrt[3]{80 \\cdot 2160^2}$, dấu bằng xảy ra khi $80x^2 = \\frac{2160}{x} \\Leftrightarrow x^3 = 27 \\Leftrightarrow x = 3\\text{ m}$.',
        points: 0.5,
      },
    ],
    part4: [
      {
        id: 'd6-p4-q1',
        part: 'part4',
        number: 1,
        topic: 'Phần IV - Câu 1: Xét chiều biến thiên và tìm các điểm cực trị của hàm số',
        problemStatement:
          'Cho hàm số $y = f(x) = x^3 - 3x^2 - 9x + 2$. Xét chiều biến thiên và tìm các điểm cực trị của hàm số đã cho.',
        conclusionTarget:
          'Hàm số đồng biến trên $(-\\infty; -1)$ và $(3; +\\infty)$, nghịch biến trên $(-1; 3)$; đạt cực đại tại $x = -1\\ (y_{\\text{CĐ}} = 7)$ và đạt cực tiểu tại $x = 3\\ (y_{\\text{CT}} = -25)$.',
        tikzType: 'd6_p4_q1_bbt',
        steps: [
          {
            id: 'd6-p4-q1-s1',
            originalIndex: 1,
            roleDescription: 'Tìm tập xác định và tính đạo hàm',
            content:
              '1. Tập xác định: $D = \\mathbb{R}$. Ta có đạo hàm $y\' = 3x^2 - 6x - 9$.',
          },
          {
            id: 'd6-p4-q1-s2',
            originalIndex: 2,
            roleDescription: 'Giải phương trình đạo hàm bằng 0 và lập bảng biến thiên',
            content:
              'Cho $y\' = 0 \\Leftrightarrow 3(x^2 - 2x - 3) = 0 \\Leftrightarrow \\left[\\begin{array}{l} x = -1 \\\\ x = 3 \\end{array}\\right.$. Lập bảng biến thiên với $y(-1) = 7,\\ y(3) = -25$.',
          },
          {
            id: 'd6-p4-q1-s3',
            originalIndex: 3,
            roleDescription: 'Kết luận chiều biến thiên của hàm số',
            content:
              '2. Chiều biến thiên: Hàm số đồng biến trên các khoảng $(-\\infty; -1)$ và $(3; +\\infty)$; hàm số nghịch biến trên khoảng $(-1; 3)$.',
          },
          {
            id: 'd6-p4-q1-s4',
            originalIndex: 4,
            roleDescription: 'Kết luận các điểm cực trị của hàm số',
            content:
              '3. Cực trị: Hàm số đạt cực đại tại $x = -1$, giá trị cực đại $y_{\\text{CĐ}} = y(-1) = 7$; hàm số đạt cực tiểu tại $x = 3$, giá trị cực tiểu $y_{\\text{CT}} = y(3) = -25$.',
          },
        ],
        pedagogicalTip:
          'Với tam thức bậc hai $y\' = 3x^2 - 6x - 9$ có hệ số $a = 3 > 0$, trong khoảng hai nghiệm $(-1; 3)$ thì $y\' < 0$, ngoài khoảng hai nghiệm thì $y\' > 0$.',
        teacherAnalysis:
          'Trình bày tự luận khảo sát sự biến thiên cần đủ 3 bước: Tập xác định -> Đạo hàm & Bảng biến thiên -> Kết luận khoảng đơn điệu và cực trị.',
        points: 1.0,
      },
      {
        id: 'd6-p4-q2',
        part: 'part4',
        number: 2,
        topic: 'Phần IV - Câu 2: Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên đoạn',
        problemStatement:
          'Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số $f(x) = x^4 - 4x^2 + 5$ trên đoạn $[0; 3]$.',
        conclusionTarget:
          '$\\max\\limits_{[0; 3]} f(x) = f(3) = 50$ và $\\min\\limits_{[0; 3]} f(x) = f(\\sqrt{2}) = 1$.',
        steps: [
          {
            id: 'd6-p4-q2-s1',
            originalIndex: 1,
            roleDescription: 'Tính đạo hàm của hàm số trên đoạn [0; 3]',
            content:
              'Xét hàm số $f(x) = x^4 - 4x^2 + 5$ liên tục trên đoạn $[0; 3]$. Ta có đạo hàm: $f\'(x) = 4x^3 - 8x = 4x(x^2 - 2)$.',
          },
          {
            id: 'd6-p4-q2-s2',
            originalIndex: 2,
            roleDescription: 'Tìm nghiệm của phương trình đạo hàm thuộc đoạn [0; 3]',
            content:
              'Cho $f\'(x) = 0 \\Leftrightarrow \\left[\\begin{array}{l} x = 0 \\in [0; 3] \\\\ x = \\sqrt{2} \\in [0; 3] \\\\ x = -\\sqrt{2} \\notin [0; 3] \\end{array}\\right.$.',
          },
          {
            id: 'd6-p4-q2-s3',
            originalIndex: 3,
            roleDescription: 'Tính giá trị của hàm số tại các điểm tới hạn và hai đầu mút',
            content:
              'Tính các giá trị của hàm số: $f(0) = 5;\\ f(\\sqrt{2}) = (\\sqrt{2})^4 - 4(\\sqrt{2})^2 + 5 = 1;\\ f(3) = 3^4 - 4 \\cdot 3^2 + 5 = 50$.',
          },
          {
            id: 'd6-p4-q2-s4',
            originalIndex: 4,
            roleDescription: 'So sánh và kết luận GTLN, GTNN trên đoạn [0; 3]',
            content:
              'So sánh các giá trị trên, ta kết luận: $\\max\\limits_{[0; 3]} f(x) = f(3) = 50$ và $\\min\\limits_{[0; 3]} f(x) = f(\\sqrt{2}) = 1$.',
          },
        ],
        pedagogicalTip:
          'Khi giải $f\'(x) = 0$, cần đối chiếu điều kiện $x \\in [0; 3]$ để loại nghiệm $x = -\\sqrt{2} \\notin [0; 3]$.',
        teacherAnalysis:
          'Quy trình tìm GTLN - GTNN của hàm số liên tục trên đoạn $[a; b]$: Tính $f\'(x)$ -> Tìm các nghiệm $x_i \\in [a; b]$ -> Tính $f(a), f(b), f(x_i)$ -> Kết luận.',
        points: 0.5,
      },
      {
        id: 'd6-p4-q3',
        part: 'part4',
        number: 3,
        topic: 'Phần IV - Câu 3: Bài toán thực tế tối ưu diện tích mảnh vườn',
        problemStatement:
          'Một bác nông dân có $80\\text{ m}$ lưới thép muốn rào một khu vườn hình chữ nhật sát một bức tường thẳng (không cần rào cạnh tiếp giáp bờ tường). Hãy tính diện tích lớn nhất của mảnh vườn mà bác nông dân có thể rào được.',
        conclusionTarget:
          'Diện tích lớn nhất của mảnh vườn có thể rào được là $S_{\\max} = S(20) = 800\\text{ m}^2$.',
        steps: [
          {
            id: 'd6-p4-q3-s1',
            originalIndex: 1,
            roleDescription: 'Đặt ẩn x cho cạnh vuông góc với tường và biểu diễn cạnh còn lại',
            content:
              'Gọi độ dài cạnh của mảnh vườn vuông góc với bức tường là $x\\ (0 < x < 40,\\text{ mét})$. Vì khu vườn có $2$ cạnh vuông góc với tường và $1$ cạnh song song với tường nên chiều dài cạnh song song với bức tường là $80 - 2x\\text{ (mét)}$.',
          },
          {
            id: 'd6-p4-q3-s2',
            originalIndex: 2,
            roleDescription: 'Lập hàm số biểu thị diện tích mảnh vườn S(x)',
            content:
              'Diện tích mảnh vườn rào được là: $S(x) = x(80 - 2x) = -2x^2 + 80x\\text{ (m}^2\\text{)}$ với $x \\in (0; 40)$.',
          },
          {
            id: 'd6-p4-q3-s3',
            originalIndex: 3,
            roleDescription: 'Tính đạo hàm và tìm điểm cực trị của hàm diện tích',
            content:
              'Xét hàm số $S(x) = -2x^2 + 80x$ trên khoảng $(0; 40)$: Ta có $S\'(x) = -4x + 80 = 0 \\Leftrightarrow x = 20$ (thỏa mãn $0 < x < 40$).',
          },
          {
            id: 'd6-p4-q3-s4',
            originalIndex: 4,
            roleDescription: 'Tính giá trị lớn nhất và kết luận diện tích mảnh vườn',
            content:
              'Vì hàm số bậc hai có hệ số $a = -2 < 0$ nên hàm số đạt giá trị lớn nhất tại $x = 20$: $S_{\\max} = S(20) = 20 \\cdot (80 - 2 \\cdot 20) = 20 \\cdot 40 = 800\\text{ m}^2$. Vậy diện tích lớn nhất của mảnh vườn có thể rào được là $800\\text{ m}^2$.',
          },
        ],
        pedagogicalTip:
          'Khu vườn tiếp giáp bức tường thẳng nên tổng chiều dài $3$ cạnh rào là $2x + y = 80 \\Rightarrow y = 80 - 2x$.',
        teacherAnalysis:
          'Bài toán tối ưu hình học thực tế đưa về khảo sát hàm số bậc hai $S(x) = -2x^2 + 80x$ trên khoảng $(0; 40)$.',
        points: 0.5,
      },
    ],
  },
  {
    id: 'de-so-07',
    title: 'Đề ôn GK1 07',
    subtitle: 'Ôn 12 - Đề ôn GK1 07: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số (GV Nguyễn Ngọc Thanh)',
    grade: 12,
    durationMinutes: 90,
    totalPoints: 10,
    description:
      'Đề ôn tập Toán 12 - Đề ôn GK1 07 (GV Nguyễn Ngọc Thanh) tương tự Đề ôn GK1 02 gồm 22 câu hỏi chuẩn cấu trúc 4 phần: Phần I (12 câu trắc nghiệm nhiều lựa chọn từ Câu 1 đến Câu 12 - 3,0đ), Phần II (3 câu trắc nghiệm Đúng/Sai từ Câu 1 đến Câu 3 - 3,0đ), Phần III (4 câu trả lời ngắn từ Câu 1 đến Câu 4 - 2,0đ), Phần IV (3 câu tự luận từ Câu 1 đến Câu 3 - 2,0đ).',
    part1: [
      {
        id: 'd7-p1-q1',
        part: 'part1',
        number: 1,
        topic: 'Xét tính đơn điệu của hàm số qua bảng xét dấu đạo hàm',
        prompt:
          'Cho hàm số $y = f(x)$ có bảng xét dấu của đạo hàm như hình vẽ. Hàm số đã cho nghịch biến trên khoảng nào dưới đây?',
        tikzType: 'd7_q1_bxd',
        options: [
          { key: 'A', content: '$(-2; +\\infty)$' },
          { key: 'B', content: '$(-\\infty; -2)$' },
          { key: 'C', content: '$(-\\infty; 1)$' },
          { key: 'D', content: '$(1; +\\infty)$' },
        ],
        correctAnswer: 'D',
        explanation:
          'Dựa vào bảng xét dấu đạo hàm, ta thấy $y\' < 0$ trên các khoảng $(-2; 1)$ và $(1; +\\infty)$. Do đó, hàm số nghịch biến trên khoảng $(1; +\\infty)$ (và khoảng $(-2; 1)$). Vậy phương án đúng là D.',
        pedagogicalTip:
          'Tại $x = 1$ đạo hàm không xác định (có dấu gạch đôi $||$), nên không được gộp thành khoảng $(-2; +\\infty)$ mà phải kết luận nghịch biến trên từng khoảng $(-2; 1)$ và $(1; +\\infty)$.',
        points: 0.25,
      },
      {
        id: 'd7-p1-q2',
        part: 'part1',
        number: 2,
        topic: 'Xét tính đơn điệu của hàm số qua đồ thị',
        prompt:
          'Cho hàm số $y = f(x)$ có đồ thị là đường cong như hình vẽ sau. Hàm số đã cho nghịch biến trên khoảng nào dưới đây?',
        tikzType: 'd7_q2_graph',
        options: [
          { key: 'A', content: '$(-1; 0)$' },
          { key: 'B', content: '$(0; 1)$' },
          { key: 'C', content: '$(1; +\\infty)$' },
          { key: 'D', content: '$(-1; 1)$' },
        ],
        correctAnswer: 'B',
        explanation:
          'Dựa vào đồ thị hàm số:\n- Đồ thị đi xuống từ trái sang phải trên các khoảng $(-\\infty; -1)$ và $(0; 1)$, nên hàm số nghịch biến trên $(-\\infty; -1)$ và $(0; 1)$.\n- Đồ thị đi lên từ trái sang phải trên các khoảng $(-1; 0)$ và $(1; +\\infty)$, nên hàm số đồng biến trên $(-1; 0)$ và $(1; +\\infty)$.\nVậy hàm số nghịch biến trên khoảng $(0; 1)$.',
        pedagogicalTip:
          'Khi xét khoảng đồng biến hoặc nghịch biến trên đồ thị, luôn đọc hoành độ $x$ từ trái sang phải.',
        points: 0.25,
      },
      {
        id: 'd7-p1-q3',
        part: 'part1',
        number: 3,
        topic: 'Tìm số điểm cực trị của hàm số qua bảng xét dấu đạo hàm',
        prompt:
          'Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ và có bảng xét dấu của đạo hàm như sau. Số điểm cực trị của hàm số đã cho là:',
        tikzType: 'd7_q3_bxd',
        options: [
          { key: 'A', content: '$4$' },
          { key: 'B', content: '$2$' },
          { key: 'C', content: '$3$' },
          { key: 'D', content: '$1$' },
        ],
        correctAnswer: 'C',
        explanation:
          'Vì hàm số liên tục trên $\\mathbb{R}$ và đạo hàm $f\'(x)$ đổi dấu khi đi qua $3$ điểm $x = -2$, $x = 2$, $x = 4$ (không đổi dấu khi đi qua $x = 0$), nên hàm số đã cho có $3$ điểm cực trị.',
        pedagogicalTip:
          'Chú ý tại $x = 0$, dấu của $f\'(x)$ ở hai bên đều là dấu $+$ (không đổi dấu) nên $x = 0$ không phải là điểm cực trị.',
        points: 0.25,
      },
      {
        id: 'd7-p1-q4',
        part: 'part1',
        number: 4,
        topic: 'Nhận diện đồ thị hàm phân thức bậc nhất trên bậc nhất',
        prompt:
          'Đường cong trong hình vẽ bên là của đồ thị hàm số nào trong các hàm số dưới đây?',
        tikzType: 'd7_q4_graph',
        options: [
          { key: 'A', content: '$y = \\frac{x + 1}{x - 2}$' },
          { key: 'B', content: '$y = \\frac{2x + 1}{x - 1}$' },
          { key: 'C', content: '$y = \\frac{x - 1}{x + 2}$' },
          { key: 'D', content: '$y = \\frac{x - 2}{x - 1}$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Dựa vào hình vẽ:\n- Đồ thị hàm số có tiệm cận đứng là $x = 2$ và tiệm cận ngang là $y = 1$.\n- Đồ thị cắt trục hoành tại điểm $(-1; 0)$ và cắt trục tung tại điểm $\\left(0; -\\frac{1}{2}\\right)$.\nĐối chiếu với các phương án, chỉ có hàm số $y = \\frac{x + 1}{x - 2}$ thỏa mãn.',
        pedagogicalTip:
          'Kiểm tra nhanh 3 yếu tố: Tiệm cận đứng $x = 2$, tiệm cận ngang $y = 1$ và giao điểm với trục hoành $(-1; 0)$.',
        points: 0.25,
      },
      {
        id: 'd7-p1-q5',
        part: 'part1',
        number: 5,
        topic: 'Nhận diện đồ thị hàm số bậc ba',
        prompt: 'Đồ thị sau đây là của hàm số nào?',
        tikzType: 'd7_q5_graph',
        options: [
          { key: 'A', content: '$y = -x^3 + 3x^2 + 4$' },
          { key: 'B', content: '$y = x^3 + 3x^2 + 4$' },
          { key: 'C', content: '$y = x^3 - 3x + 4$' },
          { key: 'D', content: '$y = x^3 - 3x^2 + 4$' },
        ],
        correctAnswer: 'D',
        explanation:
          'Dựa vào dạng đồ thị:\n- Nhánh cuối bên phải đi lên nên hệ số $a > 0$ (loại A).\n- Đồ thị cắt trục tung tại $(0; 4)$, đạt cực đại tại $(0; 4)$ và đạt cực tiểu tại $(2; 0)$.\nXét hàm số $y = x^3 - 3x^2 + 4$ có $y\' = 3x^2 - 6x = 0 \\Leftrightarrow x = 0 \\ (y = 4)$ hoặc $x = 2 \\ (y = 0)$, hoàn toàn trùng khớp với đồ thị.',
        pedagogicalTip:
          'Nhánh cuối đi lên $\\Rightarrow a > 0$; hai điểm cực trị tại $x = 0$ và $x = 2 > 0 \\Rightarrow$ chọn $y = x^3 - 3x^2 + 4$.',
        points: 0.25,
      },
      {
        id: 'd7-p1-q6',
        part: 'part1',
        number: 6,
        topic: 'Tìm tọa độ giao điểm của đồ thị hàm số với trục tung',
        prompt:
          'Giao điểm của đồ thị hàm số $y = \\frac{2x + 3}{x - 1}$ với trục tung có tọa độ là:',
        options: [
          { key: 'A', content: '$(-3; 0)$' },
          { key: 'B', content: '$(0; -3)$' },
          { key: 'C', content: '$(0; 3)$' },
          { key: 'D', content: '$\\left(-\\frac{3}{2}; 0\\right)$' },
        ],
        correctAnswer: 'B',
        explanation:
          'Giao điểm của đồ thị hàm số với trục tung ứng với $x = 0$.\nThay $x = 0$ vào phương trình hàm số ta được: $y = \\frac{2(0) + 3}{0 - 1} = -3$.\nVậy tọa độ giao điểm với trục tung là $(0; -3)$.',
        pedagogicalTip:
          'Giao điểm với trục tung $Oy$ luôn có hoành độ $x = 0$, tọa độ viết dưới dạng $(0; y_0)$.',
        points: 0.25,
      },
      {
        id: 'd7-p1-q7',
        part: 'part1',
        number: 7,
        topic: 'Tìm giá trị lớn nhất của hàm số trên đoạn qua bảng biến thiên',
        prompt:
          'Cho hàm số $y = f(x)$ xác định, liên tục trên $\\mathbb{R}$ và có bảng biến thiên như sau. Giá trị lớn nhất của hàm số $y = f(x)$ trên đoạn $[-2; 1]$ bằng:',
        tikzType: 'd7_q7_bbt',
        options: [
          { key: 'A', content: '$-1$' },
          { key: 'B', content: '$2$' },
          { key: 'C', content: '$5$' },
          { key: 'D', content: '$1$' },
        ],
        correctAnswer: 'C',
        explanation:
          'Dựa vào bảng biến thiên, trên đoạn $[-2; 1]$ hàm số đồng biến trên khoảng $(-2; -1)$ và nghịch biến trên khoảng $(-1; 1)$.\nDo đó với mọi $x \\in [-2; 1]$ ta luôn có $f(x) \\le f(-1) = 5$.\nVậy $\\max\\limits_{[-2; 1]} f(x) = 5$ tại $x = -1$.',
        pedagogicalTip:
          'Trên đoạn $[-2; 1]$ chứa điểm cực đại $x = -1$, hàm số tăng lên đến $5$ rồi giảm xuống nên giá trị lớn nhất bằng $5$.',
        points: 0.25,
      },
      {
        id: 'd7-p1-q8',
        part: 'part1',
        number: 8,
        topic: 'Định nghĩa đường tiệm cận ngang của đồ thị hàm số',
        prompt:
          'Cho hàm số $y = f(x)$ có $\\lim\\limits_{x \\to +\\infty} f(x) = 3$ và $\\lim\\limits_{x \\to -\\infty} f(x) = -2$. Khẳng định nào sau đây là khẳng định đúng?',
        options: [
          { key: 'A', content: 'Đồ thị hàm số đã cho có đúng một tiệm cận ngang.' },
          {
            key: 'B',
            content: 'Đồ thị hàm số đã cho có hai tiệm cận ngang là các đường thẳng $y = 3$ và $y = -2$.',
          },
          {
            key: 'C',
            content: 'Đồ thị hàm số đã cho có hai tiệm cận ngang là các đường thẳng $x = 3$ và $x = -2$.',
          },
          { key: 'D', content: 'Đồ thị hàm số đã cho không có tiệm cận ngang.' },
        ],
        correctAnswer: 'B',
        explanation:
          'Theo định nghĩa đường tiệm cận ngang:\n- Vì $\\lim\\limits_{x \\to +\\infty} f(x) = 3$ nên đường thẳng $y = 3$ là một tiệm cận ngang.\n- Vì $\\lim\\limits_{x \\to -\\infty} f(x) = -2$ nên đường thẳng $y = -2$ là một tiệm cận ngang.\nVậy đồ thị hàm số đã cho có hai tiệm cận ngang là $y = 3$ và $y = -2$.',
        pedagogicalTip:
          'Phương trình đường tiệm cận ngang luôn có dạng $y = y_0$ (tránh chọn nhầm phương án C là $x = 3$ và $x = -2$).',
        points: 0.25,
      },
      {
        id: 'd7-p1-q9',
        part: 'part1',
        number: 9,
        topic: 'Tìm tiệm cận đứng và tiệm cận ngang qua đồ thị hàm phân thức',
        prompt:
          'Cho hàm số $y = \\frac{ax + b}{cx + d}$ ($ad - bc \\neq 0;\\ ac \\neq 0$) có đồ thị như hình vẽ bên dưới. Tìm phương trình đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số.',
        tikzType: 'd7_q9_graph',
        options: [
          { key: 'A', content: '$x = 1,\\ y = -1$.' },
          { key: 'B', content: '$x = -1,\\ y = -1$.' },
          { key: 'C', content: '$x = -1,\\ y = 1$.' },
          { key: 'D', content: '$x = 1,\\ y = 1$.' },
        ],
        correctAnswer: 'C',
        explanation:
          'Dựa vào hình vẽ đồ thị hàm số:\n- Đường tiệm cận đứng đi qua điểm có hoành độ $x = -1$ nên có phương trình $x = -1$.\n- Đường tiệm cận ngang đi qua điểm có tung độ $y = 1$ nên có phương trình $y = 1$.\nVậy phương trình tiệm cận đứng và tiệm cận ngang lần lượt là $x = -1,\\ y = 1$.',
        pedagogicalTip:
          'Các điểm $(1; 0)$ và $(0; -1)$ là giao điểm của đồ thị với hai trục tọa độ, còn hai đường nét đứt là $x = -1$ (TCĐ) và $y = 1$ (TCN).',
        points: 0.25,
      },
      {
        id: 'd7-p1-q10',
        part: 'part1',
        number: 10,
        topic: 'Đếm tổng số đường tiệm cận đứng và tiệm cận ngang từ bảng biến thiên',
        prompt:
          'Cho hàm số $f(x)$ có bảng biến thiên như sau. Tổng số tiệm cận ngang và tiệm cận đứng của đồ thị hàm số đã cho là:',
        tikzType: 'd7_q10_bbt',
        options: [
          { key: 'A', content: '$1$' },
          { key: 'B', content: '$3$' },
          { key: 'C', content: '$4$' },
          { key: 'D', content: '$2$' },
        ],
        correctAnswer: 'B',
        explanation:
          'Dựa vào bảng biến thiên:\n- $\\lim\\limits_{x \\to -\\infty} f(x) = 2 \\Rightarrow y = 2$ là một đường tiệm cận ngang.\n- $\\lim\\limits_{x \\to +\\infty} f(x) = 4 \\Rightarrow y = 4$ là một đường tiệm cận ngang.\n- $\\lim\\limits_{x \\to -2^-} f(x) = -\\infty$ và $\\lim\\limits_{x \\to -2^+} f(x) = +\\infty \\Rightarrow x = -2$ là một đường tiệm cận đứng.\nVậy đồ thị hàm số có $2$ tiệm cận ngang và $1$ tiệm cận đứng. Tổng số đường tiệm cận là $2 + 1 = 3$.',
        pedagogicalTip:
          'Quan sát hai đầu $\\pm\\infty$ của dòng $x$ để tìm tiệm cận ngang và vị trí vạch kép $x = -2$ có giới hạn $\\pm\\infty$ để tìm tiệm cận đứng.',
        points: 0.25,
      },
      {
        id: 'd7-p1-q11',
        part: 'part1',
        number: 11,
        topic: 'Tìm số điểm cực trị khi biết biểu thức đạo hàm dạng tích',
        prompt:
          'Cho hàm số $f(x)$ có đạo hàm $f\'(x) = (x - 2)(x^2 - x - 2)(x + 3)^2$ với mọi $x \\in \\mathbb{R}$. Số điểm cực trị của hàm số đã cho là:',
        options: [
          { key: 'A', content: '$2$' },
          { key: 'B', content: '$3$' },
          { key: 'C', content: '$1$' },
          { key: 'D', content: '$0$' },
        ],
        correctAnswer: 'C',
        explanation:
          'Ta phân tích tam thức bậc hai: $x^2 - x - 2 = (x - 2)(x + 1)$.\nKhi đó: $f\'(x) = (x - 2) \\cdot (x - 2)(x + 1) \\cdot (x + 3)^2 = (x - 2)^2(x + 1)(x + 3)^2$.\n- Các thừa số $(x - 2)^2 \\ge 0$ và $(x + 3)^2 \\ge 0$ là nghiệm bội chẵn nên $f\'(x)$ không đổi dấu khi đi qua $x = 2$ và $x = -3$.\n- Chỉ có $x = -1$ là nghiệm đơn (bội lẻ) làm $f\'(x)$ đổi dấu.\nVậy hàm số đã cho có duy nhất $1$ điểm cực trị.',
        pedagogicalTip:
          'Phải phân tích $x^2 - x - 2 = (x - 2)(x + 1)$ để gộp nhân tử $(x - 2)^2$ trước khi đếm nghiệm bội lẻ.',
        points: 0.25,
      },
      {
        id: 'd7-p1-q12',
        part: 'part1',
        number: 12,
        topic: 'Tìm khoảng nghịch biến của hàm số bậc ba',
        prompt:
          'Hàm số $y = \\frac{1}{3}x^3 - \\frac{3}{2}x^2 - 4x + 5$ nghịch biến trên khoảng nào dưới đây?',
        options: [
          { key: 'A', content: '$(4; +\\infty)$' },
          { key: 'B', content: '$(-\\infty; -1)$ và $(4; +\\infty)$' },
          { key: 'C', content: '$(-\\infty; -1)$' },
          { key: 'D', content: '$(-1; 4)$' },
        ],
        correctAnswer: 'D',
        explanation:
          'Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y\' = x^2 - 3x - 4$.\nTa có $y\' < 0 \\Leftrightarrow x^2 - 3x - 4 < 0 \\Leftrightarrow -1 < x < 4$.\nVậy hàm số nghịch biến trên khoảng $(-1; 4)$.',
        pedagogicalTip:
          'Tam thức bậc hai $y\' = x^2 - 3x - 4$ có $a = 1 > 0$ và hai nghiệm $-1;\\ 4$, nên nhận giá trị âm trong khoảng $(-1; 4)$.',
        points: 0.25,
      },
    ],
    part2: [
      {
        id: 'd7-p2-q1',
        part: 'part2',
        number: 1,
        topic: 'Phần II - Câu 1: Khảo sát hàm số bậc ba qua đồ thị',
        prompt:
          'Cho hàm số $y = f(x) = ax^3 + bx^2 + cx + d$ có đồ thị như hình vẽ sau. Xét tính đúng sai của các khẳng định sau:',
        tikzType: 'd7_p2_q1_graph',
        statements: [
          {
            id: 'a',
            label: 'a',
            statement: 'Hàm số đạt cực tiểu tại điểm $x = 1$.',
            isCorrect: true,
            explanation:
              'Đúng. Dựa vào đồ thị, điểm cực tiểu của đồ thị hàm số có tọa độ $(1; -1)$, do đó hàm số đạt cực tiểu tại điểm $x = 1$.',
          },
          {
            id: 'b',
            label: 'b',
            statement: 'Giá trị cực đại của hàm số bằng $-1$.',
            isCorrect: false,
            explanation:
              'Sai. Điểm cực đại của đồ thị hàm số là $(-1; 3)$, do đó giá trị cực đại của hàm số là $y_{\\text{CĐ}} = 3$, còn $x = -1$ là điểm cực đại của hàm số.',
          },
          {
            id: 'c',
            label: 'c',
            statement:
              'Trên khoảng $(-\\infty; 1)$, hàm số có giá trị lớn nhất là $3$ và có giá trị nhỏ nhất là $-1$.',
            isCorrect: false,
            explanation:
              'Sai. Trên khoảng $(-\\infty; 1)$, khi $x \\to -\\infty$ thì $y \\to -\\infty$, do đó hàm số không có giá trị nhỏ nhất trên khoảng này.',
          },
          {
            id: 'd',
            label: 'd',
            statement: 'Hàm số nghịch biến trên khoảng $(0; 1)$.',
            isCorrect: true,
            explanation:
              'Đúng. Hàm số nghịch biến trên khoảng $(-1; 1)$. Vì $(0; 1) \\subset (-1; 1)$ nên hàm số nghịch biến trên khoảng $(0; 1)$.',
          },
        ],
        pedagogicalTip:
          'Nếu hàm số nghịch biến trên khoảng $(-1; 1)$ thì nó cũng nghịch biến trên mọi khoảng con $(0; 1) \\subset (-1; 1)$.',
      },
      {
        id: 'd7-p2-q2',
        part: 'part2',
        number: 2,
        topic: 'Phần II - Câu 2: Khảo sát hàm phân thức bậc nhất trên bậc nhất',
        prompt:
          'Cho hàm số $y = \\frac{3x - 2}{x - 1}$. Xét tính đúng sai của các khẳng định sau:',
        statements: [
          {
            id: 'a',
            label: 'a',
            statement: 'Đồ thị hàm số có $1$ điểm cực trị.',
            isCorrect: false,
            explanation:
              'Sai. Tập xác định $D = \\mathbb{R} \\setminus \\{1\\}$. Đạo hàm $y\' = \\frac{3(-1) - (-2)(1)}{(x - 1)^2} = \\frac{-1}{(x - 1)^2} < 0$ với mọi $x \\neq 1$. Do đó hàm số không có điểm cực trị nào.',
          },
          {
            id: 'b',
            label: 'b',
            statement: 'Đồ thị hàm số có tiệm cận ngang là đường thẳng $y = 3$.',
            isCorrect: true,
            explanation:
              'Đúng. Ta có $\\lim\\limits_{x \\to \\pm\\infty} \\frac{3x - 2}{x - 1} = 3$, nên đường thẳng $y = 3$ là tiệm cận ngang của đồ thị hàm số.',
          },
          {
            id: 'c',
            label: 'c',
            statement: 'Bảng biến thiên của hàm số đã cho là:',
            tikzType: 'd7_p2_q2_bbt',
            isCorrect: false,
            explanation:
              'Sai. Bảng biến thiên trong hình thiếu điểm không xác định $x = 1$ (vạch kép tại $x = 1$). Bảng biến thiên đúng phải có hai nhánh nghịch biến tách biệt qua đường tiệm cận đứng $x = 1$.',
          },
          {
            id: 'd',
            label: 'd',
            statement: 'Giá trị lớn nhất của hàm số trên đoạn $[2; 5]$ bằng $4$.',
            isCorrect: true,
            explanation:
              'Đúng. Trên đoạn $[2; 5]$, hàm số liên tục và nghịch biến (vì $y\' < 0$), do đó $\\max\\limits_{[2; 5]} y = y(2) = \\frac{3(2) - 2}{2 - 1} = 4$.',
          },
        ],
        pedagogicalTip:
          'Hàm phân thức bậc nhất trên bậc nhất $y = \\frac{ax + b}{cx + d}$ luôn gián đoạn tại $x = -\\frac{d}{c}$ và không có cực trị.',
      },
      {
        id: 'd7-p2-q3',
        part: 'part2',
        number: 3,
        topic: 'Phần II - Câu 3: Bài toán thực tế sự tăng trưởng của vi khuẩn',
        prompt:
          'Một phòng thí nghiệm nghiên cứu sự phát triển của một chủng vi khuẩn. Người ta ước tính rằng số lượng vi khuẩn (tính bằng hàng nghìn con) sau $t$ giờ kể từ thời điểm ban đầu được mô phỏng bởi hàm số $N(t) = -t^3 + 12t^2 + 15$ với $t \\in [0; 10]$. Xét tính đúng sai của các khẳng định sau:',
        statements: [
          {
            id: 'a',
            label: 'a',
            statement: 'Số lượng vi khuẩn tại thời điểm ban đầu (khi $t = 0$) là $15\\,000$ con.',
            isCorrect: true,
            explanation:
              'Đúng. Tại thời điểm ban đầu $t = 0$, ta có $N(0) = 15$ (nghìn con), tức là $15\\,000$ con.',
          },
          {
            id: 'b',
            label: 'b',
            statement:
              'Tốc độ tăng trưởng của vi khuẩn tại thời điểm $t$ là hàm số bậc hai $N\'(t) = -3t^2 + 24t$.',
            isCorrect: true,
            explanation:
              'Đúng. Tốc độ tăng trưởng của số lượng vi khuẩn là đạo hàm $N\'(t) = (-t^3 + 12t^2 + 15)\' = -3t^2 + 24t$.',
          },
          {
            id: 'c',
            label: 'c',
            statement: 'Số lượng vi khuẩn bắt đầu giảm đi sau giờ thứ $8$.',
            isCorrect: true,
            explanation:
              'Đúng. Ta có $N\'(t) = -3t(t - 8)$: với $t \\in (0; 8)$ thì $N\'(t) > 0$ (số lượng vi khuẩn tăng); với $t \\in (8; 10]$ thì $N\'(t) < 0$ (số lượng vi khuẩn giảm). Vậy số lượng vi khuẩn bắt đầu giảm đi sau giờ thứ $8$.',
          },
          {
            id: 'd',
            label: 'd',
            statement:
              'Tốc độ tăng trưởng của vi khuẩn đạt giá trị lớn nhất tại thời điểm $t = 8$.',
            isCorrect: false,
            explanation:
              'Sai. Tốc độ tăng trưởng là $v(t) = N\'(t) = -3t^2 + 24t = -3(t - 4)^2 + 48 \\le 48$. Tốc độ tăng trưởng đạt giá trị lớn nhất bằng $48$ tại thời điểm $t = 4$, còn tại $t = 8$ thì tốc độ tăng trưởng bằng $0$.',
          },
        ],
        pedagogicalTip:
          'Phân biệt rõ "số lượng vi khuẩn $N(t)$ lớn nhất" (đạt tại $t = 8$) với "tốc độ tăng trưởng $N\'(t)$ lớn nhất" (đạt tại đỉnh parabol $t = 4$).',
      },
    ],
    part3: [
      {
        id: 'd7-p3-q1',
        part: 'part3',
        number: 1,
        topic: 'Phần III - Câu 1: Giá trị lớn nhất của hàm số chứa căn thức',
        prompt:
          'Giá trị lớn nhất của hàm số $y = 4 + \\sqrt{25 - x^2}$ bằng bao nhiêu?',
        acceptableAnswers: ['9'],
        explanation:
          'Tập xác định: $25 - x^2 \\ge 0 \\Leftrightarrow -5 \\le x \\le 5$.\nVì $x^2 \\ge 0$ nên $25 - x^2 \\le 25 \\Rightarrow \\sqrt{25 - x^2} \\le \\sqrt{25} = 5$.\nDo đó $y = 4 + \\sqrt{25 - x^2} \\le 4 + 5 = 9$.\nDấu bằng xảy ra khi $x = 0 \\in [-5; 5]$.\nVậy giá trị lớn nhất của hàm số bằng $9$.',
        pedagogicalTip:
          'Biểu thức $\\sqrt{R^2 - x^2}$ luôn đạt giá trị lớn nhất bằng $R$ tại $x = 0$.',
        points: 0.5,
      },
      {
        id: 'd7-p3-q2',
        part: 'part3',
        number: 2,
        topic: 'Phần III - Câu 2: Xác định đường tiệm cận xiên của đồ thị hàm số',
        prompt:
          'Biết đường tiệm cận xiên của đồ thị hàm số $y = \\frac{3x^2 - 2x + 5}{x + 1}$ có dạng $y = ax + b$ ($a, b \\in \\mathbb{R}$). Tính $3a + b$.',
        acceptableAnswers: ['4'],
        explanation:
          'Thực hiện phép chia đa thức tử cho mẫu:\n$$3x^2 - 2x + 5 = (x + 1)(3x - 5) + 10.$$\nDo đó:\n$$y = \\frac{3x^2 - 2x + 5}{x + 1} = 3x - 5 + \\frac{10}{x + 1}.$$\nVì $\\lim\\limits_{x \\to \\pm\\infty} [y - (3x - 5)] = \\lim\\limits_{x \\to \\pm\\infty} \\frac{10}{x + 1} = 0$, nên đường tiệm cận xiên của đồ thị hàm số là đường thẳng $y = 3x - 5$.\nSuy ra $a = 3,\\ b = -5$.\nVậy $3a + b = 3(3) + (-5) = 4$.',
        pedagogicalTip:
          'Chia đa thức $3x^2 - 2x + 5$ cho $x + 1$ được thương là $3x - 5$ và dư $10$, suy ra ngay tiệm cận xiên $y = 3x - 5$.',
        points: 0.5,
      },
      {
        id: 'd7-p3-q3',
        part: 'part3',
        number: 3,
        topic: 'Phần III - Câu 3: Xác định hệ số của hàm phân thức từ đồ thị',
        prompt:
          'Cho hàm số $y = \\frac{ax + b}{2x + c}$ (với $a, b, c \\in \\mathbb{R}$) có đồ thị như hình vẽ. Tính giá trị của $P = 3a + 2b - c$.',
        tikzType: 'd7_p3_q3_graph',
        acceptableAnswers: ['18'],
        explanation:
          'Dựa vào đồ thị hàm số $y = \\frac{ax + b}{2x + c}$:\n- Đồ thị có đường tiệm cận đứng là $x = 2$, suy ra mẫu số $2x + c = 0$ tại $x = 2$: $2(2) + c = 0 \\Leftrightarrow c = -4$.\n- Đồ thị có đường tiệm cận ngang là $y = 1$, suy ra: $\\lim\\limits_{x \\to \\pm\\infty} y = \\frac{a}{2} = 1 \\Leftrightarrow a = 2$.\n- Đồ thị cắt trục tung tại điểm $(0; -1)$, suy ra: $y(0) = \\frac{b}{c} = -1 \\Rightarrow b = -c = -(-4) = 4$.\nThay $a = 2,\\ b = 4,\\ c = -4$ vào biểu thức $P$:\n$$P = 3a + 2b - c = 3(2) + 2(4) - (-4) = 6 + 8 + 4 = 18.$$',
        pedagogicalTip:
          'Chú ý mẫu số của hàm đã cho là $2x + c$ (hệ số của $x$ ở mẫu bằng $2$), nên từ TCĐ $x = 2$ suy ra ngay $c = -4$.',
        points: 0.5,
      },
      {
        id: 'd7-p3-q4',
        part: 'part3',
        number: 4,
        topic: 'Phần III - Câu 4: Ứng dụng đạo hàm trong bài toán tốc độ tăng dân số',
        prompt:
          'Số dân của một thị trấn sau $t$ năm kể từ năm $2010$ được tính bởi công thức $f(t) = \\frac{35t - 75}{t + 5}$ ($f(t)$ được tính bằng nghìn người). Đạo hàm của hàm số $y = f(t)$ biểu thị tốc độ tăng dân số của thị trấn (tính bằng nghìn người/năm). Hỏi vào năm nào thì tốc độ tăng dân số là $0{,}1$ nghìn người/năm?',
        acceptableAnswers: ['2055'],
        explanation:
          'Tốc độ tăng dân số tại thời điểm $t$ là đạo hàm $f\'(t)$:\n$$f\'(t) = \\left(\\frac{35t - 75}{t + 5}\\right)\' = \\frac{35(5) - (-75)(1)}{(t + 5)^2} = \\frac{250}{(t + 5)^2}.$$\nTheo giả thiết, tốc độ tăng dân số là $0{,}1$ nghìn người/năm, ta có phương trình:\n$$\\frac{250}{(t + 5)^2} = 0{,}1 \\Leftrightarrow (t + 5)^2 = \\frac{250}{0{,}1} = 2500.$$\nVì $t > 0$ nên $t + 5 = 50 \\Leftrightarrow t = 45$.\nNăm cần tìm là: $2010 + 45 = 2055$.',
        pedagogicalTip:
          'Sau khi giải được $t + 5 = 50$, nhớ trừ $5$ để được $t = 45$ năm rồi cộng vào mốc năm $2010$.',
        points: 0.5,
      },
    ],
    part4: [
      {
        id: 'd7-p4-q1',
        part: 'part4',
        number: 1,
        topic: 'Phần IV - Câu 1: Tìm các khoảng đơn điệu và cực trị của hàm số bậc ba',
        problemStatement:
          'Tìm các khoảng đơn điệu và cực trị của hàm số $y = \\frac{1}{3}x^3 - x^2 - 3x + 4$.',
        conclusionTarget:
          'Hàm số đồng biến trên $(-\\infty; -1)$ và $(3; +\\infty)$, nghịch biến trên $(-1; 3)$; đạt cực đại tại $x = -1\\ \\left(y_{\\text{CĐ}} = \\frac{17}{3}\\right)$ và đạt cực tiểu tại $x = 3\\ (y_{\\text{CT}} = -5)$.',
        tikzType: 'd7_p4_q1_bbt',
        steps: [
          {
            id: 'd7-p4-q1-s1',
            originalIndex: 1,
            roleDescription: 'Tìm tập xác định và tính đạo hàm của hàm số',
            content:
              'Tập xác định: $D = \\mathbb{R}$. Đạo hàm: $y\' = x^2 - 2x - 3$.',
          },
          {
            id: 'd7-p4-q1-s2',
            originalIndex: 2,
            roleDescription: 'Giải phương trình y\' = 0 và lập bảng biến thiên',
            content:
              'Cho $y\' = 0 \\Leftrightarrow x^2 - 2x - 3 = 0 \\Leftrightarrow \\left[\\begin{array}{l} x = -1 \\\\ x = 3 \\end{array}\\right.$. Lập bảng biến thiên với $y(-1) = \\frac{17}{3}$ và $y(3) = -5$.',
          },
          {
            id: 'd7-p4-q1-s3',
            originalIndex: 3,
            roleDescription: 'Kết luận các khoảng đơn điệu của hàm số',
            content:
              'Kết luận đơn điệu: Hàm số đồng biến trên các khoảng $(-\\infty; -1)$ và $(3; +\\infty)$; hàm số nghịch biến trên khoảng $(-1; 3)$.',
          },
          {
            id: 'd7-p4-q1-s4',
            originalIndex: 4,
            roleDescription: 'Kết luận các điểm cực trị và giá trị cực trị của hàm số',
            content:
              'Kết luận cực trị: Hàm số đạt cực đại tại $x = -1$, giá trị cực đại $y_{\\text{CĐ}} = y(-1) = \\frac{17}{3}$; hàm số đạt cực tiểu tại $x = 3$, giá trị cực tiểu $y_{\\text{CT}} = y(3) = -5$.',
          },
        ],
        pedagogicalTip:
          'Khi tính $y(-1) = \\frac{1}{3}(-1)^3 - (-1)^2 - 3(-1) + 4 = -\\frac{1}{3} - 1 + 3 + 4 = \\frac{17}{3}$, chú ý dấu của $(-1)^2 = 1$.',
        teacherAnalysis:
          'Bài toán chuẩn mực khảo sát sự biến thiên và tìm cực trị của hàm số bậc ba có hệ số $a = \\frac{1}{3} > 0$.',
        points: 1.0,
      },
      {
        id: 'd7-p4-q2',
        part: 'part4',
        number: 2,
        topic: 'Phần IV - Câu 2: Tìm giá trị lớn nhất của hàm số trên đoạn',
        problemStatement:
          'Tìm giá trị lớn nhất của hàm số $y = x^3 - 3x + 5$ trên đoạn $[0; 3]$.',
        conclusionTarget: '$\\max\\limits_{[0; 3]} y = 23$ tại $x = 3$.',
        steps: [
          {
            id: 'd7-p4-q2-s1',
            originalIndex: 1,
            roleDescription: 'Xét tính liên tục và tính đạo hàm của hàm số',
            content:
              'Hàm số $y = x^3 - 3x + 5$ liên tục trên đoạn $[0; 3]$. Đạo hàm: $y\' = 3x^2 - 3$.',
          },
          {
            id: 'd7-p4-q2-s2',
            originalIndex: 2,
            roleDescription: 'Tìm nghiệm của đạo hàm thuộc đoạn [0; 3]',
            content:
              'Cho $y\' = 0 \\Leftrightarrow 3x^2 - 3 = 0 \\Leftrightarrow x^2 = 1 \\Leftrightarrow \\left[\\begin{array}{l} x = 1 \\in [0; 3] \\\\ x = -1 \\notin [0; 3] \\end{array}\\right.$.',
          },
          {
            id: 'd7-p4-q2-s3',
            originalIndex: 3,
            roleDescription: 'Tính giá trị của hàm số tại x = 0, x = 1 và x = 3',
            content:
              'Tính giá trị của hàm số tại các điểm: $y(0) = 5$; $y(1) = 1^3 - 3(1) + 5 = 3$; $y(3) = 3^3 - 3(3) + 5 = 27 - 9 + 5 = 23$.',
          },
          {
            id: 'd7-p4-q2-s4',
            originalIndex: 4,
            roleDescription: 'So sánh các giá trị và kết luận GTLN',
            content:
              'So sánh các giá trị trên, ta có: $\\max\\limits_{[0; 3]} y = 23$ tại $x = 3$.',
          },
        ],
        pedagogicalTip:
          'Nghiệm $x = -1$ không thuộc đoạn $[0; 3]$ nên ta loại ngay và chỉ tính $y(0),\\ y(1),\\ y(3)$.',
        teacherAnalysis:
          'Các bước tìm GTLN trên đoạn đóng $[0; 3]$: Tính đạo hàm -> Giải $y\' = 0$ chọn nghiệm trong $[0; 3]$ -> Tính giá trị hàm số -> So sánh và kết luận.',
        points: 0.5,
      },
      {
        id: 'd7-p4-q3',
        part: 'part4',
        number: 3,
        topic: 'Phần IV - Câu 3: Bài toán thực tế tối ưu lợi nhuận sản xuất của doanh nghiệp',
        problemStatement:
          'Một doanh nghiệp dự định sản xuất $x$ sản phẩm ($0 \\le x \\le 1000$) thì doanh thu nhận được khi bán hết số sản phẩm đó là $F(x) = x^3 - 199x^2 + 650\\,000x + 1\\,200\\,000$ (đồng), trong khi chi phí sản xuất bình quân cho một sản phẩm là $G(x) = x + 5000 + \\frac{1\\,200\\,000}{x}$ (đồng). Doanh nghiệp cần sản xuất bao nhiêu sản phẩm để lợi nhuận thu được là lớn nhất?',
        conclusionTarget:
          'Lợi nhuận lớn nhất khi doanh nghiệp sản xuất số lượng sản phẩm tối đa trong khoảng cho phép, tức là $x = 1000$ sản phẩm.',
        steps: [
          {
            id: 'd7-p4-q3-s1',
            originalIndex: 1,
            roleDescription: 'Tính tổng chi phí sản xuất x sản phẩm C(x)',
            content:
              'Tổng chi phí sản xuất $x$ sản phẩm là: $C(x) = x \\cdot G(x) = x\\left(x + 5000 + \\frac{1\\,200\\,000}{x}\\right) = x^2 + 5000x + 1\\,200\\,000$ (đồng).',
          },
          {
            id: 'd7-p4-q3-s2',
            originalIndex: 2,
            roleDescription: 'Lập hàm lợi nhuận L(x) = F(x) - C(x)',
            content:
              'Lợi nhuận thu được khi bán hết $x$ sản phẩm là: $L(x) = F(x) - C(x) = (x^3 - 199x^2 + 650\\,000x + 1\\,200\\,000) - (x^2 + 5000x + 1\\,200\\,000) = x^3 - 200x^2 + 645\\,000x$ với $x \\in [0; 1000]$.',
          },
          {
            id: 'd7-p4-q3-s3',
            originalIndex: 3,
            roleDescription: 'Tính đạo hàm L\'(x) và xét dấu trên khoảng (0; 1000)',
            content:
              'Xét hàm số $L(x)$ trên khoảng $(0; 1000)$: $L\'(x) = 3x^2 - 400x + 645\\,000$. Ta có $\\Delta\' = (-200)^2 - 3 \\cdot 645\\,000 = 40\\,000 - 1\\,935\\,000 < 0$.',
          },
          {
            id: 'd7-p4-q3-s4',
            originalIndex: 4,
            roleDescription: 'Kết luận tính đồng biến và số sản phẩm tối ưu',
            content:
              'Do $\\Delta\' < 0$ và hệ số $a = 3 > 0$ nên $L\'(x) > 0$ với mọi $x \\in \\mathbb{R}$, suy ra hàm số $L(x)$ luôn đồng biến trên đoạn $[0; 1000]$. Vì vậy, lợi nhuận lớn nhất khi doanh nghiệp sản xuất số lượng sản phẩm tối đa trong khoảng cho phép, tức là $x = 1000$ sản phẩm.',
          },
        ],
        pedagogicalTip:
          'Chú ý $G(x)$ là chi phí bình quân cho 1 sản phẩm, nên tổng chi phí sản xuất $x$ sản phẩm phải nhân thêm $x$: $C(x) = x \\cdot G(x)$.',
        teacherAnalysis:
          'Khi đạo hàm của hàm lợi nhuận $L\'(x) > 0$ với mọi $x \\in [0; 1000]$, hàm lợi nhuận đồng biến trên toàn đoạn nên đạt GTLN tại đầu mút phải $x = 1000$.',
        points: 0.5,
      },
    ],
  },
  {
    id: 'de-so-08',
    title: 'Đề ôn GK1 08',
    subtitle: 'Đề ôn tập Toán 12 — Khảo sát & Ứng dụng đạo hàm (Tương tự Đề ôn GK1 03)',
    grade: 12,
    durationMinutes: 90,
    totalPoints: 10,
    description:
      'Đề ôn tập Toán 12 - Đề ôn GK1 08 (tương tự cấu trúc và ma trận Đề ôn GK1 03) gồm 22 câu hỏi chuẩn cấu trúc 4 phần: Phần I (12 câu trắc nghiệm nhiều lựa chọn từ Câu 1 đến Câu 12 - 3,0đ), Phần II (3 câu trắc nghiệm Đúng/Sai từ Câu 1 đến Câu 3 - 3,0đ), Phần III (4 câu trả lời ngắn từ Câu 1 đến Câu 4 - 2,0đ), Phần IV (3 câu tự luận từ Câu 1 đến Câu 3 - 2,0đ).',
    part1: [
      {
        id: 'd8-p1-q1',
        part: 'part1',
        number: 1,
        topic: 'Tính đơn điệu của hàm số',
        prompt: 'Cho hàm số $y = f(x)$ có bảng biến thiên như sau. Hàm số đã cho nghịch biến trên khoảng nào dưới đây?',
        tikzType: 'd8_q1_bbt',
        options: [
          { key: 'A', content: '$(-2; 4)$' },
          { key: 'B', content: '$(-1; 3)$' },
          { key: 'C', content: '$(3; +\\infty)$' },
          { key: 'D', content: '$(-\\infty; -1)$' },
        ],
        correctAnswer: 'B',
        explanation:
          'Quan sát bảng biến thiên, trên khoảng $(-1; 3)$ ta có $f\'(x) < 0$ và mũi tên đi xuống từ $4$ xuống $-2$, do đó hàm số nghịch biến trên khoảng $(-1; 3)$.',
        pedagogicalTip:
          'Khoảng đồng biến, nghịch biến luôn đọc trên dòng biến $x$, tránh nhầm với khoảng giá trị $(-2; 4)$ trên dòng $f(x)$.',
        points: 0.25,
      },
      {
        id: 'd8-p1-q2',
        part: 'part1',
        number: 2,
        topic: 'Tính đơn điệu từ đồ thị',
        prompt: 'Cho hàm số $y = f(x)$ có đồ thị như hình vẽ bên. Hàm số đã cho đồng biến trên khoảng nào dưới đây?',
        tikzType: 'd8_q2_graph',
        options: [
          { key: 'A', content: '$(-1; 1)$' },
          { key: 'B', content: '$(-1; 3)$' },
          { key: 'C', content: '$(1; +\\infty)$' },
          { key: 'D', content: '$(-1; +\\infty)$' },
        ],
        correctAnswer: 'C',
        explanation:
          'Quan sát đồ thị hàm số từ trái sang phải, nhánh đồ thị đi lên trên các khoảng $(-\\infty; -1)$ và $(1; +\\infty)$. Vậy hàm số đồng biến trên khoảng $(1; +\\infty)$.',
        pedagogicalTip:
          'Nhìn đồ thị từ trái sang phải: nhánh đi lên ứng với khoảng đồng biến, nhánh đi xuống ứng với khoảng nghịch biến.',
        points: 0.25,
      },
      {
        id: 'd8-p1-q3',
        part: 'part1',
        number: 3,
        topic: 'Cực trị của hàm số',
        prompt:
          'Cho hàm số $y = f(x)$ xác định và liên tục trên $\\mathbb{R}$ có đồ thị như hình vẽ bên. Số điểm cực trị của hàm số đã cho là',
        tikzType: 'd8_q3_graph',
        options: [
          { key: 'A', content: '$1$' },
          { key: 'B', content: '$2$' },
          { key: 'C', content: '$3$' },
          { key: 'D', content: '$0$' },
        ],
        correctAnswer: 'C',
        explanation:
          'Đồ thị hàm số có $2$ điểm cực tiểu tại $x = -1$, $x = 1$ và $1$ điểm cực đại tại $x = 0$. Vậy hàm số đã cho có tất cả $3$ điểm cực trị.',
        pedagogicalTip:
          'Số điểm cực trị của hàm số liên tục trên $\\mathbb{R}$ chính là tổng số đỉnh lồi (cực đại) và lõm (cực tiểu) của đồ thị.',
        points: 0.25,
      },
      {
        id: 'd8-p1-q4',
        part: 'part1',
        number: 4,
        topic: 'Giá trị lớn nhất và giá trị nhỏ nhất',
        prompt:
          'Cho hàm số $y = f(x)$ liên tục trên đoạn $[-2; 3]$ và có bảng biến thiên như sau. Khẳng định nào dưới đây **đúng**?',
        tikzType: 'd8_q4_bbt',
        options: [
          { key: 'A', content: '$\\max\\limits_{[-2; 3]} f(x) = 2$' },
          { key: 'B', content: '$\\min\\limits_{[-2; 3]} f(x) = -1$' },
          { key: 'C', content: '$\\min\\limits_{[-2; 3]} f(x) = -3$' },
          { key: 'D', content: '$\\max\\limits_{[-2; 3]} f(x) = 3$' },
        ],
        correctAnswer: 'C',
        explanation:
          'Từ bảng biến thiên trên đoạn $[-2; 3]$, các giá trị tại đầu mút và cực trị là $f(-2) = -1$, $f(0) = 4$, $f(2) = -3$, $f(3) = 2$. Do đó $\\max\\limits_{[-2; 3]} f(x) = 4$ (tại $x = 0$) và $\\min\\limits_{[-2; 3]} f(x) = -3$ (tại $x = 2$).',
        pedagogicalTip:
          'So sánh tất cả các giá trị ở dòng $y$ trên đoạn $[-2; 3]$: số lớn nhất là $\\max$, số nhỏ nhất là $\\min$.',
        points: 0.25,
      },
      {
        id: 'd8-p1-q5',
        part: 'part1',
        number: 5,
        topic: 'Đường tiệm cận của đồ thị hàm số',
        prompt:
          'Cho hàm số $y = f(x)$ có đồ thị như hình vẽ bên. Phương trình đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số lần lượt là',
        tikzType: 'd8_q5_graph',
        options: [
          { key: 'A', content: '$x = 1,\\; y = 2$' },
          { key: 'B', content: '$x = 2,\\; y = 1$' },
          { key: 'C', content: '$x = -1,\\; y = 2$' },
          { key: 'D', content: '$x = 1,\\; y = -1$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Quan sát đồ thị hàm số, đường thẳng đứng nét đứt đi qua điểm $(1; 0)$ là tiệm cận đứng $x = 1$, đường thẳng nằm ngang nét đứt đi qua điểm $(0; 2)$ là tiệm cận ngang $y = 2$.',
        pedagogicalTip:
          'Đọc đúng thứ tự đề hỏi: tiệm cận đứng ($x = x_0$) trước, tiệm cận ngang ($y = y_0$) sau.',
        points: 0.25,
      },
      {
        id: 'd8-p1-q6',
        part: 'part1',
        number: 6,
        topic: 'Nhận diện đồ thị hàm phân thức',
        prompt: 'Đường cong trong hình vẽ bên là đồ thị của hàm số nào dưới đây?',
        tikzType: 'd8_q6_graph',
        options: [
          { key: 'A', content: '$y = \\dfrac{2x - 1}{x + 1}$' },
          { key: 'B', content: '$y = \\dfrac{2x + 1}{x - 1}$' },
          { key: 'C', content: '$y = \\dfrac{x - 2}{x + 1}$' },
          { key: 'D', content: '$y = \\dfrac{2x + 1}{x + 1}$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Đồ thị có tiệm cận đứng $x = -1$, tiệm cận ngang $y = 2$ và cắt trục tung tại điểm $(0; -1)$. Trong các phương án, chỉ có hàm số $y = \\dfrac{2x - 1}{x + 1}$ thỏa mãn cả ba điều kiện trên.',
        pedagogicalTip:
          'Kiểm tra nhanh bằng 3 bước: tiệm cận đứng $x = -1$, tiệm cận ngang $y = 2$, giao điểm với trục tung $(0; -1)$.',
        points: 0.25,
      },
      {
        id: 'd8-p1-q7',
        part: 'part1',
        number: 7,
        topic: 'Nhận diện đồ thị hàm bậc ba',
        prompt: 'Đồ thị trong hình bên là của hàm số nào dưới đây?',
        tikzType: 'd8_q7_graph',
        options: [
          { key: 'A', content: '$y = x^3 - 3x^2 + 1$' },
          { key: 'B', content: '$y = -x^3 + 3x^2 + 1$' },
          { key: 'C', content: '$y = -x^3 - 3x^2 + 1$' },
          { key: 'D', content: '$y = x^4 - 2x^2 + 1$' },
        ],
        correctAnswer: 'B',
        explanation:
          'Đồ thị là đường cong bậc ba có nhánh phải đi xuống ($\\lim\\limits_{x \\to +\\infty} y = -\\infty \\Rightarrow a < 0$), đạt cực tiểu tại $(0; 1)$ và đạt cực đại tại $(2; 5)$. Kiểm tra hàm số $y = -x^3 + 3x^2 + 1$: $y\' = -3x^2 + 6x = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$, $y(0) = 1$, $y(2) = 5$. Chọn B.',
        pedagogicalTip:
          'Nhánh cuối bên phải đi xuống $\\Rightarrow a < 0$; hai điểm cực trị tại $x = 0$ và $x = 2 > 0 \\Rightarrow$ chọn $y = -x^3 + 3x^2 + 1$.',
        points: 0.25,
      },
      {
        id: 'd8-p1-q8',
        part: 'part1',
        number: 8,
        topic: 'Tương giao đồ thị',
        prompt: 'Tung độ giao điểm của đồ thị hàm số $y = \\dfrac{3x - 6}{x + 2}$ với trục tung $Oy$ là',
        options: [
          { key: 'A', content: '$y = 3$' },
          { key: 'B', content: '$y = 2$' },
          { key: 'C', content: '$y = -3$' },
          { key: 'D', content: '$y = -6$' },
        ],
        correctAnswer: 'C',
        explanation:
          'Giao điểm của đồ thị hàm số với trục tung $Oy$ ứng với $x = 0$. Thay $x = 0$ vào hàm số ta được $y = \\dfrac{3 \\cdot 0 - 6}{0 + 2} = -3$.',
        pedagogicalTip:
          'Giao với trục tung $Oy$ thì cho $x = 0$; giao với trục hoành $Ox$ thì cho $y = 0$.',
        points: 0.25,
      },
      {
        id: 'd8-p1-q9',
        part: 'part1',
        number: 9,
        topic: 'Tính đơn điệu của hàm phân thức',
        prompt: 'Hàm số $y = \\dfrac{x^2 + 9}{x}$ đồng biến trên khoảng nào dưới đây?',
        options: [
          { key: 'A', content: '$(-3; 0)$' },
          { key: 'B', content: '$(0; 3)$' },
          { key: 'C', content: '$(-3; 3)$' },
          { key: 'D', content: '$(3; +\\infty)$' },
        ],
        correctAnswer: 'D',
        explanation:
          'Tập xác định $D = \\mathbb{R} \\setminus \\{0\\}$. Ta có $y\' = 1 - \\dfrac{9}{x^2} = \\dfrac{x^2 - 9}{x^2}$. Khi đó $y\' > 0 \\Leftrightarrow x^2 - 9 > 0 \\Leftrightarrow x \\in (-\\infty; -3) \\cup (3; +\\infty)$. Vậy hàm số đồng biến trên khoảng $(3; +\\infty)$.',
        pedagogicalTip:
          'Tách nhanh $\\dfrac{x^2 + 9}{x} = x + \\dfrac{9}{x}$ để lấy đạo hàm $y\' = 1 - \\dfrac{9}{x^2}$ nhanh và chính xác hơn.',
        points: 0.25,
      },
      {
        id: 'd8-p1-q10',
        part: 'part1',
        number: 10,
        topic: 'Cực trị từ bảng xét dấu đạo hàm',
        prompt:
          'Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ và có bảng xét dấu của đạo hàm $f\'(x)$ như sau. Số điểm cực trị của hàm số đã cho là',
        tikzType: 'd8_q10_bxd',
        options: [
          { key: 'A', content: '$2$' },
          { key: 'B', content: '$3$' },
          { key: 'C', content: '$4$' },
          { key: 'D', content: '$1$' },
        ],
        correctAnswer: 'B',
        explanation:
          'Vì hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ và đạo hàm $f\'(x)$ đổi dấu khi đi qua $3$ điểm $x = -2$ (từ $+$ sang $-$), $x = 0$ (từ $-$ sang $+$, dù $f\'(0)$ không xác định nhưng $f(x)$ liên tục tại $0$) và $x = 4$ (từ $+$ sang $-$). Qua $x = 2$ đạo hàm không đổi dấu. Vậy hàm số có $3$ điểm cực trị.',
        pedagogicalTip:
          'Nếu hàm số $f(x)$ liên tục tại $x_0$ và $f\'(x)$ đổi dấu khi đi qua $x_0$ (kể cả khi $f\'(x_0)$ không xác định) thì $x_0$ vẫn là điểm cực trị của hàm số.',
        points: 0.25,
      },
      {
        id: 'd8-p1-q11',
        part: 'part1',
        number: 11,
        topic: 'Đường tiệm cận từ bảng biến thiên',
        prompt:
          'Cho hàm số $y = f(x)$ có bảng biến thiên như sau. Tổng số đường tiệm cận ngang của đồ thị hàm số đã cho là',
        tikzType: 'd8_q11_bbt',
        options: [
          { key: 'A', content: '$1$' },
          { key: 'B', content: '$2$' },
          { key: 'C', content: '$3$' },
          { key: 'D', content: '$0$' },
        ],
        correctAnswer: 'B',
        explanation:
          'Từ bảng biến thiên ta có $\\lim\\limits_{x \\to -\\infty} y = -1$ và $\\lim\\limits_{x \\to +\\infty} y = 3$. Do đó đồ thị hàm số có $2$ đường tiệm cận ngang là $y = -1$ và $y = 3$.',
        pedagogicalTip:
          'Để tìm tiệm cận ngang trên bảng biến thiên, chỉ cần quan sát giá trị của $y$ tại hai đầu $x \\to -\\infty$ và $x \\to +\\infty$.',
        points: 0.25,
      },
      {
        id: 'd8-p1-q12',
        part: 'part1',
        number: 12,
        topic: 'Tâm đối xứng của đồ thị hàm số',
        prompt: 'Đồ thị của hàm số nào dưới đây có tâm đối xứng là điểm $I(1; 2)$?',
        options: [
          { key: 'A', content: '$y = \\dfrac{2x + 1}{x - 1}$' },
          { key: 'B', content: '$y = \\dfrac{x - 2}{x + 1}$' },
          { key: 'C', content: '$y = \\dfrac{2x - 1}{x + 1}$' },
          { key: 'D', content: '$y = x^3 - 3x + 2$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Tâm đối xứng của đồ thị hàm phân thức bậc nhất trên bậc nhất là giao điểm của đường tiệm cận đứng và đường tiệm cận ngang. Hàm số $y = \\dfrac{2x + 1}{x - 1}$ có tiệm cận đứng $x = 1$ và tiệm cận ngang $y = 2$, nên nhận điểm $I(1; 2)$ làm tâm đối xứng.',
        pedagogicalTip:
          'Đồ thị hàm số $y = \\dfrac{ax + b}{cx + d}$ ($ad - bc \\neq 0, c \\neq 0$) luôn nhận giao điểm hai đường tiệm cận $I\\left(-\\dfrac{d}{c}; \\dfrac{a}{c}\\right)$ làm tâm đối xứng.',
        points: 0.25,
      },
    ],
    part2: [
      {
        id: 'd8-p2-q1',
        part: 'part2',
        number: 1,
        topic: 'Phần II - Câu 1: Khảo sát hàm số qua bảng biến thiên',
        prompt:
          'Cho hàm số $y = f(x)$ xác định trên $\\mathbb{R} \\setminus \\{1\\}$, liên tục trên mỗi khoảng xác định và có bảng biến thiên như hình vẽ dưới đây. Xét tính đúng sai của các mệnh đề sau:',
        tikzType: 'd8_p2_q1_bbt',
        statements: [
          {
            id: 'a',
            label: 'a',
            statement: 'Hàm số đồng biến trên khoảng $(-\\infty; -1)$.',
            isCorrect: true,
            explanation: 'Đúng. Trên khoảng $(-\\infty; -1)$, $f\'(x) > 0$ nên hàm số đồng biến.',
          },
          {
            id: 'b',
            label: 'b',
            statement:
              'Đồ thị hàm số có đúng một đường tiệm cận ngang là $y = 2$ và một đường tiệm cận đứng là $x = 1$.',
            isCorrect: true,
            explanation:
              'Đúng. Vì $\\lim\\limits_{x \\to +\\infty} f(x) = 2$ và $\\lim\\limits_{x \\to -\\infty} f(x) = -\\infty$ nên đồ thị có đúng một tiệm cận ngang $y = 2$. Mặt khác $\\lim\\limits_{x \\to 1^-} f(x) = -\\infty$ và $\\lim\\limits_{x \\to 1^+} f(x) = +\\infty$ nên $x = 1$ là tiệm cận đứng.',
          },
          {
            id: 'c',
            label: 'c',
            statement: 'Hàm số đạt cực đại tại điểm $x = -1$ và giá trị cực đại bằng $3$.',
            isCorrect: true,
            explanation:
              'Đúng. Qua $x = -1$, đạo hàm $f\'(x)$ đổi dấu từ $+$ sang $-$ và $f(-1) = 3$.',
          },
          {
            id: 'd',
            label: 'd',
            statement: 'Trên khoảng $(1; +\\infty)$, giá trị nhỏ nhất của hàm số bằng $2$.',
            isCorrect: false,
            explanation:
              'Sai. Trên khoảng $(1; +\\infty)$, hàm số nghịch biến từ $+\\infty$ giảm dần về đường tiệm cận ngang $y = 2$, tức là $f(x) > 2$ với mọi $x > 1$ nhưng không tồn tại $x_0 \\in (1; +\\infty)$ để $f(x_0) = 2$. Vậy hàm số không có giá trị nhỏ nhất trên $(1; +\\infty)$.',
          },
        ],
        pedagogicalTip:
          'Giá trị giới hạn tại vô cực ($\\lim\\limits_{x \\to +\\infty} f(x) = 2$) không phải là giá trị nhỏ nhất nếu hàm số không đạt được giá trị $2$ tại một điểm $x_0$ thuộc tập đang xét.',
      },
      {
        id: 'd8-p2-q2',
        part: 'part2',
        number: 2,
        topic: 'Phần II - Câu 2: Phân tích đồ thị hàm số bậc ba',
        prompt:
          'Cho hàm số bậc ba $y = f(x) = ax^3 + bx^2 + cx + d$ có đồ thị như hình vẽ bên. Xét tính đúng sai của các mệnh đề sau:',
        tikzType: 'd8_p2_q2_graph',
        statements: [
          {
            id: 'a',
            label: 'a',
            statement: 'Hàm số đồng biến trên khoảng $(-1; 1)$.',
            isCorrect: true,
            explanation:
              'Đúng. Trên khoảng $(-1; 1)$, đồ thị hàm số đi lên từ điểm $(-1; -1)$ đến điểm $(1; 3)$ nên hàm số đồng biến.',
          },
          {
            id: 'b',
            label: 'b',
            statement: 'Điểm cực đại của đồ thị hàm số là $M(1; 3)$.',
            isCorrect: true,
            explanation:
              'Đúng. Đỉnh cực đại trên đồ thị hàm số có tọa độ là $M(1; 3)$.',
          },
          {
            id: 'c',
            label: 'c',
            statement: 'Giá trị lớn nhất của hàm số trên đoạn $[-1; 2]$ bằng $3$.',
            isCorrect: true,
            explanation:
              'Đúng. Quan sát đồ thị trên đoạn $[-1; 2]$, điểm cao nhất là $(1; 3)$ nên $\\max\\limits_{[-1; 2]} f(x) = f(1) = 3$.',
          },
          {
            id: 'd',
            label: 'd',
            statement: 'Hệ số $a > 0$ và $d > 0$.',
            isCorrect: false,
            explanation:
              'Sai. Nhánh bên phải của đồ thị đi xuống ($\\lim\\limits_{x \\to +\\infty} f(x) = -\\infty$) nên hệ số $a < 0$ (mặc dù đồ thị cắt trục tung tại $(0; 1)$ nên $d = 1 > 0$).',
          },
        ],
        pedagogicalTip:
          'Xét dấu hệ số $a$ dựa vào nhánh phải cùng của đồ thị bậc ba; xét dấu hệ số tự do $d$ dựa vào giao điểm của đồ thị với trục tung $Oy$.',
      },
      {
        id: 'd8-p2-q3',
        part: 'part2',
        number: 3,
        topic: 'Phần II - Câu 3: Ứng dụng đạo hàm trong bài toán lợi nhuận',
        prompt:
          'Một công ty công nghệ tung ra thị trường một dòng thiết bị thông minh mới. Lợi nhuận thu được $P(t)$ (tính bằng tỷ đồng) sau $t$ tháng kể từ khi mở bán ($0 \\le t \\le 12$) được mô hình hóa bởi hàm số $P(t) = -t^3 + 12t^2 + 27t + 10$. Xét tính đúng sai của các mệnh đề sau:',
        statements: [
          {
            id: 'a',
            label: 'a',
            statement: 'Lợi nhuận ban đầu tại thời điểm mới mở bán ($t = 0$) là $10$ tỷ đồng.',
            isCorrect: true,
            explanation:
              'Đúng. Thay $t = 0$ vào biểu thức ta có $P(0) = -0^3 + 12 \\cdot 0^2 + 27 \\cdot 0 + 10 = 10$ (tỷ đồng).',
          },
          {
            id: 'b',
            label: 'b',
            statement: 'Đạo hàm của hàm lợi nhuận là $P\'(t) = -3t^2 + 24t + 27$.',
            isCorrect: true,
            explanation:
              'Đúng. Lấy đạo hàm theo biến $t$: $P\'(t) = (-t^3 + 12t^2 + 27t + 10)\' = -3t^2 + 24t + 27$.',
          },
          {
            id: 'c',
            label: 'c',
            statement: 'Lợi nhuận của công ty tăng liên tục trong suốt $12$ tháng đầu tiên.',
            isCorrect: false,
            explanation:
              'Sai. Giải $P\'(t) = 0 \\Leftrightarrow -3t^2 + 24t + 27 = 0 \\Leftrightarrow t = 9$ (do $t \\in [0; 12]$, loại $t = -1$). Trên khoảng $(9; 12)$ ta có $P\'(t) < 0$, tức là lợi nhuận chỉ tăng trong $9$ tháng đầu và giảm từ tháng thứ $9$ đến tháng thứ $12$.',
          },
          {
            id: 'd',
            label: 'd',
            statement: 'Lợi nhuận lớn nhất mà công ty đạt được trong $12$ tháng đầu là $496$ tỷ đồng.',
            isCorrect: true,
            explanation:
              'Đúng. Ta có $P(0) = 10$, $P(9) = -9^3 + 12 \\cdot 9^2 + 27 \\cdot 9 + 10 = 496$, $P(12) = -12^3 + 12 \\cdot 12^2 + 27 \\cdot 12 + 10 = 334$. Vậy $\\max\\limits_{[0; 12]} P(t) = P(9) = 496$ (tỷ đồng).',
          },
        ],
        pedagogicalTip:
          'Để kiểm tra hàm số có tăng liên tục trên $[0; 12]$ hay không, cần xét dấu đạo hàm $P\'(t)$ trên toàn bộ khoảng $(0; 12)$.',
      },
    ],
    part3: [
      {
        id: 'd8-p3-q1',
        part: 'part3',
        number: 1,
        topic: 'Phần III - Câu 1: Số điểm cực trị từ biểu thức đạo hàm',
        prompt:
          'Cho hàm số $y = f(x)$ xác định và liên tục trên $\\mathbb{R}$, có đạo hàm $f\'(x) = x^2(x - 1)(x + 2)^3(2x - 4)$ với mọi $x \\in \\mathbb{R}$. Hàm số $y = f(x)$ có bao nhiêu điểm cực trị?',
        acceptableAnswers: ['3'],
        explanation:
          'Ta viết lại $f\'(x) = 2x^2(x - 1)(x + 2)^3(x - 2)$. Phương trình $f\'(x) = 0$ có các nghiệm $x = 0$ (bội $2$ - bội chẵn), $x = 1$ (bội $1$ - bội lẻ), $x = -2$ (bội $3$ - bội lẻ) và $x = 2$ (bội $1$ - bội lẻ). Đạo hàm $f\'(x)$ đổi dấu khi qua $3$ nghiệm bội lẻ $x = -2, x = 1, x = 2$. Vậy hàm số có $3$ điểm cực trị.',
        pedagogicalTip:
          'Số điểm cực trị của hàm số đa thức chính là số nghiệm phân biệt bội lẻ của phương trình $f\'(x) = 0$.',
        points: 0.5,
      },
      {
        id: 'd8-p3-q2',
        part: 'part3',
        number: 2,
        topic: 'Phần III - Câu 2: Bài toán thực tế — Nuôi cấy vi khuẩn',
        prompt:
          'Số lượng vi khuẩn $N(t)$ trong một mẫu nuôi cấy tại phòng thí nghiệm sau $t$ giờ ($t \\ge 0$) kể từ khi bắt đầu quan sát được xác định bởi công thức $N(t) = 2000 + 18t^2 - t^3$ (con). Hỏi sau bao nhiêu giờ kể từ lúc bắt đầu quan sát thì số lượng vi khuẩn ngừng tăng và bắt đầu giảm?',
        acceptableAnswers: ['12'],
        explanation:
          'Ta có đạo hàm $N\'(t) = 36t - 3t^2 = 3t(12 - t)$ với $t \\ge 0$. Cho $N\'(t) = 0$ với $t > 0 \\Leftrightarrow t = 12$. Khi $t \\in (0; 12)$ thì $N\'(t) > 0$ (vi khuẩn tăng); khi $t > 12$ thì $N\'(t) < 0$ (vi khuẩn giảm). Vậy sau $12$ giờ thì số lượng vi khuẩn ngừng tăng và bắt đầu giảm.',
        pedagogicalTip:
          'Thời điểm số lượng vi khuẩn ngừng tăng và bắt đầu giảm chính là điểm cực đại của hàm $N(t)$ với $t > 0$.',
        points: 0.5,
      },
      {
        id: 'd8-p3-q3',
        part: 'part3',
        number: 3,
        topic: 'Phần III - Câu 3: Tiệm cận xiên của đồ thị hàm phân thức',
        prompt:
          'Biết đường thẳng $y = ax + b$ là tiệm cận xiên của đồ thị hàm số $y = \\dfrac{3x^2 - 4x + 5}{x - 2}$. Tính giá trị của biểu thức $T = 2a + b$.',
        acceptableAnswers: ['8'],
        explanation:
          'Thực hiện phép chia đa thức ta có: $y = \\dfrac{3x^2 - 4x + 5}{x - 2} = 3x + 2 + \\dfrac{9}{x - 2}$. Vì $\\lim\\limits_{x \\to \\pm\\infty} \\left[y - (3x + 2)\\right] = \\lim\\limits_{x \\to \\pm\\infty} \\dfrac{9}{x - 2} = 0$ nên tiệm cận xiên của đồ thị hàm số là đường thẳng $y = 3x + 2$. Suy ra $a = 3,\\; b = 2 \\Rightarrow T = 2a + b = 2 \\cdot 3 + 2 = 8$.',
        pedagogicalTip:
          'Chia đa thức $3x^2 - 4x + 5$ cho $x - 2$ được thương $3x + 2$ và dư $9$, suy ra ngay tiệm cận xiên $y = 3x + 2$.',
        points: 0.5,
      },
      {
        id: 'd8-p3-q4',
        part: 'part3',
        number: 4,
        topic: 'Phần III - Câu 4: Bài toán thực tế — Tốc độ tăng dân số',
        prompt:
          'Dân số của một khu đô thị công nghệ cao sau $t$ năm kể từ đầu năm 2025 ($t \\ge 0$) được ước tính bởi công thức $f(t) = \\dfrac{45t + 18}{t + 2}$ (nghìn người). Đạo hàm $f\'(t)$ biểu thị tốc độ tăng dân số của khu đô thị đó (tính bằng nghìn người/năm). Hỏi vào thời điểm $t = 4$ (tức đầu năm 2029), tốc độ tăng dân số của khu đô thị là bao nhiêu nghìn người/năm?',
        acceptableAnswers: ['2'],
        explanation:
          'Ta có đạo hàm $f\'(t) = \\dfrac{45(t + 2) - 1 \\cdot (45t + 18)}{(t + 2)^2} = \\dfrac{72}{(t + 2)^2}$. Tại thời điểm $t = 4$, tốc độ tăng dân số là $f\'(4) = \\dfrac{72}{(4 + 2)^2} = \\dfrac{72}{36} = 2$ (nghìn người/năm).',
        pedagogicalTip:
          'Áp dụng công thức đạo hàm hàm phân thức bậc nhất trên bậc nhất: $\\left(\\dfrac{at + b}{ct + d}\\right)\' = \\dfrac{ad - bc}{(ct + d)^2}$.',
        points: 0.5,
      },
    ],
    part4: [
      {
        id: 'd8-p4-q1',
        part: 'part4',
        number: 1,
        topic: 'Phần IV - Câu 1: Khảo sát sự biến thiên và tìm cực trị hàm bậc ba',
        problemStatement: 'Xét tính đơn điệu và tìm cực trị của hàm số $y = -x^3 + 3x^2 + 9x - 2$.',
        tikzType: 'd8_p4_q1_bbt',
        conclusionTarget:
          'Hàm số đồng biến trên khoảng $(-1; 3)$, nghịch biến trên các khoảng $(-\\infty; -1)$ và $(3; +\\infty)$; đạt cực tiểu tại $x = -1$, $y_{\\text{CT}} = -7$ và đạt cực đại tại $x = 3$, $y_{\\text{CĐ}} = 25$.',
        steps: [
          {
            id: 'd8-p4-q1-s1',
            originalIndex: 1,
            roleDescription: 'Tìm tập xác định của hàm số',
            content: 'Tập xác định của hàm số là $D = \\mathbb{R}$.',
          },
          {
            id: 'd8-p4-q1-s2',
            originalIndex: 2,
            roleDescription: 'Tính đạo hàm y\' và tìm các nghiệm của y\' = 0',
            content:
              'Ta có đạo hàm $y\' = -3x^2 + 6x + 9$. Cho $y\' = 0 \\Leftrightarrow -3x^2 + 6x + 9 = 0 \\Leftrightarrow x = -1$ hoặc $x = 3$.',
          },
          {
            id: 'd8-p4-q1-s3',
            originalIndex: 3,
            roleDescription: 'Tính giới hạn và giá trị hàm số tại các điểm cực trị để lập bảng biến thiên',
            content:
              'Ta có $\\lim\\limits_{x \\to -\\infty} y = +\\infty$, $\\lim\\limits_{x \\to +\\infty} y = -\\infty$; $y(-1) = -(-1)^3 + 3(-1)^2 + 9(-1) - 2 = -7$ và $y(3) = -3^3 + 3 \\cdot 3^2 + 9 \\cdot 3 - 2 = 25$. Lập bảng biến thiên như hình vẽ.',
          },
          {
            id: 'd8-p4-q1-s4',
            originalIndex: 4,
            roleDescription: 'Kết luận khoảng đơn điệu và cực trị của hàm số',
            content:
              'Vậy hàm số đồng biến trên khoảng $(-1; 3)$ và nghịch biến trên các khoảng $(-\\infty; -1)$, $(3; +\\infty)$. Hàm số đạt cực tiểu tại $x = -1$ với $y_{\\text{CT}} = -7$ và đạt cực đại tại $x = 3$ với $y_{\\text{CĐ}} = 25$.',
          },
        ],
        pedagogicalTip:
          'Với tam thức bậc hai $y\' = -3x^2 + 6x + 9$ có $a = -3 < 0$, dấu của $y\'$ tuân theo quy tắc "trong trái (+), ngoài cùng (-)".',
        teacherAnalysis:
          'Luôn trình bày đầy đủ 4 bước: Tập xác định -> Đạo hàm & nghiệm -> Bảng biến thiên -> Kết luận riêng rẽ từng khoảng đơn điệu và điểm cực trị.',
        points: 0.75,
      },
      {
        id: 'd8-p4-q2',
        part: 'part4',
        number: 2,
        topic: 'Phần IV - Câu 2: Tìm GTLN - GTNN của hàm phân thức trên một đoạn',
        problemStatement:
          'Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số $y = \\dfrac{2x - 1}{x + 1}$ trên đoạn $[0; 2]$.',
        conclusionTarget:
          'Trên đoạn $[0; 2]$, giá trị lớn nhất là $\\max\\limits_{[0; 2]} y = y(2) = 1$ và giá trị nhỏ nhất là $\\min\\limits_{[0; 2]} y = y(0) = -1$.',
        steps: [
          {
            id: 'd8-p4-q2-s1',
            originalIndex: 1,
            roleDescription: 'Xác định tính liên tục của hàm số trên đoạn [0; 2]',
            content:
              'Hàm số $y = \\dfrac{2x - 1}{x + 1}$ có tập xác định $D = \\mathbb{R} \\setminus \\{-1\\}$. Vì $-1 \\notin [0; 2]$ nên hàm số xác định và liên tục trên đoạn $[0; 2]$.',
          },
          {
            id: 'd8-p4-q2-s2',
            originalIndex: 2,
            roleDescription: 'Tính đạo hàm và xét tính đơn điệu trên đoạn [0; 2]',
            content:
              'Ta có đạo hàm $y\' = \\dfrac{2(x + 1) - 1 \\cdot (2x - 1)}{(x + 1)^2} = \\dfrac{3}{(x + 1)^2} > 0$ với mọi $x \\in [0; 2]$. Do đó hàm số đồng biến trên đoạn $[0; 2]$.',
          },
          {
            id: 'd8-p4-q2-s3',
            originalIndex: 3,
            roleDescription: 'Tính giá trị của hàm số tại hai đầu mút x = 0 và x = 2',
            content:
              'Tính giá trị hàm số tại hai đầu mút của đoạn $[0; 2]$: $y(0) = \\dfrac{2 \\cdot 0 - 1}{0 + 1} = -1$ và $y(2) = \\dfrac{2 \\cdot 2 - 1}{2 + 1} = \\dfrac{3}{3} = 1$.',
          },
          {
            id: 'd8-p4-q2-s4',
            originalIndex: 4,
            roleDescription: 'Kết luận giá trị lớn nhất và giá trị nhỏ nhất',
            content:
              'Vậy $\\max\\limits_{[0; 2]} y = y(2) = 1$ (đạt tại $x = 2$) và $\\min\\limits_{[0; 2]} y = y(0) = -1$ (đạt tại $x = 0$).',
          },
        ],
        pedagogicalTip:
          'Khi xét GTLN - GTNN của hàm phân thức $y = \\dfrac{ax + b}{cx + d}$ trên đoạn $[\\alpha; \\beta]$ không chứa nghiệm mẫu, hàm số luôn đơn điệu nên GTLN và GTNN đạt tại hai đầu mút.',
        teacherAnalysis:
          'Cần nêu rõ lý do hàm số liên tục trên đoạn $[0; 2]$ (do $-1 \\notin [0; 2]$) trước khi sử dụng tính đơn điệu để kết luận GTLN, GTNN.',
        points: 0.75,
      },
      {
        id: 'd8-p4-q3',
        part: 'part4',
        number: 3,
        topic: 'Phần IV - Câu 3: Bài toán thực tế — Tối ưu hóa chi phí trung bình',
        problemStatement:
          'Một xưởng cơ khí sản xuất $x$ (chiếc) linh kiện mỗi ngày ($x > 0$). Tổng chi phí sản xuất $x$ linh kiện (tính bằng nghìn đồng) được cho bởi hàm số $C(x) = x^2 + 30x + 900$. Biết chi phí trung bình để sản xuất một linh kiện là $\\overline{C}(x) = \\dfrac{C(x)}{x}$. Hãy tìm số lượng linh kiện $x$ cần sản xuất mỗi ngày để chi phí trung bình $\\overline{C}(x)$ là thấp nhất và tính chi phí trung bình tối thiểu đó.',
        tikzType: 'd8_p4_q3_bbt',
        conclusionTarget:
          'Xưởng cần sản xuất $x = 30$ linh kiện mỗi ngày để chi phí trung bình đạt mức thấp nhất là $90$ nghìn đồng/chiếc.',
        steps: [
          {
            id: 'd8-p4-q3-s1',
            originalIndex: 1,
            roleDescription: 'Lập biểu thức hàm chi phí trung bình trên khoảng (0; +∞)',
            content:
              'Với $x \\in (0; +\\infty)$, hàm chi phí trung bình để sản xuất một linh kiện là: $\\overline{C}(x) = \\dfrac{x^2 + 30x + 900}{x} = x + 30 + \\dfrac{900}{x}$ (nghìn đồng).',
          },
          {
            id: 'd8-p4-q3-s2',
            originalIndex: 2,
            roleDescription: 'Tính đạo hàm và tìm điểm cực trị dương',
            content:
              'Ta có đạo hàm $\\overline{C}\'(x) = 1 - \\dfrac{900}{x^2} = \\dfrac{x^2 - 900}{x^2}$. Với $x > 0$, giải $\\overline{C}\'(x) = 0 \\Leftrightarrow x^2 = 900 \\Leftrightarrow x = 30$ (nhận vì $x > 0$).',
          },
          {
            id: 'd8-p4-q3-s3',
            originalIndex: 3,
            roleDescription: 'Xét bảng biến thiên và tính giá trị tại x = 30',
            content:
              'Trên khoảng $(0; 30)$ ta có $\\overline{C}\'(x) < 0$ và trên khoảng $(30; +\\infty)$ ta có $\\overline{C}\'(x) > 0$. Tại $x = 30$, ta có $\\overline{C}(30) = 30 + 30 + \\dfrac{900}{30} = 90$ (nghìn đồng).',
          },
          {
            id: 'd8-p4-q3-s4',
            originalIndex: 4,
            roleDescription: 'Kết luận số lượng linh kiện tối ưu và chi phí trung bình thấp nhất',
            content:
              'Dựa vào bảng biến thiên, $\\min\\limits_{(0; +\\infty)} \\overline{C}(x) = \\overline{C}(30) = 90$. Vậy xưởng cần sản xuất $30$ linh kiện mỗi ngày để chi phí trung bình đạt mức thấp nhất là $90$ nghìn đồng/chiếc.',
          },
        ],
        pedagogicalTip:
          'Ngoài cách dùng đạo hàm, có thể kiểm tra nhanh kết quả bằng bất đẳng thức Cauchy cho hai số dương $x$ và $\\dfrac{900}{x}$: $x + \\dfrac{900}{x} \\ge 2\\sqrt{x \\cdot \\dfrac{900}{x}} = 60 \\Rightarrow \\overline{C}(x) \\ge 90$.',
        teacherAnalysis:
          'Bài toán tối ưu hóa chi phí trung bình $\\overline{C}(x) = \\dfrac{C(x)}{x}$ là dạng toán thực tế chuẩn SGK Toán 12 Chương I, cần chú ý điều kiện thực tế $x > 0$ khi giải phương trình $\\overline{C}\'(x) = 0$.',
        points: 0.5,
      },
    ],
  },
];





