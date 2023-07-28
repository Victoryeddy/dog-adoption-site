/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [
    './src/**/*.vue',
    './src/**/*.js',
    './src/**/*.css',
  ],
  theme: {
    extend: {
      colors : {
        'primary': '#B44625',
      },
      
    },
  },
  plugins: [],
}

