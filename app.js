(function(express) {
  var path = require('path');
  var app = express();
  var server = require('http').createServer(app);
  var dir = 'dist';
  var appName = 'my';
  if (process.env.NODE_ENV === 'dev') {
    require('./webpackdev.server')(app)
    dir = 'app';
  }
  app.use('/', express.static(path.join(__dirname, dir)));
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, dir + '/views/index.html'));
  });
  server.listen(8080, function() {
    console.log('listened 8080 port server run!');
  });
})(require('express'))
