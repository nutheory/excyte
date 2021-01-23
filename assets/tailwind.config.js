const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: [],
  theme: {
    colors: {
      bgray: colors.blueGray,
      wgray: colors.warmGray,
      cyan: colors.cyan,
      teal: colors.teal,
      blue: colors.lightBlue,
      amber: colors.amber,
      green: colors.green,
      indigo: colors.indigo,
      pink: colors.pink,
      red: colors.rose,
      gray: colors.coolGray,
      white: "#FFFFFF",
    },
    extend: {
      height: {
        '18': '4.5rem',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      keyframes: {
      },
      animations: {
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        select: 'select 2s cubic-bezier(0, 0, 0.2, 1)',
        deselect: 'deselect 2s cubic-bezier(0, 0, 0.2, 1)',
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
