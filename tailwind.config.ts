import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0E1A",
        surface: "#111827",
        border: "#1E2D45",
        primary: {
          DEFAULT: "#6366F1",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F5C518",
          foreground: "#0A0E1A",
        },
        foreground: "#F0F4FF",
        muted: {
          DEFAULT: "#8B9AB0",
          foreground: "#8B9AB0",
        },
        success: "#10B981",
        card: {
          DEFAULT: "#111827",
          foreground: "#F0F4FF",
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, #0A0E1A, #0D1B3E, #0A0E1A)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-geist)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
