module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        tgb: {
          dark: "#0b0b0b",
          charcoal: "#121212",
          gold: "#c6a85a",
          cayenne: "#9e1b1b",
          deep: "#7a1414",
          light: "#f5f5f5",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
