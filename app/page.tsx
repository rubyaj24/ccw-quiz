"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  EXAM_DEFAULTS,
  deserializeQuestionRepeatState,
  emptyResponses,
  emptyQuestionRepeatState,
  getActiveExcludedQuestionIds,
  markQuestionsWithCooldown,
  pruneExpiredQuestionRepeats,
  questions,
  selectExamAnswer,
  serializeQuestionRepeatState,
  topicLabels,
  type ExamResponses,
  type ExamResult,
  type ExamSession,
  type QuestionRepeatState,
  type QuizQuestion,
  type Topic,
} from "./lib";
import type { ExamStartResponse, ExamSubmitResponse } from "./lib/exam-api";

type QuizState =
  | "select"
  | "active"
  | "complete"
  | "exam-instructions"
  | "exam-active"
  | "exam-complete";
type RevealMode = "check" | "instant";

type ExamSessionPublic = Omit<ExamSession, "answerKeyByQuestionId"> & {
  sessionId: string;
};

const MAX_EXAM_QUESTIONS = 100;
const MAX_EXAM_TIME_MINUTES = 120;
const REPEAT_GUARD_STORAGE_KEY = "ccw_exam_question_repeat_state_v1";

const getCombinedIntensity = (
  questionCount: number,
  timeLimitMinutes: number
): "Low" | "Medium" | "High" => {
  const loadRatio = questionCount / MAX_EXAM_QUESTIONS;
  const basePace = MAX_EXAM_QUESTIONS / MAX_EXAM_TIME_MINUTES;
  const selectedPace = questionCount / timeLimitMinutes;
  const paceRatio = selectedPace / basePace;
  const combinedScore = (loadRatio + paceRatio) / 2;

  if (combinedScore >= 0.8) return "High";
  if (combinedScore >= 0.55) return "Medium";
  return "Low";
};

const getIntensityTone = (intensity: "Low" | "Medium" | "High") => {
  if (intensity === "High") {
    return "border-red-500/40 bg-red-500/10 text-red-700 dark:text-red-300";
  }

  if (intensity === "Medium") {
    return "border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-300";
  }

  return "border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300";
};

type EyebrowProps = {
  label: string;
  caption: string;
};

const Eyebrow = ({ label, caption }: EyebrowProps) => {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
      <span>{label}</span>
      <span className="opacity-70">{caption}</span>
    </div>
  );
};

export default function Home() {
  const [stars, setStars] = useState<number | null>(null);

  const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, "");
  const whatsappConfigured = whatsappNumber.length > 0;

  const [quizState, setQuizState] = useState<QuizState>("select");
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [topicQuestions, setTopicQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [checkedQuestions, setCheckedQuestions] = useState<Record<string, boolean>>({});
  const [revealMode, setRevealMode] = useState<RevealMode>("check");
  const [examSession, setExamSession] = useState<ExamSessionPublic | null>(null);
  const [examResponses, setExamResponses] = useState<ExamResponses>(emptyResponses());
  const [examResult, setExamResult] = useState<ExamResult | null>(null);
  const [examTimeLeftSeconds, setExamTimeLeftSeconds] = useState(0);
  const [examQuestionCountInput, setExamQuestionCountInput] = useState(EXAM_DEFAULTS.totalQuestions);
  const [examTimeLimitInput, setExamTimeLimitInput] = useState(EXAM_DEFAULTS.timeLimitMinutes);
  const [examConfigError, setExamConfigError] = useState<string | null>(null);
  const [repeatCooldownMinutes, setRepeatCooldownMinutes] = useState(720);
  const [questionRepeatState, setQuestionRepeatState] = useState<QuestionRepeatState>(
    emptyQuestionRepeatState()
  );
  const [examIndicatorExpanded, setExamIndicatorExpanded] = useState(false);
  const [openIssueForm, setOpenIssueForm] = useState<Record<string, boolean>>({});
  const [issueDrafts, setIssueDrafts] = useState<Record<string, string>>({});
  const [submittedIssueMap, setSubmittedIssueMap] = useState<Record<string, boolean>>({});
  const [raisedIssueCount, setRaisedIssueCount] = useState(0);

  const inExamFlow =
    quizState === "exam-instructions" || quizState === "exam-active" || quizState === "exam-complete";

  const examQuestionCountOptions = useMemo(() => {
    const questionCap = Math.min(questions.length, MAX_EXAM_QUESTIONS);
    const baseOptions = [25, 50, 75, 100].filter((option) => option <= questionCap);

    if (!baseOptions.includes(EXAM_DEFAULTS.totalQuestions) && EXAM_DEFAULTS.totalQuestions <= questionCap) {
      baseOptions.push(EXAM_DEFAULTS.totalQuestions);
    }

    return [...new Set(baseOptions)].sort((a, b) => a - b);
  }, []);

  const examTimeLimitOptions = [30, 45, 60, 90, 120];
  const repeatCooldownOptions = [60, 360, 720, 1440];

  useEffect(() => {
    const rawState = window.localStorage.getItem(REPEAT_GUARD_STORAGE_KEY);
    if (!rawState) {
      return;
    }

    const parsed = deserializeQuestionRepeatState(rawState);
    const pruned = pruneExpiredQuestionRepeats(parsed, Date.now());
    setQuestionRepeatState(pruned);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      REPEAT_GUARD_STORAGE_KEY,
      serializeQuestionRepeatState(questionRepeatState)
    );
  }, [questionRepeatState]);

  const resetRepeatHistory = () => {
    setQuestionRepeatState(emptyQuestionRepeatState());
    window.localStorage.removeItem(REPEAT_GUARD_STORAGE_KEY);
  };

  useEffect(() => {
    let isMounted = true;

    const fetchStars = async () => {
      try {
        const response = await fetch("https://api.github.com/repos/rubyaj24/ccw-quiz", {
          headers: {
            Accept: "application/vnd.github+json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch star count");
        }

        const data = (await response.json()) as { stargazers_count?: number };
        if (isMounted) {
          setStars(typeof data.stargazers_count === "number" ? data.stargazers_count : null);
        }
      } catch {
        if (isMounted) {
          setStars(null);
        }
      }
    };

    fetchStars();

    return () => {
      isMounted = false;
    };
  }, []);

  const shuffleQuestions = (items: QuizQuestion[]) => {
    const shuffled = [...items];

    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
    }

    return shuffled;
  };

  const topicQuestionCounts = questions.reduce(
    (counts, question) => {
      counts[question.topic] += 1;
      return counts;
    },
    { oop: 0, os: 0, ds: 0, core: 0 } as Record<Topic, number>
  );

  const currentQuestion = topicQuestions[currentIndex];
  const currentSelectedAnswer = currentQuestion
    ? selectedAnswers[currentQuestion.id]
    : undefined;
  const hasAnsweredCurrentQuestion = currentSelectedAnswer !== undefined;
  const hasCheckedCurrentQuestion = currentQuestion
    ? checkedQuestions[currentQuestion.id] === true
    : false;
  const shouldRevealCurrentReview =
    hasAnsweredCurrentQuestion &&
    (revealMode === "instant" || hasCheckedCurrentQuestion);
  const isCurrentAnswerCorrect =
    shouldRevealCurrentReview && currentQuestion
      ? currentSelectedAnswer === currentQuestion.answerIndex
      : false;

  const score = topicQuestions.reduce((total, question) => {
    return selectedAnswers[question.id] === question.answerIndex ? total + 1 : total;
  }, 0);

  const examQuestions = useMemo(() => examSession?.questions ?? [], [examSession]);
  const examCurrentQuestion = examQuestions[currentIndex];
  const examCurrentSelectedAnswer = examCurrentQuestion
    ? examResponses[examCurrentQuestion.id]
    : undefined;

  const submitExam = useCallback(
    async (submittedAtEpochMs: number = Date.now()) => {
      if (!examSession) return;

      const response = await fetch("/api/exam/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionId: examSession.sessionId,
          responses: examResponses,
          submittedAtEpochMs,
        }),
      });

      if (!response.ok) {
        setExamConfigError("Unable to submit exam. Please try again.");
        return;
      }

      const data = (await response.json()) as ExamSubmitResponse;
      setExamResult(data.result as ExamResult);
      setQuizState("exam-complete");
    },
    [examResponses, examSession]
  );

  useEffect(() => {
    if (quizState !== "exam-active" || !examSession) {
      return;
    }

    const tick = () => {
      const now = Date.now();
      const remainingSeconds = Math.max(
        0,
        Math.ceil((examSession.expiresAtEpochMs - now) / 1000)
      );

      setExamTimeLeftSeconds(remainingSeconds);

      if (now >= examSession.expiresAtEpochMs) {
        submitExam(now);
      }
    };

    tick();
    const intervalId = window.setInterval(tick, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [examSession, quizState, submitExam]);

  const examTimeLeftLabel = useMemo(() => {
    const minutes = Math.floor(examTimeLeftSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (examTimeLeftSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  }, [examTimeLeftSeconds]);

  const startQuiz = (topic: Topic) => {
    const filteredTopicQuestions = questions.filter((question) => question.topic === topic);

    setSelectedTopic(topic);
    setTopicQuestions(shuffleQuestions(filteredTopicQuestions));
    setCurrentIndex(0);
    setSelectedAnswers({});
    setCheckedQuestions({});
    setQuizState("active");
  };

  const selectAnswer = (questionId: string, optionIndex: number) => {
    setSelectedAnswers((previous) => ({ ...previous, [questionId]: optionIndex }));
  };

  const checkAnswer = () => {
    if (!currentQuestion || !hasAnsweredCurrentQuestion) return;
    setCheckedQuestions((previous) => ({
      ...previous,
      [currentQuestion.id]: true,
    }));
  };

  const goNext = () => {
    if (currentIndex === topicQuestions.length - 1) {
      setQuizState("complete");
      return;
    }
    setCurrentIndex((previous) => previous + 1);
  };

  const resetQuiz = () => {
    setQuizState("select");
    setSelectedTopic(null);
    setTopicQuestions([]);
    setCurrentIndex(0);
    setSelectedAnswers({});
    setCheckedQuestions({});
    setExamSession(null);
    setExamResponses(emptyResponses());
    setExamResult(null);
    setExamTimeLeftSeconds(0);
    setExamConfigError(null);
  };

  const openExamInstructions = () => {
    setQuizState("exam-instructions");
    setSelectedTopic(null);
    setTopicQuestions([]);
    setCurrentIndex(0);
    setSelectedAnswers({});
    setCheckedQuestions({});
    setExamSession(null);
    setExamResponses(emptyResponses());
    setExamResult(null);
    setExamTimeLeftSeconds(0);
    setExamConfigError(null);
  };

  const boundedQuestionCount = Math.min(
    Math.max(1, Number.isFinite(examQuestionCountInput) ? examQuestionCountInput : EXAM_DEFAULTS.totalQuestions),
    Math.min(questions.length, MAX_EXAM_QUESTIONS)
  );
  const boundedTimeLimitMinutes = Math.min(
    Math.max(1, Number.isFinite(examTimeLimitInput) ? examTimeLimitInput : EXAM_DEFAULTS.timeLimitMinutes),
    MAX_EXAM_TIME_MINUTES
  );

  const overallExamIntensity = useMemo(() => {
    return getCombinedIntensity(boundedQuestionCount, boundedTimeLimitMinutes);
  }, [boundedQuestionCount, boundedTimeLimitMinutes]);

  const activeRepeatBlockedCount = useMemo(() => {
    return getActiveExcludedQuestionIds(questionRepeatState, Date.now()).length;
  }, [questionRepeatState]);

  const startExam = async () => {
    const startedAtEpochMs = Date.now();
    setExamConfigError(null);

    const prunedState = pruneExpiredQuestionRepeats(questionRepeatState, startedAtEpochMs);
    const excludedQuestionIds = getActiveExcludedQuestionIds(prunedState, startedAtEpochMs);

    const response = await fetch("/api/exam/start", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        config: {
          totalQuestions: boundedQuestionCount,
          timeLimitMinutes: boundedTimeLimitMinutes,
        },
        excludeQuestionIds: excludedQuestionIds,
      }),
    });

    if (!response.ok) {
      setExamConfigError(
        "Unable to create exam with current settings and repeat-cooldown. Reduce questions or lower cooldown duration."
      );
      return;
    }

    const data = (await response.json()) as ExamStartResponse;

    const nextSession: ExamSessionPublic = {
      sessionId: data.sessionId,
      config: data.config,
      questions: data.questions,
      startedAtEpochMs: data.startedAtEpochMs,
      expiresAtEpochMs: data.expiresAtEpochMs,
    };

    const nextRepeatState = markQuestionsWithCooldown(prunedState, {
      questionIds: data.questions.map((question) => question.id),
      nowEpochMs: startedAtEpochMs,
      cooldownMinutes: repeatCooldownMinutes,
    });
    setQuestionRepeatState(nextRepeatState);

    setExamSession(nextSession);
    setExamResponses(emptyResponses());
    setExamResult(null);
    setCurrentIndex(0);
    setExamTimeLeftSeconds(nextSession.config.timeLimitMinutes * 60);
    setExamIndicatorExpanded(false);
    setQuizState("exam-active");
  };

  const selectExamOption = (optionIndex: number) => {
    if (!examCurrentQuestion) return;

    setExamResponses((previous) =>
      selectExamAnswer(
        previous,
        examCurrentQuestion.id,
        optionIndex,
        examCurrentQuestion.options.length
      )
    );
  };

  const goToNextExamQuestion = () => {
    if (currentIndex >= examQuestions.length - 1) {
      submitExam();
      return;
    }

    setCurrentIndex((previous) => previous + 1);
  };

  const goToPreviousExamQuestion = () => {
    if (currentIndex <= 0) return;
    setCurrentIndex((previous) => previous - 1);
  };

  const examAnsweredCount = examQuestions.reduce((count, question) => {
    return examResponses[question.id] !== undefined ? count + 1 : count;
  }, 0);
  const examUnansweredCount = examQuestions.length - examAnsweredCount;
  const firstUnansweredIndex = examQuestions.findIndex(
    (question) => examResponses[question.id] === undefined
  );

  const examTopicBreakdown = useMemo(() => {
    return examQuestions.reduce(
      (accumulator, question) => {
        accumulator[question.topic] += 1;
        return accumulator;
      },
      { oop: 0, os: 0, ds: 0, core: 0 } as Record<Topic, number>
    );
  }, [examQuestions]);

  const toggleIssueForm = (questionId: string) => {
    setOpenIssueForm((previous) => ({
      ...previous,
      [questionId]: !previous[questionId],
    }));
  };

  const updateIssueDraft = (questionId: string, value: string) => {
    setIssueDrafts((previous) => ({
      ...previous,
      [questionId]: value,
    }));
  };

  const submitIssue = (question: QuizQuestion) => {
    const draft = issueDrafts[question.id]?.trim();
    if (!draft || !whatsappConfigured) return;

    const selectedOptionIndex = selectedAnswers[question.id];
    const selectedOption =
      selectedOptionIndex !== undefined ? question.options[selectedOptionIndex] : "No answer";
    const correctOption = question.options[question.answerIndex];
    const whatsappMessage = [
      "CCW Quiz - Question Correctness Issue",
      `Topic: ${topicLabels[question.topic]}`,
      `Question ID: ${question.id}`,
      `Question: ${question.prompt}`,
      `User Answer: ${selectedOption}`,
      `Correct Answer: ${correctOption}`,
      `Issue Details: ${draft}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setSubmittedIssueMap((previous) => ({
      ...previous,
      [question.id]: true,
    }));
    setRaisedIssueCount((previous) => previous + 1);
    setOpenIssueForm((previous) => ({
      ...previous,
      [question.id]: false,
    }));
    setIssueDrafts((previous) => ({
      ...previous,
      [question.id]: "",
    }));
  };

  const renderIssueForm = (question: QuizQuestion) => {
    const isOpen = openIssueForm[question.id] === true;
    const draft = issueDrafts[question.id] ?? "";
    const isSubmitted = submittedIssueMap[question.id] === true;

    return (
      <div className="mt-3 rounded-lg border border-foreground/20 p-3">
        <button
          type="button"
          onClick={() => toggleIssueForm(question.id)}
          className="text-sm font-medium underline underline-offset-2"
        >
          {isOpen ? "Hide issue form" : "Raise correctness issue"}
        </button>

        {isOpen && (
          <div className="mt-2">
            <label className="mb-1 block text-xs font-medium opacity-80" htmlFor={`issue-${question.id}`}>
              What seems incorrect in this question?
            </label>
            <textarea
              id={`issue-${question.id}`}
              value={draft}
              onChange={(event) => updateIssueDraft(question.id, event.target.value)}
              rows={3}
              className="w-full rounded-md border border-foreground/20 bg-transparent px-3 py-2 text-sm"
              placeholder="Example: Option B and C both seem valid because..."
            />
            <button
              type="button"
              onClick={() => submitIssue(question)}
              disabled={draft.trim().length === 0 || !whatsappConfigured}
              className="mt-2 rounded-md bg-foreground px-3 py-2 text-sm text-background disabled:cursor-not-allowed disabled:opacity-50"
            >
              Send to WhatsApp
            </button>
          </div>
        )}

        {isSubmitted && (
          <p className="mt-2 text-xs opacity-80">
            Issue opened in WhatsApp for this question.
          </p>
        )}
      </div>
    );
  };

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-10 lg:justify-center">
      <header className="mb-8 rounded-2xl border border-foreground/20 bg-background/80 p-6 sm:p-8">
        <Eyebrow label="CCW" caption="Exam + Practice" />

        <div className="mt-4 flex flex-col gap-5 sm:mt-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-4xl leading-tight sm:text-6xl font-nunito font-bold">
              CCW <span className="text-5xl font-dancing-script">Quiz</span> Platform
            </h1>
            <p className="mt-2 max-w-2xl text-base opacity-80 sm:text-lg font-nunito">
              Practice OOP, Operating Systems, Data Structures, and core computer science concepts.
            </p>
            <p className="mt-2 text-sm opacity-70 font-geist-sans">
              {questions.length} curated questions across 4 core domains
            </p>
          </div>

          {!inExamFlow && (
          <div className="w-full max-w-sm rounded-2xl border border-foreground/20 p-3 font-geist-sans sm:w-auto">
            <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide opacity-70">Review mode</p>
            <div className="relative grid grid-cols-2 rounded-xl bg-foreground/10 p-1">
              <span
                aria-hidden="true"
                className={`absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)] rounded-lg bg-foreground shadow-sm transition-transform duration-300 ease-out ${
                  revealMode === "instant" ? "translate-x-full" : "translate-x-0"
                }`}
              />

              <button
                type="button"
                onClick={() => setRevealMode("check")}
                aria-pressed={revealMode === "check"}
                className={`relative z-10 rounded-lg px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 ${
                  revealMode === "check"
                    ? "text-background"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                Show after Check
              </button>

              <button
                type="button"
                onClick={() => setRevealMode("instant")}
                aria-pressed={revealMode === "instant"}
                className={`relative z-10 rounded-lg px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 ${
                  revealMode === "instant"
                    ? "text-background"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                Instant reveal
              </button>
            </div>
          </div>
          )}
        </div>
      </header>

      {quizState === "select" && (
        <section className="grid gap-4 sm:grid-cols-2">
          {(Object.keys(topicLabels) as Topic[]).map((topic) => (
            <button
              key={topic}
              type="button"
              onClick={() => startQuiz(topic)}
              className="rounded-xl border border-foreground/20 p-5 text-left transition hover:border-foreground"
            >
              <h2 className="text-lg font-semibold">{topicLabels[topic]}</h2>
              <p className="mt-2 text-sm opacity-80">
                {topicQuestionCounts[topic]} questions • Single-correct MCQ
              </p>
            </button>
          ))}

          <article className="rounded-xl border border-foreground/20 p-5 text-left sm:col-span-2">
            <h2 className="text-lg font-semibold">Exam Mode</h2>
            <p className="mt-2 text-sm opacity-80">
              Full-length CCW exam with weighted topics, hidden answers, and timed auto-submit.
            </p>
            <button
              type="button"
              onClick={openExamInstructions}
              className="mt-4 rounded-lg bg-foreground px-4 py-2 text-background"
            >
              Open Exam Instructions
            </button>
          </article>
        </section>
      )}

      {quizState === "exam-instructions" && (
        <section className="rounded-xl border border-foreground/20 p-6">
          <h2 className="text-2xl font-semibold">Exam Instructions</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm opacity-90">
            <li>You will receive {boundedQuestionCount} mixed-topic MCQs in randomized order.</li>
            <li>Time limit is {boundedTimeLimitMinutes} minutes; exam auto-submits at expiry.</li>
            <li>Only one option can be selected per question at a time.</li>
            <li>Answers and explanations remain hidden until submission.</li>
            <li>You can move between questions and change selections before submission.</li>
            <li>Maximums: 100 questions and 120 minutes.</li>
          </ul>

          <p className="mt-3 text-sm font-medium">
            <span
              className={`inline-flex items-center rounded-full border px-3 py-1 ${getIntensityTone(
                overallExamIntensity
              )}`}
            >
              Selected intensity: {overallExamIntensity} (based on questions + time combination)
            </span>
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="text-sm">
              <span className="mb-2 block font-medium">Total questions</span>
              <div className="flex flex-wrap gap-2">
                {examQuestionCountOptions.map((option) => {
                  const isActive = examQuestionCountInput === option;

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setExamQuestionCountInput(option)}
                      aria-pressed={isActive}
                      className={`rounded-md border px-3 py-1.5 transition ${
                        isActive
                          ? "border-foreground bg-foreground text-background"
                          : "border-foreground/20"
                      }`}
                    >
                      <span className="block">{option}</span>
                    </button>
                  );
                })}
              </div>
              <span className="mt-2 block text-xs opacity-70">Choose from preset sets (max 100)</span>
            </div>

            <div className="text-sm">
              <span className="mb-2 block font-medium">Time limit (minutes)</span>
              <div className="flex flex-wrap gap-2">
                {examTimeLimitOptions.map((option) => {
                  const isActive = examTimeLimitInput === option;

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setExamTimeLimitInput(option)}
                      aria-pressed={isActive}
                      className={`rounded-md border px-3 py-1.5 transition ${
                        isActive
                          ? "border-foreground bg-foreground text-background"
                          : "border-foreground/20"
                      }`}
                    >
                      <span className="block">{option}m</span>
                    </button>
                  );
                })}
              </div>
              <span className="mt-2 block text-xs opacity-70">Choose from preset durations (max 120m)</span>
            </div>

            <div className="text-sm sm:col-span-2">
              <span className="mb-2 block font-medium">No-repeat cooldown window</span>
              <div className="flex flex-wrap gap-2">
                {repeatCooldownOptions.map((option) => {
                  const isActive = repeatCooldownMinutes === option;

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setRepeatCooldownMinutes(option)}
                      aria-pressed={isActive}
                      className={`rounded-md border px-3 py-1.5 text-sm transition ${
                        isActive
                          ? "border-foreground bg-foreground text-background"
                          : "border-foreground/20"
                      }`}
                    >
                      {option < 1440 ? `${Math.floor(option / 60)}h` : "24h"}
                    </button>
                  );
                })}
              </div>
              <span className="mt-2 block text-xs opacity-70">
                Recently used questions are excluded for this duration. Currently blocked: {activeRepeatBlockedCount}
              </span>
            </div>
          </div>

          {examConfigError && (
            <p className="mt-3 text-sm text-red-600 dark:text-red-300">{examConfigError}</p>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={resetQuiz}
              className="rounded-lg border border-foreground/20 px-4 py-2"
            >
              Back
            </button>
            <button
              type="button"
              onClick={resetRepeatHistory}
              className="rounded-lg border border-foreground/20 px-4 py-2"
            >
              Reset repeat history
            </button>
            <button
              type="button"
              onClick={startExam}
              className="rounded-lg bg-foreground px-4 py-2 text-background"
            >
              Start Exam
            </button>
          </div>
        </section>
      )}

      {quizState === "active" && currentQuestion && (
        <section className="rounded-xl border border-foreground/20 p-6">
          <div className="mb-4 flex items-center justify-between text-sm opacity-80">
            <span>{topicLabels[selectedTopic as Topic]}</span>
            <span>
              Question {currentIndex + 1} / {topicQuestions.length}
            </span>
          </div>

          <h2 className="text-xl font-semibold">{currentQuestion.prompt}</h2>

          <div className="mt-5 grid gap-3">
            {currentQuestion.options.map((option, optionIndex) => {
              const isSelected = currentSelectedAnswer === optionIndex;
              const isCorrectOption = optionIndex === currentQuestion.answerIndex;
              const optionLocked =
                revealMode === "instant"
                  ? hasAnsweredCurrentQuestion
                  : hasCheckedCurrentQuestion;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => selectAnswer(currentQuestion.id, optionIndex)}
                  disabled={optionLocked}
                  className={`rounded-lg border px-4 py-3 text-left transition ${
                    !shouldRevealCurrentReview && isSelected
                      ? "border-foreground bg-foreground text-background"
                      : shouldRevealCurrentReview && isCorrectOption
                        ? "border-green-500 text-green-600 ring-2 ring-green-500 bg-green-500/10 dark:text-green-300 dark:ring-green-400 dark:border-green-400"
                        : shouldRevealCurrentReview && isSelected && !isCorrectOption
                          ? "border-red-500 text-red-600 ring-2 ring-red-500 bg-red-500/10 dark:text-red-300 dark:ring-red-400 dark:border-red-400"
                        : "border-foreground/20"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {shouldRevealCurrentReview && (
            <article className="mt-5 rounded-lg border border-foreground/20 p-4">
              <p className={`text-sm font-medium ${isCurrentAnswerCorrect ? "" : "opacity-80"}`}>
                {isCurrentAnswerCorrect ? "Correct" : "Review needed"}
              </p>
              <p className="mt-1 text-sm opacity-80">
                Your answer: {currentQuestion.options[currentSelectedAnswer as number]}
              </p>
              <p className="text-sm">Correct answer: {currentQuestion.options[currentQuestion.answerIndex]}</p>
              <p className="mt-2 text-md opacity-90">Explanation: <span className="text-sm font-medium">{currentQuestion.explanation}</span></p>
              <p className="mt-2 text-sm font-medium">References</p>
              <ul className="mt-1 space-y-1 text-sm">
                {currentQuestion.references.map((reference) => (
                  <li key={reference.url}>
                    <a
                      href={reference.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2"
                    >
                      {reference.label}
                    </a>
                  </li>
                ))}
              </ul>
              {renderIssueForm(currentQuestion)}
            </article>
          )}

          <div className="mt-6 flex items-center justify-between">
            <button
              type="button"
              onClick={resetQuiz}
              className="rounded-lg border border-foreground/20 px-4 py-2"
            >
              Change Topic
            </button>
            <button
              type="button"
              onClick={
                revealMode === "check" && !hasCheckedCurrentQuestion
                  ? checkAnswer
                  : goNext
              }
              disabled={
                !hasAnsweredCurrentQuestion ||
                (revealMode === "check" && !hasCheckedCurrentQuestion && !hasAnsweredCurrentQuestion)
              }
              className="rounded-lg bg-foreground px-4 py-2 text-background disabled:cursor-not-allowed disabled:opacity-50"
            >
              {revealMode === "check" && !hasCheckedCurrentQuestion
                ? "Check"
                : currentIndex === topicQuestions.length - 1
                  ? "Finish Quiz"
                  : "Next"}
            </button>
          </div>
        </section>
      )}

      {quizState === "complete" && selectedTopic && (
        <section className="rounded-xl border border-foreground/20 p-6">
          <h2 className="text-2xl font-semibold">Quiz Complete</h2>
          <p className="mt-2 text-lg">
            Topic: <span className="font-medium">{topicLabels[selectedTopic]}</span>
          </p>
          <p className="mt-1 text-lg">
            Score: <span className="font-bold">{score}</span> / {topicQuestions.length}
          </p>
          <p className="mt-1 text-sm opacity-80">Issues raised this session: {raisedIssueCount}</p>

          <div className="mt-5 grid gap-3">
            {topicQuestions.map((question) => {
              const userAnswer = selectedAnswers[question.id];
              const isCorrect = userAnswer === question.answerIndex;

              return (
                <article key={question.id} className="rounded-lg border border-foreground/20 p-4">
                  <p className="font-medium">{question.prompt}</p>
                  <p className="mt-1 text-sm opacity-80">
                    Your answer: {userAnswer !== undefined ? question.options[userAnswer] : "No answer"}
                  </p>
                  <p className="text-sm">Correct answer: {question.options[question.answerIndex]}</p>
                  <p className={`mt-2 text-sm font-medium ${isCorrect ? "" : "opacity-80"}`}>
                    {isCorrect ? "Correct" : "Review needed"}
                  </p>
                  <p className="mt-1 text-sm opacity-90">Explanation: {question.explanation}</p>
                  <p className="mt-2 text-sm font-medium">References</p>
                  <ul className="mt-1 space-y-1 text-sm">
                    {question.references.map((reference) => (
                      <li key={reference.url}>
                        <a
                          href={reference.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline underline-offset-2"
                        >
                          {reference.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2 text-xs opacity-70">
                    Review tip: read the reference once and retry this topic to reinforce the concept.
                  </p>
                  {renderIssueForm(question)}
                </article>
              );
            })}
          </div>

          <div className="mt-6 flex gap-3">
            <button type="button" onClick={resetQuiz} className="rounded-lg bg-foreground px-4 py-2 text-background">
              Choose Another Topic
            </button>
            <button
              type="button"
              onClick={() => startQuiz(selectedTopic)}
              className="rounded-lg border border-foreground/20 px-4 py-2"
            >
              Retry Topic
            </button>
          </div>
        </section>
      )}

      {quizState === "exam-active" && examCurrentQuestion && examSession && (
        <section className="rounded-xl border border-foreground/20 p-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-sm opacity-85">
            <span>Exam Mode • Mixed Topics</span>
            <span>Time left: {examTimeLeftLabel}</span>
          </div>

          <div className="mb-5 flex flex-wrap items-center justify-between gap-2 text-sm opacity-85">
            <span>
              Question {currentIndex + 1} / {examQuestions.length}
            </span>
            <span>
              Answered: {examAnsweredCount} / {examQuestions.length}
            </span>
          </div>

          <div className="mb-5 rounded-lg border border-foreground/20 p-3">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-foreground" />
                Current
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Answered ({examAnsweredCount})
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/30" />
                Unanswered ({examUnansweredCount})
              </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {firstUnansweredIndex >= 0 && (
                  <button
                    type="button"
                    onClick={() => setCurrentIndex(firstUnansweredIndex)}
                    className="rounded-md border border-foreground/20 px-2.5 py-1 text-xs font-medium"
                  >
                    First unanswered
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setExamIndicatorExpanded((previous) => !previous)}
                  className="rounded-md border border-foreground/20 px-2.5 py-1 text-xs font-medium"
                >
                  {examIndicatorExpanded ? "Hide palette" : `Show palette (${examQuestions.length})`}
                </button>
              </div>
            </div>

            {examIndicatorExpanded && (
              <div className="mt-3 max-h-80 overflow-y-auto rounded-md border border-foreground/10 p-2">
                <div className="grid grid-cols-8 gap-2 sm:grid-cols-10 md:grid-cols-12">
                {examQuestions.map((question, index) => {
                  const isCurrent = index === currentIndex;
                  const isAnswered = examResponses[question.id] !== undefined;

                  const tone = isCurrent
                    ? "border-foreground bg-foreground text-background"
                    : isAnswered
                      ? "border-emerald-500/60 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                      : "border-foreground/20 text-foreground/70";

                  return (
                    <button
                      key={question.id}
                      type="button"
                      onClick={() => setCurrentIndex(index)}
                      aria-label={`Go to question ${index + 1}`}
                      aria-current={isCurrent ? "true" : undefined}
                      className={`rounded-md border px-2 py-1 text-xs font-medium transition ${tone}`}
                    >
                      {index + 1}
                    </button>
                  );
                })}
                </div>
              </div>
            )}
          </div>

          <p className="mb-2 text-sm opacity-80">{topicLabels[examCurrentQuestion.topic]}</p>
          <h2 className="text-xl font-semibold">{examCurrentQuestion.prompt}</h2>

          <div className="mt-5 grid gap-3">
            {examCurrentQuestion.options.map((option, optionIndex) => {
              const isSelected = examCurrentSelectedAnswer === optionIndex;

              return (
                <button
                  key={`${examCurrentQuestion.id}-${optionIndex}`}
                  type="button"
                  onClick={() => selectExamOption(optionIndex)}
                  className={`rounded-lg border px-4 py-3 text-left transition ${
                    isSelected
                      ? "border-foreground bg-foreground text-background"
                      : "border-foreground/20"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={goToPreviousExamQuestion}
              disabled={currentIndex === 0}
              className="rounded-lg border border-foreground/20 px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => submitExam()}
                className="rounded-lg border border-foreground/20 px-4 py-2"
              >
                Submit Exam
              </button>
              <button
                type="button"
                onClick={goToNextExamQuestion}
                className="rounded-lg bg-foreground px-4 py-2 text-background"
              >
                {currentIndex === examQuestions.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </div>
        </section>
      )}

      {quizState === "exam-complete" && examSession && examResult && (
        <section className="rounded-xl border border-foreground/20 p-6">
          <h2 className="text-2xl font-semibold">Exam Complete</h2>
          <p className="mt-2 text-lg">
            Score: <span className="font-bold">{examResult.correct}</span> / {examResult.totalQuestions}
            <span className="ml-2 text-base opacity-80">({examResult.scorePercentage}%)</span>
          </p>
          <p className="mt-1 text-sm opacity-80">
            Incorrect: {examResult.incorrect} • Time taken: {examResult.timeTakenMinutes} minutes
          </p>

          <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            <p>OS accuracy: {examResult.topicWiseAccuracy.os}% ({examTopicBreakdown.os} questions)</p>
            <p>DS accuracy: {examResult.topicWiseAccuracy.ds}% ({examTopicBreakdown.ds} questions)</p>
            <p>OOP accuracy: {examResult.topicWiseAccuracy.oop}% ({examTopicBreakdown.oop} questions)</p>
            <p>CORE accuracy: {examResult.topicWiseAccuracy.core}% ({examTopicBreakdown.core} questions)</p>
          </div>

          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={resetQuiz}
              className="rounded-lg bg-foreground px-4 py-2 text-background"
            >
              Back to Home
            </button>
            <button
              type="button"
              onClick={openExamInstructions}
              className="rounded-lg border border-foreground/20 px-4 py-2"
            >
              Retry Exam
            </button>
          </div>
        </section>
      )}
      <footer className="mt-10 text-center text-sm opacity-80">
        <button
          className="underline-offset-2 hover:underline"
          onClick={() => window.open("https://github.com/rubyaj24/ccw-quiz", "_blank", "noopener,noreferrer")}
        >
          Contribute
        </button>
        <button
          className="mx-2 underline-offset-2 hover:underline"
          onClick={() =>
            window.open("https://github.com/rubyaj24/ccw-quiz/issues", "_blank", "noopener,noreferrer")
          }
        >
          Report Issue
        </button>
        <button
          className="underline-offset-2 hover:underline"
          onClick={() => window.open("https://github.com/rubyaj24/ccw-quiz/", "_blank", "noopener,noreferrer")}
        >
          Stars {stars ?? "..."}
        </button>
      </footer>
    </main>
  );
}
