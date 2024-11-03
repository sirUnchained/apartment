const { createHandler } = require("graphql-http/lib/use/express");
const helmet = require("helmet");
const cors = require("cors");
const express = require("express");
const app = express();

const schema = require("./graphql/schema");
const resolvers = require("./graphql/index.resolvers");

app.use(express.static("./../public"));
app.use(helmet());
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.use(
  "/api",
  createHandler({
    schema,
    rootValue: resolvers,
    context: (req) => req,
  })
);

module.exports = app;
