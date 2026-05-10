"use client";

export function ExamPalette({
  questions,
  currentIndex,
  answeredMap,
  expanded,
  onNavigate,
  onToggle,
  onFirstUnanswered,
  firstUnansweredIndex,
}: {
  questions: { id: string }[];
  currentIndex: number;
  answeredMap: Record<string, number | undefined>;
  expanded: boolean;
  onNavigate: (index: number) => void;
  onToggle: () => void;
  onFirstUnanswered: () => void;
  firstUnansweredIndex: number;
}) {
  const answeredCount = questions.reduce((c, q) => (answeredMap[q.id] !== undefined ? c + 1 : c), 0);
  const unansweredCount = questions.length - answeredCount;

  return (
    <div className="rounded-lg border border-border p-3">
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-foreground" />
            Current
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-success" />
            Answered ({answeredCount})
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            Unanswered ({unansweredCount})
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {firstUnansweredIndex >= 0 && (
            <button
              type="button"
              onClick={onFirstUnanswered}
              className="rounded-md border border-border px-2.5 py-1 text-xs font-medium text-muted hover:text-foreground transition-colors"
            >
              First unanswered
            </button>
          )}
          <button
            type="button"
            onClick={onToggle}
            className="rounded-md border border-border px-2.5 py-1 text-xs font-medium text-muted hover:text-foreground transition-colors"
          >
            {expanded ? "Hide palette" : `Show palette (${questions.length})`}
          </button>
        </div>
      </div>

      {expanded && (
        <div className="mt-3 max-h-80 overflow-y-auto rounded-md border border-border p-2">
          <div className="grid grid-cols-8 gap-2 sm:grid-cols-10 md:grid-cols-12">
            {questions.map((q, index) => {
              const isCurrent = index === currentIndex;
              const isAnswered = answeredMap[q.id] !== undefined;
              const tone = isCurrent
                ? "border-foreground bg-foreground text-background"
                : isAnswered
                  ? "border-success bg-success/10 text-success"
                  : "border-border text-muted";
              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => onNavigate(index)}
                  aria-label={`Go to question ${index + 1}`}
                  aria-current={isCurrent ? "true" : undefined}
                  className={`rounded-md border px-2 py-1 text-xs font-medium transition ${tone}`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
