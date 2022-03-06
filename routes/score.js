const express = require('express');

const router = express.Router();

// GET All scores
router.get('/scores');

// GET all scores for a quiz
router.get('/scores/:quiz_id');

// GET all scores for a user
router.get('/scores/:user_id');


module.exports = router;