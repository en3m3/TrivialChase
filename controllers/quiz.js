exports.getQuizzes = (req, res, next) => {
    console.log("here");
    res.status(200).json({
        posts: [{ title: 'quiz', content: 'This is the quiz endpoint' }]
    });
};

exports.getQuiz = (req, res, next) => {
    console.log("here");
    res.status(200).json({
        posts: [{ title: 'quiz', content: 'This is the quiz endpoint' }]
    });
};

exports.postQuiz = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'quiz', content: 'This is the quiz endpoint' }]
    });
};

exports.putQuiz = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'quiz', content: 'This is the quiz endpoint' }]
    });
};

exports.deleteQuiz = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'quiz', content: 'This is the quiz endpoint' }]
    });
};