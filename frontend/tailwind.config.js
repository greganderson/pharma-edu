module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        darkslategray: "#2e3f59",
        gray: "#040404",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        "hind-siliguri": ["'Hind Siliguri'", "sans-serif"],
      },
      borderRadius: {
        "3xs": "10px",
      },
      fontSize: {
        "17xl": "36px",
        "21xl": "40px",
        "3xl": "22px",
        "13xl": "32px",
        "45xl": "64px",
        inherit: "inherit",
      },
    },
    screens: {
      mq1125: { max: "1125px" },
      mq1050: { max: "1050px" },
      mq750: { max: "750px" },
      mq450: { max: "450px" },
    },
  },
  plugins: [],
};
