/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-blue': '#1A124C',
        'accent-violet': '#6E3EF4',
        'accent-green': '#00AE84',
        'accent-red': '#FB4C4C',
        'accent-gold': '#E8A700',
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
