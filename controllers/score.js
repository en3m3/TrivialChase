const mongoose = require('mongoose');
const Score = require('../models/score');
const HighScores = require('../models/score');
const Quiz = require('../models/quiz');
const User = require('../models/user');

exports.getAllScores = (req, res, next) => {
  const scoreId = req.params.scoreId;
  Score.find(scoreId)
    .then(score=>{
        console.log(score);
        res.status(200).json({
            score: score,
            pageTitle: 'Scores'            
          });
        })
    .catch(err => {
        const error = new Error(err);
        error.httpStatusCode = 500;
        return next(error);
      });
};

exports.getScoreByQuiz = (req, res, next) => {
  const quizId = req.params.quizId;
  Quiz.findById(quizId)
  .then(score=>{
      console.log(Score);
      res.status(200).json({
          score: score,
          
        });
      })
  .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getScoreByUser = (req, res, next) => {
  const userId = req.params.userId;
  Score.find(userId)
  .then(score=>{
      console.log(Score);      
      res.status(200).json({
          score: score,
          
        });
      })
  .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getHighScores = (req, res, next) => { //GET 1 high score or all High Scores
  const scoreId = req.params.scoreId;
    HighScores.find(scoreId)
    .then(score => {
        console.log(score);
    }) 

    res.status(200).json({
        posts: [{ title: 'score', content: 'This is the score endpoint' }]
    });
};   

exports.postScore = (req, res, next) => {
    req.user
    .populate('score.scores.userId')
    .execPopulate()
    .then(user => {      
      const score = new Score({
        user: {
          email: req.user.email,
          userId: req.user
        },
        score: score
      });
      return score.save();
    })
    .then(result => {
      return req.user.clearscore();
    })
    .then(() => {
      res.status(200).json({
        score: Score,        
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};
    

exports.putScore = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'score', content: 'This is the score endpoint' }]
    });
};

exports.deleteScore = (req, res, next) => {
    const scoreId = req.body.scoreId;
    req.user
      .removeFromScore(scoreId)
      .then(result => {
        res.status(200).json({ message: 'Score Deleted.' });
      })
      .catch(err => {
        const error = new Error(err);
        error.httpStatusCode = 500;
        return next(error);
      });
  };

