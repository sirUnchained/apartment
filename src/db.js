const { Sequelize } = require("Sequelize");
const configs = require("./configENV");

const db = new Sequelize({
  database: configs.db.name,
  username: configs.db.username,
  password: configs.db.password,
  dialect: configs.db.dialect,
  host: configs.db.host,
  // port: configs.db.port,
  logging: console.log(`connected to database.`),
});

const userModel = require("./models/users.model")(db);
const projectModel = require("./models/project.model")(db);
const categoryModel = require("./models/category.model")(db);
const provinceModel = require("./models/province.model")(db);
const cityModel = require("./models/city.model")(db);
const productModel = require("./models/product.model")(db);
const favoritModel = require("./models/favorites.model")(db);

userModel.hasMany(projectModel, {
  foreignKey: "creator",
  onDelete: "CASCADE",
});
projectModel.belongsTo(userModel, {
  foreignKey: "creator",
  // as: "creator",
});

userModel.hasMany(categoryModel, {
  foreignKey: "creator",
  onDelete: "CASCADE",
});
categoryModel.belongsTo(userModel, {
  foreignKey: "creator",
});

userModel.hasMany(productModel, {
  foreignKey: "creator",
  onDelete: "CASCADE",
});
productModel.belongsTo(userModel, {
  foreignKey: "creator",
});

categoryModel.hasMany(productModel, {
  foreignKey: "category",
  onDelete: "CASCADE",
});
productModel.belongsTo(categoryModel, {
  foreignKey: "category",
  as: "category_id",
});

cityModel.hasMany(productModel, {
  foreignKey: "city",
  onDelete: "CASCADE",
});
productModel.belongsTo(cityModel, {
  foreignKey: "city",
  as: "city_id",
});

provinceModel.hasMany(productModel, {
  foreignKey: "province",
  onDelete: "CASCADE",
});
productModel.belongsTo(provinceModel, {
  foreignKey: "province",
  as: "province_id",
});

module.exports = {
  db,
  userModel,
  projectModel,
  categoryModel,
  provinceModel,
  cityModel,
  productModel,
  favoritModel,
};
