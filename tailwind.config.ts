import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Disintox brand colors from PDF
        brand: {
          red: {
            50: '#fef2f2',
            100: '#fee2e2',
            200: '#fecaca',
            300: '#fca5a5',
            400: '#f87171',
            500: '#dc2626', // Primary brand red
            600: '#c81e1e',
            700: '#b91c1c',
            800: '#991b1b',
            900: '#7f1d1d',
          },
          green: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#22c55e', // Chlorine green
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
          },
          yellow: {
            400: '#facc15',
            500: '#eab308',
          },
        },
        disintox: {
          red: '#dc2626',
          green: '#22c55e',
          darkGreen: '#15803d',
          yellow: '#eab308',
        },
        clinical: {
          white: '#ffffff',
          gray: {
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280',
            600: '#4b5563',
            700: '#374151',
            800: '#1f2937',
            900: '#111827',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'molecule': 'molecule 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        molecule: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.05)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-clinical': 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
        'gradient-hero': 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
        'gradient-brand': 'linear-gradient(135deg, #dc2626 0%, #22c55e 100%)',
        'gradient-green': 'linear-gradient(135deg, #22c55e 0%, #15803d 100%)',
      },
      boxShadow: {
        'clinical': '0 4px 20px rgba(14, 165, 233, 0.1)',
        'card': '0 2px 10px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
export default config;
