export type Topic = "oop" | "os" | "ds" | "core" | "maths" | "vectors" | "matrices" | "differential" | "graphics" | "automata" | "coa";

export type QuizQuestion = {
  id: string;
  topic: Topic;
  prompt: string;
  promptLatex?: string;
  options: string[];
  optionsLatex?: string[];
  answerIndex: number;
  explanation: string;
  explanationLatex?: string;
  references: {
    label: string;
    url: string;
  }[];
};
