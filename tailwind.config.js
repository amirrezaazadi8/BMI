/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      screens: {
        'tall': { 'raw': '(max-width: 1200px)' },
        // => @media (min-height: 800px) { ... }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

