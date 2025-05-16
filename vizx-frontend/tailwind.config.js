/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 10px #f97316, 0 0 20px #f97316, 0 0 30px #f97316',
          },
          '50%': {
            boxShadow: '0 0 20px #fb923c, 0 0 30px #fb923c, 0 0 40px #fb923c',
          },
        },
      },
      animation: {
        glow: 'glow 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
