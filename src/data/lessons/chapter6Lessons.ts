import { LessonInfo } from './types';
import { makeMC, makeTF, makeSA, makeSO, makeLessonExam } from './helpers';

// ============================================================================
// BÀI 18: XÁC SUẤT CÓ ĐIỀU KIỆN (SGK Toán 12 Tập 2 - Kết nối tri thức - Trang 64)
// ============================================================================

const bai18De1 = makeLessonExam(
  'bai18-de01',
  'Bài 18 - Đề ôn số 1',
  'Xác suất có điều kiện: Định nghĩa, công thức nhân xác suất và sơ đồ hình cây',
  'Đề ôn tập Bài 18 (Số 1) bám sát yêu cầu cần đạt SGK Toán 12 Tập 2 Kết nối tri thức: Định nghĩa xác suất có điều kiện P(A|B), mối liên hệ với biến cố độc lập, bảng dữ liệu thống kê 2x2, công thức nhân xác suất P(AB) = P(A)P(B|A) và sơ đồ hình cây.',
  [
    makeMC(
      'b18d1',
      1,
      'Định nghĩa và công thức tính xác suất có điều kiện',
      'Cho hai biến cố $A$ và $B$, với $P(B) > 0$. Xác suất của biến cố $A$ với điều kiện biến cố $B$ đã xảy ra, ký hiệu là $P(A|B)$, được tính theo công thức:',
      [
        '$P(A|B) = \\frac{P(AB)}{P(B)}$',
        '$P(A|B) = \\frac{P(AB)}{P(A)}$',
        '$P(A|B) = P(A) \\cdot P(B)$',
        '$P(A|B) = \\frac{P(A)}{P(B)}$',
      ],
      'A',
      'Theo định nghĩa trong SGK: Với $P(B) > 0$, xác suất có điều kiện của $A$ khi biết $B$ đã xảy ra là $P(A|B) = \\frac{P(AB)}{P(B)}$.',
      'Ghi nhớ quy tắc mẫu số: Biến cố đứng sau dấu gạch đứng "$|$" (biến cố điều kiện) luôn nằm ở dưới mẫu số.'
    ),
    makeMC(
      'b18d1',
      2,
      'Tính xác suất có điều kiện từ xác suất giao',
      'Cho hai biến cố $A$ và $B$ có $P(A) = 0{,}5$; $P(B) = 0{,}6$ và $P(AB) = 0{,}3$. Khi đó xác suất có điều kiện $P(A|B)$ bằng:',
      [
        '$0{,}5$',
        '$0{,}6$',
        '$0{,}18$',
        '$0{,}8$',
      ],
      'A',
      'Áp dụng công thức $P(A|B) = \\frac{P(AB)}{P(B)} = \\frac{0{,}3}{0{,}6} = 0{,}5$.',
      'Nhận xét thêm: vì $P(A|B) = 0{,}5 = P(A)$ nên hai biến cố $A$ và $B$ độc lập.'
    ),
    makeMC(
      'b18d1',
      3,
      'Công thức nhân xác suất cho hai biến cố bất kỳ',
      'Với hai biến cố $A$ và $B$ bất kỳ có $P(A) > 0, P(B) > 0$, công thức nhân xác suất nào dưới đây là đúng?',
      [
        '$P(AB) = P(A) \\cdot P(B|A)$',
        '$P(AB) = P(A) + P(B|A)$',
        '$P(AB) = \\frac{P(B|A)}{P(A)}$',
        '$P(AB) = P(A|B) \\cdot P(A)$',
      ],
      'A',
      'Từ định nghĩa xác suất có điều kiện, ta suy ra công thức nhân xác suất: $P(AB) = P(A)P(B|A) = P(B)P(A|B)$.',
      'Công thức nhân xác suất dùng để tính xác suất cả hai biến cố cùng xảy ra theo trình tự.',
      'sp_prob_tree_bayes'
    ),
    makeMC(
      'b18d1',
      4,
      'Tính xác suất giao bằng công thức nhân xác suất',
      'Cho hai biến cố $A$ và $B$ thỏa mãn $P(A) = 0{,}4$ và $P(B|A) = 0{,}7$. Xác suất của biến cố giao $AB$ bằng:',
      [
        '$0{,}28$',
        '$0{,}11$',
        '$\\frac{4}{7}$',
        '$0{,}42$',
      ],
      'A',
      'Áp dụng công thức nhân xác suất: $P(AB) = P(A) \\cdot P(B|A) = 0{,}4 \\times 0{,}7 = 0{,}28$.',
      'Nhân xác suất nhánh thứ nhất $P(A)$ với xác suất có điều kiện nhánh thứ hai $P(B|A)$.'
    ),
    makeMC(
      'b18d1',
      5,
      'Xác suất có điều kiện của hai biến cố độc lập',
      'Cho hai biến cố $A$ và $B$ độc lập với nhau, biết $P(A) = 0{,}35$ và $P(B) = 0{,}8$. Giá trị của $P(A|B)$ bằng:',
      [
        '$0{,}35$',
        '$0{,}8$',
        '$0{,}28$',
        '$0{,}4375$',
      ],
      'A',
      'Khi hai biến cố $A$ và $B$ độc lập thì việc $B$ xảy ra hay không không ảnh hưởng tới xác suất của $A$: $P(A|B) = P(A) = 0{,}35$.',
      'Hai biến cố $A, B$ độc lập $\\Leftrightarrow P(A|B) = P(A) = P(A|\\overline{B})$.'
    ),
    makeMC(
      'b18d1',
      6,
      'Tính chất biến cố đối trong xác suất có điều kiện',
      'Cho hai biến cố $A$ và $B$ với $P(B) > 0$. Nếu $P(A|B) = 0{,}65$ thì $P(\\overline{A}|B)$ bằng:',
      [
        '$0{,}35$',
        '$0{,}65$',
        '$0{,}45$',
        '$0{,}25$',
      ],
      'A',
      'Với cùng một điều kiện $B$ đã xảy ra, ta luôn có $P(\\overline{A}|B) = 1 - P(A|B) = 1 - 0{,}65 = 0{,}35$.',
      'Lưu ý: $P(\\overline{A}|B) + P(A|B) = 1$, nhưng $P(A|\\overline{B}) + P(A|B)$ nói chung KHÔNG bằng $1$.',
      'sp_prob_tree_bayes'
    ),
    makeMC(
      'b18d1',
      7,
      'Xác suất có điều kiện khi gieo xúc xắc',
      'Gieo một con xúc xắc cân đối và đồng chất một lần. Tính xác suất để xuất hiện mặt $6$ chấm, biết rằng con xúc xắc đã xuất hiện mặt có số chấm chẵn.',
      [
        '$\\frac{1}{3}$',
        '$\\frac{1}{6}$',
        '$\\frac{1}{2}$',
        '$\\frac{2}{3}$',
      ],
      'A',
      'Gọi $B = \\{2; 4; 6\\}$ là biến cố mặt chẵn ($n(B) = 3$) và $A = \\{6\\}$ là biến cố mặt $6$ chấm ($n(AB) = 1$). Khi đó $P(A|B) = \\frac{n(AB)}{n(B)} = \\frac{1}{3}$.',
      'Khi các kết quả đồng khả năng, có thể tính nhanh bằng công thức $P(A|B) = \\frac{n(AB)}{n(B)}$.'
    ),
    makeMC(
      'b18d1',
      8,
      'Rút thăm không hoàn lại 2 lần liên tiếp',
      'Một hộp có $6$ viên bi trắng và $4$ viên bi đen cùng kích thước. Lấy ngẫu nhiên lần lượt $2$ viên bi không hoàn lại. Giả sử viên bi lấy ra lần thứ nhất là bi trắng, xác suất để viên bi lấy ra lần thứ hai cũng là bi trắng bằng:',
      [
        '$\\frac{5}{9}$',
        '$\\frac{6}{10}$',
        '$\\frac{4}{9}$',
        '$\\frac{1}{3}$',
      ],
      'A',
      'Sau khi lấy $1$ viên bi trắng ở lần đầu, trong hộp còn $9$ viên bi, trong đó có $5$ viên bi trắng. Do đó xác suất lần thứ hai lấy được bi trắng là $P(A_2|A_1) = \\frac{5}{9}$.',
      'Khi lấy không hoàn lại, tổng số phần tử trong hộp ở lần thứ hai giảm đi $1$.'
    ),
    makeMC(
      'b18d1',
      9,
      'Tính xác suất cả hai lần rút thăm bằng công thức nhân',
      'Một hộp chứa $7$ tấm thẻ màu đỏ và $3$ tấm thẻ màu xanh. Rút ngẫu nhiên lần lượt $2$ tấm thẻ (mỗi lần $1$ thẻ, không hoàn lại). Xác suất để cả $2$ tấm thẻ rút ra đều có màu đỏ là:',
      [
        '$\\frac{7}{15}$',
        '$\\frac{49}{100}$',
        '$\\frac{1}{3}$',
        '$\\frac{7}{10}$',
      ],
      'A',
      'Gọi $A_1, A_2$ là biến cố lần 1, lần 2 rút được thẻ đỏ. Ta có $P(A_1) = \\frac{7}{10}$ và $P(A_2|A_1) = \\frac{6}{9} = \\frac{2}{3}$. Theo công thức nhân: $P(A_1A_2) = \\frac{7}{10} \\cdot \\frac{2}{3} = \\frac{7}{15}$.',
      'Áp dụng công thức nhân xác suất: $P(A_1A_2) = P(A_1) \\cdot P(A_2|A_1)$.'
    ),
    makeMC(
      'b18d1',
      10,
      'Xác suất có điều kiện từ bảng dữ liệu thống kê',
      'Một lớp học có $40$ học sinh, trong đó có $25$ học sinh thích môn Toán, $20$ học sinh thích môn Vật lí và $15$ học sinh thích cả hai môn Toán và Vật lí. Chọn ngẫu nhiên một học sinh trong lớp. Tính xác suất để học sinh đó thích môn Toán, biết rằng học sinh đó thích môn Vật lí.',
      [
        '$0{,}75$',
        '$0{,}6$',
        '$0{,}375$',
        '$0{,}5$',
      ],
      'A',
      'Gọi $A$ là biến cố "thích Toán", $B$ là biến cố "thích Vật lí". Ta có $n(B) = 20$ và $n(AB) = 15$. Khi đó $P(A|B) = \\frac{n(AB)}{n(B)} = \\frac{15}{20} = 0{,}75$.',
      'Chỉ xét trong nhóm $20$ học sinh thích Vật lí, có $15$ em thích Toán nên tỉ lệ là $\\frac{15}{20}$.'
    ),
    makeMC(
      'b18d1',
      11,
      'Tìm xác suất P(B|A) khi biết P(A|B), P(A), P(B)',
      'Cho hai biến cố $A$ và $B$ có $P(A) = 0{,}4$; $P(B) = 0{,}5$ và $P(A|B) = 0{,}6$. Khi đó xác suất $P(B|A)$ bằng:',
      [
        '$0{,}75$',
        '$0{,}3$',
        '$0{,}48$',
        '$0{,}6$',
      ],
      'A',
      'Ta có $P(AB) = P(B)\\cdot P(A|B) = 0{,}5 \\times 0{,}6 = 0{,}3$. Suy ra $P(B|A) = \\frac{P(AB)}{P(A)} = \\frac{0{,}3}{0{,}4} = 0{,}75$.',
      'Tính $P(AB)$ làm cầu nối trung gian giữa $P(A|B)$ và $P(B|A)$.'
    ),
    makeMC(
      'b18d1',
      12,
      'Bài toán thực tế: Xác suất đỗ cả hai vòng phỏng vấn',
      'Một ứng viên tham gia tuyển dụng phải trải qua $2$ vòng thi liên tiếp. Xác suất ứng viên vượt qua vòng $1$ là $0{,}8$. Nếu vượt qua vòng $1$ thì xác suất ứng viên vượt qua tiếp vòng $2$ là $0{,}75$. Xác suất để ứng viên đó vượt qua cả $2$ vòng thi là:',
      [
        '$0{,}6$',
        '$0{,}55$',
        '$0{,}95$',
        '$0{,}75$',
      ],
      'A',
      'Theo công thức nhân xác suất: $P(V_1V_2) = P(V_1)\\cdot P(V_2|V_1) = 0{,}8 \\times 0{,}75 = 0{,}6$.',
      'Vòng 2 chỉ diễn ra khi đã đỗ vòng 1, nên $0{,}75$ chính là xác suất có điều kiện $P(V_2|V_1)$.',
      'sp_prob_tree_bayes'
    ),
  ],
  [
    makeTF(
      'b18d1',
      1,
      'Tính xác suất có điều kiện từ bảng thống kê 2x2',
      'Khảo sát $200$ nhân viên của một công ty công nghệ về giới tính và việc thường xuyên tập thể dục buổi sáng, kết quả thu được như sau: Có $120$ nhân viên nam (trong đó $72$ người thường xuyên tập thể dục) và $80$ nhân viên nữ (trong đó $48$ người thường xuyên tập thể dục). Chọn ngẫu nhiên $1$ nhân viên của công ty. Gọi $A$ là biến cố "Nhân viên được chọn thường xuyên tập thể dục" và $B$ là biến cố "Nhân viên được chọn là nam".',
      [
        {
          text: 'Xác suất của biến cố $B$ là $P(B) = 0{,}6$.',
          isCorrect: true,
          exp: 'Có $120$ nam trong tổng số $200$ nhân viên nên $P(B) = \\frac{120}{200} = 0{,}6$.',
        },
        {
          text: 'Xác suất để nhân viên được chọn vừa là nam vừa thường xuyên tập thể dục là $P(AB) = 0{,}36$.',
          isCorrect: true,
          exp: 'Có $72$ nhân viên nam thường xuyên tập thể dục nên $P(AB) = \\frac{72}{200} = 0{,}36$.',
        },
        {
          text: 'Xác suất có điều kiện $P(A|B)$ bằng $0{,}6$.',
          isCorrect: true,
          exp: '$P(A|B) = \\frac{n(AB)}{n(B)} = \\frac{72}{120} = 0{,}6$.',
        },
        {
          text: 'Hai biến cố $A$ và $B$ không độc lập với nhau.',
          isCorrect: false,
          exp: 'Tổng số người tập thể dục là $72 + 48 = 120 \\Rightarrow P(A) = \\frac{120}{200} = 0{,}6 = P(A|B)$, nên hai biến cố $A$ và $B$ độc lập với nhau.',
        },
      ],
      'So sánh $P(A|B)$ với $P(A)$: nếu bằng nhau thì hai biến cố $A$ và $B$ độc lập.'
    ),
    makeTF(
      'b18d1',
      2,
      'Phân tích xác suất có điều kiện và biến cố đối',
      'Cho hai biến cố $A$ và $B$ trong cùng một phép thử thỏa mãn $P(A) = 0{,}6$; $P(B) = 0{,}5$ và $P(AB) = 0{,}24$.',
      [
        {
          text: 'Xác suất của biến cố $A$ với điều kiện $B$ đã xảy ra là $P(A|B) = 0{,}48$.',
          isCorrect: true,
          exp: '$P(A|B) = \\frac{P(AB)}{P(B)} = \\frac{0{,}24}{0{,}5} = 0{,}48$.',
        },
        {
          text: 'Xác suất của biến cố $B$ với điều kiện $A$ đã xảy ra là $P(B|A) = 0{,}4$.',
          isCorrect: true,
          exp: '$P(B|A) = \\frac{P(AB)}{P(A)} = \\frac{0{,}24}{0{,}6} = 0{,}4$.',
        },
        {
          text: 'Xác suất $P(\\overline{B}|A)$ bằng $0{,}6$.',
          isCorrect: true,
          exp: '$P(\\overline{B}|A) = 1 - P(B|A) = 1 - 0{,}4 = 0{,}6$.',
        },
        {
          text: 'Xác suất của biến cố $A\\overline{B}$ bằng $0{,}26$.',
          isCorrect: false,
          exp: '$P(A\\overline{B}) = P(A) \\cdot P(\\overline{B}|A) = 0{,}6 \\times 0{,}6 = 0{,}36$ (hoặc $P(A) - P(AB) = 0{,}6 - 0{,}24 = 0{,}36 \\ne 0{,}26$).',
        },
      ],
      'Công thức hữu ích: $P(A\\overline{B}) = P(A) - P(AB)$ và $P(\\overline{A}B) = P(B) - P(AB)$.',
      'sp_prob_tree_bayes'
    ),
    makeTF(
      'b18d1',
      3,
      'Bài toán thực tế: Kiểm tra linh kiện điện tử bằng sơ đồ hình cây',
      'Một lô hàng có $20$ linh kiện điện tử, trong đó có $16$ linh kiện tốt và $4$ linh kiện lỗi. Một kỹ thuật viên lấy ngẫu nhiên lần lượt $2$ linh kiện (không hoàn lại) để kiểm tra. Gọi $A$ là biến cố "Linh kiện thứ nhất tốt" và $B$ là biến cố "Linh kiện thứ hai tốt".',
      [
        {
          text: 'Xác suất để linh kiện thứ nhất lấy ra là linh kiện tốt bằng $P(A) = 0{,}8$.',
          isCorrect: true,
          exp: '$P(A) = \\frac{16}{20} = 0{,}8$.',
        },
        {
          text: 'Nếu linh kiện thứ nhất tốt thì xác suất linh kiện thứ hai cũng tốt là $P(B|A) = \\frac{15}{19}$.',
          isCorrect: true,
          exp: 'Còn lại $19$ linh kiện trong đó có $15$ linh kiện tốt nên $P(B|A) = \\frac{15}{19}$.',
        },
        {
          text: 'Nếu linh kiện thứ nhất bị lỗi thì xác suất linh kiện thứ hai tốt là $P(B|\\overline{A}) = \\frac{15}{19}$.',
          isCorrect: false,
          exp: 'Nếu linh kiện thứ nhất bị lỗi thì trong $19$ linh kiện còn lại vẫn còn nguyên $16$ linh kiện tốt, nên $P(B|\\overline{A}) = \\frac{16}{19}$.',
        },
        {
          text: 'Xác suất để cả hai linh kiện lấy ra đều tốt là $\\frac{12}{19}$.',
          isCorrect: true,
          exp: '$P(AB) = P(A)\\cdot P(B|A) = \\frac{4}{5} \\cdot \\frac{15}{19} = \\frac{12}{19}$.',
        },
      ],
      'Đọc kỹ từng nhánh trên sơ đồ hình cây khi rút không hoàn lại.',
      'sp_prob_tree_bayes'
    ),
  ],
  [
    makeSA(
      'b18d1',
      1,
      'Tính xác suất có điều kiện từ xác suất hợp',
      'Cho hai biến cố $A$ và $B$ có $P(A) = 0{,}5$; $P(B) = 0{,}4$ và $P(A \\cup B) = 0{,}7$. Tính xác suất có điều kiện $P(A|B)$.',
      ['0.5', '0,5'],
      'Ta có $P(AB) = P(A) + P(B) - P(A \\cup B) = 0{,}5 + 0{,}4 - 0{,}7 = 0{,}2$. Khi đó $P(A|B) = \\frac{P(AB)}{P(B)} = \\frac{0{,}2}{0{,}4} = 0{,}5$.',
      'Sử dụng công thức cộng xác suất $P(AB) = P(A) + P(B) - P(A \\cup B)$ trước khi tính $P(A|B)$.'
    ),
    makeSA(
      'b18d1',
      2,
      'Xác suất có điều kiện trong bài toán rút thẻ số',
      'Một hộp chứa $20$ tấm thẻ được đánh số từ $1$ đến $20$. Rút ngẫu nhiên một tấm thẻ từ hộp. Biết rằng tấm thẻ rút ra mang số chẵn, tính xác suất để tấm thẻ đó mang số chia hết cho $5$.',
      ['0.2', '0,2'],
      'Gọi $B$ là biến cố thẻ mang số chẵn: $B = \\{2; 4; 6; \\dots; 20\\}$ có $n(B) = 10$. Biến cố $AB$ là số vừa chẵn vừa chia hết cho $5$: $AB = \\{10; 20\\}$ có $n(AB) = 2$. Vậy $P(A|B) = \\frac{2}{10} = 0{,}2$.',
      'Số vừa chẵn vừa chia hết cho $5$ là bội của $10$.'
    ),
    makeSA(
      'b18d1',
      3,
      'Công thức nhân xác suất với biến cố đối',
      'Trong một chiến dịch tiếp thị, xác suất một khách hàng xem quảng cáo là $0{,}6$. Nếu khách hàng xem quảng cáo thì xác suất người đó mua hàng là $0{,}35$. Tính xác suất để một khách hàng ngẫu nhiên có xem quảng cáo nhưng không mua hàng.',
      ['0.39', '0,39'],
      'Gọi $A$ là "xem quảng cáo" ($P(A) = 0{,}6$) và $B$ là "mua hàng" ($P(B|A) = 0{,}35$). Khi đó $P(\\overline{B}|A) = 1 - 0{,}35 = 0{,}65$. Xác suất khách xem quảng cáo nhưng không mua hàng là $P(A\\overline{B}) = P(A)\\cdot P(\\overline{B}|A) = 0{,}6 \\times 0{,}65 = 0{,}39$.',
      'Áp dụng $P(A\\overline{B}) = P(A) \\cdot [1 - P(B|A)]$.',
      undefined,
      'sp_prob_tree_bayes'
    ),
    makeSA(
      'b18d1',
      4,
      'Bài toán thực tế: Tuổi thọ gia đình / Thiết bị hoạt động',
      'Tại một khu dân cư, tỉ lệ hộ gia đình có ô tô là $40\\%$, tỉ lệ hộ gia đình có cả ô tô và nhà riêng là $32\\%$. Chọn ngẫu nhiên một hộ gia đình ở khu dân cư đó. Biết rằng hộ đó có ô tô, tính xác suất để hộ đó có nhà riêng.',
      ['0.8', '0,8'],
      'Gọi $A$ là biến cố "có nhà riêng", $B$ là biến cố "có ô tô". Ta có $P(B) = 0{,}4$ và $P(AB) = 0{,}32$. Khi đó $P(A|B) = \\frac{P(AB)}{P(B)} = \\frac{0{,}32}{0{,}4} = 0{,}8$.',
      'Xác định đúng biến cố đã biết ("biết rằng hộ đó có ô tô" $\\Rightarrow B$ ở mẫu số).'
    ),
  ],
  [
    makeSO(
      'b18d1',
      1,
      'Tính xác suất có điều kiện trong bài toán gieo hai con xúc xắc',
      'Gieo đồng thời hai con xúc xắc cân đối và đồng chất. Tính xác suất để tổng số chấm xuất hiện trên hai con xúc xắc bằng $8$, biết rằng ít nhất có một con xúc xắc xuất hiện mặt $5$ chấm.',
      'Vậy xác suất cần tìm là $\\frac{2}{11}$.',
      [
        {
          role: 'Bước 1: Gọi tên các biến cố và xác định số phần tử của biến cố điều kiện $B$',
          content: 'Gọi $A$ là biến cố "Tổng số chấm bằng $8$" và $B$ là biến cố "Ít nhất một con xúc xắc ra mặt $5$ chấm". Có $36$ kết quả đồng khả năng, trong đó số kết quả không có mặt $5$ là $5 \\times 5 = 25 \\Rightarrow n(B) = 36 - 25 = 11$.',
        },
        {
          role: 'Bước 2: Liệt kê các kết quả thuận lợi cho biến cố giao $AB$',
          content: 'Biến cố $AB$ gồm các cặp có ít nhất một mặt $5$ chấm và tổng bằng $8$, đó là $\\{(5; 3), (3; 5)\\}$, suy ra $n(AB) = 2$.',
        },
        {
          role: 'Bước 3: Áp dụng công thức xác suất có điều kiện',
          content: 'Vậy $P(A|B) = \\frac{n(AB)}{n(B)} = \\frac{2}{11}$.',
        },
      ],
      'Đếm $n(B)$ bằng phần bù $36 - 5^2 = 11$ (tránh đếm trùng cặp $(5; 5)$ nếu lấy $6 + 6 = 12$).',
      'Bài toán kinh điển giúp học sinh không mắc lỗi đếm $n(B) = 12$.',
      0.7
    ),
    makeSO(
      'b18d1',
      2,
      'Tính xác suất có điều kiện bằng bảng dữ liệu thống kê',
      'Trong một trường THPT có $60\\%$ học sinh là nữ. Tỉ lệ học sinh nữ tham gia câu lạc bộ Tiếng Anh là $25\\%$. Chọn ngẫu nhiên một học sinh của trường. Tính xác suất để học sinh được chọn vừa là nữ vừa tham gia câu lạc bộ Tiếng Anh.',
      'Vậy xác suất cần tìm là $0{,}15$.',
      [
        {
          role: 'Bước 1: Gọi các biến cố và biểu diễn giả thiết theo ký hiệu xác suất',
          content: 'Gọi $A$ là biến cố "Học sinh được chọn là nữ" và $B$ là biến cố "Học sinh được chọn tham gia CLB Tiếng Anh". Theo đề bài, $P(A) = 0{,}6$ và $P(B|A) = 0{,}25$.',
        },
        {
          role: 'Bước 2: Viết công thức nhân xác suất cho biến cố giao $AB$',
          content: 'Biến cố "Học sinh vừa là nữ vừa tham gia CLB Tiếng Anh" là $AB$, có xác suất $P(AB) = P(A) \\cdot P(B|A)$.',
        },
        {
          role: 'Bước 3: Thay số và kết luận',
          content: 'Ta có $P(AB) = 0{,}6 \\times 0{,}25 = 0{,}15$.',
        },
      ],
      'Tỉ lệ học sinh nữ tham gia CLB Tiếng Anh ($25\\%$) chính là xác suất có điều kiện $P(B|A)$.',
      'Rèn luyện kỹ năng dịch ngôn ngữ tự nhiên sang ký hiệu xác suất có điều kiện.',
      0.65,
      'sp_prob_tree_bayes'
    ),
    makeSO(
      'b18d1',
      3,
      'Vận dụng công thức nhân xác suất cho phép thử 2 bước liên tiếp',
      'Một bình đựng $8$ quả cầu xanh và $4$ quả cầu vàng. Lấy ngẫu nhiên lần lượt $2$ quả cầu (mỗi lần lấy $1$ quả và không trả lại vào bình). Hãy tính xác suất để lần thứ nhất lấy được quả cầu xanh và lần thứ hai lấy được quả cầu vàng.',
      'Vậy xác suất cần tìm là $\\frac{8}{33}$.',
      [
        {
          role: 'Bước 1: Gọi tên biến cố ở mỗi lần lấy cầu và tính xác suất lần thứ nhất',
          content: 'Gọi $A$ là biến cố "Lần thứ nhất lấy được quả cầu xanh" và $B$ là biến cố "Lần thứ hai lấy được quả cầu vàng". Ta có $P(A) = \\frac{8}{12} = \\frac{2}{3}$.',
        },
        {
          role: 'Bước 2: Tính xác suất có điều kiện ở lần lấy thứ hai khi biết $A$ đã xảy ra',
          content: 'Khi $A$ đã xảy ra, trong bình còn lại $11$ quả cầu, trong đó có $4$ quả cầu vàng. Do đó $P(B|A) = \\frac{4}{11}$.',
        },
        {
          role: 'Bước 3: Áp dụng công thức nhân xác suất để kết luận',
          content: 'Theo công thức nhân xác suất: $P(AB) = P(A) \\cdot P(B|A) = \\frac{2}{3} \\cdot \\frac{4}{11} = \\frac{8}{33}$.',
        },
      ],
      'Chú ý tổng số quả cầu ở lần thứ hai giảm từ $12$ xuống $11$, nhưng số quả cầu vàng vẫn còn nguyên $4$ quả.',
      'Bài toán chuẩn mực về công thức nhân xác suất.',
      0.65,
      'sp_prob_tree_bayes'
    ),
  ]
);

const bai18De2 = makeLessonExam(
  'bai18-de02',
  'Bài 18 - Đề ôn số 2',
  'Xác suất có điều kiện: Nâng cao kỹ năng phân tích biến cố và ứng dụng thực tiễn',
  'Đề ôn tập Bài 18 (Số 2) gồm 22 câu hỏi chuẩn cấu trúc 4 phần, giúp học sinh thành thạo xử lý các bài toán xác suất có điều kiện trên tập mẫu thu hẹp, bảng thống kê và sơ đồ hình cây.',
  [
    makeMC(
      'b18d2',
      1,
      'Công thức tính P(B|A)',
      'Cho hai biến cố $A$ và $B$ với $P(A) > 0$. Công thức nào dưới đây dùng để tính $P(B|A)$?',
      [
        '$P(B|A) = \\frac{P(AB)}{P(A)}$',
        '$P(B|A) = \\frac{P(AB)}{P(B)}$',
        '$P(B|A) = \\frac{P(B)}{P(A)}$',
        '$P(B|A) = P(B) - P(A)$',
      ],
      'A',
      'Biến cố điều kiện $A$ đứng sau dấu "$|$" nên nằm ở mẫu số: $P(B|A) = \\frac{P(AB)}{P(A)}$.',
      'Luôn đặt xác suất của biến cố điều kiện (đứng sau dấu $|$) ở dưới mẫu.'
    ),
    makeMC(
      'b18d2',
      2,
      'Tính P(B|A) từ số liệu trực tiếp',
      'Cho hai biến cố $A$ và $B$ có $P(A) = 0{,}8$; $P(B) = 0{,}5$ và $P(AB) = 0{,}32$. Khi đó $P(B|A)$ bằng:',
      [
        '$0{,}4$',
        '$0{,}64$',
        '$0{,}16$',
        '$0{,}5$',
      ],
      'A',
      'Ta có $P(B|A) = \\frac{P(AB)}{P(A)} = \\frac{0{,}32}{0{,}8} = 0{,}4$.',
      'Chia $P(AB)$ cho $P(A) = 0{,}8$ (không chia cho $P(B) = 0{,}5$).'
    ),
    makeMC(
      'b18d2',
      3,
      'Xác suất có điều kiện khi rút bài từ bộ bài 52 lá',
      'Từ một bộ bài tây $52$ lá, rút ngẫu nhiên một lá bài. Tính xác suất để lá bài rút ra là lá Át (A), biết rằng lá bài đó có chất Cơ (gồm $13$ lá).',
      [
        '$\\frac{1}{13}$',
        '$\\frac{1}{52}$',
        '$\\frac{1}{4}$',
        '$\\frac{4}{13}$',
      ],
      'A',
      'Trong $13$ lá chất Cơ có đúng $1$ lá Át Cơ, nên xác suất cần tìm là $\\frac{1}{13}$.',
      'Không gian mẫu thu hẹp là $13$ lá bài chất Cơ.'
    ),
    makeMC(
      'b18d2',
      4,
      'Tính xác suất P(A|B ngang)',
      'Cho hai biến cố $A$ và $B$ có $P(A) = 0{,}5$; $P(B) = 0{,}6$ và $P(AB) = 0{,}3$. Giá trị của $P(A|\\overline{B})$ bằng:',
      [
        '$0{,}5$',
        '$0{,}4$',
        '$0{,}2$',
        '$0{,}75$',
      ],
      'A',
      'Ta có $P(\\overline{B}) = 1 - 0{,}6 = 0{,}4$ và $P(A\\overline{B}) = P(A) - P(AB) = 0{,}5 - 0{,}3 = 0{,}2$. Suy ra $P(A|\\overline{B}) = \\frac{P(A\\overline{B})}{P(\\overline{B})} = \\frac{0{,}2}{0{,}4} = 0{,}5$.',
      'Cũng có thể nhận xét $P(AB) = 0{,}3 = P(A)P(B)$ nên $A, B$ độc lập $\\Rightarrow A, \\overline{B}$ độc lập $\\Rightarrow P(A|\\overline{B}) = P(A) = 0{,}5$.'
    ),
    makeMC(
      'b18d2',
      5,
      'Xác suất có điều kiện trong gia đình có 2 con',
      'Một gia đình có $2$ người con. Giả sử xác suất sinh con trai và sinh con gái trong mỗi lần sinh là bằng nhau và bằng $0{,}5$. Biết rằng người con đầu là con gái, xác suất để cả hai người con đều là con gái bằng:',
      [
        '$\\frac{1}{2}$',
        '$\\frac{1}{3}$',
        '$\\frac{1}{4}$',
        '$\\frac{2}{3}$',
      ],
      'A',
      'Không gian mẫu gồm $\\{\\text{TT}, \\text{TG}, \\text{GT}, \\text{GG}\\}$. Biến cố người con đầu là gái là $B = \\{\\text{GT}, \\text{GG}\\}$ có $2$ phần tử; biến cố cả hai là gái là $AB = \\{\\text{GG}\\}$ có $1$ phần tử. Vậy $P(A|B) = \\frac{1}{2}$.',
      'Phân biệt rõ "người con đầu là gái" ($n(B) = 2$) với "có ít nhất một người con là gái" ($n(B) = 3$).'
    ),
    makeMC(
      'b18d2',
      6,
      'Biến cố có ít nhất một người con gái trong gia đình 2 con',
      'Một gia đình có $2$ người con (xác suất sinh trai hay gái ở mỗi lần là $0{,}5$). Biết rằng gia đình đó có ít nhất một người con gái, xác suất để cả hai người con đều là con gái bằng:',
      [
        '$\\frac{1}{3}$',
        '$\\frac{1}{2}$',
        '$\\frac{1}{4}$',
        '$\\frac{2}{3}$',
      ],
      'A',
      'Biến cố $B$: "Có ít nhất một con gái" là $B = \\{\\text{TG}, \\text{GT}, \\text{GG}\\}$ có $n(B) = 3$. Biến cố $AB = \\{\\text{GG}\\}$ có $n(AB) = 1$. Do đó $P(A|B) = \\frac{1}{3}$.',
      'Bài toán kinh điển minh họa sự khác biệt của điều kiện thu hẹp không gian mẫu.'
    ),
    makeMC(
      'b18d2',
      7,
      'Công thức nhân xác suất cho hai biến cố đối',
      'Cho hai biến cố $A$ và $B$ thỏa mãn $P(A) = 0{,}3$ và $P(B|\\overline{A}) = 0{,}4$. Khi đó xác suất $P(\\overline{A}\\overline{B})$ bằng:',
      [
        '$0{,}42$',
        '$0{,}28$',
        '$0{,}12$',
        '$0{,}18$',
      ],
      'A',
      'Ta có $P(\\overline{A}) = 1 - 0{,}3 = 0{,}7$ và $P(\\overline{B}|\\overline{A}) = 1 - P(B|\\overline{A}) = 1 - 0{,}4 = 0{,}6$. Theo công thức nhân: $P(\\overline{A}\\overline{B}) = P(\\overline{A})\\cdot P(\\overline{B}|\\overline{A}) = 0{,}7 \\times 0{,}6 = 0{,}42$.',
      'Đi theo nhánh dưới cùng của sơ đồ hình cây: $\\Omega \\to \\overline{A} \\to \\overline{B}$.',
      'sp_prob_tree_bayes'
    ),
    makeMC(
      'b18d2',
      8,
      'Xác suất rút 2 sản phẩm phế phẩm liên tiếp',
      'Một lô hàng có $10$ sản phẩm, trong đó có $2$ phế phẩm. Lấy ngẫu nhiên lần lượt $2$ sản phẩm không hoàn lại. Xác suất để cả $2$ sản phẩm lấy ra đều là phế phẩm bằng:',
      [
        '$\\frac{1}{45}$',
        '$\\frac{1}{25}$',
        '$\\frac{2}{45}$',
        '$\\frac{1}{5}$',
      ],
      'A',
      'Xác suất lần 1 lấy phế phẩm là $\\frac{2}{10}$, lần 2 lấy tiếp phế phẩm là $\\frac{1}{9}$. Theo công thức nhân: $P = \\frac{2}{10} \\cdot \\frac{1}{9} = \\frac{1}{45}$.',
      'Khi đã lấy ra $1$ phế phẩm trong $2$ phế phẩm, trong lô chỉ còn lại $1$ phế phẩm trên tổng số $9$ sản phẩm.'
    ),
    makeMC(
      'b18d2',
      9,
      'Xác suất có điều kiện khi biến cố A con biến cố B',
      'Cho hai biến cố $A$ và $B$ thỏa mãn $A \\subset B$ và $0 < P(A) < P(B)$. Khi đó $P(B|A)$ bằng:',
      [
        '$1$',
        '$\\frac{P(A)}{P(B)}$',
        '$0$',
        '$P(B)$',
      ],
      'A',
      'Vì $A \\subset B$ nên khi $A$ xảy ra thì chắc chắn $B$ cũng xảy ra (tức $AB = A$). Do đó $P(B|A) = \\frac{P(AB)}{P(A)} = \\frac{P(A)}{P(A)} = 1$.',
      'Ngược lại, $P(A|B) = \\frac{P(A)}{P(B)}$.'
    ),
    makeMC(
      'b18d2',
      10,
      'Xác suất có điều kiện của hai biến cố xung khắc',
      'Cho hai biến cố xung khắc $A$ và $B$ ($A \\cap B = \\varnothing$) với $P(A) > 0, P(B) > 0$. Giá trị của $P(A|B)$ bằng:',
      [
        '$0$',
        '$1$',
        '$P(A)$',
        '$P(A) + P(B)$',
      ],
      'A',
      'Vì $A$ và $B$ xung khắc nên $P(AB) = 0 \\Rightarrow P(A|B) = \\frac{0}{P(B)} = 0$.',
      'Hai biến cố xung khắc thì nếu biến cố này đã xảy ra, biến cố kia không thể xảy ra.'
    ),
    makeMC(
      'b18d2',
      11,
      'Bảng dữ liệu thống kê điểm thi hai môn',
      'Trong một kỳ thi thử có $100$ thí sinh dự thi hai môn Toán và Tiếng Anh. Có $60$ thí sinh đạt điểm giỏi môn Toán, $50$ thí sinh đạt điểm giỏi môn Tiếng Anh và $30$ thí sinh đạt điểm giỏi cả hai môn. Chọn ngẫu nhiên một thí sinh. Biết thí sinh đó đạt điểm giỏi môn Toán, xác suất để thí sinh đó cũng đạt điểm giỏi môn Tiếng Anh là:',
      [
        '$0{,}5$',
        '$0{,}6$',
        '$0{,}3$',
        '$0{,}75$',
      ],
      'A',
      'Trong $60$ thí sinh giỏi Toán có $30$ thí sinh giỏi cả Tiếng Anh, nên xác suất cần tìm là $\\frac{30}{60} = 0{,}5$.',
      'Chia số phần tử giao $n(AB) = 30$ cho số phần tử của điều kiện "giỏi Toán" $n(A) = 60$.'
    ),
    makeMC(
      'b18d2',
      12,
      'Bài toán thực tế: Dự báo thời tiết hai ngày liên tiếp',
      'Theo số liệu khí tượng tại một địa phương, xác suất ngày thứ Bảy có mưa là $0{,}4$. Nếu thứ Bảy có mưa thì xác suất Chủ nhật cũng có mưa là $0{,}7$. Xác suất để cả hai ngày cuối tuần (thứ Bảy và Chủ nhật) đều có mưa là:',
      [
        '$0{,}28$',
        '$0{,}12$',
        '$0{,}58$',
        '$0{,}7$',
      ],
      'A',
      'Áp dụng công thức nhân xác suất: $P(AB) = P(A)\\cdot P(B|A) = 0{,}4 \\times 0{,}7 = 0{,}28$.',
      'Nhân xác suất mưa ngày thứ Bảy với xác suất mưa ngày Chủ nhật khi biết thứ Bảy đã mưa.',
      'sp_prob_tree_bayes'
    ),
  ],
  [
    makeTF(
      'b18d2',
      1,
      'Đọc và tính xác suất có điều kiện trên sơ đồ hình cây',
      'Cho sơ đồ hình cây biểu diễn phép thử hai giai đoạn với hai biến cố $A$ và $B$, biết $P(A) = 0{,}3$; $P(B|A) = 0{,}8$ và $P(B|\\overline{A}) = 0{,}2$.',
      [
        {
          text: 'Xác suất của biến cố đối $\\overline{A}$ là $P(\\overline{A}) = 0{,}7$.',
          isCorrect: true,
          exp: '$P(\\overline{A}) = 1 - P(A) = 1 - 0{,}3 = 0{,}7$.',
        },
        {
          text: 'Xác suất của biến cố giao $AB$ là $P(AB) = 0{,}24$.',
          isCorrect: true,
          exp: '$P(AB) = P(A) \\cdot P(B|A) = 0{,}3 \\times 0{,}8 = 0{,}24$.',
        },
        {
          text: 'Xác suất có điều kiện $P(\\overline{B}|A)$ bằng $0{,}8$.',
          isCorrect: false,
          exp: '$P(\\overline{B}|A) = 1 - P(B|A) = 1 - 0{,}8 = 0{,}2 \\ne 0{,}8$.',
        },
        {
          text: 'Xác suất của biến cố giao $\\overline{A}B$ bằng $0{,}14$.',
          isCorrect: true,
          exp: '$P(\\overline{A}B) = P(\\overline{A}) \\cdot P(B|\\overline{A}) = 0{,}7 \\times 0{,}2 = 0{,}14$.',
        },
      ],
      'Trên sơ đồ hình cây, tổng xác suất các nhánh xuất phát từ cùng một nút luôn bằng $1$.',
      'sp_prob_tree_bayes'
    ),
    makeTF(
      'b18d2',
      2,
      'Bảng dữ liệu thống kê kết quả khảo sát khách hàng',
      'Một siêu thị khảo sát $500$ khách hàng về độ tuổi (Dưới $30$ tuổi / Từ $30$ tuổi trở lên) và phương thức thanh toán (Tiền mặt / Chuyển khoản). Kết quả: Có $300$ khách dưới $30$ tuổi (trong đó $240$ người chuyển khoản) và $200$ khách từ $30$ tuổi trở lên (trong đó $110$ người chuyển khoản). Chọn ngẫu nhiên $1$ khách hàng trong nhóm khảo sát.',
      [
        {
          text: 'Tổng số khách hàng thanh toán bằng hình thức chuyển khoản là $350$ người.',
          isCorrect: true,
          exp: 'Số người chuyển khoản là $240 + 110 = 350$ người.',
        },
        {
          text: 'Biết khách hàng được chọn dưới $30$ tuổi, xác suất để người đó thanh toán chuyển khoản là $0{,}8$.',
          isCorrect: true,
          exp: 'Trong $300$ khách dưới $30$ tuổi có $240$ người chuyển khoản: $P = \\frac{240}{300} = 0{,}8$.',
        },
        {
          text: 'Biết khách hàng được chọn thanh toán chuyển khoản, xác suất để người đó dưới $30$ tuổi là $\\frac{24}{35}$.',
          isCorrect: true,
          exp: 'Trong $350$ người chuyển khoản có $240$ người dưới $30$ tuổi: $P = \\frac{240}{350} = \\frac{24}{35}$.',
        },
        {
          text: 'Biết khách hàng được chọn từ $30$ tuổi trở lên, xác suất để người đó thanh toán bằng tiền mặt là $0{,}55$.',
          isCorrect: false,
          exp: 'Trong $200$ khách từ $30$ tuổi trở lên có $200 - 110 = 90$ người trả tiền mặt, nên xác suất là $\\frac{90}{200} = 0{,}45 \\ne 0{,}55$.',
        },
      ],
      'Phân biệt rõ hai xác suất đảo chiều: P(Chuyển khoản | Dưới 30) = 240/300 và P(Dưới 30 | Chuyển khoản) = 240/350.'
    ),
    makeTF(
      'b18d2',
      3,
      'Bài toán thực tế: Rút thăm trúng thưởng qua hai lượt',
      'Trong một hộp phiếu bốc thăm có $10$ lá phiếu, gồm $3$ phiếu trúng thưởng và $7$ phiếu không trúng thưởng. Hai bạn An và Bình lần lượt mỗi người bốc ngẫu nhiên $1$ lá phiếu (An bốc trước và không trả lại phiếu vào hộp, sau đó đến Bình bốc).',
      [
        {
          text: 'Xác suất để bạn An bốc được phiếu trúng thưởng là $0{,}3$.',
          isCorrect: true,
          exp: '$P(A) = \\frac{3}{10} = 0{,}3$.',
        },
        {
          text: 'Nếu bạn An đã bốc được phiếu trúng thưởng thì xác suất để bạn Bình cũng bốc được phiếu trúng thưởng là $\\frac{2}{9}$.',
          isCorrect: true,
          exp: 'Còn $9$ phiếu trong đó có $2$ phiếu trúng thưởng nên $P(B|A) = \\frac{2}{9}$.',
        },
        {
          text: 'Xác suất để cả hai bạn An và Bình đều bốc được phiếu trúng thưởng là $\\frac{1}{15}$.',
          isCorrect: true,
          exp: '$P(AB) = \\frac{3}{10} \\cdot \\frac{2}{9} = \\frac{6}{90} = \\frac{1}{15}$.',
        },
        {
          text: 'Xác suất để cả hai bạn An và Bình đều không bốc được phiếu trúng thưởng là $\\frac{7}{10}$.',
          isCorrect: false,
          exp: '$P(\\overline{A}\\overline{B}) = \\frac{7}{10} \\cdot \\frac{6}{9} = \\frac{42}{90} = \\frac{7}{15} \\ne \\frac{7}{10}$.',
        },
      ],
      'Áp dụng công thức nhân xác suất cho cả hai trường hợp: cùng trúng thưởng và cùng không trúng thưởng.'
    ),
  ],
  [
    makeSA(
      'b18d2',
      1,
      'Tính xác suất giao của hai biến cố',
      'Cho hai biến cố $A$ và $B$ biết $P(B) = 0{,}5$ và $P(\\overline{A}|B) = 0{,}3$. Tính xác suất $P(AB)$.',
      ['0.35', '0,35'],
      'Ta có $P(A|B) = 1 - P(\\overline{A}|B) = 1 - 0{,}3 = 0{,}7$. Suy ra $P(AB) = P(B)\\cdot P(A|B) = 0{,}5 \\times 0{,}7 = 0{,}35$.',
      'Tính $P(A|B) = 1 - P(\\overline{A}|B)$ trước khi nhân với $P(B)$.'
    ),
    makeSA(
      'b18d2',
      2,
      'Xác suất có điều kiện trong chọn học sinh trực nhật',
      'Một tổ học sinh có $6$ nam và $4$ nữ. Chọn ngẫu nhiên đồng thời $2$ học sinh đi trực nhật. Tính xác suất để cả $2$ học sinh được chọn đều là nam, biết rằng trong $2$ học sinh đó có ít nhất $1$ học sinh nam (kết quả làm tròn đến hàng phần trăm hoặc viết dưới dạng số thập phân nếu hữu hạn; để kết quả nguyên đẹp, hãy tính giá trị của $39P$).',
      ['15'],
      'Số cách chọn $2$ học sinh bất kỳ là $C_{10}^2 = 45$. Số cách chọn $2$ nữ là $C_4^2 = 6 \\Rightarrow$ số cách chọn có ít nhất $1$ nam là $n(B) = 45 - 6 = 39$. Số cách chọn cả $2$ nam là $n(AB) = C_6^2 = 15$. Vậy $P(A|B) = \\frac{15}{39} \\Rightarrow 39P = 15$.',
      'Dùng biến cố đối để đếm số cách chọn có ít nhất 1 nam: $C_{10}^2 - C_4^2 = 39$.'
    ),
    makeSA(
      'b18d2',
      3,
      'Xác suất có điều kiện từ bảng thống kê y tế',
      'Tại một phòng khám, trong số các bệnh nhân đến khám có $40\\%$ bị sốt, $30\\%$ bị ho và $24\\%$ bị cả sốt lẫn ho. Chọn ngẫu nhiên một bệnh nhân. Biết bệnh nhân đó bị ho, tính xác suất để bệnh nhân đó cũng bị sốt.',
      ['0.8', '0,8'],
      'Gọi $A$ là "bị sốt" ($P(A) = 0{,}4$), $B$ là "bị ho" ($P(B) = 0{,}3$). Ta có $P(AB) = 0{,}24$. Khi đó $P(A|B) = \\frac{P(AB)}{P(B)} = \\frac{0{,}24}{0{,}3} = 0{,}8$.',
      'Điều kiện đã biết là "bị ho" nên chia cho $P(B) = 0{,}3$.'
    ),
    makeSA(
      'b18d2',
      4,
      'Bài toán thực tế: Xác suất hai đèn tín hiệu cùng hoạt động tốt',
      'Một hệ thống cảnh báo gồm $2$ bóng đèn hoạt động phụ thuộc nhau. Xác suất bóng đèn thứ nhất hoạt động tốt là $0{,}9$. Nếu bóng đèn thứ nhất hoạt động tốt thì xác suất bóng đèn thứ hai hoạt động tốt là $0{,}8$. Tính xác suất để cả hai bóng đèn đều hoạt động tốt.',
      ['0.72', '0,72'],
      'Áp dụng công thức nhân xác suất: $P(AB) = 0{,}9 \\times 0{,}8 = 0{,}72$.',
      'Nhân trực tiếp hai xác suất theo công thức nhân.'
    ),
  ],
  [
    makeSO(
      'b18d2',
      1,
      'Chứng minh công thức tính P(A|B ngang) theo P(A), P(B), P(AB)',
      'Cho hai biến cố $A$ và $B$ thỏa mãn $P(A) = 0{,}45$; $P(B) = 0{,}5$ và $P(A|B) = 0{,}6$. Hãy tính xác suất $P(A|\\overline{B})$.',
      'Vậy $P(A|\\overline{B}) = 0{,}3$.',
      [
        {
          role: 'Bước 1: Tính xác suất của biến cố giao $AB$ và biến cố đối $\\overline{B}$',
          content: 'Ta có $P(AB) = P(B)\\cdot P(A|B) = 0{,}5 \\times 0{,}6 = 0{,}3$ và $P(\\overline{B}) = 1 - P(B) = 0{,}5$.',
        },
        {
          role: 'Bước 2: Tính xác suất của biến cố $A\\overline{B}$',
          content: 'Vì $A = AB \\cup A\\overline{B}$ (xung khắc) nên $P(A\\overline{B}) = P(A) - P(AB) = 0{,}45 - 0{,}3 = 0{,}15$.',
        },
        {
          role: 'Bước 3: Áp dụng công thức xác suất có điều kiện cho $P(A|\\overline{B})$',
          content: 'Ta có $P(A|\\overline{B}) = \\frac{P(A\\overline{B})}{P(\\overline{B})} = \\frac{0{,}15}{0{,}5} = 0{,}3$.',
        },
      ],
      'Nhớ đẳng thức tách biến cố: $P(A) = P(AB) + P(A\\overline{B})$.',
      'Bài toán giúp học sinh tránh sai lầm phổ biến là lấy $1 - P(A|B)$ để ra $P(A|\\overline{B})$.',
      0.7
    ),
    makeSO(
      'b18d2',
      2,
      'Giải bài toán xác suất có điều kiện bằng cách lập bảng thống kê 2x2',
      'Một câu lạc bộ thể thao có $100$ hội viên, trong đó có $60$ hội viên nam. Biết rằng có $45$ hội viên biết bơi (gồm cả nam và nữ), và trong số các hội viên nữ có $15$ người biết bơi. Chọn ngẫu nhiên một hội viên của câu lạc bộ. Biết rằng hội viên được chọn là nam, hãy tính xác suất để hội viên đó biết bơi.',
      'Vậy xác suất để hội viên nam được chọn biết bơi là $0{,}5$.',
      [
        {
          role: 'Bước 1: Xác định số hội viên nữ và số hội viên nam biết bơi',
          content: 'Số hội viên nữ là $100 - 60 = 40$ người. Vì tổng số người biết bơi là $45$ và có $15$ nữ biết bơi nên số hội viên nam biết bơi là $45 - 15 = 30$ người.',
        },
        {
          role: 'Bước 2: Xác định số phần tử của biến cố điều kiện và biến cố giao',
          content: 'Gọi $A$ là biến cố "Hội viên biết bơi" và $B$ là biến cố "Hội viên là nam". Ta có $n(B) = 60$ và $n(AB) = 30$.',
        },
        {
          role: 'Bước 3: Tính xác suất có điều kiện $P(A|B)$',
          content: 'Suy ra $P(A|B) = \\frac{n(AB)}{n(B)} = \\frac{30}{60} = 0{,}5$.',
        },
      ],
      'Lập bảng 2x2 (Nam/Nữ và Biết bơi/Không biết bơi) giúp điền các ô còn thiếu cực kỳ trực quan.',
      'Phương pháp lập bảng thống kê 2x2 được nhấn mạnh trong SGK Toán 12 Tập 2.',
      0.65
    ),
    makeSO(
      'b18d2',
      3,
      'Công thức nhân xác suất mở rộng cho 3 lần thử liên tiếp',
      'Một hộp có $5$ viên bi đỏ và $3$ viên bi xanh. Lấy ngẫu nhiên lần lượt $3$ viên bi (mỗi lần lấy $1$ viên và không hoàn lại). Tính xác suất để cả $3$ viên bi lấy ra đều có màu đỏ.',
      'Vậy xác suất để cả $3$ viên bi lấy ra đều màu đỏ là $\\frac{5}{28}$.',
      [
        {
          role: 'Bước 1: Gọi các biến cố ở từng lần lấy bi và tính xác suất lần 1',
          content: 'Gọi $A_1, A_2, A_3$ lần lượt là biến cố lấy được bi đỏ ở lần 1, lần 2, lần 3. Ta có $P(A_1) = \\frac{5}{8}$.',
        },
        {
          role: 'Bước 2: Tính các xác suất có điều kiện ở lần 2 và lần 3',
          content: 'Khi $A_1$ đã xảy ra, còn $7$ bi (có $4$ bi đỏ) nên $P(A_2|A_1) = \\frac{4}{7}$. Khi cả $A_1, A_2$ đã xảy ra, còn $6$ bi (có $3$ bi đỏ) nên $P(A_3|A_1A_2) = \\frac{3}{6} = \\frac{1}{2}$.',
        },
        {
          role: 'Bước 3: Nhân các xác suất thành phần và rút gọn',
          content: 'Vậy $P(A_1A_2A_3) = P(A_1)\\cdot P(A_2|A_1)\\cdot P(A_3|A_1A_2) = \\frac{5}{8} \\cdot \\frac{4}{7} \\cdot \\frac{1}{2} = \\frac{5}{28}$.',
        },
      ],
      'Kết quả hoàn toàn khớp với cách tính tổ hợp $\\frac{C_5^3}{C_8^3} = \\frac{10}{56} = \\frac{5}{28}$.',
      'Mở rộng tự nhiên của công thức nhân xác suất cho nhiều biến cố.',
      0.65
    ),
  ]
);

// ============================================================================
// BÀI 19: CÔNG THỨC XÁC SUẤT TOÀN PHẦN VÀ CÔNG THỨC BAYES (SGK Tập 2 - Trang 72)
// ============================================================================

const bai19De1 = makeLessonExam(
  'bai19-de01',
  'Bài 19 - Đề ôn số 1',
  'Công thức xác suất toàn phần và Công thức Bayes: Lý thuyết và ứng dụng thực tiễn',
  'Đề ôn tập Bài 19 (Số 1) bám sát yêu cầu cần đạt SGK Toán 12 Tập 2 Kết nối tri thức: Công thức xác suất toàn phần, công thức Bayes, sơ đồ hình cây và các bài toán thực tế về xét nghiệm y khoa, kiểm định chất lượng sản phẩm, lọc thư rác.',
  [
    makeMC(
      'b19d1',
      1,
      'Công thức xác suất toàn phần',
      'Cho hai biến cố $A$ và $B$ với $0 < P(A) < 1$. Công thức xác suất toàn phần tính $P(B)$ là:',
      [
        '$P(B) = P(A)\\cdot P(B|A) + P(\\overline{A})\\cdot P(B|\\overline{A})$',
        '$P(B) = P(A)\\cdot P(A|B) + P(\\overline{A})\\cdot P(\\overline{A}|B)$',
        '$P(B) = P(B|A) + P(B|\\overline{A})$',
        '$P(B) = P(A)\\cdot P(B|A) - P(\\overline{A})\\cdot P(B|\\overline{A})$',
      ],
      'A',
      'Vì $B = AB \\cup \\overline{A}B$ là hợp của hai biến cố xung khắc nên theo công thức xác suất toàn phần: $P(B) = P(AB) + P(\\overline{A}B) = P(A)P(B|A) + P(\\overline{A})P(B|\\overline{A})$.',
      'Xác suất toàn phần của $B$ bằng tổng xác suất của hai nhánh dẫn tới $B$ trên sơ đồ hình cây.',
      'sp_prob_tree_bayes'
    ),
    makeMC(
      'b19d1',
      2,
      'Công thức Bayes',
      'Cho hai biến cố $A$ và $B$ với $P(A) > 0, P(B) > 0$. Công thức Bayes để tính $P(A|B)$ là:',
      [
        '$P(A|B) = \\frac{P(A)\\cdot P(B|A)}{P(B)}$',
        '$P(A|B) = \\frac{P(B)\\cdot P(A|B)}{P(A)}$',
        '$P(A|B) = \\frac{P(B|A)}{P(B)}$',
        '$P(A|B) = \\frac{P(A)\\cdot P(B|A)}{P(A)}$',
      ],
      'A',
      'Theo định lý Bayes: $P(A|B) = \\frac{P(A)P(B|A)}{P(B)} = \\frac{P(A)P(B|A)}{P(A)P(B|A) + P(\\overline{A})P(B|\\overline{A})}$.',
      'Công thức Bayes cho phép tính "xác suất hậu nghiệm" $P(A|B)$ từ "xác suất tiên nghiệm" $P(A)$ khi biết kết quả $B$ đã xảy ra.',
      'sp_prob_tree_bayes'
    ),
    makeMC(
      'b19d1',
      3,
      'Tính xác suất bằng công thức xác suất toàn phần',
      'Cho hai biến cố $A$ và $B$ thỏa mãn $P(A) = 0{,}4$; $P(B|A) = 0{,}7$ và $P(B|\\overline{A}) = 0{,}2$. Giá trị của $P(B)$ bằng:',
      [
        '$0{,}4$',
        '$0{,}9$',
        '$0{,}28$',
        '$0{,}5$',
      ],
      'A',
      'Ta có $P(\\overline{A}) = 1 - 0{,}4 = 0{,}6$. Theo công thức xác suất toàn phần: $P(B) = 0{,}4 \\times 0{,}7 + 0{,}6 \\times 0{,}2 = 0{,}28 + 0{,}12 = 0{,}4$.',
      'Tính $P(\\overline{A}) = 1 - P(A)$ trước khi áp dụng công thức xác suất toàn phần.'
    ),
    makeMC(
      'b19d1',
      4,
      'Tính xác suất bằng công thức Bayes',
      'Cho hai biến cố $A$ và $B$ thỏa mãn $P(A) = 0{,}4$; $P(B|A) = 0{,}7$ và $P(B|\\overline{A}) = 0{,}2$. Giá trị của $P(A|B)$ bằng:',
      [
        '$0{,}7$',
        '$0{,}4$',
        '$0{,}28$',
        '$0{,}3$',
      ],
      'A',
      'Ta có $P(B) = 0{,}4 \\times 0{,}7 + 0{,}6 \\times 0{,}2 = 0{,}4$. Theo công thức Bayes: $P(A|B) = \\frac{P(A)P(B|A)}{P(B)} = \\frac{0{,}28}{0{,}4} = 0{,}7$.',
      'Tử số của công thức Bayes chính là hạng tử đầu tiên trong tổng ở mẫu số.',
      'sp_prob_tree_bayes'
    ),
    makeMC(
      'b19d1',
      5,
      'Tính xác suất P(A ngang | B) bằng công thức Bayes',
      'Với giả thiết ở câu trên ($P(A) = 0{,}4; P(B|A) = 0{,}7; P(B|\\overline{A}) = 0{,}2$), giá trị của $P(\\overline{A}|B)$ bằng:',
      [
        '$0{,}3$',
        '$0{,}7$',
        '$0{,}6$',
        '$0{,}8$',
      ],
      'A',
      'Ta có $P(\\overline{A}|B) = 1 - P(A|B) = 1 - 0{,}7 = 0{,}3$ (hoặc $\\frac{P(\\overline{A})P(B|\\overline{A})}{P(B)} = \\frac{0{,}12}{0{,}4} = 0{,}3$).',
      'Sau khi đã tính được $P(A|B)$, ta suy ra ngay $P(\\overline{A}|B) = 1 - P(A|B)$.'
    ),
    makeMC(
      'b19d1',
      6,
      'Bài toán hai dây chuyền sản xuất - Xác suất toàn phần',
      'Một nhà máy có hai phân xưởng I và II cùng sản xuất một loại sản phẩm. Phân xưởng I sản xuất $60\\%$ tổng sản lượng với tỉ lệ phế phẩm là $2\\%$. Phân xưởng II sản xuất $40\\%$ tổng sản lượng với tỉ lệ phế phẩm là $3\\%$. Chọn ngẫu nhiên một sản phẩm của nhà máy. Xác suất để chọn được phế phẩm là:',
      [
        '$0{,}024$',
        '$0{,}05$',
        '$0{,}012$',
        '$0{,}025$',
      ],
      'A',
      'Gọi $A$ là biến cố "Sản phẩm của phân xưởng I" ($P(A) = 0{,}6 \\Rightarrow P(\\overline{A}) = 0{,}4$) và $B$ là biến cố "Sản phẩm là phế phẩm". Khi đó $P(B) = 0{,}6 \\times 0{,}02 + 0{,}4 \\times 0{,}03 = 0{,}012 + 0{,}012 = 0{,}024$.',
      'Áp dụng trực tiếp công thức xác suất toàn phần cho hai phân xưởng.'
    ),
    makeMC(
      'b19d1',
      7,
      'Bài toán hai dây chuyền sản xuất - Công thức Bayes',
      'Với số liệu của nhà máy ở câu 6 (Phân xưởng I chiếm $60\\%$ sản lượng, tỉ lệ phế phẩm $2\\%$; Phân xưởng II chiếm $40\\%$ sản lượng, tỉ lệ phế phẩm $3\\%$). Giả sử sản phẩm lấy ra là phế phẩm, xác suất để phế phẩm đó do phân xưởng I sản xuất bằng:',
      [
        '$0{,}5$',
        '$0{,}6$',
        '$0{,}4$',
        '$0{,}24$',
      ],
      'A',
      'Theo công thức Bayes: $P(A|B) = \\frac{0{,}6 \\times 0{,}02}{0{,}6 \\times 0{,}02 + 0{,}4 \\times 0{,}03} = \\frac{0{,}012}{0{,}024} = 0{,}5$.',
      'Mặc dù phân xưởng I sản xuất nhiều hơn ($60\\%$), nhưng tỉ lệ phế phẩm thấp hơn ($2\\%$), nên đóng góp số phế phẩm đúng bằng phân xưởng II!',
      'sp_prob_tree_bayes'
    ),
    makeMC(
      'b19d1',
      8,
      'Bài toán chọn hộp rồi rút bi',
      'Có hai chiếc hộp: Hộp I có $3$ bi đỏ và $2$ bi xanh; Hộp II có $2$ bi đỏ và $3$ bi xanh. Tung một đồng xu cân đối: nếu ra mặt Sấp thì chọn Hộp I, nếu ra mặt Ngửa thì chọn Hộp II, rồi từ hộp đã chọn lấy ngẫu nhiên $1$ viên bi. Xác suất để lấy được viên bi màu đỏ bằng:',
      [
        '$0{,}5$',
        '$0{,}6$',
        '$0{,}4$',
        '$0{,}25$',
      ],
      'A',
      'Xác suất chọn mỗi hộp là $0{,}5$. Theo công thức xác suất toàn phần: $P(\\text{Đỏ}) = 0{,}5 \\times \\frac{3}{5} + 0{,}5 \\times \\frac{2}{5} = 0{,}3 + 0{,}2 = 0{,}5$.',
      'Biến cố $A$: "Chọn Hộp I" có $P(A) = P(\\overline{A}) = 0{,}5$.'
    ),
    makeMC(
      'b19d1',
      9,
      'Rút thăm hai lần không hoàn lại - Tính xác suất lần thứ hai',
      'Một hộp có $6$ quả bóng bàn màu cam và $4$ quả bóng bàn màu trắng. Lấy ngẫu nhiên lần lượt $2$ quả bóng (mỗi lần $1$ quả, không hoàn lại). Xác suất để lần thứ hai lấy được quả bóng màu cam bằng:',
      [
        '$0{,}6$',
        '$\\frac{5}{9}$',
        '$\\frac{2}{3}$',
        '$0{,}5$',
      ],
      'A',
      'Gọi $A_1, A_2$ là biến cố lần 1, lần 2 lấy được bóng cam. Theo công thức xác suất toàn phần: $P(A_2) = P(A_1)P(A_2|A_1) + P(\\overline{A_1})P(A_2|\\overline{A_1}) = \\frac{6}{10}\\cdot\\frac{5}{9} + \\frac{4}{10}\\cdot\\frac{6}{9} = \\frac{30 + 24}{90} = \\frac{54}{90} = 0{,}6$.',
      'Quy tắc bất biến thú vị: Khi chưa biết kết quả lần 1, xác suất lấy được bóng cam ở lần thứ 2 (hay bất kỳ lần nào) luôn bằng xác suất ở lần 1 ($\\frac{6}{10} = 0{,}6$).'
    ),
    makeMC(
      'b19d1',
      10,
      'Bài toán lọc thư rác (Spam filter)',
      'Trong hòm thư điện tử của một người, có $20\\%$ tổng số email gửi đến là thư rác (spam). Phần mềm lọc thư rác sẽ gắn nhãn cảnh báo cho $95\\%$ các thư rác và gắn nhãn cảnh báo nhầm cho $5\\%$ các thư bình thường. Tỉ lệ email nhận được bị phần mềm gắn nhãn cảnh báo là:',
      [
        '$23\\%$',
        '$19\\%$',
        '$20\\%$',
        '$24\\%$',
      ],
      'A',
      'Gọi $A$ là "Thư rác" ($P(A) = 0{,}2, P(\\overline{A}) = 0{,}8$) và $B$ là "Bị gắn nhãn cảnh báo". Ta có $P(B) = 0{,}2 \\times 0{,}95 + 0{,}8 \\times 0{,}05 = 0{,}19 + 0{,}04 = 0{,}23 = 23\\%$.',
      'Cộng tỉ lệ cảnh báo đúng trên thư rác ($0{,}19$) và tỉ lệ cảnh báo nhầm trên thư thường ($0{,}04$).',
      'sp_prob_tree_bayes'
    ),
    makeMC(
      'b19d1',
      11,
      'Bài toán y tế: Xác suất dương tính',
      'Tỉ lệ người mắc một loại bệnh $X$ trong một vùng dân cư là $5\\%$. Một xét nghiệm chẩn đoán bệnh $X$ cho kết quả dương tính với $96\\%$ người mắc bệnh và cho kết quả dương tính giả với $2\\%$ người không mắc bệnh. Chọn ngẫu nhiên một người đi xét nghiệm. Xác suất để người đó có kết quả xét nghiệm dương tính là:',
      [
        '$0{,}067$',
        '$0{,}048$',
        '$0{,}019$',
        '$0{,}07$',
      ],
      'A',
      'Theo công thức xác suất toàn phần: $P(+) = 0{,}05 \\times 0{,}96 + 0{,}95 \\times 0{,}02 = 0{,}048 + 0{,}019 = 0{,}067$.',
      'Người có kết quả dương tính gồm 2 nhóm: mắc bệnh thật và dương tính ($0{,}048$) hoặc không mắc bệnh nhưng dương tính giả ($0{,}019$).'
    ),
    makeMC(
      'b19d1',
      12,
      'Bài toán thực tế: Phương tiện đi làm và đi muộn',
      'Anh Nam đi làm bằng xe buýt với xác suất $0{,}7$ và đi bằng xe máy với xác suất $0{,}3$. Nếu đi xe buýt thì xác suất anh Nam đi làm muộn là $0{,}05$; nếu đi xe máy thì xác suất đi làm muộn là $0{,}1$. Hôm nay anh Nam đi làm muộn, xác suất để hôm nay anh đi làm bằng xe máy là:',
      [
        '$\\frac{6}{13}$',
        '$\\frac{7}{13}$',
        '$0{,}065$',
        '$0{,}3$',
      ],
      'A',
      'Gọi $A$: "Đi xe máy" ($P(A) = 0{,}3, P(\\overline{A}) = 0{,}7$) và $B$: "Đi muộn". Ta có $P(B) = 0{,}3 \\times 0{,}1 + 0{,}7 \\times 0{,}05 = 0{,}03 + 0{,}035 = 0{,}065$. Theo công thức Bayes: $P(A|B) = \\frac{0{,}03}{0{,}065} = \\frac{6}{13}$.',
      'Xác định rõ biến cố cần tính xác suất hậu nghiệm là "Đi xe máy" ($A$) hay "Đi xe buýt" ($\\overline{A}$).',
      'sp_prob_tree_bayes'
    ),
  ],
  [
    makeTF(
      'b19d1',
      1,
      'Phân tích bài toán xét nghiệm y khoa bằng công thức toàn phần và Bayes',
      'Tại một trang trại gia cầm, tỉ lệ gà mắc một loại virus là $10\\%$. Bác sĩ thú y dùng một bộ kit xét nghiệm nhanh cho thấy: Nếu gà mắc virus thì xác suất kit báo dương tính là $90\\%$; nếu gà không mắc virus thì xác suất kit báo âm tính là $95\\%$. Chọn ngẫu nhiên một con gà trong trang trại để xét nghiệm. Gọi $A$ là biến cố "Gà mắc virus" và $B$ là biến cố "Kit xét nghiệm báo dương tính".',
      [
        {
          text: 'Ta có $P(A) = 0{,}1$; $P(\\overline{A}) = 0{,}9$ và $P(B|A) = 0{,}9$.',
          isCorrect: true,
          exp: 'Từ giả thiết đề bài: $P(A) = 10\\% = 0{,}1 \\Rightarrow P(\\overline{A}) = 0{,}9$ và $P(B|A) = 90\\% = 0{,}9$.',
        },
        {
          text: 'Xác suất kit báo dương tính giả đối với gà không mắc virus là $P(B|\\overline{A}) = 0{,}05$.',
          isCorrect: true,
          exp: 'Vì $P(\\overline{B}|\\overline{A}) = 0{,}95$ (báo âm tính khi không mắc bệnh) nên $P(B|\\overline{A}) = 1 - 0{,}95 = 0{,}05$.',
        },
        {
          text: 'Xác suất để con gà được chọn có kết quả xét nghiệm dương tính là $P(B) = 0{,}135$.',
          isCorrect: true,
          exp: 'Theo công thức xác suất toàn phần: $P(B) = 0{,}1 \\times 0{,}9 + 0{,}9 \\times 0{,}05 = 0{,}09 + 0{,}045 = 0{,}135$.',
        },
        {
          text: 'Biết con gà có kết quả xét nghiệm dương tính, xác suất để con gà đó thực sự mắc virus là $0{,}75$.',
          isCorrect: false,
          exp: 'Theo công thức Bayes: $P(A|B) = \\frac{0{,}09}{0{,}135} = \\frac{2}{3} \\approx 0{,}667 \\ne 0{,}75$.',
        },
      ],
      'Chú ý: Khi đề cho xác suất âm tính thật $P(\\overline{B}|\\overline{A}) = 0{,}95$, phải lấy $1 - 0{,}95 = 0{,}05$ để có $P(B|\\overline{A})$.',
      'sp_prob_tree_bayes'
    ),
    makeTF(
      'b19d1',
      2,
      'Bài toán chuyển bi giữa hai hộp',
      'Hộp thứ nhất có $4$ viên bi đỏ và $6$ viên bi xanh. Hộp thứ hai có $7$ viên bi đỏ và $3$ viên bi xanh. Lấy ngẫu nhiên $1$ viên bi từ hộp thứ nhất bỏ sang hộp thứ hai, sau đó lấy ngẫu nhiên $1$ viên bi từ hộp thứ hai ra. Gọi $A$ là biến cố "Viên bi chuyển từ hộp thứ nhất sang hộp thứ hai là bi đỏ" và $B$ là biến cố "Viên bi lấy ra từ hộp thứ hai là bi đỏ".',
      [
        {
          text: 'Xác suất của biến cố $A$ là $P(A) = 0{,}4$ và $P(\\overline{A}) = 0{,}6$.',
          isCorrect: true,
          exp: 'Hộp 1 có $4$ đỏ và $6$ xanh trên tổng $10$ bi nên $P(A) = \\frac{4}{10} = 0{,}4$ và $P(\\overline{A}) = 0{,}6$.',
        },
        {
          text: 'Nếu biến cố $A$ xảy ra thì hộp thứ hai có $8$ bi đỏ trong tổng số $11$ bi, tức $P(B|A) = \\frac{8}{11}$.',
          isCorrect: true,
          exp: 'Bỏ thêm $1$ bi đỏ vào hộp 2 (đang có $7$ đỏ, $3$ xanh) thì hộp 2 có $8$ đỏ và $3$ xanh (tổng $11$ bi).',
        },
        {
          text: 'Xác suất để viên bi lấy ra từ hộp thứ hai là bi đỏ bằng $\\frac{37}{55}$.',
          isCorrect: true,
          exp: '$P(B) = 0{,}4 \\times \\frac{8}{11} + 0{,}6 \\times \\frac{7}{11} = \\frac{3{,}2 + 4{,}2}{11} = \\frac{7{,}4}{11} = \\frac{37}{55}$.',
        },
        {
          text: 'Biết viên bi lấy ra từ hộp thứ hai là bi đỏ, xác suất để viên bi đã chuyển từ hộp thứ nhất sang là bi đỏ bằng $\\frac{16}{37}$.',
          isCorrect: true,
          exp: 'Theo công thức Bayes: $P(A|B) = \\frac{3{,}2 / 11}{7{,}4 / 11} = \\frac{32}{74} = \\frac{16}{37}$.',
        },
      ],
      'Khi bỏ 1 viên bi từ hộp 1 sang hộp 2, tổng số bi ở hộp 2 tăng từ $10$ lên $11$ viên.',
      'sp_prob_tree_bayes'
    ),
    makeTF(
      'b19d1',
      3,
      'Bài toán thực tế: Hai xạ thủ bắn bia',
      'Trong một đội bắn súng có $3$ vận động viên hạng I và $7$ vận động viên hạng II. Xác suất bắn trúng hồng tâm của mỗi vận động viên hạng I là $0{,}9$ và của mỗi vận động viên hạng II là $0{,}7$. Chọn ngẫu nhiên một vận động viên trong đội và cho bắn một viên đạn vào bia. Gọi $A$ là biến cố "Chọn được vận động viên hạng I" và $B$ là biến cố "Viên đạn bắn trúng hồng tâm".',
      [
        {
          text: 'Xác suất chọn được vận động viên hạng I là $P(A) = 0{,}3$ và hạng II là $P(\\overline{A}) = 0{,}7$.',
          isCorrect: true,
          exp: 'Có $3$ VĐV hạng I và $7$ VĐV hạng II trong tổng $10$ người.',
        },
        {
          text: 'Xác suất để viên đạn bắn trúng hồng tâm là $P(B) = 0{,}76$.',
          isCorrect: true,
          exp: '$P(B) = 0{,}3 \\times 0{,}9 + 0{,}7 \\times 0{,}7 = 0{,}27 + 0{,}49 = 0{,}76$.',
        },
        {
          text: 'Xác suất để viên đạn bắn trượt hồng tâm là $0{,}34$.',
          isCorrect: false,
          exp: '$P(\\overline{B}) = 1 - P(B) = 1 - 0{,}76 = 0{,}24 \\ne 0{,}34$.',
        },
        {
          text: 'Giả sử viên đạn bắn trúng hồng tâm, xác suất để người bắn là vận động viên hạng I bằng $\\frac{27}{76}$.',
          isCorrect: true,
          exp: 'Theo công thức Bayes: $P(A|B) = \\frac{0{,}27}{0{,}76} = \\frac{27}{76}$.',
        },
      ],
      'Kiểm tra nhanh kết quả bằng cách tính trên tổng $10$ VĐV.'
    ),
  ],
  [
    makeSA(
      'b19d1',
      1,
      'Áp dụng công thức xác suất toàn phần',
      'Cho hai biến cố $A$ và $B$ có $P(A) = 0{,}25$; $P(B|A) = 0{,}8$ và $P(B|\\overline{A}) = 0{,}4$. Tính xác suất $P(B)$.',
      ['0.5', '0,5'],
      'Ta có $P(\\overline{A}) = 1 - 0{,}25 = 0{,}75$. Theo công thức xác suất toàn phần: $P(B) = 0{,}25 \\times 0{,}8 + 0{,}75 \\times 0{,}4 = 0{,}2 + 0{,}3 = 0{,}5$.',
      'Cộng hai nhánh $0{,}2 + 0{,}3 = 0{,}5$.',
      undefined,
      'sp_prob_tree_bayes'
    ),
    makeSA(
      'b19d1',
      2,
      'Áp dụng công thức Bayes',
      'Cho hai biến cố $A$ và $B$ có $P(A) = 0{,}25$; $P(B|A) = 0{,}8$ và $P(B|\\overline{A}) = 0{,}4$. Tính xác suất có điều kiện $P(A|B)$.',
      ['0.4', '0,4'],
      'Từ câu 1, ta có $P(AB) = 0{,}2$ và $P(B) = 0{,}5$. Theo công thức Bayes: $P(A|B) = \\frac{0{,}2}{0{,}5} = 0{,}4$.',
      'Chia xác suất nhánh $AB$ ($0{,}2$) cho xác suất toàn phần $P(B)$ ($0{,}5$).'
    ),
    makeSA(
      'b19d1',
      3,
      'Bài toán kiểm định chất lượng sản phẩm (OTK)',
      'Một lô hàng có $90\\%$ sản phẩm đạt chuẩn và $10\\%$ sản phẩm lỗi. Máy kiểm định tự động sẽ thông qua (báo đạt) cho $95\\%$ sản phẩm đạt chuẩn, nhưng cũng thông qua nhầm cho $15\\%$ sản phẩm lỗi. Chọn ngẫu nhiên một sản phẩm trong lô đưa qua máy kiểm định. Tính xác suất để sản phẩm đó được máy thông qua.',
      ['0.87', '0,87'],
      'Theo công thức xác suất toàn phần: $P(\\text{Thông qua}) = 0{,}9 \\times 0{,}95 + 0{,}1 \\times 0{,}15 = 0{,}855 + 0{,}015 = 0{,}87$.',
      'Sản phẩm được thông qua gồm sản phẩm đạt chuẩn được duyệt ($0{,}855$) và sản phẩm lỗi lọt lưới ($0{,}015$).'
    ),
    makeSA(
      'b19d1',
      4,
      'Bài toán Bayes trong ngân hàng / tín dụng',
      'Tại một ngân hàng, tỉ lệ khách hàng vay vốn thuộc nhóm tín dụng tốt là $80\\%$ và nhóm tín dụng rủi ro là $20\\%$. Xác suất trả nợ đúng hạn của nhóm tín dụng tốt là $95\\%$ và của nhóm tín dụng rủi ro là $20\\%$. Chọn ngẫu nhiên một hồ sơ khách hàng thấy người đó đã trả nợ đúng hạn. Tính xác suất để khách hàng đó thuộc nhóm tín dụng tốt.',
      ['0.95', '0,95'],
      'Gọi $A$: "Nhóm tín dụng tốt" ($P(A) = 0{,}8, P(\\overline{A}) = 0{,}2$) và $B$: "Trả nợ đúng hạn". Ta có $P(B) = 0{,}8 \\times 0{,}95 + 0{,}2 \\times 0{,}2 = 0{,}76 + 0{,}04 = 0{,}80$. Theo công thức Bayes: $P(A|B) = \\frac{0{,}76}{0{,}80} = 0{,}95$.',
      'Áp dụng công thức Bayes: $\\frac{0{,}76}{0{,}76 + 0{,}04} = 0{,}95$.',
      undefined,
      'sp_prob_tree_bayes'
    ),
  ],
  [
    makeSO(
      'b19d1',
      1,
      'Giải bài toán hai kho hàng bằng công thức xác suất toàn phần và Bayes',
      'Một cửa hàng nhập bóng đèn từ hai nhà máy X và Y. Số bóng đèn nhập từ nhà máy X chiếm $70\\%$ tổng số bóng đèn, phần còn lại nhập từ nhà máy Y. Tỉ lệ bóng đèn hỏng của nhà máy X là $1\\%$ và của nhà máy Y là $2\\%$. Khách hàng mua ngẫu nhiên $1$ bóng đèn tại cửa hàng và phát hiện bóng đèn đó bị hỏng. Hãy tính xác suất để bóng đèn hỏng đó có nguồn gốc từ nhà máy X.',
      'Vậy xác suất để bóng đèn hỏng đó nhập từ nhà máy X là $\\frac{7}{13}$.',
      [
        {
          role: 'Bước 1: Gọi tên các biến cố và xác định các xác suất thành phần',
          content: 'Gọi $A$ là biến cố "Bóng đèn nhập từ nhà máy X" ($P(A) = 0{,}7 \\Rightarrow P(\\overline{A}) = 0{,}3$) và $B$ là biến cố "Bóng đèn bị hỏng" ($P(B|A) = 0{,}01,\\ P(B|\\overline{A}) = 0{,}02$).',
        },
        {
          role: 'Bước 2: Áp dụng công thức xác suất toàn phần tính $P(B)$',
          content: 'Ta có $P(B) = P(A)P(B|A) + P(\\overline{A})P(B|\\overline{A}) = 0{,}7 \\times 0{,}01 + 0{,}3 \\times 0{,}02 = 0{,}007 + 0{,}006 = 0{,}013$.',
        },
        {
          role: 'Bước 3: Áp dụng công thức Bayes tính $P(A|B)$',
          content: 'Theo công thức Bayes: $P(A|B) = \\frac{P(A)P(B|A)}{P(B)} = \\frac{0{,}007}{0{,}013} = \\frac{7}{13}$.',
        },
      ],
      'Quy trình chuẩn 3 bước khi giải bài toán Bayes: Gọi biến cố $\\to$ Tính xác suất toàn phần $P(B) \\to$ Thay vào công thức Bayes.',
      'Bài toán mẫu mực bám sát cấu trúc trình bày tự luận trong SGK Toán 12 Tập 2.',
      0.7,
      'sp_prob_tree_bayes'
    ),
    makeSO(
      'b19d1',
      2,
      'Bài toán y khoa: Giải thích hiện tượng dương tính giả với bệnh hiếm gặp',
      'Một căn bệnh hiếm gặp có tỉ lệ người mắc trong cộng đồng là $0{,}1\\%$ (tức $0{,}001$). Một phương pháp xét nghiệm có độ nhạy $99\\%$ (nếu mắc bệnh thì $99\\%$ cho kết quả dương tính) và độ đặc hiệu $99\\%$ (nếu không mắc bệnh thì $99\\%$ cho kết quả âm tính). Chọn ngẫu nhiên một người đi xét nghiệm và nhận kết quả dương tính. Tính xác suất người đó thực sự mắc bệnh.',
      'Vậy xác suất người đó thực sự mắc bệnh là $\\frac{11}{122} \\approx 9{,}02\\%$.',
      [
        {
          role: 'Bước 1: Biểu diễn các xác suất theo biến cố $A$ (mắc bệnh) và $B$ (dương tính)',
          content: 'Ta có $P(A) = 0{,}001,\\ P(\\overline{A}) = 0{,}999$; $P(B|A) = 0{,}99$ và $P(B|\\overline{A}) = 1 - 0{,}99 = 0{,}01$.',
        },
        {
          role: 'Bước 2: Tính xác suất có kết quả dương tính $P(B)$ bằng công thức toàn phần',
          content: 'Ta có $P(B) = 0{,}001 \\times 0{,}99 + 0{,}999 \\times 0{,}01 = 0{,}00099 + 0{,}00999 = 0{,}01098$.',
        },
        {
          role: 'Bước 3: Tính xác suất thực sự mắc bệnh $P(A|B)$ theo công thức Bayes',
          content: 'Ta có $P(A|B) = \\frac{0{,}00099}{0{,}01098} = \\frac{99}{1098} = \\frac{11}{122} \\approx 9{,}02\\%$.',
        },
      ],
      'Với bệnh rất hiếm gặp ($0{,}1\\%$), số ca dương tính giả trong cộng đồng lớn hơn nhiều số ca dương tính thật, nên khi mới xét nghiệm 1 lần dương tính thì xác suất mắc bệnh thật chỉ khoảng $9\\%$.',
      'Bài toán y học nổi tiếng minh họa ý nghĩa thực tiễn sâu sắc của định lý Bayes trong SGK.',
      0.65,
      'sp_prob_tree_bayes'
    ),
    makeSO(
      'b19d1',
      3,
      'Bài toán trắc nghiệm: Biết làm bài hay đoán mò',
      'Trong một kỳ thi trắc nghiệm, mỗi câu hỏi có $4$ phương án lựa chọn trong đó chỉ có $1$ phương án đúng. Một học sinh làm một câu hỏi với xác suất thuộc bài (chắc chắn chọn đúng) là $0{,}7$; nếu không thuộc bài (xác suất $0{,}3$) thì học sinh đó khoanh ngẫu nhiên $1$ trong $4$ phương án. Biết rằng học sinh đó đã trả lời đúng câu hỏi này, hãy tính xác suất để học sinh đó thực sự thuộc bài.',
      'Vậy xác suất để học sinh đó thực sự thuộc bài là $\\frac{28}{31}$.',
      [
        {
          role: 'Bước 1: Gọi tên các biến cố và xác định xác suất trên từng nhánh',
          content: 'Gọi $A$ là biến cố "Học sinh thuộc bài" ($P(A) = 0{,}7,\\ P(\\overline{A}) = 0{,}3$) và $B$ là biến cố "Trả lời đúng". Ta có $P(B|A) = 1$ và $P(B|\\overline{A}) = \\frac{1}{4} = 0{,}25$.',
        },
        {
          role: 'Bước 2: Tính xác suất trả lời đúng câu hỏi $P(B)$',
          content: 'Theo công thức xác suất toàn phần: $P(B) = 0{,}7 \\times 1 + 0{,}3 \\times 0{,}25 = 0{,}7 + 0{,}075 = 0{,}775$.',
        },
        {
          role: 'Bước 3: Áp dụng công thức Bayes tính $P(A|B)$',
          content: 'Ta có $P(A|B) = \\frac{0{,}7 \\times 1}{0{,}775} = \\frac{700}{775} = \\frac{28}{31}$.',
        },
      ],
      'Khi học sinh thuộc bài thì chắc chắn chọn phương án đúng nên $P(B|A) = 1$.',
      'Bài toán thực tế gần gũi và rất hay gặp trong các đề thi THPT.',
      0.65
    ),
  ]
);

const bai19De2 = makeLessonExam(
  'bai19-de02',
  'Bài 19 - Đề ôn số 2',
  'Công thức xác suất toàn phần và Công thức Bayes: Nâng cao và thực tế đa lĩnh vực',
  'Đề ôn tập Bài 19 (Số 2) gồm 22 câu hỏi chuẩn cấu trúc 4 phần, rèn luyện kỹ năng vận dụng công thức xác suất toàn phần và công thức Bayes trong các bài toán thực tế.',
  [
    makeMC(
      'b19d2',
      1,
      'Liên hệ giữa công thức nhân và công thức xác suất toàn phần',
      'Cho hai biến cố $A$ và $B$. Biết $P(AB) = 0{,}18$ và $P(\\overline{A}B) = 0{,}22$. Khi đó xác suất của biến cố $B$ bằng:',
      [
        '$0{,}4$',
        '$0{,}04$',
        '$0{,}396$',
        '$0{,}45$',
      ],
      'A',
      'Vì $AB$ và $\\overline{A}B$ là hai biến cố xung khắc có hợp bằng $B$ nên $P(B) = P(AB) + P(\\overline{A}B) = 0{,}18 + 0{,}22 = 0{,}4$.',
      'Bản chất của công thức xác suất toàn phần là $P(B) = P(AB) + P(\\overline{A}B)$.'
    ),
    makeMC(
      'b19d2',
      2,
      'Tính nhanh công thức Bayes khi biết P(AB) và P(A ngang B)',
      'Cho hai biến cố $A$ và $B$ biết $P(AB) = 0{,}15$ và $P(\\overline{A}B) = 0{,}35$. Giá trị của $P(A|B)$ bằng:',
      [
        '$0{,}3$',
        '$0{,}7$',
        '$0{,}5$',
        '$0{,}15$',
      ],
      'A',
      'Ta có $P(B) = P(AB) + P(\\overline{A}B) = 0{,}15 + 0{,}35 = 0{,}5$. Suy ra $P(A|B) = \\frac{P(AB)}{P(B)} = \\frac{0{,}15}{0{,}5} = 0{,}3$.',
      'Chia $P(AB)$ cho tổng $P(AB) + P(\\overline{A}B)$.'
    ),
    makeMC(
      'b19d2',
      3,
      'Tìm P(A) từ công thức xác suất toàn phần',
      'Cho hai biến cố $A$ và $B$ thỏa mãn $P(B|A) = 0{,}8$; $P(B|\\overline{A}) = 0{,}3$ và $P(B) = 0{,}5$. Khi đó xác suất $P(A)$ bằng:',
      [
        '$0{,}4$',
        '$0{,}6$',
        '$0{,}5$',
        '$0{,}3$',
      ],
      'A',
      'Đặt $P(A) = x \\Rightarrow P(\\overline{A}) = 1 - x$. Theo công thức xác suất toàn phần: $0{,}8x + 0{,}3(1 - x) = 0{,}5 \\Leftrightarrow 0{,}5x = 0{,}2 \\Leftrightarrow x = 0{,}4$.',
      'Đặt $P(A) = x$ và $P(\\overline{A}) = 1 - x$ rồi giải phương trình bậc nhất.',
      'sp_prob_tree_bayes'
    ),
    makeMC(
      'b19d2',
      4,
      'Xác suất toàn phần trong bài toán gieo đồng xu không cân đối',
      'Có hai đồng xu: Đồng xu thứ nhất cân đối (xác suất ra mặt Ngửa là $0{,}5$); đồng xu thứ hai bị lệch sao cho xác suất ra mặt Ngửa là $0{,}8$. Chọn ngẫu nhiên một đồng xu và tung một lần. Xác suất để xuất hiện mặt Ngửa là:',
      [
        '$0{,}65$',
        '$0{,}4$',
        '$0{,}5$',
        '$0{,}35$',
      ],
      'A',
      'Xác suất chọn mỗi đồng xu là $0{,}5$. Khi đó $P(\\text{Ngửa}) = 0{,}5 \\times 0{,}5 + 0{,}5 \\times 0{,}8 = 0{,}25 + 0{,}40 = 0{,}65$.',
      'Khi chọn ngẫu nhiên 1 trong 2 đồng xu, xác suất tiên nghiệm là $0{,}5$ và $0{,}5$.'
    ),
    makeMC(
      'b19d2',
      5,
      'Công thức Bayes cho bài toán đồng xu lệch',
      'Với hai đồng xu ở câu 4 (đồng xu I có $P(N) = 0{,}5$; đồng xu II có $P(N) = 0{,}8$). Chọn ngẫu nhiên một đồng xu và tung một lần thì thấy xuất hiện mặt Ngửa. Xác suất để đồng xu đã chọn là đồng xu thứ hai bằng:',
      [
        '$\\frac{8}{13}$',
        '$\\frac{5}{13}$',
        '$0{,}8$',
        '$0{,}65$',
      ],
      'A',
      'Theo công thức Bayes: $P(II|\\text{Ngửa}) = \\frac{0{,}5 \\times 0{,}8}{0{,}65} = \\frac{0{,}4}{0{,}65} = \\frac{8}{13}$.',
      'Vì đồng xu II dễ ra mặt Ngửa hơn, nên khi thấy mặt Ngửa xuất hiện, khả năng đó là đồng xu II tăng từ $\\frac{1}{2}$ lên $\\frac{8}{13}$.'
    ),
    makeMC(
      'b19d2',
      6,
      'Bài toán nảy mầm của hạt giống từ hai nguồn',
      'Một trạm giống cây trồng trộn hạt giống loại A (chiếm $80\\%$) và hạt giống loại B (chiếm $20\\%$). Tỉ lệ nảy mầm của hạt giống loại A là $95\\%$ và của hạt giống loại B là $75\\%$. Lấy ngẫu nhiên $1$ hạt giống đem gieo. Xác suất để hạt giống đó nảy mầm là:',
      [
        '$0{,}91$',
        '$0{,}85$',
        '$0{,}76$',
        '$0{,}90$',
      ],
      'A',
      'Áp dụng công thức xác suất toàn phần: $P(\\text{Nảy mầm}) = 0{,}8 \\times 0{,}95 + 0{,}2 \\times 0{,}75 = 0{,}76 + 0{,}15 = 0{,}91$.',
      'Cộng xác suất hai nhánh: $0{,}76 + 0{,}15 = 0{,}91$.',
      'sp_prob_tree_bayes'
    ),
    makeMC(
      'b19d2',
      7,
      'Xác suất hạt không nảy mầm thuộc loại B',
      'Với hỗn hợp hạt giống ở câu 6 (Loại A chiếm $80\\%$, nảy mầm $95\\%$; Loại B chiếm $20\\%$, nảy mầm $75\\%$). Nếu một hạt giống gieo xuống mà **không** nảy mầm, xác suất để hạt đó thuộc loại B là:',
      [
        '$\\frac{5}{9}$',
        '$\\frac{4}{9}$',
        '$0{,}09$',
        '$0{,}25$',
      ],
      'A',
      'Xác suất hạt không nảy mầm là $P(\\overline{M}) = 1 - 0{,}91 = 0{,}09$ (trong đó nhánh loại B không nảy mầm là $0{,}2 \\times 0{,}25 = 0{,}05$). Vậy $P(B|\\overline{M}) = \\frac{0{,}05}{0{,}09} = \\frac{5}{9}$.',
      'Chú ý biến cố kết quả ở đây là "không nảy mầm" ($\\overline{M}$).'
    ),
    makeMC(
      'b19d2',
      8,
      'Bài toán rút thẻ từ hộp qua 2 bước',
      'Một hộp có $5$ tấm thẻ trắng và $5$ tấm thẻ đen. Rút ngẫu nhiên $1$ tấm thẻ: nếu là thẻ trắng thì bỏ lại vào hộp cùng với $2$ tấm thẻ trắng nữa; nếu là thẻ đen thì bỏ lại vào hộp cùng với $2$ tấm thẻ đen nữa. Sau đó rút ngẫu nhiên $1$ tấm thẻ từ hộp. Xác suất để lần thứ hai rút được tấm thẻ trắng là:',
      [
        '$0{,}5$',
        '$\\frac{7}{12}$',
        '$\\frac{5}{12}$',
        '$0{,}6$',
      ],
      'A',
      'Sau bước 1, hộp có $12$ thẻ. Ta có $P(T_2) = P(T_1)P(T_2|T_1) + P(Đ_1)P(T_2|Đ_1) = 0{,}5 \\times \\frac{7}{12} + 0{,}5 \\times \\frac{5}{12} = 0{,}5 \\times 1 = 0{,}5$.',
      'Do tính đối xứng hoàn toàn giữa số thẻ trắng và đen ban đầu cũng như số thẻ thêm vào, xác suất rút được thẻ trắng ở lần 2 vẫn bằng $0{,}5$ (mô hình bình Polya).'
    ),
    makeMC(
      'b19d2',
      9,
      'Bài toán tai nạn bảo hiểm ô tô',
      'Một công ty bảo hiểm chia tài xế thành hai nhóm: Nhóm cẩn thận (chiếm $75\\%$) có xác suất gặp sự cố trong năm là $0{,}04$; Nhóm thiếu cẩn thận (chiếm $25\\%$) có xác suất gặp sự cố trong năm là $0{,}16$. Chọn ngẫu nhiên một tài xế mua bảo hiểm. Xác suất để tài xế đó gặp sự cố trong năm là:',
      [
        '$0{,}07$',
        '$0{,}03$',
        '$0{,}04$',
        '$0{,}10$',
      ],
      'A',
      'Ta có $P(\\text{Sự cố}) = 0{,}75 \\times 0{,}04 + 0{,}25 \\times 0{,}16 = 0{,}03 + 0{,}04 = 0{,}07$.',
      'Áp dụng công thức xác suất toàn phần.'
    ),
    makeMC(
      'b19d2',
      10,
      'Tính xác suất Bayes cho khách hàng bảo hiểm',
      'Từ số liệu của câu 9, nếu một tài xế đã yêu cầu bồi thường do gặp sự cố trong năm, xác suất để tài xế đó thuộc nhóm thiếu cẩn thận là:',
      [
        '$\\frac{4}{7}$',
        '$\\frac{3}{7}$',
        '$0{,}25$',
        '$0{,}16$',
      ],
      'A',
      'Theo công thức Bayes: $P(\\text{Thiếu cẩn thận}|\\text{Sự cố}) = \\frac{0{,}25 \\times 0{,}16}{0{,}07} = \\frac{0{,}04}{0{,}07} = \\frac{4}{7}$.',
      'Mặc dù nhóm thiếu cẩn thận chỉ chiếm $25\\%$, nhưng chiếm tới $\\frac{4}{7}$ số vụ sự cố!',
      'sp_prob_tree_bayes'
    ),
    makeMC(
      'b19d2',
      11,
      'Mở rộng công thức xác suất toàn phần cho 3 nhóm xung khắc',
      'Một xưởng có $3$ máy tự động I, II, III sản xuất lần lượt $50\\%$, $30\\%$ và $20\\%$ tổng số sản phẩm. Tỉ lệ phế phẩm của các máy I, II, III tương ứng là $1\\%$, $2\\%$ và $3\\%$. Chọn ngẫu nhiên $1$ sản phẩm của xưởng. Xác suất để sản phẩm đó là phế phẩm bằng:',
      [
        '$0{,}017$',
        '$0{,}06$',
        '$0{,}02$',
        '$0{,}015$',
      ],
      'A',
      'Công thức xác suất toàn phần cho 3 nhánh: $P(B) = 0{,}5 \\times 0{,}01 + 0{,}3 \\times 0{,}02 + 0{,}2 \\times 0{,}03 = 0{,}005 + 0{,}006 + 0{,}006 = 0{,}017$.',
      'Công thức xác suất toàn phần mở rộng tự nhiên cho hệ đầy đủ $3$ biến cố đôi một xung khắc.'
    ),
    makeMC(
      'b19d2',
      12,
      'Bài toán thực tế: AI chẩn đoán hình ảnh y khoa',
      'Một hệ thống hỗ trợ chẩn đoán hình ảnh X-quang được thử nghiệm trên nhóm bệnh nhân có $20\\%$ người thực sự có tổn thương phổi. Hệ thống phát hiện đúng $90\\%$ trường hợp có tổn thương và báo nhầm $10\\%$ trường hợp phổi bình thường. Khi hệ thống báo một bệnh nhân có tổn thương phổi, xác suất bệnh nhân đó thực sự có tổn thương phổi là:',
      [
        '$\\frac{9}{13}$',
        '$\\frac{4}{13}$',
        '$0{,}26$',
        '$0{,}9$',
      ],
      'A',
      'Ta có $P(+) = 0{,}2 \\times 0{,}9 + 0{,}8 \\times 0{,}1 = 0{,}18 + 0{,}08 = 0{,}26$. Theo công thức Bayes: $P(\\text{Tổn thương}|+) = \\frac{0{,}18}{0{,}26} = \\frac{9}{13}$.',
      'Tử số là $0{,}18$, mẫu số là $0{,}18 + 0{,}08 = 0{,}26$.',
      'sp_prob_tree_bayes'
    ),
  ],
  [
    makeTF(
      'b19d2',
      1,
      'Khảo sát sơ đồ hình cây và công thức Bayes',
      'Một công ty vận tải có $70\\%$ xe tải chạy tuyến Bắc - Nam và $30\\%$ xe tải chạy tuyến Nội tỉnh. Tỉ lệ xe cần bảo dưỡng định kỳ ngay sau chuyến đi của tuyến Bắc - Nam là $20\\%$ và của tuyến Nội tỉnh là $10\\%$. Chọn ngẫu nhiên một chiếc xe vừa hoàn thành chuyến đi. Gọi $A$ là biến cố "Xe chạy tuyến Bắc - Nam" và $B$ là biến cố "Xe cần bảo dưỡng ngay".',
      [
        {
          text: 'Ta có $P(A) = 0{,}7$; $P(\\overline{A}) = 0{,}3$; $P(B|A) = 0{,}2$ và $P(B|\\overline{A}) = 0{,}1$.',
          isCorrect: true,
          exp: 'Đọc trực tiếp từ số liệu đề bài.',
        },
        {
          text: 'Xác suất để chiếc xe được chọn cần bảo dưỡng ngay là $P(B) = 0{,}17$.',
          isCorrect: true,
          exp: '$P(B) = 0{,}7 \\times 0{,}2 + 0{,}3 \\times 0{,}1 = 0{,}14 + 0{,}03 = 0{,}17$.',
        },
        {
          text: 'Biết chiếc xe được chọn cần bảo dưỡng ngay, xác suất để chiếc xe đó chạy tuyến Bắc - Nam là $\\frac{14}{17}$.',
          isCorrect: true,
          exp: 'Theo công thức Bayes: $P(A|B) = \\frac{0{,}14}{0{,}17} = \\frac{14}{17}$.',
        },
        {
          text: 'Biết chiếc xe được chọn **không** cần bảo dưỡng ngay, xác suất để chiếc xe đó chạy tuyến Nội tỉnh là $\\frac{3}{17}$.',
          isCorrect: false,
          exp: 'Ta có $P(\\overline{B}) = 1 - 0{,}17 = 0{,}83$ và $P(\\overline{A}\\overline{B}) = 0{,}3 \\times 0{,}9 = 0{,}27$. Vậy $P(\\overline{A}|\\overline{B}) = \\frac{27}{83} \\ne \\frac{3}{17}$.',
        },
      ],
      'Khi điều kiện là $\\overline{B}$, phải tính $P(\\overline{B}) = 1 - P(B)$ ở dưới mẫu số.',
      'sp_prob_tree_bayes'
    ),
    makeTF(
      'b19d2',
      2,
      'Bài toán chọn lô hàng và kiểm tra sản phẩm',
      'Có hai lô linh kiện bán dẫn: Lô I có $8$ linh kiện tốt và $2$ linh kiện hỏng; Lô II có $5$ linh kiện tốt và $5$ linh kiện hỏng. Chọn ngẫu nhiên một lô (khả năng chọn mỗi lô là $0{,}5$), rồi từ lô đó lấy ngẫu nhiên ra $1$ linh kiện. Gọi $A$ là biến cố "Chọn được Lô I" và $B$ là biến cố "Lấy được linh kiện tốt".',
      [
        {
          text: 'Xác suất có điều kiện $P(B|A) = 0{,}8$ và $P(B|\\overline{A}) = 0{,}5$.',
          isCorrect: true,
          exp: 'Tỉ lệ linh kiện tốt ở Lô I là $\\frac{8}{10} = 0{,}8$ và ở Lô II là $\\frac{5}{10} = 0{,}5$.',
        },
        {
          text: 'Xác suất để lấy được một linh kiện tốt là $P(B) = 0{,}65$.',
          isCorrect: true,
          exp: '$P(B) = 0{,}5 \\times 0{,}8 + 0{,}5 \\times 0{,}5 = 0{,}4 + 0{,}25 = 0{,}65$.',
        },
        {
          text: 'Giả sử linh kiện lấy ra là linh kiện tốt, xác suất để linh kiện đó thuộc Lô I là $\\frac{8}{13}$.',
          isCorrect: true,
          exp: 'Theo công thức Bayes: $P(A|B) = \\frac{0{,}4}{0{,}65} = \\frac{8}{13}$.',
        },
        {
          text: 'Giả sử linh kiện lấy ra là linh kiện hỏng, xác suất để linh kiện đó thuộc Lô II là $\\frac{5}{13}$.',
          isCorrect: false,
          exp: '$P(\\overline{B}) = 1 - 0{,}65 = 0{,}35$ và $P(\\overline{A}\\overline{B}) = 0{,}5 \\times 0{,}5 = 0{,}25$. Suy ra $P(\\overline{A}|\\overline{B}) = \\frac{0{,}25}{0{,}35} = \\frac{5}{7} \\ne \\frac{5}{13}$.',
        },
      ],
      'Khi $P(A) = P(\\overline{A}) = 0{,}5$, công thức Bayes rút gọn đẹp thành $\\frac{P(B|A)}{P(B|A) + P(B|\\overline{A})}$.'
    ),
    makeTF(
      'b19d2',
      3,
      'Bài toán thực tế: Tín hiệu truyền thông nhị phân qua kênh nhiễu',
      'Trong một hệ thống truyền tin kỹ thuật số, nguồn phát chỉ truyền đi hai ký hiệu nhị phân là $0$ và $1$, với tỉ lệ phát ký hiệu $1$ là $60\\%$ và ký hiệu $0$ là $40\\%$. Do nhiễu trên đường truyền, nếu phát ký hiệu $1$ thì nơi thu nhận đúng là $1$ với xác suất $0{,}95$ (và nhận nhầm thành $0$ với xác suất $0{,}05$); nếu phát ký hiệu $0$ thì nơi thu nhận đúng là $0$ với xác suất $0{,}90$ (và nhận nhầm thành $1$ với xác suất $0{,}10$).',
      [
        {
          text: 'Xác suất để vừa phát ký hiệu $1$ vừa thu được ký hiệu $1$ là $0{,}57$.',
          isCorrect: true,
          exp: '$P(\\text{Phát } 1 \\cap \\text{Thu } 1) = 0{,}6 \\times 0{,}95 = 0{,}57$.',
        },
        {
          text: 'Xác suất để nơi thu nhận được ký hiệu $1$ là $0{,}61$.',
          isCorrect: true,
          exp: '$P(\\text{Thu } 1) = 0{,}6 \\times 0{,}95 + 0{,}4 \\times 0{,}10 = 0{,}57 + 0{,}04 = 0{,}61$.',
        },
        {
          text: 'Khi nơi thu nhận được ký hiệu $1$, xác suất để nguồn phát thực sự đã phát đi ký hiệu $1$ là $\\frac{57}{61}$.',
          isCorrect: true,
          exp: 'Theo công thức Bayes: $P(\\text{Phát } 1 | \\text{Thu } 1) = \\frac{0{,}57}{0{,}61} = \\frac{57}{61}$.',
        },
        {
          text: 'Xác suất để tín hiệu bị truyền sai (phát $1$ thu $0$ hoặc phát $0$ thu $1$) là $0{,}15$.',
          isCorrect: false,
          exp: 'Xác suất truyền sai là $0{,}6 \\times 0{,}05 + 0{,}4 \\times 0{,}10 = 0{,}03 + 0{,}04 = 0{,}07 \\ne 0{,}15$.',
        },
      ],
      'Bài toán truyền tin nhị phân qua kênh nhiễu là một trong những ứng dụng quan trọng nhất của công thức Bayes trong khoa học máy tính và viễn thông.',
      'sp_prob_tree_bayes'
    ),
  ],
  [
    makeSA(
      'b19d2',
      1,
      'Tính xác suất toàn phần',
      'Cho hai biến cố $A$ và $B$ biết $P(A) = 0{,}6$; $P(B|A) = 0{,}5$ và $P(B|\\overline{A}) = 0{,}25$. Tính xác suất $P(B)$.',
      ['0.4', '0,4'],
      'Ta có $P(\\overline{A}) = 0{,}4$. Theo công thức xác suất toàn phần: $P(B) = 0{,}6 \\times 0{,}5 + 0{,}4 \\times 0{,}25 = 0{,}3 + 0{,}1 = 0{,}4$.',
      'Cộng hai nhánh $0{,}3 + 0{,}1 = 0{,}4$.'
    ),
    makeSA(
      'b19d2',
      2,
      'Tính xác suất hậu nghiệm bằng công thức Bayes',
      'Với giả thiết ở câu 1 ($P(A) = 0{,}6; P(B|A) = 0{,}5; P(B|\\overline{A}) = 0{,}25$), tính xác suất có điều kiện $P(A|B)$.',
      ['0.75', '0,75'],
      'Theo công thức Bayes: $P(A|B) = \\frac{0{,}6 \\times 0{,}5}{0{,}4} = \\frac{0{,}3}{0{,}4} = 0{,}75$.',
      'Lấy $0{,}3$ chia cho $0{,}4$ được $0{,}75$.',
      undefined,
      'sp_prob_tree_bayes'
    ),
    makeSA(
      'b19d2',
      3,
      'Bài toán ôn thi và kết quả thi đạt',
      'Trong một đợt kiểm tra chứng chỉ nghề, có $80\\%$ thí sinh đã tham gia khóa ôn tập trước kỳ thi. Tỉ lệ thi đạt của những thí sinh có tham gia khóa ôn tập là $90\\%$, còn tỉ lệ thi đạt của những thí sinh không tham gia khóa ôn tập là $40\\%$. Chọn ngẫu nhiên một thí sinh dự thi. Tính xác suất để thí sinh đó thi đạt.',
      ['0.8', '0,8'],
      'Theo công thức xác suất toàn phần: $P(\\text{Đạt}) = 0{,}8 \\times 0{,}9 + 0{,}2 \\times 0{,}4 = 0{,}72 + 0{,}08 = 0{,}8$.',
      'Tính $P(\\overline{A}) = 1 - 0{,}8 = 0{,}2$ rồi áp dụng công thức xác suất toàn phần.'
    ),
    makeSA(
      'b19d2',
      4,
      'Bài toán thực tế: Xác định nguồn cung cấp hoa quả đạt chuẩn xuất khẩu',
      'Một doanh nghiệp thu mua xoài từ hai nông trại M và N theo tỉ lệ $50\\%$ từ nông trại M và $50\\%$ từ nông trại N. Tỉ lệ xoài đạt chuẩn xuất khẩu loại I của nông trại M là $84\\%$ và của nông trại N là $56\\%$. Chọn ngẫu nhiên một quả xoài trong kho thấy quả đó đạt chuẩn xuất khẩu loại I. Tính xác suất để quả xoài đó được thu mua từ nông trại M.',
      ['0.6', '0,6'],
      'Vì $P(M) = P(N) = 0{,}5$ nên theo công thức Bayes: $P(M|\\text{Loại I}) = \\frac{0{,}84}{0{,}84 + 0{,}56} = \\frac{0{,}84}{1{,}40} = 0{,}6$.',
      'Khi hai nguồn có tỉ lệ bằng nhau ($50\\% - 50\\%$), xác suất Bayes bằng $\\frac{p_1}{p_1 + p_2}$.',
      undefined,
      'sp_prob_tree_bayes'
    ),
  ],
  [
    makeSO(
      'b19d2',
      1,
      'Vận dụng công thức xác suất toàn phần và Bayes trong bài toán chuyển cầu',
      'Bình I chứa $3$ quả cầu trắng và $2$ quả cầu đen. Bình II chứa $2$ quả cầu trắng và $4$ quả cầu đen. Lấy ngẫu nhiên $1$ quả cầu từ Bình I bỏ sang Bình II, sau đó lấy ngẫu nhiên $1$ quả cầu từ Bình II ra. Tính xác suất để quả cầu lấy ra từ Bình II là quả cầu trắng.',
      'Vậy xác suất để quả cầu lấy ra từ Bình II là cầu trắng bằng $\\frac{16}{35}$.',
      [
        {
          role: 'Bước 1: Gọi tên các biến cố và tính xác suất ở bước chuyển cầu từ Bình I',
          content: 'Gọi $A$ là biến cố "Quả cầu chuyển từ Bình I sang Bình II là cầu trắng" và $B$ là biến cố "Quả cầu lấy ra từ Bình II là cầu trắng". Ta có $P(A) = \\frac{3}{5}$ và $P(\\overline{A}) = \\frac{2}{5}$.',
        },
        {
          role: 'Bước 2: Tính các xác suất có điều kiện ở Bình II (có $7$ quả cầu sau khi nhận thêm $1$ quả)',
          content: 'Nếu $A$ xảy ra thì Bình II có $3$ trắng, $4$ đen $\\Rightarrow P(B|A) = \\frac{3}{7}$. Nếu $\\overline{A}$ xảy ra thì Bình II có $2$ trắng, $5$ đen $\\Rightarrow P(B|\\overline{A}) = \\frac{2}{7}$.',
        },
        {
          role: 'Bước 3: Áp dụng công thức xác suất toàn phần tính $P(B)$',
          content: 'Ta có $P(B) = P(A)P(B|A) + P(\\overline{A})P(B|\\overline{A}) = \\frac{3}{5}\\cdot\\frac{3}{7} + \\frac{2}{5}\\cdot\\frac{2}{7} = \\frac{9 + 4}{35} = \\frac{13}{35}$.',
        },
      ],
      'Chú ý mẫu số ở Bình II sau khi nhận thêm 1 quả cầu là $2 + 4 + 1 = 7$.',
      'Bài toán kinh điển rèn luyện tư duy phân nhánh theo biến cố trung gian.',
      0.7,
      'sp_prob_tree_bayes'
    ),
    makeSO(
      'b19d2',
      2,
      'Tính xác suất ngược bằng công thức Bayes trong bài toán chuyển cầu',
      'Tiếp tục với bài toán ở Câu 1 (Bình I có $3$ trắng, $2$ đen; Bình II có $2$ trắng, $4$ đen; chuyển $1$ quả từ Bình I sang Bình II rồi lấy $1$ quả từ Bình II). Giả sử quả cầu lấy ra từ Bình II là quả cầu trắng, hãy tính xác suất để quả cầu đã chuyển từ Bình I sang Bình II cũng là quả cầu trắng.',
      'Vậy xác suất cần tìm là $\\frac{9}{13}$.',
      [
        {
          role: 'Bước 1: Xác định xác suất nhánh $P(A)P(B|A)$ và xác suất toàn phần $P(B)$',
          content: 'Từ kết quả phân tích: $P(A)P(B|A) = \\frac{3}{5} \\cdot \\frac{3}{7} = \\frac{9}{35}$ và xác suất toàn phần $P(B) = \\frac{13}{35}$.',
        },
        {
          role: 'Bước 2: Thiết lập công thức Bayes cho xác suất $P(A|B)$',
          content: 'Theo công thức Bayes: $P(A|B) = \\frac{P(A)P(B|A)}{P(B)}$.',
        },
        {
          role: 'Bước 3: Thay số và rút gọn kết quả',
          content: 'Ta có $P(A|B) = \\frac{9/35}{13/35} = \\frac{9}{13}$.',
        },
      ],
      'Khi rút gọn phân số có cùng mẫu số $35$, ta được ngay $\\frac{9}{13}$.',
      'Gắn kết chặt chẽ giữa công thức xác suất toàn phần và công thức Bayes.',
      0.65
    ),
    makeSO(
      'b19d2',
      3,
      'Bài toán thực tế: Kiểm định chất lượng lô hàng nông sản',
      'Một kho chứa các thùng cam gồm $60\\%$ thùng loại I (có tỉ lệ quả bị dập là $5\\%$) và $40\\%$ thùng loại II (có tỉ lệ quả bị dập là $15\\%$). Người kiểm hàng chọn ngẫu nhiên $1$ thùng cam, rồi từ thùng đó lấy ngẫu nhiên ra $1$ quả cam thì thấy quả cam đó không bị dập. Hãy tính xác suất để thùng cam được chọn là thùng loại I.',
      'Vậy xác suất để thùng cam được chọn là thùng loại I bằng $\\frac{57}{91}$.',
      [
        {
          role: 'Bước 1: Gọi tên các biến cố và xác định xác suất lấy được quả không dập ở mỗi loại thùng',
          content: 'Gọi $A$ là biến cố "Chọn thùng loại I" ($P(A) = 0{,}6,\\ P(\\overline{A}) = 0{,}4$) và $B$ là biến cố "Quả cam lấy ra không bị dập". Ta có $P(B|A) = 1 - 0{,}05 = 0{,}95$ và $P(B|\\overline{A}) = 1 - 0{,}15 = 0{,}85$.',
        },
        {
          role: 'Bước 2: Tính xác suất lấy được quả cam không bị dập $P(B)$',
          content: 'Theo công thức xác suất toàn phần: $P(B) = 0{,}6 \\times 0{,}95 + 0{,}4 \\times 0{,}85 = 0{,}57 + 0{,}34 = 0{,}91$.',
        },
        {
          role: 'Bước 3: Áp dụng công thức Bayes tính $P(A|B)$',
          content: 'Ta có $P(A|B) = \\frac{0{,}57}{0{,}91} = \\frac{57}{91}$.',
        },
      ],
      'Đọc kỹ đề: quả cam lấy ra "không bị dập" nên phải dùng tỉ lệ $1 - 0{,}05 = 0{,}95$ và $1 - 0{,}15 = 0{,}85$.',
      'Bài toán rèn luyện sự cẩn trọng khi đọc biến cố kết quả.',
      0.65,
      'sp_prob_tree_bayes'
    ),
  ]
);

// Fix conclusionTarget of bai19De2.part4[0] so it matches 13/35
bai19De2.part4[0].conclusionTarget = 'Vậy xác suất để quả cầu lấy ra từ Bình II là cầu trắng bằng $\\frac{13}{35}$.';

// ============================================================================
// BÀI TẬP CUỐI CHƯƠNG VI (SGK Toán 12 Tập 2 - Kết nối tri thức - Trang 79)
// ============================================================================

const ontapC6De1 = makeLessonExam(
  'ontap-c6-de01',
  'Ôn tập Chương VI - Đề ôn số 1',
  'Tổng hợp Xác suất có điều kiện, Công thức xác suất toàn phần và Công thức Bayes (Đề 1)',
  'Đề ôn tập cuối Chương VI (Số 1) bao quát toàn bộ kiến thức Chương VI SGK Toán 12 Tập 2 Kết nối tri thức: Xác suất có điều kiện, công thức nhân xác suất, công thức xác suất toàn phần và công thức Bayes.',
  [
    makeMC(
      'otc6d1',
      1,
      'Công thức xác suất có điều kiện',
      'Cho hai biến cố $A$ và $B$ với $P(B) > 0$. Khẳng định nào dưới đây là đúng?',
      [
        '$P(A|B) = \\frac{P(AB)}{P(B)}$',
        '$P(A|B) = \\frac{P(AB)}{P(A)}$',
        '$P(A|B) = P(A) \\cdot P(B)$',
        '$P(A|B) = P(A) - P(B)$',
      ],
      'A',
      'Theo định nghĩa xác suất có điều kiện: $P(A|B) = \\frac{P(AB)}{P(B)}$ với $P(B) > 0$.',
      'Biến cố điều kiện $B$ luôn nằm ở mẫu số.'
    ),
    makeMC(
      'otc6d1',
      2,
      'Tính xác suất giao từ xác suất có điều kiện',
      'Cho hai biến cố $A$ và $B$ có $P(B) = 0{,}6$ và $P(A|B) = 0{,}4$. Giá trị của $P(AB)$ bằng:',
      [
        '$0{,}24$',
        '$1{,}0$',
        '$\\frac{2}{3}$',
        '$0{,}2$',
      ],
      'A',
      'Áp dụng công thức nhân xác suất: $P(AB) = P(B) \\cdot P(A|B) = 0{,}6 \\times 0{,}4 = 0{,}24$.',
      'Nhân $P(B)$ với $P(A|B)$.'
    ),
    makeMC(
      'otc6d1',
      3,
      'Tính chất của xác suất có điều kiện với biến cố đối',
      'Cho hai biến cố $A$ và $B$ có $P(A) > 0$. Nếu $P(B|A) = 0{,}72$ thì $P(\\overline{B}|A)$ bằng:',
      [
        '$0{,}28$',
        '$0{,}72$',
        '$0{,}38$',
        '$0{,}18$',
      ],
      'A',
      'Ta luôn có $P(\\overline{B}|A) = 1 - P(B|A) = 1 - 0{,}72 = 0{,}28$.',
      'Tổng xác suất của hai biến cố đối dưới cùng một điều kiện $A$ luôn bằng $1$.',
      'sp_prob_tree_bayes'
    ),
    makeMC(
      'otc6d1',
      4,
      'Xác suất có điều kiện từ bảng dữ liệu',
      'Một lớp có $45$ học sinh, trong đó có $25$ học sinh nam. Trong số các học sinh nam có $15$ bạn biết chơi cờ vua. Chọn ngẫu nhiên một học sinh của lớp. Biết rằng học sinh được chọn là nam, xác suất để bạn đó biết chơi cờ vua là:',
      [
        '$0{,}6$',
        '$\\frac{1}{3}$',
        '$\\frac{5}{9}$',
        '$0{,}4$',
      ],
      'A',
      'Trong $25$ học sinh nam có $15$ bạn biết chơi cờ vua, nên xác suất cần tìm là $\\frac{15}{25} = 0{,}6$.',
      'Tập mẫu thu hẹp là $25$ học sinh nam.'
    ),
    makeMC(
      'otc6d1',
      5,
      'Tính xác suất P(A|B) khi biết P(A hợp B)',
      'Cho hai biến cố $A$ và $B$ có $P(A) = 0{,}4$; $P(B) = 0{,}5$ và $P(A \\cup B) = 0{,}7$. Khi đó $P(A|B)$ bằng:',
      [
        '$0{,}4$',
        '$0{,}5$',
        '$0{,}2$',
        '$0{,}8$',
      ],
      'A',
      'Ta có $P(AB) = P(A) + P(B) - P(A \\cup B) = 0{,}4 + 0{,}5 - 0{,}7 = 0{,}2$. Suy ra $P(A|B) = \\frac{0{,}2}{0{,}5} = 0{,}4$.',
      'Vì $P(A|B) = 0{,}4 = P(A)$ nên $A$ và $B$ là hai biến cố độc lập.'
    ),
    makeMC(
      'otc6d1',
      6,
      'Công thức xác suất toàn phần',
      'Cho hai biến cố $A$ và $B$ thỏa mãn $P(A) = 0{,}3$; $P(B|A) = 0{,}6$ và $P(B|\\overline{A}) = 0{,}4$. Xác suất của biến cố $B$ bằng:',
      [
        '$0{,}46$',
        '$0{,}18$',
        '$0{,}28$',
        '$0{,}5$',
      ],
      'A',
      'Ta có $P(\\overline{A}) = 1 - 0{,}3 = 0{,}7$. Theo công thức xác suất toàn phần: $P(B) = 0{,}3 \\times 0{,}6 + 0{,}7 \\times 0{,}4 = 0{,}18 + 0{,}28 = 0{,}46$.',
      'Áp dụng công thức $P(B) = P(A)P(B|A) + P(\\overline{A})P(B|\\overline{A})$.',
      'sp_prob_tree_bayes'
    ),
    makeMC(
      'otc6d1',
      7,
      'Công thức Bayes',
      'Với giả thiết ở câu 6 ($P(A) = 0{,}3; P(B|A) = 0{,}6; P(B|\\overline{A}) = 0{,}4$), giá trị của $P(A|B)$ bằng:',
      [
        '$\\frac{9}{23}$',
        '$\\frac{14}{23}$',
        '$0{,}18$',
        '$0{,}3$',
      ],
      'A',
      'Theo công thức Bayes: $P(A|B) = \\frac{P(A)P(B|A)}{P(B)} = \\frac{0{,}18}{0{,}46} = \\frac{9}{23}$.',
      'Lấy nhánh $0{,}18$ chia cho tổng hai nhánh $0{,}46$.'
    ),
    makeMC(
      'otc6d1',
      8,
      'Rút thăm không hoàn lại 2 lần',
      'Một hộp chứa $8$ tấm thẻ trúng thưởng và $12$ tấm thẻ không trúng thưởng. Hai người lần lượt rút ngẫu nhiên mỗi người $1$ tấm thẻ (không hoàn lại). Xác suất để cả hai người đều rút được thẻ trúng thưởng là:',
      [
        '$\\frac{14}{95}$',
        '$\\frac{4}{25}$',
        '$\\frac{8}{19}$',
        '$\\frac{2}{5}$',
      ],
      'A',
      'Theo công thức nhân xác suất: $P(A_1A_2) = \\frac{8}{20} \\cdot \\frac{7}{19} = \\frac{2}{5} \\cdot \\frac{7}{19} = \\frac{14}{95}$.',
      'Ở lần rút thứ hai, còn $7$ thẻ trúng thưởng trên tổng số $19$ thẻ.'
    ),
    makeMC(
      'otc6d1',
      9,
      'Xác suất lần rút thứ hai trúng thưởng khi chưa biết lần 1',
      'Từ hộp chứa $8$ thẻ trúng thưởng và $12$ thẻ không trúng thưởng ở câu 8, hai người lần lượt rút không hoàn lại mỗi người $1$ thẻ. Xác suất để người thứ hai rút được thẻ trúng thưởng là:',
      [
        '$0{,}4$',
        '$\\frac{7}{19}$',
        '$\\frac{8}{19}$',
        '$0{,}35$',
      ],
      'A',
      'Theo công thức xác suất toàn phần: $P(A_2) = \\frac{8}{20}\\cdot\\frac{7}{19} + \\frac{12}{20}\\cdot\\frac{8}{19} = \\frac{56 + 96}{380} = \\frac{152}{380} = 0{,}4 = \\frac{8}{20}$.',
      'Rút thăm công bằng: xác suất trúng thưởng của người bốc trước và người bốc sau luôn bằng nhau!'
    ),
    makeMC(
      'otc6d1',
      10,
      'Bài toán hai lô hàng sản phẩm',
      'Cửa hàng có $2$ kiện hàng: Kiện I có tỉ lệ sản phẩm loại A là $80\\%$ (chiếm $60\\%$ lượng hàng); Kiện II có tỉ lệ sản phẩm loại A là $50\\%$ (chiếm $40\\%$ lượng hàng). Chọn ngẫu nhiên $1$ sản phẩm của cửa hàng. Xác suất lấy được sản phẩm loại A là:',
      [
        '$0{,}68$',
        '$0{,}65$',
        '$0{,}48$',
        '$0{,}32$',
      ],
      'A',
      'Áp dụng công thức xác suất toàn phần: $P(A) = 0{,}6 \\times 0{,}8 + 0{,}4 \\times 0{,}5 = 0{,}48 + 0{,}20 = 0{,}68$.',
      'Cộng hai nhánh $0{,}48 + 0{,}20 = 0{,}68$.',
      'sp_prob_tree_bayes'
    ),
    makeMC(
      'otc6d1',
      11,
      'Tính xác suất Bayes từ bài toán hai kiện hàng',
      'Với số liệu ở câu 10, biết sản phẩm lấy ra là sản phẩm loại A, xác suất để sản phẩm đó thuộc Kiện I bằng:',
      [
        '$\\frac{12}{17}$',
        '$\\frac{5}{17}$',
        '$0{,}48$',
        '$0{,}8$',
      ],
      'A',
      'Theo công thức Bayes: $P(\\text{Kiện I}|A) = \\frac{0{,}48}{0{,}68} = \\frac{12}{17}$.',
      'Chia $0{,}48$ cho $0{,}68$ rồi rút gọn phân số.'
    ),
    makeMC(
      'otc6d1',
      12,
      'Bài toán thực tế: Chẩn đoán lỗi động cơ bằng cảm biến',
      'Một động cơ máy bay có xác suất phát sinh lỗi quá nhiệt là $0{,}02$. Nếu động cơ bị quá nhiệt thì đèn cảnh báo bật sáng với xác suất $0{,}98$; nếu động cơ bình thường thì đèn cảnh báo bật sáng nhầm với xác suất $0{,}01$. Khi thấy đèn cảnh báo bật sáng, xác suất động cơ thực sự bị quá nhiệt là:',
      [
        '$\\frac{2}{3}$',
        '$\\frac{1}{3}$',
        '$0{,}98$',
        '$0{,}0294$',
      ],
      'A',
      'Ta có $P(\\text{Sáng}) = 0{,}02 \\times 0{,}98 + 0{,}98 \\times 0{,}01 = 0{,}0196 + 0{,}0098 = 0{,}0294$. Theo công thức Bayes: $P(\\text{Quá nhiệt}|\\text{Sáng}) = \\frac{0{,}0196}{0{,}0294} = \\frac{196}{294} = \\frac{2}{3}$.',
      'Nhận xét số đẹp: $0{,}0196 = 2 \\times 0{,}0098$, nên tỉ số bằng $\\frac{2}{2 + 1} = \\frac{2}{3}$.',
      'sp_prob_tree_bayes'
    ),
  ],
  [
    makeTF(
      'otc6d1',
      1,
      'Tổng hợp xác suất có điều kiện từ bảng dữ liệu khảo sát',
      'Khảo sát $400$ học sinh khối 12 của một trường về nguyện vọng xét tuyển đại học khối A00 và khối D01, kết quả thu được: Có $240$ học sinh đăng ký khối A00, $200$ học sinh đăng ký khối D01 và $120$ học sinh đăng ký cả hai khối A00 và D01. Chọn ngẫu nhiên $1$ học sinh trong số $400$ học sinh đó. Gọi $A$ là biến cố "Học sinh đăng ký khối A00" và $B$ là biến cố "Học sinh đăng ký khối D01".',
      [
        {
          text: 'Ta có $P(A) = 0{,}6$; $P(B) = 0{,}5$ và $P(AB) = 0{,}3$.',
          isCorrect: true,
          exp: '$P(A) = \\frac{240}{400} = 0{,}6$; $P(B) = \\frac{200}{400} = 0{,}5$; $P(AB) = \\frac{120}{400} = 0{,}3$.',
        },
        {
          text: 'Biết học sinh được chọn có đăng ký khối D01, xác suất để học sinh đó cũng đăng ký khối A00 là $0{,}6$.',
          isCorrect: true,
          exp: '$P(A|B) = \\frac{P(AB)}{P(B)} = \\frac{0{,}3}{0{,}5} = 0{,}6$.',
        },
        {
          text: 'Biết học sinh được chọn có đăng ký khối A00, xác suất để học sinh đó không đăng ký khối D01 là $0{,}5$.',
          isCorrect: true,
          exp: '$P(B|A) = \\frac{0{,}3}{0{,}6} = 0{,}5 \\Rightarrow P(\\overline{B}|A) = 1 - 0{,}5 = 0{,}5$.',
        },
        {
          text: 'Có $100$ học sinh không đăng ký cả hai khối A00 và D01.',
          isCorrect: false,
          exp: 'Số học sinh đăng ký ít nhất 1 trong 2 khối là $240 + 200 - 120 = 320$, nên số học sinh không đăng ký cả hai khối là $400 - 320 = 80 \\ne 100$.',
        },
      ],
      'Sử dụng công thức bao hàm - loại trừ: $n(A \\cup B) = n(A) + n(B) - n(AB)$.'
    ),
    makeTF(
      'otc6d1',
      2,
      'Sơ đồ hình cây trong bài toán hai hộp bi',
      'Hộp I có $6$ bi trắng và $4$ bi đen. Hộp II có $3$ bi trắng và $7$ bi đen. Gieo một con xúc xắc cân đối và đồng chất: nếu xuất hiện mặt có số chấm chia hết cho $3$ (tức mặt $3$ hoặc $6$) thì lấy ngẫu nhiên $1$ viên bi từ Hộp I; ngược lại thì lấy ngẫu nhiên $1$ viên bi từ Hộp II. Gọi $A$ là biến cố "Lấy bi từ Hộp I" và $B$ là biến cố "Lấy được viên bi trắng".',
      [
        {
          text: 'Xác suất của biến cố $A$ là $P(A) = \\frac{1}{3}$ và $P(\\overline{A}) = \\frac{2}{3}$.',
          isCorrect: true,
          exp: 'Có $2$ mặt chia hết cho $3$ là $\\{3; 6\\}$ trên $6$ mặt, nên $P(A) = \\frac{2}{6} = \\frac{1}{3}$ và $P(\\overline{A}) = \\frac{2}{3}$.',
        },
        {
          text: 'Ta có $P(B|A) = 0{,}6$ và $P(B|\\overline{A}) = 0{,}3$.',
          isCorrect: true,
          exp: 'Tỉ lệ bi trắng ở Hộp I là $\\frac{6}{10} = 0{,}6$ và ở Hộp II là $\\frac{3}{10} = 0{,}3$.',
        },
        {
          text: 'Xác suất để lấy được viên bi trắng là $P(B) = 0{,}4$.',
          isCorrect: true,
          exp: '$P(B) = \\frac{1}{3} \\times 0{,}6 + \\frac{2}{3} \\times 0{,}3 = 0{,}2 + 0{,}2 = 0{,}4$.',
        },
        {
          text: 'Biết viên bi lấy ra là bi trắng, xác suất để viên bi đó được lấy từ Hộp I là $\\frac{1}{3}$.',
          isCorrect: false,
          exp: 'Theo công thức Bayes: $P(A|B) = \\frac{0{,}2}{0{,}4} = 0{,}5 = \\frac{1}{2} \\ne \\frac{1}{3}$.',
        },
      ],
      'Kết hợp xác suất cổ điển (gieo xúc xắc chọn hộp) với công thức xác suất toàn phần và Bayes.',
      'sp_prob_tree_bayes'
    ),
    makeTF(
      'otc6d1',
      3,
      'Bài toán thực tế: Đào tạo nhân viên bán hàng và doanh số',
      'Một chuỗi bán lẻ cử $60\\%$ nhân viên mới tham gia khóa huấn luyện kỹ năng tư vấn chuyên sâu. Thống kê cuối quý cho thấy: $80\\%$ nhân viên qua huấn luyện đạt chỉ tiêu doanh số (KPI), trong khi chỉ có $45\\%$ nhân viên không qua huấn luyện đạt chỉ tiêu doanh số. Chọn ngẫu nhiên một nhân viên mới của chuỗi bán lẻ.',
      [
        {
          text: 'Xác suất để nhân viên được chọn vừa qua huấn luyện vừa đạt KPI là $0{,}48$.',
          isCorrect: true,
          exp: '$0{,}6 \\times 0{,}8 = 0{,}48$.',
        },
        {
          text: 'Xác suất để nhân viên được chọn đạt chỉ tiêu doanh số (KPI) là $0{,}66$.',
          isCorrect: true,
          exp: '$P(\\text{Đạt KPI}) = 0{,}6 \\times 0{,}8 + 0{,}4 \\times 0{,}45 = 0{,}48 + 0{,}18 = 0{,}66$.',
        },
        {
          text: 'Biết nhân viên được chọn đã đạt KPI, xác suất để người đó đã tham gia khóa huấn luyện là $\\frac{8}{11}$.',
          isCorrect: true,
          exp: 'Theo công thức Bayes: $P = \\frac{0{,}48}{0{,}66} = \\frac{8}{11}$.',
        },
        {
          text: 'Biết nhân viên được chọn **không** đạt KPI, xác suất để người đó không tham gia khóa huấn luyện nhỏ hơn $0{,}5$.',
          isCorrect: false,
          exp: '$P(\\text{Không KPI}) = 1 - 0{,}66 = 0{,}34$, nhánh không huấn luyện và không KPI là $0{,}4 \\times 0{,}55 = 0{,}22$. Xác suất là $\\frac{0{,}22}{0{,}34} = \\frac{11}{17} \\approx 0{,}647 > 0{,}5$.',
        },
      ],
      'Vẽ sơ đồ hình cây giúp đọc ngay cả 4 nhánh $AB, A\\overline{B}, \\overline{A}B, \\overline{A}\\overline{B}$.',
      'sp_prob_tree_bayes'
    ),
  ],
  [
    makeSA(
      'otc6d1',
      1,
      'Tính xác suất có điều kiện',
      'Cho hai biến cố $A$ và $B$ có $P(A) = 0{,}5$; $P(B) = 0{,}8$ và $P(AB) = 0{,}36$. Tính xác suất có điều kiện $P(A|B)$.',
      ['0.45', '0,45'],
      'Ta có $P(A|B) = \\frac{P(AB)}{P(B)} = \\frac{0{,}36}{0{,}8} = 0{,}45$.',
      'Chia $0{,}36$ cho $P(B) = 0{,}8$.'
    ),
    makeSA(
      'otc6d1',
      2,
      'Tính xác suất toàn phần',
      'Cho hai biến cố $A$ và $B$ thỏa mãn $P(A) = 0{,}7$; $P(B|A) = 0{,}6$ và $P(B|\\overline{A}) = 0{,}3$. Tính xác suất $P(B)$.',
      ['0.51', '0,51'],
      'Ta có $P(\\overline{A}) = 0{,}3$. Khi đó $P(B) = 0{,}7 \\times 0{,}6 + 0{,}3 \\times 0{,}3 = 0{,}42 + 0{,}09 = 0{,}51$.',
      'Cộng hai nhánh $0{,}42 + 0{,}09 = 0{,}51$.',
      undefined,
      'sp_prob_tree_bayes'
    ),
    makeSA(
      'otc6d1',
      3,
      'Tính xác suất Bayes',
      'Một nhà máy có hai máy A và B sản xuất lần lượt $40\\%$ và $60\\%$ số sản phẩm. Tỉ lệ chính phẩm của máy A là $90\\%$ và của máy B là $80\\%$. Lấy ngẫu nhiên một sản phẩm thấy đó là chính phẩm. Tính xác suất để chính phẩm đó do máy A sản xuất (làm tròn hoặc viết dưới dạng số thập phân nếu hữu hạn; để kết quả số thập phân hữu hạn, biết $7P$ là số thập phân hữu hạn, hãy tính giá trị của $7P$).',
      ['3'],
      'Ta có $P(\\text{Chính phẩm}) = 0{,}4 \\times 0{,}9 + 0{,}6 \\times 0{,}8 = 0{,}36 + 0{,}48 = 0{,}84$. Theo công thức Bayes: $P(A|\\text{Chính phẩm}) = \\frac{0{,}36}{0{,}84} = \\frac{3}{7}$. Vậy $7P = 3$.',
      'Tính $P = \\frac{0{,}36}{0{,}84} = \\frac{3}{7}$ rồi nhân với $7$.'
    ),
    makeSA(
      'otc6d1',
      4,
      'Bài toán thực tế: Kiểm tra hạt giống hoa hồng',
      'Một cửa hàng hạt giống có $50\\%$ gói hạt giống hoa hồng đỏ và $50\\%$ gói hạt giống hoa hồng vàng bề ngoài giống hệt nhau. Tỉ lệ nảy mầm của hạt giống hồng đỏ là $80\\%$ và của hồng vàng là $60\\%$. Một người mua ngẫu nhiên $1$ gói và gieo thử $1$ hạt thì thấy hạt đó nảy mầm. Tính xác suất để gói hạt giống đã mua là hoa hồng đỏ (biết $7P$ là một số nguyên, hãy tìm giá trị của $7P$).',
      ['4'],
      'Theo công thức Bayes: $P = \\frac{0{,}5 \\times 0{,}8}{0{,}5 \\times 0{,}8 + 0{,}5 \\times 0{,}6} = \\frac{0{,}4}{0{,}7} = \\frac{4}{7}$. Vậy $7P = 4$.',
      'Áp dụng công thức Bayes cho $P(A) = P(\\overline{A}) = 0{,}5$.',
      undefined,
      'sp_prob_tree_bayes'
    ),
  ],
  [
    makeSO(
      'otc6d1',
      1,
      'Tính xác suất có điều kiện kết hợp quy tắc đếm tổ hợp',
      'Một hộp có $7$ quả cầu trắng và $5$ quả cầu đen cùng kích thước. Lấy ngẫu nhiên đồng thời $2$ quả cầu từ hộp. Biết rằng trong $2$ quả cầu lấy ra có ít nhất $1$ quả cầu trắng, hãy tính xác suất để cả $2$ quả cầu lấy ra đều là cầu trắng.',
      'Vậy xác suất cần tìm là $\\frac{21}{56} = \\frac{3}{8}$.',
      [
        {
          role: 'Bước 1: Đếm số phần tử của biến cố điều kiện $B$ ("Có ít nhất $1$ quả cầu trắng")',
          content: 'Tổng số cách chọn $2$ quả cầu từ $12$ quả là $C_{12}^2 = 66$. Số cách chọn cả $2$ quả đều đen là $C_5^2 = 10$. Suy ra $n(B) = 66 - 10 = 56$.',
        },
        {
          role: 'Bước 2: Đếm số phần tử của biến cố giao $AB$ ("Cả $2$ quả cầu đều trắng")',
          content: 'Số cách chọn $2$ quả cầu trắng từ $7$ quả cầu trắng là $n(AB) = C_7^2 = 21$.',
        },
        {
          role: 'Bước 3: Áp dụng công thức xác suất có điều kiện và rút gọn',
          content: 'Ta có $P(A|B) = \\frac{n(AB)}{n(B)} = \\frac{21}{56} = \\frac{3}{8} = 0{,}375$.',
        },
      ],
      'Dùng phần bù $C_{12}^2 - C_5^2 = 56$ nhanh và an toàn hơn chia hai trường hợp.',
      'Bài toán kết hợp tổ hợp với xác suất có điều kiện.',
      0.7
    ),
    makeSO(
      'otc6d1',
      2,
      'Giải bài toán vận chuyển hàng hóa bằng công thức xác suất toàn phần và Bayes',
      'Một siêu thị nhập sữa tươi từ hai trang trại A và B theo tỉ lệ $65\\%$ từ trang trại A và $35\\%$ từ trang trại B. Tỉ lệ hộp sữa đạt tiêu chuẩn Organic của trang trại A là $80\\%$ và của trang trại B là $60\\%$. Chọn ngẫu nhiên một hộp sữa tại siêu thị. Tính xác suất để hộp sữa đó đạt tiêu chuẩn Organic.',
      'Vậy xác suất để hộp sữa đạt tiêu chuẩn Organic là $0{,}73$.',
      [
        {
          role: 'Bước 1: Gọi các biến cố và xác định xác suất trên từng nhánh',
          content: 'Gọi $A$ là biến cố "Hộp sữa từ trang trại A" ($P(A) = 0{,}65,\\ P(\\overline{A}) = 0{,}35$) và $B$ là biến cố "Hộp sữa đạt chuẩn Organic" ($P(B|A) = 0{,}8,\\ P(B|\\overline{A}) = 0{,}6$).',
        },
        {
          role: 'Bước 2: Thiết lập công thức xác suất toàn phần cho biến cố $B$',
          content: 'Theo công thức xác suất toàn phần: $P(B) = P(A)P(B|A) + P(\\overline{A})P(B|\\overline{A})$.',
        },
        {
          role: 'Bước 3: Thay số và tính kết quả',
          content: 'Ta có $P(B) = 0{,}65 \\times 0{,}8 + 0{,}35 \\times 0{,}6 = 0{,}52 + 0{,}21 = 0{,}73$.',
        },
      ],
      'Kiểm tra tổng xác suất tiên nghiệm $0{,}65 + 0{,}35 = 1$.',
      'Bài toán thực tế chuẩn cấu trúc Chương VI.',
      0.65,
      'sp_prob_tree_bayes'
    ),
    makeSO(
      'otc6d1',
      3,
      'Bài toán Bayes trong chẩn đoán kỹ thuật',
      'Tại một trung tâm bảo hành điện thoại, có $25\\%$ máy nhận vào bị hỏng màn hình và $75\\%$ máy bị hỏng pin. Biết rằng $80\\%$ máy hỏng màn hình có thể sửa xong ngay trong ngày, và $90\\%$ máy hỏng pin có thể sửa xong ngay trong ngày. Chọn ngẫu nhiên một chiếc điện thoại thấy chiếc máy đó **không** sửa xong ngay trong ngày. Tính xác suất để chiếc máy đó bị hỏng màn hình.',
      'Vậy xác suất để chiếc máy đó bị hỏng màn hình là $\\frac{2}{5} = 0{,}4$.',
      [
        {
          role: 'Bước 1: Gọi tên các biến cố và xác định xác suất không sửa xong trong ngày',
          content: 'Gọi $A$ là biến cố "Máy hỏng màn hình" ($P(A) = 0{,}25,\\ P(\\overline{A}) = 0{,}75$) và $K$ là biến cố "Máy không sửa xong trong ngày". Ta có $P(K|A) = 1 - 0{,}8 = 0{,}2$ và $P(K|\\overline{A}) = 1 - 0{,}9 = 0{,}1$.',
        },
        {
          role: 'Bước 2: Tính xác suất toàn phần $P(K)$',
          content: 'Ta có $P(K) = 0{,}25 \\times 0{,}2 + 0{,}75 \\times 0{,}1 = 0{,}05 + 0{,}075 = 0{,}125$.',
        },
        {
          role: 'Bước 3: Áp dụng công thức Bayes tính $P(A|K)$',
          content: 'Theo công thức Bayes: $P(A|K) = \\frac{0{,}05}{0{,}125} = \\frac{50}{125} = \\frac{2}{5} = 0{,}4$.',
        },
      ],
      'Chuyển đổi tỉ lệ "sửa xong trong ngày" ($80\\%, 90\\%$) sang tỉ lệ "không sửa xong trong ngày" ($20\\%, 10\\%$).',
      'Bài toán rèn luyện kỹ năng lập luận với biến cố đối trong công thức Bayes.',
      0.65,
      'sp_prob_tree_bayes'
    ),
  ]
);

const ontapC6De2 = makeLessonExam(
  'ontap-c6-de02',
  'Ôn tập Chương VI - Đề ôn số 2',
  'Tổng hợp Xác suất có điều kiện, Công thức xác suất toàn phần và Công thức Bayes (Đề 2)',
  'Đề ôn tập cuối Chương VI (Số 2) gồm 22 câu hỏi chuẩn cấu trúc 4 phần, giúp học sinh nắm vững toàn bộ các dạng toán xác suất có điều kiện và công thức Bayes.',
  [
    makeMC(
      'otc6d2',
      1,
      'Nhận diện hai biến cố độc lập qua xác suất có điều kiện',
      'Cho hai biến cố $A$ và $B$ với $0 < P(A) < 1$ và $0 < P(B) < 1$. Hai biến cố $A$ và $B$ độc lập với nhau khi và chỉ khi:',
      [
        '$P(A|B) = P(A)$',
        '$P(A|B) = P(B)$',
        '$P(A|B) = 0$',
        '$P(A|B) + P(B|A) = 1$',
      ],
      'A',
      'Hai biến cố $A$ và $B$ độc lập khi việc $B$ xảy ra không làm thay đổi xác suất xảy ra của $A$, tức là $P(A|B) = P(A) = P(A|\\overline{B})$.',
      'Phân biệt biến cố độc lập ($P(A|B) = P(A)$) với biến cố xung khắc ($P(A|B) = 0$).'
    ),
    makeMC(
      'otc6d2',
      2,
      'Tính xác suất có điều kiện P(B|A)',
      'Cho hai biến cố $A$ và $B$ biết $P(A) = 0{,}6$ và $P(AB) = 0{,}15$. Khi đó $P(B|A)$ bằng:',
      [
        '$0{,}25$',
        '$0{,}09$',
        '$0{,}45$',
        '$0{,}75$',
      ],
      'A',
      'Ta có $P(B|A) = \\frac{P(AB)}{P(A)} = \\frac{0{,}15}{0{,}6} = 0{,}25$.',
      'Áp dụng trực tiếp công thức định nghĩa.'
    ),
    makeMC(
      'otc6d2',
      3,
      'Tính xác suất P(A|B) từ P(B|A)',
      'Cho hai biến cố $A$ và $B$ có $P(A) = 0{,}3$; $P(B) = 0{,}6$ và $P(B|A) = 0{,}8$. Giá trị của $P(A|B)$ bằng:',
      [
        '$0{,}4$',
        '$0{,}24$',
        '$0{,}5$',
        '$0{,}6$',
      ],
      'A',
      'Theo công thức Bayes: $P(A|B) = \\frac{P(A)P(B|A)}{P(B)} = \\frac{0{,}3 \\times 0{,}8}{0{,}6} = \\frac{0{,}24}{0{,}6} = 0{,}4$.',
      'Dùng công thức $P(A)P(B|A) = P(B)P(A|B)$.'
    ),
    makeMC(
      'otc6d2',
      4,
      'Xác suất có điều kiện trong gieo đồng xu 3 lần',
      'Tung một đồng xu cân đối và đồng chất $3$ lần liên tiếp. Tính xác suất để cả $3$ lần đều xuất hiện mặt Sấp, biết rằng lần đầu tiên đã xuất hiện mặt Sấp.',
      [
        '$\\frac{1}{4}$',
        '$\\frac{1}{8}$',
        '$\\frac{1}{2}$',
        '$\\frac{1}{3}$',
      ],
      'A',
      'Biến cố lần đầu ra mặt Sấp có $4$ kết quả: $\\{\\text{SSS}, \\text{SSN}, \\text{SNS}, \\text{SNN}\\}$. Trong đó biến cố cả $3$ lần ra Sấp có $1$ kết quả $\\{\\text{SSS}\\}$. Vậy $P = \\frac{1}{4}$.',
      'Khi đã biết lần 1 ra Sấp, chỉ cần cả 2 lần sau đều ra Sấp với xác suất $\\frac{1}{2}\\cdot\\frac{1}{2} = \\frac{1}{4}$.'
    ),
    makeMC(
      'otc6d2',
      5,
      'Công thức nhân xác suất cho phép thử không hoàn lại',
      'Một hộp có $5$ quả bóng đỏ và $5$ quả bóng xanh. Lấy ngẫu nhiên lần lượt $2$ quả bóng không hoàn lại. Xác suất để lần đầu lấy được bóng đỏ và lần thứ hai lấy được bóng xanh là:',
      [
        '$\\frac{5}{18}$',
        '$\\frac{1}{4}$',
        '$\\frac{5}{9}$',
        '$\\frac{4}{9}$',
      ],
      'A',
      'Ta có $P(Đ_1 X_2) = P(Đ_1)\\cdot P(X_2|Đ_1) = \\frac{5}{10} \\cdot \\frac{5}{9} = \\frac{5}{18}$.',
      'Chú ý: đề hỏi theo đúng thứ tự "lần 1 đỏ VÀ lần 2 xanh" nên bằng $\\frac{5}{18}$ (còn nếu hỏi "1 đỏ và 1 xanh không kể thứ tự" thì nhân 2 thành $\\frac{5}{9}$).'
    ),
    makeMC(
      'otc6d2',
      6,
      'Công thức xác suất toàn phần',
      'Cho hai biến cố $A$ và $B$ thỏa mãn $P(A) = 0{,}8$; $P(B|A) = 0{,}5$ và $P(B|\\overline{A}) = 0{,}2$. Khi đó $P(\\overline{B})$ bằng:',
      [
        '$0{,}56$',
        '$0{,}44$',
        '$0{,}40$',
        '$0{,}60$',
      ],
      'A',
      'Ta có $P(B) = 0{,}8 \\times 0{,}5 + 0{,}2 \\times 0{,}2 = 0{,}40 + 0{,}04 = 0{,}44$. Suy ra $P(\\overline{B}) = 1 - 0{,}44 = 0{,}56$.',
      'Đọc kỹ đề bài: đề hỏi $P(\\overline{B}) = 1 - P(B)$.',
      'sp_prob_tree_bayes'
    ),
    makeMC(
      'otc6d2',
      7,
      'Công thức Bayes',
      'Với giả thiết ở câu 6 ($P(A) = 0{,}8; P(B|A) = 0{,}5; P(B|\\overline{A}) = 0{,}2$), giá trị của $P(A|B)$ bằng:',
      [
        '$\\frac{10}{11}$',
        '$\\frac{1}{11}$',
        '$0{,}44$',
        '$0{,}8$',
      ],
      'A',
      'Theo công thức Bayes: $P(A|B) = \\frac{0{,}40}{0{,}44} = \\frac{10}{11}$.',
      'Lấy $0{,}40$ chia cho $0{,}44$ được $\\frac{10}{11}$.'
    ),
    makeMC(
      'otc6d2',
      8,
      'Bảng dữ liệu thống kê thị lực học sinh',
      'Khảo sát $200$ học sinh gồm $100$ nam và $100$ nữ về tật cận thị, thấy có $35$ học sinh nam bị cận thị và $45$ học sinh nữ bị cận thị. Chọn ngẫu nhiên một học sinh bị cận thị. Xác suất để học sinh đó là nữ bằng:',
      [
        '$\\frac{9}{16}$',
        '$\\frac{7}{16}$',
        '$0{,}45$',
        '$0{,}40$',
      ],
      'A',
      'Tổng số học sinh bị cận thị là $35 + 45 = 80$ em, trong đó có $45$ nữ. Vậy xác suất cần tìm là $\\frac{45}{80} = \\frac{9}{16}$.',
      'Tính trực tiếp trên nhóm $80$ học sinh bị cận thị.'
    ),
    makeMC(
      'otc6d2',
      9,
      'Bài toán hai xạ thủ bắn độc lập - Xác suất có điều kiện',
      'Hai xạ thủ A và B độc lập với nhau cùng bắn mỗi người $1$ viên đạn vào bia. Xác suất bắn trúng bia của A là $0{,}8$ và của B là $0{,}7$. Biết rằng có ít nhất một người bắn trúng bia, xác suất để cả hai người cùng bắn trúng bia là:',
      [
        '$\\frac{28}{47}$',
        '$0{,}56$',
        '$0{,}94$',
        '$\\frac{14}{25}$',
      ],
      'A',
      'Xác suất cả hai cùng trượt là $0{,}2 \\times 0{,}3 = 0{,}06 \\Rightarrow$ xác suất có ít nhất 1 người trúng là $P(B) = 1 - 0{,}06 = 0{,}94$. Xác suất cả hai cùng trúng là $P(AB) = 0{,}8 \\times 0{,}7 = 0{,}56$. Vậy $P(A|B) = \\frac{0{,}56}{0{,}94} = \\frac{28}{47}$.',
      'Vì biến cố "Cả 2 cùng trúng" là tập con của biến cố "Có ít nhất 1 người trúng" nên $P(AB) = 0{,}56$.'
    ),
    makeMC(
      'otc6d2',
      10,
      'Bài toán kiểm tra thực phẩm an toàn',
      'Trên thị trường có $80\\%$ sản phẩm rau sạch từ hợp tác xã A (tỉ lệ đạt chuẩn VietGAP là $95\\%$) và $20\\%$ từ nguồn nhỏ lẻ B (tỉ lệ đạt chuẩn VietGAP là $60\\%$). Chọn ngẫu nhiên một bó rau. Xác suất bó rau đó đạt chuẩn VietGAP là:',
      [
        '$0{,}88$',
        '$0{,}76$',
        '$0{,}90$',
        '$0{,}85$',
      ],
      'A',
      'Ta có $P(\\text{VietGAP}) = 0{,}8 \\times 0{,}95 + 0{,}2 \\times 0{,}60 = 0{,}76 + 0{,}12 = 0{,}88$.',
      'Cộng hai nhánh $0{,}76 + 0{,}12 = 0{,}88$.',
      'sp_prob_tree_bayes'
    ),
    makeMC(
      'otc6d2',
      11,
      'Công thức Bayes cho bài toán rau VietGAP',
      'Từ số liệu câu 10, nếu một bó rau kiểm tra thấy **không** đạt chuẩn VietGAP, xác suất để bó rau đó đến từ nguồn nhỏ lẻ B là:',
      [
        '$\\frac{2}{3}$',
        '$\\frac{1}{3}$',
        '$0{,}12$',
        '$0{,}4$',
      ],
      'A',
      'Xác suất không đạt chuẩn là $1 - 0{,}88 = 0{,}12$, trong đó nhánh từ nguồn B không đạt chuẩn là $0{,}2 \\times 0{,}4 = 0{,}08$. Vậy xác suất cần tìm là $\\frac{0{,}08}{0{,}12} = \\frac{2}{3}$.',
      'Nhánh nguồn A không đạt là $0{,}8 \\times 0{,}05 = 0{,}04$; nhánh nguồn B không đạt là $0{,}2 \\times 0{,}4 = 0{,}08$ (gấp đôi nhánh A).'
    ),
    makeMC(
      'otc6d2',
      12,
      'Bài toán thực tế: Hệ thống nhận diện khuôn mặt AI',
      'Tại cổng ra vào của một tòa nhà, $90\\%$ lượt người đi qua là nhân viên tòa nhà và $10\\%$ là khách vãng lai. Hệ thống camera AI mở cửa tự động cho $98\\%$ nhân viên tòa nhà, nhưng cũng mở nhầm cho $2\\%$ khách vãng lai. Khi cửa tự động mở cho một người đi qua, xác suất người đó là nhân viên tòa nhà bằng:',
      [
        '$\\frac{441}{442}$',
        '$\\frac{49}{50}$',
        '$0{,}882$',
        '$0{,}98$',
      ],
      'A',
      'Ta có $P(\\text{Mở cửa}) = 0{,}9 \\times 0{,}98 + 0{,}1 \\times 0{,}02 = 0{,}882 + 0{,}002 = 0{,}884$. Theo công thức Bayes: $P(\\text{Nhân viên}|\\text{Mở}) = \\frac{0{,}882}{0{,}884} = \\frac{441}{442}$.',
      'Áp dụng công thức Bayes: $\\frac{0{,}882}{0{,}882 + 0{,}002} = \\frac{441}{442}$.',
      'sp_prob_tree_bayes'
    ),
  ],
  [
    makeTF(
      'otc6d2',
      1,
      'Tổng hợp các quy tắc tính xác suất có điều kiện',
      'Cho hai biến cố $A$ và $B$ thỏa mãn $P(A) = 0{,}4$; $P(B) = 0{,}5$ và $P(A \\cup B) = 0{,}7$.',
      [
        {
          text: 'Xác suất của biến cố giao $AB$ bằng $0{,}2$.',
          isCorrect: true,
          exp: '$P(AB) = P(A) + P(B) - P(A \\cup B) = 0{,}4 + 0{,}5 - 0{,}7 = 0{,}2$.',
        },
        {
          text: 'Hai biến cố $A$ và $B$ là hai biến cố độc lập.',
          isCorrect: true,
          exp: 'Vì $P(AB) = 0{,}2 = 0{,}4 \\times 0{,}5 = P(A)P(B)$ nên $A$ và $B$ độc lập.',
        },
        {
          text: 'Xác suất có điều kiện $P(A|B) = 0{,}4$ và $P(B|A) = 0{,}5$.',
          isCorrect: true,
          exp: 'Vì $A, B$ độc lập nên $P(A|B) = P(A) = 0{,}4$ và $P(B|A) = P(B) = 0{,}5$.',
        },
        {
          text: 'Xác suất có điều kiện $P(\\overline{A}|\\overline{B})$ bằng $0{,}4$.',
          isCorrect: false,
          exp: 'Vì $A, B$ độc lập nên $\\overline{A}, \\overline{B}$ cũng độc lập $\\Rightarrow P(\\overline{A}|\\overline{B}) = P(\\overline{A}) = 1 - 0{,}4 = 0{,}6 \\ne 0{,}4$.',
        },
      ],
      'Khi $A$ và $B$ độc lập thì mọi cặp $(A, \\overline{B}), (\\overline{A}, B), (\\overline{A}, \\overline{B})$ đều độc lập.'
    ),
    makeTF(
      'otc6d2',
      2,
      'Vận dụng sơ đồ hình cây trong bài toán 3 hộp sản phẩm',
      'Có $3$ chiếc hộp giống hệt nhau: Hộp I có $4$ bi đỏ, $1$ bi xanh; Hộp II có $3$ bi đỏ, $2$ bi xanh; Hộp III có $1$ bi đỏ, $4$ bi xanh. Chọn ngẫu nhiên một chiếc hộp rồi từ hộp đó lấy ngẫu nhiên $1$ viên bi.',
      [
        {
          text: 'Xác suất chọn mỗi chiếc hộp đều bằng $\\frac{1}{3}$.',
          isCorrect: true,
          exp: 'Ba hộp giống hệt nhau được chọn ngẫu nhiên nên $P(H_1) = P(H_2) = P(H_3) = \\frac{1}{3}$.',
        },
        {
          text: 'Nếu chọn được Hộp I thì xác suất lấy được bi đỏ là $0{,}8$.',
          isCorrect: true,
          exp: 'Hộp I có $4$ bi đỏ trong $5$ bi nên $P(Đ|H_1) = \\frac{4}{5} = 0{,}8$.',
        },
        {
          text: 'Xác suất để lấy được viên bi màu đỏ bằng $\\frac{8}{15}$.',
          isCorrect: true,
          exp: '$P(Đ) = \\frac{1}{3}\\left(\\frac{4}{5} + \\frac{3}{5} + \\frac{1}{5}\\right) = \\frac{8}{15}$.',
        },
        {
          text: 'Biết viên bi lấy ra là bi đỏ, xác suất để viên bi đó được lấy từ Hộp I bằng $\\frac{1}{2}$.',
          isCorrect: true,
          exp: 'Theo công thức Bayes: $P(H_1|Đ) = \\frac{\\frac{1}{3}\\cdot\\frac{4}{5}}{\\frac{8}{15}} = \\frac{4}{8} = \\frac{1}{2}$.',
        },
      ],
      'Khi các hộp có cùng xác suất được chọn và cùng tổng số bi, công thức Bayes chỉ phụ thuộc vào tỉ lệ số bi đỏ trong từng hộp.'
    ),
    makeTF(
      'otc6d2',
      3,
      'Bài toán thực tế: Kiểm soát chất lượng pin xe điện',
      'Một hãng sản xuất xe điện sử dụng pin từ hai nhà cung cấp P và Q với tỉ lệ $75\\%$ từ P và $25\\%$ từ Q. Qua theo dõi thực tế, tỉ lệ pin duy trì dung lượng trên $90\\%$ sau $5$ năm sử dụng của nhà cung cấp P là $92\\%$ và của nhà cung cấp Q là $80\\%$. Chọn ngẫu nhiên một chiếc xe điện của hãng sau $5$ năm sử dụng.',
      [
        {
          text: 'Xác suất chiếc xe dùng pin của nhà cung cấp P và duy trì dung lượng trên $90\\%$ là $0{,}69$.',
          isCorrect: true,
          exp: '$0{,}75 \\times 0{,}92 = 0{,}69$.',
        },
        {
          text: 'Xác suất chiếc xe duy trì dung lượng pin trên $90\\%$ sau $5$ năm là $0{,}89$.',
          isCorrect: true,
          exp: '$P = 0{,}75 \\times 0{,}92 + 0{,}25 \\times 0{,}80 = 0{,}69 + 0{,}20 = 0{,}89$.',
        },
        {
          text: 'Biết chiếc xe duy trì dung lượng pin trên $90\\%$, xác suất xe đó dùng pin của nhà cung cấp P là $\\frac{69}{89}$.',
          isCorrect: true,
          exp: 'Theo công thức Bayes: $P = \\frac{0{,}69}{0{,}89} = \\frac{69}{89}$.',
        },
        {
          text: 'Biết chiếc xe **không** duy trì được dung lượng pin trên $90\\%$, khả năng xe dùng pin của Q cao hơn khả năng dùng pin của P.',
          isCorrect: false,
          exp: 'Nhánh P giảm dung lượng: $0{,}75 \\times 0{,}08 = 0{,}06$; nhánh Q giảm dung lượng: $0{,}25 \\times 0{,}20 = 0{,}05 < 0{,}06$, nên khả năng dùng pin của P vẫn cao hơn.',
        },
      ],
      'So sánh trực tiếp hai nhánh tích $P(A)P(\\overline{B}|A)$ và $P(\\overline{A})P(\\overline{B}|\\overline{A})$ để biết nguồn nào có xác suất hậu nghiệm lớn hơn.',
      'sp_prob_tree_bayes'
    ),
  ],
  [
    makeSA(
      'otc6d2',
      1,
      'Tìm xác suất P(B) từ P(AB) và P(A|B)',
      'Cho hai biến cố $A$ và $B$ biết $P(AB) = 0{,}28$ và $P(A|B) = 0{,}7$. Tính xác suất $P(B)$.',
      ['0.4', '0,4'],
      'Từ $P(AB) = P(B)\\cdot P(A|B) \\Rightarrow P(B) = \\frac{P(AB)}{P(A|B)} = \\frac{0{,}28}{0{,}7} = 0{,}4$.',
      'Rút $P(B) = \\frac{P(AB)}{P(A|B)}$ từ công thức nhân xác suất.'
    ),
    makeSA(
      'otc6d2',
      2,
      'Tính xác suất toàn phần',
      'Một hộp có $4$ quả bóng vàng và $6$ quả bóng xanh. Lần thứ nhất lấy ngẫu nhiên $1$ quả bóng: nếu lấy được bóng vàng thì trả lại vào hộp; nếu lấy được bóng xanh thì không trả lại vào hộp. Sau đó lấy ngẫu nhiên lần thứ hai $1$ quả bóng từ hộp. Tính xác suất để lần thứ hai lấy được quả bóng vàng (làm tròn đến hàng phần trăm hoặc viết dưới dạng số thập phân). Để kết quả nguyên đẹp, hãy tính giá trị của $15P$.',
      ['6.4', '6,4'],
      'Ta có $P(V_1) = 0{,}4$ (trả lại nên hộp vẫn còn $4$ vàng, $6$ xanh $\\Rightarrow P(V_2|V_1) = \\frac{4}{10} = 0{,}4$). Nếu lần 1 lấy xanh ($P(X_1) = 0{,}6$, không trả lại nên hộp còn $4$ vàng, $5$ xanh $\\Rightarrow P(V_2|X_1) = \\frac{4}{9}$). Khi đó $P(V_2) = 0{,}4 \\times 0{,}4 + 0{,}6 \\times \\frac{4}{9} = \\frac{4}{25} + \\frac{4}{15} = \\frac{32}{75} \\Rightarrow 75P = 32$.',
      'Xét kỹ số lượng quả bóng trong hộp sau lần 1 ở từng trường hợp.'
    ),
    makeSA(
      'otc6d2',
      3,
      'Tính xác suất Bayes từ bài toán thi bắn cung',
      'Trong đội tuyển bắn cung có $40\\%$ cung thủ nam và $60\\%$ cung thủ nữ. Xác suất bắn trúng tâm $10$ điểm của mỗi cung thủ nam là $0{,}8$ và của mỗi cung thủ nữ là $0{,}6$. Chọn ngẫu nhiên một cung thủ bắn $1$ mũi tên thì thấy trúng tâm $10$ điểm. Tính xác suất để cung thủ đó là nam (biết $17P$ là số nguyên, hãy điền giá trị của $17P$).',
      ['8'],
      'Ta có $P(\\text{Trúng } 10) = 0{,}4 \\times 0{,}8 + 0{,}6 \\times 0{,}6 = 0{,}32 + 0{,}36 = 0{,}68$. Theo công thức Bayes: $P = \\frac{0{,}32}{0{,}68} = \\frac{8}{17} \\Rightarrow 17P = 8$.',
      'Áp dụng công thức Bayes rồi nhân kết quả với $17$.',
      undefined,
      'sp_prob_tree_bayes'
    ),
    makeSA(
      'otc6d2',
      4,
      'Bài toán thực tế: Kiểm định bình chữa cháy',
      'Một tòa nhà trang bị $70\\%$ bình chữa cháy loại X và $30\\%$ bình chữa cháy loại Y. Xác suất hoạt động hoàn hảo khi khẩn cấp của bình loại X là $0{,}98$ và của bình loại Y là $0{,}90$. Chọn ngẫu nhiên một bình chữa cháy đem thử nghiệm. Tính xác suất để bình chữa cháy đó hoạt động hoàn hảo.',
      ['0.956', '0,956'],
      'Theo công thức xác suất toàn phần: $P = 0{,}7 \\times 0{,}98 + 0{,}3 \\times 0{,}90 = 0{,}686 + 0{,}270 = 0{,}956$.',
      'Cộng hai nhánh $0{,}686 + 0{,}270 = 0{,}956$.'
    ),
  ],
  [
    makeSO(
      'otc6d2',
      1,
      'Giải bài toán xác suất có điều kiện từ bảng dữ liệu khảo sát y tế',
      'Một cuộc khảo sát trên $1000$ người trưởng thành về thói quen tập thể thao và tình trạng huyết áp ổn định cho kết quả: Có $600$ người thường xuyên tập thể thao (trong đó $540$ người có huyết áp ổn định) và $400$ người ít tập thể thao (trong đó $260$ người có huyết áp ổn định). Chọn ngẫu nhiên $1$ người trong nhóm khảo sát. Biết rằng người đó có huyết áp ổn định, hãy tính xác suất để người đó thường xuyên tập thể thao.',
      'Vậy xác suất cần tìm là $0{,}675$.',
      [
        {
          role: 'Bước 1: Tính tổng số người có huyết áp ổn định trong mẫu khảo sát',
          content: 'Gọi $A$ là biến cố "Thường xuyên tập thể thao" và $B$ là biến cố "Huyết áp ổn định". Tổng số người có huyết áp ổn định là $n(B) = 540 + 260 = 800$ người.',
        },
        {
          role: 'Bước 2: Xác định số người vừa thường xuyên tập thể thao vừa có huyết áp ổn định',
          content: 'Theo đề bài, số người thỏa mãn cả hai tính chất là $n(AB) = 540$ người.',
        },
        {
          role: 'Bước 3: Áp dụng công thức xác suất có điều kiện và kết luận',
          content: 'Ta có $P(A|B) = \\frac{n(AB)}{n(B)} = \\frac{540}{800} = \\frac{27}{40} = 0{,}675$.',
        },
      ],
      'Khi đã có số lượng phần tử cụ thể của từng nhóm, tính trực tiếp $\\frac{n(AB)}{n(B)}$ rất nhanh và chính xác.',
      'Bài toán thực tế kết nối thống kê và xác suất có điều kiện.',
      0.7
    ),
    makeSO(
      'otc6d2',
      2,
      'Vận dụng công thức xác suất toàn phần và Bayes trong bài toán hai lần rút thẻ',
      'Một hộp có $6$ tấm thẻ màu đỏ và $4$ tấm thẻ màu xanh. Bạn An rút ngẫu nhiên $1$ tấm thẻ từ hộp và cất đi (không cho bạn Bình biết màu), sau đó bạn Bình rút ngẫu nhiên $1$ tấm thẻ từ $9$ tấm thẻ còn lại trong hộp thì thấy tấm thẻ của Bình có màu đỏ. Hãy tính xác suất để tấm thẻ mà bạn An đã rút trước đó cũng có màu đỏ.',
      'Vậy xác suất để tấm thẻ của bạn An có màu đỏ là $\\frac{5}{9}$.',
      [
        {
          role: 'Bước 1: Gọi tên các biến cố và xác định xác suất nhánh',
          content: 'Gọi $A$ là biến cố "An rút được thẻ đỏ" ($P(A) = 0{,}6,\\ P(\\overline{A}) = 0{,}4$) và $B$ là biến cố "Bình rút được thẻ đỏ". Ta có $P(B|A) = \\frac{5}{9}$ và $P(B|\\overline{A}) = \\frac{6}{9}$.',
        },
        {
          role: 'Bước 2: Tính xác suất toàn phần $P(B)$',
          content: 'Theo công thức xác suất toàn phần: $P(B) = \\frac{6}{10}\\cdot\\frac{5}{9} + \\frac{4}{10}\\cdot\\frac{6}{9} = \\frac{30 + 24}{90} = \\frac{54}{90} = \\frac{6}{10}$.',
        },
        {
          role: 'Bước 3: Áp dụng công thức Bayes tính $P(A|B)$',
          content: 'Theo công thức Bayes: $P(A|B) = \\frac{P(A)P(B|A)}{P(B)} = \\frac{30/90}{54/90} = \\frac{30}{54} = \\frac{5}{9}$.',
        },
      ],
      'Nhận xét trực관: Vì Bình đã lấy 1 thẻ đỏ nên trong 9 thẻ còn lại (bao gồm thẻ của An) chỉ còn 5 thẻ đỏ, do đó xác suất thẻ của An là đỏ bằng $\\frac{5}{9}$.',
      'Bài toán làm sáng tỏ sự đối xứng giữa xác suất tiên nghiệm và hậu nghiệm.',
      0.65,
      'sp_prob_tree_bayes'
    ),
    makeSO(
      'otc6d2',
      3,
      'Bài toán thực tế: Kiểm tra hàng giả bằng máy quét mã QR',
      'Trên thị trường một loại mỹ phẩm, có $95\\%$ sản phẩm là hàng chính hãng và $5\\%$ là hàng giả. Một ứng dụng quét mã bảo mật xác thực đúng $98\\%$ hàng chính hãng (báo "Hợp lệ"), nhưng cũng báo nhầm "Hợp lệ" cho $6\\%$ hàng giả. Một khách hàng mua ngẫu nhiên một hộp mỹ phẩm và quét mã thấy ứng dụng báo **không** hợp lệ. Hãy tính xác suất để hộp mỹ phẩm đó thực sự là hàng giả.',
      'Vậy xác suất hộp mỹ phẩm đó thực sự là hàng giả bằng $\\frac{47}{66}$.',
      [
        {
          role: 'Bước 1: Gọi tên các biến cố và xác định xác suất báo không hợp lệ',
          content: 'Gọi $G$ là biến cố "Hàng giả" ($P(G) = 0{,}05,\\ P(\\overline{G}) = 0{,}95$) và $K$ là biến cố "Ứng dụng báo không hợp lệ". Ta có $P(K|G) = 1 - 0{,}06 = 0{,}94$ và $P(K|\\overline{G}) = 1 - 0{,}98 = 0{,}02$.',
        },
        {
          role: 'Bước 2: Tính xác suất toàn phần $P(K)$',
          content: 'Ta có $P(K) = 0{,}05 \\times 0{,}94 + 0{,}95 \\times 0{,}02 = 0{,}047 + 0{,}019 = 0{,}066$.',
        },
        {
          role: 'Bước 3: Áp dụng công thức Bayes tính $P(G|K)$',
          content: 'Theo công thức Bayes: $P(G|K) = \\frac{0{,}047}{0{,}066} = \\frac{47}{66}$.',
        },
      ],
      'Khi ứng dụng báo không hợp lệ, xác suất là hàng giả tăng vọt từ $5\\%$ lên $\\frac{47}{66} \\approx 71{,}2\\%$.',
      'Bài toán thực tế rất hay về ứng dụng công nghệ xác thực và định lý Bayes.',
      0.65,
      'sp_prob_tree_bayes'
    ),
  ]
);

// Sync prompt of ontapC6De2.part3[1] so 75P = 32 is clear and integer
ontapC6De2.part3[1].prompt = 'Một hộp có $4$ quả bóng vàng và $6$ quả bóng xanh. Lần thứ nhất lấy ngẫu nhiên $1$ quả bóng: nếu lấy được bóng vàng thì trả lại vào hộp; nếu lấy được bóng xanh thì không trả lại vào hộp. Sau đó lấy ngẫu nhiên lần thứ hai $1$ quả bóng từ hộp. Gọi $P$ là xác suất để lần thứ hai lấy được quả bóng vàng. Tính giá trị của $75P$.';
ontapC6De2.part3[1].acceptableAnswers = ['32'];

export const CHAPTER_6_LESSONS: LessonInfo[] = [
  {
    id: 'bai-18',
    code: 'Bài 18',
    title: 'Xác suất có điều kiện',
    fullName: 'Bài 18. Xác suất có điều kiện',
    chapterId: 'chuong-6',
    chapterTitle: 'CHƯƠNG VI. XÁC SUẤT CÓ ĐIỀU KIỆN',
    pageNumber: 64,
    coreTopics: [
      'Khái niệm xác suất có điều kiện P(A|B) và mối liên hệ với hai biến cố độc lập',
      'Tính xác suất có điều kiện bằng định nghĩa, bảng dữ liệu thống kê 2x2 và tập mẫu thu hẹp',
      'Công thức nhân xác suất P(AB) = P(A)P(B|A) và biểu diễn trên sơ đồ hình cây',
    ],
    practiceExams: [bai18De1, bai18De2],
  },
  {
    id: 'bai-19',
    code: 'Bài 19',
    title: 'Công thức xác suất toàn phần và công thức Bayes',
    fullName: 'Bài 19. Công thức xác suất toàn phần và công thức Bayes',
    chapterId: 'chuong-6',
    chapterTitle: 'CHƯƠNG VI. XÁC SUẤT CÓ ĐIỀU KIỆN',
    pageNumber: 72,
    coreTopics: [
      'Công thức xác suất toàn phần P(B) = P(A)P(B|A) + P(A ngang)P(B|A ngang)',
      'Công thức Bayes P(A|B) = P(A)P(B|A) / P(B) để tính xác suất hậu nghiệm',
      'Vận dụng sơ đồ hình cây, công thức xác suất toàn phần và Bayes trong y học, kỹ thuật và kinh tế',
    ],
    practiceExams: [bai19De1, bai19De2],
  },
  {
    id: 'ontap-chuong-6',
    code: 'Ôn tập Chương VI',
    title: 'Bài tập cuối chương VI',
    fullName: 'Bài tập cuối chương VI',
    chapterId: 'chuong-6',
    chapterTitle: 'CHƯƠNG VI. XÁC SUẤT CÓ ĐIỀU KIỆN',
    pageNumber: 79,
    coreTopics: [
      'Tổng hợp định nghĩa và tính chất của xác suất có điều kiện, công thức nhân xác suất',
      'Kết hợp bảng dữ liệu thống kê 2x2 và sơ đồ hình cây để phân tích các giai đoạn phép thử',
      'Vận dụng thành thạo công thức xác suất toàn phần và công thức Bayes giải bài toán thực tiễn',
    ],
    practiceExams: [ontapC6De1, ontapC6De2],
  },
];
