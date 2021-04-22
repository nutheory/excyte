const path = require('path');
const glob = require('glob');
const { ESBuildMinifyPlugin } = require('esbuild-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'

module.exports = {
  mode: mode,
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'esnext',
        css: true
      })
    ]
  },
  entry: {
    'app': glob.sync('./vendor/**/*.js').concat(['./js/app.js']),
    'public': glob.sync('./vendor/**/*.js').concat(['./js/public.js'])
  },
  output: {
    filename: '[name].js',
    chunkFilename: "[name].bundle.js",
    path: path.resolve(__dirname, '../priv/static/js'),
    publicPath: '/js/'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'esbuild-loader',
        options: {
          target: 'esnext'
        },
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
        test: /(\.css)$/,
        include: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { url: false } }
        ],
      },
      {
        test: /(\.css)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { url: false } },
          'sass-loader',
          'postcss-loader',
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '../css/[name].css' }),
    new CopyWebpackPlugin([{ from: 'static/', to: '../' }]),
  ]
};
