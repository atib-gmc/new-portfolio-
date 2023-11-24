/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-dark": "#525252",
        "main-yellow": "#F6D4B1",
      },
      boxShadow: {
        "btn-shadow": "5px 5px 0 0 rgba(82, 82, 82, 0.4)",
        "btn-hover": "8px 5px 5px 1px rgba(82, 82, 82, 0.4 )",
      },
      boxShadowLight: {
        "btn-shadow": "5px 5px 0 0 rgba(82, 82, 82, 0.4)",
        "btn-hover": "15px 5px 8px 3px rgba(82, 82, 82, 0.4)",
      },
    },
  },
  plugins: [],
};
