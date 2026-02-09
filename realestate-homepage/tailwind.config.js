/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5", // Indigo
        dark: "#0f172a",
      },
    },
  },
  plugins: [],
};
