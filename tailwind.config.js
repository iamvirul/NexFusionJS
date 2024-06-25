/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/client/**/*.{js,ts,jsx,tsx}',
    './src/server/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#1a202c', // Dark background color
          100: '#2d3748',    // Darker shade
          200: '#2a4365',    // Darker shade
          300: '#4a5568',    // Darker shade
          // Add more shades as needed
        },
        primary: {
          DEFAULT: '#3182ce', // Primary color
          100: '#4299e1',    // Lighter shade
          200: '#90cdf4',    // Lighter shade
          // Add more shades as needed
        },
        accent: {
          DEFAULT: '#f56565', // Accent color
          100: '#fc8181',    // Lighter shade
          200: '#fed7d7',    // Lighter shade
          // Add more shades as needed
        },
      },
    },
  },
  plugins: [],
}
