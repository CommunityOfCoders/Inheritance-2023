/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      colors: {
        "white": "#EAEFF3",
        "skin": "#A6CF98",
        "brown": "#FA7070",
        "greeen": "#388E3C",
        "black": "#000000"

      },
      backgroundImage: {
        'home': "url('https://i.ibb.co/vB95297/pexels-lumn-1028599.jpg')"
      },
      fontFamily:{
        body:['Teko']
      }
    },

  },
  plugins: [],
}