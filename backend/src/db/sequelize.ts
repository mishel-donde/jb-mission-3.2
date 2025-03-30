import { Sequelize } from "sequelize-typescript";
import config from "config";
import Companies from "../models/companies";
import Server from "./../models/server";

const logging = config.get<boolean>("sequelize.logging") ? console.log : false;

const sequelize = new Sequelize({
  models: [Server, Companies],
  dialect: "mysql",
  ...config.get("db"),
  logging,
});

export default sequelize;
