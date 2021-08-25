import mongoose from "mongoose";
import bcrypt from "bcryptjs";

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

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);

  return await bcrypt.hash(password, salt);
};

userSchema.statics.comparePassword = async (
  originalPassword,
  receivedPassword
) => {
  return await bcrypt.compare(originalPassword, receivedPassword);
};

export default model("User", userSchema);
