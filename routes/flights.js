var express = require('express');
var router = express.Router();

var flightsCtrl = require('../controllers/flights');

// All actual paths begin with "/flights"

// GET /flights
router.get('/', flightsCtrl.index);
// GET /flights/new
router.get('/new', flightsCtrl.new);
// POST /movies
router.post('/', flightsCtrl.create);
// GET /movies/:id (show functionality) MUST be below new route
router.get('/:id', flightsCtrl.show);

module.exports = router;
