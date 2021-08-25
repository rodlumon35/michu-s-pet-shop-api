import Product from "../models/Products.js";

export const createNewProduct = async (req, res) => {
  const { name, price, description, category, quantity, image } = req.body;
  const product = await new Product({
    name,
    price,
    description,
    category,
    quantity,
  });

  if (name && price && description && category && quantity && image) {
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
};

export const getAllProducts = async (req, res) => {
  const productList = await Product.find();
  res.json(productList);
};

export const getProductsByName = async (req, res) => {
  const products = await Product.find({ name: req.params.name });

  if (products) {
    res.json({ status: "SUCCESS", productList: products });
  } else {
    res.json({ status: "ERROR", message: "Products not found" });
  }
};

// esto se rompe, presuntamente por el length del id
export const getProductsById = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json({ status: "SUCCESS", data: [{ product: product }] });
  } else {
    res.json({ status: "ERROR", message: "Product not found" });
  }
};

export const getProductsByCategories = async (req, res) => {
  const categories = req.params.category.split("-");
  console.log(categories);
  const products = await Product.find({ category: { $all: categories } });

  if (products) {
    res.json({ status: "SUCCESS", data: [{ productList: products }] });
  } else {
    res.json({ status: "ERROR", message: "Products not found" });
  }
};

export const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await Product.findByIdAndRemove(req.params.id);
    res.json({ status: "SUCCESS", message: "Product deleted successfully" });
  } else {
    res.json({ status: "ERROR", message: "Product not found" });
  }
};

export const editProduct = async (req, res) => {
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
};
