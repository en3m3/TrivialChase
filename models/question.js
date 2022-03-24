const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const TagSchema = new Schema(tagSchema);
const questionSchema = new Schema({
  question:
    {
      question: { 
        type: String 
      },
      answer: { 
        type: String 
      },
      wrong1: { 
        type: String 
      },
      wrong2: { 
        type: String 
      },
      wrong3: {
         type: String 
      },
      type: {
        type: String,
        enum: ['multi','input','category','jeopardy']
      },
      tag: [TagSchema]
    }
  ,
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
