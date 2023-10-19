/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "libre-basker": ['"Libre Baskerville"'],
        "libre-franklin": ['"Libre Franklin"'],
      },
      colors: {
        "warhouse-red": "#f21326",
      },
      listStyleImage: {
        square: 'url("/rectangle.svg")',
      },
    },
  },
  plugins: [],
};
