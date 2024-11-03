const userResolvers = require("./resolvers/user.resolvers");
const categoryResolvers = require("./resolvers/category.resolvers");
const citiesResolvers = require("./resolvers/city.resolvers");
const productResolver = require("./resolvers/product.resolvers");
const projectResolver = require("./resolvers/project.resolvers");

const resolvers = {
  ...userResolvers,
  ...categoryResolvers,
  ...citiesResolvers,
  ...productResolver,
  ...projectResolver,
};

module.exports = resolvers;
