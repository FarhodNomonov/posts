/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xxs': '320px',
      'xs': '520px',
      'sm': '640px',
      'md': '768px',
      'lg': '992px',
      'xl': '1150px',
      '2xl': '1536px',
    },
    extend: {

      colors: {
        black: "#2d2c2c",
        darkPurple: "#350a4e",
        lightPurple: "#36135499",
        lighterPurple: "#31124b",
        orange: "#fa9e1b"
      },

      fontFamily: {
        'beyond': ["Beyond"],
      },
    },
  },
  plugins: [],
}