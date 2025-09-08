/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#05bdc7",
        secondary: "#017979",
        accent: "#ff004f",
      },
      fontFamily: {
        roboto: ['"Roboto Slab"', 'serif'],
        sans: ['"Helvetica Neue"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
