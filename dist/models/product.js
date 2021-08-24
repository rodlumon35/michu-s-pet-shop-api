"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var productSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  category: [String],
  price: Number,
  description: String
});
module.exports = mongoose.model("Product", productSchema);