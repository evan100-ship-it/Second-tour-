import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F7F3EC",
        navy: "#1B2A4A",
        "navy-light": "#2A3D63",
        ember: "#E8623A",
        "ember-dark": "#C94E29",
      },
      fontFamily: {
        display: ["var(--font-fraunces)"],
        sans: ["var(--font-public-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
