"use strict";

var mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect(process.env.DB_LOCAL_URL).then(function (db) {
  return console.log("db connected");
})["catch"](function (err) {
  return console.error("DB is missing");
});
module.exports = mongoose;