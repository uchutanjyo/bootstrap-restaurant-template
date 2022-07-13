module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['"Poppins"']
      },
      backgroundImage: {
        'bg-1': "url('../japas.png')",
        'bg-2': "url('../ramen-bg.avif')",
      }
      
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],

  
}

