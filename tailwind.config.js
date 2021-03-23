module.exports = {
  future: {},
  purge: {
    mode: 'all',
    content: ['./src/**/*.svelte', './src/**/*.html'],
  },
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#ff3e00',
        },
        sepia: {
          100: '#fffaf5',
          200: '#ffefe0',
          300: '#ffe1c3',
          400: '#e3b78c',
          500: '#bb8856',
          600: '#976431',
          700: '#704214',
          800: '#4a2602',
          900: '#2a1500',
        },
      },
    },
  },
  variants: {},
  plugins: [],
}