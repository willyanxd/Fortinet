/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fortinet: {
          red: '#EE3124',
          blue: '#0066CC',
          dark: '#1a1a1a',
          gray: '#6B7280'
        }
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate'
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #EE3124, 0 0 10px #EE3124, 0 0 15px #EE3124' },
          '100%': { boxShadow: '0 0 10px #EE3124, 0 0 20px #EE3124, 0 0 30px #EE3124' }
        }
      }
    },
  },
  plugins: [],
}