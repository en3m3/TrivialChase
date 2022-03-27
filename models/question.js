const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const questionSchema = new Schema({
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
  tag: {
    type: Schema.Types.ObjectId,
    ref: 'Tag',
    required: false
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
});

module.exports = mongoose.model('Question', questionSchema);
