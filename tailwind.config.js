/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000dff',
        secondary: '#8d8d8d',
      },
      fontFamily: {
        primary: ['Hutin Regular', 'sans-serif'],
        secondary: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'dot-thick': `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3e%3ccircle fill='rgb(0 0 0 / 0.2)' id='pattern-circle' cx='10' cy='10' r='2.5'%3e%3c/circle%3e%3c/svg%3e")`,
      },
      transitionProperty: {
        padding: 'padding',
      },
    },
  },
  plugins: [],
};
