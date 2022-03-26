const express = require('express');

const router = express.Router();
const quizController = require('../controllers/quiz');
// GET all quizzes
router.get('/quizzes',quizController.getAllQuizzes);

// GET single quiz by ID
router.get('/quiz/:id',quizController.getQuiz);

// GET all quizzes created by a user
router.get('/quizzes/:user_id',quizController.getQuiz);

// GET all quizzes associated with a TAG
router.get('/quizzes/:tag_id',quizController.getQuiz);

// POST create new quiz
router.post('/quiz/create/:user_id',quizController.postQuiz);

// PUT update existing quiz
router.put('/quiz/:id',quizController.putQuiz);

// DELETE a quiz
router.delete('/quiz/:id',quizController.deleteQuiz);


module.exports = router;