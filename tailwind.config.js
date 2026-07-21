/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-noto-sans)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-noto-serif)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
