"use client";

import type { Topic } from "../../lib";
import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";
import { SubjectIcon } from "../quiz";

const hiddenTopics = new Set<Topic>(["oop", "vectors", "graphics", "maths", "matrices", "differential"]);

const topicImage: Record<Topic, string> = {
  "todays-exam": "core.png",
  oop: "oop.png",
  os: "os.png",
  ds: "ds.png",
  core: "core.png",
  maths: "math.png",
  vectors: "vector.png",
  matrices: "matrix.png",
  differential: "diff.png",
  graphics: "graphics.png",
  automata: "automata.png",
  coa: "coa.png",
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
      {(Object.keys(topicLabels) as Topic[]).filter((t) => !hiddenTopics.has(t)).map((topic) => (
        <button
          key={topic}
          type="button"
          onClick={() => onSelectTopic(topic)}
          disabled={loading}
          className={
            topic === "todays-exam"
              ? "noise-btn group relative overflow-hidden rounded-xl border-2 border-[#a855f7]/50 bg-gradient-to-br from-[#a855f7]/10 to-[#6366f1]/5 p-5 text-left transition-all duration-300 hover:border-[#a855f7] hover:shadow-[0_0_24px_rgba(168,85,247,0.15)] disabled:opacity-50 disabled:cursor-not-allowed"
              : "noise-btn group relative overflow-hidden rounded-xl border border-border bg-card p-5 text-left transition-all duration-300 hover:border-foreground/40 disabled:opacity-50 disabled:cursor-not-allowed"
          }
        >
          <div className="absolute right-0 top-0 h-full w-[45%] pointer-events-none">
            <Image
              src={`/${topicImage[topic]}`}
              alt=""
              fill
              className="object-cover"
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
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold font-playfair-display">{topicLabels[topic]}</h2>
                {topic === "todays-exam" && (
                  <span className="rounded-full bg-[#a855f7] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white font-playfair-display">
                    Featured
                  </span>
                )}
              </div>
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
