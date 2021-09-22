import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/User";
import Role from "../models/Role";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["access-token"];

    if (!token)
      return res.json({
        status: "ERROR",
        data: { token, message: "Token missing" },
      });

    const tokenSecret = jwt.verify(token, config.SECRET);
    req.id = tokenSecret.id;
    const loggedUser = await User.findById(tokenSecret.id);

    if (!loggedUser)
      return res.json({ status: "ERROR", data: { message: "User not found" } });

    next();
  } catch (error) {
    res.json({ status: "ERROR", data: { message: error.message } });
  }
};

export const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.id);
  const roles = await Role.find({ _id: { $in: user.roles } });

  roles.forEach((r) => {
    r.name === "admin"
      ? next()
      : res.json({ status: "ERROR", data: { message: "unauthorized action" } });
  });
};
