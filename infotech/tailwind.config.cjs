/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  plugins: [

  ], 
  theme: {
      extend: {
        colors: {
          "infotech-green": "#027516",
          'infotech-yellow':'#f5ff0a',
          'infotech-white': '#fffdfa',
          'infotech-black': '#333333',
        },
      },
    },
}