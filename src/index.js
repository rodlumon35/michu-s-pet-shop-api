import express from "express";
import morgan from "morgan";
import cors from "cors";
import * as productRoutes from "./routes/products.routes.js";
import * as authRoutes from "./routes/auth.routes.js";
import { connectionInit } from "./database.js";
import { createRoles } from "./libs/initialSettings.js";

// initializations
const app = express();
connectionInit();
createRoles();

// Settings
app.set("PORT", process.env.PORT || 5000);

// Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes.router);
app.use("/api/auth", authRoutes.router);

// Server start
app.listen(app.get("PORT"), () => {
  console.log(`running server on http://localhost:${app.get("PORT")}`);
});
