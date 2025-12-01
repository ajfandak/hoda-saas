// src/server/config/env.ts
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),

  // برای Prisma و دیتابیس روی Render حتماً لازم است
  DATABASE_URL: z.string().url(),

  // فعلاً برای اتصال به Bytez می‌گذاریم اختیاری باشد
  BYTEZ_API_KEY: z.string().optional().default(""),

  // چون هنوز Auth نداریم، این‌ها را اختیاری می‌کنیم
  NEXTAUTH_URL: z.string().optional().default(""),
  NEXTAUTH_SECRET: z.string().optional().default(""),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error(
    "❌ Invalid environment variables:",
    parsed.error.flatten().fieldErrors,
  );
  throw new Error("Invalid environment variables");
}

export const env = parsed.data;
