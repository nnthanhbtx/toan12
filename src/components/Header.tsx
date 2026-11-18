import React from 'react';
import {
  Sparkles,
  FileText,
  Trophy,
  BookOpen,
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
  onOpenImportWord,
  onOpenLeaderboard,
  leaderboardCount,
  onOpenLessonCatalog,
}) => {
  return (
    <header className="bg-[#070f24] border-b border-sky-950/90 text-white no-print">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 py-2 sm:py-3 flex items-center justify-between gap-1.5 sm:gap-3">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center font-bold text-white shadow-md shadow-indigo-950/60 border border-cyan-400/30">
            <span className="font-mono text-xs sm:text-base font-black">∑12</span>
          </div>
          <span className="text-xs sm:text-lg font-bold tracking-tight text-white whitespace-nowrap">
            Toán 12
          </span>
        </div>

        {/* Zone 2: Minimalist Single-Source Navigation (Desktop) */}
        <nav className="hidden lg:flex items-center gap-2 text-xs font-medium text-slate-300">
          {/* 1. Mục Bài Học (bên trong mỗi bài học có Lý thuyết & 2 Đề ôn) */}
          <button
            onClick={onOpenLessonCatalog}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/60 hover:bg-emerald-500/30 hover:text-white transition-all whitespace-nowrap font-bold shadow-xs"
            title="Mở Bài Học SGK (Bên trong mỗi bài có Lý thuyết & 2 Đề ôn)"
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span>Bài Học</span>
          </button>

          {/* 2. Chọn Đề Thi Tổng Hợp */}
          <div className="flex items-center gap-1.5 bg-[#0b1739] px-3 py-1.5 rounded-xl border border-sky-800/60 shadow-xs">
            <span className="text-sky-300 font-medium">Đề:</span>
            {allExams.length > 0 ? (
              <select
                value={currentExam.id}
                onChange={(e) => onSelectExam(e.target.value)}
                className="bg-transparent text-white font-bold focus:outline-none cursor-pointer pr-1 max-w-[200px] truncate"
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

          {/* 3. Tạo Đề Từ File Word / PDF */}
          <button
            onClick={onOpenImportWord}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/20 hover:text-white transition-all whitespace-nowrap font-bold"
            title="Tạo đề bằng file Word (.docx) hoặc PDF (.pdf)"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>Tạo Đề Word / PDF</span>
          </button>

          {/* 4. Bảng Xếp Hạng */}
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

          {/* 5. Chế độ thi / Luyện tập */}
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

        {/* Zone 3: Mobile Compact Navigation (Chuẩn cảm ứng Apple HIG >= 40px cho iPhone 10 -> iPhone 18) */}
        <div className="flex lg:hidden items-center gap-1.5 min-w-0">
          <button
            type="button"
            onClick={onOpenLessonCatalog}
            className="min-h-[40px] px-3 py-1.5 flex items-center gap-1.5 rounded-xl bg-emerald-500/20 border border-emerald-400/60 text-emerald-300 active:bg-emerald-500/35 text-xs font-extrabold whitespace-nowrap shrink-0 select-none"
            title="Bài Học (Lý thuyết & 2 Đề ôn)"
          >
            <BookOpen className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Bài Học</span>
          </button>

          {allExams.length > 0 && (
            <div className="min-h-[40px] flex items-center gap-1 bg-[#0b1739] px-2.5 py-1.5 rounded-xl border border-sky-800/60 text-xs min-w-0">
              <select
                value={currentExam.id}
                onChange={(e) => onSelectExam(e.target.value)}
                aria-label="Chọn đề thi"
                className="bg-transparent text-white font-bold focus:outline-none cursor-pointer max-w-[118px] sm:max-w-[165px] truncate"
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
            type="button"
            onClick={onOpenImportWord}
            className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl bg-[#0b1739] border border-sky-800/60 text-cyan-300 active:bg-sky-900/80 shrink-0 select-none"
            title="Tạo đề từ Word / PDF"
          >
            <FileText className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onOpenLeaderboard}
            className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl bg-amber-500/15 border border-amber-400/50 text-amber-300 active:bg-amber-500/30 shrink-0 select-none"
            title="Bảng Xếp Hạng"
          >
            <Trophy className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
