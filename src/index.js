import express from "express";
import morgan from "morgan";
import cors from "cors";
import * as productRoutes from "./routes/products.routes.js";
import * as authRoutes from "./routes/auth.routes.js";
import { connectionInit } from "./database.js";
import { createRoles } from "./libs/initialSettings.js";
import pkg from "../package.json";

// initializations
const app = express();
connectionInit();
createRoles();

// Settings
app.set("APPLICATION_PORT", process.env.PORT || 5000);
app.set("pkg", pkg);

// Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Welcome Routes
app.get("/", (req, res) => {
  res.json({
    message: "Welcome Michu's Pet Shop API",
    name: app.get("pkg").name,
    version: app.get("pkg").version,
    description: app.get("pkg").description,
    author: app.get("pkg").author,
  });
});

// Routes
app.use("/api/products", productRoutes.router);
app.use("/api/auth", authRoutes.router);

// Server start
app.listen(app.get("APPLICATION_PORT"), () => {
  console.log(`running server on http://localhost:${app.get("APPLICATION_PORT")}`);
});
