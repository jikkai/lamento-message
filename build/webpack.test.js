const webpack = require('webpack')

const base = require('./webpack.base')

base.stats = {
  colors: true,
  hash: false,
  version: false,
  timings: false,
  assets: false,
  chunks: false,
  modules: false,
  reasons: false,
  children: false,
  source: false,
  errors: false,
  errorDetails: false,
  warnings: false,
  publicPath: false
}

// Plugins Configuration
base.plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('test')
  })
]

// Rules Configuration
base.module.rules.push({
  test: /\.css$/,
  use: [
    'style-loader',
    { loader: 'css-loader', options: { importLoaders: 1 } },
    'postcss-loader'
  ]
})

delete base.entry

module.exports = base
