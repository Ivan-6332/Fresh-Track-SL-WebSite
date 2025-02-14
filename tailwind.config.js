/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate:{
        'y-180': '180deg',
      },
      prespective: {
        '1000': '1000px',
      },
    },
  },
  plugins: [],
}