/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px", // extremely large, probably won't trigger unless your screen is this wide
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        knewave: ["Knewave", "cursive"],
      },
    },
  },
  plugins: [],
};
