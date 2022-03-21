const express = require('express');

const router = express.Router();
const scoreController = require('../controllers/score');
// GET All scores
router.get('/score', scoreController.getScore);

// GET all scores for a quiz
router.get('/score/:quiz_id', scoreController.getScore);

// GET all scores for a user
router.get('/score/:user_id', scoreController.getScore);


module.exports = router;