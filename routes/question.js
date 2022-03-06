const express = require('express');

const router = express.Router();

// GET all questions
router.get('/questions');

// GET single question by ID
router.get('/question/:id');

// GET questions created by a specific user
router.get('/questions/:user_id');

// GET questions by TAG
router.get('/questions/:tag_id');

// POST Create new question
router.post('/question');

// PUT Update question
router.put('/question');

// DELETE a question
router.delete('/question');

module.exports = router;