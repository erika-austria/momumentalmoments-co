import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FFF9F1",
          alt: "#F8F4EE",
          deep: "#e8dec9",
        },
        ink: {
          DEFAULT: "#1a1410",
          soft: "#4a3f38",
        },
        navy: {
          DEFAULT: "#2f4858",
          deep: "#1d2f3d",
        },
        rule: {
          DEFAULT: "#d9cdb8",
          soft: "#e8dec9",
        },
        pink: {
          DEFAULT: "#F086DC",
          soft: "#fbd7f1",
          wash: "#fce7f7",
          deep: "#C95CB0",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "Times New Roman", "serif"],
        sans: ["var(--font-geist)", "Inter Tight", "Inter", "Helvetica Neue", "sans-serif"],
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        eyebrow: "0.18em",
        tightest: "-0.04em",
      },
      maxWidth: {
        content: "1240px",
        narrow: "920px",
        prose: "42rem",
      },
    },
  },
  plugins: [],
};

export default config;
