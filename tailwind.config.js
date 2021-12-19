module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
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
}
