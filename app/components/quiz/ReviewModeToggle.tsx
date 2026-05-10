"use client";

import type { RevealMode } from "../../lib/quiz-types";

export function ReviewModeToggle({
  revealMode,
  onChange,
}: {
  revealMode: RevealMode;
  onChange: (mode: RevealMode) => void;
}) {
  return (
    <div className="noise-btn w-full max-w-sm rounded-2xl border border-border p-3 font-geist-sans sm:w-auto">
      <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-muted">Review mode</p>
      <div className="relative grid grid-cols-2 rounded-xl bg-accent p-1">
        <span
          aria-hidden="true"
          className={`absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)] rounded-lg bg-foreground shadow-sm transition-transform duration-300 ease-out ${
            revealMode === "instant" ? "translate-x-full" : "translate-x-0"
          }`}
        />
        <button
          type="button"
          onClick={() => onChange("check")}
          aria-pressed={revealMode === "check"}
          className={`relative z-10 rounded-lg px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 ${
            revealMode === "check" ? "text-background" : "text-foreground/80 hover:text-foreground"
          }`}
        >
          Show after Check
        </button>
        <button
          type="button"
          onClick={() => onChange("instant")}
          aria-pressed={revealMode === "instant"}
          className={`relative z-10 rounded-lg px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 ${
            revealMode === "instant" ? "text-background" : "text-foreground/80 hover:text-foreground"
          }`}
        >
          Instant reveal
        </button>
      </div>
    </div>
  );
}
