const express = require('express');

const router = express.Router();
const quizController = require('../controllers/quiz');
// GET all quizzes
router.get('/quizzes',quizController.getQuizzes);

// GET single quiz by ID
router.get('/quiz/:id',quizController.getQuiz);

// GET all quizzes created by a user
router.get('/quizzes/:user_id',quizController.getQuiz);

// GET all quizzes associated with a TAG
router.get('/quizzes/:tag_id',quizController.getQuiz);

// POST create new quiz
router.post('/quiz',quizController.getQuiz);

// PUT update existing quiz
router.put('/quiz',quizController.putQuiz);

// DELETE a quiz
router.delete('/quiz',quizController.deleteQuiz);


module.exports = router;