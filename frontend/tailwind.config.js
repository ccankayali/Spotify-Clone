/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        backdrop: '#121212',
        primary: '#1DB954',
        active: '#282828',
        link: '#b3b3b3',
        footer: '#181818'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}