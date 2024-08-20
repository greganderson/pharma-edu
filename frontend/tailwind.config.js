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
      spacing: {}, // Keeping it in case you want to add custom spacing later
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
        "10xl": "29px",
        "13xl": "32px",
        "45xl": "64px",
        inherit: "inherit",
      },
    },
    screens: {
      mq1125: { raw: "screen and (max-width: 1125px)" },
      mq1050: { raw: "screen and (max-width: 1050px)" },
      mq750: { raw: "screen and (max-width: 750px)" },
      mq450: { raw: "screen and (max-width: 450px)" },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [], // Empty array to add plugins if needed later
};
