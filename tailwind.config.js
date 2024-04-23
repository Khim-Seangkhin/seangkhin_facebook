/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1024px',
      xxl: '1200px',
    },
    extend: {
      colors: {
        bgWhite: '#FFFFFF',
        bgLightWhite: '#F0F2F5',
        bgLightBlack: '#65676B',
        bgBlack: '#050505',
        bgBlue: '#0866FF',
      },
    },
  },
  plugins: [],
}

