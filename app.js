var express = require('express');
var path = require('path');
var routes = require('./routes/index');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 3000;

var app = express();
// var router = express.Router();

// view engine setup
app.set('view engine', 'ejs');

// routes setup
app.use('/', routes);

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// set port
app.listen(port, function () {
  console.log('App listening on port ' + port);
});

// error handlers
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;
