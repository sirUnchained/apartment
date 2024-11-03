const jwt = require("jsonwebtoken");

const { userModel } = require("../db");
const configs = require("../configENV");

async function checkAuth(req) {
  try {
    const bearerToken = req.headers.authorization;
    if (bearerToken) {
      const token = bearerToken.replace("Bearer ", "");
      const tokenData = jwt.verify(token, configs.token.accessTokenSecretKey);

      const user = await userModel.findOne({
        where: {
          email: tokenData.email,
        },
        raw: true,
      });
      if (!user) {
        throw new Error("لطفا برای ادامه دادن وارد شوید.");
      }

      delete user.password;

      return user;
    }

    throw new Error("لطفا برای ادامه دادن وارد شوید.");
  } catch (error) {
    throw new Error("باید برای ادامه دادن وارد شوید.");
  }
}

module.exports = checkAuth;
