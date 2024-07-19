/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { montserrat: ["Montserrat"] },
      colors: {
        body_background: "var(--body_background)",
        body_color: "var(--body_color)",
        heading_color: "var(--heading_color)",
        select_background: "var(--select_background)",
        select_color: "var(--select_color)",
      },
    },
  },
  plugins: [require("daisyui")],
};
