import React, { useCallback } from 'react';
import { TrueFalseQuestion } from '../types/exam';
import { MathRenderer } from './MathRenderer';
import { TikzFigure } from './TikzFigure';
import {
  Check,
  X,
  CheckCircle2,
  XCircle,
  Bookmark,
} from 'lucide-react';
import { playAnswerFeedbackSound, playClickSound } from '../utils/audio';

interface Part2TrueFalseProps {
  questions: TrueFalseQuestion[];
  answers: Record<string, Record<'a' | 'b' | 'c' | 'd', boolean | null>>;
  onSelectStatement: (
    questionId: string,
    statementLabel: 'a' | 'b' | 'c' | 'd',
    value: boolean
  ) => void;
  isSubmitted: boolean;
  examMode: 'exam' | 'practice';
  bookmarkedQuestions: Set<string>;
  onToggleBookmark: (qId: string) => void;
  fontSize: 'normal' | 'large' | 'xlarge';
  totalQuestions?: number;
}

const DEFAULT_TF_ANS: Record<'a' | 'b' | 'c' | 'd', boolean | null> = {
  a: null,
  b: null,
  c: null,
  d: null,
};

interface Part2QuestionCardProps {
  q: TrueFalseQuestion;
  idx: number;
  totalInPart: number;
  currentAns: Record<'a' | 'b' | 'c' | 'd', boolean | null>;
  isSubmitted: boolean;
  examMode: 'exam' | 'practice';
  isBookmarked: boolean;
  onToggleBookmark: (qId: string) => void;
  onSelectStatement: (
    questionId: string,
    statementLabel: 'a' | 'b' | 'c' | 'd',
    value: boolean
  ) => void;
  promptTextSizeClass: string;
  statementTextSizeClass: string;
}

const Part2QuestionCard: React.FC<Part2QuestionCardProps> = React.memo(
  ({
    q,
    idx,
    totalInPart,
    currentAns,
    isSubmitted,
    examMode,
    isBookmarked,
    onToggleBookmark,
    onSelectStatement,
    promptTextSizeClass,
    statementTextSizeClass,
  }) => {
    const showSolution = isSubmitted || examMode === 'practice';

    let correctCount = 0;
    let answeredCount = 0;
    q.statements.forEach((st) => {
      if (currentAns[st.label] !== null) {
        answeredCount++;
        if (currentAns[st.label] === st.isCorrect) {
          correctCount++;
        }
      }
    });

    const handleSelect = (
      st: { label: 'a' | 'b' | 'c' | 'd'; isCorrect: boolean },
      val: boolean
    ) => {
      if (isSubmitted) return;
      playAnswerFeedbackSound(val === st.isCorrect);
      onSelectStatement(q.id, st.label, val);
    };

    return (
      <div id={`q-part2-${idx}`} className="space-y-3 scroll-mt-36 sm:scroll-mt-32">
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
                <span>PHẦN II: Đúng / Sai</span>
              </div>

              {answeredCount > 0 && (
                <div
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${
                    showSolution
                      ? correctCount === 4
                        ? 'border-emerald-400/80 bg-emerald-500/20 text-emerald-300'
                        : 'border-amber-400/80 bg-amber-500/20 text-amber-300'
                      : 'border-cyan-400/80 bg-cyan-500/20 text-cyan-300'
                  }`}
                >
                  <span>
                    {showSolution
                      ? `Đúng ${correctCount}/4 ý`
                      : `Đã làm ${answeredCount}/4 ý`}
                  </span>
                </div>
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

          {/* Problem Prompt */}
          <div
            className={`py-3.5 sm:py-5 text-white font-bold font-times leading-relaxed tracking-wide ${promptTextSizeClass} [&_.katex]:text-white [&_.katex]:font-semibold [&_.katex]:text-[1.1em]`}
          >
            <MathRenderer content={q.prompt} />
          </div>

          {(q.tikzType || q.tikzCode || q.imageUrl) && (
            <TikzFigure
              type={q.tikzType as any}
              tikzCode={q.tikzCode}
              imageUrl={q.imageUrl}
              caption={`Hình vẽ minh hoạ Câu ${idx + 1}`}
            />
          )}
        </div>

        {/* Statements List Container */}
        <div className="rounded-2xl border border-sky-900/60 bg-[#071026] p-3 sm:p-6 shadow-2xl space-y-4">
          <div className="space-y-3">
            {q.statements.map((st) => {
              const userChoice = currentAns[st.label];
              const hasAnswered = userChoice !== null;
              const isStatementCorrect = hasAnswered && userChoice === st.isCorrect;

              let borderState = 'border-sky-800/60 bg-[#0b1739]';
              if (showSolution && hasAnswered) {
                borderState = isStatementCorrect
                  ? 'border-emerald-500/80 bg-emerald-950/40 ring-1 ring-emerald-500/40'
                  : 'border-rose-500/80 bg-rose-950/40 ring-1 ring-rose-500/40';
              } else if (hasAnswered) {
                borderState = 'border-cyan-500/70 bg-[#0d2250] ring-1 ring-cyan-500/30';
              }

              return (
                <div
                  key={st.label}
                  className={`p-3.5 sm:p-5 rounded-2xl border transition-colors duration-75 ${borderState} flex flex-col md:flex-row md:items-center justify-between gap-3.5 sm:gap-4`}
                >
                  {/* Statement badge & Content */}
                  <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                    <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#f59e0b] text-[#0f172a] font-black font-times text-base sm:text-lg flex items-center justify-center shrink-0 border-2 border-amber-300 shadow-md">
                      {st.label})
                    </span>

                    <div
                      className={`flex-1 min-w-0 break-words py-0.5 text-white font-bold font-times leading-relaxed ${statementTextSizeClass} [&_.katex]:text-white [&_.katex]:text-[1.1em]`}
                    >
                      <MathRenderer content={st.statement} />
                      {(st.tikzType || st.tikzCode || st.imageUrl) && (
                        <TikzFigure
                          type={st.tikzType as any}
                          tikzCode={st.tikzCode}
                          imageUrl={st.imageUrl}
                          caption={`Hình vẽ / Bảng biến thiên ý ${st.label})`}
                        />
                      )}
                    </div>
                  </div>

                  {/* True / False Buttons: 48px high touch targets for fast thumb tapping on iPhone */}
                  <div className="grid grid-cols-2 sm:flex items-center gap-2.5 sm:gap-3 shrink-0 w-full md:w-auto">
                    <button
                      type="button"
                      disabled={isSubmitted}
                      onClick={() => handleSelect(st, true)}
                      className={`min-h-[48px] flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-black text-base transition-colors duration-75 select-none ${
                        userChoice === true
                          ? showSolution
                            ? st.isCorrect
                              ? 'bg-emerald-500 text-white ring-2 ring-emerald-300 shadow-lg'
                              : 'bg-rose-500 text-white ring-2 ring-rose-300 shadow-lg'
                            : 'bg-emerald-500 text-white shadow-lg ring-2 ring-emerald-300'
                          : 'bg-sky-950/90 text-sky-200 border border-sky-800 active:bg-emerald-950/80'
                      } ${
                        !isSubmitted ? 'cursor-pointer active:scale-95' : 'cursor-default'
                      }`}
                    >
                      <Check className="w-4 h-4 stroke-[3]" />
                      <span>Đúng</span>
                    </button>

                    <button
                      type="button"
                      disabled={isSubmitted}
                      onClick={() => handleSelect(st, false)}
                      className={`min-h-[48px] flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-black text-base transition-colors duration-75 select-none ${
                        userChoice === false
                          ? showSolution
                            ? !st.isCorrect
                              ? 'bg-emerald-500 text-white ring-2 ring-emerald-300 shadow-lg'
                              : 'bg-rose-500 text-white ring-2 ring-rose-300 shadow-lg'
                            : 'bg-rose-500 text-white shadow-lg ring-2 ring-rose-300'
                          : 'bg-sky-950/90 text-sky-200 border border-sky-800 active:bg-rose-950/80'
                      } ${
                        !isSubmitted ? 'cursor-pointer active:scale-95' : 'cursor-default'
                      }`}
                    >
                      <X className="w-4 h-4 stroke-[3]" />
                      <span>Sai</span>
                    </button>

                    {showSolution && hasAnswered && (
                      <div className="col-span-2 sm:col-span-1 flex justify-end sm:ml-1">
                        {isStatementCorrect ? (
                          <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                        ) : (
                          <XCircle className="w-6 h-6 text-rose-400" />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {showSolution && (
            <div className="mt-5 pt-4 border-t border-sky-900/60 space-y-2.5">
              <div className="p-4 rounded-xl bg-sky-950/70 border border-sky-800/80 text-sky-200 text-sm sm:text-base">
                <div className="font-bold text-cyan-300 mb-2 flex items-center gap-2 text-base sm:text-lg">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>Hướng dẫn giải chi tiết từng ý:</span>
                </div>
                <div className="space-y-2">
                  {q.statements.map((st) => (
                    <div
                      key={st.label}
                      className="flex items-start gap-2.5 p-2 rounded-lg bg-[#071126]/60 border border-sky-900/40"
                    >
                      <span
                        className={`font-black px-2 py-0.5 rounded text-xs sm:text-sm uppercase ${
                          st.isCorrect
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                            : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                        }`}
                      >
                        Ý {st.label}: {st.isCorrect ? 'ĐÚNG' : 'SAI'}
                      </span>
                      <div className="flex-1 font-times text-slate-200 leading-relaxed [&_.katex]:text-cyan-200 [&_.katex]:text-[1.12em]">
                        <MathRenderer content={st.explanation} />
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

export const Part2TrueFalse: React.FC<Part2TrueFalseProps> = ({
  questions,
  answers,
  onSelectStatement,
  isSubmitted,
  examMode,
  bookmarkedQuestions,
  onToggleBookmark,
  fontSize,
}) => {
  const promptTextSizeClass =
    fontSize === 'xlarge'
      ? 'text-[22px] sm:text-3xl md:text-3xl'
      : fontSize === 'large'
      ? 'text-[20px] sm:text-2xl md:text-2xl'
      : 'text-[18px] sm:text-xl md:text-xl';

  const statementTextSizeClass =
    fontSize === 'xlarge'
      ? 'text-[20px] sm:text-2xl'
      : fontSize === 'large'
      ? 'text-[18px] sm:text-xl'
      : 'text-[17px] sm:text-lg';

  const handleSelectStatement = useCallback(
    (
      questionId: string,
      statementLabel: 'a' | 'b' | 'c' | 'd',
      value: boolean
    ) => {
      onSelectStatement(questionId, statementLabel, value);
    },
    [onSelectStatement]
  );

  return (
    <div className="space-y-5 sm:space-y-6">
      {questions.map((q, idx) => (
        <Part2QuestionCard
          key={q.id}
          q={q}
          idx={idx}
          totalInPart={questions.length}
          currentAns={answers[q.id] || DEFAULT_TF_ANS}
          isSubmitted={isSubmitted}
          examMode={examMode}
          isBookmarked={bookmarkedQuestions.has(q.id)}
          onToggleBookmark={onToggleBookmark}
          onSelectStatement={handleSelectStatement}
          promptTextSizeClass={promptTextSizeClass}
          statementTextSizeClass={statementTextSizeClass}
        />
      ))}
    </div>
  );
};
