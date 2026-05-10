"use client";

import dynamic from "next/dynamic";

const BlockMath = dynamic(() => import("react-katex").then((m) => m.BlockMath), { ssr: false });

interface MathBlockProps {
  math: string;
}

export function MathBlock({ math }: MathBlockProps) {
  if (!math) return null;
  return <BlockMath math={math} />;
}
