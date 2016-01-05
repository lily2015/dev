/*var request = require('request');
var config = require('../config/config');
// index page
exports.index = function(req, res, next) {
	var url = 'http://' + config.api_server + '/GetTopMoviesInfo.api?topn=5';
	request(url, function(err, response, res_body) {
	    var pagedata = JSON.parse(res_body);
	    pagedata.config = config;
	    res.render('index', pagedata);
	})
}
*/

var request = require('./common/request');
var config = require('../config/config');
// index page
exports.index = function(req, res, next) {
  var params = {}
  params.url = 'http://' + config.api_server + '/GetTopMoviesInfo.api?topn=5';
  var r_index = new request(params);
  r_index.getAjax(function(dat){
    dat.config = config;
    res.render('index', dat);
  });
}
