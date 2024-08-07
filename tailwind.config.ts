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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customGray: '#BDBDBD',
        customDarkGray: '#383838',
        customBlue: "#147DC2",
        customTextGray: "#2d2d2d",
        customTextGrey: "#8b8b8b",
        custom: {
          border: '#e2e2e2',
          gray: '#BDBDBD',
          lightText: '#797979'
        }
      },
      backgroundColor: {
        customLightBg: '#00000080',
        bgRed: "#ff4a64"
      },
      fontFamily: {
        hurmeGeometricSans: "hurmegeometricsans_no3_6 ,Gilroy,Almarai,Arial,sans-serif"
      },
      height: {
        inheritHeight: "inherit"
      },
      listStyleType: {
        square: 'square'
      },
      container: {
        screens:{
          lg:'1200px'
        }
      }
    },
  },
  plugins: [],
};
export default config;
