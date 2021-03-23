const path = require('path');
const glob = require('glob');
// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const globAll = require('glob-all');

// Custom PurgeCSS extractor for Tailwind that allows special characters in class names.
// Regex explanation: https://tailwindcss.com/docs/controlling-file-size/#understanding-the-regex
const TailwindExtractor = content => {
  return content.match(/[\w-/:]+(?<!:)/g) || [];
}

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'

module.exports = {
  mode: mode,
  optimization: {
    minimizer: [
      new TerserPlugin({ cache: true, parallel: true }),
      new PurgecssPlugin({
        paths: globAll.sync([
          '../lib/excyte_web/**/templates/**/*.html.leex',
          '../lib/excyte_web/**/templates/**/*.html.eex',
          '../lib/excyte_web/**/*.html.leex',
          '../lib/excyte_web/**/*.html.eex',
          '../assets/js/**/*.js',
        ]),
        extractors: [
          {
            extractor: TailwindExtractor,
            extensions: ['html', 'js', 'eex', 'ex'],
          },
        ],
      }),
    ]
  },
  entry: {
    'app': glob.sync('./vendor/**/*.js').concat(['./js/app.js']),
    'public': glob.sync('./vendor/**/*.js').concat(['./js/public.js'])
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../priv/static/js'),
    publicPath: '/js/'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader')
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: require.resolve('file-loader'),
            options: { name: '[name].[ext]', outputPath: '../fonts' }
          },
        ],
      },
      {
        test: /\.[s]?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          require.resolve('css-loader'),
          require.resolve('sass-loader'),
          require.resolve('postcss-loader')
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '../css/app.css' }),
    new CopyWebpackPlugin([{ from: 'static/', to: '../' }]),
  ]
  // .concat(devMode ? [new HardSourceWebpackPlugin()] : [])
};
