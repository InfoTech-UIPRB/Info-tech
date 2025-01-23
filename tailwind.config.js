/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./node_modules/flowbite/**/*.js"],
  plugins: [
    require('flowbite/plugin')
  ],
  theme: {
    extend: {

      colors:{
        'infotech-green': '#027516',
        'infotech-yellow':'#f5ff0a',
        'infotech-white': '#fffdfa',
        'infotech-black': '#333333',
      },
    },
  },
  plugins: [],
}

