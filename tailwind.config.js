/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'verarte-light': '#F5A9A9',
        'verarte-strong': '#E8505B',
      },
    },
  },
  plugins: [],
}