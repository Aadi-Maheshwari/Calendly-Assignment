/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    screens: {
      
      'ug': '430px',
     
      'md': '768px',
      
      'xg': '1030px',
      
      'pg': '992px',
      
      'tg': '805px',
       
      '2xl': '1180px',

      'qg': '565px',

      'hg': '535px',

      'yg': '472px',

      'ig': '410px',

      'gg': '741px',

      'rg': '352px',

      'vg': '1054px',

      'yg': '700px',
      
      'bg': '344px',
    },
    
    
    
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
     
    },
    
    extend: {
      boxShadow: {
        '3xl': '0px 0px 5px rgba(0,0,0,.15);',
      }
    },
  },
  plugins: [],
}
