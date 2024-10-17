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
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeInSlow: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 1.2s ease-in forwards', // Adjusted duration for slower effect
        fadeInSlow: 'fadeInSlow 2s ease-in forwards', // Slower duration for fading in
      },
    },
  },
  plugins: [],
}