"use client";

import type { QuizQuestion, Topic } from "../../lib";
import { OptionButton, ExplanationBox, SubjectIcon, QuestionContent } from "../quiz";
import { FiArrowLeft, FiArrowRight, FiBarChart2, FiCheckCircle, FiXCircle } from "react-icons/fi";

export function ReviewView({
  question,
  currentIndex,
  totalQuestions,
  selectedTopic,
  selectedAnswers,
  onPrevious,
  onNext,
  onViewResults,
  onChangeTopic,
}: {
  question: QuizQuestion;
  currentIndex: number;
  totalQuestions: number;
  selectedTopic: Topic;
  selectedAnswers: Record<string, number | undefined>;
  onPrevious: () => void;
  onNext: () => void;
  onViewResults: () => void;
  onChangeTopic: () => void;
}) {
  const userAnswer = selectedAnswers[question.id];
  const isCorrect = userAnswer === question.answerIndex;

  return (
    <section className="noise-surface rounded-xl border border-border bg-card p-6">
      <div className="mb-4 flex items-center justify-between gap-2 text-sm">
        <div className="flex items-center gap-2">
          <SubjectIcon topic={selectedTopic} />
          <span className="text-muted">Review</span>
        </div>
        <div className="flex items-center gap-3 text-muted">
          <span>Reviewed {currentIndex + 1} / {totalQuestions}</span>
          {isCorrect
            ? <FiCheckCircle size={16} className="text-success" />
            : <FiXCircle size={16} className="text-error" />
          }
        </div>
      </div>

      <h2 className="text-xl font-semibold leading-relaxed">
        <QuestionContent text={question.prompt} latex={question.promptLatex} />
      </h2>

      <div className="mt-5 grid gap-3">
        {question.options.map((option, i) => (
          <OptionButton
            key={`${question.id}-${i}`}
            label={option}
            latex={question.optionsLatex?.[i]}
            isSelected={userAnswer === i}
            isCorrect={i === question.answerIndex}
            isWrong={userAnswer === i && i !== question.answerIndex}
            disabled={true}
            onSelect={() => {}}
          />
        ))}
      </div>

      <ExplanationBox
        question={question}
        selectedAnswer={userAnswer}
        isCorrect={isCorrect}
        issueOpen={false}
        issueDraft=""
        issueSubmitted={false}
        whatsappConfigured={false}
        onToggleIssue={() => {}}
        onDraftChange={() => {}}
        onSubmitIssue={() => {}}
      />

      <div className="mt-6 flex items-center justify-between">
        <button
          type="button"
          onClick={onChangeTopic}
          className="noise-btn flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm transition hover:border-foreground/40"
        >
          <FiArrowLeft size={16} />
          Topics
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onPrevious}
            disabled={currentIndex === 0}
            className="noise-btn flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm transition hover:border-foreground/40 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <FiArrowLeft size={16} />
            Previous
          </button>

          {currentIndex === totalQuestions - 1 ? (
            <button
              type="button"
              onClick={onViewResults}
              className="noise-btn flex items-center gap-1.5 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              <FiBarChart2 size={16} />
              View Results
            </button>
          ) : (
            <button
              type="button"
              onClick={onNext}
              className="noise-btn flex items-center gap-1.5 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Next
              <FiArrowRight size={16} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
