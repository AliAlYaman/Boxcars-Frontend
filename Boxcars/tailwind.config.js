/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary: '#050B20'
      },
      fontFamily: {
        dmSans: ['DM Sans']
      }
    },
  },
  plugins: [],
}