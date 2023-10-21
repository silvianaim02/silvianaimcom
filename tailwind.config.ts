// BEGIN: color-configuration
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
        primary: {
          100: '#F0F4F8',
          200: '#D9E2EC',
          300: '#BCCCDC',
          400: '#8CB4C1',
          500: '#2D3B4A',
          600: '#1D2C3C',
          700: '#0E1A27',
          800: '#0A1322',
          900: '#070D1A',
        },
        secondary: {
          100: '#FDF2F8',
          200: '#FCE7F3',
          300: '#FBCFE8',
          400: '#F9A8D4',
          500: '#F472B6',
          600: '#DB2777',
          700: '#BE185D',
          800: '#9D174D',
          900: '#831843',
        },
      },
    },
  },
  plugins: [],
};
export default config;
// END: color-configuration
