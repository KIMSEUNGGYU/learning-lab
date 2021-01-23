module.exports = {
  sucess: (data) => ({
    message: "Success",
    result: { data },
  }),
  created: () => ({
    message: "Created Success",
    result: {},
  }),
  updated: () => ({
    message: "Updated Success",
    result: {},
  }),
  badRequest: () => ({
    message: "Bad Request",
    result: {},
  }),
  // badRequest: (res) =>
  //   res.status(400).json({
  //     message: "Bad Request",
  //     result: {},
  //   }),
  unauthorized: () => ({
    message: "Unauthorized",
    result: {},
  }),
  noContent: () => ({
    message: "Success - No Content",
    result: {},
  }),
  conflict: () => ({
    message: "Conflict",
    result: {},
  }),
};
