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
      },
      keyframes: {
        // 'wiggle': {
        //   '0%, 100%': { transform: 'rotate(-3deg)' },
        //   '50%': { transform: 'rotate(3deg)' },
        // }, 

'fadeindown': {
  
  '0%': {
    opacity: '0',
    transform: 'translateY(-10px)'
},
'100%': {
    opacity: '1',
    transform: 'translateY(0)'
}
  },

  'fadeinup': {
  
    '0%': {
      opacity: '0',
      transform: 'translateY(10px)'
  },
  '100%': {
      opacity: '1',
      transform: 'translateY(0)'
  }
    }



      },
      animation: {
        'fadeindown': 'fadeindown 0.5s ease-out',
        'fadeinup': 'fadeindown 0.6s ease-out'
    }
    }, 
  },
  variants: {
    extend: {},
  },
  plugins: [],

  
}

