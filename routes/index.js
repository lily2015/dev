var Root = require('../controllers/index');
// var Service = require('../controllers/service');
// var Cinema = require('../controllers/cinema/cinema');
// var Mrank = require('../controllers/mrank/mrank');
// var Recalendar= require('../controllers/recalendar/recalendar');
var express = require('express');
var router = express.Router();

//首页
router.get('/', Root.index);
router.get('/views/index/index.html', Root.index);
// //我的定制页
// router.get('/service', Service.myCustomized);
// //影院详情页
// router.get('/theater/:theaterid', Cinema.cinemaDetail);
// //院线详情页
// router.get('/cinemaline/:lineid', Cinema.cinemaLineDetail);
// //影院排行榜
// router.get('/top/theater', Mrank.cinemaIndex);
// //院线排行榜
// router.get('/top/cinemaline', Mrank.theaterIndex);
// //上映日历
// router.get('/recent', Recalendar.recent);

module.exports = router;
