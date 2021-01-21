"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class todoItems extends Model {
    static associate(models) {
      todoItems.belongsToMany(models.todoTitles, {
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
    }
  );
  return todoItems;
};
