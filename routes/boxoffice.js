var boxoffice = require('../controllers/boxoffice/boxoffice');
var express = require('express');
var router = express.Router();

//实时票房
router.get('/film-ticket.html', boxoffice.boxoffice);

module.exports = router;