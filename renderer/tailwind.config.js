const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./renderer/pages/**/*.{js,ts,jsx,tsx}",
    "./renderer/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bluegrad: "#21d4fd",
        purplegrad: "#B721FF",
      },
    },
  },
  plugins: [require("daisyui")],
};
