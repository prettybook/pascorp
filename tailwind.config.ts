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
          DEFAULT: '#1a2b4a',
          50: '#f0f3f8',
          100: '#d9e0ec',
          200: '#b3c1d9',
          300: '#8da2c6',
          400: '#6783b3',
          500: '#4164a0',
          600: '#345080',
          700: '#273c60',
          800: '#1a2b4a',
          900: '#0d1525',
        },
        secondary: {
          DEFAULT: '#8b7355',
          50: '#f9f7f5',
          100: '#efe9e3',
          200: '#ddd3c7',
          300: '#c4b4a1',
          400: '#a8937b',
          500: '#8b7355',
          600: '#6f5c44',
          700: '#584a37',
          800: '#3d3327',
          900: '#261f18',
        },
        accent: {
          DEFAULT: '#4a6fa5',
          light: '#6b8fc5',
          dark: '#3a5a8a',
        },
        navy: {
          DEFAULT: '#1a2b4a',
          light: '#2a4066',
          dark: '#0f1a2e',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
