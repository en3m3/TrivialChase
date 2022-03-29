const Quiz = require('../models/quiz');

exports.getAllQuizzes = (req, res, next) => {
    const quizzes = Quiz.find()
    .then(quizzes => res.status(200).json(quizzes))
    .then(console.log('Quizzes retrieved sucessfully'))
    .catch(err => res.json(err));
};

exports.getQuiz = (req, res, next) => {
    const quiz = Quiz.findById(req.params.id)
    .then(quiz => res.status(200).json(quiz))
    .then(console.log('Quiz retrieved sucessfully by id'))
    .catch(err => res.json(err));
};

exports.getQuizByUser = (req, res, next) => {
    const quiz = Quiz.find({ user: req.params.user_id})
    .then(quiz => res.status(200).json(quiz))
    .then(console.log('Quiz retrieved sucessfully by user id'))
    .catch(err => res.json(err));
};

exports.postQuiz = (req, res, next) => {
    const quiz = new Quiz(
        {
            questions: req.body.questions,
            user: req.body.user
        }
    );
    quiz.save()
    .then(data => {
        res.status(200).json(data);
    })
    .then(console.log('Quiz created sucessfully'))
    .catch(err => {
        res.json(err);
    });
};

exports.putQuiz = (req, res, next) => {
    Quiz.updateOne({_id: req.params.id}, {$set: req.body})
    .then(res.status(200).json({message: 'Updated Successfully'}))
    .then(console.log('Quiz updated successfully'))
    .catch(err => res.json(err));
};

exports.deleteQuiz = (req, res, next) => {
    Quiz.deleteOne({_id: req.params.id})
    .then(res.status(200).json({message: 'Deleted Successfully'}))
    .then(console.log('Quiz deleted successfully'))
    .catch(err => res.json(err));
};