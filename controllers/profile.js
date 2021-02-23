const User = require("./../models/User");

function getUserDetails(req, res) {
  User.findOne({ userName: req.params.userName }, (err, user) => {
    if (!err) {
      if (user !== null) {
        res.status(200).json(user);
      } else {
        res.status(404).json("this user can't found ");
      }
    } else {
      res.status(404).json(err.message);
    }
  });
}
  function editUser(req, res) {
    const editedUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };
    User.findByIdAndUpdate(req.params.id, editedUser, (err, user) => {
      if (!err) {
        if (user !== null) {
          res.status(200).json(user);
        } else {
          res.status(404).json("this user can't edit ");
        }
      } else {
        res.status(404).json("can't find user with that id");
      }
    });
  }
  function deleteUser(req, res) {
    User.deleteOne({ userName: req.body.userName }, (err, user) => {
      console.log(user)
      if (!err) {
        if (user.deletedCount !== 0) {
          res.status(200).json("successfully deleted");
        } else {
          res.status(404).json("this User has been deleted before");
        }
      } else {
        res.status(404).json("can't find User with that id");
      }
    });
  }
  module.exports = {
    getUserDetails,
    editUser,
    deleteUser
};
