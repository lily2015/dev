var scheduling = require('../controllers/scheduling/scheduling');
var express = require('express');
var router = express.Router();

//实时排片
router.get('/film-scheduling.html', scheduling.scheduling);

module.exports = router;