/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: '1rem',
        screens: {
          sm: '600px',
          md: '728px',
          lg: '930px',
        },
      },
    },
  },
  plugins: [],
}