/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        logo:['Zeyada'],
        body:['Nunito'],
        satoshi:['Satoshi-Bold']
      },
      colors:{
        white1:'#fbfbf2',
        gray1:'#e5e6e4',
        green:'#cfd2cd',
        palebrown:'#a6a2a2',
        brown:'#847577',
      },
      height:{
        circle:'30rem'
      },
      width:{
        circle:'30rem'
      }
    },
  },
  plugins: [],
}

