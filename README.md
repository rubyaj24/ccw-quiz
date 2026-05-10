# CCW Quiz Platform

A modern quiz platform for **Comprehensive Course Work (CCW)** topics — built with Next.js 16, Tailwind CSS v4, and TypeScript.

Practice or take timed exams across 10 core computer science domains with a noir-themed UI, animated infographics, and server-secured exam scoring.

## Features

### Two Modes
- **Quiz Mode** — topic-by-topic practice with instant or check-based answer reveal. Browse 10 domains with gradient-masked thumbnail cards.
- **Exam Mode** — full-length mixed-topic exam with configurable question count (25–100), time limit (30–120 min), and no-repeat cooldown. Server-side sessions keep answer keys hidden until submission.

### Question Review
- Two review modes: **Show after Check** (manual) and **Instant reveal**
- Per-question display of selected answer, correct answer, explanation (with optional LaTeX via KaTeX), and reference links
- End-of-quiz summary with score ring, color-coded legend, and full question review list

### Exam Features
- Weighted topic distribution (configurable per exam)
- Live countdown timer with auto-submit on expiry
- Exam palette — draggable question slider for navigation between questions
- Change selections before final submission
- Topic-wise accuracy breakdown bars on results

### Issue Reporting
- Raise correctness issues per question from the review UI
- Prefilled WhatsApp message with question ID, prompt, answers, and issue notes
- Tracks submitted issues count

### No-Repeat Cooldown
- Excludes recently seen questions from exam mode for a configurable window (1h–24h)
- Persisted client-side via `localStorage`
- Active blocked count shown in exam config

### Infrastructure
- **Server-side exam sessions** — answer keys never reach the client during the exam
- **In-memory session store** (dev-grade, resets on server restart)
- GitHub star count fetched live in footer
- Dynamic imports for code-split views

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** react-icons (Feather set)
- **Fonts:** Geist Sans, Geist Mono, Playfair Display, Nunito
- **LaTeX:** KaTeX via `katex` + `react-katex`
- **API:** Next.js Route Handlers

## Domains

10 question banks with curated MCQs:

| Topic | File |
|-------|------|
| Object-Oriented Programming | `oop.ts` |
| Operating Systems | `os.ts` |
| Data Structures | `ds.ts` |
| Core CS | `core.ts` |
| Mathematics | `maths.ts` |
| Vectors | `vectors.ts` |
| Matrices | `matrices.ts` |
| Differential Equations | `differential.ts` |
| Discrete Mathematics | `discrete.ts` |
| Computer Graphics | `graphics.ts` |

## Project Structure

```text
app/
  layout.tsx
  page.tsx                          # Main page with all view states
  globals.css                       # Noir theme, noise textures, exam mode CSS
  lib/
    index.ts                        # Re-exports, topic labels, helpers
    quiz-types.ts                   # Type definitions (QuizState, RevealMode, etc.)
    use-quiz-state.ts               # Core state machine hook
    exam-mode.ts                    # Exam session generation, scoring
    exam-api.ts                     # API response types
    question-repeat-guard.ts        # Cooldown tracking
    quiz-data/
      types.ts                      # QuizQuestion, Topic types
      *.ts                          # Per-topic question banks
  api/
    exam/
      session-store.ts              # In-memory session store
      start/route.ts                # POST /api/exam/start
      submit/route.ts               # POST /api/exam/submit
  components/
    quiz/
      FeatureSlideshow.tsx          # Auto-cycling welcome features
      SliderCheckpoints.tsx         # Stepped range slider
      ExamSlider.tsx                # Draggable exam navigator
      ReviewModeToggle.tsx          # Check / Instant reveal toggle
      SubjectIcon.tsx               # Cross-fade topic icons
      ScoreRing.tsx                 # SVG circular progress (inline in views)
      ...
    views/
      TopicSelectView.tsx           # Topic cards with thumbnails
      ExamInstructionsView.tsx      # Exam config (sliders)
      PracticeQuizView.tsx          # Practice question flow
      PracticeCompleteView.tsx      # Quiz results + review
      ExamActiveView.tsx            # In-progress exam
      ExamCompleteView.tsx          # Exam results + topic bars
```

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Create `.env.local` from `.env.example`:

```bash
cp .env.example .env.local
```

Set your WhatsApp number (digits only, with country code):

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=91XXXXXXXXXX
```

### 3) Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm run dev` — start local dev server (Turbopack)
- `npm run build` — create production build
- `npm run start` — run production server
- `npm run lint` — run ESLint

## Exam API

### Start Exam

`POST /api/exam/start`

```json
{
  "config": { "totalQuestions": 100, "timeLimitMinutes": 120 },
  "excludeQuestionIds": ["oop-1", "os-3"]
}
```

Returns session with scrambled questions and no answer keys.

### Submit Exam

`POST /api/exam/submit`

```json
{
  "sessionId": "...",
  "responses": { "oop-1": 2, "ds-5": 1 },
  "submittedAtEpochMs": 0
}
```

Returns `ExamResult` with score percentage, topic-wise accuracy, and time taken.

## How to Add Questions

1. Pick the correct domain file in `app/lib/quiz-data/`
2. Add a `QuizQuestion` object with `id`, `topic`, `prompt`, `options`, `answerIndex`, `explanation`, optional LaTeX fields, and `references`
3. Optionally add a topic thumbnail to `public/{topic}.png`

## Security

Exam sessions are generated and scored server-side — `answerIndex` is never shipped to the client during the exam. Practice mode reads the question bank client-side. For full integrity, move all quiz flows behind server endpoints.

## Contributing

Contributions welcome. Use the **Contribute** and **Report Issue** links in the app footer, or open PRs/issues directly.

## License

MIT (or your preferred license — add to this repository).
