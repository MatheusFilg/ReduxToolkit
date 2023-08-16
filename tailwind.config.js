/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      boxShadow: {
        small: '0 0 0 2px',
      },
      colors: {
        gray: {
          50: '#eaeaea',
          100: '#bebebf',
          200: '#9e9ea0',
          300: '#727275',
          400: '#56565a',
          450: '#505c77',
          500: '#373f51',
          600: '#28282d',
          700: '#1f1f23',
          800: '#18181b',
          900: '#121215',
        },
        salmon: {
          50: '#ebcfb2',
          100: '#ffb16c',
          200: '#ffa76c',
          400: '#ff946c',
          600: '#e07a5f',
          800: '#c5705d',
        },
        yellow: {
          400: '#ffd24e',
          600: '#edae49',
        },
      },
    },
  },
  plugins: [],
}
