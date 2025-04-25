/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'linux-dark': '#1a1a1a', // Custom dark color
        'linux-accent': '#3b82f6', // Custom accent (blue)
      },
    },
  },
  plugins: [],
}

