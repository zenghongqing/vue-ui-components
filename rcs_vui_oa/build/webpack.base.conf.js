const path = require('path')
const fs = require('fs')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const config = require('./config')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const utils = require('./utils')

function resolve(dir) {
  return path.resolve(__dirname, '..', dir)
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js',
    example: './examples/src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'assets': resolve('src/assets'),
      'components': resolve('src/components'),
      'styles': resolve('src/styles'),
      'utils': resolve('src/utils'),
      'demos': resolve('src/demos')
    }
  },
  module: {
    rules: [
      ...utils.cssLoader(),
      {
        test: /.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src')],
        exclude: /node_modules/,
        options: {
          cache: true,
          formatter: require('eslint-friendly-formatter'),
        //    : !config.dev.showEslintErrorsInOverlay
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        include: [resolve('src'), resolve('examples')],
        options: {
        //   cacheIdentifier: 'cache-loader:{version} {process.env.NODE_ENV}'
        }
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
        include: resolve('src')
      },
      {
          test: /\.md$/,
          exclude: /node_modules/,
          loaders: [
              'vue-loader',
              {
                  loader: 'vue-md-loader',
                  options: {
                      preProcess (source) {
                        let result = source.match(/##:(\w+):##/g)
                        if (result && result[0]) {
                            let component = result[0].replace(/##:/g, '').replace(/:##/g, '')
                            if (component && component !== 'index') {
                                let text = fs.readFileSync(resolve(`src/demos/${component}.vue`), 'utf8')
                                return source.replace(result[0], text)
                            }
                        }
                        return source
                      }
                  }
              }
          ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ]
}