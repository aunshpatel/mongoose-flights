var express = require('express');
var router = express.Router();

var flightsCtrl = require('../controllers/flights');

// All actual paths begin with "/todos"

// GET /todos
router.get('/', flightsCtrl.index);

module.exports = router;
