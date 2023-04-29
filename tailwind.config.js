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
      },
      fontFamily: {
        body: ['"Source Sans Pro"', '"Hiragino Sans"', 'sans-serif']
      },
      spacing: {
        192: '768px'
      }
    }
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#3b82f6',
          success: '#60d394',
          error: '#ee6055',
          warning: '#ffd97d'
        }
      }
    ]
  },
  plugins: [require('daisyui')]
}
