const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// GET /performers/new (new functionality)
router.get('/tickets/new', ticketsCtrl.new);
router.post('/tickets', ticketsCtrl.create);
router.post('/flights/:id/tickets', ticketsCtrl.addToFlight);

module.exports = router;