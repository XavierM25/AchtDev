/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',],
  theme: {
    extend: {
      animation: {
        'pop': 'pop 2s infinite linear',
        'fade-in': 'fade-in 0.5s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [animations,],
};
