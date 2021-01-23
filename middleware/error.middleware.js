exports.errorHandler = (err, req, res, next) => {
  const status = error.statusCode || error.status || 500;

  res.status(status).json({ message: "error", result: { err } });
};
