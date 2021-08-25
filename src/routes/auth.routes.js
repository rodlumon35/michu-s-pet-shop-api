import express from "express";
import * as AuthController from "../controllers/auth.controller.js";

export const router = express.Router();

router.post("/signin", AuthController.signin);

router.post("/signup", AuthController.signup);
