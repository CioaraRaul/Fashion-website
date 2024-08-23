/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure this matches the structure of your project
  ],
  theme: {
    extend: {
      colors:{
        'image-background' : '#F2E0D0',
        'image-text': '#950000'
      },
      minWidth:{
        'background': '720px'
      }
      
    },
  },
  plugins: [],
}
