module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#F9F7F7",
      secondary: "#DBE2EF",
      alternate: "#3F72AF",
      "off-white": "#112D4E",
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
