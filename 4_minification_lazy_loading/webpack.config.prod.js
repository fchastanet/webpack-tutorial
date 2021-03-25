'use strict'

const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config')

module.exports = merge(
  baseConfig('production', process.argv), 
  {
    devServer: {
      open: true,
      contentBase: './dist',
    },
  }
)
