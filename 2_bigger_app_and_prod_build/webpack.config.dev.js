'use strict'
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config')

const config = merge(
  baseConfig('development', process.argv), 
  {
    devtool: 'source-map',
    devServer: {
      hot: true,
      compress: false,
      inline: true,
      quiet: false,
  }})
config.plugins.push(new webpack.HotModuleReplacementPlugin())

module.exports = config
