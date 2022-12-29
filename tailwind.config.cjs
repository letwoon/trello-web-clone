/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "wave-bg": "url('./src/assets/layered-waves-haikei.svg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
