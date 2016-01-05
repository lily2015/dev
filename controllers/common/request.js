var request = require('request');
var logs = require('../../config/logs');

var logger = new logs();

module.exports = function (paramsObj){
  this.getAjax = function(callback){
    request(paramsObj, function(err, res, body) {
      var _date = JSON.parse(body);
      if(!err && res.statusCode == 200){
        callback(_date);
      }else{
        console.log(err);
        logger.logInfo_error(err);
      };
    });
  };
}

