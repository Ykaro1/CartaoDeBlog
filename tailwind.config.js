/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "yellow-project": "hsl(47, 88%, 63%)",
      },
      fontFamily: {
        Figtree: ["Figtree", "sans-serif"],
        Figtree2: ["Figtree2", "sans-serif"],
        Figtree3: ["Figtree3", "sans-serif"],
      },
      spacing: {
        "340px": "340px",
      },
      boxShadow: {
        custom: "7px 7px;",
      },
    },
  },
  plugins: [],
};
