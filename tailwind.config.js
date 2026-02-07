
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B4332', // Deep forest green
          light: '#2D6A4F',   // Lighter green
        },
        accent: {
          DEFAULT: '#C8973E', // Warm gold
          hover: '#B8872E',   // Gold hover
        },
        sage: {
          50: '#F1F8F4',      // Light sage background
          100: '#E2E8E4',     // Light border
        },
        cream: '#FAF8F5',     // Warm cream background
        text: {
          DEFAULT: '#1A1A1A',
          muted: '#5F6B64',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
