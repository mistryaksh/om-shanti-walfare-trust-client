/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      'emerald': {
        '50': '#ebfef4',
        '100': '#cffce2',
        '200': '#a4f6cb',
        '300': '#69ecb0',
        '400': '#2dda90',
        '500': '#09cc7f',
        '600': '#009c61',
        '700': '#007d51',
        '800': '#026342',
        '900': '#035138',
        '950': '#002e20',
      },
    },
  },
  plugins: [],
}

