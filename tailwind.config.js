/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
        "bg-color": "#F6F6F6",
        "blue-color-1": "#F6F6F6",
        "blue-color-2": "#FDBB12",
        "main-gold" : "#FFD700",
      },
    },
  },
  plugins: [],
};