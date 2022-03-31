/* eslint-disable new-cap */
const express = require('express');
const isAuth = require('../middleware/isAuth');

const router = express.Router();
const tagController = require('../controllers/tag');
// GET all tags
router.get('/tag', tagController.getAllTags);

// GET single TAG by ID
router.get('/tag/:id', tagController.getTag); //get tag by name instead???

// POST create a new TAG
router.post('/tag/create', isAuth, tagController.postTag);

// PUT update an existing TAG
router.put('/tag/update/:id', isAuth, tagController.putTag);

// DETELE a TAG
router.delete('/tag/delete/:id', isAuth, tagController.deleteTag);

module.exports = router;
