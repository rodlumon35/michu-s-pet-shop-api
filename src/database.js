import mongoose from "mongoose";
import env from "dotenv";

env.config();

export const connectionInit = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URL)
    .then((db) => console.log("db connected"))
    .catch((err) => console.error("DB is missing"));
};
