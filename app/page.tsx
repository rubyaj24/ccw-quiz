"use client";

import { useEffect, useState } from "react";
import { questions, topicLabels, type QuizQuestion, type Topic } from "./lib";

type QuizState = "select" | "active" | "complete";
type RevealMode = "check" | "instant";

export default function Home() {
  const [stars, setStars] = useState<number | null>(null);

  const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, "");
  const whatsappConfigured = whatsappNumber.length > 0;

  const [quizState, setQuizState] = useState<QuizState>("select");
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [checkedQuestions, setCheckedQuestions] = useState<Record<string, boolean>>({});
  const [revealMode, setRevealMode] = useState<RevealMode>("check");
  const [openIssueForm, setOpenIssueForm] = useState<Record<string, boolean>>({});
  const [issueDrafts, setIssueDrafts] = useState<Record<string, string>>({});
  const [submittedIssueMap, setSubmittedIssueMap] = useState<Record<string, boolean>>({});
  const [raisedIssueCount, setRaisedIssueCount] = useState(0);

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

  const topicQuestions = selectedTopic
    ? questions.filter((question) => question.topic === selectedTopic)
    : [];

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

  const startQuiz = (topic: Topic) => {
    setSelectedTopic(topic);
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
    setCurrentIndex(0);
    setSelectedAnswers({});
    setCheckedQuestions({});
  };

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
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-10">
      <header className="mb-8 rounded-2xl border border-foreground/20 bg-background/80 p-6 sm:p-8">
        <div className="inline-flex items-center rounded-full border border-foreground/20 px-3 py-1 text-xs tracking-wide font-nunito font-medium">
          COMPREHENSIVE COURSE WORK
        </div>

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
                        ? "border-foreground bg-foreground text-background"
                        : "border-foreground/20"
                  }`}
                >
                  {option}
                  {shouldRevealCurrentReview && isCorrectOption && (
                    <span className="ml-2 text-xs font-medium">(Correct)</span>
                  )}
                  {shouldRevealCurrentReview && isSelected && !isCorrectOption && (
                    <span className="ml-2 text-xs font-medium">(Your choice)</span>
                  )}
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
              <p className="mt-2 text-sm opacity-90">Explanation: {currentQuestion.explanation}</p>
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
      <footer className="mt-10 text-center text-sm opacity-80">
        <button className="underline-offset-2 hover:underline" onClick={() => window.open("https://github.com/rubyaj24/ccw-quiz")}>Contribute</button>
        <button className="mx-2 underline-offset-2 hover:underline" onClick={() => window.open("https://github.com/rubyaj24/ccw-quiz/issues")}>Report Issue</button>
        <button className="underline-offset-2 hover:underline" onClick={() => window.open("https://github.com/rubyaj24/ccw-quiz/")}>Stars {stars ?? "..."}</button>
      </footer>
    </main>
  );
}
