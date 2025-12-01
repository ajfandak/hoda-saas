// src/server/db/prisma.ts

// این فایل فقط روی سرور اجرا می‌شود و به خاطر تفاوت نسخه‌های Prisma
// و TypeScript روی Render، چک کردن تایپ‌ها را غیرفعال می‌کنیم.
// @ts-nocheck

import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import { env } from "@/server/config/env";

// کانکشن‌پول PostgreSQL با آدرس داخل .env
const pool = new pg.Pool({
  connectionString: env.DATABASE_URL,
});

// آداپتر جدید Prisma 7 برای pg
const adapter = new PrismaPg(pool);

// در زمان اجرا، PrismaClient واقعاً از این پکیج export می‌شود
// ولی TypeScript روی Render به هر دلیل آن را درست نمی‌شناسد، پس از require استفاده می‌کنیم.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PrismaClient } = require("@prisma/client");

// نگه‌داشتن instance در حالت dev روی global تا مشکل hot reload نداشته باشیم
const globalForPrisma = globalThis as any as {
  prisma?: any;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
    log:
      env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
