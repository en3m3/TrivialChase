const User = require('../models/user');

module.exports = (req, res, next) => {
    console.log(req.body);
    if(req.body.token) {
        User.findOne({token: req.body.token}).lean()
        .then(user =>{
            if(user) {
                console.log("valid token or user");
                next();
            } else{
                console.log("invalid token or user");
                return res.json({ message: "invalid token or user" });
            }
        });
    }
};