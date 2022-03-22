const User = require('C:/Users/User/OneDrive/Desktop/School/BYU-Idaho 8th Semester (Winter 2022)/CSE 341 (Web Backend Dev II)/TrivialChase/models/user.js');

exports.getAllUsers = (req, res, next) => {
    console.log(User.username)
    // res.status(200).json({
    //     req.user.populate('usser.username')
    //     posts: [{ 
    //         title: 'user', 
    //         content: 'This is the user endpoint, getAllUsers',
    //         number: 25,
    //         array: ["string",User.email,25, User,true,24]
    //      }]
    //         // content: req.userId }]
    // });
};

exports.getUser = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'user', content: 'This is the user endpoint, getUser' }]
    });
};

exports.postCreateUser = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'user', content: 'This is the user endpoint, postCreateUser' }]
    });
};

exports.putUpdateUser = (req, res, next) => {
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