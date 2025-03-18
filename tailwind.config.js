
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        starjedi: ["starjedi", "sans-serif"],
        limelight: ["limelight", "sans-serif"],
      },
    },
  },
  plugins: [],
}