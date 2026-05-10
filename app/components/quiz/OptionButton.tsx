"use client";

import { MathRenderer } from "../math";

function OptionContent({ text, latex }: { text: string; latex?: string }) {
  return <MathRenderer text={text} latex={latex} />;
}

export function OptionButton({
  label,
  latex,
  isSelected,
  isCorrect,
  isWrong,
  disabled,
  onSelect,
}: {
  label: string;
  latex?: string;
  isSelected: boolean;
  isCorrect: boolean;
  isWrong: boolean;
  disabled: boolean;
  onSelect: () => void;
}) {
  const tone = isCorrect
    ? "border-success text-success ring-2 ring-success bg-success/10"
    : isWrong
      ? "border-error text-error ring-2 ring-error bg-error/10"
      : isSelected
        ? "border-foreground bg-foreground text-background"
        : "border-border";

  return (
    <button
      type="button"
      onClick={onSelect}
      disabled={disabled}
      className={`rounded-lg border px-4 py-3 text-left transition ${tone} disabled:cursor-default`}
    >
      {latex ? <OptionContent text={label} latex={latex} /> : label}
    </button>
  );
}
