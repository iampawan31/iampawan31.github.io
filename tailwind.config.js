module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#FFFFFF",
      secondary: "#616161",
      alternate: "#292929",
      dark: "#39311d",
    },
    container: {
      padding: {
        sm: "2rem",
        md: "10rem",
        lg: "10rem",
        xl: "10rem",
      },
    },
    fontFamily: {
      heading: ["IBM Plex Sans"],
      body: ["Source Code Pro"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
