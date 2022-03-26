exports.getAllQuizzes = (req, res, next) => {
    console.log(Quiz.name);
    User.find()
    .then(quiz =>{
        res.status(200).json({
            quiz: quiz
    });

            // content: req.userId }]
    });
};

exports.getQuiz = (req, res, next) => {
    console.log(req.params.id, "16");
    Quiz.findById(req.params.id)
    .then(quiz =>{
        console.log(quiz, "19");
        res.status(200).json({
            quiz: quiz._id
    });

            // content: req.userId }]
    });
};

exports.getQuizByUser = (req, res, next) => {
    console.log(req.params.id, "16");
    Quiz.findById(req.params.id)
    .then(quiz =>{
        console.log(quiz, "19");
        res.status(200).json({
            quiz: quiz._id
    });

            // content: req.userId }]
    });
};

exports.getQuizByTag = (req, res, next) => {
    console.log(req.params.id, "16");
    Quiz.findById(req.params.id)
    .then(quiz =>{
        console.log(quiz, "19");
        res.status(200).json({
            quiz: quiz._id
    });

            // content: req.userId }]
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