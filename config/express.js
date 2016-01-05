/**
 * Module dependencies.
 */
var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var template = require('./template');

module.exports = function (app, config) {
  // view engine setup
  template.config('base', '');
  template.config('extname', '.html');
  app.engine('.html', template.__express);
  app.set('view engine', 'html');
  app.set('views', config.templatePath);
  
  app.use(express.static(config.staticPath));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());

  //router config
  require('./routes')(app);

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handlers
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
  });

}
