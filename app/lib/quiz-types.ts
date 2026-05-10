"use client";

import type { Topic, QuizQuestion } from "./quiz-data/types";

export type QuizState = "select" | "active" | "complete" | "exam-instructions" | "exam-active" | "exam-complete";
export type RevealMode = "check" | "instant";

export type QuizActions = {
  startQuiz: (topic: Topic) => void;
  selectAnswer: (questionId: string, optionIndex: number) => void;
  checkAnswer: () => void;
  goNext: () => void;
  resetQuiz: () => void;
  openExamInstructions: () => void;
  startExam: () => Promise<void>;
  selectExamOption: (optionIndex: number) => void;
  goToNextExamQuestion: () => void;
  goToPreviousExamQuestion: () => void;
  submitExam: (submittedAtEpochMs?: number) => Promise<void>;
  toggleIssueForm: (questionId: string) => void;
  updateIssueDraft: (questionId: string, value: string) => void;
  submitIssue: (question: QuizQuestion) => void;
  resetRepeatHistory: () => void;
  setRevealMode: (mode: RevealMode) => void;
  setExamQuestionCountInput: (count: number) => void;
  setExamTimeLimitInput: (minutes: number) => void;
  setRepeatCooldownMinutes: (minutes: number) => void;
  setCurrentIndex: (index: number) => void;
  setExamIndicatorExpanded: (expanded: boolean) => void;
  quitExam: () => void;
};
