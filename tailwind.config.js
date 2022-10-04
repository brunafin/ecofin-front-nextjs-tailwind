/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#F6F6F6',
          100: '#FBFBFB',
          200: '#E1E6F0',
          500: '#B4BAC3',
          600: '#5A5A66',
          700: '#23232B',
          800: '#202024',
          900: '#1C1C1C',
        },
        green: {
          500: '#2B7070'
        },
        blue: {
          500: '#0067A1'
        },
        red: {
          500: '#FC5858',
          600: '#BC0F0F'
        },
        yellow: {
          500: '#F4D460'
        }
      },
      fontFamily: {
        'sans': ['KoHo', 'sans-serif']
      },
    },
  },
  plugins: [],
}
