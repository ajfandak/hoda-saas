// src/app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs"; // برای سازگاری با Render

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const message: string | undefined = body?.message;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "پیام نامعتبر است." },
        { status: 400 },
      );
    }

    // TODO: در فاز بعدی این بخش به Bytez Model API و RAG وصل می‌شود
    const reply =
      "این یک پاسخ دمو از هُدا است. در نسخه بعدی، این پاسخ از طریق Bytez Model API و RAG تولید خواهد شد.\n\n" +
      `پیام شما:\n«${message.slice(0, 500)}»`;

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("[/api/chat] error", error);
    return NextResponse.json(
      { error: "خطای داخلی سرور" },
      { status: 500 },
    );
  }
}
