/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#DC780B',
        'gray-dark': '#252525',
        'text-footer': '#FFFFFF',
        'text-green-future': '#8FA632',
      },
      spacing: {
        '41': '41px', 
        '35': '35px',
      },
     
    },
  },
  plugins: [],
}