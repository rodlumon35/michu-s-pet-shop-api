const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, unique: true },
  category: [String],
  price: Number,
  description: String,
});

module.exports = mongoose.model("Product", productSchema);
