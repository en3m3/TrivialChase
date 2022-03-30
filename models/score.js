// The Score Model
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scoreSchema = new Schema({
	scoreId: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
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
		userId: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'User'
		}
	},
	quiz:
		{quizId: {
			type: Schema.Types.ObjectId,
			ref: 'Quiz',
			required: true
		}},
});


module.exports = mongoose.model("Score", scoreSchema);