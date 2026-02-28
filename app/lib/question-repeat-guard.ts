export type QuestionRepeatState = Record<string, number>;

export const emptyQuestionRepeatState = (): QuestionRepeatState => {
  return {};
};

export const pruneExpiredQuestionRepeats = (
  state: QuestionRepeatState,
  nowEpochMs: number,
): QuestionRepeatState => {
  const pruned: QuestionRepeatState = {};

  for (const [questionId, expiresAtEpochMs] of Object.entries(state)) {
    if (expiresAtEpochMs > nowEpochMs) {
      pruned[questionId] = expiresAtEpochMs;
    }
  }

  return pruned;
};

export const getActiveExcludedQuestionIds = (
  state: QuestionRepeatState,
  nowEpochMs: number,
): string[] => {
  return Object.entries(state)
    .filter(([, expiresAtEpochMs]) => expiresAtEpochMs > nowEpochMs)
    .map(([questionId]) => questionId);
};

export const markQuestionsWithCooldown = (
  state: QuestionRepeatState,
  input: {
    questionIds: readonly string[];
    nowEpochMs: number;
    cooldownMinutes: number;
  },
): QuestionRepeatState => {
  if (input.cooldownMinutes <= 0) {
    throw new Error("cooldownMinutes must be greater than 0.");
  }

  const expiresAtEpochMs = input.nowEpochMs + input.cooldownMinutes * 60_000;
  const next: QuestionRepeatState = { ...state };

  for (const questionId of input.questionIds) {
    const existingExpiry = next[questionId] ?? 0;
    next[questionId] = Math.max(existingExpiry, expiresAtEpochMs);
  }

  return next;
};

export const serializeQuestionRepeatState = (state: QuestionRepeatState): string => {
  return JSON.stringify(state);
};

export const deserializeQuestionRepeatState = (rawValue: string): QuestionRepeatState => {
  try {
    const parsed = JSON.parse(rawValue) as unknown;

    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return {};
    }

    const normalized: QuestionRepeatState = {};

    for (const [questionId, expiresAtEpochMs] of Object.entries(parsed)) {
      if (typeof expiresAtEpochMs === "number" && Number.isFinite(expiresAtEpochMs)) {
        normalized[questionId] = expiresAtEpochMs;
      }
    }

    return normalized;
  } catch {
    return {};
  }
};
