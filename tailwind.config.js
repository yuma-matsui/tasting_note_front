/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'theme-red': '#ee6055',
        'theme-green': '#60d394',
        'theme-emerald': '#aaf683',
        'theme-yellow': '#ffd97d',
        'theme-pink': '#ff9b85'
      }
    }
  },
  daisyui: {
    themes: false
  },
  plugins: [require('daisyui')]
}
