const express = require('express');

const router = express.Router();
const scoreController = require('../controllers/score');
// GET All scores
router.get('/score', scoreController.getAllScores);

// GET all scores for a quiz
router.get('/score/:quiz_id', scoreController.getScoreByQuiz);

// GET all scores for a user
router.get('/score/:user_id', scoreController.getScoreByUser);

// GET user's high score(s?)
router.get('/score/highscore/:user_id', scoreController.getHighScores); // 1 high score or all high scores?

// POST create a new score linked to quiz
router.post('/score/:quiz_id', scoreController.postScore);

// PUT update an existing score linked to quiz
router.put('/score/:quiz_id', scoreController.putScore);

//DELETE a score linked to quiz
router.delete('/score/:quiz_id', scoreController.deleteScore);


module.exports = router;