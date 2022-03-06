const express = require('express');

const router = express.Router();

// GET single TOKEN by ID
router.get('/token/:id');

// POST create a new TOKEN
router.post('/token');

// DETELE a TOKEN
router.delete('/token');

module.exports = router;