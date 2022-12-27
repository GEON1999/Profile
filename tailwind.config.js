/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      animation: {
        fadeIn: "fadeIn 1.5s ease-in",
        fadeOut: "fadeOut 1.5s ease-in-out",

      },

      keyframes: {
        fadeIn: {
          
           scale:100
        },
        fadeOut: {
          "0%": { opacity: 100 },
          "100%": { opacity: 0 },
        },
        drift: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        textUp: { '0%' : { top: 0 }, 
        '20%' : { top: -0.2 }, '40% ' : { top: 0 }, 
        '60%' : { top: 0 }, '80%': { top: 0 }, '100%' : { top: 0 } },
        wave :  {'0%' : { transform : 'rotate(0deg)'}, '10%' : { transform : 'rotate(14deg)'}, '20%' : { transform : 'rotate(-8deg)'}, '30%' : { transform : 'rotate(14deg)'},
         '40%' : { transform : 'rotate(-4deg)'}, '50%' : { transform : 'rotate(10deg)'}, '60%' : { transform : 'rotate(0deg)'}, '100%' : { transform : 'rotate(0deg)'}, },
        fadeInOut: {
          "0%": { scale: 0 },
          "100%": { scale: 10 },
        }
      },
    },
  },
  plugins: [],
};
