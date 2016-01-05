var indexRouters = require('../routes/index');
// var movieRouters = require('../routes/movie');
// var boxofficeRouter = require('../routes/boxoffice');
// var schedulingRouters = require('../routes/scheduling');
// var serviceRouters = require('../routes/service');
// var msearchRouters = require('../routes/msearch');
// var filmSearchRouters = require('../routes/film-search');
// var rankRouters = require('../routes/mrank');
// var cinemaRouters = require('../routes/cinema');
// var recalendarRouters = require('../routes/recalendar');

module.exports = function(app) {
  // 首页
  app.use('/', indexRouters);

  // 影片相关页
 /* app.use('/movie/', movieRouters);
  app.use('/views/movie/', movieRouters);

  // 实时票房
  app.use('/boxoffice/', boxofficeRouter);
  app.use('/views/film_ticket/', boxofficeRouter);

  // 实时排片
  app.use('/scheduling/', schedulingRouters);
  app.use('/views/film_scheduling/', schedulingRouters);

  // 我的定制页
  app.use('/views/my/', serviceRouters);

  // 搜索页
  app.use('/views/msearch/', msearchRouters);

  // 影片分类筛选
  app.use('/views/film_search/', filmSearchRouters);

  // 排行榜
  app.use('/views/m_rank/', rankRouters);

  // 影院详情页
  app.use('/views/cinema/', cinemaRouters);
  // 上映日历页
  app.use('/views/re_calendar/', recalendarRouters);*/

}
