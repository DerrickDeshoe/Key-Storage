import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {


    backgroundImage: {

      BG: "url('../public/images/BG.svg')",
    },

    extend: {
      colors: {
      orange: '#FF5C00',
      gray: '#D9D9D9',
      darkGray: '#64748B',
      red: '#FF0200',
      blue: '#0F172A',
      },
    },

    fontFamily:{
      nunito: 'nunito',
      nuniBold: 'nunitoBold',

    }
  },
  plugins: [],
} satisfies Config;
