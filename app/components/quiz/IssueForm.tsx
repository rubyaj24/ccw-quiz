"use client";

import { MathRenderer } from "../math";
import type { QuizQuestion } from "../../lib";

export function IssueForm({
  question,
  isOpen,
  draft,
  isSubmitted,
  whatsappConfigured,
  onToggle,
  onDraftChange,
  onSubmit,
}: {
  question: QuizQuestion;
  isOpen: boolean;
  draft: string;
  isSubmitted: boolean;
  whatsappConfigured: boolean;
  onToggle: () => void;
  onDraftChange: (value: string) => void;
  onSubmit: () => void;
}) {
  return (
    <div className="mt-3 rounded-lg border border-border p-3">
      <button
        type="button"
        onClick={onToggle}
        className="text-sm font-medium underline underline-offset-2 text-muted hover:text-foreground transition-colors"
      >
        {isOpen ? "Hide issue form" : "Raise correctness issue"}
      </button>

      {isOpen && (
        <div className="mt-2">
          <label className="mb-1 block text-xs font-medium text-muted" htmlFor={`issue-${question.id}`}>
            What seems incorrect in this question?
          </label>
          <textarea
            id={`issue-${question.id}`}
            value={draft}
            onChange={(e) => onDraftChange(e.target.value)}
            rows={3}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted"
            placeholder="Example: Option B and C both seem valid because..."
          />
          <button
            type="button"
            onClick={onSubmit}
            disabled={draft.trim().length === 0 || !whatsappConfigured}
            className="mt-2 rounded-md bg-foreground px-3 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Send to WhatsApp
          </button>
        </div>
      )}

      {isSubmitted && (
        <p className="mt-2 text-xs text-muted">Issue opened in WhatsApp for this question.</p>
      )}
    </div>
  );
}
