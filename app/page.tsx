"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { totalQuestions, topicLabels } from "./lib";
import { useQuizState } from "./lib/use-quiz-state";
import { useKeyboardShortcuts } from "./lib/use-keyboard-shortcuts";
import { Eyebrow, ReviewModeToggle, Footer, FeatureSlideshow, ShortcutsHelp } from "./components/quiz";
import { FiBookOpen, FiCpu, FiKey } from "react-icons/fi";

const TopicSelectView = dynamic(() => import("./components/views/TopicSelectView").then((m) => m.TopicSelectView), { ssr: false });
const ExamInstructionsView = dynamic(() => import("./components/views/ExamInstructionsView").then((m) => m.ExamInstructionsView), { ssr: false });
const PracticeQuizView = dynamic(() => import("./components/views/PracticeQuizView").then((m) => m.PracticeQuizView), { ssr: false });
const PracticeCompleteView = dynamic(() => import("./components/views/PracticeCompleteView").then((m) => m.PracticeCompleteView), { ssr: false });
const ExamActiveView = dynamic(() => import("./components/views/ExamActiveView").then((m) => m.ExamActiveView), { ssr: false });
const ExamCompleteView = dynamic(() => import("./components/views/ExamCompleteView").then((m) => m.ExamCompleteView), { ssr: false });

export default function Home() {
  const q = useQuizState();
  const [selectedMode, setSelectedMode] = useState<"quiz" | "exam">("quiz");

  const [headerRevealed, setHeaderRevealed] = useState(false);
  const [titleRevealed, setTitleRevealed] = useState(false);
  const [headerUp, setHeaderUp] = useState(false);
  const [contentRevealed, setContentRevealed] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setHeaderRevealed(true));
    if (q.quizState === "select") {
      const t1 = setTimeout(() => setTitleRevealed(true), 500);
      const t2 = setTimeout(() => setHeaderUp(true), 1400);
      const t3 = setTimeout(() => setContentRevealed(true), 2200);
      return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    } else {
      setTitleRevealed(true);
      setHeaderUp(true);
      setContentRevealed(true);
    }
  }, [q.quizState]);

  const { isDesktop, shortcutsVisible, getShortcuts, toggleShortcuts } = useKeyboardShortcuts(
    q.quizState,
    q.actions,
    {
      currentQuestionId: q.currentQuestion?.id,
      currentQuestionOptionsCount: q.currentQuestion?.options.length,
      hasAnsweredCurrentQuestion: q.hasAnsweredCurrentQuestion,
      hasCheckedCurrentQuestion: q.hasCheckedCurrentQuestion,
      currentIndex: q.currentIndex,
      totalQuestions: q.quizState === "exam-active" ? q.examQuestions.length : q.topicQuestions.length,
      selectedTopic: q.selectedTopic,
      revealMode: q.revealMode,
    },
  );

  const practiceShortcuts = isDesktop && q.quizState === "active" ? { topics: "Ctrl+Backspace" as const, next: "Ctrl+Enter" as const } : undefined;
  const examShortcuts = isDesktop && q.quizState === "exam-active" ? { previous: "\u2190" as const, next: "Ctrl+Enter" as const, submit: "Enter" as const, quit: "Ctrl+Backspace" as const } : undefined;

  const themeMode = q.quizState === "select"
    ? selectedMode
    : q.quizState === "exam-active" || q.quizState === "exam-complete" || q.quizState === "exam-instructions"
      ? "exam"
      : "quiz";

  return (
    <main data-mode={themeMode} className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-10">
      <header
        className="noise-surface rounded-2xl border border-border bg-card p-6 sm:p-8"
        style={{
          transform: `scaleX(${headerRevealed ? 1 : 0})`,
          transformOrigin: "center",
          marginTop: headerUp ? 0 : "20vh",
          marginBottom: headerUp ? 12 : 32,
          padding: headerUp ? "16px 24px" : undefined,
          transition: "transform 700ms ease-out, margin-top 700ms ease, margin-bottom 600ms ease, padding 600ms ease",
        }}
      >
        <Eyebrow label="CST 308" caption="Exam + Practice" />

        <div className="mt-4 flex flex-col gap-5 sm:mt-5 sm:flex-row sm:items-end sm:justify-between">
          <div
            className="transition-all duration-800"
            style={{
              opacity: titleRevealed ? 1 : 0,
              transform: titleRevealed ? "translateY(0)" : "translateY(8px)",
            }}
          >
            <h1 className="text-4xl leading-tight sm:text-6xl font-playfair-display font-bold">
              CCW Quiz Platform
            </h1>
            <p className="mt-2 max-w-2xl text-base text-muted sm:text-lg font-nunito">
              Practice OOP, Operating Systems, Data Structures, Mathematics, and more.
            </p>
            <p className="mt-2 text-sm text-muted font-geist-sans">
              {totalQuestions} curated questions across 10 core domains
            </p>
          </div>

          <div
            className="transition-all duration-500"
            style={{
              opacity: titleRevealed ? 1 : 0,
              transform: titleRevealed ? "translateY(0)" : "translateY(6px)",
            }}
          >
            {q.quizState === "select" && (
              <div className="flex shrink-0 flex-col items-end gap-2">
                <div className="noise-btn relative flex rounded-lg border border-border bg-background p-0.5">
                  <div
                    className={`absolute left-0.5 top-0.5 h-[calc(100%-4px)] w-[calc(50%-2px)] rounded-md bg-foreground transition-all duration-300 ease-out ${
                      selectedMode === "exam" ? "translate-x-full" : "translate-x-0"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setSelectedMode("quiz")}
                    className={`relative z-10 flex flex-1 items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors duration-200 ${
                      selectedMode === "quiz" ? "text-background" : "text-muted hover:text-foreground"
                    }`}
                  >
                    <FiBookOpen size={14} />
                    Quiz
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedMode("exam")}
                    className={`relative z-10 flex flex-1 items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors duration-200 ${
                      selectedMode === "exam" ? "text-background" : "text-muted hover:text-foreground"
                    }`}
                  >
                    <FiCpu size={14} />
                    Exam
                  </button>
                </div>
              </div>
            )}

            {q.quizState === "active" && (
              <ReviewModeToggle revealMode={q.revealMode} onChange={q.actions.setRevealMode} />
            )}
          </div>
        </div>
      </header>

      {q.quizState === "select" && contentRevealed && (
        <>
          {selectedMode === "quiz" && (
            <div className="space-y-6">
              <FeatureSlideshow />
              <TopicSelectView
                topicLabels={topicLabels}
                topicQuestionCounts={q.topicQuestionCounts}
                onSelectTopic={q.actions.startQuiz}
                loading={q.loading}
              />
            </div>
          )}

          {selectedMode === "exam" && (
            <ExamInstructionsView
                boundedQuestionCount={q.boundedQuestionCount}
                boundedTimeLimitMinutes={q.boundedTimeLimitMinutes}
                overallExamIntensity={q.overallExamIntensity}
                examQuestionCountInput={q.examQuestionCountInput}
                examTimeLimitInput={q.examTimeLimitInput}
                repeatCooldownMinutes={q.repeatCooldownMinutes}
                examConfigError={q.examConfigError}
                activeRepeatBlockedCount={q.activeRepeatBlockedCount}
                examQuestionCountOptions={q.examQuestionCountOptions}
                examTimeLimitOptions={q.examTimeLimitOptions}
                repeatCooldownOptions={q.repeatCooldownOptions}
                onBack={() => setSelectedMode("quiz")}
                onResetRepeatHistory={q.actions.resetRepeatHistory}
                onStartExam={q.actions.startExam}
                onQuestionCountChange={q.actions.setExamQuestionCountInput}
                onTimeLimitChange={q.actions.setExamTimeLimitInput}
                onCooldownChange={q.actions.setRepeatCooldownMinutes}
              />
          )}
        </>
      )}

      {q.quizState === "exam-instructions" && (
        <ExamInstructionsView
          boundedQuestionCount={q.boundedQuestionCount}
          boundedTimeLimitMinutes={q.boundedTimeLimitMinutes}
          overallExamIntensity={q.overallExamIntensity}
          examQuestionCountInput={q.examQuestionCountInput}
          examTimeLimitInput={q.examTimeLimitInput}
          repeatCooldownMinutes={q.repeatCooldownMinutes}
          examConfigError={q.examConfigError}
          activeRepeatBlockedCount={q.activeRepeatBlockedCount}
          examQuestionCountOptions={q.examQuestionCountOptions}
          examTimeLimitOptions={q.examTimeLimitOptions}
          repeatCooldownOptions={q.repeatCooldownOptions}
          onBack={q.actions.resetQuiz}
          onResetRepeatHistory={q.actions.resetRepeatHistory}
          onStartExam={q.actions.startExam}
          onQuestionCountChange={q.actions.setExamQuestionCountInput}
          onTimeLimitChange={q.actions.setExamTimeLimitInput}
          onCooldownChange={q.actions.setRepeatCooldownMinutes}
        />
      )}

      {q.quizState === "active" && q.currentQuestion && (
        <PracticeQuizView
          question={q.currentQuestion}
          currentIndex={q.currentIndex}
          totalQuestions={q.topicQuestions.length}
          selectedTopic={q.selectedTopic!}
          currentSelectedAnswer={q.currentSelectedAnswer}
          hasAnswered={q.hasAnsweredCurrentQuestion}
          hasChecked={q.hasCheckedCurrentQuestion}
          shouldReveal={q.shouldRevealCurrentReview}
          isCorrect={q.isCurrentAnswerCorrect}
          revealMode={q.revealMode}
          issueOpen={q.openIssueForm[q.currentQuestion.id] === true}
          issueDraft={q.issueDrafts[q.currentQuestion.id] ?? ""}
          issueSubmitted={q.submittedIssueMap[q.currentQuestion.id] === true}
          whatsappConfigured={q.whatsappConfigured}
          onSelectAnswer={q.actions.selectAnswer}
          onCheck={q.actions.checkAnswer}
          onNext={q.actions.goNext}
          onChangeTopic={q.actions.resetQuiz}
          onToggleIssue={() => q.actions.toggleIssueForm(q.currentQuestion.id)}
          onDraftChange={(v) => q.actions.updateIssueDraft(q.currentQuestion.id, v)}
          onSubmitIssue={() => q.actions.submitIssue(q.currentQuestion)}
          desktopShortcuts={practiceShortcuts}
        />
      )}

      {q.quizState === "complete" && q.selectedTopic && (
        <PracticeCompleteView
          topic={q.selectedTopic}
          questions={q.topicQuestions}
          selectedAnswers={q.selectedAnswers}
          score={q.score}
          raisedIssueCount={q.raisedIssueCount}
          issueDrafts={q.issueDrafts}
          openIssueForm={q.openIssueForm}
          submittedIssueMap={q.submittedIssueMap}
          whatsappConfigured={q.whatsappConfigured}
          onChangeTopic={q.actions.resetQuiz}
          onRetry={() => q.actions.startQuiz(q.selectedTopic!)}
          onToggleIssue={q.actions.toggleIssueForm}
          onDraftChange={q.actions.updateIssueDraft}
          onSubmitIssue={q.actions.submitIssue}
        />
      )}

      {q.quizState === "exam-active" && q.examCurrentQuestion && q.examSession && (
        <ExamActiveView
          question={q.examCurrentQuestion}
          currentIndex={q.currentIndex}
          totalQuestions={q.examQuestions.length}
          currentSelectedAnswer={q.examCurrentSelectedAnswer}
          examTimeLeftLabel={q.examTimeLeftLabel}
          examSession={q.examSession}
          onSelectOption={q.actions.selectExamOption}
          onNext={q.actions.goToNextExamQuestion}
          onPrevious={q.actions.goToPreviousExamQuestion}
          onSubmit={() => q.actions.submitExam()}
          onQuit={q.actions.quitExam}
          examResponses={q.examResponses}
          examQuestions={q.examQuestions}
          examIndicatorExpanded={q.examIndicatorExpanded}
          onSetCurrentIndex={q.actions.setCurrentIndex}
          onTogglePalette={q.actions.setExamIndicatorExpanded}
          desktopShortcuts={examShortcuts}
        />
      )}

      {q.quizState === "exam-complete" && q.examSession && q.examResult && (
        <ExamCompleteView
          examResult={q.examResult}
          examTopicBreakdown={q.examTopicBreakdown}
          onBackToHome={q.actions.resetQuiz}
          onRetryExam={q.actions.openExamInstructions}
        />
      )}

      <div
        className="transition-all duration-500"
        style={{
          opacity: q.quizState === "select" ? (contentRevealed ? 1 : 0) : 1,
          transform: q.quizState === "select" ? (contentRevealed ? "translateY(0)" : "translateY(10px)") : "none",
        }}
      >
        <Footer stars={q.stars} />
      </div>

      {isDesktop && (
        <button
          type="button"
          onClick={toggleShortcuts}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-2 text-xs text-muted shadow-lg transition hover:border-foreground/40 hover:text-foreground"
          title="Keyboard shortcuts"
        >
          <FiKey size={14} />
          Shortcuts
        </button>
      )}

      <ShortcutsHelp
        visible={shortcutsVisible}
        onClose={() => toggleShortcuts()}
        shortcuts={getShortcuts()}
      />
    </main>
  );
}
