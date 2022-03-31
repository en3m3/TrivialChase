// The Score Model
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scoreSchema = new Schema({
	username: {
		type: String,
		required: true,
		ref: 'User'
	},
	email: {
		type: String,
		required: true,
		ref: 'User'
	},
	score: {
		type: Number,
		required: true
	},
	date: {
		type: Date,
		format: String,
		default: Date.now
	},
	user: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'User'
	},
	quiz: {
			type: Schema.Types.ObjectId,
			ref: 'Quiz',
			required: true
		},
});


module.exports = mongoose.model("Score", scoreSchema);