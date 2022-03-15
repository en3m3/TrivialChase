exports.getAllUsers = (req, res, next) => {
    res.status(200).json({
        posts: [{ 
            title: 'user', 
            content: 'This is the user endpoint' }]
            // content: req.userId }]
    });
};

exports.getUser = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'user', content: 'This is the user endpoint' }]
    });
};

exports.postCreateUser = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'user', content: 'This is the user endpoint' }]
    });
};

exports.putUpdateUser = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'user', content: 'This is the user endpoint' }]
    });
};

exports.deleteUser = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'user', content: 'This is the user endpoint' }]
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