import express from "express";
import http from "http";
import mongoose from "mongoose";
import { config } from "./configs/config";
import Logger from "./shared/library/Logger";

export const app = express();

/*Connection to mongo */
mongoose
  .connect(config.mongo.url, { retryWrites: true, w: "majority" })
  .then(() => {
    Logger.info(`connect on ${config.mongo.url}`);
    StartServer();
  })
  .catch((error) => {
    Logger.error("Unable to connect:");
    Logger.error(error.message);
  });

/* Only start server if mongo connects */
const StartServer = () => {
  app.use((req, res, next) => {
    /* Log the Request */
    Logger.info(
      `[${req.method}]: - Url: [${req.url}] - IP:[${req.socket.remoteAddress}]`
    );

    res.on("finish", () => {
      /* Log the response*/
      Logger.info(
        `[${req.method}]: - Url: [${req.url}] - Status: [${res.statusCode}]`
      );
    });
    next();
  });

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Request-With,Content-Type,Accept,Authorization"
    );
    if (req.method == "OPTIONS") {
      res.header(
        "Access-Control-Allow-Methods",
        "PUT, POST, PATCH, DELETE, GET"
      );
      return res.status(200).json({});
    }
    next();
  });

  /* Routes */

  /* HealthCheck */
  app.get("/healthcheck", (req, res, next) => {
    res.status(200).json({
      message: `API Online: ${new Date().toLocaleString()}`,
    });
  });

  /* Error handlig */
  app.use((req, res, next) => {
    const error = new Error("Route not found");
    return res.status(404).json({ message: error.message });
  });
  http
    .createServer(app)
    .listen(config.server.port, () =>
      Logger.info(`Server is running on port ${config.server.port}`)
    );
};
