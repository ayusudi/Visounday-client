/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: "#1E2144",
        darker: "#090C30",
        gray: "#EEEEEE",
        graypay: "#E2E2E2",
        orange: '#F78860',


      },
      backgroundColor: {
        darkblue: "#1E2144",
        darker: "#090C30",
        gray: "#EEEEEE",
        graypay: "#E2E2E2",
        orange: '#F78860',
        orangehover: 'linear-gradient(315deg, rgba(246, 141, 104, 1) 0%, rgba(249, 164, 107, 1) 100%)'

      },
      fontFamily: {
        main: ["Koulen"]
      }
    },
  },
  plugins: [],
}