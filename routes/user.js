const express = require('express');
const isAuth = require('../middleware/isAuth');
// const isAdmin = require('../middleware/isAdmin');

const router = express.Router();
const userController = require('../controllers/user');
// GET all USERS
router.get('/user', userController.getAllUsers);

// GET single USER by ID
router.get('/user/:id', userController.getUser);

// POST create a new USER
router.post('/user/create', userController.postUser);

// PUT update an existing USER
router.put('/user/update/:id', isAuth , userController.putUser);

// PUT admin = true on existing USER, must pass current token and be admin for permission
// router.put('/user/giveAdmin/:id', userController.giveAdmin);

router.get('/login', userController.getLogin);

module.exports = router;


// //Starter Stuff provided by Martin

// const express = require('express');

// const router = express.Router();
// const userController = require('../controllers/user');
// // GET all USERS
// router.get('/users', userController.getUser);

// // GET single USER by ID
// router.get('/user/:id', userController.getUser);

// // POST create a new USER
// router.post('/user', userController.postUser);

// // PUT update an existing USER
// router.put('/user', userController.putUser);

// // DETELE a USER
// router.delete('/user', userController.deleteUser);


// module.exports = router;