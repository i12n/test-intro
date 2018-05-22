const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    './example/main.js',
  ],
  output: { path: path.join(__dirname, './'), filename: 'bundle.js' },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: 'example',
    hot: true,
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: [['es2015', { modules: false }], 'stage-0', 'react'],
        plugins: ['transform-decorators-legacy', 'react-hot-loader/babel'],
      },
    }, {
      test: /\.less$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
      }, {
        loader: 'less-loader',
      }],
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Example Page',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
