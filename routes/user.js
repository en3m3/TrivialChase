const express = require('express');

const router = express.Router();

// GET all USERS
router.get('/users');

// GET single USER by ID
router.get('/user/:id');

// POST create a new USER
router.post('/user');

// PUT update an existing USER
router.put('/user');

// DETELE a USER
router.delete('/user');


module.exports = router;