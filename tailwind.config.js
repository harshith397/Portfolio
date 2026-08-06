/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Poppins', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto',
          'Helvetica Neue', 'Arial', 'Noto Sans', 'Apple Color Emoji',
          'Segoe UI Emoji', 'Segoe UI Symbol',
        ],
      },
      colors: {
        ink: '#1a1a1a',
        glass: {
          fill: 'rgba(255,255,255,0.1)',
          border: 'rgba(255,255,255,0.18)',
        },
      },
      backdropBlur: { glass: '20px' },
      backdropSaturate: { glass: '180%' },
      boxShadow: { glass: '0 8px 32px 0 rgba(0,0,0,0.08)' },
    },
  },
  plugins: [],
}