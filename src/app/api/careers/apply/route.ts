import { NextResponse } from "next/server";
import { db } from "@/lib/db";

interface ApplyPayload {
  jobId?: string;
  name?: string;
  email?: string;
  phone?: string;
  resumeLink?: string;
  coverNote?: string;
}

export async function POST(request: Request) {
  let data: ApplyPayload;
  try {
    data = (await request.json()) as ApplyPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON" },
      { status: 400 },
    );
  }

  const { jobId, name, email, phone, resumeLink, coverNote } = data;

  const missing: string[] = [];
  if (!jobId || !jobId.trim()) missing.push("jobId");
  if (!name || !name.trim()) missing.push("name");
  if (!email || !email.trim()) missing.push("email");

  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: `Missing required fields: ${missing.join(", ")}` },
      { status: 422 },
    );
  }

  try {
    const application = await db.jobApplication.create({
      data: {
        jobId: jobId!.trim(),
        name: name!.trim(),
        email: email!.trim(),
        phone: phone?.trim() || null,
        resumeLink: resumeLink?.trim() || null,
        coverNote: coverNote?.trim() || null,
      },
    });

    return NextResponse.json(
      { ok: true, id: application.id },
      { status: 200 },
    );
  } catch (err) {
    console.error("[careers/apply] db error:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to submit application" },
      { status: 500 },
    );
  }
}
