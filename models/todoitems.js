"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class todoItems extends Model {
    static associate(models) {
      todoItems.belongsTo(models.todoTitles, {
        foreignKey: "titleId",
        targetKey: "id",
      });
    }
  }

  todoItems.init(
    {
      titleId: DataTypes.INTEGER,
      item: DataTypes.STRING,
      property: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "todoItems",
      charset: "utf8",
    }
  );
  return todoItems;
};
