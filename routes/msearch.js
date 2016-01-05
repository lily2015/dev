var Msearch = require('../controllers/msearch/msearch');
var express = require('express');
var router = express.Router();

// 影院分类筛选－院线页
router.get('/cinameline.html', Msearch.cinameline);
// 影院分类筛选页
router.get('/cinema.html', Msearch.cinema);
// 影院分类筛选－城市页
router.get('/city.html', Msearch.city);
// 影院分类筛选－厅数页
router.get('/housenum.html', Msearch.housenum);
// 搜索页
router.get('/msearch.html', Msearch.msearch);
// 影院分类筛选－结果页
router.get('/search-theatre_result.html', Msearch.searchTheaterResult);
// 搜素结果页
router.get('/search_result.html', Msearch.searchResult);
// 影院分类筛选－特殊厅页
router.get('/spacilhouse.html', Msearch.specialHouse);

module.exports = router;