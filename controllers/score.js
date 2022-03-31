const mongoose = require('mongoose');
const Score = require('../models/score');
const Quiz = require('../models/quiz');
const User = require('../models/user');

exports.getAllScores = (req, res, next) => {
  const scores = Score.find()
  .then(scores => res.status(200).json(scores))
  .then(console.log('Scores retrieved sucessfully'))
  .catch(err => res.json(err));
};
exports.getScoreByQuiz = (req, res, next) => {
  const quizScores = Score.find({quiz: req.params.quiz_id})
    .then(quizScores => res.status(200).json(quizScores))
    .then(console.log('Scores retrieved sucessfully by Quiz id'))
    .catch(err => res.json(err));
};

exports.getScoreByUser = (req, res, next) => {
  const score = Score.find({user: req.params.user_id})
    .then(score => res.status(200).json(score))
    .then(console.log('Score retrieved sucessfully by User id'))
    .catch(err => res.json(err));
};

exports.getHighScoresByQuiz = (req, res, next) => { //GET 1 high score or all High Scores
  const highscore = Score.find({quiz: req.params.quiz_id}).sort({score: -1}).limit(1)
  .then(highscore => res.status(200).json(highscore))
  .then(console.log('High Scores retrieved sucessfully'))
  .catch(err => res.json(err));
};

exports.getHighScoresByUser = (req, res, next) => { //GET 1 high score or all High Scores
  const highscore = Score.find({user: req.params.user_id}).sort({score: -1}).limit(1)
  .then(highscore => res.status(200).json(highscore))
  .then(console.log('High Scores retrieved sucessfully'))
  .catch(err => res.json(err));
};

exports.postScore = (req, res, next) => {
  const scor = new Score({
    score: req.body.score,
    date: req.body.date,
    username: req.body.name,
    quiz: req.body.quiz,
    email: req.body.email,
    user: req.body.user
});
scor.save().
then(data => {
    res.status(200).json(data);
}).catch(err => {
    res.json(err);
});
};

exports.putScore = (req, res, next) => {
  Score.updateOne({_id: req.params.id}, {$set: req.body})
    .then(res.status(200).json({message: 'Updated Successfully'}))
    .then(console.log('Scores updated successfully'))
    .catch(err => res.json(err));
};

exports.deleteScore = (req, res, next) => {
  Score.deleteOne({_id: req.params.id})
  .then(res.status(200).json({message: 'Deleted Successfully'}))
  .then(console.log('Scores deleted successfully'))
  .catch(err => res.json(err));
};

