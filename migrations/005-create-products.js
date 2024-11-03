"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
      },
      house_code: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
      title: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
      slug: {
        type: Sequelize.STRING(150),
        allowNull: false,
        unique: true,
      },
      description: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      house_type: {
        type: Sequelize.ENUM([
          "office",
          "commercial",
          "residential",
          "shop",
          "garden",
        ]),
        defaultValue: "residential",
        allowNull: false,
      },
      document_status: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      land_area: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      age: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      floors: {
        type: Sequelize.INTEGER.UNSIGNED,
        defaultValue: 1,
      },
      units_per_floor: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: 1,
      },
      unit_price: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      total_price: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      has_open: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      has_parking: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      has_warehouse: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      has_balcony: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      has_gas: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      has_electricity: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      has_water: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      is_rent: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      x_axis: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      y_axis: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      category: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: "categories",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      creator: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: "users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      city: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: "cities",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      province: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: "provinces",
          key: "id",
        },
        onDelete: "CASCADE",
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
    await queryInterface.dropTable("products");
  },
};
