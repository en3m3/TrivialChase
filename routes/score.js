const express = require('express');

const router = express.Router();
const scoreController = require('../controllers/score');
// GET All scores
router.get('/score', scoreController.getAllScores);

// GET all scores for a quiz
router.get('/score/:quiz_id', scoreController.getScoreByQuiz);

// GET all scores for a user
router.get('/score/:user_id', scoreController.getScoreByUser);


module.exports = router;