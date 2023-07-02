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
        lightblue: "#86C1CF",
        sky: "#0097D8",
        darkblue: "#22374A",
        cream: "#F8F2EC",
        red: "#C2463B",
        yellow: "#FFC84A",
      },
    },
  },
  plugins: [],
};
