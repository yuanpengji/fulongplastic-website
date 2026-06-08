import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#08090b",
        panel: "#111419",
        line: "#262c34",
        steel: "#9aa7b4",
        mint: "#44d7a8"
      }
    }
  },
  plugins: []
};

export default config;
