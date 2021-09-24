module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#14279B",
      secondary: "#3D56B2",
      alternate: "#E6E6E6",
      "off-white": "#E6E6E6",
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
