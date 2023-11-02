/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xxs: "350px",
      xs: "376px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        "libre-basker": ['"Libre Baskerville"'],
        "libre-franklin": ['"Libre Franklin"'],
      },
      colors: {
        "warhouse-red": "#f21326",
        "warhouse-gray": "#888",
      },
      listStyleImage: {
        square: 'url("/rectangle.svg")',
      },
    },
  },
  plugins: [],
};
