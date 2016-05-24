var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = {
  entry: {
    app: path.resolve(__dirname, 'app/main.js'),
    // mobile: path.resolve(__dirname, 'app/mobile.js'),
    // 当 React 作为一个 node 模块安装的时候，
    // 我们可以直接指向它，就比如 require('react')
    // vendors: ['react', 'react-dom', 'react-router']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/[name].js' //多重入口定义
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
      }, {
        test: /\.less$/,
        loader: 'style!css!less'
      }, { //import for css
        test: /\.css$/, // Only .css files
        loader: ExtractTextPlugin.extract("style-loader", "css-loader") // Run both loaders
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
    // new webpack.optimize.CommonsChunkPlugin('vendors', 'scripts/lib/vendors.js'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin("css/main.css"),
    new HtmlWebpackPlugin({
      template: 'app/template.html',
      inject: 'body',
      filename: 'index.html',
      chunks: ['vendors', 'app']
    })
  ]
};

module.exports = config;
