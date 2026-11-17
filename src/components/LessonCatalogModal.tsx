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
  BookmarkCheck,
  AlertCircle,
} from 'lucide-react';
import { LESSON_CHAPTERS, LessonInfo } from '../data/lessons';
import { getTheoryByLessonId } from '../data/theoryCatalog';
import { MathRenderer } from './MathRenderer';

interface LessonCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedExamId: string;
  onSelectLessonExam: (examId: string) => void;
  initialLessonId?: string;
  initialTab?: 'theory' | 'exams';
}

export const LessonCatalogModal: React.FC<LessonCatalogModalProps> = ({
  isOpen,
  onClose,
  selectedExamId,
  onSelectLessonExam,
  initialLessonId,
  initialTab = 'exams',
}) => {
  const [activeChapterId, setActiveChapterId] = useState<string>('all');
  const [expandedLessonId, setExpandedLessonId] = useState<string>(initialLessonId || 'bai-01');
  const [lessonTabMap, setLessonTabMap] = useState<Record<string, 'theory' | 'exams'>>({});

  React.useEffect(() => {
    if (isOpen && initialLessonId) {
      setExpandedLessonId(initialLessonId);
      if (initialTab) {
        setLessonTabMap((prev) => ({ ...prev, [initialLessonId]: initialTab }));
      }
    }
  }, [isOpen, initialLessonId, initialTab]);

  if (!isOpen) return null;

  const filteredChapters =
    activeChapterId === 'all'
      ? LESSON_CHAPTERS
      : LESSON_CHAPTERS.filter((ch) => ch.id === activeChapterId);

  const toggleLesson = (lessonId: string) => {
    setExpandedLessonId((prev) => (prev === lessonId ? '' : lessonId));
  };

  const getActiveTab = (lessonId: string): 'theory' | 'exams' => {
    return lessonTabMap[lessonId] || 'exams';
  };

  const setActiveTabForLesson = (lessonId: string, tab: 'theory' | 'exams') => {
    setExpandedLessonId(lessonId);
    setLessonTabMap((prev) => ({ ...prev, [lessonId]: tab }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#071126] rounded-2xl max-w-5xl w-full max-h-modal flex flex-col border border-cyan-500/40 shadow-2xl text-white overflow-hidden">
        {/* Header */}
        <div className="px-4 sm:px-6 py-3.5 bg-gradient-to-r from-[#071126] via-[#0b1c44] to-[#071126] border-b border-sky-900/80 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-[#040817] shadow-lg shrink-0">
              <BookOpen className="w-5 h-5 stroke-[2.3]" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-base sm:text-lg font-extrabold text-white tracking-tight">
                  Bài Học SGK Toán 12 (Lý Thuyết & Đề Ôn)
                </h2>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
                  Kết nối tri thức với cuộc sống
                </span>
              </div>
              <p className="text-xs text-sky-300 mt-0.5 truncate">
                Mỗi bài học gồm: Mục Lý thuyết & Công thức chuẩn 100% SGK + 2 Đề ôn (22 câu / đề)
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
            <span>Tất cả ({LESSON_CHAPTERS.reduce((s, c) => s + c.lessons.length, 0)} bài)</span>
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
              {ch.code}: {ch.title}
            </button>
          ))}
        </div>

        {/* Body: Chapters -> Lessons -> [Lý thuyết | 2 Đề Ôn] */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-5 space-y-5">
          {filteredChapters.map((chapter) => (
            <div key={chapter.id} className="space-y-2.5">
              {/* Chapter Header */}
              <div className="flex items-center justify-between gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-sky-950/90 to-[#0b1739]/80 border border-sky-800/80">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="px-2 py-0.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 text-xs font-black uppercase whitespace-nowrap">
                    {chapter.code}
                  </span>
                  <h3 className="text-xs sm:text-sm font-extrabold text-white tracking-wide uppercase truncate">
                    {chapter.title}
                  </h3>
                </div>
                <span className="text-[11px] font-semibold text-sky-300 whitespace-nowrap">
                  {chapter.lessons.length} bài học
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
                  const activeTab = getActiveTab(lesson.id);
                  const lessonTheory = getTheoryByLessonId(lesson.id);

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
                      <div className="w-full px-3.5 sm:px-5 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                        <button
                          type="button"
                          onClick={() => toggleLesson(lesson.id)}
                          className="flex items-center gap-3 min-w-0 text-left flex-1"
                        >
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
                              <span className="text-cyan-300 font-semibold">
                                Có: Lý thuyết & 2 Đề ôn (22 câu/đề)
                              </span>
                            </div>
                          </div>
                        </button>

                        {/* Quick Action Buttons on Lesson Row: [Lý thuyết] [2 Đề ôn] */}
                        <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-center">
                          <button
                            type="button"
                            onClick={() => setActiveTabForLesson(lesson.id, 'theory')}
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                              isExpanded && activeTab === 'theory'
                                ? 'bg-cyan-500 text-[#040817] border-cyan-400 shadow-sm'
                                : 'bg-[#071126] text-cyan-300 border-cyan-500/40 hover:bg-cyan-500/20'
                            }`}
                          >
                            <BookmarkCheck className="w-3.5 h-3.5" />
                            <span>Lý thuyết</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setActiveTabForLesson(lesson.id, 'exams')}
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                              isExpanded && activeTab === 'exams'
                                ? 'bg-emerald-400 text-[#040817] border-emerald-300 shadow-sm'
                                : 'bg-[#071126] text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/20'
                            }`}
                          >
                            <FileCheck2 className="w-3.5 h-3.5" />
                            <span>2 Đề ôn</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => toggleLesson(lesson.id)}
                            className="p-1.5 rounded-lg text-sky-300 hover:text-white"
                            aria-label="Mở rộng bài học"
                          >
                            {isExpanded ? (
                              <ChevronDown className="w-5 h-5 text-cyan-400" />
                            ) : (
                              <ChevronRight className="w-5 h-5 text-sky-400" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Expanded Content: Switch between Mục Lý Thuyết & Mục 2 Đề Ôn */}
                      {isExpanded && (
                        <div className="px-3.5 sm:px-5 pb-4 pt-3 border-t border-sky-900/70 bg-[#071126]/80 space-y-4">
                          {/* Sub-navigation Tabs inside the Lesson */}
                          <div className="flex items-center gap-2 p-1 rounded-xl bg-[#050d1e] border border-sky-900/80 w-fit">
                            <button
                              type="button"
                              onClick={() => setActiveTabForLesson(lesson.id, 'theory')}
                              className={`px-3.5 py-1.5 rounded-lg text-xs font-extrabold flex items-center gap-1.5 transition-all ${
                                activeTab === 'theory'
                                  ? 'bg-cyan-500 text-[#040817] shadow-sm'
                                  : 'text-cyan-200/80 hover:text-white'
                              }`}
                            >
                              <BookmarkCheck className="w-3.5 h-3.5" />
                              <span>1. Lý thuyết & Công thức cần nhớ</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => setActiveTabForLesson(lesson.id, 'exams')}
                              className={`px-3.5 py-1.5 rounded-lg text-xs font-extrabold flex items-center gap-1.5 transition-all ${
                                activeTab === 'exams'
                                  ? 'bg-emerald-400 text-[#040817] shadow-sm'
                                  : 'text-emerald-200/80 hover:text-white'
                              }`}
                            >
                              <FileCheck2 className="w-3.5 h-3.5" />
                              <span>2. Đề ôn ({lesson.practiceExams.length} đề)</span>
                            </button>
                          </div>

                          {activeTab === 'theory' ? (
                            /* MỤC 1: LÝ THUYẾT & CÔNG THỨC CẦN NHỚ TRONG BÀI HỌC */
                            lessonTheory ? (
                              <div className="space-y-4">
                                {/* Tóm tắt trọng tâm */}
                                <div className="p-3.5 rounded-xl bg-[#0b1739] border border-cyan-500/30 space-y-2">
                                  <div className="text-xs font-extrabold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                                    <span>Kiến thức & Công thức trọng tâm (Chuẩn 100% SGK trang {lesson.pageNumber}):</span>
                                  </div>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {lessonTheory.keyConcepts.map((concept, idx) => (
                                      <div
                                        key={idx}
                                        className="px-3 py-2 rounded-lg bg-[#071126] border border-sky-900/80 text-xs text-slate-200 flex items-start gap-2"
                                      >
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                        <span>{concept}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Các mục lý thuyết & khung công thức SGK */}
                                <div className="space-y-4">
                                  {lessonTheory.sections.map((section, sIdx) => (
                                    <div
                                      key={sIdx}
                                      className="rounded-xl bg-[#0a1835] border border-cyan-500/25 overflow-hidden"
                                    >
                                      <div className="px-4 py-2.5 bg-gradient-to-r from-cyan-950/80 to-[#0a1835] border-b border-cyan-500/20">
                                        <h4 className="text-sm sm:text-base font-extrabold text-cyan-300">
                                          {section.heading}
                                        </h4>
                                        {section.summary && (
                                          <div className="text-xs text-slate-300 mt-0.5">
                                            <MathRenderer content={section.summary} />
                                          </div>
                                        )}
                                      </div>

                                      <div className="p-3.5 sm:p-4 space-y-3">
                                        {section.boxes.map((box, bIdx) => (
                                          <div
                                            key={bIdx}
                                            className="rounded-xl bg-[#071229] border border-amber-400/30 p-3.5 space-y-2.5"
                                          >
                                            <div className="flex items-center gap-2 text-amber-300 font-bold text-xs sm:text-sm">
                                              <BookmarkCheck className="w-4 h-4 text-amber-400 shrink-0" />
                                              <span>{box.title}</span>
                                            </div>

                                            <div className="text-xs sm:text-sm text-slate-100 leading-relaxed">
                                              <MathRenderer content={box.content} />
                                            </div>

                                            {box.formula && (
                                              <div className="p-3 rounded-xl bg-[#040b1a] border border-cyan-400/30 text-cyan-100 overflow-x-auto text-xs sm:text-sm">
                                                <MathRenderer content={box.formula} />
                                              </div>
                                            )}

                                            {box.note && (
                                              <div className="flex items-start gap-2 p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-xs text-emerald-200 leading-relaxed">
                                                <AlertCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                                <div className="min-w-0 flex-1">
                                                  <MathRenderer content={box.note} />
                                                </div>
                                              </div>
                                            )}
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ) : null
                          ) : (
                            /* MỤC 2: 2 ĐỀ ÔN CỦA BÀI HỌC */
                            <div className="space-y-3">
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
                                          {isCurrent
                                            ? 'Đang Mở Đề Ôn Này'
                                            : `Làm Đề Ôn Số ${idx + 1}`}
                                        </span>
                                      </button>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}
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
        <div className="px-4 sm:px-6 py-2.5 bg-[#091530] border-t border-sky-900/80 flex items-center justify-between gap-3 text-xs text-sky-300">
          <span>
            Mỗi bài học gồm: <strong className="text-cyan-300">Lý thuyết & Công thức SGK</strong> +{' '}
            <strong className="text-emerald-300">2 Đề ôn (22 câu/đề)</strong>
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
