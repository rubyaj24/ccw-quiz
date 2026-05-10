"use client";

export function Eyebrow({ label, caption }: { label: string; caption: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted">
      <span className="text-foreground">{label}</span>
      <span>{caption}</span>
    </div>
  );
}
