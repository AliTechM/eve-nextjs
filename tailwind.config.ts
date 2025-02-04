import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#293f84",
      },
      screens: {
        "3xl": "1700px",
        "4xl": "1920px",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        alexandria: ["var(--font-alexandria)", "sans-serif"],
        cairo: ["var(--font-cairo)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
