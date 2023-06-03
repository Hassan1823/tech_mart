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
        "blue-1": '#0707B4',
        "blue-2": '#020242',
        "gold-1": "#FFD700",
        "gold-2": "#FDBB12",

      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0px 2px 9px rgba(50, 71, 92, 0.06)',
            ' 0px 4px 9px 1px rgba(50, 71, 92, 0.04)',
            ' 0px 2px 6px 4px rgba(50, 71, 92, 0.02)'
        ]
      }
    },
  },
  plugins: [],
};