var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var deps = [
  'react/dist/react.min.js',
  'react-dom/dist/react-dom.min.js',
  'react-router/umd/ReactRouter.min.js'
];
var config = {
  entry: {
    index: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8081',
      path.resolve(__dirname, 'app/scripts/modules/main.jsx')
    ],
    account: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8081',
      path.resolve(__dirname, 'app/scripts/modules/account/account.jsx')
    ]
  },
  output: {
    path: path.resolve(__dirname, 'app'),
    publicPath: "http://localhost:8081/static/",
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {}
  },
  externals: {
    //don't bundle the 'react' npm package with our bundle.js
    //but get it from a global 'React' variable
    // 'react': 'React'
  },
  module: {
    noParse: [],
    loaders: [{
      test: path.resolve(node_modules_dir, deps[0]),
      loader: "expose?React"
    }, {
      test: /\.js|jsx$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
      exclude: /node_modules/,
      loader: 'babel', // 加载模块 "babel" 是 "babel-loader" 的缩写
      query: {
        presets: ['es2015', 'react']
      }
    }, { //import for css
      test: /\.css$/, // Only .css files
      loader: 'style!css' // Run both loaders
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }, {
      test: /\.less$/,
      loader: 'style!css!less'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000&name=assets/images/[name].[ext]'
    }, {
      test: /\.ttf$/,
      loader: 'url?limit=100000'
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

// 通过在第一部分路径的依赖和解压
// 就是你像引用 node 模块一样引入到你的代码中
// 然后使用完整路径指向当前文件，然后确认 Webpack 不会尝试去解析它

deps.forEach(function(dep) {
  var depPath = path.resolve(node_modules_dir, dep);
  config.resolve.alias[dep.split(path.sep)[0]] = depPath;
  // config.module.noParse.push(depPath);
});
module.exports = config;
exports = config;
