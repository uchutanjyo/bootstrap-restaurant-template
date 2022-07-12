module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundImage: {
      'japas-main': "url('./japas.png')",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

  
}

