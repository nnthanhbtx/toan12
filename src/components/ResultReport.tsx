import React, { useEffect } from 'react';
import { PartScoreDetail } from '../types/exam';
import confetti from 'canvas-confetti';
import { Award, Printer, RotateCcw, ArrowDownCircle, Star, Trophy, User, Clock, AlertTriangle, ShieldCheck } from 'lucide-react';
import { formatDuration } from './LeaderboardModal';

interface ResultReportProps {
  scoreDetail: PartScoreDetail;
  examTitle: string;
  studentName?: string;
  studentClass?: string;
  durationSeconds?: number;
  rankPosition?: number;
  totalRanked?: number;
  violationCount?: number;
  onOpenViolationModal?: () => void;
  onResetExam: () => void;
  onScrollToQuestions: () => void;
  onOpenLeaderboard?: () => void;
}

export const ResultReport: React.FC<ResultReportProps> = ({
  scoreDetail,
  examTitle,
  studentName,
  studentClass,
  durationSeconds,
  rankPosition,
  totalRanked,
  violationCount = 0,
  onOpenViolationModal,
  onResetExam,
  onScrollToQuestions,
  onOpenLeaderboard,
}) => {
  useEffect(() => {
    if (scoreDetail.totalScore >= 7.0) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (e) {
        // Safe fallback
      }
    }
  }, [scoreDetail.totalScore]);

  // Sinh lời nhận xét sư phạm
  const getTeacherFeedback = (score: number) => {
    if (score >= 9.0) {
      return {
        badge: 'Xuất sắc',
        title: 'Tư duy toán học rất sắc sảo và mạch lạc!',
        content:
          'Em nắm rất vững bản chất kiến thức chương trình Toán 12. Khả năng tư duy logic ở phần khảo sát hàm số, nguyên hàm - tích phân, hình học không gian Oxyz và xác suất có điều kiện đạt mức độ tuyệt vời. Hãy duy trì sự cẩn trọng này để chinh phục điểm 9+ trong kỳ thi Tốt nghiệp THPT và Đánh giá năng lực.',
        recommendation: 'Nâng cao: Luyện thêm các bài toán tối ưu thực tế bằng đạo hàm, ứng dụng tích phân tính thể tích vật thể và bài toán cực trị tọa độ không gian Oxyz.',
      };
    } else if (score >= 8.0) {
      return {
        badge: 'Giỏi',
        title: 'Nền tảng kiến thức vững vàng, lập luận logic tốt!',
        content:
          'Em làm rất tốt các dạng toán cơ bản và vận dụng của chương trình Toán 12. Tuy nhiên cần lưu ý kỹ các điều kiện xác định của hàm phân thức (tiệm cận đứng - tiệm cận xiên), dấu trị tuyệt đối khi tính diện tích hình phẳng và góc giữa đường thẳng với mặt phẳng trong Oxyz.',
        recommendation: 'Lưu ý: Luôn kiểm tra lại tập xác định của hàm số và các giả thiết xác suất có điều kiện trước khi kết luận.',
      };
    } else if (score >= 6.5) {
      return {
        badge: 'Khá',
        title: 'Nắm được các dạng toán trọng tâm nhưng còn sơ suất ở chi tiết',
        content:
          'Điểm số của em ở mức khá. Em đã hiểu rõ các công thức đạo hàm, nguyên hàm và tọa độ vectơ trong không gian, nhưng ở Phần II (Đúng/Sai) và Phần IV (Tự luận ghép bước) cần rèn luyện thêm tính chặt chẽ trong từng bước suy luận trung gian.',
        recommendation: 'Chiến thuật: Ôn tập lại quy tắc xét dấu đạo hàm lập bảng biến thiên, công thức tích phân từng phần và phương trình mặt phẳng - đường thẳng trong Oxyz.',
      };
    } else if (score >= 5.0) {
      return {
        badge: 'Trung bình',
        title: 'Cần củng cố lại các công thức và điều kiện bài toán',
        content:
          'Em đã làm được các câu hỏi nhận biết cơ bản, tuy nhiên còn gặp khó khăn ở các câu hỏi thông hiểu sâu và vận dụng. Cần dành thời gian ôn lại bảng nguyên hàm cơ bản, cách tìm tiệm cận, tọa độ vectơ trong không gian Oxyz và công thức xác suất toàn phần - Bayes.',
        recommendation: 'Kế hoạch học tập: Làm lại toàn bộ các câu sai trong bài thi này, đọc kỹ phần giải thích chi tiết và các bẫy sai lầm mà thầy cô đã ghi chú.',
      };
    } else {
      return {
        badge: 'Cần cố gắng',
        title: 'Cần hệ thống hóa lại toàn bộ chuyên đề Toán 12',
        content:
          'Kết quả cho thấy em đang bị hổng một số mảng kiến thức trọng tâm lớp 12. Đừng nản lòng! Chương trình Toán 12 có tính liên kết cao. Hãy bắt đầu từ việc học chắc bảng đạo hàm - nguyên hàm, đọc đồ thị hàm số và luyện tập các bài tập tọa độ Oxyz cơ bản từng phần.',
        recommendation: 'Khuyên dùng: Làm lại bài thi ở "Chế độ Luyện Tập" để xem lời giải chi tiết từng câu.',
      };
    }
  };

  const feedback = getTeacherFeedback(scoreDetail.totalScore);

  return (
    <div className="bg-[#071126] rounded-2xl border border-sky-900/60 shadow-2xl p-6 sm:p-8 space-y-8 animate-fadeIn text-white">
      {/* Banner Điểm Số */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-sky-950/80">
        <div className="space-y-3 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Kết Quả Đánh Giá Năng Lực Toàn Diện</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            {examTitle.toLowerCase().startsWith('đề') ? examTitle : `Đề ${examTitle}`}
          </h2>

          {/* Thông tin Học sinh & Thứ hạng BXH */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 pt-0.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0b1739] border border-sky-800/80 text-xs">
              <User className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-sky-300">Họ và tên:</span>
              <span className="font-bold text-white">
                {studentName && studentName.trim() ? studentName.trim() : 'Học sinh Lớp 12'}
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0b1739] border border-sky-800/80 text-xs">
              <span className="text-sky-300">Lớp:</span>
              <span className="font-bold text-amber-300">
                {studentClass && studentClass.trim() ? studentClass.trim() : '12A1'}
              </span>
            </div>

            {typeof durationSeconds === 'number' && durationSeconds > 0 && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0b1739] border border-sky-800/80 text-xs">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-sky-300">Thời gian làm:</span>
                <span className="font-mono font-bold text-white">
                  {formatDuration(durationSeconds)}
                </span>
              </div>
            )}

            <button
              type="button"
              onClick={onOpenViolationModal}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-colors ${
                violationCount > 0
                  ? 'bg-rose-500/20 hover:bg-rose-500/30 border-rose-500/50 text-rose-300'
                  : 'bg-emerald-500/15 hover:bg-emerald-500/25 border-emerald-500/40 text-emerald-300'
              }`}
              title="Nhấn để xem chi tiết nhật ký giám sát làm bài"
            >
              {violationCount > 0 ? (
                <>
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                  <span>Vi phạm quy chế: {violationCount} lần</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Giám sát: 0 vi phạm</span>
                </>
              )}
            </button>

            {rankPosition && (
              <button
                type="button"
                onClick={onOpenLeaderboard}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/50 text-xs text-amber-300 font-bold transition-colors"
              >
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span>
                  Hạng #{rankPosition}
                  {totalRanked ? ` / ${totalRanked}` : ''} trên Bảng Xếp Hạng
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Điểm tổng Score Badge */}
        <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-gradient-to-br from-[#0c1a40] to-[#060e24] text-white min-w-[190px] border border-cyan-500/40 shadow-xl text-center">
          <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
            Tổng Điểm Bài Thi
          </span>
          <div className="text-4xl sm:text-5xl font-black font-mono tracking-tight my-1 text-white tabular-nums">
            {scoreDetail.totalScore}
            <span className="text-xl text-cyan-300 font-sans font-medium">/10</span>
          </div>
          <div className="inline-flex items-center gap-1 text-xs font-bold px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span>Xếp loại: {scoreDetail.rank}</span>
          </div>
        </div>
      </div>

      {/* 4 Phần Chi Tiết Điểm Số */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Phần I */}
        <div className="p-4 rounded-2xl bg-[#0b1739] border border-sky-800/60 space-y-1.5 shadow-md">
          <div className="text-xs font-bold text-cyan-300">Phần I: Trắc nghiệm 4 lựa chọn</div>
          <div className="text-2xl font-black font-mono text-white tabular-nums">
            {scoreDetail.part1Score}
            <span className="text-sm text-sky-400 font-normal"> / 3.0đ</span>
          </div>
          <div className="text-xs text-sky-300">
            Đúng {scoreDetail.part1CorrectCount}/12 câu (0.25đ/câu)
          </div>
        </div>

        {/* Phần II */}
        <div className="p-4 rounded-2xl bg-[#0b1739] border border-sky-800/60 space-y-1.5 shadow-md">
          <div className="text-xs font-bold text-cyan-300">Phần II: Đúng / Sai ({scoreDetail.part2Details.length} câu)</div>
          <div className="text-2xl font-black font-mono text-white tabular-nums">
            {scoreDetail.part2Score}
            <span className="text-sm text-sky-400 font-normal"> / {scoreDetail.part2Max}đ</span>
          </div>
          <div className="text-xs text-sky-300">
            Quy chế chấm thi THPT 2025
          </div>
        </div>

        {/* Phần III */}
        <div className="p-4 rounded-2xl bg-[#0b1739] border border-sky-800/60 space-y-1.5 shadow-md">
          <div className="text-xs font-bold text-cyan-300">Phần III: Trả lời ngắn (4 câu)</div>
          <div className="text-2xl font-black font-mono text-white tabular-nums">
            {scoreDetail.part3Score}
            <span className="text-sm text-sky-400 font-normal"> / {scoreDetail.part3Max}đ</span>
          </div>
          <div className="text-xs text-sky-300">
            Đúng {scoreDetail.part3CorrectCount}/4 câu (0.5đ/câu)
          </div>
        </div>

        {/* Phần IV */}
        <div className="p-4 rounded-2xl bg-[#0b1739] border border-sky-800/60 space-y-1.5 shadow-md">
          <div className="text-xs font-bold text-cyan-300">Phần IV: Tự luận ghép bước</div>
          <div className="text-2xl font-black font-mono text-white tabular-nums">
            {scoreDetail.part4Score}
            <span className="text-sm text-sky-400 font-normal"> / {scoreDetail.part4Max}đ</span>
          </div>
          <div className="text-xs text-sky-300">
            Sắp xếp logic 4 bài tự luận
          </div>
        </div>
      </div>

      {/* Đánh Giá Năng Lực Toán Học */}
      <div className="p-5 rounded-2xl bg-[#09132c] border border-sky-900 space-y-4">
        <h3 className="text-sm font-bold text-cyan-300">
          Chỉ Số Đánh Giá Năng Lực Toán Học:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-slate-300">Tái hiện & Nhận biết kiến thức</span>
              <span className="font-mono text-cyan-300">{scoreDetail.competencyAnalysis.knowledgeRecall}%</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-sky-950 overflow-hidden border border-sky-900">
              <div
                className="h-full bg-cyan-500 rounded-full transition-all duration-500"
                style={{ width: `${scoreDetail.competencyAnalysis.knowledgeRecall}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-slate-300">Thông hiểu & Phân tích đúng/sai</span>
              <span className="font-mono text-sky-300">{scoreDetail.competencyAnalysis.understanding}%</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-sky-950 overflow-hidden border border-sky-900">
              <div
                className="h-full bg-sky-500 rounded-full transition-all duration-500"
                style={{ width: `${scoreDetail.competencyAnalysis.understanding}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-slate-300">Vận dụng giải toán & Tính toán ngắn</span>
              <span className="font-mono text-emerald-300">{scoreDetail.competencyAnalysis.application}%</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-sky-950 overflow-hidden border border-sky-900">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                style={{ width: `${scoreDetail.competencyAnalysis.application}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-slate-300">Suy luận logic & Trình bày tự luận</span>
              <span className="font-mono text-purple-300">{scoreDetail.competencyAnalysis.logicalReasoning}%</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-sky-950 overflow-hidden border border-sky-900">
              <div
                className="h-full bg-purple-500 rounded-full transition-all duration-500"
                style={{ width: `${scoreDetail.competencyAnalysis.logicalReasoning}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Lời Nhận Xét Của Chuyên Gia */}
      <div className="p-5 sm:p-6 rounded-2xl bg-[#0b1739] border border-amber-500/30 space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-amber-500 text-[#071126] font-black text-xs flex items-center justify-center">
            ★
          </div>
          <div>
            <h3 className="text-sm font-bold text-amber-300">
              Nhận Xét Chuyên Môn Sư Phạm
            </h3>
            <span className="text-xs text-amber-200/80 font-medium">{feedback.title}</span>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed pt-1">
          {feedback.content}
        </p>
        <div className="p-3.5 rounded-xl bg-[#071126] border border-amber-500/20 text-xs text-amber-200 font-medium">
          <span className="font-bold text-amber-300">Lời khuyên chiến thuật: </span>
          {feedback.recommendation}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={onScrollToQuestions}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#071126] font-bold text-xs transition-colors shadow-md"
          >
            <ArrowDownCircle className="w-4 h-4" />
            <span>Xem Lại Chi Tiết Từng Câu Hỏi & Lời Giải</span>
          </button>
          {onOpenLeaderboard && (
            <button
              onClick={onOpenLeaderboard}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-bold text-xs border border-amber-400/50 transition-colors shadow-sm"
            >
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>Xem Bảng Xếp Hạng</span>
            </button>
          )}
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#0b1739] hover:bg-sky-900 text-sky-200 font-semibold text-xs border border-sky-800 transition-colors"
          >
            <Printer className="w-4 h-4 text-sky-400" />
            <span>In Phiếu Kết Quả</span>
          </button>
        </div>

        <button
          onClick={onResetExam}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-900 hover:bg-sky-800 text-white font-bold text-xs transition-colors shadow-sm ml-auto border border-sky-700"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Làm Lại Bài Thi Này</span>
        </button>
      </div>
    </div>
  );
};
