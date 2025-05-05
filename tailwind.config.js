const { Container } = require("postcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./*.html"],
  content: ["*.{html,js}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "15px",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
      },
      colors: {
        primary: "#065f78",
        secondary: "#FBBF24",
        accent: "#F472B6",
        background: "#f2f5f8",
        neutral: "#374151",
        "base-100": "#FFFFFF",
        info: "#3ABFF8",
        success: "#36D399",
        warning: "#FBBD23",
        error: "#F87272",
      },
    },
  },
  plugins: [],
};
