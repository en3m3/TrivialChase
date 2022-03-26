const User = require('../models/user.js');

exports.getAllUsers = (req, res, next) => {
    console.log(User.username);
    User.find()
    .then(user =>{
        res.status(200).json({
            user: user
    });
// content: req.userId }]
    });
};

exports.getUser = (req, res, next) => {
    console.log(req.params._id, "16");
    User.findById(req.params._id)
    .then(user =>{
        console.log(user, "19");
        res.status(200).json({
            user: user._id
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
    res.status(200).json({
        posts: [{ title: 'user', content: 'This is the user endpoint, postCreateUser' }]
    });
};

exports.putUser = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'user', content: 'This is the user endpoint, putUpdateUser' }]
    });
};

exports.deleteUser = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'user', content: 'This is the user endpoint, deleteUser' }]
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
