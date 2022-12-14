/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'wave-bg': "url('./src/assets/layered-waves-haikei.svg')"
      }
    },
  },
  plugins: [],
};
