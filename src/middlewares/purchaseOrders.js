import PurcharseOrders from "../models/PurcharseOrders";
import User from "../models/User";
import Role from "../models/Role";
import Products from "../models/Products";

export const verifyOwner = async (req, res, next) => {
  const loggedUser = await User.findById(req.id);
  const roles = await Role.find({ _id: { $in: user.roles } });
  const purcharseOrder = await PurcharseOrders.find({
    username: { $in: loggedUser._id },
  });

  console.log(loggedUser);
  console.log(roles);
  console.log(purcharseOrder);
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
