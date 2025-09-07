/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f0c29',
        secondary: '#4e4376',
        accent: '#00f2fe',
        'accent-purple': '#a855f7',
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #0f0c29 0%, #24243e 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(78, 67, 118, 0.3) 0%, rgba(15, 12, 41, 0.3) 100%)',
        'gradient-accent': 'linear-gradient(135deg, #00f2fe 0%, #a855f7 100%)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 242, 254, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 242, 254, 0.8)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}