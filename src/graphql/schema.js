const { buildSchema } = require("graphql");
const category = require("./types/category.types");
const city = require("./types/city.types");
const favorite = require("./types/favorite.types");
const product = require("./types/product.types");
const province = require("./types/province.type");
const user = require("./types/user.types");
const project = require("./types/project.types");

const schema = buildSchema(`
  ${category.category}
  ${city.city}
  ${favorite.favorite}
  ${product.houseType}
  ${product.inputProduct}
  ${product.product}
  ${province.province}
  ${user.user}
  ${user.auth}
  ${project.project}

  type RootQuery {
    users: [user]
    user(id:Int): user
    categories: [category]
    province(id: Int!): [city]
    provinces: [province]
    products(floors:Int, units_per_floor:Int, unit_price:Int, total_price:Int, land_area:Int, city:Int!, page: Int!, limit: Int, is_rent: Int!): [product]
    product(id: Int!): product
    projects: [project]
    project(id: Int!): project
  }

  type RootMutation{
    localRegister(fullname:String!, username:String!, email:String!, password:String!, phone:String!): auth
    localLogin(phone:String!, password:String!): auth
    banUser(id: Int!): user
    addCategory(title:String!, icon: String): category
    addProduct(input: inputProduct): product
    newProject(title: String!, info: String!, description: String!): project
  }

  schema{
    query: RootQuery
    mutation: RootMutation
  }
`);

module.exports = schema;

`
    cities(province: Int): [city]

`