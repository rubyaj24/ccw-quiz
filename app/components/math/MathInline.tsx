"use client";

import dynamic from "next/dynamic";

const InlineMath = dynamic(() => import("react-katex").then((m) => m.InlineMath), { ssr: false });

interface MathInlineProps {
  math: string;
}

export function MathInline({ math }: MathInlineProps) {
  if (!math) return null;
  return <InlineMath math={math} />;
}
