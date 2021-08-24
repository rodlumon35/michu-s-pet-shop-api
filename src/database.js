const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.DB_LOCAL_URL)
  .then((db) => console.log("db connected"))
  .catch((err) => console.error("DB is missing"));

module.exports = mongoose;
