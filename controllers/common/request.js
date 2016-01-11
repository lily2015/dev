var request = require('request');
var logs = require('../../config/logs');
var config = require('../../config/config');

var logger = new logs();

module.exports = function (paramsObj){
  var baseUrl = 'http://' + config.api_server;
  var options = {
    baseUrl: paramsObj.baseUrl || baseUrl,
    uri: paramsObj.apiName,
    qs: paramsObj.apiParams || {}
  };

  this.getAjax = function(callback){
    request(options, function(err, res, body) {
      var _date = JSON.parse(body);
      _date.config = config;
      if(!err && res.statusCode == 200){
        callback(_date);
      }else{
        console.log(err);
        logger.logInfo_error(err);
      };
    });
  };
}

