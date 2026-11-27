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
  AlertTriangle,
  Info,
  Lightbulb,
  ListOrdered,
  Sigma,
  ZoomIn,
} from 'lucide-react';
import { LESSON_CHAPTERS, LessonInfo } from '../data/lessons';
import {
  getTheoryByLessonId,
  TheoryCallout,
  TheoryFigure,
  TheoryFormulaBox,
} from '../data/theoryCatalog';
import { MathRenderer } from './MathRenderer';

const CALLOUT_STYLES: Record<
  TheoryCallout['type'],
  {
    label: string;
    container: string;
    header: string;
    bullet: string;
    Icon: React.ComponentType<{ className?: string }>;
  }
> = {
  'chu-y': {
    label: 'Chú ý',
    container: 'bg-amber-950/30 border-amber-500/45 text-amber-50',
    header: 'text-amber-300',
    bullet: 'bg-amber-400',
    Icon: AlertTriangle,
  },
  'nhan-xet': {
    label: 'Nhận xét',
    container: 'bg-sky-950/40 border-sky-400/45 text-sky-50',
    header: 'text-sky-300',
    bullet: 'bg-sky-400',
    Icon: Info,
  },
  'y-nghia': {
    label: 'Ý nghĩa',
    container: 'bg-emerald-950/35 border-emerald-400/45 text-emerald-50',
    header: 'text-emerald-300',
    bullet: 'bg-emerald-400',
    Icon: Lightbulb,
  },
  'ghi-nho': {
    label: 'Ghi nhớ',
    container: 'bg-violet-950/35 border-violet-400/45 text-violet-50',
    header: 'text-violet-300',
    bullet: 'bg-violet-400',
    Icon: Sparkles,
  },
};

const TheoryCalloutCard: React.FC<{ callout: TheoryCallout }> = ({ callout }) => {
  const style = CALLOUT_STYLES[callout.type] || CALLOUT_STYLES['chu-y'];
  const Icon = style.Icon;
  const heading = callout.title || style.label;

  return (
    <div className={`rounded-xl border p-3 space-y-1.5 text-xs sm:text-sm leading-relaxed ${style.container}`}>
      <div className={`flex items-center gap-1.5 font-extrabold uppercase tracking-wide text-[11px] sm:text-xs ${style.header}`}>
        <Icon className="w-3.5 h-3.5 shrink-0" />
        <span>{heading}</span>
      </div>
      {callout.items.length === 1 ? (
        <div className="min-w-0">
          <MathRenderer content={callout.items[0]} />
        </div>
      ) : (
        <ul className="space-y-1.5">
          {callout.items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-2 ${style.bullet}`} />
              <div className="min-w-0 flex-1">
                <MathRenderer content={item} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const getBoxTheme = (kind: TheoryFormulaBox['kind']) => {
  if (kind === 'process') {
    return {
      container:
        'rounded-xl bg-[#08152f] border border-indigo-400/40 border-l-4 border-l-indigo-400 p-3.5 space-y-2.5 shadow-sm',
      titleColor: 'text-indigo-200',
      badge: 'QUY TRÌNH / CÁC BƯỚC',
      badgeClass: 'bg-indigo-500/20 text-indigo-300 border-indigo-400/40',
      Icon: ListOrdered,
      iconColor: 'text-indigo-400',
    };
  }
  if (kind === 'formula') {
    return {
      container:
        'rounded-xl bg-[#07152e] border border-cyan-400/40 border-l-4 border-l-cyan-400 p-3.5 space-y-2.5 shadow-sm',
      titleColor: 'text-cyan-200',
      badge: 'CÔNG THỨC TRỌNG TÂM',
      badgeClass: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40',
      Icon: Sigma,
      iconColor: 'text-cyan-400',
    };
  }
  return {
    container:
      'rounded-xl bg-gradient-to-br from-[#0e1b38] via-[#09142c] to-[#121b31] border border-amber-400/50 border-l-4 border-l-amber-400 p-3.5 sm:p-4 space-y-2.5 shadow-md shadow-amber-950/20',
    titleColor: 'text-amber-300',
    badge: 'KHUNG KIẾN THỨC SGK',
    badgeClass: 'bg-amber-500/20 text-amber-300 border-amber-400/45',
    Icon: BookmarkCheck,
    iconColor: 'text-amber-400',
  };
};

const TheoryFiguresGallery: React.FC<{
  figures: TheoryFigure[];
  onZoom: (fig: TheoryFigure) => void;
}> = ({ figures, onZoom }) => {
  if (!figures || figures.length === 0) return null;

  return (
    <div
      className={`grid gap-3 pt-1 ${
        figures.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'
      }`}
    >
      {figures.map((fig, idx) => (
        <figure
          key={idx}
          className={`rounded-xl bg-[#050d20] border border-cyan-500/35 overflow-hidden flex flex-col ${
            figures.length === 1 ? 'max-w-xl mx-auto w-full' : ''
          }`}
        >
          <button
            type="button"
            onClick={() => onZoom(fig)}
            className="group relative bg-white p-2 sm:p-3 flex items-center justify-center cursor-zoom-in w-full focus:outline-none"
            title="Chạm để phóng to hình minh họa SGK"
          >
            <img
              src={fig.src}
              alt={fig.caption}
              loading="lazy"
              decoding="async"
              className="max-w-full max-h-[260px] sm:max-h-[300px] w-auto h-auto object-contain rounded"
            />
            <span className="absolute top-2 right-2 px-2 py-1 rounded-lg bg-slate-900/80 text-white text-[10px] font-bold flex items-center gap-1 opacity-90 group-hover:opacity-100 shadow">
              <ZoomIn className="w-3 h-3" />
              <span>Phóng to</span>
            </span>
          </button>
          <figcaption className="px-3 py-2 text-[11px] sm:text-xs text-sky-200 bg-[#07132b] border-t border-cyan-500/20 flex items-start justify-between gap-2">
            <div className="min-w-0 flex-1 leading-snug">
              <MathRenderer content={fig.caption} />
            </div>
            {fig.source && (
              <span className="px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-400/35 text-[10px] font-bold whitespace-nowrap shrink-0">
                {fig.source}
              </span>
            )}
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

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
  const [zoomedFigure, setZoomedFigure] = useState<TheoryFigure | null>(null);

  React.useEffect(() => {
    if (isOpen && initialLessonId) {
      setActiveChapterId('all');
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
                Mỗi bài học gồm: Khung kiến thức trọng tâm, Chú ý, Nhận xét chuẩn 100% SGK + 2 Đề ôn
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
                              <span>
                                {lessonTheory ? `SGK Tập ${lessonTheory.volume} · ` : ''}
                                Trang {lesson.pageNumber}
                              </span>
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
                          <div className="flex items-center gap-2 p-1 rounded-xl bg-[#050d1e] border border-sky-900/80 w-fit max-w-full overflow-x-auto">
                            <button
                              type="button"
                              onClick={() => setActiveTabForLesson(lesson.id, 'theory')}
                              className={`px-3.5 py-1.5 rounded-lg text-xs font-extrabold flex items-center gap-1.5 whitespace-nowrap transition-all ${
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
                              className={`px-3.5 py-1.5 rounded-lg text-xs font-extrabold flex items-center gap-1.5 whitespace-nowrap transition-all ${
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
                                <div className="p-3.5 rounded-xl bg-[#0b1739] border border-cyan-500/30 space-y-2.5">
                                  <div className="text-xs font-extrabold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5 flex-wrap">
                                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                                    <span>
                                      Kiến thức & Công thức trọng tâm (SGK Tập {lessonTheory.volume} · Trang {lessonTheory.pageNumber}):
                                    </span>
                                  </div>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {lessonTheory.keyConcepts.map((concept, idx) => (
                                      <div
                                        key={idx}
                                        className="px-3 py-2 rounded-lg bg-[#071126] border border-sky-900/80 text-xs sm:text-sm text-slate-100 flex items-start gap-2"
                                      >
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-1" />
                                        <div className="min-w-0 flex-1">
                                          <MathRenderer content={concept} />
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Các mục lý thuyết, khung kiến thức đóng khung SGK, Chú ý & Nhận xét */}
                                <div className="space-y-4">
                                  {lessonTheory.sections.map((section, sIdx) => (
                                    <div
                                      key={sIdx}
                                      className="rounded-xl bg-[#0a1835] border border-cyan-500/25 overflow-hidden"
                                    >
                                      <div className="px-4 py-2.5 bg-gradient-to-r from-cyan-950/80 to-[#0a1835] border-b border-cyan-500/20">
                                        <h4 className="text-sm sm:text-base font-extrabold text-cyan-300">
                                          <MathRenderer content={section.heading} />
                                        </h4>
                                        {section.summary && (
                                          <div className="text-xs sm:text-sm text-slate-300 mt-0.5">
                                            <MathRenderer content={section.summary} />
                                          </div>
                                        )}
                                      </div>

                                      <div className="p-3.5 sm:p-4 space-y-3.5">
                                        {section.boxes.map((box, bIdx) => {
                                          const theme = getBoxTheme(box.kind);
                                          const BoxIcon = theme.Icon;
                                          return (
                                            <div key={bIdx} className={theme.container}>
                                              <div className="flex items-start justify-between gap-2 flex-wrap">
                                                <div className={`flex items-start gap-2 font-extrabold text-xs sm:text-sm ${theme.titleColor} min-w-0 flex-1`}>
                                                  <BoxIcon className={`w-4 h-4 shrink-0 mt-0.5 ${theme.iconColor}`} />
                                                  <div className="min-w-0 flex-1">
                                                    <MathRenderer content={box.title} />
                                                  </div>
                                                </div>
                                                <span
                                                  className={`px-2 py-0.5 rounded-md border text-[10px] font-black tracking-wide uppercase whitespace-nowrap ${theme.badgeClass}`}
                                                >
                                                  {theme.badge}
                                                </span>
                                              </div>

                                              <div className="text-xs sm:text-sm text-slate-100 leading-relaxed">
                                                <MathRenderer content={box.content} />
                                              </div>

                                              {box.formula && (
                                                <div className="p-3 rounded-xl bg-[#040b1a] border border-cyan-400/35 text-cyan-100 overflow-x-auto text-xs sm:text-sm">
                                                  <MathRenderer content={box.formula} />
                                                </div>
                                              )}

                                              {box.figures && box.figures.length > 0 && (
                                                <TheoryFiguresGallery
                                                  figures={box.figures}
                                                  onZoom={setZoomedFigure}
                                                />
                                              )}

                                              {box.note && (
                                                <div className="flex items-start gap-2 p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/35 text-xs sm:text-sm text-emerald-100 leading-relaxed">
                                                  <AlertCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                                  <div className="min-w-0 flex-1">
                                                    <MathRenderer content={box.note} />
                                                  </div>
                                                </div>
                                              )}

                                              {box.callouts && box.callouts.length > 0 && (
                                                <div className="space-y-2 pt-1">
                                                  {box.callouts.map((callout, cIdx) => (
                                                    <TheoryCalloutCard key={cIdx} callout={callout} />
                                                  ))}
                                                </div>
                                              )}
                                            </div>
                                          );
                                        })}

                                        {section.figures && section.figures.length > 0 && (
                                          <TheoryFiguresGallery
                                            figures={section.figures}
                                            onZoom={setZoomedFigure}
                                          />
                                        )}

                                        {section.callouts && section.callouts.length > 0 && (
                                          <div className="space-y-2.5">
                                            {section.callouts.map((callout, cIdx) => (
                                              <TheoryCalloutCard key={cIdx} callout={callout} />
                                            ))}
                                          </div>
                                        )}

                                        {section.remarks && section.remarks.length > 0 && (
                                          <TheoryCalloutCard
                                            callout={{
                                              type: 'nhan-xet',
                                              title: 'Nhận xét',
                                              items: section.remarks,
                                            }}
                                          />
                                        )}
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

      {/* Fullscreen Lightbox để phóng to hình minh họa SGK trên điện thoại */}
      {zoomedFigure && (
        <div
          className="fixed inset-0 z-[60] bg-black/92 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={() => setZoomedFigure(null)}
        >
          <div
            className="bg-[#071126] border border-cyan-400/50 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-2.5 bg-[#0b1739] border-b border-sky-900 flex items-center justify-between gap-2">
              <div className="text-xs sm:text-sm font-bold text-cyan-200 line-clamp-2">
                <MathRenderer content={zoomedFigure.caption} />
              </div>
              <button
                type="button"
                onClick={() => setZoomedFigure(null)}
                className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl bg-[#071126] text-sky-300 hover:text-white border border-sky-800 shrink-0"
                aria-label="Đóng phóng to hình"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-auto bg-white p-3 sm:p-5 flex items-center justify-center">
              <img
                src={zoomedFigure.src}
                alt={zoomedFigure.caption}
                className="max-w-full max-h-[75vh] w-auto h-auto object-contain"
              />
            </div>
            {zoomedFigure.source && (
              <div className="px-4 py-2 bg-[#091530] border-t border-sky-900 text-xs text-amber-300 font-semibold text-right">
                Nguồn: {zoomedFigure.source}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
