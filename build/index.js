"use strict";

require("dotenv").config();

var express = require("express");

var morgan = require("morgan");

var path = require("path");

var cors = require("cors");

var app = express();

var _require = require("./database"),
    mongoose = _require.mongoose; // Settings


app.set("PORT", process.env.PORT || 5000); // Middleware

app.use(morgan("dev"));
app.use(cors());
app.use(express.json()); // Routes

app.use("/api/products", require("./routes/products.routes.js")); // Server start

app.listen(app.get("PORT"), function () {
  console.log("running server on http://localhost:".concat(app.get("PORT")));
});