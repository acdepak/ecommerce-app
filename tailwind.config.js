/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        red: "#C2463B",
        dark: "#2b2b2b",
        darkblue: "#22374A",
        sky: "#0097D8",
        yellow: "#FFC84A",
        grayhard: "#b5b2b2",
        cream: "#F8F2EC",
        gray: "#f3f3f3",
        lightblue: "#86C1CF",
      },
      fontSize: {
        "5xl": ["3rem", "55px"],
        "6xl": ["60px", "65px"],
      },
    },
  },
  plugins: [],
};
