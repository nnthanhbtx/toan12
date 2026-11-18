import React, { useState, useMemo, useRef } from 'react';
import {
  FileText,
  Upload,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  X,
  Play,
  HelpCircle,
  ClipboardPaste,
  Trash2,
  Underline,
  FileUp,
  Zap,
  Eye,
  Code2,
  Image as ImageIcon,
  Sigma,
  Wand2,
} from 'lucide-react';
import {
  parseWordExamContent,
  SAMPLE_WORD_CONTENT,
  autoFormatAndFixMathContent,
} from '../utils/wordExamParser';
import {
  ExamSet,
  MultipleChoiceQuestion,
  TrueFalseQuestion,
  ShortAnswerQuestion,
} from '../types/exam';
import { MathRenderer } from './MathRenderer';
import { TikzFigure } from './TikzFigure';

interface ImportWordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyExam?: (newExam: ExamSet) => void;
  onImportSuccess?: (newExam: ExamSet) => void;
  defaultTitle?: string;
}

export const ImportWordModal: React.FC<ImportWordModalProps> = ({
  isOpen,
  onClose,
  onApplyExam,
  onImportSuccess,
  defaultTitle = 'Đề kiểm tra Toán 12 (Tải từ Word / PDF)',
}) => {
  const [examTitle, setExamTitle] = useState(defaultTitle);
  const [content, setContent] = useState<string>(SAMPLE_WORD_CONTENT);
  const [activeTab, setActiveTab] = useState<'preview' | 'editor'>('preview');
  const [showGuide, setShowGuide] = useState(false);
  const [isLoadingFile, setIsLoadingFile] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState<string>('');
  const [pdfMode, setPdfMode] = useState<'smart' | 'fast'>('smart');
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [parseDurationMs, setParseDurationMs] = useState<number | null>(null);

  // Cho phép giáo viên chỉnh sửa nhanh đáp án trực tiếp trên màn hình Xem trước
  const [answerOverridesP1, setAnswerOverridesP1] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});
  const [answerOverridesP2, setAnswerOverridesP2] = useState<
    Record<number, Record<'a' | 'b' | 'c' | 'd', boolean>>
  >({});
  const [answerOverridesP3, setAnswerOverridesP3] = useState<Record<number, string>>({});

  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const resetOverrides = () => {
    setAnswerOverridesP1({});
    setAnswerOverridesP2({});
    setAnswerOverridesP3({});
  };

  const parseResult = useMemo(() => {
    const base = parseWordExamContent(content, examTitle);

    // Áp dụng các chỉnh sửa đáp án nhanh trên giao diện Xem trước (nếu có)
    const updatedPart1: MultipleChoiceQuestion[] = base.exam.part1.map((q, idx) => {
      const override = answerOverridesP1[idx];
      if (!override) return q;
      return {
        ...q,
        correctAnswer: override,
      };
    });

    const updatedPart2: TrueFalseQuestion[] = base.exam.part2.map((q, idx) => {
      const overrideMap = answerOverridesP2[idx];
      if (!overrideMap) return q;
      return {
        ...q,
        statements: q.statements.map((st) => {
          const ov = overrideMap[st.label];
          if (ov === undefined) return st;
          return {
            ...st,
            isCorrect: ov,
            explanation: `Mệnh đề ${st.label}) là ${ov ? 'Đúng' : 'Sai'}.`,
          };
        }),
      };
    });

    const updatedPart3: ShortAnswerQuestion[] = base.exam.part3.map((q, idx) => {
      const ov = answerOverridesP3[idx];
      if (ov === undefined || !ov.trim()) return q;
      const trimmed = ov.trim();
      const alt = trimmed.includes(',') ? trimmed.replace(/,/g, '.') : trimmed.replace(/\./g, ',');
      return {
        ...q,
        acceptableAnswers: Array.from(new Set([trimmed, alt])),
        explanation: `Đáp số chính xác: ${trimmed}`,
      };
    });

    return {
      ...base,
      exam: {
        ...base.exam,
        part1: updatedPart1,
        part2: updatedPart2,
        part3: updatedPart3,
      },
    };
  }, [content, examTitle, answerOverridesP1, answerOverridesP2, answerOverridesP3]);

  if (!isOpen) return null;

  // Xử lý khi người dùng Paste trực tiếp từ Microsoft Word (giữ nguyên định dạng gạch chân <u> và ảnh)
  const handlePaste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const htmlData = e.clipboardData.getData('text/html');
    if (htmlData && (htmlData.includes('<u') || htmlData.includes('underline') || htmlData.includes('<img'))) {
      e.preventDefault();
      let cleanHtml = htmlData
        .replace(/<!--[\s\S]*?-->/g, '')
        .replace(/<style[\s\S]*?<\/style>/gi, '')
        .replace(/<script[\s\S]*?<\/script>/gi, '')
        .replace(/<head[\s\S]*?<\/head>/gi, '');

      cleanHtml = cleanHtml
        .replace(
          /<span\b[^>]*style=["'][^"']*text-decoration\s*:\s*underline[^"']*["'][^>]*>([\s\S]*?)<\/span>/gi,
          '<u>$1</u>'
        )
        .replace(/<u\b[^>]*>([\s\S]*?)<\/u>/gi, '<u>$1</u>')
        .replace(/<img\b[^>]*src=["'](data:image\/[^"']+)["'][^>]*\/?>/gi, '\n[HÌNH_VẼ:$1]\n')
        .replace(/<sup>\s*(?:o|0|°)\s*<\/sup>/gi, '$^\\circ$')
        .replace(/<sup\b[^>]*>([\s\S]*?)<\/sup>/gi, '$^{$1}$')
        .replace(/<sub\b[^>]*>([\s\S]*?)<\/sub>/gi, '$_{$1}$')
        .replace(/<br\s*\/?>/gi, '\n')
        .replace(/<\/?(?:p|div|tr|li|h[1-6])\b[^>]*>/gi, '\n')
        .replace(/<(?!\/?u\b)[^>]+>/gi, '')
        .replace(/&nbsp;/gi, ' ')
        .replace(/&amp;/gi, '&')
        .replace(/&lt;/gi, '<')
        .replace(/&gt;/gi, '>')
        .replace(/<\/u>(\s*)<u>/gi, '$1')
        .replace(/\n{3,}/g, '\n\n')
        .trim();

      const textarea = e.currentTarget;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const nextValue = content.substring(0, start) + cleanHtml + content.substring(end);
      resetOverrides();
      setContent(autoFormatAndFixMathContent(nextValue));
    }
  };

  // Nút hỗ trợ bọc <u>...</u> nhanh cho đoạn văn bản đang bôi đen
  const handleWrapUnderline = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    if (start === end) return;

    const selected = content.substring(start, end);
    const wrapped = selected.startsWith('<u>') && selected.endsWith('</u>')
      ? selected.slice(3, -4)
      : `<u>${selected}</u>`;

    const nextValue = content.substring(0, start) + wrapped + content.substring(end);
    setContent(nextValue);
  };

  // Nút bọc công thức $...$ nhanh
  const handleWrapMath = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    if (start === end) return;

    const selected = content.substring(start, end);
    const wrapped = selected.startsWith('$') && selected.endsWith('$')
      ? selected.slice(1, -1)
      : `$${selected}$`;

    const nextValue = content.substring(0, start) + wrapped + content.substring(end);
    setContent(nextValue);
  };

  // Nút tự động chuẩn hóa công thức & ký hiệu toán
  const handleAutoNormalizeMath = () => {
    setContent((prev) => autoFormatAndFixMathContent(prev));
  };

  // Xử lý chọn file .docx, .pdf hoặc .txt/.md
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsLoadingFile(true);
    setUploadedFileName(file.name);
    const baseName = file.name.replace(/\.[^/.]+$/, '');
    if (baseName) {
      setExamTitle(`Đề thi: ${baseName}`);
    }

    const t0 = performance.now();

    try {
      const lowerName = file.name.toLowerCase();
      if (lowerName.endsWith('.docx')) {
        setLoadingMessage('Đang giải nén file Word (.docx), trích xuất công thức OMML, bảng & hình vẽ...');
        const arrayBuffer = await file.arrayBuffer();
        const { extractWordDocxWithMath } = await import('../utils/docxMathExtractor');
        const extractedWithMath = await extractWordDocxWithMath(arrayBuffer);
        resetOverrides();
        setContent(extractedWithMath);
        setParseDurationMs(Math.round(performance.now() - t0));
        setActiveTab('preview');
      } else if (lowerName.endsWith('.pdf')) {
        setLoadingMessage(
          pdfMode === 'smart'
            ? 'Đang nhận diện công thức Toán LaTeX, cắt hình vẽ & đáp án từ file PDF...'
            : 'Đang trích xuất nhanh văn bản, công thức và hình vẽ từ file PDF...'
        );
        const { extractMathExamFromPdf } = await import('../utils/pdfExamExtractor');
        const { text: pdfText } = await extractMathExamFromPdf(file, pdfMode);
        resetOverrides();
        setContent(pdfText);
        setParseDurationMs(Math.round(performance.now() - t0));
        setActiveTab('preview');
      } else {
        setLoadingMessage('Đang đọc nội dung văn bản...');
        const text = await file.text();
        resetOverrides();
        setContent(autoFormatAndFixMathContent(text));
        setParseDurationMs(Math.round(performance.now() - t0));
        setActiveTab('preview');
      }
    } catch (err) {
      console.error('Lỗi đọc file:', err);
    } finally {
      setIsLoadingFile(false);
      setLoadingMessage('');
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleCreateExam = () => {
    if (parseResult.counts.total === 0) return;
    if (onApplyExam) {
      onApplyExam(parseResult.exam);
    } else if (onImportSuccess) {
      onImportSuccess(parseResult.exam);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-6xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[94vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-900/95 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-teal-950/50">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 flex-wrap">
                <span>Tạo Đề Tự Động Từ File Word (.docx) & PDF (.pdf)</span>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-teal-500/15 text-teal-300 border border-teal-500/30">
                  Nhận diện Công thức LaTeX + Hình vẽ + Bảng số liệu
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Trích xuất chuẩn xác công thức Toán OMML/LaTeX, tự động tách hình vẽ, bảng biến thiên và đáp án đúng
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowGuide(!showGuide)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                showGuide
                  ? 'bg-amber-500/15 text-amber-300 border-amber-500/40'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{showGuide ? 'Ẩn quy tắc' : 'Quy tắc định dạng'}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 flex-1">
          {/* Hướng dẫn định dạng rút gọn */}
          {showGuide && (
            <div className="p-4 rounded-xl bg-slate-950/90 border border-teal-500/30 text-xs text-slate-300 space-y-2.5">
              <div className="font-bold text-teal-300 flex items-center gap-1.5 text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Cấu trúc nhận diện thông minh từ Word (.docx) & PDF (.pdf):</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 leading-relaxed">
                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1.5">
                  <div className="font-semibold text-amber-300">1. Phần I & Phần II (Nhận diện đáp án linh hoạt):</div>
                  <p className="text-slate-400">
                    • <strong>Phần I:</strong> Gạch chân (<u>A.</u>), tô màu đỏ/highlight phương án đúng, ghi{' '}
                    <code className="text-teal-300">Chọn A</code> trong Lời giải, hoặc đặt{' '}
                    <code className="text-teal-300">BẢNG ĐÁP ÁN</code> ở cuối đề.
                  </p>
                  <p className="text-slate-400">
                    • <strong>Phần II (Đúng/Sai):</strong> Gạch chân mệnh đề ĐÚNG (các mệnh đề không gạch chân là SAI), hoặc ghi{' '}
                    <code className="text-teal-300">[Đ] / [S]</code>, hoặc bảng đáp án <code className="text-teal-300">1: Đ-S-Đ-S</code>.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1.5">
                  <div className="font-semibold text-amber-300">2. Phần III, Phần IV & Hình vẽ / Bảng số liệu:</div>
                  <p className="text-slate-400">
                    • <strong>Phần III (Trả lời ngắn):</strong> Ghi <code className="text-teal-300">Đáp số: 6</code> hoặc gạch chân đáp số.
                  </p>
                  <p className="text-slate-400">
                    • <strong>Hình vẽ & Bảng:</strong> Tự động trích xuất mọi hình ảnh đồ thị, hình không gian, bảng biến thiên nhúng trong file Word (<code className="text-teal-300">word/media/*</code>) và cắt trực tiếp vùng đồ thị trên trang PDF.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Top Controls: Tên đề thi & Upload File */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-end">
            <div className="lg:col-span-5">
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Tên bộ đề hiển thị trên hệ thống
              </label>
              <input
                type="text"
                value={examTitle}
                onChange={(e) => setExamTitle(e.target.value)}
                placeholder="Nhập tên đề thi (VD: Đề kiểm tra Chương 1 - Toán 12)..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-teal-500"
              />
            </div>

            <div className="lg:col-span-7 flex flex-wrap items-center gap-2">
              <input
                ref={fileInputRef}
                type="file"
                accept=".docx,.pdf,.txt,.md"
                onChange={handleFileUpload}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={isLoadingFile}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-teal-500/25 to-emerald-500/20 hover:from-teal-500/35 hover:to-emerald-500/30 text-teal-200 border border-teal-500/50 text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-md"
              >
                <Upload className="w-4 h-4 text-teal-300" />
                <span>
                  {isLoadingFile ? loadingMessage || 'Đang xử lý...' : 'Tải file Word (.docx) / PDF (.pdf)'}
                </span>
              </button>

              {/* Tuỳ chọn chế độ đọc PDF */}
              <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-[11px]">
                <button
                  type="button"
                  onClick={() => setPdfMode('fast')}
                  className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg font-semibold transition-all ${
                    pdfMode === 'fast'
                      ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                  title="Trích xuất siêu tốc bằng bộ đọc cục bộ + tự động cắt hình vẽ từ trang PDF"
                >
                  <Zap className="w-3 h-3" />
                  <span>PDF Siêu tốc</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPdfMode('smart')}
                  className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg font-semibold transition-all ${
                    pdfMode === 'smart'
                      ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                  title="Nhận diện thông minh công thức Toán LaTeX + kết hợp cắt hình vẽ từ PDF"
                >
                  <FileUp className="w-3 h-3" />
                  <span>PDF Chuẩn AI + Hình vẽ</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => {
                  resetOverrides();
                  setContent(SAMPLE_WORD_CONTENT);
                  setUploadedFileName(null);
                  setParseDurationMs(null);
                }}
                className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-all"
              >
                <ClipboardPaste className="w-3.5 h-3.5 text-amber-400" />
                <span>Đề mẫu chuẩn</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  resetOverrides();
                  setContent('');
                  setUploadedFileName(null);
                  setParseDurationMs(null);
                }}
                className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-800/80 hover:bg-rose-950/50 text-slate-400 hover:text-rose-300 border border-slate-700/80 text-xs font-medium transition-all"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Xóa</span>
              </button>
            </div>
          </div>

          {/* Thanh Thống Kê & Chẩn Đoán Nhanh */}
          <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <span className="px-2.5 py-1 rounded-lg bg-sky-500/15 text-sky-300 border border-sky-500/30 font-bold">
                Phần I: {parseResult.counts.part1} câu
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-purple-500/15 text-purple-300 border border-purple-500/30 font-bold">
                Phần II: {parseResult.counts.part2} câu
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/30 font-bold">
                Phần III: {parseResult.counts.part3} câu
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-bold">
                Phần IV: {parseResult.counts.part4} câu
              </span>

              <div className="h-4 w-px bg-slate-800 mx-1 hidden sm:block" />

              <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 font-medium">
                <Sigma className="w-3.5 h-3.5 text-teal-400" />
                <span>{parseResult.stats.mathFormulaCount} công thức Toán</span>
              </span>

              <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 font-medium">
                <ImageIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>
                  {parseResult.stats.figureCount} hình vẽ / {parseResult.stats.tableCount} bảng
                </span>
              </span>

              {parseDurationMs !== null && (
                <span className="px-2 py-1 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 font-semibold">
                  ⚡ {(parseDurationMs / 1000).toFixed(2)}s
                </span>
              )}

              {uploadedFileName && (
                <span className="text-teal-400 font-medium truncate max-w-[200px]">
                  📄 {uploadedFileName}
                </span>
              )}
            </div>

            {/* Chuyển đổi giữa Xem trước trực quan và Soạn thảo mã nguồn */}
            <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-700">
              <button
                type="button"
                onClick={() => setActiveTab('preview')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'preview'
                    ? 'bg-teal-500 text-slate-950 shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Xem trước Đề & Hình vẽ ({parseResult.counts.total})</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('editor')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'editor'
                    ? 'bg-teal-500 text-slate-950 shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Soạn thảo văn bản / LaTeX</span>
              </button>
            </div>
          </div>

          {/* Nội dung chính: Tab Xem trước Hoặc Tab Soạn thảo */}
          {activeTab === 'preview' ? (
            <div className="space-y-4 max-h-[52vh] overflow-y-auto pr-1">
              {parseResult.counts.total === 0 ? (
                <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-2">
                  <p className="text-slate-300 font-semibold text-sm">
                    Chưa có câu hỏi nào được nhận diện.
                  </p>
                  <p className="text-slate-500 text-xs">
                    Hãy tải lên file Word (.docx), file PDF (.pdf) hoặc chuyển sang tab &quot;Soạn thảo văn bản / LaTeX&quot; để dán nội dung đề thi.
                  </p>
                </div>
              ) : (
                <>
                  {/* PHẦN I PREVIEW */}
                  {parseResult.exam.part1.length > 0 && (
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-sky-950/60 border border-sky-800/60">
                        <span className="text-xs sm:text-sm font-extrabold text-sky-300 uppercase tracking-wide">
                          Phần I: Trắc nghiệm 4 lựa chọn ({parseResult.exam.part1.length} câu)
                        </span>
                        <span className="text-[11px] text-sky-400">
                          💡 Nhấn vào phương án A, B, C, D bất kỳ để đổi nhanh đáp án đúng
                        </span>
                      </div>

                      <div className="grid grid-cols-1 gap-3">
                        {parseResult.exam.part1.map((q, qIdx) => (
                          <div
                            key={q.id}
                            className="p-3.5 sm:p-4 rounded-xl bg-[#071126] border border-sky-900/60 space-y-3"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/60 text-amber-300 font-bold text-xs shrink-0">
                                Câu {q.number}
                              </span>
                              <span className="text-xs font-bold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                                Đáp án đúng: {q.correctAnswer}
                              </span>
                            </div>

                            <div className="text-white font-bold font-times text-base sm:text-lg leading-relaxed [&_.katex]:text-white">
                              <MathRenderer content={q.prompt} />
                            </div>

                            {(q.tikzType || q.tikzCode || q.imageUrl) && (
                              <TikzFigure
                                type={q.tikzType as any}
                                tikzCode={q.tikzCode}
                                imageUrl={q.imageUrl}
                                caption={`Hình vẽ minh họa Câu ${q.number}`}
                              />
                            )}

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {q.options.map((opt) => {
                                const isCorrect = opt.key === q.correctAnswer;
                                return (
                                  <button
                                    key={opt.key}
                                    type="button"
                                    onClick={() =>
                                      setAnswerOverridesP1((prev) => ({ ...prev, [qIdx]: opt.key }))
                                    }
                                    className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                                      isCorrect
                                        ? 'bg-emerald-950/70 border-emerald-400 text-emerald-200 ring-1 ring-emerald-400/40'
                                        : 'bg-[#0b1739] border-sky-900/60 text-slate-200 hover:border-sky-500'
                                    }`}
                                    title="Nhấn để đặt làm đáp án đúng"
                                  >
                                    <span
                                      className={`w-7 h-7 rounded-full font-black text-xs flex items-center justify-center shrink-0 ${
                                        isCorrect
                                          ? 'bg-emerald-500 text-white'
                                          : 'bg-amber-500 text-slate-950'
                                      }`}
                                    >
                                      {opt.key}
                                    </span>
                                    <div className="flex-1 min-w-0 font-times text-sm sm:text-base [&_.katex]:text-current">
                                      <MathRenderer content={opt.content} />
                                    </div>
                                    {isCorrect && (
                                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* PHẦN II PREVIEW */}
                  {parseResult.exam.part2.length > 0 && (
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-purple-950/60 border border-purple-800/60">
                        <span className="text-xs sm:text-sm font-extrabold text-purple-300 uppercase tracking-wide">
                          Phần II: Trắc nghiệm Đúng / Sai ({parseResult.exam.part2.length} câu)
                        </span>
                        <span className="text-[11px] text-purple-300">
                          💡 Nhấn vào nút ĐÚNG / SAI ở từng mệnh đề để đổi nhanh đáp án
                        </span>
                      </div>

                      <div className="grid grid-cols-1 gap-3">
                        {parseResult.exam.part2.map((q, qIdx) => (
                          <div
                            key={q.id}
                            className="p-3.5 sm:p-4 rounded-xl bg-[#071126] border border-sky-900/60 space-y-3"
                          >
                            <div className="flex items-center justify-between">
                              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/60 text-amber-300 font-bold text-xs">
                                Câu {q.number} (Phần II)
                              </span>
                            </div>

                            <div className="text-white font-bold font-times text-base sm:text-lg leading-relaxed [&_.katex]:text-white">
                              <MathRenderer content={q.prompt} />
                            </div>

                            {(q.tikzType || q.tikzCode || q.imageUrl) && (
                              <TikzFigure
                                type={q.tikzType as any}
                                tikzCode={q.tikzCode}
                                imageUrl={q.imageUrl}
                                caption={`Hình vẽ minh họa Câu ${q.number}`}
                              />
                            )}

                            <div className="space-y-2">
                              {q.statements.map((st) => (
                                <div
                                  key={st.id}
                                  className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-[#0b1739] border border-sky-900/60"
                                >
                                  <div className="flex items-start gap-2.5 flex-1 min-w-0">
                                    <span className="w-7 h-7 rounded-full bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center shrink-0">
                                      {st.label})
                                    </span>
                                    <div className="text-white font-times text-sm sm:text-base leading-relaxed [&_.katex]:text-white">
                                      <MathRenderer content={st.statement} />
                                    </div>
                                  </div>

                                  <button
                                    type="button"
                                    onClick={() =>
                                      setAnswerOverridesP2((prev) => ({
                                        ...prev,
                                        [qIdx]: {
                                          ...(prev[qIdx] || {}),
                                          [st.label]: !st.isCorrect,
                                        } as Record<'a' | 'b' | 'c' | 'd', boolean>,
                                      }))
                                    }
                                    className={`px-3 py-1 rounded-lg font-extrabold text-xs shrink-0 border transition-all cursor-pointer ${
                                      st.isCorrect
                                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400'
                                        : 'bg-rose-500/20 text-rose-300 border-rose-400'
                                    }`}
                                    title="Nhấn để chuyển đổi Đúng / Sai"
                                  >
                                    {st.isCorrect ? '✓ ĐÚNG' : '✗ SAI'}
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* PHẦN III PREVIEW */}
                  {parseResult.exam.part3.length > 0 && (
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-amber-950/60 border border-amber-800/60">
                        <span className="text-xs sm:text-sm font-extrabold text-amber-300 uppercase tracking-wide">
                          Phần III: Trả lời ngắn ({parseResult.exam.part3.length} câu)
                        </span>
                      </div>

                      <div className="grid grid-cols-1 gap-3">
                        {parseResult.exam.part3.map((q, qIdx) => (
                          <div
                            key={q.id}
                            className="p-3.5 sm:p-4 rounded-xl bg-[#071126] border border-sky-900/60 space-y-3"
                          >
                            <div className="flex items-center justify-between gap-2 flex-wrap">
                              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/60 text-amber-300 font-bold text-xs">
                                Câu {q.number} (Phần III)
                              </span>
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-slate-300 font-semibold">Đáp số chuẩn:</span>
                                <input
                                  type="text"
                                  value={
                                    answerOverridesP3[qIdx] !== undefined
                                      ? answerOverridesP3[qIdx]
                                      : q.acceptableAnswers[0] || ''
                                  }
                                  onChange={(e) =>
                                    setAnswerOverridesP3((prev) => ({
                                      ...prev,
                                      [qIdx]: e.target.value,
                                    }))
                                  }
                                  className="w-28 px-2.5 py-1 rounded-lg bg-emerald-950/80 border border-emerald-400/70 text-emerald-200 font-mono font-bold text-xs text-center focus:outline-none"
                                />
                              </div>
                            </div>

                            <div className="text-white font-bold font-times text-base sm:text-lg leading-relaxed [&_.katex]:text-white">
                              <MathRenderer content={q.prompt} />
                            </div>

                            {(q.tikzType || q.tikzCode || q.imageUrl) && (
                              <TikzFigure
                                type={q.tikzType as any}
                                tikzCode={q.tikzCode}
                                imageUrl={q.imageUrl}
                                caption={`Hình vẽ minh họa Câu ${q.number}`}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* PHẦN IV PREVIEW */}
                  {parseResult.exam.part4.length > 0 && (
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-emerald-950/60 border border-emerald-800/60">
                        <span className="text-xs sm:text-sm font-extrabold text-emerald-300 uppercase tracking-wide">
                          Phần IV: Tự luận ghép bước giải ({parseResult.exam.part4.length} câu)
                        </span>
                      </div>

                      <div className="grid grid-cols-1 gap-3">
                        {parseResult.exam.part4.map((q) => (
                          <div
                            key={q.id}
                            className="p-3.5 sm:p-4 rounded-xl bg-[#071126] border border-sky-900/60 space-y-3"
                          >
                            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/60 text-amber-300 font-bold text-xs inline-block">
                              Câu {q.number} (Phần IV)
                            </span>

                            <div className="text-white font-bold font-times text-base sm:text-lg leading-relaxed [&_.katex]:text-white">
                              <MathRenderer content={q.problemStatement} />
                            </div>

                            {(q.tikzType || q.tikzCode || q.imageUrl) && (
                              <TikzFigure
                                type={q.tikzType as any}
                                tikzCode={q.tikzCode}
                                imageUrl={q.imageUrl}
                                caption={`Hình vẽ minh họa Câu ${q.number}`}
                              />
                            )}

                            <div className="space-y-1.5 pt-1">
                              {q.steps.map((st, sIdx) => (
                                <div
                                  key={st.id}
                                  className="flex items-start gap-2.5 p-2 rounded-lg bg-[#0b1739] border border-sky-900/50 text-xs sm:text-sm text-slate-200 font-times"
                                >
                                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                                    {sIdx + 1}
                                  </span>
                                  <div className="flex-1 [&_.katex]:text-white">
                                    <MathRenderer content={st.content} />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          ) : (
            /* TAB SOẠN THẢO MÃ NGUỒN VĂN BẢN / LATEX */
            <div className="space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <label className="text-xs font-semibold text-slate-300">
                    Nội dung mã nguồn đề thi (Hỗ trợ LaTeX <code className="text-teal-300">$...$</code>,{' '}
                    <code className="text-teal-300">[HÌNH_VẼ:...]</code>,{' '}
                    <code className="text-teal-300">[BẢNG_TOÁN]</code>)
                  </label>
                  <button
                    type="button"
                    onClick={handleWrapUnderline}
                    title="Bôi đen dòng đáp án đúng rồi nhấn nút này để bọc thẻ gạch chân <u>...</u>"
                    className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-teal-500/15 hover:bg-teal-500/25 text-teal-300 border border-teal-500/30 text-[11px] font-semibold transition-all"
                  >
                    <Underline className="w-3 h-3" />
                    <span>+ Gạch chân &lt;u&gt;</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleWrapMath}
                    title="Bôi đen biểu thức toán rồi nhấn nút này để bọc cặp dấu $...$"
                    className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-sky-500/15 hover:bg-sky-500/25 text-sky-300 border border-sky-500/30 text-[11px] font-semibold transition-all"
                  >
                    <Sigma className="w-3 h-3" />
                    <span>+ Công thức $...$</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleAutoNormalizeMath}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 text-[11px] font-semibold transition-all"
                  >
                    <Wand2 className="w-3 h-3" />
                    <span>Chuẩn hóa Công thức & Ký hiệu</span>
                  </button>
                </div>
              </div>

              <textarea
                ref={textareaRef}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                onPaste={handlePaste}
                rows={13}
                placeholder="Dán nội dung đề thi từ Word vào đây hoặc nhấn nút Tải file Word (.docx) / PDF (.pdf) ở trên..."
                className="w-full p-4 rounded-xl bg-slate-950 border border-slate-700/90 text-xs sm:text-sm text-slate-100 font-mono leading-relaxed focus:outline-none focus:border-teal-500 resize-y"
              />
            </div>
          )}

          {/* Cảnh báo các câu chưa có gạch chân đáp án (nếu có) */}
          {parseResult.unrecognizedQuestions.length > 0 && (
            <div className="p-3 rounded-xl bg-amber-950/35 border border-amber-500/40 space-y-1.5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>
                    Lưu ý ({parseResult.unrecognizedQuestions.length} vị trí): Bạn có thể nhấn trực tiếp vào phương án đúng ở tab &quot;Xem trước Đề & Hình vẽ&quot; để chọn nhanh đáp án!
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 max-h-20 overflow-y-auto pt-1">
                {parseResult.unrecognizedQuestions.map((item, idx) => (
                  <span
                    key={`${item.part}-${item.questionNumber}-${idx}`}
                    className="px-2 py-0.5 rounded bg-slate-900/90 border border-amber-500/30 text-[11px] text-amber-200"
                  >
                    <strong>
                      {item.partLabel} - {item.questionLabel}:
                    </strong>{' '}
                    {item.reason}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-900/95 border-t border-slate-800 flex-wrap gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              Tổng số câu đã nhận diện:{' '}
              <strong className="text-white text-sm">{parseResult.counts.total}</strong> câu hỏi (
              {parseResult.stats.mathFormulaCount} công thức, {parseResult.stats.figureCount} hình vẽ)
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all"
            >
              Đóng
            </button>
            <button
              type="button"
              disabled={parseResult.counts.total === 0}
              onClick={handleCreateExam}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-lg ${
                parseResult.counts.total > 0
                  ? 'bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-white shadow-teal-950/50 cursor-pointer'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed'
              }`}
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Phát Hành Đề & Làm Bài Ngay ({parseResult.counts.total} câu)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
