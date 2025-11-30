// src/app/api/health/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/server/db/prisma";

export async function GET() {
  try {
    // یک کوئری خیلی ساده برای تست اتصال DB
    const rows = await prisma.$queryRawUnsafe<{ now: Date }[]>(
      "SELECT NOW() as now",
    );

    return NextResponse.json({
      ok: true,
      db: "up",
      now: rows[0]?.now ?? null,
    });
  } catch (error) {
    console.error("[HEALTH_CHECK_ERROR]", error);

    return NextResponse.json(
      {
        ok: false,
        db: "error",
        error: (error as Error).message,
      },
      { status: 500 },
    );
  }
}
