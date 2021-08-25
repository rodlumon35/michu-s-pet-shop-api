import { Schema, model } from "mongoose";

new Schema({ name: String }, { versionKey: false });

export default model.Schema("Role", roleSchema);
