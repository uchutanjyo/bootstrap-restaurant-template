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
        'bg-1': "url('./japas.png')",
        'bg-small': "url('./japas-small.png')",
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
    },

    'fadein': {
  
      '0%': {
        opacity: '0'
    },
    '100%': {
        opacity: '1'
    }
      }

      },
      animation: {
        'fadeindown': 'fadeindown 0.5s ease-out',
        'fadeinup': 'fadeindown 0.6s ease-out',
        'fadein': 'fadein 0.7s ease-out'
    }
    }, 
  },
  variants: {
    extend: {},
  },
  plugins: [],

  
}

