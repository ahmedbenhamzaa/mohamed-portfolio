/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,json}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'deep-navy': '#0A1628',
        'light-navy': '#162035',
        'electric-blue': '#2563EB',
        gold: '#C9A84C',
        'mid-grey': '#8B9BB4',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
