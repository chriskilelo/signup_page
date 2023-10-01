/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/css/**/*.{html,js}",
    './pages/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'roboto': ['Roboto', 'sans-serif' ],
        'exo2': ['"Exo 2"', 'sans-serif' ],
      },
      colors: {}
    },
  },
  plugins: [],
}
