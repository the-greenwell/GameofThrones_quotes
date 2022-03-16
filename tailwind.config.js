const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Cinzel Decorative', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
