/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "nunito-sans": ['"Nunito Sans"', "sans-serif"],
    },
    extend: {
      keyframes: {
        slideBottom: {
          "0%": { transform: "translateY(1000px)" },
          "100%": { transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": {
            transform: "translateX(-1000px)",
            transform: "translateX(-1000px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        slideBottom:
          "slideBottom 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        slideLeft:
          "slideLeft 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both ",
      },
    },
  },
  plugins: [],
};
