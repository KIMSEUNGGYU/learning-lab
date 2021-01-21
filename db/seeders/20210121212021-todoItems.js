"use strict";

const createdAt = new Date();
const updatedAt = new Date();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("todoItems", [
      {
        titleId: 1,
        item: "프린터",
        property: true,
        createdAt,
        updatedAt,
      },
      {
        titleId: 1,
        item: "124 나라의 숫자",
        property: false,
        createdAt,
        updatedAt,
      },
      {
        titleId: 1,
        item: "멀쩡한 사각형",
        property: false,
        createdAt,
        updatedAt,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};
