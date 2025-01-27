import type { Config } from 'tailwindcss'

export default {
  darkMode: 'selector',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mono: {
          50: '#eeeeee',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333',
          900: '#1c1c1c',
          950: '#111111',
        },
      },
      keyframes: {
        'in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'in-reverse': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'in': 'in 500ms both',
        'in-reverse': 'in-reverse 500ms both',
      },
    },
  },
  plugins: [],
} satisfies Config
