'use strict'

const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config')

module.exports = merge(
  baseConfig('production', process.argv), 
  {
    optimization: {
      minimizer: [
        // TODO in next part
      ]
    },
  }
)