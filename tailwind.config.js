/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
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
        darkerGray: '#242424',
        editorBg: '#1e1e1e',
        primaryRed: '#b80000',
        secondaryRed: '#a30000',
      },

      screens: {
        'h600': { 'raw': '(max-height: 600px)' },
        
        'w900': { 'raw': '(max-width: 900px)' },
        'w550': { 'raw': '(max-width: 550px)' },
        'w450': { 'raw': '(max-width: 450px)' },
        'w400': { 'raw': '(max-width: 400px)' },
      }
    },
  },
  plugins: [],
}

