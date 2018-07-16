const path = require('path')
const webpack = require('webpack')
const { jsxLoader, stylusLoader, cssLoader } = require('./config/loaders')


module.exports = {
  entry: {
    App: path.resolve(__dirname, 'src/versions/app.js'),
  },

  devtool: 'cheap-source-map',

  module: {
    rules: [jsxLoader, stylusLoader, cssLoader],
  },

  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'bundle.js',
    publicPath: '',
  },  
}
