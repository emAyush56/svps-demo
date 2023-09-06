/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-primary": "#1800FF",
        "gray-primary": "#1E1E1E",
        "gray-alt": "#E3E5E5",
        "gray-light": "f5f5f5",
      },
    },
  },
  plugins: [],
};
