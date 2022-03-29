const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tagSchema = new Schema({
  tag: {
    type: String 
  }
});

module.exports = mongoose.model('Tag', tagSchema);
