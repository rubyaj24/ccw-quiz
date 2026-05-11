"use client";

import { FiGithub, FiAlertCircle, FiStar, FiSend } from "react-icons/fi";

export function Footer({ stars }: { stars: number | null }) {
  const handleShare = async () => {
    const url = window.location.origin;
    const title = "CCW Quiz Platform";
    const text = "Practice core CS domains with CCW Quiz Platform";

    try {
      if (navigator.share) {
        await navigator.share({ title, text, url });
      } else {
        await navigator.clipboard.writeText(url);
      }
    } catch {}
  };

  return (
    <footer className="mt-10 flex items-center justify-center gap-4 text-sm text-muted">
      <button
        className="flex items-center gap-1.5 underline-offset-2 hover:text-foreground hover:underline transition-colors"
        onClick={handleShare}
      >
        <FiSend size={14} />
        Share
      </button>
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
