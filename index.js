import express from "express";
import expressGQL from "express-graphql";
import { buildSchema } from "graphql";
import bodyParser from "body-parser";
import fs from "fs";
import mutations from "./mutations";
import mongoose from "mongoose";

const schema = fs.readFileSync("./schema.gql", "utf-8");

const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 5000;

app.use(
  "/graphql",
  expressGQL({
    schema: buildSchema(schema),
    rootValue: mutations,
    graphiql: true
  })
);
mongoose
  .connect(
    "mongodb://tushar:mynameisjeff123@ds127704.mlab.com:27704/graphql",
    { useNewUrlParser: true }
  )
  .then(() => {
    app.listen(PORT, () => console.log(`PORT is running on ${PORT}`));
  });
