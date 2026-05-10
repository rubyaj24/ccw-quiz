"use client";

import { useEffect, useState, useCallback } from "react";
import type { QuizActions, QuizState, RevealMode } from "./quiz-types";
import type { Topic } from "./quiz-data/types";

type ShortcutMap = Record<string, { label: string; action: () => void }>;

const DESKTOP_QUERY = "(pointer: fine) and (hover: hover)";

function isModKey(e: KeyboardEvent, key: string): boolean {
  return e.key.toLowerCase() === key.toLowerCase() && (e.ctrlKey || e.metaKey);
}

export function useKeyboardShortcuts(
  quizState: QuizState,
  actions: QuizActions,
  context: {
    currentQuestionId?: string;
    currentQuestionOptionsCount?: number;
    hasAnsweredCurrentQuestion?: boolean;
    hasCheckedCurrentQuestion?: boolean;
    currentIndex?: number;
    totalQuestions?: number;
    selectedTopic?: Topic | null;
    revealMode?: RevealMode;
  } = {},
) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [shortcutsVisible, setShortcutsVisible] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const getShortcuts = useCallback((): ShortcutMap => {
    const {
      currentQuestionId,
      currentQuestionOptionsCount = 4,
      hasAnsweredCurrentQuestion,
      hasCheckedCurrentQuestion,
      currentIndex = 0,
      totalQuestions = 0,
      selectedTopic,
      revealMode,
    } = context;

    switch (quizState) {
      case "active": {
        const map: ShortcutMap = {};
        for (let i = 0; i < currentQuestionOptionsCount; i++) {
          const n = String(i + 1);
          const label = `Select option ${n}`;
          const action = () => { if (currentQuestionId) actions.selectAnswer(currentQuestionId, i); };
          map[n] = { label, action };
          map[`Numpad${n}`] = { label, action };
        }
        map["Ctrl+Enter"] = { label: "Next question", action: () => actions.goNext() };
        map["Tab"] = { label: "Skip question", action: () => actions.goNext() };
        map["Ctrl+Backspace"] = { label: "Quit quiz", action: () => actions.resetQuiz() };
        return map;
      }

      case "exam-active": {
        const map: ShortcutMap = {};
        for (let i = 0; i < currentQuestionOptionsCount; i++) {
          const n = String(i + 1);
          const label = `Select option ${n}`;
          const action = () => actions.selectExamOption(i);
          map[n] = { label, action };
          map[`Numpad${n}`] = { label, action };
        }
        if (currentIndex > 0) {
          map["ArrowLeft"] = { label: "Previous question", action: () => actions.goToPreviousExamQuestion() };
        }
        map["Ctrl+Enter"] = { label: "Next question", action: () => actions.goToNextExamQuestion() };
        map["Tab"] = { label: "Skip question", action: () => actions.goToNextExamQuestion() };
        map["Enter"] = { label: "Submit exam", action: () => { if (window.confirm("Submit the exam? You won't be able to change answers after submission.")) actions.submitExam(); } };
        map["Ctrl+S"] = { label: "Save & submit", action: () => { if (window.confirm("Submit the exam? You won't be able to change answers after submission.")) actions.submitExam(); } };
        map["Ctrl+Backspace"] = { label: "Quit exam", action: () => actions.quitExam() };
        return map;
      }

      case "exam-instructions":
        return {
          "Enter": { label: "Start exam", action: () => actions.startExam() },
          "Escape": { label: "Back to home", action: () => actions.resetQuiz() },
        };

      case "complete":
        return {
          "r": { label: "Retry topic", action: () => { if (selectedTopic) actions.startQuiz(selectedTopic); } },
          "t": { label: "Back to topics", action: () => actions.resetQuiz() },
        };

      case "exam-complete":
        return {
          "h": { label: "Back to home", action: () => actions.resetQuiz() },
          "r": { label: "Retry exam", action: () => actions.openExamInstructions() },
        };

      case "select":
      default:
        return {};
    }
  }, [quizState, actions, context]);

  useEffect(() => {
    if (!isDesktop) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "?") {
        setShortcutsVisible((p) => !p);
        e.preventDefault();
        return;
      }

      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) return;
      if ((e.target as HTMLElement)?.isContentEditable) return;

      const shortcuts = getShortcuts();
      let key = e.key;

      if (e.ctrlKey || e.metaKey) {
        if (key === "Enter") key = "Ctrl+Enter";
        else if (key === "Backspace") key = "Ctrl+Backspace";
        else if (key.toLowerCase() === "s") { key = "Ctrl+S"; e.preventDefault(); }
      }

      const lowerKey = key.toLowerCase();
      const match = shortcuts[key] ?? shortcuts[lowerKey];

      if (match) {
        e.preventDefault();
        match.action();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isDesktop, getShortcuts]);

  const getShortcutLabel = useCallback((actionName: string): string | null => {
    const shortcuts = getShortcuts();
    for (const [key, s] of Object.entries(shortcuts)) {
      if (s.label === actionName || key === actionName) return key;
    }
    return null;
  }, [getShortcuts]);

  return {
    isDesktop,
    shortcutsVisible,
    toggleShortcuts: () => setShortcutsVisible((p) => !p),
    setShortcutsVisible,
    getShortcuts,
    getShortcutLabel,
  };
}
