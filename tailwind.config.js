/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.css"],
  theme: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      xl: "2.5rem",
    },
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      gray: {
        700: "#0D0D0D",
        600: "#1A1A1A",
        500: "#262626",
        400: "#333333",
        300: "#808080",
        200: "#d9d9d9",
        100: "#f2f2f2",
      },
      red: {
        400: "#e25858",
      },
      blue: {
        500: "#1e6f9f",
        200: "#4ea8de",
      },
      purple: {
        500: "#5e60ce",
        200: "#8284fa",
      },
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
