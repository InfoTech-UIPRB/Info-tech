/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./node_modules/flowbite/**/*.js"],
  plugins: [
    require('flowbite/plugin')
  ],
  theme: {
    extend: {

      colors:{
        'custom-green': '#027516',
        'custom-yellow':'#f5ff0a',
        'custom-white': '#fffdfa',
        'custom-black': '#333333',
      },
    },
  },
  plugins: [],
}

