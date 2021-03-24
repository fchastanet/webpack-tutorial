'use strict'

const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [{loader: 'vue-loader'}]
      }, {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /(node_modules)/
      }, {
        test: /\.(js|vue)$/,
        exclude: /(node_modules)/
      }, {
        test: /\.css?$/,
        use: [{loader: 'css-loader'}]
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          // Translates CSS into CommonJS
          { loader: 'css-loader', options: {
              sourceMap: true,
              esModule: false
          }},
          // Compiles Sass to CSS
          { 
            loader: 'sass-loader', 
            options: { sourceMap: true } 
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    contentBase: 'dist',
    compress: false,
    inline: true,
    port: 8080,
    open: true,
    overlay: { warnings: false, errors: true },
    publicPath: '/',
    quiet: false,
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/
  },
}
