/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,tx,tsx}"],
    theme: {
      extend: {
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0.1' },
            '100%': { opacity: '1' }
          },
        },
        animation: {
          fadeIn: 'fadeIn 0.6s ease-in-out'
        }
      },
    },
    plugins: [],
  }