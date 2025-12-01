// src/app/app/layout.tsx
import "../globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { AppShell } from "@/components/layout/app-shell";

export const metadata: Metadata = {
  title: "داشبورد هُدا | گفتگوها و ایجنت‌ها",
};

export default function AppLayout({ children }: { children: ReactNode }) {
  return <AppShell>{children}</AppShell>;
}
