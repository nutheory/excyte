const esbuild = require('esbuild')
const postCssPlugin = require("esbuild-plugin-postcss2")
const postCssImport = require('postcss-import')
const postCssNesting = require('postcss-nesting')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

// Decide which mode to proceed with
let mode = 'build'
process.argv.slice(2).forEach((arg) => {
  if (arg === '--watch') {
    mode = 'watch'
  } else if (arg === '--deploy') {
    mode = 'deploy'
  }
})

// Define esbuild options + extras for watch and deploy
let opts = {
  entryPoints: ['js/app.js', 'js/client.js', 'js/public.js'],
  bundle: true,
  logLevel: 'info',
  target: 'es2017',
  plugins: [
    postCssPlugin.default({
      plugins: [postCssImport, tailwindcss, postCssNesting, autoprefixer]
    })
  ],
  outdir: '../priv/static/assets'
}
if (mode === 'watch') {
  opts = {
    watch: true,
    sourcemap: 'inline',
    ...opts
  }
}
if (mode === 'deploy') {
  opts = {
    minify: true,
    ...opts
  }
}

// Start esbuild with previously defined options
// Stop the watcher when STDIN gets closed (no zombies please!)
esbuild.build(opts).then((result) => {
  if (mode === 'watch') {
    process.stdin.pipe(process.stdout)
    process.stdin.on('end', () => { result.stop() })
  }
}).catch((error) => {
  process.exit(1)
})