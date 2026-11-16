import React, { useState, useMemo, useEffect } from 'react';
import {
  X,
  BookOpen,
  Search,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  BookmarkCheck,
  AlertCircle
} from 'lucide-react';
import { MathRenderer } from './MathRenderer';
import { THEORY_CATALOG, ALL_THEORY_LESSONS, LessonTheory } from '../data/theoryCatalog';

interface FormulaSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialLessonId?: string | null;
  onSelectExam?: (examId: string) => void;
}

export const FormulaSheetModal: React.FC<FormulaSheetModalProps> = ({
  isOpen,
  onClose,
  initialLessonId
}) => {
  const [selectedLessonId, setSelectedLessonId] = useState<string>('bai-1');
  const [volumeFilter, setVolumeFilter] = useState<'all' | 1 | 2>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showMobileLessonList, setShowMobileLessonList] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen && initialLessonId) {
      const exists = ALL_THEORY_LESSONS.some(l => l.lessonId === initialLessonId);
      if (exists) {
        setSelectedLessonId(initialLessonId);
      }
    }
  }, [isOpen, initialLessonId]);

  const filteredChapters = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return THEORY_CATALOG.filter(ch => volumeFilter === 'all' || ch.volume === volumeFilter)
      .map(ch => ({
        ...ch,
        lessons: ch.lessons.filter(lesson => {
          if (!q) return true;
          return (
            lesson.title.toLowerCase().includes(q) ||
            lesson.keyConcepts.some(k => k.toLowerCase().includes(q)) ||
            lesson.sections.some(
              s =>
                s.heading.toLowerCase().includes(q) ||
                s.boxes.some(
                  b =>
                    b.title.toLowerCase().includes(q) ||
                    b.content.toLowerCase().includes(q)
                )
            )
          );
        })
      }))
      .filter(ch => ch.lessons.length > 0);
  }, [volumeFilter, searchQuery]);

  const activeLesson: LessonTheory = useMemo(() => {
    return (
      ALL_THEORY_LESSONS.find(l => l.lessonId === selectedLessonId) ||
      ALL_THEORY_LESSONS[0]
    );
  }, [selectedLessonId]);

  if (!isOpen) return null;

  const handleChooseLesson = (lessonId: string) => {
    setSelectedLessonId(lessonId);
    setShowMobileLessonList(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#071126] border border-cyan-500/30 rounded-2xl w-full max-w-6xl h-[92vh] flex flex-col overflow-hidden shadow-2xl shadow-cyan-950/60">
        {/* Header */}
        <div className="px-4 sm:px-6 py-3.5 border-b border-cyan-500/20 flex items-center justify-between bg-[#0a1936] shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/25 to-emerald-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-base sm:text-lg font-extrabold text-white tracking-tight truncate">
                  Lý Thuyết & Công Thức Cần Nhớ
                </h2>
                <span className="px-2 py-0.5 rounded-md bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-[11px] font-bold">
                  Chuẩn 100% SGK Kết Nối Tri Thức
                </span>
              </div>
              <p className="text-xs text-cyan-200/70 truncate">
                Hệ thống đầy đủ 19 bài học Toán 12 (Tập 1 & Tập 2) • Không bao gồm bài ôn tập cuối chương
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-rose-500/20 text-slate-300 hover:text-rose-300 border border-white/10 transition-colors shrink-0"
            title="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Lesson Switcher Bar */}
        <div className="lg:hidden px-3 py-2.5 bg-[#08152e] border-b border-cyan-500/20 flex items-center justify-between gap-2 shrink-0">
          <button
            onClick={() => setShowMobileLessonList(prev => !prev)}
            className="flex-1 flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-cyan-500/15 border border-cyan-400/40 text-left"
          >
            <div className="min-w-0">
              <div className="text-[10px] uppercase tracking-wider text-cyan-300 font-bold">
                Đang xem bài học ({activeLesson.lessonNumber}/19)
              </div>
              <div className="text-xs sm:text-sm font-bold text-white truncate">
                {activeLesson.title}
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-lg bg-cyan-500/20 text-cyan-200 text-xs font-bold shrink-0">
              {showMobileLessonList ? 'Thu gọn' : 'Chọn bài khác'}
            </span>
          </button>
        </div>

        {/* Main Body */}
        <div className="flex-1 flex overflow-hidden relative">
          {/* Left Sidebar: 19 Textbook Lessons */}
          <aside
            className={`${
              showMobileLessonList
                ? 'absolute inset-0 z-20 flex bg-[#071126]'
                : 'hidden lg:flex'
            } w-full lg:w-[340px] xl:w-[370px] border-r border-cyan-500/20 flex-col bg-[#08142c] shrink-0`}
          >
            {/* Filter & Search */}
            <div className="p-3 border-b border-cyan-500/15 space-y-2.5 shrink-0">
              <div className="grid grid-cols-3 gap-1.5 bg-[#050d1e] p-1 rounded-xl border border-cyan-500/20">
                <button
                  onClick={() => setVolumeFilter('all')}
                  className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                    volumeFilter === 'all'
                      ? 'bg-cyan-500 text-slate-950 shadow-sm'
                      : 'text-cyan-200/70 hover:text-white'
                  }`}
                >
                  Tất cả (19 bài)
                </button>
                <button
                  onClick={() => setVolumeFilter(1)}
                  className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                    volumeFilter === 1
                      ? 'bg-cyan-500 text-slate-950 shadow-sm'
                      : 'text-cyan-200/70 hover:text-white'
                  }`}
                >
                  Tập 1 (Bài 1–10)
                </button>
                <button
                  onClick={() => setVolumeFilter(2)}
                  className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                    volumeFilter === 2
                      ? 'bg-cyan-500 text-slate-950 shadow-sm'
                      : 'text-cyan-200/70 hover:text-white'
                  }`}
                >
                  Tập 2 (Bài 11–19)
                </button>
              </div>

              <div className="relative">
                <Search className="w-4 h-4 text-cyan-400/70 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Tìm tên bài học, công thức, khái niệm..."
                  className="w-full pl-9 pr-8 py-2 rounded-xl bg-[#050d1e] border border-cyan-500/25 text-xs sm:text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Chapter & Lesson List */}
            <div className="flex-1 overflow-y-auto p-3 space-y-4">
              {filteredChapters.length === 0 ? (
                <div className="text-center py-8 px-4 text-slate-400 text-sm">
                  Không tìm thấy bài học hoặc công thức phù hợp với từ khoá "{searchQuery}".
                </div>
              ) : (
                filteredChapters.map(chapter => (
                  <div key={chapter.chapterId} className="space-y-1.5">
                    <div className="px-2.5 py-1.5 rounded-lg bg-cyan-950/60 border border-cyan-500/20 flex items-center justify-between gap-2">
                      <span className="text-[11px] font-extrabold text-cyan-300 uppercase tracking-wide leading-snug">
                        {chapter.chapterTitle}
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-200 text-[10px] font-bold shrink-0">
                        Tập {chapter.volume}
                      </span>
                    </div>

                    <div className="space-y-1">
                      {chapter.lessons.map(lesson => {
                        const isSelected = lesson.lessonId === activeLesson.lessonId;
                        return (
                          <button
                            key={lesson.lessonId}
                            onClick={() => handleChooseLesson(lesson.lessonId)}
                            className={`w-full text-left px-3 py-2.5 rounded-xl border transition-all flex items-start justify-between gap-2 ${
                              isSelected
                                ? 'bg-gradient-to-r from-cyan-500/25 to-emerald-500/15 border-cyan-400 text-white shadow-md shadow-cyan-950/50'
                                : 'bg-[#0b1b3a]/60 hover:bg-[#0f244d] border-white/5 text-slate-200'
                            }`}
                          >
                            <div className="min-w-0 space-y-0.5">
                              <div className="text-xs sm:text-sm font-bold leading-snug">
                                {lesson.title}
                              </div>
                              <div className="text-[11px] text-cyan-300/75 flex items-center gap-2">
                                <span>SGK Tập {lesson.volume} • Trang {lesson.pageNumber}</span>
                                <span>•</span>
                                <span>{lesson.sections.reduce((acc, s) => acc + s.boxes.length, 0)} khung công thức</span>
                              </div>
                            </div>
                            <ChevronRight
                              className={`w-4 h-4 mt-0.5 shrink-0 transition-transform ${
                                isSelected ? 'text-cyan-300 translate-x-0.5' : 'text-slate-500'
                              }`}
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>
          </aside>

          {/* Right Content Area: Active Lesson Theory & Formulas */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-[#071126]">
            {/* Lesson Banner */}
            <div className="rounded-2xl bg-gradient-to-br from-[#0c2147] via-[#0a1b3a] to-[#08152e] border border-cyan-400/30 p-4 sm:p-5 shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-1 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-200 text-xs font-extrabold">
                    SGK Toán 12 - Tập {activeLesson.volume} (Trang {activeLesson.pageNumber})
                  </span>
                  <span className="text-xs font-semibold text-emerald-300">
                    {activeLesson.chapterTitle}
                  </span>
                </div>
              </div>

              <h3 className="text-lg sm:text-2xl font-extrabold text-white mb-3">
                {activeLesson.title}
              </h3>

              {/* Key concepts summary */}
              <div className="space-y-1.5">
                <div className="text-xs font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Trọng tâm kiến thức & công thức trong bài:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {activeLesson.keyConcepts.map((concept, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 px-3 py-2 rounded-xl bg-[#061024]/80 border border-cyan-500/20 text-xs sm:text-sm text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{concept}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sections & Knowledge Boxes */}
            <div className="space-y-6">
              {activeLesson.sections.map((section, sIdx) => (
                <div
                  key={sIdx}
                  className="rounded-2xl bg-[#0a1835] border border-cyan-500/25 overflow-hidden shadow-md"
                >
                  <div className="px-4 sm:px-5 py-3.5 bg-gradient-to-r from-cyan-950/80 to-[#0a1835] border-b border-cyan-500/20">
                    <h4 className="text-base sm:text-lg font-extrabold text-cyan-300">
                      {section.heading}
                    </h4>
                    {section.summary && (
                      <div className="text-xs sm:text-sm text-slate-300 mt-1">
                        <MathRenderer content={section.summary} />
                      </div>
                    )}
                  </div>

                  <div className="p-4 sm:p-5 space-y-4">
                    {section.boxes.map((box, bIdx) => (
                      <div
                        key={bIdx}
                        className="rounded-xl bg-[#071229] border border-amber-400/30 p-4 space-y-3 shadow-inner"
                      >
                        <div className="flex items-center gap-2 text-amber-300 font-bold text-sm sm:text-base">
                          <BookmarkCheck className="w-4 h-4 text-amber-400 shrink-0" />
                          <span>{box.title}</span>
                        </div>

                        <div className="text-sm sm:text-base text-slate-100 leading-relaxed">
                          <MathRenderer content={box.content} />
                        </div>

                        {box.formula && (
                          <div className="p-3.5 rounded-xl bg-[#040b1a] border border-cyan-400/30 text-cyan-100 overflow-x-auto">
                            <MathRenderer content={box.formula} />
                          </div>
                        )}

                        {box.note && (
                          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs sm:text-sm text-emerald-200 leading-relaxed">
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

            {/* Prev / Next Lesson Footer Navigation */}
            <div className="pt-2 pb-4 flex items-center justify-between gap-3 border-t border-cyan-500/20">
              {activeLesson.lessonNumber > 1 ? (
                <button
                  onClick={() => {
                    const prev = ALL_THEORY_LESSONS.find(
                      l => l.lessonNumber === activeLesson.lessonNumber - 1
                    );
                    if (prev) setSelectedLessonId(prev.lessonId);
                  }}
                  className="px-3.5 py-2 rounded-xl bg-[#0b1b3a] hover:bg-cyan-500/20 border border-cyan-500/30 text-xs sm:text-sm font-bold text-cyan-200 transition-colors"
                >
                  ← Bài {activeLesson.lessonNumber - 1}
                </button>
              ) : (
                <div />
              )}

              <span className="text-xs text-slate-400 font-semibold">
                Bài {activeLesson.lessonNumber} / 19 (SGK Toán 12)
              </span>

              {activeLesson.lessonNumber < 19 ? (
                <button
                  onClick={() => {
                    const next = ALL_THEORY_LESSONS.find(
                      l => l.lessonNumber === activeLesson.lessonNumber + 1
                    );
                    if (next) setSelectedLessonId(next.lessonId);
                  }}
                  className="px-3.5 py-2 rounded-xl bg-[#0b1b3a] hover:bg-cyan-500/20 border border-cyan-500/30 text-xs sm:text-sm font-bold text-cyan-200 transition-colors"
                >
                  Bài {activeLesson.lessonNumber + 1} →
                </button>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
