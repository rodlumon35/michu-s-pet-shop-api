"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectionInit = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

_mongoose["default"].set("useNewUrlParser", true);

_mongoose["default"].set("useFindAndModify", false);

_mongoose["default"].set("useCreateIndex", true);

_mongoose["default"].set("useUnifiedTopology", true);

var connectionInit = function connectionInit() {
  _mongoose["default"].connect(process.env.DB_URL).then(function (db) {
    return console.log("db connected");
  })["catch"](function (err) {
    return console.error("DB is missing");
  });
};

exports.connectionInit = connectionInit;