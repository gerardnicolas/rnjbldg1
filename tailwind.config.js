/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'tiffany-blue': '#0abab5',
      'charcoal': '#333333',
      'turquoise': '#40e000',
      'warm-orange': '#f28c28',
      'soft-white': '#f9f9f9',
      'burnt-sienna': '#e97451',
      'dark-teal': '#014d4e',
      'cream-white': '#fff5e6',
    },
    fontFamily: {
      'primary': ['BC Novatica', 'sans-serif'],
      'accent': ['Futura', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        'primary': ['BC Novatica', 'sans-serif'],
        'secondary': ['Futura', 'sans-serif'],
        'didact': ['Didact Gothic', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
};
