const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-figtree)", ...fontFamily.sans],
        mono: ["var(--font-redHatMono)", ...fontFamily.mono],
      },
      colors: {
        brandBlue: "#08151D",
        brandGreen: "#173330",
        brandStone: "#EDD0A2",
        brandBrown: "#BC4000",
        brandMerun: "#3B212E",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
