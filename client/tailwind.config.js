/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        zomato: {
          50: "#ffe5e7",
          100: "#fabac0",
          200: "#f18f96",
          300: "#e9626d",
          400: "#e23744",
          500: "#c81d2a",
          600: "#9d1520",
          700: "#700d16",
          800: "#46060c",
          900: "#1e0002",
        },
        grey:{
    
          50: '#edf1fc',
          100: '#d3d4e1',
          200: '#636582',
          300: '#989bb2',
          400: '#7c7f9b',
          500: '#b6b8c9',
          600: '#4c4f66',
          700: '#363849',
          800: '#21222e',
          900: '#2b3147',
        },
      },
    },
  },
  plugins: [],
}
