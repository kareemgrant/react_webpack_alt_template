var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
  entry: path.resolve(ROOT_PATH, 'app/main'),
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      lodash: path.resolve(ROOT_PATH, 'node_modules/lodash')
    }
  },
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js'
  },
  devtool: 'eval',
  module: {
    loaders: [
      {
        test: /\.s?css$/,
        loaders: ['style', 'css', 'sass'],
        include: path.resolve(ROOT_PATH, 'app/css')
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel?stage=1'],
        include: path.resolve(ROOT_PATH, 'app')
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Accordion'
    }),
    new webpack.ProvidePlugin({
      _: "lodash"
    })
  ]
};
