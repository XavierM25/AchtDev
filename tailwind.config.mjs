/** @type {import('tailwindcss').Config} */
import animations from "@midudev/tailwind-animations";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#477974",
        background: "#E8EDEB",
        text: "#414141",
        "soft-primary": "#0086791c",
      },
      fontFamily: {
        biryani: ["Biryani", "sans-serif"],
        montserrat: ["Montserrat Alternates", "sans-serif"],
      },
    },
  },
  plugins: [animations],
};
