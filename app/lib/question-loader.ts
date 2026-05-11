import type { Topic, QuizQuestion } from "./quiz-data/types";

export const topicQuestionCounts: Record<Topic, number> = {
  oop: 50,
  os: 115,
  ds: 135,
  core: 31,
  maths: 20,
  vectors: 10,
  matrices: 10,
  differential: 10,
  graphics: 10,
  automata: 70,
  coa: 82,
};

export const totalQuestions = 543;

const questionBankLoaders: Record<Topic, () => Promise<QuizQuestion[]>> = {
  oop: () => import("./quiz-data/oop").then((m) => m.oopQuestions),
  os: () => import("./quiz-data/os").then((m) => m.osQuestions),
  ds: () => import("./quiz-data/ds").then((m) => m.dsQuestions),
  core: () => import("./quiz-data/core").then((m) => m.coreQuestions),
  maths: () => import("./quiz-data/maths").then((m) => m.mathsQuestions),
  vectors: () => import("./quiz-data/vectors").then((m) => m.vectorQuestions),
  matrices: () => import("./quiz-data/matrices").then((m) => m.matrixQuestions),
  differential: () => import("./quiz-data/differential").then((m) => m.differentialQuestions),
  graphics: () => import("./quiz-data/graphics").then((m) => m.graphicsQuestions),
  automata: () => import("./quiz-data/automata").then((m) => m.automataQuestions),
  coa: () => import("./quiz-data/coa").then((m) => m.coaQuestions),
};

const questionCache = new Map<Topic, QuizQuestion[]>();

export async function loadQuestionsForTopic(topic: Topic): Promise<QuizQuestion[]> {
  if (questionCache.has(topic)) return questionCache.get(topic)!;
  const loader = questionBankLoaders[topic];
  if (!loader) return [];
  const questions = await loader();
  questionCache.set(topic, questions);
  return questions;
}
