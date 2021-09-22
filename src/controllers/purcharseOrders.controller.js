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
    if (purchaseOrder.save()) {
      res.json({ status: "SUCCESS", data: { purchaseOrder } });
    } else {
      res.json({
        status: "ERROR",
        data: { message: "Purchase order can't be created" },
      });
    }
  } catch (error) {
    res.json({ status: "ERROR", data: { message: error.message } });
  }
};

export const editPurchaseOrder = async (req, res) => {
  let { address, details } = req.body;
  const _purchaseOrder = await PurcharseOrders.findById(req.params.id);

  if (address === null) address = _purchaseOrder.address;
  if (details === null) details = _purchaseOrder.details;

  try {
    await PurcharseOrders.findByIdAndUpdate(req.params.id, {
      address,
      details,
    });
    const purcharseOrder = await PurcharseOrders.findById(req.params.id);

    res.json({
      status: "OK",
      data: {
        message: "Purchase order editting",
        purcharseOrder,
        _purchaseOrder,
      },
    });
  } catch (error) {
    res.json({ status: "ERROR", data: { message: error.message } });
  }
};

export const deletePurchaseOrder = async (req, res) => {
  res.json({ status: "ERROR", data: { message: "Purchase order deleting" } });
};

//export const completePurchaseOrder = async (req, res) => {};
