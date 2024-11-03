const configs = require("./configENV");

module.exports = {
  development: {
    username: configs.db.username,
    password: configs.db.password,
    database: configs.db.name,
    host: configs.db.host,
    dialect: configs.db.dialect || "mysql",
  },
  test: {
    username: configs.db.username,
    password: configs.db.password,
    database: configs.db.name,
    host: configs.db.host,
    dialect: configs.db.dialect || "mysql",
  },
  production: {
    username: configs.db.username,
    password: configs.db.password,
    database: configs.db.name,
    host: configs.db.host,
    dialect: configs.db.dialect || "mysql",
  },
};
