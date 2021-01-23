/**
 * Required External Modules and Interfaces
 */
const express = require("express");
const userService = require("./user.service");

/**
 * Router Definition
 */
const router = express.Router();

router.get("/", async (req, res, next) => {
  const users = await userService.findAll();
  res.status(200).json(users);
});

router.post("/signup", async (req, res, next) => {
  // const user = req.body;
  const { userId, password } = req.body;

  if (!(userId && password)) {
    return res.status(400).json({ message: "Bad Request", result: {} });
  }

  try {
    const user = await userService.findById(userId);
    // 유저 있으면 충돌
    if (user) {
      return res.status(409).json({ message: "Conflict", result: {} });
    }

    // 회원 가입 하기
    const newUser = await userService.create({ userId, password });

    return res.status(201).json({ message: "Success", result: {} });
  } catch (err) {
    next(new Error(err));
  }
});

router.post("/signin", async (req, res, next) => {
  const { userId, password } = req.body;

  if (!(userId && password)) {
    return res.status(400).json({ message: "Bad Request", result: {} });
  }

  try {
    const user = await userService.find({ userId, password });

    // 유저 없으면 로그인 실패
    if (!user) {
      return res.status(401).json({ message: "Unauthorized", result: {} });
    }

    return res
      .cookie("userId", user.userId)
      .status(200)
      .json({ message: "Success", result: {} });
  } catch (err) {
    next(new Error(err));
  }
});

module.exports = router;
