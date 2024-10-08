/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
       fontFamily: {
        robotoss: ['Roboto-Condensed', 'sans-serif'],
      },
        /*1. #0c134c */
  /* #1b216e */
  /* #aa3fb7 */
  /* #f954e8 */
  /* #f46fe2 */
  /* #fb55ed */
  /* #fcfaff */
  /*  */
  /* #aeb0c6 */
  /* #e5e5f7 */
      colors: {
        'primary-bg': "#0c134c ",
        "secondary-bg": "#FF6452",
        "para": "#6D6D6D",
        "text-bg": "#F5F6FF",
        "white": "#fcfaff"
      },
    },
  },
  plugins: [],
};
