import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        pattern: "url('../public/images/Herobanner.svg')",
        footer: "url('../public/images/footer.png')",
      },
      colors:{
        darkblue:'#041D31',
        lightblue:'#06636A',
        light:'#193140',
      }
    },
  },
  plugins: [],
};
export default config;
