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
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainblue: "#84DAE0",
        lightblue: "#ADEBE9",
        extralightblue: "#D8FFFD",
        darkblue: "#4DBEC4",
        bluegray: "#3D434D",
        // bluegray: "#373D48",
        // bluegray: "#37404A",
        // bluegray: "#36454D",
        darkbluegray: "#222C30",
        lightbluegray: "#455761",
        accent: "#B8725F",
        lightaccent: "#D69D82",
        textmain: "rgb(38 38 38)",
        textwhite: "rgb(245 245 245)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        playfair: ["Playfair+Display", "serif"],
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
