// src/app/page.tsx
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-hoda-bg to-black text-hoda-text">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-8">
        {/* Top bar */}
        <header className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-hoda-primary-soft shadow-glow-primary">
              <span className="text-lg font-semibold text-hoda-primary">
                H
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wide">
                HODA
              </span>
              <span className="text-xs text-hoda-muted">
                هُدا – دستیار هوش مصنوعی چندعاملی
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-hoda-muted md:flex">
            <a href="#features" className="hover:text-hoda-text transition">
              قابلیت‌ها
            </a>
            <a href="#pricing" className="hover:text-hoda-text transition">
              پلن‌ها
            </a>
            <a href="#agents" className="hover:text-hoda-text transition">
              Agent Studio
            </a>
            <Link
              href="/app"
              className="rounded-full border border-hoda-border bg-hoda-surface-soft px-4 py-1.5 text-xs font-medium text-hoda-text hover:border-hoda-primary hover:bg-hoda-primary-soft hover:text-hoda-primary transition"
            >
              ورود به پنل
            </Link>
          </nav>
        </header>

        {/* Hero */}
        <section className="flex flex-1 flex-col gap-10 md:flex-row md:items-center">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-hoda-border bg-hoda-surface-soft px-3 py-1 text-[11px] text-hoda-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              نسخه Alpha • متصل به مدل‌های Bytez
            </div>

            <h1 className="text-balance text-4xl font-semibold leading-snug md:text-5xl lg:text-6xl">
              پلتفرم هوش مصنوعی{" "}
              <span className="bg-gradient-to-l from-hoda-primary to-hoda-accent bg-clip-text text-transparent">
                مخصوص کسب‌وکارهای ایرانی
              </span>
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-hoda-muted md:text-base">
              هُدا یک فضای کاری چندعاملی است که به شما اجازه می‌دهد برای هر
              سناریو یک Agent اختصاصی بسازید، برایش پایگاه دانش (RAG) تعریف کنید
              و مصرف و اشتراک کاربران را در سطح SaaS مدیریت کنید.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/app"
                className="inline-flex items-center justify-center rounded-full bg-hoda-primary px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-glow-primary hover:bg-sky-300 transition"
              >
                شروع استفاده (پلن رایگان)
              </Link>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full border border-hoda-border bg-hoda-surface-soft px-5 py-2.5 text-sm text-hoda-text hover:border-hoda-primary hover:bg-hoda-primary-soft transition"
              >
                مشاهده پلن‌ها
              </a>
            </div>

            <div className="mt-4 flex flex-wrap gap-6 text-xs text-hoda-muted">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-hoda-primary" />
                Multi-Agent Studio
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-hoda-primary" />
                RAG + Vector DB
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-hoda-primary" />
                Subscription + Billing
              </div>
            </div>
          </div>

          {/* Right side – glass preview card */}
          <div className="mt-10 flex flex-1 items-center justify-center md:mt-0">
            <div className="glass-card relative max-w-md flex-1 overflow-hidden p-5">
              <div className="pointer-events-none absolute -left-24 -top-24 h-52 w-52 rounded-full bg-hoda-primary-soft blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -right-24 h-52 w-52 rounded-full bg-hoda-accent-soft blur-3xl" />

              <div className="relative space-y-4">
                <div className="flex items-center justify-between text-xs text-hoda-muted">
                  <span>هُدا • چت هوشمند</span>
                  <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-300">
                    Online
                  </span>
                </div>

                <div className="space-y-3 text-[11px] leading-relaxed">
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-slate-900/80 px-3 py-2">
                      سلام هُدا، می‌خوام برای استارتاپ SaaS خودم یک استودیو Agent
                      بسازم. از کجا شروع کنم؟
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-hoda-primary/90 px-3 py-2 text-slate-950">
                      من برایت چند Agent تعریف می‌کنم: پشتیبانی، فروش، تولید
                      محتوا و آنالیز دیتا. هر کدام پایگاه دانش و محدودیت‌های
                      خودش را دارد.
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-full border border-hoda-border bg-slate-950/60 px-4 py-2 text-[11px] text-hoda-muted">
                  بنویس: «۵ پرامپت برای طراحی Agent فروش SaaS»
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Simple pricing anchor (placeholder) */}
        <section
          id="pricing"
          className="mt-12 border-t border-slate-800/60 pt-8 text-xs text-hoda-muted"
        >
          <p>
            پلن رایگان با محدودیت پیام + پلن‌های ماهانه و سالانه. پیاده‌سازی
            کامل Billing و Subscription در Phase 4 انجام می‌شود.
          </p>
        </section>
      </div>
    </main>
  );
}
