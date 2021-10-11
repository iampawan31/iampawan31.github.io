module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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
      body: ['Quicksand'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
