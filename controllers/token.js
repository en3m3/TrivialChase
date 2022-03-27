const mongoose = require('mongoose');

exports.getSessionToken = (req, res, next) => {
    console.log("here");
    req.session.getSessionToken;
    res.status(200).json({
        posts: [{ title: 'token', content: 'This is the token endpoint' }]
    });
};

exports.postSessionToken = (req, res, next) => {
    req.session.postSessionToken;
    res.status(200).json({
        posts: [{ title: 'token', content: 'This is the token endpoint' }]
    });
};

exports.deleteSessionToken = (req, res, next) => {
    req.session.destroy(err => {
        console.log(err);
    });
    res.status(200).json({
        posts: [{ title: 'token', content: 'This is the token endpoint' }]
    });
};