// src/app/app/chat/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Role = "user" | "assistant";

interface ChatMessage {
  id: string;
  role: Role;
  content: string;
  createdAt: string;
}

const initialMessages: ChatMessage[] = [
  {
    id: "u-1",
    role: "user",
    content:
      "سلام هُدا. فعلاً می‌خوام روی طراحی پلتفرم SaaS هُدا و اتصالش به مدل‌های AI کار کنم.",
    createdAt: new Date().toISOString(),
  },
  {
    id: "a-1",
    role: "assistant",
    content:
      "سلام، برای شروع بگو روی چه کاری می‌خوای تمرکز کنی: طراحی داشبورد، اتصال به API مدل‌ها، یا چیزی دیگه؟ این فقط یک گفت‌وگوی نمایشی است. در Phase 3، پیام‌ها از طریق Bytez Model API و RAG تولید خواهند شد.",
    createdAt: new Date().toISOString(),
  },
];

export default function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  // اسکرول به انتهای گفتگو بعد از هر پیام جدید
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!input.trim() || isSending) return;

    const content = input.trim();

    const userMessage: ChatMessage = {
      id: `u-${Date.now()}`,
      role: "user",
      content,
      createdAt: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsSending(true);

    // این بخش فعلاً Mock است، بعداً به Bytez Model API متصل می‌کنیم
    const assistantMessage: ChatMessage = {
      id: `a-${Date.now() + 1}`,
      role: "assistant",
      content:
        "این یک پاسخ نمایشی است. در Phase 3 این بخش به مدل‌های هوش مصنوعی و RAG متصل می‌شود تا پاسخ واقعی روی داده‌های اختصاصی شما تولید کند.",
      createdAt: new Date().toISOString(),
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, assistantMessage]);
      setIsSending(false);
    }, 600);
  }

  return (
    <div className="flex h-[100vh] flex-col bg-gradient-to-b from-hoda-bg/95 to-hoda-bg/100 text-hoda-text">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-hoda-border/60 bg-hoda-card/90 px-4 py-3 backdrop-blur-md">
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-semibold tracking-tight">
            گفتگوی جدید با هُدا
          </h1>
          <p className="text-xs text-hoda-muted">
            نسخه آزمایشی – پیام‌ها فعلاً به مدل واقعی متصل نیستند.
          </p>
        </div>
        <Link
          href="/app"
          className="rounded-full border border-hoda-border/70 bg-hoda-surface px-3 py-1 text-xs text-hoda-muted transition hover:bg-hoda-accent/10 hover:text-hoda-accent"
        >
          بازگشت به داشبورد
        </Link>
      </header>

      {/* Messages */}
      <main className="flex-1 overflow-y-auto px-4 py-4">
        <div className="mx-auto flex max-w-3xl flex-col gap-3">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${
                m.role === "user" ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={
                  "max-w-[80%] rounded-3xl px-4 py-3 text-sm shadow-[0_0_25px_rgba(0,0,0,0.45)] " +
                  (m.role === "user"
                    ? "bg-hoda-surface/95 border border-hoda-border/60"
                    : "bg-hoda-accent/15 border border-hoda-accent/50")
                }
              >
                <p className="whitespace-pre-wrap leading-relaxed">
                  {m.content}
                </p>
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
      </main>

      {/* Composer */}
      <footer className="border-t border-hoda-border/60 bg-hoda-card/90 px-4 py-3 backdrop-blur-md">
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-3xl items-end gap-2"
        >
          <textarea
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="پیام خود را بنویسید و Enter را بزنید..."
            className="flex-1 resize-none rounded-2xl border border-hoda-border/60 bg-hoda-surface/90 px-3 py-2 text-sm text-hoda-text shadow-inner outline-none focus:border-hoda-accent focus:ring-1 focus:ring-hoda-accent/60"
          />
          <button
            type="submit"
            disabled={isSending || !input.trim()}
            className="h-10 min-w-[90px] rounded-2xl bg-hoda-accent px-4 text-xs font-medium text-white shadow-lg shadow-hoda-accent/40 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSending ? "در حال ارسال..." : "ارسال"}
          </button>
        </form>
      </footer>
    </div>
  );
}
