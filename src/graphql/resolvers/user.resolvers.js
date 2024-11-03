const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");

const configs = require("./../../configENV");
const { userModel } = require("../../db");
const { registerValidator } = require("../../utils/validators/register");
const checkAuth = require("../../utils/checkAuth");

module.exports = {
  localRegister: async (args, context) => {
    const { fullname, username, email, password, phone } = args;
    await registerValidator.validate(
      { fullname, username, email, password, phone },
      { abortEarly: false }
    );

    const checkExist = await userModel.findOne({
      where: {
        [Op.or]: [{ username }, { email }, { phone }],
      },
    });
    if (checkExist) {
      throw new Error("اطلاعات وارد شده تکراری است.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const token = jwt.sign(
      { username, email },
      configs.token.accessTokenSecretKey,
      {
        expiresIn: configs.token.accessTokenExpireTime,
      }
    );

    const newUser = new userModel({
      fullname,
      username,
      email,
      password: hashedPassword,
      phone,
    });
    await newUser.save();

    return {
      token,
      user: { fullname, username, email, phone },
    };
  },
  localLogin: async (args, context) => {
    const { phone, password } = args;

    const user = await userModel.findOne({
      where: {
        phone,
      },
      raw: true,
    });
    if (!user) {
      throw new Error("اطلاعات وارد شده معتبر نیست.");
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new Error("اطلاعات وارد شده معتبر نیست.");
    }

    const token = jwt.sign(
      { username: user.username, email: user.email },
      configs.token.accessTokenSecretKey,
      {
        expiresIn: configs.token.accessTokenExpireTime,
      }
    );

    delete user.password;
    return {
      token,
      user: user,
    };
  },
  users: async (args, context) => {
    const currentUser = await checkAuth(context);
    if (currentUser.role !== "admin") {
      throw new Error("دسترسی غیر مجاز.");
    }
    const users = await userModel.findAll({ raw: true });
    return users;
  },
  user: async (args, context) => {
    const currentUser = await checkAuth(context);
    if (currentUser.role !== "admin") {
      throw new Error("دسترسی غیر مجاز.");
    }

    const { id } = args;
    const user = await userModel.findOne({
      where: {
        id,
      },
      raw: true,
    });
    return user;
  },
  banUser: async (args, context) => {
    const currentUser = await checkAuth(context);
    if (currentUser.role !== "admin") {
      throw new Error("دسترسی غیر مجاز.");
    }

    const { id } = args;
    const user = await userModel.destroy({
      where: {
        id,
      },
      raw: true,
    });

    delete user.password;
    return user;
  },
};
