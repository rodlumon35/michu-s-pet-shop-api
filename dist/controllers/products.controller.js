"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editProduct = exports.deleteProduct = exports.getProductsByCategories = exports.getProductsById = exports.getProductsByName = exports.getAllProducts = exports.createNewProduct = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Products = _interopRequireDefault(require("../models/Products.js"));

var createNewProduct = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, name, price, description, category, quantity, image, product;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, price = _req$body.price, description = _req$body.description, category = _req$body.category, quantity = _req$body.quantity, image = _req$body.image;
            _context.next = 3;
            return new _Products["default"]({
              name: name,
              price: price,
              description: description,
              category: category,
              quantity: quantity
            });

          case 3:
            product = _context.sent;

            if (!(name && price && description && category && quantity && image)) {
              _context.next = 11;
              break;
            }

            _context.next = 7;
            return product.save();

          case 7:
            if (!_context.sent) {
              _context.next = 9;
              break;
            }

            res.json({
              status: "SUCCESS",
              product: product,
              message: "Product created successfully"
            });

          case 9:
            _context.next = 12;
            break;

          case 11:
            res.json({
              status: "ERROR",
              message: "Invalid product"
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createNewProduct(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createNewProduct = createNewProduct;

var getAllProducts = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var productList;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Products["default"].find();

          case 2:
            productList = _context2.sent;
            res.json(productList);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getAllProducts(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getAllProducts = getAllProducts;

var getProductsByName = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var products;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Products["default"].find({
              name: req.params.name
            });

          case 2:
            products = _context3.sent;

            if (products) {
              res.json({
                status: "SUCCESS",
                productList: products
              });
            } else {
              res.json({
                status: "ERROR",
                message: "Products not found"
              });
            }

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getProductsByName(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); // esto se rompe, presuntamente por el length del id


exports.getProductsByName = getProductsByName;

var getProductsById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var product;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _Products["default"].findById(req.params.id);

          case 2:
            product = _context4.sent;

            if (product) {
              res.json({
                status: "SUCCESS",
                data: [{
                  product: product
                }]
              });
            } else {
              res.json({
                status: "ERROR",
                message: "Product not found"
              });
            }

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getProductsById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getProductsById = getProductsById;

var getProductsByCategories = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var categories, products;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            categories = req.params.category.split("-");
            console.log(categories);
            _context5.next = 4;
            return _Products["default"].find({
              category: {
                $all: categories
              }
            });

          case 4:
            products = _context5.sent;

            if (products) {
              res.json({
                status: "SUCCESS",
                data: [{
                  productList: products
                }]
              });
            } else {
              res.json({
                status: "ERROR",
                message: "Products not found"
              });
            }

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function getProductsByCategories(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getProductsByCategories = getProductsByCategories;

var deleteProduct = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var product;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _Products["default"].findById(req.params.id);

          case 2:
            product = _context6.sent;

            if (!product) {
              _context6.next = 9;
              break;
            }

            _context6.next = 6;
            return _Products["default"].findByIdAndRemove(req.params.id);

          case 6:
            res.json({
              status: "SUCCESS",
              message: "Product deleted successfully"
            });
            _context6.next = 10;
            break;

          case 9:
            res.json({
              status: "ERROR",
              message: "Product not found"
            });

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function deleteProduct(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteProduct = deleteProduct;

var editProduct = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var _product, product;

    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _Products["default"].find({
              _id: req.params.id
            });

          case 2:
            _product = _context7.sent;
            _context7.next = 5;
            return _Products["default"].findByIdAndUpdate(req.params.id, req.body);

          case 5:
            _context7.next = 7;
            return _Products["default"].find({
              _id: req.params.id
            });

          case 7:
            product = _context7.sent;
            res.json({
              status: "SUCCESS",
              message: "Product update successfully",
              data: [{
                old: _product,
                "new": product
              }]
            });

          case 9:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function editProduct(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.editProduct = editProduct;