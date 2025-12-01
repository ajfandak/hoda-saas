// postcss.config.mjs

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // پلاگین رسمی Tailwind v4 برای PostCSS
    "@tailwindcss/postcss": {
      // معمولاً نیازی به تنظیم content نیست؛
      // Tailwind خودش از سورس‌های پروژه می‌خواند.
    },
  },
};

export default config;
