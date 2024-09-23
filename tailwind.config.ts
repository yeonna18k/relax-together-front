import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        xs: '435px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EFEFEF',
          300: '#E1E1E1',
          400: '#BEBEBE',
          500: '#9F9F9F',
          600: '#767676',
          700: '#626262',
          800: '#434343',
          900: '#222222',
        },
        green: {
          50: '#E5F5E7',
          100: '#C1E6C4',
          200: '#98D69F',
          300: '#6BC778',
          400: '#45BB5A',
          500: '#0AAF3B',
          600: '#00A033',
          700: '#008E27',
          800: '#007D1B',
          900: '#005E02',
        },
        pink: {
          50: '#FFEBF1',
          100: '#FFCBD9',
          200: '#F796A4',
          300: '#F16A80',
          400: '#FF3D61',
          500: '#FF0E48',
          600: '#F80047',
          700: '#E5003F',
          800: '#D90037',
          900: '#CA002B',
        },
      },
      fontFamily: {
        paperlogy: ['var(--font-paperlogy-extrabold)'],
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' },
        },
        fillHeart: {
          '0%': {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) scale(0)',
            position: 'absolute',
          },
          '50%': {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) scale(0.5)',
            position: 'absolute',
          },
          '100%': {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) scale(1)',
            position: 'absolute',
          },
        },
        clearHeart: {
          '0%': {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) scale(1)',
            position: 'absolute',
          },
          '50%': {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) scale(0.5)',
            position: 'absolute',
          },
          '100%': {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) scale(0)',
            position: 'absolute',
          },
        },
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-out forwards',
        slideOut: 'slideOut 0.5s ease-out forwards',
        fillHeart: 'fillHeart 0.3s ease-out forwards',
        clearHeart: 'clearHeart 0.3s ease-out forwards',
      },
    },
  },

  plugins: [
    require('tailwindcss-animate'),
    function ({ addUtilities }: any) {
      const newUtilities = {
        '.custom-scrollbar': {
          '&::-webkit-scrollbar': {
            width: '16px',
            borderRadius: '8px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
            margin: '10px 0',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#E5E7EB',
            border: '6px solid #F9FAFB',
            borderRadius: '8px',
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
};

export default config;
