const router = require("express").Router();
const {
  getUserDetails,
  editUser,
  deleteUser,
} = require("./../controllers/profile");

router.get("/:userName",getUserDetails);
router.put("/edit", editUser);

router.delete("/delete/:userName", deleteUser);

module.exports = router;
