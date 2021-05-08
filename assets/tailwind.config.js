const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    '../lib/excyte_web/**/templates/**/*.html.leex',
    '../lib/excyte_web/**/templates/**/*.html.eex',
    '../lib/excyte_web/**/*.html.leex',
    '../lib/excyte_web/**/*.html.eex',
    '../assets/js/**/*.js',
  ],
  theme: {
    colors: {
      bgray: colors.blueGray,
      wgray: colors.warmGray,
      cyan: colors.cyan,
      teal: colors.teal,
      blue: colors.lightBlue,
      amber: colors.amber,
      yellow: colors.yellow,
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
      fontSize: {
        'tiny': '.65rem',
      },
      spacing: {
        '2/3': '66.666667%'
      },
      maxWidth: {
        '8xl': '90rem',
      },
      animations: {
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        select: 'select 2s cubic-bezier(0, 0, 0.2, 1)',
        deselect: 'deselect 2s cubic-bezier(0, 0, 0.2, 1)',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
