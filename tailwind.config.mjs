/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: { 
          DEFAULT: '#00B3D7', 
          light: '#66D1E6', 
          dark: '#0089A3' 
        },
        secondary: { 
          DEFAULT: '#6366F1', 
          light: '#A5B4FC', 
          dark: '#4F46E5' 
        },
        accent: { 
          DEFAULT: '#EC4899', 
          light: '#F9A8D4', 
          dark: '#DB2777' 
        },
        success: { 
          DEFAULT: '#10B981', 
          light: '#6EE7B7', 
          dark: '#059669' 
        },
        dark: '#1E293B',
        light: '#F8FAFC',
        'gray-light': '#E2E8F0',
        'gray-dark': '#64748B',
        whatsapp: '#25D366',
        'whatsapp-dark': '#128C7E',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}