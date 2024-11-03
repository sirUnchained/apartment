const { db } = require("./db");
const redis = require("./redis");
const configs = require("./configENV");
const app = require("./app");

async function run() {
  try {
    await db.authenticate();
    app.listen(configs.port, () => {
      console.log(`app listen on port ${configs.port}.`);
    });
  } catch (error) {
    await db.close();
    redis.disconnect();
    throw error;
  }
}
run();
