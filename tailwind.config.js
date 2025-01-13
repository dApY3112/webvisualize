module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust paths according to your project
  ],
  theme: {
    container: {
      center: true,
     padding: {
        DEFAULT: "1.25rem",
        sp: "0.3rem",
        sm: "2rem",
        md: "2.5rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "10rem",
      },
    },
    extend: {
      backgroundImage:{
        'hero-pattern': "url('/src/assets/images/home1.png')",
      },
      maxHeight:{
        'hero':  '30rem'
      },
      fontFamily: {
        display: ["Playfair Display", "sans-serif"],
        body: ["Outfit", "sans-serif"]
      },
      colors: {
       transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#000000",
      primary: {
        600: "#996830",
        300: "#C4A386",
        100: "#E6D8CC",
      },
      neutral: {
        900: "#2C2C2C",
        700: "#444444",
        500: "#7C7C7C",
        300: "#D9D9D6",
        100: "#E5E5E5",
      },
      },
      fontSize: {
      "display-2xl": [
        "72px",
        {
          letterSpacing: "-0.025em",
          lineHeight: "96px",
        },
      ],
      "display-xl": [
        "60px",
        {
          letterSpacing: "-0.025em",
          lineHeight: "72px",
        },
      ],
      "display-lg": [
        "48px",
        {
          letterSpacing: "0em",
          lineHeight: "60px",
        },
      ],
      "display-md": [
        "36px",
        {
          letterSpacing: "0em",
          lineHeight: "48px",
        },
      ],
      "display-sm": [
        "30px",
        {
          letterSpacing: "0em",
          lineHeight: "40px",
        },
      ],
      "display-xs": [
        "24px",
        {
          letterSpacing: "0em",
          lineHeight: "32px",
        },
      ],
      "body-xl": [
        "20px",
        {
          letterSpacing: "0em",
          lineHeight: "32px",
        },
      ],
      "body-lg": [
        "18px",
        {
          letterSpacing: "0em",
          lineHeight: "32px",
        },
      ],
      "body-md": [
        "16px",
        {
          letterSpacing: "0em",
          lineHeight: "24px",
        },
      ],
      "body-sm": [
        "14px",
        {
          letterSpacing: "0em",
          lineHeight: "24px",
        },
      ],
      "body-xs": [
        "12px",
        {
          letterSpacing: "0em",
          lineHeight: "16px",
        },
      ],
      }
    },
  },
  plugins: [],
};
