var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var emailService = require("../src/service/email/emailService");
var log4js = require('log4js');
var logService       = require("../src/service/logging/logService");
var expressLayouts = require('express-ejs-layouts');
var routes = require('../src/routes/index');
var app = express();
var session = require('express-session');


// view engine setup
app.set('views', path.join(__dirname, '../src/views'));
app.set('view engine', 'ejs');





app.use(expressLayouts);
app.set('layout', false);
emailService.initialize(app);


// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, '../public/images', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 300000}, resave: true, saveUninitialized: true }))

app.use(express.static(path.join(__dirname, '/../public')));
logService.initialize(app);

app.use(require("./middlewares/renderer"));
app.use('/', routes);


//setup logging
var logger = logService.getLogger("app");

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  logger.error(err);

  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
