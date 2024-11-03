const { DataTypes } = require("sequelize");

const categoryModel = (sequelize) => {
  const model = sequelize.define(
    "categories",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      icon: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      creator: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
          model: "users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
    },
    {
      timestamps: true,
      tablename:"categories"
    }
  );
  return model;
};

module.exports = categoryModel;
