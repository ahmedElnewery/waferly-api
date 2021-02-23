const router = require("express").Router()
const {getProducts,addProduct,editProduct,getSingleProducts,deleteProduct} = require("./../controllers/product")


router.get("/", getProducts)
router.get("/:id", getSingleProducts)
router.post("/add",addProduct)
router.put("/edit/:id",editProduct)
router.delete("/delete/:id",deleteProduct)


module.exports = router