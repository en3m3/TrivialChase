exports.getUser = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'user', content: 'This is the user endpoint' }]
    });
};

exports.postUser = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'user', content: 'This is the user endpoint' }]
    });
};

exports.putUser = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'user', content: 'This is the user endpoint' }]
    });
};

exports.deleteUser = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'user', content: 'This is the user endpoint' }]
    });
};