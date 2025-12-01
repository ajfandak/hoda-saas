// src/app/app/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "داشبورد گفت‌وگوها | هُدا",
};

export default function AppHomePage() {
  return (
    <div className="flex flex-col gap-4">
      {/* Hero card */}
      <section className="rounded-3xl border border-hoda-border/60 bg-hoda-surface/85 px-4 py-5 shadow-hoda-lg backdrop-blur-xl">
        <h1 className="mb-2 text-lg font-semibold text-hoda-text">
          مرکز کنترل گفت‌وگوهای هوشمند شما
        </h1>
        <p className="text-xs leading-relaxed text-hoda-muted">
          از اینجا می‌توانید چت‌های جدید بسازید، ایجنت‌های اختصاصی طراحی کنید و
          پایگاه‌های دانش خود را به هُدا متصل کنید.
        </p>
      </section>

      {/* Plan & quickstart */}
      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-hoda-border/60 bg-hoda-surface/85 p-4 backdrop-blur-xl">
          <h2 className="mb-1 text-sm font-semibold text-hoda-text">پلن فعلی</h2>
          <p className="text-xs text-hoda-muted">حساب تست اولیه (Free – آزمایشی)</p>
          <div className="mt-4 flex flex-col gap-1 text-[11px] text-hoda-muted">
            <span>حداکثر ۱۰۰ پیام در روز</span>
            <span>۵ پایگاه دانش فعال</span>
            <span>۵۰۰ مگابایت فضای فایل</span>
          </div>
        </div>

        <div className="rounded-3xl border border-hoda-border/60 bg-hoda-surface/85 p-4 backdrop-blur-xl md:col-span-2">
          <h2 className="mb-2 text-sm font-semibold text-hoda-text">
            شروع سریع با هُدا
          </h2>
          <ol className="space-y-1 text-[11px] leading-relaxed text-hoda-muted">
            <li>۱. ساخت یک گفت‌وگوی جدید در بخش «چت زنده»</li>
            <li>۲. آپلود یک فایل PDF در «پایگاه‌های دانش» برای تست RAG</li>
            <li>۳. ساخت اولین Agent مخصوص پشتیبانی سایت Possino</li>
          </ol>
        </div>
      </section>

      {/* Recent activity */}
      <section className="rounded-3xl border border-hoda-border/60 bg-hoda-surface/85 p-4 backdrop-blur-xl">
        <h2 className="mb-3 text-sm font-semibold text-hoda-text">
          چت‌های اخیر (Mock)
        </h2>
        <div className="grid gap-3 text-[11px] text-hoda-muted md:grid-cols-2">
          <div className="rounded-2xl border border-hoda-border/60 bg-hoda-bg/50 px-3 py-2">
            <div className="flex items-center justify-between">
              <span className="font-medium text-hoda-text">گفت‌وگوی آخر</span>
              <span className="text-[10px]">۵ دقیقه پیش</span>
            </div>
            <p className="mt-1 line-clamp-2">
              تست پاسخ هُدا درباره شرایط ارسال، راه‌اندازی و کارمزد کارتخوان‌های
              Possino.
            </p>
          </div>
          <div className="rounded-2xl border border-hoda-border/60 bg-hoda-bg/50 px-3 py-2">
            <div className="flex items-center justify-between">
              <span className="font-medium text-hoda-text">
                Agent تولید محتوای بلاگ
              </span>
              <span className="text-[10px]">۲ ساعت پیش</span>
            </div>
            <p className="mt-1 line-clamp-2">
              تولید مقاله «کارمزد کارتخوان در ایران» بر اساس مستندات شاپرک و PSPها.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
