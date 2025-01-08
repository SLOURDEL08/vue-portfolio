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
          dark: '#1E1E21',
        },
           'secondary': {
          DEFAULT: '#1E1E21',

        }
       },
       screens: {
        'xs': '400px',
      }
    },
  },
  plugins: [],
}