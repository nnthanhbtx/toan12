import {
  ExamSet,
  MultipleChoiceQuestion,
  TrueFalseQuestion,
  ShortAnswerQuestion,
  StepOrderingQuestion,
} from '../../types/exam';

export function makeMC(
  examPrefix: string,
  number: number,
  topic: string,
  prompt: string,
  options: [string, string, string, string],
  correctAnswer: 'A' | 'B' | 'C' | 'D',
  explanation: string,
  pedagogicalTip: string,
  tikzType?: string
): MultipleChoiceQuestion {
  return {
    id: `${examPrefix}-p1-q${number}`,
    part: 'part1',
    number,
    topic,
    prompt,
    options: [
      { key: 'A', content: options[0] },
      { key: 'B', content: options[1] },
      { key: 'C', content: options[2] },
      { key: 'D', content: options[3] },
    ],
    correctAnswer,
    explanation,
    pedagogicalTip,
    points: 0.25,
    ...(tikzType ? { tikzType } : {}),
  };
}

export function makeTF(
  examPrefix: string,
  number: number,
  topic: string,
  prompt: string,
  statements: [
    { text: string; isCorrect: boolean; exp: string },
    { text: string; isCorrect: boolean; exp: string },
    { text: string; isCorrect: boolean; exp: string },
    { text: string; isCorrect: boolean; exp: string }
  ],
  pedagogicalTip: string,
  tikzType?: string
): TrueFalseQuestion {
  const labels: ('a' | 'b' | 'c' | 'd')[] = ['a', 'b', 'c', 'd'];
  return {
    id: `${examPrefix}-p2-q${number}`,
    part: 'part2',
    number,
    topic,
    prompt,
    statements: statements.map((st, idx) => ({
      id: labels[idx],
      label: labels[idx],
      statement: st.text,
      isCorrect: st.isCorrect,
      explanation: st.exp,
    })),
    pedagogicalTip,
    ...(tikzType ? { tikzType } : {}),
  };
}

export function makeSA(
  examPrefix: string,
  number: number,
  topic: string,
  prompt: string,
  acceptableAnswers: string[],
  explanation: string,
  pedagogicalTip: string,
  unit?: string,
  tikzType?: string
): ShortAnswerQuestion {
  return {
    id: `${examPrefix}-p3-q${number}`,
    part: 'part3',
    number,
    topic,
    prompt,
    acceptableAnswers,
    explanation,
    pedagogicalTip,
    unit,
    points: 0.5,
    ...(tikzType ? { tikzType } : {}),
  };
}

export function makeSO(
  examPrefix: string,
  number: number,
  topic: string,
  problemStatement: string,
  conclusionTarget: string,
  steps: { role: string; content: string }[],
  pedagogicalTip: string,
  teacherAnalysis: string,
  points: number,
  tikzType?: string
): StepOrderingQuestion {
  return {
    id: `${examPrefix}-p4-q${number}`,
    part: 'part4',
    number,
    topic,
    problemStatement,
    conclusionTarget,
    steps: steps.map((s, idx) => ({
      id: `${examPrefix}-p4-q${number}-s${idx + 1}`,
      originalIndex: idx + 1,
      roleDescription: s.role,
      content: s.content,
    })),
    pedagogicalTip,
    teacherAnalysis,
    points,
    ...(tikzType ? { tikzType } : {}),
  };
}

export function makeLessonExam(
  id: string,
  title: string,
  subtitle: string,
  description: string,
  part1: MultipleChoiceQuestion[],
  part2: TrueFalseQuestion[],
  part3: ShortAnswerQuestion[],
  part4: StepOrderingQuestion[]
): ExamSet {
  return {
    id,
    title,
    subtitle,
    grade: 12,
    durationMinutes: 90,
    totalPoints: 10,
    description,
    part1,
    part2,
    part3,
    part4,
  };
}
