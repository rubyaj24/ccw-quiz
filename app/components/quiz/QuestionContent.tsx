"use client";

import { MathRenderer } from "../math";

export function QuestionContent({ text, latex, display }: { text: string; latex?: string; display?: boolean }) {
  if (latex) {
    return <MathRenderer text={text} latex={latex} display={display} />;
  }
  return <>{text}</>;
}
