import React, { useState } from 'react';
import {
  BookOpen,
  X,
  ChevronRight,
  ChevronDown,
  FileCheck2,
  Sparkles,
  CheckCircle2,
  Play,
  Layers,
} from 'lucide-react';
import { LESSON_CHAPTERS, LessonInfo } from '../data/lessons';

interface LessonCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedExamId: string;
  onSelectLessonExam: (examId: string) => void;
}

export const LessonCatalogModal: React.FC<LessonCatalogModalProps> = ({
  isOpen,
  onClose,
  selectedExamId,
  onSelectLessonExam,
}) => {
  const [activeChapterId, setActiveChapterId] = useState<string>('all');
  const [expandedLessonId, setExpandedLessonId] = useState<string>('bai-01');

  if (!isOpen) return null;

  const filteredChapters =
    activeChapterId === 'all'
      ? LESSON_CHAPTERS
      : LESSON_CHAPTERS.filter((ch) => ch.id === activeChapterId);

  const toggleLesson = (lessonId: string) => {
    setExpandedLessonId((prev) => (prev === lessonId ? '' : lessonId));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#071126] rounded-2xl max-w-5xl w-full max-h-[92vh] flex flex-col border border-cyan-500/40 shadow-2xl text-white overflow-hidden">
        {/* Header */}
        <div className="px-4 sm:px-6 py-4 bg-gradient-to-r from-[#071126] via-[#0b1c44] to-[#071126] border-b border-sky-900/80 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-[#040817] shadow-lg shrink-0">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.3]" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-base sm:text-lg font-extrabold text-white tracking-tight">
                  Mục Bài Học & Đề Ôn Tập Theo Bài
                </h2>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
                  SGK Toán 12 - Tập 1 & Tập 2 (Kết nối tri thức)
                </span>
              </div>
              <p className="text-xs text-sky-300 mt-0.5 truncate">
                Chọn Bài học (từ Bài 1 đến Bài 19, Bài tập cuối chương & Ôn tập cuối năm) → Chọn Đề ôn (2 đề ôn / bài, mỗi đề 22 câu chuẩn 4 phần)
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-[#0b1739] hover:bg-sky-900 text-sky-300 hover:text-white border border-sky-800 transition-colors shrink-0"
            title="Đóng danh mục Bài học"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chapter Filter Bar */}
        <div className="px-4 sm:px-6 py-2.5 bg-[#091530] border-b border-sky-900/70 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          <button
            type="button"
            onClick={() => setActiveChapterId('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeChapterId === 'all'
                ? 'bg-cyan-500 text-[#040817] shadow-md'
                : 'bg-[#0b1739] text-sky-300 hover:text-white border border-sky-800/70'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Tất cả (26 Bài học · 52 Đề ôn)</span>
          </button>

          {LESSON_CHAPTERS.map((ch) => (
            <button
              key={ch.id}
              type="button"
              onClick={() => setActiveChapterId(ch.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeChapterId === ch.id
                  ? 'bg-cyan-500 text-[#040817] shadow-md'
                  : 'bg-[#0b1739] text-sky-300 hover:text-white border border-sky-800/70'
              }`}
            >
              {ch.code}: {ch.title} ({ch.lessons.length} bài)
            </button>
          ))}
        </div>

        {/* Body: Chapters -> Lessons -> Đề Ôn */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-6 space-y-6">
          {filteredChapters.map((chapter) => (
            <div key={chapter.id} className="space-y-3">
              {/* Chapter Header */}
              <div className="flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-sky-950/90 to-[#0b1739]/80 border border-sky-800/80">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="px-2.5 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 text-xs font-black uppercase whitespace-nowrap">
                    {chapter.code}
                  </span>
                  <h3 className="text-xs sm:text-sm font-extrabold text-white tracking-wide uppercase truncate">
                    {chapter.title}
                  </h3>
                </div>
                <span className="text-[11px] font-semibold text-sky-300 whitespace-nowrap">
                  {chapter.lessons.length} bài học · {chapter.lessons.length * 2} đề ôn
                </span>
              </div>

              {/* Lessons List */}
              <div className="space-y-2.5">
                {chapter.lessons.map((lesson: LessonInfo) => {
                  const isExpanded = expandedLessonId === lesson.id;
                  const isReview = lesson.id.includes('ontap');
                  const hasSelectedExam = lesson.practiceExams.some(
                    (ex) => ex.id === selectedExamId
                  );

                  return (
                    <div
                      key={lesson.id}
                      className={`rounded-2xl border transition-all overflow-hidden ${
                        hasSelectedExam
                          ? 'bg-[#0b1c42] border-cyan-400/70 shadow-lg shadow-cyan-950/40'
                          : 'bg-[#0b1739]/90 border-sky-900/80 hover:border-sky-700'
                      }`}
                    >
                      {/* Lesson Row Header */}
                      <button
                        type="button"
                        onClick={() => toggleLesson(lesson.id)}
                        className="w-full px-3.5 sm:px-5 py-3.5 flex items-center justify-between gap-3 text-left"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span
                            className={`px-2.5 py-1 rounded-xl text-xs font-black whitespace-nowrap shrink-0 border ${
                              isReview
                                ? 'bg-amber-500/20 text-amber-300 border-amber-400/50'
                                : 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40'
                            }`}
                          >
                            {lesson.code}
                          </span>
                          <div className="min-w-0">
                            <div className="text-sm sm:text-base font-extrabold text-white flex items-center gap-2 flex-wrap">
                              <span>{lesson.fullName}</span>
                              {hasSelectedExam && (
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500 text-[#040817]">
                                  Đang chọn
                                </span>
                              )}
                            </div>
                            <div className="text-[11px] text-sky-300 mt-0.5 flex items-center gap-2 flex-wrap">
                              <span>Trang {lesson.pageNumber} SGK</span>
                              <span>•</span>
                              <span className="text-emerald-300 font-semibold">
                                Danh mục: Đề ôn (2 đề × 22 câu)
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#071126] border border-sky-800 text-xs font-bold text-cyan-300">
                            <FileCheck2 className="w-3.5 h-3.5" />
                            <span>Đề ôn (2)</span>
                          </span>
                          {isExpanded ? (
                            <ChevronDown className="w-5 h-5 text-cyan-400" />
                          ) : (
                            <ChevronRight className="w-5 h-5 text-sky-400" />
                          )}
                        </div>
                      </button>

                      {/* Expanded Content: Core Topics + Danh mục Đề Ôn */}
                      {isExpanded && (
                        <div className="px-3.5 sm:px-5 pb-4 pt-2 border-t border-sky-900/70 bg-[#071126]/70 space-y-3.5">
                          {/* Trọng tâm kiến thức bài học */}
                          <div className="space-y-1.5">
                            <div className="text-[11px] font-bold uppercase tracking-wider text-sky-300 flex items-center gap-1.5">
                              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                              <span>Kiến thức trọng tâm trong bài học:</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                              {lesson.coreTopics.map((topic, idx) => (
                                <div
                                  key={idx}
                                  className="px-3 py-2 rounded-xl bg-[#0b1739] border border-sky-900/80 text-xs text-slate-200 flex items-start gap-2"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                  <span>{topic}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Danh mục: Đề ôn (2 đề ôn mỗi bài) */}
                          <div className="space-y-2">
                            <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-300 flex items-center gap-1.5">
                              <FileCheck2 className="w-4 h-4 text-emerald-400" />
                              <span>Danh mục: Đề ôn ({lesson.practiceExams.length} đề ôn chuẩn cấu trúc 22 câu - 4 phần)</span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {lesson.practiceExams.map((exam, idx) => {
                                const isCurrent = exam.id === selectedExamId;
                                const totalQ =
                                  exam.part1.length +
                                  exam.part2.length +
                                  exam.part3.length +
                                  (exam.part4?.length || 0);

                                return (
                                  <div
                                    key={exam.id}
                                    className={`p-3.5 rounded-xl border flex flex-col justify-between gap-3 transition-all ${
                                      isCurrent
                                        ? 'bg-cyan-500/15 border-cyan-400 shadow-md'
                                        : 'bg-[#0b1739] border-sky-800/80 hover:border-cyan-500/60'
                                    }`}
                                  >
                                    <div className="space-y-1">
                                      <div className="flex items-center justify-between gap-2">
                                        <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-[11px] font-black">
                                          Đề ôn số {idx + 1}
                                        </span>
                                        <span className="text-[11px] font-mono text-amber-300 font-bold">
                                          {totalQ} câu · {exam.durationMinutes} phút
                                        </span>
                                      </div>
                                      <h4 className="text-sm font-extrabold text-white">
                                        {exam.title}
                                      </h4>
                                      <p className="text-[11px] text-sky-300 leading-relaxed">
                                        Phần I: {exam.part1.length} câu TN · Phần II: {exam.part2.length} câu Đ/S · Phần III: {exam.part3.length} câu TLN · Phần IV: {exam.part4?.length || 0} câu Tự luận
                                      </p>
                                    </div>

                                    <button
                                      type="button"
                                      onClick={() => {
                                        onSelectLessonExam(exam.id);
                                        onClose();
                                      }}
                                      className={`w-full py-2.5 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition-all ${
                                        isCurrent
                                          ? 'bg-cyan-400 text-[#040817]'
                                          : 'bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-[#040817] shadow-md'
                                      }`}
                                    >
                                      <Play className="w-3.5 h-3.5 fill-current" />
                                      <span>
                                        {isCurrent ? 'Đang Mở Đề Ôn Này' : `Mở Đề Ôn Số ${idx + 1} (22 câu)`}
                                      </span>
                                    </button>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-4 sm:px-6 py-3 bg-[#091530] border-t border-sky-900/80 flex items-center justify-between gap-3 text-xs text-sky-300">
          <span>
            Tổng cộng: <strong className="text-white">26 Bài học</strong> (kể cả Bài tập cuối chương & Ôn tập cuối năm) · <strong className="text-emerald-300">52 Đề ôn (1144 câu hỏi)</strong>
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-[#0b1739] hover:bg-sky-900 text-white font-bold border border-sky-800 transition-colors"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
