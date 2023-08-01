/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        background: '#181818',
        light: '#1f1f1f',
        lighter: '#2f2f2f',
        accent: '#00bdf7',
        white: '#e0e0e0',
      }
    },
  },
  plugins: [],
}

