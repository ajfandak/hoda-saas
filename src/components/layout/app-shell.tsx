// src/components/layout/app-shell.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/app", label: "داشبورد گفت‌وگوها" },
  { href: "/app/chat", label: "چت زنده (HODA GPT)" },
  // در فاز بعدی:
  { href: "/app/knowledge", label: "پایگاه‌های دانش", soon: true },
  { href: "/app/agents", label: "Multi-Agent Studio", soon: true },
  { href: "/app/billing", label: "اشتراک و Billing", soon: true },
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname() || "/app";

  return (
    <div className="flex min-h-screen flex-col bg-hoda-bg text-hoda-text">
      {/* Top navbar */}
      <header className="border-b border-hoda-border/60 bg-hoda-navbar/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-hoda-primary/25 text-[11px] font-semibold text-hoda-primary">
              هُدا
            </div>
            <div className="flex flex-col text-right">
              <span className="text-sm font-semibold">داشبورد هُدا</span>
              <span className="text-xs text-hoda-muted">
                مرکز کنترل گفت‌وگوهای هوشمند شما
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <div className="hidden items-center gap-2 rounded-full border border-hoda-border/60 bg-hoda-surface/70 px-3 py-1 md:flex">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              <span>پلن آزمایشی Free فعال است</span>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-hoda-surface/80 text-[11px]">
              SA
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-6xl flex-1 gap-4 px-4 py-5">
        {/* Sidebar – در دسکتاپ */}
        <aside className="hidden w-60 flex-col gap-2 md:flex">
          {navItems.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/app" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center justify-between rounded-2xl border px-3 py-2 text-xs transition-all",
                  "border-transparent bg-transparent text-hoda-muted hover:border-hoda-primary/40 hover:bg-hoda-surface/80 hover:text-hoda-text",
                  active &&
                    "border-hoda-primary/70 bg-hoda-surface/95 text-hoda-text shadow-hoda-lg"
                )}
              >
                <span>{item.label}</span>
                <div className="flex items-center gap-1">
                  {item.soon && (
                    <span className="rounded-full bg-hoda-pill px-2 py-0.5 text-[10px] text-hoda-accent-soft">
                      به‌زودی
                    </span>
                  )}
                  {active && (
                    <span className="h-1.5 w-1.5 rounded-full bg-hoda-primary" />
                  )}
                </div>
              </Link>
            );
          })}
        </aside>

        {/* محتوا */}
        <main className="flex-1 pb-6">{children}</main>
      </div>
    </div>
  );
}
