const merge = require('webpack-merge')

const devConfig = {
  devServer: {
    port: 3001
  }
}

module.exports = merge(require('./webpack.common'), devConfig)