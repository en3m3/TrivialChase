const express = require('express');

const router = express.Router();
const userController = require('../controllers/user');
// GET all USERS
router.get('/users', userController.getUser);

// GET single USER by ID
router.get('/user/:id', userController.getUser);

// POST create a new USER
router.post('/user', userController.getUser);

// PUT update an existing USER
router.put('/user', userController.getUser);

// DETELE a USER
router.delete('/user', userController.getUser);


module.exports = router;