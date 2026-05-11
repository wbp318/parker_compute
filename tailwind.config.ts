import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1100px",
      },
    },
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FAF7F2",
          50: "#FDFCFA",
          100: "#FAF7F2",
          200: "#F1ECE0",
          300: "#E5E0D5",
        },
        ink: {
          DEFAULT: "#1B1B1F",
          muted: "#4A4A52",
          subtle: "#6B6B72",
        },
        moss: {
          DEFAULT: "#3F5C3A",
          dark: "#2E4429",
          light: "#5A7A55",
        },
        clay: {
          DEFAULT: "#A8654B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
