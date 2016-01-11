var Index = require('../controllers/index');
var express = require('express');
var router = express.Router();

//首页
router.get('/', Index.index);

module.exports = router;
