var config = require('./config');
var log4js = require('log4js');
var log4js_config = require("../log4js.json");
log4js.configure(log4js_config);

// log info
var logInfo = log4js.getLogger('logInfo');


module.exports = function (){
  var _this = this;
  var port = process.env.PORT || 4000;
  var env = process.env.NODE_ENV || 'dev';  

  // logs start info output
  logInfo.info("pid=" + process.pid + "|env=" + env + "|port=" + port);

  this.logInfo_debug = function(mes){
    logInfo.debug(mes);
  };
  this.logInfo_info = function(mes){
    logInfo.info(mes);
  };
  this.logInfo_error = function(mes){
    logInfo.error(mes);
  };

};

