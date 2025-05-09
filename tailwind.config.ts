import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        "shiny-yellow-300": "#fee6a6",
        "shiny-yellow-500": "#fad267",
        "shiny-yellow-700": "#f0b023",
        "shiny-yellow-900": "#de872d",

        "shiny-neutral-100": "#f0f0f0",
        "shiny-neutral-300": "#b8b8b8 ",
        "shiny-neutral-500": "#494949",
        "shiny-neutral-700": "#272727",
        "shiny-neutral-900": "#121212",
      },
    },
  },
  plugins: [],
};
export default config;
