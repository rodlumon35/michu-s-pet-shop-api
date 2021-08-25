import mongoose from "mongoose";
const { Schema, model } = mongoose;

const roleSchema = new Schema(
  { name: { type: String, default: "user" } },
  { versionKey: false }
);

export default model("Role", roleSchema);
