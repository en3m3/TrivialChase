const express = require('express');
const isAuth = require('../middleware/isAuth');

const router = express.Router();
const quizController = require('../controllers/quiz');
// GET all quizzes
router.get('/quiz', quizController.getAllQuizzes);

// GET single quiz by ID
router.get('/quiz/:id', quizController.getQuiz);

// GET all quizzes created by a user
router.get('/quiz/user/:user_id', quizController.getQuizByUser);

// POST create new quiz
router.post('/quiz/create', isAuth, quizController.postQuiz);

// PUT update existing quiz
router.put('/quiz/update/:id', isAuth, quizController.putQuiz);

// DELETE a quiz
router.delete('/quiz/delete/:id', isAuth, quizController.deleteQuiz);


module.exports = router;