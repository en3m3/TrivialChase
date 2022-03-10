// The Score Model
const mongoose = require('mongoose');

module.exports = function(mongoose) {
	var Schema = mongoose.Schema;
	var ObjectId = Schema.ObjectId;

	var schema = new Schema({
		username: String,
		score: Number,
		date: {type: Date, default: Date.now},
		email: String
	});

	this.model = mongoose.model('Score', schema);

	return this;
};  