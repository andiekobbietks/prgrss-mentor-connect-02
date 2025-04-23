
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
        primary: "#FFFFFF",
        "primary-foreground": "#000000",
        secondary: "#1A1F2C",
        "secondary-foreground": "#FFFFFF",
        accent: {
          DEFAULT: "#9b87f5",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#333333",
          foreground: "#888888",
        },
        card: {
          DEFAULT: "rgba(255, 255, 255, 0.1)",
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
