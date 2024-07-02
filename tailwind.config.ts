import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#070B0A",
        secondary: "#32AB60"
      },
      fontFamily: {
        bona: ["Bona", "serif"],
        courier: ["Courier", "monospace"],
      }
    },
  },
  plugins: [],
} satisfies Config;
