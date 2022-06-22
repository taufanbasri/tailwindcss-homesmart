/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      maxWidth: {
        '16': '16rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
