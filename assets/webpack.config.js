const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin')

module.exports = (env, options) => {
  const devMode = options.mode !== 'production';

  return {
    devtool: devMode ? 'source-map' : undefined,
    optimization: {
      minimizer: [
        new TerserPlugin(),
        new CssMinimizerPlugin()
      ]
    },
    entry: {
      'app': glob.sync('./vendor/**/*.js').concat(['./js/app.js']),
      'public': glob.sync('./vendor/**/*.js').concat(['./js/public.js'])
    },
    output: {
      filename: '[name].js',
      // chunkFilename: "[name].bundle.js",
      path: path.resolve(__dirname, '../priv/static/js'),
      publicPath: '/js/'
    },
    watchOptions: {
      poll: (process.env.WEBPACK_WATCHER_POLL || 'false') === 'true'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {loader: 'babel-loader'}
          ]
        },
        {
          test: /(\.css)$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]'
          }
        },
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: '../css/[name].css' }),
      new CopyWebpackPlugin({patterns: [{ from: 'static/' }]}),
    ]
  }
};
