const express = require('express');

const router = express.Router();

// GET all tags
router.get('/tags');

// GET single TAG by ID
router.get('/tag/:id');

// POST create a new TAG
router.post('/tag');

// PUT update an existing TAG
router.put('/tag');

// DETELE a TAG
router.delete('/tag');

module.exports = router;