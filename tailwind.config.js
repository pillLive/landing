/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        pillblue: {
          DEFAULT: '#4CA8FF',
          dark: '#3996EB',
          light: '#8BCBFF'
        }
      },
      keyframes: {
        pulseOnce: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        pulseOnce: 'pulseOnce 1.5s ease-in-out',
      },
    },
  },
  plugins: [],
}
