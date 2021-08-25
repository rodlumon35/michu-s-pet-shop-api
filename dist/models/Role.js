"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose["default"].Schema,
    model = _mongoose["default"].model;
var roleSchema = new Schema({
  name: {
    type: String,
    "default": "user"
  }
}, {
  versionKey: false
});

var _default = model("Role", roleSchema);

exports["default"] = _default;