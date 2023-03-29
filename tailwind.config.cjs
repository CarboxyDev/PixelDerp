/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        inter: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        15: "60px",
        17: "68px",
        18: "72px",
        19: "76px",
        22: "88px",
        25: "100px",
        26: "104px",
        30: "120px",
        50: "200px",
        70: "280px",
        84: "336px",
        88: "352px",
        90: "360px",
        100: "400px",
        104: "416px",
        108: "432px",
        112: "448px",
        116: "464px",
        120: "480px",
        125: "500px",
        130: "520px",
        140: "560px",
        150: "600px",
        200: "800px",
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
