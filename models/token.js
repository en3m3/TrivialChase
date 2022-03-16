// Tokens model

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tokenSchema = new Schema(
    {
        Token: String,
        TokenExpiration: Date,
    }
);

module.exports = mongoose.model('Token', tokenSchema);
