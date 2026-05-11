"use client";

import type { QuizQuestion, Topic } from "../../lib";
import { topicLabels } from "../../lib";
import { QuestionContent, IssueForm, SubjectIcon } from "../quiz";
import { FiArrowLeft, FiRefreshCw, FiCheckCircle, FiXCircle } from "react-icons/fi";

function ScoreRing({ pct, size = 120 }: { pct: number; size?: number }) {
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
        fontSize={28}
        fontWeight={700}
        fontFamily="var(--font-nunito), sans-serif"
      >
        {Math.round(pct)}%
      </text>
    </svg>
  );
}

export function PracticeCompleteView({
  topic,
  questions,
  selectedAnswers,
  score,
  raisedIssueCount,
  issueDrafts,
  openIssueForm,
  submittedIssueMap,
  whatsappConfigured,
  onChangeTopic,
  onRetry,
  onToggleIssue,
  onDraftChange,
  onSubmitIssue,
}: {
  topic: Topic;
  questions: QuizQuestion[];
  selectedAnswers: Record<string, number | undefined>;
  score: number;
  raisedIssueCount: number;
  issueDrafts: Record<string, string>;
  openIssueForm: Record<string, boolean>;
  submittedIssueMap: Record<string, boolean>;
  whatsappConfigured: boolean;
  onChangeTopic: () => void;
  onRetry: () => void;
  onToggleIssue: (id: string) => void;
  onDraftChange: (id: string, value: string) => void;
  onSubmitIssue: (question: QuizQuestion) => void;
}) {
  const total = questions.length;
  const pct = total > 0 ? (score / total) * 100 : 0;

  return (
    <section className="noise-surface rounded-xl border border-border bg-card p-6">
      <div className="mb-6 flex items-center gap-3">
        <SubjectIcon topic={topic} />
        <div>
          <h2 className="text-2xl font-semibold">Quiz Complete</h2>
          <p className="text-sm text-muted">{topicLabels[topic]}</p>
        </div>
      </div>

      <div className="flex items-center gap-8 rounded-lg border border-border bg-background p-6">
        <ScoreRing pct={pct} />
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted">
            <span className="h-2.5 w-2.5 rounded-full bg-success" />
            Correct: <strong className="text-foreground">{score}</strong>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted">
            <span className="h-2.5 w-2.5 rounded-full bg-error" />
            Incorrect: <strong className="text-foreground">{total - score}</strong>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted">
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            Unanswered: <strong className="text-foreground">{questions.filter((q) => selectedAnswers[q.id] === undefined).length}</strong>
          </div>
          {raisedIssueCount > 0 && (
            <div className="flex items-center gap-2 text-sm text-muted">
              <span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]" />
              Issues raised: <strong className="text-foreground">{raisedIssueCount}</strong>
            </div>
          )}
        </div>
      </div>

      <h3 className="mb-3 mt-6 text-sm font-semibold text-muted">Answered Questions ({questions.filter((q) => selectedAnswers[q.id] !== undefined).length})</h3>
      <div className="mt-3 grid gap-3">
        {questions.filter((q) => selectedAnswers[q.id] !== undefined).map((q) => {
          const userAnswer = selectedAnswers[q.id];
          const isCorrect = userAnswer === q.answerIndex;
          return (
            <article key={q.id} className="rounded-lg border border-border bg-background p-4">
              <div className="flex items-start gap-2">
                {isCorrect
                  ? <FiCheckCircle size={16} className="mt-0.5 shrink-0 text-success" />
                  : <FiXCircle size={16} className="mt-0.5 shrink-0 text-error" />
                }
                <div className="min-w-0 flex-1">
                  <p className="font-medium"><QuestionContent text={q.prompt} latex={q.promptLatex} /></p>
                  <p className="mt-1 text-sm text-muted">
                    Your answer: {userAnswer !== undefined
                      ? <QuestionContent text={q.options[userAnswer]} latex={q.optionsLatex?.[userAnswer]} />
                      : "No answer"}
                  </p>
                  <p className="text-sm">
                    Correct: <QuestionContent text={q.options[q.answerIndex]} latex={q.optionsLatex?.[q.answerIndex]} />
                  </p>
                  <div className="mt-1 text-sm text-muted">
                    Explanation: {q.explanationLatex ? (
                      <div>
                        <span>{q.explanation}</span>
                        <div className="mt-1"><QuestionContent text="" latex={q.explanationLatex} display /></div>
                      </div>
                    ) : (
                      <span className="font-medium">{q.explanation}</span>
                    )}
                  </div>
                  <p className="mt-2 text-sm font-medium">References</p>
                  <ul className="mt-1 space-y-1 text-sm">
                    {q.references.map((ref) => (
                      <li key={ref.url}>
                        <a href={ref.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 text-muted hover:text-foreground">
                          {ref.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2 text-xs text-muted">
                    Review tip: read the reference once and retry this topic to reinforce the concept.
                  </p>
                  <IssueForm
                    question={q}
                    isOpen={openIssueForm[q.id] === true}
                    draft={issueDrafts[q.id] ?? ""}
                    isSubmitted={submittedIssueMap[q.id] === true}
                    whatsappConfigured={whatsappConfigured}
                    onToggle={() => onToggleIssue(q.id)}
                    onDraftChange={(v) => onDraftChange(q.id, v)}
                    onSubmit={() => onSubmitIssue(q)}
                  />
                </div>
              </div>
            </article>
          );
        })}
        {questions.filter((q) => selectedAnswers[q.id] === undefined).length > 0 && (
          <p className="text-sm text-muted/50 text-center py-4">
            {questions.filter((q) => selectedAnswers[q.id] === undefined).length} question{questions.filter((q) => selectedAnswers[q.id] === undefined).length > 1 ? "s" : ""} skipped — review answered questions above
          </p>
        )}
      </div>

      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={onChangeTopic}
          className="noise-btn flex items-center gap-1.5 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          <FiArrowLeft size={16} />
          Topics
        </button>
        <button
          type="button"
          onClick={onRetry}
          className="noise-btn flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm transition hover:border-foreground/40"
        >
          <FiRefreshCw size={16} />
          Retry
        </button>
      </div>
    </section>
  );
}
