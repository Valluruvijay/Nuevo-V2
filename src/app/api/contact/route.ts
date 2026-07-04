import { NextResponse } from "next/server";
import { db } from "@/lib/db";

interface ContactPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  reason?: string;
  message?: string;
}

export async function POST(request: Request) {
  let data: ContactPayload;
  try {
    data = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON" },
      { status: 400 },
    );
  }

  const { firstName, lastName, email, phone, company, reason, message } = data;

  // Validate required non-empty strings
  const missing: string[] = [];
  if (!firstName || !firstName.trim()) missing.push("firstName");
  if (!email || !email.trim()) missing.push("email");
  if (!reason || !reason.trim()) missing.push("reason");
  if (!message || !message.trim()) missing.push("message");

  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: `Missing required fields: ${missing.join(", ")}` },
      { status: 422 },
    );
  }

  console.log("[contact] new enquiry:", {
    name: `${firstName} ${lastName ?? ""}`.trim(),
    email,
    company: company ?? "—",
    reason,
    message: message.slice(0, 200),
    at: new Date().toISOString(),
  });

  try {
    const enquiry = await db.enquiry.create({
      data: {
        firstName: firstName!.trim(),
        lastName: (lastName ?? "").trim(),
        email: email!.trim(),
        phone: phone?.trim() || null,
        company: company?.trim() || null,
        reason: reason!.trim(),
        message: message!.trim(),
      },
    });

    return NextResponse.json({ ok: true, id: enquiry.id }, { status: 200 });
  } catch (err) {
    console.error("[contact] db error:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to save enquiry" },
      { status: 500 },
    );
  }
}
