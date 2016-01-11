var request = require('./common/request');
// index page
exports.index = function(req, res, next) {
  var params = {}
  params.apiName = 'GetTopMoviesInfo.api';
  params.apiParams = {
    'topn': 5
  };
  var r_index = new request(params);
  r_index.getAjax(function(dat) {
    res.render('index', dat);
  });

// res.send('index', '9999999999999999');
}
