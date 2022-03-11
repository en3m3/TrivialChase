const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { //this is app is a game, games use usertags "username or email"
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  resetToken: String,
  resetTokenExpiration: Date,
  collection: { //collection of quiz sets
    sets: [ //quiz sets
      {
      quizId: {
        type: Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true
      },
      created: { //was the quiz created by user?
        type: Boolean,
        required: true
      },
      score: {
        type: Number,
        required: false
      }
    }
    ]
  },

  score: {
    type: Int,
    required: true
  },

});

module.exports = mongoose.model('User', userSchema);

userSchema.methods.createQuiz = function(quiz){
  const collectionQuizsetIndex = this.collection.sets.findIndex(cb => { //cb = callback? cp from ecomerse
    return cb.quizId.toString() === quiz._id.toString
  })
}

userSchema.methods.deleteQuiz = function(){}

// // Starter Stuff provided by Martin

// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//   email: {
//     type: String,
//     required: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   resetToken: String,
//   resetTokenExpiration: Date,
// });

// module.exports = mongoose.model('User', userSchema);