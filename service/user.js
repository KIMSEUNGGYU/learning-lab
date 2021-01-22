const models = require("../models");
const { conflict } = require("../view");

module.exports = {
  vaildation(userId, userPassword) {
    return !(userId && userPassword);
  },

  async userConflict(userId) {
    try {
      const user = await models.users.getUser(userId);
      if (user && user.userId === userId) {
      }
    } catch (err) {
      console.log("err", err);
      // next(new Error(err));
    }

    // try {
    //   const response = models.users.signup();
    //   return response;
    // } catch (error) {}
  },
};
