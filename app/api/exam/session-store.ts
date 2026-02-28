import type { ExamConfig, ExamQuestion } from "@/app/lib";

export type StoredExamSession = {
  sessionId: string;
  config: ExamConfig;
  questions: ExamQuestion[];
  answerKeyByQuestionId: Record<string, number>;
  startedAtEpochMs: number;
  expiresAtEpochMs: number;
};

type SessionStore = Map<string, StoredExamSession>;

const getStore = (): SessionStore => {
  const globalStore = globalThis as typeof globalThis & {
    __ccwExamSessionStore?: SessionStore;
  };

  if (!globalStore.__ccwExamSessionStore) {
    globalStore.__ccwExamSessionStore = new Map();
  }

  return globalStore.__ccwExamSessionStore;
};

export const saveExamSession = (session: StoredExamSession): void => {
  const store = getStore();
  store.set(session.sessionId, session);
};

export const getExamSession = (sessionId: string): StoredExamSession | null => {
  const store = getStore();
  return store.get(sessionId) ?? null;
};

export const deleteExamSession = (sessionId: string): void => {
  const store = getStore();
  store.delete(sessionId);
};

export const pruneExpiredSessions = (nowEpochMs: number): void => {
  const store = getStore();

  for (const [sessionId, session] of store.entries()) {
    if (session.expiresAtEpochMs <= nowEpochMs) {
      store.delete(sessionId);
    }
  }
};
