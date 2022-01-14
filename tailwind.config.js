module.exports = {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    container: {
      padding: '2rem',
    },

    colors: {
      blue: '#1fb6ff',
      pink: '#b2aee4',
      orange: '#ff7849',
      yellow: '#ffc82c',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
      purple: '#431370',
      accent: '#9642d1',
      green: '#1daf8d',
      whiteish: '#c2e8f0',
      lightpurple: '#b3b5e5',
      midpurple: '#a270d9',
      darkpurple: '#9642d1',
      midgreen: '#3fe0ba',
    },

    fontFamily: {
      sans: ['Princess Sofia', 'sans-serif'],
      serif: ['Macondo', 'serif'],
    },

    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },

      typography: {
        DEFAULT: {
          css: {
            color: '#431370',
            fontFamily: 'Macondo',

            p: { fontFamily: 'Macondo', color: '#431370', marginBottom: '0em' },
            strong: { color: '#431370', fontSize: '150%' },
            h1: {
              fontFamily: 'Princess Sofia',
              textAlign: 'center',
              color: '#1daf8d',
              marginBottom: '.5em',
            },
            h2: {
              fontFamily: 'Princess Sofia',
              color: '#1daf8d',
              textAlign: 'left',
              marginBottom: '.5em',
              marginTop: '0px',
            },
            h3: { fontFamily: 'Princess Sofia', color: '#1daf8d' },
            h4: { fontFamily: 'Princess Sofia', color: '#1daf8d' },
            h5: { fontFamily: 'Princess Sofia', color: '#1daf8d' },
            'li::marker': {
              color: '#1daf8d',
            },
            li: {
              // fontFamily: 'sans-serif',
              marginTop: '0px',
              listStyleType: 'disc',
              listStylePosition: 'inside',
            },
            a: {
              color: '#1daf8d',
              '&:hover': {
                color: '#431370',
              },
            },
            hr: {
              marginBottom: '1em',
              marginTop: '1em',
              clear: 'both',
            },
          }, // CSS
        }, // DEFAULT

        xl: {
          css: {
            h1: {
              fontFamily: 'Princess Sofia',
              textAlign: 'center',
              color: '#1daf8d',
              marginBottom: '.5em',
            },
            h2: {
              fontFamily: 'Princess Sofia',
              color: '#1daf8d',
              textAlign: 'left',
              marginBottom: '.5em',
            },
            hr: {
              marginBottom: '1em',
              marginTop: '1em',
              clear: 'both',
            },
          },
        },
      }, // typography
    }, // extend
  }, // theme

  plugins: [require('@tailwindcss/typography')],
}
