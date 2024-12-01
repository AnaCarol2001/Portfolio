/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: '"Poppins", "sans-serif"',
        sofiaSans: '"Sofia Sans", sans-serif',
      },
      colors: {
        "main-purple": "#4E31AA",
      },
    },
  },
  plugins: [],
};
