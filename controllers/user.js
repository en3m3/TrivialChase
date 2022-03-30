const User = require('../models/user.js');
const { body, validationResult } = require('express-validator');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');

exports.getAllUsers = (req, res, next) => {
    console.log(User.username);
    User.find()
        .then(user => {
            res.status(200).json({
                user: user
            });
            // content: req.userId }]
        });
};

exports.getUser = (req, res, next) => {
    console.log(req.params, "16");
    User.findById(req.params.id)
        .then(user => {
            console.log(user, "19");
            res.status(200).json({
                user: user
            });
        })
        .catch(err => {
            console.log(err, "ERR! ERR!, admin.js/60");
            const error = new Error(err);
            error.httpStatusCode = 500;
            return next(error);
            // useErrorMiddleware() //not sure how to do easy functions like I used to be able to
        });
};

exports.postUser = (req, res, next) => {
    console.log(req.body);
    console.log("routed");
    const password = req.body.password;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    bcrypt.hash("password", 12)
        .then(hashedpassword => {
            const user = new User(
                {
                    username: req.body.username,
                    email: req.body.email,
                    password: hashedpassword,
                    quizzes: req.body.quizzes || [],
                    scores: req.body.scores || []
                }
            );
            user.save()
                .then(data => {
                    res.status(200).json(data);
                })
                .then(console.log('User added sucessfully'))
                .catch(err => {
                    res.json(err);
                });
        });
};


exports.putUser = (req, res, next) => {
    User.updateOne({_id: req.params.id}, {$set: req.body})
    .then(res.status(200).json({message: 'Updated Successfully'}))
    .then(console.log('Update updated successfully'))
    .catch(err => res.json(err));
};

exports.deleteUser = (req, res, next) => {
    User.deleteOne({_id: req.params.id})
    .then(res.status(200).json({message: 'Deleted Successfully'}))
    .then(console.log('User deleted successfully'))
    .catch(err => res.json(err));
};

exports.getLogin = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({
            validationErrors: errors.array()
        });
    }
    User.findOne({ username: username })
        .then(user => {
            if (!user) {
                res.json({
                    token: 0,
                    errorMessage: 'Invalid email or password.'
                });
                return;
            }
            bcrypt
                .compare(password, user.password)
                .then(doMatch => {
                    if (doMatch) {
                        crypto.randomBytes(32, (err, buffer) => {
                            if (err) {
                                return res.json('failed to create user token');
                            }
                            const token = buffer.toString('hex');

                            user.token = token;
                            user.tokenexpiration = Date.now() + 6400000;
                            user.save()
                                .then(data => {
                                    res.json({ token: data.token });
                                    return;
                                })
                                .catch(err => {
                                    res.json({ error: err });
                                    return;
                                });
                        });
                    }
                });
        })
        .catch(err => {
            return res.json({
                token: 0,
                errorMessage: 'Invalid username or password. 2'
            });
        });
    };






// exports.getLogin = (req, res, next) => {
//     res.status(200).json({
//         posts: [{ title: 'user', content: 'This is the user endpoint' }]
//     });
// };

// exports.getSignup = (req, res, next) => {
//     res.status(200).json({
//         posts: [{ title: 'user', content: 'This is the user endpoint' }]
//     });
// };

// exports.getReset = (req, res, next) => {
//     res.status(200).json({
//         posts: [{ title: 'user', content: 'This is the user endpoint' }]
//     });
// };

// exports.getNewPassword = (req, res, next) => {
//     res.status(200).json({
//         posts: [{ title: 'user', content: 'This is the user endpoint' }]
//     });
// };



// exports.postLogin = (req, res, next) => {
//     res.status(200).json({
//         posts: [{ title: 'user', content: 'This is the user endpoint' }]
//     });
// };








// //Starter Stuff provided by Martin

// xports.getUser = (req, res, next) => {
//     res.status(200).json({
//         posts: [{ title: 'user', content: 'This is the user endpoint' }]
//     });
// };

// exports.postUser = (req, res, next) => {
//     res.status(200).json({
//         posts: [{ title: 'user', content: 'This is the user endpoint' }]
//     });
// };

// exports.putUser = (req, res, next) => {
//     res.status(200).json({
//         posts: [{ title: 'user', content: 'This is the user endpoint' }]
//     });
// };

// exports.deleteUser = (req, res, next) => {
//     res.status(200).json({
//         posts: [{ title: 'user', content: 'This is the user endpoint' }]
//     });
// };
