const mongoose = require('mongoose');
const Token = require('../models/token');

// Check if there's a token
exports.getSessionToken = (req, res, next) => {
    const token = Token.find()
    .then(token => res.status(200).json(token))
    .then(console.log('Token retrieved sucessfully'))
    .catch(err => res.json(err));
};

// Creates token when person logs in
exports.postSessionToken = (req, res, next) => {
    const sessionToken = new Token ({
        Token: "tokenExists",
        TokenExpiration: new Date()
    });
    sessionToken.save()
    .then(data => {
        res.status(200).json(data);
    })
    .then(console.log("Token created successfully"))
    .catch(err => {
        res.json(err);
    });
};

// Destroy the token in the database
exports.deleteSessionToken = (req, res, next) => {
    Token.deleteMany()
    .then(res.status(200).json({message: 'Deleted Token Successfully'}))
    .then(console.log('Token deleted successfully'))
    .catch(err => res.json(err));
};

exports.loginRequest = (req, res, next) => {
    req.session.destroy(err => {
        console.log(err);
    });
    res.status(200).json({
        posts: [{ title: 'token', content: 'This is the token endpoint' }]
    });
};
