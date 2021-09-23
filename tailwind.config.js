module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#4D3E3E",
      secondary: "#FFF3CD",
      alternate: "#FFC38B",
      "off-white": "#FF926B",
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
      primary: ["Major Mono Display"],
      body: ["Raleway"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
