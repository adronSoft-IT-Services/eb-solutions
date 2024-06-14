import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000080',
        secondary: '#878e94',
        base: '#ffffff',
        info: '#0000ff',
        error: '#ff0000',
      },
    },
  },

  plugins: [
    require('preline/plugin'),
  ],
};
export default config;
