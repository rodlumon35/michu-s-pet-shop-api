require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const app = express();
const { mongoose } = require("./database");

// Settings
app.set("PORT", process.env.PORT || 5000);

// Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", require("./routes/products.routes.js"));

// Server start
app.listen(app.get("PORT"), () => {
  console.log(`running server on http://localhost:${app.get("PORT")}`);
});
