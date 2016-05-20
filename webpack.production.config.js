var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var config = {
  entry: {
    app: path.resolve(__dirname, 'app/main.js'),
    // mobile: path.resolve(__dirname, 'app/mobile.js'),
    // 当 React 作为一个 node 模块安装的时候，
    // 我们可以直接指向它，就比如 require('react')
    vendors: ['react', 'react-dom', 'react-router']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js' //多重入口定义
  },
  module: {
    loaders: [
      {
        test: /\.js|jsx$/,
        exclude: [node_modules_dir],
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }, { //import for css
        test: /\.css$/, // Only .css files
        loader: 'style!css' // Run both loaders
      }, {
        test: /\.less$/,
        loader: 'style!css!less'
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000&name=assets/images/[name].[ext]'
      }, {
        test: /\.ttf$/,
        loader: 'url?limit=100000'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};

module.exports = config;
