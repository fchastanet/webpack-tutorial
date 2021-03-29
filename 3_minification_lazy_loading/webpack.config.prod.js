'use strict'

const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = merge(
  baseConfig('production', process.argv), 
  {
    output: {
      clean: true,
    },
    optimization: {
      minimizer: [
        '...', // use default TerserPlugin configuration
        new CssMinimizerPlugin(),
      ]
    },
  }
)
