import { THEORY_BOX_FIGURES } from './theoryFigures';

export interface TheoryCallout {
  type: 'chu-y' | 'nhan-xet' | 'y-nghia' | 'ghi-nho';
  title?: string;
  items: string[];
}

export interface TheoryFigure {
  src: string;
  caption: string;
  source?: string;
}

export interface TheoryFormulaBox {
  title: string;
  kind?: 'knowledge' | 'formula' | 'process';
  content: string;
  formula?: string;
  note?: string;
  callouts?: TheoryCallout[];
  figures?: TheoryFigure[];
}

export interface TheorySection {
  heading: string;
  summary?: string;
  boxes: TheoryFormulaBox[];
  callouts?: TheoryCallout[];
  remarks?: string[];
  figures?: TheoryFigure[];
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
          'Định nghĩa tính đồng biến, nghịch biến của hàm số trên tập $K$',
          'Định lí liên hệ giữa dấu đạo hàm $f\'(x)$ và tính đơn điệu',
          'Định nghĩa điểm cực đại, điểm cực tiểu, giá trị cực trị của hàm số',
          'Dấu hiệu nhận biết và quy trình 4 bước tìm cực trị bằng bảng biến thiên'
        ],
        examIds: ['bai1_de1', 'bai1_de2'],
        sections: [
          {
            heading: '1. Tính đơn điệu của hàm số',
            summary: 'Khái niệm tính đồng biến, nghịch biến của hàm số, mối liên hệ với dấu đạo hàm cấp một và quy trình xét chiều biến thiên bằng bảng biến thiên.',
            boxes: [
              {
                title: 'Khung kiến thức: Định nghĩa tính đồng biến, nghịch biến (SGK trang 6)',
                kind: 'knowledge',
                content: 'Giả sử $K$ là một khoảng, một đoạn hoặc một nửa khoảng và $y = f(x)$ là hàm số xác định trên $K$:',
                formula: '$$\\begin{aligned} &\\bullet\\ \\text{Hàm số } y = f(x) \\text{ được gọi là } \\textbf{đồng biến} \\text{ trên } K \\iff \\forall x_1, x_2 \\in K,\\ x_1 < x_2 \\Rightarrow f(x_1) < f(x_2). \\\\ &\\bullet\\ \\text{Hàm số } y = f(x) \\text{ được gọi là } \\textbf{nghịch biến} \\text{ trên } K \\iff \\forall x_1, x_2 \\in K,\\ x_1 < x_2 \\Rightarrow f(x_1) > f(x_2). \\end{aligned}$$',
                callouts: [
                  {
                    type: 'chu-y',
                    title: 'Chú ý (SGK trang 6)',
                    items: [
                      'Nếu hàm số đồng biến trên $K$ thì đồ thị của hàm số **đi lên** từ trái sang phải. Nếu hàm số nghịch biến trên $K$ thì đồ thị của hàm số **đi xuống** từ trái sang phải.',
                      'Hàm số đồng biến hay nghịch biến trên $K$ còn được gọi chung là **đơn điệu** trên $K$. Việc tìm các khoảng đồng biến, nghịch biến của hàm số còn được gọi là tìm các khoảng đơn điệu (hay xét tính đơn điệu) của hàm số.',
                      'Khi xét tính đơn điệu của hàm số mà không chỉ rõ tập $K$ thì ta hiểu là xét trên tập xác định của hàm số đó.'
                    ]
                  }
                ]
              },
              {
                title: 'Khung kiến thức: Mối liên hệ giữa tính đơn điệu và dấu của đạo hàm (SGK trang 7)',
                kind: 'knowledge',
                content: 'Cho hàm số $y = f(x)$ có đạo hàm trên khoảng $K$:',
                formula: '$$\\begin{aligned} &\\text{a) Nếu } f\'(x) > 0 \\text{ với mọi } x \\in K \\text{ thì hàm số } f(x) \\text{ đồng biến trên khoảng } K. \\\\ &\\text{b) Nếu } f\'(x) < 0 \\text{ với mọi } x \\in K \\text{ thì hàm số } f(x) \\text{ nghịch biến trên khoảng } K. \\end{aligned}$$',
                callouts: [
                  {
                    type: 'chu-y',
                    title: 'Chú ý mở rộng (SGK trang 7)',
                    items: [
                      'Nếu $f\'(x) \\ge 0$ (hoặc $f\'(x) \\le 0$) với mọi $x \\in K$ và $f\'(x) = 0$ chỉ tại một số hữu hạn điểm của $K$ thì hàm số $f(x)$ đồng biến (hoặc nghịch biến) trên khoảng $K$.',
                      'Nếu $f\'(x) = 0$ với mọi $x \\in K$ thì hàm số $f(x)$ không đổi trên khoảng $K$.'
                    ]
                  }
                ]
              },
              {
                title: 'Quy trình: Các bước để xét tính đơn điệu của hàm số $y = f(x)$ (Chú ý SGK trang 8)',
                kind: 'process',
                content: 'Sử dụng bảng biến thiên để xét tính đơn điệu (còn nói gọn là **xét chiều biến thiên**) của hàm số:',
                formula: '$$\\begin{aligned} &\\text{Bước 1. Tìm tập xác định của hàm số.} \\\\ &\\text{Bước 2. Tính đạo hàm } f\'(x).\\text{ Tìm các điểm } x_i\\ (i = 1, 2, \\dots)\\text{ mà tại đó đạo hàm bằng } 0 \\text{ hoặc không tồn tại.} \\\\ &\\text{Bước 3. Sắp xếp các điểm } x_i \\text{ theo thứ tự tăng dần và lập bảng biến thiên của hàm số.} \\\\ &\\text{Bước 4. Nêu kết luận về khoảng đồng biến, khoảng nghịch biến của hàm số.} \\end{aligned}$$',
                callouts: [
                  {
                    type: 'ghi-nho',
                    title: 'Ghi nhớ (SGK trang 8)',
                    items: [
                      'Việc tìm các khoảng đồng biến, nghịch biến của hàm số còn được nói gọn là **xét chiều biến thiên** của hàm số.',
                      'Khi kết luận khoảng đơn điệu của hàm phân thức (ví dụ $y = \\frac{x-2}{x+1}$ xác định trên $\\mathbb{R} \\setminus \\{-1\\}$), phải viết tách rời từng khoảng $( -\\infty; -1 )$ và $( -1; +\\infty )$, không dùng kí hiệu hợp $\\cup$.'
                    ]
                  }
                ]
              }
            ]
          },
          {
            heading: '2. Cực trị của hàm số',
            summary: 'Khái niệm điểm cực đại, điểm cực tiểu, giá trị cực trị của hàm số và dấu hiệu nhận biết cực trị qua sự đổi dấu của đạo hàm $f\'(x)$.',
            boxes: [
              {
                title: 'Khung kiến thức: Định nghĩa cực đại, cực tiểu của hàm số (SGK trang 9)',
                kind: 'knowledge',
                content: 'Cho hàm số $y = f(x)$ xác định và liên tục trên khoảng $(a; b)$ ($a$ có thể là $-\\infty$, $b$ có thể là $+\\infty$) và điểm $x_0 \\in (a; b)$:',
                formula: '$$\\begin{aligned} &\\bullet\\ \\text{Nếu tồn tại số } h > 0 \\text{ sao cho } f(x) < f(x_0) \\text{ với mọi } x \\in (x_0 - h; x_0 + h) \\subset (a; b) \\text{ và } x \\neq x_0 \\\\ &\\quad \\text{thì ta nói hàm số } f(x) \\text{ đạt } \\textbf{cực đại} \\text{ tại } x_0. \\\\ &\\bullet\\ \\text{Nếu tồn tại số } h > 0 \\text{ sao cho } f(x) > f(x_0) \\text{ với mọi } x \\in (x_0 - h; x_0 + h) \\subset (a; b) \\text{ và } x \\neq x_0 \\\\ &\\quad \\text{thì ta nói hàm số } f(x) \\text{ đạt } \\textbf{cực tiểu} \\text{ tại } x_0. \\end{aligned}$$',
                callouts: [
                  {
                    type: 'chu-y',
                    title: 'Chú ý phân biệt thuật ngữ (SGK trang 9)',
                    items: [
                      'Nếu hàm số $y = f(x)$ đạt cực đại tại $x_0$ thì $x_0$ được gọi là **điểm cực đại của hàm số** $f(x)$; $f(x_0)$ được gọi là **giá trị cực đại của hàm số** $f(x)$ (kí hiệu $f_{\\text{CĐ}}$ hay $y_{\\text{CĐ}}$); điểm $M_0(x_0; f(x_0))$ được gọi là **điểm cực đại của đồ thị hàm số**.',
                      'Nếu hàm số $y = f(x)$ đạt cực tiểu tại $x_0$ thì $x_0$ được gọi là **điểm cực tiểu của hàm số** $f(x)$; $f(x_0)$ được gọi là **giá trị cực tiểu của hàm số** $f(x)$ (kí hiệu $f_{\\text{CT}}$ hay $y_{\\text{CT}}$); điểm $M_0(x_0; f(x_0))$ được gọi là **điểm cực tiểu của đồ thị hàm số**.',
                      'Các điểm cực đại và điểm cực tiểu được gọi chung là **điểm cực trị**. Giá trị cực đại và giá trị cực tiểu được gọi chung là **giá trị cực trị** (hay **cực trị**) của hàm số.'
                    ]
                  }
                ]
              },
              {
                title: 'Khung kiến thức: Dấu hiệu nhận biết cực trị qua đạo hàm (SGK trang 10–11)',
                kind: 'knowledge',
                content: 'Giả sử hàm số $y = f(x)$ liên tục trên khoảng $(a; b)$ chứa điểm $x_0$ và có đạo hàm trên các khoảng $(a; x_0)$ và $(x_0; b)$. Khi đó:',
                formula: '$$\\begin{aligned} &\\text{a) Nếu } f\'(x) < 0 \\text{ với mọi } x \\in (a; x_0) \\text{ và } f\'(x) > 0 \\text{ với mọi } x \\in (x_0; b) \\text{ (đổi dấu } - \\to +\\text{) thì } x_0 \\text{ là một điểm cực tiểu của } f(x). \\\\ &\\text{b) Nếu } f\'(x) > 0 \\text{ với mọi } x \\in (a; x_0) \\text{ và } f\'(x) < 0 \\text{ với mọi } x \\in (x_0; b) \\text{ (đổi dấu } + \\to -\\text{) thì } x_0 \\text{ là một điểm cực đại của } f(x). \\end{aligned}$$',
                callouts: [
                  {
                    type: 'chu-y',
                    title: 'Chú ý quan trọng (SGK trang 11)',
                    items: [
                      'Nếu $f\'(x_0) = 0$ nhưng $f\'(x)$ **không đổi dấu** khi $x$ qua $x_0$ thì $x_0$ **không phải** là điểm cực trị của hàm số. Chẳng hạn, hàm số $y = f(x) = x^3$ có $f\'(x) = 3x^2$, $f\'(0) = 0$, nhưng $x = 0$ không phải là điểm cực trị của hàm số.',
                      'Hàm số vẫn có thể đạt cực trị tại điểm $x_0$ mà tại đó $f(x)$ liên tục nhưng không có đạo hàm $f\'(x_0)$ miễn là $f\'(x)$ đổi dấu khi qua $x_0$ (ví dụ $y = |x|$ đạt cực tiểu tại $x = 0$).'
                    ]
                  }
                ]
              },
              {
                title: 'Quy trình: Các bước tìm cực trị của hàm số $y = f(x)$ (Chú ý SGK trang 11)',
                kind: 'process',
                content: 'Quy trình 4 bước tìm cực trị của hàm số bằng bảng biến thiên:',
                formula: '$$\\begin{aligned} &\\text{Bước 1. Tìm tập xác định của hàm số.} \\\\ &\\text{Bước 2. Tính đạo hàm } f\'(x).\\text{ Tìm các điểm mà tại đó đạo hàm } f\'(x) \\text{ bằng } 0 \\text{ hoặc đạo hàm không tồn tại.} \\\\ &\\text{Bước 3. Lập bảng biến thiên của hàm số.} \\\\ &\\text{Bước 4. Từ bảng biến thiên suy ra các cực trị của hàm số.} \\end{aligned}$$'
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
          'Định nghĩa GTLN và GTNN của hàm số $y = f(x)$ trên tập $D$',
          'Các kí hiệu $\\max_{x \\in D} f(x)$, $\\max_D f(x)$, $\\max_D y$ và $\\min_{x \\in D} f(x)$, $\\min_D f(x)$, $\\min_D y$',
          'Quy tắc 3 bước tìm GTLN và GTNN của hàm số liên tục trên đoạn $[a; b]$'
        ],
        examIds: ['bai2_de1', 'bai2_de2'],
        sections: [
          {
            heading: '1. Định nghĩa giá trị lớn nhất và giá trị nhỏ nhất',
            summary: 'Khái niệm giá trị lớn nhất (GTLN) và giá trị nhỏ nhất (GTNN) của hàm số $y = f(x)$ trên một tập hợp $D$ cho trước.',
            boxes: [
              {
                title: 'Khung kiến thức: Định nghĩa GTLN và GTNN trên tập $D$ (SGK trang 15)',
                kind: 'knowledge',
                content: 'Cho hàm số $y = f(x)$ xác định trên tập $D$:',
                formula: '$$\\begin{aligned} &\\bullet\\ \\text{Số } M \\text{ là } \\textbf{giá trị lớn nhất} \\text{ của } f(x) \\text{ trên } D \\iff \\begin{cases} f(x) \\le M, & \\forall x \\in D \\\\ \\exists x_0 \\in D: & f(x_0) = M \\end{cases} \\quad \\text{Kí hiệu: } M = \\max_{x \\in D} f(x) \\text{ hoặc } M = \\max_D f(x). \\\\ &\\bullet\\ \\text{Số } m \\text{ là } \\textbf{giá trị nhỏ nhất} \\text{ của } f(x) \\text{ trên } D \\iff \\begin{cases} f(x) \\ge m, & \\forall x \\in D \\\\ \\exists x_0 \\in D: & f(x_0) = m \\end{cases} \\quad \\text{Kí hiệu: } m = \\min_{x \\in D} f(x) \\text{ hoặc } m = \\min_D f(x). \\end{aligned}$$',
                callouts: [
                  {
                    type: 'chu-y',
                    title: 'Chú ý (SGK trang 16)',
                    items: [
                      'Ta quy ước rằng khi nói giá trị lớn nhất và giá trị nhỏ nhất của hàm số $f(x)$ (mà không nói "trên tập $D$") thì ta hiểu đó là giá trị lớn nhất và giá trị nhỏ nhất của $f(x)$ trên **tập xác định** của hàm số.',
                      'Để tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên tập $D$, ta thường **lập bảng biến thiên** của hàm số trên tập $D$ để kết luận.',
                      'Trong thực hành, ta cũng dùng các kí hiệu $\\min_D y$, $\\max_D y$ để chỉ giá trị nhỏ nhất, giá trị lớn nhất (nếu có) của hàm số $y = f(x)$ trên tập $D$.'
                    ]
                  }
                ]
              }
            ]
          },
          {
            heading: '2. Cách tìm GTLN và GTNN của hàm số trên một đoạn',
            summary: 'Quy tắc tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số liên tục trên đoạn $[a; b]$ không cần lập bảng biến thiên.',
            boxes: [
              {
                title: 'Khung kiến thức: Các bước tìm GTLN và GTNN trên đoạn $[a; b]$ (SGK trang 18)',
                kind: 'knowledge',
                content: 'Giả sử $y = f(x)$ là hàm số liên tục trên $[a; b]$ và có đạo hàm trên $(a; b)$, có thể trừ ra tại một số hữu hạn điểm mà tại đó hàm số không có đạo hàm. Giả sử chỉ có hữu hạn điểm trong đoạn $[a; b]$ mà đạo hàm $f\'(x)$ bằng $0$. Các bước tìm GTLN và GTNN của hàm số $f(x)$ trên đoạn $[a; b]$:',
                formula: '$$\\begin{aligned} &\\text{Bước 1. Tìm các điểm } x_1, x_2, \\dots, x_n \\in (a; b),\\text{ tại đó } f\'(x) \\text{ bằng } 0 \\text{ hoặc không tồn tại.} \\\\ &\\text{Bước 2. Tính } f(x_1), f(x_2), \\dots, f(x_n),\\ f(a) \\text{ và } f(b). \\\\ &\\text{Bước 3. Tìm số lớn nhất } M \\text{ và số nhỏ nhất } m \\text{ trong các số trên. Ta có:} \\\\ &\\qquad M = \\max_{[a; b]} f(x); \\qquad m = \\min_{[a; b]} f(x). \\end{aligned}$$',
                callouts: [
                  {
                    type: 'ghi-nho',
                    title: 'Ghi nhớ nhanh khi làm bài',
                    items: [
                      'Chỉ lấy các điểm $x_i$ thuộc khoảng mở $(a; b)$ (loại các nghiệm nằm ngoài đoạn $[a; b]$).',
                      'Nếu hàm số $y = f(x)$ đồng biến trên $[a; b]$ thì $\\min_{[a; b]} f(x) = f(a)$ và $\\max_{[a; b]} f(x) = f(b)$. Nếu hàm số nghịch biến trên $[a; b]$ thì $\\min_{[a; b]} f(x) = f(b)$ và $\\max_{[a; b]} f(x) = f(a)$.'
                    ]
                  }
                ]
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
          'Định nghĩa đường tiệm cận ngang $y = y_0$',
          'Định nghĩa đường tiệm cận đứng $x = x_0$',
          'Định nghĩa đường tiệm cận xiên $y = ax + b\\ (a \\neq 0)$',
          'Công thức xác định hệ số $a, b$ và kĩ thuật chia đa thức tìm tiệm cận xiên'
        ],
        examIds: ['bai3_de1', 'bai3_de2'],
        sections: [
          {
            heading: '1. Đường tiệm cận ngang',
            summary: 'Đường thẳng $y = y_0$ mà đồ thị hàm số $y = f(x)$ tiến sát dần về nó khi $x \\to +\\infty$ hoặc $x \\to -\\infty$.',
            boxes: [
              {
                title: 'Khung kiến thức: Định nghĩa đường tiệm cận ngang (SGK trang 20)',
                kind: 'knowledge',
                content: 'Đường thẳng $y = y_0$ gọi là **đường tiệm cận ngang** (gọi tắt là tiệm cận ngang) của đồ thị hàm số $y = f(x)$ nếu:',
                formula: '$$\\lim_{x \\to +\\infty} f(x) = y_0 \\quad \\text{hoặc} \\quad \\lim_{x \\to -\\infty} f(x) = y_0$$',
                callouts: [
                  {
                    type: 'nhan-xet',
                    title: 'Nhận xét (SGK trang 21)',
                    items: [
                      'Đồ thị của một hàm số $y = f(x)$ có tối đa $2$ đường tiệm cận ngang (ứng với $x \\to +\\infty$ và $x \\to -\\infty$). Chẳng hạn, hàm số $y = \\frac{\\sqrt{x^2+1}}{x}$ có hai tiệm cận ngang là $y = 1$ và $y = -1$.'
                    ]
                  }
                ]
              }
            ]
          },
          {
            heading: '2. Đường tiệm cận đứng',
            summary: 'Đường thẳng $x = x_0$ mà giá trị của hàm số tiến tới $+\\infty$ hoặc $-\\infty$ khi $x$ tiến tới $x_0$ từ bên trái hoặc bên phải.',
            boxes: [
              {
                title: 'Khung kiến thức: Định nghĩa đường tiệm cận đứng (SGK trang 21)',
                kind: 'knowledge',
                content: 'Đường thẳng $x = x_0$ gọi là **đường tiệm cận đứng** (gọi tắt là tiệm cận đứng) của đồ thị hàm số $y = f(x)$ nếu ít nhất một trong các điều kiện sau được thoả mãn:',
                formula: '$$\\lim_{x \\to x_0^-} f(x) = +\\infty;\\qquad \\lim_{x \\to x_0^+} f(x) = -\\infty;\\qquad \\lim_{x \\to x_0^-} f(x) = -\\infty;\\qquad \\lim_{x \\to x_0^+} f(x) = +\\infty$$',
                callouts: [
                  {
                    type: 'ghi-nho',
                    title: 'Lưu ý tránh sai lầm khi tìm tiệm cận đứng',
                    items: [
                      'Không phải mọi nghiệm của mẫu thức đều là tiệm cận đứng: nếu $x_0$ là nghiệm của mẫu nhưng rút gọn được với tử thức sao cho cả hai giới hạn $\\lim_{x \\to x_0^+} f(x)$ và $\\lim_{x \\to x_0^-} f(x)$ đều hữu hạn thì $x = x_0$ **không** là tiệm cận đứng.'
                    ]
                  }
                ]
              }
            ]
          },
          {
            heading: '3. Đường tiệm cận xiên',
            summary: 'Đường thẳng $y = ax + b\\ (a \\neq 0)$ mà hiệu $[f(x) - (ax + b)]$ tiến về $0$ khi $x \\to +\\infty$ hoặc $x \\to -\\infty$.',
            boxes: [
              {
                title: 'Khung kiến thức: Định nghĩa đường tiệm cận xiên (SGK trang 23)',
                kind: 'knowledge',
                content: 'Đường thẳng $y = ax + b\\ (a \\neq 0)$ gọi là **đường tiệm cận xiên** (gọi tắt là tiệm cận xiên) của đồ thị hàm số $y = f(x)$ nếu:',
                formula: '$$\\lim_{x \\to +\\infty} [f(x) - (ax + b)] = 0 \\quad \\text{hoặc} \\quad \\lim_{x \\to -\\infty} [f(x) - (ax + b)] = 0$$',
                callouts: [
                  {
                    type: 'chu-y',
                    title: 'Chú ý: Công thức xác định hệ số $a, b$ của tiệm cận xiên (SGK trang 24)',
                    items: [
                      'Nếu $y = ax + b\\ (a \\neq 0)$ là tiệm cận xiên của đồ thị $y = f(x)$ thì: $a = \\lim_{x \\to +\\infty} \\frac{f(x)}{x},\\ b = \\lim_{x \\to +\\infty} [f(x) - ax]$ hoặc $a = \\lim_{x \\to -\\infty} \\frac{f(x)}{x},\\ b = \\lim_{x \\to -\\infty} [f(x) - ax]$.',
                      'Ngược lại, với $a$ và $b$ xác định như trên ($a \\neq 0$), đường thẳng $y = ax + b$ là một tiệm cận xiên của đồ thị hàm số $y = f(x)$.',
                      'Đặc biệt, nếu $a = 0$ thì đồ thị hàm số có **tiệm cận ngang** $y = b$.'
                    ]
                  },
                  {
                    type: 'nhan-xet',
                    title: 'Nhận xét thực hành với hàm phân thức (SGK trang 24)',
                    items: [
                      'Trong thực hành, để tìm tiệm cận xiên của đồ thị hàm phân thức hữu tỉ (bậc của tử lớn hơn bậc của mẫu $1$ đơn vị), ta thực hiện phép chia đa thức viết $f(x) = ax + b + \\frac{R(x)}{Q(x)}$ (với bậc $R(x) <$ bậc $Q(x)$). Do $\\lim_{x \\to \\pm\\infty} \\frac{R(x)}{Q(x)} = 0$ nên $y = ax + b$ chính là tiệm cận xiên của đồ thị hàm số.'
                    ]
                  }
                ]
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
          'Sơ đồ tổng quát 3 bước khảo sát sự biến thiên và vẽ đồ thị hàm số $y = f(x)$',
          'Hàm số đa thức bậc ba $y = ax^3 + bx^2 + cx + d\\ (a \\neq 0)$ và tâm đối xứng $y\'\' = 0$',
          'Hàm phân thức $y = \\frac{ax + b}{cx + d}\\ (c \\neq 0,\\ ad - bc \\neq 0)$: tiệm cận và đối xứng',
          'Hàm phân thức $y = \\frac{ax^2 + bx + c}{px + q}\\ (a \\neq 0,\\ p \\neq 0)$: tiệm cận đứng, tiệm cận xiên và đối xứng'
        ],
        examIds: ['bai4_de1', 'bai4_de2'],
        sections: [
          {
            heading: '1. Sơ đồ khảo sát hàm số',
            summary: 'Quy trình 3 bước chuẩn mực để khảo sát sự biến thiên và vẽ đồ thị của một hàm số $y = f(x)$.',
            boxes: [
              {
                title: 'Khung kiến thức: Sơ đồ khảo sát hàm số $y = f(x)$ (SGK trang 26)',
                kind: 'knowledge',
                content: 'Để khảo sát sự biến thiên và vẽ đồ thị của một hàm số $y = f(x)$, ta thực hiện theo 3 bước:',
                formula: '$$\\begin{aligned} &\\textbf{1. Tìm tập xác định của hàm số.} \\\\ &\\textbf{2. Khảo sát sự biến thiên của hàm số:} \\\\ &\\quad \\bullet\\ \\text{Tính đạo hàm } y\'. \\text{ Tìm các điểm tại đó } y\' \\text{ bằng } 0 \\text{ hoặc đạo hàm không tồn tại.} \\\\ &\\quad \\bullet\\ \\text{Xét dấu } y\' \\text{ để chỉ ra các khoảng đơn điệu của hàm số.} \\\\ &\\quad \\bullet\\ \\text{Tìm cực trị của hàm số.} \\\\ &\\quad \\bullet\\ \\text{Tìm các giới hạn tại vô cực, giới hạn vô cực và tìm tiệm cận của đồ thị hàm số (nếu có).} \\\\ &\\quad \\bullet\\ \\text{Lập bảng biến thiên của hàm số.} \\\\ &\\textbf{3. Vẽ đồ thị của hàm số dựa vào bảng biến thiên.} \\end{aligned}$$',
                callouts: [
                  {
                    type: 'chu-y',
                    title: 'Chú ý khi vẽ đồ thị (SGK trang 27)',
                    items: [
                      'Khi vẽ đồ thị, nên xác định thêm một số điểm đặc biệt của đồ thị, chẳng hạn tìm giao điểm của đồ thị với các trục toạ độ (khi có và việc tìm không quá phức tạp).',
                      'Cần lưu ý đến **tính đối xứng** của đồ thị (đối xứng tâm, đối xứng trục).'
                    ]
                  }
                ]
              }
            ]
          },
          {
            heading: '2. Khảo sát và vẽ đồ thị hàm số đa thức bậc ba và hàm phân thức hữu tỉ',
            summary: 'Các tính chất trọng tâm về đạo hàm, tiệm cận, tâm đối xứng và trục đối xứng của ba dạng hàm số cơ bản.',
            boxes: [
              {
                title: 'Hàm số đa thức bậc ba $y = ax^3 + bx^2 + cx + d\\ (a \\neq 0)$ (SGK trang 27–28)',
                kind: 'formula',
                content: 'Tập xác định $D = \\mathbb{R}$; đạo hàm $y\' = 3ax^2 + 2bx + c$; đạo hàm cấp hai $y\'\' = 6ax + 2b$.',
                formula: '$$\\text{Hoành độ tâm đối xứng } I(x_0; y_0): \\quad y\'\' = 0 \\iff 6ax + 2b = 0 \\iff x_0 = -\\frac{b}{3a}$$',
                callouts: [
                  {
                    type: 'chu-y',
                    title: 'Chú ý quan trọng (SGK trang 27)',
                    items: [
                      'Đồ thị của hàm số bậc ba $y = ax^3 + bx^2 + cx + d\\ (a \\neq 0)$ **có tâm đối xứng** là điểm có hoành độ thoả mãn $y\'\' = 0$, hay $x = -\\frac{b}{3a}$.',
                      'Đồ thị hàm số bậc ba **không có tiệm cận**.',
                      'Hàm số có $2$ điểm cực trị khi $\\Delta\'_{y\'} = b^2 - 3ac > 0$ và không có cực trị khi $b^2 - 3ac \\le 0$.'
                    ]
                  }
                ]
              },
              {
                title: 'Hàm số phân thức $y = \\frac{ax + b}{cx + d}\\ (c \\neq 0,\\ ad - bc \\neq 0)$ (SGK trang 28–29)',
                kind: 'formula',
                content: 'Tập xác định $D = \\mathbb{R} \\setminus \\left\\{-\\frac{d}{c}\\right\\}$; đạo hàm $y\' = \\frac{ad - bc}{(cx + d)^2}$ không đổi dấu trên mỗi khoảng xác định nên hàm số **không có cực trị**.',
                formula: '$$\\begin{aligned} &\\bullet\\ \\text{Tiệm cận đứng: } x = -\\frac{d}{c}; \\qquad \\text{Tiệm cận ngang: } y = \\frac{a}{c}. \\\\ &\\bullet\\ \\text{Tâm đối xứng: } I\\left(-\\frac{d}{c};\\ \\frac{a}{c}\\right) \\text{ (giao điểm của hai đường tiệm cận).} \\end{aligned}$$',
                callouts: [
                  {
                    type: 'chu-y',
                    title: 'Chú ý về tính đối xứng (SGK trang 29)',
                    items: [
                      'Nhận **giao điểm của tiệm cận đứng và tiệm cận ngang** làm tâm đối xứng.',
                      'Nhận **hai đường phân giác** của các góc tạo bởi hai đường tiệm cận này làm các trục đối xứng.'
                    ]
                  }
                ]
              },
              {
                title: 'Hàm số phân thức $y = \\frac{ax^2 + bx + c}{px + q}\\ (a \\neq 0,\\ p \\neq 0,\\text{ tử không chia hết cho mẫu})$ (SGK trang 30–32)',
                kind: 'formula',
                content: 'Tập xác định $D = \\mathbb{R} \\setminus \\left\\{-\\frac{q}{p}\\right\\}$. Chia đa thức viết lại dưới dạng $y = mx + n + \\frac{r}{px + q}\\ (m = \\frac{a}{p} \\neq 0,\\ r \\neq 0)$.',
                formula: '$$\\begin{aligned} &\\bullet\\ \\text{Tiệm cận đứng: } x = -\\frac{q}{p}; \\qquad \\text{Tiệm cận xiên: } y = mx + n. \\\\ &\\bullet\\ \\text{Tâm đối xứng: Giao điểm của đường tiệm cận đứng và đường tiệm cận xiên.} \\end{aligned}$$',
                callouts: [
                  {
                    type: 'chu-y',
                    title: 'Chú ý về tính đối xứng (SGK trang 32)',
                    items: [
                      'Nhận **giao điểm của tiệm cận đứng và tiệm cận xiên** làm tâm đối xứng.',
                      'Nhận **hai đường phân giác** của các góc tạo bởi hai đường tiệm cận này làm các trục đối xứng.'
                    ]
                  }
                ]
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
          'Tốc độ thay đổi trung bình $\\frac{\\Delta y}{\\Delta x}$ và tốc độ thay đổi tức thời $f\'(a)$',
          'Ý nghĩa đạo hàm trong Vật lí ($v, a$), Hoá học ($C\'(t)$), Sinh học ($P\'(t)$) và Kinh tế ($C\'(x)$)',
          'Quy trình 3 bước giải bài toán tối ưu hoá đơn giản',
          'Các hàm số Kinh tế học: hàm chi phí, hàm cầu, hàm doanh thu, hàm lợi nhuận và các hàm biên'
        ],
        examIds: ['bai5_de1', 'bai5_de2'],
        sections: [
          {
            heading: '1. Tốc độ thay đổi của một đại lượng',
            summary: 'Tốc độ thay đổi trung bình, tốc độ thay đổi tức thời và ý nghĩa thực tiễn của đạo hàm trong Vật lí, Hoá học, Sinh học và Kinh tế học.',
            boxes: [
              {
                title: 'Tốc độ thay đổi trung bình và tốc độ thay đổi tức thời (SGK trang 33–34)',
                kind: 'knowledge',
                content: 'Giả sử $y = f(x)$. Khi $x$ thay đổi từ $x_1$ đến $x_2$ ($\\Delta x = x_2 - x_1$, $\\Delta y = f(x_2) - f(x_1)$):',
                formula: '$$\\begin{aligned} &\\bullet\\ \\text{Tốc độ thay đổi trung bình của } y \\text{ đối với } x \\text{ trên đoạn } [x_1; x_2]: \\quad \\frac{\\Delta y}{\\Delta x} = \\frac{f(x_2) - f(x_1)}{x_2 - x_1}. \\\\ &\\bullet\\ \\text{Tốc độ thay đổi tức thời của } y \\text{ đối với } x \\text{ tại } x = a: \\quad f\'(a) = \\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x}. \\end{aligned}$$',
                callouts: [
                  {
                    type: 'ghi-nho',
                    title: 'Ý nghĩa thực tiễn của đạo hàm trong các lĩnh vực (SGK trang 33–34)',
                    items: [
                      '**Vật lí (Cơ học):** Nếu $s = s(t)$ là hàm vị trí của vật chuyển động trên đường thẳng thì $v = s\'(t)$ là **vận tốc tức thời** và $a(t) = v\'(t) = s\'\'(t)$ là **gia tốc tức thời** của vật.',
                      '**Hoá học:** Nếu $C = C(t)$ là nồng độ của một chất tham gia phản ứng hoá học tại thời điểm $t$ thì $C\'(t)$ là **tốc độ phản ứng tức thời** (độ thay đổi nồng độ) của chất đó tại thời điểm $t$.',
                      '**Sinh học:** Nếu $P = P(t)$ là số lượng cá thể trong quần thể động vật hoặc thực vật tại thời điểm $t$ thì $P\'(t)$ là **tốc độ tăng trưởng tức thời** của quần thể tại thời điểm $t$.',
                      '**Kinh tế học:** Nếu $C = C(x)$ là **hàm chi phí** (tổng chi phí sản xuất $x$ đơn vị hàng hoá) thì $C\'(x)$ gọi là **chi phí biên** — xấp xỉ chi phí để sản xuất thêm một đơn vị hàng hoá tiếp theo (đơn vị thứ $x + 1$).'
                    ]
                  }
                ]
              }
            ]
          },
          {
            heading: '2. Một vài bài toán tối ưu hoá đơn giản',
            summary: 'Quy trình thiết lập mô hình toán học, giải bài toán tối ưu hoá và ứng dụng trong kinh tế học.',
            boxes: [
              {
                title: 'Quy trình giải một bài toán tối ưu hoá (SGK trang 36–37)',
                kind: 'process',
                content: 'Chuyển đổi bài toán thực tế sang bài toán tìm GTLN hoặc GTNN của hàm số một biến theo 3 bước:',
                formula: '$$\\begin{aligned} &\\text{Bước 1. Xác định đại lượng } Q \\text{ mà ta cần làm cho giá trị của đại lượng ấy lớn nhất hoặc nhỏ nhất } \\\\ &\\qquad\\quad \\text{và biểu diễn nó qua các đại lượng khác trong bài toán.} \\\\ &\\text{Bước 2. Chọn một đại lượng thích hợp nào đó, kí hiệu là } x,\\text{ và biểu diễn các đại lượng khác ở Bước 1 theo } x. \\\\ &\\qquad\\quad \\text{Khi đó, đại lượng } Q \\text{ sẽ là hàm số của một biến } x.\\text{ Tìm tập xác định của hàm số } Q = Q(x). \\\\ &\\text{Bước 3. Tìm giá trị lớn nhất hoặc giá trị nhỏ nhất của hàm số } Q = Q(x) \\text{ bằng các phương pháp đã biết và kết luận.} \\end{aligned}$$',
                callouts: [
                  {
                    type: 'chu-y',
                    title: 'Chú ý hình học nổi bật (SGK trang 37)',
                    items: [
                      'Nếu hình trụ có thể tích $V$ không đổi thì **diện tích bề mặt (diện tích toàn phần) của hình trụ nhỏ nhất khi chiều cao bằng đường kính đáy** ($h = 2r$).'
                    ]
                  }
                ]
              },
              {
                title: 'Các hàm số trong Kinh tế học (SGK trang 38)',
                kind: 'formula',
                content: 'Khi doanh nghiệp sản xuất và bán ra $x$ đơn vị sản phẩm với giá bán mỗi đơn vị là $p = p(x)$:',
                formula: '$$\\begin{aligned} &\\bullet\\ \\textbf{Hàm cầu (hàm giá): } p = p(x) \\text{ (thường là hàm giảm của } x\\text{)}. \\\\ &\\bullet\\ \\textbf{Hàm doanh thu: } R(x) = x \\cdot p(x) \\implies \\textbf{Hàm doanh thu biên: } R\'(x). \\\\ &\\bullet\\ \\textbf{Hàm chi phí: } C(x) \\implies \\textbf{Chi phí biên: } C\'(x). \\\\ &\\bullet\\ \\textbf{Hàm lợi nhuận: } P(x) = R(x) - C(x) \\implies \\textbf{Hàm lợi nhuận biên: } P\'(x) = R\'(x) - C\'(x). \\end{aligned}$$'
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
          'Định nghĩa vectơ, độ dài, giá, hai vectơ cùng phương, cùng hướng, bằng nhau',
          'Tổng hai vectơ, quy tắc ba điểm, quy tắc hình bình hành, quy tắc hình hộp',
          'Vectơ đối, hiệu hai vectơ và quy tắc hiệu $\\overrightarrow{OB} - \\overrightarrow{OA} = \\overrightarrow{AB}$',
          'Tích của một số với vectơ, trọng tâm tam giác và trọng tâm tứ diện',
          'Góc giữa hai vectơ và tích vô hướng của hai vectơ trong không gian'
        ],
        examIds: ['bai6_de1', 'bai6_de2'],
        sections: [
          {
            heading: '1. Vectơ trong không gian',
            summary: 'Định nghĩa vectơ, độ dài, giá của vectơ, hai vectơ cùng phương, cùng hướng/ngược hướng và hai vectơ bằng nhau.',
            boxes: [
              {
                title: 'Khung kiến thức: Vectơ trong không gian và độ dài vectơ (SGK trang 46)',
                kind: 'knowledge',
                content: 'Các khái niệm mở đầu về vectơ trong không gian hoàn toàn tương tự trong mặt phẳng:',
                formula: '$$\\begin{aligned} &\\bullet\\ \\textbf{Vectơ trong không gian} \\text{ là một đoạn thẳng có hướng.} \\\\ &\\bullet\\ \\text{Độ dài của vectơ trong không gian là khoảng cách giữa điểm đầu và điểm cuối của vectơ đó.} \\end{aligned}$$',
                callouts: [
                  {
                    type: 'chu-y',
                    title: 'Chú ý về kí hiệu và giá của vectơ (SGK trang 46)',
                    items: [
                      'Vectơ có điểm đầu là $A$ và điểm cuối là $B$ được kí hiệu là $\\overrightarrow{AB}$. Khi không cần chỉ rõ điểm đầu và điểm cuối, kí hiệu là $\\vec{a}, \\vec{b}, \\vec{x}, \\vec{y}, \\dots$',
                      'Độ dài của vectơ $\\overrightarrow{AB}$ được kí hiệu là $|\\overrightarrow{AB}|$; độ dài của vectơ $\\vec{a}$ được kí hiệu là $|\\vec{a}|$.',
                      'Đường thẳng đi qua điểm đầu và điểm cuối của một vectơ được gọi là **giá** của vectơ đó.'
                    ]
                  }
                ]
              },
              {
                title: 'Khung kiến thức: Hai vectơ cùng phương và hai vectơ bằng nhau (SGK trang 47)',
                kind: 'knowledge',
                content: 'Quan hệ phương, hướng và sự bằng nhau của hai vectơ trong không gian:',
                formula: '$$\\begin{aligned} &\\bullet\\ \\text{Hai vectơ được gọi là } \\textbf{cùng phương} \\text{ nếu chúng có giá song song hoặc trùng nhau.} \\\\ &\\bullet\\ \\text{Nếu hai vectơ cùng phương thì chúng } \\textbf{cùng hướng} \\text{ hoặc } \\textbf{ngược hướng}. \\\\ &\\bullet\\ \\text{Hai vectơ } \\vec{a} \\text{ và } \\vec{b} \\text{ gọi là } \\textbf{bằng nhau} \\ (\\vec{a} = \\vec{b}) \\iff \\begin{cases} |\\vec{a}| = |\\vec{b}| \\\\ \\vec{a} \\text{ và } \\vec{b} \\text{ cùng hướng} \\end{cases} \\end{aligned}$$',
                callouts: [
                  {
                    type: 'chu-y',
                    title: 'Chú ý về phép dựng vectơ và vectơ-không (SGK trang 47–48)',
                    items: [
                      'Trong không gian, với mỗi điểm $O$ và vectơ $\\vec{a}$ cho trước, có **duy nhất** điểm $M$ sao cho $\\overrightarrow{OM} = \\vec{a}$.',
                      'Các vectơ có điểm đầu và điểm cuối trùng nhau, ví dụ $\\overrightarrow{AA}, \\overrightarrow{BB}, \\dots$, gọi là các **vectơ-không**.',
                      'Quy ước vectơ-không có độ dài là $0$, cùng hướng (và vì vậy cùng phương) với mọi vectơ. Do đó, các vectơ-không đều bằng nhau và được kí hiệu chung là $\\vec{0}$.'
                    ]
                  }
                ]
              }
            ]
          },
          {
            heading: '2. Tổng và hiệu của hai vectơ trong không gian',
            summary: 'Định nghĩa tổng, hiệu hai vectơ, vectơ đối, quy tắc ba điểm, quy tắc hình bình hành, quy tắc hình hộp và quy tắc hiệu.',
            boxes: [
              {
                title: 'Khung kiến thức: Tổng của hai vectơ trong không gian (SGK trang 49)',
                kind: 'knowledge',
                content: 'Trong không gian, cho hai vectơ $\\vec{a}$ và $\\vec{b}$. Lấy một điểm $A$ bất kì và các điểm $B, C$ sao cho $\\overrightarrow{AB} = \\vec{a}$, $\\overrightarrow{BC} = \\vec{b}$. Khi đó, vectơ $\\overrightarrow{AC}$ được gọi là **tổng của hai vectơ** $\\vec{a}$ và $\\vec{b}$, kí hiệu là $\\vec{a} + \\vec{b}$. Phép lấy tổng hai vectơ gọi là **phép cộng vectơ**.',
                formula: '$$\\begin{aligned} &\\bullet\\ \\textbf{Quy tắc ba điểm: } \\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC} \\quad (\\forall A, B, C) \\\\ &\\bullet\\ \\textbf{Quy tắc hình bình hành: } \\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC} \\quad (ABCD \\text{ là hình bình hành}) \\end{aligned}$$',
                callouts: [
                  {
                    type: 'nhan-xet',
                    title: 'Nhận xét (SGK trang 49)',
                    items: [
                      'Quy tắc ba điểm và quy tắc hình bình hành trong mặt phẳng vẫn đúng trong không gian.'
                    ]
                  },
                  {
                    type: 'chu-y',
                    title: 'Chú ý: Tính chất của phép cộng vectơ trong không gian (SGK trang 50)',
                    items: [
                      '**Tính chất giao hoán:** $\\vec{a} + \\vec{b} = \\vec{b} + \\vec{a}$.',
                      '**Tính chất kết hợp:** $(\\vec{a} + \\vec{b}) + \\vec{c} = \\vec{a} + (\\vec{b} + \\vec{c})$ (nên có thể viết tổng $\\vec{a} + \\vec{b} + \\vec{c}$ mà không cần dấu ngoặc; tương tự với nhiều vectơ).',
                      '**Tính chất cộng với vectơ $\\vec{0}$:** $\\vec{a} + \\vec{0} = \\vec{0} + \\vec{a} = \\vec{a}$.'
                    ]
                  }
                ]
              },
              {
                title: 'Khung kiến thức: Quy tắc hình hộp (SGK trang 50)',
                kind: 'knowledge',
                content: 'Cho hình hộp $ABCD.A\'B\'C\'D\'$. Tổng ba vectơ cạnh xuất phát từ một đỉnh bằng vectơ đường chéo xuất phát từ đỉnh đó:',
                formula: '$$\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA\'} = \\overrightarrow{AC\'}$$'
              },
              {
                title: 'Khung kiến thức: Vectơ đối và Hiệu của hai vectơ trong không gian (SGK trang 51)',
                kind: 'knowledge',
                content: 'Trong không gian, vectơ có cùng độ dài và ngược hướng với vectơ $\\vec{a}$ được gọi là **vectơ đối** của vectơ $\\vec{a}$, kí hiệu là $-\\vec{a}$. Vectơ $\\vec{a} + (-\\vec{b})$ được gọi là **hiệu của hai vectơ** $\\vec{a}$ và $\\vec{b}$, kí hiệu là $\\vec{a} - \\vec{b}$.',
                formula: '$$\\vec{a} - \\vec{b} = \\vec{a} + (-\\vec{b}) \\qquad ; \\qquad \\overrightarrow{OB} - \\overrightarrow{OA} = \\overrightarrow{AB} \\quad (\\forall O, A, B)$$',
                callouts: [
                  {
                    type: 'chu-y',
                    title: 'Chú ý về vectơ đối (SGK trang 51)',
                    items: [
                      'Hai vectơ là đối nhau nếu và chỉ nếu tổng của chúng bằng $\\vec{0}$.',
                      'Vectơ $\\overrightarrow{BA}$ là một vectơ đối của vectơ $\\overrightarrow{AB}$.',
                      'Vectơ $\\vec{0}$ được coi là vectơ đối của chính nó.'
                    ]
                  },
                  {
                    type: 'nhan-xet',
                    title: 'Nhận xét: Quy tắc hiệu (SGK trang 51)',
                    items: [
                      'Với ba điểm $O, A, B$ bất kì trong không gian, ta có $\\overrightarrow{OB} - \\overrightarrow{OA} = \\overrightarrow{AB}$.'
                    ]
                  }
                ]
              }
            ]
          },
          {
            heading: '3. Tích của một số với một vectơ trong không gian',
            summary: 'Định nghĩa, tính chất phép nhân một số thực với một vectơ và ứng dụng biểu diễn trung điểm, trọng tâm.',
            boxes: [
              {
                title: 'Khung kiến thức: Tích của một số với một vectơ (SGK trang 53)',
                kind: 'knowledge',
                content: 'Trong không gian, tích của một số thực $k \\neq 0$ với một vectơ $\\vec{a} \\neq \\vec{0}$ là một vectơ, kí hiệu là $k\\vec{a}$, được xác định như sau:',
                formula: '$$\\begin{aligned} &\\bullet\\ \\text{Cùng hướng với } \\vec{a} \\text{ nếu } k > 0; \\text{ ngược hướng với } \\vec{a} \\text{ nếu } k < 0. \\\\ &\\bullet\\ \\text{Có độ dài bằng } |k| \\cdot |\\vec{a}|. \\end{aligned}$$',
                callouts: [
                  {
                    type: 'chu-y',
                    title: 'Chú ý 1: Quy ước và điều kiện cùng phương (SGK trang 53)',
                    items: [
                      'Quy ước $0\\vec{a} = \\vec{0}$ và $k\\vec{0} = \\vec{0}$.',
                      'Nếu $k\\vec{a} = \\vec{0}$ thì $k = 0$ hoặc $\\vec{a} = \\vec{0}$.',
                      'Trong không gian, điều kiện cần và đủ để hai vectơ $\\vec{a}$ và $\\vec{b}\\ (\\vec{b} \\neq \\vec{0})$ **cùng phương** là có một số thực $k$ sao cho $\\vec{a} = k\\vec{b}$.'
                    ]
                  },
                  {
                    type: 'chu-y',
                    title: 'Chú ý 2: Tính chất phép nhân một số với một vectơ (SGK trang 53)',
                    items: [
                      '**Tính chất kết hợp:** $h(k\\vec{a}) = (hk)\\vec{a}$ với mọi số thực $h, k$ và vectơ $\\vec{a}$.',
                      '**Tính chất phân phối:** $(h + k)\\vec{a} = h\\vec{a} + k\\vec{a}$ và $k(\\vec{a} + \\vec{b}) = k\\vec{a} + k\\vec{b}$.',
                      '**Tính chất nhân với $1$ và $-1$:** $1\\vec{a} = \\vec{a}$ và $(-1)\\vec{a} = -\\vec{a}$.'
                    ]
                  },
                  {
                    type: 'chu-y',
                    title: 'Chú ý 3: Hệ thức trung điểm, trọng tâm tam giác và tứ diện (SGK trang 54)',
                    items: [
                      '$M$ là trung điểm đoạn thẳng $AB \\iff \\overrightarrow{MA} + \\overrightarrow{MB} = \\vec{0} \\iff \\overrightarrow{OA} + \\overrightarrow{OB} = 2\\overrightarrow{OM}\\ (\\forall O)$.',
                      '$G$ là trọng tâm tam giác $ABC \\iff \\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0} \\iff \\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC} = 3\\overrightarrow{OG}\\ (\\forall O)$.',
                      '**Trọng tâm tứ diện $ABCD$:** Điểm $I$ thuộc đoạn $AG$ ($G$ là trọng tâm $\\triangle BCD$) thoả mãn $\\overrightarrow{AI} = 3\\overrightarrow{IG}$ (tương đương $\\overrightarrow{IA} + \\overrightarrow{IB} + \\overrightarrow{IC} + \\overrightarrow{ID} = \\vec{0}$) được gọi là trọng tâm của tứ diện $ABCD$.'
                    ]
                  }
                ]
              }
            ]
          },
          {
            heading: '4. Tích vô hướng của hai vectơ trong không gian',
            summary: 'Định nghĩa góc giữa hai vectơ, tích vô hướng và các tính chất đại số của tích vô hướng.',
            boxes: [
              {
                title: 'Khung kiến thức: Góc giữa hai vectơ trong không gian (SGK trang 55)',
                kind: 'knowledge',
                content: 'Trong không gian, cho hai vectơ $\\vec{a}, \\vec{b}$ khác $\\vec{0}$. Lấy một điểm $O$ bất kì và gọi $A, B$ là hai điểm sao cho $\\overrightarrow{OA} = \\vec{a}$, $\\overrightarrow{OB} = \\vec{b}$. Khi đó, góc $\\widehat{AOB}$ ($0^\\circ \\le \\widehat{AOB} \\le 180^\\circ$) được gọi là **góc giữa hai vectơ** $\\vec{a}$ và $\\vec{b}$, kí hiệu là $(\\vec{a}, \\vec{b})$.',
                formula: '$$0^\\circ \\le (\\vec{a}, \\vec{b}) \\le 180^\\circ \\qquad ; \\qquad (\\vec{a}, \\vec{b}) = 90^\\circ \\iff \\vec{a} \\perp \\vec{b}$$',
                callouts: [
                  {
                    type: 'chu-y',
                    title: 'Chú ý (SGK trang 55)',
                    items: [
                      'Để xác định góc giữa hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{CD}$ trong không gian ta có thể lấy điểm $E$ sao cho $\\overrightarrow{AE} = \\overrightarrow{CD}$, khi đó $(\\overrightarrow{AB}, \\overrightarrow{CD}) = \\widehat{BAE}$.',
                      'Quy ước góc giữa một vectơ bất kì và $\\vec{0}$ có thể nhận một giá trị tuỳ ý từ $0^\\circ$ đến $180^\\circ$.'
                    ]
                  }
                ]
              },
              {
                title: 'Khung kiến thức: Tích vô hướng của hai vectơ trong không gian (SGK trang 56)',
                kind: 'knowledge',
                content: 'Trong không gian, cho hai vectơ $\\vec{a}, \\vec{b}$ đều khác $\\vec{0}$. **Tích vô hướng** của hai vectơ $\\vec{a}$ và $\\vec{b}$ là một số, kí hiệu là $\\vec{a} \\cdot \\vec{b}$, được xác định bởi công thức:',
                formula: '$$\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\vec{a}, \\vec{b})$$',
                callouts: [
                  {
                    type: 'chu-y',
                    title: 'Chú ý (SGK trang 56)',
                    items: [
                      'Quy ước nếu $\\vec{a} = \\vec{0}$ hoặc $\\vec{b} = \\vec{0}$ thì $\\vec{a} \\cdot \\vec{b} = 0$.',
                      'Cho hai vectơ $\\vec{a}, \\vec{b}$ đều khác $\\vec{0}$. Khi đó: $\\vec{a} \\perp \\vec{b} \\iff \\vec{a} \\cdot \\vec{b} = 0$.',
                      'Với mọi vectơ $\\vec{a}$, ta có $\\vec{a}^2 = |\\vec{a}|^2$.',
                      'Nếu $\\vec{a}, \\vec{b}$ là hai vectơ khác $\\vec{0}$ thì $\\cos(\\vec{a}, \\vec{b}) = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|}$.'
                    ]
                  },
                  {
                    type: 'nhan-xet',
                    title: 'Nhận xét: Tính chất của tích vô hướng (SGK trang 57)',
                    items: [
                      'Tích vô hướng của hai vectơ trong không gian có các tính chất giống trong mặt phẳng: với mọi vectơ $\\vec{a}, \\vec{b}, \\vec{c}$ và số thực $k$, ta có:',
                      '$\\vec{a} \\cdot \\vec{b} = \\vec{b} \\cdot \\vec{a}$ (tính chất giao hoán).',
                      '$k(\\vec{a} \\cdot \\vec{b}) = (k\\vec{a}) \\cdot \\vec{b} = \\vec{a} \\cdot (k\\vec{b})$.',
                      '$\\vec{a} \\cdot (\\vec{b} + \\vec{c}) = \\vec{a} \\cdot \\vec{b} + \\vec{a} \\cdot \\vec{c}$ (tính chất phân phối).'
                    ]
                  }
                ]
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
          'Hệ trục toạ độ Descartes vuông góc $Oxyz$ và ba vectơ đơn vị $\\vec{i}, \\vec{j}, \\vec{k}$',
          'Toạ độ của điểm $M(x; y; z)$ và hình chiếu trên trục, mặt phẳng toạ độ',
          'Toạ độ của vectơ $\\vec{a} = (x; y; z)$ và điều kiện hai vectơ bằng nhau',
          'Công thức toạ độ của vectơ $\\overrightarrow{MN}$ theo toạ độ hai đầu mút $M, N$'
        ],
        examIds: ['bai7_de1', 'bai7_de2'],
        sections: [
          {
            heading: '1. Hệ trục toạ độ trong không gian',
            summary: 'Hệ ba trục $Ox, Oy, Oz$ đôi một vuông góc tại gốc $O$ cùng ba vectơ đơn vị $\\vec{i}, \\vec{j}, \\vec{k}$ và ba mặt phẳng toạ độ.',
            boxes: [
              {
                title: 'Khung kiến thức: Hệ trục toạ độ $Oxyz$ (SGK trang 60)',
                kind: 'knowledge',
                content: 'Trong không gian, ba trục $Ox, Oy, Oz$ đôi một vuông góc với nhau tại gốc $O$ của mỗi trục. Gọi $\\vec{i}, \\vec{j}, \\vec{k}$ lần lượt là các vectơ đơn vị trên các trục $Ox, Oy, Oz$:',
                formula: '$$|\\vec{i}| = |\\vec{j}| = |\\vec{k}| = 1 \\quad \\text{và} \\quad \\vec{i} \\cdot \\vec{j} = \\vec{j} \\cdot \\vec{k} = \\vec{k} \\cdot \\vec{i} = 0$$',
                callouts: [
                  {
                    type: 'ghi-nho',
                    title: 'Các thành phần của hệ toạ độ (SGK trang 60)',
                    items: [
                      'Hệ ba trục như vậy gọi là **hệ trục toạ độ Descartes vuông góc $Oxyz$** (gọi tắt là **hệ toạ độ $Oxyz$**); không gian gắn hệ toạ độ $Oxyz$ gọi là **không gian $Oxyz$**.',
                      'Điểm $O$ được gọi là **gốc toạ độ** ($O(0; 0; 0)$).',
                      'Các mặt phẳng $(Oxy), (Oyz), (Ozx)$ đôi một vuông góc với nhau được gọi là các **mặt phẳng toạ độ**.'
                    ]
                  }
                ]
              }
            ]
          },
          {
            heading: '2. Toạ độ của điểm, toạ độ của vectơ trong không gian',
            summary: 'Định nghĩa toạ độ điểm, hình chiếu vuông góc, toạ độ vectơ và công thức toạ độ vectơ $\\overrightarrow{MN}$.',
            boxes: [
              {
                title: 'Khung kiến thức: Toạ độ của một điểm $M$ (SGK trang 61)',
                kind: 'knowledge',
                content: 'Trong không gian $Oxyz$, cho một điểm $M$ tuỳ ý. Bộ ba số $(x; y; z)$ duy nhất sao cho $\\overrightarrow{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k}$ được gọi là **toạ độ của điểm $M$** đối với hệ toạ độ $Oxyz$. Ta viết $M = (x; y; z)$ hoặc $M(x; y; z)$, trong đó $x$ là **hoành độ**, $y$ là **tung độ** và $z$ là **cao độ** của $M$.',
                formula: '$$M(x; y; z) \\iff \\overrightarrow{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k}$$',
                callouts: [
                  {
                    type: 'nhan-xet',
                    title: 'Nhận xét: Hình chiếu vuông góc của điểm $M(x; y; z)$ (SGK trang 62)',
                    items: [
                      'Hình chiếu vuông góc của $M(x; y; z)$ trên các trục $Ox, Oy, Oz$ có toạ độ lần lượt là $(x; 0; 0)$, $(0; y; 0)$ và $(0; 0; z)$.',
                      'Hình chiếu vuông góc của $M(x; y; z)$ trên các mặt phẳng $(Oxy), (Oyz), (Ozx)$ có toạ độ lần lượt là $(x; y; 0)$, $(0; y; z)$ và $(x; 0; z)$.'
                    ]
                  }
                ]
              },
              {
                title: 'Khung kiến thức: Toạ độ của một vectơ (SGK trang 63)',
                kind: 'knowledge',
                content: 'Trong không gian $Oxyz$, cho vectơ $\\vec{a}$ tuỳ ý. Bộ ba số $(x; y; z)$ duy nhất sao cho $\\vec{a} = x\\vec{i} + y\\vec{j} + z\\vec{k}$ được gọi là **toạ độ của vectơ $\\vec{a}$** đối với hệ toạ độ $Oxyz$. Ta viết $\\vec{a} = (x; y; z)$ hoặc $\\vec{a}(x; y; z)$.',
                formula: '$$\\vec{a} = (x; y; z) \\iff \\vec{a} = x\\vec{i} + y\\vec{j} + z\\vec{k}$$',
                callouts: [
                  {
                    type: 'nhan-xet',
                    title: 'Nhận xét (SGK trang 63)',
                    items: [
                      'Toạ độ của vectơ $\\vec{a}$ cũng là toạ độ của điểm $M$ sao cho $\\overrightarrow{OM} = \\vec{a}$.',
                      'Trong không gian, cho hai vectơ $\\vec{a} = (x; y; z)$ và $\\vec{b} = (x\'; y\'; z\')$. Khi đó, $\\vec{a} = \\vec{b} \\iff \\begin{cases} x = x\' \\\\ y = y\' \\\\ z = z\' \\end{cases}$.',
                      'Đặc biệt: $\\vec{0} = (0; 0; 0)$, $\\vec{i} = (1; 0; 0)$, $\\vec{j} = (0; 1; 0)$, $\\vec{k} = (0; 0; 1)$.'
                    ]
                  }
                ]
              },
              {
                title: 'Khung kiến thức: Toạ độ vectơ theo toạ độ hai đầu mút (SGK trang 63)',
                kind: 'knowledge',
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
          'Biểu thức toạ độ của tổng $\\vec{a}+\\vec{b}$, hiệu $\\vec{a}-\\vec{b}$ và tích $k\\vec{a}$',
          'Toạ độ trung điểm đoạn thẳng $AB$ và trọng tâm tam giác $ABC$',
          'Biểu thức toạ độ của tích vô hướng $\\vec{a} \\cdot \\vec{b} = xx\' + yy\' + zz\'$',
          'Độ dài vectơ $|\\vec{a}|$, khoảng cách $AB$, điều kiện vuông góc và $\\cos(\\vec{a}, \\vec{b})$'
        ],
        examIds: ['bai8_de1', 'bai8_de2'],
        sections: [
          {
            heading: '1. Biểu thức toạ độ của phép cộng, phép trừ và phép nhân một số với vectơ',
            summary: 'Các công thức tính toán theo toạ độ, điều kiện cùng phương và công thức trung điểm, trọng tâm.',
            boxes: [
              {
                title: 'Khung kiến thức: Phép cộng, phép trừ và nhân một số với vectơ (SGK trang 67)',
                kind: 'knowledge',
                content: 'Trong không gian $Oxyz$, cho hai vectơ $\\vec{a} = (x; y; z)$ và $\\vec{b} = (x\'; y\'; z\')$. Ta có:',
                formula: '$$\\begin{aligned} &\\bullet\\ \\vec{a} + \\vec{b} = (x + x\';\\ y + y\';\\ z + z\'); \\\\ &\\bullet\\ \\vec{a} - \\vec{b} = (x - x\';\\ y - y\';\\ z - z\'); \\\\ &\\bullet\\ k\\vec{a} = (kx;\\ ky;\\ kz) \\quad \\text{với } k \\text{ là một số thực.} \\end{aligned}$$',
                callouts: [
                  {
                    type: 'nhan-xet',
                    title: 'Nhận xét: Điều kiện hai vectơ cùng phương (SGK trang 68)',
                    items: [
                      'Vectơ $\\vec{a} = (x; y; z)$ cùng phương với vectơ $\\vec{b} = (x\'; y\'; z\') \\neq \\vec{0}$ khi và chỉ khi tồn tại số thực $k$ sao cho $\\begin{cases} x = kx\' \\\\ y = ky\' \\\\ z = kz\' \\end{cases}$.'
                    ]
                  }
                ]
              },
              {
                title: 'Khung kiến thức: Toạ độ trung điểm đoạn thẳng và trọng tâm tam giác (SGK trang 68)',
                kind: 'knowledge',
                content: 'Trong không gian $Oxyz$, cho ba điểm không thẳng hàng $A(x_A; y_A; z_A)$, $B(x_B; y_B; z_B)$ và $C(x_C; y_C; z_C)$. Khi đó:',
                formula: '$$\\begin{aligned} &\\bullet\\ \\text{Toạ độ trung điểm của đoạn thẳng } AB: \\quad \\left(\\frac{x_A + x_B}{2};\\ \\frac{y_A + y_B}{2};\\ \\frac{z_A + z_B}{2}\\right). \\\\ &\\bullet\\ \\text{Toạ độ trọng tâm của tam giác } ABC: \\quad \\left(\\frac{x_A + x_B + x_C}{3};\\ \\frac{y_A + y_B + y_C}{3};\\ \\frac{z_A + z_B + z_C}{3}\\right). \\end{aligned}$$'
              }
            ]
          },
          {
            heading: '2. Biểu thức toạ độ của tích vô hướng',
            summary: 'Công thức tích vô hướng theo toạ độ cùng các hệ quả về tính vuông góc, độ dài vectơ, khoảng cách giữa hai điểm và góc giữa hai vectơ.',
            boxes: [
              {
                title: 'Khung kiến thức: Biểu thức toạ độ của tích vô hướng (SGK trang 69)',
                kind: 'knowledge',
                content: 'Trong không gian $Oxyz$, tích vô hướng của hai vectơ $\\vec{a} = (x; y; z)$ và $\\vec{b} = (x\'; y\'; z\')$ được xác định bởi công thức:',
                formula: '$$\\vec{a} \\cdot \\vec{b} = xx\' + yy\' + zz\'$$',
                callouts: [
                  {
                    type: 'nhan-xet',
                    title: 'Nhận xét (SGK trang 69)',
                    items: [
                      'Hai vectơ $\\vec{a}$ và $\\vec{b}$ vuông góc với nhau nếu và chỉ nếu $xx\' + yy\' + zz\' = 0$.',
                      'Nếu $\\vec{a} = (x; y; z)$ thì $|\\vec{a}| = \\sqrt{\\vec{a} \\cdot \\vec{a}} = \\sqrt{x^2 + y^2 + z^2}$.',
                      'Nếu $\\vec{a} = (x; y; z)$ và $\\vec{b} = (x\'; y\'; z\')$ là hai vectơ khác $\\vec{0}$ thì $\\cos(\\vec{a}, \\vec{b}) = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|} = \\frac{xx\' + yy\' + zz\'}{\\sqrt{x^2 + y^2 + z^2} \\cdot \\sqrt{x\'^2 + y\'^2 + z\'^2}}$.'
                    ]
                  },
                  {
                    type: 'chu-y',
                    title: 'Chú ý: Công thức khoảng cách giữa hai điểm (SGK trang 70)',
                    items: [
                      'Nếu $A(x_A; y_A; z_A)$ và $B(x_B; y_B; z_B)$ thì $AB = |\\overrightarrow{AB}| = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$.',
                      'Đặc biệt, khi $B$ trùng $O$ ta nhận được công thức khoảng cách từ điểm $A$ đến gốc toạ độ: $OA = \\sqrt{x_A^2 + y_A^2 + z_A^2}$.'
                    ]
                  }
                ]
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
          'Khoảng biến thiên $R = a_{k+1} - a_1$ của mẫu số liệu ghép nhóm',
          'Công thức tính tứ phân vị thứ $r$ ($Q_1, Q_2, Q_3$) của mẫu số liệu ghép nhóm',
          'Khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1$, ý nghĩa và khả năng chống nhiễu giá trị bất thường'
        ],
        examIds: ['bai9_de1', 'bai9_de2'],
        sections: [
          {
            heading: '1. Khoảng biến thiên',
            summary: 'Định nghĩa và ý nghĩa của khoảng biến thiên đối với mẫu số liệu ghép nhóm.',
            boxes: [
              {
                title: 'Khung kiến thức: Khoảng biến thiên của mẫu số liệu ghép nhóm (SGK trang 76)',
                kind: 'knowledge',
                content: 'Cho mẫu số liệu ghép nhóm gồm $k$ nhóm $[a_1; a_2),\\ \\dots,\\ [a_i; a_{i+1}),\\ \\dots,\\ [a_k; a_{k+1})$ với tần số tương ứng $m_1, \\dots, m_i, \\dots, m_k$, trong đó $m_1 > 0$, $m_k > 0$ và $n = m_1 + \\dots + m_k$ là cỡ mẫu. Khoảng biến thiên của mẫu số liệu ghép nhóm trên là:',
                formula: '$$R = a_{k+1} - a_1$$',
                callouts: [
                  {
                    type: 'y-nghia',
                    title: 'Ý nghĩa (SGK trang 76)',
                    items: [
                      'Khoảng biến thiên của mẫu số liệu ghép nhóm xấp xỉ cho khoảng biến thiên của mẫu số liệu gốc.',
                      'Khoảng biến thiên được dùng để đo mức độ phân tán của mẫu số liệu ghép nhóm. Khoảng biến thiên càng lớn thì mẫu số liệu càng phân tán.',
                      'Lưu ý: Khoảng biến thiên của mẫu số liệu ghép nhóm luôn **lớn hơn** khoảng biến thiên của mẫu số liệu gốc và chỉ phụ thuộc vào nhóm đầu, nhóm cuối (nên dễ bị ảnh hưởng bởi giá trị bất thường).'
                    ]
                  }
                ]
              }
            ]
          },
          {
            heading: '2. Khoảng tứ phân vị',
            summary: 'Công thức tứ phân vị $Q_r$, định nghĩa khoảng tứ phân vị $\\Delta_Q$, ý nghĩa và nhận xét quan trọng.',
            boxes: [
              {
                title: 'Khung kiến thức: Khoảng tứ phân vị $\\Delta_Q$ và công thức tứ phân vị $Q_r$ (SGK trang 77)',
                kind: 'knowledge',
                content: 'Khoảng tứ phân vị của mẫu số liệu ghép nhóm, kí hiệu là $\\Delta_Q$, là hiệu số giữa tứ phân vị thứ ba $Q_3$ và tứ phân vị thứ nhất $Q_1$ của mẫu số liệu đó:',
                formula: '$$\\begin{aligned} &\\bullet\\ \\textbf{Khoảng tứ phân vị: } \\Delta_Q = Q_3 - Q_1. \\\\ &\\bullet\\ \\textbf{Tứ phân vị thứ } r\\ (r = 1, 2, 3): \\quad Q_r = a_p + \\frac{\\frac{r \\cdot n}{4} - (m_1 + \\dots + m_{p-1})}{m_p} \\cdot (a_{p+1} - a_p) \\\\ &\\quad \\text{trong đó } [a_p; a_{p+1}) \\text{ là nhóm đầu tiên có tần số tích luỹ } \\ge \\frac{r \\cdot n}{4}\\ (\\text{quy ước } m_1 + \\dots + m_0 = 0). \\end{aligned}$$',
                callouts: [
                  {
                    type: 'y-nghia',
                    title: 'Ý nghĩa (SGK trang 77)',
                    items: [
                      'Khoảng tứ phân vị của mẫu số liệu ghép nhóm xấp xỉ cho khoảng tứ phân vị của mẫu số liệu gốc.',
                      'Khoảng tứ phân vị cũng được dùng để đo mức độ phân tán của mẫu số liệu ghép nhóm. Khoảng tứ phân vị càng lớn thì mẫu số liệu càng phân tán.'
                    ]
                  },
                  {
                    type: 'nhan-xet',
                    title: 'Nhận xét (SGK trang 77)',
                    items: [
                      'Do khoảng tứ phân vị của mẫu số liệu ghép nhóm chỉ phụ thuộc vào **nửa giữa** ($50\\%$) của mẫu số liệu, nên **không bị ảnh hưởng bởi các giá trị bất thường** và có thể dùng đại lượng này để loại giá trị bất thường.'
                    ]
                  }
                ]
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
          'Giá trị đại diện $x_i = \\frac{a_i + a_{i+1}}{2}$ và số trung bình $\\bar{x}$',
          'Công thức phương sai $s^2$ (dạng định nghĩa & dạng rút gọn) và độ lệch chuẩn $s = \\sqrt{s^2}$',
          'Phương sai hiệu chỉnh $\\hat{s}^2$ và độ lệch chuẩn hiệu chỉnh $\\hat{s}$',
          'Sử dụng độ lệch chuẩn đo độ rủi ro và điều kiện áp dụng khi so sánh hai phương án đầu tư'
        ],
        examIds: ['bai10_de1', 'bai10_de2'],
        sections: [
          {
            heading: '1. Phương sai và độ lệch chuẩn',
            summary: 'Định nghĩa, công thức rút gọn, ý nghĩa và chú ý về phương sai hiệu chỉnh của mẫu số liệu ghép nhóm.',
            boxes: [
              {
                title: 'Khung kiến thức: Phương sai $s^2$ và Độ lệch chuẩn $s$ (SGK trang 80)',
                kind: 'knowledge',
                content: 'Xét mẫu số liệu ghép nhóm gồm $k$ nhóm $[a_i; a_{i+1})$ có tần số $m_i\\ (i = 1, 2, \\dots, k)$, cỡ mẫu $n = m_1 + \\dots + m_k$, giá trị đại diện $x_i = \\frac{a_i + a_{i+1}}{2}$ và số trung bình $\\bar{x} = \\frac{m_1 x_1 + \\dots + m_k x_k}{n}$:',
                formula: '$$\\begin{aligned} &\\bullet\\ \\textbf{Phương sai: } s^2 = \\frac{m_1(x_1 - \\bar{x})^2 + \\dots + m_k(x_k - \\bar{x})^2}{n}. \\\\ &\\bullet\\ \\textbf{Độ lệch chuẩn: } s = \\sqrt{s^2} \\text{ (căn bậc hai số học của phương sai)}. \\end{aligned}$$',
                callouts: [
                  {
                    type: 'nhan-xet',
                    title: 'Nhận xét (SGK trang 80)',
                    items: [
                      'Ta có thể tính phương sai theo công thức rút gọn: $s^2 = \\frac{1}{n}\\left(m_1 \\cdot x_1^2 + \\dots + m_k \\cdot x_k^2\\right) - (\\bar{x})^2$.',
                      '**Độ lệch chuẩn có cùng đơn vị với đơn vị của mẫu số liệu.**'
                    ]
                  },
                  {
                    type: 'y-nghia',
                    title: 'Ý nghĩa (SGK trang 81)',
                    items: [
                      'Phương sai, độ lệch chuẩn của mẫu số liệu ghép nhóm là các xấp xỉ cho phương sai, độ lệch chuẩn của mẫu số liệu gốc.',
                      'Chúng được dùng để đo mức độ phân tán của mẫu số liệu ghép nhóm xung quanh số trung bình của mẫu số liệu đó. Phương sai, độ lệch chuẩn càng lớn thì mẫu số liệu càng phân tán.'
                    ]
                  },
                  {
                    type: 'chu-y',
                    title: 'Chú ý: Phương sai và độ lệch chuẩn hiệu chỉnh (SGK trang 81)',
                    items: [
                      'Người ta còn sử dụng đại lượng sau để đo mức độ phân tán của mẫu số liệu ghép nhóm: $\\hat{s}^2 = \\frac{m_1(x_1 - \\bar{x})^2 + \\dots + m_k(x_k - \\bar{x})^2}{n - 1}$, $\\hat{s} = \\sqrt{\\hat{s}^2}$.'
                    ]
                  }
                ]
              }
            ]
          },
          {
            heading: '2. Sử dụng phương sai, độ lệch chuẩn đo độ rủi ro',
            summary: 'Ứng dụng độ lệch chuẩn trong đánh giá rủi ro tài chính và giới hạn áp dụng khi giá trị trung bình chênh lệch lớn.',
            boxes: [
              {
                title: 'Đo độ rủi ro của phương án đầu tư (SGK trang 82–83)',
                kind: 'formula',
                content: 'Trong tài chính, một trong những cách phổ biến để đo độ rủi ro của một phương án đầu tư là sử dụng độ lệch chuẩn của lợi nhuận thu được theo phương án đầu tư đó:',
                formula: '$$\\text{Độ lệch chuẩn } s \\text{ càng lớn } \\iff \\text{ phương án đầu tư càng rủi ro (độ biến động lợi nhuận càng cao).}$$',
                callouts: [
                  {
                    type: 'nhan-xet',
                    title: 'Nhận xét quan trọng (SGK trang 83)',
                    items: [
                      '**Ta không nên dùng phương sai hay độ lệch chuẩn để so sánh độ rủi ro của hai phương án đầu tư khi lợi nhuận trung bình của hai phương án đầu tư này khác nhau rất nhiều.**',
                      'Mở rộng (Em có biết – SGK trang 83): Khi đơn vị đo khác nhau hoặc giá trị trung bình của hai mẫu số liệu khác nhau rất nhiều, người ta dùng **hệ số biến thiên** $CV = \\frac{s}{\\bar{x}}$ để so sánh độ phân tán.'
                    ]
                  }
                ]
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
          'Định nghĩa nguyên hàm $F\'(x) = f(x)$ và họ nguyên hàm $\\int f(x)\\,dx = F(x) + C$',
          'Tính chất cơ bản của nguyên hàm (nhân hằng số $k \\neq 0$, tổng và hiệu)',
          'Tập xác định, đạo hàm $(x^\\alpha)\' = \\alpha x^{\\alpha - 1}$ và nguyên hàm của hàm số luỹ thừa',
          'Bảng nguyên hàm đầy đủ của các hàm số thường gặp (hằng, luỹ thừa, lượng giác, mũ)'
        ],
        examIds: ['bai11_de1', 'bai11_de2'],
        sections: [
          {
            heading: '1. Nguyên hàm của một hàm số',
            summary: 'Định nghĩa nguyên hàm, định lí họ các nguyên hàm và các chú ý nền tảng về vi phân và sự tồn tại nguyên hàm.',
            boxes: [
              {
                title: 'Khung kiến thức: Định nghĩa nguyên hàm (SGK Tập 2 trang 5)',
                kind: 'knowledge',
                content: 'Cho hàm số $f(x)$ xác định trên một khoảng $K$ (hoặc một đoạn, hoặc một nửa khoảng). Hàm số $F(x)$ được gọi là một **nguyên hàm** của hàm số $f(x)$ trên $K$ nếu:',
                formula: '$$F\'(x) = f(x) \\quad \\text{với mọi } x \\in K$$',
                callouts: [
                  {
                    type: 'chu-y',
                    title: 'Chú ý trên đoạn $[a; b]$ (SGK Tập 2 trang 5)',
                    items: [
                      'Trường hợp $K = [a; b]$ thì các đẳng thức $F\'(a) = f(a)$ và $F\'(b) = f(b)$ được hiểu là **đạo hàm bên phải** tại điểm $x = a$ và **đạo hàm bên trái** tại điểm $x = b$ của hàm số $F(x)$: $\\lim_{x \\to a^+} \\frac{F(x) - F(a)}{x - a} = f(a)$ và $\\lim_{x \\to b^-} \\frac{F(x) - F(b)}{x - b} = f(b)$.'
                    ]
                  }
                ]
              },
              {
                title: 'Khung kiến thức: Họ các nguyên hàm của một hàm số (SGK Tập 2 trang 5)',
                kind: 'knowledge',
                content: 'Giả sử hàm số $F(x)$ là một nguyên hàm của $f(x)$ trên $K$. Khi đó: (a) Với mỗi hằng số $C$, hàm số $F(x) + C$ cũng là một nguyên hàm của $f(x)$ trên $K$; (b) Nếu hàm số $G(x)$ là một nguyên hàm của $f(x)$ trên $K$ thì tồn tại hằng số $C$ sao cho $G(x) = F(x) + C$ với mọi $x \\in K$. Ta gọi $F(x) + C\\ (C \\in \\mathbb{R})$ là **họ các nguyên hàm** của $f(x)$ trên $K$:',
                formula: '$$\\int f(x)\\,dx = F(x) + C \\quad (C \\in \\mathbb{R})$$',
                callouts: [
                  {
                    type: 'chu-y',
                    title: 'Chú ý (SGK Tập 2 trang 6)',
                    items: [
                      'a) Để tìm họ các nguyên hàm (gọi tắt là tìm nguyên hàm) của $f(x)$ trên $K$, ta chỉ cần tìm một nguyên hàm $F(x)$ của $f(x)$ trên $K$ rồi viết $\\int f(x)\\,dx = F(x) + C$.',
                      'b) Nếu hàm số $f(x)$ **liên tục** trên khoảng $K$ thì $f(x)$ **có nguyên hàm** trên khoảng đó.',
                      'c) Biểu thức $f(x)\\,dx$ gọi là **vi phân của nguyên hàm** $F(x)$, kí hiệu $dF(x)$. Vậy $dF(x) = F\'(x)\\,dx = f(x)\\,dx$.',
                      'd) Khi tìm nguyên hàm của một hàm số mà không chỉ rõ tập $K$, ta hiểu là tìm nguyên hàm của hàm số đó trên **tập xác định** của nó.'
                    ]
                  }
                ]
              }
            ]
          },
          {
            heading: '2. Tính chất cơ bản của nguyên hàm',
            summary: 'Tính chất nguyên hàm của tích hằng số khác $0$ với hàm số và nguyên hàm của tổng, hiệu hai hàm số.',
            boxes: [
              {
                title: 'Khung kiến thức: Các tính chất cơ bản của nguyên hàm (SGK Tập 2 trang 6–7)',
                kind: 'knowledge',
                content: 'Cho $f(x)$ và $g(x)$ là các hàm số liên tục trên $K$ và $k \\neq 0$ là một hằng số thực:',
                formula: '$$\\begin{aligned} &\\bullet\\ \\int k f(x)\\,dx = k \\int f(x)\\,dx \\quad (k \\neq 0). \\\\ &\\bullet\\ \\int [f(x) + g(x)]\\,dx = \\int f(x)\\,dx + \\int g(x)\\,dx. \\\\ &\\bullet\\ \\int [f(x) - g(x)]\\,dx = \\int f(x)\\,dx - \\int g(x)\\,dx. \\end{aligned}$$'
              }
            ]
          },
          {
            heading: '3. Nguyên hàm của một số hàm số thường gặp',
            summary: 'Đạo hàm hàm số luỹ thừa và bảng tổng kết nguyên hàm chuẩn xác 100% theo SGK Toán 12 Tập 2.',
            boxes: [
              {
                title: 'Khung kiến thức: Đạo hàm và nguyên hàm của hàm số luỹ thừa (SGK Tập 2 trang 8)',
                kind: 'knowledge',
                content: 'Hàm số $y = x^\\alpha\\ (\\alpha \\in \\mathbb{R})$ là hàm số luỹ thừa (tập xác định: $\\mathbb{R}$ nếu $\\alpha$ nguyên dương; $\\mathbb{R} \\setminus \\{0\\}$ nếu $\\alpha$ nguyên âm hoặc $0$; $(0; +\\infty)$ nếu $\\alpha$ không nguyên). Hàm số $y = x^\\alpha$ có đạo hàm với mọi $x > 0$ là $(x^\\alpha)\' = \\alpha x^{\\alpha - 1}$. Từ đó:',
                formula: '$$\\begin{aligned} &\\bullet\\ (x^\\alpha)\' = \\alpha x^{\\alpha - 1} \\quad (x > 0,\\ \\alpha \\in \\mathbb{R}). \\\\ &\\bullet\\ \\int x^\\alpha\\,dx = \\frac{x^{\\alpha + 1}}{\\alpha + 1} + C \\quad (\\alpha \\neq -1). \\\\ &\\bullet\\ \\int \\frac{1}{x}\\,dx = \\ln|x| + C \\quad (x \\neq 0). \\end{aligned}$$'
              },
              {
                title: 'Khung kiến thức: Nguyên hàm hàm lượng giác, hàm mũ và Bảng nguyên hàm tổng kết (SGK Tập 2 trang 9–10)',
                kind: 'knowledge',
                content: 'Bảng tổng kết nguyên hàm của một số hàm số thường gặp (học thuộc lòng 10 công thức chuẩn SGK):',
                formula: '$$\\begin{aligned} &\\int 0\\,dx = C &\\qquad &\\int 1\\,dx = x + C \\\\ &\\int x^\\alpha\\,dx = \\frac{x^{\\alpha + 1}}{\\alpha + 1} + C \\quad (\\alpha \\neq -1) &\\qquad &\\int \\frac{1}{x}\\,dx = \\ln|x| + C \\\\ &\\int e^x\\,dx = e^x + C &\\qquad &\\int a^x\\,dx = \\frac{a^x}{\\ln a} + C \\quad (0 < a \\neq 1) \\\\ &\\int \\cos x\\,dx = \\sin x + C &\\qquad &\\int \\sin x\\,dx = -\\cos x + C \\\\ &\\int \\frac{1}{\\cos^2 x}\\,dx = \\tan x + C &\\qquad &\\int \\frac{1}{\\sin^2 x}\\,dx = -\\cot x + C \\end{aligned}$$'
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
          'Hình thang cong và công thức diện tích hình thang cong $S = F(b) - F(a)$',
          'Định nghĩa tích phân $\\int_a^b f(x)\\,dx = F(b) - F(a)$ và ý nghĩa hình học',
          'Các quy ước tích phân và tính không phụ thuộc vào biến lấy tích phân',
          '4 tính chất của tích phân và công thức giá trị trung bình của hàm số trên $[a; b]$'
        ],
        examIds: ['bai12_de1', 'bai12_de2'],
        sections: [
          {
            heading: '1. Khái niệm tích phân',
            summary: 'Diện tích hình thang cong, định nghĩa tích phân xác định, các quy ước và ý nghĩa hình học của tích phân.',
            boxes: [
              {
                title: 'Khung kiến thức: Diện tích hình thang cong (SGK Tập 2 trang 12, 14)',
                kind: 'knowledge',
                content: 'Hình phẳng giới hạn bởi đồ thị $y = f(x)$, trục hoành và hai đường thẳng $x = a, x = b\\ (a < b)$, trong đó $f(x)$ là hàm liên tục không âm trên đoạn $[a; b]$, gọi là một **hình thang cong**. Nếu hàm số $f(x)$ liên tục và không âm trên đoạn $[a; b]$ thì diện tích $S$ của hình thang cong đó là:',
                formula: '$$S = F(b) - F(a)$$',
                callouts: [
                  {
                    type: 'ghi-nho',
                    title: 'Ghi nhớ',
                    items: [
                      'Trong công thức trên, $F(x)$ là một nguyên hàm bất kì của hàm số $f(x)$ trên đoạn $[a; b]$ (hiệu $F(b) - F(a)$ không phụ thuộc vào việc chọn nguyên hàm).'
                    ]
                  }
                ]
              },
              {
                title: 'Khung kiến thức: Định nghĩa tích phân (SGK Tập 2 trang 14)',
                kind: 'knowledge',
                content: 'Cho $f(x)$ là hàm số liên tục trên đoạn $[a; b]$. Nếu $F(x)$ là một nguyên hàm của hàm số $f(x)$ trên đoạn $[a; b]$ thì hiệu số $F(b) - F(a)$ được gọi là **tích phân từ $a$ đến $b$** của hàm số $f(x)$, kí hiệu là $\\int_a^b f(x)\\,dx$:',
                formula: '$$\\int_a^b f(x)\\,dx = F(x)\\Big|_a^b = F(b) - F(a)$$',
                callouts: [
                  {
                    type: 'chu-y',
                    title: 'Chú ý (SGK Tập 2 trang 14)',
                    items: [
                      'a) Hiệu $F(b) - F(a)$ thường được kí hiệu là $F(x)\\Big|_a^b$. Như vậy $\\int_a^b f(x)\\,dx = F(x)\\Big|_a^b$.',
                      'b) Ta gọi $\\int_a^b$ là **dấu tích phân**, $a$ là **cận dưới**, $b$ là **cận trên**, $f(x)\\,dx$ là **biểu thức dưới dấu tích phân** và $f(x)$ là **hàm số dưới dấu tích phân**.',
                      'c) Trường hợp $a = b$ hoặc $a > b$, ta quy ước: $\\int_a^a f(x)\\,dx = 0$ và $\\int_a^b f(x)\\,dx = -\\int_b^a f(x)\\,dx$.',
                      'Tích phân **không phụ thuộc** vào cách kí hiệu biến: $\\int_a^b f(x)\\,dx = \\int_a^b f(t)\\,dt = \\int_a^b f(u)\\,du$.'
                    ]
                  },
                  {
                    type: 'y-nghia',
                    title: 'Ý nghĩa hình học của tích phân (SGK Tập 2 trang 15)',
                    items: [
                      'Nếu hàm số $f(x)$ liên tục và không âm trên đoạn $[a; b]$, thì tích phân $\\int_a^b f(x)\\,dx$ là diện tích $S$ của hình thang cong giới hạn bởi đồ thị $y = f(x)$, trục hoành và hai đường thẳng $x = a, x = b$: $S = \\int_a^b f(x)\\,dx$.'
                    ]
                  }
                ]
              }
            ]
          },
          {
            heading: '2. Tính chất của tích phân',
            summary: 'Bốn tính chất cơ bản của tích phân xác định và công thức giá trị trung bình của hàm số liên tục.',
            boxes: [
              {
                title: 'Khung kiến thức: Các tính chất của tích phân (SGK Tập 2 trang 16)',
                kind: 'knowledge',
                content: 'Cho $f(x), g(x)$ là các hàm số liên tục trên đoạn $[a; b]$ và $k$ là một hằng số thực tuỳ ý. Khi đó ta có:',
                formula: '$$\\begin{aligned} &\\text{1) } \\int_a^b k f(x)\\,dx = k \\int_a^b f(x)\\,dx \\quad (k \\text{ là hằng số}); \\\\ &\\text{2) } \\int_a^b [f(x) + g(x)]\\,dx = \\int_a^b f(x)\\,dx + \\int_a^b g(x)\\,dx; \\\\ &\\text{3) } \\int_a^b [f(x) - g(x)]\\,dx = \\int_a^b f(x)\\,dx - \\int_a^b g(x)\\,dx; \\\\ &\\text{4) } \\int_a^b f(x)\\,dx = \\int_a^c f(x)\\,dx + \\int_c^b f(x)\\,dx \\quad (a < c < b). \\end{aligned}$$',
                callouts: [
                  {
                    type: 'ghi-nho',
                    title: 'Giá trị trung bình của hàm số (SGK Tập 2 trang 17)',
                    items: [
                      'Giá trị trung bình của hàm số liên tục $f(x)$ trên đoạn $[a; b]$ được định nghĩa là $\\bar{f} = \\frac{1}{b - a} \\int_a^b f(x)\\,dx$.',
                      'Trong cơ học (SGK trang 18): Với vật chuyển động có vận tốc $v(t)$, **độ dịch chuyển** trong khoảng thời gian $[t_1; t_2]$ là $\\int_{t_1}^{t_2} v(t)\\,dt$, còn **tổng quãng đường đi được** là $\\int_{t_1}^{t_2} |v(t)|\\,dt$.'
                    ]
                  }
                ]
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
          'Diện tích hình phẳng giới hạn bởi một đồ thị và trục hoành: $S = \\int_a^b |f(x)|\\,dx$',
          'Diện tích hình phẳng giới hạn bởi hai đồ thị: $S = \\int_a^b |f(x) - g(x)|\\,dx$',
          'Thể tích vật thể có diện tích mặt cắt $S(x)$: $V = \\int_a^b S(x)\\,dx$',
          'Thể tích khối tròn xoay khi quay quanh trục $Ox$: $V = \\pi \\int_a^b f^2(x)\\,dx$'
        ],
        examIds: ['bai13_de1', 'bai13_de2'],
        sections: [
          {
            heading: '1. Ứng dụng tích phân để tính diện tích hình phẳng',
            summary: 'Công thức diện tích hình phẳng giới hạn bởi một đồ thị hoặc hai đồ thị hàm số liên tục trên đoạn $[a; b]$.',
            boxes: [
              {
                title: 'Khung kiến thức: Diện tích hình phẳng giới hạn bởi một đồ thị, trục hoành và $x = a, x = b$ (SGK Tập 2 trang 19)',
                kind: 'knowledge',
                content: 'Diện tích $S$ của hình phẳng giới hạn bởi đồ thị của hàm số $f(x)$ liên tục, trục hoành và hai đường thẳng $x = a, x = b\\ (a < b)$ được tính bằng công thức:',
                formula: '$$S = \\int_a^b |f(x)|\\,dx$$'
              },
              {
                title: 'Khung kiến thức: Diện tích hình phẳng giới hạn bởi hai đồ thị hàm số và $x = a, x = b$ (SGK Tập 2 trang 21)',
                kind: 'knowledge',
                content: 'Diện tích $S$ của hình phẳng giới hạn bởi đồ thị của hai hàm số $f(x), g(x)$ liên tục trên đoạn $[a; b]$ và hai đường thẳng $x = a, x = b$ được tính bằng công thức:',
                formula: '$$S = \\int_a^b |f(x) - g(x)|\\,dx$$',
                callouts: [
                  {
                    type: 'chu-y',
                    title: 'Chú ý quan trọng (SGK Tập 2 trang 21)',
                    items: [
                      'Nếu hiệu $f(x) - g(x)$ **không đổi dấu** trên đoạn $[a; b]$ thì $\\int_a^b |f(x) - g(x)|\\,dx = \\left|\\int_a^b [f(x) - g(x)]\\,dx\\right|$.',
                      'Trong trường hợp tổng quát, để khử dấu giá trị tuyệt đối ta giải phương trình $f(x) - g(x) = 0$ trên khoảng $(a; b)$ để tìm các nghiệm $x_1 < x_2 < \\dots < x_n$, rồi tách tích phân thành tổng trên các đoạn con mà trên mỗi đoạn con hiệu $f(x) - g(x)$ không đổi dấu.'
                    ]
                  }
                ]
              }
            ]
          },
          {
            heading: '2. Ứng dụng tích phân để tính thể tích vật thể',
            summary: 'Công thức tính thể tích vật thể theo diện tích mặt cắt $S(x)$ và thể tích khối tròn xoay sinh ra khi quay quanh trục $Ox$.',
            boxes: [
              {
                title: 'Khung kiến thức: Công thức tính thể tích vật thể (SGK Tập 2 trang 22)',
                kind: 'knowledge',
                content: 'Cho một vật thể trong không gian $Oxyz$. Gọi $\\mathcal{B}$ là phần vật thể giới hạn bởi hai mặt phẳng vuông góc với trục $Ox$ tại các điểm có hoành độ $x = a, x = b$. Một mặt phẳng vuông góc với trục $Ox$ tại điểm có hoành độ là $x$ cắt vật thể theo mặt cắt có diện tích là $S(x)$. Giả sử $S(x)$ là hàm số liên tục trên đoạn $[a; b]$. Khi đó thể tích $V$ của phần vật thể $\\mathcal{B}$ được tính bởi công thức:',
                formula: '$$V = \\int_a^b S(x)\\,dx$$',
                callouts: [
                  {
                    type: 'chu-y',
                    title: 'Chú ý (SGK Tập 2 trang 23)',
                    items: [
                      'Bằng ứng dụng của tích phân, người ta chứng minh được thể tích của **khối chóp bất kì** bằng $\\frac{1}{3}$ diện tích mặt đáy nhân với chiều cao của nó ($V = \\frac{1}{3}Sh$), và thể tích của khối lăng trụ bằng $V = Sh$.'
                    ]
                  }
                ]
              },
              {
                title: 'Khung kiến thức: Công thức tính thể tích khối tròn xoay (SGK Tập 2 trang 24)',
                kind: 'knowledge',
                content: 'Cho hàm số $f(x)$ liên tục, không âm trên đoạn $[a; b]$. Khi quay hình phẳng giới hạn bởi đồ thị hàm số $y = f(x)$, trục hoành và hai đường thẳng $x = a, x = b$ xung quanh trục hoành, ta được hình khối gọi là một **khối tròn xoay**. Mặt cắt vuông góc với trục $Ox$ tại điểm $x \\in [a; b]$ là hình tròn bán kính $f(x)$, nên thể tích của khối tròn xoay này là:',
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
          'Vectơ pháp tuyến, tích có hướng $[\\vec{u}, \\vec{v}]$ và cặp vectơ chỉ phương của mặt phẳng',
          'Phương trình tổng quát $Ax + By + Cz + D = 0$ và 3 dạng bài toán lập phương trình mặt phẳng',
          'Phương trình mặt phẳng theo đoạn chắn $\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$',
          'Điều kiện hai mặt phẳng vuông góc, song song, trùng nhau và khoảng cách $d(M, (P))$'
        ],
        examIds: ['bai14_de1', 'bai14_de2'],
        sections: [
          {
            heading: '1. Vectơ pháp tuyến và cặp vectơ chỉ phương của mặt phẳng',
            summary: 'Định nghĩa VTPT, tích có hướng của hai vectơ, cặp VTCP và cách tìm VTPT của mặt phẳng.',
            boxes: [
              {
                title: 'Khung kiến thức: Vectơ pháp tuyến của mặt phẳng (SGK Tập 2 trang 30)',
                kind: 'knowledge',
                content: 'Vectơ $\\vec{n} \\neq \\vec{0}$ được gọi là **vectơ pháp tuyến** (VTPT) của mặt phẳng $(\\alpha)$ nếu giá của $\\vec{n}$ vuông góc với $(\\alpha)$.',
                callouts: [
                  {
                    type: 'chu-y',
                    title: 'Chú ý (SGK Tập 2 trang 30)',
                    items: [
                      'Mặt phẳng **hoàn toàn xác định** khi biết một điểm và một vectơ pháp tuyến của nó.',
                      'Nếu $\\vec{n}$ là một vectơ pháp tuyến của mặt phẳng $(\\alpha)$ thì $k\\vec{n}$ (với $k$ là một số khác $0$) cũng là một vectơ pháp tuyến của $(\\alpha)$.'
                    ]
                  }
                ]
              },
              {
                title: 'Khung kiến thức: Tích có hướng của hai vectơ (SGK Tập 2 trang 30)',
                kind: 'knowledge',
                content: 'Trong không gian $Oxyz$, cho hai vectơ $\\vec{u} = (a; b; c)$ và $\\vec{v} = (a\'; b\'; c\')$. Khi đó vectơ $\\vec{n}$ sau đây vuông góc với cả hai vectơ $\\vec{u}$ và $\\vec{v}$, được gọi là **tích có hướng** của $\\vec{u}$ và $\\vec{v}$, kí hiệu là $[\\vec{u}, \\vec{v}]$:',
                formula: '$$[\\vec{u}, \\vec{v}] = (bc\' - b\'c;\\ ca\' - c\'a;\\ ab\' - a\'b) = \\left(\\begin{vmatrix} b & c \\\\ b\' & c\' \\end{vmatrix};\\ \\begin{vmatrix} c & a \\\\ c\' & a\' \\end{vmatrix};\\ \\begin{vmatrix} a & b \\\\ a\' & b\' \\end{vmatrix}\\right)$$',
                callouts: [
                  {
                    type: 'chu-y',
                    title: 'Chú ý (SGK Tập 2 trang 30)',
                    items: [
                      '$[\\vec{u}, \\vec{v}] = \\vec{0}$ khi và chỉ khi $\\vec{u}, \\vec{v}$ **cùng phương**.',
                      'Với bốn số $x, y, x\', y\'$, ta kí hiệu định thức cấp hai $\\begin{vmatrix} x & y \\\\ x\' & y\' \\end{vmatrix} = xy\' - x\'y$ để nhớ nhanh toạ độ tích có hướng.'
                    ]
                  }
                ]
              },
              {
                title: 'Khung kiến thức: Cặp vectơ chỉ phương của mặt phẳng (SGK Tập 2 trang 31)',
                kind: 'knowledge',
                content: 'Trong không gian $Oxyz$, hai vectơ $\\vec{u}, \\vec{v}$ được gọi là **cặp vectơ chỉ phương** của mặt phẳng $(P)$ nếu chúng không cùng phương và có giá nằm trong hoặc song song với mặt phẳng $(P)$.',
                formula: '$$\\text{Nếu } \\vec{u}, \\vec{v} \\text{ là cặp vectơ chỉ phương của } (P) \\text{ thì } \\vec{n} = [\\vec{u}, \\vec{v}] \\text{ là một vectơ pháp tuyến của } (P).$$'
              }
            ]
          },
          {
            heading: '2. Phương trình tổng quát và các cách lập phương trình mặt phẳng',
            summary: 'Phương trình tổng quát, 3 quy trình lập phương trình mặt phẳng chuẩn SGK và phương trình mặt phẳng theo đoạn chắn.',
            boxes: [
              {
                title: 'Khung kiến thức: Phương trình tổng quát của mặt phẳng (SGK Tập 2 trang 32)',
                kind: 'knowledge',
                content: 'Trong không gian $Oxyz$, mỗi mặt phẳng đều có phương trình dạng $Ax + By + Cz + D = 0$, trong đó $A, B, C$ không đồng thời bằng $0$, được gọi là **phương trình tổng quát** của mặt phẳng đó.',
                formula: '$$Ax + By + Cz + D = 0 \\quad (A^2 + B^2 + C^2 > 0)$$',
                callouts: [
                  {
                    type: 'chu-y',
                    title: 'Chú ý (SGK Tập 2 trang 32)',
                    items: [
                      'Trong không gian $Oxyz$, mỗi phương trình $Ax + By + Cz + D = 0$ (các hệ số $A, B, C$ không đồng thời bằng $0$) xác định một mặt phẳng nhận $\\vec{n} = (A; B; C)$ làm một vectơ pháp tuyến.'
                    ]
                  }
                ]
              },
              {
                title: 'Khung kiến thức: 3 bài toán lập phương trình mặt phẳng (SGK Tập 2 trang 33–35)',
                kind: 'process',
                content: 'Ba dạng lập phương trình mặt phẳng trọng tâm và phương trình theo đoạn chắn:',
                formula: '$$\\begin{aligned} &\\text{1) Qua } M_0(x_0; y_0; z_0) \\text{ và có VTPT } \\vec{n} = (A; B; C): \\\\ &\\quad A(x - x_0) + B(y - y_0) + C(z - z_0) = 0 \\iff Ax + By + Cz + D = 0,\\ \\text{với } D = -(Ax_0 + By_0 + Cz_0). \\\\ &\\text{2) Qua điểm } M \\text{ và biết cặp VTCP } \\vec{u}, \\vec{v}: \\quad \\text{Tìm } \\vec{n} = [\\vec{u}, \\vec{v}] \\to \\text{lập PTTQ qua } M \\text{ với VTPT } \\vec{n}. \\\\ &\\text{3) Qua ba điểm không thẳng hàng } A, B, C: \\quad \\text{Tìm cặp VTCP } \\overrightarrow{AB}, \\overrightarrow{AC} \\to \\vec{n} = [\\overrightarrow{AB}, \\overrightarrow{AC}] \\to \\text{lập PTTQ qua } A. \\\\ &\\text{4) Phương trình mặt phẳng theo đoạn chắn qua } A(a;0;0), B(0;b;0), C(0;0;c)\\ (abc \\neq 0): \\quad \\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1. \\end{aligned}$$'
              }
            ]
          },
          {
            heading: '3. Điều kiện hai mặt phẳng vuông góc, song song và khoảng cách từ điểm đến mặt phẳng',
            summary: 'Quan hệ vuông góc, song song, trùng nhau giữa hai mặt phẳng và công thức khoảng cách $d(M, (P))$.',
            boxes: [
              {
                title: 'Khung kiến thức: Điều kiện để hai mặt phẳng vuông góc với nhau (SGK Tập 2 trang 36)',
                kind: 'knowledge',
                content: 'Trong không gian $Oxyz$, cho hai mặt phẳng $(\\alpha): Ax + By + Cz + D = 0$ và $(\\beta): A\'x + B\'y + C\'z + D\' = 0$ với hai vectơ pháp tuyến $\\vec{n} = (A; B; C)$ và $\\vec{n}\' = (A\'; B\'; C\')$ tương ứng:',
                formula: '$$(\\alpha) \\perp (\\beta) \\iff \\vec{n} \\perp \\vec{n}\' \\iff AA\' + BB\' + CC\' = 0$$',
                callouts: [
                  {
                    type: 'chu-y',
                    title: 'Chú ý (SGK Tập 2 trang 36)',
                    items: [
                      'Nếu hai mặt phẳng vuông góc với nhau thì **vectơ pháp tuyến của mặt phẳng này có giá song song hoặc nằm trong mặt phẳng kia**.'
                    ]
                  }
                ]
              },
              {
                title: 'Khung kiến thức: Điều kiện để hai mặt phẳng song song với nhau (SGK Tập 2 trang 37)',
                kind: 'knowledge',
                content: 'Cho hai mặt phẳng $(\\alpha): Ax + By + Cz + D = 0$ và $(\\beta): A\'x + B\'y + C\'z + D\' = 0$ với các vectơ pháp tuyến $\\vec{n} = (A; B; C)$, $\\vec{n}\' = (A\'; B\'; C\')$:',
                formula: '$$(\\alpha) \\parallel (\\beta) \\iff \\begin{cases} \\vec{n}\' = k\\vec{n} \\\\ D\' \\neq kD \\end{cases} \\text{ với } k \\text{ nào đó.}$$',
                callouts: [
                  {
                    type: 'chu-y',
                    title: 'Chú ý (SGK Tập 2 trang 37)',
                    items: [
                      'Nếu hai mặt phẳng song song với nhau thì **vectơ pháp tuyến của mặt phẳng này cũng là vectơ pháp tuyến của mặt phẳng kia**.',
                      'Hai mặt phẳng $(\\alpha)$ và $(\\beta)$ **trùng nhau** khi và chỉ khi tồn tại số $k \\neq 0$ sao cho $A\' = kA,\\ B\' = kB,\\ C\' = kC,\\ D\' = kD$.'
                    ]
                  }
                ]
              },
              {
                title: 'Khung kiến thức: Khoảng cách từ một điểm đến một mặt phẳng (SGK Tập 2 trang 38)',
                kind: 'knowledge',
                content: 'Trong không gian $Oxyz$, khoảng cách từ điểm $M(x_0; y_0; z_0)$ đến mặt phẳng $(P): Ax + By + Cz + D = 0$ là:',
                formula: '$$d(M, (P)) = \\frac{|Ax_0 + By_0 + Cz_0 + D|}{\\sqrt{A^2 + B^2 + C^2}}$$'
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
          'Vectơ chỉ phương của đường thẳng $\\Delta$',
          'Phương trình tham số và phương trình chính tắc của đường thẳng',
          'Phương trình đường thẳng đi qua hai điểm phân biệt $A_1, A_2$',
          'Điều kiện hai đường thẳng vuông góc và 4 vị trí tương đối của hai đường thẳng'
        ],
        examIds: ['bai15_de1', 'bai15_de2'],
        sections: [
          {
            heading: '1. Phương trình đường thẳng',
            summary: 'Vectơ chỉ phương, phương trình tham số, phương trình chính tắc và phương trình đường thẳng đi qua hai điểm.',
            boxes: [
              {
                title: 'Khung kiến thức: Vectơ chỉ phương của đường thẳng (SGK Tập 2 trang 41)',
                kind: 'knowledge',
                content: 'Vectơ $\\vec{u} \\neq \\vec{0}$ được gọi là **vectơ chỉ phương** (VTCP) của đường thẳng $\\Delta$ nếu giá của $\\vec{u}$ song song hoặc trùng với $\\Delta$.',
                callouts: [
                  {
                    type: 'chu-y',
                    title: 'Chú ý (SGK Tập 2 trang 41)',
                    items: [
                      'Đường thẳng **hoàn toàn xác định** khi biết một điểm mà nó đi qua và một vectơ chỉ phương.',
                      'Nếu $\\vec{u}$ là một vectơ chỉ phương của $\\Delta$ thì $k\\vec{u}$ (với $k$ là một số khác $0$) cũng là một vectơ chỉ phương của $\\Delta$.'
                    ]
                  }
                ]
              },
              {
                title: 'Khung kiến thức: Phương trình tham số và Phương trình chính tắc (SGK Tập 2 trang 42–44)',
                kind: 'knowledge',
                content: 'Trong không gian $Oxyz$, cho đường thẳng $\\Delta$ đi qua điểm $A(x_0; y_0; z_0)$ và có vectơ chỉ phương $\\vec{u} = (a; b; c)$:',
                formula: '$$\\begin{aligned} &\\bullet\\ \\textbf{Phương trình tham số } (a^2 + b^2 + c^2 > 0): \\quad \\begin{cases} x = x_0 + at \\\\ y = y_0 + bt \\\\ z = z_0 + ct \\end{cases} \\quad (t \\text{ là tham số, } t \\in \\mathbb{R}). \\\\ &\\bullet\\ \\textbf{Phương trình chính tắc } (a, b, c \\neq 0): \\quad \\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}. \\end{aligned}$$',
                callouts: [
                  {
                    type: 'chu-y',
                    title: 'Chú ý về phương trình tham số (SGK Tập 2 trang 42)',
                    items: [
                      'Với các số $a, b, c$ không đồng thời bằng $0$, hệ phương trình tham số xác định một đường thẳng đi qua $M(x_0; y_0; z_0)$ và có VTCP $\\vec{u} = (a; b; c)$.',
                      'Từ phương trình tham số của đường thẳng, **mỗi giá trị của tham số tương ứng với một điểm thuộc đường thẳng đó và ngược lại**.'
                    ]
                  },
                  {
                    type: 'nhan-xet',
                    title: 'Nhận xét về phương trình chính tắc (SGK Tập 2 trang 44)',
                    items: [
                      'Nếu vectơ chỉ phương $\\vec{u} = (a; b; c)$ có ít nhất một toạ độ bằng $0$ thì đường thẳng **không có phương trình chính tắc** (chỉ viết được phương trình tham số).'
                    ]
                  }
                ]
              },
              {
                title: 'Khung kiến thức: Lập phương trình đường thẳng đi qua hai điểm (SGK Tập 2 trang 44)',
                kind: 'knowledge',
                content: 'Trong không gian $Oxyz$, cho hai điểm phân biệt $A_1(x_1; y_1; z_1)$ và $A_2(x_2; y_2; z_2)$. Đường thẳng $A_1A_2$ có vectơ chỉ phương $\\overrightarrow{A_1A_2} = (x_2 - x_1;\\ y_2 - y_1;\\ z_2 - z_1)$:',
                formula: '$$\\begin{aligned} &\\bullet\\ \\text{Phương trình tham số: } \\begin{cases} x = x_1 + (x_2 - x_1)t \\\\ y = y_1 + (y_2 - y_1)t \\\\ z = z_1 + (z_2 - z_1)t \\end{cases} \\quad (t \\in \\mathbb{R}). \\\\ &\\bullet\\ \\text{Phương trình chính tắc } (x_1 \\neq x_2,\\ y_1 \\neq y_2,\\ z_1 \\neq z_2): \\quad \\frac{x - x_1}{x_2 - x_1} = \\frac{y - y_1}{y_2 - y_1} = \\frac{z - z_1}{z_2 - z_1}. \\end{aligned}$$'
              }
            ]
          },
          {
            heading: '2. Hai đường thẳng vuông góc và vị trí tương đối giữa hai đường thẳng',
            summary: 'Điều kiện hai đường thẳng vuông góc và hai phương pháp chuẩn SGK xét vị trí tương đối của hai đường thẳng.',
            boxes: [
              {
                title: 'Khung kiến thức: Hai đường thẳng vuông góc (SGK Tập 2 trang 45)',
                kind: 'knowledge',
                content: 'Trong không gian $Oxyz$, cho hai đường thẳng $\\Delta_1, \\Delta_2$ tương ứng có vectơ chỉ phương $\\vec{u}_1 = (a_1; b_1; c_1)$ và $\\vec{u}_2 = (a_2; b_2; c_2)$. Khi đó:',
                formula: '$$\\Delta_1 \\perp \\Delta_2 \\iff \\vec{u}_1 \\cdot \\vec{u}_2 = 0 \\iff a_1a_2 + b_1b_2 + c_1c_2 = 0$$'
              },
              {
                title: 'Khung kiến thức: Vị trí tương đối giữa hai đường thẳng (SGK Tập 2 trang 46)',
                kind: 'knowledge',
                content: 'Trong không gian $Oxyz$, cho hai đường thẳng $\\Delta_1, \\Delta_2$ lần lượt đi qua các điểm $A_1(x_1; y_1; z_1)$, $A_2(x_2; y_2; z_2)$ và tương ứng có vectơ chỉ phương $\\vec{u}_1 = (a_1; b_1; c_1)$, $\\vec{u}_2 = (a_2; b_2; c_2)$. Khi đó:',
                formula: '$$\\begin{aligned} &\\bullet\\ \\Delta_1 \\parallel \\Delta_2 \\iff \\vec{u}_1 \\text{ cùng phương với } \\vec{u}_2 \\text{ và } A_1 \\notin \\Delta_2. \\\\ &\\bullet\\ \\Delta_1 \\equiv \\Delta_2 \\iff \\vec{u}_1 \\text{ cùng phương với } \\vec{u}_2 \\text{ và } A_1 \\in \\Delta_2. \\\\ &\\bullet\\ \\Delta_1 \\text{ và } \\Delta_2 \\text{ cắt nhau} \\iff \\begin{cases} [\\vec{u}_1, \\vec{u}_2] \\neq \\vec{0} \\\\ \\overrightarrow{A_1A_2} \\cdot [\\vec{u}_1, \\vec{u}_2] = 0 \\end{cases}. \\\\ &\\bullet\\ \\Delta_1 \\text{ và } \\Delta_2 \\text{ chéo nhau} \\iff \\overrightarrow{A_1A_2} \\cdot [\\vec{u}_1, \\vec{u}_2] \\neq 0. \\end{aligned}$$',
                callouts: [
                  {
                    type: 'chu-y',
                    title: 'Chú ý: Xét vị trí tương đối bằng hệ phương trình hai ẩn $t, s$ (SGK Tập 2 trang 47)',
                    items: [
                      'Viết phương trình tham số $\\Delta_1$ (tham số $t$) và $\\Delta_2$ (tham số $s$), rồi xét hệ phương trình hai ẩn $(*)$: $\\begin{cases} x_1 + a_1t = x_2 + a_2s \\\\ y_1 + b_1t = y_2 + b_2s \\\\ z_1 + c_1t = z_2 + c_2s \\end{cases}$.',
                      '$\\Delta_1 \\parallel \\Delta_2 \\iff \\vec{u}_1$ cùng phương với $\\vec{u}_2$ và hệ $(*)$ vô nghiệm.',
                      '$\\Delta_1 \\equiv \\Delta_2 \\iff$ Hệ $(*)$ có vô số nghiệm.',
                      '$\\Delta_1$ cắt $\\Delta_2 \\iff$ Hệ $(*)$ có nghiệm duy nhất.',
                      '$\\Delta_1$ và $\\Delta_2$ chéo nhau $\\iff \\vec{u}_1$ và $\\vec{u}_2$ không cùng phương và hệ $(*)$ vô nghiệm.'
                    ]
                  }
                ]
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
          'Công thức tính góc giữa hai đường thẳng: $\\cos(\\Delta, \\Delta\') = |\\cos(\\vec{u}, \\vec{u}\')|$',
          'Công thức tính góc giữa đường thẳng và mặt phẳng: $\\sin(\\Delta, (P)) = |\\cos(\\vec{u}, \\vec{n})|$',
          'Công thức tính góc giữa hai mặt phẳng: $\\cos((P), (Q)) = |\\cos(\\vec{n}, \\vec{n}\')|$'
        ],
        examIds: ['bai16_de1', 'bai16_de2'],
        sections: [
          {
            heading: '1. Công thức tính góc giữa hai đường thẳng',
            summary: 'Côsin góc giữa hai đường thẳng bằng trị tuyệt đối côsin góc giữa hai vectơ chỉ phương.',
            boxes: [
              {
                title: 'Khung kiến thức: Góc giữa hai đường thẳng (SGK Tập 2 trang 50)',
                kind: 'knowledge',
                content: 'Trong không gian $Oxyz$, cho hai đường thẳng $\\Delta$ và $\\Delta\'$ tương ứng có vectơ chỉ phương $\\vec{u} = (a; b; c)$ và $\\vec{u}\' = (a\'; b\'; c\')$. Khi đó:',
                formula: '$$\\cos(\\Delta, \\Delta\') = |\\cos(\\vec{u}, \\vec{u}\')| = \\frac{|aa\' + bb\' + cc\'|}{\\sqrt{a^2 + b^2 + c^2} \\cdot \\sqrt{a\'^2 + b\'^2 + c\'^2}}$$',
                callouts: [
                  {
                    type: 'ghi-nho',
                    title: 'Quy ước và lưu ý (SGK Tập 2 trang 51)',
                    items: [
                      'Góc giữa hai đường thẳng, góc giữa đường thẳng và mặt phẳng, góc giữa hai mặt phẳng đều thuộc đoạn $[0^\\circ; 90^\\circ]$ (nên vế phải luôn có dấu giá trị tuyệt đối $|\\dots|$).',
                      'Trong bài học, nếu không nói gì thêm, ta quy ước tính góc theo đơn vị độ và làm tròn đến chữ số thập phân thứ nhất.'
                    ]
                  }
                ]
              }
            ]
          },
          {
            heading: '2. Công thức tính góc giữa đường thẳng và mặt phẳng',
            summary: 'Sin góc giữa đường thẳng $\\Delta$ và mặt phẳng $(P)$ bằng trị tuyệt đối côsin góc giữa VTCP $\\vec{u}$ và VTPT $\\vec{n}$.',
            boxes: [
              {
                title: 'Khung kiến thức: Góc giữa đường thẳng và mặt phẳng (SGK Tập 2 trang 51)',
                kind: 'knowledge',
                content: 'Trong không gian $Oxyz$, cho đường thẳng $\\Delta$ có vectơ chỉ phương $\\vec{u} = (a; b; c)$ và mặt phẳng $(P)$ có vectơ pháp tuyến $\\vec{n} = (A; B; C)$. Khi đó:',
                formula: '$$\\sin(\\Delta, (P)) = |\\cos(\\vec{u}, \\vec{n})| = \\frac{|aA + bB + cC|}{\\sqrt{a^2 + b^2 + c^2} \\cdot \\sqrt{A^2 + B^2 + C^2}}$$',
                callouts: [
                  {
                    type: 'ghi-nho',
                    title: 'Lưu ý tránh nhầm lẫn',
                    items: [
                      'Đây là công thức duy nhất trong 3 công thức góc dùng hàm **$\\sin$** ở vế trái ($\\sin(\\Delta, (P)) = |\\cos(\\vec{u}, \\vec{n})|$). Đặc biệt $\\Delta \\parallel (P)$ hoặc $\\Delta \\subset (P) \\iff \\vec{u} \\cdot \\vec{n} = 0$.'
                    ]
                  }
                ]
              }
            ]
          },
          {
            heading: '3. Công thức tính góc giữa hai mặt phẳng',
            summary: 'Côsin góc giữa hai mặt phẳng bằng trị tuyệt đối côsin góc giữa hai vectơ pháp tuyến.',
            boxes: [
              {
                title: 'Khung kiến thức: Góc giữa hai mặt phẳng (SGK Tập 2 trang 52)',
                kind: 'knowledge',
                content: 'Trong không gian $Oxyz$, cho hai mặt phẳng $(P), (Q)$ tương ứng có các vectơ pháp tuyến là $\\vec{n} = (A; B; C)$ và $\\vec{n}\' = (A\'; B\'; C\')$. Khi đó, góc giữa $(P)$ và $(Q)$, kí hiệu là $((P), (Q))$, được tính theo công thức:',
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
          'Khái niệm mặt cầu tâm $I$ bán kính $R$, đường kính mặt cầu và vị trí tương đối của điểm $M$',
          'Phương trình mặt cầu $(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2$',
          'Phương trình mặt cầu dạng khai triển $x^2 + y^2 + z^2 - 2ax - 2by - 2cz + d = 0$',
          'Ứng dụng phương trình mặt cầu mô hình hoá bề mặt Trái Đất theo kinh độ và vĩ độ'
        ],
        examIds: ['bai17_de1', 'bai17_de2'],
        sections: [
          {
            heading: '1. Phương trình mặt cầu',
            summary: 'Định nghĩa mặt cầu, phương trình chính tắc, chú ý vị trí điểm so với mặt cầu và nhận xét về phương trình dạng khai triển.',
            boxes: [
              {
                title: 'Khung kiến thức: Phương trình mặt cầu tâm $I(a; b; c)$, bán kính $R$ (SGK Tập 2 trang 54)',
                kind: 'knowledge',
                content: 'Mặt cầu tâm $I$ bán kính $R\\ (R > 0)$ là tập các điểm trong không gian cách $I$ một khoảng bằng $R$ (mỗi đường kính của mặt cầu đều có trung điểm là tâm mặt cầu và độ dài bằng $2R$). Trong không gian $Oxyz$, mặt cầu $(S)$ tâm $I(a; b; c)$ bán kính $R$ có phương trình:',
                formula: '$$(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2$$',
                callouts: [
                  {
                    type: 'chu-y',
                    title: 'Chú ý: Vị trí của điểm $M(x; y; z)$ đối với mặt cầu $(S)$ (SGK Tập 2 trang 55)',
                    items: [
                      'Điểm $M(x; y; z)$ nằm **trong** mặt cầu $(S)$ nếu $(x - a)^2 + (y - b)^2 + (z - c)^2 < R^2$ (tức $IM < R$).',
                      'Điểm $M(x; y; z)$ nằm **ngoài** mặt cầu $(S)$ nếu $(x - a)^2 + (y - b)^2 + (z - c)^2 > R^2$ (tức $IM > R$).'
                    ]
                  }
                ]
              },
              {
                title: 'Phương trình mặt cầu dạng khai triển (Nhận xét SGK Tập 2 trang 56)',
                kind: 'formula',
                content: 'Với $a, b, c, d$ là các hằng số, phương trình $x^2 + y^2 + z^2 - 2ax - 2by - 2cz + d = 0$ có thể viết lại thành $(x - a)^2 + (y - b)^2 + (z - c)^2 = a^2 + b^2 + c^2 - d$:',
                formula: '$$\\begin{cases} \\text{Là phương trình của một mặt cầu } (S) \\iff a^2 + b^2 + c^2 - d > 0 \\\\ \\text{Tâm mặt cầu: } I(a; b; c) \\\\ \\text{Bán kính mặt cầu: } R = \\sqrt{a^2 + b^2 + c^2 - d} \\end{cases}$$',
                callouts: [
                  {
                    type: 'nhan-xet',
                    title: 'Nhận xét kiểm tra nhanh (SGK Tập 2 trang 56)',
                    items: [
                      'Phương trình mặt cầu dạng khai triển phải có hệ số của $x^2, y^2, z^2$ bằng nhau (đưa về $1$), **không chứa** các tích chéo $xy, yz, zx$ và thoả mãn $a^2 + b^2 + c^2 - d > 0$.'
                    ]
                  }
                ]
              }
            ]
          },
          {
            heading: '2. Một số ứng dụng của phương trình mặt cầu trong thực tiễn',
            summary: 'Mô hình hoá bề mặt Trái Đất trong không gian $Oxyz$ và tính khoảng cách giữa hai địa điểm theo kinh độ, vĩ độ.',
            boxes: [
              {
                title: 'Mô hình mặt cầu Trái Đất và toạ độ theo kinh độ, vĩ độ (SGK Tập 2 trang 57–58)',
                kind: 'formula',
                content: 'Xét Trái Đất là mặt cầu bán kính $6\\,371\\text{ km}$ trong hệ $Oxyz$ ($O$ là tâm Trái Đất, tia $Ox$ qua giao điểm kinh tuyến gốc và xích đạo, tia $Oz$ qua cực Bắc $N$, tia $Oy$ qua xích đạo ở bán cầu Đông; $1$ đơn vị dài $= 6\\,371\\text{ km}$):',
                formula: '$$\\begin{aligned} &\\bullet\\ \\text{Phương trình bề mặt Trái Đất: } x^2 + y^2 + z^2 = 1. \\\\ &\\bullet\\ \\text{Vị trí } P(\\alpha^\\circ N,\\ \\beta^\\circ E): \\quad P(\\cos\\alpha^\\circ \\cos\\beta^\\circ;\\ \\cos\\alpha^\\circ \\sin\\beta^\\circ;\\ \\sin\\alpha^\\circ). \\\\ &\\bullet\\ \\text{Vị trí } Q(\\alpha^\\circ N,\\ \\beta^\\circ W): \\quad Q(\\cos\\alpha^\\circ \\cos\\beta^\\circ;\\ -\\cos\\alpha^\\circ \\sin\\beta^\\circ;\\ \\sin\\alpha^\\circ). \\end{aligned}$$',
                callouts: [
                  {
                    type: 'ghi-nho',
                    title: 'Khoảng cách trên bề mặt Trái Đất (SGK Tập 2 trang 58)',
                    items: [
                      'Khoảng cách ngắn nhất giữa hai vị trí $P, Q$ trên bề mặt Trái Đất là độ dài cung nhỏ $\\overset{\\frown}{PQ}$ của đường tròn tâm $O$ đi qua $P, Q$: $\\ell = \\frac{\\widehat{POQ}^\\circ}{360^\\circ} \\cdot 2\\pi \\cdot 6\\,371\\text{ (km)}$ (trong đó $\\cos\\widehat{POQ} = \\overrightarrow{OP} \\cdot \\overrightarrow{OQ}$).'
                    ]
                  }
                ]
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
          'Định nghĩa xác suất có điều kiện $P(A \\mid B)$',
          'Công thức tính $P(A \\mid B) = \\frac{P(AB)}{P(B)}$ và trường hợp đồng khả năng $\\frac{n(AB)}{n(B)}$',
          'Tính chất với hai biến cố độc lập và bảng dữ liệu thống kê $2 \\times 2$',
          'Công thức nhân xác suất $P(AB) = P(B) \\cdot P(A \\mid B) = P(A) \\cdot P(B \\mid A)$ và sơ đồ hình cây'
        ],
        examIds: ['bai18_de1', 'bai18_de2'],
        sections: [
          {
            heading: '1. Xác suất có điều kiện',
            summary: 'Định nghĩa xác suất của biến cố $A$ khi biết biến cố $B$ đã xảy ra, công thức tính và mối liên hệ với tính độc lập.',
            boxes: [
              {
                title: 'Khung kiến thức: Định nghĩa và công thức xác suất có điều kiện (SGK Tập 2 trang 65)',
                kind: 'knowledge',
                content: 'Cho hai biến cố $A$ và $B$. Xác suất của biến cố $A$, được tính khi biết biến cố $B$ đã xảy ra, được gọi là **xác suất của $A$ với điều kiện $B$** và kí hiệu là $P(A \\mid B)$. Với hai biến cố $A$ và $B$ bất kì, $P(B) > 0$, ta có:',
                formula: '$$P(A \\mid B) = \\frac{P(AB)}{P(B)}$$',
                callouts: [
                  {
                    type: 'ghi-nho',
                    title: 'Tính chất & Nhận xét quan trọng (SGK Tập 2 trang 65–67)',
                    items: [
                      'Với phép thử có các kết quả đồng khả năng và $n(B) > 0$: $P(A \\mid B) = \\frac{n(AB)}{n(B)}$.',
                      'Với mọi biến cố $A, B$ có $P(B) > 0$: $P(\\overline{A} \\mid B) = 1 - P(A \\mid B)$.',
                      'Nếu $A$ và $B$ là **hai biến cố độc lập** với $P(A) > 0, P(B) > 0$ thì: $P(A \\mid B) = P(A)$, $P(B \\mid A) = P(B)$, $P(\\overline{A} \\mid B) = P(\\overline{A})$ và $P(A \\mid \\overline{B}) = P(A)$.',
                      'Trong thực tế thống kê, xác suất có điều kiện thường được tính trực tiếp từ **bảng dữ liệu thống kê $2 \\times 2$**.'
                    ]
                  }
                ]
              }
            ]
          },
          {
            heading: '2. Công thức nhân xác suất',
            summary: 'Công thức nhân xác suất cho hai biến cố bất kì, trường hợp đặc biệt và cách mô tả trực quan bằng sơ đồ hình cây.',
            boxes: [
              {
                title: 'Công thức nhân xác suất cho hai biến cố bất kì (SGK Tập 2 trang 68)',
                kind: 'knowledge',
                content: 'Với hai biến cố $A$ và $B$ bất kì, ta có **công thức nhân xác suất**:',
                formula: '$$P(AB) = P(B) \\cdot P(A \\mid B) = P(A) \\cdot P(B \\mid A)$$',
                callouts: [
                  {
                    type: 'chu-y',
                    title: 'Chú ý (SGK Tập 2 trang 68)',
                    items: [
                      'Nếu $P(B) = 0$ thì $P(AB) = 0$ nên công thức tính $P(AB) = P(B) \\cdot P(A \\mid B)$ đúng với **mọi biến cố $A, B$**.',
                      'Nhắc lại (Lớp 11): Nếu $A$ và $B$ là hai biến cố độc lập thì $P(AB) = P(A) \\cdot P(B)$.'
                    ]
                  },
                  {
                    type: 'nhan-xet',
                    title: 'Nhận xét & Sơ đồ hình cây (SGK Tập 2 trang 68–69)',
                    items: [
                      'Vì $AB = BA$ nên với hai biến cố $A$ và $B$ bất kì, ta cũng có $P(AB) = P(A) \\cdot P(B \\mid A)$.',
                      'Khi mô tả bài toán bằng **sơ đồ hình cây**, xác suất của biến cố giao ở mỗi nhánh cuối bằng tích các xác suất ghi trên các nhánh đi từ gốc tới nút cuối đó.'
                    ]
                  }
                ]
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
          'Công thức xác suất toàn phần $P(B) = P(A) \\cdot P(B \\mid A) + P(\\overline{A}) \\cdot P(B \\mid \\overline{A})$',
          'Mô tả trực quan công thức xác suất toàn phần bằng sơ đồ hình cây',
          'Công thức Bayes tính $P(A \\mid B)$ và dạng viết gọn $\\frac{P(A) \\cdot P(B \\mid A)}{P(B)}$',
          'Ý nghĩa cập nhật xác suất của công thức Bayes và ứng dụng xét nghiệm (dương tính giả, âm tính giả)'
        ],
        examIds: ['bai19_de1', 'bai19_de2'],
        sections: [
          {
            heading: '1. Công thức xác suất toàn phần',
            summary: 'Tính xác suất của biến cố $B$ thông qua phân hoạch theo biến cố $A$ và biến cố đối $\\overline{A}$.',
            boxes: [
              {
                title: 'Khung kiến thức: Công thức xác suất toàn phần (SGK Tập 2 trang 72)',
                kind: 'knowledge',
                content: 'Cho hai biến cố $A$ và $B$. Khi đó, ta có **công thức xác suất toàn phần**:',
                formula: '$$P(B) = P(A) \\cdot P(B \\mid A) + P(\\overline{A}) \\cdot P(B \\mid \\overline{A})$$',
                callouts: [
                  {
                    type: 'chu-y',
                    title: 'Chú ý: Mô tả bằng sơ đồ hình cây (SGK Tập 2 trang 73)',
                    items: [
                      'Một phương pháp mô tả trực quan công thức xác suất toàn phần là dùng **sơ đồ hình cây**:',
                      'Trên nhánh $OA$ và $O\\overline{A}$ tương ứng ghi $P(A)$ và $P(\\overline{A})$; trên nhánh $AB, A\\overline{B}$ ghi $P(B \\mid A), P(\\overline{B} \\mid A)$; trên nhánh $\\overline{A}B, \\overline{A}\\overline{B}$ ghi $P(B \\mid \\overline{A}), P(\\overline{B} \\mid \\overline{A})$.',
                      'Xác suất $P(B)$ bằng tổng xác suất của hai nhánh đi tới $B$ là $OAB$ và $O\\overline{A}B$.'
                    ]
                  }
                ]
              }
            ]
          },
          {
            heading: '2. Công thức Bayes',
            summary: 'Công thức tính xác suất có điều kiện ngược $P(A \\mid B)$ khi biết $P(B \\mid A)$, $P(B \\mid \\overline{A})$ và $P(A)$.',
            boxes: [
              {
                title: 'Khung kiến thức: Công thức Bayes (SGK Tập 2 trang 75)',
                kind: 'knowledge',
                content: 'Cho $A$ và $B$ là hai biến cố, với $P(B) > 0$. Khi đó, ta có **công thức Bayes**:',
                formula: '$$P(A \\mid B) = \\frac{P(A) \\cdot P(B \\mid A)}{P(A) \\cdot P(B \\mid A) + P(\\overline{A}) \\cdot P(B \\mid \\overline{A})}$$',
                callouts: [
                  {
                    type: 'chu-y',
                    title: 'Chú ý (SGK Tập 2 trang 75)',
                    items: [
                      'Theo công thức xác suất toàn phần, $P(B) = P(A) \\cdot P(B \\mid A) + P(\\overline{A}) \\cdot P(B \\mid \\overline{A})$. Do đó, công thức Bayes còn có thể viết dưới dạng gọn: $P(A \\mid B) = \\frac{P(A) \\cdot P(B \\mid A)}{P(B)}$.',
                      'Trong y học: xét nghiệm dương tính nhưng thực tế không mắc bệnh gọi là **dương tính giả**; xét nghiệm âm tính nhưng thực tế lại mắc bệnh gọi là **âm tính giả**.'
                    ]
                  },
                  {
                    type: 'y-nghia',
                    title: 'Ý nghĩa của công thức Bayes (SGK Tập 2 trang 75)',
                    items: [
                      'Một nhà nghiên cứu quan tâm đến xác suất xảy ra của biến cố $A$ (xác suất ban đầu là $P(A) = p$). Khi có thêm thông tin mới rằng "biến cố $B$ đã xảy ra", nhà nghiên cứu **cập nhật hiểu biết** về khả năng xảy ra của $A$ bằng cách tính $P(A \\mid B)$ nhờ công thức Bayes.'
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

export const ALL_THEORY_LESSONS: LessonTheory[] = THEORY_CATALOG.flatMap(chapter =>
  chapter.lessons.map(lesson => ({
    ...lesson,
    sections: lesson.sections.map((section, sIdx) => ({
      ...section,
      boxes: section.boxes.map((box, bIdx) => {
        const key = `${lesson.lessonId}:${sIdx}:${bIdx}`;
        const mappedFigures = THEORY_BOX_FIGURES[key];
        if (!mappedFigures || mappedFigures.length === 0) return box;
        return {
          ...box,
          figures: [...(box.figures || []), ...mappedFigures],
        };
      }),
    })),
  }))
);

export function getTheoryByLessonId(lessonId: string): LessonTheory | undefined {
  const normalizedId = lessonId.replace(/^bai-0(\d)$/, 'bai-$1');
  const direct = ALL_THEORY_LESSONS.find(l => l.lessonId === normalizedId);
  if (direct) return direct;

  const chapterMatch = lessonId.match(/^ontap-chuong-(\d)$/);
  if (chapterMatch) {
    const chNum = parseInt(chapterMatch[1], 10);
    const chapter = THEORY_CATALOG.find(c => c.chapterId === `chuong-${chNum}`);
    const chapterReviewPages: Record<number, number> = {
      1: 42,
      2: 73,
      3: 85,
      4: 27,
      5: 61,
      6: 79,
    };
    if (chapter) {
      const chapterLessons = ALL_THEORY_LESSONS.filter(l => l.chapterId === chapter.chapterId);
      return {
        lessonId,
        lessonNumber: chNum,
        title: `Tổng hợp Lý thuyết & Công thức - ${chapter.chapterTitle}`,
        chapterId: chapter.chapterId,
        chapterTitle: chapter.chapterTitle,
        volume: chapter.volume,
        pageNumber: chapterReviewPages[chNum] || chapterLessons[0]?.pageNumber || 1,
        keyConcepts: chapterLessons.flatMap(l => l.keyConcepts),
        examIds: [`ontap_c${chNum}_de1`, `ontap_c${chNum}_de2`],
        sections: chapterLessons.flatMap(l =>
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
      pageNumber: 90,
      keyConcepts: ALL_THEORY_LESSONS.map(l => l.title),
      examIds: ['ontap_cn_de1', 'ontap_cn_de2'],
      sections: ALL_THEORY_LESSONS.map(l => ({
        heading: l.title,
        summary: l.chapterTitle,
        boxes: l.sections.flatMap(s => s.boxes),
        callouts: l.sections.flatMap(s => s.callouts || []),
        remarks: l.sections.flatMap(s => s.remarks || []),
        figures: l.sections.flatMap(s => s.figures || [])
      }))
    };
  }

  return undefined;
}
