"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signin = exports.signup = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../models/User.js"));

var _config = _interopRequireDefault(require("../config.js"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _Role = _interopRequireDefault(require("../models/Role.js"));

var signup = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, username, password, phone, roles, user, foundRoles, _yield$Role$findOne, _id, savedUser, token;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, username = _req$body.username, password = _req$body.password, phone = _req$body.phone, roles = _req$body.roles;
            _context.next = 3;
            return getUser(username);

          case 3:
            _context.t0 = _context.sent;

            if (!(_context.t0 === null)) {
              _context.next = 32;
              break;
            }

            _context.t1 = _User["default"];
            _context.t2 = username;
            _context.next = 9;
            return _User["default"].encryptPassword(password);

          case 9:
            _context.t3 = _context.sent;
            _context.t4 = phone;
            _context.t5 = {
              username: _context.t2,
              password: _context.t3,
              phone: _context.t4
            };
            user = new _context.t1(_context.t5);

            if (!roles) {
              _context.next = 20;
              break;
            }

            _context.next = 16;
            return _Role["default"].find({
              name: {
                $in: roles
              }
            });

          case 16:
            foundRoles = _context.sent;
            user.roles = foundRoles.map(function (role) {
              return role._id;
            });
            _context.next = 25;
            break;

          case 20:
            _context.next = 22;
            return _Role["default"].findOne({
              name: "user"
            });

          case 22:
            _yield$Role$findOne = _context.sent;
            _id = _yield$Role$findOne._id;
            user.roles = [_id];

          case 25:
            _context.next = 27;
            return user.save();

          case 27:
            savedUser = _context.sent;
            token = _jsonwebtoken["default"].sign({
              id: savedUser._id
            }, _config["default"].SECRET, {
              expiresIn: 43200
            });

            if (savedUser) {
              res.json({
                status: "SUCCESS",
                data: {
                  token: token,
                  user: savedUser,
                  message: "User created successfully"
                }
              });
            } else {
              res.json({
                status: "ERROR",
                data: {
                  message: "User can't be created"
                }
              });
            }

            _context.next = 33;
            break;

          case 32:
            res.json({
              status: "ERROR",
              data: {
                message: "Username already exists"
              }
            });

          case 33:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function signup(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.signup = signup;

var signin = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            res.json("signin");

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function signin(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.signin = signin;

var getUser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(username) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _User["default"].findOne({
              username: username
            });

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getUser(_x5) {
    return _ref3.apply(this, arguments);
  };
}();