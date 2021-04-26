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
          50:  "#ff10a10e",
          100: "#fff4f0",
          200: "#ffc6b3",
          300: "#ff9c7a",
          400: "#ff6e3d",
          500: "#ff4000",
          600: "#cc3300",
          700: "#992600",
          800: "#661a00",
          900: "#330d00"
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
      scale: {
        '200': '2',
        '250': '2.5',
      }
    },
  },
  variants: {},
  plugins: [],
}