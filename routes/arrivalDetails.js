const express = require('express');
const router = express.Router();
const arrivalCtrl = require('../controllers/arrivalDetails');

// POST /movies/:id/reviews (create review for a movie)
router.post('/flights/:id/arrivalDetails', arrivalCtrl.create);

module.exports = router;