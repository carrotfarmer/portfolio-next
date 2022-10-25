module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#010101",
      },

      fontFamily: {
        jost: ["Barlow", "sans-serif"],
        sen: ["Josefin Sans", "sans-serif"],
      },

      screens: {
        custom: "400px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
