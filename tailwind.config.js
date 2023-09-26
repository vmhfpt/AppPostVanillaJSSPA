/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./frontend/**/*.{html,js}"],
  theme: {
    extend: {
      flexBasis: {
        "1/2-gap-4": "calc(50% - 1rem)",
        "full-gap-4" : "calc(100% - 1rem)"
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}

