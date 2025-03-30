import express, { json } from "express";
import config from "config";
import sequelize from "./db/sequelize";
import companiesRouter from "./routers/companies";
import serversRouter from "./routers/servers";
import errorLogger from "./middlewares/error/error-logger";
import errorResponder from "./middlewares/error/error-responder";
import notFound from "./middlewares/not-found";
import cors from "cors";
import fileUpload from "express-fileupload";

const port = config.get<string>("app.port");
const name = config.get<string>("app.name");
const force = config.get<boolean>("sequelize.sync.force");

const app = express();

(async () => {
  await sequelize.sync({ force });

  // Middlewares
  app.use(cors()); // allow any client to use this server
  app.use(json()); // middleware to extract the post/put/patch data in JSON format
  app.use(fileUpload()); // middleware to handle file uploads

  // Routers
  app.use("/api/companies", companiesRouter);
  app.use("/api/servers", serversRouter);

  // Special notFound middleware
  app.use(notFound);

  // Error middleware
  app.use(errorLogger);
  app.use(errorResponder);

  // app.listen(3000, () => {
  //   console.log("Server is running on port 3000...");
  // });

  // Start the server
  app.listen(port, () => console.log(`${name} started on port ${port}...`));
})();
