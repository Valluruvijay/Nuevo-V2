import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const openings = await db.jobOpening.findMany({
      where: { active: true },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        role: true,
        team: true,
        location: true,
        type: true,
        experience: true,
        description: true,
      },
    });

    return NextResponse.json({ openings }, { status: 200 });
  } catch (err) {
    console.error("[careers] db error:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to load job openings" },
      { status: 500 },
    );
  }
}
