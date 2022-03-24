// Tokens model

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tokenSchema = new Schema(
    {
        Token: {
            type: String,
            required: true
        },
        TokenExpiration: {
            type: Date,
            required: true
        }
    }
);

module.exports = mongoose.model('Token', tokenSchema);
