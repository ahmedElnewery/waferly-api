const Product = require("./../models/product");

function getProducts(req, res) {
  Product.find({}, (err, products) => {
    if (err) res.status(400).json(err.message);
    res.status(200).json(products);
  });
}

function addProduct(req, res) {
  const newProduct = new Product({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    imgSrc: req.body.imgSrc,
  });
  newProduct.save((err, product) => {
    if (err) res.status(400).json(err.message);
    res.status(200).json(product);
  });
}
 function editProduct(req, res) {
  const editedProduct = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    imgSrc: req.body.imgSrc,
  };
  Product.findByIdAndUpdate(req.params.id, editedProduct, (err, product) => {
    if (!err) {
      if (product !== null) {
        res.status(200).json(product);
      } else {
        res.status(404).json("this product can't edit ");
      }
    } else {
      res.status(404).json("can't find product with that id");
    }
  });
}

function getSingleProducts(req, res) {
  Product.findOne({ _id: req.params.id }, (err, product) => {
    if (!err) {
      if (product !== null) {
        res.status(200).json(product);
      } else {
        res.status(404).json("this product can't found ");
      }
    } else {
      res.status(404).json(err.message);
    }
  });
}

function deleteProduct(req, res) {
  Product.deleteOne({ _id: req.params.id }, (err, product) => {
    console.log(product)
    if (!err) {
      if (product.deletedCount !== 0) {
        res.status(200).json("successfully deleted");
      } else {
        res.status(404).json("this product has been deleted before");
      }
    } else {
      res.status(404).json("can't find product with that id");
    }
  });
}
module.exports = {
  getProducts,
  addProduct,
  editProduct,
  getSingleProducts,
  deleteProduct,
};
