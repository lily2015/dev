var Filmsearch = require('../controllers/msearch/film-search');
var express = require('express');
var router = express.Router();

// 影片分类筛选页
router.get('/film-type-filter.html', Filmsearch.filterIndex);
// 影片分类筛选－首日票房页
router.get('/film-type-filter-firstbox.html', Filmsearch.filterFirstbox);
// 影片分类筛选－国别页
router.get('/film-type-filter-location.html', Filmsearch.filterLocation);
// 影片分类筛选－结果页
router.get('/film-type-filter-result.html', Filmsearch.filterResult);
// 影片分类筛选－总票房页
router.get('/film-type-filter-totalbox.html', Filmsearch.filterTotalbox);
// 影片分类筛选－类型页
router.get('/film-type-filter-type.html', Filmsearch.filmType);
// 影片分类筛选－制式页
router.get('/film-type-filter-version.html', Filmsearch.filterVersion);
// 影片分类筛选－年份页
router.get('/film-type-filter-year.html', Filmsearch.filterYear);

module.exports = router;