/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      borderRadius: {
        extraLarge: '4.5rem'
      },
 backgroundImage: {
        'hero-pattern': "url('./img/1501195433-L.jpg')",
        
      }
    },
  },
  plugins: [],
}
