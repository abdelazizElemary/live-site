/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        violet: {
          1: "#bd9aeb",
          0: "#b344fd",
        },
        bg: {
          1: "#2e2e2e",
        },
      },
      keyframes: {
        bounceY: {
          "0%, 100%": { transform: "translateY(-10%) scale(1.2)" },
          "50%": { transform: "translateY(10%) scale(1)" },
        },
      },
      animation: {
        bounceY: "bounceY 5s infinite",
      },
      fontFamily: {
        "roboto-slab": ["Roboto Slab", "serif"],
      },
      backgroundColor: {
        primary: "#1a1a1a", // Dark black background
        secondary: "#2e2e2e", // Dark grey background
      },
      textColor: {
        primary: "#f5f5f5", // Light grey, for primary text
        "hint-red": "#8b0000", // Hint of dark red
        "hint-green": "#006400", // Hint of dark green
        "hint-blue": "#00008b", // Hint of dark blue
      },
      borderColor: {
        primary: "#f5f5f5", // Light grey, for borders on a dark background
      },
      backgroundImage: {
        bgImage: "url('/src/assets/images/bgImage.jpg')",
      },
    },
  },
  plugins: [],
};
