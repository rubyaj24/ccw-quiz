import { coreQuestions } from "./quiz-data/core";
import { dsQuestions } from "./quiz-data/ds";
import { oopQuestions } from "./quiz-data/oop";
import { osQuestions } from "./quiz-data/os";

import type { Topic } from "./quiz-data/types";

export const topicLabels: Record<Topic, string> = {
	oop: "Object-Oriented Programming",
	os: "Operating Systems",
	ds: "Data Structures",
	core: "Core Computer Topics",
};

export const questions = [
	...oopQuestions,
	...osQuestions,
	...dsQuestions,
	...coreQuestions,
];

export { coreQuestions } from "./quiz-data/core";
export { dsQuestions } from "./quiz-data/ds";
export { oopQuestions } from "./quiz-data/oop";
export { osQuestions } from "./quiz-data/os";
export type { QuizQuestion, Topic } from "./quiz-data/types";
