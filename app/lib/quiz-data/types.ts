export type Topic = "oop" | "os" | "ds" | "core";

export type QuizQuestion = {
  id: string;
  topic: Topic;
  prompt: string;
  options: string[];
  answerIndex: number;
  explanation: string;
  references: {
    label: string;
    url: string;
  }[];
};