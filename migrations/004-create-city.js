"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("cities", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      city_type: {
        type: Sequelize.INTEGER.UNSIGNED,
        defaultValue: 0,
      },
      provinces: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: "provinces",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      county: {
        type: Sequelize.INTEGER.UNSIGNED,
        defaultValue: 0,
      },
      statistics_code: {
        type: Sequelize.STRING(50),
      },
      section: {
        type: Sequelize.INTEGER.UNSIGNED,
      },
      description: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("cities");
  },
};
