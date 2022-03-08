const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tagSchema = new Schema({
  tag: {
    name: String 
  },
  test: {
    test: String
  }
});

module.exports = mongoose.model('Tag', tagSchema);
