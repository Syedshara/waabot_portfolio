/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const flowbite = require("flowbite-react/tailwind");

module.exports = withMT({
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content(),],
  theme: {
    extend: {
      colors: {
        lightBg: "#F8FAFC",
        darkBg: "#222831",
        lightText: "#1E293B",
        darkText: "#F8FAFC",
        textColor: "#26B7A4",

      },
      fontFamily: {
        custom: ['MyCustomFont', 'sans-serif'],
        custom2: ['MyCustomFont2', 'sans-serif'],
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
});
