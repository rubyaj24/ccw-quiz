"use client";

import { MathInline } from "./MathInline";
import { MathBlock } from "./MathBlock";

interface MathRendererProps {
  latex?: string;
  text?: string;
  display?: boolean;
}

export function MathRenderer({ latex, text, display = false }: MathRendererProps) {
  if (latex) {
    return display ? <MathBlock math={latex} /> : <MathInline math={latex} />;
  }
  return <span>{text}</span>;
}
