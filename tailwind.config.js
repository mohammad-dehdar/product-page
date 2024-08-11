/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'arial': ['arial','helvetica','sans-serif'],
    },
    extend: {
      colors: {
        'my-bg': '#f6f6f7',
      }
    },
  },
  plugins: [],
}

