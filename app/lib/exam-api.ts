import type { ExamConfig, ExamQuestion } from "./exam-mode";

export type ExamStartRequest = {
  config?: Partial<ExamConfig>;
  excludeQuestionIds?: string[];
};

export type ExamStartResponse = {
  sessionId: string;
  config: ExamConfig;
  questions: ExamQuestion[];
  startedAtEpochMs: number;
  expiresAtEpochMs: number;
};

export type ExamSubmitRequest = {
  sessionId: string;
  responses: Record<string, number | undefined>;
  submittedAtEpochMs: number;
};

export type ExamSubmitResponse = {
  result: {
    totalQuestions: number;
    correct: number;
    incorrect: number;
    scorePercentage: number;
    topicWiseAccuracy: Record<string, number>;
    timeTakenMinutes: number;
  };
};
