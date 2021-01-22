"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class todoTitles extends Model {
    static associate(models) {
      todoTitles.belongsTo(models.users, {
        foreignKey: "userId",
        targetKey: "userId",
      });
    }
  }

  todoTitles.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.STRING,
      },
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "todoTitles",
      charset: "utf8",
    }
  );
  return todoTitles;
};
