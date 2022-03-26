const express = require('express');

const router = express.Router();
const questionController = require('../controllers/question');
// GET all questions
router.get('/questions', questionController.getAllQuestion);

// GET single question by ID
router.get('/question/:id', questionController.getQuestion);

// GET questions created by a specific user
router.get('/questions/:user_id', questionController.getQuestionByUser);

// GET questions by TAG
// router.get('/questions/:tag_id', questionController.getQuestion); //quizTag != questionTag!, let's drops this

// POST Create new question
router.post('/question', questionController.postAddQuestion);

// PUT Update question
router.put('/question', questionController.putUpdateQuestion);

// DELETE a question
router.delete('/question/:id', questionController.deleteQuestion);

module.exports = router;