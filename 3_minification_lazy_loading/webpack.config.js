'use strict'

const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (mode, argv) => {
  if (mode !== 'development' && mode !== 'production') {
    console.error(`invalid mode: ${mode}`);
    process.exit(-1);
  }
  const devMode = mode !== 'production'
  const isServing = argv.indexOf('--profile') !== -1 && (argv.indexOf('serve') !== -1 || devMode)
  return {
    mode,
    entry: {
      main: './src/index.js',
    },
    output: {
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: [{loader: 'vue-loader'}]
        },
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /(node_modules)/
        },
        {
          test: /\.(js|vue)$/,
          exclude: /(node_modules)/
        },
        {
          test: /\.css?$/,
          use: [
            // 'style-loader' - injects CSS into the DOM using multiple style tag and works faster.
            (devMode) ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: devMode,
                esModule: true
              }
            }
          ]
        }, {
          test: /\.scss$/,
          use: [
            // 'style-loader' - injects CSS into the DOM using multiple style tag and works faster.
            (devMode) ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
              loader: 'css-loader',
              options: {
                sourceMap: devMode,
                esModule: true
              }
            },
            // Compiles Sass to CSS
            {
              loader: 'sass-loader',
              options: {
                sourceMap: devMode
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: 'index.[fullhash:8].css',
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true
      }),
    
    ],
    devServer: {
      clientLogLevel: 'warning',
      hot: false,
      contentBase: 'dist',
      compress: true,
      inline: false,
      port: 8080,
      open: isServing,
      overlay: { warnings: false, errors: true },
      publicPath: '/',
      quiet: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS'
      }
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
      ignored: /node_modules/
    },
  }
}
