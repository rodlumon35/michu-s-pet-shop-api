import mongoose from "mongoose";

const { Schema, model } = mongoose;

const purcharseOrderSchema = new Schema(
  {
    username: { ref: "User", type: Schema.Types.ObjectId },
    details: [{ ref: "Products", type: Schema.Types.ObjectId }],
    total: { type: Number, default: 0 },
    address: { type: String, required: true },
    status: { type: String, required: true, default: "created" },
  },
  { timestamps: true, versionKey: false }
);

export default model("PurcharseOrder", purcharseOrderSchema);
