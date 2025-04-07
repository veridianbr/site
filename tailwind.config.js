module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#071013', //rich's black
          200: '#738290', //slate GRAY
          300: '#EAEAEA', // platinum
          400: '#6c6ea0', // violet
          500: '#EF233C', // CITRON
        },
        dark: '#000000',
        light: '#FFFFFF',
      }
    },
  },
  plugins: [],
}