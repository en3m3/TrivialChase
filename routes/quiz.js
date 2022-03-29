const express = require('express');

const router = express.Router();
const quizController = require('../controllers/quiz');
// GET all quizzes
router.get('/quiz', quizController.getAllQuizzes);

// GET single quiz by ID
router.get('/quiz/:id', quizController.getQuiz);

// GET all quizzes created by a user
router.get('/quiz/user/:user_id', quizController.getQuizByUser);

// POST create new quiz
router.post('/quiz', quizController.postQuiz);

// PUT update existing quiz
router.put('/quiz/:id', quizController.putQuiz);

// DELETE a quiz
router.delete('/quiz/:id', quizController.deleteQuiz);


module.exports = router;