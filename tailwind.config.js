module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    fontFamily: {
      'sans': ['"SF Pro Display"', 'system-ui', 'sans-serif'],
      'bona': ['"Bona Nova"', 'serif'],
    },
    extend: {
      colors: {
        lightMode: {
          100: '#071013', 
          200: '#f2f2f2', 
          300: '#979797', 
          400: '#6c6ea0', 
          500: '#0071E3', //blue 
        },
        darkMode: {
          100: '#000000',
          200: '#161618',
          300: '#212124',	
          400: '#ffffff',
          500: '#818181',
        },
        dark: '#000000',
        light: '#FFFFFF',
      }
    },
  },
  plugins: [],
}