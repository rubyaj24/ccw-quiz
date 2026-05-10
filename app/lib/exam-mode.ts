import type { QuizQuestion, Topic } from "./quiz-data/types";

export type ExamResult = {
  totalQuestions: number;
  correct: number;
  incorrect: number;
  scorePercentage: number;
  topicWiseAccuracy: Record<Topic, number>;
  timeTakenMinutes: number;
};

export type TopicWeightage = Record<Topic, number>;

export type ExamConfig = {
  totalQuestions: number;
  timeLimitMinutes: number;
  topics: Topic[];
  topicWeightage: TopicWeightage;
};

export type ExamQuestion = {
  id: string;
  topic: Topic;
  prompt: string;
  options: string[];
};

export type ExamSession = {
  config: ExamConfig;
  questions: ExamQuestion[];
  startedAtEpochMs: number;
  expiresAtEpochMs: number;
  answerKeyByQuestionId: Record<string, number>;
};

export type ExamResponses = Record<string, number | undefined>;

export type RandomGenerator = () => number;

const ALL_TOPICS: Topic[] = ["oop", "os", "ds", "core", "maths", "vectors", "matrices", "differential", "discrete", "graphics"];

export const EXAM_DEFAULTS: ExamConfig = {
  totalQuestions: 100,
  timeLimitMinutes: 120,
  topics: ["oop", "os", "ds", "core"],
  topicWeightage: {
    oop: 25,
    os: 30,
    ds: 30,
    core: 15,
    maths: 0,
    vectors: 0,
    matrices: 0,
    differential: 0,
    discrete: 0,
    graphics: 0,
  },
};

const emptyTopicRecord = (): Record<Topic, number> => ({
  oop: 0,
  os: 0,
  ds: 0,
  core: 0,
  maths: 0,
  vectors: 0,
  matrices: 0,
  differential: 0,
  discrete: 0,
  graphics: 0,
});

const emptyQuestionArrayRecord = (): Record<Topic, QuizQuestion[]> => ({
  oop: [],
  os: [],
  ds: [],
  core: [],
  maths: [],
  vectors: [],
  matrices: [],
  differential: [],
  discrete: [],
  graphics: [],
});

export const createSeededRandom = (seed: number): RandomGenerator => {
  let state = seed >>> 0;

  return () => {
    state = (1664525 * state + 1013904223) >>> 0;
    return state / 4294967296;
  };
};

export const createExamConfig = (overrides: Partial<ExamConfig> = {}): ExamConfig => {
  const topics = (overrides.topics ?? EXAM_DEFAULTS.topics).filter((topic, index, list) => list.indexOf(topic) === index);

  if (topics.length === 0) {
    throw new Error("Exam must include at least one topic.");
  }

  const totalQuestions = overrides.totalQuestions ?? EXAM_DEFAULTS.totalQuestions;
  const timeLimitMinutes = overrides.timeLimitMinutes ?? EXAM_DEFAULTS.timeLimitMinutes;

  if (totalQuestions <= 0) {
    throw new Error("totalQuestions must be greater than 0.");
  }

  if (timeLimitMinutes <= 0) {
    throw new Error("timeLimitMinutes must be greater than 0.");
  }

  const topicWeightage: TopicWeightage = {
    ...EXAM_DEFAULTS.topicWeightage,
    ...(overrides.topicWeightage ?? {}),
  };

  const activeWeight = topics.reduce((sum, topic) => sum + Math.max(0, topicWeightage[topic]), 0);
  if (activeWeight <= 0) {
    throw new Error("At least one selected topic must have positive weightage.");
  }

  return {
    totalQuestions,
    timeLimitMinutes,
    topics,
    topicWeightage,
  };
};

export const computeTopicQuestionCounts = (config: ExamConfig): Record<Topic, number> => {
  const activeWeight = config.topics.reduce((sum, topic) => sum + Math.max(0, config.topicWeightage[topic]), 0);

  if (activeWeight <= 0) {
    throw new Error("Active topic weightage must be greater than 0.");
  }

  const counts = emptyTopicRecord();

  const fractions = config.topics.map((topic, topicOrder) => {
    const rawCount = (config.totalQuestions * Math.max(0, config.topicWeightage[topic])) / activeWeight;
    const baseCount = Math.floor(rawCount);
    counts[topic] = baseCount;

    return {
      topic,
      topicOrder,
      remainder: rawCount - baseCount,
    };
  });

  let remaining = config.totalQuestions - config.topics.reduce((sum, topic) => sum + counts[topic], 0);

  const byRemainder = [...fractions].sort((a, b) => {
    if (b.remainder !== a.remainder) {
      return b.remainder - a.remainder;
    }

    return a.topicOrder - b.topicOrder;
  });

  for (let index = 0; index < byRemainder.length && remaining > 0; index += 1) {
    counts[byRemainder[index].topic] += 1;
    remaining -= 1;
  }

  return counts;
};

export const shuffleArray = <T>(items: readonly T[], random: RandomGenerator): T[] => {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(random() * (index + 1));
    const current = shuffled[index];
    shuffled[index] = shuffled[randomIndex];
    shuffled[randomIndex] = current;
  }

  return shuffled;
};

const shuffleQuestionOptions = (
  question: QuizQuestion,
  random: RandomGenerator,
): { publicQuestion: ExamQuestion; correctAnswerIndex: number } => {
  const optionIndexes = question.options.map((_, index) => index);
  const shuffledIndexes = shuffleArray(optionIndexes, random);

  const options = shuffledIndexes.map((index) => question.options[index]);
  const correctAnswerIndex = shuffledIndexes.indexOf(question.answerIndex);

  return {
    publicQuestion: {
      id: question.id,
      topic: question.topic,
      prompt: question.prompt,
      options,
    },
    correctAnswerIndex,
  };
};

const dedupeByQuestionId = (questions: readonly QuizQuestion[]): QuizQuestion[] => {
  const seen = new Set<string>();
  const deduped: QuizQuestion[] = [];

  for (const question of questions) {
    if (seen.has(question.id)) {
      continue;
    }

    seen.add(question.id);
    deduped.push(question);
  }

  return deduped;
};

export const generateExamSession = (
  questionBank: readonly QuizQuestion[],
  input: {
    config?: Partial<ExamConfig>;
    random?: RandomGenerator;
    seed?: number;
    startedAtEpochMs: number;
    excludeQuestionIds?: readonly string[];
  },
): ExamSession => {
  const config = createExamConfig(input.config);
  const random = input.random ?? createSeededRandom(input.seed ?? 1);
  const excludedIds = new Set(input.excludeQuestionIds ?? []);

  const filteredByTopic = dedupeByQuestionId(questionBank).filter(
    (question) => config.topics.includes(question.topic) && !excludedIds.has(question.id),
  );
  const requestedCounts = computeTopicQuestionCounts(config);

  const questionsByTopic = emptyQuestionArrayRecord();

  for (const question of filteredByTopic) {
    questionsByTopic[question.topic].push(question);
  }

  const selectedQuestions: QuizQuestion[] = [];
  const selectedIds = new Set<string>();

  for (const topic of config.topics) {
    const topicPool = shuffleArray(questionsByTopic[topic], random);
    const takeCount = Math.min(requestedCounts[topic], topicPool.length);

    for (let index = 0; index < takeCount; index += 1) {
      const question = topicPool[index];

      if (!selectedIds.has(question.id)) {
        selectedIds.add(question.id);
        selectedQuestions.push(question);
      }
    }
  }

  const remainingNeeded = config.totalQuestions - selectedQuestions.length;

  if (remainingNeeded > 0) {
    const leftovers = shuffleArray(
      filteredByTopic.filter((question) => !selectedIds.has(question.id)),
      random,
    );

    for (let index = 0; index < remainingNeeded && index < leftovers.length; index += 1) {
      const question = leftovers[index];
      selectedIds.add(question.id);
      selectedQuestions.push(question);
    }
  }

  if (selectedQuestions.length < config.totalQuestions) {
    throw new Error(
      `Not enough unique questions for requested exam. Requested ${config.totalQuestions}, available ${selectedQuestions.length}.`,
    );
  }

  const randomizedQuestions = shuffleArray(selectedQuestions, random);
  const publicQuestions: ExamQuestion[] = [];
  const answerKeyByQuestionId: Record<string, number> = {};

  for (const question of randomizedQuestions) {
    const { publicQuestion, correctAnswerIndex } = shuffleQuestionOptions(question, random);

    publicQuestions.push(publicQuestion);
    answerKeyByQuestionId[publicQuestion.id] = correctAnswerIndex;
  }

  return {
    config,
    questions: publicQuestions,
    startedAtEpochMs: input.startedAtEpochMs,
    expiresAtEpochMs: input.startedAtEpochMs + config.timeLimitMinutes * 60_000,
    answerKeyByQuestionId,
  };
};

export const selectExamAnswer = (
  responses: ExamResponses,
  questionId: string,
  optionIndex: number,
  optionCount: number,
): ExamResponses => {
  if (optionIndex < 0 || optionIndex >= optionCount) {
    throw new Error("optionIndex is out of range for question options.");
  }

  return {
    ...responses,
    [questionId]: optionIndex,
  };
};

export const isExamExpired = (session: ExamSession, nowEpochMs: number): boolean => {
  return nowEpochMs >= session.expiresAtEpochMs;
};

export const shouldAutoSubmit = (session: ExamSession, nowEpochMs: number): boolean => {
  return isExamExpired(session, nowEpochMs);
};

const toPercentage = (numerator: number, denominator: number): number => {
  if (denominator <= 0) {
    return 0;
  }

  return Number(((numerator / denominator) * 100).toFixed(2));
};

export const buildExamResult = (
  session: ExamSession,
  responses: ExamResponses,
  submittedAtEpochMs: number,
): ExamResult => {
  const totalQuestions = session.questions.length;
  let correct = 0;

  const topicTotals = emptyTopicRecord();
  const topicCorrect = emptyTopicRecord();

  for (const question of session.questions) {
    topicTotals[question.topic] += 1;

    const selectedOption = responses[question.id];
    const isCorrect = selectedOption !== undefined && selectedOption === session.answerKeyByQuestionId[question.id];

    if (isCorrect) {
      correct += 1;
      topicCorrect[question.topic] += 1;
    }
  }

  const incorrect = totalQuestions - correct;
  const elapsedMs = Math.max(0, submittedAtEpochMs - session.startedAtEpochMs);
  const maxAllowedMs = session.config.timeLimitMinutes * 60_000;
  const boundedElapsedMs = Math.min(elapsedMs, maxAllowedMs);

  const topicWiseAccuracy = emptyTopicRecord();
  for (const topic of ALL_TOPICS) {
    topicWiseAccuracy[topic] = toPercentage(topicCorrect[topic], topicTotals[topic]);
  }

  return {
    totalQuestions,
    correct,
    incorrect,
    scorePercentage: toPercentage(correct, totalQuestions),
    topicWiseAccuracy,
    timeTakenMinutes: Number((boundedElapsedMs / 60_000).toFixed(2)),
  };
};

export const emptyResponses = (): ExamResponses => {
  return {};
};

export const normalizeResponsesForSession = (
  session: ExamSession,
  responses: ExamResponses,
): ExamResponses => {
  const validQuestionIds = new Set(session.questions.map((question) => question.id));
  const normalized: ExamResponses = {};

  for (const [questionId, selectedOption] of Object.entries(responses)) {
    if (!validQuestionIds.has(questionId)) {
      continue;
    }

    const question = session.questions.find((current) => current.id === questionId);
    if (!question || selectedOption === undefined) {
      continue;
    }

    if (selectedOption >= 0 && selectedOption < question.options.length) {
      normalized[questionId] = selectedOption;
    }
  }

  return normalized;
};

export const allTopics = (): Topic[] => {
  return [...ALL_TOPICS];
};
