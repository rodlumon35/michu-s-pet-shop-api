import mongoose from "mongoose";
const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    name: { type: String, default: "undefined" },
    category: [{ type: String, default: "undefined" }],
    price: { type: Number, default: 0 },
    quantity: { type: Number, default: 0 },
    image: { type: Buffer, contentType: String, default: "undefined" },
    description: { type: String, default: "undefined" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Product", productSchema);
