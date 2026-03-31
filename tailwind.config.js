/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans"', "system-ui", "-apple-system", "sans-serif"],
        serif: ['"Noto Serif"', "Georgia", "serif"],
        mono: ['"Inter"', "monospace"],
      },
    },
  },
  plugins: [],
};
