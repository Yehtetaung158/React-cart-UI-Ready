/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    fontFamily:{
      san :[ 'Rubik', "sans-serif"]
    },
    container:{
      center:true,
      padding:{
        DEFAULT:'lrem',
        sm:'0rem',
        lg:'0rem',
        xl:'0rem',
        '2xl':'0rem',
      }
    },
    extend: {
      fontFamily:{
        Headeing:['Montserrat','Padauk'],
      }
    },
  },
  plugins: [],
}

