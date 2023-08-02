/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // content: [
  //   './src/**/*.vue',
  //   './src/**/*.js',
  //   './src/**/*.css',
  // ],
    content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/*.css',
  ],
  theme: {
    extend: {
      colors : {
        'primary': '#B44625',
      },
      inset: {
        '14rem': '14rem',
      }
      
    },
  },
  plugins: [],
}

