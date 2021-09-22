import { ROLES } from "../models/Role";

export const checkRoleExists = (req, res, next) => {
  const userRoles = req.body.roles;
  let roleExists = false;
  let failedRoles = [];

  userRoles.forEach((role) => {
    if (ROLES.includes(role)) {
      roleExists = true;
    } else {
      roleExists = false;
      failedRoles.push(role);
    }
  });

  if (roleExists) {
    next();
  } else {
    res.json({
      status: "ERROR",
      data: { message: "Role does not exist", roles: failedRoles },
    });
  }
};
