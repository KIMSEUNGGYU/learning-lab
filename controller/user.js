const router = require("express").Router();
const view = require("../view");

let user;
router.post("/signup", function (req, res, next) {
  const { userId, userPassword } = req.body;

  if (!(userId && userPassword)) {
    return res.status(400).json(view.badRequest());
  }

  if (user === userId) {
    return res.status(409).json(view.conflict());
  }

  user = userId;
  return res.status(201).json(view.created());
});

module.exports = router;
