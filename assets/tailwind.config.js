const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ["./js/**/*.js", "../lib/*_web/**/*.*ex"],
  theme: {
    colors: {
      bgray: colors.blueGray,
      wgray: colors.warmGray,
      cyan: colors.cyan,
      teal: colors.teal,
      blue: colors.sky,
      amber: colors.amber,
      yellow: colors.yellow,
      green: colors.green,
      indigo: colors.indigo,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      red: colors.rose,
      gray: colors.coolGray,
      white: "#FFFFFF",
    },
    extend: {
      blur: {
        xs: '2px',
      },
      height: {
        '18': '4.5rem',
        'scr-1/2': '50vh',
        'scr-3/4': '75vh',
      },
      fontSize: {
        'tiny': '.65rem',
      },
      spacing: {
        '2/3': '60%'
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
    require('@tailwindcss/aspect-ratio')
  ]
}
