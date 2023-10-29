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
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}

