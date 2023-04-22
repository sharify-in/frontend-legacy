/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,vue,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'background': '#282936',
        'background-dark': '#1a1b23',
        'accent': '#3e97ff',
        'dim-accent': '#7d8a99',
        'separator': '#2c2a3b',
        'almost-black': '#171717'
      }
    },
  },
  plugins: [],
};
