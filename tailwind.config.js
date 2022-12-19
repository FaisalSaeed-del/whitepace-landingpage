/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        background1: "#FFFFFF;",
        background2: "#C4DEFD;",
        background3: "rgba(255, 228, 146, 1)",
        background4: "rgba(79, 156, 249, 1);",
        background5: "rgba(4, 56, 115, 1);",
        background6: "rgba(230, 241, 254, 1)",
      },
      textColor: {
        text1: "rgba(79, 156, 249, 1);",
        text2: "rgba(33, 37, 41, 1);",
        text3: "rgba(4, 56, 115, 1);",
        text4: "rgba(255, 255, 255, 1)",
      },
      boxShadowColor: {
        boxShadow1: "rgba(230, 241, 254, 1);",
      },
      boxShadow: {
        "3xl": " 0px 4px 50px -15px rgba(0, 0, 0, 0.15);",
      },
      fontSize: {
        text3xl: "1.75rem;",
      },
      fontFamily: {
        Inter: "Inter",
      },
      letterSpacing: {
        tightest: "-0.02em",
      },
    },
  },
  plugins: [],
};
