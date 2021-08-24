import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, unique: true },
  category: [String],
  price: Number,
  description: String,
});

export const Product = mongoose.model("Product", productSchema);
