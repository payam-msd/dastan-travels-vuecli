/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        red: {
          100: "#FCECED",
          200: "#F9D0D2",
          300: "#F5B3B7",
          400: "#ED7A80",
          500: "#E5414A",
          600: "#CE3B43",
          700: "#89272C",
          800: "#671D21",
          900: "#451416"
        }
      }
    }
  },
  variants: {
    borderRadius: ["hover"],
    zIndex: ["hover"]
  },
  plugins: [require("tailwindcss"), require("autoprefixer")]
};
