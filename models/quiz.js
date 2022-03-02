const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const QuestionSchema = new Schema(questionSchema);

const quizSchema = new Schema({
  quiz: [
    {
      name: { 
        type: String 
      },
      questions: [QuestionSchema]
    }
  ],
  user: {
    email: {
      type: String,
      required: true
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    }
  }
});

module.exports = mongoose.model('Question', questionSchema);
