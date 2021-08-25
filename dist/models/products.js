"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose["default"].Schema,
    model = _mongoose["default"].model;
var productSchema = new Schema({
  name: {
    type: String,
    "default": "undefined"
  },
  category: [{
    type: String,
    "default": "undefined"
  }],
  price: {
    type: Number,
    "default": 0
  },
  quantity: {
    type: Number,
    "default": 0
  },
  image: {
    type: Buffer,
    contentType: String,
    "default": "undefined"
  },
  description: {
    type: String,
    "default": "undefined"
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = model("Product", productSchema);

exports["default"] = _default;