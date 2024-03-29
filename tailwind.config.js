/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F48300",
        secondary: "#FFC700",
        background: "#E8E4E4",
        bgSecondary: "#DBDBDB",
        buttonColor: "#F8DD91",
        buttonText: "#9D7F2C",
        tableColor: "#B9B9B9",
      },
    },
  },
  plugins: [],
};
