'use strict'

const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config')

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = merge(baseConfig, {
  mode: 'production',
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      '...' // use default TerserPlugin configuration
    ]
  },
  devServer: {
    open: true,
    contentBase: './dist',
  },
})
