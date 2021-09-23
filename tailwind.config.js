module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#4A403A",
      secondary: "#A45D5D",
      alternate: "#FFC069",
      "off-white": "#EFEFEF",
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
