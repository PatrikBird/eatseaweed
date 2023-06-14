// const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
    require('flowbite/plugin'),
  ],
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './node_modules/flowbite.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // primary: colors.zinc,
        // secondary: colors.teal,
        // accent: colors.green,
        // info: colors.yellow,
      },
    },
  },
}
