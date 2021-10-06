module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#171321',
      secondary: '#3D56B2',
      alternate: '#fcf7f1',
      'off-white': '#faeddf',
      introduction: '#f0deca',
      about: '#198597',
      expertise: '#f8a577',
      experience: '#fff48f',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily: {
      primary: ['Major Mono Display'],
      body: ['Raleway'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
