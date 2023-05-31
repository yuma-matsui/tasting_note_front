/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: true,
  theme: {
    extend: {
      colors: {
        'theme-red': '#C7243A',
        'theme-green': '#009250',
        'theme-emerald': '#5EC84E',
        'theme-yellow': '#F0BA32'
      },
      fontFamily: {
        body: ['"Source Sans Pro"', '"Hiragino Sans"', 'sans-serif']
      },
      spacing: {
        162: '648px'
      }
    }
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#3b82f6',
          success: '#009250',
          error: '#C7243A',
          warning: '#F0BA32'
        }
      }
    ]
  },
  plugins: [require('daisyui')]
}
