const mongoose = require('mongoose');

// Check if there's a token
exports.getSessionToken = (req, res, next) => {
    console.log(req.session.getSessionToken);
    res.status(200).json({
        posts: [{ title: 'Token', content: 'This is the token endpoint' }]
    });
};

// Creates token when person logs in
exports.postSessionToken = (req, res, next) => {
    req.session.postSessionToken;
    res.status(200).json({
        posts: [{ title: 'token', content: 'This is the token endpoint' }]
    });
};

// Destroy the token in the database
exports.deleteSessionToken = (req, res, next) => {
    req.session.destroy(err => {
        console.log(err);
    });
    res.status(200).json({
        posts: [{ title: 'token', content: 'This is the token endpoint' }]
    });
};
