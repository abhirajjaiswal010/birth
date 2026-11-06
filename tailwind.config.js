/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: {
          DEFAULT: '#FFBFA3',
          light: '#FFD5C2',
          dark: '#F09F7D',
        },
        lavender: {
          DEFAULT: '#CDBDFF',
          light: '#E2DAFF',
          dark: '#AB95F5',
        },
        butter: {
          DEFAULT: '#FFE89A',
          light: '#FFF2C2',
          dark: '#F6D565',
        },
        cream: {
          DEFAULT: '#FFF8EF',
          light: '#FFFDF9',
          dark: '#F7EDDC',
        },
        coral: {
          DEFAULT: '#FF758F',
          light: '#FF94A9',
          dark: '#E65370',
        },
        plum: {
          DEFAULT: '#45304F',
          light: '#5D436A',
          dark: '#2F1E37',
        },
      },
      fontFamily: {
        heading: ['"Fredoka"', '"Baloo 2"', 'cursive', 'sans-serif'],
        fredoka: ['"Fredoka"', 'sans-serif'],
        baloo: ['"Baloo 2"', 'cursive', 'sans-serif'],
        sans: ['"Nunito"', 'sans-serif'],
        handwriting: ['"Caveat"', 'cursive'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(4deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(18px) rotate(-4deg)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.05)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'storybook': '0 10px 30px -5px rgba(69, 48, 79, 0.08), 0 4px 10px -2px rgba(69, 48, 79, 0.04)',
        'storybook-hover': '0 20px 40px -8px rgba(69, 48, 79, 0.15), 0 8px 16px -4px rgba(69, 48, 79, 0.08)',
        'storybook-pop': '0 12px 0 0 rgba(69, 48, 79, 0.15)',
      }
    },
  },
  plugins: [],
}
