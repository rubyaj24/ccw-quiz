"use client";

import type { ExamResult, Topic } from "../../lib";
import { topicLabels } from "../../lib";
import { FiHome, FiRefreshCw, FiClock, FiTarget, FiBookOpen } from "react-icons/fi";

function ScoreRing({ pct, size = 140, fontSize = 34 }: { pct: number; size?: number; fontSize?: number }) {
  const r = (size - 24) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;

  return (
    <svg width={size} height={size} className="shrink-0">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#2a2a2a" strokeWidth={10} />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="#f5f5f5"
        strokeWidth={10}
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        className="transition-all duration-1000 ease-out"
      />
      <text
        x={size / 2}
        y={size / 2}
        textAnchor="middle"
        dominantBaseline="central"
        fill="#f5f5f5"
        fontSize={fontSize}
        fontWeight={700}
        fontFamily="var(--font-nunito), sans-serif"
      >
        {Math.round(pct)}%
      </text>
    </svg>
  );
}

function AccuracyBar({ label, pct, count }: { label: string; pct: number; count: number }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs">
        <span className="text-muted">{label}</span>
        <span className="text-foreground">
          {Math.round(pct)}% <span className="text-muted">({count}q)</span>
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#2a2a2a]">
        <div
          className="h-full rounded-full bg-[#f5f5f5] transition-all duration-700 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

const CAPTIONS: [number, string[]][] = [
  [90, [
    "Flawless. You're not just prepared — you're the preparation.",
    "If exams were battles, you'd be the general.",
    "At this rate, the syllabus should be scared of you.",
    "You didn't just pass — you made the question bank your biography.",
  ]],
  [75, [
    "Strong work. The gaps are closing fast.",
    "You're in solid shape. Keep sharpening those edges.",
    "Nearly there. One more revision and it's yours.",
    "Above the line — now hold it and push higher.",
  ]],
  [60, [
    "Decent footing. The foundation is there, just needs polish.",
    "You know enough to be dangerous. Time to seal the leaks.",
    "Middle of the pack — but the top is within reach.",
    "You're further along than you think. Keep grinding.",
  ]],
  [40, [
    "Rough ride, but you showed up. That counts.",
    "Not where you want to be, but now you know where to dig.",
    "This is just a diagnostic — the real win is the work ahead.",
    "Low score, high signal. You know exactly what to fix.",
  ]],
  [0, [
    "Tough one. The only way from here is up.",
    "Consider this a heat map of what needs attention.",
    "Every expert was once a beginner who didn't quit.",
    "This isn't a verdict — it's a starting point.",
  ]],
];

export function ExamCompleteView({
  examResult,
  examTopicBreakdown,
  onBackToHome,
  onRetryExam,
  onPracticeTopic,
}: {
  examResult: ExamResult;
  examTopicBreakdown: Record<Topic, number>;
  onBackToHome: () => void;
  onRetryExam: () => void;
  onPracticeTopic?: (topic: Topic) => void;
}) {
  const topics = (Object.keys(examResult.topicWiseAccuracy) as Topic[]).filter(
    (t) => examTopicBreakdown[t] > 0
  );

  const captionBucket = CAPTIONS.find(([threshold]) => examResult.scorePercentage >= threshold) ?? CAPTIONS.at(-1)!;
  const caption = captionBucket[1][Math.floor(Math.random() * captionBucket[1].length)];

  return (
    <section className="noise-surface rounded-xl border border-border bg-card p-6">
      <h2 className="text-2xl font-semibold">Exam Complete</h2>
      <p className="mt-1 text-sm italic text-muted">&ldquo;{caption}&rdquo;</p>

      <div className="mt-6 flex flex-col items-center gap-8 sm:flex-row">
        <ScoreRing pct={examResult.scorePercentage} />
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-3 text-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background">
              <FiTarget size={18} className="text-success" />
            </div>
            <div>
              <p className="text-muted">Correct</p>
              <p className="text-lg font-bold">{examResult.correct}/{examResult.totalQuestions}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background">
              <FiTarget size={18} className="text-error" />
            </div>
            <div>
              <p className="text-muted">Incorrect</p>
              <p className="text-lg font-bold">{examResult.incorrect}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background">
              <FiClock size={18} className="text-muted" />
            </div>
            <div>
              <p className="text-muted">Duration</p>
              <p className="text-lg font-bold">{examResult.timeTakenMinutes} min</p>
            </div>
          </div>
        </div>
      </div>

      {topics.length > 0 && (
        <div className="mt-6 space-y-3">
          <h3 className="text-sm font-medium text-muted">Topic-wise Accuracy</h3>
          {topics.map((topic) => (
            <div key={topic} className="flex items-center gap-3">
              <div className="flex-1">
                <AccuracyBar
                  label={topicLabels[topic]}
                  pct={examResult.topicWiseAccuracy[topic]}
                  count={examTopicBreakdown[topic]}
                />
              </div>
              {onPracticeTopic && (
                <button
                  type="button"
                  onClick={() => onPracticeTopic(topic)}
                  className="noise-btn shrink-0 rounded-lg border border-border/60 px-2.5 py-1.5 text-xs text-muted transition hover:border-foreground/40 hover:text-foreground"
                  title={`Practice ${topicLabels[topic]}`}
                >
                  <FiBookOpen size={13} />
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 flex gap-3">
        <button
          type="button"
          onClick={onBackToHome}
          className="noise-btn flex items-center gap-1.5 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          <FiHome size={16} />
          Home
        </button>
        <button
          type="button"
          onClick={onRetryExam}
          className="noise-btn flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm transition hover:border-foreground/40"
        >
          <FiRefreshCw size={16} />
          Retry
        </button>
      </div>
    </section>
  );
}
