import { ExamSet } from '../../types/exam';

export interface LessonInfo {
  id: string;
  code: string; // VD: "Bài 1", "Bài 2", "Ôn tập Chương I"
  title: string; // Tên bài học chuẩn SGK Kết nối tri thức Toán 12 Tập 1
  fullName: string; // VD: "Bài 1. Tính đơn điệu và cực trị của hàm số"
  chapterId: string;
  chapterTitle: string;
  pageNumber: number;
  coreTopics: string[];
  practiceExams: ExamSet[]; // 2 đề ôn tập (mỗi đề 22 câu chuẩn cấu trúc 4 phần)
}

export interface ChapterGroup {
  id: string;
  code: string;
  title: string;
  lessons: LessonInfo[];
}
