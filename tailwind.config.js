/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        container: '1300px',
      },
      padding: {
        container: '20px 30px'
      },
      colors: {
        mainBg: '#2c2c32',
        secondaryBg: '#25252b',
        primaryBlue: '#0066b8',
        secondaryBlue: '#005ba4',
        lightGray: '#cccccc',
        gray: '#6e6e6e',
        darkGray: '#333333',
        darkerGray: '#242424'
      }
    },
  },
  plugins: [],
}

