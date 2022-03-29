const Question = require('../models/question');

exports.getAllQuestion = (req, res, next) => {
    const questions = Question.find()
    .then(questions => res.status(200).json(questions))
    .then(console.log('Questions retrieved sucessfully'))
    .catch(err => res.json(err));
};

exports.getQuestionByUser = (req, res, next) => {
    const question = Question.find({user: req.params.user_id})
    .then(question => res.status(200).json(question))
    .then(console.log('Questions retrieved sucessfully by User id'))
    .catch(err => res.json(err));
};

exports.getQuestionByTag = (req, res, next) => {
    const question = Question.find({tag: req.params.tag_id})
    .then(question => res.status(200).json(question))
    .then(console.log('Questions retrieved sucessfully by tag id'))
    .catch(err => res.json(err));
};

exports.getQuestion = (req, res, next) => {
    const question = Question.findById(req.params.id)
    .then(question => res.status(200).json(question))
    .then(console.log('Questions retrieved sucessfully by question id'))
    .catch(err => res.json(err));
};

exports.postAddQuestion = (req, res, next) => {
    const quest = new Question({
        question: req.body.question,
        answer: req.body.answer,
        wrong1: req.body.wrong1,
        wrong2: req.body.wrong2,
        wrong3: req.body.wrong3,
        type: req.body.type,
        tag: req.body.tag,
        user: req.body.user
    });
    quest.save().
    then(data => {
        res.status(200).json(data);
    }).catch(err => {
        res.json(err);
    })
    ;
};

exports.putQuestion = (req, res, next) => {
    Question.updateOne({_id: req.params.id}, {$set: req.body})
    .then(res.status(200).json({message: 'Updated Successfully'}))
    .then(console.log('Question updated successfully'))
    .catch(err => res.json(err));
};

exports.deleteQuestion = (req, res, next) => {
    Question.deleteOne({_id: req.params.id})
    .then(res.status(200).json({message: 'Deleted Successfully'}))
    .then(console.log('Question deleted successfully'))
    .catch(err => res.json(err));
};