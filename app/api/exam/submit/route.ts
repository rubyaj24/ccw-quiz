import { NextResponse } from "next/server";
import { buildExamResult } from "@/app/lib";
import type { ExamSubmitRequest } from "@/app/lib/exam-api";
import { deleteExamSession, getExamSession, pruneExpiredSessions } from "../session-store";

const isValidResponses = (value: unknown): value is Record<string, number | undefined> => {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }

  return Object.values(value).every(
    (entry) => entry === undefined || (typeof entry === "number" && Number.isFinite(entry))
  );
};

export const POST = async (request: Request) => {
  pruneExpiredSessions(Date.now());

  let payload: ExamSubmitRequest;

  try {
    payload = (await request.json()) as ExamSubmitRequest;
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  if (!payload?.sessionId || !isValidResponses(payload.responses)) {
    return NextResponse.json({ message: "Invalid submission payload." }, { status: 400 });
  }

  const session = getExamSession(payload.sessionId);

  if (!session) {
    return NextResponse.json({ message: "Exam session not found or expired." }, { status: 404 });
  }

  const result = buildExamResult(
    {
      config: session.config,
      questions: session.questions,
      startedAtEpochMs: session.startedAtEpochMs,
      expiresAtEpochMs: session.expiresAtEpochMs,
      answerKeyByQuestionId: session.answerKeyByQuestionId,
    },
    payload.responses,
    payload.submittedAtEpochMs
  );

  deleteExamSession(payload.sessionId);

  return NextResponse.json({ result });
};
