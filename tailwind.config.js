/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-blue': '#1A124C',
        'contrast-white': '#FFFFFF',
        'accent-blue': '#2718d8',
        'accent-green': '#00AE84',
        'accent-red': '#FB4C4C',
        'accent-gold': '#FEB814',
      },
      screens: {
        sm: { max: '640px' },
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
