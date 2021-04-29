const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, options) => {
  const devMode = options.mode !== 'production';

  return {
    devtool: devMode ? 'source-map' : undefined,
    optimization: {
      minimizer: [
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
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
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
      new CopyWebpackPlugin({
        patterns: [
          { from: 'static/', to: '../' }
        ]
      }),
    ]
  }
};
