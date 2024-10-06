/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        anybody: ['Anybody Variable', 'sans-serif'],
      },
    },
  },
  daisyui: {
    // Add your daisy ui themes here
    themes: ["night"],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
