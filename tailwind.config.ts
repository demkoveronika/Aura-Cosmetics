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
        inria: ["var(--font-inria-sans)", "sans-serif"],
        aboreto: ["var(--font-aboreto-sans)", "serif"],
      },
      colors: {
        background: "var(--background)",
        primary: "#4B2E1C",
      },
    },
  },
  plugins: [],
} satisfies Config;
