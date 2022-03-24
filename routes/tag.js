/* eslint-disable new-cap */
const express = require('express');

const router = express.Router();
const tagController = require('../controllers/tag');
// GET all tags
router.get('/tag', tagController.getAllTags);

// GET single TAG by ID
router.get('/tag/:id', tagController.getTag); //get tag by name instead???

// POST create a new TAG
router.post('/tag/create', tagController.postCreateTag);

// PUT update an existing TAG
router.put('/tag/update/:id', tagController.putUpdateTag);

// DETELE a TAG
router.delete('/tag/delete/:id', tagController.deleteTag);

module.exports = router;
