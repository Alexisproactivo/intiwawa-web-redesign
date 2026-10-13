/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFB800',
          hover: '#E5A500',
          light: '#FFF8E1',
          dark: '#CC9300',
        },
        inticream: {
          DEFAULT: '#F6F1E3',
          dark: '#EAE3D2',
        }
      },
    },
  },
  plugins: [],
}