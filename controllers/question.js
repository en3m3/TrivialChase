exports.getAllQuestions = (req, res, next) => {
    console.log("here");
    res.status(200).json({
        posts: [{ title: 'question', content: 'This is the question endpoint' }]
    });
};

exports.getQuestion = (req, res, next) => {
    console.log("here");
    res.status(200).json({
        posts: [{ title: 'question', content: 'This is the question endpoint' }]
    });
};
exports.getQuestionByUser = (req, res, next) => {
    console.log("here");
    res.status(200).json({
        posts: [{ title: 'question', content: 'This is the question endpoint' }]
    });
};

exports.postAddQuestion = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'question', content: 'This is the question endpoint' }]
    });
};

exports.putQuestion = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'question', content: 'This is the question endpoint' }]
    });
};

exports.deleteQuestion = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'question', content: 'This is the question endpoint' }]
    });
};