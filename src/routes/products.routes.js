import express from "express";
import * as ProductController from "../controllers/products.controller.js";
import * as authJwt from "../middlewares/authJwt.js";

export const router = express.Router();

//get all products
router.get("/", ProductController.getAllProducts);

//get product by id
router.get("/:id", ProductController.getProductsById);

//get product by name
router.get("/name/:name", ProductController.getProductsByName);

//get product by category
router.get("/category/:category", ProductController.getProductsByCategories);

//create a new product
router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  ProductController.createNewProduct
);

//edit product
router.put(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  ProductController.editProduct
);

//delete product
router.delete(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  ProductController.deleteProduct
);
