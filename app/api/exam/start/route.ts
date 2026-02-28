import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { generateExamSession, questions } from "@/app/lib";
import type { ExamStartRequest } from "@/app/lib/exam-api";
import { pruneExpiredSessions, saveExamSession } from "../session-store";

const isStringArray = (value: unknown): value is string[] => {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
};

export const POST = async (request: Request) => {
  pruneExpiredSessions(Date.now());

  let payload: ExamStartRequest = {};

  try {
    payload = (await request.json()) as ExamStartRequest;
  } catch {
    payload = {};
  }

  const startedAtEpochMs = Date.now();
  const excludeQuestionIds = isStringArray(payload.excludeQuestionIds)
    ? payload.excludeQuestionIds
    : undefined;

  try {
    const session = generateExamSession(questions, {
      startedAtEpochMs,
      seed: Math.floor(startedAtEpochMs / 1000),
      config: payload.config,
      excludeQuestionIds,
    });

    const sessionId = randomUUID();

    saveExamSession({
      sessionId,
      config: session.config,
      questions: session.questions,
      answerKeyByQuestionId: session.answerKeyByQuestionId,
      startedAtEpochMs: session.startedAtEpochMs,
      expiresAtEpochMs: session.expiresAtEpochMs,
    });

    return NextResponse.json({
      sessionId,
      config: session.config,
      questions: session.questions,
      startedAtEpochMs: session.startedAtEpochMs,
      expiresAtEpochMs: session.expiresAtEpochMs,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to create exam session.";
    return NextResponse.json({ message }, { status: 400 });
  }
};
