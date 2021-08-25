import { Schema, model } from "mongoose";

new Schema({ name: { type: String, default: "user" } }, { versionKey: false });

export default model.Schema("Role", roleSchema);
