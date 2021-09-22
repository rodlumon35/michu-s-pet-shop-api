import User from "../models/User";
import Role from "../models/Role";

export const createUser = async (req, res) => {
  const { username, password, roles } = req.body;

  const user = new User({
    username,
    password: await User.encryptPassword(password),
    roles,
  });

  if (roles) {
    const foundRoles = await Role.find({ name: { $in: roles } });
    user.roles = foundRoles.map((role) => role._id);
  } else {
    const { _id } = await Role.findOne({ name: "user" });
    user.roles = [_id];
  }

  if (user.username && user.password && user.roles) {
    try {
      await user.save();
      res.json({
        status: "SUCCESS",
        data: {
          user,
          message: "User created successfully",
        },
      });
    } catch (error) {
      res.json({
        status: "ERROR",
        data: { message: error.message },
      });
    }
  } else {
    res.json({
      status: "ERROR",
      message: "Missing data",
    });
  }
};

export const showAllUsers = async (req, res) => {
  const userList = await User.find();
  res.json({ status: "SUCCESS", data: { userList } });
};
