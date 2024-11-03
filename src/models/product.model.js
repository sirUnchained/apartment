const { DataTypes } = require("sequelize");

const productModel = (sequelize) => {
  const model = sequelize.define(
    "products",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      house_code: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      slug: {
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      house_type: {
        type: DataTypes.ENUM([
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
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      land_area: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      floors: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 1,
      },
      units_per_floor: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: 1,
      },
      unit_price: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      total_price: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      has_open: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      has_parking: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      has_warehouse: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      has_balcony: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      has_gas: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      has_electricity: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      has_water: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      is_rent: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      x_axis: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      y_axis: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      category: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
          model: "categories",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      creator: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
          model: "users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      city: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
          model: "cities",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      province: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
          model: "provinces",
          key: "id",
        },
        onDelete: "CASCADE",
      },
    },
    {
      timestamps: true,
      tablename: "products",
    }
  );
  return model;
};

module.exports = productModel;
