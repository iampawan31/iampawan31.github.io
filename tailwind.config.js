module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#333333",
      secondary: "#FFF3CD",
      alternate: "#FFFFFF",
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
