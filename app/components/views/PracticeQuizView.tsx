"use client";

import type { QuizQuestion, Topic } from "../../lib";
import { topicLabels } from "../../lib";
import { QuestionContent, OptionButton, ExplanationBox, SubjectIcon, ShortcutHint } from "../quiz";
import { FiArrowLeft, FiArrowRight, FiCheckCircle, FiExternalLink, FiXCircle } from "react-icons/fi";

export function PracticeQuizView({
  question,
  currentIndex,
  totalQuestions,
  selectedTopic,
  currentSelectedAnswer,
  hasAnswered,
  hasChecked,
  shouldReveal,
  isCorrect,
  revealMode,
  issueOpen,
  issueDraft,
  issueSubmitted,
  whatsappConfigured,
  onSelectAnswer,
  onCheck,
  onNext,
  onChangeTopic,
  onToggleIssue,
  onDraftChange,
  onSubmitIssue,
  desktopShortcuts,
}: {
  question: QuizQuestion;
  currentIndex: number;
  totalQuestions: number;
  selectedTopic: Topic;
  currentSelectedAnswer: number | undefined;
  hasAnswered: boolean;
  hasChecked: boolean;
  shouldReveal: boolean;
  isCorrect: boolean;
  revealMode: "check" | "instant";
  issueOpen: boolean;
  issueDraft: string;
  issueSubmitted: boolean;
  whatsappConfigured: boolean;
  onSelectAnswer: (id: string, index: number) => void;
  onCheck: () => void;
  onNext: () => void;
  onChangeTopic: () => void;
  onToggleIssue: () => void;
  onDraftChange: (value: string) => void;
  onSubmitIssue: () => void;
  desktopShortcuts?: { topics?: string; check?: string; next?: string };
}) {
  const optionLocked = revealMode === "instant" ? hasAnswered : hasChecked;

  return (
    <section className="noise-surface rounded-xl border border-border bg-card p-6">
      <div className="mb-4 flex items-center justify-between gap-2 text-sm">
        <div className="flex items-center gap-2">
          <SubjectIcon topic={selectedTopic} />
          <span className="text-muted">{topicLabels[selectedTopic]}</span>
        </div>
        <div className="flex items-center gap-3 text-muted">
          <span>Question {currentIndex + 1} / {totalQuestions}</span>
          {shouldReveal && (
            isCorrect
              ? <FiCheckCircle size={16} className="text-success" />
              : <FiXCircle size={16} className="text-error" />
          )}
          <button
            type="button"
            onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(question.prompt)}`, "_blank", "noopener")}
            className="flex items-center gap-1 rounded-md border border-border/50 px-2 py-1 text-xs transition hover:border-foreground/40 hover:text-foreground"
            title="Search on Google"
          >
            <FiExternalLink size={12} />
            Ask Google
          </button>
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
            isSelected={currentSelectedAnswer === i}
            isCorrect={shouldReveal && i === question.answerIndex}
            isWrong={shouldReveal && currentSelectedAnswer === i && i !== question.answerIndex}
            disabled={optionLocked}
            onSelect={() => onSelectAnswer(question.id, i)}
          />
        ))}
      </div>

      {shouldReveal && (
        <ExplanationBox
          question={question}
          selectedAnswer={currentSelectedAnswer}
          isCorrect={isCorrect}
          issueOpen={issueOpen}
          issueDraft={issueDraft}
          issueSubmitted={issueSubmitted}
          whatsappConfigured={whatsappConfigured}
          onToggleIssue={onToggleIssue}
          onDraftChange={onDraftChange}
          onSubmitIssue={onSubmitIssue}
        />
      )}

      <div className="mt-6 flex items-center justify-between">
        <button
          type="button"
          onClick={onChangeTopic}
          className="noise-btn flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm transition hover:border-foreground/40"
          >
            <FiArrowLeft size={16} />
            Topics
            {desktopShortcuts?.topics && <ShortcutHint keys={desktopShortcuts.topics} />}
          </button>
          <button
            type="button"
            onClick={revealMode === "check" && !hasChecked ? onCheck : onNext}
            disabled={!hasAnswered || (revealMode === "check" && !hasChecked && !hasAnswered)}
            className="noise-btn flex items-center gap-1.5 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {revealMode === "check" && !hasChecked ? (
            <><FiCheckCircle size={16} /> Check{desktopShortcuts?.check && <ShortcutHint keys={desktopShortcuts.check} />}</>
          ) : currentIndex === totalQuestions - 1 ? (
            <>Finish Quiz{desktopShortcuts?.next && <ShortcutHint keys={desktopShortcuts.next} />}</>
          ) : (
            <><span>Next</span> <ShortcutHint keys={desktopShortcuts?.next ?? "Ctrl+Enter"} /> <FiArrowRight size={16} /></>
          )}
        </button>
      </div>
    </section>
  );
}
