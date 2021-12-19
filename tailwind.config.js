module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    divideColor: (theme) => ({
      ...theme("borderColors"),
      primary: "#E4651D",
      secondary: "#ffed4a",
      danger: "#e3342f",
    }),
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    divideColor: true,
  },
  plugins: [],
};
