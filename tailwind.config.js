/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",        
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",      
    "./components/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
       fontFamily: {
        saira: ['var(--font-saira)', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),      
  ],
};
