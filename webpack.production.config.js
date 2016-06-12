var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = {
  entry: {
    index: path.resolve(__dirname, 'app/scripts/index.js'),
    homepage: path.resolve(__dirname, 'app/scripts/modules/homepage.js'),
    special: path.resolve(__dirname, 'app/scripts/modules/special.js'),
    article: path.resolve(__dirname, 'app/scripts/modules/article.js'),
    // mobile: path.resolve(__dirname, 'app/mobile.js'),
    // 当 React 作为一个 node 模块安装的时候，
    // 我们可以直接指向它，就比如 require('react')
    vendors: ['react', 'react-dom', 'react-router', 'react-redux', 'redux']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/[name].[hash:8].js' //多重入口定义
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
        loader: ExtractTextPlugin.extract("style-loader", "css-loader") // Run both loaders
      }, {
        test: /\.ttf$/,
        loader: 'url?limit=100000'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'scripts/lib/vendors.[hash:8].js'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin("css/main.[hash:8].css")
  ]
};
var HtmlWebpackPluginConfig = {
  template: 'app/template.html',
  inject: 'body'
};
var htmlfiles = [
  {
    filename: 'views/homepage.html',
    chunks: ['vendors', 'homepage']
  },
  {
    filename: 'views/special.html',
    chunks: ['vendors', 'special']
  },
  {
    filename: 'views/article.html',
    chunks: ['vendors', 'article']
  },
  {
    filename: 'views/index.html',
    chunks: ['vendors', 'index']
  }
];
for (var i = 0; i < htmlfiles.length; i++) {
  var htmlconfig = Object.create(HtmlWebpackPluginConfig);
  htmlconfig['filename'] = htmlfiles[i].filename;
  htmlconfig['chunks'] = htmlfiles[i].chunks;
  config.plugins.push(new HtmlWebpackPlugin(htmlconfig));
}
module.exports = config;
