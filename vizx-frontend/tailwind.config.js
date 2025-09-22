/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        // your existing glow:
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px #f97316, 0 0 20px #f97316, 0 0 30px #f97316' },
          '50%':     { boxShadow: '0 0 20px #fb923c, 0 0 30px #fb923c, 0 0 40px #fb923c' },
        },

        // NEW: star streaks
        'star-move-bottom': {
          '0%':   { transform: 'translate(0%, 0%)',   opacity: '1' },
          '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
        },
        'star-move-top': {
          '0%':   { transform: 'translate(0%, 0%)',  opacity: '1' },
          '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
        },
      },
      animation: {
        // your existing glow:
        glow: 'glow 1.5s ease-in-out infinite',

        // NEW: helpers used by the star-border utility
        'star-move-bottom': 'star-move-bottom linear infinite alternate',
        'star-move-top': 'star-move-top linear infinite alternate',
      },
    },
  },
  plugins: [],
};
