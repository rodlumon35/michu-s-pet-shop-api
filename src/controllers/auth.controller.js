import User from "../models/User.js";
import config from "../config.js";
import jwt from "jsonwebtoken";
import Role from "../models/Role.js";

export const signup = async (req, res) => {
  const { username, password, phone, roles } = req.body;

  if ((await getUser(username)) === null) {
    const user = new User({
      username,
      password: await User.encryptPassword(password),
      phone,
    });

    if (roles) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      user.roles = foundRoles.map((role) => role._id);
    } else {
      const { _id } = await Role.findOne({ name: "user" });
      user.roles = [_id];
    }

    const savedUser = await user.save();
    const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
      expiresIn: 43200,
    });

    if (savedUser) {
      res.json({
        status: "SUCCESS",
        data: {
          token: token,
          user: savedUser,
          message: "User created successfully",
        },
      });
    } else {
      res.json({
        status: "ERROR",
        data: {
          message: "User can't be created",
        },
      });
    }
  } else {
    res.json({
      status: "ERROR",
      data: {
        message: "Username already exists",
      },
    });
  }
};

export const signin = async (req, res) => {
  const user = await getUser(req.body.username);

  if (user === null)
    return res.status({
      status: "ERROR",
      data: { message: "Username was not found" },
    });

  if (await User.comparePassword(req.body.password, user.password)) {
    const token = await jwt.sign({ id: user._id }, config.SECRET, {
      expiresIn: 43200,
    });
    res.json({ status: "SUCCESS", data: { message: "user found", token } });
  } else {
    res.json({
      status: "ERROR",
      data: { message: "Invalid password", token: "Invalid Token" },
    });
  }
};

const getUser = async (username) => {
  return await User.findOne({ username: username }).populate("roles");
};
