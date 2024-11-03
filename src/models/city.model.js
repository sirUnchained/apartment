const { DataTypes } = require("sequelize");

const cityModel = (sequelize) => {
  const model = sequelize.define(
    "cities",
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
      city_type: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
      },
      provinces: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
          model: "provinces",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      county: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
      },
      statistics_code: {
        type: DataTypes.STRING(50),
      },
      section: {
        type: DataTypes.INTEGER.UNSIGNED,
      },
      description: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      timestamps: true,
      tablename:"cities"
    }
  );
  return model;
};

module.exports = cityModel;
