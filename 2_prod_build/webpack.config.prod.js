'use strict'

const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config')

module.exports = merge(baseConfig, {
  mode: 'production',
  devServer: {
    open: true,
    contentBase: './dist',
  },
})
