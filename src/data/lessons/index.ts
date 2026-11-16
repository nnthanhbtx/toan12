import { ChapterGroup, LessonInfo } from './types';
import { ExamSet } from '../../types/exam';
import { CHAPTER_1_PART_A_LESSONS } from './chapter1PartA';
import { CHAPTER_1_PART_B_LESSONS } from './chapter1PartB';
import { CHAPTER_2_PART_A_LESSONS } from './chapter2PartA';
import { CHAPTER_2_PART_B_LESSONS } from './chapter2PartB';
import { CHAPTER_3_LESSONS } from './chapter3Lessons';
import { CHAPTER_4_PART_A_LESSONS } from './chapter4PartA';
import { CHAPTER_4_PART_B_LESSONS } from './chapter4PartB';
import { CHAPTER_5_PART_A_LESSONS } from './chapter5PartA';
import { CHAPTER_5_PART_B_LESSONS } from './chapter5PartB';
import { CHAPTER_6_LESSONS } from './chapter6Lessons';
import { YEAR_END_REVIEW_LESSONS } from './yearEndReview';

export const LESSON_CHAPTERS: ChapterGroup[] = [
  {
    id: 'chuong-1',
    code: 'Chương I',
    title: 'ỨNG DỤNG ĐẠO HÀM ĐỂ KHẢO SÁT VÀ VẼ ĐỒ THỊ HÀM SỐ',
    lessons: [...CHAPTER_1_PART_A_LESSONS, ...CHAPTER_1_PART_B_LESSONS],
  },
  {
    id: 'chuong-2',
    code: 'Chương II',
    title: 'VECTƠ VÀ HỆ TRỤC TOẠ ĐỘ TRONG KHÔNG GIAN',
    lessons: [...CHAPTER_2_PART_A_LESSONS, ...CHAPTER_2_PART_B_LESSONS],
  },
  {
    id: 'chuong-3',
    code: 'Chương III',
    title: 'CÁC SỐ ĐẶC TRƯNG ĐO MỨC ĐỘ PHÂN TÁN CỦA MẪU SỐ LIỆU GHÉP NHÓM',
    lessons: [...CHAPTER_3_LESSONS],
  },
  {
    id: 'chuong-4',
    code: 'Chương IV',
    title: 'NGUYÊN HÀM VÀ TÍCH PHÂN',
    lessons: [...CHAPTER_4_PART_A_LESSONS, ...CHAPTER_4_PART_B_LESSONS],
  },
  {
    id: 'chuong-5',
    code: 'Chương V',
    title: 'PHƯƠNG PHÁP TOẠ ĐỘ TRONG KHÔNG GIAN',
    lessons: [...CHAPTER_5_PART_A_LESSONS, ...CHAPTER_5_PART_B_LESSONS],
  },
  {
    id: 'chuong-6',
    code: 'Chương VI',
    title: 'XÁC SUẤT CÓ ĐIỀU KIỆN',
    lessons: [...CHAPTER_6_LESSONS],
  },
  {
    id: 'ontap-cuoi-nam-group',
    code: 'Cuối năm',
    title: 'ÔN TẬP CUỐI NĂM',
    lessons: [...YEAR_END_REVIEW_LESSONS],
  },
];

export const ALL_LESSONS: LessonInfo[] = LESSON_CHAPTERS.flatMap((ch) => ch.lessons);

export const ALL_LESSON_EXAMS: ExamSet[] = ALL_LESSONS.flatMap((lesson) => lesson.practiceExams);

export * from './types';
