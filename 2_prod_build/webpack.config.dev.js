'use strict'

const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config')

const config = merge(baseConfig, {
  mode: 'development',
  devtool: 'source-map',
})
config.devServer.hot = true
config.devServer.compress = false
config.devServer.inline = true
config.devServer.quiet = false

config.plugins.push(new webpack.HotModuleReplacementPlugin())

module.exports = config
