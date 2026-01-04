import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        robotoMono: ['"Roboto Mono"', "monospace"],
      },
      colors: {
        primary: {
          100: "#0061FF0A",
          200: "#0061FF1A",
          300: "#0061FF",
        },
        accent: {
          100: "#FBFBFD",
        },
        black: {
          DEFAULT: "#000000",
          100: "#8C8E98",
          200: "#666876",
          300: "#191d31",
        },
        danger: "#F75555",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-15deg)" },
          "50%": { transform: "rotate(15deg)" },
          "75%": { transform: "rotate(-10deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        centerWave1: {
          "0%, 100%": { transform: "scaleY(0.4)" },
          "50%": { transform: "scaleY(1.6)" },
        },
        centerWave2: {
          "0%, 100%": { transform: "scaleY(0.6)" },
          "50%": { transform: "scaleY(1.2)" },
        },
        centerWave3: {
          "0%, 100%": { transform: "scaleY(0.3)" },
          "50%": { transform: "scaleY(1.9)" },
        },
      },
      animation: {
        // Emoji wave animation
        wave: "wave 0.5s ease-in-out forwards",
        // Sound wave animation
        centerWave1: "centerWave1 1s ease-in-out infinite",
        centerWave2: "centerWave2 1.2s ease-in-out infinite",
        centerWave3: "centerWave3 0.8s ease-in-out infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [],
} satisfies Config;
