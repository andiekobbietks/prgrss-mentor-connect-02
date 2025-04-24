
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#000000",
        foreground: "#FFFFFF",
        primary: {
          DEFAULT: "#E5B884",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#2A2A2A",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#E5B884",
          foreground: "#000000",
        },
        muted: {
          DEFAULT: "#333333",
          foreground: "#888888",
        },
        card: {
          DEFAULT: "rgba(42, 42, 42, 0.8)",
          foreground: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
