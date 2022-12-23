import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Logger from "./shared/library/Logger";
import responseTime from "response-time";
import userRoutes from "./modules/user/user.controller";

export class App {
  public express: express.Application;
  logger: Logger;

  public constructor() {
    this.express = express();
    dotenv.config();
    this.logger = new Logger({
      type: "HEX",
      green: "#47F90A",
      blue: "#0742FC",
      yellow: "#FCE207",
      red: "#FC0707",
    });
    this.middlewares();
    this.routes();
    this.iniciateServer();
    // this.setRoutes()
  }

  private middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use(
      responseTime((req, res, timer) => {
        res.on("finish", () => {
          /* Log the response*/
          this.logger.response(res, req, timer.toFixed(2));
        });
      })
    );
  }

  private async database(): Promise<boolean> {
    try {
      await mongoose.connect(process.env.MONGO_URL || "");
      Logger.info(`connect on ${process.env.MONGO_URL}`);
      return true;
    } catch (error) {
      Logger.error(error);
      return false;
    }
  }

  private routes(): void {
    this.express.get("/healthcheck", (req, res) => {
      res.status(200).json({
        message: `API Online: ${new Date().toLocaleString()}`,
      });
      //   return res.send({ message: "Hello World" });
    });
  }

  async iniciateServer() {
    const successMongo = await this.database();
    if (successMongo) {
      const port = process.env.PORT || 1337;
      this.express.listen(port);
      Logger.info(`Server is running on port ${port}`);
    }
  }

  async setRoutes() {
    this.express.use(userRoutes);
  }
}

export default new App().express;
