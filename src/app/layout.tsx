// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HODA – AI SaaS Platform",
  description: "HODA: Multi-agent AI workspace for Persian users.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className="dark">
      <body className="min-h-screen bg-hoda-bg text-hoda-text">
        {children}
      </body>
    </html>
  );
}
