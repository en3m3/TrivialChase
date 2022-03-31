const User = require('../models/user');

module.exports = (req, res, next) => {
    console.log(req.params);
    User.find({token: req.body.token})
        .then(user => {
            console.log(user);
            if (user.admin != true || !user) {
                console.log("must be admin to use that command");
                return res.json({ message: "must be admin to use that command" });
            }
            next();
        });
};