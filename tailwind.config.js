const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js', './mauli/**/*.js'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      light: '#FFFFFF',
      dark: '#000000',
      highlight: {
        DEFAULT: '#3E51F7',
        dark: '#4F5FEF',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      capsize: {
        fontMetrics: {
          sans: {
            capHeight: 2048,
            ascent: 2728,
            descent: -680,
            lineGap: 0,
            unitsPerEm: 2816,
          },
        },
        className: 'capsize',
      },
    },
  },
  plugins: [require('@themosaad/tailwindcss-capsize')],
};
