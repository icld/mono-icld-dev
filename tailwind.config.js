module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter'],
      },
      colors: {
        twitter: '#2F80ED',
        buttonBorder: '#D1D5DB',
        buttonLetters: '#818D9F',
        submitButton: '#6A73C5',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('tailwindcss-debug-screens'),
  ],
};
