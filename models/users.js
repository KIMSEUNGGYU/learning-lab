"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    static associate(models) {}
  }

  users.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,
      },
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "users",
      charset: "utf8",
    }
  );

  users.getUser = async ({ ...param }) => await users.findOne({ where: param });

  users.signup = async (userId, password) =>
    await users.create({ userId, password });

  return users;
};
