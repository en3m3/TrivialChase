const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tagSchema = new Schema({
  tagId: {
    type: Number 
  },
  tag: {
    type: String 
  }
});

module.exports = mongoose.model('Tag', tagSchema);
