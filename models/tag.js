const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tagSchema = new Schema({
  tagId: {
    name: Number 
  },
  tag: {
    name: String 
  }
});

module.exports = mongoose.model('Tag', tagSchema);
