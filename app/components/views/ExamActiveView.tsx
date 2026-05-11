"use client";

import type { ExamQuestion } from "../../lib";
import { topicLabels } from "../../lib";
import { ExamPalette, ExamSlider, ShortcutHint } from "../quiz";
import { FiChevronLeft, FiChevronRight, FiSend, FiX } from "react-icons/fi";

export function ExamActiveView({
  question,
  currentIndex,
  totalQuestions,
  currentSelectedAnswer,
  examTimeLeftLabel,
  examSession,
  onSelectOption,
  onNext,
  onPrevious,
  onSubmit,
  onQuit,
  examResponses,
  examQuestions,
  examIndicatorExpanded,
  onSetCurrentIndex,
  onTogglePalette,
  desktopShortcuts,
}: {
  question: ExamQuestion;
  currentIndex: number;
  totalQuestions: number;
  currentSelectedAnswer: number | undefined;
  examTimeLeftLabel: string;
  examSession: { sessionId: string };
  onSelectOption: (index: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  onSubmit: () => void;
  onQuit: () => void;
  examResponses: Record<string, number | undefined>;
  examQuestions: ExamQuestion[];
  examIndicatorExpanded: boolean;
  onSetCurrentIndex: (index: number) => void;
  onTogglePalette: (expanded: boolean) => void;
  desktopShortcuts?: { previous?: string; next?: string; submit?: string; quit?: string };
}) {
  return (
    <section className="noise-surface rounded-xl border border-border bg-card p-6">
      <div className="mb-4 flex items-center justify-between gap-2 text-sm">
        <div className="flex items-center gap-3">
          <span className="font-medium">Exam Mode</span>
          <span className="text-muted">&bull;</span>
          <span className="text-muted">{topicLabels[question.topic]}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-base font-semibold text-foreground">{examTimeLeftLabel}</span>
          <button
            type="button"
            onClick={onQuit}
            className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs text-muted transition hover:border-error hover:text-error"
          >
            <FiX size={14} />
            Quit
            {desktopShortcuts?.quit && <ShortcutHint keys={desktopShortcuts.quit} />}
          </button>
        </div>
      </div>

      <ExamSlider
        total={totalQuestions}
        current={currentIndex}
        answeredMap={examResponses}
        onNavigate={onSetCurrentIndex}
      />

      <ExamPalette
        questions={examQuestions}
        currentIndex={currentIndex}
        answeredMap={examResponses}
        expanded={examIndicatorExpanded}
        onNavigate={onSetCurrentIndex}
        onToggle={() => onTogglePalette(!examIndicatorExpanded)}
        onFirstUnanswered={() => {
          const idx = examQuestions.findIndex((q) => examResponses[q.id] === undefined);
          if (idx >= 0) onSetCurrentIndex(idx);
        }}
        firstUnansweredIndex={examQuestions.findIndex((q) => examResponses[q.id] === undefined)}
      />

      <div className="mt-5">
        <h2 className="text-xl font-semibold leading-relaxed">{question.prompt}</h2>

        <div className="mt-5 grid gap-3">
          {question.options.map((option, i) => (
            <button
              key={`${question.id}-${i}`}
              type="button"
              onClick={() => onSelectOption(i)}
              className={`rounded-lg border px-4 py-3 text-left transition ${
                currentSelectedAnswer === i
                  ? "border-foreground bg-foreground text-background font-medium"
                  : "border-border bg-background hover:border-foreground/40"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onPrevious}
          disabled={currentIndex === 0}
          className="noise-btn flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm transition hover:border-foreground/40 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <FiChevronLeft size={16} />
          Previous
          {desktopShortcuts?.previous && <ShortcutHint keys={desktopShortcuts.previous} />}
        </button>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onSubmit}
            className="noise-btn flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm transition hover:border-foreground/40"
          >
            <FiSend size={14} />
            Submit
            {desktopShortcuts?.submit && <ShortcutHint keys={desktopShortcuts.submit} />}
          </button>
          <button
            type="button"
            onClick={onNext}
            className="noise-btn flex items-center gap-1.5 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {currentIndex === totalQuestions - 1 ? "Finish" : "Next"}
            {desktopShortcuts?.next && <ShortcutHint keys={desktopShortcuts.next} />}
            <FiChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
