/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        greeny: '#82ECE4',
        yellw: '#F2B758',
        bl: '#57A4F3',
        rosey: '#FE6370',
        'bg-menu': '#F8F6F5',
      },
    },
    fontFamily: {
      courgette: ['Courgette', 'cursive'],
    },
  },
  plugins: [],
};
