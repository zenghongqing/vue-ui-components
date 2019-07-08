'use strict'
const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const config = require('./config')
const baseWebpackConfig = require('./webpack.base.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  entry: './src/components/index.js',
  output: {
      path: resolve('./lib'),
      library: 'rcs',
      libraryTarget: 'umd',
      filename: '[name].min.js',
      umdNamedDefine: true,
      globalObject: 'this'
  },
  externals: {
      vue: {
          root: 'Vue',
          commonjs: 'vue',
          commonjs2: 'vue',
          amd:' vue'
      }
  },
  optimization: {
      minimize: true
  },
  // 此选项控制是否以及如何生成source-map。cheap-module-eval-source-map is faster for development
  devtool: config.build.devtool,
  plugins: [
  ]
})

module.exports = webpackConfig
