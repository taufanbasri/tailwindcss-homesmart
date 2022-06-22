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
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
