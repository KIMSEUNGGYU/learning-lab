/**
 * Data Model Interfaces
 */

/**
 * In-Memory Store
 */
// const users = [
//   {
//     userId: "gyuu6",
//     password: "password",
//   },
//   {
//     userId: "test",
//     password: "password",
//   },
// ];
const users = [];

/**
 * Service Methods
 */
exports.findAll = async () => users;
exports.find = async ({ ..._user }) =>
  users.find((user) => JSON.stringify(user) === JSON.stringify(_user));
exports.findById = async (userId) =>
  users.find((user) => user.userId === userId);

exports.create = async (newUser) => {
  users.push(newUser);
  return users[-1];
};
