/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Activa el modo oscuro usando clases
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "background-1": 'var(--background-1)', // #F6EDFF
        "button-1": 'var(--button-1)', // #E0B6FF
        "button-2": 'var(--button-2)', // #FFFFFF
        "card-1": 'var(--card-1)', // #D0BCFF
        "card-2": 'var(--card-2)', 
        "color-1": 'var(--color-1)', // #FFFFFF
        "color-2": 'var(--color-2)', // #1E1B1B
        "color-3": 'var(--color-3)', // #494649
        "progress-bar-1": 'var(--progress-bar-1)', // #8A20D5
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
