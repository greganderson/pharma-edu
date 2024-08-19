/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gray: "#040404",
        darkslategray: "#2e3f59",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        "hind-siliguri": "'Hind Siliguri'",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      "21xl": "40px",
      "45xl": "64px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
