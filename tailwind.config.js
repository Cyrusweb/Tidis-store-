/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: '#7B2CBF',       // Purple
        secondary: '#000000',     // Black
        accent: '#FFFFFF',        // White
        highlight: '#A162F7'      // Light Purple for hover
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Lato', 'sans-serif'],
        cta: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}
