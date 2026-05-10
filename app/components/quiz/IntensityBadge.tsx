"use client";

const tones = {
  High: "border-error/40 bg-error/10 text-error",
  Medium: "border-amber-500/40 bg-amber-500/10 text-amber-400",
  Low: "border-success/40 bg-success/10 text-success",
} as const;

export function IntensityBadge({ intensity }: { intensity: "Low" | "Medium" | "High" }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 font-playfair-display ${tones[intensity]}`}>
      {intensity}
    </span>
  );
}
