var request = require('request');
var config = require('../config/config');
// service pages
var showdata = {
  'config': config
};

exports.myCustomized = function(req, res, next) {
  res.render('service/my_customized', showdata);
};
exports.myMovie = function(req, res, next) {
  res.render('service/my_movie', showdata);
};
exports.myTheater = function(req, res, next) {
  res.render('service/my_theater', showdata);
};
