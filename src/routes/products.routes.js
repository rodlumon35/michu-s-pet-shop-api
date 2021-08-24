const express = require("express");
const router = express.Router();
const Product = require("../models/product");

//list all products
router.get("/", async (req, res) => {
  const productList = await Product.find();
  res.json(productList);
});

//get product by id
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json({ status: "SUCCESS", data: [{ product: product }] });
  } else {
    res.json({ status: "ERROR", message: "Product not found" });
  }
});

//get product by name
router.get("/name/:name", async (req, res) => {
  const products = await Product.find({ name: req.params.name });

  if (products) {
    res.json({ status: "SUCCESS", productList: products });
  } else {
    res.json({ status: "ERROR", message: "Products not found" });
  }
});

//get product by category
router.get("/category/:category", async (req, res) => {
  const categories = req.params.category.split("-");
  console.log(categories);
  const products = await Product.find({ category: { $all: categories } });

  if (products) {
    res.json({ status: "SUCCESS", data: [{ productList: products }] });
  } else {
    res.json({ status: "ERROR", message: "Products not found" });
  }
});

//create a new product
router.post("/", async (req, res) => {
  const product = new Product(req.body);

  if (
    product.name &&
    product.price &&
    product.description &&
    product.category
  ) {
    if (await product.save())
      res.json({
        status: "SUCCESS",
        product: product,
        message: "Product created successfully",
      });
  } else {
    res.json({
      status: "ERROR",
      message: "Invalid product",
    });
  }
});

//edit product
router.put("/:id", async (req, res) => {
  const _product = await Product.find({ _id: req.params.id });
  await Product.findByIdAndUpdate(req.params.id, req.body);
  const product = await Product.find({ _id: req.params.id });

  res.json({
    status: "SUCCESS",
    message: "Product update successfully",
    data: [
      {
        old: _product,
        new: product,
      },
    ],
  });
});

//delete product
router.delete("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await Product.findByIdAndRemove(req.params.id);
    res.json({ status: "SUCCESS", message: "Product deleted successfully" });
  } else {
    res.json({ status: "ERROR", message: "Product not found" });
  }
});

module.exports = router;
