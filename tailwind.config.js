/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#d62929",
        sec:"#bebebe",
        tertiary: "#1e1e1e",
        blue:"#00629b",
        "black-100": "#000c18",
        "black-200": "#090325",
        "white-100": "#f3f3f3",

      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      
    },
  },
  plugins: [],
};