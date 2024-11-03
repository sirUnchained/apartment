const { DataTypes } = require("sequelize");

const favoritModel = (sequelize) => {
  const model = sequelize.define(
    "favorites",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      user: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
          model: "users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      product: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
          model: "products",
          key: "id",
        },
        onDelete: "CASCADE",
      },
    },
    {
      timestamps: true,
      tablename: "favorites",
    }
  );
  return model;
};

module.exports = favoritModel;
