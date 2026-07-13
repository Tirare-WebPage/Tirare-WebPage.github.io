import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        surface: "#141414",
        card: "#1B1B1B",

        border: "#2C2C2C",

        foreground: "#F5F5F3",

        muted: "#B5B5B5",
        subtle: "#7A7A7A",

        accent: "#C8863B",

        success: "#53C26B",
        warning: "#F5A623",
        error: "#FF5F57",
      },

      maxWidth: {
        content: "1280px",
        text: "720px",
        engineering: "1600px",
      },

      borderRadius: {
        xl: "20px",
        "2xl": "28px",
      },

      boxShadow: {
        card: "0 10px 40px rgba(0,0,0,.25)",
      },

      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(.22,.61,.36,1)",
      },

      transitionDuration: {
        slow: "700ms",
        slower: "1100ms",
      },
    },
  },
  plugins: [],
};

export default config;