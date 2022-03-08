/* eslint-disable new-cap */
const express = require('express');

const router = express.Router();
const tagController = require('../controllers/tag');
// GET all tags
router.get('/tags', tagController.getTag);

// GET single TAG by ID
router.get('/tag/:id', tagController.getTag);

// POST create a new TAG
router.post('/tag', tagController.getTag);

// PUT update an existing TAG
router.put('/tag', tagController.getTag);

// DETELE a TAG
router.delete('/tag', tagController.getTag);

module.exports = router;
