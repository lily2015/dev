var mRoot = require('../controllers/movie/movie');
var mInfoRoot = require('../controllers/movie/movie-info');
var mCompare = require('../controllers/movie/movie-compare-index');
var mCompareResult = require('../controllers/movie/movie-compare-result');
var express = require('express');
var router = express.Router();

// 影片详情页
// router.get('/:movieId', mRoot.movieDetail);
router.get('/movie_detail.html', mRoot.movieDetail);
// 影片信息页
// router.get('/:movieId/info', mInfoRoot.movieInfo);
router.get('/movie_comments.html', mInfoRoot.movieInfo);
// 影片选择对比页
// router.get('/:movieId/compare/:movieInfo', mCompare.compareIndex);
router.get('/movie_compare_index.html', mCompare.compareIndex);
// 影片选择对比结果页
// router.get('/:movieId/compare/result/:movie/:movieIds/:movieList', mCompareResult.compareResult);
router.get('/movie_compare_result.html', mCompareResult.compareResult);


// 影片详情页
router.get('/:movieId', mRoot.movieDetail);
// router.get('/movie_detail.html', mRoot.movieDetail);
// 影片信息页
router.get('/:movieId/info', mInfoRoot.movieInfo);
// router.get('/movie_comments.html', mInfoRoot.movieInfo);
// 影片选择对比页
router.get('/:movieId/compare/:movieInfo', mCompare.compareIndex);
// router.get('/movie_compare_index.html', mCompare.compareIndex);
// 影片选择对比结果页
router.get('/:movieId/compare/result/:movie/:movieIds/:movieList', mCompareResult.compareResult);
// router.get('/movie_compare_result.html', mCompareResult.compareResult);

module.exports = router;