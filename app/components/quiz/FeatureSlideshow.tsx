"use client";

import { useEffect, useState } from "react";

const features = [
  { icon: "◆", text: "Practice 10 core computer science domains" },
  { icon: "◈", text: "Full-length timed exams with weighted topics" },
  { icon: "◇", text: "Instant or check-based answer reveal" },
  { icon: "○", text: "Track your progress with detailed analytics" },
  { icon: "▽", text: "WhatsApp issue reporting for question feedback" },
];

export function FeatureSlideshow() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      const timeout = setTimeout(() => {
        setIdx((p) => (p + 1) % features.length);
        setVisible(true);
      }, 400);
      return () => clearTimeout(timeout);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="noise-surface flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4">
      <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-sm text-foreground">
        <span
          className="transition-all"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(0.6)",
            transitionDuration: "400ms",
          }}
        >
          {features[idx].icon}
        </span>
      </span>
      <p
        className="flex-1 text-sm leading-relaxed text-muted transition-all"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(6px)",
          transitionDuration: "400ms",
        }}
      >
        {features[idx].text}
      </p>
    </div>
  );
}
