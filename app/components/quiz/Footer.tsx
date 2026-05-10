"use client";

import { FiGithub, FiAlertCircle, FiStar } from "react-icons/fi";

export function Footer({ stars }: { stars: number | null }) {
  return (
    <footer className="mt-10 flex items-center justify-center gap-4 text-sm text-muted">
      <button
        className="flex items-center gap-1.5 underline-offset-2 hover:text-foreground hover:underline transition-colors"
        onClick={() => window.open("https://github.com/rubyaj24/ccw-quiz", "_blank", "noopener,noreferrer")}
      >
        <FiGithub size={14} />
        Contribute
      </button>
      <button
        className="flex items-center gap-1.5 underline-offset-2 hover:text-foreground hover:underline transition-colors"
        onClick={() => window.open("https://github.com/rubyaj24/ccw-quiz/issues", "_blank", "noopener,noreferrer")}
      >
        <FiAlertCircle size={14} />
        Report Issue
      </button>
      <button
        className="flex items-center gap-1.5 underline-offset-2 hover:text-foreground hover:underline transition-colors"
        onClick={() => window.open("https://github.com/rubyaj24/ccw-quiz/", "_blank", "noopener,noreferrer")}
      >
        <FiStar size={14} />
        {stars ?? "..."}
      </button>
    </footer>
  );
}
