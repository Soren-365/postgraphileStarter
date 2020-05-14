module.exports = {
  theme: {
    screens: {
      sm: '720px',
      md: '1080px',
      lg: '1440px',
      xl: '1800px',
    },
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },
    extend: {
      colors: {
        cyan: '#9cdbff',
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      },
    },
  },
  variants: {
    appearance: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus'],
    fill: [],
  },
  // plugins: [
  //   require('tailwindcss-transforms'),
  //   require('tailwindcss-transitions'),
  //   require('tailwindcss-border-gradients'),
  // ],
};
