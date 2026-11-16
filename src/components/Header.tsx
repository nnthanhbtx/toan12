import React from 'react';
import {
  RotateCcw,
  Send,
  Sparkles,
  FileText,
  Trophy,
  BookOpen,
  BookmarkCheck,
} from 'lucide-react';
import { ExamSet } from '../types/exam';

interface HeaderProps {
  currentExam: ExamSet;
  allExams: ExamSet[];
  onSelectExam: (examId: string) => void;
  onDeleteExam?: (examId: string) => void;
  examMode: 'exam' | 'practice';
  onToggleExamMode: () => void;
  isStarted: boolean;
  onStartExam: () => void;
  isSubmitted: boolean;
  onSubmitExam: () => void;
  onResetExam: () => void;
  onOpenImportWord: () => void;
  onOpenLeaderboard: () => void;
  leaderboardCount: number;
  onOpenLessonCatalog: () => void;
  onOpenFormulaSheet?: () => void;
  onOpenScratchpad?: () => void;
  fontSize?: 'normal' | 'large' | 'xlarge';
  onChangeFontSize?: (size: 'normal' | 'large' | 'xlarge') => void;
  isOnline?: boolean;
  onOpenPWAInfo?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentExam,
  allExams,
  onSelectExam,
  examMode,
  onToggleExamMode,
  isStarted,
  isSubmitted,
  onSubmitExam,
  onResetExam,
  onOpenImportWord,
  onOpenLeaderboard,
  leaderboardCount,
  onOpenLessonCatalog,
  onOpenFormulaSheet,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#070f24]/95 backdrop-blur-md border-b border-sky-950 text-white shadow-lg no-print">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 py-2 sm:py-3 flex items-center justify-between gap-1.5 sm:gap-3 md:gap-6">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center font-bold text-white shadow-md shadow-indigo-950/60 border border-cyan-400/30">
            <span className="font-mono text-xs sm:text-base font-black">∑12</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-lg font-bold tracking-tight text-white whitespace-nowrap">
              Toán 12
            </span>
          </div>
        </div>

        {/* Zone 2: Navigation & Quick Tools (Desktop) */}
        <nav className="hidden lg:flex items-center gap-2 text-xs font-medium text-slate-300">
          {/* Mục Bài Học (SGK Toán 12 Tập 1 & Tập 2 - Kết nối tri thức) */}
          <button
            onClick={onOpenLessonCatalog}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/60 hover:bg-emerald-500/30 hover:text-white transition-all whitespace-nowrap font-bold shadow-xs"
            title="Mở danh mục Bài học & Đề ôn theo từng bài SGK Toán 12"
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span>Bài Học</span>
          </button>

          {/* Mục Lý Thuyết Công Thức */}
          {onOpenFormulaSheet && (
            <button
              onClick={onOpenFormulaSheet}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/20 text-cyan-200 border border-cyan-400/60 hover:bg-cyan-500/30 hover:text-white transition-all whitespace-nowrap font-bold shadow-xs"
              title="Lý thuyết & Công thức cần nhớ chuẩn 100% SGK Toán 12 (Bài 1 - Bài 19)"
            >
              <BookmarkCheck className="w-3.5 h-3.5 text-cyan-300" />
              <span>Lý Thuyết Công Thức</span>
            </button>
          )}

          {/* Chọn Đề Thi */}
          <div className="flex items-center gap-1.5 bg-[#0b1739] px-3 py-1.5 rounded-xl border border-sky-800/60 shadow-xs">
            <span className="text-sky-300 font-medium">Đề:</span>
            {allExams.length > 0 ? (
              <select
                value={currentExam.id}
                onChange={(e) => onSelectExam(e.target.value)}
                className="bg-transparent text-white font-bold focus:outline-none cursor-pointer pr-1 max-w-[210px] truncate"
              >
                {allExams.map((ex) => (
                  <option key={ex.id} value={ex.id} className="bg-[#071126] text-white">
                    {ex.title}
                  </option>
                ))}
              </select>
            ) : (
              <span className="text-slate-400 italic">Trống</span>
            )}
          </div>

          {/* Tạo Đề Từ File Word / PDF */}
          <button
            onClick={onOpenImportWord}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/20 hover:text-white transition-all whitespace-nowrap font-bold"
            title="Tạo đề bằng file Word (.docx) hoặc PDF (.pdf)"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>Tạo Đề Word / PDF</span>
          </button>

          {/* Bảng Xếp Hạng */}
          <button
            onClick={onOpenLeaderboard}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/15 text-amber-300 border border-amber-400/50 hover:bg-amber-500/25 hover:text-white transition-all whitespace-nowrap font-bold shadow-xs"
            title="Xem Bảng Xếp Hạng Thành Tích Học Sinh"
          >
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Bảng Xếp Hạng</span>
            <span className="px-1.5 py-0.2 rounded-full bg-amber-400/25 text-amber-200 text-[10px] font-mono">
              {leaderboardCount}
            </span>
          </button>

          {/* Chế độ thi / Luyện tập */}
          <button
            onClick={onToggleExamMode}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all whitespace-nowrap font-bold ${
              examMode === 'exam'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30'
                : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30'
            }`}
            title="Nhấp để đổi giữa chế độ thi tính giờ hoặc ôn tập có giải thích tức thì"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{examMode === 'exam' ? 'Chế độ Thi Tính Giờ' : 'Chế độ Luyện Tập'}</span>
          </button>
        </nav>

        {/* Zone 3: Primary Action & Mobile Controls */}
        <div className="flex items-center gap-1 sm:gap-2.5 shrink-0 min-w-0">
          {/* Quick tools on small screens */}
          <div className="flex lg:hidden items-center gap-1 min-w-0">
            <button
              onClick={onOpenLessonCatalog}
              className="min-h-[38px] px-2 sm:px-2.5 py-1.5 flex items-center gap-1 rounded-xl bg-emerald-500/20 border border-emerald-400/60 text-emerald-300 hover:bg-emerald-500/30 text-xs font-bold whitespace-nowrap shrink-0"
              title="Bài Học & Đề Ôn SGK"
            >
              <BookOpen className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Bài Học</span>
            </button>

            {onOpenFormulaSheet && (
              <button
                onClick={onOpenFormulaSheet}
                className="min-h-[38px] px-2 sm:px-2.5 py-1.5 flex items-center gap-1 rounded-xl bg-cyan-500/20 border border-cyan-400/60 text-cyan-200 hover:bg-cyan-500/30 text-xs font-bold whitespace-nowrap shrink-0"
                title="Lý Thuyết & Công Thức SGK"
              >
                <BookmarkCheck className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                <span className="hidden sm:inline">Lý Thuyết Công Thức</span>
                <span className="sm:hidden">Lý Thuyết</span>
              </button>
            )}

            {allExams.length > 0 && (
              <div className="flex items-center gap-1 bg-[#0b1739] px-2 py-1.5 rounded-xl border border-sky-800/60 text-xs min-w-0">
                <select
                  value={currentExam.id}
                  onChange={(e) => onSelectExam(e.target.value)}
                  aria-label="Chọn đề thi"
                  className="bg-transparent text-white font-bold focus:outline-none cursor-pointer max-w-[115px] sm:max-w-[160px] truncate"
                >
                  {allExams.map((ex) => (
                    <option key={ex.id} value={ex.id} className="bg-[#071126] text-white">
                      {ex.title}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <button
              onClick={onOpenLeaderboard}
              className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-xl bg-amber-500/15 border border-amber-400/50 text-amber-300 hover:bg-amber-500/25 shrink-0"
              title="Bảng Xếp Hạng"
            >
              <Trophy className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenImportWord}
              className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-xl bg-[#0b1739] border border-sky-800/60 text-cyan-300 hover:bg-sky-900/60 shrink-0"
              title="Tạo đề từ Word / PDF"
            >
              <FileText className="w-4 h-4" />
            </button>
          </div>

          {isSubmitted ? (
            <button
              onClick={onResetExam}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-[#0b1739] hover:bg-sky-900 border border-sky-800/80 rounded-xl transition-all whitespace-nowrap shadow-sm"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Làm Lại Đề</span>
              <span className="sm:hidden">Làm lại</span>
            </button>
          ) : isStarted ? (
            <button
              onClick={onSubmitExam}
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all shadow-md shadow-indigo-950/60 whitespace-nowrap hover:scale-[1.02] active:scale-[0.98]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Nộp Bài Thi</span>
            </button>
          ) : null}
        </div>
      </div>
    </header>
  );
};


