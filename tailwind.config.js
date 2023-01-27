/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        header: {
          "0%": { transform: "translateX(-10px)", opacity: "0" },
          "100%": { transform: "translateX(0px)", opacity: "1" },
        },
        black: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },

        skew: {
          "0%": {
            transform: "skewX(20deg)",
          },
          "100%": { transform: "skewX(0deg)" },
        },

        opacity1: {
          "0%": { opacity: "0", filter: "blur(8px)" },
          "100%": { opacity: "1", filter: "blur(0px)" },
        },
        opacity2: {
          "0%": { opacity: "0", filter: "blur(8px)" },
          "20%": { opacity: "0" },
          "100%": { opacity: "1", filter: "blur(0px)" },
        },
        opacity3: {
          "0%": { opacity: "0", filter: "blur(8px)" },
          "40%": { opacity: "0" },
          "100%": { opacity: "1", filter: "blur(0px)" },
        },
      },
      animation: {
        skew: "skew 2s",
        black: "black 1s",
        opacity1: "opacity1 1s",
        opacity2: "opacity2 2s",
        opacity3: "opacity3 2.5s",
        header: "header 0.4s",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
