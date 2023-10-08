/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066FF',
        lightPrimary: '#84B5FF',
        darkPrimary: '#0147AE',
        white: '#FFFFFF',
        black: '#1C1B1F',
        gray: '#A3A6AA',
        lightGradient: 'hsl(229, 31%, 21%)',
        darkGradient: 'hsl(229, 31%, 21%)',
      },
      backgroundImage: theme => ({
        'gradient-light': 'linear-gradient(to bottom, #FFFFFF 0%,  #FFFFFF 0%, #0066FF)',
        'gradient-dark': 'linear-gradient(to bottom, #020D1F 20%, #020D1F 100%, #0066FF 20%)'
      }),
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      }
    },

  },
  plugins: [],
}