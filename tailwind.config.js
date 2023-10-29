/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: { 
        vazir: ['vazir']
      },
      minHeight: {
        '10': '2.5rem'
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}

