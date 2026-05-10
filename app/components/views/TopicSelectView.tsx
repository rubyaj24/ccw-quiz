"use client";

import type { Topic } from "../../lib";
import { FiChevronRight } from "react-icons/fi";
import { SubjectIcon } from "../quiz";

const topicImage: Record<Topic, string> = {
  oop: "oop.png",
  os: "os.png",
  ds: "ds.png",
  core: "core.png",
  maths: "math.png",
  vectors: "vector.png",
  matrices: "matrix.png",
  differential: "diff.png",
  discrete: "discrete.png",
  graphics: "graphics.png",
};

export function TopicSelectView({
  topicLabels,
  topicQuestionCounts,
  onSelectTopic,
  loading,
}: {
  topicLabels: Record<Topic, string>;
  topicQuestionCounts: Record<Topic, number>;
  onSelectTopic: (topic: Topic) => void;
  loading?: boolean;
}) {
  return (
    <section className="grid gap-4 sm:grid-cols-2">
      {(Object.keys(topicLabels) as Topic[]).map((topic) => (
        <button
          key={topic}
          type="button"
          onClick={() => onSelectTopic(topic)}
          disabled={loading}
          className="noise-btn group relative overflow-hidden rounded-xl border border-border bg-card p-5 text-left transition-all duration-300 hover:border-foreground/40 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="absolute right-0 top-0 h-full w-[45%] pointer-events-none">
            <img
              src={`/${topicImage[topic]}`}
              alt=""
              className="h-full w-full object-cover"
              style={{
                maskImage: "linear-gradient(to left, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 100%)",
              }}
            />
          </div>
          <div className="relative z-10 flex items-start gap-4">
            <div className="mt-1 shrink-0 text-muted transition-colors duration-300 group-hover:text-foreground">
              <SubjectIcon topic={topic} />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-semibold font-playfair-display">{topicLabels[topic]}</h2>
              <p className="mt-1 text-sm text-muted">
                {topicQuestionCounts[topic]} questions
              </p>
            </div>
            <FiChevronRight className="mt-1.5 shrink-0 text-muted opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
          </div>
        </button>
      ))}
    </section>
  );
}
