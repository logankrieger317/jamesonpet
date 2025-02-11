/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      boxShadow:{
        'modalShadow':'0px 25px 500px -12px rgba(255,0,0,0.25)',
      },
      modalBorder:{
        border: '10px solid black',
      },
      colors:{
        'primary': '#1F2937',
        'secondary': '#4B5563',
        'accent': '#3B82F6',
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require('@tailwindcss/aspect-ratio'),
  ],
}
