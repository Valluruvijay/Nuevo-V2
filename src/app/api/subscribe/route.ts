import { NextResponse } from "next/server";
import { db } from "@/lib/db";

interface SubscribePayload {
  email?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let data: SubscribePayload;
  try {
    data = (await request.json()) as SubscribePayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON" },
      { status: 400 },
    );
  }

  const email = data.email?.trim().toLowerCase();

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Invalid email" },
      { status: 422 },
    );
  }

  try {
    await db.subscriber.upsert({
      where: { email },
      create: { email },
      update: {},
    });
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    // P2002 = unique constraint violation — treat duplicate as success
    if (
      err &&
      typeof err === "object" &&
      "code" in err &&
      (err as { code?: string }).code === "P2002"
    ) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }
    console.error("[subscribe] db error:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to subscribe" },
      { status: 500 },
    );
  }
}
