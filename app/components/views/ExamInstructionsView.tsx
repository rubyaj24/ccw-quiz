"use client";

import { IntensityBadge, SliderCheckpoints } from "../quiz";
import { FiArrowLeft, FiPlay, FiRefreshCw } from "react-icons/fi";

export function ExamInstructionsView({
  boundedQuestionCount,
  boundedTimeLimitMinutes,
  overallExamIntensity,
  examQuestionCountInput,
  examTimeLimitInput,
  repeatCooldownMinutes,
  examConfigError,
  activeRepeatBlockedCount,
  examQuestionCountOptions,
  examTimeLimitOptions,
  repeatCooldownOptions,
  onBack,
  onResetRepeatHistory,
  onStartExam,
  onQuestionCountChange,
  onTimeLimitChange,
  onCooldownChange,
}: {
  boundedQuestionCount: number;
  boundedTimeLimitMinutes: number;
  overallExamIntensity: "Low" | "Medium" | "High";
  examQuestionCountInput: number;
  examTimeLimitInput: number;
  repeatCooldownMinutes: number;
  examConfigError: string | null;
  activeRepeatBlockedCount: number;
  examQuestionCountOptions: number[];
  examTimeLimitOptions: number[];
  repeatCooldownOptions: number[];
  onBack: () => void;
  onResetRepeatHistory: () => void;
  onStartExam: () => void;
  onQuestionCountChange: (count: number) => void;
  onTimeLimitChange: (minutes: number) => void;
  onCooldownChange: (minutes: number) => void;
}) {
  return (
    <section className="noise-surface rounded-xl border border-border bg-card p-6">
      <h2 className="text-2xl font-playfair-display font-semibold mb-4">Exam Instructions</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
        <li>You will receive {boundedQuestionCount} mixed-topic MCQs in randomized order.</li>
        <li>Time limit is {boundedTimeLimitMinutes} minutes; exam auto-submits at expiry.</li>
        <li>Only one option can be selected per question at a time.</li>
        <li>Answers and explanations remain hidden until submission.</li>
        <li>You can move between questions and change selections before submission.</li>
        <li>Maximums: 100 questions and 120 minutes.</li>
      </ul>

      <p className="mt-3 text-sm font-medium">
        <IntensityBadge intensity={overallExamIntensity} />
      </p>

      <div className="mt-5 grid gap-6">
        <div className="text-sm">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-medium">Total questions</span>
            <span className="text-lg font-semibold text-foreground">{examQuestionCountInput}</span>
          </div>
          <SliderCheckpoints
            options={examQuestionCountOptions}
            value={examQuestionCountInput}
            onChange={onQuestionCountChange}
          />
          <span className="mt-2 block text-xs text-muted">Max 100 questions</span>
        </div>

        <div className="text-sm">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-medium">Time limit</span>
            <span className="text-lg font-semibold text-foreground">{examTimeLimitInput}m</span>
          </div>
          <SliderCheckpoints
            options={examTimeLimitOptions}
            value={examTimeLimitInput}
            onChange={onTimeLimitChange}
            formatLabel={(v) => `${v}m`}
          />
          <span className="mt-2 block text-xs text-muted">Max 120 minutes</span>
        </div>

        <div className="text-sm">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-medium">No-repeat cooldown</span>
            <span className="text-lg font-semibold text-foreground">
              {repeatCooldownMinutes < 1440 ? `${Math.floor(repeatCooldownMinutes / 60)}h` : "24h"}
            </span>
          </div>
          <SliderCheckpoints
            options={repeatCooldownOptions}
            value={repeatCooldownMinutes}
            onChange={onCooldownChange}
            formatLabel={(v) => (v < 1440 ? `${Math.floor(v / 60)}h` : "24h")}
          />
          <span className="mt-2 block text-xs text-muted">
            Recently used questions excluded. Blocked: {activeRepeatBlockedCount}
          </span>
        </div>
      </div>

      {examConfigError && (
        <p className="mt-3 text-sm text-error">{examConfigError}</p>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onBack}
          className="noise-btn flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm transition hover:border-foreground/40"
        >
          <FiArrowLeft size={16} />
          Back
        </button>
        <button
          type="button"
          onClick={onResetRepeatHistory}
          className="noise-btn flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm transition hover:border-foreground/40"
        >
          <FiRefreshCw size={14} />
          Reset history
        </button>
        <button
          type="button"
          onClick={onStartExam}
          className="noise-btn flex items-center gap-1.5 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          <FiPlay size={16} />
          Start Exam
        </button>
      </div>
    </section>
  );
}
