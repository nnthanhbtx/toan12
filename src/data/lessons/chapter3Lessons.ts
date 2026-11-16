import { LessonInfo } from './types';
import { ExamSet } from '../../types/exam';
import { makeMC, makeTF, makeSA, makeSO, makeLessonExam } from './helpers';

// BÀI 9. KHOẢNG BIẾN THIÊN VÀ KHOẢNG TỨ PHÂN VỊ (Đề ôn số 1 & Đề ôn số 2)
function buildBai9Exam(variant: 1 | 2): ExamSet {
  const p = variant === 1 ? 'b9-d1' : 'b9-d2';
  // Mẫu số liệu ghép nhóm gồm 4 nhóm có độ dài h = 10:
  // v1: [10;20): 6, [20;30): 14, [30;40): 12, [40;50): 8 (cỡ mẫu n = 40)
  // -> R = 50 - 10 = 40
  // -> n/4 = 10 thuộc nhóm [20;30): Q1 = 20 + (10 - 6)/14 * 10 = 20 + 20/7 (hoặc chọn tần số chia hết để Q1, Q3 thập phân hữu hạn!)
  // Chọn tần số chia hết cực đẹp:
  // v1: [10;20): 5, [20;30): 10, [30;40): 15, [40;50): 10 (n = 40)
  // -> R = 40; n/4 = 10 thuộc nhóm [20;30): Q1 = 20 + (10 - 5)/10 * 10 = 25
  // -> n/2 = 20 thuộc nhóm [30;40): Q2 = 30 + (20 - 15)/15 * 10 = 33,33
  // -> 3n/4 = 30 thuộc nhóm [30;40): Q3 = 30 + (30 - 15)/15 * 10 = 40
  // -> Delta_Q = Q3 - Q1 = 40 - 25 = 15!
  // v2: [20;30): 5, [30;40): 10, [40;50): 15, [50;60): 10 (n = 40)
  // -> R = 60 - 20 = 40; Q1 = 35; Q3 = 50; Delta_Q = 50 - 35 = 15!
  const a1 = variant === 1 ? 10 : 20;
  const a5 = variant === 1 ? 50 : 60;
  const q1Val = variant === 1 ? 25 : 35;
  const q3Val = variant === 1 ? 40 : 50;
  const deltaQ = q3Val - q1Val; // 15

  const part1 = [
    makeMC(
      p,
      1,
      'Bài 9. Khoảng biến thiên và khoảng tứ phân vị',
      `Cho mẫu số liệu ghép nhóm có bảng tần số gồm các nhóm $[${a1}; ${a1 + 10}), [${a1 + 10}; ${a1 + 20}), [${a1 + 20}; ${a1 + 30}), [${a1 + 30}; ${a5})$ với các tần số đều dương. Khoảng biến thiên $R$ của mẫu số liệu ghép nhóm trên bằng:`,
      [`$${a5 - a1}$`, `$${a1}$`, `$${a5}$`, `$10$`],
      'A',
      `Khoảng biến thiên của mẫu số liệu ghép nhóm là hiệu số giữa đầu mút phải của nhóm cuối cùng và đầu mút trái của nhóm đầu tiên: $R = ${a5} - ${a1} = ${a5 - a1}$.`,
      'Công thức khoảng biến thiên mẫu số liệu ghép nhóm: $R = a_{k+1} - a_1$.'
    ),
    makeMC(
      p,
      2,
      'Bài 9. Khoảng biến thiên và khoảng tứ phân vị',
      `Khảo sát thời gian tập thể dục (phút/ngày) của $40$ học sinh thu được các nhóm $[${a1}; ${a1 + 10}), [${a1 + 10}; ${a1 + 20}), [${a1 + 20}; ${a1 + 30}), [${a1 + 30}; ${a5})$ với tần số lần lượt là $5; 10; 15; 10$. Tứ phân vị thứ nhất $Q_1$ của mẫu số liệu ghép nhóm này thuộc nhóm nào?`,
      [
        `$[${a1 + 10}; ${a1 + 20})$`,
        `$[${a1}; ${a1 + 10})$`,
        `$[${a1 + 20}; ${a1 + 30})$`,
        `$[${a1 + 30}; ${a5})$`,
      ],
      'A',
      `Cỡ mẫu $n = 40 \\Rightarrow \\frac{n}{4} = 10$. Nhóm đầu tiên có tần số tích lũy $cf_1 = 5 < 10$, nhóm thứ hai $[${a1 + 10}; ${a1 + 20})$ có tần số tích lũy $cf_2 = 5 + 10 = 15 \\ge 10$ nên $Q_1$ thuộc nhóm $[${a1 + 10}; ${a1 + 20})$.`,
      'Nhóm chứa $Q_1$ là nhóm đầu tiên có tần số tích lũy lớn hơn hoặc bằng $\\frac{n}{4}$.'
    ),
    makeMC(
      p,
      3,
      'Bài 9. Khoảng biến thiên và khoảng tứ phân vị',
      `Với cùng bảng số liệu $40$ học sinh ở Câu 2 (các nhóm $[${a1}; ${a1 + 10}), [${a1 + 10}; ${a1 + 20}), [${a1 + 20}; ${a1 + 30}), [${a1 + 30}; ${a5})$ có tần số $5; 10; 15; 10$), giá trị tứ phân vị thứ nhất $Q_1$ bằng:`,
      [`$${q1Val}$`, `$${q1Val - 5}$`, `$${q1Val + 5}$`, `$${q3Val}$`],
      'A',
      `Nhóm chứa $Q_1$ là $[${a1 + 10}; ${a1 + 20})$ có $a_2 = ${a1 + 10}, m_2 = 10, cf_1 = 5, h = 10$. Áp dụng công thức: $Q_1 = ${a1 + 10} + \\frac{10 - 5}{10}\\cdot 10 = ${q1Val}$.`,
      'Công thức tứ phân vị thứ nhất: $Q_1 = a_p + \\frac{\\frac{n}{4} - cf_{p-1}}{m_p}\\cdot (a_{p+1} - a_p)$.'
    ),
    makeMC(
      p,
      4,
      'Bài 9. Khoảng biến thiên và khoảng tứ phân vị',
      `Với cùng bảng số liệu $40$ học sinh ở Câu 2, giá trị tứ phân vị thứ ba $Q_3$ bằng:`,
      [`$${q3Val}$`, `$${q3Val - 5}$`, `$${q3Val + 5}$`, `$${q1Val}$`],
      'A',
      `Ta có $\\frac{3n}{4} = 30$. Tần số tích lũy đến nhóm thứ ba $[${a1 + 20}; ${a1 + 30})$ là $5 + 10 + 15 = 30$ nên $Q_3 = ${a1 + 20} + \\frac{30 - 15}{15}\\cdot 10 = ${q3Val}$.`,
      'Công thức tứ phân vị thứ ba: $Q_3 = a_q + \\frac{\\frac{3n}{4} - cf_{q-1}}{m_q}\\cdot (a_{q+1} - a_q)$.'
    ),
    makeMC(
      p,
      5,
      'Bài 9. Khoảng biến thiên và khoảng tứ phân vị',
      `Khoảng tứ phân vị $\\Delta_Q$ của mẫu số liệu ghép nhóm ở Câu 2 bằng:`,
      [`$${deltaQ}$`, `$${q3Val}$`, `$${q1Val}$`, `$40$`],
      'A',
      `Ta có $\\Delta_Q = Q_3 - Q_1 = ${q3Val} - ${q1Val} = ${deltaQ}$.`,
      'Khoảng tứ phân vị bằng hiệu giữa tứ phân vị thứ ba và tứ phân vị thứ nhất: $\\Delta_Q = Q_3 - Q_1$.'
    ),
    makeMC(
      p,
      6,
      'Bài 9. Khoảng biến thiên và khoảng tứ phân vị',
      `Phát biểu nào sau đây là ĐÚNG về ý nghĩa của khoảng tứ phân vị $\\Delta_Q$?`,
      [
        `Khoảng tứ phân vị đo mức độ phân tán của $50\\%$ số liệu nằm ở chính giữa mẫu và không bị ảnh hưởng bởi các giá trị ngoại lệ`,
        `Khoảng tứ phân vị phụ thuộc trực tiếp vào giá trị lớn nhất và giá trị nhỏ nhất của mẫu`,
        `Khoảng tứ phân vị càng lớn thì mẫu số liệu càng đồng đều`,
        `Khoảng tứ phân vị luôn lớn hơn khoảng biến thiên $R$`,
      ],
      'A',
      `Khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1$ chỉ sử dụng $50\\%$ số liệu ở giữa nên không bị ảnh hưởng bởi các giá trị bất thường (ngoại lệ) ở hai đầu mẫu.`,
      'Ưu điểm vượt trội của $\\Delta_Q$ so với $R$ là không bị ảnh hưởng bởi các giá trị ngoại lệ (outliers).'
    ),
    makeMC(
      p,
      7,
      'Bài 9. Khoảng biến thiên và khoảng tứ phân vị',
      `Cho mẫu số liệu ghép nhóm có tứ phân vị thứ nhất $Q_1 = ${variant === 1 ? 18 : 22}$ và khoảng tứ phân vị $\\Delta_Q = ${variant === 1 ? 12 : 14}$. Tứ phân vị thứ ba $Q_3$ bằng:`,
      [
        `$${variant === 1 ? 30 : 36}$`,
        `$${variant === 1 ? 6 : 8}$`,
        `$${variant === 1 ? 15 : 18}$`,
        `$${variant === 1 ? 24 : 29}$`,
      ],
      'A',
      `Từ $\\Delta_Q = Q_3 - Q_1 \\Rightarrow Q_3 = Q_1 + \\Delta_Q = ${variant === 1 ? '18 + 12 = 30' : '22 + 14 = 36'}$.`,
      'Biến đổi công thức $\\Delta_Q = Q_3 - Q_1 \\Leftrightarrow Q_3 = Q_1 + \\Delta_Q$.'
    ),
    makeMC(
      p,
      8,
      'Bài 9. Khoảng biến thiên và khoảng tứ phân vị',
      `Chiều cao (đơn vị: cm) của các cây giống trong vườn ươm được chia thành 5 nhóm: $[15; 20), [20; 25), [25; 30), [30; 35), [35; ${variant === 1 ? 40 : 45})$. Khoảng biến thiên của mẫu số liệu ghép nhóm trên là:`,
      [
        `$${variant === 1 ? 25 : 30}\\text{ cm}$`,
        `$5\\text{ cm}$`,
        `$${variant === 1 ? 40 : 45}\\text{ cm}$`,
        `$15\\text{ cm}$`,
      ],
      'A',
      `Ta có $R = a_6 - a_1 = ${variant === 1 ? 40 : 45} - 15 = ${variant === 1 ? 25 : 30}\\text{ cm}$.`,
      'Lấy đầu mút phải của nhóm cuối trừ đầu mút trái của nhóm đầu.'
    ),
    makeMC(
      p,
      9,
      'Bài 9. Khoảng biến thiên và khoảng tứ phân vị',
      `Nếu gộp thêm một số quan sát mới có giá trị nằm trong nhóm chính giữa vào mẫu số liệu ghép nhóm (không mở rộng thêm nhóm mới ở hai đầu) thì khoảng biến thiên $R$ của mẫu số liệu ghép nhóm sẽ:`,
      [
        `Không thay đổi`,
        `Tăng lên`,
        `Giảm xuống`,
        `Tăng gấp đôi`,
      ],
      'A',
      `Vì đầu mút trái của nhóm đầu tiên $a_1$ và đầu mút phải của nhóm cuối cùng $a_{k+1}$ không đổi nên $R = a_{k+1} - a_1$ không thay đổi.`,
      'Khoảng biến thiên của mẫu số liệu ghép nhóm chỉ phụ thuộc vào hai đầu mút $a_1$ và $a_{k+1}$.'
    ),
    makeMC(
      p,
      10,
      'Bài 9. Khoảng biến thiên và khoảng tứ phân vị',
      `Khảo sát điểm thi của hai lớp 12A và 12B thu được khoảng tứ phân vị lần lượt là $\\Delta_Q(A) = ${variant === 1 ? 2.1 : 1.8}$ và $\\Delta_Q(B) = ${variant === 1 ? 3.4 : 2.9}$. Kết luận nào sau đây là đúng?`,
      [
        `Điểm thi của học sinh lớp 12A đồng đều hơn (ít phân tán hơn) lớp 12B`,
        `Điểm thi của học sinh lớp 12B đồng đều hơn lớp 12A`,
        `Điểm trung bình của lớp 12B cao hơn lớp 12A`,
        `Hai lớp có mức độ phân tán điểm thi như nhau`,
      ],
      'A',
      `Vì $\\Delta_Q(A) < \\Delta_Q(B)$ nên mức độ phân tán của $50\\%$ số liệu giữa ở lớp 12A nhỏ hơn lớp 12B, tức điểm thi lớp 12A đồng đều hơn.`,
      'Khoảng tứ phân vị càng nhỏ thì dữ liệu càng tập trung (đồng đều hơn).'
    ),
    makeMC(
      p,
      11,
      'Bài 9. Khoảng biến thiên và khoảng tứ phân vị',
      `Cho mẫu số liệu ghép nhóm có 3 nhóm $[0; 10), [10; 20), [20; 30)$ với tần số lần lượt là $4; ${variant === 1 ? 12 : 8}; 4$. Trung vị (tứ phân vị thứ hai $Q_2$) của mẫu số liệu bằng:`,
      ['$15$', '$10$', '$20$', '$12,5$'],
      'A',
      `Do bảng tần số đối xứng hoàn hảo quanh nhóm giữa $[10; 20)$ nên trung vị $Q_2$ bằng chính điểm giữa của nhóm $[10; 20)$ là $15$. (Hoặc tính trực tiếp: $Q_2 = 10 + \\frac{n/2 - 4}{m_2}\\cdot 10 = 15$).`,
      'Khi phân bố tần số đối xứng, trung vị $Q_2$ nằm ngay chính giữa của nhóm trung tâm.'
    ),
    makeMC(
      p,
      12,
      'Bài 9. Khoảng biến thiên và khoảng tứ phân vị',
      `Cho mẫu số liệu ghép nhóm về lương tháng (triệu đồng) của $20$ nhân viên: $[8; 10)$ có $5$ người, $[10; 12)$ có $5$ người, $[12; 14)$ có $5$ người, $[14; 16)$ có $5$ người. Khoảng tứ phân vị $\\Delta_Q$ của mẫu số liệu này bằng:`,
      ['$4$', '$6$', '$8$', '$2$'],
      'A',
      `Cỡ mẫu $n = 20$. Vì $\\frac{n}{4} = 5$ nên $Q_1 = 10$; vì $\\frac{3n}{4} = 15$ nên $Q_3 = 14$. Vậy $\\Delta_Q = 14 - 10 = 4$.`,
      'Khi tần số tích lũy của nhóm $p$ bằng đúng $\\frac{r \\cdot n}{4}$ thì $Q_r$ trùng với đầu mút phải $a_{p+1}$ của nhóm đó.'
    ),
  ];

  const part2 = [
    makeTF(
      p,
      1,
      'Bài 9. Khoảng biến thiên và khoảng tứ phân vị',
      `Khảo sát quãng đường (km) đi bộ mỗi tuần của $40$ người cao tuổi thu được bảng tần số ghép nhóm: $[${a1}; ${a1 + 10})$ có $5$ người; $[${a1 + 10}; ${a1 + 20})$ có $10$ người; $[${a1 + 20}; ${a1 + 30})$ có $15$ người; $[${a1 + 30}; ${a5})$ có $10$ người. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Cỡ mẫu của cuộc khảo sát là $n = 40$ và khoảng biến thiên là $R = 40\\text{ km}$.`,
          isCorrect: true,
          exp: `Tổng các tần số là $5 + 10 + 15 + 10 = 40$ và $R = ${a5} - ${a1} = 40\\text{ km}$.`,
        },
        {
          text: `Tứ phân vị thứ nhất của mẫu số liệu ghép nhóm là $Q_1 = ${q1Val}\\text{ km}$.`,
          isCorrect: true,
          exp: `$Q_1$ thuộc nhóm $[${a1 + 10}; ${a1 + 20})$ và $Q_1 = ${a1 + 10} + \\frac{10 - 5}{10}\\cdot 10 = ${q1Val}$.`,
        },
        {
          text: `Tứ phân vị thứ ba của mẫu số liệu ghép nhóm là $Q_3 = ${q3Val + 5}\\text{ km}$.`,
          isCorrect: false,
          exp: `Ta có $\\frac{3n}{4} = 30$, suy ra $Q_3 = ${a1 + 20} + \\frac{30 - 15}{15}\\cdot 10 = ${q3Val}\\text{ km}$ chứ không phải $${q3Val + 5}\\text{ km}$.`,
        },
        {
          text: `Khoảng tứ phân vị của mẫu số liệu ghép nhóm là $\\Delta_Q = ${deltaQ}\\text{ km}$.`,
          isCorrect: true,
          exp: `Ta có $\\Delta_Q = Q_3 - Q_1 = ${q3Val} - ${q1Val} = ${deltaQ}\\text{ km}$.`,
        },
      ],
      'Tính cẩn thận tần số tích lũy của từng nhóm trước khi áp dụng công thức nội suy tứ phân vị.'
    ),
    makeTF(
      p,
      2,
      'Bài 9. Khoảng biến thiên và khoảng tứ phân vị',
      `Thống kê thời gian chờ xe buýt (đơn vị: phút) của $60$ hành khách tại một trạm xe thu được bảng ghép nhóm: $[0; 5)$ có $15$ khách; $[5; 10)$ có $20$ khách; $[10; 15)$ có $10$ khách; $[15; 20)$ có $15$ khách. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Khoảng biến thiên của thời gian chờ xe buýt là $R = 20$ phút.`,
          isCorrect: true,
          exp: `$R = 20 - 0 = 20$ phút.`,
        },
        {
          text: `Tứ phân vị thứ nhất của mẫu số liệu là $Q_1 = 5$ phút.`,
          isCorrect: true,
          exp: `Ta có $\\frac{n}{4} = 15$, bằng đúng tần số của nhóm đầu $[0; 5)$ nên $Q_1 = 0 + \\frac{15 - 0}{15}\\cdot 5 = 5$ phút.`,
        },
        {
          text: `Tứ phân vị thứ ba của mẫu số liệu là $Q_3 = 15$ phút.`,
          isCorrect: true,
          exp: `Ta có $\\frac{3n}{4} = 45$, bằng đúng tần số tích lũy đến hết nhóm thứ ba $[10; 15)$ ($15 + 20 + 10 = 45$) nên $Q_3 = 15$ phút.`,
        },
        {
          text: `Khoảng tứ phân vị của mẫu số liệu là $\\Delta_Q = 12$ phút.`,
          isCorrect: false,
          exp: `Ta có $\\Delta_Q = Q_3 - Q_1 = 15 - 5 = 10$ phút $\\neq 12$ phút.`,
        },
      ],
      'Kiểm tra nhanh: Nếu $\\frac{rn}{4}$ trùng với tần số tích lũy của nhóm $p$ thì $Q_r$ bằng đầu mút phải của nhóm $p$.'
    ),
    makeTF(
      p,
      3,
      'Bài 9. Khoảng biến thiên và khoảng tứ phân vị',
      `So sánh tuổi thọ (giờ) của hai lô bóng đèn LED loại X và loại Y, người ta tính được các số đặc trưng từ mẫu số liệu ghép nhóm như sau: Lô X có $R_X = 1200, Q_1(X) = 8200, Q_3(X) = 8600$; Lô Y có $R_Y = 900, Q_1(Y) = 8100, Q_3(Y) = 8650$. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Khoảng tứ phân vị của lô bóng đèn X là $\\Delta_Q(X) = 400$ giờ.`,
          isCorrect: true,
          exp: `$\\Delta_Q(X) = Q_3(X) - Q_1(X) = 8600 - 8200 = 400$ giờ.`,
        },
        {
          text: `Khoảng tứ phân vị của lô bóng đèn Y là $\\Delta_Q(Y) = 550$ giờ.`,
          isCorrect: true,
          exp: `$\\Delta_Q(Y) = Q_3(Y) - Q_1(Y) = 8650 - 8100 = 550$ giờ.`,
        },
        {
          text: `Nếu xét theo khoảng biến thiên $R$ thì lô Y có độ phân tán nhỏ hơn lô X.`,
          isCorrect: true,
          exp: `Vì $R_Y = 900 < R_X = 1200$.`,
        },
        {
          text: `Nếu xét theo khoảng tứ phân vị $\\Delta_Q$ thì lô Y vẫn có độ phân tán nhỏ hơn lô X.`,
          isCorrect: false,
          exp: `Vì $\\Delta_Q(X) = 400 < \\Delta_Q(Y) = 550$ nên xét theo khoảng tứ phân vị thì lô X đồng đều hơn lô Y.`,
        },
      ],
      'Khoảng biến thiên $R$ có thể lớn do một vài bóng đèn ngoại lệ, trong khi $\\Delta_Q$ phản ánh chính xác hơn độ đồng đều của $50\\%$ sản phẩm ở giữa.'
    ),
  ];

  const part3 = [
    makeSA(
      p,
      1,
      'Bài 9. Khoảng biến thiên và khoảng tứ phân vị',
      `Một mẫu số liệu ghép nhóm gồm các nhóm $[${variant === 1 ? 15 : 25}; 30), [30; 45), [45; 60), [60; ${variant === 1 ? 75 : 85})$. Tính khoảng biến thiên $R$ của mẫu số liệu đó.`,
      ['60'],
      `Khoảng biến thiên $R = ${variant === 1 ? '75 - 15' : '85 - 25'} = 60$.`,
      'Áp dụng công thức $R = a_{k+1} - a_1$.'
    ),
    makeSA(
      p,
      2,
      'Bài 9. Khoảng biến thiên và khoảng tứ phân vị',
      `Cho mẫu số liệu ghép nhóm có cỡ mẫu $n = 40$ với 4 nhóm $[0; 10), [10; 20), [20; 30), [30; 40)$ có tần số lần lượt là $6; 8; 16; 10$. Tính tứ phân vị thứ nhất $Q_1$.`,
      ['15'],
      `Ta có $\\frac{n}{4} = 10$ thuộc nhóm $[10; 20)$ (do $cf_1 = 6 < 10 < cf_2 = 14$). Khi đó $Q_1 = 10 + \\frac{10 - 6}{8}\\cdot 10 = 15$.`,
      'Áp dụng công thức nội suy $Q_1$ trong nhóm $[10; 20)$.'
    ),
    makeSA(
      p,
      3,
      'Bài 9. Khoảng biến thiên và khoảng tứ phân vị',
      `Với cùng bảng số liệu ở Câu 2 (các nhóm $[0; 10), [10; 20), [20; 30), [30; 40)$ có tần số $6; 8; 16; 10$), tính khoảng tứ phân vị $\\Delta_Q$.`,
      ['15'],
      `Ta có $\\frac{3n}{4} = 30$ bằng đúng tần số tích lũy đến hết nhóm $[20; 30)$ ($6 + 8 + 16 = 30$) nên $Q_3 = 30$. Từ Câu 2 có $Q_1 = 15$, suy ra $\\Delta_Q = Q_3 - Q_1 = 30 - 15 = 15$.`,
      'Tính $Q_3$ rồi lấy $Q_3 - Q_1$.'
    ),
    makeSA(
      p,
      4,
      'Bài 9. Khoảng biến thiên và khoảng tứ phân vị',
      `Một mẫu số liệu ghép nhóm có khoảng tứ phân vị $\\Delta_Q = ${variant === 1 ? 18 : 24}$ và tứ phân vị thứ ba $Q_3 = ${variant === 1 ? 50 : 60}$. Tìm tứ phân vị thứ nhất $Q_1$.`,
      [variant === 1 ? '32' : '36'],
      `Từ $\\Delta_Q = Q_3 - Q_1 \\Rightarrow Q_1 = Q_3 - \\Delta_Q = ${variant === 1 ? '50 - 18 = 32' : '60 - 24 = 36'}$.`,
      'Sử dụng hệ thức $Q_1 = Q_3 - \\Delta_Q$.'
    ),
  ];

  const part4 = [
    makeSO(
      p,
      1,
      'Bài 9. Khoảng biến thiên và khoảng tứ phân vị',
      `Cho mẫu số liệu ghép nhóm gồm 4 nhóm $[${a1}; ${a1 + 10}), [${a1 + 10}; ${a1 + 20}), [${a1 + 20}; ${a1 + 30}), [${a1 + 30}; ${a5})$ với tần số lần lượt là $5; 10; 15; 10$. Hãy tính khoảng biến thiên $R$ và khoảng tứ phân vị $\\Delta_Q$ của mẫu số liệu.`,
      `Trình bày đầy đủ các bước tính $R, Q_1, Q_3$ và $\\Delta_Q$.`,
      [
        {
          role: 'Tính cỡ mẫu n và khoảng biến thiên R',
          content: `Cỡ mẫu là $n = 5 + 10 + 15 + 10 = 40$. Khoảng biến thiên là $R = ${a5} - ${a1} = 40$.`,
        },
        {
          role: 'Xác định nhóm chứa Q1 và tính Q1',
          content: `Ta có $\\frac{n}{4} = 10$ nên nhóm chứa $Q_1$ là $[${a1 + 10}; ${a1 + 20})$. Suy ra $Q_1 = ${a1 + 10} + \\frac{10 - 5}{10}\\cdot 10 = ${q1Val}$.`,
        },
        {
          role: 'Xác định nhóm chứa Q3, tính Q3 và kết luận khoảng tứ phân vị',
          content: `Ta có $\\frac{3n}{4} = 30$ nên nhóm chứa $Q_3$ là $[${a1 + 20}; ${a1 + 30})$ với $Q_3 = ${a1 + 20} + \\frac{30 - 15}{15}\\cdot 10 = ${q3Val}$. Vậy $\\Delta_Q = Q_3 - Q_1 = ${deltaQ}$.`,
        },
      ],
      'Lập dòng tần số tích lũy giúp xác định ngay nhóm chứa $Q_1$ và $Q_3$.',
      'Quy trình chuẩn tính các số đặc trưng đo độ phân tán trong Bài 9.',
      0.7
    ),
    makeSO(
      p,
      2,
      'Bài 9. Khoảng biến thiên và khoảng tứ phân vị',
      `Cho mẫu số liệu ghép nhóm về chiều cao (cm) của $32$ học sinh: $[150; 155): 4$, $[155; 160): 8$, $[160; 165): 12$, $[165; 170): 8$. Tính khoảng tứ phân vị $\\Delta_Q$ của mẫu số liệu.`,
      `Tìm $Q_1, Q_3$ và suy ra $\\Delta_Q$.`,
      [
        {
          role: 'Lập tần số tích lũy và tính Q1',
          content: `Cỡ mẫu $n = 32 \\Rightarrow \\frac{n}{4} = 8$. Tần số tích lũy của nhóm $[150; 155)$ là $4$, của nhóm $[155; 160)$ là $12 \\ge 8$ nên $Q_1 = 155 + \\frac{8 - 4}{8}\\cdot 5 = 157,5$.`,
        },
        {
          role: 'Xác định nhóm chứa Q3 và tính Q3',
          content: `Ta có $\\frac{3n}{4} = 24$. Tần số tích lũy đến hết nhóm $[160; 165)$ là $4 + 8 + 12 = 24$ nên $Q_3 = 160 + \\frac{24 - 12}{12}\\cdot 5 = 165$.`,
        },
        {
          role: 'Tính khoảng tứ phân vị Delta_Q',
          content: `Khoảng tứ phân vị của mẫu số liệu là $\\Delta_Q = Q_3 - Q_1 = 165 - 157,5 = 7,5\\text{ (cm)}$.`,
        },
      ],
      'Chú ý độ dài mỗi nhóm trong bài này là $h = 5\\text{ cm}$.',
      'Rèn luyện kỹ năng áp dụng công thức tứ phân vị với độ dài nhóm $h = 5$.',
      0.65
    ),
    makeSO(
      p,
      3,
      'Bài 9. Khoảng biến thiên và khoảng tứ phân vị',
      `Một mẫu số liệu ghép nhóm sau khi tổng hợp có $Q_1 = ${variant === 1 ? 40 : 50}$ và $Q_3 = ${variant === 1 ? 60 : 70}$. Một quan sát có giá trị bằng $${variant === 1 ? 95 : 110}$ trong mẫu có được xem là giá trị ngoại lệ (bất thường) theo tiêu chuẩn $Q_3 + 1,5\\Delta_Q$ hay không?`,
      `Tính ngưỡng ngoại lệ trên $Q_3 + 1,5\\Delta_Q$ và đối chiếu.`,
      [
        {
          role: 'Tính khoảng tứ phân vị Delta_Q',
          content: `Ta có $\\Delta_Q = Q_3 - Q_1 = ${variant === 1 ? '60 - 40' : '70 - 50'} = 20$.`,
        },
        {
          role: 'Tính ngưỡng xác định giá trị ngoại lệ lớn',
          content: `Ngưỡng trên để phát hiện giá trị ngoại lệ là $Q_3 + 1,5\\Delta_Q = ${variant === 1 ? 60 : 70} + 1,5 \\cdot 20 = ${variant === 1 ? 90 : 100}$.`,
        },
        {
          role: 'So sánh và kết luận',
          content: `Vì giá trị quan sát $${variant === 1 ? 95 : 110} > ${variant === 1 ? 90 : 100} = Q_3 + 1,5\\Delta_Q$ nên đây là một giá trị ngoại lệ của mẫu số liệu.`,
        },
      ],
      'Quy tắc phát hiện giá trị ngoại lệ bằng khoảng tứ phân vị: $x > Q_3 + 1,5\\Delta_Q$ hoặc $x < Q_1 - 1,5\\Delta_Q$.',
      'Ứng dụng khoảng tứ phân vị để nhận diện dữ liệu bất thường.',
      0.65
    ),
  ];

  return makeLessonExam(
    `bai-09-de-${variant}`,
    `Bài 9 - Đề ôn số ${variant}`,
    `Bài 9. Khoảng biến thiên và khoảng tứ phân vị (SGK Toán 12 Tập 1)`,
    `Đề ôn số ${variant} - Bài 9: Khoảng biến thiên và khoảng tứ phân vị của mẫu số liệu ghép nhóm (22 câu hỏi chuẩn cấu trúc 4 phần).`,
    part1,
    part2,
    part3,
    part4
  );
}

// BÀI 10. PHƯƠNG SAI VÀ ĐỘ LỆCH CHUẨN (Đề ôn số 1 & Đề ôn số 2)
function buildBai10Exam(variant: 1 | 2): ExamSet {
  const p = variant === 1 ? 'b10-d1' : 'b10-d2';
  // Mẫu đối xứng 3 nhóm có giá trị đại diện cách đều 10 đơn vị:
  // v1: [5; 15): 5, [15; 25): 10, [25; 35): 5 (n = 20)
  // Giá trị đại diện: x1 = 10, x2 = 20, x3 = 30
  // Trung bình: x_bar = 20
  // Phương sai: s^2 = (5*(10-20)^2 + 10*0 + 5*(30-20)^2) / 20 = 1000 / 20 = 50
  // v2: [15; 25): 4, [25; 35): 12, [35; 45): 4 (n = 20)
  // Giá trị đại diện: x1 = 20, x2 = 30, x3 = 40
  // Trung bình: x_bar = 30
  // Phương sai: s^2 = (4*100 + 12*0 + 4*100) / 20 = 800 / 20 = 40
  const meanVal = variant === 1 ? 20 : 30;
  const varVal = variant === 1 ? 50 : 40;

  const part1 = [
    makeMC(
      p,
      1,
      'Bài 10. Phương sai và độ lệch chuẩn',
      `Giá trị đại diện $x_i$ của nhóm $[a_i; a_{i+1})$ trong mẫu số liệu ghép nhóm được tính bằng công thức nào dưới đây?`,
      [
        `$x_i = \\frac{a_i + a_{i+1}}{2}$`,
        `$x_i = a_{i+1} - a_i$`,
        `$x_i = \\frac{a_{i+1} - a_i}{2}$`,
        `$x_i = a_i \\cdot a_{i+1}$`,
      ],
      'A',
      `Giá trị đại diện của nhóm $[a_i; a_{i+1})$ là trung bình cộng hai đầu mút của nhóm: $x_i = \\frac{a_i + a_{i+1}}{2}$.`,
      'Phân biệt giá trị đại diện $x_i = \\frac{a_i + a_{i+1}}{2}$ và độ dài nhóm $h_i = a_{i+1} - a_i$.'
    ),
    makeMC(
      p,
      2,
      'Bài 10. Phương sai và độ lệch chuẩn',
      `Cho mẫu số liệu ghép nhóm gồm 3 nhóm $[${variant === 1 ? 5 : 15}; ${variant === 1 ? 15 : 25})$, $[${variant === 1 ? 15 : 25}; ${variant === 1 ? 25 : 35})$, $[${variant === 1 ? 25 : 35}; ${variant === 1 ? 35 : 45})$ với tần số lần lượt là $${variant === 1 ? 5 : 4}; ${variant === 1 ? 10 : 12}; ${variant === 1 ? 5 : 4}$. Số trung bình $\\bar{x}$ của mẫu số liệu ghép nhóm bằng:`,
      [`$${meanVal}$`, `$${meanVal - 5}$`, `$${meanVal + 5}$`, `$25$`],
      'A',
      `Giá trị đại diện của 3 nhóm là $${meanVal - 10}; ${meanVal}; ${meanVal + 10}$. Số trung bình $\\bar{x} = \\frac{${variant === 1 ? 5 : 4}\\cdot ${meanVal - 10} + ${variant === 1 ? 10 : 12}\\cdot ${meanVal} + ${variant === 1 ? 5 : 4}\\cdot ${meanVal + 10}}{20} = ${meanVal}$.`,
      'Công thức số trung bình ghép nhóm: $\\bar{x} = \\frac{1}{n}(m_1 x_1 + m_2 x_2 + \\dots + m_k x_k)$.'
    ),
    makeMC(
      p,
      3,
      'Bài 10. Phương sai và độ lệch chuẩn',
      `Với cùng mẫu số liệu ghép nhóm ở Câu 2, phương sai $s^2$ của mẫu số liệu bằng:`,
      [`$${varVal}$`, `$${varVal / 2}$`, `$${varVal * 2}$`, `$100$`],
      'A',
      `Ta có $s^2 = \\frac{1}{20}\\left[${variant === 1 ? 5 : 4}(${meanVal - 10} - ${meanVal})^2 + ${variant === 1 ? 10 : 12}(${meanVal} - ${meanVal})^2 + ${variant === 1 ? 5 : 4}(${meanVal + 10} - ${meanVal})^2\\right] = \\frac{${variant === 1 ? 1000 : 800}}{20} = ${varVal}$.`,
      'Công thức phương sai: $s^2 = \\frac{1}{n}\\sum m_i(x_i - \\bar{x})^2$.'
    ),
    makeMC(
      p,
      4,
      'Bài 10. Phương sai và độ lệch chuẩn',
      `Nếu một mẫu số liệu ghép nhóm có phương sai bằng $s^2 = ${variant === 1 ? 36 : 64}$ thì độ lệch chuẩn $s$ của mẫu số liệu đó bằng:`,
      [
        `$${variant === 1 ? 6 : 8}$`,
        `$${variant === 1 ? 18 : 32}$`,
        `$${variant === 1 ? 1296 : 4096}$`,
        `$\\pm ${variant === 1 ? 6 : 8}$`,
      ],
      'A',
      `Độ lệch chuẩn là căn bậc hai số học (không âm) của phương sai: $s = \\sqrt{s^2} = \\sqrt{${variant === 1 ? 36 : 64}} = ${variant === 1 ? 6 : 8}$.`,
      'Độ lệch chuẩn $s = \\sqrt{s^2}$ luôn không âm ($s \\ge 0$) và có cùng đơn vị đo với dữ liệu ban đầu.'
    ),
    makeMC(
      p,
      5,
      'Bài 10. Phương sai và độ lệch chuẩn',
      `Khẳng định nào sau đây là ĐÚNG về mối quan hệ giữa phương sai $s^2$, số trung bình $\\bar{x}$ và các giá trị đại diện $x_i$?`,
      [
        `$s^2 = \\frac{1}{n}\\sum_{i=1}^k m_i x_i^2 - (\\bar{x})^2$`,
        `$s^2 = \\frac{1}{n}\\sum_{i=1}^k m_i x_i^2 + (\\bar{x})^2$`,
        `$s^2 = (\\bar{x})^2 - \\frac{1}{n}\\sum_{i=1}^k m_i x_i^2$`,
        `$s^2 = \\frac{1}{n}\\sum_{i=1}^k m_i (x_i - \\bar{x})$`,
      ],
      'A',
      `Khai triển hằng đẳng thức trong công thức định nghĩa ta có công thức rút gọn: $s^2 = \\frac{1}{n}\\sum_{i=1}^k m_i x_i^2 - (\\bar{x})^2$.`,
      'Công thức rút gọn rất hữu ích khi $\\bar{x}$ là số thập phân: trung bình của bình phương trừ đi bình phương của trung bình.'
    ),
    makeMC(
      p,
      6,
      'Bài 10. Phương sai và độ lệch chuẩn',
      `Độ lệch chuẩn của hai mẫu số liệu ghép nhóm đo khối lượng sản phẩm của hai máy đóng gói A và B lần lượt là $s_A = ${variant === 1 ? 1.2 : 0.8}\\text{ g}$ và $s_B = ${variant === 1 ? 2.5 : 1.9}\\text{ g}$ (biết khối lượng trung bình hai máy như nhau). Kết luận nào sau đây là đúng?`,
      [
        `Máy A đóng gói sản phẩm có khối lượng ổn định (đồng đều) hơn máy B`,
        `Máy B đóng gói sản phẩm có khối lượng ổn định hơn máy A`,
        `Hai máy có độ ổn định như nhau`,
        `Máy B đóng gói sản phẩm nặng hơn máy A`,
      ],
      'A',
      `Vì $s_A < s_B$ nên khối lượng sản phẩm của máy A ít phân tán quanh giá trị trung bình hơn, tức máy A hoạt động ổn định hơn máy B.`,
      'Phương sai và độ lệch chuẩn càng nhỏ thì dữ liệu càng ổn định (ít biến động).'
    ),
    makeMC(
      p,
      7,
      'Bài 10. Phương sai và độ lệch chuẩn',
      `Cho mẫu số liệu ghép nhóm gồm 2 nhóm $[0; 10)$ có tần số $${variant === 1 ? 10 : 15}$ và $[10; 20)$ có tần số $${variant === 1 ? 10 : 15}$. Phương sai $s^2$ của mẫu số liệu này bằng:`,
      ['$25$', '$5$', '$50$', '$10$'],
      'A',
      `Giá trị đại diện là $x_1 = 5, x_2 = 15$. Do hai nhóm có tần số bằng nhau nên $\\bar{x} = 10$. Độ lệch $|x_i - \\bar{x}| = 5$ cho mọi nhóm nên $s^2 = 5^2 = 25$.`,
      'Khi mọi giá trị đại diện đều cách $\\bar{x}$ một khoảng bằng $d$ thì phương sai bằng đúng $d^2$ và độ lệch chuẩn bằng $d$.'
    ),
    makeMC(
      p,
      8,
      'Bài 10. Phương sai và độ lệch chuẩn',
      `Nếu tất cả các quan sát của mẫu số liệu ghép nhóm đều tập trung vào duy nhất một nhóm (các nhóm còn lại có tần số bằng $0$) thì phương sai $s^2$ tính theo công thức mẫu ghép nhóm bằng:`,
      ['$0$', '$1$', 'Bằng độ dài nhóm', 'Bằng giá trị đại diện của nhóm đó'],
      'A',
      `Khi toàn bộ $n$ quan sát thuộc nhóm $p$ thì $\\bar{x} = x_p$, suy ra $x_p - \\bar{x} = 0 \\Rightarrow s^2 = 0$.`,
      'Trong mẫu ghép nhóm, các phần tử trong cùng một nhóm đều được xấp xỉ bởi giá trị đại diện $x_p$ của nhóm đó.'
    ),
    makeMC(
      p,
      9,
      'Bài 10. Phương sai và độ lệch chuẩn',
      `Cho mẫu số liệu ghép nhóm có cỡ mẫu $n = 10$, số trung bình $\\bar{x} = ${variant === 1 ? 6 : 8}$ và $\\sum_{i=1}^k m_i x_i^2 = ${variant === 1 ? 400 : 730}$. Độ lệch chuẩn $s$ của mẫu số liệu bằng:`,
      ['$2$', '$4$', '$3$', '$9$'],
      'A',
      `Áp dụng công thức $s^2 = \\frac{1}{n}\\sum m_i x_i^2 - (\\bar{x})^2 = \\frac{${variant === 1 ? 400 : 730}}{10} - ${variant === 1 ? 36 : 64} = ${variant === 1 ? '4' : '9'}$. Vậy độ lệch chuẩn $s = \\sqrt{s^2}$ bằng $${variant === 1 ? 2 : 3}$.`,
      'Tính $s^2$ trước rồi khai căn bậc hai để tìm độ lệch chuẩn $s$.'
    ),
    makeMC(
      p,
      10,
      'Bài 10. Phương sai và độ lệch chuẩn',
      `Đơn vị đo của phương sai $s^2$ và độ lệch chuẩn $s$ đối với mẫu số liệu ghép nhóm đo chiều cao (đơn vị: $\\text{cm}$) lần lượt là:`,
      [
        `$\\text{cm}^2$ và $\\text{cm}$`,
        `$\\text{cm}$ và $\\text{cm}$`,
        `$\\text{cm}$ và $\\text{cm}^2$`,
        `Cả hai đều không có đơn vị`,
      ],
      'A',
      `Phương sai có đơn vị là bình phương đơn vị của số liệu ($\text{cm}^2$), còn độ lệch chuẩn có cùng đơn vị với số liệu ($\text{cm}$).`,
      'Đó là lý do trong thực tế người ta thường dùng độ lệch chuẩn $s$ để diễn giải cùng đơn vị với số trung bình $\\bar{x}$.'
    ),
    makeMC(
      p,
      11,
      'Bài 10. Phương sai và độ lệch chuẩn',
      `Hai cổ phiếu X và Y có tỉ suất lợi nhuận trung bình hàng năm bằng nhau, nhưng độ lệch chuẩn của tỉ suất lợi nhuận lần lượt là $s_X = 4,5\\%$ và $s_Y = 9,2\\%$. Nhà đầu tư muốn chọn cổ phiếu an toàn hơn (ít rủi ro biến động hơn) thì nên chọn:`,
      [
        `Cổ phiếu X`,
        `Cổ phiếu Y`,
        `Cổ phiếu nào cũng có rủi ro như nhau`,
        `Không thể so sánh bằng độ lệch chuẩn`,
      ],
      'A',
      `Trong tài chính, độ lệch chuẩn đo mức độ rủi ro (biến động) của tỉ suất lợi nhuận. Vì $s_X < s_Y$ nên cổ phiếu X ổn định và ít rủi ro hơn.`,
      'Độ lệch chuẩn nhỏ đồng nghĩa với biến động thấp và độ an toàn cao.'
    ),
    makeMC(
      p,
      12,
      'Bài 10. Phương sai và độ lệch chuẩn',
      `Cho bảng số liệu ghép nhóm có 2 nhóm $[2; 6)$ với tần số $3$ và $[6; 10)$ với tần số $1$. Số trung bình $\\bar{x}$ của mẫu số liệu bằng:`,
      ['$5$', '$6$', '$7$', '$4$'],
      'A',
      `Giá trị đại diện là $x_1 = 4, x_2 = 8$. Cỡ mẫu $n = 4$. Số trung bình $\\bar{x} = \\frac{3\\cdot 4 + 1\\cdot 8}{4} = \\frac{20}{4} = 5$.`,
      'Tính giá trị đại diện $x_1 = 4, x_2 = 8$ trước khi tính trung bình có trọng số.'
    ),
  ];

  // Đồng bộ đáp án câu 9 phần I của đề 2:
  if (variant === 2) {
    part1[8].options = [
      { key: 'A', content: '$3$' },
      { key: 'B', content: '$9$' },
      { key: 'C', content: '$2$' },
      { key: 'D', content: '$4$' },
    ];
  }

  const part2 = [
    makeTF(
      p,
      1,
      'Bài 10. Phương sai và độ lệch chuẩn',
      `Cho mẫu số liệu ghép nhóm về thời gian hoàn thành bài tập (phút) của $20$ học sinh gồm 3 nhóm: $[${variant === 1 ? 5 : 15}; ${variant === 1 ? 15 : 25})$ có $${variant === 1 ? 5 : 4}$ học sinh; $[${variant === 1 ? 15 : 25}; ${variant === 1 ? 25 : 35})$ có $${variant === 1 ? 10 : 12}$ học sinh; $[${variant === 1 ? 25 : 35}; ${variant === 1 ? 35 : 45})$ có $${variant === 1 ? 5 : 4}$ học sinh. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Giá trị đại diện của ba nhóm lần lượt là $${meanVal - 10}; ${meanVal}; ${meanVal + 10}$ (phút).`,
          isCorrect: true,
          exp: `Trung bình cộng hai đầu mút mỗi nhóm cho ta $${meanVal - 10}; ${meanVal}; ${meanVal + 10}$.`,
        },
        {
          text: `Thời gian hoàn thành bài tập trung bình của $20$ học sinh là $\\bar{x} = ${meanVal}$ phút.`,
          isCorrect: true,
          exp: `Do bảng tần số đối xứng quanh nhóm giữa nên $\\bar{x} = ${meanVal}$ phút.`,
        },
        {
          text: `Phương sai của mẫu số liệu ghép nhóm trên là $s^2 = ${varVal}$.`,
          isCorrect: true,
          exp: `Ta có $s^2 = \\frac{${variant === 1 ? 5 : 4}\\cdot (-10)^2 + ${variant === 1 ? 10 : 12}\\cdot 0^2 + ${variant === 1 ? 5 : 4}\\cdot 10^2}{20} = ${varVal}$.`,
        },
        {
          text: `Độ lệch chuẩn của mẫu số liệu ghép nhóm trên bằng $${varVal}$ phút.`,
          isCorrect: false,
          exp: `Độ lệch chuẩn phải là $s = \\sqrt{${varVal}} \\approx ${variant === 1 ? '7,07' : '6,32'}$ phút chứ không phải $${varVal}$ phút.`,
        },
      ],
      'Không nhầm lẫn giữa phương sai $s^2$ và độ lệch chuẩn $s = \\sqrt{s^2}$.'
    ),
    makeTF(
      p,
      2,
      'Bài 10. Phương sai và độ lệch chuẩn',
      `Thống kê năng suất lúa (tạ/ha) của $10$ thửa ruộng thí nghiệm thu được 2 nhóm: $[50; 60)$ có $5$ thửa ruộng và $[60; 70)$ có $5$ thửa ruộng. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Giá trị đại diện của hai nhóm lần lượt là $55$ và $65$ (tạ/ha).`,
          isCorrect: true,
          exp: `$x_1 = \\frac{50+60}{2} = 55$ và $x_2 = \\frac{60+70}{2} = 65$.`,
        },
        {
          text: `Năng suất trung bình của $10$ thửa ruộng là $\\bar{x} = 60$ (tạ/ha).`,
          isCorrect: true,
          exp: `$\\bar{x} = \\frac{5\\cdot 55 + 5\\cdot 65}{10} = 60$ (tạ/ha).`,
        },
        {
          text: `Phương sai của mẫu số liệu ghép nhóm là $s^2 = 25$.`,
          isCorrect: true,
          exp: `$s^2 = \\frac{5(55-60)^2 + 5(65-60)^2}{10} = 25$.`,
        },
        {
          text: `Độ lệch chuẩn của mẫu số liệu ghép nhóm là $s = 5$ (tạ/ha).`,
          isCorrect: true,
          exp: `$s = \\sqrt{25} = 5$ (tạ/ha).`,
        },
      ],
      'Khi hai nhóm có tần số bằng nhau, số trung bình nằm ngay điểm chung giữa hai nhóm.'
    ),
    makeTF(
      p,
      3,
      'Bài 10. Phương sai và độ lệch chuẩn',
      `Theo dõi nhiệt độ trung bình ngày ($^\\circ\\text{C}$) trong $30$ ngày tại hai thành phố M và N, người ta tính được: Thành phố M có $\\bar{x}_M = 26^\\circ\\text{C}, s_M^2 = 4$; Thành phố N có $\\bar{x}_N = 26^\\circ\\text{C}, s_N^2 = 12,25$. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Độ lệch chuẩn về nhiệt độ của thành phố M là $s_M = 2^\\circ\\text{C}$.`,
          isCorrect: true,
          exp: `$s_M = \\sqrt{4} = 2^\\circ\\text{C}$.`,
        },
        {
          text: `Độ lệch chuẩn về nhiệt độ của thành phố N là $s_N = 3,5^\\circ\\text{C}$.`,
          isCorrect: true,
          exp: `$s_N = \\sqrt{12,25} = 3,5^\\circ\\text{C}$.`,
        },
        {
          text: `Nhiệt độ tại thành phố M ổn định, ít biến động hơn so với thành phố N.`,
          isCorrect: true,
          exp: `Vì $s_M = 2 < s_N = 3,5$ nên nhiệt độ thành phố M ít phân tán hơn.`,
        },
        {
          text: `Khoảng biến thiên nhiệt độ của thành phố M chắc chắn bằng $4^\\circ\\text{C}$.`,
          isCorrect: false,
          exp: `$s_M^2 = 4$ là phương sai chứ không phải khoảng biến thiên $R$.`,
        },
      ],
      'Phương sai $s^2$ và độ lệch chuẩn $s$ dùng để so sánh mức độ ổn định giữa hai mẫu số liệu có cùng đơn vị.'
    ),
  ];

  const part3 = [
    makeSA(
      p,
      1,
      'Bài 10. Phương sai và độ lệch chuẩn',
      `Cho mẫu số liệu ghép nhóm gồm 2 nhóm $[10; 20)$ có tần số $${variant === 1 ? 6 : 8}$ và $[20; 30)$ có tần số $${variant === 1 ? 6 : 8}$. Tính độ lệch chuẩn $s$ của mẫu số liệu đó.`,
      ['5'],
      `Giá trị đại diện là $x_1 = 15, x_2 = 25$. Số trung bình $\\bar{x} = 20$. Phương sai $s^2 = (15 - 20)^2 = 25 \\Rightarrow$ độ lệch chuẩn $s = \\sqrt{25} = 5$.`,
      'Tính giá trị đại diện $x_1 = 15, x_2 = 25$ rồi tìm $\\bar{x} = 20, s = 5$.'
    ),
    makeSA(
      p,
      2,
      'Bài 10. Phương sai và độ lệch chuẩn',
      `Cho mẫu số liệu ghép nhóm gồm 3 nhóm $[0; 6), [6; 12), [12; 18)$ có tần số lần lượt là $2; ${variant === 1 ? 4 : 6}; 2$. Tính phương sai $s^2$ của mẫu số liệu.`,
      [variant === 1 ? '18' : '14.4', variant === 1 ? '18' : '14,4'],
      variant === 1
        ? `Giá trị đại diện là $3; 9; 15$. Do đối xứng nên $\\bar{x} = 9$. Phương sai $s^2 = \\frac{2(3-9)^2 + 4(0)^2 + 2(15-9)^2}{8} = \\frac{144}{8} = 18$.`
        : `Giá trị đại diện là $3; 9; 15$. Do đối xứng nên $\\bar{x} = 9$. Phương sai $s^2 = \\frac{2(3-9)^2 + 6(0)^2 + 2(15-9)^2}{10} = \\frac{144}{10} = 14,4$.`,
      'Áp dụng công thức $s^2 = \\frac{1}{n}\\sum m_i(x_i - \\bar{x})^2$.'
    ),
    makeSA(
      p,
      3,
      'Bài 10. Phương sai và độ lệch chuẩn',
      `Một mẫu số liệu ghép nhóm có cỡ mẫu $n = 20$, số trung bình $\\bar{x} = 10$ và $\\sum_{i=1}^k m_i x_i^2 = ${variant === 1 ? 2320 : 2500}$. Tính phương sai $s^2$ của mẫu số liệu.`,
      [variant === 1 ? '16' : '25'],
      `Áp dụng công thức rút gọn: $s^2 = \\frac{1}{n}\\sum m_i x_i^2 - (\\bar{x})^2 = \\frac{${variant === 1 ? 2320 : 2500}}{20} - 10^2 = ${variant === 1 ? '116 - 100 = 16' : '125 - 100 = 25'}$.`,
      'Dùng công thức $s^2 = \\frac{1}{n}\\sum m_i x_i^2 - \\bar{x}^2$.'
    ),
    makeSA(
      p,
      4,
      'Bài 10. Phương sai và độ lệch chuẩn',
      `Với phương sai $s^2 = ${variant === 1 ? 16 : 25}$ vừa tính ở Câu 3, độ lệch chuẩn $s$ của mẫu số liệu bằng bao nhiêu?`,
      [variant === 1 ? '4' : '5'],
      `Ta có $s = \\sqrt{s^2} = \\sqrt{${variant === 1 ? 16 : 25}} = ${variant === 1 ? 4 : 5}$.`,
      'Lấy căn bậc hai số học của phương sai.'
    ),
  ];

  const part4 = [
    makeSO(
      p,
      1,
      'Bài 10. Phương sai và độ lệch chuẩn',
      `Cho mẫu số liệu ghép nhóm gồm 3 nhóm $[${variant === 1 ? 5 : 15}; ${variant === 1 ? 15 : 25})$, $[${variant === 1 ? 15 : 25}; ${variant === 1 ? 25 : 35})$, $[${variant === 1 ? 25 : 35}; ${variant === 1 ? 35 : 45})$ với tần số lần lượt là $${variant === 1 ? 5 : 4}; ${variant === 1 ? 10 : 12}; ${variant === 1 ? 5 : 4}$. Tính số trung bình, phương sai và độ lệch chuẩn của mẫu số liệu.`,
      `Trình bày tuần tự các bước tính giá trị đại diện, $\\bar{x}, s^2$ và $s$.`,
      [
        {
          role: 'Tìm cỡ mẫu và giá trị đại diện của từng nhóm',
          content: `Cỡ mẫu $n = 20$. Giá trị đại diện của 3 nhóm lần lượt là $x_1 = ${meanVal - 10}, x_2 = ${meanVal}, x_3 = ${meanVal + 10}$.`,
        },
        {
          role: 'Tính số trung bình của mẫu số liệu ghép nhóm',
          content: `Số trung bình là $\\bar{x} = \\frac{${variant === 1 ? 5 : 4}\\cdot ${meanVal - 10} + ${variant === 1 ? 10 : 12}\\cdot ${meanVal} + ${variant === 1 ? 5 : 4}\\cdot ${meanVal + 10}}{20} = ${meanVal}$.`,
        },
        {
          role: 'Tính phương sai s^2 và độ lệch chuẩn s',
          content: `Phương sai là $s^2 = \\frac{1}{20}\\left[${variant === 1 ? 5 : 4}(-10)^2 + ${variant === 1 ? 10 : 12}\\cdot 0^2 + ${variant === 1 ? 5 : 4}\\cdot 10^2\\right] = ${varVal}$. Độ lệch chuẩn là $s = \\sqrt{${varVal}} \\approx ${variant === 1 ? '7,07' : '6,32'}$.`,
        },
      ],
      'Bắt buộc phải xác định giá trị đại diện $x_i$ của mỗi nhóm trước khi tính $\\bar{x}$ và $s^2$.',
      'Quy trình chuẩn tính phương sai và độ lệch chuẩn theo SGK Kết nối tri thức.',
      0.7
    ),
    makeSO(
      p,
      2,
      'Bài 10. Phương sai và độ lệch chuẩn',
      `Cho bảng số liệu ghép nhóm có 2 nhóm $[2; 6)$ với tần số $3$ và $[6; 10)$ với tần số $1$. Tính phương sai $s^2$ và độ lệch chuẩn $s$ của mẫu số liệu.`,
      `Xác định giá trị đại diện, tính $\\bar{x}, s^2$ và $s$.`,
      [
        {
          role: 'Tính giá trị đại diện và số trung bình',
          content: `Giá trị đại diện là $x_1 = 4, x_2 = 8$, cỡ mẫu $n = 3 + 1 = 4$. Số trung bình $\\bar{x} = \\frac{3\\cdot 4 + 1\\cdot 8}{4} = 5$.`,
        },
        {
          role: 'Tính phương sai s^2',
          content: `Phương sai của mẫu số liệu là $s^2 = \\frac{3(4 - 5)^2 + 1(8 - 5)^2}{4} = \\frac{3\\cdot 1 + 1\\cdot 9}{4} = 3$.`,
        },
        {
          role: 'Tính độ lệch chuẩn s',
          content: `Độ lệch chuẩn của mẫu số liệu là $s = \\sqrt{3} \\approx 1,73$.`,
        },
      ],
      'Kiểm tra tổng độ lệch có trọng số: $3(4 - 5) + 1(8 - 5) = -3 + 3 = 0$ (luôn bằng $0$).',
      'Kỹ thuật kiểm tra nhanh tính đúng đắn của số trung bình $\\bar{x}$ trước khi tính phương sai.',
      0.65
    ),
    makeSO(
      p,
      3,
      'Bài 10. Phương sai và độ lệch chuẩn',
      `Hai xạ thủ A và B cùng bắn $20$ phát đạn. Điểm số ghép nhóm cho thấy điểm trung bình của hai xạ thủ bằng nhau, tổng bình phương độ lệch so với trung bình của A là $\\sum m_i(x_i - \\bar{x})^2 = 45$ và của B là $\\sum n_i(x_i - \\bar{x})^2 = 80$. Hãy tính độ lệch chuẩn của mỗi xạ thủ và nhận xét ai có phong độ ổn định hơn.`,
      `Tính $s_A, s_B$ và so sánh độ ổn định.`,
      [
        {
          role: 'Tính phương sai và độ lệch chuẩn của xạ thủ A',
          content: `Phương sai của xạ thủ A là $s_A^2 = \\frac{45}{20} = 2,25 \\Rightarrow$ độ lệch chuẩn $s_A = \\sqrt{2,25} = 1,5$.`,
        },
        {
          role: 'Tính phương sai và độ lệch chuẩn của xạ thủ B',
          content: `Phương sai của xạ thủ B là $s_B^2 = \\frac{80}{20} = 4 \\Rightarrow$ độ lệch chuẩn $s_B = \\sqrt{4} = 2$.`,
        },
        {
          role: 'So sánh hai độ lệch chuẩn và kết luận',
          content: `Vì $s_A = 1,5 < s_B = 2$ nên kết quả bắn của xạ thủ A ít phân tán hơn, tức xạ thủ A có phong độ ổn định hơn xạ thủ B.`,
        },
      ],
      'Khi hai mẫu có cùng số trung bình, mẫu nào có độ lệch chuẩn nhỏ hơn thì đồng đều và ổn định hơn.',
      'Ứng dụng thực tế của độ lệch chuẩn trong đánh giá thể thao và chất lượng.',
      0.65
    ),
  ];

  return makeLessonExam(
    `bai-10-de-${variant}`,
    `Bài 10 - Đề ôn số ${variant}`,
    `Bài 10. Phương sai và độ lệch chuẩn (SGK Toán 12 Tập 1)`,
    `Đề ôn số ${variant} - Bài 10: Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm (22 câu hỏi chuẩn cấu trúc 4 phần).`,
    part1,
    part2,
    part3,
    part4
  );
}

// BÀI TẬP CUỐI CHƯƠNG III (Đề ôn số 1 & Đề ôn số 2)
function buildOnTapChuong3Exam(variant: 1 | 2): ExamSet {
  const p = variant === 1 ? 'c3-d1' : 'c3-d2';
  // Bảng số liệu đối xứng 4 nhóm:
  // [10; 20): 5, [20; 30): 15, [30; 40): 15, [40; 50): 5 (cỡ mẫu n = 40)
  // -> R = 50 - 10 = 40
  // -> n/4 = 10 thuộc [20; 30): Q1 = 20 + (10 - 5)/15 * 10 = 23,33
  // Nếu chọn tần số: [10; 20): 10, [20; 30): 10, [30; 40): 10, [40; 50): 10 (n = 40)
  // -> R = 40; Q1 = 20; Q2 = 30; Q3 = 40; Delta_Q = 20
  // -> Giá trị đại diện: 15, 25, 35, 45 -> Trung bình x_bar = 30
  // -> Phương sai s^2 = (10*225 + 10*25 + 10*25 + 10*225)/40 = 5000/40 = 125!
  // Cực kỳ đẹp và tròn trịa! Với variant 2 dịch chuyển các nhóm thêm +10: [20;30), [30;40), [40;50), [50;60)
  const startA = variant === 1 ? 10 : 20;
  const endA = variant === 1 ? 50 : 60;
  const q1 = startA + 10; // v1: 20, v2: 30
  const q3 = startA + 30; // v1: 40, v2: 50
  const meanX = startA + 20; // v1: 30, v2: 40

  const part1 = [
    makeMC(
      p,
      1,
      'Bài tập cuối chương III',
      `Cho mẫu số liệu ghép nhóm gồm 4 nhóm $[${startA}; ${startA + 10}), [${startA + 10}; ${startA + 20}), [${startA + 20}; ${startA + 30}), [${startA + 30}; ${endA})$ với tần số mỗi nhóm đều bằng $10$ (cỡ mẫu $n = 40$). Khoảng biến thiên $R$ của mẫu số liệu bằng:`,
      ['$40$', '$10$', `$${endA}$`, '$20$'],
      'A',
      `Ta có $R = ${endA} - ${startA} = 40$.`,
      'Khoảng biến thiên bằng hiệu hai đầu mút ngoài cùng.'
    ),
    makeMC(
      p,
      2,
      'Bài tập cuối chương III',
      `Với cùng mẫu số liệu ở Câu 1, tứ phân vị thứ nhất $Q_1$ và tứ phân vị thứ ba $Q_3$ lần lượt bằng:`,
      [
        `$Q_1 = ${q1}$ và $Q_3 = ${q3}$`,
        `$Q_1 = ${q1 - 5}$ và $Q_3 = ${q3 + 5}$`,
        `$Q_1 = ${startA}$ và $Q_3 = ${endA}$`,
        `$Q_1 = ${q1 + 5}$ và $Q_3 = ${q3 - 5}$`,
      ],
      'A',
      `Cỡ mẫu $n = 40 \\Rightarrow \\frac{n}{4} = 10$ (bằng đúng tần số nhóm đầu) nên $Q_1 = ${q1}$; $\\frac{3n}{4} = 30$ (bằng đúng tần số tích lũy nhóm thứ ba) nên $Q_3 = ${q3}$.`,
      'Áp dụng công thức tứ phân vị của mẫu số liệu ghép nhóm.'
    ),
    makeMC(
      p,
      3,
      'Bài tập cuối chương III',
      `Khoảng tứ phân vị $\\Delta_Q$ của mẫu số liệu ở Câu 1 bằng:`,
      ['$20$', '$40$', '$10$', '$30$'],
      'A',
      `Ta có $\\Delta_Q = Q_3 - Q_1 = ${q3} - ${q1} = 20$.`,
      'Công thức: $\\Delta_Q = Q_3 - Q_1$.'
    ),
    makeMC(
      p,
      4,
      'Bài tập cuối chương III',
      `Số trung bình $\\bar{x}$ của mẫu số liệu ở Câu 1 bằng:`,
      [`$${meanX}$`, `$${meanX - 5}$`, `$${meanX + 5}$`, `$25$`],
      'A',
      `Giá trị đại diện của 4 nhóm là $${startA + 5}; ${startA + 15}; ${startA + 25}; ${startA + 35}$. Với các tần số đều bằng $10$, số trung bình là $\\bar{x} = ${meanX}$.`,
      'Khi các nhóm có độ dài bằng nhau và tần số đối xứng, số trung bình nằm chính giữa bảng số liệu.'
    ),
    makeMC(
      p,
      5,
      'Bài tập cuối chương III',
      `Phương sai $s^2$ của mẫu số liệu ở Câu 1 bằng:`,
      ['$125$', '$100$', '$25$', '$50$'],
      'A',
      `Độ lệch của 4 giá trị đại diện so với $\\bar{x} = ${meanX}$ lần lượt là $-15; -5; 5; 15$. Do đó $s^2 = \\frac{10(225 + 25 + 25 + 225)}{40} = \\frac{5000}{40} = 125$.`,
      'Khi dịch chuyển tất cả các nhóm đi cùng một hằng số $c$ thì số trung bình tăng thêm $c$ nhưng phương sai không đổi!'
    ),
    makeMC(
      p,
      6,
      'Bài tập cuối chương III',
      `Số đặc trưng nào dưới đây KHÔNG dùng để đo mức độ phân tán của mẫu số liệu ghép nhóm?`,
      [
        `Số trung bình cộng $\\bar{x}$`,
        `Khoảng biến thiên $R$`,
        `Khoảng tứ phân vị $\\Delta_Q$`,
        `Độ lệch chuẩn $s$`,
      ],
      'A',
      `Số trung bình cộng $\\bar{x}$ là số đặc trưng đo xu thế trung tâm, còn $R, \\Delta_Q, s^2, s$ là các số đặc trưng đo mức độ phân tán.`,
      'Phân biệt hai nhóm số đặc trưng: đo xu thế trung tâm ($\\bar{x}, M_e, M_o$) và đo mức độ phân tán ($R, \\Delta_Q, s^2, s$).'
    ),
    makeMC(
      p,
      7,
      'Bài tập cuối chương III',
      `Trong các số đặc trưng đo mức độ phân tán của mẫu số liệu ghép nhóm, số đặc trưng nào phản ánh sự biến thiên của tất cả các giá trị đại diện quanh số trung bình?`,
      [
        `Phương sai $s^2$ và độ lệch chuẩn $s$`,
        `Khoảng biến thiên $R$`,
        `Tứ phân vị thứ nhất $Q_1$`,
        `Mốt $M_o$`,
      ],
      'A',
      `Phương sai $s^2$ và độ lệch chuẩn $s$ tính đến tần số và độ lệch $(x_i - \\bar{x})$ của tất cả các nhóm trong mẫu số liệu.`,
      'Phương sai và độ lệch chuẩn sử dụng toàn bộ thông tin tần số của mọi nhóm.'
    ),
    makeMC(
      p,
      8,
      'Bài tập cuối chương III',
      `Cho mẫu số liệu ghép nhóm có phương sai $s^2 = ${variant === 1 ? 2.25 : 6.25}$. Độ lệch chuẩn $s$ của mẫu số liệu đó bằng:`,
      [
        `$${variant === 1 ? '1,5' : '2,5'}$`,
        `$${variant === 1 ? '0,15' : '0,25'}$`,
        `$${variant === 1 ? '4,5' : '12,5'}$`,
        `$${variant === 1 ? '5,0625' : '39,0625'}$`,
      ],
      'A',
      `Ta có $s = \\sqrt{s^2} = \\sqrt{${variant === 1 ? '2,25' : '6,25'}} = ${variant === 1 ? '1,5' : '2,5'}$.`,
      'Khai căn bậc hai của phương sai.'
    ),
    makeMC(
      p,
      9,
      'Bài tập cuối chương III',
      `Cho mẫu số liệu ghép nhóm có nhóm chứa tứ phân vị thứ nhất là $[20; 30)$ với tần số $m_p = 8$, cỡ mẫu $n = 32$ và tần số tích lũy của nhóm đứng trước nó là $cf_{p-1} = 4$. Giá trị $Q_1$ bằng:`,
      ['$25$', '$22,5$', '$27,5$', '$24$'],
      'A',
      `Ta có $\\frac{n}{4} = 8$. Áp dụng công thức: $Q_1 = 20 + \\frac{8 - 4}{8}\\cdot 10 = 25$.`,
      'Thay đúng các đại lượng vào công thức nội suy tứ phân vị.'
    ),
    makeMC(
      p,
      10,
      'Bài tập cuối chương III',
      `Nếu nhân tất cả các đầu mút của mọi nhóm trong mẫu số liệu ghép nhóm với $2$ (giữ nguyên tần số các nhóm) thì khoảng biến thiên $R$ và độ lệch chuẩn $s$ sẽ thay đổi như thế nào?`,
      [
        `Cả khoảng biến thiên $R$ và độ lệch chuẩn $s$ đều tăng gấp $2$ lần`,
        `$R$ tăng gấp $2$ lần, còn $s$ tăng gấp $4$ lần`,
        `Cả $R$ và $s$ đều không đổi`,
        `$R$ không đổi, còn $s$ tăng gấp $2$ lần`,
      ],
      'A',
      `Khi nhân các đầu mút với $k > 0$, khoảng biến thiên $R$ nhân với $k$, phương sai $s^2$ nhân với $k^2$, và độ lệch chuẩn $s = \\sqrt{s^2}$ nhân với $k$.`,
      'Tính chất tỉ lệ: $R, \\Delta_Q, \\bar{x}, s$ tỉ lệ bậc nhất với $k$, riêng phương sai $s^2$ tỉ lệ với $k^2$.'
    ),
    makeMC(
      p,
      11,
      'Bài tập cuối chương III',
      `Cho mẫu số liệu ghép nhóm gồm 2 nhóm $[10; 30)$ có tần số $6$ và $[30; 50)$ có tần số $4$. Số trung bình $\\bar{x}$ của mẫu số liệu bằng:`,
      ['$28$', '$30$', '$26$', '$32$'],
      'A',
      `Giá trị đại diện là $x_1 = 20, x_2 = 40$, cỡ mẫu $n = 10$. Suy ra $\\bar{x} = \\frac{6\\cdot 20 + 4\\cdot 40}{10} = \\frac{280}{10} = 28$.`,
      'Tính giá trị đại diện $x_1 = 20, x_2 = 40$ rồi tính trung bình có trọng số.'
    ),
    makeMC(
      p,
      12,
      'Bài tập cuối chương III',
      `Với cùng mẫu số liệu ở Câu 11 ($[10; 30)$ có tần số $6$, $[30; 50)$ có tần số $4$), phương sai $s^2$ của mẫu số liệu bằng:`,
      ['$96$', '$100$', '$64$', '$48$'],
      'A',
      `Với $\\bar{x} = 28$, ta có $s^2 = \\frac{6(20 - 28)^2 + 4(40 - 28)^2}{10} = \\frac{6\\cdot 64 + 4\\cdot 144}{10} = \\frac{384 + 576}{10} = 96$.`,
      'Áp dụng công thức định nghĩa hoặc công thức rút gọn $s^2 = \\frac{6\\cdot 400 + 4\\cdot 1600}{10} - 28^2 = 880 - 784 = 96$.'
    ),
  ];

  const part2 = [
    makeTF(
      p,
      1,
      'Bài tập cuối chương III',
      `Thống kê điểm kiểm tra môn Toán (thang điểm 10) của $40$ học sinh lớp 12A thu được bảng ghép nhóm: $[4; 6)$ có $8$ học sinh; $[6; 8)$ có $24$ học sinh; $[8; 10)$ có $8$ học sinh. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Khoảng biến thiên của mẫu số liệu ghép nhóm trên là $R = 6$.`,
          isCorrect: true,
          exp: `$R = 10 - 4 = 6$.`,
        },
        {
          text: `Điểm trung bình của $40$ học sinh là $\\bar{x} = 7,0$.`,
          isCorrect: true,
          exp: `Giá trị đại diện là $5; 7; 9$. Vì tần số đối xứng ($8; 24; 8$) nên $\\bar{x} = 7,0$.`,
        },
        {
          text: `Phương sai của mẫu số liệu ghép nhóm trên là $s^2 = 1,6$.`,
          isCorrect: true,
          exp: `$s^2 = \\frac{8(5-7)^2 + 24(7-7)^2 + 8(9-7)^2}{40} = \\frac{64}{40} = 1,6$.`,
        },
        {
          text: `Khoảng tứ phân vị của mẫu số liệu ghép nhóm trên là $\\Delta_Q = 2,0$.`,
          isCorrect: false,
          exp: `Ta có $\\frac{n}{4} = 10 \\Rightarrow Q_1 = 6 + \\frac{10-8}{24}\\cdot 2 = \\frac{37}{6}$, $\\frac{3n}{4} = 30 \\Rightarrow Q_3 = 6 + \\frac{30-8}{24}\\cdot 2 = \\frac{47}{6}$. Suy ra $\\Delta_Q = \\frac{10}{6} = \\frac{5}{3} \\approx 1,67 \\neq 2,0$.`,
        },
      ],
      'Kiểm tra kỹ công thức nội suy $Q_1, Q_3$ khi cả hai cùng nằm trong nhóm trung tâm $[6; 8)$.'
    ),
    makeTF(
      p,
      2,
      'Bài tập cuối chương III',
      `Khảo sát cân nặng (kg) của $20$ vận động viên thu được 2 nhóm: $[50; 60)$ có $12$ người và $[60; 70)$ có $8$ người. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Giá trị đại diện của hai nhóm lần lượt là $55\\text{ kg}$ và $65\\text{ kg}$.`,
          isCorrect: true,
          exp: `Trung điểm của $[50; 60)$ là $55$ và của $[60; 70)$ là $65$.`,
        },
        {
          text: `Cân nặng trung bình của $20$ vận động viên là $\\bar{x} = 59\\text{ kg}$.`,
          isCorrect: true,
          exp: `$\\bar{x} = \\frac{12\\cdot 55 + 8\\cdot 65}{20} = \\frac{1180}{20} = 59\\text{ kg}$.`,
        },
        {
          text: `Phương sai của mẫu số liệu ghép nhóm là $s^2 = 24$.`,
          isCorrect: true,
          exp: `$s^2 = \\frac{12(55 - 59)^2 + 8(65 - 59)^2}{20} = \\frac{192 + 288}{20} = 24$.`,
        },
        {
          text: `Tứ phân vị thứ nhất của mẫu số liệu là $Q_1 = 55\\text{ kg}$.`,
          isCorrect: false,
          exp: `Ta có $\\frac{n}{4} = 5$ thuộc nhóm $[50; 60)$ nên $Q_1 = 50 + \\frac{5}{12}\\cdot 10 \\approx 54,17\\text{ kg} \\neq 55\\text{ kg}$.`,
        },
      ],
      'Phân biệt giá trị đại diện $x_1 = 55$ và tứ phân vị thứ nhất $Q_1$.'
    ),
    makeTF(
      p,
      3,
      'Bài tập cuối chương III',
      `Để đánh giá độ chính xác của hai thiết bị đo khoảng cách laser M1 và M2, kỹ sư đo $50$ lần cùng một khoảng cách và thu được từ mẫu ghép nhóm: Thiết bị M1 có $\\Delta_Q(M_1) = 1,2\\text{ mm}, s_{M_1} = 0,8\\text{ mm}$; Thiết bị M2 có $\\Delta_Q(M_2) = 2,1\\text{ mm}, s_{M_2} = 1,5\\text{ mm}$. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Phương sai của kết quả đo trên thiết bị M1 là $s_{M_1}^2 = 0,64\\text{ mm}^2$.`,
          isCorrect: true,
          exp: `$s_{M_1}^2 = (0,8)^2 = 0,64\\text{ mm}^2$.`,
        },
        {
          text: `Phương sai của kết quả đo trên thiết bị M2 là $s_{M_2}^2 = 2,25\\text{ mm}^2$.`,
          isCorrect: true,
          exp: `$s_{M_2}^2 = (1,5)^2 = 2,25\\text{ mm}^2$.`,
        },
        {
          text: `Cả hai tiêu chí khoảng tứ phân vị $\\Delta_Q$ và độ lệch chuẩn $s$ đều cho thấy thiết bị M1 có độ ổn định cao hơn thiết bị M2.`,
          isCorrect: true,
          exp: `Vì $\\Delta_Q(M_1) < \\Delta_Q(M_2)$ và $s_{M_1} < s_{M_2}$ nên số liệu của M1 tập trung hơn.`,
        },
        {
          text: `Nếu cộng thêm $100\\text{ mm}$ vào tất cả các kết quả đo của thiết bị M1 thì độ lệch chuẩn $s_{M_1}$ sẽ tăng thêm $100\\text{ mm}$.`,
          isCorrect: false,
          exp: `Khi cộng cùng một hằng số vào mọi số liệu, độ phân tán không thay đổi nên độ lệch chuẩn $s_{M_1}$ vẫn bằng $0,8\\text{ mm}$.`,
        },
      ],
      'Phép tịnh tiến dữ liệu (cộng/trừ hằng số $c$) làm thay đổi số trung bình $\\bar{x}$ nhưng giữ nguyên $R, \\Delta_Q, s^2, s$.'
    ),
  ];

  const part3 = [
    makeSA(
      p,
      1,
      'Bài tập cuối chương III',
      `Cho mẫu số liệu ghép nhóm gồm 3 nhóm $[10; 20), [20; 30), [30; 40)$ với tần số lần lượt là $5; 10; 5$. Tính khoảng tứ phân vị $\\Delta_Q$ của mẫu số liệu.`,
      ['10'],
      `Cỡ mẫu $n = 20 \\Rightarrow \\frac{n}{4} = 5 \\Rightarrow Q_1 = 20$. Mặt khác $\\frac{3n}{4} = 15$ (tần số tích lũy hết nhóm 2 là $15$) $\\Rightarrow Q_3 = 30$. Vậy $\\Delta_Q = 30 - 20 = 10$.`,
      'Tìm $Q_1 = 20$ và $Q_3 = 30$ rồi trừ cho nhau.'
    ),
    makeSA(
      p,
      2,
      'Bài tập cuối chương III',
      `Với cùng mẫu số liệu ở Câu 1 ($[10; 20): 5, [20; 30): 10, [30; 40): 5$), tính phương sai $s^2$ của mẫu số liệu.`,
      ['50'],
      `Giá trị đại diện là $15; 25; 35$, số trung bình $\\bar{x} = 25$. Phương sai $s^2 = \\frac{5(-10)^2 + 10(0)^2 + 5(10)^2}{20} = \\frac{1000}{20} = 50$.`,
      'Tính giá trị đại diện $15; 25; 35$ rồi áp dụng công thức phương sai.'
    ),
    makeSA(
      p,
      3,
      'Bài tập cuối chương III',
      `Một mẫu số liệu ghép nhóm có phương sai $s^2 = ${variant === 1 ? 1.44 : 3.24}$. Tính độ lệch chuẩn $s$ của mẫu số liệu đó.`,
      [variant === 1 ? '1.2' : '1.8', variant === 1 ? '1,2' : '1,8'],
      `Độ lệch chuẩn $s = \\sqrt{s^2} = \\sqrt{${variant === 1 ? '1,44' : '3,24'}} = ${variant === 1 ? '1,2' : '1,8'}$.`,
      'Lấy căn bậc hai của phương sai.'
    ),
    makeSA(
      p,
      4,
      'Bài tập cuối chương III',
      `Cho mẫu số liệu ghép nhóm gồm các nhóm $[${variant === 1 ? 12 : 18}; 30), [30; 45), [45; ${variant === 1 ? 62 : 68})$. Tính khoảng biến thiên $R$ của mẫu số liệu.`,
      ['50'],
      `Khoảng biến thiên $R = ${variant === 1 ? '62 - 12' : '68 - 18'} = 50$.`,
      'Lấy đầu mút phải cuối cùng trừ đầu mút trái đầu tiên.'
    ),
  ];

  const part4 = [
    makeSO(
      p,
      1,
      'Bài tập cuối chương III',
      `Cho mẫu số liệu ghép nhóm gồm 4 nhóm $[${startA}; ${startA + 10}), [${startA + 10}; ${startA + 20}), [${startA + 20}; ${startA + 30}), [${startA + 30}; ${endA})$ với tần số mỗi nhóm đều bằng $10$. Tính khoảng biến thiên $R$, khoảng tứ phân vị $\\Delta_Q$ và phương sai $s^2$.`,
      `Tổng hợp đầy đủ các bước tính các số đặc trưng đo độ phân tán của Chương III.`,
      [
        {
          role: 'Tính cỡ mẫu n và khoảng biến thiên R',
          content: `Cỡ mẫu $n = 40$. Khoảng biến thiên là $R = ${endA} - ${startA} = 40$.`,
        },
        {
          role: 'Tính hai tứ phân vị Q1, Q3 và khoảng tứ phân vị Delta_Q',
          content: `Vì $\\frac{n}{4} = 10$ và $\\frac{3n}{4} = 30$ nên $Q_1 = ${q1}, Q_3 = ${q3} \\Rightarrow \\Delta_Q = Q_3 - Q_1 = 20$.`,
        },
        {
          role: 'Tính số trung bình và phương sai s^2',
          content: `Các giá trị đại diện là $${startA + 5}; ${startA + 15}; ${startA + 25}; ${startA + 35}$, suy ra $\\bar{x} = ${meanX}$ và phương sai $s^2 = \\frac{10(225 + 25 + 25 + 225)}{40} = 125$.`,
        },
      ],
      'Bài toán tổng hợp toàn bộ công thức trọng tâm của Chương III.',
      'Ôn tập đồng thời Bài 9 và Bài 10 trên cùng một bảng tần số ghép nhóm.',
      0.7
    ),
    makeSO(
      p,
      2,
      'Bài tập cuối chương III',
      `Cho mẫu số liệu ghép nhóm gồm 2 nhóm $[10; 30)$ với tần số $6$ và $[30; 50)$ với tần số $4$. Tính số trung bình $\\bar{x}$, phương sai $s^2$ và độ lệch chuẩn $s$.`,
      `Trình bày chi tiết phép tính theo công thức định nghĩa.`,
      [
        {
          role: 'Xác định giá trị đại diện và tính số trung bình',
          content: `Cỡ mẫu $n = 10$. Giá trị đại diện hai nhóm là $x_1 = 20, x_2 = 40$. Số trung bình $\\bar{x} = \\frac{6\\cdot 20 + 4\\cdot 40}{10} = 28$.`,
        },
        {
          role: 'Tính phương sai s^2 của mẫu số liệu',
          content: `Phương sai là $s^2 = \\frac{6(20 - 28)^2 + 4(40 - 28)^2}{10} = \\frac{384 + 576}{10} = 96$.`,
        },
        {
          role: 'Tính độ lệch chuẩn s',
          content: `Độ lệch chuẩn của mẫu số liệu là $s = \\sqrt{96} = 4\\sqrt{6} \\approx 9,80$.`,
        },
      ],
      'Có thể kiểm tra lại bằng công thức $s^2 = \\frac{1}{n}\\sum m_i x_i^2 - \\bar{x}^2 = 880 - 784 = 96$.',
      'Rèn luyện tính toán chính xác phương sai và độ lệch chuẩn.',
      0.65
    ),
    makeSO(
      p,
      3,
      'Bài tập cuối chương III',
      `Cho mẫu số liệu ghép nhóm có 3 nhóm $[0; 10), [10; 20), [20; 30)$ với tần số lần lượt là $5; 10; 5$. Chứng minh rằng khoảng tứ phân vị $\\Delta_Q$ lớn hơn độ lệch chuẩn $s$ của mẫu số liệu này.`,
      `Tính $\\Delta_Q$ và $s$, sau đó so sánh hai giá trị.`,
      [
        {
          role: 'Tính tứ phân vị Q1, Q3 và khoảng tứ phân vị Delta_Q',
          content: `Cỡ mẫu $n = 20$. Vì $\\frac{n}{4} = 5$ nên $Q_1 = 10$; vì $\\frac{3n}{4} = 15$ nên $Q_3 = 20$. Suy ra $\\Delta_Q = 20 - 10 = 10$.`,
        },
        {
          role: 'Tính số trung bình, phương sai và độ lệch chuẩn s',
          content: `Giá trị đại diện là $5; 15; 25 \\Rightarrow \\bar{x} = 15$. Phương sai $s^2 = \\frac{5(-10)^2 + 10(0)^2 + 5(10)^2}{20} = 50 \\Rightarrow s = \\sqrt{50} = 5\\sqrt{2} \\approx 7,07$.`,
        },
        {
          role: 'So sánh và kết luận',
          content: `Vì $\\Delta_Q = 10 = \\sqrt{100} > \\sqrt{50} = s$ nên khoảng tứ phân vị lớn hơn độ lệch chuẩn của mẫu số liệu.`,
        },
      ],
      'Đưa hai số về dạng căn bậc hai ($10 = \\sqrt{100} > \\sqrt{50}$) giúp so sánh chính xác không cần máy tính.',
      'Kết nối toàn diện kiến thức Chương III.',
      0.65
    ),
  ];

  return makeLessonExam(
    `chuong-03-ontap-de-${variant}`,
    `Ôn tập Chương III - Đề ôn số ${variant}`,
    `Bài tập cuối chương III (SGK Toán 12 Tập 1)`,
    `Đề ôn số ${variant} - Bài tập cuối chương III: Tổng hợp Các số đặc trưng đo mức độ phân tán của mẫu số liệu ghép nhóm (22 câu hỏi chuẩn cấu trúc 4 phần).`,
    part1,
    part2,
    part3,
    part4
  );
}

export const CHAPTER_3_LESSONS: LessonInfo[] = [
  {
    id: 'bai-09',
    code: 'Bài 9',
    title: 'Khoảng biến thiên và khoảng tứ phân vị',
    fullName: 'Bài 9. Khoảng biến thiên và khoảng tứ phân vị',
    chapterId: 'chuong-3',
    chapterTitle: 'CHƯƠNG III. CÁC SỐ ĐẶC TRƯNG ĐO MỨC ĐỘ PHÂN TÁN CỦA MẪU SỐ LIỆU GHÉP NHÓM',
    pageNumber: 75,
    coreTopics: [
      'Khoảng biến thiên R = a_{k+1} - a_1 của mẫu số liệu ghép nhóm',
      'Tứ phân vị Q1, Q2, Q3 và khoảng tứ phân vị Delta_Q = Q3 - Q1',
      'Ý nghĩa của khoảng tứ phân vị và nhận diện giá trị ngoại lệ',
    ],
    practiceExams: [buildBai9Exam(1), buildBai9Exam(2)],
  },
  {
    id: 'bai-10',
    code: 'Bài 10',
    title: 'Phương sai và độ lệch chuẩn',
    fullName: 'Bài 10. Phương sai và độ lệch chuẩn',
    chapterId: 'chuong-3',
    chapterTitle: 'CHƯƠNG III. CÁC SỐ ĐẶC TRƯNG ĐO MỨC ĐỘ PHÂN TÁN CỦA MẪU SỐ LIỆU GHÉP NHÓM',
    pageNumber: 80,
    coreTopics: [
      'Giá trị đại diện của nhóm và số trung bình của mẫu số liệu ghép nhóm',
      'Công thức tính phương sai s^2 và độ lệch chuẩn s',
      'Ứng dụng phương sai và độ lệch chuẩn để đánh giá độ ổn định, rủi ro',
    ],
    practiceExams: [buildBai10Exam(1), buildBai10Exam(2)],
  },
  {
    id: 'ontap-chuong-3',
    code: 'Ôn tập Chương III',
    title: 'Bài tập cuối chương III',
    fullName: 'Bài tập cuối chương III',
    chapterId: 'chuong-3',
    chapterTitle: 'CHƯƠNG III. CÁC SỐ ĐẶC TRƯNG ĐO MỨC ĐỘ PHÂN TÁN CỦA MẪU SỐ LIỆU GHÉP NHÓM',
    pageNumber: 85,
    coreTopics: [
      'Tổng hợp khoảng biến thiên R và khoảng tứ phân vị Delta_Q',
      'Tổng hợp phương sai s^2 và độ lệch chuẩn s của mẫu số liệu ghép nhóm',
      'Phân tích và so sánh mức độ phân tán của các mẫu số liệu thực tế',
    ],
    practiceExams: [buildOnTapChuong3Exam(1), buildOnTapChuong3Exam(2)],
  },
];
