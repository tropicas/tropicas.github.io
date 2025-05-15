/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,html}'],
  safelist: ['snap-y', 'snap-mandatory', 'snap-start'],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        black: '#0C0C07',
        orange: '#D83C02',
        metal: '#515153',
        slate: '#9E9DAF',
        teal: '#B2BEBC',
      },
      fontFamily: {
        sans: ['Rajdhani', 'sans-serif'],
        serif: ['Special Gothic Expanded One', 'serif'],
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};