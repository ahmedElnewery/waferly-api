const router = require("express").Router()
const {register,auth} = require("./../controllers/auth")


router.post("/signup", register)
router.post("/login", auth)



module.exports = router