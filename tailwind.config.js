module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    divideColor: (theme) => ({
      ...theme("borderColors"),
      primary: "#E4651D",
      secondary: "#ffed4a",
      danger: "#e3342f",
    }),
    extend: {},
  },
  corePlugins: {
    divideColor: true,
  },
  plugins: [],
};
