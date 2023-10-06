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
      },
     
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        '2xl': '0 30px 60px -15px rgba(0, 0, 0, 0.5)',
      },
      
    },
  },
  plugins: [],
}

