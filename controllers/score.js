const mongoose = require('mongoose');
const Score = require('../models/score');
const HighScores = require('../models/score');

exports.getAllScores = (req, res, next) => {
  Score.find()
    .then(score=>{
        console.log(score);
        res.render('score/score-list',{
            scores: score,
            pageTitle: 'Scores',
            path: '/score'
          });
        })
    .catch(err => {
        const error = new Error(err);
        error.httpStatusCode = 500;
        return next(error);
      });
};

exports.getScoreByQuiz = (req, res, next) => {
  Score.find()
  .then(score=>{
      console.log(score);
      res.render('score/score-list',{
          scores: score,
          pageTitle: 'Scores',
          path: '/score'
        });
      })
  .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getScoreByUser = (req, res, next) => {
  Score.find()
  .then(score=>{
      console.log(score);
      res.render('score/score-list',{
          scores: score,
          pageTitle: 'Scores',
          path: '/score'
        });
      })
  .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getHighScores = (req, res, next) => { //GET 1 high score or all High Scores
    HighScores.find()
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
      res.redirect('/score');
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
    const score = req.body.score;
    req.user
      .removeFromCart(score)
      .then(result => {
        res.redirect('/score');
      })
      .catch(err => {
        const error = new Error(err);
        error.httpStatusCode = 500;
        return next(error);
      });
  };

