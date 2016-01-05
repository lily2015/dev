var Mrank = require('../controllers/mrank/mrank');
var express = require('express');
var router = express.Router();

// 影院排行榜页
router.get('/cinema_index.html', Mrank.cinemaIndex);
// 院线排行榜
router.get('/theatre_index.html', Mrank.theaterIndex);

module.exports = router;