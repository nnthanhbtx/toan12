export interface TheoryFormulaBox {
  title: string;
  content: string;
  formula?: string;
  note?: string;
}

export interface TheorySection {
  heading: string;
  summary?: string;
  boxes: TheoryFormulaBox[];
  remarks?: string[];
}

export interface LessonTheory {
  lessonId: string;
  lessonNumber: number;
  title: string;
  chapterId: string;
  chapterTitle: string;
  volume: 1 | 2;
  pageNumber: number;
  keyConcepts: string[];
  sections: TheorySection[];
  examIds: [string, string];
}

export interface ChapterTheoryGroup {
  chapterId: string;
  chapterTitle: string;
  volume: 1 | 2;
  lessons: LessonTheory[];
}

export const THEORY_CATALOG: ChapterTheoryGroup[] = [
  {
    chapterId: 'chuong-1',
    chapterTitle: 'CHƯƠNG I. ỨNG DỤNG ĐẠO HÀM ĐỂ KHẢO SÁT VÀ VẼ ĐỒ THỊ HÀM SỐ',
    volume: 1,
    lessons: [
      {
        lessonId: 'bai-1',
        lessonNumber: 1,
        title: 'Bài 1. Tính đơn điệu và cực trị của hàm số',
        chapterId: 'chuong-1',
        chapterTitle: 'CHƯƠNG I. ỨNG DỤNG ĐẠO HÀM ĐỂ KHẢO SÁT VÀ VẼ ĐỒ THỊ HÀM SỐ',
        volume: 1,
        pageNumber: 5,
        keyConcepts: [
          'Tính đồng biến, nghịch biến của hàm số',
          'Liên hệ giữa đạo hàm và tính đơn điệu',
          'Điểm cực đại, điểm cực tiểu, giá trị cực trị',
          'Cách tìm cực trị của hàm số bằng đạo hàm'
        ],
        examIds: ['bai1_de1', 'bai1_de2'],
        sections: [
          {
            heading: '1. Tính đơn điệu của hàm số',
            summary: 'Khái niệm tính đồng biến, nghịch biến của hàm số và mối liên hệ với dấu của đạo hàm cấp một trên khoảng $K$.',
            boxes: [
              {
                title: 'Định nghĩa tính đồng biến, nghịch biến (SGK trang 6)',
                content: 'Giả sử hàm số $y = f(x)$ xác định trên khoảng $K$ ($K$ có thể là một khoảng, một đoạn hoặc một nửa khoảng):',
                formula: '$$\\begin{aligned} &\\bullet\\ \\text{Hàm số } y = f(x) \\text{ đồng biến (tăng) trên } K \\iff \\forall x_1, x_2 \\in K:\\ x_1 < x_2 \\Rightarrow f(x_1) < f(x_2). \\\\ &\\bullet\\ \\text{Hàm số } y = f(x) \\text{ nghịch biến (giảm) trên } K \\iff \\forall x_1, x_2 \\in K:\\ x_1 < x_2 \\Rightarrow f(x_1) > f(x_2). \\end{aligned}$$',
                note: 'Hàm số đồng biến hoặc nghịch biến trên $K$ được gọi chung là hàm số đơn điệu trên $K$. Khi xét tính đơn điệu mà không chỉ rõ tập $K$ thì ta hiểu là xét trên từng khoảng xác định của hàm số.'
              },
              {
                title: 'Định lí liên hệ giữa đạo hàm và tính đơn điệu (SGK trang 6–7)',
                content: 'Cho hàm số $y = f(x)$ có đạo hàm trên khoảng $K$:',
                formula: '$$\\begin{aligned} &\\bullet\\ \\text{Nếu } f\'(x) > 0,\\ \\forall x \\in K \\text{ thì hàm số } y = f(x) \\text{ đồng biến trên khoảng } K. \\\\ &\\bullet\\ \\text{Nếu } f\'(x) < 0,\\ \\forall x \\in K \\text{ thì hàm số } y = f(x) \\text{ nghịch biến trên khoảng } K. \\\\ &\\bullet\\ \\text{Nếu } f\'(x) = 0,\\ \\forall x \\in K \\text{ thì hàm số } y = f(x) \\text{ không đổi trên khoảng } K. \\end{aligned}$$',
                note: 'Định lí mở rộng (Chú ý trang 7): Nếu $f\'(x) \\ge 0\\ (\\text{hoặc } f\'(x) \\le 0)$ với mọi $x \\in K$ và $f\'(x) = 0$ chỉ tại một số hữu hạn điểm của $K$ thì hàm số $f(x)$ đồng biến (hoặc nghịch biến) trên khoảng $K$.'
              },
              {
                title: 'Các bước xét tính đơn điệu của hàm số $y = f(x)$ (SGK trang 8)',
                content: 'Quy trình 4 bước chuẩn xác để xét chiều biến thiên của hàm số:',
                formula: '$$\\begin{aligned} &\\text{Bước 1. Tìm tập xác định của hàm số.} \\\\ &\\text{Bước 2. Tính đạo hàm } f\'(x).\\text{ Tìm các điểm } x_i\\ (i = 1, 2, \\dots, n)\\text{ mà tại đó } f\'(x) = 0 \\text{ hoặc } f\'(x) \\text{ không tồn tại.} \\\\ &\\text{Bước 3. Sắp xếp các điểm } x_i \\text{ theo thứ tự tăng dần và lập bảng biến thiên của hàm số.} \\\\ &\\text{Bước 4. Nêu kết luận về khoảng đồng biến, nghịch biến của hàm số.} \\end{aligned}$$'
              }
            ]
          },
          {
            heading: '2. Cực trị của hàm số',
            summary: 'Khái niệm điểm cực đại, điểm cực tiểu, giá trị cực trị của hàm số và dấu hiệu nhận biết qua sự đổi dấu của đạo hàm $f\'(x)$.',
            boxes: [
              {
                title: 'Định nghĩa cực đại, cực tiểu của hàm số (SGK trang 10)',
                content: 'Cho hàm số $y = f(x)$ xác định và liên tục trên khoảng $(a; b)$ ($a$ có thể là $-\\infty$, $b$ có thể là $+\\infty$) và điểm $x_0 \\in (a; b)$:',
                formula: '$$\\begin{aligned} &\\bullet\\ \\text{Nếu tồn tại số } h > 0 \\text{ sao cho } f(x) < f(x_0),\\ \\forall x \\in (x_0 - h; x_0 + h) \\setminus \\{x_0\\} \\text{ thì } x_0 \\text{ là điểm cực đại của hàm số.} \\\\ &\\bullet\\ \\text{Nếu tồn tại số } h > 0 \\text{ sao cho } f(x) > f(x_0),\\ \\forall x \\in (x_0 - h; x_0 + h) \\setminus \\{x_0\\} \\text{ thì } x_0 \\text{ là điểm cực tiểu của hàm số.} \\end{aligned}$$',
                note: 'Giá trị $f(x_0)$ được gọi là giá trị cực đại (kí hiệu $f_{\\text{CĐ}}$) hoặc giá trị cực tiểu (kí hiệu $f_{\\text{CT}}$) của hàm số; điểm $M(x_0; f(x_0))$ được gọi là điểm cực trị của đồ thị hàm số.'
              },
              {
                title: 'Định lí dấu hiệu nhận biết cực trị qua đạo hàm (SGK trang 11)',
                content: 'Giả sử hàm số $y = f(x)$ liên tục trên khoảng $(a; b)$ chứa điểm $x_0$ và có đạo hàm trên các khoảng $(a; x_0)$ và $(x_0; b)$. Khi đó:',
                formula: '$$\\begin{aligned} &\\bullet\\ \\text{Nếu } f\'(x) < 0,\\ \\forall x \\in (a; x_0) \\text{ và } f\'(x) > 0,\\ \\forall x \\in (x_0; b) \\text{ (đổi dấu từ âm sang dương) thì } x_0 \\text{ là một điểm cực tiểu.} \\\\ &\\bullet\\ \\text{Nếu } f\'(x) > 0,\\ \\forall x \\in (a; x_0) \\text{ và } f\'(x) < 0,\\ \\forall x \\in (x_0; b) \\text{ (đổi dấu từ dương sang âm) thì } x_0 \\text{ là một điểm cực đại.} \\end{aligned}$$',
                note: 'Nếu $f\'(x)$ không đổi dấu khi $x$ vượt qua $x_0$ thì $x_0$ không phải là điểm cực trị của hàm số. Nếu $x_0$ là điểm cực trị và hàm số có đạo hàm tại $x_0$ thì $f\'(x_0) = 0$.'
              },
              {
                title: 'Các bước tìm cực trị của hàm số $y = f(x)$ (SGK trang 11)',
                content: 'Quy trình 4 bước tìm điểm cực trị bằng bảng biến thiên:',
                formula: '$$\\begin{aligned} &\\text{Bước 1. Tìm tập xác định của hàm số.} \\\\ &\\text{Bước 2. Tính đạo hàm } f\'(x).\\text{ Tìm các điểm mà tại đó } f\'(x) = 0 \\text{ hoặc } f\'(x) \\text{ không tồn tại.} \\\\ &\\text{Bước 3. Lập bảng biến thiên của hàm số.} \\\\ &\\text{Bước 4. Từ bảng biến thiên suy ra các điểm cực trị của hàm số.} \\end{aligned}$$'
              }
            ]
          }
        ]
      },
      {
        lessonId: 'bai-2',
        lessonNumber: 2,
        title: 'Bài 2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số',
        chapterId: 'chuong-1',
        chapterTitle: 'CHƯƠNG I. ỨNG DỤNG ĐẠO HÀM ĐỂ KHẢO SÁT VÀ VẼ ĐỒ THỊ HÀM SỐ',
        volume: 1,
        pageNumber: 15,
        keyConcepts: [
          'Định nghĩa GTLN và GTNN của hàm số trên tập D',
          'Kí hiệu max f(x) và min f(x)',
          'Quy trình tìm GTLN, GTNN của hàm số liên tục trên đoạn [a; b]'
        ],
        examIds: ['bai2_de1', 'bai2_de2'],
        sections: [
          {
            heading: '1. Định nghĩa giá trị lớn nhất và giá trị nhỏ nhất',
            summary: 'Khái niệm giá trị lớn nhất (GTLN) và giá trị nhỏ nhất (GTNN) của hàm số $y = f(x)$ trên một tập hợp $D$ cho trước.',
            boxes: [
              {
                title: 'Định nghĩa GTLN và GTNN (SGK trang 16)',
                content: 'Cho hàm số $y = f(x)$ xác định trên tập $D$:',
                formula: '$$\\begin{aligned} &\\bullet\\ \\max_{x \\in D} f(x) = M \\iff \\begin{cases} f(x) \\le M, & \\forall x \\in D \\\\ \\exists x_0 \\in D: & f(x_0) = M \\end{cases} \\\\ &\\bullet\\ \\min_{x \\in D} f(x) = m \\iff \\begin{cases} f(x) \\ge m, & \\forall x \\in D \\\\ \\exists x_0 \\in D: & f(x_0) = m \\end{cases} \\end{aligned}$$',
                note: 'Ta quy ước rằng khi nói giá trị lớn nhất và giá trị nhỏ nhất của hàm số $f(x)$ (mà không nói "trên tập $D$") thì ta hiểu đó là GTLN hay GTNN của $f(x)$ trên tập xác định của hàm số. Để tìm GTLN và GTNN trên tập $D$, ta thường lập bảng biến thiên của hàm số trên tập $D$.'
              }
            ]
          },
          {
            heading: '2. Cách tìm GTLN và GTNN của hàm số trên một đoạn',
            summary: 'Mọi hàm số liên tục trên một đoạn $[a; b]$ đều tồn tại giá trị lớn nhất và giá trị nhỏ nhất trên đoạn đó.',
            boxes: [
              {
                title: 'Quy tắc tìm GTLN và GTNN của hàm số trên đoạn $[a; b]$ (SGK trang 17)',
                content: 'Giả sử $y = f(x)$ là hàm số liên tục trên $[a; b]$ và có đạo hàm trên $(a; b)$, có thể trừ một số hữu hạn điểm mà tại đó hàm số không có đạo hàm. Giả sử chỉ có hữu hạn điểm trong đoạn $[a; b]$ mà đạo hàm $f\'(x) = 0$. Các bước tìm GTLN và GTNN của hàm số $f(x)$ trên đoạn $[a; b]$:',
                formula: '$$\\begin{aligned} &\\text{Bước 1. Tìm các điểm } x_1, x_2, \\dots, x_n \\in (a; b),\\text{ tại đó } f\'(x) = 0 \\text{ hoặc } f\'(x) \\text{ không tồn tại.} \\\\ &\\text{Bước 2. Tính } f(x_1), f(x_2), \\dots, f(x_n), f(a) \\text{ và } f(b). \\\\ &\\text{Bước 3. Tìm số lớn nhất } M \\text{ và số nhỏ nhất } m \\text{ trong các số trên. Ta có:} \\\\ &\\qquad M = \\max_{x \\in [a; b]} f(x) \\quad \\text{và} \\quad m = \\min_{x \\in [a; b]} f(x). \\end{aligned}$$',
                note: 'Nếu hàm số $y = f(x)$ đồng biến trên đoạn $[a; b]$ thì $\\min_{[a; b]} f(x) = f(a)$ và $\\max_{[a; b]} f(x) = f(b)$. Nếu hàm số nghịch biến trên đoạn $[a; b]$ thì $\\min_{[a; b]} f(x) = f(b)$ và $\\max_{[a; b]} f(x) = f(a)$.'
              }
            ]
          }
        ]
      },
      {
        lessonId: 'bai-3',
        lessonNumber: 3,
        title: 'Bài 3. Đường tiệm cận của đồ thị hàm số',
        chapterId: 'chuong-1',
        chapterTitle: 'CHƯƠNG I. ỨNG DỤNG ĐẠO HÀM ĐỂ KHẢO SÁT VÀ VẼ ĐỒ THỊ HÀM SỐ',
        volume: 1,
        pageNumber: 20,
        keyConcepts: [
          'Đường tiệm cận ngang y = y₀',
          'Đường tiệm cận đứng x = x₀',
          'Đường tiệm cận xiên y = ax + b (a ≠ 0)',
          'Công thức tìm hệ số tiệm cận xiên'
        ],
        examIds: ['bai3_de1', 'bai3_de2'],
        sections: [
          {
            heading: '1. Đường tiệm cận ngang',
            summary: 'Đường thẳng nằm ngang $y = y_0$ mà khoảng cách từ điểm $M(x; f(x))$ trên đồ thị đến đường thẳng đó tiến dần về $0$ khi $x \\to +\\infty$ hoặc $x \\to -\\infty$.',
            boxes: [
              {
                title: 'Định nghĩa đường tiệm cận ngang (SGK trang 21)',
                content: 'Đường thẳng $y = y_0$ gọi là đường tiệm cận ngang (gọi tắt là tiệm cận ngang) của đồ thị hàm số $y = f(x)$ nếu ít nhất một trong hai điều kiện sau được thoả mãn:',
                formula: '$$\\lim_{x \\to +\\infty} f(x) = y_0 \\quad \\text{hoặc} \\quad \\lim_{x \\to -\\infty} f(x) = y_0$$',
                note: 'Đồ thị hàm số $y = f(x)$ có tối đa 2 đường tiệm cận ngang (một tiệm cận ngang khi $x \\to +\\infty$ và một tiệm cận ngang khi $x \\to -\\infty$).'
              }
            ]
          },
          {
            heading: '2. Đường tiệm cận đứng',
            summary: 'Đường thẳng thẳng đứng $x = x_0$ mà giá trị $|f(x)|$ tiến ra vô cực khi $x$ tiến dần đến $x_0$ từ bên trái hoặc bên phải.',
            boxes: [
              {
                title: 'Định nghĩa đường tiệm cận đứng (SGK trang 22)',
                content: 'Đường thẳng $x = x_0$ gọi là đường tiệm cận đứng (gọi tắt là tiệm cận đứng) của đồ thị hàm số $y = f(x)$ nếu ít nhất một trong các điều kiện sau được thoả mãn:',
                formula: '$$\\lim_{x \\to x_0^+} f(x) = +\\infty;\\quad \\lim_{x \\to x_0^-} f(x) = +\\infty;\\quad \\lim_{x \\to x_0^+} f(x) = -\\infty;\\quad \\lim_{x \\to x_0^-} f(x) = -\\infty$$'
              }
            ]
          },
          {
            heading: '3. Đường tiệm cận xiên',
            summary: 'Đường thẳng $y = ax + b\\ (a \\neq 0)$ mà hiệu $[f(x) - (ax + b)]$ tiến về $0$ khi $x \\to +\\infty$ hoặc $x \\to -\\infty$.',
            boxes: [
              {
                title: 'Định nghĩa đường tiệm cận xiên (SGK trang 23)',
                content: 'Đường thẳng $y = ax + b\\ (a \\neq 0)$ gọi là đường tiệm cận xiên (gọi tắt là tiệm cận xiên) của đồ thị hàm số $y = f(x)$ nếu:',
                formula: '$$\\lim_{x \\to +\\infty} [f(x) - (ax + b)] = 0 \\quad \\text{hoặc} \\quad \\lim_{x \\to -\\infty} [f(x) - (ax + b)] = 0$$'
              },
              {
                title: 'Công thức xác định hệ số $a, b$ của tiệm cận xiên (Chú ý trang 24)',
                content: 'Để xác định hệ số $a, b$ của đường tiệm cận xiên $y = ax + b\\ (a \\neq 0)$ của đồ thị hàm số $y = f(x)$, ta có thể áp dụng công thức sau:',
                formula: '$$\\begin{aligned} &a = \\lim_{x \\to +\\infty} \\frac{f(x)}{x} \\quad \\text{và} \\quad b = \\lim_{x \\to +\\infty} [f(x) - ax] \\\\ \\text{hoặc }\\ &a = \\lim_{x \\to -\\infty} \\frac{f(x)}{x} \\quad \\text{và} \\quad b = \\lim_{x \\to -\\infty} [f(x) - ax]. \\end{aligned}$$',
                note: 'Đối với hàm phân thức hữu tỉ $y = \\frac{P(x)}{Q(x)}$ có bậc của tử lớn hơn bậc của mẫu đúng 1 đơn vị, ta thực hiện phép chia đa thức $\\frac{P(x)}{Q(x)} = ax + b + \\frac{R(x)}{Q(x)}$ (với bậc $R(x)$ nhỏ hơn bậc $Q(x)$) thì đường thẳng $y = ax + b\\ (a \\neq 0)$ chính là tiệm cận xiên. Khi $a = 0$ thì ta thu được tiệm cận ngang $y = b$.'
              }
            ]
          }
        ]
      },
      {
        lessonId: 'bai-4',
        lessonNumber: 4,
        title: 'Bài 4. Khảo sát sự biến thiên và vẽ đồ thị của hàm số',
        chapterId: 'chuong-1',
        chapterTitle: 'CHƯƠNG I. ỨNG DỤNG ĐẠO HÀM ĐỂ KHẢO SÁT VÀ VẼ ĐỒ THỊ HÀM SỐ',
        volume: 1,
        pageNumber: 26,
        keyConcepts: [
          'Sơ đồ khảo sát sự biến thiên và vẽ đồ thị hàm số',
          'Hàm số bậc ba y = ax³ + bx² + cx + d (a ≠ 0) và tâm đối xứng',
          'Hàm phân thức bậc nhất trên bậc nhất y = (ax + b)/(cx + d)',
          'Hàm phân thức bậc hai trên bậc nhất y = (ax² + bx + c)/(px + q)'
        ],
        examIds: ['bai4_de1', 'bai4_de2'],
        sections: [
          {
            heading: '1. Sơ đồ khảo sát hàm số',
            summary: 'Quy trình 3 bước chuẩn mực để khảo sát sự biến thiên và vẽ đồ thị của một hàm số $y = f(x)$.',
            boxes: [
              {
                title: 'Sơ đồ khảo sát hàm số $y = f(x)$ (SGK trang 26)',
                content: 'Để khảo sát sự biến thiên và vẽ đồ thị của một hàm số, ta thực hiện theo 3 bước:',
                formula: '$$\\begin{aligned} &\\textbf{1. Tìm tập xác định của hàm số.} \\\\ &\\textbf{2. Khảo sát sự biến thiên của hàm số:} \\\\ &\\quad \\bullet\\ \\text{Tính đạo hàm } y\'. \\text{ Tìm các điểm tại đó } y\' = 0 \\text{ hoặc đạo hàm không tồn tại.} \\\\ &\\quad \\bullet\\ \\text{Xét dấu } y\' \\text{ để chỉ ra các khoảng đơn điệu của hàm số.} \\\\ &\\quad \\bullet\\ \\text{Tìm cực trị của hàm số.} \\\\ &\\quad \\bullet\\ \\text{Tìm các giới hạn tại vô cực, giới hạn vô cực và tìm tiệm cận của đồ thị hàm số (nếu có).} \\\\ &\\quad \\bullet\\ \\text{Lập bảng biến thiên của hàm số.} \\\\ &\\textbf{3. Vẽ đồ thị của hàm số dựa vào bảng biến thiên.} \\end{aligned}$$',
                note: 'Chú ý (SGK trang 26): Khi vẽ đồ thị, nên xác định thêm một số điểm đặc biệt của đồ thị (giao điểm với các trục toạ độ) và lưu ý đến tính đối xứng của đồ thị (tâm đối xứng, trục đối xứng).'
              }
            ]
          },
          {
            heading: '2. Khảo sát và vẽ đồ thị các hàm số thường gặp',
            summary: 'Tính chất đặc trưng, tiệm cận và tâm đối xứng của ba họ hàm số trọng tâm chương trình Toán 12.',
            boxes: [
              {
                title: 'Hàm số bậc ba $y = ax^3 + bx^2 + cx + d\\ (a \\neq 0)$ (SGK trang 27–28)',
                content: 'Tập xác định $D = \\mathbb{R}$; đạo hàm $y\' = 3ax^2 + 2bx + c$; đạo hàm cấp hai $y\'\' = 6ax + 2b$.',
                formula: '$$\\text{Hoành độ tâm đối xứng } I(x_0; y_0): \\quad y\'\' = 0 \\iff 6ax + 2b = 0 \\iff x_0 = -\\frac{b}{3a}$$',
                note: 'Đồ thị của hàm số bậc ba $y = ax^3 + bx^2 + cx + d\\ (a \\neq 0)$ không có đường tiệm cận và luôn nhận điểm $I(x_0; y_0)$ với $x_0 = -\\frac{b}{3a}$ (nghiệm của phương trình $y\'\' = 0$) làm tâm đối xứng. Hàm số có 2 điểm cực trị khi $\\Delta\'_{y\'} = b^2 - 3ac > 0$ và không có cực trị khi $b^2 - 3ac \\le 0$.'
              },
              {
                title: 'Hàm số phân thức $y = \\frac{ax + b}{cx + d}\\ (c \\neq 0,\\ ad - bc \\neq 0)$ (SGK trang 29–30)',
                content: 'Tập xác định $D = \\mathbb{R} \\setminus \\left\\{-\\frac{d}{c}\\right\\}$; đạo hàm $y\' = \\frac{ad - bc}{(cx + d)^2}$ luôn âm hoặc luôn dương trên từng khoảng xác định.',
                formula: '$$\\begin{aligned} &\\bullet\\ \\text{Tiệm cận đứng: } x = -\\frac{d}{c}; \\quad \\text{Tiệm cận ngang: } y = \\frac{a}{c}. \\\\ &\\bullet\\ \\text{Tâm đối xứng: } I\\left(-\\frac{d}{c};\\ \\frac{a}{c}\\right) \\text{ (giao điểm của hai đường tiệm cận).} \\end{aligned}$$',
                note: 'Đồ thị hàm số không có điểm cực trị. Đồ thị nhận giao điểm của tiệm cận đứng và tiệm cận ngang làm tâm đối xứng và nhận hai đường phân giác của các góc tạo bởi hai đường tiệm cận này làm các trục đối xứng.'
              },
              {
                title: 'Hàm số phân thức $y = \\frac{ax^2 + bx + c}{px + q}\\ (a \\neq 0,\\ p \\neq 0,\\text{ tử không chia hết cho mẫu})$ (SGK trang 30–32)',
                content: 'Tập xác định $D = \\mathbb{R} \\setminus \\left\\{-\\frac{q}{p}\\right\\}$. Thực hiện phép chia đa thức ta viết được $y = mx + n + \\frac{r}{px + q}\\ (m = \\frac{a}{p} \\neq 0, r \\neq 0)$.',
                formula: '$$\\begin{aligned} &\\bullet\\ \\text{Tiệm cận đứng: } x = -\\frac{q}{p}; \\quad \\text{Tiệm cận xiên: } y = mx + n. \\\\ &\\bullet\\ \\text{Tâm đối xứng: Giao điểm của đường tiệm cận đứng và đường tiệm cận xiên.} \\end{aligned}$$',
                note: 'Đồ thị nhận giao điểm của tiệm cận đứng và tiệm cận xiên làm tâm đối xứng và nhận hai đường phân giác của các góc tạo bởi hai đường tiệm cận này làm các trục đối xứng.'
              }
            ]
          }
        ]
      },
      {
        lessonId: 'bai-5',
        lessonNumber: 5,
        title: 'Bài 5. Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn',
        chapterId: 'chuong-1',
        chapterTitle: 'CHƯƠNG I. ỨNG DỤNG ĐẠO HÀM ĐỂ KHẢO SÁT VÀ VẼ ĐỒ THỊ HÀM SỐ',
        volume: 1,
        pageNumber: 33,
        keyConcepts: [
          'Tốc độ thay đổi tức thời của một đại lượng y = f(x)',
          'Vận tốc tức thời v(t) = s\'(t), gia tốc tức thời a(t) = v\'(t)',
          'Chi phí biên C\'(x), doanh thu biên R\'(x), lợi nhuận biên P\'(x)',
          'Quy trình 3 bước giải bài toán tối ưu hoá thực tiễn'
        ],
        examIds: ['bai5_de1', 'bai5_de2'],
        sections: [
          {
            heading: '1. Tốc độ thay đổi của một đại lượng',
            summary: 'Ý nghĩa của đạo hàm cấp một trong vật lí, hoá học, sinh học và kinh tế học.',
            boxes: [
              {
                title: 'Tốc độ thay đổi tức thời của một đại lượng (SGK trang 33–34)',
                content: 'Giả sử đại lượng $y$ là một hàm số của đại lượng $x$, được viết là $y = f(x)$. Khi đó đạo hàm $f\'(a)$ biểu thị tốc độ thay đổi tức thời của đại lượng $y$ theo đại lượng $x$ tại điểm $x = a$:',
                formula: '$$\\begin{aligned} &\\bullet\\ \\text{Cơ học: Nếu phương trình chuyển động là } s = s(t) \\text{ thì vận tốc tức thời } v(t) = s\'(t),\\text{ gia tốc tức thời } a(t) = v\'(t) = s\'\'(t). \\\\ &\\bullet\\ \\text{Điện học: Nếu điện lượng truyền trong dây dẫn là } Q = Q(t) \\text{ thì cường độ dòng điện tức thời } I(t) = Q\'(t). \\\\ &\\bullet\\ \\text{Sinh học: Nếu số lượng cá thể quần thể ở thời điểm } t \\text{ là } P = P(t) \\text{ thì tốc độ tăng trưởng tức thời là } P\'(t). \\end{aligned}$$'
              },
              {
                title: 'Các hàm số trong Kinh tế học (SGK trang 35, 38–39)',
                content: 'Khi sản xuất và bán ra $x$ đơn vị sản phẩm:',
                formula: '$$\\begin{aligned} &\\bullet\\ \\text{Hàm chi phí: } C(x) \\implies \\text{Chi phí biên: } C\'(x) \\text{ (chi phí ước tính để sản xuất thêm 1 đơn vị sản phẩm thứ } x+1\\text{).} \\\\ &\\bullet\\ \\text{Hàm cầu (giá bán mỗi đơn vị): } p = p(x) \\implies \\text{Hàm doanh thu: } R(x) = x \\cdot p(x),\\text{ doanh thu biên: } R\'(x). \\\\ &\\bullet\\ \\text{Hàm lợi nhuận: } P(x) = R(x) - C(x) \\implies \\text{Lợi nhuận biên: } P\'(x) = R\'(x) - C\'(x). \\end{aligned}$$'
              }
            ]
          },
          {
            heading: '2. Một số bài toán tối ưu hoá đơn giản',
            summary: 'Ứng dụng giá trị lớn nhất và giá trị nhỏ nhất của hàm số để giải các bài toán tối ưu hoá trong hình học, sản xuất và kinh doanh.',
            boxes: [
              {
                title: 'Quy trình giải một bài toán tối ưu hoá (SGK trang 37)',
                content: 'Để giải quyết một bài toán tối ưu hoá trong thực tiễn, ta thường thực hiện theo 3 bước:',
                formula: '$$\\begin{aligned} &\\text{Bước 1. Xác định đại lượng } Q \\text{ mà ta cần làm cho giá trị của đại lượng ấy lớn nhất hoặc nhỏ nhất } \\\\ &\\qquad\\quad \\text{và biểu diễn nó qua các đại lượng khác trong bài toán.} \\\\ &\\text{Bước 2. Chọn một đại lượng thích hợp nào đó, kí hiệu là } x,\\text{ và biểu diễn các đại lượng khác ở Bước 1 theo } x. \\\\ &\\qquad\\quad \\text{Khi đó đại lượng } Q \\text{ sẽ là hàm số của một biến } x.\\text{ Tìm tập xác định của hàm số } Q = Q(x). \\\\ &\\text{Bước 3. Tìm giá trị lớn nhất hoặc giá trị nhỏ nhất của hàm số } Q = Q(x) \\text{ bằng các phương pháp đã biết và kết luận.} \\end{aligned}$$'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    chapterId: 'chuong-2',
    chapterTitle: 'CHƯƠNG II. VECTƠ VÀ HỆ TRỤC TOẠ ĐỘ TRONG KHÔNG GIAN',
    volume: 1,
    lessons: [
      {
        lessonId: 'bai-6',
        lessonNumber: 6,
        title: 'Bài 6. Vectơ trong không gian',
        chapterId: 'chuong-2',
        chapterTitle: 'CHƯƠNG II. VECTƠ VÀ HỆ TRỤC TOẠ ĐỘ TRONG KHÔNG GIAN',
        volume: 1,
        pageNumber: 45,
        keyConcepts: [
          'Vectơ trong không gian, hai vectơ cùng phương, bằng nhau',
          'Quy tắc ba điểm, quy tắc hình bình hành, quy tắc hình hộp',
          'Tính chất trung điểm đoạn thẳng, trọng tâm tam giác và tứ diện',
          'Góc giữa hai vectơ và tích vô hướng của hai vectơ'
        ],
        examIds: ['bai6_de1', 'bai6_de2'],
        sections: [
          {
            heading: '1. Khái niệm vectơ trong không gian',
            summary: 'Định nghĩa vectơ, giá của vectơ, độ dài vectơ, hai vectơ cùng phương, cùng hướng và bằng nhau trong không gian.',
            boxes: [
              {
                title: 'Vectơ và các khái niệm liên quan (SGK trang 46–47)',
                content: 'Vectơ trong không gian là một đoạn thẳng có hướng. Độ dài của vectơ $\\overrightarrow{AB}$ là khoảng cách giữa điểm đầu $A$ và điểm cuối $B$, kí hiệu là $|\\overrightarrow{AB}|$.',
                formula: '$$\\vec{a} = \\vec{b} \\iff \\begin{cases} |\\vec{a}| = |\\vec{b}| \\\\ \\vec{a} \\text{ và } \\vec{b} \\text{ cùng hướng} \\end{cases}$$',
                note: 'Hai vectơ được gọi là cùng phương nếu chúng có giá song song hoặc trùng nhau. Vectơ-không $\\vec{0}$ có độ dài bằng $0$ và cùng phương, cùng hướng với mọi vectơ.'
              }
            ]
          },
          {
            heading: '2. Tổng và hiệu của hai vectơ trong không gian',
            summary: 'Các quy tắc cộng, trừ vectơ trong không gian và đặc biệt là quy tắc hình hộp.',
            boxes: [
              {
                title: 'Quy tắc ba điểm, quy tắc hình bình hành và quy tắc hiệu (SGK trang 49–51)',
                content: 'Với ba điểm $A, B, C$ bất kì và hình bình hành $ABCD$ trong không gian:',
                formula: '$$\\begin{aligned} &\\bullet\\ \\text{Quy tắc ba điểm: } \\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC} \\\\ &\\bullet\\ \\text{Quy tắc hình bình hành: } \\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC} \\\\ &\\bullet\\ \\text{Quy tắc hiệu hai vectơ: } \\overrightarrow{OB} - \\overrightarrow{OA} = \\overrightarrow{AB} \\end{aligned}$$'
              },
              {
                title: 'Quy tắc hình hộp (SGK trang 50)',
                content: 'Cho hình hộp $ABCD.A\'B\'C\'D\'$. Khi đó tổng của ba vectơ xuất phát từ một đỉnh bằng vectơ đường chéo xuất phát từ đỉnh đó:',
                formula: '$$\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA\'} = \\overrightarrow{AC\'}$$'
              }
            ]
          },
          {
            heading: '3. Tích của một số với một vectơ trong không gian',
            summary: 'Định nghĩa phép nhân một số thực $k$ với vectơ $\\vec{a}$ và các đẳng thức vectơ trọng tâm.',
            boxes: [
              {
                title: 'Định nghĩa tích của một số với một vectơ (SGK trang 52)',
                content: 'Cho số thực $k \\neq 0$ và vectơ $\\vec{a} \\neq \\vec{0}$. Tích $k\\vec{a}$ là một vectơ cùng hướng với $\\vec{a}$ nếu $k > 0$, ngược hướng với $\\vec{a}$ nếu $k < 0$ và có độ dài bằng $|k| \\cdot |\\vec{a}|$.',
                formula: '$$\\begin{aligned} &\\bullet\\ I \\text{ là trung điểm của đoạn thẳng } AB \\iff \\overrightarrow{IA} + \\overrightarrow{IB} = \\vec{0} \\iff \\overrightarrow{OA} + \\overrightarrow{OB} = 2\\overrightarrow{OI},\\ \\forall O. \\\\ &\\bullet\\ G \\text{ là trọng tâm của } \\triangle ABC \\iff \\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0} \\iff \\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC} = 3\\overrightarrow{OG},\\ \\forall O. \\\\ &\\bullet\\ G \\text{ là trọng tâm của tứ diện } ABCD \\iff \\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} + \\overrightarrow{GD} = \\vec{0}. \\end{aligned}$$'
              }
            ]
          },
          {
            heading: '4. Tích vô hướng của hai vectơ trong không gian',
            summary: 'Góc giữa hai vectơ $(\\vec{a}, \\vec{b}) \\in [0^\\circ; 180^\\circ]$ và công thức tích vô hướng.',
            boxes: [
              {
                title: 'Góc giữa hai vectơ và Tích vô hướng (SGK trang 55–56)',
                content: 'Trong không gian, cho hai vectơ $\\vec{a}, \\vec{b}$ khác $\\vec{0}$. Lấy điểm $A$ bất kì, vẽ $\\overrightarrow{AB} = \\vec{a}, \\overrightarrow{AC} = \\vec{b}$ thì $(\\vec{a}, \\vec{b}) = \\widehat{BAC}$ với $0^\\circ \\le (\\vec{a}, \\vec{b}) \\le 180^\\circ$. Tích vô hướng của $\\vec{a}$ và $\\vec{b}$ là một số thực xác định bởi:',
                formula: '$$\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\vec{a}, \\vec{b}) \\implies \\cos(\\vec{a}, \\vec{b}) = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|}$$',
                note: 'Nếu $\\vec{a} = \\vec{0}$ hoặc $\\vec{b} = \\vec{0}$ thì ta quy ước $\\vec{a} \\cdot \\vec{b} = 0$. Với hai vectơ $\\vec{a}, \\vec{b}$ khác $\\vec{0}$, ta có: $\\vec{a} \\perp \\vec{b} \\iff \\vec{a} \\cdot \\vec{b} = 0$, và $\\vec{a}^2 = |\\vec{a}|^2$.'
              }
            ]
          }
        ]
      },
      {
        lessonId: 'bai-7',
        lessonNumber: 7,
        title: 'Bài 7. Hệ trục toạ độ trong không gian',
        chapterId: 'chuong-2',
        chapterTitle: 'CHƯƠNG II. VECTƠ VÀ HỆ TRỤC TOẠ ĐỘ TRONG KHÔNG GIAN',
        volume: 1,
        pageNumber: 60,
        keyConcepts: [
          'Hệ trục toạ độ Oxyz và 3 vectơ đơn vị i, j, k',
          'Toạ độ của một điểm M(x; y; z) và hình chiếu trên trục, mặt phẳng toạ độ',
          'Toạ độ của một vectơ u = (x; y; z)',
          'Công thức toạ độ của vectơ AB theo toạ độ hai đầu mút A, B'
        ],
        examIds: ['bai7_de1', 'bai7_de2'],
        sections: [
          {
            heading: '1. Hệ trục toạ độ trong không gian',
            summary: 'Hệ gồm ba trục $Ox, Oy, Oz$ đôi một vuông góc tại gốc $O$ cùng ba vectơ đơn vị $\\vec{i}, \\vec{j}, \\vec{k}$.',
            boxes: [
              {
                title: 'Hệ trục toạ độ $Oxyz$ (SGK trang 60–61)',
                content: 'Hệ gồm ba trục $Ox, Oy, Oz$ đôi một vuông góc với nhau tại gốc toạ độ $O$, với các vectơ đơn vị tương ứng là $\\vec{i}, \\vec{j}, \\vec{k}$ thoả mãn:',
                formula: '$$|\\vec{i}| = |\\vec{j}| = |\\vec{k}| = 1 \\quad \\text{và} \\quad \\vec{i} \\cdot \\vec{j} = \\vec{j} \\cdot \\vec{k} = \\vec{k} \\cdot \\vec{i} = 0$$',
                note: 'Các mặt phẳng $(Oxy), (Oyz), (Ozx)$ đôi một vuông góc với nhau được gọi là các mặt phẳng toạ độ.'
              }
            ]
          },
          {
            heading: '2. Toạ độ của điểm và của vectơ',
            summary: 'Biểu diễn duy nhất của vectơ $\\overrightarrow{OM}$ và vectơ $\\vec{a}$ theo cơ sở $(\\vec{i}, \\vec{j}, \\vec{k})$.',
            boxes: [
              {
                title: 'Toạ độ của một điểm $M$ (SGK trang 61–62)',
                content: 'Trong không gian $Oxyz$, cho một điểm $M$ tuỳ ý. Bộ ba số $(x; y; z)$ duy nhất sao cho $\\overrightarrow{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k}$ được gọi là toạ độ của điểm $M$, kí hiệu $M(x; y; z)$ hoặc $M = (x; y; z)$:',
                formula: '$$M(x; y; z) \\iff \\overrightarrow{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k}$$',
                note: 'Hình chiếu vuông góc của điểm $M(x; y; z)$: trên trục $Ox$ là $(x; 0; 0)$, trên $Oy$ là $(0; y; 0)$, trên $Oz$ là $(0; 0; z)$; trên mặt phẳng $(Oxy)$ là $(x; y; 0)$, trên $(Oyz)$ là $(0; y; z)$, trên $(Ozx)$ là $(x; 0; z)$.'
              },
              {
                title: 'Toạ độ của một vectơ (SGK trang 63)',
                content: 'Cho vectơ $\\vec{a}$ trong không gian $Oxyz$. Bộ ba số $(x; y; z)$ duy nhất sao cho $\\vec{a} = x\\vec{i} + y\\vec{j} + z\\vec{k}$ được gọi là toạ độ của vectơ $\\vec{a}$:',
                formula: '$$\\vec{a} = (x; y; z) \\iff \\vec{a} = x\\vec{i} + y\\vec{j} + z\\vec{k}$$',
                note: 'Trong hệ toạ độ $Oxyz$, hai vectơ $\\vec{a} = (x; y; z)$ và $\\vec{b} = (x\'; y\'; z\')$ bằng nhau khi và chỉ khi: $\\vec{a} = \\vec{b} \\iff \\begin{cases} x = x\' \\\\ y = y\' \\\\ z = z\' \\end{cases}$. Đặc biệt: $\\vec{0} = (0;0;0),\\ \\vec{i} = (1;0;0),\\ \\vec{j} = (0;1;0),\\ \\vec{k} = (0;0;1)$.'
              },
              {
                title: 'Liên hệ giữa toạ độ của vectơ và toạ độ của hai đầu mút (SGK trang 64)',
                content: 'Trong không gian $Oxyz$, cho hai điểm $M(x_M; y_M; z_M)$ và $N(x_N; y_N; z_N)$. Khi đó:',
                formula: '$$\\overrightarrow{MN} = (x_N - x_M;\\ y_N - y_M;\\ z_N - z_M)$$'
              }
            ]
          }
        ]
      },
      {
        lessonId: 'bai-8',
        lessonNumber: 8,
        title: 'Bài 8. Biểu thức toạ độ của các phép toán vectơ',
        chapterId: 'chuong-2',
        chapterTitle: 'CHƯƠNG II. VECTƠ VÀ HỆ TRỤC TOẠ ĐỘ TRONG KHÔNG GIAN',
        volume: 1,
        pageNumber: 67,
        keyConcepts: [
          'Biểu thức toạ độ của tổng, hiệu hai vectơ và tích một số với vectơ',
          'Toạ độ trung điểm đoạn thẳng và trọng tâm tam giác',
          'Biểu thức toạ độ của tích vô hướng, độ dài vectơ, khoảng cách 2 điểm',
          'Côsin góc giữa hai vectơ trong không gian Oxyz'
        ],
        examIds: ['bai8_de1', 'bai8_de2'],
        sections: [
          {
            heading: '1. Biểu thức toạ độ của phép cộng hai vectơ, phép trừ hai vectơ, phép nhân một số với một vectơ',
            summary: 'Các công thức tính toán trực tiếp trên bộ ba toạ độ trong không gian $Oxyz$.',
            boxes: [
              {
                title: 'Biểu thức toạ độ của các phép toán tuyến tính (SGK trang 67)',
                content: 'Trong không gian $Oxyz$, cho hai vectơ $\\vec{a} = (x; y; z)$ và $\\vec{b} = (x\'; y\'; z\')$. Ta có:',
                formula: '$$\\begin{aligned} &\\bullet\\ \\vec{a} + \\vec{b} = (x + x\';\\ y + y\';\\ z + z\') \\\\ &\\bullet\\ \\vec{a} - \\vec{b} = (x - x\';\\ y - y\';\\ z - z\') \\\\ &\\bullet\\ k\\vec{a} = (kx;\\ ky;\\ kz) \\quad \\text{với } k \\text{ là một số thực.} \\end{aligned}$$',
                note: 'Nhận xét (trang 68): Vectơ $\\vec{a} = (x; y; z)$ cùng phương với vectơ $\\vec{b} = (x\'; y\'; z\') \\neq \\vec{0}$ khi và chỉ khi tồn tại số thực $k$ sao cho $\\begin{cases} x = kx\' \\\\ y = ky\' \\\\ z = kz\' \\end{cases}$.'
              },
              {
                title: 'Toạ độ trung điểm đoạn thẳng và trọng tâm tam giác (SGK trang 68)',
                content: 'Trong không gian $Oxyz$, cho ba điểm không thẳng hàng $A(x_A; y_A; z_A)$, $B(x_B; y_B; z_B)$ và $C(x_C; y_C; z_C)$. Khi đó:',
                formula: '$$\\begin{aligned} &\\bullet\\ \\text{Trung điểm } M \\text{ của đoạn thẳng } AB: \\quad M\\left(\\frac{x_A + x_B}{2};\\ \\frac{y_A + y_B}{2};\\ \\frac{z_A + z_B}{2}\\right) \\\\ &\\bullet\\ \\text{Trọng tâm } G \\text{ của tam giác } ABC: \\quad G\\left(\\frac{x_A + x_B + x_C}{3};\\ \\frac{y_A + y_B + y_C}{3};\\ \\frac{z_A + z_B + z_C}{3}\\right) \\end{aligned}$$'
              }
            ]
          },
          {
            heading: '2. Biểu thức toạ độ của tích vô hướng',
            summary: 'Công thức toạ độ của tích vô hướng, độ dài vectơ, khoảng cách giữa hai điểm và côsin góc giữa hai vectơ.',
            boxes: [
              {
                title: 'Biểu thức toạ độ của tích vô hướng (SGK trang 69)',
                content: 'Trong không gian $Oxyz$, tích vô hướng của hai vectơ $\\vec{a} = (x; y; z)$ và $\\vec{b} = (x\'; y\'; z\')$ được xác định bởi công thức:',
                formula: '$$\\vec{a} \\cdot \\vec{b} = xx\' + yy\' + zz\'$$'
              },
              {
                title: 'Ứng dụng của tích vô hướng (Nhận xét SGK trang 70)',
                content: 'Từ biểu thức toạ độ của tích vô hướng, với $\\vec{a} = (x; y; z)$, $\\vec{b} = (x\'; y\'; z\')$ và hai điểm $A(x_A; y_A; z_A), B(x_B; y_B; z_B)$, ta có:',
                formula: '$$\\begin{aligned} &\\text{a) Điều kiện vuông góc: } \\vec{a} \\perp \\vec{b} \\iff xx\' + yy\' + zz\' = 0. \\\\ &\\text{b) Độ dài của một vectơ: } |\\vec{a}| = \\sqrt{x^2 + y^2 + z^2}. \\\\ &\\text{c) Khoảng cách giữa hai điểm: } AB = |\\overrightarrow{AB}| = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}. \\\\ &\\text{d) Góc giữa hai vectơ } (\\vec{a}, \\vec{b} \\neq \\vec{0}): \\quad \\cos(\\vec{a}, \\vec{b}) = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|} = \\frac{xx\' + yy\' + zz\'}{\\sqrt{x^2 + y^2 + z^2} \\cdot \\sqrt{x\'^2 + y\'^2 + z\'^2}}. \\end{aligned}$$'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    chapterId: 'chuong-3',
    chapterTitle: 'CHƯƠNG III. CÁC SỐ ĐẶC TRƯNG ĐO MỨC ĐỘ PHÂN TÁN CỦA MẪU SỐ LIỆU GHÉP NHÓM',
    volume: 1,
    lessons: [
      {
        lessonId: 'bai-9',
        lessonNumber: 9,
        title: 'Bài 9. Khoảng biến thiên và khoảng tứ phân vị',
        chapterId: 'chuong-3',
        chapterTitle: 'CHƯƠNG III. CÁC SỐ ĐẶC TRƯNG ĐO MỨC ĐỘ PHÂN TÁN CỦA MẪU SỐ LIỆU GHÉP NHÓM',
        volume: 1,
        pageNumber: 75,
        keyConcepts: [
          'Khoảng biến thiên R = a_{k+1} - a_1 của mẫu số liệu ghép nhóm',
          'Công thức tính tứ phân vị Q_1, Q_2, Q_3 của mẫu số liệu ghép nhóm',
          'Khoảng tứ phân vị Δ_Q = Q_3 - Q_1 và ý nghĩa thống kê'
        ],
        examIds: ['bai9_de1', 'bai9_de2'],
        sections: [
          {
            heading: '1. Khoảng biến thiên',
            summary: 'Số đặc trưng đơn giản nhất đo mức độ phân tán của mẫu số liệu ghép nhóm.',
            boxes: [
              {
                title: 'Định nghĩa Khoảng biến thiên $R$ (SGK trang 76)',
                content: 'Xét mẫu số liệu ghép nhóm cho bởi bảng tần số gồm $k$ nhóm $[a_1; a_2),\\ [a_2; a_3),\\ \\dots,\\ [a_k; a_{k+1})$ trong đó $m_1 > 0$ và $m_k > 0$. Gọi $a_1$ là đầu mút trái của nhóm 1 và $a_{k+1}$ là đầu mút phải của nhóm $k$. Hiệu:',
                formula: '$$R = a_{k+1} - a_1$$',
                note: 'Ý nghĩa: Khoảng biến thiên của mẫu số liệu ghép nhóm xấp xỉ cho khoảng biến thiên của mẫu số liệu gốc. Khoảng biến thiên càng lớn thì mẫu số liệu càng phân tán (nhưng phụ thuộc nhiều vào các giá trị ngoại lệ).'
              }
            ]
          },
          {
            heading: '2. Khoảng tứ phân vị',
            summary: 'Đo mức độ phân tán của 50% số liệu chính giữa mẫu số liệu, không bị ảnh hưởng bởi các giá trị bất thường.',
            boxes: [
              {
                title: 'Công thức tính tứ phân vị thứ $r$ ($Q_r$) và Khoảng tứ phân vị $\\Delta_Q$ (SGK trang 77–78)',
                content: 'Với cỡ mẫu $n = m_1 + m_2 + \\dots + m_k$, giả sử nhóm $[a_p; a_{p+1})$ là nhóm đầu tiên có tần số tích luỹ lớn hơn hoặc bằng $\\frac{r \\cdot n}{4}$ ($r = 1, 2, 3$). Khi đó tứ phân vị thứ $r$ là $Q_r$ và khoảng tứ phân vị là $\\Delta_Q$:',
                formula: '$$\\begin{aligned} &\\bullet\\ Q_r = a_p + \\frac{\\frac{r \\cdot n}{4} - (m_1 + \\dots + m_{p-1})}{m_p} \\cdot (a_{p+1} - a_p) \\quad (r = 1, 2, 3;\\ \\text{quy ước } m_1 + \\dots + m_0 = 0) \\\\ &\\bullet\\ \\text{Khoảng tứ phân vị: } \\Delta_Q = Q_3 - Q_1 \\end{aligned}$$',
                note: 'Ý nghĩa (SGK trang 78): Khoảng tứ phân vị của mẫu số liệu ghép nhóm xấp xỉ cho khoảng tứ phân vị của mẫu số liệu gốc. Khoảng tứ phân vị càng nhỏ thì dữ liệu càng tập trung quanh trung vị và không bị ảnh hưởng bởi các giá trị bất thường (giá trị rất lớn hoặc rất bé).'
              }
            ]
          }
        ]
      },
      {
        lessonId: 'bai-10',
        lessonNumber: 10,
        title: 'Bài 10. Phương sai và độ lệch chuẩn',
        chapterId: 'chuong-3',
        chapterTitle: 'CHƯƠNG III. CÁC SỐ ĐẶC TRƯNG ĐO MỨC ĐỘ PHÂN TÁN CỦA MẪU SỐ LIỆU GHÉP NHÓM',
        volume: 1,
        pageNumber: 80,
        keyConcepts: [
          'Giá trị đại diện x_i và số trung bình x̄ của mẫu số liệu ghép nhóm',
          'Công thức tính phương sai s² (2 dạng tương đương)',
          'Độ lệch chuẩn s = √(s²) và ý nghĩa đo mức độ phân tán / độ rủi ro'
        ],
        examIds: ['bai10_de1', 'bai10_de2'],
        sections: [
          {
            heading: '1. Định nghĩa và công thức tính phương sai, độ lệch chuẩn',
            summary: 'Các số đặc trưng đo độ phân tán của các số liệu quanh số trung bình cộng $\\bar{x}$.',
            boxes: [
              {
                title: 'Giá trị đại diện và Số trung bình của mẫu số liệu ghép nhóm (SGK trang 81)',
                content: 'Xét mẫu số liệu ghép nhóm gồm $k$ nhóm $[a_i; a_{i+1})$ có tần số $m_i\\ (i = 1, 2, \\dots, k)$. Ta có cỡ mẫu, giá trị đại diện và số trung bình:',
                formula: '$$\\begin{aligned} &\\bullet\\ \\text{Cỡ mẫu: } n = m_1 + m_2 + \\dots + m_k \\\\ &\\bullet\\ \\text{Giá trị đại diện của nhóm } [a_i; a_{i+1}): \\quad x_i = \\frac{a_i + a_{i+1}}{2} \\\\ &\\bullet\\ \\text{Số trung bình: } \\bar{x} = \\frac{m_1 x_1 + m_2 x_2 + \\dots + m_k x_k}{n} \\end{aligned}$$'
              },
              {
                title: 'Công thức tính Phương sai $s^2$ và Độ lệch chuẩn $s$ (SGK trang 81)',
                content: 'Phương sai $s^2$ và độ lệch chuẩn $s$ của mẫu số liệu ghép nhóm được xác định bởi công thức:',
                formula: '$$\\begin{aligned} &\\bullet\\ \\text{Phương sai: } s^2 = \\frac{m_1(x_1 - \\bar{x})^2 + m_2(x_2 - \\bar{x})^2 + \\dots + m_k(x_k - \\bar{x})^2}{n} \\\\ &\\bullet\\ \\text{Công thức rút gọn: } s^2 = \\frac{1}{n}(m_1 x_1^2 + m_2 x_2^2 + \\dots + m_k x_k^2) - (\\bar{x})^2 \\\\ &\\bullet\\ \\text{Độ lệch chuẩn: } s = \\sqrt{s^2} \\end{aligned}$$',
                note: 'Chú ý (SGK trang 81): Trong thống kê, người ta còn dùng phương sai hiệu chỉnh $\\hat{s}^2 = \\frac{m_1(x_1 - \\bar{x})^2 + \\dots + m_k(x_k - \\bar{x})^2}{n - 1}$.'
              },
              {
                title: 'Ý nghĩa của phương sai và độ lệch chuẩn (SGK trang 81)',
                content: 'Ý nghĩa thực tiễn khi phân tích dữ liệu thống kê:',
                formula: '$$\\text{Phương sai } s^2 \\text{ và độ lệch chuẩn } s \\text{ càng lớn } \\iff \\text{mẫu số liệu càng phân tán (độ biến động / rủi ro càng cao).}$$',
                note: 'Độ lệch chuẩn $s$ có cùng đơn vị đo với đơn vị của mẫu số liệu gốc, do đó thường được ưu tiên sử dụng để đánh giá mức độ ổn định, đồng đều của sản phẩm hoặc mức độ rủi ro trong đầu tư tài chính.'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    chapterId: 'chuong-4',
    chapterTitle: 'CHƯƠNG IV. NGUYÊN HÀM VÀ TÍCH PHÂN',
    volume: 2,
    lessons: [
      {
        lessonId: 'bai-11',
        lessonNumber: 11,
        title: 'Bài 11. Nguyên hàm',
        chapterId: 'chuong-4',
        chapterTitle: 'CHƯƠNG IV. NGUYÊN HÀM VÀ TÍCH PHÂN',
        volume: 2,
        pageNumber: 4,
        keyConcepts: [
          'Khái niệm nguyên hàm F\'(x) = f(x) và họ nguyên hàm ∫ f(x) dx = F(x) + C',
          'Tính chất cơ bản của nguyên hàm (tổng, hiệu, nhân hằng số k ≠ 0)',
          'Bảng nguyên hàm của các hàm số sơ cấp thường gặp (luỹ thừa, lượng giác, mũ)'
        ],
        examIds: ['bai11_de1', 'bai11_de2'],
        sections: [
          {
            heading: '1. Khái niệm nguyên hàm và tính chất cơ bản',
            summary: 'Định nghĩa nguyên hàm của hàm số trên khoảng $K$ và hai tính chất tuyến tính của nguyên hàm.',
            boxes: [
              {
                title: 'Định nghĩa Nguyên hàm và Họ nguyên hàm (SGK Tập 2 trang 4–5)',
                content: 'Cho hàm số $f(x)$ xác định trên một khoảng $K$ (hoặc một đoạn, nửa khoảng). Hàm số $F(x)$ được gọi là một nguyên hàm của hàm số $f(x)$ trên $K$ nếu $F\'(x) = f(x)$ với mọi $x \\in K$. Nếu $F(x)$ là một nguyên hàm của $f(x)$ trên $K$ thì họ tất cả các nguyên hàm của $f(x)$ trên $K$ là:',
                formula: '$$\\int f(x)\\,dx = F(x) + C \\quad (C \\in \\mathbb{R})$$',
                note: 'Chú ý (SGK trang 5): Biểu thức $f(x)\\,dx$ gọi là vi phân của nguyên hàm $F(x)$, vì $dF(x) = F\'(x)\\,dx = f(x)\\,dx$. Mọi hàm số liên tục trên $K$ đều có nguyên hàm trên $K$.'
              },
              {
                title: 'Tính chất cơ bản của nguyên hàm (SGK Tập 2 trang 6)',
                content: 'Cho $f(x), g(x)$ là các hàm số liên tục trên $K$ và $k \\neq 0$ là một hằng số thực:',
                formula: '$$\\begin{aligned} &\\bullet\\ \\int k f(x)\\,dx = k \\int f(x)\\,dx \\quad (k \\neq 0) \\\\ &\\bullet\\ \\int [f(x) + g(x)]\\,dx = \\int f(x)\\,dx + \\int g(x)\\,dx \\\\ &\\bullet\\ \\int [f(x) - g(x)]\\,dx = \\int f(x)\\,dx - \\int g(x)\\,dx \\end{aligned}$$'
              }
            ]
          },
          {
            heading: '2. Nguyên hàm của một số hàm số thường gặp',
            summary: 'Bảng công thức nguyên hàm chuẩn xác 100% theo SGK Toán 12 Tập 2.',
            boxes: [
              {
                title: 'Nguyên hàm của hàm số luỹ thừa (SGK Tập 2 trang 7)',
                content: 'Các công thức nguyên hàm của hàm hằng, hàm luỹ thừa $x^\\alpha$ và hàm $\\frac{1}{x}$:',
                formula: '$$\\begin{aligned} &\\bullet\\ \\int 0\\,dx = C; \\qquad \\int 1\\,dx = \\int dx = x + C \\\\ &\\bullet\\ \\int x^\\alpha\\,dx = \\frac{x^{\\alpha + 1}}{\\alpha + 1} + C \\quad (\\alpha \\neq -1) \\\\ &\\bullet\\ \\int \\frac{1}{x}\\,dx = \\ln|x| + C \\quad (x \\neq 0) \\end{aligned}$$'
              },
              {
                title: 'Nguyên hàm của hàm số lượng giác và hàm số mũ (SGK Tập 2 trang 8–10)',
                content: 'Các công thức nguyên hàm của các hàm số lượng giác và hàm số mũ:',
                formula: '$$\\begin{aligned} &\\bullet\\ \\int \\cos x\\,dx = \\sin x + C; \\qquad \\int \\sin x\\,dx = -\\cos x + C \\\\ &\\bullet\\ \\int \\frac{1}{\\cos^2 x}\\,dx = \\tan x + C; \\qquad \\int \\frac{1}{\\sin^2 x}\\,dx = -\\cot x + C \\\\ &\\bullet\\ \\int e^x\\,dx = e^x + C; \\qquad \\int a^x\\,dx = \\frac{a^x}{\\ln a} + C \\quad (0 < a \\neq 1) \\end{aligned}$$'
              }
            ]
          }
        ]
      },
      {
        lessonId: 'bai-12',
        lessonNumber: 12,
        title: 'Bài 12. Tích phân',
        chapterId: 'chuong-4',
        chapterTitle: 'CHƯƠNG IV. NGUYÊN HÀM VÀ TÍCH PHÂN',
        volume: 2,
        pageNumber: 12,
        keyConcepts: [
          'Diện tích hình thang cong và định nghĩa tích phân xác định (Newton - Leibniz)',
          'Ý nghĩa hình học của tích phân',
          'Các tính chất của tích phân (tuyến tính, tách cận trung gian c)',
          'Giá trị trung bình của hàm số trên đoạn [a; b]'
        ],
        examIds: ['bai12_de1', 'bai12_de2'],
        sections: [
          {
            heading: '1. Khái niệm tích phân',
            summary: 'Diện tích hình thang cong và công thức Newton–Leibniz tính tích phân xác định.',
            boxes: [
              {
                title: 'Diện tích hình thang cong (SGK Tập 2 trang 13)',
                content: 'Nếu hàm số $y = f(x)$ liên tục và không âm trên đoạn $[a; b]$, thì diện tích $S$ của hình thang cong giới hạn bởi đồ thị hàm số $y = f(x)$, trục hoành và hai đường thẳng $x = a, x = b$ là:',
                formula: '$$S = F(b) - F(a)$$',
                note: 'trong đó $F(x)$ là một nguyên hàm bất kì của hàm số $f(x)$ trên đoạn $[a; b]$.'
              },
              {
                title: 'Định nghĩa Tích phân (Công thức Newton–Leibniz, SGK Tập 2 trang 14)',
                content: 'Cho $f(x)$ là hàm số liên tục trên đoạn $[a; b]$. Nếu $F(x)$ là một nguyên hàm của hàm số $f(x)$ trên đoạn $[a; b]$ thì hiệu số $F(b) - F(a)$ được gọi là tích phân từ $a$ đến $b$ của hàm số $f(x)$, kí hiệu là:',
                formula: '$$\\int_a^b f(x)\\,dx = F(x)\\Big|_a^b = F(b) - F(a)$$',
                note: 'Quy ước (SGK trang 14): $\\int_a^a f(x)\\,dx = 0$ và $\\int_a^b f(x)\\,dx = -\\int_b^a f(x)\\,dx$. Tích phân chỉ phụ thuộc vào hàm số $f$ và các cận $a, b$ mà không phụ thuộc vào biến lấy tích phân: $\\int_a^b f(x)\\,dx = \\int_a^b f(t)\\,dt = \\int_a^b f(u)\\,du$.'
              }
            ]
          },
          {
            heading: '2. Tính chất của tích phân',
            summary: 'Bốn tính chất nền tảng của tích phân và công thức giá trị trung bình của hàm số.',
            boxes: [
              {
                title: 'Các tính chất của tích phân (SGK Tập 2 trang 15–16)',
                content: 'Cho $f(x), g(x)$ là các hàm số liên tục trên đoạn $[a; b]$ và $k \\in \\mathbb{R}$. Khi đó:',
                formula: '$$\\begin{aligned} &\\text{1) } \\int_a^b k f(x)\\,dx = k \\int_a^b f(x)\\,dx \\\\ &\\text{2) } \\int_a^b [f(x) + g(x)]\\,dx = \\int_a^b f(x)\\,dx + \\int_a^b g(x)\\,dx \\\\ &\\text{3) } \\int_a^b [f(x) - g(x)]\\,dx = \\int_a^b f(x)\\,dx - \\int_a^b g(x)\\,dx \\\\ &\\text{4) } \\int_a^b f(x)\\,dx = \\int_a^c f(x)\\,dx + \\int_c^b f(x)\\,dx \\quad (c \\in (a; b)) \\end{aligned}$$',
                note: 'Giá trị trung bình của hàm số liên tục $f(x)$ trên đoạn $[a; b]$ (SGK trang 18) được xác định bởi công thức: $\\bar{f} = \\frac{1}{b - a} \\int_a^b f(x)\\,dx$.'
              }
            ]
          }
        ]
      },
      {
        lessonId: 'bai-13',
        lessonNumber: 13,
        title: 'Bài 13. Ứng dụng hình học của tích phân',
        chapterId: 'chuong-4',
        chapterTitle: 'CHƯƠNG IV. NGUYÊN HÀM VÀ TÍCH PHÂN',
        volume: 2,
        pageNumber: 19,
        keyConcepts: [
          'Diện tích hình phẳng giới hạn bởi một đồ thị và trục hoành',
          'Diện tích hình phẳng giới hạn bởi hai đồ thị hàm số',
          'Thể tích vật thể có diện tích mặt cắt S(x)',
          'Thể tích khối tròn xoay khi quay hình phẳng quanh trục Ox'
        ],
        examIds: ['bai13_de1', 'bai13_de2'],
        sections: [
          {
            heading: '1. Ứng dụng tích phân để tính diện tích hình phẳng',
            summary: 'Công thức diện tích hình phẳng giới hạn bởi các đường cong liên tục trên đoạn $[a; b]$.',
            boxes: [
              {
                title: 'Diện tích hình phẳng giới hạn bởi một đồ thị, trục hoành và hai đường thẳng $x = a, x = b$ (SGK Tập 2 trang 20)',
                content: 'Diện tích $S$ của hình phẳng giới hạn bởi đồ thị của hàm số $f(x)$ liên tục, trục hoành và hai đường thẳng $x = a, x = b\\ (a < b)$ được tính bằng công thức:',
                formula: '$$S = \\int_a^b |f(x)|\\,dx$$'
              },
              {
                title: 'Diện tích hình phẳng giới hạn bởi hai đồ thị hàm số và hai đường thẳng $x = a, x = b$ (SGK Tập 2 trang 21)',
                content: 'Cho hai hàm số $y = f(x), y = g(x)$ liên tục trên đoạn $[a; b]$. Khi đó diện tích hình phẳng giới hạn bởi đồ thị của hai hàm số $y = f(x), y = g(x)$ và hai đường thẳng $x = a, x = b\\ (a < b)$ là:',
                formula: '$$S = \\int_a^b |f(x) - g(x)|\\,dx$$',
                note: 'Để khử dấu giá trị tuyệt đối, ta giải phương trình $f(x) - g(x) = 0$ trên khoảng $(a; b)$ để tìm các nghiệm $x_1 < x_2 < \\dots < x_n$, rồi tách tích phân trên từng đoạn con.'
              }
            ]
          },
          {
            heading: '2. Ứng dụng tích phân để tính thể tích vật thể',
            summary: 'Công thức tính thể tích vật thể theo diện tích thiết diện $S(x)$ và thể tích khối tròn xoay.',
            boxes: [
              {
                title: 'Công thức tính thể tích của vật thể theo diện tích mặt cắt (SGK Tập 2 trang 23)',
                content: 'Cho một vật thể trong không gian $Oxyz$. Gọi $B$ là phần vật thể giới hạn bởi hai mặt phẳng vuông góc với trục $Ox$ tại các điểm có hoành độ $x = a, x = b\\ (a < b)$. Một mặt phẳng vuông góc với trục $Ox$ tại điểm có hoành độ là $x$ cắt vật thể theo mặt cắt có diện tích là $S(x)$. Giả sử $S(x)$ là hàm số liên tục trên $[a; b]$. Khi đó thể tích $V$ của phần vật thể $B$ được tính bởi công thức:',
                formula: '$$V = \\int_a^b S(x)\\,dx$$'
              },
              {
                title: 'Công thức tính thể tích của khối tròn xoay (SGK Tập 2 trang 24)',
                content: 'Cho hàm số $f(x)$ liên tục, không âm trên đoạn $[a; b]$. Khi quay hình phẳng giới hạn bởi đồ thị hàm số $y = f(x)$, trục hoành và hai đường thẳng $x = a, x = b$ xung quanh trục $Ox$, ta được hình khối gọi là một khối tròn xoay có thể tích là:',
                formula: '$$V = \\pi \\int_a^b f^2(x)\\,dx$$'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    chapterId: 'chuong-5',
    chapterTitle: 'CHƯƠNG V. PHƯƠNG PHÁP TOẠ ĐỘ TRONG KHÔNG GIAN',
    volume: 2,
    lessons: [
      {
        lessonId: 'bai-14',
        lessonNumber: 14,
        title: 'Bài 14. Phương trình mặt phẳng',
        chapterId: 'chuong-5',
        chapterTitle: 'CHƯƠNG V. PHƯƠNG PHÁP TOẠ ĐỘ TRONG KHÔNG GIAN',
        volume: 2,
        pageNumber: 29,
        keyConcepts: [
          'Vectơ pháp tuyến, cặp vectơ chỉ phương và tích có hướng [u, v]',
          'Phương trình tổng quát Ax + By + Cz + D = 0 và phương trình mặt chắn',
          'Điều kiện hai mặt phẳng vuông góc, song song, trùng nhau',
          'Công thức khoảng cách từ một điểm đến một mặt phẳng'
        ],
        examIds: ['bai14_de1', 'bai14_de2'],
        sections: [
          {
            heading: '1. Vectơ pháp tuyến và cặp vectơ chỉ phương của mặt phẳng',
            summary: 'Khái niệm vectơ pháp tuyến, cặp vectơ chỉ phương và công thức tích có hướng xác định vectơ pháp tuyến.',
            boxes: [
              {
                title: 'Vectơ pháp tuyến và Cặp vectơ chỉ phương của mặt phẳng (SGK Tập 2 trang 29–30)',
                content: 'Cho mặt phẳng $(\\alpha)$:',
                formula: '$$\\begin{aligned} &\\bullet\\ \\text{Vectơ } \\vec{n} \\neq \\vec{0} \\text{ là vectơ pháp tuyến (VTPT) của } (\\alpha) \\text{ nếu giá của } \\vec{n} \\text{ vuông góc với } (\\alpha). \\\\ &\\bullet\\ \\text{Hai vectơ } \\vec{u}, \\vec{v} \\text{ không cùng phương là cặp vectơ chỉ phương (VTCP) của } (\\alpha) \\\\ &\\quad \\text{nếu các giá của chúng song song hoặc nằm trên } (\\alpha). \\end{aligned}$$',
                note: 'Nếu $\\vec{n}$ là một VTPT của mặt phẳng $(\\alpha)$ thì với mọi $k \\neq 0$, $k\\vec{n}$ cũng là một VTPT của $(\\alpha)$.'
              },
              {
                title: 'Xác định vectơ pháp tuyến bằng tích có hướng (SGK Tập 2 trang 31)',
                content: 'Trong không gian $Oxyz$, nếu mặt phẳng $(\\alpha)$ nhận hai vectơ $\\vec{u} = (a; b; c)$ và $\\vec{v} = (a\'; b\'; c\')$ làm cặp vectơ chỉ phương thì $(\\alpha)$ nhận vectơ tích có hướng $[\\vec{u}, \\vec{v}]$ làm một vectơ pháp tuyến:',
                formula: '$$\\vec{n} = [\\vec{u}, \\vec{v}] = (bc\' - b\'c;\\ ca\' - c\'a;\\ ab\' - a\'b)$$',
                note: 'Chú ý (SGK trang 31): Tích có hướng $[\\vec{u}, \\vec{v}]$ vuông góc với cả $\\vec{u}$ và $\\vec{v}$. Ngoài ra, $\\vec{u}$ và $\\vec{v}$ cùng phương khi và chỉ khi $[\\vec{u}, \\vec{v}] = \\vec{0}$.'
              }
            ]
          },
          {
            heading: '2. Phương trình tổng quát của mặt phẳng',
            summary: 'Các dạng phương trình của mặt phẳng trong không gian $Oxyz$.',
            boxes: [
              {
                title: 'Phương trình tổng quát và phương trình mặt phẳng đi qua một điểm (SGK Tập 2 trang 32–33)',
                content: 'Trong không gian $Oxyz$, mọi mặt phẳng đều có phương trình tổng quát dạng $Ax + By + Cz + D = 0$ (với $A^2 + B^2 + C^2 > 0$) và nhận $\\vec{n} = (A; B; C)$ làm một VTPT. Phương trình mặt phẳng đi qua điểm $M_0(x_0; y_0; z_0)$ và có VTPT $\\vec{n} = (A; B; C)$ là:',
                formula: '$$A(x - x_0) + B(y - y_0) + C(z - z_0) = 0 \\iff Ax + By + Cz + D = 0 \\quad (D = -Ax_0 - By_0 - Cz_0)$$'
              },
              {
                title: 'Phương trình mặt phẳng theo đoạn chắn (SGK Tập 2 trang 34)',
                content: 'Mặt phẳng đi qua ba điểm $A(a; 0; 0), B(0; b; 0), C(0; 0; c)$ với $abc \\neq 0$ có phương trình:',
                formula: '$$\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$$'
              }
            ]
          },
          {
            heading: '3. Điều kiện song song, vuông góc của hai mặt phẳng & Khoảng cách từ điểm đến mặt phẳng',
            summary: 'Quan hệ vuông góc, song song giữa hai mặt phẳng và công thức khoảng cách từ điểm $M$ đến mặt phẳng $(P)$.',
            boxes: [
              {
                title: 'Điều kiện để hai mặt phẳng vuông góc, song song (SGK Tập 2 trang 36–37)',
                content: 'Cho hai mặt phẳng $(\\alpha_1): A_1x + B_1y + C_1z + D_1 = 0$ (VTPT $\\vec{n}_1 = (A_1; B_1; C_1)$) và $(\\alpha_2): A_2x + B_2y + C_2z + D_2 = 0$ (VTPT $\\vec{n}_2 = (A_2; B_2; C_2)$):',
                formula: '$$\\begin{aligned} &\\bullet\\ (\\alpha_1) \\perp (\\alpha_2) \\iff \\vec{n}_1 \\cdot \\vec{n}_2 = 0 \\iff A_1A_2 + B_1B_2 + C_1C_2 = 0. \\\\ &\\bullet\\ (\\alpha_1) \\parallel (\\alpha_2) \\iff \\exists k \\neq 0:\\ \\begin{cases} \\vec{n}_1 = k\\vec{n}_2 \\\\ D_1 \\neq kD_2 \\end{cases}; \\qquad (\\alpha_1) \\equiv (\\alpha_2) \\iff \\exists k \\neq 0:\\ \\begin{cases} \\vec{n}_1 = k\\vec{n}_2 \\\\ D_1 = kD_2 \\end{cases}. \\end{aligned}$$'
              },
              {
                title: 'Khoảng cách từ một điểm đến một mặt phẳng (SGK Tập 2 trang 38)',
                content: 'Trong không gian $Oxyz$, khoảng cách từ điểm $M_0(x_0; y_0; z_0)$ đến mặt phẳng $(P): Ax + By + Cz + D = 0$ là:',
                formula: '$$d(M_0, (P)) = \\frac{|Ax_0 + By_0 + Cz_0 + D|}{\\sqrt{A^2 + B^2 + C^2}}$$'
              }
            ]
          }
        ]
      },
      {
        lessonId: 'bai-15',
        lessonNumber: 15,
        title: 'Bài 15. Phương trình đường thẳng trong không gian',
        chapterId: 'chuong-5',
        chapterTitle: 'CHƯƠNG V. PHƯƠNG PHÁP TOẠ ĐỘ TRONG KHÔNG GIAN',
        volume: 2,
        pageNumber: 41,
        keyConcepts: [
          'Vectơ chỉ phương của đường thẳng',
          'Phương trình tham số và phương trình chính tắc của đường thẳng',
          'Phương trình đường thẳng đi qua hai điểm phân biệt',
          'Vị trí tương đối giữa hai đường thẳng (song song, trùng, cắt, chéo nhau)'
        ],
        examIds: ['bai15_de1', 'bai15_de2'],
        sections: [
          {
            heading: '1. Phương trình đường thẳng',
            summary: 'Vectơ chỉ phương, phương trình tham số, phương trình chính tắc và phương trình đường thẳng đi qua hai điểm.',
            boxes: [
              {
                title: 'Vectơ chỉ phương của đường thẳng (SGK Tập 2 trang 41)',
                content: 'Vectơ $\\vec{u} \\neq \\vec{0}$ được gọi là vectơ chỉ phương (VTCP) của đường thẳng $\\Delta$ nếu giá của $\\vec{u}$ song song hoặc trùng với $\\Delta$. Nếu $\\vec{u}$ là một VTCP của $\\Delta$ thì $k\\vec{u}\\ (k \\neq 0)$ cũng là một VTCP của $\\Delta$.'
              },
              {
                title: 'Phương trình tham số và Phương trình chính tắc của đường thẳng (SGK Tập 2 trang 42–43)',
                content: 'Trong không gian $Oxyz$, cho đường thẳng $\\Delta$ đi qua điểm $M_0(x_0; y_0; z_0)$ và có vectơ chỉ phương $\\vec{u} = (a; b; c)$:',
                formula: '$$\\begin{aligned} &\\bullet\\ \\text{Phương trình tham số } (a^2 + b^2 + c^2 > 0): \\quad \\begin{cases} x = x_0 + at \\\\ y = y_0 + bt \\\\ z = z_0 + ct \\end{cases} \\quad (t \\in \\mathbb{R}) \\\\ &\\bullet\\ \\text{Phương trình chính tắc } (abc \\neq 0): \\quad \\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c} \\end{aligned}$$'
              },
              {
                title: 'Phương trình đường thẳng đi qua hai điểm (SGK Tập 2 trang 44)',
                content: 'Trong không gian $Oxyz$, đường thẳng $\\Delta$ đi qua hai điểm phân biệt $A(x_A; y_A; z_A)$ và $B(x_B; y_B; z_B)$ nhận $\\overrightarrow{AB} = (x_B - x_A; y_B - y_A; z_B - z_A)$ làm một vectơ chỉ phương:',
                formula: '$$\\begin{cases} x = x_A + (x_B - x_A)t \\\\ y = y_A + (y_B - y_A)t \\\\ z = z_A + (z_B - z_A)t \\end{cases} \\quad \\text{hoặc} \\quad \\frac{x - x_A}{x_B - x_A} = \\frac{y - y_A}{y_B - y_A} = \\frac{z - z_A}{z_B - z_A}$$'
              }
            ]
          },
          {
            heading: '2. Hai đường thẳng vuông góc và vị trí tương đối của hai đường thẳng',
            summary: 'Điều kiện hai đường thẳng vuông góc và tiêu chuẩn xét 4 vị trí tương đối giữa hai đường thẳng trong không gian.',
            boxes: [
              {
                title: 'Điều kiện hai đường thẳng vuông góc (SGK Tập 2 trang 45)',
                content: 'Trong không gian $Oxyz$, cho hai đường thẳng $\\Delta_1, \\Delta_2$ tương ứng có vectơ chỉ phương $\\vec{u}_1 = (a_1; b_1; c_1)$ và $\\vec{u}_2 = (a_2; b_2; c_2)$. Khi đó:',
                formula: '$$\\Delta_1 \\perp \\Delta_2 \\iff \\vec{u}_1 \\cdot \\vec{u}_2 = 0 \\iff a_1a_2 + b_1b_2 + c_1c_2 = 0$$'
              },
              {
                title: 'Vị trí tương đối của hai đường thẳng trong không gian (SGK Tập 2 trang 46–48)',
                content: 'Cho đường thẳng $\\Delta_1$ đi qua $A_1$, có VTCP $\\vec{u}_1$ và đường thẳng $\\Delta_2$ đi qua $A_2$, có VTCP $\\vec{u}_2$:',
                formula: '$$\\begin{aligned} &\\bullet\\ \\Delta_1 \\parallel \\Delta_2 \\iff \\begin{cases} [\\vec{u}_1, \\vec{u}_2] = \\vec{0} \\\\ [\\vec{u}_1, \\overrightarrow{A_1A_2}] \\neq \\vec{0} \\end{cases} \\qquad \\bullet\\ \\Delta_1 \\equiv \\Delta_2 \\iff [\\vec{u}_1, \\vec{u}_2] = [\\vec{u}_1, \\overrightarrow{A_1A_2}] = \\vec{0} \\\\ &\\bullet\\ \\Delta_1 \\text{ cắt } \\Delta_2 \\iff \\begin{cases} [\\vec{u}_1, \\vec{u}_2] \\neq \\vec{0} \\\\ \\overrightarrow{A_1A_2} \\cdot [\\vec{u}_1, \\vec{u}_2] = 0 \\end{cases} \\qquad \\bullet\\ \\Delta_1 \\text{ và } \\Delta_2 \\text{ chéo nhau} \\iff \\overrightarrow{A_1A_2} \\cdot [\\vec{u}_1, \\vec{u}_2] \\neq 0 \\end{aligned}$$',
                note: 'Ta cũng có thể xét vị trí tương đối của hai đường thẳng bằng cách xét sự cùng phương của $\\vec{u}_1, \\vec{u}_2$ kết hợp giải hệ phương trình hai ẩn tham số $t_1, t_2$ tương ứng.'
              }
            ]
          }
        ]
      },
      {
        lessonId: 'bai-16',
        lessonNumber: 16,
        title: 'Bài 16. Công thức tính góc trong không gian',
        chapterId: 'chuong-5',
        chapterTitle: 'CHƯƠNG V. PHƯƠNG PHÁP TOẠ ĐỘ TRONG KHÔNG GIAN',
        volume: 2,
        pageNumber: 50,
        keyConcepts: [
          'Công thức tính góc giữa hai đường thẳng: cos(Δ₁, Δ₂) = |cos(u₁, u₂)|',
          'Công thức tính góc giữa đường thẳng và mặt phẳng: sin(Δ, (P)) = |cos(u, n)|',
          'Công thức tính góc giữa hai mặt phẳng: cos((P), (Q)) = |cos(n₁, n₂)|'
        ],
        examIds: ['bai16_de1', 'bai16_de2'],
        sections: [
          {
            heading: '1. Công thức tính góc giữa hai đường thẳng',
            summary: 'Góc giữa hai đường thẳng trong không gian luôn thuộc đoạn $[0^\\circ; 90^\\circ]$.',
            boxes: [
              {
                title: 'Góc giữa hai đường thẳng (SGK Tập 2 trang 50)',
                content: 'Trong không gian $Oxyz$, cho hai đường thẳng $\\Delta$ và $\\Delta\'$ tương ứng có vectơ chỉ phương $\\vec{u} = (a; b; c)$ và $\\vec{u}\' = (a\'; b\'; c\')$. Khi đó $0^\\circ \\le (\\Delta, \\Delta\') \\le 90^\\circ$ và:',
                formula: '$$\\cos(\\Delta, \\Delta\') = |\\cos(\\vec{u}, \\vec{u}\')| = \\frac{|aa\' + bb\' + cc\'|}{\\sqrt{a^2 + b^2 + c^2} \\cdot \\sqrt{a\'^2 + b\'^2 + c\'^2}}$$'
              }
            ]
          },
          {
            heading: '2. Công thức tính góc giữa đường thẳng và mặt phẳng',
            summary: 'Sin của góc giữa đường thẳng $\\Delta$ và mặt phẳng $(P)$ bằng giá trị tuyệt đối của côsin góc giữa VTCP $\\vec{u}$ và VTPT $\\vec{n}$.',
            boxes: [
              {
                title: 'Góc giữa đường thẳng và mặt phẳng (SGK Tập 2 trang 51)',
                content: 'Trong không gian $Oxyz$, cho đường thẳng $\\Delta$ có vectơ chỉ phương $\\vec{u} = (a; b; c)$ và mặt phẳng $(P)$ có vectơ pháp tuyến $\\vec{n} = (A; B; C)$. Khi đó $0^\\circ \\le (\\Delta, (P)) \\le 90^\\circ$ và:',
                formula: '$$\\sin(\\Delta, (P)) = |\\cos(\\vec{u}, \\vec{n})| = \\frac{|aA + bB + cC|}{\\sqrt{a^2 + b^2 + c^2} \\cdot \\sqrt{A^2 + B^2 + C^2}}$$'
              }
            ]
          },
          {
            heading: '3. Công thức tính góc giữa hai mặt phẳng',
            summary: 'Côsin góc giữa hai mặt phẳng bằng giá trị tuyệt đối của côsin góc giữa hai vectơ pháp tuyến.',
            boxes: [
              {
                title: 'Góc giữa hai mặt phẳng (SGK Tập 2 trang 52)',
                content: 'Trong không gian $Oxyz$, cho hai mặt phẳng $(P)$ và $(Q)$ tương ứng có vectơ pháp tuyến $\\vec{n} = (A; B; C)$ và $\\vec{n}\' = (A\'; B\'; C\')$. Khi đó $0^\\circ \\le ((P), (Q)) \\le 90^\\circ$ và:',
                formula: '$$\\cos((P), (Q)) = |\\cos(\\vec{n}, \\vec{n}\')| = \\frac{|AA\' + BB\' + CC\'|}{\\sqrt{A^2 + B^2 + C^2} \\cdot \\sqrt{A\'^2 + B\'^2 + C\'^2}}$$'
              }
            ]
          }
        ]
      },
      {
        lessonId: 'bai-17',
        lessonNumber: 17,
        title: 'Bài 17. Phương trình mặt cầu',
        chapterId: 'chuong-5',
        chapterTitle: 'CHƯƠNG V. PHƯƠNG PHÁP TOẠ ĐỘ TRONG KHÔNG GIAN',
        volume: 2,
        pageNumber: 54,
        keyConcepts: [
          'Định nghĩa mặt cầu S(I; R) và vị trí điểm M đối với mặt cầu',
          'Phương trình chính tắc (x - a)² + (y - b)² + (z - c)² = R²',
          'Phương trình dạng khai triển x² + y² + z² - 2ax - 2by - 2cz + d = 0 (a² + b² + c² - d > 0)'
        ],
        examIds: ['bai17_de1', 'bai17_de2'],
        sections: [
          {
            heading: '1. Phương trình mặt cầu',
            summary: 'Phương trình chính tắc và phương trình dạng khai triển của mặt cầu trong không gian $Oxyz$.',
            boxes: [
              {
                title: 'Phương trình chính tắc của mặt cầu (SGK Tập 2 trang 55)',
                content: 'Trong không gian $Oxyz$, mặt cầu $(S)$ tâm $I(a; b; c)$ bán kính $R > 0$ có phương trình là:',
                formula: '$$(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2$$',
                note: 'Chú ý (SGK trang 55): Cho mặt cầu $(S)$ tâm $I(a; b; c)$ bán kính $R$ và điểm $M(x; y; z)$. Điểm $M$ nằm trên mặt cầu $\\iff IM = R$; điểm $M$ nằm trong mặt cầu $\\iff IM < R$; điểm $M$ nằm ngoài mặt cầu $\\iff IM > R$.'
              },
              {
                title: 'Phương trình mặt cầu dạng khai triển (Nhận xét SGK Tập 2 trang 56)',
                content: 'Phương trình $x^2 + y^2 + z^2 - 2ax - 2by - 2cz + d = 0$ xác định một mặt cầu khi và chỉ khi $a^2 + b^2 + c^2 - d > 0$. Khi đó mặt cầu có tâm $I$ và bán kính $R$ là:',
                formula: '$$\\begin{cases} \\text{Điều kiện là mặt cầu: } a^2 + b^2 + c^2 - d > 0 \\\\ \\text{Tâm mặt cầu: } I(a; b; c) \\\\ \\text{Bán kính mặt cầu: } R = \\sqrt{a^2 + b^2 + c^2 - d} \\end{cases}$$'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    chapterId: 'chuong-6',
    chapterTitle: 'CHƯƠNG VI. XÁC SUẤT CÓ ĐIỀU KIỆN',
    volume: 2,
    lessons: [
      {
        lessonId: 'bai-18',
        lessonNumber: 18,
        title: 'Bài 18. Xác suất có điều kiện',
        chapterId: 'chuong-6',
        chapterTitle: 'CHƯƠNG VI. XÁC SUẤT CÓ ĐIỀU KIỆN',
        volume: 2,
        pageNumber: 64,
        keyConcepts: [
          'Định nghĩa xác suất có điều kiện P(A | B)',
          'Công thức tính P(A | B) = P(AB) / P(B) và P(A | B) = n(AB) / n(B)',
          'Công thức nhân xác suất cho hai biến cố bất kì P(AB) = P(B)·P(A | B)',
          'Sơ đồ hình cây và bảng dữ liệu thống kê 2 × 2'
        ],
        examIds: ['bai18_de1', 'bai18_de2'],
        sections: [
          {
            heading: '1. Xác suất có điều kiện',
            summary: 'Định nghĩa và công thức tính xác suất của biến cố $A$ với điều kiện biến cố $B$ đã xảy ra.',
            boxes: [
              {
                title: 'Định nghĩa và Công thức xác suất có điều kiện (SGK Tập 2 trang 65)',
                content: 'Cho hai biến cố $A$ và $B$. Xác suất của biến cố $A$, tính trong điều kiện biết rằng biến cố $B$ đã xảy ra, được gọi là xác suất của $A$ với điều kiện $B$ và kí hiệu là $P(A \\mid B)$. Nếu $P(B) > 0$ thì:',
                formula: '$$P(A \\mid B) = \\frac{P(AB)}{P(B)}$$',
                note: 'Chú ý (SGK trang 66–67): Với phép thử có các kết quả đồng khả năng, nếu $n(B) > 0$ thì $P(A \\mid B) = \\frac{n(AB)}{n(B)}$. Với hai biến cố $A, B$ bất kì và $P(B) > 0$, ta luôn có: $P(\\overline{A} \\mid B) = 1 - P(A \\mid B)$. Nếu $A$ và $B$ là hai biến cố độc lập với $0 < P(A) < 1,\\ 0 < P(B) < 1$ thì $P(A \\mid B) = P(A \\mid \\overline{B}) = P(A)$ và $P(B \\mid A) = P(B \\mid \\overline{A}) = P(B)$.'
              }
            ]
          },
          {
            heading: '2. Công thức nhân xác suất cho hai biến cố bất kì',
            summary: 'Mở rộng công thức nhân xác suất cho hai biến cố phụ thuộc và biểu diễn trực quan bằng sơ đồ hình cây.',
            boxes: [
              {
                title: 'Công thức nhân xác suất (SGK Tập 2 trang 68)',
                content: 'Với hai biến cố $A$ và $B$ bất kì, ta có công thức nhân xác suất:',
                formula: '$$P(AB) = P(B) \\cdot P(A \\mid B) = P(A) \\cdot P(B \\mid A)$$',
                note: 'Khi sử dụng sơ đồ hình cây, xác suất của biến cố giao ở mỗi nhánh cuối bằng tích các xác suất ghi trên các nhánh dẫn tới kết quả đó.'
              }
            ]
          }
        ]
      },
      {
        lessonId: 'bai-19',
        lessonNumber: 19,
        title: 'Bài 19. Công thức xác suất toàn phần và công thức Bayes',
        chapterId: 'chuong-6',
        chapterTitle: 'CHƯƠNG VI. XÁC SUẤT CÓ ĐIỀU KIỆN',
        volume: 2,
        pageNumber: 72,
        keyConcepts: [
          'Công thức xác suất toàn phần P(B) = P(A)·P(B | A) + P(Ā)·P(B | Ā)',
          'Công thức Bayes tính xác suất hậu nghiệm P(A | B)',
          'Ứng dụng trong y học, kiểm định chất lượng và dự báo thống kê'
        ],
        examIds: ['bai19_de1', 'bai19_de2'],
        sections: [
          {
            heading: '1. Công thức xác suất toàn phần',
            summary: 'Tính xác suất của biến cố $B$ thông qua một biến cố trung gian $A$ và biến cố đối $\\overline{A}$.',
            boxes: [
              {
                title: 'Công thức xác suất toàn phần (SGK Tập 2 trang 73)',
                content: 'Cho hai biến cố $A$ và $B$ với $0 < P(A) < 1$. Khi đó xác suất của biến cố $B$ được tính theo công thức xác suất toàn phần:',
                formula: '$$P(B) = P(A) \\cdot P(B \\mid A) + P(\\overline{A}) \\cdot P(B \\mid \\overline{A})$$'
              }
            ]
          },
          {
            heading: '2. Công thức Bayes',
            summary: 'Công thức tính xác suất có điều kiện ngược $P(A \\mid B)$ khi đã biết xác suất tiên nghiệm $P(A)$ và các xác suất điều kiện $P(B \\mid A), P(B \\mid \\overline{A})$.',
            boxes: [
              {
                title: 'Công thức Bayes (SGK Tập 2 trang 74–75)',
                content: 'Giả sử $A$ và $B$ là hai biến cố ngẫu nhiên thoả mãn $P(B) > 0$ và $0 < P(A) < 1$. Khi đó ta có công thức Bayes:',
                formula: '$$P(A \\mid B) = \\frac{P(A) \\cdot P(B \\mid A)}{P(B)} = \\frac{P(A) \\cdot P(B \\mid A)}{P(A) \\cdot P(B \\mid A) + P(\\overline{A}) \\cdot P(B \\mid \\overline{A})}$$',
                note: 'Chú ý (SGK trang 75): Công thức Bayes vẫn đúng với biến cố $A$ bất kì (kể cả khi $P(A) = 0$ hoặc $P(A) = 1$) miễn là $P(B) > 0$. Công thức Bayes cho phép cập nhật xác suất xảy ra của biến cố $A$ sau khi có thêm thông tin mới rằng biến cố $B$ đã xảy ra.'
              }
            ]
          }
        ]
      }
    ]
  }
];

export const ALL_THEORY_LESSONS: LessonTheory[] = THEORY_CATALOG.flatMap(chapter => chapter.lessons);

export function getTheoryByLessonId(lessonId: string): LessonTheory | undefined {
  const normalizedId = lessonId.replace(/^bai-0(\d)$/, 'bai-$1');
  const direct = ALL_THEORY_LESSONS.find(l => l.lessonId === normalizedId);
  if (direct) return direct;

  const chapterMatch = lessonId.match(/^ontap-chuong-(\d)$/);
  if (chapterMatch) {
    const chNum = parseInt(chapterMatch[1], 10);
    const chapter = THEORY_CATALOG.find(c => c.chapterId === `chuong-${chNum}`);
    if (chapter) {
      return {
        lessonId,
        lessonNumber: chNum,
        title: `Tổng hợp Lý thuyết & Công thức - ${chapter.chapterTitle}`,
        chapterId: chapter.chapterId,
        chapterTitle: chapter.chapterTitle,
        volume: chapter.volume,
        pageNumber: chapter.lessons[0]?.pageNumber || 1,
        keyConcepts: chapter.lessons.flatMap(l => l.keyConcepts),
        examIds: [`ontap_c${chNum}_de1`, `ontap_c${chNum}_de2`],
        sections: chapter.lessons.flatMap(l =>
          l.sections.map(s => ({
            ...s,
            heading: `[${l.title.split('.')[0]}] ${s.heading}`
          }))
        )
      };
    }
  }

  if (lessonId === 'ontap-cuoi-nam') {
    return {
      lessonId,
      lessonNumber: 20,
      title: 'Tổng hợp Lý thuyết & Công thức Trọng tâm Toán 12 (Cả năm)',
      chapterId: 'ontap-cuoi-nam',
      chapterTitle: 'ÔN TẬP CUỐI NĂM TOÁN 12 (TẬP 1 & TẬP 2)',
      volume: 2,
      pageNumber: 81,
      keyConcepts: ALL_THEORY_LESSONS.map(l => l.title),
      examIds: ['ontap_cn_de1', 'ontap_cn_de2'],
      sections: ALL_THEORY_LESSONS.map(l => ({
        heading: l.title,
        summary: l.chapterTitle,
        boxes: l.sections.flatMap(s => s.boxes)
      }))
    };
  }

  return undefined;
}

