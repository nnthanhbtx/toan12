import React, { useState, useCallback } from 'react';
import { StepOrderingQuestion, SolutionStep } from '../types/exam';
import { MathRenderer } from './MathRenderer';
import { TikzFigure } from './TikzFigure';
import {
  ArrowUp,
  ArrowDown,
  Shuffle,
  CheckCircle2,
  Sparkles,
  Layers,
  Bookmark,
  ArrowLeftRight,
} from 'lucide-react';
import {
  playAnswerFeedbackSound,
  playClickSound,
} from '../utils/audio';

interface Part4StepOrderingProps {
  questions: StepOrderingQuestion[];
  answers: Record<string, string[]>;
  onOrderChange: (questionId: string, newOrderedStepIds: string[]) => void;
  isSubmitted: boolean;
  examMode: 'exam' | 'practice';
  bookmarkedQuestions: Set<string>;
  onToggleBookmark: (qId: string) => void;
  fontSize: 'normal' | 'large' | 'xlarge';
  totalQuestions?: number;
  sessionKey?: number;
}

const cleanRoleDescription = (desc?: string) => {
  if (!desc) return '';
  return desc.replace(/^(?:Bước|BƯỚC|Dòng|Ý)\s*\d+[\:\.]?\s*/i, '').trim();
};

interface Part4QuestionCardProps {
  q: StepOrderingQuestion;
  idx: number;
  totalInPart: number;
  orderedIds: string[];
  isSubmitted: boolean;
  examMode: 'exam' | 'practice';
  isBookmarked: boolean;
  onToggleBookmark: (qId: string) => void;
  onOrderChange: (questionId: string, newOrderedStepIds: string[]) => void;
  promptTextSizeClass: string;
  stepTextSizeClass: string;
  sessionKey?: number;
}

const Part4QuestionCard: React.FC<Part4QuestionCardProps> = React.memo(
  ({
    q,
    idx,
    totalInPart,
    orderedIds,
    isSubmitted,
    examMode,
    isBookmarked,
    onToggleBookmark,
    onOrderChange,
    promptTextSizeClass,
    stepTextSizeClass,
    sessionKey,
  }) => {
    const [showPreview, setShowPreview] = useState<boolean>(false);
    const [hasChecked, setHasChecked] = useState<boolean>(false);
    // Hỗ trợ thao tác 1 chạm đổi chỗ nhanh trên màn hình cảm ứng iPhone 10-18
    const [selectedStepIdx, setSelectedStepIdx] = useState<number | null>(null);

    React.useEffect(() => {
      setShowPreview(false);
      setHasChecked(false);
      setSelectedStepIdx(null);
    }, [sessionKey]);

    const stepMap = new Map<string, SolutionStep>();
    q.steps.forEach((s) => stepMap.set(s.id, s));

    let correctPositions = 0;
    orderedIds.forEach((id, currentIdx) => {
      const stepObj = stepMap.get(id);
      if (stepObj && stepObj.originalIndex === currentIdx + 1) {
        correctPositions++;
      }
    });
    const isFullyCorrect = correctPositions === q.steps.length;
    const showSolution = isSubmitted || examMode === 'practice' || hasChecked;

    const swapPositions = (idxA: number, idxB: number) => {
      if (isSubmitted || idxA === idxB) return;
      playClickSound();
      const newOrder = [...orderedIds];
      const temp = newOrder[idxA];
      newOrder[idxA] = newOrder[idxB];
      newOrder[idxB] = temp;
      if (hasChecked) setHasChecked(false);
      setSelectedStepIdx(null);
      onOrderChange(q.id, newOrder);
    };

    const moveStep = (index: number, direction: 'up' | 'down') => {
      if (isSubmitted) return;
      const targetIndex = direction === 'up' ? index - 1 : index + 1;
      if (targetIndex < 0 || targetIndex >= orderedIds.length) return;
      swapPositions(index, targetIndex);
    };

    const handleStepTap = (index: number) => {
      if (isSubmitted) return;
      playClickSound();
      if (selectedStepIdx === null) {
        setSelectedStepIdx(index);
      } else if (selectedStepIdx === index) {
        setSelectedStepIdx(null);
      } else {
        swapPositions(selectedStepIdx, index);
      }
    };

    const handleShuffle = () => {
      if (isSubmitted) return;
      playClickSound();
      setSelectedStepIdx(null);
      if (hasChecked) setHasChecked(false);
      const shuffled = [...q.steps.map((s) => s.id)].sort(() => Math.random() - 0.5);
      onOrderChange(q.id, shuffled);
    };

    const handleCheckOrder = () => {
      setHasChecked(true);
      setSelectedStepIdx(null);
      playAnswerFeedbackSound(isFullyCorrect);
    };

    return (
      <div id={`q-part4-${idx}`} className="space-y-3 scroll-mt-36 sm:scroll-mt-32">
        {/* Top Question Card */}
        <div className="rounded-2xl border border-sky-900/60 bg-[#071126] p-3.5 sm:p-6 md:p-7 shadow-2xl">
          <div className="flex items-center justify-between gap-2 pb-2.5 sm:pb-3 border-b border-sky-950/80 flex-wrap">
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <div className="flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border-2 border-amber-400 bg-amber-500/15 text-amber-300 font-extrabold text-xs sm:text-base tracking-tight shadow-md">
                <span>
                  Câu {idx + 1} / {totalInPart}
                </span>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full border-2 border-cyan-400 bg-cyan-500/15 text-cyan-300 font-extrabold text-[11px] sm:text-sm uppercase tracking-wide shadow-md">
                <span>PHẦN IV: Tự luận sắp xếp bước</span>
              </div>

              {showSolution && (
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-full border ${
                    isFullyCorrect
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400'
                      : 'bg-amber-500/20 text-amber-300 border-amber-400'
                  }`}
                >
                  Đúng {correctPositions}/{q.steps.length} vị trí
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={() => {
                playClickSound();
                onToggleBookmark(q.id);
              }}
              className={`min-h-[36px] px-2.5 py-1 rounded-xl border text-xs font-bold flex items-center gap-1 transition-colors duration-75 select-none ${
                isBookmarked
                  ? 'bg-amber-500/25 border-amber-400 text-amber-300'
                  : 'bg-[#0b1739] border-sky-800/70 text-sky-300'
              }`}
              title="Đánh dấu câu hỏi để xem lại nhanh"
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-400 text-amber-400' : ''}`} />
              <span className="hidden sm:inline">{isBookmarked ? 'Đã đánh dấu' : 'Đánh dấu'}</span>
            </button>
          </div>

          {/* Problem Statement */}
          <div
            className={`py-3.5 sm:py-5 text-white font-bold font-times leading-relaxed tracking-wide ${promptTextSizeClass} [&_.katex]:text-white [&_.katex]:font-semibold [&_.katex]:text-[1.1em]`}
          >
            <div className="text-sky-300/90 text-sm font-semibold mb-1">
              Bài toán:
            </div>
            <MathRenderer content={q.problemStatement} />
          </div>

          {(q.tikzType || q.tikzCode || q.imageUrl) && (
            <TikzFigure
              type={q.tikzType as any}
              tikzCode={q.tikzCode}
              imageUrl={q.imageUrl}
              caption={`Hình vẽ minh hoạ Câu ${idx + 1}`}
            />
          )}

          {/* Conclusion Target */}
          <div className="mt-3.5 p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-800/50 flex items-start gap-2.5 text-cyan-200">
            <Sparkles className="w-4 h-4 text-cyan-300 shrink-0 mt-0.5" />
            <div className="text-sm sm:text-base font-medium font-times">
              <span className="font-bold text-cyan-300">Mục tiêu kết luận: </span>
              <MathRenderer content={q.conclusionTarget} />
            </div>
          </div>
        </div>

        {/* Steps Container */}
        <div className="rounded-2xl border border-sky-900/60 bg-[#071026] p-3 sm:p-6 shadow-2xl space-y-4">
          <div className="flex items-center justify-between gap-2.5 flex-wrap pb-2.5 border-b border-sky-950/80">
            <div className="text-xs sm:text-sm font-bold text-sky-300 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>
                {selectedStepIdx !== null
                  ? `Đang chọn vị trí #${selectedStepIdx + 1} — Chạm bước muốn đổi chỗ!`
                  : 'Chạm 2 bước bất kỳ để đổi chỗ nhanh hoặc nhấn ↑ / ↓:'}
              </span>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {!isSubmitted && (
                <button
                  type="button"
                  onClick={handleShuffle}
                  className="min-h-[40px] px-3 py-1.5 rounded-xl border border-sky-800/80 bg-sky-950/80 active:bg-sky-900 text-sky-300 text-xs font-bold flex items-center gap-1 select-none"
                  title="Xáo trộn lại các vị trí"
                >
                  <Shuffle className="w-3.5 h-3.5" />
                  <span>Xáo trộn</span>
                </button>
              )}

              {!isSubmitted && (
                <button
                  type="button"
                  onClick={handleCheckOrder}
                  className="min-h-[40px] flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cyan-600 active:bg-cyan-500 text-white font-extrabold text-xs sm:text-sm shadow-md select-none"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Kiểm tra thứ tự</span>
                </button>
              )}

              <button
                type="button"
                onClick={() => setShowPreview((p) => !p)}
                className="min-h-[40px] text-xs font-bold px-3 py-1.5 rounded-xl bg-sky-950 active:bg-sky-900 text-cyan-300 border border-sky-800/80 select-none"
              >
                {showPreview ? 'Ẩn bản xem' : 'Xem chuỗi bài giải'}
              </button>
            </div>
          </div>

          {/* Step Items List */}
          <div className="space-y-3">
            {orderedIds.map((stepId, index) => {
              const step = stepMap.get(stepId);
              if (!step) return null;

              const isAtCorrectPosition = step.originalIndex === index + 1;
              const isSelectedForSwap = selectedStepIdx === index;

              return (
                <div
                  key={step.id}
                  onClick={() => handleStepTap(index)}
                  className={`flex items-start gap-2.5 sm:gap-4 p-3 sm:p-4 rounded-2xl border transition-colors duration-75 select-none ${
                    !isSubmitted ? 'cursor-pointer' : ''
                  } ${
                    isSelectedForSwap
                      ? 'bg-[#122b66] border-2 border-amber-400 ring-2 ring-amber-400/50 shadow-lg'
                      : showSolution
                      ? isAtCorrectPosition
                        ? 'bg-emerald-950/40 border-2 border-emerald-400 ring-1 ring-emerald-500/30'
                        : 'bg-amber-950/40 border-2 border-amber-400 ring-1 ring-amber-500/30'
                      : 'bg-[#0b1739] border-sky-800/60 active:border-cyan-400 shadow-md'
                  }`}
                >
                  {/* Step Number Badge */}
                  <div className="flex flex-col items-center gap-1 shrink-0 pt-0.5">
                    <span
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full font-black font-times text-sm sm:text-base flex items-center justify-center shadow-md ${
                        isSelectedForSwap
                          ? 'bg-cyan-400 text-[#040817] ring-2 ring-white'
                          : 'bg-[#f59e0b] text-[#0f172a]'
                      }`}
                    >
                      {index + 1}
                    </span>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 min-w-0 break-words py-0.5 space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      {cleanRoleDescription(step.roleDescription) && (
                        <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                          {cleanRoleDescription(step.roleDescription)}
                        </div>
                      )}
                      {isSelectedForSwap && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-400 text-[#040817] text-[11px] font-black">
                          <ArrowLeftRight className="w-3 h-3" />
                          <span>Chạm bước khác để đổi chỗ</span>
                        </span>
                      )}
                    </div>

                    <div
                      className={`text-white font-bold font-times leading-relaxed [&_.katex]:text-white [&_.katex]:text-[1.08em] ${stepTextSizeClass}`}
                    >
                      <MathRenderer content={step.content} />
                    </div>
                    {showSolution && !isAtCorrectPosition && (
                      <div className="text-xs font-bold text-amber-300 mt-1">
                        (Vị trí đúng: {step.originalIndex})
                      </div>
                    )}
                  </div>

                  {/* Reordering Buttons: 44x44px hitbox for mobile thumbs */}
                  {!isSubmitted && (
                    <div
                      className="flex flex-col gap-1.5 shrink-0"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        type="button"
                        onClick={() => moveStep(index, 'up')}
                        disabled={index === 0}
                        className={`w-11 h-11 flex items-center justify-center rounded-xl border transition-colors duration-75 select-none ${
                          index === 0
                            ? 'text-sky-900 border-sky-950 bg-sky-950/40 cursor-not-allowed opacity-30'
                            : 'text-sky-200 border-sky-700 bg-sky-950 active:bg-cyan-500/30 active:border-cyan-400'
                        }`}
                        title="Di chuyển bước này lên"
                      >
                        <ArrowUp className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => moveStep(index, 'down')}
                        disabled={index === orderedIds.length - 1}
                        className={`w-11 h-11 flex items-center justify-center rounded-xl border transition-colors duration-75 select-none ${
                          index === orderedIds.length - 1
                            ? 'text-sky-900 border-sky-950 bg-sky-950/40 cursor-not-allowed opacity-30'
                            : 'text-sky-200 border-sky-700 bg-sky-950 active:bg-cyan-500/30 active:border-cyan-400'
                        }`}
                        title="Di chuyển bước này xuống"
                      >
                        <ArrowDown className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Preview */}
          {showPreview && (
            <div className="mt-4 p-4 rounded-xl bg-[#050c1c] border border-sky-800 text-white space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-cyan-300">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  Chuỗi bài giải liên tục:
                </span>
                <button
                  type="button"
                  onClick={() => setShowPreview(false)}
                  className="text-xs text-sky-400 hover:text-white px-2 py-1"
                >
                  Đóng
                </button>
              </div>
              <div className="space-y-2 text-sm leading-relaxed font-times text-slate-100">
                {orderedIds.map((stepId, idx2) => {
                  const step = stepMap.get(stepId);
                  if (!step) return null;
                  return (
                    <div key={step.id} className="flex items-start gap-2">
                      <span className="font-bold text-amber-300 shrink-0">
                        {idx2 + 1}.
                      </span>
                      <div className="flex-1 [&_.katex]:text-white">
                        <MathRenderer content={step.content} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Explanation on solution */}
          {showSolution && (
            <div className="mt-4 pt-4 border-t border-sky-900/60 space-y-2">
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 text-sm space-y-2">
                <div className="font-bold text-emerald-300 flex items-center gap-2 text-base">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Thứ tự các bước chuẩn xác:</span>
                </div>
                <div className="space-y-2 pt-1 font-times text-slate-200">
                  {q.steps
                    .slice()
                    .sort((a, b) => a.originalIndex - b.originalIndex)
                    .map((step) => (
                      <div key={step.id} className="flex items-start gap-2.5">
                        <span className="w-6 h-6 rounded-full bg-emerald-500 text-white font-mono text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                          {step.originalIndex}
                        </span>
                        <div className="flex-1 [&_.katex]:text-emerald-200">
                          {cleanRoleDescription(step.roleDescription) && (
                            <span className="font-semibold text-emerald-300">
                              [{cleanRoleDescription(step.roleDescription)}]:{' '}
                            </span>
                          )}
                          <MathRenderer content={step.content} />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);

export const Part4StepOrdering: React.FC<Part4StepOrderingProps> = ({
  questions,
  answers,
  onOrderChange,
  isSubmitted,
  examMode,
  bookmarkedQuestions,
  onToggleBookmark,
  fontSize,
  sessionKey,
}) => {
  const promptTextSizeClass =
    fontSize === 'xlarge'
      ? 'text-[22px] sm:text-3xl md:text-3xl'
      : fontSize === 'large'
      ? 'text-[20px] sm:text-2xl md:text-2xl'
      : 'text-[18px] sm:text-xl md:text-xl';

  const stepTextSizeClass =
    fontSize === 'xlarge'
      ? 'text-[19px] sm:text-xl'
      : fontSize === 'large'
      ? 'text-[18px] sm:text-lg'
      : 'text-[16px] sm:text-base';

  const handleOrderChange = useCallback(
    (questionId: string, newOrderedStepIds: string[]) => {
      onOrderChange(questionId, newOrderedStepIds);
    },
    [onOrderChange]
  );

  return (
    <div className="space-y-5 sm:space-y-6">
      {questions.map((q, idx) => (
        <Part4QuestionCard
          key={q.id}
          q={q}
          idx={idx}
          totalInPart={questions.length}
          orderedIds={answers[q.id] || q.steps.map((s) => s.id)}
          isSubmitted={isSubmitted}
          examMode={examMode}
          isBookmarked={bookmarkedQuestions.has(q.id)}
          onToggleBookmark={onToggleBookmark}
          onOrderChange={handleOrderChange}
          promptTextSizeClass={promptTextSizeClass}
          stepTextSizeClass={stepTextSizeClass}
          sessionKey={sessionKey}
        />
      ))}
    </div>
  );
};
