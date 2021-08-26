import express from "express";
import * as UserController from "../controllers/user.controller";
import * as authJwt from "../middlewares/authJwt";
import { checkRoleExists } from "../middlewares/verifyUser";

export const router = express.Router();

router.get(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  UserController.showAllUsers
);

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  UserController.createUser
);

router.put(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdmin, checkRoleExists],
  UserController.showAllUsers
);

router.delete(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  UserController.showAllUsers
);
