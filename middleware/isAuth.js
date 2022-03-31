const User = require('../models/user');

module.exports = (req, res, next) => {
    console.log(req.headers);
    if(req.headers.token) {
        User.findOne({token: req.headers.token})
        .then(user =>{
            if(user && user.tokenexpiration > Date.now()) {
                console.log("valid token");
                next();
            } else{
                console.log("invalid token or user");
                return res.json({ message: "invalid token or user" });
            }
        });
    }
};