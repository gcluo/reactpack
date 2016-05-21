(function(express) {
  var path = require('path');
  var app = express();
  var server = require('http').createServer(app);
  require('./webpackdev.server')(app);
  app.use('/app', express.static(path.join(__dirname, 'app')));
  server.listen(8080, function() {
    console.log('server run!');
  });
})(require('express'))
