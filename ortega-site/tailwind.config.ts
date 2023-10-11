import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'passion': "url('/bg.png')",
      },
      fontFamily: {
        'syne': ['Syne Mono', 'monospace'],
      }
    },
  },
  plugins: [],
} satisfies Config;
