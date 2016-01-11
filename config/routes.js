var indexRouters = require('../routes/index');

module.exports = function(app) {
  // 首页
  app.use('/node/', indexRouters);
}
