var path = require('path');
var webpack = require('webpack');

// plugins
var HTMLWebpackPlugin = require('html-webpack-plugin');
var postcssImport = require('postcss-import');
var precss = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'inline-sourcemap',
  entry: [
    'webpack-hot-middleware/client',
    './src/js/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: './js/bundle.min.js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      Promise: 'exports?global.Promise!es6-promise',
    }),
    new HTMLWebpackPlugin({
      hash: true,
      inject: 'body',
      template: './src/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
  postcss() {
    return [
      postcssImport({
        path: './src/css/**/*.css',
        addDependencyTo: webpack,
      }),
      precss,
      autoprefixer,
    ];
  },
};
