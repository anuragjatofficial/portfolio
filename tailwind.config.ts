import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        active: "#2bd576",
        primary:'#3d3e42',
        secondary:'#31333b',
        'primary-bright':'#fff',
        'secondary-bright':'#f6f8fa'
      },
      dropShadow: {
        active_shadow: ['0 0 1rem theme("colors.active")'],
      },
      fontFamily: {
        josefin_sans: ["Josefin Sans", "sans-serif"],
        libre_serif: ["Libre Baskerville", "serif"],
      },
      screens: {
        xs: "600px",
        "2xs": "0px",
      },
    },
  },
  plugins: [],
};
export default config;
