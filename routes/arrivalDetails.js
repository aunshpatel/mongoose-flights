const express = require('express');
const router = express.Router();
const arrivalCtrl = require('../controllers/arrivalDetails');

// POST /flights/:id/arrivalDetails
router.post('/flights/:id', arrivalCtrl.create);

module.exports = router;