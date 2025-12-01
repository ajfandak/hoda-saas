import { z } from "zod";

// اسکیما برای متغیرهای محیطی
const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),

  // برای Prisma و Postgres روی Render
  DATABASE_URL: z.string().min(1, "DATABASE_URL is required"),

  // کلید بایتز – اختیاری برای الان
  BYTEZ_API_KEY: z.string().optional().default(""),

  // برای NextAuth – فعلاً اختیاری که بیلد خراب نشود
  NEXTAUTH_URL: z.string().optional().default(""),
  NEXTAUTH_SECRET: z.string().optional().default(""),
});

const _env = envSchema.safeParse({
  NODE_ENV: process.env.NODE_ENV,
  DATABASE_URL: process.env.DATABASE_URL,
  BYTEZ_API_KEY: process.env.BYTEZ_API_KEY,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
});

if (!_env.success) {
  console.error(
    "❌ Invalid environment variables:",
    _env.error.flatten().fieldErrors,
  );
  throw new Error("Invalid environment variables");
}

export const env = _env.data;
