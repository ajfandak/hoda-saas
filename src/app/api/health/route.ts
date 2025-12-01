// src/app/api/health/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/server/db/prisma";

export async function GET() {
  try {
    // یک کوئری ساده برای تست اتصال DB
    const rows = (await prisma.$queryRawUnsafe(
      "SELECT NOW() as now",
    )) as { now: Date }[];

    const now = rows[0]?.now ?? null;

    return NextResponse.json({
      ok: true,
      db: "up",
      now,
    });
  } catch (error) {
    console.error("Healthcheck DB error", error);
    return NextResponse.json(
      { ok: false, db: "down", error: "DB connection failed" },
      { status: 500 },
    );
  }
}
