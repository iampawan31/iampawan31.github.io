module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
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
      primary: '#333333',
      'primary-dark': '#222222',
      secondary: '#3D56B2',
      alternate: '#fcf7f1',
      'off-white': '#faeddf',
      introduction: '#f0deca',
      about: '#198597',
      expertise: '#f8a577',
      experience: '#fff48f',
      green: '#1B8753',
      red: '#DC3444',
      white: '#FFFFFF',
      aws: '#232F3E',
      bootstrap: '#7952B3',
      codeigniter: '#EF4223',
      css3: '#1572B6',
      digitalocean: '#0080FF',
      expressjs: '#000000',
      firebase: '#FFCA28',
      github: '#181717',
      gitubpages: '#222222',
      html5: '#E34F26',
      javascript: '#F7DF1E',
      laravel: '#FF2D20',
      mui: '#007FFF',
      mysql: '#4479A1',
      nextjs: '#000000',
      nodejs: '#339933',
      nuxtjs: '#00DC82',
      php: '#777BB4',
      pixabay: '#2EC66D',
      reactjs: '#61DAFB',
      sass: '#CC6699',
      sqlite: '#003B57',
      tailwindcss: '#06B6D4',
      typescript: '#3178C6',
      vercel: '#000000',
      visualstudiocode: '#007ACC',
      vuejs: '#4FC08D',
      vuetifyjs: '#1867C0',
      wordpress: '#21759B',
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
    extend: {
      opacity: ['disabled'],
      grayscale: ['hover'],
    },
  },
  plugins: [],
}
