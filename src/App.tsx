/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { examSets } from './data/examSets';
import { ALL_LESSON_EXAMS, ALL_LESSONS } from './data/lessons';
import { ExamSet, StudentAnswers, ExamPart, PartScoreDetail, LeaderboardEntry, ExamViolationLog } from './types/exam';
import { calculateScore } from './utils/scoring';
import { Header } from './components/Header';
import { Timer } from './components/Timer';
import { QuestionNav } from './components/QuestionNav';
import { Part1MultipleChoice } from './components/Part1MultipleChoice';
import { Part2TrueFalse } from './components/Part2TrueFalse';
import { Part3ShortAnswer } from './components/Part3ShortAnswer';
import { Part4StepOrdering } from './components/Part4StepOrdering';
import { ResultReport } from './components/ResultReport';
import { ImportWordModal } from './components/ImportWordModal';
import { LessonCatalogModal } from './components/LessonCatalogModal';
import {
  LeaderboardModal,
  INITIAL_LEADERBOARD_ENTRIES,
  sortLeaderboardEntries,
} from './components/LeaderboardModal';
import { PWAInstallModal } from './components/PWAInstallModal';
import { usePWAInstall } from './hooks/usePWAInstall';
import {
  playSubmitFanfare,
  playCorrectSound,
  playWrongSound,
  stopSpeech,
  setTimedExamAudioActive,
} from './utils/audio';
import {
  Send,
  AlertTriangle,
  ShieldAlert,
  ShieldCheck,
  Play,
  RotateCcw,
  User,
  UserCheck,
  Sparkles,
  X,
  LayoutGrid,
  WifiOff,
  Smartphone,
  BookOpen,
  BookmarkCheck,
} from 'lucide-react';

const LEADERBOARD_STORAGE_KEY = 'math12_leaderboard_v8_clean';
const STUDENT_INFO_STORAGE_KEY = 'math12_student_info_v7';
const CUSTOM_EXAMS_STORAGE_KEY = 'math12_custom_exams_v7';
const ACTIVE_PROGRESS_STORAGE_KEY = 'math12_active_progress_v7';
const QUICK_CLASSES = ['12A1', '12A2', '12A3', '12A4', '12A5'];
const DEFAULT_ALL_EXAMS: ExamSet[] = [...examSets, ...ALL_LESSON_EXAMS];

const EMPTY_EXAM: ExamSet = {
  id: 'empty-exam',
  title: 'Chưa có đề thi',
  subtitle: '',
  grade: 12,
  durationMinutes: 90,
  totalPoints: 10,
  description:
    'Hiện chưa có đề thi nào được chọn. Hãy nhấn "Tạo Đề Word / PDF" hoặc "Khôi phục đề mặc định" để bắt đầu.',
  part1: [],
  part2: [],
  part3: [],
  part4: [],
};

export default function App() {
  const {
    isOnline,
    swReady,
    isInstalled,
    isIOS,
    hasNativePrompt,
    promptInstall,
  } = usePWAInstall();

  const [allExams, setAllExams] = useState<ExamSet[]>(() => {
    try {
      const savedCustom = localStorage.getItem(CUSTOM_EXAMS_STORAGE_KEY);
      if (savedCustom) {
        const parsed = JSON.parse(savedCustom);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const defaultIds = new Set(DEFAULT_ALL_EXAMS.map((e) => e.id));
          const customOnly = parsed.filter((e: ExamSet) => e && e.id && !defaultIds.has(e.id));
          return [...customOnly, ...DEFAULT_ALL_EXAMS];
        }
      }
    } catch {
      // ignore
    }
    return DEFAULT_ALL_EXAMS;
  });

  const [selectedExamId, setSelectedExamId] = useState<string>(() => {
    try {
      const savedProgress = localStorage.getItem(ACTIVE_PROGRESS_STORAGE_KEY);
      if (savedProgress) {
        const parsed = JSON.parse(savedProgress);
        if (parsed && parsed.selectedExamId) {
          return parsed.selectedExamId;
        }
      }
    } catch {
      // ignore
    }
    return 'de-so-01';
  });

  const currentExam = useMemo(
    () => allExams.find((ex) => ex.id === selectedExamId) || allExams[0] || EMPTY_EXAM,
    [allExams, selectedExamId]
  );

  const [examMode, setExamMode] = useState<'exam' | 'practice'>('exam');
  const [isExamStarted, setIsExamStarted] = useState<boolean>(() => {
    try {
      const savedProgress = localStorage.getItem(ACTIVE_PROGRESS_STORAGE_KEY);
      if (savedProgress) {
        const parsed = JSON.parse(savedProgress);
        if (parsed && parsed.selectedExamId === currentExam.id) {
          return !!parsed.isExamStarted;
        }
      }
    } catch {
      // ignore
    }
    return false;
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Chức năng âm thanh chỉ hoạt động khi học sinh bắt đầu làm bài được tính giờ
  useEffect(() => {
    setTimedExamAudioActive(isExamStarted && examMode === 'exam' && !isSubmitted);
  }, [isExamStarted, examMode, isSubmitted]);
  const [examSessionKey, setExamSessionKey] = useState<number>(1);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [activeFilterPart, setActiveFilterPart] = useState<'all' | ExamPart>('all');
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState<Set<string>>(() => {
    try {
      const savedProgress = localStorage.getItem(ACTIVE_PROGRESS_STORAGE_KEY);
      if (savedProgress) {
        const parsed = JSON.parse(savedProgress);
        if (parsed && parsed.selectedExamId === currentExam.id && Array.isArray(parsed.bookmarked)) {
          return new Set(parsed.bookmarked);
        }
      }
    } catch {
      // ignore
    }
    return new Set();
  });
  const [interactedPart4, setInteractedPart4] = useState<Set<string>>(() => {
    try {
      const savedProgress = localStorage.getItem(ACTIVE_PROGRESS_STORAGE_KEY);
      if (savedProgress) {
        const parsed = JSON.parse(savedProgress);
        if (
          parsed &&
          parsed.selectedExamId === currentExam.id &&
          Array.isArray(parsed.interactedPart4)
        ) {
          return new Set(parsed.interactedPart4);
        }
      }
    } catch {
      // ignore
    }
    return new Set();
  });

  const [isImportWordOpen, setIsImportWordOpen] = useState(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [isLessonCatalogOpen, setIsLessonCatalogOpen] = useState(false);
  const [lessonCatalogTab, setLessonCatalogTab] = useState<'theory' | 'exams'>('exams');
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
  const [isPWAInfoOpen, setIsPWAInfoOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const [studentInfoError, setStudentInfoError] = useState<string>('');

  // Student info & Leaderboard state
  const [studentName, setStudentName] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STUDENT_INFO_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.studentName || '';
      }
    } catch {
      // ignore
    }
    return '';
  });

  const [studentClass, setStudentClass] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STUDENT_INFO_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.studentClass || '12A1';
      }
    } catch {
      // ignore
    }
    return '12A1';
  });

  const [leaderboardEntries, setLeaderboardEntries] = useState<LeaderboardEntry[]>(() => {
    try {
      const saved = localStorage.getItem(LEADERBOARD_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed.map((item: LeaderboardEntry) => ({
            ...item,
            examTitle:
              typeof item.examTitle === 'string'
                ? item.examTitle.replace(/^Đề\s+(0[1-8])$/i, 'Đề ôn GK1 $1')
                : item.examTitle,
          }));
        }
      }
    } catch {
      // ignore
    }
    return INITIAL_LEADERBOARD_ENTRIES;
  });

  useEffect(() => {
    try {
      localStorage.setItem(LEADERBOARD_STORAGE_KEY, JSON.stringify(leaderboardEntries));
    } catch {
      // ignore
    }
  }, [leaderboardEntries]);

  useEffect(() => {
    try {
      localStorage.setItem(
        STUDENT_INFO_STORAGE_KEY,
        JSON.stringify({ studentName, studentClass })
      );
    } catch {
      // ignore
    }
  }, [studentName, studentClass]);

  const examStartTimeRef = useRef<number | null>(null);
  const [timerElapsedSeconds, setTimerElapsedSeconds] = useState<number>(0);
  const [submittedDurationSeconds, setSubmittedDurationSeconds] = useState<number>(0);

  // Hệ thống giám sát & Báo vi phạm khi đang làm bài (mở tab khác, khoá màn hình, cửa sổ nổi AI che góc màn hình)
  const [violationLogs, setViolationLogs] = useState<ExamViolationLog[]>(() => {
    try {
      const savedProgress = localStorage.getItem(ACTIVE_PROGRESS_STORAGE_KEY);
      if (savedProgress) {
        const parsed = JSON.parse(savedProgress);
        if (
          parsed &&
          parsed.selectedExamId === currentExam.id &&
          Array.isArray(parsed.violationLogs)
        ) {
          return parsed.violationLogs;
        }
      }
    } catch {
      // ignore
    }
    return [];
  });
  const [activeViolationAlert, setActiveViolationAlert] = useState<ExamViolationLog | null>(null);
  const [isViolationLogModalOpen, setIsViolationLogModalOpen] = useState<boolean>(false);
  const lastViolationTimeRef = useRef<number>(0);
  const baselineViewportRef = useRef<{ width: number; height: number } | null>(null);

  // Initialize student answers
  const initializeAnswers = (exam: ExamSet): StudentAnswers => {
    const p4Answers: Record<string, string[]> = {};
    if (exam.part4) {
      exam.part4.forEach((q) => {
        const ids = q.steps.map((s) => s.id);
        const shuffled = [...ids].sort(() => Math.random() - 0.5);
        p4Answers[q.id] = shuffled;
      });
    }

    const p2Answers: Record<string, Record<'a' | 'b' | 'c' | 'd', boolean | null>> = {};
    exam.part2.forEach((q) => {
      p2Answers[q.id] = { a: null, b: null, c: null, d: null };
    });

    return {
      part1: {},
      part2: p2Answers,
      part3: {},
      part4: p4Answers,
    };
  };

  const [answers, setAnswers] = useState<StudentAnswers>(() => {
    try {
      const savedProgress = localStorage.getItem(ACTIVE_PROGRESS_STORAGE_KEY);
      if (savedProgress) {
        const parsed = JSON.parse(savedProgress);
        if (parsed && parsed.selectedExamId === currentExam.id && parsed.answers) {
          return parsed.answers;
        }
      }
    } catch {
      // ignore
    }
    return initializeAnswers(currentExam);
  });
  const [scoreDetail, setScoreDetail] = useState<PartScoreDetail | null>(null);

  // Save custom exams to localStorage for full offline persistence
  useEffect(() => {
    try {
      const defaultIds = new Set(DEFAULT_ALL_EXAMS.map((e) => e.id));
      const customOnly = allExams.filter((e) => !defaultIds.has(e.id) && e.id !== 'empty-exam');
      localStorage.setItem(CUSTOM_EXAMS_STORAGE_KEY, JSON.stringify(customOnly));
    } catch {
      // ignore
    }
  }, [allExams]);

  // Auto-save active exam progress to localStorage (debounced 150ms so touch interactions never lag on iPhone 10-18)
  useEffect(() => {
    if (isSubmitted) return;
    const timer = window.setTimeout(() => {
      try {
        localStorage.setItem(
          ACTIVE_PROGRESS_STORAGE_KEY,
          JSON.stringify({
            selectedExamId: currentExam.id,
            isExamStarted,
            answers,
            interactedPart4: Array.from(interactedPart4),
            bookmarked: Array.from(bookmarkedQuestions),
            violationLogs,
          })
        );
      } catch {
        // ignore
      }
    }, 150);

    return () => window.clearTimeout(timer);
  }, [
    currentExam.id,
    isExamStarted,
    isSubmitted,
    answers,
    interactedPart4,
    bookmarkedQuestions,
    violationLogs,
  ]);

  // Giám sát quy chế thi: Phát hiện mở tab khác, khoá màn hình, chia đôi màn hình hoặc mở cửa sổ nổi AI che một góc màn hình
  useEffect(() => {
    if (!isExamStarted || isSubmitted) {
      baselineViewportRef.current = null;
      return;
    }

    // Lưu kích thước khung hình chuẩn sau khi đóng bàn phím ảo (hỗ trợ chuẩn iPhone 10 -> iPhone 18)
    let lastKeyboardTimestamp = Date.now();
    baselineViewportRef.current = {
      width: window.innerWidth,
      height: Math.max(window.innerHeight, window.visualViewport?.height || 0),
    };

    const handleFocusInOut = (e: Event) => {
      const target = e.target as HTMLElement | null;
      const tag = target?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') {
        lastKeyboardTimestamp = Date.now();
      }
    };

    const recordViolation = (
      type: ExamViolationLog['type'],
      message: string
    ) => {
      const now = Date.now();
      // Tránh ghi trùng lặp cùng 1 hành vi trong khoảng 1.8 giây
      if (now - lastViolationTimeRef.current < 1800) {
        return;
      }
      lastViolationTimeRef.current = now;

      const timeStr = new Date(now).toLocaleTimeString('vi-VN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });

      const entry: ExamViolationLog = {
        id: `viol-${now}`,
        timestamp: timeStr,
        type,
        message,
      };

      setViolationLogs((prev) => [entry, ...prev]);
      setActiveViolationAlert(entry);
      playWrongSound();
    };

    const handleVisibilityChange = () => {
      if (document.hidden || document.visibilityState === 'hidden') {
        recordViolation(
          'tab_switch',
          'Chuyển sang tab khác, ẩn ứng dụng hoặc khoá màn hình thiết bị trong lúc đang làm bài thi.'
        );
      }
    };

    const handleWindowBlur = () => {
      // Nếu học sinh mở cửa sổ nổi (floating window / công cụ AI giải bài) đè lên góc màn hình hoặc chuyển sang cửa sổ khác
      setTimeout(() => {
        if (document.hidden) {
          recordViolation(
            'tab_switch',
            'Chuyển sang tab khác, ẩn ứng dụng hoặc khoá màn hình thiết bị trong lúc đang làm bài thi.'
          );
        } else if (!document.hasFocus()) {
          recordViolation(
            'window_blur',
            'Rời khỏi màn hình làm bài hoặc mở cửa sổ nổi / công cụ AI đè lên một góc màn hình.'
          );
        }
      }, 150);
    };

    const handleViewportResize = () => {
      // Bỏ qua khi học sinh đang gõ hoặc vừa đóng bàn phím ảo trên iPhone / Android (hiệu ứng trượt bàn phím iOS kéo dài ~500ms)
      const activeTag = document.activeElement?.tagName;
      if (
        activeTag === 'INPUT' ||
        activeTag === 'TEXTAREA' ||
        activeTag === 'SELECT' ||
        Date.now() - lastKeyboardTimestamp < 1200
      ) {
        return;
      }

      const base = baselineViewportRef.current;
      if (!base) return;

      const curW = window.visualViewport ? window.visualViewport.width : window.innerWidth;
      const curH = window.visualViewport ? window.visualViewport.height : window.innerHeight;

      // Nếu thanh địa chỉ Safari trên iPhone thu gọn làm chiều cao tăng lên thì cập nhật lại mốc chuẩn
      if (curW >= base.width && curH > base.height) {
        baselineViewportRef.current = { width: curW, height: curH };
        return;
      }

      const widthRatio = curW / Math.max(1, base.width);
      const heightRatio = curH / Math.max(1, base.height);

      // Phát hiện chia đôi màn hình (split-screen) hoặc cửa sổ thu nhỏ / che một góc màn hình để dùng AI
      if (widthRatio < 0.85 || heightRatio < 0.72) {
        recordViolation(
          'screen_partial_cover',
          'Thu nhỏ khung hình, chia đôi màn hình hoặc mở cửa sổ ứng dụng/AI che một phần màn hình khi đang làm bài.'
        );
      }
    };

    document.addEventListener('focusin', handleFocusInOut);
    document.addEventListener('focusout', handleFocusInOut);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('resize', handleViewportResize);
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleViewportResize);
    }

    return () => {
      document.removeEventListener('focusin', handleFocusInOut);
      document.removeEventListener('focusout', handleFocusInOut);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', handleVisibilityChange);
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('resize', handleViewportResize);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleViewportResize);
      }
    };
  }, [isExamStarted, isSubmitted]);

  const resultReportRef = useRef<HTMLDivElement | null>(null);
  const questionsContainerRef = useRef<HTMLDivElement | null>(null);

  const totalExamQuestions = useMemo(() => {
    return (
      currentExam.part1.length +
      currentExam.part2.length +
      currentExam.part3.length +
      (currentExam.part4?.length || 0)
    );
  }, [currentExam]);

  const resetSessionState = (targetExam: ExamSet) => {
    const freshAnswers = initializeAnswers(targetExam);
    setTimedExamAudioActive(false);
    setAnswers(freshAnswers);
    setIsExamStarted(false);
    setIsSubmitted(false);
    setScoreDetail(null);
    setBookmarkedQuestions(new Set());
    setInteractedPart4(new Set());
    setViolationLogs([]);
    setActiveViolationAlert(null);
    setIsViolationLogModalOpen(false);
    setActiveFilterPart('all');
    examStartTimeRef.current = null;
    setTimerElapsedSeconds(0);
    setSubmittedDurationSeconds(0);
    setExamSessionKey((prev) => prev + 1);
    try {
      localStorage.removeItem(ACTIVE_PROGRESS_STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  // Open student info modal when clicking "Bắt Đầu Làm Bài"
  const handleStartExam = () => {
    setStudentInfoError('');
    setIsStudentModalOpen(true);
  };

  // Khi học sinh chạm trực tiếp vào đáp án (A/B/C/D, Đúng/Sai...): tự động bắt đầu tính giờ và ghi nhận đáp án ngay lập tức để thao tác nhanh nhạy, không bị chặn bởi hộp thoại lỗi
  const ensureExamStarted = (): boolean => {
    if (isExamStarted) return true;
    examStartTimeRef.current = Date.now();
    setTimedExamAudioActive(examMode === 'exam');
    setIsExamStarted(true);
    return true;
  };

  // Reset answers when changing exam
  const handleSelectExam = (examId: string) => {
    stopSpeech();
    setSelectedExamId(examId);
    const newExam = allExams.find((e) => e.id === examId) || allExams[0] || EMPTY_EXAM;
    resetSessionState(newExam);
  };

  // Xoá đề thi khỏi danh sách
  const handleDeleteExam = (examId: string) => {
    stopSpeech();
    const remaining = allExams.filter((e) => e.id !== examId);
    setAllExams(remaining);
    const nextExam = remaining[0] || EMPTY_EXAM;
    setSelectedExamId(nextExam.id);
    resetSessionState(nextExam);
  };

  // Khôi phục Đề mặc định
  const handleRestoreDefaultExam = () => {
    stopSpeech();
    setAllExams(DEFAULT_ALL_EXAMS);
    setSelectedExamId(DEFAULT_ALL_EXAMS[0].id);
    resetSessionState(DEFAULT_ALL_EXAMS[0]);
  };

  // Tìm bài học tương ứng nếu đề đang chọn là Đề ôn của một bài học
  const activeLesson = useMemo(() => {
    return ALL_LESSONS.find((l) => l.practiceExams.some((ex) => ex.id === currentExam.id)) || null;
  }, [currentExam.id]);

  // Áp dụng đề thi mới tạo từ file Word / PDF
  const handleApplyWordExam = (newExam: ExamSet) => {
    stopSpeech();
    setAllExams((prev) => [newExam, ...prev]);
    setSelectedExamId(newExam.id);
    resetSessionState(newExam);
  };

  // Toggle bookmark
  const toggleBookmark = (qId: string) => {
    setBookmarkedQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(qId)) next.delete(qId);
      else next.add(qId);
      return next;
    });
  };

  // Submit test
  const handleFinalSubmit = () => {
    stopSpeech();
    setShowSubmitConfirm(false);
    const result = calculateScore(currentExam, answers);
    setScoreDetail(result);
    setIsSubmitted(true);

    // Compute elapsed seconds accurately from Timer or wall clock
    const wallElapsed = examStartTimeRef.current
      ? Math.max(5, Math.round((Date.now() - examStartTimeRef.current) / 1000))
      : 0;
    const elapsedSeconds =
      timerElapsedSeconds > 0 ? timerElapsedSeconds : wallElapsed > 0 ? wallElapsed : 1200;

    setSubmittedDurationSeconds(elapsedSeconds);

    const finalName = studentName.trim() || 'Học sinh Lớp 12';
    const finalClass = studentClass.trim() || '12A1';

    const newEntry: LeaderboardEntry = {
      id: `entry-${Date.now()}`,
      studentName: finalName,
      className: finalClass,
      examId: currentExam.id,
      examTitle: currentExam.title,
      totalScore: result.totalScore,
      part1Score: result.part1Score,
      part2Score: result.part2Score,
      part3Score: result.part3Score,
      part4Score: result.part4Score,
      durationSeconds: elapsedSeconds,
      rank: result.rank,
      submittedAt: new Date().toISOString(),
      isCurrentUser: true,
      violationCount: violationLogs.length,
      violationLogs,
    };

    setLeaderboardEntries((prev) => [
      newEntry,
      ...prev.map((item) => ({ ...item, isCurrentUser: false })),
    ]);

    if (result.totalScore >= 5.0) {
      playCorrectSound();
    } else {
      playWrongSound();
    }
    playSubmitFanfare();

    // Scroll to results
    setTimeout(() => {
      resultReportRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Reset exam
  const handleResetExam = () => {
    stopSpeech();
    resetSessionState(currentExam);
  };

  // Leaderboard helpers
  const handleAddManualLeaderboardEntry = (
    entry: Omit<LeaderboardEntry, 'id' | 'submittedAt'>
  ) => {
    const created: LeaderboardEntry = {
      ...entry,
      id: `manual-${Date.now()}`,
      submittedAt: new Date().toISOString(),
    };
    setLeaderboardEntries((prev) => [
      created,
      ...prev.map((item) => ({ ...item, isCurrentUser: false })),
    ]);
  };

  const handleDeleteLeaderboardEntry = (id: string) => {
    setLeaderboardEntries((prev) => prev.filter((item) => item.id !== id));
  };

  const handleResetLeaderboardDefault = () => {
    setLeaderboardEntries(INITIAL_LEADERBOARD_ENTRIES);
  };

  const sortedAllEntries = useMemo(() => {
    return sortLeaderboardEntries(leaderboardEntries);
  }, [leaderboardEntries]);

  const currentUserRankPosition = useMemo(() => {
    const idx = sortedAllEntries.findIndex((e) => e.isCurrentUser);
    return idx >= 0 ? idx + 1 : undefined;
  }, [sortedAllEntries]);

  // Danh sách đề tổng hợp hiển thị ở mục "Đề:" (tách biệt với các đề ôn nằm trong mục Bài Học)
  const generalExamsForHeader = useMemo(() => {
    const lessonExamIds = new Set(ALL_LESSON_EXAMS.map((e) => e.id));
    const generalOnly = allExams.filter((e) => !lessonExamIds.has(e.id));
    if (activeLesson && !generalOnly.some((e) => e.id === currentExam.id)) {
      return [currentExam, ...generalOnly];
    }
    return generalOnly;
  }, [allExams, activeLesson, currentExam]);

  // Navigation scroll helper
  const handleNavigateQuestion = (part: ExamPart, index: number) => {
    setActiveFilterPart('all');
    setTimeout(() => {
      const el = document.getElementById(`q-${part}-${index}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 50);
  };

  // Count answered questions accurately
  const totalAnswered = useMemo(() => {
    const p1Count = Object.keys(answers.part1).length;
    let p2Count = 0;
    currentExam.part2.forEach((q) => {
      const a = answers.part2[q.id];
      if (a && a.a !== null && a.b !== null && a.c !== null && a.d !== null) {
        p2Count++;
      }
    });
    const p3Count = Object.values(answers.part3).filter((v) => v.trim().length > 0).length;
    const p4Count = (currentExam.part4 || []).filter(
      (q) => interactedPart4.has(q.id) || isSubmitted
    ).length;
    return p1Count + p2Count + p3Count + p4Count;
  }, [answers, currentExam, interactedPart4, isSubmitted]);

  return (
    <div className="min-h-dvh bg-[#040817] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Header */}
      <Header
        currentExam={currentExam}
        allExams={generalExamsForHeader}
        onSelectExam={handleSelectExam}
        examMode={examMode}
        onToggleExamMode={() => setExamMode((m) => (m === 'exam' ? 'practice' : 'exam'))}
        isStarted={isExamStarted}
        onStartExam={handleStartExam}
        isSubmitted={isSubmitted}
        onSubmitExam={() => setShowSubmitConfirm(true)}
        onResetExam={handleResetExam}
        onOpenImportWord={() => setIsImportWordOpen(true)}
        onOpenLeaderboard={() => setIsLeaderboardOpen(true)}
        leaderboardCount={leaderboardEntries.length}
        onOpenLessonCatalog={() => {
          setLessonCatalogTab('exams');
          setIsLessonCatalogOpen(true);
        }}
        fontSize={fontSize}
        onChangeFontSize={setFontSize}
        isOnline={isOnline}
        onOpenPWAInfo={() => setIsPWAInfoOpen(true)}
      />

      {/* Offline Banner Notification (hiển thị gọn gàng khi thiết bị tắt Wi-Fi / 4G) */}
      {!isOnline && (
        <div className="bg-amber-500/20 border-b border-amber-400/40 px-3 py-1.5 text-center text-xs text-amber-200 flex items-center justify-center gap-2 no-print">
          <WifiOff className="w-3.5 h-3.5 text-amber-300 shrink-0" />
          <span>
            <strong>Chế độ Không Wi-Fi (Offline):</strong> Toàn bộ câu hỏi, công thức Toán và đáp án
            đang được lưu an toàn trực tiếp trên điện thoại.
          </span>
        </div>
      )}

      {/* Sub-header Bar (Sticky): Thanh điều khiển tác vụ duy nhất (Bài học đang chọn [Lý thuyết | 2 Đề ôn], Đồng hồ & Bắt đầu / Nộp bài) */}
      <div className="sticky top-[52px] sm:top-[60px] z-30 bg-[#071126]/95 backdrop-blur-md border-b border-sky-950 shadow-md no-print">
        <div className="max-w-7xl mx-auto px-2.5 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between gap-2 sm:gap-4 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap min-w-0">
            {/* Hiển thị nhanh thông tin Bài học: Mục Lý thuyết & 2 Đề ôn */}
            {activeLesson && (
              <div className="flex items-center gap-1.5 flex-wrap">
                <button
                  type="button"
                  onClick={() => {
                    setLessonCatalogTab('exams');
                    setIsLessonCatalogOpen(true);
                  }}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-400/50 transition-colors"
                  title="Nhấn để chọn Bài học khác"
                >
                  <BookOpen className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate max-w-[160px] sm:max-w-[280px]">
                    {activeLesson.fullName}
                  </span>
                </button>

                <div className="inline-flex items-center gap-1 bg-[#0b1739] p-0.5 rounded-xl border border-sky-800/80">
                  <button
                    type="button"
                    onClick={() => {
                      setLessonCatalogTab('theory');
                      setIsLessonCatalogOpen(true);
                    }}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-bold text-cyan-300 hover:bg-cyan-500/20 hover:text-white flex items-center gap-1 transition-all"
                    title="Xem Lý thuyết & Công thức của bài học này"
                  >
                    <BookmarkCheck className="w-3 h-3 text-cyan-400" />
                    <span>Lý thuyết</span>
                  </button>

                  {activeLesson.practiceExams.map((ex, idx) => (
                    <button
                      key={ex.id}
                      type="button"
                      onClick={() => handleSelectExam(ex.id)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
                        currentExam.id === ex.id
                          ? 'bg-cyan-500 text-[#040817] font-black'
                          : 'text-sky-300 hover:text-white'
                      }`}
                    >
                      Đề ôn {idx + 1}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Chỉ hiển thị thông tin học sinh sau khi đã chọn Bắt đầu làm bài */}
            {(isExamStarted || isSubmitted) && (
              <button
                type="button"
                onClick={() => setIsStudentModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-[#0b1739] hover:bg-sky-900/80 text-sky-200 border border-sky-700/70 transition-colors"
                title="Nhấn để cập nhật Họ và tên / Lớp"
              >
                <UserCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="truncate max-w-[180px] sm:max-w-none">
                  {studentName.trim()
                    ? `${studentName.trim()} (${studentClass.trim() || '12A1'})`
                    : 'Điền Họ tên & Lớp'}
                </span>
              </button>
            )}

            {isSubmitted ? (
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40">
                Đã nộp bài
              </span>
            ) : isExamStarted ? (
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Đang làm bài</span>
              </span>
            ) : null}

            {/* Mục Báo Vi Phạm: hiển thị khi học sinh bắt đầu làm bài hoặc đã nộp bài */}
            {(isExamStarted || isSubmitted) && (
              <button
                type="button"
                onClick={() => setIsViolationLogModalOpen(true)}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border transition-all ${
                  violationLogs.length > 0
                    ? 'bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border-rose-500/50 animate-pulse shadow-sm shadow-rose-950'
                    : 'bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border-emerald-500/40'
                }`}
                title="Xem nhật ký giám sát chống mở tab khác / khoá màn hình / dùng AI giải bài"
              >
                {violationLogs.length > 0 ? (
                  <>
                    <ShieldAlert className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span>Báo vi phạm: {violationLogs.length} lần</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Báo vi phạm: 0</span>
                  </>
                )}
              </button>
            )}

            {allExams.length === 0 && (
              <button
                type="button"
                onClick={handleRestoreDefaultExam}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-bold transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Khôi phục đề mặc định</span>
              </button>
            )}
          </div>

          {/* Exam Timer (chỉ xuất hiện khi học sinh đã chọn Bắt đầu làm bài) & Single Primary Action Button */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 ml-auto shrink-0">
            {/* Nút mở nhanh Phiếu trả lời trên điện thoại */}
            <button
              type="button"
              onClick={() => setIsMobileNavOpen(true)}
              className="lg:hidden px-2.5 py-1.5 rounded-xl bg-[#0b1739] hover:bg-sky-900 border border-sky-700/80 text-white flex items-center gap-1.5 text-xs font-bold"
              title="Mở Phiếu Trả Lời"
            >
              <LayoutGrid className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="font-mono text-amber-300">
                {totalAnswered}/{totalExamQuestions}
              </span>
            </button>

            {examMode === 'exam' && isExamStarted && !isSubmitted && (
              <Timer
                initialMinutes={currentExam.durationMinutes}
                isRunning={isExamStarted && !isSubmitted}
                onTimeUp={handleFinalSubmit}
                resetKey={`${currentExam.id}-${examSessionKey}`}
                onElapsedChange={setTimerElapsedSeconds}
              />
            )}

            {isSubmitted ? (
              <button
                type="button"
                onClick={handleResetExam}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-[#0b1739] hover:bg-sky-900 border border-sky-700 transition-all whitespace-nowrap shadow-sm"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Làm Lại Đề</span>
              </button>
            ) : !isExamStarted ? (
              <button
                type="button"
                onClick={handleStartExam}
                className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 rounded-xl text-xs font-bold text-[#071126] bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 shadow-md shadow-emerald-950/60 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              >
                <Play className="w-3.5 h-3.5 fill-current shrink-0" />
                <span>Bắt Đầu Làm Bài</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setShowSubmitConfirm(true)}
                className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-950/60 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              >
                <Send className="w-3.5 h-3.5 shrink-0" />
                <span>
                  Nộp Bài ({totalAnswered}/{totalExamQuestions})
                </span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-2 sm:px-6 py-3 sm:py-6 pb-10 flex-1 w-full">
        {/* Results Report on Top if Submitted */}
        {isSubmitted && scoreDetail && (
          <div ref={resultReportRef} className="mb-8">
            <ResultReport
              scoreDetail={scoreDetail}
              examTitle={currentExam.title}
              studentName={studentName}
              studentClass={studentClass}
              durationSeconds={submittedDurationSeconds}
              rankPosition={currentUserRankPosition}
              totalRanked={leaderboardEntries.length}
              violationCount={violationLogs.length}
              onOpenViolationModal={() => setIsViolationLogModalOpen(true)}
              onResetExam={handleResetExam}
              onScrollToQuestions={() => {
                questionsContainerRef.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              onOpenLeaderboard={() => setIsLeaderboardOpen(true)}
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Questions Container (8-9 Cols) */}
          <div ref={questionsContainerRef} className="lg:col-span-8 xl:col-span-9 space-y-5 sm:space-y-6 min-w-0">
            {/* Part Filter Tabs & Font Size Bar */}
            <div className="flex items-center justify-between gap-2 no-print">
              <div className="flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 bg-[#071126] border border-sky-900/60 rounded-2xl overflow-x-auto no-scrollbar text-xs font-bold shadow-lg min-w-0 flex-1 sm:flex-initial">
                <button
                  onClick={() => setActiveFilterPart('all')}
                  className={`min-h-[36px] sm:min-h-[38px] px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl transition-all whitespace-nowrap ${
                    activeFilterPart === 'all'
                      ? 'bg-cyan-500 text-[#071126] font-black shadow-md'
                      : 'text-sky-300 hover:text-white hover:bg-sky-950/60'
                  }`}
                >
                  Tất cả ({totalExamQuestions})
                </button>
                <button
                  onClick={() => setActiveFilterPart('part1')}
                  className={`min-h-[36px] sm:min-h-[38px] px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl transition-all whitespace-nowrap ${
                    activeFilterPart === 'part1'
                      ? 'bg-cyan-500 text-[#071126] font-black shadow-md'
                      : 'text-sky-300 hover:text-white hover:bg-sky-950/60'
                  }`}
                >
                  Phần I ({currentExam.part1.length})
                </button>
                <button
                  onClick={() => setActiveFilterPart('part2')}
                  className={`min-h-[36px] sm:min-h-[38px] px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl transition-all whitespace-nowrap ${
                    activeFilterPart === 'part2'
                      ? 'bg-cyan-500 text-[#071126] font-black shadow-md'
                      : 'text-sky-300 hover:text-white hover:bg-sky-950/60'
                  }`}
                >
                  Phần II ({currentExam.part2.length})
                </button>
                <button
                  onClick={() => setActiveFilterPart('part3')}
                  className={`min-h-[36px] sm:min-h-[38px] px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl transition-all whitespace-nowrap ${
                    activeFilterPart === 'part3'
                      ? 'bg-cyan-500 text-[#071126] font-black shadow-md'
                      : 'text-sky-300 hover:text-white hover:bg-sky-950/60'
                  }`}
                >
                  Phần III ({currentExam.part3.length})
                </button>
                {currentExam.part4 && currentExam.part4.length > 0 && (
                  <button
                    onClick={() => setActiveFilterPart('part4')}
                    className={`min-h-[36px] sm:min-h-[38px] px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl transition-all whitespace-nowrap ${
                      activeFilterPart === 'part4'
                        ? 'bg-cyan-500 text-[#071126] font-black shadow-md'
                        : 'text-sky-300 hover:text-white hover:bg-sky-950/60'
                    }`}
                  >
                    Phần IV ({currentExam.part4.length})
                  </button>
                )}
              </div>

              {/* Chỉnh cỡ chữ (A | A+ | A++) */}
              <div className="flex items-center bg-[#071126] border border-sky-900/70 rounded-xl p-1 text-xs shrink-0">
                {(
                  [
                    { id: 'normal', label: 'A' },
                    { id: 'large', label: 'A+' },
                    { id: 'xlarge', label: 'A++' },
                  ] as const
                ).map((sz) => (
                  <button
                    key={sz.id}
                    type="button"
                    onClick={() => setFontSize(sz.id)}
                    className={`min-w-[28px] sm:min-w-[32px] min-h-[30px] px-1.5 sm:px-2 py-1 rounded-lg font-bold transition-colors ${
                      fontSize === sz.id
                        ? 'bg-cyan-500 text-[#040817]'
                        : 'text-sky-300 hover:text-white'
                    }`}
                    title="Thay đổi cỡ chữ đề thi"
                  >
                    {sz.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Phần I: Trắc nghiệm */}
            {(activeFilterPart === 'all' || activeFilterPart === 'part1') && (
              <section id="section-part1">
                <Part1MultipleChoice
                  questions={currentExam.part1}
                  selectedAnswers={answers.part1}
                  onSelectAnswer={(qId, optKey) => {
                    if (!ensureExamStarted()) return;
                    setAnswers((prev) => ({
                      ...prev,
                      part1: { ...prev.part1, [qId]: optKey },
                    }));
                  }}
                  isSubmitted={isSubmitted}
                  examMode={examMode}
                  bookmarkedQuestions={bookmarkedQuestions}
                  onToggleBookmark={toggleBookmark}
                  fontSize={fontSize}
                  totalQuestions={totalExamQuestions}
                />
              </section>
            )}

            {/* Phần II: Đúng / Sai */}
            {(activeFilterPart === 'all' || activeFilterPart === 'part2') && (
              <section id="section-part2">
                <Part2TrueFalse
                  questions={currentExam.part2}
                  answers={answers.part2}
                  onSelectStatement={(qId, label, val) => {
                    if (!ensureExamStarted()) return;
                    setAnswers((prev) => ({
                      ...prev,
                      part2: {
                        ...prev.part2,
                        [qId]: {
                          ...prev.part2[qId],
                          [label]: val,
                        },
                      },
                    }));
                  }}
                  isSubmitted={isSubmitted}
                  examMode={examMode}
                  bookmarkedQuestions={bookmarkedQuestions}
                  onToggleBookmark={toggleBookmark}
                  fontSize={fontSize}
                  totalQuestions={totalExamQuestions}
                />
              </section>
            )}

            {/* Phần III: Trả lời ngắn */}
            {(activeFilterPart === 'all' || activeFilterPart === 'part3') && (
              <section id="section-part3">
                <Part3ShortAnswer
                  questions={currentExam.part3}
                  answers={answers.part3}
                  onAnswerChange={(qId, val) => {
                    if (!ensureExamStarted()) return;
                    setAnswers((prev) => ({
                      ...prev,
                      part3: { ...prev.part3, [qId]: val },
                    }));
                  }}
                  isSubmitted={isSubmitted}
                  examMode={examMode}
                  bookmarkedQuestions={bookmarkedQuestions}
                  onToggleBookmark={toggleBookmark}
                  fontSize={fontSize}
                  totalQuestions={totalExamQuestions}
                />
              </section>
            )}

            {/* Phần IV: Tự luận ghép bước */}
            {currentExam.part4 &&
              currentExam.part4.length > 0 &&
              (activeFilterPart === 'all' || activeFilterPart === 'part4') && (
                <section id="section-part4">
                  <Part4StepOrdering
                    questions={currentExam.part4}
                    answers={answers.part4}
                    onOrderChange={(qId, orderedIds) => {
                      if (!ensureExamStarted()) return;
                      setInteractedPart4((prev) => {
                        const next = new Set(prev);
                        next.add(qId);
                        return next;
                      });
                      setAnswers((prev) => ({
                        ...prev,
                        part4: { ...prev.part4, [qId]: orderedIds },
                      }));
                    }}
                    isSubmitted={isSubmitted}
                    examMode={examMode}
                    bookmarkedQuestions={bookmarkedQuestions}
                    onToggleBookmark={toggleBookmark}
                    fontSize={fontSize}
                    totalQuestions={totalExamQuestions}
                  />
                </section>
              )}

          </div>

          {/* Right Column: Sticky Question Bubble Navigator (3-4 Cols) */}
          <div className="lg:col-span-4 xl:col-span-3 sticky top-28 space-y-4 no-print">
            <QuestionNav
              exam={currentExam}
              answers={answers}
              currentSection={activeFilterPart === 'all' ? 'part1' : activeFilterPart}
              onNavigate={handleNavigateQuestion}
              bookmarkedQuestions={bookmarkedQuestions}
              onToggleBookmark={toggleBookmark}
              isStarted={isExamStarted}
              isSubmitted={isSubmitted}
              interactedPart4={interactedPart4}
            />
          </div>
        </div>
      </main>

      {/* Modal Điền / Cập Nhật Thông Tin Học Sinh (Trước khi làm bài hoặc khi bấm Sửa) */}
      {isStudentModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#071126] rounded-2xl max-w-md w-full p-6 shadow-2xl border border-cyan-500/40 space-y-5 text-white">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-[#040817] shadow-md">
                  <UserCheck className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-white">
                    Thông Tin Học Sinh Dự Thi
                  </h3>
                  <p className="text-xs text-sky-300">
                    Điền Họ và tên & Lớp trước khi làm bài
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsStudentModalOpen(false)}
                className="p-1.5 rounded-xl bg-[#0b1739] text-sky-300 hover:text-white border border-sky-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {studentInfoError && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-950/80 border border-rose-500/50 text-rose-200 text-xs font-semibold">
                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{studentInfoError}</span>
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!studentName.trim()) {
                  setStudentName('Học sinh Lớp 12');
                }
                if (!studentClass.trim()) {
                  setStudentClass('12A1');
                }
                setStudentInfoError('');
                setIsStudentModalOpen(false);
                if (!isExamStarted && !isSubmitted) {
                  examStartTimeRef.current = Date.now();
                  setTimedExamAudioActive(examMode === 'exam');
                  setIsExamStarted(true);
                }
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-bold text-sky-200 mb-1.5">
                  Họ và tên học sinh
                </label>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => {
                    setStudentName(e.target.value);
                    if (studentInfoError) setStudentInfoError('');
                  }}
                  placeholder="Nhập họ và tên (hoặc bấm Bắt đầu ngay)"
                  className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl bg-[#0b1739] border border-sky-700 text-sm font-semibold text-white placeholder-sky-400/50 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-sky-200 mb-1.5">
                  Lớp
                </label>
                <input
                  type="text"
                  value={studentClass}
                  onChange={(e) => {
                    setStudentClass(e.target.value);
                    if (studentInfoError) setStudentInfoError('');
                  }}
                  placeholder="Nhập lớp (VD: 12A1)"
                  className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl bg-[#0b1739] border border-sky-700 text-sm font-semibold text-amber-300 placeholder-sky-400/50 focus:outline-none focus:border-cyan-400"
                />
                <div className="flex items-center gap-1.5 flex-wrap mt-2">
                  <span className="text-[11px] text-sky-400">Chọn nhanh 1 chạm:</span>
                  {QUICK_CLASSES.map((cls) => (
                    <button
                      key={cls}
                      type="button"
                      onClick={() => {
                        setStudentClass(cls);
                        if (studentInfoError) setStudentInfoError('');
                      }}
                      className={`min-h-[34px] px-3 py-1 rounded-xl text-xs font-bold transition-colors ${
                        studentClass.trim().toUpperCase() === cls
                          ? 'bg-cyan-500 text-[#040817]'
                          : 'bg-[#0b1739] text-sky-300 border border-sky-800'
                      }`}
                    >
                      {cls}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#0b1739]/80 border border-sky-900 text-xs text-sky-300 flex items-center justify-between">
                <span>Đề thi đang chọn:</span>
                <span className="font-bold text-cyan-300">
                  {currentExam.title.toLowerCase().startsWith('đề')
                    ? currentExam.title
                    : `Đề ${currentExam.title}`}{' '}
                  ({currentExam.durationMinutes} phút)
                </span>
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setIsStudentModalOpen(false)}
                  className="min-h-[44px] px-4 py-2 rounded-xl text-xs font-semibold text-sky-300 hover:bg-sky-950 transition-colors"
                >
                  Đóng
                </button>
                <button
                  type="submit"
                  className="min-h-[44px] flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-black text-[#040817] bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 shadow-lg transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>
                    {!isExamStarted && !isSubmitted
                      ? 'Bắt Đầu Làm Bài Ngay'
                      : 'Lưu Thông Tin'}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Confirmation Modal Before Submit */}
      {showSubmitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#071126] rounded-2xl max-w-md w-full p-6 shadow-2xl border border-sky-800 space-y-4 text-white">
            <div className="flex items-center gap-3 text-amber-400">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Xác Nhận Nộp Bài Thi?</h3>
                <p className="text-xs text-sky-300">
                  Kiểm tra tiến độ làm bài & thông tin ghi danh Bảng Xếp Hạng
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0b1739] border border-sky-900 text-xs space-y-2 text-slate-200">
              <div className="flex justify-between">
                <span>Số câu đã hoàn thành:</span>
                <span className="font-bold font-mono text-cyan-300">
                  {totalAnswered}/{totalExamQuestions} câu
                </span>
              </div>
              <div className="flex justify-between">
                <span>Số câu còn bỏ trống:</span>
                <span className="font-bold font-mono text-rose-400">
                  {totalExamQuestions - totalAnswered} câu
                </span>
              </div>
              <div className="flex justify-between">
                <span>Số lần vi phạm quy chế thi:</span>
                <span
                  className={`font-bold font-mono ${
                    violationLogs.length > 0 ? 'text-rose-400' : 'text-emerald-400'
                  }`}
                >
                  {violationLogs.length} lần
                </span>
              </div>
            </div>

            {/* Thông tin học sinh ghi danh Bảng xếp hạng */}
            <div className="p-4 rounded-xl bg-[#0b1739] border border-amber-500/30 space-y-3">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                <User className="w-3.5 h-3.5" />
                <span>Thông tin thí sinh ghi danh Bảng Xếp Hạng:</span>
              </div>
              <div className="grid grid-cols-3 gap-2.5">
                <div className="col-span-2">
                  <label className="block text-[11px] text-sky-300 mb-1">Họ và tên học sinh</label>
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="Nhập họ và tên..."
                    className="w-full px-3 py-1.5 rounded-lg bg-[#071126] border border-sky-800 text-xs text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-sky-300 mb-1">Lớp</label>
                  <input
                    type="text"
                    value={studentClass}
                    onChange={(e) => setStudentClass(e.target.value)}
                    placeholder="12A1"
                    className="w-full px-3 py-1.5 rounded-lg bg-[#071126] border border-sky-800 text-xs text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Sau khi nộp bài, hệ thống sẽ tự động chấm điểm, lưu kết quả vào Bảng xếp hạng và hiển thị toàn bộ lời giải chi tiết.
            </p>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setShowSubmitConfirm(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:bg-sky-950 transition-colors"
              >
                Tiếp tục làm bài
              </button>
              <button
                onClick={handleFinalSubmit}
                className="px-4 py-2 rounded-xl text-xs font-bold text-[#071126] bg-cyan-400 hover:bg-cyan-300 shadow-md transition-colors"
              >
                Đồng ý nộp bài
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Cảnh Báo Vi Phạm Ngay Lập Tức Khi Học Sinh Mở Tab Khác / Khoá Màn Hình / Che Góc Màn Hình Dùng AI */}
      {activeViolationAlert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#071126] rounded-2xl max-w-md w-full p-6 shadow-2xl border-2 border-rose-500 space-y-4 text-white">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-500/50 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-7 h-7 text-rose-400 animate-bounce" />
              </div>
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-rose-500 text-white mb-1">
                  Cảnh báo vi phạm lần #{violationLogs.length}
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-white">
                  Phát Hiện Hành Vi Vi Phạm Quy Chế Thi!
                </h3>
                <p className="text-xs text-rose-200 mt-0.5">
                  Thời điểm ghi nhận: <strong className="font-mono">{activeViolationAlert.timestamp}</strong>
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-rose-950/60 border border-rose-500/40 text-xs sm:text-sm text-rose-100 leading-relaxed font-medium">
              {activeViolationAlert.message}
            </div>

            <div className="p-3 rounded-xl bg-[#0b1739] border border-sky-800/80 text-xs text-sky-200 space-y-1">
              <div className="font-bold text-amber-300">Lưu ý quy chế phòng thi:</div>
              <p className="leading-relaxed">
                Hệ thống tự động phát hiện và ghi nhận mọi trường hợp mở tab khác, khoá màn hình, chia đôi màn hình hoặc mở cửa sổ nổi che một góc màn hình để sử dụng AI giải bài. Toàn bộ số lần vi phạm (<strong className="text-rose-400">{violationLogs.length} lần</strong>) sẽ được hiển thị trên Phiếu Kết Quả và Bảng Xếp Hạng của giáo viên.
              </p>
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-1">
              <button
                type="button"
                onClick={() => {
                  setActiveViolationAlert(null);
                  setIsViolationLogModalOpen(true);
                }}
                className="px-3.5 py-2.5 rounded-xl bg-[#0b1739] hover:bg-sky-900 text-sky-300 border border-sky-800 text-xs font-bold transition-colors"
              >
                Xem lịch sử ({violationLogs.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveViolationAlert(null)}
                className="px-5 py-2.5 rounded-xl bg-rose-500 hover:bg-rose-400 text-white font-black text-xs shadow-lg transition-all"
              >
                Đã Hiểu & Quay Lại Làm Bài
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Nhật Ký Giám Sát & Báo Vi Phạm */}
      {isViolationLogModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#071126] rounded-2xl max-w-lg w-full p-5 sm:p-6 shadow-2xl border border-sky-800 space-y-4 text-white max-h-[88vh] flex flex-col">
            <div className="flex items-center justify-between gap-3 border-b border-sky-900 pb-3">
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                    violationLogs.length > 0
                      ? 'bg-rose-500/20 border-rose-500/40 text-rose-400'
                      : 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400'
                  }`}
                >
                  {violationLogs.length > 0 ? (
                    <ShieldAlert className="w-5 h-5" />
                  ) : (
                    <ShieldCheck className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-white">
                    Nhật Ký Giám Sát & Báo Vi Phạm
                  </h3>
                  <p className="text-xs text-sky-300">
                    Chống mở tab khác, khoá màn hình hoặc mở cửa sổ nổi dùng AI giải bài
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsViolationLogModalOpen(false)}
                className="p-1.5 rounded-xl bg-[#0b1739] text-sky-300 hover:text-white border border-sky-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2.5 pr-1">
              {violationLogs.length === 0 ? (
                <div className="p-6 rounded-xl bg-[#0b1739]/70 border border-emerald-500/30 text-center space-y-2">
                  <ShieldCheck className="w-8 h-8 text-emerald-400 mx-auto" />
                  <div className="text-sm font-bold text-emerald-300">
                    Chưa phát hiện vi phạm nào (0 lần)
                  </div>
                  <p className="text-xs text-sky-300">
                    Học sinh đang làm bài nghiêm túc, không chuyển tab, không khoá màn hình hay dùng cửa sổ nổi AI.
                  </p>
                </div>
              ) : (
                violationLogs.map((v, idx) => (
                  <div
                    key={v.id}
                    className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-500/40 flex items-start justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-md bg-rose-500/20 text-rose-300 border border-rose-500/40 text-[11px] font-bold">
                          Vi phạm #{violationLogs.length - idx}
                        </span>
                        <span className="text-xs font-mono text-amber-300 font-bold">
                          Lúc {v.timestamp}
                        </span>
                      </div>
                      <p className="text-xs text-slate-200 leading-relaxed">{v.message}</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="flex justify-end pt-2 border-t border-sky-900">
              <button
                type="button"
                onClick={() => setIsViolationLogModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#040817] font-bold text-xs transition-colors"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Import Word Modal */}
      <ImportWordModal
        isOpen={isImportWordOpen}
        onClose={() => setIsImportWordOpen(false)}
        onApplyExam={handleApplyWordExam}
        defaultTitle="Đề tự luyện"
      />

      {/* Leaderboard Modal */}
      <LeaderboardModal
        isOpen={isLeaderboardOpen}
        onClose={() => setIsLeaderboardOpen(false)}
        entries={leaderboardEntries}
        allExams={allExams}
        selectedExamId={selectedExamId}
        defaultStudentName={studentName}
        defaultStudentClass={studentClass}
        onAddManualEntry={handleAddManualLeaderboardEntry}
        onDeleteEntry={handleDeleteLeaderboardEntry}
        onResetDefault={handleResetLeaderboardDefault}
      />

      {/* Lesson Catalog Modal (Mục Bài Học: bên trong mỗi bài có Lý thuyết & 2 Đề ôn) */}
      <LessonCatalogModal
        isOpen={isLessonCatalogOpen}
        onClose={() => setIsLessonCatalogOpen(false)}
        selectedExamId={selectedExamId}
        onSelectLessonExam={handleSelectExam}
        initialLessonId={activeLesson?.id}
        initialTab={lessonCatalogTab}
      />

      {/* PWA & Offline Info Modal */}
      <PWAInstallModal
        isOpen={isPWAInfoOpen}
        onClose={() => setIsPWAInfoOpen(false)}
        isOnline={isOnline}
        swReady={swReady}
        isInstalled={isInstalled}
        isIOS={isIOS}
        hasNativePrompt={hasNativePrompt}
        onPromptInstall={promptInstall}
      />

      {/* Mobile Question Navigator Bottom Sheet (chỉ hiện khi bấm nút Phiếu TL trên điện thoại) */}
      {isMobileNavOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end bg-black/75 backdrop-blur-sm animate-fadeIn no-print">
          <div
            className="flex-1"
            onClick={() => setIsMobileNavOpen(false)}
          />
          <div className="bg-[#071126] border-t border-cyan-500/40 rounded-t-3xl p-4 pb-safe max-h-[82vh] overflow-y-auto space-y-3 shadow-2xl">
            <div className="w-10 h-1.5 bg-sky-800 rounded-full mx-auto mb-1" />
            <div className="flex items-center justify-between pb-2 border-b border-sky-900/80">
              <div className="flex items-center gap-2">
                <LayoutGrid className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-extrabold text-white">
                  Phiếu Trả Lời & Tiện Ích
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileNavOpen(false)}
                className="min-w-[36px] min-h-[36px] rounded-xl bg-[#0b1739] text-sky-300 hover:text-white border border-sky-800 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick mode switch on mobile */}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setExamMode((m) => (m === 'exam' ? 'practice' : 'exam'))}
                className={`min-h-[40px] px-3 py-2 rounded-xl text-xs font-bold border flex items-center justify-center gap-1.5 ${
                  examMode === 'exam'
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                    : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{examMode === 'exam' ? 'Chế độ: Thi Tính Giờ' : 'Chế độ: Luyện Tập'}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsMobileNavOpen(false);
                  setIsPWAInfoOpen(true);
                }}
                className="min-h-[40px] px-3 py-2 rounded-xl text-xs font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 flex items-center justify-center gap-1.5"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>{isOnline ? 'Cài App Offline' : 'Đang Chạy Offline'}</span>
              </button>
            </div>

            <QuestionNav
              exam={currentExam}
              answers={answers}
              currentSection={activeFilterPart === 'all' ? 'part1' : activeFilterPart}
              onNavigate={(part, index) => {
                setIsMobileNavOpen(false);
                handleNavigateQuestion(part, index);
              }}
              bookmarkedQuestions={bookmarkedQuestions}
              onToggleBookmark={toggleBookmark}
              isStarted={isExamStarted}
              isSubmitted={isSubmitted}
              interactedPart4={interactedPart4}
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-8 bg-[#030612] border-t border-sky-950 text-slate-400 py-5 pb-safe text-xs no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">GV Thanhbtx-mn</span>
            <span>•</span>
            <span>Tối ưu iPhone 10 – iPhone 18 & Android</span>
          </div>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <button
              type="button"
              onClick={() => setIsPWAInfoOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 font-bold transition-colors"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>{isOnline ? 'Cài App Offline (Không cần Wi-Fi)' : 'Đang Chạy Chế Độ Không Wi-Fi'}</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
