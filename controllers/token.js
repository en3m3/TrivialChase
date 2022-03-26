exports.getSessionToken = (req, res, next) => {
    console.log("here");
    res.status(200).json({
        posts: [{ title: 'token', content: 'This is the token endpoint' }]
    });
};

exports.postSessionToken = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'token', content: 'This is the token endpoint' }]
    });
};

exports.deleteSessionToken = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'token', content: 'This is the token endpoint' }]
    });
};

