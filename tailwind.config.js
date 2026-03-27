/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#fbfaf7",
      },
      fontFamily: {
        display: ['"Outfit"', "sans-serif"],
        body: ['"Urbanist"', "sans-serif"],
      },
      boxShadow: {
        card: "0 24px 80px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
