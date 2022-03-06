const express = require('express');

const router = express.Router();

// GET all quizzes
router.get('/quizzes');

// GET single quiz by ID
router.get('/quiz/:id');

// GET all quizzes created by a user
router.get('/quizzes/:user_id');

// GET all quizzes associated with a TAG
router.get('/quizzes/:tag_id');

// POST create new quiz
router.post('/quiz');

// PUT update existing quiz
router.put('/quiz');

// DELETE a quiz
router.delete('/quiz');


module.exports = router;