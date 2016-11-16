var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './lib/js/scripts.js',
  output: { path: __dirname, filename: 'bundle.js' },
  devtool: 'source-map',
  resolve: {
    alias: { 'vue$': 'vue/dist/vue.js' }
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
};
