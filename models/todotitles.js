"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class todoTitles extends Model {
    static associate(models) {
      todoTitles.belongsTo(models.users, {
        foreignKey: "userId",
        targetKey: "id",
      });

      todoTitles.hasMany(models.todoItems, {
        foreignKey: "titleId",
        sourceKey: "id",
      });
    }
  }

  todoTitles.init(
    {
      userId: DataTypes.STRING,
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "todoTitles",
    }
  );
  return todoTitles;
};
