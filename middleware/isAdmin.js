const User = require('../models/user');

module.exports = (req, res, next) => {
    User.findById(req.params.id)
        .then(user => {
            console.log(user);
            if (user.admin != true) {
                console.log("must be admin to use that command");
                return res.json({ message: "must be admin to use that command" });
            }
            next();
        });
};