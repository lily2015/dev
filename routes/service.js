var Service = require('../controllers/service');
var express = require('express');
var router = express.Router();

// 我的定制页
router.get('/my_customized.html', Service.myCustomized);

// 设置我的影片页
router.get('/my_movie.html', Service.myMovie);

// 设置我的影院页
router.get('/my_theater.html', Service.myTheater);


module.exports = router;