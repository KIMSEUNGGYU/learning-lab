exports.notFoundHandler = (req, res, next) => {
  const message = "Rosource Not Found";

  res.status(404).json({ message, result: {} });
};
