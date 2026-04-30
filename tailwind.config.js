/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        concrete: '#F1F5F9',
        brandRed: '#cc2222',
        warning: '#FF4500',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
