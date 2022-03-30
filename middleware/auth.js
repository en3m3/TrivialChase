

const User = require('../models/user');

module.exports = (req, res, next) => {
    User.findById(req.params.id)
        .then(user => {
            console.log(user);
            if (user.token != req.body.token) {
                console.log("invalid token or user");
                return res.json({ message: "invalid token or user" });
            }
            next();
        });
};