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
        dark: "#2b2b2b",
        grayhard: "#b5b2b2",
        gray: "#f3f3f3",
        cream: "#F8F2EC",
        yellow: "#FFC84A",
        red: "#C2463B",
        lightblue: "#86C1CF",
        sky: "#0097D8",
        darkblue: "#22374A",
      },
      fontSize: {
        "5xl": ["3rem", "55px"],
        "6xl": ["60px", "65px"],
      },
    },
  },
  plugins: [],
};
