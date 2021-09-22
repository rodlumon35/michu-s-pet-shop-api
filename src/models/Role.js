import mongoose from "mongoose";

const { Schema, model } = mongoose;
export const ROLES = ["admin", "user"];

const roleSchema = new Schema(
  { name: { type: String, default: "user" } },
  { versionKey: false }
);

export default model("Role", roleSchema);
