/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        matte: {
          DEFAULT: '#111111',
          50: '#f6f6f6',
          100: '#e7e7e7',
          700: '#2a2a2a',
          800: '#1c1c1c',
          900: '#111111',
          950: '#0a0a0a',
        },
        gold: {
          DEFAULT: '#D4AF37',
          50: '#fbf7ec',
          100: '#f6edcf',
          200: '#eddb9f',
          300: '#e4c86f',
          400: '#d4af37',
          500: '#b8962e',
          600: '#937425',
          700: '#6e561c',
          800: '#493913',
          900: '#241c09',
        },
        beige: {
          DEFAULT: '#F5F1EA',
          50: '#fdfcf9',
          100: '#f5f1ea',
          200: '#ebe5d8',
        },
        lightgray: '#ECECEC',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['"Jost"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-down': 'fadeDown 0.8s ease-out forwards',
        'slide-left': 'slideLeft 0.8s ease-out forwards',
        'slide-right': 'slideRight 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'shimmer': 'shimmer 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      boxShadow: {
        'soft': '0 4px 24px -8px rgba(0, 0, 0, 0.08)',
        'luxury': '0 20px 60px -20px rgba(0, 0, 0, 0.25)',
        'gold': '0 8px 30px -8px rgba(212, 175, 55, 0.35)',
      },
    },
  },
  plugins: [],
};
