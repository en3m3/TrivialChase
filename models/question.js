const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const TagSchema = new Schema(tagSchema);
const questionSchema = new Schema({
  question:
    {
      questionId: {
        type: Number,
        required: true
      },
      question: { 
        type: String 
      },
      answer: { 
        type: String 
      },
      wrong: {
        wrong1: { 
        type: String 
        },
        wrong2: { 
          type: String 
        },
        wrong3: {
          type: String 
        }
      },
      questionType: {
        type: String,
        enum: ['multi','input','category','jeopardy']
      },
      // tag: [TagSchema] //not necessary, question tags != quiz tags
    }
  ,
  user: {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    }
  }
});

module.exports = mongoose.model('Question', questionSchema);
