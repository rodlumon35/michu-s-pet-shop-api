import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: Number,
    roles: [{ ref: "Role", type: Schema.Types.ObjectId }],
  },
  { timestamps: true, versionKey: false }
);

export default model("User", userSchema);
