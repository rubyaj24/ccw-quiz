"use client";

import type { Topic } from "../../lib";
import {
  FiCode,
  FiTerminal,
  FiGitBranch,
  FiCpu,
  FiBook,
  FiArrowUp,
  FiGrid,
  FiActivity,
  FiShare,
  FiImage,
} from "react-icons/fi";
import { useState } from "react";

const icons: Record<Topic, { primary: React.ReactNode; secondary: React.ReactNode }> = {
  oop: { primary: <FiCode size={28} />, secondary: <FiGitBranch size={28} /> },
  os: { primary: <FiTerminal size={28} />, secondary: <FiCpu size={28} /> },
  ds: { primary: <FiGitBranch size={28} />, secondary: <FiShare size={28} /> },
  core: { primary: <FiCpu size={28} />, secondary: <FiTerminal size={28} /> },
  maths: { primary: <FiBook size={28} />, secondary: <FiGrid size={28} /> },
  vectors: { primary: <FiArrowUp size={28} />, secondary: <FiActivity size={28} /> },
  matrices: { primary: <FiGrid size={28} />, secondary: <FiBook size={28} /> },
  differential: { primary: <FiActivity size={28} />, secondary: <FiArrowUp size={28} /> },
  discrete: { primary: <FiShare size={28} />, secondary: <FiGitBranch size={28} /> },
  graphics: { primary: <FiImage size={28} />, secondary: <FiGrid size={28} /> },
};

export function SubjectIcon({ topic, size }: { topic: Topic; size?: number }) {
  const [hovered, setHovered] = useState(false);
  const pair = icons[topic];
  if (!pair) return null;

  return (
    <span
      className="relative inline-flex items-center justify-center"
      style={{ width: size ?? 28, height: size ?? 28 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="absolute transition-opacity duration-500 ease-in-out"
        style={{ opacity: hovered ? 0 : 1 }}
      >
        {pair.primary}
      </span>
      <span
        className="absolute transition-opacity duration-500 ease-in-out"
        style={{ opacity: hovered ? 1 : 0 }}
      >
        {pair.secondary}
      </span>
    </span>
  );
}
