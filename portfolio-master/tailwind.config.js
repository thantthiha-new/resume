/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#FFACD8',
        'light-pink': '#FFC7E5',
      },
    },
  },
  plugins: [],
}
