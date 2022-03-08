const express = require('express');

const router = express.Router();
const scoreController = require('../controllers/score');
// GET All scores
router.get('/scores', scoreController.getScore);

// GET all scores for a quiz
router.get('/scores/:quiz_id', scoreController.getScore);

// GET all scores for a user
router.get('/scores/:user_id', scoreController.getScore);


module.exports = router;