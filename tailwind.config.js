/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        paleOrange:'#ffd9a6',
        lightOrange:'#fbb03b',
        orange:'#f7931e'
      },
      fontFamily:{
        title: ["Playfair Display", "serif"],
        sans: ["Josefin Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

