/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
   theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#f5f3ef',
          // Vous pouvez ajouter des variantes si nécessaire
          light: '#ffffff',
          dark: '#e6e4e0',
        }
      }
    },
  },
  plugins: [],
}