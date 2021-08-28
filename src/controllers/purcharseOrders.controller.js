import PurcharseOrders from "../models/PurcharseOrders";

export const listAllPurchaseOrders = async (req, res) => {
  try {
    const purchaseOrdersList = await PurcharseOrders.find();
    res.json({ status: "SUCCESS", data: purchaseOrdersList });
  } catch (error) {
    res.json({ status: "ERROR", message: error.message });
  }
};

export const viewPurchaseOrder = async (req, res) => {};

export const createNewPurchaseOrder = async (req, res) => {
  try {
    const { address, details } = req.body;
    const purchaseOrder = await new PurcharseOrders({
      username: req.id,
      details,
      total: req.purchaseOrderTotal,
      address,
      status: req.purchaseOrderStatus,
    });
    res.json({ status: "SUCCESS", data: { purchaseOrder } });
  } catch (error) {
    res.json({ status: "ERROR", data: { message: error.message } });
  }
};

export const editPurchaseOrder = async (req, res) => {};

export const deletePurchaseOrder = async (req, res) => {};

//export const completePurchaseOrder = async (req, res) => {};
