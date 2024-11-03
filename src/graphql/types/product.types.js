exports.product = `
  type product{
    id: Int
    house_code: String
    title: String
    slug: String
    description: String
    house_type: String
    document_status: String
    address: String
    land_area: String
    age: Int
    floors: Int
    units_per_floor: Int
    unit_price: Int
    total_price: Int
    has_open: Boolean
    has_parking: Boolean
    has_warehouse: Boolean
    has_balcony: Boolean
    has_gas: Boolean
    has_electricity: Boolean
    has_water: Boolean
    is_rent: Boolean
    x_axis: Float
    y_axis: Float
    category: category
    creator: user
    city: city
    province: province
    createdAt: String
    updatedAt: String
  }
`;

exports.inputProduct = `
  input inputProduct{
    house_code: String!
    title: String!
    description: String
    house_type: houseType!
    document_status: String!
    address: String!
    land_area: String!
    age: Int!
    floors: Int
    units_per_floor: Int
    unit_price: Int!
    total_price: Int!
    has_open: Boolean
    has_parking: Boolean
    has_warehouse: Boolean
    has_balcony: Boolean
    has_gas: Boolean
    has_electricity: Boolean
    has_water: Boolean
    is_rent: Boolean!
    x_axis: Float!
    y_axis: Float!
    category: Int!
    city: Int!
    province: Int!
  }
`;

exports.houseType = `
  enum houseType{
    office
    commercial
    residential
    shop
    garden
  }
`;