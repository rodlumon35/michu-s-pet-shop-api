import mongoose from "mongoose";
import env from "dotenv";

env.config();
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

export const connectionInit = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URL)
    .then((db) => console.log("db connected"))
    .catch((err) => console.error("DB is missing"));
};
