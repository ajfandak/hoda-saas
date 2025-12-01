"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type AppShellProps = {
  children: ReactNode;
};

const navItems = [
  { href: "/app/chat", label: "گفتگوها" },
  { href: "/app/agents", label: "ایجنت‌ها" },
  { href: "/app/knowledge", label: "دانش‌پایه" },
  { href: "/app/history", label: "سابقه مصرف" },
  { href: "/app/billing", label: "صورتحساب" },
  { href: "/app/settings", label: "تنظیمات" },
  { href: "/app/admin", label: "ادمین" },
];

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-hoda-bg text-white flex">
      {/* سایدبار */}
      <aside className="w-64 border-l border-white/10 bg-hoda-card/40 backdrop-blur-xl p-4 flex flex-col">
        <div className="text-2xl font-bold mb-6">هُدا</div>

        <nav className="space-y-1 flex-1">
          {navItems.map((item) => {
            const active = pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block rounded-xl px-3 py-2 text-sm transition",
                  active
                    ? "bg-hoda-primary/80 text-white shadow-[0_0_20px_rgba(248,113,113,0.4)]"
                    : "text-hoda-muted hover:bg-white/5 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-4 text-xs text-hoda-muted">
          نسخه ۰.۱.۰ – HODA SaaS
        </div>
      </aside>

      {/* محتوای اصلی */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}

// خیلی مهم: هم export نام‌دار داریم، هم default
export default AppShell;
