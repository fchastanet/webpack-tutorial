'use strict'

const baseConfig = require('./webpack.config')

module.exports = baseConfig('production', process.argv)