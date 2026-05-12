"use client";

import type { QuizQuestion, Topic } from "../../lib";
import { topicLabels } from "../../lib";
import { QuestionContent, OptionButton, ExplanationBox, SubjectIcon, ShortcutHint } from "../quiz";
import { FiArrowLeft, FiArrowRight, FiCheckCircle, FiExternalLink, FiXCircle, FiStopCircle } from "react-icons/fi";

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
  onEndQuiz,
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
  onEndQuiz: () => void;
  onChangeTopic: () => void;
  onToggleIssue: () => void;
  onDraftChange: (value: string) => void;
  onSubmitIssue: () => void;
  desktopShortcuts?: { topics?: string; check?: string; next?: string; endQuiz?: string };
}) {
  const optionLocked = revealMode === "instant" ? hasAnswered : hasChecked;

  return (
    <section className="noise-surface rounded-xl border border-border bg-card p-6">
      {selectedTopic === "todays-exam" && (
        <div className="mb-5 rounded-lg border border-[#a855f7]/30 bg-gradient-to-r from-[#a855f7]/10 to-[#6366f1]/10 p-4 text-center">
          <p className="text-lg font-bold text-[#a855f7]">📋 Today's Exam</p>
          <p className="mt-1 text-sm text-muted">
            A full 50-question mixed-subject exam covering Data Structures, Operating Systems, Computer Organization, Databases &amp; Automata Theory
          </p>
        </div>
      )}
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
            className="flex items-center gap-1 rounded-md border border-[#a855f7]/40 bg-[#a855f7]/10 px-2 py-1 text-xs text-[#a855f7] transition hover:border-[#a855f7]/70 hover:bg-[#a855f7]/20"
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
        <div className="flex items-center gap-2">
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
              onClick={onEndQuiz}
              className="noise-btn flex items-center gap-1.5 rounded-lg border border-border/60 px-4 py-2 text-sm text-muted transition hover:border-error/50 hover:text-error"
            >
              <FiStopCircle size={16} />
              End Quiz
              {desktopShortcuts?.endQuiz && <ShortcutHint keys={desktopShortcuts.endQuiz} />}
            </button>
          </div>
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
