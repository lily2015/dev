var Cinema= require('../controllers/cinema/cinema');
var express = require('express');
var router = express.Router();

// 影院信息
router.get('/cinema_comments.html', Cinema.comments);
// 影院对比结果 
router.get('/cinema_compare_result.html',Cinema.compareResult);
// 影院对比选择 
router.get('/cinema_compare_select.html',Cinema.compareSelect);
// 影院详情
router.get('/cinema_detail.html', Cinema.cinemaDetail);
// 院线详情
router.get('/cinemaline_detail.html', Cinema.cinemaLineDetail);

module.exports = router;