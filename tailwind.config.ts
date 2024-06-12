import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        hxl: '144px',
        hl: '100px',
        hm: '56px',
        hs: '32px',
        hxs: '28px',
        shl: '28px',
        shs: '14px',
        base: '18px',
        nav: '16px'
      }
    },
    fontFamily: {
      'bellefair': ['--font-bellefair', 'serif'],
      'barlow': ['--font-barlow', 'sans-serif'],
      'barlow-condensed': ['--font-barlow-condensed', 'sans-serif']
    },
    colors: {
      'white': '#fff',
      'black': '#000',
      'dark-blue': '#0B0D17',
      'light-blue': '#D0D6F9',
    }
  },
  plugins: [],
};
export default config;
