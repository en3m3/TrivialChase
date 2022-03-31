const express = require('express');
const isAuth = require('../middleware/isAuth');

const router = express.Router();

const questionController = require('../controllers/question');

// GET all questions
router.get('/question', questionController.getAllQuestion);

// GET single question by ID
router.get('/question/:id', questionController.getQuestion);

// GET questions created by a specific user
router.get('/question/user/:user_id', questionController.getQuestionByUser);

// GET questions by TAG
router.get('/question/tag/:tag_id', questionController.getQuestionByTag);

// POST Create new question and add to quiz set
router.post('/question/create', isAuth, questionController.postAddQuestion);

// PUT Update question
router.put('/question/update/:id', questionController.putQuestion);

// DELETE a question
router.delete('/question/delete/:id', isAuth, questionController.deleteQuestion);

module.exports = router;