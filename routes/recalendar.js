var Recalendar= require('../controllers/recalendar/recalendar');
var express = require('express');
var router = express.Router();

// 上映日历
router.get('/re_calendar.html', Recalendar.recent);

module.exports = router;