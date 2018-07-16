const path = require('path')
const webpack = require('webpack')
const { jsxLoader,stylusLoader,  cssLoader} = require('./config/loaders')



module.exports = {
  entry: [
    path.resolve(__dirname, 'src/versions/app.js')
  ],

  devtool: 'cheap-source-map',

  module: {
    rules: [
      jsxLoader,
      cssLoader,
      stylusLoader,
    ],
  },

  output: {
    path: path.resolve(__dirname, 'public/js'),
  },
}
