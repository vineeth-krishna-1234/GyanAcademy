/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

     extend: {
      boxShadow: {
        'box': '0 4px 18px  rgba(0, 0, 0, 0.25)',
      },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
}
