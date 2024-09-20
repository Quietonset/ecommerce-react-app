/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(-0deg)' },
          '25%': { transform: 'rotate(-90deg)' },  // Rotate left
          '50%': { transform: 'rotate(-180deg)' }, // Rotate down
          '75%': { transform: 'rotate(-270deg)' }, // Rotate right
          '100%': { transform: 'rotate(-360deg)' } // Rotate back to the left
        }
      },
      scrollbarWidth: {
        none: 'none',
      },
    },
  },
  plugins: [
    function ({ addUtilities }){
      addUtilities(
        {
          '.scrollbar-none':{
            scrollbarWidth: 'none',
          },
        },
        ['responsive', 'hover']
      );
    }
  ],
  variants: {
    extend: {
      scale: ['active'],
      translate: {
        '-3': '-3px',
      },
    },
  },
}

