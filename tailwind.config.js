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
        'accent-gold': '#feb814',
      },
      screens: {
        sm: { max: '640px' },
        // md: '768px',
        // lg: '1024px',
        // xl: '1280px',
        // '2xl': '1536px',
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
      },
      boxShadow: {
        custom: '10px 10px 0px 2px #FB4C4C;',
      },
    },
  },
  plugins: [],
}
