const { cityModel, provinceModel } = require("../../db");

module.exports = {
  province: async (args, context) => {
    const province = args.province || 8;
    const cities = await cityModel.findAll({
      where: {
        provinces: province,
      },
      raw: true,
    });

    return cities;
  },
  provinces: async (args, context) => {
    const provinces = await provinceModel.findAll({
      raw: true,
    });

    return provinces;
  },
};
