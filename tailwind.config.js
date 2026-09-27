/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nesta: {
          yellow: {
            light: '#FEF08A',
            DEFAULT: '#FACC15', // Vibrant solar yellow
            hover: '#EAB308',
            deep: '#CA8A04',
            glow: 'rgba(250, 204, 21, 0.45)',
          },
          grey: {
            bg: '#14161B',        // Deep matte charcoal/grey base
            surface: '#1B1E26',   // Neumorphic surface
            card: '#222631',      // Elevated surface
            cardHover: '#282D3A', // Hover elevated
            pressed: '#111317',   // Inset/recessed surface
            border: '#2E3342',    // Neumorphic edge border
            muted: '#7E889E',     // Muted grey typography
            subtle: '#A8B2C7',    // Secondary typography
          },
          white: {
            DEFAULT: '#FFFFFF',
            pure: '#FFFFFF',
            dim: '#F4F5F8',
            glass: 'rgba(255, 255, 255, 0.08)',
            glassHover: 'rgba(255, 255, 255, 0.14)',
          }
        }
      },
      boxShadow: {
        // Neumorphic shadows on dark grey base
        'neu-flat': '10px 10px 22px rgba(9, 10, 13, 0.8), -8px -8px 20px rgba(255, 255, 255, 0.04)',
        'neu-flat-sm': '5px 5px 12px rgba(9, 10, 13, 0.7), -4px -4px 10px rgba(255, 255, 255, 0.035)',
        'neu-convex': '14px 14px 28px rgba(8, 9, 12, 0.85), -10px -10px 22px rgba(255, 255, 255, 0.05)',
        'neu-pressed': 'inset 5px 5px 10px rgba(7, 8, 10, 0.85), inset -4px -4px 8px rgba(255, 255, 255, 0.04)',
        'neu-pressed-sm': 'inset 3px 3px 6px rgba(7, 8, 10, 0.85), inset -2px -2px 5px rgba(255, 255, 255, 0.04)',
        'neu-yellow': '0 0 25px rgba(250, 204, 21, 0.35), 6px 6px 16px rgba(0, 0, 0, 0.6)',
        'neu-yellow-glow': '0 0 35px rgba(250, 204, 21, 0.5), inset 0 0 10px rgba(255, 255, 255, 0.3)',
        'glass-edge': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.2), 0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
