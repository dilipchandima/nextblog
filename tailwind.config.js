const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-figtree)", ...fontFamily.sans],
        mono: ["var(--font-redHatMono)", ...fontFamily.mono],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
