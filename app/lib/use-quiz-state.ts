"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { QuizQuestion, Topic } from "./quiz-data/types";
import type { QuizState, RevealMode, QuizActions } from "./quiz-types";
import type { ExamSession as ExamSessionT, ExamResult, ExamResponses, QuestionRepeatState } from ".";
import {
  EXAM_DEFAULTS,
  deserializeQuestionRepeatState,
  emptyResponses,
  emptyQuestionRepeatState,
  getActiveExcludedQuestionIds,
  markQuestionsWithCooldown,
  pruneExpiredQuestionRepeats,
  selectExamAnswer,
  serializeQuestionRepeatState,
  topicLabels,
  loadQuestionsForTopic,
  topicQuestionCounts,
  totalQuestions,
} from ".";
import type { ExamStartResponse, ExamSubmitResponse } from "./exam-api";

type ExamSessionPublic = Omit<ExamSessionT, "answerKeyByQuestionId"> & { sessionId: string };

const MAX_EXAM_QUESTIONS = 100;
const MAX_EXAM_TIME_MINUTES = 120;
const REPEAT_GUARD_STORAGE_KEY = "ccw_exam_question_repeat_state_v1";

const getCombinedIntensity = (q: number, t: number): "Low" | "Medium" | "High" => {
  const lr = q / MAX_EXAM_QUESTIONS;
  const bp = MAX_EXAM_QUESTIONS / MAX_EXAM_TIME_MINUTES;
  const sp = q / t;
  const cs = (lr + sp / bp) / 2;
  if (cs >= 0.8) return "High";
  if (cs >= 0.55) return "Medium";
  return "Low";
};

const buildTopicCounts = () => {
  const keys = Object.keys(topicLabels) as Topic[];
  return keys.reduce((acc, t) => { acc[t] = 0; return acc; }, {} as Record<Topic, number>);
};

const shuffleQuestions = (items: QuizQuestion[]) => {
  const s = [...items];
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s;
};

export function useQuizState() {
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
  const [questionRepeatState, setQuestionRepeatState] = useState<QuestionRepeatState>(emptyQuestionRepeatState());
  const [examIndicatorExpanded, setExamIndicatorExpanded] = useState(false);
  const [openIssueForm, setOpenIssueForm] = useState<Record<string, boolean>>({});
  const [issueDrafts, setIssueDrafts] = useState<Record<string, string>>({});
  const [submittedIssueMap, setSubmittedIssueMap] = useState<Record<string, boolean>>({});
  const [raisedIssueCount, setRaisedIssueCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const inExamFlow = quizState === "exam-instructions" || quizState === "exam-active" || quizState === "exam-complete";

  const examQuestionCountOptions = useMemo(() => {
    const cap = Math.min(totalQuestions, MAX_EXAM_QUESTIONS);
    const base = [25, 50, 75, 100].filter((o) => o <= cap);
    if (!base.includes(EXAM_DEFAULTS.totalQuestions) && EXAM_DEFAULTS.totalQuestions <= cap) base.push(EXAM_DEFAULTS.totalQuestions);
    return [...new Set(base)].sort((a, b) => a - b);
  }, []);

  const examTimeLimitOptions = [30, 45, 60, 90, 120];
  const repeatCooldownOptions = [60, 360, 720, 1440];

  useEffect(() => {
    const raw = window.localStorage.getItem(REPEAT_GUARD_STORAGE_KEY);
    if (!raw) return;
    const parsed = deserializeQuestionRepeatState(raw);
    setQuestionRepeatState(pruneExpiredQuestionRepeats(parsed, Date.now()));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(REPEAT_GUARD_STORAGE_KEY, serializeQuestionRepeatState(questionRepeatState));
  }, [questionRepeatState]);

  const resetRepeatHistory = () => {
    setQuestionRepeatState(emptyQuestionRepeatState());
    window.localStorage.removeItem(REPEAT_GUARD_STORAGE_KEY);
  };

  useEffect(() => {
    let mounted = true;
    const fetchStars = async () => {
      try {
        const res = await fetch("https://api.github.com/repos/rubyaj24/ccw-quiz", { headers: { Accept: "application/vnd.github+json" } });
        if (!res.ok) throw new Error();
        const data = await res.json() as { stargazers_count?: number };
        if (mounted) setStars(typeof data.stargazers_count === "number" ? data.stargazers_count : null);
      } catch {
        if (mounted) setStars(null);
      }
    };
    fetchStars();
    return () => { mounted = false; };
  }, []);



  const currentQuestion = topicQuestions[currentIndex];
  const currentSelectedAnswer = currentQuestion ? selectedAnswers[currentQuestion.id] : undefined;
  const hasAnsweredCurrentQuestion = currentSelectedAnswer !== undefined;
  const hasCheckedCurrentQuestion = currentQuestion ? checkedQuestions[currentQuestion.id] === true : false;
  const shouldRevealCurrentReview = hasAnsweredCurrentQuestion && (revealMode === "instant" || hasCheckedCurrentQuestion);
  const isCurrentAnswerCorrect = shouldRevealCurrentReview && currentQuestion ? currentSelectedAnswer === currentQuestion.answerIndex : false;

  const score = topicQuestions.reduce((t, q) => selectedAnswers[q.id] === q.answerIndex ? t + 1 : t, 0);

  const examQuestions = useMemo(() => examSession?.questions ?? [], [examSession]);
  const examCurrentQuestion = examQuestions[currentIndex];
  const examCurrentSelectedAnswer = examCurrentQuestion ? examResponses[examCurrentQuestion.id] : undefined;

  const submitExam = useCallback(async (submittedAtEpochMs: number = Date.now()) => {
    if (!examSession) return;
    const res = await fetch("/api/exam/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId: examSession.sessionId, responses: examResponses, submittedAtEpochMs }),
    });
    if (!res.ok) { setExamConfigError("Unable to submit exam. Please try again."); return; }
    const data = await res.json() as ExamSubmitResponse;
    setExamResult(data.result as ExamResult);
    setQuizState("exam-complete");
  }, [examResponses, examSession]);

  useEffect(() => {
    if (quizState !== "exam-active" || !examSession) return;
    const tick = () => {
      const now = Date.now();
      const remaining = Math.max(0, Math.ceil((examSession.expiresAtEpochMs - now) / 1000));
      setExamTimeLeftSeconds(remaining);
      if (now >= examSession.expiresAtEpochMs) submitExam(now);
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [examSession, quizState, submitExam]);

  const examTimeLeftLabel = useMemo(() => {
    const m = Math.floor(examTimeLeftSeconds / 60).toString().padStart(2, "0");
    const s = (examTimeLeftSeconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }, [examTimeLeftSeconds]);

  const startQuiz = async (topic: Topic) => {
    setLoading(true);
    setSelectedTopic(topic);
    const qs = shuffleQuestions(await loadQuestionsForTopic(topic));
    setTopicQuestions(qs);
    setCurrentIndex(0);
    setSelectedAnswers({});
    setCheckedQuestions({});
    setQuizState("active");
    setLoading(false);
  };

  const selectAnswer = (id: string, optionIndex: number) => setSelectedAnswers((p) => ({ ...p, [id]: optionIndex }));

  const checkAnswer = () => {
    if (!currentQuestion || !hasAnsweredCurrentQuestion) return;
    setCheckedQuestions((p) => ({ ...p, [currentQuestion.id]: true }));
  };

  const goNext = () => {
    if (currentIndex === topicQuestions.length - 1) { setQuizState("complete"); return; }
    setCurrentIndex((p) => p + 1);
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

  const boundedQuestionCount = Math.min(Math.max(1, Number.isFinite(examQuestionCountInput) ? examQuestionCountInput : EXAM_DEFAULTS.totalQuestions), Math.min(totalQuestions, MAX_EXAM_QUESTIONS));
  const boundedTimeLimitMinutes = Math.min(Math.max(1, Number.isFinite(examTimeLimitInput) ? examTimeLimitInput : EXAM_DEFAULTS.timeLimitMinutes), MAX_EXAM_TIME_MINUTES);

  const overallExamIntensity = useMemo(() => getCombinedIntensity(boundedQuestionCount, boundedTimeLimitMinutes), [boundedQuestionCount, boundedTimeLimitMinutes]);
  const activeRepeatBlockedCount = useMemo(() => getActiveExcludedQuestionIds(questionRepeatState, Date.now()).length, [questionRepeatState]);

  const startExam = async () => {
    const startedAt = Date.now();
    setExamConfigError(null);
    const pruned = pruneExpiredQuestionRepeats(questionRepeatState, startedAt);
    const excludedIds = getActiveExcludedQuestionIds(pruned, startedAt);
    const res = await fetch("/api/exam/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ config: { totalQuestions: boundedQuestionCount, timeLimitMinutes: boundedTimeLimitMinutes }, excludeQuestionIds: excludedIds }),
    });
    if (!res.ok) { setExamConfigError("Unable to create exam with current settings and repeat-cooldown. Reduce questions or lower cooldown duration."); return; }
    const data = await res.json() as ExamStartResponse;
    const nextSession: ExamSessionPublic = { sessionId: data.sessionId, config: data.config, questions: data.questions, startedAtEpochMs: data.startedAtEpochMs, expiresAtEpochMs: data.expiresAtEpochMs };
    setQuestionRepeatState(markQuestionsWithCooldown(pruned, { questionIds: data.questions.map((q) => q.id), nowEpochMs: startedAt, cooldownMinutes: repeatCooldownMinutes }));
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
    setExamResponses((p) => selectExamAnswer(p, examCurrentQuestion.id, optionIndex, examCurrentQuestion.options.length));
  };

  const goToNextExamQuestion = () => {
    if (currentIndex >= examQuestions.length - 1) { submitExam(); return; }
    setCurrentIndex((p) => p + 1);
  };

  const goToPreviousExamQuestion = () => {
    if (currentIndex > 0) setCurrentIndex((p) => p - 1);
  };

  const examAnsweredCount = examQuestions.reduce((c, q) => examResponses[q.id] !== undefined ? c + 1 : c, 0);
  const examUnansweredCount = examQuestions.length - examAnsweredCount;
  const firstUnansweredIndex = examQuestions.findIndex((q) => examResponses[q.id] === undefined);

  const examTopicBreakdown = useMemo(() => examQuestions.reduce((acc, q) => { acc[q.topic] += 1; return acc; }, buildTopicCounts()), [examQuestions]);

  const quitExam = () => {
    const confirmed = window.confirm("Quit the exam? All progress will be lost.");
    if (!confirmed) return;
    resetQuiz();
  };

  const toggleIssueForm = (id: string) => setOpenIssueForm((p) => ({ ...p, [id]: !p[id] }));
  const updateIssueDraft = (id: string, value: string) => setIssueDrafts((p) => ({ ...p, [id]: value }));

  const submitIssue = (question: QuizQuestion) => {
    const draft = issueDrafts[question.id]?.trim();
    if (!draft || !whatsappConfigured) return;
    const selectedIdx = selectedAnswers[question.id];
    const msg = [
      "CCW Quiz - Question Correctness Issue",
      `Topic: ${topicLabels[question.topic]}`,
      `Question ID: ${question.id}`,
      `Question: ${question.prompt}`,
      `User Answer: ${selectedIdx !== undefined ? question.options[selectedIdx] : "No answer"}`,
      `Correct Answer: ${question.options[question.answerIndex]}`,
      `Issue Details: ${draft}`,
    ].join("\n");
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
    setSubmittedIssueMap((p) => ({ ...p, [question.id]: true }));
    setRaisedIssueCount((p) => p + 1);
    setOpenIssueForm((p) => ({ ...p, [question.id]: false }));
    setIssueDrafts((p) => ({ ...p, [question.id]: "" }));
  };

  const actions: QuizActions = {
    startQuiz, selectAnswer, checkAnswer, goNext, resetQuiz,
    openExamInstructions, startExam, selectExamOption,
    goToNextExamQuestion, goToPreviousExamQuestion, submitExam,
    toggleIssueForm, updateIssueDraft, submitIssue,
    resetRepeatHistory, setRevealMode, setExamQuestionCountInput,
    setExamTimeLimitInput, setRepeatCooldownMinutes, setCurrentIndex,
    setExamIndicatorExpanded, quitExam,
  };

  return {
    stars, quizState, selectedTopic, topicQuestions, currentIndex,
    selectedAnswers, checkedQuestions, revealMode,
    examSession, examResponses, examResult, examTimeLeftSeconds,
    examQuestionCountInput, examTimeLimitInput, examConfigError,
    repeatCooldownMinutes, questionRepeatState, examIndicatorExpanded,
    openIssueForm, issueDrafts, submittedIssueMap, raisedIssueCount,
    topicQuestionCounts, currentQuestion, currentSelectedAnswer,
    hasAnsweredCurrentQuestion, hasCheckedCurrentQuestion,
    shouldRevealCurrentReview, isCurrentAnswerCorrect,
    score, examQuestions, examCurrentQuestion, examCurrentSelectedAnswer,
    boundedQuestionCount, boundedTimeLimitMinutes, overallExamIntensity,
    activeRepeatBlockedCount, examAnsweredCount, examUnansweredCount,
    firstUnansweredIndex, examTopicBreakdown, examTimeLeftLabel,
    inExamFlow, examQuestionCountOptions, examTimeLimitOptions,
    repeatCooldownOptions, whatsappConfigured, whatsappNumber,
    loading, actions,
  } as const;
}
