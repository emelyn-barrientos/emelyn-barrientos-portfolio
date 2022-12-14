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
        'accent-violet': '#6E3EF4',
        'accent-green': '#00AE84',
        'accent-red': '#FB4C4C',
        'accent-gold': '#E8A700',
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
      },
      boxShadow: {
        custom: '10px 10px 0px -1px #00AE84;',
      },
    },
  },
  plugins: [],
}
