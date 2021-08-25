"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var productRoutes = _interopRequireWildcard(require("./routes/products.routes.js"));

var authRoutes = _interopRequireWildcard(require("./routes/auth.routes.js"));

var _database = require("./database.js");

var _initialSettings = require("./libs/initialSettings.js");

var _package = _interopRequireDefault(require("../package.json"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// initializations
var app = (0, _express["default"])();
(0, _database.connectionInit)();
(0, _initialSettings.createRoles)(); // Settings

app.set("PORT", process.env.PORT || 5000);
app.set("pkg", _package["default"]); // Middleware

app.use((0, _morgan["default"])("dev"));
app.use((0, _cors["default"])());
app.use(_express["default"].json()); // Welcome Routes

app.get("/", function (req, res) {
  res.json({
    message: "Welcome Michu's Pet Shop API",
    name: app.get("pkg").name,
    version: app.get("pkg").version,
    description: app.get("pkg").description,
    author: app.get("pkg").author
  });
}); // Routes

app.use("/api/products", productRoutes.router);
app.use("/api/auth", authRoutes.router); // Server start

app.listen(app.get("PORT"), function () {
  console.log("running server on http://localhost:".concat(app.get("PORT")));
});