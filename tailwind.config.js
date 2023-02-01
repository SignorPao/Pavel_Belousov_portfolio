module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Ubuntu", "sans-serif"],
        crimson: ["Crimson Pro", "serif"],
      },
      colors: {
        dark: "#171717",
        light: "#EDEDED",
        grey: "#444444",
        blue: "#2A86FF",
        lightGrey: "#DCDCDD",
      },
      backgroundImage: (theme) => ({
        header: "url('assets/bg-2.webp')",
        logoDark: "url('assets/PB2.png')",
        logoLight: "url('assets/PB.png')",
      }),
      container: {
        padding: {
          DEFAULT: "1rem",
          xl: "0",
        },
      },
      screens: {
        sm: "640px",
        md: "720px",
        lg: "1024px",
        xl: "1100px",
        "2xl": "1540px",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [],
};
