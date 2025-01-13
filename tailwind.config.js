/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        pretendard: ['Pretendard Variable', 'sans-serif'],
      },
      colors: {
        error: '#EF4444',
        black: '#000000',
        neutral: '#404040',
        white: '#FFFFFF',
        'zinc-100': '#F4F4F5',
        'zinc-200': '#E4E4E7',
        'zinc-300': '#D4D4D8',
        'zinc-500': '#71717A',
      },
    },
  },
  plugins: [],
};
