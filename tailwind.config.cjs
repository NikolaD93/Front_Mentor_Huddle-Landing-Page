/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        pink: "hsl(322, 100%, 66%)",
        lightPink: "hsl(321, 100%, 78%)",
        lightRed: "hsl(0, 100%, 63%)",
        veryDarkCyan: "hsl(192, 100%, 9%)",
        veryPaleBlue: "hsl(207, 100%, 98%)"
      },
      screens:{
        sm: "576px",
        md: "768px",
        lg: "992px",
      },
      backgroundImage: theme => ({
        "desktop": "url('./assets/bg-footer-top-desktop.svg')",
        "mobile": "url('./assets/bg-footer-top-mobile.svg')",
      }),
    },
  },
  plugins: [],
}
