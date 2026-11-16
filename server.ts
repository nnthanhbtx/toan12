import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PDF_SYSTEM_INSTRUCTION = `Bạn là chuyên gia số hóa đề thi Toán THPT Việt Nam.
Nhiệm vụ của bạn là đọc toàn bộ nội dung file PDF đề thi Toán được cung cấp và chuyển đổi chính xác 100% sang định dạng văn bản chuẩn dưới đây để hệ thống tạo đề tương tác:

QUY TẮC ĐỊNH DẠNG BẮT BUỘC:
1. Tất cả công thức Toán học, ký hiệu toán học, biến số, phương trình, tập hợp, vectơ phải được viết dưới dạng mã LaTeX chuẩn và kẹp giữa cặp dấu $...$ (ví dụ: $\\forall x \\in \\mathbb{R}$, $y = x^3 - 3x + 2$, $\\overrightarrow{AB} = (1; -2; 3)$).
2. Nếu câu hỏi có Bảng số liệu thống kê / Bảng tần số ghép nhóm, hãy xuất bảng đó ngay dưới đề bài theo cấu trúc:
[BẢNG_TOÁN]
Nhóm | $[0; 10)$ | $[10; 20)$ | $[20; 30)$
Tần số | $5$ | $12$ | $8$
[/BẢNG_TOÁN]
3. Nếu câu hỏi có Bảng biến thiên, Bảng xét dấu hoặc Đồ thị hàm số / Hình vẽ mà chưa có ảnh chụp, hãy dựng lại chính xác bằng khối mã \\begin{tikzpicture} ... \\end{tikzpicture} ngay dưới dòng đề bài của câu đó.
4. Chia đề thi thành các phần theo đúng cấu trúc:
   - Phần I. ( gạch chân đáp án đúng )
     Dành cho câu hỏi trắc nghiệm 4 lựa chọn A, B, C, D.
     Mỗi câu bắt đầu bằng "Câu 1.", "Câu 2.", ...
     Các phương án bắt đầu bằng "A.", "B.", "C.", "D." (mỗi phương án 1 dòng).
     Phương án ĐÚNG phải được bọc trong thẻ <u>...</u> (ví dụ: <u>A. $x = 1$</u>). Kiểm tra kỹ logic toán học (hoặc đối chiếu bảng đáp án/gạch chân/tô màu trong PDF) để đảm bảo phương án bọc <u>...</u> là ĐÚNG 100% về mặt toán học!
   - Phần II. ( gạch chân đáp án đúng )
     Dành cho câu hỏi trắc nghiệm Đúng / Sai gồm 4 mệnh đề a), b), c), d).
     Mỗi câu bắt đầu bằng "Câu 1.", "Câu 2.", ...
     4 mệnh đề viết trên 4 dòng bắt đầu bằng "a)", "b)", "c)", "d)".
     Mệnh đề nào ĐÚNG về mặt toán học thì bọc toàn bộ dòng mệnh đề đó trong thẻ <u>...</u> (ví dụ: <u>a) Hàm số đồng biến trên khoảng $(0; 2)$.</u>). Mệnh đề SAI thì giữ nguyên không bọc thẻ <u>.
   - Phần III.
     Dành cho câu hỏi Trả lời ngắn.
     Mỗi câu bắt đầu bằng "Câu 1.", "Câu 2.", ...
     Ngay dòng dưới đề bài ghi "Đáp số: [giá trị số chính xác]" (kiểm tra kỹ tính toán để đáp số đúng chuẩn logic toán).
   - Phần IV.
     Dành cho câu hỏi Tự luận.
     Mỗi câu bắt đầu bằng "Câu 1.", "Câu 2.", ...
     Dòng đầu là đề bài, các dòng tiếp theo là từng bước lời giải ngắn gọn, rõ ràng theo đúng thứ tự suy luận toán học.
5. Nếu câu hỏi có phần "Lời giải:" hoặc "Hướng dẫn giải:" trong PDF, hãy giữ lại ở dòng cuối của câu đó dưới dạng "Lời giải: ...".
6. Chỉ xuất ra nội dung đề thi theo đúng định dạng trên, KHÔNG thêm lời bình luận hay markdown code fence (\`\`\`).`;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '35mb' }));

  app.post('/api/parse-pdf', async (req, res) => {
    try {
      const { base64Pdf } = req.body;
      if (!base64Pdf || typeof base64Pdf !== 'string') {
        res.status(400).json({ error: 'Thiếu dữ liệu file PDF.' });
        return;
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        res.status(500).json({ error: 'GEMINI_API_KEY_MISSING' });
        return;
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: {
          parts: [
            {
              inlineData: {
                mimeType: 'application/pdf',
                data: base64Pdf,
              },
            },
            {
              text: 'Hãy đọc toàn bộ đề thi Toán trong file PDF này và chuyển sang đúng định dạng văn bản chuẩn (Phần I, Phần II, Phần III, Phần IV, công thức LaTeX $...$, bảng [BẢNG_TOÁN], hình vẽ TikZ nếu có, và bọc <u>...</u> cho đúng đáp án chuẩn logic toán học).',
            },
          ],
        },
        config: {
          systemInstruction: PDF_SYSTEM_INSTRUCTION,
          thinkingConfig: {
            thinkingLevel: ThinkingLevel.LOW,
          },
        },
      });

      const extractedText = (response.text ?? '')
        .replace(/^```[a-zA-Z]*\n?/gm, '')
        .replace(/```$/gm, '')
        .trim();

      if (!extractedText) {
        res.status(500).json({ error: 'Không trích xuất được nội dung từ PDF.' });
        return;
      }

      res.json({ text: extractedText });
    } catch (error: any) {
      console.error('Error in /api/parse-pdf:', error);
      res.status(500).json({
        error: error?.message || 'Lỗi khi phân tích file PDF.',
      });
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*all', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
