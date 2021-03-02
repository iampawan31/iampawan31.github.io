module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: '10rem',
      },
    },
    fontFamily: {
      heading: ['IBM Plex Sans'],
      body: ['Source Code Pro'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
