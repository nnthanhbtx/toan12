import { LessonInfo } from './types';
import { ExamSet } from '../../types/exam';
import { makeMC, makeTF, makeSA, makeSO, makeLessonExam } from './helpers';

// BÀI 6. VECTƠ TRONG KHÔNG GIAN (Đề ôn số 1 & Đề ôn số 2)
function buildBai6Exam(variant: 1 | 2): ExamSet {
  const p = variant === 1 ? 'b6-d1' : 'b6-d2';
  const aEdge = variant === 1 ? 4 : 6; // Cạnh hình lập phương / tứ diện đều
  // Tích vô hướng trong tứ diện đều cạnh aEdge: AB . AC = a^2 * cos(60) = a^2 / 2
  const dotTetra = (aEdge * aEdge) / 2; // v1: 8, v2: 18
  // Độ dài đường chéo hình lập phương cạnh aEdge: a*sqrt(3)

  const part1 = [
    makeMC(
      p,
      1,
      'Bài 6. Vectơ trong không gian',
      `Cho hình hộp $ABCD.A'B'C'D'$. Theo quy tắc hình hộp, tổng $\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'}$ bằng vectơ nào dưới đây?`,
      [
        `$\\overrightarrow{AC'}$`,
        `$\\overrightarrow{AC}$`,
        `$\\overrightarrow{C'A}$`,
        `$\\overrightarrow{BD'}$`,
      ],
      'A',
      `Theo quy tắc hình hộp với ba vectơ xuất phát từ cùng đỉnh $A$ là $\\overrightarrow{AB}, \\overrightarrow{AD}, \\overrightarrow{AA'}$, ta có $\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'} = \\overrightarrow{AC'}$.`,
      'Quy tắc hình hộp: Tổng 3 vectơ cạnh cùng xuất phát từ một đỉnh bằng vectơ đường chéo xuất phát từ đỉnh đó.',
      'sp_box_abcd'
    ),
    makeMC(
      p,
      2,
      'Bài 6. Vectơ trong không gian',
      `Với bốn điểm $A, B, C, D$ bất kỳ trong không gian, đẳng thức nào sau đây là đúng?`,
      [
        `$\\overrightarrow{AB} + \\overrightarrow{CD} = \\overrightarrow{AD} + \\overrightarrow{CB}$`,
        `$\\overrightarrow{AB} + \\overrightarrow{CD} = \\overrightarrow{AC} + \\overrightarrow{BD}$`,
        `$\\overrightarrow{AB} - \\overrightarrow{CD} = \\overrightarrow{AC} + \\overrightarrow{BD}$`,
        `$\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{CA}$`,
      ],
      'A',
      `Chèn điểm $D$ vào $\\overrightarrow{AB}$: $\\overrightarrow{AB} + \\overrightarrow{CD} = \\overrightarrow{AD} + \\overrightarrow{DB} + \\overrightarrow{CD} = \\overrightarrow{AD} + (\\overrightarrow{CD} + \\overrightarrow{DB}) = \\overrightarrow{AD} + \\overrightarrow{CB}$.`,
      'Sử dụng quy tắc ba điểm $\\overrightarrow{XY} = \\overrightarrow{XZ} + \\overrightarrow{ZY}$ hoặc quy tắc trừ $\\overrightarrow{AD} - \\overrightarrow{AB} = \\overrightarrow{BD}$.'
    ),
    makeMC(
      p,
      3,
      'Bài 6. Vectơ trong không gian',
      `Cho tứ diện đều $ABCD$ có tất cả các cạnh bằng $${aEdge}$. Tích vô hướng $\\overrightarrow{AB} \\cdot \\overrightarrow{AC}$ bằng:`,
      [`$${dotTetra}$`, `$${aEdge * aEdge}$`, `$-${dotTetra}$`, `$0$`],
      'A',
      `Tam giác $ABC$ đều cạnh $${aEdge}$ nên $(\\overrightarrow{AB}, \\overrightarrow{AC}) = \\widehat{BAC} = 60^\\circ$. Do đó $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = ${aEdge} \\cdot ${aEdge} \\cdot \\cos 60^\\circ = ${dotTetra}$.`,
      'Hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ có cùng điểm đầu $A$ nên góc giữa chúng chính là $\\widehat{BAC}$.',
      'sp_tetra_abcd'
    ),
    makeMC(
      p,
      4,
      'Bài 6. Vectơ trong không gian',
      `Cho tứ diện đều $ABCD$ có cạnh bằng $${aEdge}$. Tích vô hướng $\\overrightarrow{AB} \\cdot \\overrightarrow{BC}$ bằng:`,
      [`$-${dotTetra}$`, `$${dotTetra}$`, `$${aEdge * aEdge}$`, `$0$`],
      'A',
      `Hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{BC}$ chưa cùng điểm đầu, góc giữa chúng là $180^\\circ - \\widehat{ABC} = 120^\\circ$. Vậy $\\overrightarrow{AB} \\cdot \\overrightarrow{BC} = ${aEdge} \\cdot ${aEdge} \\cdot \\cos 120^\\circ = -${dotTetra}$.`,
      'Cẩn thận bẫy góc giữa $\\overrightarrow{AB}$ và $\\overrightarrow{BC}$: góc này bù với góc $\\widehat{ABC}$, tức bằng $120^\\circ$ chứ không phải $60^\\circ$.',
      'sp_tetra_abcd'
    ),
    makeMC(
      p,
      5,
      'Bài 6. Vectơ trong không gian',
      `Cho tứ diện đều $ABCD$ cạnh $${aEdge}$. Góc giữa hai vectơ đối diện $\\overrightarrow{AB}$ và $\\overrightarrow{CD}$ bằng:`,
      [`$90^\\circ$`, `$60^\\circ$`, `$120^\\circ$`, `$45^\\circ$`],
      'A',
      `Ta có $\\overrightarrow{AB} \\cdot \\overrightarrow{CD} = \\overrightarrow{AB} \\cdot (\\overrightarrow{AD} - \\overrightarrow{AC}) = \\overrightarrow{AB}\\cdot\\overrightarrow{AD} - \\overrightarrow{AB}\\cdot\\overrightarrow{AC} = ${dotTetra} - ${dotTetra} = 0$. Vậy $(\\overrightarrow{AB}, \\overrightarrow{CD}) = 90^\\circ$.`,
      'Trong tứ diện đều, các cặp cạnh đối diện luôn vuông góc với nhau.',
      'sp_tetra_abcd'
    ),
    makeMC(
      p,
      6,
      'Bài 6. Vectơ trong không gian',
      `Cho tam giác $ABC$ có trọng tâm $G$. Với mọi điểm $M$ trong không gian, hệ thức nào sau đây đúng?`,
      [
        `$\\overrightarrow{MA} + \\overrightarrow{MB} + \\overrightarrow{MC} = 3\\overrightarrow{MG}$`,
        `$\\overrightarrow{MA} + \\overrightarrow{MB} + \\overrightarrow{MC} = \\overrightarrow{MG}$`,
        `$\\overrightarrow{MA} + \\overrightarrow{MB} + \\overrightarrow{MC} = \\vec{0}$`,
        `$\\overrightarrow{MA} + \\overrightarrow{MB} + \\overrightarrow{MC} = 2\\overrightarrow{MG}$`,
      ],
      'A',
      `Vì $G$ là trọng tâm tam giác $ABC$ nên $\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0} \\Rightarrow \\overrightarrow{MA} + \\overrightarrow{MB} + \\overrightarrow{MC} = 3\\overrightarrow{MG}$.`,
      'Hệ thức trọng tâm tam giác với điểm $M$ bất kỳ: $\\overrightarrow{MA} + \\overrightarrow{MB} + \\overrightarrow{MC} = 3\\overrightarrow{MG}$.',
      'sp_triangle_space_mg'
    ),
    makeMC(
      p,
      7,
      'Bài 6. Vectơ trong không gian',
      `Cho tứ diện $ABCD$. Gọi $M$ và $N$ lần lượt là trung điểm của $AB$ và $CD$. Đẳng thức nào sau đây đúng?`,
      [
        `$2\\overrightarrow{MN} = \\overrightarrow{AD} + \\overrightarrow{BC}$`,
        `$\\overrightarrow{MN} = \\overrightarrow{AD} + \\overrightarrow{BC}$`,
        `$2\\overrightarrow{MN} = \\overrightarrow{AB} + \\overrightarrow{CD}$`,
        `$2\\overrightarrow{MN} = \\overrightarrow{AC} - \\overrightarrow{BD}$`,
      ],
      'A',
      `Ta có $\\overrightarrow{MN} = \\overrightarrow{MA} + \\overrightarrow{AD} + \\overrightarrow{DN}$ và $\\overrightarrow{MN} = \\overrightarrow{MB} + \\overrightarrow{BC} + \\overrightarrow{CN}$. Cộng vế theo vế (do $\\overrightarrow{MA}+\\overrightarrow{MB}=\\vec{0}$, $\\overrightarrow{DN}+\\overrightarrow{CN}=\\vec{0}$) được $2\\overrightarrow{MN} = \\overrightarrow{AD} + \\overrightarrow{BC}$.`,
      'Hệ thức trung điểm hai cạnh đối diện của tứ diện: $\\overrightarrow{MN} = \\frac{1}{2}(\\overrightarrow{AD} + \\overrightarrow{BC}) = \\frac{1}{2}(\\overrightarrow{AC} + \\overrightarrow{BD})$.',
      'sp_tetra_mn'
    ),
    makeMC(
      p,
      8,
      'Bài 6. Vectơ trong không gian',
      `Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $${aEdge}$. Độ dài của vectơ tổng $\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'}$ bằng:`,
      [
        `$${aEdge}\\sqrt{3}$`,
        `$${aEdge}\\sqrt{2}$`,
        `$${3 * aEdge}$`,
        `$${aEdge}$`,
      ],
      'A',
      `Theo quy tắc hình hộp, $\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'} = \\overrightarrow{AC'}$. Độ dài đường chéo hình lập phương cạnh $${aEdge}$ là $AC' = ${aEdge}\\sqrt{3}$.`,
      'Độ dài vectơ tổng chính là độ dài đoạn thẳng đường chéo $AC\' = a\\sqrt{3}$.',
      'sp_box_abcd'
    ),
    makeMC(
      p,
      9,
      'Bài 6. Vectơ trong không gian',
      `Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{B'D'}$ bằng:`,
      [`$135^\\circ$`, `$45^\\circ$`, `$90^\\circ$`, `$60^\\circ$`],
      'A',
      `Vì $\\overrightarrow{B'D'} = \\overrightarrow{BD}$ nên $(\\overrightarrow{AB}, \\overrightarrow{B'D'}) = (\\overrightarrow{AB}, \\overrightarrow{BD}) = 180^\\circ - \\widehat{ABD} = 180^\\circ - 45^\\circ = 135^\\circ$.`,
      'Đưa hai vectơ về cùng gốc $B$: $\\overrightarrow{AB}$ và $\\overrightarrow{BD}$ ngược hướng tại đỉnh $B$ nên góc bằng $180^\\circ - 45^\\circ = 135^\\circ$.',
      'sp_box_abcd'
    ),
    makeMC(
      p,
      10,
      'Bài 6. Vectơ trong không gian',
      `Cho hai vectơ $\\vec{a}, \\vec{b}$ thỏa mãn $|\\vec{a}| = ${variant === 1 ? 3 : 4}$, $|\\vec{b}| = ${variant === 1 ? 4 : 5}$ và $(\\vec{a}, \\vec{b}) = 60^\\circ$. Độ dài của vectơ $\\vec{a} + \\vec{b}$ bằng:`,
      [
        `$\\sqrt{${variant === 1 ? 37 : 61}}$`,
        `$\\sqrt{${variant === 1 ? 13 : 21}}$`,
        `$${variant === 1 ? 7 : 9}$`,
        `$${variant === 1 ? 5 : 6}$`,
      ],
      'A',
      `Bình phương vô hướng: $|\\vec{a} + \\vec{b}|^2 = |\\vec{a}|^2 + |\\vec{b}|^2 + 2|\\vec{a}||\\vec{b}|\\cos 60^\\circ = ${variant === 1 ? '9 + 16 + 12 = 37' : '16 + 25 + 20 = 61'}$. Suy ra $|\\vec{a} + \\vec{b}| = \\sqrt{${variant === 1 ? 37 : 61}}$.`,
      'Sử dụng hằng đẳng thức bình phương vô hướng: $|\\vec{a} + \\vec{b}| = \\sqrt{|\\vec{a}|^2 + |\\vec{b}|^2 + 2\\vec{a}\\cdot\\vec{b}}$.'
    ),
    makeMC(
      p,
      11,
      'Bài 6. Vectơ trong không gian',
      `Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Khẳng định nào sau đây là đúng?`,
      [
        `$\\overrightarrow{SA} + \\overrightarrow{SC} = \\overrightarrow{SB} + \\overrightarrow{SD}$`,
        `$\\overrightarrow{SA} + \\overrightarrow{SB} = \\overrightarrow{SC} + \\overrightarrow{SD}$`,
        `$\\overrightarrow{SA} - \\overrightarrow{SC} = \\overrightarrow{SB} - \\overrightarrow{SD}$`,
        `$\\overrightarrow{SA} + \\overrightarrow{SC} = 4\\overrightarrow{SO}$`,
      ],
      'A',
      `Vì $O$ là trung điểm của cả hai đường chéo $AC$ và $BD$ nên $\\overrightarrow{SA} + \\overrightarrow{SC} = 2\\overrightarrow{SO}$ và $\\overrightarrow{SB} + \\overrightarrow{SD} = 2\\overrightarrow{SO}$. Suy ra $\\overrightarrow{SA} + \\overrightarrow{SC} = \\overrightarrow{SB} + \\overrightarrow{SD}$.`,
      'Tính chất đặc trưng của hình chóp có đáy là hình bình hành: $\\overrightarrow{SA} + \\overrightarrow{SC} = \\overrightarrow{SB} + \\overrightarrow{SD} = 2\\overrightarrow{SO}$.',
      'sp_pyramid_sabcd'
    ),
    makeMC(
      p,
      12,
      'Bài 6. Vectơ trong không gian',
      `Một chiếc đèn chùm nặng được treo cân bằng bởi ba sợi dây không giãn $OA, OB, OC$ đôi một vuông góc với nhau và có độ dài lực căng đều bằng $${variant === 1 ? 20 : 30}\\text{ N}$. Độ lớn của trọng lực $\\vec{P}$ tác dụng lên đèn chùm bằng:`,
      [
        `$${variant === 1 ? '20\\sqrt{3}' : '30\\sqrt{3}'}\\text{ N}$`,
        `$${variant === 1 ? '60' : '90'}\\text{ N}$`,
        `$${variant === 1 ? '20\\sqrt{2}' : '30\\sqrt{2}'}\\text{ N}$`,
        `$${variant === 1 ? '20' : '30'}\\text{ N}$`,
      ],
      'A',
      `Do đèn cân bằng nên $|\\vec{P}| = |\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3|$. Vì ba lực đôi một vuông góc và cùng độ lớn $${variant === 1 ? 20 : 30}\\text{ N}$ nên $|\\vec{P}| = ${variant === 1 ? 20 : 30}\\sqrt{3}\\text{ N}$ theo quy tắc hình hộp chữ nhật.`,
      'Tổng của 3 vectơ đôi một vuông góc có cùng độ dài $F$ có độ lớn bằng $F\\sqrt{3}$.',
      'sp_chandelier_oabc'
    ),
  ];

  const part2 = [
    makeTF(
      p,
      1,
      'Bài 6. Vectơ trong không gian',
      `Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $${aEdge}$. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{D'C'}$ là hai vectơ bằng nhau.`,
          isCorrect: true,
          exp: `Vì $AB // D'C'$, $AB = D'C'$ và hai vectơ $\\overrightarrow{AB}, \\overrightarrow{D'C'}$ cùng hướng nên $\\overrightarrow{AB} = \\overrightarrow{D'C'}$.`,
        },
        {
          text: `Độ dài của vectơ $\\overrightarrow{AC}$ bằng $${aEdge}\\sqrt{2}$.`,
          isCorrect: true,
          exp: `$AC$ là đường chéo hình vuông $ABCD$ cạnh $${aEdge}$ nên $|\\overrightarrow{AC}| = AC = ${aEdge}\\sqrt{2}$.`,
        },
        {
          text: `Tích vô hướng $\\overrightarrow{AB} \\cdot \\overrightarrow{A'C'} = ${aEdge * aEdge}$.`,
          isCorrect: true,
          exp: `Vì $\\overrightarrow{A'C'} = \\overrightarrow{AC} = \\overrightarrow{AB} + \\overrightarrow{AD}$ và $\\overrightarrow{AB} \\perp \\overrightarrow{AD}$ nên $\\overrightarrow{AB} \\cdot \\overrightarrow{A'C'} = \\overrightarrow{AB}^2 + \\overrightarrow{AB}\\cdot\\overrightarrow{AD} = ${aEdge * aEdge}$.`,
        },
        {
          text: `Góc giữa hai vectơ $\\overrightarrow{AC}$ và $\\overrightarrow{DA'}$ bằng $60^\\circ$.`,
          isCorrect: false,
          exp: `Vì $\\overrightarrow{DA'} = \\overrightarrow{CB'}$ nên $(\\overrightarrow{AC}, \\overrightarrow{DA'}) = (\\overrightarrow{AC}, \\overrightarrow{CB'}) = 180^\\circ - \\widehat{ACB'} = 180^\\circ - 60^\\circ = 120^\\circ$ (do $\\triangle ACB'$ đều).`,
        },
      ],
      'Chú ý hướng của hai vectơ khi đưa về cùng gốc để xác định góc nhọn hay góc tù.',
      'sp_box_abcd'
    ),
    makeTF(
      p,
      2,
      'Bài 6. Vectơ trong không gian',
      `Cho tứ diện đều $ABCD$ có cạnh bằng $${aEdge}$. Gọi $M$ là trung điểm của cạnh $BC$ và $G$ là trọng tâm tam giác $BCD$. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Ta có $\\overrightarrow{AB} + \\overrightarrow{AC} = 2\\overrightarrow{AM}$.`,
          isCorrect: true,
          exp: `Theo quy tắc trung điểm với $M$ là trung điểm $BC$, ta có $\\overrightarrow{AB} + \\overrightarrow{AC} = 2\\overrightarrow{AM}$.`,
        },
        {
          text: `Hệ thức trọng tâm cho ta $\\overrightarrow{AB} + \\overrightarrow{AC} + \\overrightarrow{AD} = 3\\overrightarrow{AG}$.`,
          isCorrect: true,
          exp: `Vì $G$ là trọng tâm tam giác $BCD$ nên với điểm $A$ bất kỳ, $\\overrightarrow{AB} + \\overrightarrow{AC} + \\overrightarrow{AD} = 3\\overrightarrow{AG}$.`,
        },
        {
          text: `Tích vô hướng $\\overrightarrow{AM} \\cdot \\overrightarrow{BC} = 0$.`,
          isCorrect: true,
          exp: `Trong tam giác đều $ABC$, đường trung tuyến $AM$ đồng thời là đường cao nên $AM \\perp BC \\Rightarrow \\overrightarrow{AM} \\cdot \\overrightarrow{BC} = 0$.`,
        },
        {
          text: `Tích vô hướng $\\overrightarrow{AG} \\cdot \\overrightarrow{BC} = ${dotTetra}$.`,
          isCorrect: false,
          exp: `Vì $AG \\perp (BCD)$ trong tứ diện đều nên $AG \\perp BC \\Rightarrow \\overrightarrow{AG} \\cdot \\overrightarrow{BC} = 0$.`,
        },
      ],
      'Trong tứ diện đều $ABCD$ có $G$ là tâm đáy $(BCD)$, đường thẳng $AG$ vuông góc với mọi vectơ nằm trong mặt phẳng $(BCD)$.',
      'sp_tetra_centroid_g'
    ),
    makeTF(
      p,
      3,
      'Bài 6. Vectơ trong không gian',
      `Cho hình lăng trụ tam giác đều $ABC.A'B'C'$ có tất cả các cạnh (cạnh đáy và cạnh bên) đều bằng $${variant === 1 ? 2 : 4}$. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Ta có $\\overrightarrow{AA'} + \\overrightarrow{AB} = \\overrightarrow{AB'}$.`,
          isCorrect: true,
          exp: `Tứ giác $ABB'A'$ là hình vuông (hình bình hành) nên theo quy tắc hình bình hành ta có $\\overrightarrow{AA'} + \\overrightarrow{AB} = \\overrightarrow{AB'}$.`,
        },
        {
          text: `Hai vectơ $\\overrightarrow{AA'}$ và $\\overrightarrow{BC}$ vuông góc với nhau.`,
          isCorrect: true,
          exp: `Lăng trụ đều là lăng trụ đứng nên $AA' \\perp (ABC) \\Rightarrow AA' \\perp BC \\Rightarrow \\overrightarrow{AA'} \\cdot \\overrightarrow{BC} = 0$.`,
        },
        {
          text: `Tích vô hướng $\\overrightarrow{AB} \\cdot \\overrightarrow{BC} = ${variant === 1 ? 2 : 8}$.`,
          isCorrect: false,
          exp: `Góc giữa $\\overrightarrow{AB}$ và $\\overrightarrow{BC}$ là $120^\\circ$ nên $\\overrightarrow{AB} \\cdot \\overrightarrow{BC} = ${variant === 1 ? 2 : 4}^2 \\cdot \\cos 120^\\circ = -${variant === 1 ? 2 : 8}$.`,
        },
        {
          text: `Độ dài của vectơ $\\overrightarrow{AB'}$ bằng $${variant === 1 ? '2\\sqrt{2}' : '4\\sqrt{2}'}$.`,
          isCorrect: true,
          exp: `$ABB'A'$ là hình vuông cạnh $${variant === 1 ? 2 : 4}$ nên đường chéo $AB' = ${variant === 1 ? '2\\sqrt{2}' : '4\\sqrt{2}'}$.`,
        },
      ],
      'Trong lăng trụ đứng, các vectơ cạnh bên vuông góc với mọi vectơ nằm trong hai mặt đáy.',
      'sp_prism_abca1b1c1'
    ),
  ];

  const part3 = [
    makeSA(
      p,
      1,
      'Bài 6. Vectơ trong không gian',
      `Cho tứ diện đều $ABCD$ có cạnh bằng $${variant === 1 ? 6 : 8}$. Tính tích vô hướng $\\overrightarrow{AB} \\cdot \\overrightarrow{AD}$.`,
      [variant === 1 ? '18' : '32'],
      `Tam giác $ABD$ đều cạnh $${variant === 1 ? 6 : 8}$ nên $\\overrightarrow{AB} \\cdot \\overrightarrow{AD} = ${variant === 1 ? 6 : 8}^2 \\cdot \\cos 60^\\circ = ${variant === 1 ? 18 : 32}$.`,
      'Áp dụng công thức $\\vec{u}\\cdot\\vec{v} = |\\vec{u}||\\vec{v}|\\cos(\\vec{u}, \\vec{v})$.',
      undefined,
      'sp_tetra_abcd'
    ),
    makeSA(
      p,
      2,
      'Bài 6. Vectơ trong không gian',
      `Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB = ${variant === 1 ? 3 : 6}, AD = ${variant === 1 ? 4 : 8}, AA' = ${variant === 1 ? 12 : 24}$. Tính độ dài của vectơ tổng $\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'}$.`,
      [variant === 1 ? '13' : '26'],
      `Theo quy tắc hình hộp, $|\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'}| = AC' = \\sqrt{AB^2 + AD^2 + AA'^2} = \\sqrt{${variant === 1 ? '9 + 16 + 144' : '36 + 64 + 576'}} = ${variant === 1 ? 13 : 26}$.`,
      'Độ dài đường chéo hình hộp chữ nhật có ba kích thước $a, b, c$ là $\\sqrt{a^2 + b^2 + c^2}$.',
      undefined,
      'sp_box_abcd'
    ),
    makeSA(
      p,
      3,
      'Bài 6. Vectơ trong không gian',
      `Cho hình lập phương $ABCD.A'B'C'D'$. Tính số đo góc (theo đơn vị độ) giữa hai vectơ $\\overrightarrow{AC}$ và $\\overrightarrow{B'C'}$.`,
      ['45'],
      `Vì $\\overrightarrow{B'C'} = \\overrightarrow{BC} = \\overrightarrow{AD}$ nên $(\\overrightarrow{AC}, \\overrightarrow{B'C'}) = (\\overrightarrow{AC}, \\overrightarrow{AD}) = \\widehat{CAD} = 45^\\circ$.`,
      'Thay $\\overrightarrow{B\'C\'}$ bằng vectơ bằng nó là $\\overrightarrow{AD}$ để đưa về chung điểm đầu $A$.',
      undefined,
      'sp_box_abcd'
    ),
    makeSA(
      p,
      4,
      'Bài 6. Vectơ trong không gian',
      `Cho tứ diện $ABCD$ có $G$ là trọng tâm tam giác $BCD$. Biết $\\overrightarrow{AB} + \\overrightarrow{AC} + \\overrightarrow{AD} = k\\overrightarrow{AG}$. Tìm giá trị của $k$.`,
      ['3'],
      `Theo tính chất trọng tâm tam giác $BCD$, với điểm $A$ bất kỳ ta luôn có $\\overrightarrow{AB} + \\overrightarrow{AC} + \\overrightarrow{AD} = 3\\overrightarrow{AG}$. Vậy $k = 3$.`,
      'Ghi nhớ hệ số $k = 3$ đối với trọng tâm tam giác và $k = 4$ đối với trọng tâm tứ diện.',
      undefined,
      'sp_tetra_centroid_g'
    ),
  ];

  const part4 = [
    makeSO(
      p,
      1,
      'Bài 6. Vectơ trong không gian',
      `Cho tứ diện $ABCD$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $CD$. Chứng minh rằng $\\overrightarrow{MN} = \\frac{1}{2}(\\overrightarrow{AD} + \\overrightarrow{BC})$.`,
      `Biến đổi vectơ theo quy tắc 3 điểm và tính chất trung điểm.`,
      [
        {
          role: 'Biểu diễn vectơ MN theo hai đường đi qua A, D và qua B, C',
          content: `Theo quy tắc ba điểm, ta có $\\overrightarrow{MN} = \\overrightarrow{MA} + \\overrightarrow{AD} + \\overrightarrow{DN}$ và $\\overrightarrow{MN} = \\overrightarrow{MB} + \\overrightarrow{BC} + \\overrightarrow{CN}$.`,
        },
        {
          role: 'Cộng vế theo vế hai đẳng thức vectơ',
          content: `Cộng hai đẳng thức trên ta được $2\\overrightarrow{MN} = (\\overrightarrow{MA} + \\overrightarrow{MB}) + (\\overrightarrow{AD} + \\overrightarrow{BC}) + (\\overrightarrow{DN} + \\overrightarrow{CN})$.`,
        },
        {
          role: 'Sử dụng tính chất trung điểm và kết luận',
          content: `Vì $M, N$ là trung điểm của $AB, CD$ nên $\\overrightarrow{MA} + \\overrightarrow{MB} = \\vec{0}$ và $\\overrightarrow{DN} + \\overrightarrow{CN} = \\vec{0}$. Suy ra $2\\overrightarrow{MN} = \\overrightarrow{AD} + \\overrightarrow{BC} \\Leftrightarrow \\overrightarrow{MN} = \\frac{1}{2}(\\overrightarrow{AD} + \\overrightarrow{BC})$.`,
        },
      ],
      'Kỹ thuật cộng hai đường đi đối xứng qua hai trung điểm giúp triệt tiêu các cặp vectơ đối nhau.',
      'Chứng minh đẳng thức vectơ kinh điển trong tứ diện.',
      0.7,
      'sp_tetra_mn'
    ),
    makeSO(
      p,
      2,
      'Bài 6. Vectơ trong không gian',
      `Cho tứ diện đều $ABCD$ cạnh $${aEdge}$. Chứng minh rằng hai cạnh đối diện $AB$ và $CD$ vuông góc với nhau.`,
      `Sử dụng tích vô hướng để chứng minh $\\overrightarrow{AB} \\cdot \\overrightarrow{CD} = 0$.`,
      [
        {
          role: 'Biểu diễn vectơ CD theo hai vectơ chung gốc A',
          content: `Theo quy tắc hiệu hai vectơ chung gốc $A$, ta có $\\overrightarrow{CD} = \\overrightarrow{AD} - \\overrightarrow{AC}$.`,
        },
        {
          role: 'Khai triển tích vô hướng AB . CD',
          content: `Khi đó $\\overrightarrow{AB} \\cdot \\overrightarrow{CD} = \\overrightarrow{AB} \\cdot (\\overrightarrow{AD} - \\overrightarrow{AC}) = \\overrightarrow{AB} \\cdot \\overrightarrow{AD} - \\overrightarrow{AB} \\cdot \\overrightarrow{AC}$.`,
        },
        {
          role: 'Tính các tích vô hướng thành phần và kết luận',
          content: `Vì các mặt đều là tam giác đều cạnh $${aEdge}$ nên $\\overrightarrow{AB}\\cdot\\overrightarrow{AD} = \\overrightarrow{AB}\\cdot\\overrightarrow{AC} = ${aEdge}^2 \\cos 60^\\circ = ${dotTetra}$. Suy ra $\\overrightarrow{AB} \\cdot \\overrightarrow{CD} = 0 \\Rightarrow AB \\perp CD$.`,
        },
      ],
      'Để chứng minh hai đường thẳng chéo nhau vuông góc bằng vectơ, hãy phân tích các vectơ theo bộ 3 vectơ chung gốc.',
      'Ứng dụng tích vô hướng chứng minh quan hệ vuông góc trong không gian.',
      0.65,
      'sp_tetra_abcd'
    ),
    makeSO(
      p,
      3,
      'Bài 6. Vectơ trong không gian',
      `Cho hình hộp $ABCD.A'B'C'D'$. Gọi $G$ là trọng tâm của tam giác $AB'D'$. Chứng minh rằng $\\overrightarrow{AC'} = 3\\overrightarrow{AG}$.`,
      `Chứng minh $A, G, C'$ thẳng hàng và $AG = \\frac{1}{3}AC'$.`,
      [
        {
          role: 'Áp dụng quy tắc hình hộp cho vectơ đường chéo AC\'',
          content: `Theo quy tắc hình hộp xuất phát từ đỉnh $A$, ta có $\\overrightarrow{AC'} = \\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'}$.`,
        },
        {
          role: 'Áp dụng hệ thức trọng tâm cho tam giác AB\'D\'',
          content: `Vì $G$ là trọng tâm tam giác $AB'D'$ nên $3\\overrightarrow{AG} = \\overrightarrow{AA} + \\overrightarrow{AB'} + \\overrightarrow{AD'} = \\overrightarrow{AB'} + \\overrightarrow{AD'}$? Không, $G$ là trọng tâm $\\triangle BDC'$ hoặc $\\triangle A'BD$! Hãy xét $G$ là trọng tâm tam giác $A'BD$.`,
        },
        {
          role: 'So sánh hai vế và kết luận',
          content: `Khi $G$ là trọng tâm tam giác $A'BD$, ta có $3\\overrightarrow{AG} = \\overrightarrow{AA'} + \\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC'}$.`,
        },
      ],
      'Trọng tâm $G$ của tam giác $A\'BD$ thỏa mãn $\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA\'} = 3\\overrightarrow{AG}$.',
      'Bài toán kinh điển về đường chéo hình hộp đi qua trọng tâm tam giác tạo bởi 3 đỉnh kề.',
      0.65,
      'sp_box_a1bd_g'
    ),
  ];

  // Chuẩn hóa đề bài và bước 2 của câu 3 phần IV với tam giác A'BD:
  part4[2].problemStatement = `Cho hình hộp $ABCD.A'B'C'D'$. Gọi $G$ là trọng tâm của tam giác $A'BD$. Chứng minh rằng $\\overrightarrow{AC'} = 3\\overrightarrow{AG}$.`;
  part4[2].steps[1].content = `Vì $G$ là trọng tâm của tam giác $A'BD$ nên với điểm $A$, ta có $\\overrightarrow{AA'} + \\overrightarrow{AB} + \\overrightarrow{AD} = 3\\overrightarrow{AG}$.`;
  part4[2].steps[2].content = `Từ hai đẳng thức trên suy ra $\\overrightarrow{AC'} = 3\\overrightarrow{AG}$ (điều phải chứng minh).`;

  return makeLessonExam(
    `bai-06-de-${variant}`,
    `Bài 6 - Đề ôn số ${variant}`,
    `Bài 6. Vectơ trong không gian (SGK Toán 12 Tập 1)`,
    `Đề ôn số ${variant} - Bài 6: Vectơ trong không gian (22 câu hỏi chuẩn cấu trúc 4 phần).`,
    part1,
    part2,
    part3,
    part4
  );
}

// BÀI 7. HỆ TRỤC TOẠ ĐỘ TRONG KHÔNG GIAN (Đề ôn số 1 & Đề ôn số 2)
function buildBai7Exam(variant: 1 | 2): ExamSet {
  const p = variant === 1 ? 'b7-d1' : 'b7-d2';
  const xM = variant === 1 ? 2 : 3;
  const yM = variant === 1 ? -4 : -5;
  const zM = variant === 1 ? 6 : 7;

  const part1 = [
    makeMC(
      p,
      1,
      'Bài 7. Hệ trục toạ độ trong không gian',
      `Trong không gian $Oxyz$, cho điểm $M$ thỏa mãn $\\overrightarrow{OM} = ${xM}\\vec{i} ${yM}\\vec{j} + ${zM}\\vec{k}$. Tọa độ của điểm $M$ là:`,
      [
        `$(${xM}; ${yM}; ${zM})$`,
        `$(${xM}; ${-yM}; ${zM})$`,
        `$(${zM}; ${yM}; ${xM})$`,
        `$(-${xM}; ${-yM}; -${zM})$`,
      ],
      'A',
      `Theo định nghĩa tọa độ điểm trong không gian $Oxyz$: $\\overrightarrow{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k} \\Leftrightarrow M(x; y; z)$. Vậy $M(${xM}; ${yM}; ${zM})$.`,
      'Đọc đúng thứ tự hệ số của $\\vec{i}, \\vec{j}, \\vec{k}$ tương ứng với hoành độ, tung độ, cao độ.',
      'sp_oxyz_point_proj'
    ),
    makeMC(
      p,
      2,
      'Bài 7. Hệ trục toạ độ trong không gian',
      `Trong không gian $Oxyz$, cho vectơ $\\vec{u} = ${variant === 1 ? 5 : 8}\\vec{i} - ${variant === 1 ? 3 : 4}\\vec{k}$. Tọa độ của vectơ $\\vec{u}$ là:`,
      [
        `$(${variant === 1 ? 5 : 8}; 0; -${variant === 1 ? 3 : 4})$`,
        `$(${variant === 1 ? 5 : 8}; -${variant === 1 ? 3 : 4}; 0)$`,
        `$(0; ${variant === 1 ? 5 : 8}; -${variant === 1 ? 3 : 4})$`,
        `$(${variant === 1 ? 5 : 8}; 1; -${variant === 1 ? 3 : 4})$`,
      ],
      'A',
      `Biểu thức thiếu vectơ đơn vị $\\vec{j}$ nghĩa là hệ số của $\\vec{j}$ bằng $0$: $\\vec{u} = ${variant === 1 ? 5 : 8}\\vec{i} + 0\\vec{j} - ${variant === 1 ? 3 : 4}\\vec{k} = (${variant === 1 ? 5 : 8}; 0; -${variant === 1 ? 3 : 4})$.`,
      'Thành phần vectơ đơn vị nào khuyết thì tọa độ tương ứng tại vị trí đó bằng $0$.'
    ),
    makeMC(
      p,
      3,
      'Bài 7. Hệ trục toạ độ trong không gian',
      `Trong không gian $Oxyz$, hình chiếu vuông góc của điểm $M(${xM}; ${yM}; ${zM})$ trên mặt phẳng $(Oxy)$ có tọa độ là:`,
      [
        `$(${xM}; ${yM}; 0)$`,
        `$(0; 0; ${zM})$`,
        `$(${xM}; 0; ${zM})$`,
        `$(0; ${yM}; ${zM})$`,
      ],
      'A',
      `Chiếu vuông góc lên mặt phẳng $(Oxy)$ thì giữ nguyên $x, y$ và cho cao độ $z = 0$, ta được điểm $(${xM}; ${yM}; 0)$.`,
      'Quy tắc hình chiếu vuông góc: Tên mặt phẳng/trục có chữ cái nào thì giữ nguyên tọa độ đó, thành phần thiếu cho bằng $0$.',
      'sp_oxyz_point_proj'
    ),
    makeMC(
      p,
      4,
      'Bài 7. Hệ trục toạ độ trong không gian',
      `Trong không gian $Oxyz$, hình chiếu vuông góc của điểm $M(${xM}; ${yM}; ${zM})$ trên trục $Oz$ có tọa độ là:`,
      [
        `$(0; 0; ${zM})$`,
        `$(${xM}; ${yM}; 0)$`,
        `$(0; 0; -${zM})$`,
        `$(${xM}; 0; 0)$`,
      ],
      'A',
      `Chiếu vuông góc lên trục $Oz$ thì giữ nguyên $z = ${zM}$ và cho $x = 0, y = 0$, được điểm $(0; 0; ${zM})$.`,
      'Điểm nằm trên trục $Oz$ luôn có dạng $(0; 0; z)$.',
      'sp_oxyz_point_proj'
    ),
    makeMC(
      p,
      5,
      'Bài 7. Hệ trục toạ độ trong không gian',
      `Trong không gian $Oxyz$, điểm đối xứng của điểm $M(${xM}; ${yM}; ${zM})$ qua mặt phẳng $(Oxz)$ có tọa độ là:`,
      [
        `$(${xM}; ${-yM}; ${zM})$`,
        `$(-${xM}; ${yM}; -${zM})$`,
        `$(${xM}; 0; ${zM})$`,
        `$(-${xM}; ${-yM}; -${zM})$`,
      ],
      'A',
      `Đối xứng qua mặt phẳng $(Oxz)$ thì giữ nguyên $x, z$ và đổi dấu tung độ $y$, ta được $(${xM}; ${-yM}; ${zM})$.`,
      'Quy tắc đối xứng: Đối xứng qua mặt phẳng/trục nào thì giữ nguyên thành phần đó và đổi dấu các thành phần còn lại.',
      'sp_oxyz_point_proj'
    ),
    makeMC(
      p,
      6,
      'Bài 7. Hệ trục toạ độ trong không gian',
      `Trong không gian $Oxyz$, cho hai điểm $A(1; ${variant === 1 ? 2 : 3}; -1)$ và $B(${variant === 1 ? 4 : 5}; 0; ${variant === 1 ? 3 : 5})$. Tọa độ của vectơ $\\overrightarrow{AB}$ là:`,
      [
        `$(${variant === 1 ? 3 : 4}; -${variant === 1 ? 2 : 3}; ${variant === 1 ? 4 : 6})$`,
        `$(-${variant === 1 ? 3 : 4}; ${variant === 1 ? 2 : 3}; -${variant === 1 ? 4 : 6})$`,
        `$(${variant === 1 ? 5 : 6}; ${variant === 1 ? 2 : 3}; ${variant === 1 ? 2 : 4})$`,
        `$(${variant === 1 ? 4 : 5}; 0; -${variant === 1 ? 3 : 5})$`,
      ],
      'A',
      `Lấy tọa độ điểm cuối $B$ trừ tọa độ điểm đầu $A$: $\\overrightarrow{AB} = (${variant === 1 ? 4 : 5} - 1; 0 - ${variant === 1 ? 2 : 3}; ${variant === 1 ? 3 : 5} - (-1)) = (${variant === 1 ? 3 : 4}; -${variant === 1 ? 2 : 3}; ${variant === 1 ? 4 : 6})$.`,
      'Công thức: $\\overrightarrow{AB} = (x_B - x_A; y_B - y_A; z_B - z_A)$.'
    ),
    makeMC(
      p,
      7,
      'Bài 7. Hệ trục toạ độ trong không gian',
      `Trong không gian $Oxyz$, cho điểm $A(${variant === 1 ? 2 : 3}; -1; 4)$ và vectơ $\\overrightarrow{AB} = (1; ${variant === 1 ? 5 : 6}; -2)$. Tọa độ của điểm $B$ là:`,
      [
        `$(${variant === 1 ? 3 : 4}; ${variant === 1 ? 4 : 5}; 2)$`,
        `$(${variant === 1 ? 1 : 2}; -${variant === 1 ? 6 : 7}; 6)$`,
        `$(-1; -${variant === 1 ? 4 : 5}; -2)$`,
        `$(${variant === 1 ? 3 : 4}; -${variant === 1 ? 6 : 7}; 2)$`,
      ],
      'A',
      `Từ $\\overrightarrow{AB} = (x_B - x_A; y_B - y_A; z_B - z_A)$ suy ra $x_B = x_A + x_{\\overrightarrow{AB}} = ${variant === 1 ? 3 : 4}$, $y_B = -1 + ${variant === 1 ? 5 : 6} = ${variant === 1 ? 4 : 5}$, $z_B = 4 - 2 = 2$.`,
      'Tọa độ điểm cuối bằng tọa độ điểm đầu cộng tọa độ vectơ.'
    ),
    makeMC(
      p,
      8,
      'Bài 7. Hệ trục toạ độ trong không gian',
      `Trong không gian $Oxyz$, cho ba điểm $A(1; 0; 2), B(2; ${variant === 1 ? 3 : 4}; 1), C(0; 2; ${variant === 1 ? 5 : 6})$. Tìm tọa độ đỉnh $D$ để tứ giác $ABCD$ là hình bình hành.`,
      [
        `$(-1; -${variant === 1 ? 1 : 2}; ${variant === 1 ? 6 : 7})$`,
        `$(1; ${variant === 1 ? 5 : 6}; -4)$`,
        `$(3; 1; -${variant === 1 ? 2 : 3})$`,
        `$(-1; 1; ${variant === 1 ? 6 : 7})$`,
      ],
      'A',
      `Để $ABCD$ là hình bình hành thì $\\overrightarrow{AD} = \\overrightarrow{BC} \\Leftrightarrow x_D = x_A + x_C - x_B = 1 + 0 - 2 = -1$; $y_D = 0 + 2 - ${variant === 1 ? 3 : 4} = -${variant === 1 ? 1 : 2}$; $z_D = 2 + ${variant === 1 ? 5 : 6} - 1 = ${variant === 1 ? 6 : 7}$.`,
      'Trong hình bình hành $ABCD$: $D = A + C - B$ (tổng hai đỉnh kề trừ đỉnh đối diện).',
      'sp_oxyz_parallelogram'
    ),
    makeMC(
      p,
      9,
      'Bài 7. Hệ trục toạ độ trong không gian',
      `Trong không gian $Oxyz$, khoảng cách từ điểm $M(${xM}; ${yM}; ${zM})$ đến mặt phẳng $(Oxy)$ bằng:`,
      [`$${zM}$`, `$${xM}$`, `$${-yM}$`, `$\\sqrt{${xM * xM + yM * yM}}$`],
      'A',
      `Hình chiếu của $M$ lên $(Oxy)$ là $H(${xM}; ${yM}; 0)$ nên khoảng cách từ $M$ đến $(Oxy)$ bằng $MH = |z_M| = ${zM}$.`,
      'Khoảng cách từ $M(x; y; z)$ đến mặt phẳng $(Oxy)$ bằng $|z|$, còn khoảng cách đến trục $Oz$ bằng $\\sqrt{x^2 + y^2}$.',
      'sp_oxyz_point_proj'
    ),
    makeMC(
      p,
      10,
      'Bài 7. Hệ trục toạ độ trong không gian',
      `Trong không gian $Oxyz$, cho hình hộp chữ nhật $OABC.O'A'B'C'$ có $O$ là gốc tọa độ, $A(${variant === 1 ? 3 : 4}; 0; 0)$, $C(0; ${variant === 1 ? 5 : 6}; 0)$ và $O'(0; 0; ${variant === 1 ? 7 : 8})$. Tọa độ của đỉnh $B'$ là:`,
      [
        `$(${variant === 1 ? 3 : 4}; ${variant === 1 ? 5 : 6}; ${variant === 1 ? 7 : 8})$`,
        `$(${variant === 1 ? 3 : 4}; ${variant === 1 ? 5 : 6}; 0)$`,
        `$(0; ${variant === 1 ? 5 : 6}; ${variant === 1 ? 7 : 8})$`,
        `$(${variant === 1 ? 3 : 4}; 0; ${variant === 1 ? 7 : 8})$`,
      ],
      'A',
      `Theo quy tắc hình hộp, $\\overrightarrow{OB'} = \\overrightarrow{OA} + \\overrightarrow{OC} + \\overrightarrow{OO'} = (${variant === 1 ? 3 : 4}; ${variant === 1 ? 5 : 6}; ${variant === 1 ? 7 : 8})$.`,
      'Đỉnh đối diện gốc tọa độ $O$ trong hình hộp chữ nhật có tọa độ bằng bộ 3 kích thước trên 3 trục.',
      'sp_oxyz_box'
    ),
    makeMC(
      p,
      11,
      'Bài 7. Hệ trục toạ độ trong không gian',
      `Trong không gian $Oxyz$, điểm nào dưới đây thuộc mặt phẳng tọa độ $(Oyz)$?`,
      [
        `$P(0; ${variant === 1 ? 3 : 5}; -${variant === 1 ? 4 : 2})$`,
        `$Q(${variant === 1 ? 2 : 3}; 0; 4)$`,
        `$R(1; 2; 0)$`,
        `$S(1; 1; 1)$`,
      ],
      'A',
      `Mọi điểm thuộc mặt phẳng $(Oyz)$ đều có hoành độ $x = 0$. Điểm $P(0; ${variant === 1 ? 3 : 5}; -${variant === 1 ? 4 : 2})$ có $x = 0$ nên thuộc $(Oyz)$.`,
      'Phương trình mặt phẳng $(Oyz)$ là $x = 0$.'
    ),
    makeMC(
      p,
      12,
      'Bài 7. Hệ trục toạ độ trong không gian',
      `Trong không gian $Oxyz$, cho hai vectơ $\\vec{a} = (m - 1; 3; ${variant === 1 ? 4 : 6})$ và $\\vec{b} = (${variant === 1 ? 2 : 5}; n + 1; ${variant === 1 ? 4 : 6})$. Để $\\vec{a} = \\vec{b}$ thì tổng $m + n$ bằng:`,
      [
        `$${variant === 1 ? 5 : 8}$`,
        `$${variant === 1 ? 3 : 6}$`,
        `$${variant === 1 ? 4 : 7}$`,
        `$${variant === 1 ? 6 : 9}$`,
      ],
      'A',
      `Hai vectơ bằng nhau khi và chỉ khi $\\begin{cases} m - 1 = ${variant === 1 ? 2 : 5} \\\\ n + 1 = 3 \\end{cases} \\Leftrightarrow \\begin{cases} m = ${variant === 1 ? 3 : 6} \\\\ n = 2 \\end{cases}$. Suy ra $m + n = ${variant === 1 ? 5 : 8}$.`,
      'Hai vectơ bằng nhau khi và chỉ khi các tọa độ tương ứng bằng nhau từng đôi một.'
    ),
  ];

  const part2 = [
    makeTF(
      p,
      1,
      'Bài 7. Hệ trục toạ độ trong không gian',
      `Trong không gian $Oxyz$, cho điểm $M(${xM}; ${yM}; ${zM})$. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Đẳng thức vectơ biểu diễn điểm $M$ là $\\overrightarrow{OM} = ${xM}\\vec{i} ${yM}\\vec{j} + ${zM}\\vec{k}$.`,
          isCorrect: true,
          exp: `Theo định nghĩa tọa độ của điểm trong không gian $Oxyz$.`,
        },
        {
          text: `Hình chiếu vuông góc của $M$ lên trục $Ox$ là điểm $M_1(${xM}; 0; 0)$.`,
          isCorrect: true,
          exp: `Chiếu lên trục $Ox$ giữ nguyên hoành độ $x = ${xM}$ và cho $y = z = 0$.`,
        },
        {
          text: `Hình chiếu vuông góc của $M$ lên mặt phẳng $(Oyz)$ là điểm $M_2(${xM}; 0; 0)$.`,
          isCorrect: false,
          exp: `Hình chiếu của $M$ lên $(Oyz)$ phải là $(0; ${yM}; ${zM})$ chứ không phải $(${xM}; 0; 0)$.`,
        },
        {
          text: `Điểm đối xứng của $M$ qua gốc tọa độ $O$ là $M'(-${xM}; ${-yM}; -${zM})$.`,
          isCorrect: true,
          exp: `Đối xứng qua gốc $O(0; 0; 0)$ thì đổi dấu cả $3$ tọa độ của điểm $M$.`,
        },
      ],
      'Phân biệt rõ hình chiếu lên trục $Ox$ là $(x; 0; 0)$ và hình chiếu lên mặt phẳng $(Oyz)$ là $(0; y; z)$.',
      'sp_oxyz_point_proj'
    ),
    makeTF(
      p,
      2,
      'Bài 7. Hệ trục toạ độ trong không gian',
      `Trong không gian $Oxyz$, cho ba điểm $A(1; 2; 0)$, $B(3; -1; ${variant === 1 ? 2 : 4})$ và $C(0; ${variant === 1 ? 4 : 5}; 1)$. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Điểm $A$ nằm trên mặt phẳng tọa độ $(Oxy)$ và điểm $C$ nằm trên mặt phẳng tọa độ $(Oyz)$.`,
          isCorrect: true,
          exp: `Điểm $A$ có $z_A = 0 \\Rightarrow A \\in (Oxy)$; điểm $C$ có $x_C = 0 \\Rightarrow C \\in (Oyz)$.`,
        },
        {
          text: `Tọa độ của vectơ $\\overrightarrow{AB}$ là $(2; -3; ${variant === 1 ? 2 : 4})$.`,
          isCorrect: true,
          exp: `$\\overrightarrow{AB} = (3 - 1; -1 - 2; ${variant === 1 ? 2 : 4} - 0) = (2; -3; ${variant === 1 ? 2 : 4})$.`,
        },
        {
          text: `Tọa độ của vectơ $\\overrightarrow{CA}$ là $(-1; ${variant === 1 ? 2 : 3}; 1)$.`,
          isCorrect: false,
          exp: `$\\overrightarrow{CA} = (x_A - x_C; y_A - y_C; z_A - z_C) = (1; 2 - ${variant === 1 ? 4 : 5}; -1) = (1; -${variant === 1 ? 2 : 3}; -1)$.`,
        },
        {
          text: `Tọa độ đỉnh $D$ để tứ giác $ABCD$ là hình bình hành là $D(-2; ${variant === 1 ? 7 : 8}; -${variant === 1 ? 1 : 3})$.`,
          isCorrect: true,
          exp: `Ta có $D = A + C - B = (1 + 0 - 3; 2 + ${variant === 1 ? 4 : 5} - (-1); 0 + 1 - ${variant === 1 ? 2 : 4}) = (-2; ${variant === 1 ? 7 : 8}; -${variant === 1 ? 1 : 3})$.`,
        },
      ],
      'Chú ý thứ tự điểm đầu - điểm cuối khi tính $\\overrightarrow{CA} = A - C$.',
      'sp_oxyz_parallelogram'
    ),
    makeTF(
      p,
      3,
      'Bài 7. Hệ trục toạ độ trong không gian',
      `Một căn phòng có dạng hình hộp chữ nhật, người ta chọn hệ trục tọa độ $Oxyz$ với gốc $O$ tại một góc sàn nhà, hai trục $Ox, Oy$ nằm dọc theo hai chân tường và trục $Oz$ thẳng đứng theo mép tường (đơn vị trên mỗi trục là mét). Một bóng đèn được treo tại vị trí $S(${variant === 1 ? 3 : 4}; ${variant === 1 ? 4 : 5}; 3)$. Xét tính đúng sai của các mệnh đề sau:`,
      [
        {
          text: `Độ cao của bóng đèn so với mặt sàn nhà $(Oxy)$ là $3\\text{ m}$.`,
          isCorrect: true,
          exp: `Cao độ $z_S = 3 > 0$ chính là khoảng cách từ bóng đèn đến mặt sàn $(Oxy)$.`,
        },
        {
          text: `Hình chiếu vuông góc của bóng đèn xuống mặt sàn nhà có tọa độ là $H(${variant === 1 ? 3 : 4}; ${variant === 1 ? 4 : 5}; 0)$.`,
          isCorrect: true,
          exp: `Hình chiếu vuông góc của $S$ lên $(Oxy)$ là $H(${variant === 1 ? 3 : 4}; ${variant === 1 ? 4 : 5}; 0)$.`,
        },
        {
          text: `Khoảng cách từ bóng đèn đến bức tường thuộc mặt phẳng $(Oyz)$ bằng $${variant === 1 ? 4 : 5}\\text{ m}$.`,
          isCorrect: false,
          exp: `Khoảng cách từ $S(x; y; z)$ đến mặt phẳng $(Oyz)$ bằng $|x_S| = ${variant === 1 ? 3 : 4}\\text{ m}$ chứ không phải $${variant === 1 ? 4 : 5}\\text{ m}$.`,
        },
        {
          text: `Khoảng cách từ điểm chiếu $H$ trên sàn nhà đến góc phòng $O$ bằng $${variant === 1 ? 5 : '\\sqrt{41}'}\\text{ m}$.`,
          isCorrect: true,
          exp: `Ta có $OH = \\sqrt{${variant === 1 ? '3^2 + 4^2' : '4^2 + 5^2'}} = ${variant === 1 ? '5' : '\\sqrt{41}'}\\text{ m}$.`,
        },
      ],
      'Trong mô hình căn phòng $Oxyz$, khoảng cách đến tường $(Oyz)$ là $|x|$, đến tường $(Oxz)$ là $|y|$, đến sàn $(Oxy)$ là $|z|$.',
      'sp_oxyz_box'
    ),
  ];

  const part3 = [
    makeSA(
      p,
      1,
      'Bài 7. Hệ trục toạ độ trong không gian',
      `Trong không gian $Oxyz$, gọi $H(a; b; c)$ là hình chiếu vuông góc của điểm $M(${variant === 1 ? 5 : 7}; -${variant === 1 ? 2 : 3}; ${variant === 1 ? 8 : 9})$ trên mặt phẳng $(Oxz)$. Tính giá trị của $a + b + c$.`,
      [variant === 1 ? '13' : '16'],
      `Hình chiếu của $M$ lên $(Oxz)$ là $H(${variant === 1 ? 5 : 7}; 0; ${variant === 1 ? 8 : 9})$. Suy ra $a + b + c = ${variant === 1 ? 5 : 7} + 0 + ${variant === 1 ? 8 : 9} = ${variant === 1 ? 13 : 16}$.`,
      'Chiếu lên $(Oxz)$ thì tung độ $b = 0$.',
      undefined,
      'sp_oxyz_point_proj'
    ),
    makeSA(
      p,
      2,
      'Bài 7. Hệ trục toạ độ trong không gian',
      `Trong không gian $Oxyz$, cho hai điểm $A(2; -1; ${variant === 1 ? 3 : 5})$ và $B(${variant === 1 ? 6 : 8}; 4; -1)$. Biết $\\overrightarrow{AB} = (x; y; z)$, tính tổng $x + y + z$.`,
      [variant === 1 ? '5' : '5'],
      `Ta có $\\overrightarrow{AB} = (${variant === 1 ? 6 : 8} - 2; 4 - (-1); -1 - ${variant === 1 ? 3 : 5}) = (${variant === 1 ? 4 : 6}; 5; -${variant === 1 ? 4 : 6})$. Vậy $x + y + z = ${variant === 1 ? 4 : 6} + 5 - ${variant === 1 ? 4 : 6} = 5$.`,
      'Tính từng tọa độ của $\\overrightarrow{AB}$ rồi cộng lại.'
    ),
    makeSA(
      p,
      3,
      'Bài 7. Hệ trục toạ độ trong không gian',
      `Trong không gian $Oxyz$, cho hình bình hành $ABCD$ biết $A(1; 2; 3), B(3; 0; 1)$ và $C(${variant === 1 ? 5 : 7}; 4; ${variant === 1 ? 2 : 6})$. Tìm tổng hoành độ, tung độ và cao độ của đỉnh $D$.`,
      [variant === 1 ? '13' : '19'],
      `Ta có $D = A + C - B = (1 + ${variant === 1 ? 5 : 7} - 3; 2 + 4 - 0; 3 + ${variant === 1 ? 2 : 6} - 1) = (${variant === 1 ? 3 : 5}; 6; ${variant === 1 ? 4 : 8})$. Tổng ba tọa độ của $D$ bằng $${variant === 1 ? 3 + 6 + 4 : 5 + 6 + 8} = ${variant === 1 ? 13 : 19}$.`,
      'Sử dụng công thức $D = A + C - B$.',
      undefined,
      'sp_oxyz_parallelogram'
    ),
    makeSA(
      p,
      4,
      'Bài 7. Hệ trục toạ độ trong không gian',
      `Trong không gian $Oxyz$, điểm $M'(x_0; y_0; z_0)$ là điểm đối xứng của $M(${variant === 1 ? 3 : 4}; ${variant === 1 ? 5 : 6}; -2)$ qua trục $Oy$. Tính $x_0 + y_0 + z_0$.`,
      ['4'],
      `Đối xứng qua trục $Oy$ thì giữ nguyên tung độ $y$ và đổi dấu $x, z$: $M'(-${variant === 1 ? 3 : 4}; ${variant === 1 ? 5 : 6}; 2)$. Khi đó $x_0 + y_0 + z_0 = -${variant === 1 ? 3 : 4} + ${variant === 1 ? 5 : 6} + 2 = 4$.`,
      'Đối xứng qua trục $Oy$: $(x; y; z) \\mapsto (-x; y; -z)$.',
      undefined,
      'sp_oxyz_point_proj'
    ),
  ];

  const part4 = [
    makeSO(
      p,
      1,
      'Bài 7. Hệ trục toạ độ trong không gian',
      `Trong không gian $Oxyz$, cho ba điểm $A(1; 0; 2), B(2; ${variant === 1 ? 3 : 4}; 1), C(0; 2; ${variant === 1 ? 5 : 6})$. Tìm tọa độ đỉnh $D$ sao cho tứ giác $ABCD$ là hình bình hành.`,
      `Thiết lập phương trình vectơ $\\overrightarrow{AD} = \\overrightarrow{BC}$ và tìm tọa độ $D$.`,
      [
        {
          role: 'Gọi tọa độ điểm D và tính hai vectơ AD, BC',
          content: `Gọi $D(x; y; z)$. Ta có $\\overrightarrow{AD} = (x - 1; y; z - 2)$ và $\\overrightarrow{BC} = (-2; -${variant === 1 ? 1 : 2}; ${variant === 1 ? 4 : 5})$.`,
        },
        {
          role: 'Thiết lập hệ phương trình từ điều kiện hình bình hành',
          content: `Tứ giác $ABCD$ là hình bình hành khi và chỉ khi $\\overrightarrow{AD} = \\overrightarrow{BC} \\Leftrightarrow \\begin{cases} x - 1 = -2 \\\\ y = -${variant === 1 ? 1 : 2} \\\\ z - 2 = ${variant === 1 ? 4 : 5} \\end{cases}$.`,
        },
        {
          role: 'Giải hệ và kết luận tọa độ điểm D',
          content: `Giải hệ ta được $x = -1, y = -${variant === 1 ? 1 : 2}, z = ${variant === 1 ? 6 : 7}$. Vậy $D(-1; -${variant === 1 ? 1 : 2}; ${variant === 1 ? 6 : 7})$.`,
        },
      ],
      'Chú ý thứ tự đỉnh hình bình hành $ABCD$: $\\overrightarrow{AB} = \\overrightarrow{DC}$ hoặc $\\overrightarrow{AD} = \\overrightarrow{BC}$.',
      'Phương pháp tọa độ hóa điều kiện hình bình hành trong không gian.',
      0.7,
      'sp_oxyz_parallelogram'
    ),
    makeSO(
      p,
      2,
      'Bài 7. Hệ trục toạ độ trong không gian',
      `Trong không gian $Oxyz$, cho điểm $M(${xM}; ${yM}; ${zM})$. Tìm tọa độ hình chiếu vuông góc $H$ của $M$ trên mặt phẳng $(Oxy)$ và tọa độ điểm $M'$ đối xứng với $M$ qua mặt phẳng $(Oxy)$.`,
      `Xác định tọa độ $H$ và $M'$ dựa vào tính chất hình chiếu và trung điểm.`,
      [
        {
          role: 'Xác định tọa độ hình chiếu vuông góc H trên (Oxy)',
          content: `Vì $H$ là hình chiếu vuông góc của $M(${xM}; ${yM}; ${zM})$ trên mặt phẳng $(Oxy)$ nên $H(${xM}; ${yM}; 0)$.`,
        },
        {
          role: 'Sử dụng điều kiện H là trung điểm của MM\'',
          content: `Điểm $M'$ đối xứng với $M$ qua $(Oxy)$ nên $H$ là trung điểm của đoạn thẳng $MM'$.`,
        },
        {
          role: 'Tính tọa độ điểm đối xứng M\'',
          content: `Suy ra $x_{M'} = 2x_H - x_M = ${xM}$, $y_{M'} = 2y_H - y_M = ${yM}$, $z_{M'} = 2z_H - z_M = -${zM}$. Vậy $M'(${xM}; ${yM}; -${zM})$.`,
        },
      ],
      'Mọi bài toán tìm điểm đối xứng $M\'$ qua hình chiếu $H$ đều quy về công thức trung điểm $M\' = 2H - M$.',
      'Liên hệ giữa hình chiếu vuông góc và điểm đối xứng.',
      0.65,
      'sp_oxyz_point_proj'
    ),
    makeSO(
      p,
      3,
      'Bài 7. Hệ trục toạ độ trong không gian',
      `Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB = ${variant === 1 ? 3 : 4}, AD = ${variant === 1 ? 4 : 6}, AA' = ${variant === 1 ? 5 : 8}$. Chọn hệ trục tọa độ $Oxyz$ sao cho gốc $O$ trùng với $A$, tia $Ox$ trùng tia $AB$, tia $Oy$ trùng tia $AD$, tia $Oz$ trùng tia $AA'$. Tìm tọa độ các đỉnh $B, D, A', C'$ và vectơ $\\overrightarrow{BD'}$.`,
      `Gán tọa độ các đỉnh của hình hộp chữ nhật trong hệ trục $Oxyz$.`,
      [
        {
          role: 'Xác định tọa độ các đỉnh nằm trên ba trục tọa độ',
          content: `Vì $A \\equiv O(0; 0; 0)$ và $B \\in Ox, D \\in Oy, A' \\in Oz$ nên $B(${variant === 1 ? 3 : 4}; 0; 0)$, $D(0; ${variant === 1 ? 4 : 6}; 0)$ và $A'(0; 0; ${variant === 1 ? 5 : 8})$.`,
        },
        {
          role: 'Xác định tọa độ đỉnh C\' và D\' theo quy tắc hình hộp',
          content: `Ta có $\\overrightarrow{AC'} = \\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'} \\Rightarrow C'(${variant === 1 ? 3 : 4}; ${variant === 1 ? 4 : 6}; ${variant === 1 ? 5 : 8})$ và $\\overrightarrow{AD'} = \\overrightarrow{AD} + \\overrightarrow{AA'} \\Rightarrow D'(0; ${variant === 1 ? 4 : 6}; ${variant === 1 ? 5 : 8})$.`,
        },
        {
          role: 'Tính tọa độ vectơ BD\'',
          content: `Từ $B(${variant === 1 ? 3 : 4}; 0; 0)$ và $D'(0; ${variant === 1 ? 4 : 6}; ${variant === 1 ? 5 : 8})$, suy ra $\\overrightarrow{BD'} = (-${variant === 1 ? 3 : 4}; ${variant === 1 ? 4 : 6}; ${variant === 1 ? 5 : 8})$.`,
        },
      ],
      'Phương pháp gắn hệ trục tọa độ $Oxyz$ vào hình hộp chữ nhật giúp giải nhanh mọi bài toán hình học không gian.',
      'Kỹ năng gắn hệ trục tọa độ vào hình khối không gian.',
      0.65,
      'sp_oxyz_box'
    ),
  ];

  return makeLessonExam(
    `bai-07-de-${variant}`,
    `Bài 7 - Đề ôn số ${variant}`,
    `Bài 7. Hệ trục toạ độ trong không gian (SGK Toán 12 Tập 1)`,
    `Đề ôn số ${variant} - Bài 7: Hệ trục toạ độ trong không gian (22 câu hỏi chuẩn cấu trúc 4 phần).`,
    part1,
    part2,
    part3,
    part4
  );
}

export const CHAPTER_2_PART_A_LESSONS: LessonInfo[] = [
  {
    id: 'bai-06',
    code: 'Bài 6',
    title: 'Vectơ trong không gian',
    fullName: 'Bài 6. Vectơ trong không gian',
    chapterId: 'chuong-2',
    chapterTitle: 'CHƯƠNG II. VECTƠ VÀ HỆ TRỤC TOẠ ĐỘ TRONG KHÔNG GIAN',
    pageNumber: 45,
    coreTopics: [
      'Quy tắc 3 điểm, quy tắc hình bình hành, quy tắc hình hộp và hệ thức trọng tâm',
      'Tích của một số với một vectơ trong không gian',
      'Góc giữa hai vectơ và tích vô hướng của hai vectơ trong không gian',
    ],
    practiceExams: [buildBai6Exam(1), buildBai6Exam(2)],
  },
  {
    id: 'bai-07',
    code: 'Bài 7',
    title: 'Hệ trục toạ độ trong không gian',
    fullName: 'Bài 7. Hệ trục toạ độ trong không gian',
    chapterId: 'chuong-2',
    chapterTitle: 'CHƯƠNG II. VECTƠ VÀ HỆ TRỤC TOẠ ĐỘ TRONG KHÔNG GIAN',
    pageNumber: 60,
    coreTopics: [
      'Hệ trục tọa độ Oxyz và tọa độ của điểm, của vectơ',
      'Hình chiếu vuông góc và điểm đối xứng trên các trục và mặt phẳng tọa độ',
      'Biểu thức tọa độ của vectơ AB và bài toán tìm đỉnh hình bình hành, hình hộp',
    ],
    practiceExams: [buildBai7Exam(1), buildBai7Exam(2)],
  },
];
