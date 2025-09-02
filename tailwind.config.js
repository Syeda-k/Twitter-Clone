/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",   // 👈 Add this
    "./*.{html,js}",  // 👈 Covers all HTML & JS in root folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
