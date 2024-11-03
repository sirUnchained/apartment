const { categoryModel, userModel } = require("../../db");
const checkAuth = require("../../utils/checkAuth");

module.exports = {
  categories: async (args, context) => {
    const cats = await categoryModel.findAll({
      raw: true,
    });
    return cats;
  },
  addCategory: async (args, context) => {
    const currentUser = await checkAuth(context);
    if (currentUser.role !== "admin") {
      throw new Error("دسترسی غیر مجاز.");
    }

    const { title, icon } = args;
    const isExist = await categoryModel.findOne({
      where: {
        title,
      },
      raw: true,
    });
    if (isExist) {
      throw new Error("دسته بندی از قبل وجود دارد.");
    }

    const newCategory = new categoryModel({
      title,
      icon: icon || "fa fa-null",
      creator: currentUser.id,
    });
    await newCategory.save();

    return newCategory;
  },
};
