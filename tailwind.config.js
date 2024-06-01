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
        satoshi:['Satoshi-Bold'],
        paci:['Pacifico']
      },
      colors:{
        white1:'#ECE8D9',
        gray1:'#FAF6E9',
        palegreen:'#E4EFE7',
        palebrown:'#a6a2a2',
        brown:'#847577',
        white2:'#FFFDF6',
        black1:'#494949'

      },
      height:{
        circle:'30rem'
      },
      width:{
        circle:'30rem'
      },
      grayscale:{
        '90':'90%'
      }
    },
  },
  plugins: [

  ],
}

