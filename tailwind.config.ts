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
        inria: ["var(--font-inria-serif)", "sans-serif"],
        aboreto: ["var(--font-aboreto-serif)", "serif"],
        rosarivo: ["var(--font-rosarivo-cursive)", "cursive"],
        inriaBold: ["var(--font-inria-serif-bold)", "sans-serif"],
        inriaBoldItalic: ["var(--font-inria-serif-bold-italic)", "sans-serif"],
        alexBrush: ["var(--font-alex-brush-serif)", "serif"],
        josefinSlab: ["var(--font-josefin-slab-serif)", "serif"],
      },
      colors: {
        background: "var(--background)",
        primary: "#4B2E1C",
        secondary: "#C2A79A",
        tertiary: "#FFF2E8",
        light: "#FFF2E9",
      },
    },
  },
  plugins: [],
} satisfies Config;
