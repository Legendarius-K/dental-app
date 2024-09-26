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
        darkblue: "#4DBEC4",
        bluegray: "#3D595C",
        darkbluegray: "#3D595C",
        lightbluegray: "#A1B3B5",
        // accent: "#D67960",
        accent: "#DC8E71",
        lightaccent: "#F5C19D",
        textmain: "rgb(38 38 38)",
        textwhite: "rgb(245 245 245)",
        textwhite: "rgb(245 245 245)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        playfair: ["Playfair+Display", "serif"],
        nunito: ["Nunito", "sans-serif"]
      },
    },
  },
  plugins: [],
};
export default config;
