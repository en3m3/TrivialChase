const express = require('express');

const router = express.Router();
const tokenController = require('../controllers/token');
// GET single TOKEN by ID
router.get('/token/:id', tokenController.getToken);

// POST create a new TOKEN
router.post('/token', tokenController.getToken);

// DETELE a TOKEN
router.delete('/token', tokenController.getToken);

module.exports = router;