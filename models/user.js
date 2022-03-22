const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: {
    type: Number,
    required: true
  },
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
  // usserStatus: {

  // }
  resetToken: String,
  resetTokenExpiration: Date,

  quizCollection: {
    quizzes: [
      {
        quizId: {
          type: Schema.Types.ObjectId,
          ref: 'Quiz',
          required: true
        }
      }
    ]
  }

  // Keep this! Don't erase!
//   quizCollection: { //Stuff of quiz sets created and played; similar to Cart
//     quizzes: [ //an array of quiz objects
//       {
//       quizId: {
//         type: Schema.Types.ObjectId,
//         ref: 'Quiz',
//         required: true
//       },
//       created: { //was the quiz created by user?
//         type: Boolean,
//         required: true
//       },
//       score: {
//         type: Number,
//         required: false
//       }
//     }
//     ]
//   }
});



userSchema.methods.createQuiz = function(quiz) {
  //STEP1 create array of current quizzes
  //STEP2 push parameter quiz into created array
  //STEP3 make value of Stuff equal to new created array
  //STEP4 save

  const updatedQuizzes = [...this.quizCollection.quizzes];//STEP1
  //STEP2
  updatedQuizzes.push({
    quizId: quiz.id,
    created: true,
    score: null
  })
  //STEP3
  const updatedQuizCollection = {
    quizzes: updatedQuizzes
  }
  this.quizCollection = updatedQuizCollection;
  return this.save();//STEP4
}

userSchema.methods.addQuiz = function(quiz) { //add like to favorites
  //STEP1 create array of current quizzes
  //STEP2 push parameter quiz into created array
  //STEP3 make value of Stuff equal to new created array
  //STEP4 save

  const updatedQuizzes = [...this.quizCollection.quizzes];//STEP1
  //STEP2
  updatedQuizzes.push({
    quizId: quiz.id,
    created: false, //different, 
    score: quiz.score
  })
  //STEP3
  const updatedQuizCollection = {
    quizzes: updatedQuizzes
  }
  this.quizCollection= updatedQuizCollection;
  return this.save();//STEP4
}

userSchema.methods.deleteQuiz = function(quiz){
  //STEP1 create array of current quizzes
  //STEP2 loop through array and see if quiz from parameter matches any current quizzes
  //STEP3 make value of Stuff equal to new created array
  //STEP4 save

  const updatedQuizzes = [...this.quizCollection.quizzes];//STEP1
  //STEP2
  for (let i=0; i<updatedQuizzes.length; i++) { 
    if (updatedQuizzes[i].quizId == quiz.id) {
      updatedQuizzes.splice(i,1) //at position i, take out 1 (self)
    }
  }
  //STEP3
  const updatedCart = {
    items: updatedCartItems
  };
  this.cart = updatedCart;
  return this.save();//STEP4
}

module.exports = mongoose.model('User', userSchema);







// Starter Stuff provided by Martin

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