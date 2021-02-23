const User = require("../models/User");


function register(req, res) {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  newUser.save((err, user) => {
    if (err) res.status(400).json(err.message);
    res.status(200).json(user);
  });
}
 

function auth(req, res) {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!err) {
      if (user !== null) {
        res.status(200).json(user);
      } else {
        res.status(404).json("this user Not Registered!! ");
      }
    } else {
      res.status(404).json(err.message);
    }
  });
}


module.exports = {
    register,
    auth
  
};
