const router = require("express").Router();

const models = require("../models");
const view = require("../view");

router.post("/signup", async function (req, res, next) {
  const { userId, userPassword } = req.body;

  if (!(userId && userPassword)) {
    return res.status(400).json(view.badRequest());
  }

  try {
    const user = await models.users.getUser(userId); // 없는 경우 null 반환
    // 유저 있으면 충돌
    if (user) {
      return res.status(409).json(view.conflict());
    }

    // 회원 가입 하기
    await models.users.signup(userId, userPassword);

    return res.status(201).json(view.created());
  } catch (err) {
    next(new Error(err));
  }
});

module.exports = router;
