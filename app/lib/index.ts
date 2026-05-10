import type { Topic } from "./quiz-data/types";

export const topicLabels: Record<Topic, string> = {
	oop: "Object-Oriented Programming",
	os: "Operating Systems",
	ds: "Data Structures",
	core: "Core Computer Topics",
	maths: "Mathematics",
	vectors: "Vector Calculus",
	matrices: "Matrices & Determinants",
	differential: "Differential Equations",
	graphics: "Engineering Graphics",
	automata: "Formal Language & Automata Theory",
};

export { topicQuestionCounts, totalQuestions, loadQuestionsForTopic } from "./question-loader";
export { MathInline, MathBlock, MathRenderer } from "../components/math";
export { vec, magnitude, matrix, determinant, curl, divergence, gradient, laplacian, partial, integral, frac, sqrt, sum, prod, binom, set, setBuilder, forall, exists, implies, iff, neg, land, lor, therefore, alpha, beta, gamma, delta, pi, sigma, theta, lambda, phi, omega, infinity, nabla, partialSymbol, emptyset, element, union, intersect, subset, subseteq, cases, text } from "./math-latex";
export {
	EXAM_DEFAULTS,
	allTopics,
	buildExamResult,
	computeTopicQuestionCounts,
	createExamConfig,
	emptyResponses,
	generateExamSession,
	isExamExpired,
	normalizeResponsesForSession,
	selectExamAnswer,
	shouldAutoSubmit,
	shuffleArray,
	createSeededRandom,
} from "./exam-mode";
export {
	deserializeQuestionRepeatState,
	emptyQuestionRepeatState,
	getActiveExcludedQuestionIds,
	markQuestionsWithCooldown,
	pruneExpiredQuestionRepeats,
	serializeQuestionRepeatState,
} from "./question-repeat-guard";
export type { QuizQuestion, Topic } from "./quiz-data/types";
export type {
	ExamConfig,
	ExamQuestion,
	ExamResponses,
	ExamResult,
	ExamSession,
	RandomGenerator,
	TopicWeightage,
} from "./exam-mode";
export type { QuestionRepeatState } from "./question-repeat-guard";
