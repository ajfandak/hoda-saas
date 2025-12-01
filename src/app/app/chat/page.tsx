// src/app/app/chat/page.tsx
"use client";

import { useState } from "react";
import AppShell from "@/components/layout/app-shell"; // ← این الان درسته

type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "system",
      content:
        "سلام، من هُدا هستم. این نسخه نمایشی است و پاسخ‌ها فعلاً از یک API داخلی تستی می‌آیند.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage: ChatMessage = {
      role: "user",
      content: trimmed,
    };

    // پیام کاربر را بلافاصله نشان بده
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsSending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: trimmed }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "خطا در ارتباط با سرور");
      }

      const data: { reply?: string } = await res.json();

      const assistantMessage: ChatMessage = {
        role: "assistant",
        content:
          data.reply ??
          "پاسخی از سرور دریافت نشد. در فاز بعدی این بخش تکمیل خواهد شد.",
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err: any) {
      console.error("chat error", err);
      setError(err?.message || "خطای نامشخص در گفتگو");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <AppShell>
      <div className="flex flex-col h-full gap-4">
        {/* Header */}
        <div className="border-b border-hoda-border pb-2">
          <h1 className="text-2xl font-bold text-hoda-text">
            گفت‌وگو با هُدا
          </h1>
          <p className="text-sm text-hoda-muted">
            این نسخه‌ی اولیه (Mock) است. در فاز بعدی پاسخ‌ها از مدل‌های Bytez
            و RAG تولید می‌شوند.
          </p>
        </div>

        {/* Chat area */}
        <div className="flex-1 min-h-0 border border-hoda-border rounded-2xl bg-hoda-card/60 backdrop-blur-sm overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "ml-auto bg-hoda-accent/20 border border-hoda-accent text-hoda-text"
                    : m.role === "assistant"
                    ? "mr-auto bg-hoda-surface border border-hoda-border text-hoda-text"
                    : "mx-auto text-center text-xs text-hoda-muted"
                }`}
              >
                {m.content}
              </div>
            ))}
            {isSending && (
              <div className="mr-auto text-xs text-hoda-muted animate-pulse">
                در حال فکر کردن…
              </div>
            )}
          </div>

          {/* Error */}
          {error && (
            <div className="px-4 py-2 text-xs text-red-400 border-t border-hoda-border bg-black/40">
              {error}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-hoda-border p-3 flex gap-2 items-center bg-hoda-bg/80 backdrop-blur"
          >
            <input
              className="flex-1 rounded-xl bg-hoda-surface border border-hoda-border px-3 py-2 text-sm text-hoda-text focus:outline-none focus:ring-2 focus:ring-hoda-accent/60"
              placeholder="پیامت را برای هُدا بنویس…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isSending}
            />
            <button
              type="submit"
              disabled={isSending || !input.trim()}
              className="rounded-xl px-4 py-2 bg-hoda-accent text-black text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              ارسال
            </button>
          </form>
        </div>
      </div>
    </AppShell>
  );
}
