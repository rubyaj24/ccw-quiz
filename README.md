# CCW Quiz Platform

A modern quiz platform for **Comprehensive Course Work (CCW)** topics, built with Next.js and Tailwind CSS.

Practice and review key computer science domains:
- Object-Oriented Programming (OOP)
- Operating Systems (OS)
- Data Structures (DS)
- Core CS topics

## Features

- Topic-wise quiz flow with dynamic question counts
- Exam mode with weighted topics, timer, and auto-submit
- Server-side exam sessions (answers never shipped to client)
- No-repeat cooldown to avoid recent questions in exams
- Two review modes:
	- **Show after Check**
	- **Instant reveal**
- Per-question feedback:
	- selected answer
	- correct answer
	- explanation
	- references
- End-of-quiz score summary + full review cards
- Raise question correctness issues from the UI
- Send issue reports directly to WhatsApp
- Live GitHub star count in footer
- Domain-separated question bank for easy maintenance

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** `next/font` (Geist, Geist Mono, Dancing Script, Nunito)

## Project Structure

```text
app/
	layout.tsx
	page.tsx
	globals.css
	lib/
		index.ts
		exam-mode.ts
		exam-api.ts
		question-repeat-guard.ts
		quiz-data/
			types.ts
			oop.ts
			os.ts
			ds.ts
			core.ts
	api/
		exam/
			session-store.ts
			start/route.ts
			submit/route.ts
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

- `npm run dev` - start local dev server
- `npm run build` - create production build
- `npm run start` - run production server
- `npm run lint` - run ESLint

## Exam Mode (Server-Side)

Exam sessions are generated and scored on the server to prevent answer leakage.

### Start Exam

`POST /api/exam/start`

Body:

```json
{
	"config": {
		"totalQuestions": 100,
		"timeLimitMinutes": 120
	},
	"excludeQuestionIds": ["oop-1", "os-3"]
}
```

Response:

```json
{
	"sessionId": "...",
	"config": {
		"totalQuestions": 100,
		"timeLimitMinutes": 120,
		"topics": ["oop", "os", "ds", "core"],
		"topicWeightage": { "os": 30, "ds": 30, "oop": 25, "core": 15 }
	},
	"questions": [{ "id": "...", "topic": "oop", "prompt": "...", "options": ["..."] }],
	"startedAtEpochMs": 0,
	"expiresAtEpochMs": 0
}
```

### Submit Exam

`POST /api/exam/submit`

Body:

```json
{
	"sessionId": "...",
	"responses": { "oop-1": 2, "ds-5": 1 },
	"submittedAtEpochMs": 0
}
```

Response:

```json
{
	"result": {
		"totalQuestions": 100,
		"correct": 72,
		"incorrect": 28,
		"scorePercentage": 72,
		"topicWiseAccuracy": {
			"oop": 70,
			"os": 75,
			"ds": 68,
			"core": 80
		},
		"timeTakenMinutes": 98.5
	}
}
```

### No-Repeat Cooldown

Exam mode excludes questions used recently for the selected cooldown window. This is tracked client-side in `localStorage` and applied when starting a new exam session.

## How to Add Questions

Questions are organized by domain under `app/lib/quiz-data/`.

1. Pick the correct file (`oop.ts`, `os.ts`, `ds.ts`, `core.ts`)
2. Add a `QuizQuestion` object with:
	 - `id` (unique)
	 - `topic`
	 - `prompt`
	 - `options`
	 - `answerIndex`
	 - `explanation`
	 - `references` (`label`, `url`)
3. Run:

```bash
npm run lint
```

## Issue Reporting Flow

- Users can click **Raise correctness issue** on a reviewed question.
- Submission opens WhatsApp with a prefilled issue template.
- Includes question ID, prompt, selected answer, correct answer, and issue note.

## Notes

- Star count is fetched from GitHub API client-side.
- If GitHub rate-limits the request, UI gracefully shows a loading/fallback state.
- Practice mode still reads the full question bank client-side. If you need full security, move practice mode to server endpoints too.

## Security Note

Client-side exams cannot fully hide answers because the browser can always inspect bundled code. For higher-stakes use cases, this project ships **exam sessions and scoring from the server** so `answerIndex` never reaches the client during the exam. If you need full integrity, move all quiz flows (including practice mode) behind server endpoints.

## Contributing

Contributions are welcome.

- Use the **Contribute** and **Report Issue** links in the app footer, or
- Open PRs/issues directly in this repository.

## License

Add your preferred license in this repository (e.g., MIT) if you want to make usage terms explicit.
