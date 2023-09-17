/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1F3933',
        green: '#006241',
        'light-black': '#666666',
        'light-text': '#DADADA',
        'light-green': '#D4E9E2',
      }
    },
    borderWidth: {
      header: 1,
      2: 2,
      loader: 4
    },
    borderColor: {
      green: '#006241',
      'header-color': '#DADADA',
    }
  },
  darkMode: {},
  plugins: [],
}

