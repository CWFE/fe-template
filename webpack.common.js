const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'public/index.html'),
  filename: './index.html'
})

const fileRule = {
  test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
  loader: 'url-loader',
  options: {
    limit: 10000,
    name: 'static/media/[name].[contenthash:8].[ext]',
    esModule: false
  }
}
const cssRule = {
  test: /\.css$/,
  use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
  exclude: /node_modules/
}
const lessRule = {
  test: /\.less$/,
  use: ['less-loader'],
  exclude: /node_modules/
}
const jsRule = {
  test: /\.(js | jsx)$/,
  use: 'babel-loader',
  exclude: /node_modules/
}
const tsRule = {
  test: /\.ts(x?)$/,
  use: 'ts-loader',
  exclude: /node_modules/
}

module.exports = {
  entry: path.join(__dirname, 'src/index.tsx'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'static/js/[name].[contenthash:8].js'
  },
  module: {
    rules: [jsRule, tsRule, cssRule, lessRule, fileRule]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].chunk.css'
    }),
    htmlWebpackPlugin
],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
}