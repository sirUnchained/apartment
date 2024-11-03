const { Op } = require("sequelize");
const { productModel, categoryModel, cityModel } = require("../../db");
const checkAuth = require("../../utils/checkAuth");

module.exports = {
  products: async (args, context) => {
    const {
      floors,
      units_per_floor,
      unit_price,
      total_price,
      land_area,
      city,
      limit,
      page,
      is_rent,
    } = args;

    const limitation = limit || 3;
    const products = await productModel.findAll({
      where: {
        floors: {
          [Op.gte]: floors || 1,
        },
        units_per_floor: {
          [Op.gte]: units_per_floor || 1,
        },
        unit_price: {
          [Op.gte]: unit_price || 0,
        },
        total_price: {
          [Op.gte]: total_price || 0,
        },
        land_area: {
          [Op.gte]: land_area || 0,
        },
        city: city,
        is_rent: is_rent,
      },
      raw: true,
      limit: limitation,
      offset: (page - 1) * limitation,
    });

    return products;
  },
  product: async (args, context) => {
    const { id } = args;

    const product = await productModel.findOne({
      where: {
        id: id,
      },
      raw: true,
    });

    return product;
  },
  addProduct: async (args, context) => {
    const currentUSer = await checkAuth(context);

    const {
      house_code,
      title,
      slug = title?.replace(/\s|_|\./g, "-"),
      description,
      house_type = house_type,
      document_status,
      address,
      land_area,
      age,
      floors = floors || 1,
      units_per_floor = units_per_floor || 1,
      unit_price,
      total_price,
      has_open,
      has_parking,
      has_warehouse,
      has_balcony,
      has_gas,
      has_electricity,
      has_water,
      is_rent,
      x_axis,
      y_axis,
      category,
      city,
      province,
    } = args.input;

    const chekcCategory = await categoryModel.findOne({
      where: {
        id: category,
      },
    });
    if (!chekcCategory) {
      throw new Error("دسته بندی وارد شده معتبر نیست.");
    }

    const checkCity = await cityModel.findOne({
      where: {
        id: city,
      },
      raw: true,
    });
    if (checkCity && checkCity.province === province) {
      throw new Error("استان یا شهر وارد شده معتبر نیست.");
    }

    const newProduct = new productModel({
      house_code,
      title,
      slug,
      description,
      house_type,
      document_status,
      address,
      land_area,
      age,
      floors,
      units_per_floor,
      unit_price,
      total_price,
      has_open: has_open ?? false,
      has_parking: has_parking ?? false,
      has_warehouse: has_warehouse ?? false,
      has_balcony: has_balcony ?? false,
      has_gas: has_gas ?? false,
      has_electricity: has_electricity ?? false,
      has_water: has_water ?? false,
      is_rent,
      x_axis,
      y_axis,
      category,
      creator: currentUSer.id,
      city,
      province,
    });
    await newProduct.save();

    return newProduct;
  },
};
