import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
    flowbite.content(),
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        lexend: ['var(--font-lexend)', 'sans-serif'],
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};

