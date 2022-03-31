const express = require('express');
const isAuth = require('../middleware/isAuth');

const router = express.Router();
const scoreController = require('../controllers/score');
// GET All scores
router.get('/score', scoreController.getAllScores);

// GET all scores for a quiz
router.get('/score/quiz/:quiz_id', scoreController.getScoreByQuiz);

// GET all scores for a user
router.get('/score/user/:user_id', scoreController.getScoreByUser);

// GET quiz's high score(s?)
router.get('/score/quiz/highscore/:quiz_id', scoreController.getHighScoresByQuiz);// 1 high score or all high scores?

// GET user's high score(s?)
router.get('/score/user/highscore/:user_id', scoreController.getHighScoresByUser);// 1 high score or all high scores?

// POST create a new score linked to quiz
router.post('/score/create', isAuth, scoreController.postScore);

// PUT update an existing score linked to quiz
router.put('/score/update/:id',isAuth, scoreController.putScore);

//DELETE a score linked to quiz
router.delete('/score/delete/:id',isAuth, scoreController.deleteScore);


module.exports = router;