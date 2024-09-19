import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        xs: '430px',
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
      },
      fontFamily: {
        paperlogy: ['paperlogy', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['18px', '28px'],
        xl: ['20px', '28px'],
        '2xl': ['24px', '32px'],
        '3xl': ['30px', '36px'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
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
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-out forwards',
        slideOut: 'slideOut 0.5s ease-out forwards',
        fillHeart: 'fillHeart 0.3s ease-out forwards',
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
