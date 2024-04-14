import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    
    extend: {
      colors:{
        active:'#2bd576'
      },
      fontFamily: {
        josefin_sans: ["Josefin Sans", "sans-serif"],
        libre_serif: ["Libre Baskerville", 'serif']
      },
    },
  },
  plugins: [],
};
export default config;
