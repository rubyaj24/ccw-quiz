"use client";

import { MathRenderer } from "../math";
import type { QuizQuestion } from "../../lib";
import { IssueForm } from "./IssueForm";
import { QuestionContent } from "./QuestionContent";

export function ExplanationBox({
  question,
  selectedAnswer,
  isCorrect,
  issueOpen,
  issueDraft,
  issueSubmitted,
  whatsappConfigured,
  onToggleIssue,
  onDraftChange,
  onSubmitIssue,
}: {
  question: QuizQuestion;
  selectedAnswer: number | undefined;
  isCorrect: boolean;
  issueOpen: boolean;
  issueDraft: string;
  issueSubmitted: boolean;
  whatsappConfigured: boolean;
  onToggleIssue: () => void;
  onDraftChange: (value: string) => void;
  onSubmitIssue: () => void;
}) {
  return (
    <article className="mt-5 rounded-lg border border-border bg-background p-4">
      <p className={`text-sm font-medium ${isCorrect ? "text-success" : "text-error"}`}>
        {isCorrect ? "Correct" : "Review needed"}
      </p>
      <p className="mt-1 text-sm text-muted">
        Your answer:{" "}
        {selectedAnswer !== undefined ? (
          <MathRenderer text={question.options[selectedAnswer]} latex={question.optionsLatex?.[selectedAnswer]} />
        ) : (
          "No answer"
        )}
      </p>
      <p className="text-sm">
        Correct answer:{" "}
        <MathRenderer text={question.options[question.answerIndex]} latex={question.optionsLatex?.[question.answerIndex]} />
      </p>

      <div className="mt-2 text-sm text-muted">
        Explanation:{" "}
        {question.explanationLatex ? (
          <div>
            <span>{question.explanation}</span>
            <div className="mt-1">
              <MathRenderer latex={question.explanationLatex} display />
            </div>
          </div>
        ) : (
          <span className="font-medium">{question.explanation}</span>
        )}
      </div>

      <p className="mt-2 text-sm font-medium">References</p>
      <ul className="mt-1 space-y-1 text-sm">
        {question.references.map((ref) => (
          <li key={ref.url}>
            <a href={ref.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 text-muted hover:text-foreground transition-colors">
              {ref.label}
            </a>
          </li>
        ))}
      </ul>

      <IssueForm
        question={question}
        isOpen={issueOpen}
        draft={issueDraft}
        isSubmitted={issueSubmitted}
        whatsappConfigured={whatsappConfigured}
        onToggle={onToggleIssue}
        onDraftChange={onDraftChange}
        onSubmit={onSubmitIssue}
      />
    </article>
  );
}
