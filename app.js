(function(express) {
  var path = require('path');
  var app = express();
  var server = require('http').createServer(app);
  if (process.env.NODE_ENV === 'dev') {
    require('./webpackdev.server')(app)
  }
  app.use('/app', express.static(path.join(__dirname, 'app')));
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'app/views/index.html'));
  });
  server.listen(8080, function() {
    console.log('listened 8080 port server run!');
  });
})(require('express'))
