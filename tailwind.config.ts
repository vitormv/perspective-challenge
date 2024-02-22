import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.sky[900],
        primaryHighlight: colors.sky[950],
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-lora)', 'serif'],
        display: ['var(--font-lora)', 'serif'],
      },
      animation: {
        'page-appear': 'appear-slide-up-fade 1s cubic-bezier(0.25, 1, 0.5, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
