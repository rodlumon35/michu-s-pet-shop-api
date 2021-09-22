import PurcharseOrders from "../models/PurcharseOrders";
import User from "../models/User";
import Role from "../models/Role";
import Products from "../models/Products";

export const verifyOwner = async (req, res, next) => {
  const loggedUser = await User.findById(req.id);
  const roles = await Role.find({ _id: { $in: loggedUser.roles } });

  try {
    const purcharseOrder = await PurcharseOrders.findOne({
      username: { $in: loggedUser._id },
    });

    if (
      isAdmin(roles) ||
      purcharseOrder.username.toString() === loggedUser._id.toString()
    ) {
      next();
    }
  } catch (error) {
    res.json({
      status: "ERROR",
      data: { message: "unauthorized action", error: error.message },
    });
  }
};

export const setTotal = async (req, res, next) => {
  const productList = req.body.details;

  try {
    let total = 0;
    await Promise.all(
      productList.map(async (id) => {
        let product = await Products.findById(id);
        total += product.price;
      })
    );
    req.purchaseOrderTotal = total;
    req.purchaseOrderStatus = "created";
    next();
  } catch (error) {
    res.json({ status: "ERROR", data: { message: error.message } });
  }
};

export const setStatus = async (req, res, next) => {};

const isAdmin = (roles) => {
  roles.forEach((role) => {
    if (role === "admin") return true;
  });
  return false;
};
