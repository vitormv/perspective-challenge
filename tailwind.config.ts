import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D3B4E',
        'primary-highlight': '#253141',
        secondary: '#F4E4BA',
        'secondary-highlight': '#EED595',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-lora)', 'serif'],
        display: ['var(--font-lora)', 'serif'],
      },
      animation: {
        'page-appear': 'appear-slide-up-fade 1s cubic-bezier(0.25, 1, 0.5, 1)',
        'title-appear': 'title-appear-slide 1.3s cubic-bezier(0.25, 1, 0.5, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
