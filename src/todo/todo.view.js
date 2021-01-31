module.exports = {
  success: (result) => ({
    message: "Success",
    result,
  }),
  created: (data) => ({
    message: "Created Success",
    result: { ...data },
  }),
  updated: () => ({
    message: "Updated Success",
    result: {},
  }),
  badRequest: () => ({
    message: "Bad Request",
    result: {},
  }),
  unauthorized: () => ({
    message: "Unauthorized",
    result: {},
  }),
  noContent: () => ({
    message: "No Content",
    result: {},
  }),
  conflict: () => ({
    message: "Conflict",
    result: {},
  }),
};
