const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionSchema = new Schema( )

//  ***    I was a little confused by the meeting notes doc in teams of needing a quizId and questionId. Below the schema has the basic structure for the quiz and the user who owns the overall quiz, and then the questions are loaded using the question schema built in that model. Please advise - Amanda    ***
const quizSchema = new Schema({
  quiz: [
    {
      quizId: {
        type: Number,
        required: true
      },
      name: { 
        type: String,
        required: true
      },
      // questions: [QuestionSchema],
      // required: true
      questions: [
        {questionId: {
          type: Schema.Types.ObjectId,
          ref: 'Question',
          required: true
        }}
      ],
      tag: [
        {tagId: {
          type: Schema.Types.ObjectId,
          ref: 'Tag',
        }}
      ]
    }
  ],
  user: {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    }
  }
});

module.exports = mongoose.model('Quiz', quizSchema);
