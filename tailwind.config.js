/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f7ff',
          100: '#ebf0ff',
          200: '#d6e0ff',
          300: '#adc2ff',
          400: '#859fff',
          500: '#4f75ff', // Primary brand color
          600: '#294eff',
          700: '#1b3cdb',
          800: '#142cac',
          900: '#112280',
          950: '#0a1147',
        },
        accent: {
          50: '#fffbf0',
          100: '#fffae0',
          200: '#fff0bd',
          300: '#ffe08a',
          400: '#ffcc57',
          500: '#f7ad19', // Accent orange/gold color
          600: '#d68e0d',
          700: '#a36706',
          800: '#754703',
          900: '#4a2b02',
          950: '#2d1900',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
