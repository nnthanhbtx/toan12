import React, { useState, useCallback } from 'react';
import { ShortAnswerQuestion } from '../types/exam';
import { MathRenderer } from './MathRenderer';
import { TikzFigure } from './TikzFigure';
import {
  CheckCircle2,
  XCircle,
  Sparkles,
  Bookmark,
  Delete,
} from 'lucide-react';
import {
  playAnswerFeedbackSound,
  playClickSound,
} from '../utils/audio';

interface Part3ShortAnswerProps {
  questions: ShortAnswerQuestion[];
  answers: Record<string, string>;
  onAnswerChange: (questionId: string, val: string) => void;
  isSubmitted: boolean;
  examMode: 'exam' | 'practice';
  bookmarkedQuestions: Set<string>;
  onToggleBookmark: (qId: string) => void;
  fontSize: 'normal' | 'large' | 'xlarge';
  totalQuestions?: number;
}

const checkIsCorrectAnswer = (q: ShortAnswerQuestion, val: string): boolean => {
  if (!val || val.trim() === '') return false;
  const raw = val.trim().replace(',', '.');
  const answersList = q.acceptableAnswers || [];

  return answersList.some((ans: string) => {
    const formattedAns = ans.trim().replace(',', '.');
    const numUser = parseFloat(raw);
    const numAns = parseFloat(formattedAns);
    if (!isNaN(numUser) && !isNaN(numAns)) {
      return Math.abs(numUser - numAns) < 0.05 || raw === formattedAns;
    }
    return raw === formattedAns;
  });
};

interface Part3QuestionCardProps {
  q: ShortAnswerQuestion;
  idx: number;
  totalInPart: number;
  userVal: string;
  isSubmitted: boolean;
  examMode: 'exam' | 'practice';
  isBookmarked: boolean;
  onToggleBookmark: (qId: string) => void;
  onAnswerChange: (questionId: string, val: string) => void;
  promptTextSizeClass: string;
}

const Part3QuestionCard: React.FC<Part3QuestionCardProps> = React.memo(
  ({
    q,
    idx,
    totalInPart,
    userVal,
    isSubmitted,
    examMode,
    isBookmarked,
    onToggleBookmark,
    onAnswerChange,
    promptTextSizeClass,
  }) => {
    const [hasChecked, setHasChecked] = useState<boolean>(false);
    const isCorrect = checkIsCorrectAnswer(q, userVal);
    const showSolution = isSubmitted || examMode === 'practice' || hasChecked;

    const handleCheckAnswer = () => {
      if (!userVal.trim()) return;
      const correct = checkIsCorrectAnswer(q, userVal);
      setHasChecked(true);
      playAnswerFeedbackSound(correct);
    };

    const updateValue = (nextVal: string) => {
      playClickSound();
      if (hasChecked) setHasChecked(false);
      onAnswerChange(q.id, nextVal);
    };

    return (
      <div id={`q-part3-${idx}`} className="space-y-3 scroll-mt-24">
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
                <span>PHẦN III: Trả lời ngắn</span>
              </div>

              {userVal && (
                <div
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${
                    showSolution
                      ? isCorrect
                        ? 'border-emerald-400/80 bg-emerald-500/20 text-emerald-300'
                        : 'border-rose-400/80 bg-rose-500/20 text-rose-300'
                      : 'border-cyan-400/80 bg-cyan-500/20 text-cyan-300'
                  }`}
                >
                  {showSolution ? (
                    isCorrect ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Đáp số đúng</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-3.5 h-3.5" />
                        <span>Chưa chính xác</span>
                      </>
                    )
                  ) : (
                    <span>Đã nhập: {userVal}</span>
                  )}
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

          {/* Prompt */}
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

        {/* Answer Input Area */}
        <div className="rounded-2xl border border-sky-900/60 bg-[#071026] p-3.5 sm:p-6 shadow-2xl space-y-3.5">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 flex-wrap">
            <div className="flex items-center gap-1.5 sm:gap-2 flex-1 sm:max-w-lg">
              {/* Phím trợ năng nhanh cho bàn phím số iPhone 10-18: Đổi dấu ± và Dấu chấm thập phân . */}
              {!isSubmitted && (
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={() => {
                      const trimmed = userVal.trim();
                      const nextVal = trimmed.startsWith('-')
                        ? trimmed.slice(1)
                        : `-${trimmed}`;
                      updateValue(nextVal);
                    }}
                    className="min-w-[48px] min-h-[52px] px-2.5 rounded-2xl bg-[#0b1739] active:bg-sky-900 border border-sky-700/80 text-amber-300 font-mono font-black text-xl flex items-center justify-center select-none"
                    title="Đổi dấu Âm / Dương (-) một chạm trên iPhone"
                  >
                    ±
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (!userVal.includes('.') && !userVal.includes(',')) {
                        updateValue(userVal ? `${userVal}.` : '0.');
                      }
                    }}
                    className="min-w-[44px] min-h-[52px] px-2.5 rounded-2xl bg-[#0b1739] active:bg-sky-900 border border-sky-700/80 text-cyan-300 font-mono font-black text-2xl flex items-center justify-center select-none"
                    title="Chèn dấu chấm thập phân (.) một chạm"
                  >
                    .
                  </button>
                </div>
              )}

              <div className="relative flex-1 min-w-0">
                <input
                  type="text"
                  inputMode="decimal"
                  enterKeyHint="done"
                  disabled={isSubmitted}
                  value={userVal}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.currentTarget.blur();
                      handleCheckAnswer();
                    }
                  }}
                  onChange={(e) => {
                    updateValue(e.target.value);
                  }}
                  placeholder="Nhập đáp số (VD: -3, 2.5)..."
                  className={`w-full min-h-[52px] pl-4 pr-11 py-3 rounded-2xl border text-lg sm:text-2xl font-mono font-black tracking-wider transition-colors focus:outline-none ${
                    showSolution && userVal
                      ? isCorrect
                        ? 'bg-emerald-950/70 border-2 border-emerald-400 text-emerald-200'
                        : 'bg-rose-950/70 border-2 border-rose-400 text-rose-200'
                      : 'bg-[#0b1739] border-sky-700/60 text-white placeholder-sky-400/50 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30'
                  }`}
                />
                {!isSubmitted && userVal && (
                  <button
                    type="button"
                    onClick={() => updateValue('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-xl bg-sky-950/90 text-sky-300 flex items-center justify-center border border-sky-800"
                    title="Xoá nhanh đáp số"
                  >
                    <Delete className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {!isSubmitted && (
              <button
                type="button"
                onClick={handleCheckAnswer}
                disabled={!userVal.trim()}
                className="min-h-[50px] flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-cyan-600 active:bg-cyan-500 text-white font-extrabold text-sm sm:text-base transition-colors duration-75 shadow-lg shadow-cyan-950/60 select-none disabled:opacity-40 disabled:cursor-not-allowed"
                title="Kiểm tra đáp số"
              >
                <Sparkles className="w-4 h-4 text-cyan-200" />
                <span>Kiểm tra đáp số</span>
              </button>
            )}
          </div>

          {showSolution && (
            <div className="mt-4 pt-4 border-t border-sky-900/60 space-y-2">
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 text-sm sm:text-base">
                <div className="font-bold text-emerald-300 mb-1.5 flex items-center gap-2 text-base sm:text-lg">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>
                    Đáp án chuẩn: {q.acceptableAnswers.join(' hoặc ')}
                  </span>
                </div>
                {q.explanation && (
                  <div className="leading-relaxed font-times text-slate-200 [&_.katex]:text-emerald-200 [&_.katex]:text-[1.12em]">
                    <MathRenderer content={q.explanation} />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);

export const Part3ShortAnswer: React.FC<Part3ShortAnswerProps> = ({
  questions,
  answers,
  onAnswerChange,
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

  const handleAnswerChange = useCallback(
    (questionId: string, val: string) => {
      onAnswerChange(questionId, val);
    },
    [onAnswerChange]
  );

  return (
    <div className="space-y-5 sm:space-y-6">
      {questions.map((q, idx) => (
        <Part3QuestionCard
          key={q.id}
          q={q}
          idx={idx}
          totalInPart={questions.length}
          userVal={answers[q.id] || ''}
          isSubmitted={isSubmitted}
          examMode={examMode}
          isBookmarked={bookmarkedQuestions.has(q.id)}
          onToggleBookmark={onToggleBookmark}
          onAnswerChange={handleAnswerChange}
          promptTextSizeClass={promptTextSizeClass}
        />
      ))}
    </div>
  );
};
