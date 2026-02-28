# CCW Quiz Platform

A modern quiz platform for **Comprehensive Course Work (CCW)** topics, built with Next.js and Tailwind CSS.

Practice and review key computer science domains:
- Object-Oriented Programming (OOP)
- Operating Systems (OS)
- Data Structures (DS)
- Core CS topics

## Features

- Topic-wise quiz flow with dynamic question counts
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
		quiz-data/
			types.ts
			oop.ts
			os.ts
			ds.ts
			core.ts
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

## Contributing

Contributions are welcome.

- Use the **Contribute** and **Report Issue** links in the app footer, or
- Open PRs/issues directly in this repository.

## License

Add your preferred license in this repository (e.g., MIT) if you want to make usage terms explicit.
