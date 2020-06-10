const path = require('path')
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const proConfig = {
  plugins: [
    new UglifyJsPlugin(),
    new CleanWebpackPlugin()
  ]
}

module.exports = merge(require('./webpack.common'), proConfig)