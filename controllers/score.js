exports.getScore = (req, res, next) => {
    console.log("here");
    res.status(200).json({
        posts: [{ title: 'score', content: 'This is the score endpoint' }]
    });
};

exports.postScore = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'score', content: 'This is the score endpoint' }]
    });
};

exports.putScore = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'score', content: 'This is the score endpoint' }]
    });
};

exports.deleteScore = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'score', content: 'This is the score endpoint' }]
    });
};

exports.getHighScores = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'score', content: 'This is the score endpoint' }]
    });
};