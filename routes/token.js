const express = require('express');

const router = express.Router();
const tokenController = require('../controllers/token');
// GET single TOKEN by ID
router.get('/token/:id', tokenController.getSessionToken);

// POST create a new TOKEN
router.post('/token/:userId', tokenController.createSession); //in essesnce, the tokens will be session flags

// DETELE a TOKEN
router.delete('/token', tokenController.deleteSessionToken);

module.exports = router;