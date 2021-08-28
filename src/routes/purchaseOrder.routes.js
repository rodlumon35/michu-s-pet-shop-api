import express from "express";
import * as PurcharseOrders from "../controllers/purcharseOrders.controller";
import * as authJwt from "../middlewares/authJwt.js";
import * as purchaseOrdersMiddleware from "../middlewares/purchaseOrders";

export const router = express.Router();

router.get(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  PurcharseOrders.listAllPurchaseOrders
);

router.get(
  "/:id",
  [authJwt.verifyToken, purchaseOrdersMiddleware.verifyOwner],
  PurcharseOrders.viewPurchaseOrder
);

router.post(
  "/",
  [authJwt.verifyToken, purchaseOrdersMiddleware.setTotal],
  PurcharseOrders.createNewPurchaseOrder
);

router.put(
  "/:id",
  [authJwt.verifyToken, purchaseOrdersMiddleware.verifyOwner],
  PurcharseOrders.editPurchaseOrder
);

router.delete(
  "/:id",
  [authJwt.verifyToken, purchaseOrdersMiddleware.verifyOwner],
  PurcharseOrders.deletePurchaseOrder
);
