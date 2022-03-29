/* eslint-disable new-cap */
const express = require('express');

const router = express.Router();
const tagController = require('../controllers/tag');
// GET all tags
router.get('/tag', tagController.getAllTags);

// GET single TAG by ID
router.get('/tag/:id', tagController.getTag); //get tag by name instead???

// POST create a new TAG
router.post('/tag', tagController.postTag);

// PUT update an existing TAG
router.put('/tag/:id', tagController.putTag);

// DETELE a TAG
router.delete('/tag/:id', tagController.deleteTag);

module.exports = router;
