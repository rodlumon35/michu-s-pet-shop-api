"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRoles = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Role = _interopRequireDefault(require("../models/Role.js"));

var createRoles = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var roles;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Role["default"].estimatedDocumentCount();

          case 3:
            _context.t0 = _context.sent;

            if (!(_context.t0 === 0)) {
              _context.next = 9;
              break;
            }

            _context.next = 7;
            return Promise.all([new _Role["default"]({
              name: "admin"
            }).save(), new _Role["default"]({
              name: "user"
            }).save()]);

          case 7:
            roles = _context.sent;
            console.log(roles);

          case 9:
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t1 = _context["catch"](0);
            console.error(_context.t1);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function createRoles() {
    return _ref.apply(this, arguments);
  };
}();

exports.createRoles = createRoles;