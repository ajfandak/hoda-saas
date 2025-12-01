/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/server/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // HODA brand palette
        "hoda-bg": "#050816",
        "hoda-surface": "#020617",
        "hoda-surface-soft": "rgba(15, 23, 42, 0.85)",
        "hoda-border": "rgba(148, 163, 184, 0.45)",
        "hoda-primary": "#38bdf8",
        "hoda-primary-soft": "rgba(56, 189, 248, 0.15)",
        "hoda-accent": "#a855f7",
        "hoda-accent-soft": "rgba(168, 85, 247, 0.2)",
        "hoda-text": "#e5e7eb",
        "hoda-muted": "#9ca3af",
        "hoda-danger": "#f97373",
      },
      borderRadius: {
        glass: "1.75rem",
      },
      boxShadow: {
        glass: "0 24px 80px rgba(15, 23, 42, 0.8)",
        "glow-primary": "0 0 40px rgba(56, 189, 248, 0.35)",
      },
      backdropBlur: {
        glass: "24px",
      },
    },
  },
  plugins: [],
};
