module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        250: '250px'
      },
      width: {
        250: '250px'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
