import Role from "../models/Role.js";

export const createRoles = async () => {
  try {
    if ((await Role.estimatedDocumentCount()) === 0) {
      const roles = await Promise.all([
        new Role({ name: "admin" }).save(),
        new Role({ name: "user" }).save(),
      ]);
      console.log(roles);
    }
  } catch (error) {
    console.error(error);
  }
};
