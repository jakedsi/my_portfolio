/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      '1xl': {'max': '1400px'},
      // => @media (max-width: 1400px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      
      '1xs': {'max': '460px'},
      // => @media (max-width: 340px) { ... }

      'xs': {'max': '345px'},
      // => @media (max-width: 340px) { ... }
    }
  },
  plugins: [],
}