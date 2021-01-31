'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = process.env.PORT || 3000;

const development = {
  plugins: [
    new HtmlWebpackPlugin({
      template: '../public/index.html',
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true
  }
};

module.exports = development;