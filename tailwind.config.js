module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#0D92F3',
      secondary: '#3D56B2',
      alternate: '#FFFFFF',
      'off-white': '#EFF2F5',
    },
    container: {
      padding: {
        sm: '2rem',
        md: '10rem',
        lg: '10rem',
        xl: '10rem',
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
