const { DataTypes } = require("sequelize");

const provinceModel = (sequelize) => {
  const model = sequelize.define(
    "provinces",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      statistics_code: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      timestamps: true,
      tablename:"provinces"
    }
  );
  return model;
};

module.exports = provinceModel;
