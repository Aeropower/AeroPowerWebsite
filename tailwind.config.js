/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Inter'],
      },
      gridTemplateColumns: {
        '70/30': "70% 28%",
      },
      colors: {
        darkgreen: '#006400',
      },
      boxShadow: {
        'custom-shadow-md': '0 4px 2px -2px gray',
        'hard': '0 6px 4px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
