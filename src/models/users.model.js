const { DataTypes } = require("sequelize");

const userModel = (sequelize) => {
  const model = sequelize.define(
    "users",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      fullname: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      role: {
        type: DataTypes.ENUM(["admin", "user"]),
        defaultValue: "user",
        allowNull: false,
      },
      provider: {
        type: DataTypes.ENUM(["google", "local"]),
        defaultValue: "local",
      },
    },
    {
      timestamps: true,
      tableName: "users",
    }
  );

  return model;
};

module.exports = userModel;
