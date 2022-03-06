exports.getToken = (req, res, next) => {
    console.log("here");
    res.status(200).json({
        posts: [{ title: 'token', content: 'This is the token endpoint' }]
    });
};

exports.postToken = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'token', content: 'This is the token endpoint' }]
    });
};

exports.putToken = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'token', content: 'This is the token endpoint' }]
    });
};

exports.deleteToken = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'token', content: 'This is the token endpoint' }]
    });
};